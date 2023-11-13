(ns app.core
  (:require [reagent.core :as reagent]))

(def projects
  [{:id 1 :name "Prospera" :image "path/to/image-a.jpg"}
   {:id 2 :name "Ancap Tokyo" :image "path/to/image-b.jpg"}
   {:id 3 :name "Dirksland" :image "/resources"}
   ;; ... Add more projects here
   ])

(defn main-grid []
  [:div.grid
   (for [project projects]
     ^{:key (:id project)}
     [:div.grid-item
      {:on-click #(js/alert (:name project))}
      [:h3 (:name project)]
      [:img {:src (:image project)}]])])
