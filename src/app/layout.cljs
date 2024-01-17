(ns app.layout
  (:require [app.components.logo :refer [logo]]
            [app.state :as state]
            [app.components.navbar :refer [navbar]]
            [app.routing :as routing])) ;; Make sure routing is required

(defn layout []
  [:div
   [logo]
   [navbar]
  @state/current-content]) ;; Dereference current-content here
