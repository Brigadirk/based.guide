(ns app.core
  (:require ["react-dom/client" :refer [createRoot]]
            [goog.dom :as gdom]
            [reagent.core :as r]
            [app.state :as state]
            [app.api.backend :as backend]
            [app.routing :as routing]
            [app.layout :as layout]))

;; Set a watch on the current route atom
(defn init-routing []
  (add-watch state/current-route :route-change
             (fn [_ _ _ new-route]
               (routing/navigate new-route))))

(defn ^:export main []
  (init-routing)

  ;; Fill the project-list atom with projects for the grid
  (backend/fetch-and-update-projects)

  ;; Re-establish the current route based on the browser's URL
  (let [current-path (.-pathname js/window.location)]
    (reset! state/current-route current-path)

    ;; Set the current content based on the current route
    (routing/navigate current-path))

  ;; Render the app using createRoot
  (let [root (createRoot (gdom/getElement "app"))]
    (.render root (r/as-element [layout/layout])))

  ;; Handle browser navigation events
  (.addEventListener js/window "popstate"
                     (fn [_] (routing/navigate (.-pathname js/window.location)))))

(defn ^:dev/after-load re-render
  []
  ;; The `:dev/after-load` metadata causes this function to be called
  ;; after shadow-cljs hot-reloads code.
  ;; This function is called implicitly by its annotation.
  (main))
