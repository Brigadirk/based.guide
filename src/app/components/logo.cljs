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
  margin: 0.5rem;
  margin-bottom: 0;
}
  .logo-and-social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
.main-logo {
  width: 100%;
  max-width: 35vw; /* Increased from 100% to a fixed max-width */
  position: relative;
  z-index: 1;
}
.founder-ape {
  position: absolute;
  margin-top: 25px;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  height: auto;
  max-height: none;
  z-index: 0;
}
.toggle-buttons {
  position: absolute;
  bottom: 0.5rem;
  right: 6.5rem;  /* Adjusted right position to avoid overlapping with social links */
  display: flex;
  gap: 0.5rem;
}
.please {
  color: gray;
  font-size: 0.7em;
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
  width: 2rem;  /* Match the size of social icons */
  height: 2rem;
  cursor: pointer;
}
.dark-mode .logo-container img,
.dark-mode .social-links img {
  filter: brightness(2) invert(1); /* Adjust brightness and invert to make black lighter */
}
.dark-mode .social-links .gay-mode-toggle {
  filter: none; /* Reset filter for gay-mode-toggle img */
}
@media (max-width: 1150px) {
  .logo-container {
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
  .toggle-buttons {
    display: none;
  }
  .please {
    display: none;
  }
  .main-logo {
    max-width: 37rem;
  }
  .social-links {
    position: static;
    gap: 1rem;
    padding-left: 2rem;
  }
  .founder-ape {
    display: none;
  }
  .social-icon {
    width: 3.2rem;
    height: 3.2rem;
    padding-bottom: 0.3rem;
  }
}
@media (max-width: 480px) {
  .logo-container {
    padding: 0.25rem;
  }
  .social-icon {
    width: 2rem;
    height: 2rem;
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
   [:div.logo-and-social
    ;; Based.Guide
    [:img.main-logo {:src "/images/logo/logo_font_horizontal.svg"
                     :alt "Main Logo"}]
    [:div.social-links
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
     ;; Toggle buttons
     [:div.toggle-buttons
      [gay-mode-toggle]
      [dark-mode-toggle]]]]

   ;; Ape (visible only on larger screens)
   [:a.founder-ape-link {:href "/"}
    [:img.founder-ape {:src "/images/logo/founder_ape.svg"
                       :alt "Founder Ape!"}]]])


;; Add a watch to update the body class based on the mode state
(add-watch mode :mode
           (fn [_ _ _ new-state]
             (js/document.body.classList.remove "dark-mode")
             (js/document.body.classList.remove "gay-mode")
             (case new-state
               :dark (js/document.body.classList.add "dark-mode")
               :gay (js/document.body.classList.add "gay-mode")
               nil)))