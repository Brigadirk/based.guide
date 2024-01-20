goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13665){
var map__13666 = p__13665;
var map__13666__$1 = cljs.core.__destructure_map(map__13666);
var runtime = map__13666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13934 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13934)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13673 = runtime;
var G__13674 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13934);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13673,G__13674) : shadow.remote.runtime.shared.process.call(null,G__13673,G__13674));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13678,res){
var map__13679 = p__13678;
var map__13679__$1 = cljs.core.__destructure_map(map__13679);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13679__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13679__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13682 = res;
var G__13682__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13682,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13682);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13682__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13682__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13696 = arguments.length;
switch (G__13696) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13703,msg,handlers,timeout_after_ms){
var map__13705 = p__13703;
var map__13705__$1 = cljs.core.__destructure_map(map__13705);
var runtime = map__13705__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13950 = arguments.length;
var i__5770__auto___13951 = (0);
while(true){
if((i__5770__auto___13951 < len__5769__auto___13950)){
args__5775__auto__.push((arguments[i__5770__auto___13951]));

var G__13954 = (i__5770__auto___13951 + (1));
i__5770__auto___13951 = G__13954;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13713,ev,args){
var map__13715 = p__13713;
var map__13715__$1 = cljs.core.__destructure_map(map__13715);
var runtime = map__13715__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13718 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13721 = null;
var count__13722 = (0);
var i__13723 = (0);
while(true){
if((i__13723 < count__13722)){
var ext = chunk__13721.cljs$core$IIndexed$_nth$arity$2(null,i__13723);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13966 = seq__13718;
var G__13967 = chunk__13721;
var G__13968 = count__13722;
var G__13969 = (i__13723 + (1));
seq__13718 = G__13966;
chunk__13721 = G__13967;
count__13722 = G__13968;
i__13723 = G__13969;
continue;
} else {
var G__13970 = seq__13718;
var G__13971 = chunk__13721;
var G__13972 = count__13722;
var G__13973 = (i__13723 + (1));
seq__13718 = G__13970;
chunk__13721 = G__13971;
count__13722 = G__13972;
i__13723 = G__13973;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13718);
if(temp__5804__auto__){
var seq__13718__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13718__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13718__$1);
var G__13974 = cljs.core.chunk_rest(seq__13718__$1);
var G__13975 = c__5568__auto__;
var G__13976 = cljs.core.count(c__5568__auto__);
var G__13977 = (0);
seq__13718 = G__13974;
chunk__13721 = G__13975;
count__13722 = G__13976;
i__13723 = G__13977;
continue;
} else {
var ext = cljs.core.first(seq__13718__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13979 = cljs.core.next(seq__13718__$1);
var G__13980 = null;
var G__13981 = (0);
var G__13982 = (0);
seq__13718 = G__13979;
chunk__13721 = G__13980;
count__13722 = G__13981;
i__13723 = G__13982;
continue;
} else {
var G__13983 = cljs.core.next(seq__13718__$1);
var G__13984 = null;
var G__13985 = (0);
var G__13986 = (0);
seq__13718 = G__13983;
chunk__13721 = G__13984;
count__13722 = G__13985;
i__13723 = G__13986;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13708){
var G__13709 = cljs.core.first(seq13708);
var seq13708__$1 = cljs.core.next(seq13708);
var G__13710 = cljs.core.first(seq13708__$1);
var seq13708__$2 = cljs.core.next(seq13708__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13709,G__13710,seq13708__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13750,p__13751){
var map__13753 = p__13750;
var map__13753__$1 = cljs.core.__destructure_map(map__13753);
var runtime = map__13753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13754 = p__13751;
var map__13754__$1 = cljs.core.__destructure_map(map__13754);
var msg = map__13754__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13754__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13758 = cljs.core.deref(state_ref);
var map__13758__$1 = cljs.core.__destructure_map(map__13758);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13758__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13758__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13766,msg){
var map__13769 = p__13766;
var map__13769__$1 = cljs.core.__destructure_map(map__13769);
var runtime = map__13769__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13769__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13801,key,p__13802){
var map__13803 = p__13801;
var map__13803__$1 = cljs.core.__destructure_map(map__13803);
var state = map__13803__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13803__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13804 = p__13802;
var map__13804__$1 = cljs.core.__destructure_map(map__13804);
var spec = map__13804__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13810,key,spec){
var map__13812 = p__13810;
var map__13812__$1 = cljs.core.__destructure_map(map__13812);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13816_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13816_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13817_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13817_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13818_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13818_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13819_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13819_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13820_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13820_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13839,key){
var map__13840 = p__13839;
var map__13840__$1 = cljs.core.__destructure_map(map__13840);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13840__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13846,msg){
var map__13848 = p__13846;
var map__13848__$1 = cljs.core.__destructure_map(map__13848);
var runtime = map__13848__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13867,p__13868){
var map__13869 = p__13867;
var map__13869__$1 = cljs.core.__destructure_map(map__13869);
var runtime = map__13869__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13869__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13870 = p__13868;
var map__13870__$1 = cljs.core.__destructure_map(map__13870);
var msg = map__13870__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13886 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13888 = null;
var count__13889 = (0);
var i__13890 = (0);
while(true){
if((i__13890 < count__13889)){
var map__13910 = chunk__13888.cljs$core$IIndexed$_nth$arity$2(null,i__13890);
var map__13910__$1 = cljs.core.__destructure_map(map__13910);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13910__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14022 = seq__13886;
var G__14023 = chunk__13888;
var G__14024 = count__13889;
var G__14025 = (i__13890 + (1));
seq__13886 = G__14022;
chunk__13888 = G__14023;
count__13889 = G__14024;
i__13890 = G__14025;
continue;
} else {
var G__14026 = seq__13886;
var G__14027 = chunk__13888;
var G__14028 = count__13889;
var G__14029 = (i__13890 + (1));
seq__13886 = G__14026;
chunk__13888 = G__14027;
count__13889 = G__14028;
i__13890 = G__14029;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13886);
if(temp__5804__auto__){
var seq__13886__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13886__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13886__$1);
var G__14031 = cljs.core.chunk_rest(seq__13886__$1);
var G__14032 = c__5568__auto__;
var G__14033 = cljs.core.count(c__5568__auto__);
var G__14034 = (0);
seq__13886 = G__14031;
chunk__13888 = G__14032;
count__13889 = G__14033;
i__13890 = G__14034;
continue;
} else {
var map__13920 = cljs.core.first(seq__13886__$1);
var map__13920__$1 = cljs.core.__destructure_map(map__13920);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14036 = cljs.core.next(seq__13886__$1);
var G__14037 = null;
var G__14038 = (0);
var G__14039 = (0);
seq__13886 = G__14036;
chunk__13888 = G__14037;
count__13889 = G__14038;
i__13890 = G__14039;
continue;
} else {
var G__14040 = cljs.core.next(seq__13886__$1);
var G__14041 = null;
var G__14042 = (0);
var G__14043 = (0);
seq__13886 = G__14040;
chunk__13888 = G__14041;
count__13889 = G__14042;
i__13890 = G__14043;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
