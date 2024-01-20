goog.provide('spec_tools.openapi.core');
spec_tools.openapi.core.spec_dispatch = (function spec_tools$openapi$core$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.openapi !== 'undefined') && (typeof spec_tools.openapi.core !== 'undefined') && (typeof spec_tools.openapi.core.accept_spec !== 'undefined')){
} else {
spec_tools.openapi.core.accept_spec = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__19599 = cljs.core.get_global_hierarchy;
return (fexpr__19599.cljs$core$IFn$_invoke$arity$0 ? fexpr__19599.cljs$core$IFn$_invoke$arity$0() : fexpr__19599.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.openapi.core","accept-spec"),spec_tools.openapi.core.spec_dispatch,new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),children], null)], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","sequential?","clojure.core/sequential?",1943138316,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),children], null)], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enum","enum",1679018432),children,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),(function (dispatch,spec,children,options){
var vec__19608 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19608,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19608,(1),null);
var openapi_meta = spec_tools.impl.unlift_keys(data,"openapi");
var or__5045__auto__ = new cljs.core.Keyword(null,"openapi","openapi",1860088859).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options),openapi_meta], 0));
}
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094),(function (dispatch,spec,children,options){
return spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options);
}));
/**
 * Generate OpenAPI3 schema matching the given clojure.spec spec.
 */
spec_tools.openapi.core.transform = (function spec_tools$openapi$core$transform(var_args){
var G__19617 = arguments.length;
switch (G__19617) {
case 1:
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,spec_tools.openapi.core.accept_spec,options);
}));

(spec_tools.openapi.core.transform.cljs$lang$maxFixedArity = 2);

