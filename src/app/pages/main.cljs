(ns app.pages.main
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.components.common :refer [nav-link]]))

(defn no-results []
  [:div {:style {:display "flex" :justify-content "center" :align-items "center" :height "100%"}}
   [:h2 "No projects found"]])

(defn grid-item [project]
  [:div {:style {:width "33%" :padding "8px" :box-sizing "border-box"}}
   (nav-link (str "/" (:pageid project))
             [:div {:style {:position "relative" :padding-top "56.25%"}} ; 16:9 aspect ratio
              [:img {:style {:position "absolute" :top 0 :left 0 :width "100%" :height "100%" :object-fit "cover"}
                     :class "rounded-lg"
                     :src (:image project)}]
              [:div {:style {:position "absolute"
                             :inset 0
                             :display "flex"
                             :align-items "center"
                             :justify-content "center"
                            ;;  :background "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7))"
                             }} ; Semi-transparent gradient backdrop
               [:h3 {:style {:font-size "1.75rem"
                             :text-align "center"
                             :color "white"
                             :font-weight "bold"
                             :padding "0 12px"
                             :text-shadow "3px 3px 4px rgba(0,0,0,0.8)"
                             }} ; Text shadow for better readability
                (:name project)]]])])

(defn main-grid []
  [:div {:style {:width "65%" :margin "0 auto"}}
   [:div {:style {:display "flex" :flex-wrap "wrap"}}
    (let [projects @state/project-list]
      (if (and projects (empty? projects))
        [no-results]
        (for [project projects]
          ^{:key (:name project)}
          [grid-item project])))]])