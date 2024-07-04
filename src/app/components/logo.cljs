(ns app.components.logo)

(defn logo []
  [:div {:class "relative flex justify-center items-center my-4"}
   [:img {:class "absolute left-0",
          :src "/images/founder_ape.svg"
          :style {:width "90px" :height "auto" :margin-right "1rem"}}]
   [:img {:src "/images/logo_font_horizontal.svg" 
          :style {:width "500px" :height "auto"}}]])
