goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15446__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15447__i = 0, G__15447__a = new Array(arguments.length -  0);
while (G__15447__i < G__15447__a.length) {G__15447__a[G__15447__i] = arguments[G__15447__i + 0]; ++G__15447__i;}
  args = new cljs.core.IndexedSeq(G__15447__a,0,null);
} 
return G__15446__delegate.call(this,args);};
G__15446.cljs$lang$maxFixedArity = 0;
G__15446.cljs$lang$applyTo = (function (arglist__15448){
var args = cljs.core.seq(arglist__15448);
return G__15446__delegate(args);
});
G__15446.cljs$core$IFn$_invoke$arity$variadic = G__15446__delegate;
return G__15446;
})()
);

(o.error = (function() { 
var G__15449__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15450__i = 0, G__15450__a = new Array(arguments.length -  0);
while (G__15450__i < G__15450__a.length) {G__15450__a[G__15450__i] = arguments[G__15450__i + 0]; ++G__15450__i;}
  args = new cljs.core.IndexedSeq(G__15450__a,0,null);
} 
return G__15449__delegate.call(this,args);};
G__15449.cljs$lang$maxFixedArity = 0;
G__15449.cljs$lang$applyTo = (function (arglist__15451){
var args = cljs.core.seq(arglist__15451);
return G__15449__delegate(args);
});
G__15449.cljs$core$IFn$_invoke$arity$variadic = G__15449__delegate;
return G__15449;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map