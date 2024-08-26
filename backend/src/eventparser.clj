(ns eventparser
  (:require [clojure.java.io :as io]
            [utils :as utils]
            [cheshire.core :as json]
            [next.jdbc :as jdbc]
            [clojure.string :as str]
            [db :as db]))

(defn create-events-table []
  (jdbc/execute! db/db-spec
                 ["CREATE TABLE IF NOT EXISTS events (
                   eventid VARCHAR PRIMARY KEY,
                   name VARCHAR,
                   startdate DATE,
                   enddate DATE,
                   active BOOLEAN DEFAULT true,
                   location JSON,
                   organiser VARCHAR,
                   organiserlink VARCHAR,
                   link VARCHAR,
                   tags VARCHAR)"]))

(defn insert-yaml-into-db [data]
  (jdbc/execute! db/db-spec
                 ["INSERT INTO events (eventid, name, startdate, enddate, location, organiser, organiserlink, link, tags, active)
                   VALUES (?, ?, ?::DATE, ?::DATE, ?::json, ?, ?, ?, ?, true)
                   ON CONFLICT (eventid) DO UPDATE
                   SET name = EXCLUDED.name,
                       startdate = EXCLUDED.startdate,
                       enddate = EXCLUDED.enddate,
                       location = EXCLUDED.location,
                       organiser = EXCLUDED.organiser,
                       organiserlink = EXCLUDED.organiserlink,
                       link = EXCLUDED.link,
                       tags = EXCLUDED.tags,
                       active = EXCLUDED.active"
                  (:eventid data)
                  (:name data)
                  (:startdate data)
                  (:enddate data)
                  (:location data)
                  (:organiser data)
                  (:organiserlink data)
                  (:link data)
                  (:tags data)]))

(defn get-yaml-files [directory]
  (filter #(re-matches #".*\.yaml$" (.getName %))
          (file-seq (io/file directory))))

(defn convert-yaml-to-db-format [parsed-content]
  (let [{:keys [eventid name startdate enddate location organiser organiserlink link tags]} parsed-content
        location-json (json/generate-string location)
        tags-string (str/join ", " tags)
        start-date (if (instance? java.util.Date startdate)
                     (java.sql.Date. (.getTime startdate))
                     startdate)
        end-date (if (instance? java.util.Date enddate)
                   (java.sql.Date. (.getTime enddate))
                   enddate)]
    {:eventid eventid
     :name name
     :startdate start-date
     :enddate end-date
     :location location-json
     :organiser organiser
     :organiserlink organiserlink
     :link link
     :tags tags-string}))

(defn process-yaml-files [directory]
  (create-events-table)  ; Ensure the table is created
  (utils/mark-entries-as-inactive "events")
  (doseq [file (get-yaml-files directory)]
    (let [content (utils/read-file (.getAbsolutePath file))
          parsed-content (utils/parse-yaml content)
          db-data (convert-yaml-to-db-format parsed-content)]
      (insert-yaml-into-db db-data)))
  (utils/delete-inactive-entries "events"))

;; Example usage
; (process-yaml-files "/events")
