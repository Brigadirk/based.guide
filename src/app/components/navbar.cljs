(ns app.components.navbar
  (:require [app.routing :as routing]
            [app.components.common :refer [nav-link]]))

(defn navbar []
  [:nav {:class "bg-blue-500 p-4 text-white flex justify-center"}
   [:div {:class "flex justify-between items-center max-w-2xl"}
    [:ul {:class "flex"}
     [:li {:class "mx-4"} [nav-link "/" "Home"]]
     [:li {:class "mx-4"} [nav-link "/about" "About"]]
     [:li {:class "mx-4"} [nav-link "/contact" "Contact"]]]]])
