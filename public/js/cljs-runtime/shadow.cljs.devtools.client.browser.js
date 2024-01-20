goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21073 = arguments.length;
var i__5770__auto___21074 = (0);
while(true){
if((i__5770__auto___21074 < len__5769__auto___21073)){
args__5775__auto__.push((arguments[i__5770__auto___21074]));

var G__21075 = (i__5770__auto___21074 + (1));
i__5770__auto___21074 = G__21075;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20459){
var G__20460 = cljs.core.first(seq20459);
var seq20459__$1 = cljs.core.next(seq20459);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20460,seq20459__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20464 = cljs.core.seq(sources);
var chunk__20465 = null;
var count__20466 = (0);
var i__20467 = (0);
while(true){
if((i__20467 < count__20466)){
var map__20474 = chunk__20465.cljs$core$IIndexed$_nth$arity$2(null,i__20467);
var map__20474__$1 = cljs.core.__destructure_map(map__20474);
var src = map__20474__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20475){var e_21076 = e20475;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21076);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21076.message)].join('')));
}

var G__21077 = seq__20464;
var G__21078 = chunk__20465;
var G__21079 = count__20466;
var G__21080 = (i__20467 + (1));
seq__20464 = G__21077;
chunk__20465 = G__21078;
count__20466 = G__21079;
i__20467 = G__21080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20464);
if(temp__5804__auto__){
var seq__20464__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20464__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20464__$1);
var G__21081 = cljs.core.chunk_rest(seq__20464__$1);
var G__21082 = c__5568__auto__;
var G__21083 = cljs.core.count(c__5568__auto__);
var G__21084 = (0);
seq__20464 = G__21081;
chunk__20465 = G__21082;
count__20466 = G__21083;
i__20467 = G__21084;
continue;
} else {
var map__20476 = cljs.core.first(seq__20464__$1);
var map__20476__$1 = cljs.core.__destructure_map(map__20476);
var src = map__20476__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20477){var e_21085 = e20477;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21085);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21085.message)].join('')));
}

var G__21086 = cljs.core.next(seq__20464__$1);
var G__21087 = null;
var G__21088 = (0);
var G__21089 = (0);
seq__20464 = G__21086;
chunk__20465 = G__21087;
count__20466 = G__21088;
i__20467 = G__21089;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20479 = cljs.core.seq(js_requires);
var chunk__20480 = null;
var count__20481 = (0);
var i__20482 = (0);
while(true){
if((i__20482 < count__20481)){
var js_ns = chunk__20480.cljs$core$IIndexed$_nth$arity$2(null,i__20482);
var require_str_21090 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21090);


var G__21091 = seq__20479;
var G__21092 = chunk__20480;
var G__21093 = count__20481;
var G__21094 = (i__20482 + (1));
seq__20479 = G__21091;
chunk__20480 = G__21092;
count__20481 = G__21093;
i__20482 = G__21094;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20479);
if(temp__5804__auto__){
var seq__20479__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20479__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20479__$1);
var G__21095 = cljs.core.chunk_rest(seq__20479__$1);
var G__21096 = c__5568__auto__;
var G__21097 = cljs.core.count(c__5568__auto__);
var G__21098 = (0);
seq__20479 = G__21095;
chunk__20480 = G__21096;
count__20481 = G__21097;
i__20482 = G__21098;
continue;
} else {
var js_ns = cljs.core.first(seq__20479__$1);
var require_str_21099 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21099);


