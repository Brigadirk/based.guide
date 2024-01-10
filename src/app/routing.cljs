(ns app.routing
  (:require [app.state :as state]
            [reagent.core :as r]
            [app.pages.main :refer [main-grid]]
            [app.pages.about :refer [about-page]]
            [app.pages.contact :refer [contact-page]]
            [app.pages.projectpage :refer [project-page]]
            )) ;; Import current-content

;; Define an atom to hold the current content
(def current-content (r/atom nil))

(defn navigate [path]
  (let [new-content (cond
                      (= path "/") (main-grid)
                      (= path "/about") (about-page)
                      (= path "/contact") (contact-page)
                      :else (fn [] [:div "Page not found."]))]
    (reset! current-content new-content)
    (.pushState js/window.history nil "" path)))
