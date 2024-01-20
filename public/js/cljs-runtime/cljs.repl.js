goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18462){
var map__18470 = p__18462;
var map__18470__$1 = cljs.core.__destructure_map(map__18470);
var m = map__18470__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18476_18764 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18477_18765 = null;
var count__18478_18766 = (0);
var i__18479_18767 = (0);
while(true){
if((i__18479_18767 < count__18478_18766)){
var f_18770 = chunk__18477_18765.cljs$core$IIndexed$_nth$arity$2(null,i__18479_18767);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18770], 0));


var G__18771 = seq__18476_18764;
var G__18772 = chunk__18477_18765;
var G__18773 = count__18478_18766;
var G__18774 = (i__18479_18767 + (1));
seq__18476_18764 = G__18771;
chunk__18477_18765 = G__18772;
count__18478_18766 = G__18773;
i__18479_18767 = G__18774;
continue;
} else {
var temp__5804__auto___18775 = cljs.core.seq(seq__18476_18764);
if(temp__5804__auto___18775){
var seq__18476_18776__$1 = temp__5804__auto___18775;
if(cljs.core.chunked_seq_QMARK_(seq__18476_18776__$1)){
var c__5568__auto___18777 = cljs.core.chunk_first(seq__18476_18776__$1);
var G__18778 = cljs.core.chunk_rest(seq__18476_18776__$1);
var G__18779 = c__5568__auto___18777;
var G__18780 = cljs.core.count(c__5568__auto___18777);
var G__18781 = (0);
seq__18476_18764 = G__18778;
chunk__18477_18765 = G__18779;
count__18478_18766 = G__18780;
i__18479_18767 = G__18781;
continue;
} else {
var f_18782 = cljs.core.first(seq__18476_18776__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18782], 0));


var G__18783 = cljs.core.next(seq__18476_18776__$1);
var G__18784 = null;
var G__18785 = (0);
var G__18786 = (0);
seq__18476_18764 = G__18783;
chunk__18477_18765 = G__18784;
count__18478_18766 = G__18785;
i__18479_18767 = G__18786;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18787 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18787], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18787)))?cljs.core.second(arglists_18787):arglists_18787)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18496_18795 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18497_18796 = null;
var count__18498_18797 = (0);
var i__18499_18798 = (0);
while(true){
if((i__18499_18798 < count__18498_18797)){
var vec__18538_18805 = chunk__18497_18796.cljs$core$IIndexed$_nth$arity$2(null,i__18499_18798);
var name_18806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18538_18805,(0),null);
var map__18541_18807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18538_18805,(1),null);
var map__18541_18808__$1 = cljs.core.__destructure_map(map__18541_18807);
var doc_18809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18541_18808__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18541_18808__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18806], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18810], 0));

if(cljs.core.truth_(doc_18809)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18809], 0));
} else {
}


var G__18820 = seq__18496_18795;
var G__18821 = chunk__18497_18796;
var G__18822 = count__18498_18797;
var G__18823 = (i__18499_18798 + (1));
seq__18496_18795 = G__18820;
chunk__18497_18796 = G__18821;
count__18498_18797 = G__18822;
i__18499_18798 = G__18823;
continue;
} else {
var temp__5804__auto___18824 = cljs.core.seq(seq__18496_18795);
if(temp__5804__auto___18824){
var seq__18496_18829__$1 = temp__5804__auto___18824;
if(cljs.core.chunked_seq_QMARK_(seq__18496_18829__$1)){
var c__5568__auto___18831 = cljs.core.chunk_first(seq__18496_18829__$1);
var G__18832 = cljs.core.chunk_rest(seq__18496_18829__$1);
var G__18833 = c__5568__auto___18831;
var G__18835 = cljs.core.count(c__5568__auto___18831);
var G__18837 = (0);
seq__18496_18795 = G__18832;
chunk__18497_18796 = G__18833;
count__18498_18797 = G__18835;
i__18499_18798 = G__18837;
continue;
} else {
var vec__18553_18841 = cljs.core.first(seq__18496_18829__$1);
var name_18842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18553_18841,(0),null);
var map__18556_18843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18553_18841,(1),null);
var map__18556_18844__$1 = cljs.core.__destructure_map(map__18556_18843);
var doc_18845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18556_18844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18556_18844__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18842], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18846], 0));

if(cljs.core.truth_(doc_18845)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18845], 0));
} else {
}


var G__18857 = cljs.core.next(seq__18496_18829__$1);
var G__18858 = null;
var G__18859 = (0);
var G__18860 = (0);
seq__18496_18795 = G__18857;
chunk__18497_18796 = G__18858;
count__18498_18797 = G__18859;
i__18499_18798 = G__18860;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18579 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18580 = null;
var count__18581 = (0);
var i__18582 = (0);
while(true){
if((i__18582 < count__18581)){
var role = chunk__18580.cljs$core$IIndexed$_nth$arity$2(null,i__18582);
var temp__5804__auto___18873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18873__$1)){
var spec_18875 = temp__5804__auto___18873__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18875)], 0));
} else {
}


