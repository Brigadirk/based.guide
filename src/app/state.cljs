(ns app.state
  (:require [reagent.core :as r]))

(defonce filter-state (r/atom {:current true,
                               :planned true,
                               :historical true,
                               :fictional false}))

(defonce current-content (r/atom {}))
(defonce project-list (r/atom []))
(defonce project-page (r/atom {}))
(defonce event-list (r/atom []))
(defonce last-highlighted (r/atom nil))
(defonce filter-order (r/atom []))