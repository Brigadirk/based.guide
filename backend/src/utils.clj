(ns utils
  (:require [next.jdbc :as jdbc]
            [clj-yaml.core :as yaml]
            [db :as db]))

(defn read-file [filename]
  (slurp filename))

(defn parse-yaml [yaml-string]
  (yaml/parse-string yaml-string))

(defn mark-entries-as-inactive [table]
  (jdbc/execute! db/db-spec [(str "UPDATE " table " SET active = false")]))

(defn delete-inactive-entries [table]
  (jdbc/execute! db/db-spec [(str "DELETE FROM " table " WHERE active = false")]))