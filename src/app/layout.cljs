(ns app.layout
  (:require  [app.state :as state]
             [app.components.logo :refer [logo]]
             [app.components.navbar :refer [navbar]]))

(defn layout []
  [:div
   [logo]
   [navbar]
  @state/current-content]) ;; Dereference current-content here
