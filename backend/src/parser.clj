(ns parser
  (:require [clojure.java.io :as io]
            [clj-yaml.core :as yaml]
            [cheshire.core :as json]
            [next.jdbc :as jdbc]
            [db :as db]))

(defn read-file [filename]
  (slurp filename))

(defn parse-yaml [yaml-string]
  (yaml/parse-string yaml-string))

(defn parse-markdown [content]
  (let [yaml-part (re-find #"(?s)---\n(.*?)\n---" content)
        yaml-contents (parse-yaml (second yaml-part))
        body (second (re-find #"(?s)\n# .*\n\n(.*)" content))]
    (merge yaml-contents {:body body})))

(defn convert-to-db-format [parsed-content]
  (let [{:keys [pageid name tags images associated_links]} parsed-content
        images-json (json/generate-string images)
        links-json (json/generate-string associated_links)
        tags-string (clojure.string/join ", " tags)] ;; Join the vector of tags
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

(defn process-markdown-files [directory]
  (doseq [file (get-markdown-files directory)]
    (let [content (read-file (.getAbsolutePath file))
          parsed-content (parse-markdown content)
          db-data (convert-to-db-format parsed-content)]
      (insert-into-db db-data))))

(process-markdown-files "/bases/")
