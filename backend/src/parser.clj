(ns parser
  (:require [clojure.java.io :as io]))

(defn read-file [filename]
  (slurp filename))

(defn get-markdown-files [directory]
  (filter #(re-matches #".*\.md$" (.getName %))
          (file-seq (io/file directory))))

(defn parse-markdown [content]
  (let [yaml-part (re-find #"(?s)---\n(.*?)\n---" content)
        yaml-contents (second yaml-part)
        body (second (re-find #"(?s)\n# .*\n\n(.*)" content))]
    {:yaml yaml-contents :body body}))

(defn insert-into-db [data]
  (jdbc/execute! db-spec ["INSERT INTO projects (name, images, associated_links, tags, markdown_text) VALUES (?, ?, ?, ?, ?)"
                          (:name data) (:images data) (:associated_links data) (:tags data) (:body data)]))

(defn process-markdown-files [directory]
  (doseq [file (get-markdown-files directory)]
    (let [content (read-file (.getAbsolutePath file))
          parsed-content (parse-markdown content)
          ;; You need to convert the parsed YAML to the format expected by your database
          ;; This is a placeholder, you'll need to write the actual conversion logic
          db-data (convert-to-db-format parsed-content)]
      (insert-into-db db-data))))
