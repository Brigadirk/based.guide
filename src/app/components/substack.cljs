(ns app.components.substack
  (:require [reagent.core :as r]
            [app.components.utils :refer [add-styling]]))

(def css
  "
.embed-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  color: none;
  width: 100%;
}
.embed {
  display: block;
  width: 100%;
  height: 300px;
  border: none;
}
.toggle-button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: transparent; /* Remove background color */
  border: none;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Add slight shadow around the text */
}
.afuera-icon {
  width: 20px;
  height: 20px;
}
.subscribe-link {
  font-size: 4rem;
}
@media (max-width: 600px) {
  .embed {
    height: 400px;
  }
}
")


(defn get-initial-visibility []
  (if-let [stored-value (js/localStorage.getItem "substack-embed-visible")]
    (= stored-value "true")
    true))  ; Default to visible if no stored preference


;; TODO: visibility also for the subscribe link!
(defn substack-embed []
  (add-styling css)
  (let [visible? (r/atom (get-initial-visibility))
        screen-width (r/atom (.-innerWidth js/window))]
    (r/create-class
     {:component-did-mount
      (fn []
        (set! (.-onresize js/window)
              #(reset! screen-width (.-innerWidth js/window))))

      :reagent-render
      (fn []
        [:div.embed-container
         [:button.toggle-button

          {:on-click #(do
                        (swap! visible? not)
                        (js/localStorage.setItem "substack-embed-visible" @visible?))} 
          
          [:img {:src (str "/images/buttons/afuera.svg")
                 :alt "Afuera"
                 :class "afuera-icon"}]

          (if @visible? "¡Afuera!" "Sign up for our newsletter!")]
         
         (if (< @screen-width 1100)
           (when @visible?
           [:a.subscribe-link {:href "https://basedguide.substack.com/subscribe"
                               :target "_blank"}
            "Subscribe to our newsletter!"])
           (when @visible?
             [:iframe.embed {:src "https://basedguide.substack.com/embed"
                             :frameBorder "0"
                             :scrolling "yes"}
              :style {:background-color "#fff"}]))])})))