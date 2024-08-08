(ns app.components.navbar
  (:require [app.components.common :refer [nav-link]]))

(defn navbar []
  [:nav {:class "p-2 flex justify-center"}
   [:div {:class "flex justify-between items-center max-w-2xl"}
    [:ul {:class "flex"}
     [:li {:class "mx-4"} [nav-link "/" "Home?"]]
     [:li {:class "mx-4"} [nav-link "/about" "About"]]]]])
