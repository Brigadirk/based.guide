(ns app.components.logo)

(defn logo []
  [:div {:class "relative flex justify-center items-center"}
   [:img {:class "absolute left-0",
          :src "/images/founder_ape.svg"
          :style {:width "188px"
                  :height "auto" 
                  :margin-top "2rem" 
                  :margin-left "1rem"
                  :margin-right "1rem"
                  :margin-bottom "1rem"}}]
   [:img {:src "/images/logo_font_horizontal.svg"
          :style {:width "500px"
                  :height "auto"
                  :margin-top "2rem"}}]])