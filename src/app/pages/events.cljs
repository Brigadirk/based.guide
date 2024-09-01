(ns app.pages.events
  (:require [app.state :as state]
            [app.api.backend :as be]
            [app.components.utils :refer [add-styling]]))

(def css
  "
.event-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

 /* The word Events at the top */
.event-title {
  padding-top: 1rem;
  font-weight: bold;
}

.event-content {
  width: 100%;
  max-width: 60rem;
  padding: 2.25rem; /* 9 */
  border-radius: 0.375rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  margin: 100 auto; /* Center the content horizontally */
}

.event-item {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.event-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid black;
}

.event-item-header a {
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
}

.event-item-header p {
  margin-bottom: 0;
}

.event-item-subtext {
  font-size: 0.7em; /* sm */
  color: #6b7280; /* gray-500 */
}

.event-item-subtext a {
  text-decoration: none;
}

.event-item a {
  color: #0000EE;
  text-decoration: none;
}

p.date {
  font-size: 1.2em;
  text-align: right;
}
p.location {
  font-size: 1em;
  text-align: right;
}
  
a.event {
  font-size: 1.2em;
}

p.organiser {
  font-size: 0.9em;
}
p.organiser a {
  font-size: 0.9em;
}

")

(defn render-event [event key]
  (let [start-date (js/Date. (:startdate event))
        end-date (js/Date. (:enddate event))
        date-text (if (= start-date end-date)
                    (.toLocaleDateString start-date "en-US" {:month "long" :day "numeric" :year "numeric"})
                    
                    (str (.toLocaleDateString start-date "en-US" {:month "long" :day "numeric"})
                         " - " (.toLocaleDateString end-date "en-US" {:month "long" :day "numeric"}))
                    
                    )
        location (:location event)]
    [:div {:key key}
     [:div.event-item-header 
      [:div.left-block
       [:a.event {:href (:link event)} (:name event)]
       [:p.organiser "Organised by: " [:a {:href (:organiserlink event)} (:organiser event)]]]
      
      [:div.right-block
       [:p.location 
        [:p (str (aget location "city") ", " (str (aget location "country")))]]
       [:p.date date-text]]]]))

(defn render-events [events]
  [:div.event-page
   [:h1.event-title "Events"]
   [:div.event-content
    (map-indexed (fn [index event] (render-event event index)) events)]])

(defn events-page []
  (be/fetch-events)
  (add-styling css)
  (fn []
    (let [events @state/event-list]
      (if (empty? events)
        [:div]
        [render-events events]))))