var G__18878 = seq__18579;
var G__18879 = chunk__18580;
var G__18880 = count__18581;
var G__18881 = (i__18582 + (1));
seq__18579 = G__18878;
chunk__18580 = G__18879;
count__18581 = G__18880;
i__18582 = G__18881;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18579);
if(temp__5804__auto____$1){
var seq__18579__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18579__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18579__$1);
var G__18895 = cljs.core.chunk_rest(seq__18579__$1);
var G__18896 = c__5568__auto__;
var G__18897 = cljs.core.count(c__5568__auto__);
var G__18898 = (0);
seq__18579 = G__18895;
chunk__18580 = G__18896;
count__18581 = G__18897;
i__18582 = G__18898;
continue;
} else {
var role = cljs.core.first(seq__18579__$1);
var temp__5804__auto___18899__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18899__$2)){
var spec_18900 = temp__5804__auto___18899__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18900)], 0));
} else {
}


var G__18901 = cljs.core.next(seq__18579__$1);
var G__18902 = null;
var G__18903 = (0);
var G__18904 = (0);
seq__18579 = G__18901;
chunk__18580 = G__18902;
count__18581 = G__18903;
i__18582 = G__18904;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18915 = cljs.core.ex_cause(t);
via = G__18914;
t = G__18915;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__18624 = datafied_throwable;
var map__18624__$1 = cljs.core.__destructure_map(map__18624);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18624__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18624__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18624__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18625 = cljs.core.last(via);
var map__18625__$1 = cljs.core.__destructure_map(map__18625);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18625__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18625__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18626 = data;
var map__18626__$1 = cljs.core.__destructure_map(map__18626);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18627 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18627__$1 = cljs.core.__destructure_map(map__18627);
var top_data = map__18627__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18630 = phase;
var G__18630__$1 = (((G__18630 instanceof cljs.core.Keyword))?G__18630.fqn:null);
switch (G__18630__$1) {
case "read-source":
var map__18632 = data;
var map__18632__$1 = cljs.core.__destructure_map(map__18632);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18635 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18635__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18635,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18635);
var G__18635__$2 = (cljs.core.truth_((function (){var fexpr__18636 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18636.cljs$core$IFn$_invoke$arity$1 ? fexpr__18636.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18636.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18635__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18635__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18635__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18635__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18637 = top_data;
var G__18637__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18637,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18637);
var G__18637__$2 = (cljs.core.truth_((function (){var fexpr__18638 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18638.cljs$core$IFn$_invoke$arity$1 ? fexpr__18638.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18638.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18637__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18637__$1);
var G__18637__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18637__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18637__$2);
var G__18637__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18637__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18637__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18637__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18637__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18649 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(3),null);
var G__18655 = top_data;
var G__18655__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18655);
var G__18655__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18655__$1);
var G__18655__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18655__$2);
var G__18655__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18655__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18655__$4;
}

break;
case "execution":
var vec__18656 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18622_SHARP_){
var or__5045__auto__ = (p1__18622_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18662 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18662.cljs$core$IFn$_invoke$arity$1 ? fexpr__18662.cljs$core$IFn$_invoke$arity$1(p1__18622_SHARP_) : fexpr__18662.call(null,p1__18622_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18664 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18664__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18664,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18664);
var G__18664__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18664__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18664__$1);
var G__18664__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18664__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18664__$2);
var G__18664__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18664__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18664__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18664__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18664__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18630__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18672){
var map__18673 = p__18672;
var map__18673__$1 = cljs.core.__destructure_map(map__18673);
var triage_data = map__18673__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18677 = phase;
var G__18677__$1 = (((G__18677 instanceof cljs.core.Keyword))?G__18677.fqn:null);
switch (G__18677__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18678 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18679 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18680 = loc;
var G__18681 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18682_19026 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18683_19027 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18684_19028 = true;
var _STAR_print_fn_STAR__temp_val__18685_19029 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18684_19028);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18685_19029);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18669_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18669_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18683_19027);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18682_19026);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18678,G__18679,G__18680,G__18681) : format.call(null,G__18678,G__18679,G__18680,G__18681));

break;
case "macroexpansion":
var G__18701 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18702 = cause_type;
var G__18703 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18704 = loc;
var G__18705 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18701,G__18702,G__18703,G__18704,G__18705) : format.call(null,G__18701,G__18702,G__18703,G__18704,G__18705));

break;
case "compile-syntax-check":
var G__18706 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18707 = cause_type;
var G__18708 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18709 = loc;
var G__18710 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18706,G__18707,G__18708,G__18709,G__18710) : format.call(null,G__18706,G__18707,G__18708,G__18709,G__18710));

break;
case "compilation":
var G__18711 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18712 = cause_type;
var G__18713 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18714 = loc;
var G__18715 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18711,G__18712,G__18713,G__18714,G__18715) : format.call(null,G__18711,G__18712,G__18713,G__18714,G__18715));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18716 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18717 = symbol;
var G__18718 = loc;
var G__18719 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18720_19065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18721_19066 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18722_19067 = true;
var _STAR_print_fn_STAR__temp_val__18723_19068 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18722_19067);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18723_19068);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18670_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18670_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18721_19066);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18720_19065);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18716,G__18717,G__18718,G__18719) : format.call(null,G__18716,G__18717,G__18718,G__18719));
} else {
var G__18724 = "Execution error%s at %s(%s).\n%s\n";
var G__18725 = cause_type;
var G__18726 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18727 = loc;
var G__18728 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18724,G__18725,G__18726,G__18727,G__18728) : format.call(null,G__18724,G__18725,G__18726,G__18727,G__18728));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18677__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
