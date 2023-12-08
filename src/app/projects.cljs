(ns app.projects
  :require [cljs-http.client :as http])

;; (defn fetch-projects []
;;   (http/get "http://localhost:8080/api/projects" {:with-credentials? false})
;;   ;; Handle the response and error
;;   )

(def project-list
  [{:id 1 :name "Prospera" :image "/images/solarpunk2.png"}
   {:id 2 :name "Ancap Tokyo" :image "/images/ancaptokyo.png"}
   {:id 3 :name "Dirksland" :image "/images/streetview.png"}
   {:id 4 :name "Syndicalist Spain" :image "/images/solarpunk.png"}
   {:id 5 :name "Amaroland" :image "/images/streetview.png"}
   {:id 6 :name "Hedonia" :image "/images/hedonia.png"}
   {:id 7 :name "Vaginia" :image "/images/streetview.png"}
   {:id 8 :name "Suckdickia" :image "/images/solarpunk.png"}
   {:id 9 :name "Phallus Lallus" :image "/images/phallus.png"}
   ;; ... Add more projects here
   ])