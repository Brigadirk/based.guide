(ns eventparser
  (:require [clojure.java.io :as io]
            [utils :as utils]
            [clj-yaml.core :as yaml]
            [cheshire.core :as json]
            [next.jdbc :as jdbc]
            [clojure.string :as str]
            [db :as db]))

(defn create-events-table []
  (jdbc/execute! db/db-spec
                 ["CREATE TABLE IF NOT EXISTS projects (
                   pageid VARCHAR PRIMARY KEY,
                   name VARCHAR,
                   active BOOLEAN DEFAULT true,
                   images JSON,
                   associated_links JSON,
                   tags VARCHAR,
                   markdown_text TEXT)"]))

(defn insert-yaml-into-db [data]
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

(defn get-yaml-files [directory]
  (filter #(re-matches #".*\.yaml$" (.getName %))
          (file-seq (io/file directory))))

(defn convert-yaml-to-db-format [parsed-content]
  (let [{:keys [eventid name startdate enddate location link tags]} parsed-content
        location-json (json/generate-string location)
        tags-string (str/join ", " tags)]
    {:pageid eventid
     :name name
     :images (json/generate-string {})
     :associated_links (json/generate-string {:link link})
     :tags tags-string
     :markdown_text (str "Start Date: " startdate "\nEnd Date: " enddate "\nLocation: " location-json)}))

(defn process-yaml-files [directory]
  (utils/mark-entries-as-inactive)
  (doseq [file (get-yaml-files directory)]
    (let [content (utils/read-file (.getAbsolutePath file))
          parsed-content (utils/parse-yaml content)
          db-data (convert-yaml-to-db-format parsed-content)]
      (insert-yaml-into-db db-data)))
  (utils/delete-inactive-entries))

;; Example usage
; (process-yaml-files "/events")
