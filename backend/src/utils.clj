(ns utils
  (:require [next.jdbc :as jdbc]
            [yclj-yaml.core :as yaml]
            [db :as db]))

(defn read-file [filename]
  (slurp filename))

(defn parse-yaml [yaml-string]
  (yaml/parse-string yaml-string))

(defn mark-entries-as-inactive []
  (jdbc/execute! db/db-spec ["UPDATE projects SET active = false"]))

(defn delete-inactive-entries []
  (jdbc/execute! db/db-spec ["DELETE FROM projects WHERE active = false"]))