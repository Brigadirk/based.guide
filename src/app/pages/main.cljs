(ns app.pages.main
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.components.common :refer [nav-link]]))

(defn no-results []
  [:div {:class "flex justify-center items-center h-full"}
   [:h2 "No projects found"]])

(defn grid-item [project]
  [:div {:class "sm:w-1/2 md:w-1/3 p-4"}
   (nav-link (str "/" (:pageid project))
             [:div {:style {:padding-top "56.25%" ;16:9 aspect ratio
                            :position "relative"}}
              [:img {:class "rounded-lg absolute inset-0 w-full h-full object-cover"
                     :src (:image project)}]
              [:div {:class "absolute inset-0 flex items-center justify-center"}
               [:h3 {:class "text-3xl text-center text-white px-3 font-bold drop-shadow-lg"}
                (:name project)]]])])

(defn main-grid []
   [:div {:class "flex flex-wrap"} ;TODO: try putting this on in grid item instead
    (let [projects @state/project-list]
      (if (and projects (empty? projects))
        [no-results]
        (for [project projects]
          ^{:key (:name project)}
          [grid-item project])))])