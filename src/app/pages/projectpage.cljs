(ns app.pages.projectpage
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]))

(defn project-page [params]
  (let [project-id (:project-id params)
        project-data (r/atom nil)]
    ;; Fetch project data from the backend
    (GET (str "http://localhost:8080/projects/" project-id)
      {:handler #(reset! project-data %)
       :error-handler #(reset! project-data {:error "Could not load project"})})
    (fn []
      ;; Render the project page
      [:div
       (if @project-data
         [:div ;; Display the project data
          [:h1 (:name @project-data)]
          [:p (:description @project-data)]]
         [:div "Loading..."])])))
