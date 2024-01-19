;; (def db-spec {:dbtype "postgresql"
;;               :dbname "basedguide"
;;               :user "dirk"
;;               :password "database"})

(ns db
  (:require [next.jdbc :as jdbc]
            [clojure.java.io :as io]))

(def db-spec {:dbtype "postgresql"
              :dbname (System/getenv "DB_NAME")
              :user (System/getenv "DB_USER")
              :password (System/getenv "DB_PASSWORD")})
