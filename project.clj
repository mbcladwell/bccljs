(defproject bccljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/java.jdbc "0.7.5"]
                 [reagent "0.9.0-rc2"]
                 [mysql/mysql-connector-java "8.0.11"]
                 [com.google.protobuf/protobuf-java "3.6.1"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes" "src/bccljs"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target"
  :resources "resources"
  :profiles {:dev {:dependencies
                   [[com.bhauman/figwheel-main "0.2.3"]
                    [org.clojure/clojurescript "1.10.339"]
                    [com.bhauman/rebel-readline-cljs "0.1.4"]
                    [hiccup "1.0.4"]]
                    :resource-paths ["target"]}}
  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]})
