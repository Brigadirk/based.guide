(ns app.components.logo)

;; (defn toggle-dark-mode [e]
;;   (let [checked (-> e .-target .-checked)]
;;     (if checked
;;       (js/document.documentElement.classList.add "dark")
;;       (js/document.documentElement.classList.remove "dark"))))

(defn logo []
  [:div {:style {:position "relative"
                 :display "flex"
                 :justify-content "center"
                 :align-items "center"}}
   [:img {:style {:position "absolute"
                  :left "0"
                  :width "188px"
                  :height "auto"
                  :margin-top "2rem"
                  :margin-left "1rem"
                  :margin-right "1rem"
                  :margin-bottom "1rem"}
          :src "/images/logo/founder_ape.svg"}]

   [:img {:style {:width "500px"
                  :height "auto"
                  :margin-top "2rem"}
          :src "/images/logo/logo_font_horizontal.svg"}]

   [:div {:style {:position "absolute"
                  :right "1rem"
                  :top "1rem"
                  :display "flex"
                  :gap "1rem"}}
    [:a {:href "https://x.com/basedguide"
         :target "_blank"}
     [:img {:style {:width "32px"
                    :height "32px"}
            :src "/images/socials/x.svg"}]]
    [:a {:href "https://t.me/+p-Z0TvQ7CL9hYzlk"
         :target "_blank"}
     [:img {:style {:width "34px"
                    :height "34px"}
            :src "/images/socials/telegram.svg"}]]]

;;    [:label {:style {:position "relative"
;;                     :display "inline-block"
;;                     :width "60px"
;;                     :height "34px"}}
;;     [:input {:type "checkbox"
;;              :on-change #(toggle-dark-mode %)
;;              :style {:opacity "0"
;;                      :width "0"
;;                      :height "0"}}]
;;     [:span {:class "slider round"
;;             :style {:position "absolute"
;;                     :cursor "pointer"
;;                     :top "0"
;;                     :left "0"
;;                     :right "0"
;;                     :bottom "0"
;;                     :background-color "#ccc"
;;                     :transition ".4s"
;;                     :border-radius "34px"}}]]
   ])