var G__21101 = cljs.core.next(seq__20479__$1);
var G__21102 = null;
var G__21103 = (0);
var G__21104 = (0);
seq__20479 = G__21101;
chunk__20480 = G__21102;
count__20481 = G__21103;
i__20482 = G__21104;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20485){
var map__20486 = p__20485;
var map__20486__$1 = cljs.core.__destructure_map(map__20486);
var msg = map__20486__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20486__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20486__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20487(s__20488){
return (new cljs.core.LazySeq(null,(function (){
var s__20488__$1 = s__20488;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20488__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20493 = cljs.core.first(xs__6360__auto__);
var map__20493__$1 = cljs.core.__destructure_map(map__20493);
var src = map__20493__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20493__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20488__$1,map__20493,map__20493__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20486,map__20486__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20487_$_iter__20489(s__20490){
return (new cljs.core.LazySeq(null,((function (s__20488__$1,map__20493,map__20493__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20486,map__20486__$1,msg,info,reload_info){
return (function (){
var s__20490__$1 = s__20490;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20490__$1);
if(temp__5804__auto____$1){
var s__20490__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20490__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20490__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20492 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20491 = (0);
while(true){
if((i__20491 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20491);
cljs.core.chunk_append(b__20492,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21106 = (i__20491 + (1));
i__20491 = G__21106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20492),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20487_$_iter__20489(cljs.core.chunk_rest(s__20490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20492),null);
}
} else {
var warning = cljs.core.first(s__20490__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20487_$_iter__20489(cljs.core.rest(s__20490__$2)));
}
} else {
return null;
}
break;
}
});})(s__20488__$1,map__20493,map__20493__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20486,map__20486__$1,msg,info,reload_info))
,null,null));
});})(s__20488__$1,map__20493,map__20493__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20486,map__20486__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20487(cljs.core.rest(s__20488__$1)));
} else {
var G__21107 = cljs.core.rest(s__20488__$1);
s__20488__$1 = G__21107;
continue;
}
} else {
var G__21108 = cljs.core.rest(s__20488__$1);
s__20488__$1 = G__21108;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20494_21109 = cljs.core.seq(warnings);
var chunk__20495_21110 = null;
var count__20496_21111 = (0);
var i__20497_21112 = (0);
while(true){
if((i__20497_21112 < count__20496_21111)){
var map__20501_21113 = chunk__20495_21110.cljs$core$IIndexed$_nth$arity$2(null,i__20497_21112);
var map__20501_21114__$1 = cljs.core.__destructure_map(map__20501_21113);
var w_21115 = map__20501_21114__$1;
var msg_21116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20501_21114__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20501_21114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20501_21114__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20501_21114__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21119)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21117),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21118),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21116__$1)].join(''));


var G__21120 = seq__20494_21109;
var G__21121 = chunk__20495_21110;
var G__21122 = count__20496_21111;
var G__21123 = (i__20497_21112 + (1));
seq__20494_21109 = G__21120;
chunk__20495_21110 = G__21121;
count__20496_21111 = G__21122;
i__20497_21112 = G__21123;
continue;
} else {
var temp__5804__auto___21124 = cljs.core.seq(seq__20494_21109);
if(temp__5804__auto___21124){
var seq__20494_21125__$1 = temp__5804__auto___21124;
if(cljs.core.chunked_seq_QMARK_(seq__20494_21125__$1)){
var c__5568__auto___21126 = cljs.core.chunk_first(seq__20494_21125__$1);
var G__21127 = cljs.core.chunk_rest(seq__20494_21125__$1);
var G__21128 = c__5568__auto___21126;
var G__21129 = cljs.core.count(c__5568__auto___21126);
var G__21130 = (0);
seq__20494_21109 = G__21127;
chunk__20495_21110 = G__21128;
count__20496_21111 = G__21129;
i__20497_21112 = G__21130;
continue;
} else {
var map__20502_21131 = cljs.core.first(seq__20494_21125__$1);
var map__20502_21132__$1 = cljs.core.__destructure_map(map__20502_21131);
var w_21133 = map__20502_21132__$1;
var msg_21134__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502_21132__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502_21132__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502_21132__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502_21132__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21137)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21135),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21136),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21134__$1)].join(''));