spec_tools.openapi.core.is_nilable_QMARK_ = (function spec_tools$openapi$core$is_nilable_QMARK_(spec){
return ((cljs.core.contains_QMARK_(spec,new cljs.core.Keyword(null,"oneOf","oneOf",1209080187))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)))) && (cljs.core.contains_QMARK_(cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)),"null")))));
});
spec_tools.openapi.core.extract_nilable = (function spec_tools$openapi$core$extract_nilable(spec){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19629_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__19629_SHARP_),"null");
}),new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)));
});
spec_tools.openapi.core.extract_single_param = (function spec_tools$openapi$core$extract_single_param(in$,spec){
var nilable_QMARK_ = spec_tools.openapi.core.is_nilable_QMARK_(spec);
var new_spec = ((nilable_QMARK_)?spec_tools.openapi.core.extract_nilable(spec):spec);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new_spec);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new_spec);
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new_spec);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__19636 = in$;
var G__19636__$1 = (((G__19636 instanceof cljs.core.Keyword))?G__19636.fqn:null);
switch (G__19636__$1) {
case "path":
return true;

break;
default:
return (!(nilable_QMARK_));

}
})(),new cljs.core.Keyword(null,"schema","schema",-1582001791),new_spec], null);
});
spec_tools.openapi.core.extract_object_param = (function spec_tools$openapi$core$extract_object_param(in$,p__19640){
var map__19641 = p__19640;
var map__19641__$1 = cljs.core.__destructure_map(map__19641);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19641__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19641__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__19642){
var vec__19643 = p__19642;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(0),null);
var map__19646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(1),null);
var map__19646__$1 = cljs.core.__destructure_map(map__19646);
var schema = map__19646__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19646__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5045__auto__ = description;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__19647 = in$;
var G__19647__$1 = (((G__19647 instanceof cljs.core.Keyword))?G__19647.fqn:null);
switch (G__19647__$1) {
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(cljs.core.set(required),k);

}
})(),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null);
}),properties);
});
spec_tools.openapi.core.extract_parameter = (function spec_tools$openapi$core$extract_parameter(in$,spec){
var parameter_spec = spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec);
var object_QMARK_ = ((cljs.core.contains_QMARK_(parameter_spec,new cljs.core.Keyword(null,"properties","properties",685819552))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parameter_spec))));
if(object_QMARK_){
return spec_tools.openapi.core.extract_object_param(in$,parameter_spec);
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[spec_tools.openapi.core.extract_single_param(in$,parameter_spec)],null));
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.openapi !== 'undefined') && (typeof spec_tools.openapi.core !== 'undefined') && (typeof spec_tools.openapi.core.expand !== 'undefined')){
} else {
spec_tools.openapi.core.expand = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__19651 = cljs.core.get_global_hierarchy;
return (fexpr__19651.cljs$core$IFn$_invoke$arity$0 ? fexpr__19651.cljs$core$IFn$_invoke$arity$0() : fexpr__19651.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.openapi.core","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","schemas","spec-tools.openapi.core/schemas",-459896419),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5523__auto__ = (function spec_tools$openapi$core$iter__19658(s__19659){
return (new cljs.core.LazySeq(null,(function (){
var s__19659__$1 = s__19659;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19659__$1);
if(temp__5804__auto__){
var s__19659__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19659__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19659__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19661 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19660 = (0);
while(true){
if((i__19660 < size__5522__auto__)){
var vec__19662 = cljs.core._nth(c__5521__auto__,i__19660);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19662,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19662,(1),null);
cljs.core.chunk_append(b__19661,cljs.core.PersistentArrayMap.createAsIfByAssoc([name,spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)]));

var G__19763 = (i__19660 + (1));
i__19660 = G__19763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19661),spec_tools$openapi$core$iter__19658(cljs.core.chunk_rest(s__19659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19661),null);
}
} else {
var vec__19667 = cljs.core.first(s__19659__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19667,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19667,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([name,spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)]),spec_tools$openapi$core$iter__19658(cljs.core.rest(s__19659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","content","spec-tools.openapi.core/content",-1096703814),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5523__auto__ = (function spec_tools$openapi$core$iter__19674(s__19675){
return (new cljs.core.LazySeq(null,(function (){
var s__19675__$1 = s__19675;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19675__$1);
if(temp__5804__auto__){
var s__19675__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19675__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19675__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19677 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19676 = (0);
while(true){
if((i__19676 < size__5522__auto__)){
var vec__19686 = cljs.core._nth(c__5521__auto__,i__19676);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,(1),null);
cljs.core.chunk_append(b__19677,cljs.core.PersistentArrayMap.createAsIfByAssoc([content_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)], null)]));

var G__19764 = (i__19676 + (1));
i__19676 = G__19764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19677),spec_tools$openapi$core$iter__19674(cljs.core.chunk_rest(s__19675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19677),null);
}
} else {
var vec__19690 = cljs.core.first(s__19675__$2);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([content_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)], null)]),spec_tools$openapi$core$iter__19674(cljs.core.rest(s__19675__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","parameters","spec-tools.openapi.core/parameters",1686119738),(function (_,v,acc,___$1){
var old = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__19701){
var vec__19702 = p__19701;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19702,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19702,(1),null);
return spec_tools.openapi.core.extract_parameter(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__19705,p){
var vec__19706 = p__19705;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(1),null);
var acc__$1 = vec__19706;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null,c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","headers","spec-tools.openapi.core/headers",336203721),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5523__auto__ = (function spec_tools$openapi$core$iter__19712(s__19713){
return (new cljs.core.LazySeq(null,(function (){
var s__19713__$1 = s__19713;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19713__$1);
if(temp__5804__auto__){
var s__19713__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19713__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19713__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19715 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19714 = (0);
while(true){
if((i__19714 < size__5522__auto__)){
var vec__19717 = cljs.core._nth(c__5521__auto__,i__19714);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19717,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19717,(1),null);
cljs.core.chunk_append(b__19715,cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.openapi.core.extract_single_param(new cljs.core.Keyword(null,"header","header",119441134),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"name","name",1843675177))]));

var G__19765 = (i__19714 + (1));
i__19714 = G__19765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19715),spec_tools$openapi$core$iter__19712(cljs.core.chunk_rest(s__19713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19715),null);
}
} else {
var vec__19720 = cljs.core.first(s__19713__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19720,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19720,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.openapi.core.extract_single_param(new cljs.core.Keyword(null,"header","header",119441134),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"name","name",1843675177))]),spec_tools$openapi$core$iter__19712(cljs.core.rest(s__19713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand_qualified_keywords = (function spec_tools$openapi$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(spec_tools.openapi.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null,k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),spec_tools.openapi.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options)], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a OpenAPI3 spec. Input data must conform to the
 *   Swagger3 Spec (https://swagger.io/specification/) with a exception that it
 *   can have any qualified keywords which are expanded with the
 *   `spec-tools.openapi.core/expand` multimethod.
 */
spec_tools.openapi.core.openapi_spec = (function spec_tools$openapi$core$openapi_spec(var_args){
var G__19724 = arguments.length;
switch (G__19724) {
case 1:
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return spec_tools.openapi.core.expand_qualified_keywords(x,options);
}));

(spec_tools.openapi.core.openapi_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.openapi.core.js.map
