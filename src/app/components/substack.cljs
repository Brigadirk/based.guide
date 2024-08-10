(ns app.components.substack)

(defn add-styles []
  (let [style-element (js/document.createElement "style")]
    (set! (.-innerHTML style-element)
          "
          .embed-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
          }
          .embed {
            display: block;
            width: 100%;
            max-width: 500px;
            height: auto;
            aspect-ratio: 500 / 200; /* Maintain the aspect ratio */
          }
          @media (max-width: 1200px) {
            .embed {
              width: 100%; /* Adjust width for larger screens */
              max-width: none;
              height: auto;
            }
          }
          @media (max-width: 1000px) {
            .embed {
              width: 100%; /* Adjust width for medium screens */
              max-width: none;
              height: auto;
            }
          }
          @media (max-width: 600px) {
            .embed {
              width: 100%; /* Adjust width for smaller mobile screens */
              max-width: none;
              height: auto;
            }
          }
          ")
    (js/document.head.appendChild style-element)))

(defn substack-embed []
  (add-styles)
  [:div.embed-container
   [:iframe.embed {:src "https://basedguide.substack.com/embed"
                   :frameborder "0"
                   :scrolling "no"}]])