var G__21138 = cljs.core.next(seq__20494_21125__$1);
var G__21139 = null;
var G__21140 = (0);
var G__21141 = (0);
seq__20494_21109 = G__21138;
chunk__20495_21110 = G__21139;
count__20496_21111 = G__21140;
i__20497_21112 = G__21141;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20484_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20484_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20508){
var map__20509 = p__20508;
var map__20509__$1 = cljs.core.__destructure_map(map__20509);
var msg = map__20509__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20510 = cljs.core.seq(updates);
var chunk__20512 = null;
var count__20513 = (0);
var i__20514 = (0);
while(true){
if((i__20514 < count__20513)){
var path = chunk__20512.cljs$core$IIndexed$_nth$arity$2(null,i__20514);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20846_21144 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20850_21145 = null;
var count__20851_21146 = (0);
var i__20852_21147 = (0);
while(true){
if((i__20852_21147 < count__20851_21146)){
var node_21148 = chunk__20850_21145.cljs$core$IIndexed$_nth$arity$2(null,i__20852_21147);
if(cljs.core.not(node_21148.shadow$old)){
var path_match_21149 = shadow.cljs.devtools.client.browser.match_paths(node_21148.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21149)){
var new_link_21150 = (function (){var G__20918 = node_21148.cloneNode(true);
G__20918.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21149),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20918;
})();
(node_21148.shadow$old = true);

(new_link_21150.onload = ((function (seq__20846_21144,chunk__20850_21145,count__20851_21146,i__20852_21147,seq__20510,chunk__20512,count__20513,i__20514,new_link_21150,path_match_21149,node_21148,path,map__20509,map__20509__$1,msg,updates,reload_info){
return (function (e){
var seq__20921_21153 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20923_21154 = null;
var count__20924_21155 = (0);
var i__20925_21156 = (0);
while(true){
if((i__20925_21156 < count__20924_21155)){
var map__20932_21157 = chunk__20923_21154.cljs$core$IIndexed$_nth$arity$2(null,i__20925_21156);
var map__20932_21158__$1 = cljs.core.__destructure_map(map__20932_21157);
var task_21159 = map__20932_21158__$1;
var fn_str_21160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20932_21158__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20932_21158__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21165 = goog.getObjectByName(fn_str_21160,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21161)].join(''));

(fn_obj_21165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21165.cljs$core$IFn$_invoke$arity$2(path,new_link_21150) : fn_obj_21165.call(null,path,new_link_21150));


var G__21166 = seq__20921_21153;
var G__21167 = chunk__20923_21154;
var G__21168 = count__20924_21155;
var G__21169 = (i__20925_21156 + (1));
seq__20921_21153 = G__21166;
chunk__20923_21154 = G__21167;
count__20924_21155 = G__21168;
i__20925_21156 = G__21169;
continue;
} else {
var temp__5804__auto___21170 = cljs.core.seq(seq__20921_21153);
if(temp__5804__auto___21170){
var seq__20921_21171__$1 = temp__5804__auto___21170;
if(cljs.core.chunked_seq_QMARK_(seq__20921_21171__$1)){
var c__5568__auto___21172 = cljs.core.chunk_first(seq__20921_21171__$1);
var G__21173 = cljs.core.chunk_rest(seq__20921_21171__$1);
var G__21174 = c__5568__auto___21172;
var G__21175 = cljs.core.count(c__5568__auto___21172);
var G__21176 = (0);
seq__20921_21153 = G__21173;
chunk__20923_21154 = G__21174;
count__20924_21155 = G__21175;
i__20925_21156 = G__21176;
continue;
} else {
var map__20937_21177 = cljs.core.first(seq__20921_21171__$1);
var map__20937_21178__$1 = cljs.core.__destructure_map(map__20937_21177);
var task_21179 = map__20937_21178__$1;
var fn_str_21180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937_21178__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937_21178__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21182 = goog.getObjectByName(fn_str_21180,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21181)].join(''));

(fn_obj_21182.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21182.cljs$core$IFn$_invoke$arity$2(path,new_link_21150) : fn_obj_21182.call(null,path,new_link_21150));


var G__21183 = cljs.core.next(seq__20921_21171__$1);
var G__21184 = null;
var G__21185 = (0);
var G__21186 = (0);
seq__20921_21153 = G__21183;
chunk__20923_21154 = G__21184;
count__20924_21155 = G__21185;
i__20925_21156 = G__21186;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21148);
});})(seq__20846_21144,chunk__20850_21145,count__20851_21146,i__20852_21147,seq__20510,chunk__20512,count__20513,i__20514,new_link_21150,path_match_21149,node_21148,path,map__20509,map__20509__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21149], 0));

goog.dom.insertSiblingAfter(new_link_21150,node_21148);


var G__21187 = seq__20846_21144;
var G__21188 = chunk__20850_21145;
var G__21189 = count__20851_21146;
var G__21190 = (i__20852_21147 + (1));
seq__20846_21144 = G__21187;
chunk__20850_21145 = G__21188;
count__20851_21146 = G__21189;
i__20852_21147 = G__21190;
continue;
} else {
var G__21191 = seq__20846_21144;
var G__21192 = chunk__20850_21145;
var G__21193 = count__20851_21146;
var G__21194 = (i__20852_21147 + (1));
seq__20846_21144 = G__21191;
chunk__20850_21145 = G__21192;
count__20851_21146 = G__21193;
i__20852_21147 = G__21194;
continue;
}
} else {
var G__21195 = seq__20846_21144;
var G__21196 = chunk__20850_21145;
var G__21197 = count__20851_21146;
var G__21198 = (i__20852_21147 + (1));
seq__20846_21144 = G__21195;
chunk__20850_21145 = G__21196;
count__20851_21146 = G__21197;
i__20852_21147 = G__21198;
continue;
}
} else {
var temp__5804__auto___21199 = cljs.core.seq(seq__20846_21144);
if(temp__5804__auto___21199){
var seq__20846_21200__$1 = temp__5804__auto___21199;
if(cljs.core.chunked_seq_QMARK_(seq__20846_21200__$1)){
var c__5568__auto___21201 = cljs.core.chunk_first(seq__20846_21200__$1);
var G__21202 = cljs.core.chunk_rest(seq__20846_21200__$1);
var G__21203 = c__5568__auto___21201;
var G__21204 = cljs.core.count(c__5568__auto___21201);
var G__21205 = (0);
seq__20846_21144 = G__21202;
chunk__20850_21145 = G__21203;
count__20851_21146 = G__21204;
i__20852_21147 = G__21205;
continue;
} else {
var node_21206 = cljs.core.first(seq__20846_21200__$1);
if(cljs.core.not(node_21206.shadow$old)){
var path_match_21207 = shadow.cljs.devtools.client.browser.match_paths(node_21206.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21207)){
var new_link_21208 = (function (){var G__20943 = node_21206.cloneNode(true);
G__20943.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21207),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20943;
})();
(node_21206.shadow$old = true);

(new_link_21208.onload = ((function (seq__20846_21144,chunk__20850_21145,count__20851_21146,i__20852_21147,seq__20510,chunk__20512,count__20513,i__20514,new_link_21208,path_match_21207,node_21206,seq__20846_21200__$1,temp__5804__auto___21199,path,map__20509,map__20509__$1,msg,updates,reload_info){
return (function (e){
var seq__20946_21209 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20948_21210 = null;
var count__20949_21211 = (0);
var i__20950_21212 = (0);
while(true){
if((i__20950_21212 < count__20949_21211)){
var map__20964_21213 = chunk__20948_21210.cljs$core$IIndexed$_nth$arity$2(null,i__20950_21212);
var map__20964_21214__$1 = cljs.core.__destructure_map(map__20964_21213);
var task_21215 = map__20964_21214__$1;
var fn_str_21216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964_21214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964_21214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21218 = goog.getObjectByName(fn_str_21216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21217)].join(''));

(fn_obj_21218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21218.cljs$core$IFn$_invoke$arity$2(path,new_link_21208) : fn_obj_21218.call(null,path,new_link_21208));


var G__21220 = seq__20946_21209;
var G__21221 = chunk__20948_21210;
var G__21222 = count__20949_21211;
var G__21223 = (i__20950_21212 + (1));
seq__20946_21209 = G__21220;
chunk__20948_21210 = G__21221;
count__20949_21211 = G__21222;
i__20950_21212 = G__21223;
continue;
} else {
var temp__5804__auto___21224__$1 = cljs.core.seq(seq__20946_21209);
if(temp__5804__auto___21224__$1){
var seq__20946_21225__$1 = temp__5804__auto___21224__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20946_21225__$1)){
var c__5568__auto___21226 = cljs.core.chunk_first(seq__20946_21225__$1);
var G__21227 = cljs.core.chunk_rest(seq__20946_21225__$1);
var G__21228 = c__5568__auto___21226;
var G__21229 = cljs.core.count(c__5568__auto___21226);
var G__21230 = (0);
seq__20946_21209 = G__21227;
chunk__20948_21210 = G__21228;
count__20949_21211 = G__21229;
i__20950_21212 = G__21230;
continue;
} else {
var map__20972_21231 = cljs.core.first(seq__20946_21225__$1);
var map__20972_21232__$1 = cljs.core.__destructure_map(map__20972_21231);
var task_21233 = map__20972_21232__$1;
var fn_str_21234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972_21232__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972_21232__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21236 = goog.getObjectByName(fn_str_21234,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21235)].join(''));

(fn_obj_21236.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21236.cljs$core$IFn$_invoke$arity$2(path,new_link_21208) : fn_obj_21236.call(null,path,new_link_21208));


var G__21237 = cljs.core.next(seq__20946_21225__$1);
var G__21238 = null;
var G__21239 = (0);
var G__21240 = (0);
seq__20946_21209 = G__21237;
chunk__20948_21210 = G__21238;
count__20949_21211 = G__21239;
i__20950_21212 = G__21240;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21206);
});})(seq__20846_21144,chunk__20850_21145,count__20851_21146,i__20852_21147,seq__20510,chunk__20512,count__20513,i__20514,new_link_21208,path_match_21207,node_21206,seq__20846_21200__$1,temp__5804__auto___21199,path,map__20509,map__20509__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21207], 0));

goog.dom.insertSiblingAfter(new_link_21208,node_21206);


var G__21241 = cljs.core.next(seq__20846_21200__$1);
var G__21242 = null;
var G__21243 = (0);
var G__21244 = (0);
seq__20846_21144 = G__21241;
chunk__20850_21145 = G__21242;
count__20851_21146 = G__21243;
i__20852_21147 = G__21244;
continue;
} else {
var G__21245 = cljs.core.next(seq__20846_21200__$1);
var G__21246 = null;
var G__21247 = (0);
var G__21248 = (0);
seq__20846_21144 = G__21245;
chunk__20850_21145 = G__21246;
count__20851_21146 = G__21247;
i__20852_21147 = G__21248;
continue;
}
} else {
var G__21249 = cljs.core.next(seq__20846_21200__$1);
var G__21250 = null;
var G__21251 = (0);
var G__21252 = (0);
seq__20846_21144 = G__21249;
chunk__20850_21145 = G__21250;
count__20851_21146 = G__21251;
i__20852_21147 = G__21252;
continue;
}
}
} else {
}
}
break;
}


