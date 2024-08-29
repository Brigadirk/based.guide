(ns app.core
  (:require ["react-dom/client" :refer [createRoot]]
            [goog.dom :as gdom]
            [reagent.core :as r]
            [app.api.backend :as backend]
            [app.routing :as routing]
            [app.layout :as layout]))

(defonce root (createRoot (gdom/getElement "app")))

(defn ^:export main []
  (.render root (r/as-element [layout/layout]))

  (routing/init-routing)

  (backend/fetch-and-update-projects)

  )

(defn ^:dev/after-load _ [] (main))
