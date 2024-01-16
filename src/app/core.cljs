(ns app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.state :as state]
            [app.projects :as projects]
            [app.routing :as routing]
            [app.layout :as layout]))

(defn init-routing []
  (add-watch state/current-route :route-change
               (fn [_ _ _ new-route]
                 (routing/navigate new-route))))

(defn ^:export main []
  (init-routing)

  ;; Fetch and update projects
  (projects/fetch-and-update-projects)

  ;; Re-establish the current route based on the browser's URL
  (let [current-path (.-pathname js/window.location)]
    (reset! state/current-route current-path)

    ;; Set the current content based on the current route
    (routing/navigate current-path))

  ;; Render the app
  (rdom/render [layout/layout] (.getElementById js/document "app"))

  ;; Handle browser navigation events
  (.addEventListener js/window "popstate"
                     (fn [_] (routing/navigate (.-pathname js/window.location)))))


