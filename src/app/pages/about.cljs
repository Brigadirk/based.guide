(ns app.pages.about
   (:require [reagent.core :as reagent]))

(defn about-page []
  [:div {:class "flex justify-center my-4"}
   [:h1 "Header Text"]
   [:p "This is some paragraph text on the about page."]])