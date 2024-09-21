(ns app.components.substack
  (:require [reagent.core :as r]
            [app.components.utils :refer [add-styling]]))

(def css "
.embed-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden; /* Prevent overflow */
  padding-bottom: 1.5rem;
}
.embed {
  display: block;
  width: 100%;
  max-width: 100%;  /* Ensure it does not exceed container width */
  height: 450px;
  border-bottom: 20px solid transparent; /* Transparent border to apply gradient */
  border-top: 20px solid transparent;
  background-color: #f0f9ff; /* Regular background color */
  border-image: linear-gradient(to right, #f0f9ff, #f0f9ff) 1; /* Default gradient */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
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
  width: 1.5rem;
  height: 1.5rem;
}
.dark-mode .afuera-icon {
  filter: brightness(2) invert(1);
}
")

(defn get-initial-visibility []
  (if-let [stored-value (js/localStorage.getItem "substack-embed-visible")]
    (= stored-value "true")
    true))  ; Default to visible if no stored preference

(defn substack-embed []
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
          [:img.afuera-icon {:src (str "/images/buttons/afuera.svg")
                             :alt "Afuera"}]
          (if @visible? "¡Afuera!" "Sign up for our newsletter!")]
         (when @visible?
           [:iframe.embed {:src "https://basedguide.substack.com/embed"
                           :frameBorder "0"
                           :scrolling "no"}])])})))

(add-styling css)