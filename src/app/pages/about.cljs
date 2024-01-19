(ns app.pages.about
  (:require [reagent.core :as reagent]))

(defn about-page []
  [:div {:style {:display "flex"
                 :flex-direction "column"
                 :align-items "justify-center"
                 :margin-top "1rem"
                 :margin-bottom "1rem"}}
   [:h1 {:style {:width "100%"}} "Header Text"]
   [:p {:style {:width "100%"}} "This is some paragraph text on the about page."]])

