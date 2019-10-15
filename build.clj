(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'bc-cljs.core
                       :output-to "out/main.js"})
