(ns app.pages.projectpage
  (:require [app.state :as state]
            [app.components.utils :refer [add-styling]]
            [app.api.backend :as be]
            [reagent.core :as r]
            [clojure.edn :as edn]
            [clojure.string :as string]
            [clojure.walk :as walk]))

(def css
  "
 /* What shows when a page is loading */
 .loading {
   padding-top: 10rem;
   max-width: 100%;
   display: flex;
   margin: 0 auto;
   width: 62px;
   height: 62px;
 }

 /* anchor linking */
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
.dark-mode .anchor-link {
  color: white;   
}
.highlight {
  text-decoration: none;
  border-bottom: 4px solid #16a34a;
}
/* anchor linking end */
 
 /* Title on the top */
.project-title {
  padding-top: 1rem;
  font-weight: bold;
}
  
/* Wrapper */
.project-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Contains the actual text */
.prose {
  font-size: 1.1em;
  word-wrap: break-word; 
  max-width: 55rem;
  padding: 2.25rem;
  border-radius: 0.375rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
}
.prose a {
  color: black;  
 text-decoration: underline;
}
.dark-mode .prose a {
  color: white;
}

.prose img {
  max-width: 100%;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* This adds a shadow around the image */
}

.prose h1 {
  font-size: 1.8em;
  font-weight: bold;
}
.prose h2 {
  font-size: 1.5em;
  font-weight: bold;
}
.prose h3 {
  font-size: 1.3em;
  font-weight: bold;
}
.prose h4 {
  font-size: 1.1em;
  font-weight: bold;
}
.prose p {
  margin-bottom: 2rem;
}
.prose blockquote {
}

/* special cases for phones and tablets */
@media (max-width: 1200px) {
  .prose {
    font-size: 1.5rem; /* lg:prose-lg */
  }
}
@media (max-width: 800px) {
  .prose {
    padding: 1.5rem;
  }
}
@media (max-width: 600px) {
  .prose {
    padding: 1rem;
  }
}
@media (max-width: 480px) {
  .prose {
    padding: 1rem;
  }
  .project-title {
    font-size: 2.125rem; /* Adjust title size */
    text-align: center; /* Center title for better appearance */
  }
}
@media (max-width: 375px) {
  .prose {
    padding: 0.6rem;
  }
  .project-title {
    font-size: 1.25rem; /* Adjust title size */
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
   (let [parsed-content (r/atom nil)
         parsed-links (r/atom nil)]
     (fn []
       (let [project @state/project-page]
         (if (nil? project)
           [:img.loading {:src "/images/misc/planet-earth.svg" :alt "loading"}]
           (if (empty? project)
             [:div.error "Project not found"]
             (do
              ;; Parse the main content
               (when (and (:hiccup-text project) (nil? @parsed-content))
                 (reset! parsed-content
                         (try
                           (-> (:hiccup-text project)
                               (string/replace "&quot;" "\"")
                               (string/replace "&amp;" "&")
                               edn/read-string
                               extract-body-content)
                           (catch js/Error e
                             [:div.error "Error parsing content"]))))

              ;; Parse the associated links
               (when (and (:associated-links project) (nil? @parsed-links))
                 (js/console.log (str "Links:" (:associated-links project)))
                 (reset! parsed-links
                         (try
                           (-> (:associated-links project)
                               edn/read-string
                               (js/console.log))
                           (catch js/Error e
                             nil)))
                 (js/console.log (str @parsed-links)))

              ;; Render the content
               [:div.project-page
                [:h1.project-title (:name project)]
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
                  @parsed-content)]
               ;; Render the associated links if available
                (when (seq @parsed-links)
                  [:div.associated-links
                   (for [[name url] @parsed-links]
                     [:div.link-block
                      [:span.link-name name]
                      [:a {:href url :on-click #(navigate-to-url url)} "View Link"]])])])))))))
(add-styling css)