(ns app.components.logo)

(defn logo []
  [:div {:class "flex justify-center my-4"}
   [:img {:src "/images/founder_ape.svg" :style {:width "120px" :height "auto"}}]
   [:img {:src "/images/logo_font.svg" :style {:width "170px" :height "auto"}}]])

