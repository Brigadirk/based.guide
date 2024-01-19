(ns app.pages.projectpage
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.api.backend :as be]
            [app.components.common :refer [handler error-handler]]
            [ajax.core :refer [GET]]
            [clojure.core :refer [atom]]))

(defn project-page [pageid]
  (be/fetch-project pageid)
  (fn []
  (let [project @state/project-page]
    (if (and project (empty? project))
      [:div
       [:h1 "Page not found"]]
    [:div
     [:h1 (:name project)]
     [:div  x(:markdown-text project)]
     ]
    )
  )
  )
)
