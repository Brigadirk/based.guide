(ns eventparser
  (:require [clojure.java.io :as io]
            [utils :as utils]
            [cheshire.core :as json]
            [next.jdbc :as jdbc]
            [clojure.string :as str]
            [db :as db])
  (:import [java.sql Date]
           [java.time LocalDate]
           [java.time.format DateTimeFormatter]))

(defn create-events-table []
  (jdbc/execute! db/db-spec
                 ["CREATE TABLE IF NOT EXISTS events (
                   eventid VARCHAR PRIMARY KEY,
                   name VARCHAR,
                   startdate DATE,
                   enddate DATE,
                   active BOOLEAN DEFAULT true,
                   location JSON,
                   link VARCHAR,
                   tags VARCHAR)"]))

(def date-formatters
  [(DateTimeFormatter/ofPattern "yyyy-MM-dd")
   (DateTimeFormatter/ofPattern "dd-MM-yyyy")
   (DateTimeFormatter/ofPattern "MM/dd/yyyy")])

(defn parse-date [date-str]
  (when date-str
    (some (fn [formatter]
            (try
              (LocalDate/parse date-str formatter)
              (catch Exception _
                nil)))
          date-formatters)))

(defn- to-sql-date [date-str]
  (when-let [local-date (parse-date date-str)]
    (Date/valueOf local-date)))

(defn insert-yaml-into-db [data]
  (jdbc/execute! db/db-spec
                 ["INSERT INTO events (eventid, name, startdate, enddate, location, link, tags, active)
                   VALUES (?, ?, ?, ?, ?::json, ?, ?, true)
                   ON CONFLICT (eventid) DO UPDATE
                   SET name = EXCLUDED.name,
                       startdate = EXCLUDED.startdate,
                       enddate = EXCLUDED.enddate,
                       location = EXCLUDED.location,
                       link = EXCLUDED.link,
                       tags = EXCLUDED.tags,
                       active = EXCLUDED.active"
                  (:eventid data)
                  (:name data)
                  (to-sql-date (:startdate data))
                  (to-sql-date (:enddate data))
                  (:location data)
                  (:link data)
                  (:tags data)]))

(defn get-yaml-files [directory]
  (filter #(re-matches #".*\.yaml$" (.getName %))
          (file-seq (io/file directory))))

(defn convert-yaml-to-db-format [parsed-content]
  (let [{:keys [eventid name startdate enddate location link tags]} parsed-content
        location-json (json/generate-string location)
        tags-string (str/join ", " tags)]
    {:eventid eventid
     :name name
     :startdate startdate
     :enddate enddate
     :location location-json
     :link link
     :tags tags-string}))

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