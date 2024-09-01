(ns app.pages.projectpage
  (:require [app.state :as state]
            [app.components.utils :refer [add-styling]]
            [app.api.backend :as be]
            [reagent.core :as r]
            [clojure.edn :as edn]
            [clojure.string :as string]
            [clojure.walk :as walk]))

;; .prose ul {
;;   padding-left: 20px;
;;   padding-right: 20px;
;;   margin-bottom: 15px;
;; }
;; .prose ol {
;;   padding-left: 20px;
;;   padding-right: 20px;
;; }

(def css
"
.anchor-link {
  text-decoration: none;
  font-weight: bold; 
}
.anchor-link:hover {
  color: #999;
}
.gay-mode .anchor-link:hover {
  color: yellow;   
}
.highlight {
  text-decoration: none;
  border-bottom: 4px solid #16a34a;
}
.project-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-title {
  font-size: 1.875rem; /* 3xl */
  font-weight: bold;
  text-align: center;
  width: 100%;
}
.project-content {
  width: 100%;
  max-width: 1000px;
  padding: 2.25rem; /* 9 */
  border-radius: 0.375rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
}
.prose {
  font-size: 1rem; /* sm:prose */
  word-wrap: break-word; /* Ensure text wraps properly */
}
.prose h2 {
  font-size: 1.5em;
  font-weight: bold;
  padding: 0 20px 5px;
  margin-bottom: 20px;
}
.prose h3 {
  font-size: 1.3em;
  font-weight: bold;
  padding: 0 20px 5px;
  margin-bottom: 15px;
}
.prose h4 {
  font-size: 1.1em;
  font-weight: bold;
  padding: 0 20px 5px;
  margin-bottom: 15px;
}
.prose p {
  padding: 0 20px;
  margin-bottom: 20px;
}
.prose blockquote {
  padding: 0 20px;
}
.prose img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* This adds a shadow around the image */
  border: 1px solid black; /* This adds a thin black border around the image */
  padding: 5px; /* This adds some space between the border and the image */
}
.prose .caption {
  text-align: center;
  font-size: 0.5em;
}
@media (min-width: 640px) {
  .prose {
    font-size: 2.125rem; /* prose */
  }
}
@media (min-width: 1200px) {
  .project-content {
    max-width: 1000px
  }
  .prose {
    font-size: 1.25rem; /* lg:prose-lg */
  }
}
")

(defn hash-link? [url]
  (string/includes? url "#"))

(defn navigate-to-url [url]
  (.assign js/window.location url))

(defn extract-body-content [hiccup]
  (cond
    (vector? hiccup)
    (if (= :body (first hiccup))
      (rest (rest hiccup)) ;; remove the :key attribute
      (some extract-body-content (rest hiccup)))

    (seq? hiccup)
    (some extract-body-content hiccup)

    :else
    nil))

(defn project-page [pageid]
  (reset! state/project-page nil)
  (be/fetch-project pageid)
  (add-styling css)
  (fn []
    (let [project @state/project-page
          hiccup-text (:hiccup-text project)
          html-hiccup (r/atom nil)]

      (when hiccup-text
        (reset! html-hiccup (extract-body-content 
                             (edn/read-string 
                              (string/replace hiccup-text "&quot;" "\"")))))

      [:div.project-page
       [:h1.project-title (:name project)]
       (if (and project (empty? project))
         [:div]
         [:div.project-content
          [:div.prose
           (walk/postwalk
            (fn [item]
              (if (and (vector? item) (= :a (first item)))
                (let [[_ attrs & children] item
                      href (:href attrs)
                      external? (hash-link? href)]
                  (if external?
                    [:a (assoc attrs :on-click #(navigate-to-url href)) children]
                    item))
                item))
            @html-hiccup)]])])))

