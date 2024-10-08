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
         
.event-img, .event-img-arrow {
  height: 1rem;
  width: 1.25rem;
  padding-right: 0.5rem;
}
.dark-mode .event-img-arrow {
  filter: brightness(2) invert(1);         
}
;; .gay-mode .event-img {
;;   filter: drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.4));
}          
.organiser-link {
  text-decoration: none;
  color: grey;
}
.left-block a {
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.dark-mode .left-block a {
  color: white;
  }

.event-content {
  width: 90%;
  padding: 2.25rem;
  box-shadow-left: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.event-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  border-bottom: 1px dotted black;
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

@media (max-width: 730px) {
  .event-item-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .right-block {
    align-items: flex-start;
  }
  .event-title {
    font-size: 2rem;
    text-align: center;
  }
  .left-block a.event {
    font-size: 2.5rem;
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 1.3rem;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .event-title {
    font-size: 2.5rem;
  }
  .event-item-header a.event {
    font-size: 1rem;
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 1rem;
  }
}

@media (max-width: 375px) {
  .event-title {
    font-size: 1.25rem;
  }
  .event-item-header a.event {
    font-size: 1.9rem;
  }
  p.organiser {
    font-size: 1rem;  
  }
  .event-item-subtext,
  p.date,
  p.location {
    font-size: 1rem;
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
       [:a {:href (:link event)} (:name event)]
       [:p.organiser [:img.event-img-arrow {:src "images/events/arrow.svg"}] "Organized by "
        [:a.organiser-link {:href (:organiserlink event)} (:organiser event)]]]
      [:div.right-bloc
       [:p.event-item-subtext
          [:p.location [:img.event-img {:src "images/events/location.svg"}] (str (aget location "city") ", " (aget location "country"))]]
       [:p.date [:img.event-img {:src "images/events/schedule.svg"}]
        date-text]]]]))

(defn render-events [events]
  (let [current-date (js/Date.)
        sorted-events (->> events
                           (filter #(> (js/Date. (:enddate %)) current-date)) ; Filter out events whose end date has passed
                           (sort-by :startdate))] ; Sort the events based on their start date
    [:div.event-page 
     [:div.event-content
      (map-indexed (fn [index event] (render-event event index)) sorted-events)]]))

(defn events-page []
  (be/fetch-events)
  (fn []
    (let [events @state/event-list]
      (if (empty? events)
        [:div]
        [render-events events]))))

(add-styling css)