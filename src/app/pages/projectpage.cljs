(ns app.pages.projectpage
  (:require [app.state :as state]
            [app.api.backend :as be]))

(defn project-page [pageid]
  (be/fetch-project pageid)
  (fn []
  (let [project @state/project-page]
    (if (and project (empty? project))
      [:div {}
       [:h1 "Page not found"]]
    [:div {:class "flex justify-center my-4"}
     [:h1 (:name project)]
     [:div  (:markdown-text project)]
     ]))))
