(ns app.components.common
  (:require [app.state :as state]))

(defn add-horizontal-line-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
          .horizontal-line {
            height: 1px;
            background-color: #D3D3D3;
            margin: 10px 0;
            margin-left: 145px;  /* Wrap around the logo */
          }
          @media (max-width: 875px) {
            .horizontal-line {
              margin-left: 0px; 
            } 
          }
          ")
    (js/document.head.appendChild style-element)))

(defn horizontal-line []
  (add-horizontal-line-styles)
  [:div.horizontal-line])


(defn nav-link [path title]
  [:a {:href "#"
       :on-click (fn [event]
                   (.preventDefault event)
                   (reset! state/current-route path))}
   title])

;; Response handlers
(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Something bad happened: " status " " status-text)))