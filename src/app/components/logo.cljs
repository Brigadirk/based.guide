(ns app.components.logo)

(defn logo []
  [:div {:class "flex my-4 justify-center"} ; Flex container with space between items
   [:div {:class "flex-none"} ; Container for the founder ape, not growing or shrinking
    [:img {:src "/images/founder_ape.svg" :style {:width "120px" :height "auto"}}]]
   [:div {:class "flex-grow"} ; Container for the logo font, allowing it to take up remaining space
    [:img {:src "/images/logo_font.svg" :style {:width "170px" :height "auto" :display "block" :margin "auto"}}]]]) ; Centering the logo font image
