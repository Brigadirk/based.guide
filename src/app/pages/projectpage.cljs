(ns app.pages.projectpage
  (:require [reagent.core :as r]
            [app.components.common :refer [handler error-handler]]
            [ajax.core :refer [GET]]
            [clojure.core :refer [atom]]))

(def project-data (atom {}))

(defn parse-json-string [json-string]
  (js/JSON.parse json-string))

(defn transform-page [project]
  {:name (get project "projects/name")
   :pageid (get project "projects/pageid")
   :associated-links (parse-json-string (get project "associated_links"))
   :tags (get project "projects/tags")
   :markdown-text (get project "projects/markdown_text")})

(defn fetch-project [pageid]
  (GET (str "http://localhost:8080/projects/" pageid)
    {:handler (fn [response]
                (reset! project-data (transform-page (first response))))
     :error-handler error-handler}))

(defn project-page [pageid]
  (fetch-project pageid)
  (fn []  ;; Form-2 component for reactivity
    [:div
     (if (seq @project-data)
       [:div
        [:h1 (:name @project-data)]  ;; Display project name
        ;; Display other project data here
        ]
       [:div "Loading..."])]))  ;; Display loading message
