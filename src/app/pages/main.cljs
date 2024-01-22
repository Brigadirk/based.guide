(ns app.pages.main
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.components.common :refer [nav-link]]))

(defn no-results []
  [:div {:class "flex justify-center items-center h-full"}
   [:h2 "No projects found"]]
  )

(defn main-grid []
  [:div {:class "flex flex-wrap justify-center max-w-md mx-auto"}
   (let [projects @state/project-list]
     (if (and projects (empty? projects))
       [no-results]
       (for [project projects]
         ^{:key (:name project)}
         [:div {:class "w-full md:w-1/3 p-4"}
          (nav-link (str "/" (:pageid project))
                    [:div {:class "rounded-lg shadow relative aspect-w-16 aspect-h-9"} ; Adjust aspect ratio as needed
                     [:img {:class "object-cover w-full h-full shadow-lg rounded-lg" :src (:image project)}] ; Use object-cover
                     [:div {:class "absolute inset-0 flex items-center justify-center"}
                      [:h3 {:class "text-xl font-bold text-center text-black shadow-white"} (:name project)]]])])))])


