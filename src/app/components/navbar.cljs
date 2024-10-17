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
  max-width: 1280px; /* Adjust as needed */
  width: 100%;
  padding: 1rem;
}
.navbar-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.navbar-item {
  margin: 0 1rem; /* Adjust as needed */
}
.navbar-link {
  text-decoration: none;
  color: gray; /* Adjust as needed */
  font-size: 1rem;
}
.gay-mode .navbar-link {
  color: white;
}
.dark-mode .navbar-link {
  color: white;
}
.navbar-link:hover {
  color: #333;  /* Adjust as needed */
}
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 0.3rem;
}
.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: gray;
}
.show { /* Class to show the nav items */
  display: flex;
  flex-direction: column;
}

/* Adjustments for medium-sized screens */
@media (max-width: 1150px) {
  .navbar-link {
    font-size: 1.75rem;
  }
}

/* Adjustments for smaller screens */
@media (max-width: 800px) {
  .navbar-list {
  }
}

@media (max-width: 480px) {
  .navbar-container {
    flex-direction: column;
    padding: 0.5rem;
  }
  .navbar-link {
    font-size: 1.2rem;
  }
}

/* Adjustments for very small screens like iPhone SE */
@media (max-width: 375px) {
  .navbar-container {
    padding: 0.25rem;
  }
  .navbar-link {
    font-size: 1rem;
  }
}
")

(defn navbar []
    (fn []
      [:nav.navbar
       [:div.navbar-container
        [:ul.navbar-list
         [:li.navbar-item [:a.navbar-link {:href "/"} "Home"]]
         [:li.navbar-item [:a.navbar-link {:href "/events"} "Events"]]
         [:li.navbar-item [:a.navbar-link {:href "/projects/glossary"} "Glossary"]]
         [:li.navbar-item [:a.navbar-link {:href "/projects/resources"} "Resources"]]
         [:li.navbar-item [:a.navbar-link {:href "/projects/about"} "About"]]]]]))

(add-styling navbar-css)

;; If you want to implement the horizontal line, you can uncomment and use the following:

;; (def line-css "
;; .horizontal-line {
;;   height: 2px;
;;   border-bottom: 1px solid #D3D3D3;
;;   margin-left: 165px;  /* Wrap around the logo */
;; }
;; @media (max-width: 1000px) {
;;   .horizontal-line {
;;     margin-left: 0px;
;;   }
;; }
;; ")

;; (defn horizontal-line []
;;   (add-styling line-css)
;;   [:div.horizontal-line])