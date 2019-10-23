(ns ^:figwheel-hooks bccljs.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r :refer [atom]]


   ;;[clojure.java.jdbc :as j]
))

;;http://people.cs.ksu.edu/~hankley/d764/tut06/GopisettyPHP.html
;; https://vimeo.com/223309989
;;lein fig:build
;;https://reagent-project.github.io/

(println "This text is printed from src/bccljs/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(def click-count (r/atom 0))

 ;; (def conn {:classname "com.mysql.jdbc.Driver" 
 ;;                :subprotocol "mysql" 
 ;;                :subname "//192.254.187.215:3306/plapan_license" 
 ;;          :user "plapan_lic_admin"
 ;;            :password "welcome"})


(def mysql-db {:dbtype "mysql"
               :host  "192.254.187.215"
               :port 3306
               :dbname "plapan_license"
               :user "plapan_lic_admin"
               :password "welcome"})



;;(defn query-mysql [s]
;;  (j/query mysql-db
;;  ["select * from payment"]
;;  {:row-fn (println %)}))
  

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])



(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h4 "First Name:"][:input {:type "text"}]
   [:h4 "Last Name:"]
   [:h4 "Institution:"]
   [:h4 "email:"]
   [:h4 "Method:"]
   (counting-component)
 
   ])



(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [fname (r/atom "foo")
        lname (r/atom "")
        institution (r/atom "")
        email  (r/atom "")]
    (fn []
      [:div
       [:p "First Name: " [atom-input fname]]
       [:p "Last Name: " [atom-input lname]]
       [:p "Institution: " [atom-input institution]]
       [:p "email: " [atom-input email]]
[:p    (str "The atom has values: first: " @fname " last: " @lname " email: " @email)
     [:input {:type "button" :value "Click me!"
            :on-click (print @lname)}]]
])
       ))

(defn mount [el]
  (r/render-component [shared-state] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
