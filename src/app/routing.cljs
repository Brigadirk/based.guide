(ns app.routing
  (:require [app.state :as state]
            [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]
            [app.pages.events :refer [events-page]]
            [reitit.core :as r]
            [reitit.frontend.easy :as rfe]))

(def router
  (r/router [["/"
              {:name ::home
               :view main-grid}]

             ["/events"
              {:name ::events
               :view events-page}]

             ["/projects/:pageid"
              {:name ::project
               :view project-page
               :parameters {:path {:pageid string?}}}]]))

(defn route-component-map [path]
  (let [match (r/match-by-path router path)]
    (if match
      (let [view (:view (:data match))
            params (:path-params match)]
        [view params])
      [main-grid])))

(defn init-routing []
  (rfe/start!
   router
   (fn [match]
     (let [path (:path match)
           [new-content params] (route-component-map path)]
       (reset! state/current-content [new-content params])))
   {:use-fragment false}))