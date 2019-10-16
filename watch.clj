(require 'cljs.build.api)

(cljs.build.api/watch "src"
                      {:main 'bccljs.core
                       :output-to "out/main.js"})
