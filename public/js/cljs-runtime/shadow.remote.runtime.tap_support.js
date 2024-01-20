goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19921,p__19922){
var map__19923 = p__19921;
var map__19923__$1 = cljs.core.__destructure_map(map__19923);
var svc = map__19923__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19923__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19923__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19924 = p__19922;
var map__19924__$1 = cljs.core.__destructure_map(map__19924);
var msg = map__19924__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19924__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19931,p__19932){
var map__19934 = p__19931;
var map__19934__$1 = cljs.core.__destructure_map(map__19934);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19934__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19935 = p__19932;
var map__19935__$1 = cljs.core.__destructure_map(map__19935);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19935__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19939,p__19940){
var map__19942 = p__19939;
var map__19942__$1 = cljs.core.__destructure_map(map__19942);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19942__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19942__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19943 = p__19940;
var map__19943__$1 = cljs.core.__destructure_map(map__19943);
var msg = map__19943__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19943__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19946,tid){
var map__19947 = p__19946;
var map__19947__$1 = cljs.core.__destructure_map(map__19947);
var svc = map__19947__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19947__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19956 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19957 = null;
var count__19958 = (0);
var i__19959 = (0);
while(true){
if((i__19959 < count__19958)){
var vec__19971 = chunk__19957.cljs$core$IIndexed$_nth$arity$2(null,i__19959);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19971,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19971,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19993 = seq__19956;
var G__19994 = chunk__19957;
var G__19995 = count__19958;
var G__19996 = (i__19959 + (1));
seq__19956 = G__19993;
chunk__19957 = G__19994;
count__19958 = G__19995;
i__19959 = G__19996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19956);
if(temp__5804__auto__){
var seq__19956__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19956__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19956__$1);
var G__19997 = cljs.core.chunk_rest(seq__19956__$1);
var G__19998 = c__5568__auto__;
var G__19999 = cljs.core.count(c__5568__auto__);
var G__20000 = (0);
seq__19956 = G__19997;
chunk__19957 = G__19998;
count__19958 = G__19999;
i__19959 = G__20000;
continue;
} else {
var vec__19976 = cljs.core.first(seq__19956__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19976,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19976,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20001 = cljs.core.next(seq__19956__$1);
var G__20002 = null;
var G__20003 = (0);
var G__20004 = (0);
seq__19956 = G__20001;
chunk__19957 = G__20002;
count__19958 = G__20003;
i__19959 = G__20004;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19948_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19948_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19949_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19949_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19950_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19950_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19951_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19951_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__19981){
var map__19982 = p__19981;
var map__19982__$1 = cljs.core.__destructure_map(map__19982);
var svc = map__19982__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
