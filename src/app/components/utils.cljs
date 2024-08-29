(ns app.components.utils)

(defn add-styling [css]
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element) css)
    (js/document.head.appendChild style-element)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Something bad happened: " status " " status-text)))