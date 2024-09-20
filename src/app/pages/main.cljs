(ns app.pages.main
  (:require [app.state :as state]
            [app.components.utils :refer [add-styling]]
            [clojure.string :as str]))

(def css "
.grid-item {
  width: calc(33.333% - 16px); /* 3 items per row with some margin */
  padding: 8px;
  box-sizing: border-box;
  margin: 8px;
  transition: transform 0.3s, box-shadow 0.3s; /* Add transition for smooth effect */
  position: relative; /* Add position relative for absolute positioning of icon */
}
.grid-item:hover {
  transform: scale(1.02); /* Slightly enlarge the grid item */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Add a subtle shadow */
}
.dark-mode .grid-item:hover {
  box-shadow: 0 4px 8px rgba(255,255,255, 0.2);
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
  border-radius: 10px;
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
.grid-item-icon {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1; /* Ensure the icon is above the image */
}
.grid-item-icon img {
  width: 20px;
  height: 20px;
  filter: drop-shadow(6px 6px 8px rgba(0,0,0,0.9)); /* Add a stronger shadow */
  border-radius: 0px;
}
.filter-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
}
.filter-button {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px;
  padding: 10px;
  font-size: 1rem;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  min-width: 50px;
  max-width: 150px; /* Adjust the max-width to make the buttons less wide */
  text-align: center;
  background-color: transparent; /* Remove background color */
  text-decoration: none; /* Remove default text decoration */
}
.dark-mode .filter-button  {
  color: white;
}
.filter-button.active {
  text-decoration: none; /* Add underline for active state */
  border-bottom: 4px solid #16a34a;
}
.filter-button.inactive {
  text-decoration: none; /* Ensure no underline for inactive state */
  border-bottom: 4px solid #fafafa;
}
.filter-icon {
  width: 20px;
  height: 20px;
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
@media (max-width: 1150px) {
  .grid-item {
    width: calc(50% - 16px); /* 2 items per row with some margin */
  }
  .filter-button {
    font-size: 1.75rem;
    max-width: 14rem; /* Adjust the max-width to make the buttons less wide */
  }
  .grid-item-overlay h3 {
    font-size: 2.5rem;
  }
}
@media (max-width: 800px) {
  .grid-item {
    width: 100%; /* 1 item per row with some margin */
  }
  .filter-button {
    font-size: 1.5rem; /* Adjusted for better fit */
    max-width: 12rem; /* Adjust the max-width to make the buttons less wide */
    padding: 10px; /* Ensure consistent padding */
  }
  .grid-item-overlay h3 {
    font-size: 2rem; /* Adjusted for better fit */
  }
}
@media (max-width: 600px) {
  .filter-button {
    font-size: 1.2rem; /* Reduced font size for smaller screens */
    flex-basis: 40%; /* Make each button take up 50% width */
    max-width: 48%; /* Limit the maximum width of each button */
  }
  .filter-bar {
    flex-direction: row; /* Keep the filter buttons in a row */
    flex-wrap: wrap; /* Allow the buttons to wrap to the next line */
    justify-content: center; /* Center the buttons horizontally */
  }
  .grid-item {
    margin: 8px 0; /* Reduce margin */
    padding: 0 8px; /* Adjust padding */
  }
}
@media (max-width: 400px) {
  .filter-button {
    font-size: 1rem; /* Further reduce font size for very small screens */
    padding: 5px; /* Reduce padding */
  }
  .grid-item {
    margin: 4px 0; /* Further reduce margin */
    padding: 0 4px; /* Further adjust padding */
  }
}
")

(defn grid-item [project]
  [:div.grid-item
   [:a.navbar-link {:href (str "/projects/" (:pageid project))}
    [:div.grid-item-inner
     [:img {:src (str (:image project) "_lo.png")
            :data-src (str (:image project) "_hi.png")
            :class "lazyload"}]
     [:div.grid-item-overlay
      [:h3 (:name project)]]
     [:div.grid-item-icon
      [:img {:src (str "/images/buttons/" (first (str/split (:tags project) #", ")) "_col.svg")
             :alt (str/capitalize (first (str/split (:tags project) #", ")))
             :class "filter-icon"}]]]]])

(defn filter-bar []
  (let [filter-state @state/filter-state]
    [:div.filter-bar
     (for [filter [:current :planned :historical :fictional]]
       [:button
        {:key filter
         :class (str "filter-button " (if (filter-state filter) "active" "inactive"))
         :on-click (fn []
                     (swap! state/filter-state update filter not)
                     (reset! state/filter-order (into [] (remove #(= filter %) @state/filter-order)))
                     (when (get @state/filter-state filter)
                       (swap! state/filter-order conj filter)))}
        [:img {:src (str "/images/buttons/" (name filter) "_col.svg")
               :alt (str/capitalize (name filter))
               :class "filter-icon"}]
        (str/capitalize (name filter))])]))

(defn filter-projects []
  (let [projects @state/project-list
        active-filters (filter val @state/filter-state)
        active-filter-set (set (map (comp name key) active-filters))]
    (sort-by (fn [project]
               (let [tags (if (str/includes? (:tags project) ",")
                            (str/split (:tags project) #", ")
                            [(:tags project)])]
                 (some (fn [tag]
                         (.indexOf @state/filter-order (keyword tag)))
                       tags)))
             (filter (fn [project]
                       (let [tags (if (str/includes? (:tags project) ",")
                                    (str/split (:tags project) #", ")
                                    [(:tags project)])]
                         (some (fn [tag]
                                 (contains? active-filter-set tag))
                               tags)))
                     projects))))

(defn main-grid []
  (add-styling css)
  [:div.main-grid
   [filter-bar]
   [:div.main-grid-inner
    (let [projects (filter-projects)]
      (if (and projects (empty? projects))
        [:div]
        (for [project projects]
          ^{:key (:name project)}
          [grid-item project])))]])