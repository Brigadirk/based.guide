(ns app.projects
  (:require [ajax.core :refer [GET]]
            [app.state :as state]
            [app.components.common :refer [handler error-handler]]
            [clojure.core :refer [atom]]))

(def project-list (atom []))

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
