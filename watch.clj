(require 'cljs.build.api)

(cljs.build.api/watch "src"
                      {:main 'bc-cljs.core
                       :output-to "out/main.js"})
