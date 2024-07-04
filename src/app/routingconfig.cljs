(ns app.routingconfig
  (:require [app.pages.main :refer [main-grid]]
            [app.pages.projectpage :refer [project-page]]))

(defn route-component-map [path]
  (cond
    (= path "/") main-grid
    :else (project-page {:pageid (last (clojure.string/split path #"/"))})
    ))
