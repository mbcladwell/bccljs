// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18984){
var map__18985 = p__18984;
var map__18985__$1 = (((((!((map__18985 == null))))?(((((map__18985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18985):map__18985);
var m = map__18985__$1;
var n = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18987_19019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18988_19020 = null;
var count__18989_19021 = (0);
var i__18990_19022 = (0);
while(true){
if((i__18990_19022 < count__18989_19021)){
var f_19023 = cljs.core._nth.call(null,chunk__18988_19020,i__18990_19022);
cljs.core.println.call(null,"  ",f_19023);


var G__19024 = seq__18987_19019;
var G__19025 = chunk__18988_19020;
var G__19026 = count__18989_19021;
var G__19027 = (i__18990_19022 + (1));
seq__18987_19019 = G__19024;
chunk__18988_19020 = G__19025;
count__18989_19021 = G__19026;
i__18990_19022 = G__19027;
continue;
} else {
var temp__5457__auto___19028 = cljs.core.seq.call(null,seq__18987_19019);
if(temp__5457__auto___19028){
var seq__18987_19029__$1 = temp__5457__auto___19028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18987_19029__$1)){
var c__4550__auto___19030 = cljs.core.chunk_first.call(null,seq__18987_19029__$1);
var G__19031 = cljs.core.chunk_rest.call(null,seq__18987_19029__$1);
var G__19032 = c__4550__auto___19030;
var G__19033 = cljs.core.count.call(null,c__4550__auto___19030);
var G__19034 = (0);
seq__18987_19019 = G__19031;
chunk__18988_19020 = G__19032;
count__18989_19021 = G__19033;
i__18990_19022 = G__19034;
continue;
} else {
var f_19035 = cljs.core.first.call(null,seq__18987_19029__$1);
cljs.core.println.call(null,"  ",f_19035);


var G__19036 = cljs.core.next.call(null,seq__18987_19029__$1);
var G__19037 = null;
var G__19038 = (0);
var G__19039 = (0);
seq__18987_19019 = G__19036;
chunk__18988_19020 = G__19037;
count__18989_19021 = G__19038;
i__18990_19022 = G__19039;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19040 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19040);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19040)))?cljs.core.second.call(null,arglists_19040):arglists_19040));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18991_19041 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18992_19042 = null;
var count__18993_19043 = (0);
var i__18994_19044 = (0);
while(true){
if((i__18994_19044 < count__18993_19043)){
var vec__19005_19045 = cljs.core._nth.call(null,chunk__18992_19042,i__18994_19044);
var name_19046 = cljs.core.nth.call(null,vec__19005_19045,(0),null);
var map__19008_19047 = cljs.core.nth.call(null,vec__19005_19045,(1),null);
var map__19008_19048__$1 = (((((!((map__19008_19047 == null))))?(((((map__19008_19047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19008_19047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19008_19047):map__19008_19047);
var doc_19049 = cljs.core.get.call(null,map__19008_19048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19050 = cljs.core.get.call(null,map__19008_19048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19046);

cljs.core.println.call(null," ",arglists_19050);

if(cljs.core.truth_(doc_19049)){
cljs.core.println.call(null," ",doc_19049);
} else {
}


var G__19051 = seq__18991_19041;
var G__19052 = chunk__18992_19042;
var G__19053 = count__18993_19043;
var G__19054 = (i__18994_19044 + (1));
seq__18991_19041 = G__19051;
chunk__18992_19042 = G__19052;
count__18993_19043 = G__19053;
i__18994_19044 = G__19054;
continue;
} else {
var temp__5457__auto___19055 = cljs.core.seq.call(null,seq__18991_19041);
if(temp__5457__auto___19055){
var seq__18991_19056__$1 = temp__5457__auto___19055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18991_19056__$1)){
var c__4550__auto___19057 = cljs.core.chunk_first.call(null,seq__18991_19056__$1);
var G__19058 = cljs.core.chunk_rest.call(null,seq__18991_19056__$1);
var G__19059 = c__4550__auto___19057;
var G__19060 = cljs.core.count.call(null,c__4550__auto___19057);
var G__19061 = (0);
seq__18991_19041 = G__19058;
chunk__18992_19042 = G__19059;
count__18993_19043 = G__19060;
i__18994_19044 = G__19061;
continue;
} else {
var vec__19010_19062 = cljs.core.first.call(null,seq__18991_19056__$1);
var name_19063 = cljs.core.nth.call(null,vec__19010_19062,(0),null);
var map__19013_19064 = cljs.core.nth.call(null,vec__19010_19062,(1),null);
var map__19013_19065__$1 = (((((!((map__19013_19064 == null))))?(((((map__19013_19064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19013_19064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19013_19064):map__19013_19064);
var doc_19066 = cljs.core.get.call(null,map__19013_19065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19067 = cljs.core.get.call(null,map__19013_19065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19063);

cljs.core.println.call(null," ",arglists_19067);

if(cljs.core.truth_(doc_19066)){
cljs.core.println.call(null," ",doc_19066);
} else {
}


var G__19068 = cljs.core.next.call(null,seq__18991_19056__$1);
var G__19069 = null;
var G__19070 = (0);
var G__19071 = (0);
seq__18991_19041 = G__19068;
chunk__18992_19042 = G__19069;
count__18993_19043 = G__19070;
i__18994_19044 = G__19071;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__19015 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19016 = null;
var count__19017 = (0);
var i__19018 = (0);
while(true){
if((i__19018 < count__19017)){
var role = cljs.core._nth.call(null,chunk__19016,i__19018);
var temp__5457__auto___19072__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19072__$1)){
var spec_19073 = temp__5457__auto___19072__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19073));
} else {
}


var G__19074 = seq__19015;
var G__19075 = chunk__19016;
var G__19076 = count__19017;
var G__19077 = (i__19018 + (1));
seq__19015 = G__19074;
chunk__19016 = G__19075;
count__19017 = G__19076;
i__19018 = G__19077;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__19015);
if(temp__5457__auto____$1){
var seq__19015__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19015__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19015__$1);
var G__19078 = cljs.core.chunk_rest.call(null,seq__19015__$1);
var G__19079 = c__4550__auto__;
var G__19080 = cljs.core.count.call(null,c__4550__auto__);
var G__19081 = (0);
seq__19015 = G__19078;
chunk__19016 = G__19079;
count__19017 = G__19080;
i__19018 = G__19081;
continue;
} else {
var role = cljs.core.first.call(null,seq__19015__$1);
var temp__5457__auto___19082__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19082__$2)){
var spec_19083 = temp__5457__auto___19082__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19083));
} else {
}


var G__19084 = cljs.core.next.call(null,seq__19015__$1);
var G__19085 = null;
var G__19086 = (0);
var G__19087 = (0);
seq__19015 = G__19084;
chunk__19016 = G__19085;
count__19017 = G__19086;
i__19018 = G__19087;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19088 = cljs.core.conj.call(null,via,t);
var G__19089 = cljs.core.ex_cause.call(null,t);
via = G__19088;
t = G__19089;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19092 = datafied_throwable;
var map__19092__$1 = (((((!((map__19092 == null))))?(((((map__19092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19092):map__19092);
var via = cljs.core.get.call(null,map__19092__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19092__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19092__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19093 = cljs.core.last.call(null,via);
var map__19093__$1 = (((((!((map__19093 == null))))?(((((map__19093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19093):map__19093);
var type = cljs.core.get.call(null,map__19093__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19093__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19094 = data;
var map__19094__$1 = (((((!((map__19094 == null))))?(((((map__19094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19094):map__19094);
var problems = cljs.core.get.call(null,map__19094__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19094__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19094__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19095 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19095__$1 = (((((!((map__19095 == null))))?(((((map__19095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19095):map__19095);
var top_data = map__19095__$1;
var source = cljs.core.get.call(null,map__19095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19100 = phase;
var G__19100__$1 = (((G__19100 instanceof cljs.core.Keyword))?G__19100.fqn:null);
switch (G__19100__$1) {
case "read-source":
var map__19101 = data;
var map__19101__$1 = (((((!((map__19101 == null))))?(((((map__19101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19101):map__19101);
var line = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19103 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19103__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19103,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19103);
var G__19103__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19103__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19103__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19103__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19104 = top_data;
var G__19104__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19104,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19104);
var G__19104__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19104__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19104__$1);
var G__19104__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19104__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19104__$2);
var G__19104__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19104__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19104__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19104__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19104__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19105 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19105,(0),null);
var method = cljs.core.nth.call(null,vec__19105,(1),null);
var file = cljs.core.nth.call(null,vec__19105,(2),null);
var line = cljs.core.nth.call(null,vec__19105,(3),null);
var G__19108 = top_data;
var G__19108__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19108,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19108);
var G__19108__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19108__$1);
var G__19108__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__19108__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19108__$2);
var G__19108__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19108__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19108__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19108__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19108__$4;
}

break;
case "execution":
var vec__19109 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19109,(0),null);
var method = cljs.core.nth.call(null,vec__19109,(1),null);
var file = cljs.core.nth.call(null,vec__19109,(2),null);
var line = cljs.core.nth.call(null,vec__19109,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__19109,source__$1,method,file,line,G__19100,G__19100__$1,map__19092,map__19092__$1,via,trace,phase,map__19093,map__19093__$1,type,message,data,map__19094,map__19094__$1,problems,fn,caller,map__19095,map__19095__$1,top_data,source){
return (function (p1__19091_SHARP_){
var or__4131__auto__ = (p1__19091_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19091_SHARP_);
}
});})(vec__19109,source__$1,method,file,line,G__19100,G__19100__$1,map__19092,map__19092__$1,via,trace,phase,map__19093,map__19093__$1,type,message,data,map__19094,map__19094__$1,problems,fn,caller,map__19095,map__19095__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19112 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19112__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19112,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19112);
var G__19112__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19112__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19112__$1);
var G__19112__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19112__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19112__$2);
var G__19112__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19112__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19112__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19112__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19112__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19100__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19116){
var map__19117 = p__19116;
var map__19117__$1 = (((((!((map__19117 == null))))?(((((map__19117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19117):map__19117);
var triage_data = map__19117__$1;
var phase = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19117__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19119 = phase;
var G__19119__$1 = (((G__19119 instanceof cljs.core.Keyword))?G__19119.fqn:null);
switch (G__19119__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19120_19129 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19121_19130 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19122_19131 = true;
var _STAR_print_fn_STAR__temp_val__19123_19132 = ((function (_STAR_print_newline_STAR__orig_val__19120_19129,_STAR_print_fn_STAR__orig_val__19121_19130,_STAR_print_newline_STAR__temp_val__19122_19131,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19120_19129,_STAR_print_fn_STAR__orig_val__19121_19130,_STAR_print_newline_STAR__temp_val__19122_19131,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19122_19131;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19123_19132;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19120_19129,_STAR_print_fn_STAR__orig_val__19121_19130,_STAR_print_newline_STAR__temp_val__19122_19131,_STAR_print_fn_STAR__temp_val__19123_19132,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19120_19129,_STAR_print_fn_STAR__orig_val__19121_19130,_STAR_print_newline_STAR__temp_val__19122_19131,_STAR_print_fn_STAR__temp_val__19123_19132,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19114_SHARP_){
return cljs.core.dissoc.call(null,p1__19114_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19120_19129,_STAR_print_fn_STAR__orig_val__19121_19130,_STAR_print_newline_STAR__temp_val__19122_19131,_STAR_print_fn_STAR__temp_val__19123_19132,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19120_19129,_STAR_print_fn_STAR__orig_val__19121_19130,_STAR_print_newline_STAR__temp_val__19122_19131,_STAR_print_fn_STAR__temp_val__19123_19132,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19121_19130;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19120_19129;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19124_19133 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19125_19134 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19126_19135 = true;
var _STAR_print_fn_STAR__temp_val__19127_19136 = ((function (_STAR_print_newline_STAR__orig_val__19124_19133,_STAR_print_fn_STAR__orig_val__19125_19134,_STAR_print_newline_STAR__temp_val__19126_19135,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19124_19133,_STAR_print_fn_STAR__orig_val__19125_19134,_STAR_print_newline_STAR__temp_val__19126_19135,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19126_19135;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19127_19136;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19124_19133,_STAR_print_fn_STAR__orig_val__19125_19134,_STAR_print_newline_STAR__temp_val__19126_19135,_STAR_print_fn_STAR__temp_val__19127_19136,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19124_19133,_STAR_print_fn_STAR__orig_val__19125_19134,_STAR_print_newline_STAR__temp_val__19126_19135,_STAR_print_fn_STAR__temp_val__19127_19136,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19115_SHARP_){
return cljs.core.dissoc.call(null,p1__19115_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19124_19133,_STAR_print_fn_STAR__orig_val__19125_19134,_STAR_print_newline_STAR__temp_val__19126_19135,_STAR_print_fn_STAR__temp_val__19127_19136,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19124_19133,_STAR_print_fn_STAR__orig_val__19125_19134,_STAR_print_newline_STAR__temp_val__19126_19135,_STAR_print_fn_STAR__temp_val__19127_19136,sb__4661__auto__,G__19119,G__19119__$1,loc,class_name,simple_class,cause_type,format,map__19117,map__19117__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19125_19134;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19124_19133;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19119__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
