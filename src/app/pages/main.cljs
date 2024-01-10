(ns app.pages.main
  (:require [app.projects :as projects]))

(defn main-grid []
  (projects/fetch-and-update-projects)
  [:div {:class "flex flex-wrap justify-center max-w-md mx-auto"}
   (let [projects @projects/project-list] ;; Dereference the atom here
     (doall ;; Ensure the lazy sequence is fully realized
      (for [project projects]
        ^{:key (:name project)} ;; Assuming name is unique for key
        [:div {:class "w-full md:w-1/3 p-4 rounded-lg shadow relative"} ;; Add relative positioning
         [:img {:class "max-w-full h-auto shadow-lg rounded-lg" :src (:image project)}]
         [:div {:class "absolute inset-0 flex items-center justify-center"} ;; Overlay div
          [:h3 {:class "text-xl font-bold text-center text-black shadow-white"} (:name project)]]])))])