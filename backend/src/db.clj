(ns db
  (:require [next.jdbc :as jdbc]))

(def db-spec {:dbtype "postgresql"
              :dbname "basedguide"
              :user "dirk"
              :password "database"})
