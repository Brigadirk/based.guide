(ns app.layout
  (:require  [app.state :as state]
             [app.components.common :refer [horizontal-line]]
             [app.components.logo :refer [logo]]
             [app.components.navbar :refer [navbar]]))

(defn layout []
  [:div
   [logo] 
   [navbar] 
   [horizontal-line]
  @state/current-content]) ;; Dereference current-content here
