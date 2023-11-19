(ns app.core
  (:require [reagent.dom :as rdom]
            [app.projects :as projects]))


(defn logo []
  [:div {:class "flex justify-center my-4"}
   [:img {:src "/images/logo.png" :style {:width "300px" :height "auto"}}]]) ;; Adjust width as needed


(defn nav-bar []
  [:nav {:class "bg-blue-500 p-4 text-white flex justify-center"} ;; Flexbox and centering
   [:div {:class "flex justify-between items-center max-w-2xl"} ;; Limit width and justify space between
    [:ul {:class "flex"}
     [:li {:class "mx-4"} [:a {:href "#"} "Home"]] ;; Increased horizontal margin for more spacing
     [:li {:class "mx-4"} [:a {:href "#"} "About"]]
     [:li {:class "mx-4"} [:a {:href "#"} "Contact"]]]]])


(defn main-grid []
  [:div {:class "flex flex-wrap justify-center max-w-md mx-auto"}
   (for [project projects/projects]
     ^{:key (:id project)}
     [:div {:class "w-full md:w-1/3 p-4 rounded-lg shadow relative"} ;; Add relative positioning
      [:img {:class "max-w-full h-auto shadow-lg rounded-lg" :src (:image project)}]
      [:div {:class "absolute inset-0 flex items-center justify-center"} ;; Overlay div
       [:h3 {:class "text-xl font-bold text-center text-black shadow-white"} (:name project)]]])]) ;; Text styling with shadow

(defn ^:export main []
  ;; Clear existing content if necessary
  (let [root-el (.getElementById js/document "app")]
    (when root-el
      (js/console.log "Reloading app") ;; Optional, for debugging
      (rdom/unmount-component-at-node root-el)
      (rdom/render [:div
                    [logo] ;; Include the logo component here
                    [nav-bar]
                    [main-grid]] root-el))))