var G__21253 = seq__20510;
var G__21254 = chunk__20512;
var G__21255 = count__20513;
var G__21256 = (i__20514 + (1));
seq__20510 = G__21253;
chunk__20512 = G__21254;
count__20513 = G__21255;
i__20514 = G__21256;
continue;
} else {
var G__21257 = seq__20510;
var G__21258 = chunk__20512;
var G__21259 = count__20513;
var G__21260 = (i__20514 + (1));
seq__20510 = G__21257;
chunk__20512 = G__21258;
count__20513 = G__21259;
i__20514 = G__21260;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20510);
if(temp__5804__auto__){
var seq__20510__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20510__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20510__$1);
var G__21261 = cljs.core.chunk_rest(seq__20510__$1);
var G__21262 = c__5568__auto__;
var G__21263 = cljs.core.count(c__5568__auto__);
var G__21264 = (0);
seq__20510 = G__21261;
chunk__20512 = G__21262;
count__20513 = G__21263;
i__20514 = G__21264;
continue;
} else {
var path = cljs.core.first(seq__20510__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20977_21265 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20981_21266 = null;
var count__20982_21267 = (0);
var i__20983_21268 = (0);
while(true){
if((i__20983_21268 < count__20982_21267)){
var node_21269 = chunk__20981_21266.cljs$core$IIndexed$_nth$arity$2(null,i__20983_21268);
if(cljs.core.not(node_21269.shadow$old)){
var path_match_21270 = shadow.cljs.devtools.client.browser.match_paths(node_21269.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21270)){
var new_link_21271 = (function (){var G__21015 = node_21269.cloneNode(true);
G__21015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21270),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21015;
})();
(node_21269.shadow$old = true);

(new_link_21271.onload = ((function (seq__20977_21265,chunk__20981_21266,count__20982_21267,i__20983_21268,seq__20510,chunk__20512,count__20513,i__20514,new_link_21271,path_match_21270,node_21269,path,seq__20510__$1,temp__5804__auto__,map__20509,map__20509__$1,msg,updates,reload_info){
return (function (e){
var seq__21016_21272 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21018_21273 = null;
var count__21019_21274 = (0);
var i__21020_21275 = (0);
while(true){
if((i__21020_21275 < count__21019_21274)){
var map__21026_21276 = chunk__21018_21273.cljs$core$IIndexed$_nth$arity$2(null,i__21020_21275);
var map__21026_21277__$1 = cljs.core.__destructure_map(map__21026_21276);
var task_21278 = map__21026_21277__$1;
var fn_str_21279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026_21277__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026_21277__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21281 = goog.getObjectByName(fn_str_21279,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21280)].join(''));

(fn_obj_21281.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21281.cljs$core$IFn$_invoke$arity$2(path,new_link_21271) : fn_obj_21281.call(null,path,new_link_21271));


var G__21283 = seq__21016_21272;
var G__21284 = chunk__21018_21273;
var G__21285 = count__21019_21274;
var G__21286 = (i__21020_21275 + (1));
seq__21016_21272 = G__21283;
chunk__21018_21273 = G__21284;
count__21019_21274 = G__21285;
i__21020_21275 = G__21286;
continue;
} else {
var temp__5804__auto___21287__$1 = cljs.core.seq(seq__21016_21272);
if(temp__5804__auto___21287__$1){
var seq__21016_21288__$1 = temp__5804__auto___21287__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21016_21288__$1)){
var c__5568__auto___21289 = cljs.core.chunk_first(seq__21016_21288__$1);
var G__21290 = cljs.core.chunk_rest(seq__21016_21288__$1);
var G__21291 = c__5568__auto___21289;
var G__21292 = cljs.core.count(c__5568__auto___21289);
var G__21293 = (0);
seq__21016_21272 = G__21290;
chunk__21018_21273 = G__21291;
count__21019_21274 = G__21292;
i__21020_21275 = G__21293;
continue;
} else {
var map__21027_21294 = cljs.core.first(seq__21016_21288__$1);
var map__21027_21295__$1 = cljs.core.__destructure_map(map__21027_21294);
var task_21296 = map__21027_21295__$1;
var fn_str_21297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027_21295__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027_21295__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21299 = goog.getObjectByName(fn_str_21297,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21298)].join(''));

(fn_obj_21299.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21299.cljs$core$IFn$_invoke$arity$2(path,new_link_21271) : fn_obj_21299.call(null,path,new_link_21271));


var G__21300 = cljs.core.next(seq__21016_21288__$1);
var G__21301 = null;
var G__21302 = (0);
var G__21303 = (0);
seq__21016_21272 = G__21300;
chunk__21018_21273 = G__21301;
count__21019_21274 = G__21302;
i__21020_21275 = G__21303;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21269);
});})(seq__20977_21265,chunk__20981_21266,count__20982_21267,i__20983_21268,seq__20510,chunk__20512,count__20513,i__20514,new_link_21271,path_match_21270,node_21269,path,seq__20510__$1,temp__5804__auto__,map__20509,map__20509__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21270], 0));

goog.dom.insertSiblingAfter(new_link_21271,node_21269);


var G__21304 = seq__20977_21265;
var G__21305 = chunk__20981_21266;
var G__21306 = count__20982_21267;
var G__21307 = (i__20983_21268 + (1));
seq__20977_21265 = G__21304;
chunk__20981_21266 = G__21305;
count__20982_21267 = G__21306;
i__20983_21268 = G__21307;
continue;
} else {
var G__21308 = seq__20977_21265;
var G__21309 = chunk__20981_21266;
var G__21310 = count__20982_21267;
var G__21311 = (i__20983_21268 + (1));
seq__20977_21265 = G__21308;
chunk__20981_21266 = G__21309;
count__20982_21267 = G__21310;
i__20983_21268 = G__21311;
continue;
}
} else {
var G__21312 = seq__20977_21265;
var G__21313 = chunk__20981_21266;
var G__21314 = count__20982_21267;
var G__21315 = (i__20983_21268 + (1));
seq__20977_21265 = G__21312;
chunk__20981_21266 = G__21313;
count__20982_21267 = G__21314;
i__20983_21268 = G__21315;
continue;
}
} else {
var temp__5804__auto___21316__$1 = cljs.core.seq(seq__20977_21265);
if(temp__5804__auto___21316__$1){
var seq__20977_21317__$1 = temp__5804__auto___21316__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20977_21317__$1)){
var c__5568__auto___21318 = cljs.core.chunk_first(seq__20977_21317__$1);
var G__21319 = cljs.core.chunk_rest(seq__20977_21317__$1);
var G__21320 = c__5568__auto___21318;
var G__21321 = cljs.core.count(c__5568__auto___21318);
var G__21322 = (0);
seq__20977_21265 = G__21319;
chunk__20981_21266 = G__21320;
count__20982_21267 = G__21321;
i__20983_21268 = G__21322;
continue;
} else {
var node_21323 = cljs.core.first(seq__20977_21317__$1);
if(cljs.core.not(node_21323.shadow$old)){
var path_match_21324 = shadow.cljs.devtools.client.browser.match_paths(node_21323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21324)){
var new_link_21325 = (function (){var G__21028 = node_21323.cloneNode(true);
G__21028.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21028;
})();
(node_21323.shadow$old = true);

(new_link_21325.onload = ((function (seq__20977_21265,chunk__20981_21266,count__20982_21267,i__20983_21268,seq__20510,chunk__20512,count__20513,i__20514,new_link_21325,path_match_21324,node_21323,seq__20977_21317__$1,temp__5804__auto___21316__$1,path,seq__20510__$1,temp__5804__auto__,map__20509,map__20509__$1,msg,updates,reload_info){
return (function (e){
var seq__21029_21326 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21031_21327 = null;
var count__21032_21328 = (0);
var i__21033_21329 = (0);
while(true){
if((i__21033_21329 < count__21032_21328)){
var map__21037_21330 = chunk__21031_21327.cljs$core$IIndexed$_nth$arity$2(null,i__21033_21329);
var map__21037_21331__$1 = cljs.core.__destructure_map(map__21037_21330);
var task_21332 = map__21037_21331__$1;
var fn_str_21333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037_21331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037_21331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21335 = goog.getObjectByName(fn_str_21333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21334)].join(''));

(fn_obj_21335.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21335.cljs$core$IFn$_invoke$arity$2(path,new_link_21325) : fn_obj_21335.call(null,path,new_link_21325));


var G__21336 = seq__21029_21326;
var G__21337 = chunk__21031_21327;
var G__21338 = count__21032_21328;
var G__21339 = (i__21033_21329 + (1));
seq__21029_21326 = G__21336;
chunk__21031_21327 = G__21337;
count__21032_21328 = G__21338;
i__21033_21329 = G__21339;
continue;
} else {
var temp__5804__auto___21340__$2 = cljs.core.seq(seq__21029_21326);
if(temp__5804__auto___21340__$2){
var seq__21029_21341__$1 = temp__5804__auto___21340__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21029_21341__$1)){
var c__5568__auto___21342 = cljs.core.chunk_first(seq__21029_21341__$1);
var G__21343 = cljs.core.chunk_rest(seq__21029_21341__$1);
var G__21344 = c__5568__auto___21342;
var G__21345 = cljs.core.count(c__5568__auto___21342);
var G__21346 = (0);
seq__21029_21326 = G__21343;
chunk__21031_21327 = G__21344;
count__21032_21328 = G__21345;
i__21033_21329 = G__21346;
continue;
} else {
var map__21038_21347 = cljs.core.first(seq__21029_21341__$1);
var map__21038_21348__$1 = cljs.core.__destructure_map(map__21038_21347);
var task_21349 = map__21038_21348__$1;
var fn_str_21350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21038_21348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21038_21348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21352 = goog.getObjectByName(fn_str_21350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21351)].join(''));

(fn_obj_21352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21352.cljs$core$IFn$_invoke$arity$2(path,new_link_21325) : fn_obj_21352.call(null,path,new_link_21325));


var G__21353 = cljs.core.next(seq__21029_21341__$1);
var G__21354 = null;
var G__21355 = (0);
var G__21356 = (0);
seq__21029_21326 = G__21353;
chunk__21031_21327 = G__21354;
count__21032_21328 = G__21355;
i__21033_21329 = G__21356;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21323);
});})(seq__20977_21265,chunk__20981_21266,count__20982_21267,i__20983_21268,seq__20510,chunk__20512,count__20513,i__20514,new_link_21325,path_match_21324,node_21323,seq__20977_21317__$1,temp__5804__auto___21316__$1,path,seq__20510__$1,temp__5804__auto__,map__20509,map__20509__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21324], 0));

