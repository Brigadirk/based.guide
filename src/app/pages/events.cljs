(ns app.pages.events
  (:require [app.state :as state]
            [app.api.backend :as be]
            [app.components.utils :refer [add-styling]]))

(def css "
.event-page {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.organiser-link {
  text-decoration: none;
  color: grey;
}
.event-title {
  padding-top: 1rem;
  font-weight: bold;
}

.event {
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.event-content {
  width: 90%;
  padding: 2.25rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 100px auto;
}

.event-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid black;
}

.left-block, .right-block {
  display: flex;
  flex-direction: column;
}

.event-item-header a.event {
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: #0000EE;
  line-height: 1.2;
}

.event-item-header p {
  margin: 0;
}

.event-item-subtext {
  font-size: 0.7em;
  color: #6b7280;
}

.event-item-subtext a {
  text-decoration: none;
}

p.date {
  font-size: 1em;
  text-align: right;
  margin-top: 0.25em;
}

p.location {
  font-size: 1.4em;
  font-weight: bold;
  text-align: right;
  margin: 0;
}

p.organiser {
  font-size: 0.9em;
  margin-top: 0.25em;
}

p.organiser a {
  font-size: 1em;
}

/* Media queries for responsiveness */

@media (max-width: 1150px) {
  .event-content {
    padding: 1.5rem;
  }
  .event-title {
    font-size: 2.5rem;
  }
  .event-item-header a.event {
    font-size: 1.5rem;
  }
  .p.location, p.date {
    font-size: 1rem;
  }
}

@media (max-width: 800px) {
  .event-content {
    padding: 1rem;
    margin: 50px auto;
  }
  .event-title {
    font-size: 2rem;
  }
  .event-item-header a.event {
    font-size: 1.3rem;
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .event-item-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .right-block {
    align-items: flex-start;
  }
  .event-title {
    font-size: 1.75rem;
    text-align: center;
  }
  .event-item-header a.event {
    font-size: 1.2rem;
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .event-content {
    padding: 0.5rem;
    margin: 30px auto;
  }
  .event-title {
    font-size: 1.5rem;
  }
  .event-item-header a.event {
    font-size: 1rem;
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 0.7rem;
  }
}

@media (max-width: 375px) {
  .event-content {
    padding: 0.25rem;
    margin: 20px auto;
  }
  .event-title {
    font-size: 1.25rem;
  }
  .event-item-header a.event {
    font-size: 0.9rem;
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 0.6rem;
  }
}
")

(defn render-event [event key]
  (let [start-date (js/Date. (:startdate event))
        end-date (js/Date. (:enddate event))
        format-options-start #js {:month "long" :day "numeric"}
        format-options-end #js {:month "long" :day "numeric" :year "numeric"}
        format-start-date (fn [date] (.toLocaleDateString date "en-EN" format-options-start))
        format-end-date (fn [date] (.toLocaleDateString date "en-EN" format-options-end))
        date-text (if (= start-date end-date)
                    (format-end-date end-date)
                    (str (format-start-date start-date) " - " (format-end-date end-date)))
        location (:location event)]
    [:div {:key key}
     [:div.event-item-header
      [:div.left-block
       [:a.event {:href (:link event)} (:name event)]
       [:p.organiser "Organised by "
        [:a.organiser-link {:href (:organiserlink event)} (:organiser event)]]]
      [:div.right-block
       [:p.event-item-subtext {:style {:text-align "right"}}
        [:p.location (str (aget location "city") ", " (aget location "country"))]]
       [:p.date {:style {:font-weight "bold" :color "#6b7280"}}
        date-text]]]]))

(defn render-events [events]
  [:div.event-page
   [:h1.event-title "Events"]
   [:div.event-content
    (map-indexed (fn [index event] (render-event event index)) events)]])

(defn events-page []
  (be/fetch-events)
  (fn []
    (let [events @state/event-list]
      (if (empty? events)
        [:div]
        [render-events events]))))

(add-styling css)