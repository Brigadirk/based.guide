(ns app.components.logo)

(defn logo []
  [:div {:class "flex justify-center my-4"}
   [:img {:src "/images/logo.png" :style {:width "300px" :height "auto"}}]])

