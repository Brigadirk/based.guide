(ns app.routing
  (:require [app.state :as state]
            [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]
            [app.pages.events :refer [events-page]]
            [reitit.core :as r]
            [clojure.string :as string]
            [reitit.frontend.easy :as rfe]))

(def router
  (r/router [["/"
              {:view main-grid}]

             ["/events"
              {:view events-page}]

             ["/projects/:pageid"
              {:view project-page :parameters {:path ::pageid}}]]))

(defn handle-fragment [fragment]
  (when fragment
    (js/setTimeout
     (fn []
       (let [element (.getElementById js/document fragment)]
         (when element
           (.scrollIntoView element #js {:behavior "smooth"})
           ;; Remove highlight class from the last highlighted element
           (when-let [last-element @state/last-highlighted]
             (.remove (.-classList last-element) "highlight"))
           ;; Add highlight class to the new element
           (.add (.-classList element) "highlight")
           ;; Update the last highlighted element
           (reset! state/last-highlighted element))))
     10))) ; Small delay to ensure the DOM has updated

(defn on-navigate [new-match]
  (let [view (:view (:data new-match))
        params (:path-params new-match)
        path (:path new-match)
        fragment (:fragment new-match)]
    (reset! state/current-content (with-meta [view params] {:path path :fragment fragment}))
    (handle-fragment fragment)))

(defn init-routing []
  (rfe/start!
   router
   on-navigate
   {:use-fragment false})

  ;; Handle fragment on initial page load
  (set! (.-onload js/window)
        (fn []
          (let [fragment (-> js/window .-location .-hash (string/replace #"^#" ""))]
            (handle-fragment fragment)))))