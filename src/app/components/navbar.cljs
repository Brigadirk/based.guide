(ns app.components.navbar
  (:require [app.routing :as routing]))

(defn nav-link [path title]
  [:a {:href "#"
       :on-click (fn [event]
                   (.preventDefault event)
                   (js/console.log "Navigating to:" path) ;; Debug log
                   (routing/navigate path))}
   title])

(defn navbar []
  [:nav {:class "bg-blue-500 p-4 text-white flex justify-center"}
   [:div {:class "flex justify-between items-center max-w-2xl"}
    [:ul {:class "flex"}
     [:li {:class "mx-4"} [nav-link "/" "Home"]]
     [:li {:class "mx-4"} [nav-link "/about" "About"]]
     [:li {:class "mx-4"} [nav-link "/contact" "Contact"]]]]])
