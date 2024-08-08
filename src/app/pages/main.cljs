(ns app.pages.main
  (:require [app.state :as state]
            [app.components.common :refer [nav-link]]
            [clojure.string :as str]))

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
                             }} 
               [:h3 {:style {:font-size "1.75rem"
                             :text-align "center"
                             :color "white"
                             :font-weight "bold"
                             :padding "0 12px"
                             :text-shadow "3px 3px 4px rgba(0,0,0,0.8)"
                             }} ; Text shadow for better readability
                (:name project)]]])])

(defn filter-bar []
  (let [filter-state @state/filter-state]
    [:div {:style {:display "flex" :justify-content "center" :margin-bottom "20px"}}
     (for [filter [:current :planned :historical :fictional]]
       [:button {:key filter
                 :style {:margin "5px"
                         :padding "10px"
                         :background-color (if (filter-state filter) "orange" "grey")
                         :color "white"
                         :border "none"
                         :border-radius "5px"
                         :cursor "pointer"}
                 :on-click #(swap! state/filter-state update filter not)}
        (str/capitalize (name filter))])]))

(defn filter-projects []
  (let [projects @state/project-list
        active-filters (filter val @state/filter-state)
        active-filter-set (set (map (comp name key) active-filters))]
    (filter (fn [project]
              (let [tags (if (str/includes? (:tags project) ",")
                           (str/split (:tags project) #", ")
                           [(:tags project)])]
                ;; (js/console.log "Project Tags:" tags)
                (some (fn [tag]
                        (contains? active-filter-set tag))
                      tags)))
            projects)))

(defn main-grid []
  [:div {:style {:width "65%" :margin "0 auto"}}
   [filter-bar]
   [:div {:style {:display "flex" :flex-wrap "wrap"}}
    (let [projects (filter-projects)]
      (if (and projects (empty? projects))
        [no-results]
        (for [project projects]
          ^{:key (:name project)}
          [grid-item project])))]])