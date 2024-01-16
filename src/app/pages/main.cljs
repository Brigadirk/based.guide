(ns app.pages.main
  (:require [app.projects :as projects]
            [app.components.common :refer [nav-link]]
            [app.state :as state]))

(defn main-grid []
  [:div {:class "flex flex-wrap justify-center max-w-md mx-auto"}
   (let [projects @projects/project-list]
     (if (empty? projects)
       [:div {:class "flex justify-center items-center h-full"}
        [:h2 "No projects found"]])

     (doall
      (for [project projects]
        ^{:key (:name project)}
        [:div {:class "w-full md:w-1/3 p-4"} ;; Apply width and padding here
         (nav-link (str "/" (:pageid project))
           [:div {:class "rounded-lg shadow relative"} ;; Apply rounded corners and shadow here
            [:img {:class "max-w-full h-auto shadow-lg rounded-lg" :src (:image project)}]
            [:div {:class "absolute inset-0 flex items-center justify-center"}
             [:h3 {:class "text-xl font-bold text-center text-black shadow-white"} (:name project)]]])])))])
