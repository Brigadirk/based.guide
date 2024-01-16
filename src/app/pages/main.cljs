(ns app.pages.main
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]
            [app.components.common :refer [handler error-handler]]
            [app.components.common :refer [nav-link]]
            [app.state :as state]))

(def project-list (r/atom []))

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

(defn main-grid []
  (fetch-and-update-projects)
  [:div {:class "flex flex-wrap justify-center max-w-md mx-auto"}
   (let [projects @project-list]
     (js/console.log "Projects: " projects)
     ;; Checking if projects is not nil and then if it's empty
     (if (and projects (empty? projects))
       ;; Rendering "No projects found" if the projects list is empty
       [:div {:class "flex justify-center items-center h-full"}
        [:h2 "No projects found"]]

       ;; Rendering projects list if it's not empty
       (doall
        (for [project projects]
          ^{:key (:name project)}
          [:div {:class "w-full md:w-1/3 p-4"} ;; Apply width and padding here
           (nav-link (str "/" (:pageid project))
             [:div {:class "rounded-lg shadow relative"} ;; Apply rounded corners and shadow here
              [:img {:class "max-w-full h-auto shadow-lg rounded-lg" :src (:image project)}]
              [:div {:class "absolute inset-0 flex items-center justify-center"}
               [:h3 {:class "text-xl font-bold text-center text-black shadow-white"} (:name project)]]])]))))])




