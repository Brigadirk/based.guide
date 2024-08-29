(ns app.layout
  (:require [app.state :as state]
            [app.components.logo :refer [logo]]
            [app.components.navbar :refer [navbar horizontal-line]]
            [app.components.substack :refer [substack-embed]]))

(defn layout []
  [:div
   [substack-embed]
   [logo]
   [navbar]
   [horizontal-line]
   (let [[view params] @state/current-content]
     ^{:key (:path (meta @state/current-content))}
     [view params])])