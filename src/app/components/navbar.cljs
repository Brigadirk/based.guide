(ns app.components.navbar
  (:require [app.components.common :refer [nav-link]]))

(defn add-navbar-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
          .navbar {
            display: flex;
            justify-content: center;
          }
          .navbar-container {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1280px;  /* Adjust as needed */
            width: 100%;
          }
          .navbar-list {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .navbar-item {
            margin: 0 1rem;  /* Adjust as needed */
          }
          .navbar-link {
            text-decoration: none;
            color: gray;  /* Adjust as needed */
            font-size: 16px;
          }
          .navbar-link:hover {
            color: #333;  /* Adjust as needed */
          }
          @media (max-width: 1000px) {
          .navbar-link {
            font-size: 34px;
            }
          }
          ")
    (js/document.head.appendChild style-element)))

(defn navbar []
  (add-navbar-styles)
  [:nav.navbar
   [:div.navbar-container
    [:ul.navbar-list
     [:li.navbar-item [nav-link "/" "Home"]]
     [:li.navbar-item [nav-link "/events" "Events"]]
     [:li.navbar-item [nav-link "/about" "About"]]]]])
