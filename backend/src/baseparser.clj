(ns baseparser
  (:require [clojure.java.io :as io]
            [cheshire.core :as json]
            [utils :as utils]
            [next.jdbc :as jdbc]
            [clojure.string :as str]
            [db :as db]
            [markdown.core :as md]))

(defn create-projects-table []
  (jdbc/execute! db/db-spec
                 ["CREATE TABLE IF NOT EXISTS projects (
                   pageid VARCHAR PRIMARY KEY,
                   name VARCHAR,
                   active BOOLEAN DEFAULT true,
                   images JSON,
                   associated_links JSON,
                   tags VARCHAR,
                   markdown_text TEXT)"]))

(defn insert-into-db [data]
  (jdbc/execute! db/db-spec
                 ["INSERT INTO projects (pageid, name, images, associated_links, tags, markdown_text, active)
                   VALUES (?, ?, ?::json, ?::json, ?, ?, true)
                   ON CONFLICT (pageid) DO UPDATE
                   SET name = EXCLUDED.name,
                       images = EXCLUDED.images,
                       associated_links = EXCLUDED.associated_links,
                       tags = EXCLUDED.tags,
                       markdown_text = EXCLUDED.markdown_text,
                       active = EXCLUDED.active"
                  (:pageid data) (:name data) (:images data) (:associated_links data) (:tags data) (:markdown_text data)]))

(defn get-markdown-files [directory]
  (filter #(re-matches #".*\.md$" (.getName %))
          (file-seq (io/file directory))))

(defn parse-markdown [content]
  (let [yaml-part (re-find #"(?s)---\n(.*?)\n---" content)
        yaml-contents (utils/parse-yaml (second yaml-part))
        body (second (re-find #"(?s)\n# .*?\n\n(.*)" content))
        parsed-body (md/md-to-html-string body)]
    (merge yaml-contents {:body parsed-body})))

(defn convert-to-db-format [parsed-content]
  (let [{:keys [pageid name tags images associated_links]} parsed-content
        images-json (json/generate-string images)
        links-json (json/generate-string associated_links)
        tags-string (str/join ", " tags)]
    {:pageid pageid
     :name name
     :images images-json
     :associated_links links-json
     :tags tags-string
     :markdown_text (:body parsed-content)}))

(defn process-markdown-files [directory]
  (utils/mark-entries-as-inactive "projects")
  (doseq [file (get-markdown-files directory)]
    (let [content (utils/read-file (.getAbsolutePath file))
          parsed-content (parse-markdown content)
          db-data (convert-to-db-format parsed-content)]
      (insert-into-db db-data)))
  (utils/delete-inactive-entries "projects"))

;; Example usage
; (process-markdown-files "/bases")
