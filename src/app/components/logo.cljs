(ns app.components.logo
  (:require [app.components.common :refer [nav-link]]))

(defn add-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
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
          @media (max-width: 875px) {
            .founder-ape {
              display: none;
            }
          }
          @media (max-width: 1000px) {
            .logo-container {
              min-height: auto;
              align-items: flex-start;
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
    (js/document.head.appendChild style-element)))

(defn logo []
  (add-styles)
  [:div.logo-container

   [:div.logo-main

    ;; Ape
    (nav-link "/"
              [:img.founder-ape {:src "/images/logo/founder_ape.svg"
                                 :alt "Founder Ape"}])

    ;; Based.Guide
              [:img.main-logo {:src "/images/logo/logo_font_horizontal.svg"
                               :alt "Main Logo"}]]

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
                        :alt "Telegram"}]]]])
