(ns app.routingconfig
  (:require [app.pages.main :refer [main-grid]]
            [app.pages.about :refer [about-page]]
            [app.pages.contact :refer [contact-page]]
            [app.pages.projectpage :refer [project-page]]))

(defn route-component-map [path]
  (cond
    (= path "/") main-grid
    (= path "/about") about-page
    (= path "/contact") contact-page
    :else (project-page {:pageid (last (clojure.string/split path #"/"))})
    ))
