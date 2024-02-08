(ns parser
  (:require [clojure.java.io :as io]
            [clj-yaml.core :as yaml]
            [clojure.set :as set]
            [cheshire.core :as json]
            [clojure.string :as string]
            [next.jdbc :as jdbc]
            [db :as db]))

(defn parse-markdown [content]
  (let [yaml-part (re-find #"(?s)---\n(.*?)\n---" content)
        yaml-contents (yaml/parse-string (second yaml-part))
        body (second (re-find #"(?s)\n# .*\n\n(.*)" content))]
    (merge yaml-contents {:body body})))

(defn convert-to-db-format [parsed-content]
  (let [{:keys [pageid name tags images associated_links]} parsed-content
        images-json (json/generate-string images)
        links-json (json/generate-string associated_links)
        tags-string (string/join ", " tags)] ;; Join the vector of tags
    {
     :pageid pageid
     :name name
     :images images-json
     :associated_links links-json
     :tags tags-string
     :markdown_text (:body parsed-content)}))

(defn get-markdown-files [directory]
  (filter #(re-matches #".*\.md$" (.getName %))
          (file-seq (io/file directory))))

(defn create-projects-table []
  (jdbc/execute! db/db-spec
                 ["CREATE TABLE IF NOT EXISTS projects (
                   pageid VARCHAR PRIMARY KEY,
                   name VARCHAR,
                   images JSON,
                   associated_links JSON,
                   tags VARCHAR,
                   markdown_text TEXT)"]))

(defn insert-into-db [data]
  (jdbc/execute! db/db-spec
                 ["INSERT INTO projects (pageid, name, images, associated_links, tags, markdown_text)
                   VALUES (?, ?, ?::json, ?::json, ?, ?)
                   ON CONFLICT (pageid)
                   DO UPDATE SET images = EXCLUDED.images,
                   associated_links = EXCLUDED.associated_links,
                   tags = EXCLUDED.tags,
                   markdown_text = EXCLUDED.markdown_text"
                  (:pageid data) (:name data) (:images data) (:associated_links data) (:tags data) (:markdown_text data)]))

;; (defn process-markdown-files [directory]
;;   (doseq [file (get-markdown-files directory)]
;;     (let [content (slurp (.getAbsolutePath file))
;;           parsed-content (parse-markdown content)
;;           db-data (convert-to-db-format parsed-content)]
;;       (insert-into-db db-data))))

(defn fetch-existing-pageids []
  (map :pageid (jdbc/execute! db/db-spec ["SELECT pageid FROM projects"])))

(defn delete-orphans [orphans]
  (doseq [orphan orphans]
    (jdbc/execute! db/db-spec ["DELETE FROM projects WHERE pageid = ?" orphan])))

(defn process-markdown-files [directory]
  (let [processed-pageids (atom [])] ; Atom to store processed pageids
    ; Process files and collect pageids
    (doseq [file (get-markdown-files directory)]
      (let [content (slurp (.getAbsolutePath file))
            parsed-content (parse-markdown content)
            db-data (convert-to-db-format parsed-content)]
        (swap! processed-pageids conj (:pageid parsed-content)) ; Add pageid to atom
        (insert-into-db db-data)))
    ; Fetch existing pageids from DB and find orphans
    (let [existing-pageids (fetch-existing-pageids)
          orphans (set/difference (set existing-pageids) (set @processed-pageids))]
      (delete-orphans orphans)))) ; Delete orphaned entries

(process-markdown-files "/bases/")
