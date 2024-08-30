(ns app.routing
  (:require [app.state :as state]
            [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]
            [app.pages.events :refer [events-page]]
            [reitit.core :as r]
            [reitit.frontend.easy :as rfe]
            [reagent.core :as rc]))

(def router
  (r/router [["/"
              {:view main-grid}]

             ["/events"
              {:view events-page}]

             ["/projects/:pageid"
              {:view project-page :parameters {:path ::pageid}}]]))

(def last-highlighted (rc/atom nil))

(defn handle-fragment [fragment]
  (when fragment
    (let [element (.getElementById js/document fragment)]
      (when element
        (.scrollIntoView element)
        ;; Remove highlight class from the last highlighted element
        (when-let [last-element @last-highlighted]
          (.remove (.-classList last-element) "highlight"))
        ;; Add highlight class to the new element
        (.add (.-classList element) "highlight")
        ;; Update the last highlighted element
        (reset! last-highlighted element)))))

(defn init-routing []
  (rfe/start!
   router
   (fn [match]
     (let [view (:view (:data match))
           params (:path-params match)
           path (:path match)
           fragment (:fragment match)]
       (reset! state/current-content (with-meta [view params] {:path path :fragment fragment}))
       (handle-fragment fragment)))
   {:use-fragment false})

  ;; Handle fragment on initial page load
  (set! (.-onload js/window)
        (fn []
          (let [fragment (-> js/window .-location .-hash (clojure.string/replace #"^#" ""))]
            (handle-fragment fragment)))))
