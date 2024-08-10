(ns app.components.substack
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn add-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
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
            border: none;
          }
          .toggle-button {
            margin-bottom: 10px;
            padding: 5px 10px;
            border: none;
            background: white;
            cursor: pointer;
          }
          @media (max-width: 600px) {
            .embed {
              height: 400px;
            }
          }
          ")
    (js/document.head.appendChild style-element)))

(defn get-initial-visibility []
  (if-let [stored-value (js/localStorage.getItem "substack-embed-visible")]
    (= stored-value "true")
    true))  ; Default to visible if no stored preference

(defn substack-embed []
  (let [visible? (r/atom (get-initial-visibility))]
    (add-styles)
    (fn []
      [:div.embed-container
       [:button.toggle-button
        {:on-click #(do
                      (swap! visible? not)
                      (js/localStorage.setItem "substack-embed-visible" @visible?))}
        (if @visible? "¡Afuera!" "Sign up for our newsletter!")]
       (when @visible?
         [:iframe.embed {:src "https://basedguide.substack.com/embed"
                         :frameBorder "0"
                         :scrolling "yes"}])])))

;; If you're using Reagent to render your components, you can use this:
(defn render-substack-embed []
  (rdom/render [substack-embed] (.getElementById js/document "substack-embed-container")))

;; Call this function when your page loads
(render-substack-embed)