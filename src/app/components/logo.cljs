(ns app.components.logo
  (:require [reagent.core :as r]
            [app.components.utils :refer [add-styling]]))

(def css "
.logo-container {
  position: relative;
  max-width: 100%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;  /* Remove or reduce bottom margin */
}
.logo-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
}
.main-logo {
  width: 100%;
  max-width: 550px;  /* Slightly reduced max-width */
  height: auto;
  position: relative;
  z-index: 1;
}
.founder-ape {
  position: absolute;
  margin-top: 25px;
  left: 0.5rem;  /* Adjusted left position */
  top: 50%;
  transform: translateY(-50%);
  width: 180px;  /* Slightly reduced width */
  height: auto;
  max-height: none;
  z-index: 0;
}
.social-links {
  display: flex;
  gap: 0.5rem;  /* Reduced gap */
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.social-icon {
  width: 32px;  /* Slightly reduced size */
  height: 32px;
}
.dark-mode-toggle, .gay-mode-toggle {
  width: 32px;  /* Match the size of social icons */
  height: 32px;
  cursor: pointer;
}
.dark-mode .logo-container img,
.dark-mode .social-links img {
  filter: brightness(2) invert(1); /* Adjust brightness and invert to make black lighter */
}
.dark-mode .social-links .gay-mode-toggle {
  filter: none; /* Reset filter for gay-mode-toggle img */
}
@media (max-width: 875px) {
  .founder-ape {
    display: none;
  }
}
@media (max-width: 1100px) {
  .logo-container {
    min-height: auto;
  }
  .main-logo {
    width: 100%;
    max-width: 750px;
    padding-bottom: 20px;
  }
  .social-links {
    position: relative;
    margin-bottom: 0.5rem; /* Reduced margin */
    display: flex;
    justify-content: center; /* Center the social links */
    width: 100%;
  }
  .founder-ape {
    display: none;
  }
  .social-icon {
    width: 52px;
    height: 52px;
    padding-bottom: 20px;
    padding-right: 5px;
    padding-left: 5px;
  }
}
@media (max-width: 480px) {
  .social-links {
    margin-bottom: 1rem;  /* Reduced margin */
    align-items: center;
  }
}
")

(def mode (r/atom :light))

(defn dark-mode-toggle []
  [:img.dark-mode-toggle
   {:src "/images/buttons/nightmode.svg"
    :alt "Toggle Dark Mode"
    :on-click #(swap! mode (fn [current-mode]
                             (if (= current-mode :dark)
                               :light
                               :dark)))}])

(defn gay-mode-toggle []
  [:img.gay-mode-toggle
   {:src "/images/buttons/gaymode.svg"
    :alt "Toggle Gay Mode"
    :on-click #(swap! mode (fn [current-mode]
                             (if (= current-mode :gay)
                               :light
                               :gay)))}])

(defn logo []
  (add-styling css)
  [:div.logo-container
   [:div.logo-main
    ;; Ape
    [:a {:href "/"}
     [:img.founder-ape {:src "/images/logo/founder_ape.svg"
                        :alt "Founder Ape"}]]
    ;; Based.Guide
    ;; TODO: make also a link
    [:img.main-logo {:src "/images/logo/logo_font_horizontal.svg"
                     :alt "Main Logo"}]
    [:div.social-links
     [gay-mode-toggle]
     [dark-mode-toggle]
     [:p "Talk to us: "]
    ;; Twitter
     [:a {:href "https://x.com/basedguide"
          :target "_blank"}
      [:img.social-icon {:src "/images/socials/x.svg"
                         :alt "X (Twitter)"}]]
    ;; Telegram
     [:a {:href "https://t.me/+p-Z0TvQ7CL9hYzlk"
          :target "_blank"}
      [:img.social-icon {:src "/images/socials/telegram.svg"
                         :alt "Telegram"}]]
    ;; Dark Mode Toggle
     ]]])

;; Add a watch to update the body class based on the mode state
(add-watch mode :mode
           (fn [_ _ _ new-state]
             (js/document.body.classList.remove "dark-mode")
             (js/document.body.classList.remove "gay-mode")
             (case new-state
               :dark (js/document.body.classList.add "dark-mode")
               :gay (js/document.body.classList.add "gay-mode")
               nil)))
