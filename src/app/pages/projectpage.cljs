(ns app.pages.projectpage
  (:require [app.state :as state]
            [app.api.backend :as be]
            [markdown.core :as md]))

(defn add-project-page-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
          .project-page {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
            padding: 0 1rem; /* Add padding to ensure content doesn't touch the edges */
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
            background-color: #fff;
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
    (js/document.head.appendChild style-element)))

(defn page-not-found []
  [:div {}
   [:h1 "Page not found"]
   [:p "Page not found"]])

(defn style-html-from-markdown [markdown-text]
  (md/md-to-html-string markdown-text))

(defn render-page [project html-text]
  (add-project-page-styles)
  [:div.project-page
   [:h1.project-title (:name project)]
   [:div.project-content
    [:div.prose {:dangerouslySetInnerHTML {:__html html-text}}]]])
    ;; TODO: we get rid of the dangerouslySetInnerHTML here

(defn project-page [pageid]
  (be/fetch-project pageid)
  (fn []
    (let [project @state/project-page
          markdown-text (:markdown-text project)
          html-text (style-html-from-markdown markdown-text)]
      (if (and project (empty? project))
        [page-not-found]
        [render-page project html-text]))))
