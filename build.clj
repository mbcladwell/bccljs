(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'bccljs.core
                       :output-to "out/main.js"})
