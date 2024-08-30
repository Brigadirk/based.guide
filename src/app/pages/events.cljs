(ns app.pages.events
  (:require [app.state :as state]
            [app.api.backend :as be]
            [app.components.utils :refer [add-styling]]))

(def css
"
.no-events {
  align-items: center; 
}
.event-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-title {
  font-size: 1.875rem; /* 3xl */
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
}
.event-content {
  width: 100%;
  max-width: 1000px;
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
  align-items: center;
}
.event-item-header h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0;
}
.event-item-header p {
  margin-bottom: 0;
}
.event-item-subtext {
  font-size: 0.875em; /* sm */
  color: #6b7280; /* gray-500 */
}
.event-item a {
  color: #0000EE;
}
")

(defn render-event [event]
  (let [start-date (:startdate event)
        end-date (:enddate event)
        date-text (if (= start-date end-date)
                    (str (subs start-date 0 10))
                    (str (subs start-date 0 10) " - " (subs end-date 0 10)))
        location (:location event)]
    [:div.event-item
     [:div.event-item-header
      [:h2 [:a {:href (:link event)} (:name event)]]
      [:p date-text]]
     [:p.event-item-subtext "Organised by: " [:a {:href (:organiserlink event)} (:organiser event)]]
     [:p "Location: " (str (aget location "city") ", " (str (aget location "country")))] 
     ]))

(defn render-events [events]
  [:div.event-page
   [:h1.event-title "Events"]
   [:div.event-content
    (map render-event events)]])

(defn events-page []
  (be/fetch-events)
  (add-styling css)
  (fn []
    (let [events @state/event-list]
      (if (empty? events)
        [:div ] 
        [render-events events]))))
