(ns app.projects
  (:require [ajax.core :refer [GET]]
            [clojure.core :refer [atom]]))

(def project-list (atom []))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn transform-project [project]
  {:name (get project "projects/name")
   :pageid (get project "projects/pageid")
   :tags (get project "projects/tags")
   :image (get project "frontimage")})

(defn fetch-and-update-projects []
  (GET "http://localhost:8080/front"
    {:handler (fn [response]
                (reset! project-list (map transform-project response)))
     :error-handler error-handler}))
