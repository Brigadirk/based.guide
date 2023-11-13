(ns app.core
  (:require [reagent.dom :as rdom]
            [app.projects :as projects]))

(defn main-grid []
  [:div {:class "flex flex-wrap justify-center max-w-xl mx-auto"} ;; Use max-w-xl for smaller width
   (for [project projects/projects]
     ^{:key (:id project)}
     [:div {:class "w-full md:w-1/2 p-4"} ;; Responsive classes
      {:on-click #(js/console.log "Clicked on" (:name project))}
      [:h3 {:class "text-xl font-bold text-center"} (:name project)] ;; Title styling
      [:img {:class "max-w-full h-auto shadow-lg rounded" :src (:image project)}]])]) ;; Image styling


(defn ^:export main []
  (rdom/render [main-grid]
               (.getElementById js/document "app")))
