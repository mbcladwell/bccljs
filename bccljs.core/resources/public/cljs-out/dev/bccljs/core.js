// Compiled by ClojureScript 1.10.520 {}
goog.provide('bccljs.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.call(null,"This text is printed from src/bccljs/core.cljs. Go ahead and edit it and see reloading in action.");
bccljs.core.multiply = (function bccljs$core$multiply(a,b){
return (a * b);
});
if((typeof bccljs !== 'undefined') && (typeof bccljs.core !== 'undefined') && (typeof bccljs.core.app_state !== 'undefined')){
} else {
bccljs.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
bccljs.core.get_app_element = (function bccljs$core$get_app_element(){
return goog.dom.getElement("app");
});
bccljs.core.hello_world = (function bccljs$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bccljs.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/bccljs/core.cljs and watch it change!"], null)], null);
});
bccljs.core.mount = (function bccljs$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bccljs.core.hello_world], null),el);
});
bccljs.core.mount_app_element = (function bccljs$core$mount_app_element(){
var temp__5457__auto__ = bccljs.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return bccljs.core.mount.call(null,el);
} else {
return null;
}
});
bccljs.core.mount_app_element.call(null);
bccljs.core.on_reload = (function bccljs$core$on_reload(){
return bccljs.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
