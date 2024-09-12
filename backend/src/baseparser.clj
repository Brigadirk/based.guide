(ns baseparser
  (:require [clojure.java.io :as io]
            [cheshire.core :as json]
            [utils :as utils]
            [next.jdbc :as jdbc]
            [clojure.string :as str]
            [db :as db]
            [markdown.core :as md]
            [hickory.core :as hickory]))

(defn create-projects-table []
  (jdbc/execute! db/db-spec
                 ["CREATE TABLE IF NOT EXISTS projects (
                   pageid VARCHAR PRIMARY KEY,
                   name VARCHAR,
                   active BOOLEAN DEFAULT true,
                   images JSON,
                   associated_links JSON,
                   tags VARCHAR,
                   hiccup_text TEXT)"]))

(defn insert-into-db [data]
  (jdbc/execute! db/db-spec
                 ["INSERT INTO projects (pageid, name, images, associated_links, tags, hiccup_text, active)
                   VALUES (?, ?, ?::json, ?::json, ?, ?, true)
                   ON CONFLICT (pageid) DO UPDATE
                   SET name = EXCLUDED.name,
                       images = EXCLUDED.images,
                       associated_links = EXCLUDED.associated_links,
                       tags = EXCLUDED.tags,
                       hiccup_text = EXCLUDED.hiccup_text,
                       active = EXCLUDED.active"
                  (:pageid data) (:name data) (:images data) (:associated_links data) (:tags data) (:hiccup_text data)]))

(defn get-markdown-files [directory]
  (filter #(re-matches #".*\.md$" (.getName %))
          (file-seq (io/file directory))))

(defn add-unique-keys [hiccup]
  (let [counter (atom 0)
        traverse (fn traverse [node]
                   (cond
                     (vector? node)
                     (let [key (str "key-" (swap! counter inc))
                           [tag attrs & children] node]
                       (into [tag (assoc attrs :key key)]
                             (map traverse children)))

                     (seq? node)
                     (map traverse node)

                     (string? node)
                     node

                     :else node))]
    (traverse hiccup)))

(defn parse-markdown-into-hiccup [content]
  (let [yaml-part (re-find #"(?s)---\n(.*?)\n---" content)
        yaml-contents (utils/parse-yaml (second yaml-part))
        body (second (re-find #"(?s)\n# .*?\n\n(.*)" content))
        hiccup-body (-> body
                        md/md-to-html-string
                        hickory/parse
                        hickory/as-hiccup
                        add-unique-keys)]
    (merge yaml-contents {:body hiccup-body})))

(defn convert-to-db-format [parsed-content]
  (let [{:keys [pageid name tags images associated_links]} parsed-content]
    {:pageid pageid
     :name name
     :images (json/generate-string images)
     :associated_links (json/generate-string associated_links)
     :tags (str/join ", " tags)
     :hiccup_text (pr-str (:body parsed-content))}))

(defn process-markdown-files [directory]
  (utils/mark-entries-as-inactive "projects")
  (doseq [file (get-markdown-files directory)]
    (let [content (utils/read-file (.getAbsolutePath file))
          parsed-content (parse-markdown-into-hiccup content)
          db-data (convert-to-db-format parsed-content)]
      (insert-into-db db-data)))
  (utils/delete-inactive-entries "projects"))

;; Example usage
; (process-markdown-files "/bases")
