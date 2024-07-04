(ns app.pages.projectpage
  (:require [app.state :as state]
            [app.api.backend :as be]
            [markdown.core :as md]
            [clojure.string :as string]))

(defn page-not-found [] 
  [:div {}
   [:h1 "Page not found"]
   [:p "Page not found"]]
  )

(defn style-html-from-markdown [markdown-text]
  (let [html (md/md-to-html-string markdown-text)
        styled-html (-> html
          (string/replace #"<h2>"
                          "<h2 style='
                            font-size: 1.5em;
                            font-weight: bold;
                            padding: 0 20px 10px;
                            margin-bottom: 20px;
                          '>")
          (string/replace #"<h3>"
                          "<h3 style='
                            font-size: 1.3em;
                            font-weight: bold;
                            padding: 0 20px 5px;
                            margin-bottom: 15px;
                          '>")
          (string/replace #"<h4>" 
                          "<h4 style='
                            font-size: 1.1em;
                            font-weight: bold;
                            padding: 0 20px 5px;
                            margin-bottom: 15px;
                          '>")
          (string/replace #"<p>"
                          "<p style='
                            padding: 0 20px;
                            margin-bottom: 20px;
                          '>")
          (string/replace #"<ul>"
                          "<ul style='
                            padding-left: 40px;
                            padding-right: 20px;
                            margin-bottom: 15px;
                          '>")
          (string/replace #"<ol>"
                          "<ol style='
                            padding-left: 40px;
                            padding-right: 20px;
                          '>")
          (string/replace #"<blockquote>"
                          "<blockquote style='
                            padding: 0 20px;
                          '>")
          (string/replace #"<a\s"
                "<a style='
                            color: #0000EE;
                          ' "))]
    styled-html))

(defn render-page [project html-text] 
  [:div {:class "w-full flex flex-col items-center px-4 py-8"}
   [:h1 {:class "text-3xl font-bold mb-8 text-center w-full"} (:name project)]
   [:div {:class "w-full max-w-[800px] bg-white p-9 rounded-lg shadow-md"}
    [:div {:dangerouslySetInnerHTML {:__html html-text}
           :class "prose prose-sm sm:prose lg:prose-lg mx-auto"}]]]
  )

(defn project-page [pageid]
  (be/fetch-project pageid)
  (fn []
    (let [project @state/project-page
          markdown-text (:markdown-text project)
          html-text (style-html-from-markdown markdown-text)]
      (if (and project (empty? project))
        [page-not-found]
        [render-page project html-text]))))
