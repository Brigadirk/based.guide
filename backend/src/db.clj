(ns db)

(defn get-db-spec []
  (if (= (System/getenv "ENV") "dev")
    ;; Development environment
    {:dbtype "postgresql"
     :dbname "basedguide"
     :user "dirk"
     :password "database"}
    ;; Production environment
    {:dbtype "postgresql"
     :dbname (System/getenv "DB_NAME")
     :host (System/getenv "DB_HOST")
     :port (System/getenv "DB_PORT")
     :user (System/getenv "DB_USER")
     :password (System/getenv "DB_PASSWORD")}))

(def db-spec (get-db-spec))
