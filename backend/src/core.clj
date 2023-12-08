(ns core
  (:require [org.httpkit.server :as server]
            [db :as db]
            [next.jdbc :as jdbc]
            [cheshire.core :as json]))

(defn handle-projects-request [request]
  (println "Received request for /projects")
  (let [query "SELECT id, name, images::text, associated_links::text, tags, markdown_text FROM projects"]
    (let [projects (jdbc/execute! db/db-spec [query])]
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string projects)})))

(defn handle-front-images-request [request]
  (println "Received request for /projects/front")
  (let [projects (jdbc/execute! db/db-spec ["SELECT name, tags, images->>'front' as front_image FROM projects"])]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string projects)}))

(defn handler [request]
  (case (:uri request)
    "/projects" (handle-projects-request request)
    "/projects/front" (handle-front-images-request request)
    {:status 404 :body "Not Found"}))

(defn -main [& args]
  (println "Starting server with custom handler on port 8080...")
  (server/run-server handler {:port 8080}))