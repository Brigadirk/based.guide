(ns app.pages.main
  (:require [app.state :as state]
            [app.components.common :refer [nav-link]]
            [clojure.string :as str]))

(defn add-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
          .no-results {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .no-results h2 {
            font-size: 2rem;
          }
          .grid-item {
            width: calc(33.333% - 16px); /* 3 items per row with some margin */
            padding: 8px;
            box-sizing: border-box;
            margin: 8px;
          }
          .grid-item-inner {
            position: relative;
            padding-top: 56.25%; /* 16:9 aspect ratio */
          }
          .grid-item img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .grid-item-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .grid-item-overlay h3 {
            font-size: 1.75rem;
            text-align: center;
            color: white;
            font-weight: bold;
            padding: 0 12px;
            text-shadow: 3px 3px 4px rgba(0,0,0,0.8);
          }
          .filter-bar {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          .filter-button {
            margin: 5px;
            padding: 10px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .filter-button.active {
            background-color: orange;
          }
          .filter-button.inactive {
            background-color: grey;
          }
          .main-grid {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .main-grid-inner {
            display: flex;
            flex-wrap: wrap;
          }
          @media (max-width: 1200px) {
            .grid-item {
              width: calc(50% - 16px); /* 2 items per row with some margin */
            }
          }
          @media (max-width: 800px) {
            .grid-item {
              width: calc(100% - 16px); /* 1 item per row with some margin */
            }
          }
          ")
    (js/document.head.appendChild style-element)))

(defn no-results []
  [:div.no-results
   [:h2 "No projects found"]])

(defn grid-item [project]
  [:div.grid-item
   (nav-link (str "/" (:pageid project))
             [:div.grid-item-inner
              [:img {:src (:image project)}]
              [:div.grid-item-overlay
               [:h3 (:name project)]]])])

(defn filter-bar []
  (let [filter-state @state/filter-state]
    [:div.filter-bar
     (for [filter [:current :planned :historical :fictional]]
       [:button {:key filter
                 :class (str "filter-button " (if (filter-state filter) "active" "inactive"))
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
                (some (fn [tag]
                        (contains? active-filter-set tag))
                      tags)))
            projects)))

(defn main-grid []
  (add-styles)
  [:div.main-grid
   [filter-bar]
   [:div.main-grid-inner
    (let [projects (filter-projects)]
      (if (and projects (empty? projects))
        [no-results]
        (for [project projects]
          ^{:key (:name project)}
          [grid-item project])))]])
