(ns app.state
  (:require [reagent.core :as r]))

(defonce filter-state (r/atom {:current true, 
                           :planned true,
                           :historical true,
                           :fictional false}))

(defonce current-route (r/atom "/"))
(defonce current-content (r/atom nil))
(defonce project-list (r/atom []))
(defonce project-page (r/atom {}))



