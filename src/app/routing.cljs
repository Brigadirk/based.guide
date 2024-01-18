(ns app.routing
  (:require [app.state :as state]
            [app.routingconfig :refer [route-component-map]]))

(defn navigate [path]
  (let [new-content (route-component-map path)]
    (reset! state/current-content [new-content])) ;Has to be between square brackets for Reagent to work!
    (.pushState js/window.history nil "" path))
