(ns core
  (:gen-class)
  (:require [org.httpkit.server :as server]
            [db :as db]
            [next.jdbc :as jdbc]
            [cheshire.core :as json]
            [baseparser :as baseparser]
            [eventparser :as eventparser]
            [ring.middleware.cors :refer [wrap-cors]])) ;; Add this line

;; Bases

(defn handle-projects-request [request]
  (let [query "SELECT pageid, name, images::text, associated_links::text, tags, markdown_text FROM projects"]
    (let [projects (jdbc/execute! db/db-spec [query])]
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string projects)})))

(defn handle-front-images-request [request]
  (let [query "SELECT pageid, name, tags, images->>'front' as frontimage FROM projects"]
    (let [projects (jdbc/execute! db/db-spec [query])]
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string projects)})))

(defn handle-page-request [request pageid]
  (let [projects (jdbc/execute! db/db-spec ["SELECT pageid, name, images::text, associated_links::text, tags, markdown_text FROM projects WHERE pageid = ?" pageid])]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string projects)}
    ))

;; Events

(defn handle-events-request [request]
  (let [query "SELECT eventid, name, startdate, enddate, location::text, link, tags FROM events"]
    (let [events (jdbc/execute! db/db-spec [query])]
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string events)})))

;; Health

(defn handle-health-check [request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "OK"})

(defn handler [request]
  (let [uri (:uri request)]
    (cond
      (re-matches #"/projects/([^/]+)" uri) (let [pageid (second (re-matches #"/projects/([^/]+)" uri))]
                                              (handle-page-request request pageid))
      (= uri "/projects") (handle-projects-request request)
      (= uri "/front") (handle-front-images-request request)
      (= uri "/events") (handle-events-request request)
      (= uri "/healthz") (handle-health-check request)
      :else {:status 404 :body "Not Found"})))

(def app
  (wrap-cors handler
             :access-control-allow-origin [#".*"] ;; Regex for allowed origins
             :access-control-allow-methods [:get :post :put :delete :options]
             :access-control-allow-headers ["Content-Type" "Authorization"]))

(defn -main [& args]
  
  (baseparser/create-projects-table)
  (baseparser/process-markdown-files "bases")

  (eventparser/create-events-table)
  (eventparser/process-yaml-files "events")

  (println "Starting server with custom handler on port 8080...")
  (server/run-server app {:port 8080}))