(ns app.pages.projectpage
  (:require [app.state :as state]
            [app.components.utils :refer [add-styling]]
            [app.api.backend :as be]
            [reagent.core :as r]
            [clojure.edn :as edn]))

(def css
  "
.anchor-link {
  text-decoration: none;
}
.anchor-link:hover {
  color: #999;
}
.highlight {
  background-color: yellow; /* or any other highlighting style */
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
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
}
.project-content {
  width: 100%;
  max-width: 1000px;
  padding: 2.25rem; /* 9 */
  border-radius: 0.375rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  margin: 100 auto; /* Center the content horizontally */
}
.prose {
  font-size: 1rem; /* sm:prose */
  word-wrap: break-word; /* Ensure text wraps properly */
}
.prose h2 {
  font-size: 1.5em;
  font-weight: bold;
  padding: 0 20px 10px;
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
.prose ul {
  padding-left: 40px;
  padding-right: 20px;
  margin-bottom: 15px;
}
.prose ol {
  padding-left: 40px;
  padding-right: 20px;
}
.prose blockquote {
  padding: 0 20px;
}
.prose a {
  color: #0000EE;
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

(defn project-page [pageid]
  (reset! state/project-page nil)
  (be/fetch-project pageid)
  (add-styling css)
  (fn []
    (let [project @state/project-page
          hiccup-text (:hiccup-text project)
          html-hiccup (r/atom nil)]

      (when hiccup-text
        (reset! html-hiccup (edn/read-string hiccup-text)))

      [:div.project-page
        [:h1.project-title (:name project)]

        (if (and project (empty? project))

          [:div]

          [:div.project-content
          [:div.prose @html-hiccup]])])))
