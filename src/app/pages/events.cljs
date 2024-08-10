(ns app.pages.events
  (:require [app.state :as state]
            [app.api.backend :as be]))

(defn add-event-page-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
          .event-page {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
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
            background-color: #fff;
            padding: 2.25rem; /* 9 */
            border-radius: 0.375rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            margin: 100 auto; /* Center the content horizontally */
          }
          .event-item {
            margin-bottom: 2rem;
          }
          .event-item h2 {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .event-item p {
            margin-bottom: 1rem;
          }
          .event-item a {
            color: #0000EE;
          }
          ")
    (js/document.head.appendChild style-element)))

(defn render-event [event]
  [:div.event-item
   [:h2 (:name event)]
   [:p "Event ID: " (:eventid event)]
   [:p "Start Date: " (:startdate event)]
   [:p "End Date: " (:enddate event)]
   [:p "Location: " (str (:city (:location event)) ", " (:country (:location event)))]
   [:p [:a {:href (:link event)} "More Info"]]
   [:p "Tags: " (:tags event)]])

(defn render-events [events]
  (add-event-page-styles)
  [:div.event-page
   [:h1.event-title "Events"]
   [:div.event-content
    (map render-event events)]])

(defn events-page []
  (be/fetch-events)
  (fn []
    (let [events @state/event-list]
      (if (empty? events)
        [:div {}
         [:h1 "No events found"]
         [:p "No events found"]]
        [render-events events]))))
