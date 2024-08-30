(defproject backend "based.guide"
  :description "Freedom grants options"
  :url "https://based.guide"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [http-kit "2.7.0"]
                 [com.github.seancorfield/next.jdbc "1.3.894"]
                 [cheshire "5.12.0"]
                 [clj-commons/clj-yaml "1.0.27"]
                 [ring-cors "0.1.13"]
                 [markdown-clj "1.12.1"]
                 [org.clj-commons/hickory "0.7.4"]
                 [org.postgresql/postgresql "42.3.3"]]
  :main core
  :aot [core]
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
