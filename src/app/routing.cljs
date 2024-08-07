(ns app.routing
  (:require [app.state :as state]
            [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]))

(defn route-component-map [path]
  (cond
    (= path "/") main-grid
    :else (project-page {:pageid (last (clojure.string/split path #"/"))})))

(defn navigate [path]
  (let [new-content (route-component-map path)]
    (reset! state/current-content [new-content])) ;Has to be between square brackets for Reagent to work!
    (.pushState js/window.history nil "" path))

