;; In app.components.common
(ns app.components.common
  (:require [app.state :as state]))

(defn nav-link [path title]
  [:a {:href "#"
       :on-click (fn [event]
                   (.preventDefault event)
                   (js/console.log "Navigating to:" path) ;; Debug log
                   (reset! state/current-route path))}
   title])

;; Response handlers
(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))