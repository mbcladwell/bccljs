# cljs-hello-world

This repo is the result of following Hello World tutorial on https://github.com/clojure/clojurescript, http://clojurescript.org/guides/quick-start, https://github.com/clojure/clojurescript/wiki/Quick-Start

## Depencies
The dependencies required for this tutorial are an installation of Java 8 and [rlwrap(read line wrapper)](https://github.com/hanslub42/rlwrap).

## Run Repl
`rlwrap java -cp cljs.jar:src clojure.main repl.clj`
You should eventually see the following message:
`Waiting for browser to connect ...`
Point your web browser at http://localhost:9000
You should get a REPL. (Note that the REPL will appear in your terminal, not in the browser.)
Run `tail -f out/watch.log` in a fresh terminal to view auto build progress.
At the REPL prompt, require your namespace by evaluating `(require '[bc.cljs.core :as hello])`

## Build project
`java -cp cljs.jar:src clojure.main build.clj`

## Auto-building
`java -cp cljs.jar:src clojure.main watch.clj`

## Build production project
`java -cp cljs.jar:src clojure.main release.clj`
