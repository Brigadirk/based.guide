(ns app.components.substack
  (:require [reagent.core :as r]
            [app.components.utils :refer [add-styling]]))

(def css "
.embed-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 100%;
}
.embed {
  display: block;
  width: 100%;
  height: 300px;
  border: 20px solid transparent; /* Transparent border to apply gradient */
  background-color: #f0f9ff; /* Regular background color */
  border-image: linear-gradient(to bottom, #f0f9ff, #f0f9ff) 1; /* Default gradient */
}
.dark-mode .embed {
  background-color: #020617; /* Dark mode background color */
  border-image: linear-gradient(to right, #020617, #f0f9ff) 1; /* Gradient border for dark mode */
}
.gay-mode .embed {
  background-color: #FF1493; /* Gay mode background color */
  border-image: linear-gradient(to right, #FF1493, #f0f9ff) 1; /* Gradient border for gay mode */
}
.toggle-button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: transparent; /* Remove background color */
  border: none;
  cursor: pointer;
}
.dark-mode .toggle-button {
  color: white;
}
.afuera-icon {
  width: 1rem;
  height: 1rem;
}
.afuera-icon-mobile {
  width: 2rem;
  height: 2rem;
}
.dark-mode .afuera-icon {
  filter: brightness(2) invert(1);
}
.subscribe-link {
  border-bottom: 1px dotted black;
  background-color: #16a34a;
  padding: 1.5rem;
  border-radius: 1rem;
  color: white;
  margin: 0.5rem;
}
.subscribe-link a {
  font-size: 3.5rem;
  color: white;
  text-decoration: none;
}
.subscribe-link img {
  width: 4rem;
  height: 4rem;
  padding-right: 1rem;
}
.subtext a {
  font-size: 1.25rem;
  font-style: italic;
  display: block;
  margin: auto;
  color: 
  text-align: center;
}
@media (max-width: 1150px) {
  .afuera-container {
    margin-bottom: 1rem;
  }
  .afuera-icon {
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
  }
  .afuera-mobile-text {
    font-size: 6vw; /* Use a relative unit to adjust the text size based on the viewport width */
    width: 100%;
    text-decoration: none;
    color: white;
    background-color: green;
    padding: 1rem;
    border-radius: 0.25em;
    white-space: nowrap; /* Prevent text from wrapping onto a new line */
    overflow: hidden; /* Hide any overflow that may occur due to the text not wrapping */
    text-overflow: ellipsis; /* Add an ellipsis (...) to indicate that the text has been truncated */
  }
}
@media (max-wdith: 387px) {
  .afuera-icon {
    padding-bottom: 1rem;
  }
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
          (if (> @screen-width 1150)
            (if @visible? [:span.afuera-text "¡Afuera!"] [:span.afuera-text "Sign up for our newsletter!"])
            [:div.afuera-container [:a.afuera-mobile-text {:href "https://basedguide.substack.com/subscribe" :target "_blank"} "Sign up for our newsletter!"]])]

         (if (< @screen-width 1150)
           (when @visible?
             nil)
           (when @visible?
             [:iframe.embed {:src "https://basedguide.substack.com/embed"
                             :frameBorder "0"
                             :scrolling "no"
                             :width "10vw"
                             :height "3vw"}]))])})))