goog.dom.insertSiblingAfter(new_link_21325,node_21323);


var G__21357 = cljs.core.next(seq__20977_21317__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__20977_21265 = G__21357;
chunk__20981_21266 = G__21358;
count__20982_21267 = G__21359;
i__20983_21268 = G__21360;
continue;
} else {
var G__21361 = cljs.core.next(seq__20977_21317__$1);
var G__21362 = null;
var G__21363 = (0);
var G__21364 = (0);
seq__20977_21265 = G__21361;
chunk__20981_21266 = G__21362;
count__20982_21267 = G__21363;
i__20983_21268 = G__21364;
continue;
}
} else {
var G__21365 = cljs.core.next(seq__20977_21317__$1);
var G__21366 = null;
var G__21367 = (0);
var G__21368 = (0);
seq__20977_21265 = G__21365;
chunk__20981_21266 = G__21366;
count__20982_21267 = G__21367;
i__20983_21268 = G__21368;
continue;
}
}
} else {
}
}
break;
}


var G__21369 = cljs.core.next(seq__20510__$1);
var G__21370 = null;
var G__21371 = (0);
var G__21372 = (0);
seq__20510 = G__21369;
chunk__20512 = G__21370;
count__20513 = G__21371;
i__20514 = G__21372;
continue;
} else {
var G__21373 = cljs.core.next(seq__20510__$1);
var G__21374 = null;
var G__21375 = (0);
var G__21376 = (0);
seq__20510 = G__21373;
chunk__20512 = G__21374;
count__20513 = G__21375;
i__20514 = G__21376;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21045){
var map__21046 = p__21045;
var map__21046__$1 = cljs.core.__destructure_map(map__21046);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21047,done,error){
var map__21048 = p__21047;
var map__21048__$1 = cljs.core.__destructure_map(map__21048);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21052,done,error){
var map__21053 = p__21052;
var map__21053__$1 = cljs.core.__destructure_map(map__21053);
var msg = map__21053__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21054){
var map__21055 = p__21054;
var map__21055__$1 = cljs.core.__destructure_map(map__21055);
var src = map__21055__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21056 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21056) : done.call(null,G__21056));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21057){
var map__21058 = p__21057;
var map__21058__$1 = cljs.core.__destructure_map(map__21058);
var msg__$1 = map__21058__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21058__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21059){var ex = e21059;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21060){
var map__21061 = p__21060;
var map__21061__$1 = cljs.core.__destructure_map(map__21061);
var env = map__21061__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21062){
var map__21063 = p__21062;
var map__21063__$1 = cljs.core.__destructure_map(map__21063);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21067){
var map__21070 = p__21067;
var map__21070__$1 = cljs.core.__destructure_map(map__21070);
var svc = map__21070__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21070__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
