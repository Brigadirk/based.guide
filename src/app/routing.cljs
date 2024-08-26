(ns app.routing
  (:require [app.state :as state]
            [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]
            [app.pages.events :refer [events-page]]
            [clojure.string :as string]))

(defn route-component-map [path]
  (cond
    (= path "/") main-grid
    (= path "/events") events-page
    :else (project-page {:pageid (last (string/split path #"/"))})))

(defn navigate [path]
  (let [path-parts (string/split path #"#")
        base-path (first path-parts)
        anchor (second path-parts)]
    (let [new-content (route-component-map base-path)]
      (reset! state/current-content [new-content]) ; Has to be between square brackets for Reagent to work!
      (.pushState js/window.history nil "" base-path)
      (when anchor
        (js/setTimeout
         (fn []
           (let [element (.getElementById js/document anchor)]
             (when element
               (.scrollIntoView element))))
         0))))) ; Use setTimeout to ensure the DOM is updated
