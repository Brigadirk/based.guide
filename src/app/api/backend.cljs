(ns app.api.backend
  (:require [ajax.core :refer [GET]]
            [app.state :as state]
            [app.components.common :refer [error-handler]]))

(goog-define env "prod")

(defn api-url []
  (if (= env "dev")
    "http://localhost:8080"  ;; Your local dev URL
    "https://based-guide-backend.onrender.com")) ;; Your production URL

(defn transform-project [project]
  {:name (get project "projects/name")
   :pageid (get project "projects/pageid")
   :tags (get project "projects/tags")
   :image (get project "frontimage")})

(defn fetch-and-update-projects []
  (GET (str (api-url) "/front")
    {:handler (fn [response]
                (reset! state/project-list (mapv transform-project response)))
     :error-handler error-handler}))

(defn transform-page [project]
  {:name (get project "projects/name")
   :pageid (get project "projects/pageid")
   :associated-links (js/JSON.parse (get project "associated_links"))
   :tags (get project "projects/tags")
   :markdown-text (get project "projects/markdown_text")})

(defn fetch-project [page]
  (reset! state/project-page nil)
  (GET (str (api-url) "/projects/" (:pageid page))
    {:handler (fn [response]
                (reset! state/project-page (transform-page (first response))))
     :error-handler error-handler}))

