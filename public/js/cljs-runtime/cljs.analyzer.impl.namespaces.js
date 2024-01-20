goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__16657 = libspec;
var seq__16658 = cljs.core.seq(vec__16657);
var first__16659 = cljs.core.first(seq__16658);
var seq__16658__$1 = cljs.core.next(seq__16658);
var lib = first__16659;
var spec = seq__16658__$1;
var libspec__$1 = vec__16657;
var vec__16660 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16660,(0),null);
var vec__16663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16660,(1),null);
var seq__16664 = cljs.core.seq(vec__16663);
var first__16665 = cljs.core.first(seq__16664);
var seq__16664__$1 = cljs.core.next(seq__16664);
var _ = first__16665;
var first__16665__$1 = cljs.core.first(seq__16664__$1);
var seq__16664__$2 = cljs.core.next(seq__16664__$1);
var alias = first__16665__$1;
var post_spec = seq__16664__$2;
var post = vec__16663;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__16675 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16675,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__16675;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__16680 = cljs.core.seq(new_as_aliases);
var chunk__16681 = null;
var count__16682 = (0);
var i__16683 = (0);
while(true){
if((i__16683 < count__16682)){
var vec__16693 = chunk__16681.cljs$core$IIndexed$_nth$arity$2(null,i__16683);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__16718 = seq__16680;
var G__16719 = chunk__16681;
var G__16720 = count__16682;
var G__16721 = (i__16683 + (1));
seq__16680 = G__16718;
chunk__16681 = G__16719;
count__16682 = G__16720;
i__16683 = G__16721;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16680);
if(temp__5804__auto__){
var seq__16680__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16680__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16680__$1);
var G__16723 = cljs.core.chunk_rest(seq__16680__$1);
var G__16724 = c__5568__auto__;
var G__16725 = cljs.core.count(c__5568__auto__);
var G__16726 = (0);
seq__16680 = G__16723;
chunk__16681 = G__16724;
count__16682 = G__16725;
i__16683 = G__16726;
continue;
} else {
var vec__16701 = cljs.core.first(seq__16680__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16701,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16701,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__16727 = cljs.core.next(seq__16680__$1);
var G__16728 = null;
var G__16729 = (0);
var G__16730 = (0);
seq__16680 = G__16727;
chunk__16681 = G__16728;
count__16682 = G__16729;
i__16683 = G__16730;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__16705 = arguments.length;
switch (G__16705) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__16706 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__16706__$1 = cljs.core.__destructure_map(map__16706);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16706__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16706__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__16707 = ret__$1;
var G__16707__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__16707,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__16707);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__16707__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__16707__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16708,p__16709){
var map__16710 = p__16708;
var map__16710__$1 = cljs.core.__destructure_map(map__16710);
var ret__$1 = map__16710__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16710__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__16711 = p__16709;
var seq__16712 = cljs.core.seq(vec__16711);
var first__16713 = cljs.core.first(seq__16712);
var seq__16712__$1 = cljs.core.next(seq__16712);
var spec_key = first__16713;
var libspecs = seq__16712__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__16714 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__16714__$1 = cljs.core.__destructure_map(map__16714);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16714__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16714__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__16715 = ret__$1;
var G__16715__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__16715,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__16715);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__16715__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__16715__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
