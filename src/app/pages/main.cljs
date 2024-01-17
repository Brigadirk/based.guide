(ns app.pages.main
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]
            [app.components.common :refer [handler error-handler]]
            [app.components.common :refer [nav-link]]
            [app.state :as state]))

(defn transform-project [project]
  {:name (get project "projects/name")
   :pageid (get project "projects/pageid")
   :tags (get project "projects/tags")
   :image (get project "frontimage")})

(defonce project-list (r/atom []))

(defn fetch-and-update-projects []
  (GET "http://localhost:8080/front"
    {:handler (fn [response]
                (reset! project-list (map transform-project response))
                ;; Debug code to check whether the projects are really there (they always are):
                (let [projects @project-list]
                (doall
                 (for [project projects]
                   (js/console.log "Project " project))))) ;; This always prints all the projects
     :error-handler error-handler}))

(defn main-grid []
  (fetch-and-update-projects)
  [:div {:class "flex flex-wrap justify-center max-w-md mx-auto"}
   (let [projects @project-list]
     (if (and projects (empty? projects))
       [:div {:class "flex justify-center items-center h-full"}
        [:h2 "No projects found"]] ; We get here each time after refreshing or compiling the page

       ;; This works -consistently- upon navigating to "/" via the navbar
        (for [project projects]
          ^{:key (:name project)}
          [:div {:class "w-full md:w-1/3 p-4"}
           (nav-link (str "/" (:pageid project))
                     [:div {:class "rounded-lg shadow relative"}
                      [:img {:class "max-w-full h-auto shadow-lg rounded-lg" :src (:image project)}]
                      [:div {:class "absolute inset-0 flex items-center justify-center"}
                       [:h3 {:class "text-xl font-bold text-center text-black shadow-white"} (:name project)]]])])))])





