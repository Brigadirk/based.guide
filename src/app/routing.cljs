(ns app.routing
  (:require [app.state :as state]
            [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]
            [app.pages.events :refer [events-page]]
            [reitit.core :as r]
            [reitit.frontend.easy :as rfe]))

(def router
  (r/router [["/"
              {:view main-grid}]

             ["/events"
              {:view events-page}]

             ["/projects/:pageid"
              {:view project-page :parameters {:path ::pageid}}]]))

(defn init-routing []
  (rfe/start!
   router
   (fn [match]
     (let [view (:view (:data match))
           params (:path-params match)
           path (:path match)]
       (reset! state/current-content (with-meta [view params] {:path path}))))
   {:use-fragment false}))
