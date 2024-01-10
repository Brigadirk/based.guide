(ns app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.layout :as layout]
            [app.routing :as routing]))

(defn ^:export main []
  (.addEventListener js/window "popstate"
                     (fn [_] (routing/navigate (.-pathname js/window.location))))
  (routing/navigate (.-pathname js/window.location))
  (rdom/render [layout/layout] ;; Just render the layout component
               (.getElementById js/document "app")))
