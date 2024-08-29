(ns app.core
  (:require ["react-dom/client" :refer [createRoot]]
            [goog.dom :as gdom]
            [reagent.core :as r]
            [app.api.backend :as backend]
            [app.routing :as routing]
            [app.layout :as layout]))

(defonce root (createRoot (gdom/getElement "app")))

(defn ^:export main []
  
  (routing/init-routing)

  (backend/fetch-and-update-projects)

  (.render root (r/as-element [layout/layout])))

  (defn ^:dev/after-load _ []
    (main))
