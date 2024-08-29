(ns app.components.navbar
  (:require [app.components.utils :refer [add-styling]]))

(def navbar-css "
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

(defn navbar []
  (add-styling navbar-css)
  [:nav.navbar
   [:div.navbar-container
    [:ul.navbar-list
     [:li.navbar-item [:a.navbar-link {:href "/"} "Home"]]
     [:li.navbar-item [:a.navbar-link {:href "/events"} "Events"]]
     [:li.navbar-item [:a.navbar-link {:href "/projects/glossary"} "Glossary"]]
     [:li.navbar-item [:a.navbar-link {:href "/projects/about"} "About"]]]]])

(def line-css "
.horizontal-line {
  height: 2px;
  margin: 10px 0;
  color: black;
  margin-left: 145px;  /* Wrap around the logo */
}
@media (max-width: 1000px) {
  .horizontal-line {
    margin-left: 0px;
  }
}
")

(defn horizontal-line []
  (add-styling line-css)
  [:div.horizontal-line])