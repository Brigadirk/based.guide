goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18265 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18265(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18266 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18266(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16782 = coll;
var G__16783 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16782,G__16783) : shadow.dom.lazy_native_coll_seq.call(null,G__16782,G__16783));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16804 = arguments.length;
switch (G__16804) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16810 = arguments.length;
switch (G__16810) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16815 = arguments.length;
switch (G__16815) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16831 = arguments.length;
switch (G__16831) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16851 = arguments.length;
switch (G__16851) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16875 = arguments.length;
switch (G__16875) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16913){if((e16913 instanceof Object)){
var e = e16913;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16913;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16947 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16948 = null;
var count__16949 = (0);
var i__16950 = (0);
while(true){
if((i__16950 < count__16949)){
var el = chunk__16948.cljs$core$IIndexed$_nth$arity$2(null,i__16950);
var handler_18285__$1 = ((function (seq__16947,chunk__16948,count__16949,i__16950,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16947,chunk__16948,count__16949,i__16950,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18285__$1);


var G__18286 = seq__16947;
var G__18287 = chunk__16948;
var G__18288 = count__16949;
var G__18289 = (i__16950 + (1));
seq__16947 = G__18286;
chunk__16948 = G__18287;
count__16949 = G__18288;
i__16950 = G__18289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16947);
if(temp__5804__auto__){
var seq__16947__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16947__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16947__$1);
var G__18290 = cljs.core.chunk_rest(seq__16947__$1);
var G__18291 = c__5568__auto__;
var G__18292 = cljs.core.count(c__5568__auto__);
var G__18293 = (0);
seq__16947 = G__18290;
chunk__16948 = G__18291;
count__16949 = G__18292;
i__16950 = G__18293;
continue;
} else {
var el = cljs.core.first(seq__16947__$1);
var handler_18294__$1 = ((function (seq__16947,chunk__16948,count__16949,i__16950,el,seq__16947__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16947,chunk__16948,count__16949,i__16950,el,seq__16947__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18294__$1);


var G__18295 = cljs.core.next(seq__16947__$1);
var G__18296 = null;
var G__18297 = (0);
var G__18298 = (0);
seq__16947 = G__18295;
chunk__16948 = G__18296;
count__16949 = G__18297;
i__16950 = G__18298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16991 = arguments.length;
switch (G__16991) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17012 = cljs.core.seq(events);
var chunk__17013 = null;
var count__17014 = (0);
var i__17015 = (0);
while(true){
if((i__17015 < count__17014)){
var vec__17028 = chunk__17013.cljs$core$IIndexed$_nth$arity$2(null,i__17015);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17028,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18300 = seq__17012;
var G__18301 = chunk__17013;
var G__18302 = count__17014;
var G__18303 = (i__17015 + (1));
seq__17012 = G__18300;
chunk__17013 = G__18301;
count__17014 = G__18302;
i__17015 = G__18303;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17012);
if(temp__5804__auto__){
var seq__17012__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17012__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17012__$1);
var G__18304 = cljs.core.chunk_rest(seq__17012__$1);
var G__18305 = c__5568__auto__;
var G__18306 = cljs.core.count(c__5568__auto__);
var G__18307 = (0);
seq__17012 = G__18304;
chunk__17013 = G__18305;
count__17014 = G__18306;
i__17015 = G__18307;
continue;
} else {
var vec__17035 = cljs.core.first(seq__17012__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17035,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18308 = cljs.core.next(seq__17012__$1);
var G__18309 = null;
var G__18310 = (0);
var G__18311 = (0);
seq__17012 = G__18308;
chunk__17013 = G__18309;
count__17014 = G__18310;
i__17015 = G__18311;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17044 = cljs.core.seq(styles);
var chunk__17045 = null;
var count__17046 = (0);
var i__17047 = (0);
while(true){
if((i__17047 < count__17046)){
var vec__17070 = chunk__17045.cljs$core$IIndexed$_nth$arity$2(null,i__17047);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18312 = seq__17044;
var G__18313 = chunk__17045;
var G__18314 = count__17046;
var G__18315 = (i__17047 + (1));
seq__17044 = G__18312;
chunk__17045 = G__18313;
count__17046 = G__18314;
i__17047 = G__18315;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17044);
if(temp__5804__auto__){
var seq__17044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17044__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17044__$1);
var G__18316 = cljs.core.chunk_rest(seq__17044__$1);
var G__18317 = c__5568__auto__;
var G__18318 = cljs.core.count(c__5568__auto__);
var G__18319 = (0);
seq__17044 = G__18316;
chunk__17045 = G__18317;
count__17046 = G__18318;
i__17047 = G__18319;
continue;
} else {
var vec__17079 = cljs.core.first(seq__17044__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17079,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18322 = cljs.core.next(seq__17044__$1);
var G__18323 = null;
var G__18324 = (0);
var G__18325 = (0);
seq__17044 = G__18322;
chunk__17045 = G__18323;
count__17046 = G__18324;
i__17047 = G__18325;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17092_18326 = key;
var G__17092_18327__$1 = (((G__17092_18326 instanceof cljs.core.Keyword))?G__17092_18326.fqn:null);
switch (G__17092_18327__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18332 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18332,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18332,"aria-");
}
})())){
el.setAttribute(ks_18332,value);
} else {
(el[ks_18332] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17161){
var map__17162 = p__17161;
var map__17162__$1 = cljs.core.__destructure_map(map__17162);
var props = map__17162__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17162__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17166 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17169 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17169,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17169;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17178 = arguments.length;
switch (G__17178) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17202){
var vec__17205 = p__17202;
var seq__17206 = cljs.core.seq(vec__17205);
var first__17207 = cljs.core.first(seq__17206);
var seq__17206__$1 = cljs.core.next(seq__17206);
var nn = first__17207;
var first__17207__$1 = cljs.core.first(seq__17206__$1);
var seq__17206__$2 = cljs.core.next(seq__17206__$1);
var np = first__17207__$1;
var nc = seq__17206__$2;
var node = vec__17205;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17215 = nn;
var G__17216 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17215,G__17216) : create_fn.call(null,G__17215,G__17216));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17220 = nn;
var G__17221 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17220,G__17221) : create_fn.call(null,G__17220,G__17221));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17225 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17225,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17225,(1),null);
var seq__17228_18354 = cljs.core.seq(node_children);
var chunk__17229_18355 = null;
var count__17230_18356 = (0);
var i__17231_18357 = (0);
while(true){
if((i__17231_18357 < count__17230_18356)){
var child_struct_18359 = chunk__17229_18355.cljs$core$IIndexed$_nth$arity$2(null,i__17231_18357);
var children_18360 = shadow.dom.dom_node(child_struct_18359);
if(cljs.core.seq_QMARK_(children_18360)){
var seq__17285_18361 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18360));
var chunk__17287_18362 = null;
var count__17288_18363 = (0);
var i__17289_18364 = (0);
while(true){
if((i__17289_18364 < count__17288_18363)){
var child_18369 = chunk__17287_18362.cljs$core$IIndexed$_nth$arity$2(null,i__17289_18364);
if(cljs.core.truth_(child_18369)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18369);


var G__18370 = seq__17285_18361;
var G__18371 = chunk__17287_18362;
var G__18372 = count__17288_18363;
var G__18373 = (i__17289_18364 + (1));
seq__17285_18361 = G__18370;
chunk__17287_18362 = G__18371;
count__17288_18363 = G__18372;
i__17289_18364 = G__18373;
continue;
} else {
var G__18374 = seq__17285_18361;
var G__18375 = chunk__17287_18362;
var G__18376 = count__17288_18363;
var G__18377 = (i__17289_18364 + (1));
seq__17285_18361 = G__18374;
chunk__17287_18362 = G__18375;
count__17288_18363 = G__18376;
i__17289_18364 = G__18377;
continue;
}
} else {
var temp__5804__auto___18378 = cljs.core.seq(seq__17285_18361);
if(temp__5804__auto___18378){
var seq__17285_18379__$1 = temp__5804__auto___18378;
if(cljs.core.chunked_seq_QMARK_(seq__17285_18379__$1)){
var c__5568__auto___18384 = cljs.core.chunk_first(seq__17285_18379__$1);
var G__18385 = cljs.core.chunk_rest(seq__17285_18379__$1);
var G__18386 = c__5568__auto___18384;
var G__18387 = cljs.core.count(c__5568__auto___18384);
var G__18388 = (0);
seq__17285_18361 = G__18385;
chunk__17287_18362 = G__18386;
count__17288_18363 = G__18387;
i__17289_18364 = G__18388;
continue;
} else {
var child_18389 = cljs.core.first(seq__17285_18379__$1);
if(cljs.core.truth_(child_18389)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18389);


var G__18390 = cljs.core.next(seq__17285_18379__$1);
var G__18391 = null;
var G__18392 = (0);
var G__18393 = (0);
seq__17285_18361 = G__18390;
chunk__17287_18362 = G__18391;
count__17288_18363 = G__18392;
i__17289_18364 = G__18393;
continue;
} else {
var G__18395 = cljs.core.next(seq__17285_18379__$1);
var G__18396 = null;
var G__18397 = (0);
var G__18398 = (0);
seq__17285_18361 = G__18395;
chunk__17287_18362 = G__18396;
count__17288_18363 = G__18397;
i__17289_18364 = G__18398;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18360);
}


var G__18400 = seq__17228_18354;
var G__18401 = chunk__17229_18355;
var G__18402 = count__17230_18356;
var G__18403 = (i__17231_18357 + (1));
seq__17228_18354 = G__18400;
chunk__17229_18355 = G__18401;
count__17230_18356 = G__18402;
i__17231_18357 = G__18403;
continue;
} else {
var temp__5804__auto___18404 = cljs.core.seq(seq__17228_18354);
if(temp__5804__auto___18404){
var seq__17228_18405__$1 = temp__5804__auto___18404;
if(cljs.core.chunked_seq_QMARK_(seq__17228_18405__$1)){
var c__5568__auto___18406 = cljs.core.chunk_first(seq__17228_18405__$1);
var G__18407 = cljs.core.chunk_rest(seq__17228_18405__$1);
var G__18408 = c__5568__auto___18406;
var G__18409 = cljs.core.count(c__5568__auto___18406);
var G__18410 = (0);
seq__17228_18354 = G__18407;
chunk__17229_18355 = G__18408;
count__17230_18356 = G__18409;
i__17231_18357 = G__18410;
continue;
} else {
var child_struct_18415 = cljs.core.first(seq__17228_18405__$1);
var children_18417 = shadow.dom.dom_node(child_struct_18415);
if(cljs.core.seq_QMARK_(children_18417)){
var seq__17318_18418 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18417));
var chunk__17320_18419 = null;
var count__17321_18420 = (0);
var i__17322_18421 = (0);
while(true){
if((i__17322_18421 < count__17321_18420)){
var child_18424 = chunk__17320_18419.cljs$core$IIndexed$_nth$arity$2(null,i__17322_18421);
if(cljs.core.truth_(child_18424)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18424);


var G__18425 = seq__17318_18418;
var G__18426 = chunk__17320_18419;
var G__18427 = count__17321_18420;
var G__18428 = (i__17322_18421 + (1));
seq__17318_18418 = G__18425;
chunk__17320_18419 = G__18426;
count__17321_18420 = G__18427;
i__17322_18421 = G__18428;
continue;
} else {
var G__18429 = seq__17318_18418;
var G__18430 = chunk__17320_18419;
var G__18431 = count__17321_18420;
var G__18432 = (i__17322_18421 + (1));
seq__17318_18418 = G__18429;
chunk__17320_18419 = G__18430;
count__17321_18420 = G__18431;
i__17322_18421 = G__18432;
continue;
}
} else {
var temp__5804__auto___18433__$1 = cljs.core.seq(seq__17318_18418);
if(temp__5804__auto___18433__$1){
var seq__17318_18434__$1 = temp__5804__auto___18433__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17318_18434__$1)){
var c__5568__auto___18435 = cljs.core.chunk_first(seq__17318_18434__$1);
var G__18436 = cljs.core.chunk_rest(seq__17318_18434__$1);
var G__18437 = c__5568__auto___18435;
var G__18438 = cljs.core.count(c__5568__auto___18435);
var G__18439 = (0);
seq__17318_18418 = G__18436;
chunk__17320_18419 = G__18437;
count__17321_18420 = G__18438;
i__17322_18421 = G__18439;
continue;
} else {
var child_18440 = cljs.core.first(seq__17318_18434__$1);
if(cljs.core.truth_(child_18440)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18440);


var G__18441 = cljs.core.next(seq__17318_18434__$1);
var G__18442 = null;
var G__18443 = (0);
var G__18444 = (0);
seq__17318_18418 = G__18441;
chunk__17320_18419 = G__18442;
count__17321_18420 = G__18443;
i__17322_18421 = G__18444;
continue;
} else {
var G__18445 = cljs.core.next(seq__17318_18434__$1);
var G__18446 = null;
var G__18447 = (0);
var G__18448 = (0);
seq__17318_18418 = G__18445;
chunk__17320_18419 = G__18446;
count__17321_18420 = G__18447;
i__17322_18421 = G__18448;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18417);
}


var G__18449 = cljs.core.next(seq__17228_18405__$1);
var G__18450 = null;
var G__18451 = (0);
var G__18452 = (0);
seq__17228_18354 = G__18449;
chunk__17229_18355 = G__18450;
count__17230_18356 = G__18451;
i__17231_18357 = G__18452;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17386 = cljs.core.seq(node);
var chunk__17388 = null;
var count__17389 = (0);
var i__17390 = (0);
while(true){
if((i__17390 < count__17389)){
var n = chunk__17388.cljs$core$IIndexed$_nth$arity$2(null,i__17390);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18458 = seq__17386;
var G__18459 = chunk__17388;
var G__18460 = count__17389;
var G__18461 = (i__17390 + (1));
seq__17386 = G__18458;
chunk__17388 = G__18459;
count__17389 = G__18460;
i__17390 = G__18461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17386);
if(temp__5804__auto__){
var seq__17386__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17386__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17386__$1);
var G__18463 = cljs.core.chunk_rest(seq__17386__$1);
var G__18464 = c__5568__auto__;
var G__18465 = cljs.core.count(c__5568__auto__);
var G__18466 = (0);
seq__17386 = G__18463;
chunk__17388 = G__18464;
count__17389 = G__18465;
i__17390 = G__18466;
continue;
} else {
var n = cljs.core.first(seq__17386__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18471 = cljs.core.next(seq__17386__$1);
var G__18472 = null;
var G__18473 = (0);
var G__18474 = (0);
seq__17386 = G__18471;
chunk__17388 = G__18472;
count__17389 = G__18473;
i__17390 = G__18474;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17407 = arguments.length;
switch (G__17407) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17433 = arguments.length;
switch (G__17433) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17459 = arguments.length;
switch (G__17459) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18514 = arguments.length;
var i__5770__auto___18515 = (0);
while(true){
if((i__5770__auto___18515 < len__5769__auto___18514)){
args__5775__auto__.push((arguments[i__5770__auto___18515]));

var G__18516 = (i__5770__auto___18515 + (1));
i__5770__auto___18515 = G__18516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17485_18521 = cljs.core.seq(nodes);
var chunk__17486_18522 = null;
var count__17487_18523 = (0);
var i__17488_18524 = (0);
while(true){
if((i__17488_18524 < count__17487_18523)){
var node_18525 = chunk__17486_18522.cljs$core$IIndexed$_nth$arity$2(null,i__17488_18524);
fragment.appendChild(shadow.dom._to_dom(node_18525));


var G__18526 = seq__17485_18521;
var G__18527 = chunk__17486_18522;
var G__18528 = count__17487_18523;
var G__18529 = (i__17488_18524 + (1));
seq__17485_18521 = G__18526;
chunk__17486_18522 = G__18527;
count__17487_18523 = G__18528;
i__17488_18524 = G__18529;
continue;
} else {
var temp__5804__auto___18530 = cljs.core.seq(seq__17485_18521);
if(temp__5804__auto___18530){
var seq__17485_18531__$1 = temp__5804__auto___18530;
if(cljs.core.chunked_seq_QMARK_(seq__17485_18531__$1)){
var c__5568__auto___18532 = cljs.core.chunk_first(seq__17485_18531__$1);
var G__18533 = cljs.core.chunk_rest(seq__17485_18531__$1);
var G__18534 = c__5568__auto___18532;
var G__18535 = cljs.core.count(c__5568__auto___18532);
var G__18536 = (0);
seq__17485_18521 = G__18533;
chunk__17486_18522 = G__18534;
count__17487_18523 = G__18535;
i__17488_18524 = G__18536;
continue;
} else {
var node_18537 = cljs.core.first(seq__17485_18531__$1);
fragment.appendChild(shadow.dom._to_dom(node_18537));


var G__18542 = cljs.core.next(seq__17485_18531__$1);
var G__18543 = null;
var G__18544 = (0);
var G__18545 = (0);
seq__17485_18521 = G__18542;
chunk__17486_18522 = G__18543;
count__17487_18523 = G__18544;
i__17488_18524 = G__18545;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17477){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17477));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17546_18549 = cljs.core.seq(scripts);
var chunk__17547_18550 = null;
var count__17548_18551 = (0);
var i__17549_18552 = (0);
while(true){
if((i__17549_18552 < count__17548_18551)){
var vec__17571_18557 = chunk__17547_18550.cljs$core$IIndexed$_nth$arity$2(null,i__17549_18552);
var script_tag_18558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17571_18557,(0),null);
var script_body_18559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17571_18557,(1),null);
eval(script_body_18559);


var G__18560 = seq__17546_18549;
var G__18561 = chunk__17547_18550;
var G__18562 = count__17548_18551;
var G__18563 = (i__17549_18552 + (1));
seq__17546_18549 = G__18560;
chunk__17547_18550 = G__18561;
count__17548_18551 = G__18562;
i__17549_18552 = G__18563;
continue;
} else {
var temp__5804__auto___18564 = cljs.core.seq(seq__17546_18549);
if(temp__5804__auto___18564){
var seq__17546_18565__$1 = temp__5804__auto___18564;
if(cljs.core.chunked_seq_QMARK_(seq__17546_18565__$1)){
var c__5568__auto___18566 = cljs.core.chunk_first(seq__17546_18565__$1);
var G__18567 = cljs.core.chunk_rest(seq__17546_18565__$1);
var G__18568 = c__5568__auto___18566;
var G__18569 = cljs.core.count(c__5568__auto___18566);
var G__18570 = (0);
seq__17546_18549 = G__18567;
chunk__17547_18550 = G__18568;
count__17548_18551 = G__18569;
i__17549_18552 = G__18570;
continue;
} else {
var vec__17586_18571 = cljs.core.first(seq__17546_18565__$1);
var script_tag_18572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586_18571,(0),null);
var script_body_18573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586_18571,(1),null);
eval(script_body_18573);


var G__18574 = cljs.core.next(seq__17546_18565__$1);
var G__18575 = null;
var G__18576 = (0);
var G__18577 = (0);
seq__17546_18549 = G__18574;
chunk__17547_18550 = G__18575;
count__17548_18551 = G__18576;
i__17549_18552 = G__18577;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17589){
var vec__17590 = p__17589;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17590,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17590,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17607 = arguments.length;
switch (G__17607) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17645 = cljs.core.seq(style_keys);
var chunk__17646 = null;
var count__17647 = (0);
var i__17648 = (0);
while(true){
if((i__17648 < count__17647)){
var it = chunk__17646.cljs$core$IIndexed$_nth$arity$2(null,i__17648);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18587 = seq__17645;
var G__18588 = chunk__17646;
var G__18589 = count__17647;
var G__18590 = (i__17648 + (1));
seq__17645 = G__18587;
chunk__17646 = G__18588;
count__17647 = G__18589;
i__17648 = G__18590;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17645);
if(temp__5804__auto__){
var seq__17645__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17645__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17645__$1);
var G__18591 = cljs.core.chunk_rest(seq__17645__$1);
var G__18592 = c__5568__auto__;
var G__18593 = cljs.core.count(c__5568__auto__);
var G__18594 = (0);
seq__17645 = G__18591;
chunk__17646 = G__18592;
count__17647 = G__18593;
i__17648 = G__18594;
continue;
} else {
var it = cljs.core.first(seq__17645__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18595 = cljs.core.next(seq__17645__$1);
var G__18596 = null;
var G__18597 = (0);
var G__18598 = (0);
seq__17645 = G__18595;
chunk__17646 = G__18596;
count__17647 = G__18597;
i__17648 = G__18598;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17657,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17687 = k17657;
var G__17687__$1 = (((G__17687 instanceof cljs.core.Keyword))?G__17687.fqn:null);
switch (G__17687__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17657,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17701){
var vec__17704 = p__17701;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17704,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17704,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17656){
var self__ = this;
var G__17656__$1 = this;
return (new cljs.core.RecordIter((0),G__17656__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17658,other17659){
var self__ = this;
var this17658__$1 = this;
return (((!((other17659 == null)))) && ((((this17658__$1.constructor === other17659.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17658__$1.x,other17659.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17658__$1.y,other17659.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17658__$1.__extmap,other17659.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17657){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17751 = k17657;
var G__17751__$1 = (((G__17751 instanceof cljs.core.Keyword))?G__17751.fqn:null);
switch (G__17751__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17657);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17656){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17758 = cljs.core.keyword_identical_QMARK_;
var expr__17759 = k__5352__auto__;
if(cljs.core.truth_((pred__17758.cljs$core$IFn$_invoke$arity$2 ? pred__17758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17759) : pred__17758.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17759)))){
return (new shadow.dom.Coordinate(G__17656,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17758.cljs$core$IFn$_invoke$arity$2 ? pred__17758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17759) : pred__17758.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17759)))){
return (new shadow.dom.Coordinate(self__.x,G__17656,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17656),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17656){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17656,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17662){
var extmap__5385__auto__ = (function (){var G__17793 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17662,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17662)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17793);
} else {
return G__17793;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17662),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17662),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17813,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17831 = k17813;
var G__17831__$1 = (((G__17831 instanceof cljs.core.Keyword))?G__17831.fqn:null);
switch (G__17831__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17813,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17835){
var vec__17836 = p__17835;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17836,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17836,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17812){
var self__ = this;
var G__17812__$1 = this;
return (new cljs.core.RecordIter((0),G__17812__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17814,other17815){
var self__ = this;
var this17814__$1 = this;
return (((!((other17815 == null)))) && ((((this17814__$1.constructor === other17815.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17814__$1.w,other17815.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17814__$1.h,other17815.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17814__$1.__extmap,other17815.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17813){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17880 = k17813;
var G__17880__$1 = (((G__17880 instanceof cljs.core.Keyword))?G__17880.fqn:null);
switch (G__17880__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17813);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17812){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17885 = cljs.core.keyword_identical_QMARK_;
var expr__17886 = k__5352__auto__;
if(cljs.core.truth_((pred__17885.cljs$core$IFn$_invoke$arity$2 ? pred__17885.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17886) : pred__17885.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17886)))){
return (new shadow.dom.Size(G__17812,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17885.cljs$core$IFn$_invoke$arity$2 ? pred__17885.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17886) : pred__17885.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17886)))){
return (new shadow.dom.Size(self__.w,G__17812,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17812),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17812){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17812,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17820){
var extmap__5385__auto__ = (function (){var G__17916 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17820,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17820)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17916);
} else {
return G__17916;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17820),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17820),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18729 = (i + (1));
var G__18730 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18729;
ret = G__18730;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17945){
var vec__17946 = p__17945;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__17957 = arguments.length;
switch (G__17957) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18768 = ps;
var G__18769 = (i + (1));
el__$1 = G__18768;
i = G__18769;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18016 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18024_18788 = cljs.core.seq(props);
var chunk__18025_18789 = null;
var count__18026_18790 = (0);
var i__18027_18791 = (0);
while(true){
if((i__18027_18791 < count__18026_18790)){
var vec__18043_18792 = chunk__18025_18789.cljs$core$IIndexed$_nth$arity$2(null,i__18027_18791);
var k_18793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18043_18792,(0),null);
var v_18794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18043_18792,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18793);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18793),v_18794);


var G__18799 = seq__18024_18788;
var G__18800 = chunk__18025_18789;
var G__18801 = count__18026_18790;
var G__18802 = (i__18027_18791 + (1));
seq__18024_18788 = G__18799;
chunk__18025_18789 = G__18800;
count__18026_18790 = G__18801;
i__18027_18791 = G__18802;
continue;
} else {
var temp__5804__auto___18803 = cljs.core.seq(seq__18024_18788);
if(temp__5804__auto___18803){
var seq__18024_18804__$1 = temp__5804__auto___18803;
if(cljs.core.chunked_seq_QMARK_(seq__18024_18804__$1)){
var c__5568__auto___18811 = cljs.core.chunk_first(seq__18024_18804__$1);
var G__18812 = cljs.core.chunk_rest(seq__18024_18804__$1);
var G__18813 = c__5568__auto___18811;
var G__18814 = cljs.core.count(c__5568__auto___18811);
var G__18815 = (0);
seq__18024_18788 = G__18812;
chunk__18025_18789 = G__18813;
count__18026_18790 = G__18814;
i__18027_18791 = G__18815;
continue;
} else {
var vec__18052_18816 = cljs.core.first(seq__18024_18804__$1);
var k_18817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052_18816,(0),null);
var v_18818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052_18816,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18817);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18817),v_18818);


var G__18825 = cljs.core.next(seq__18024_18804__$1);
var G__18826 = null;
var G__18827 = (0);
var G__18828 = (0);
seq__18024_18788 = G__18825;
chunk__18025_18789 = G__18826;
count__18026_18790 = G__18827;
i__18027_18791 = G__18828;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18061 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18061,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18061,(1),null);
var seq__18065_18861 = cljs.core.seq(node_children);
var chunk__18067_18862 = null;
var count__18068_18863 = (0);
var i__18069_18864 = (0);
while(true){
if((i__18069_18864 < count__18068_18863)){
var child_struct_18971 = chunk__18067_18862.cljs$core$IIndexed$_nth$arity$2(null,i__18069_18864);
if((!((child_struct_18971 == null)))){
if(typeof child_struct_18971 === 'string'){
var text_18972 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18972),child_struct_18971].join(''));
} else {
var children_18973 = shadow.dom.svg_node(child_struct_18971);
if(cljs.core.seq_QMARK_(children_18973)){
var seq__18142_18974 = cljs.core.seq(children_18973);
var chunk__18144_18975 = null;
var count__18145_18976 = (0);
var i__18146_18977 = (0);
while(true){
if((i__18146_18977 < count__18145_18976)){
var child_18978 = chunk__18144_18975.cljs$core$IIndexed$_nth$arity$2(null,i__18146_18977);
if(cljs.core.truth_(child_18978)){
node.appendChild(child_18978);


var G__18979 = seq__18142_18974;
var G__18980 = chunk__18144_18975;
var G__18981 = count__18145_18976;
var G__18982 = (i__18146_18977 + (1));
seq__18142_18974 = G__18979;
chunk__18144_18975 = G__18980;
count__18145_18976 = G__18981;
i__18146_18977 = G__18982;
continue;
} else {
var G__18983 = seq__18142_18974;
var G__18984 = chunk__18144_18975;
var G__18985 = count__18145_18976;
var G__18986 = (i__18146_18977 + (1));
seq__18142_18974 = G__18983;
chunk__18144_18975 = G__18984;
count__18145_18976 = G__18985;
i__18146_18977 = G__18986;
continue;
}
} else {
var temp__5804__auto___18987 = cljs.core.seq(seq__18142_18974);
if(temp__5804__auto___18987){
var seq__18142_18988__$1 = temp__5804__auto___18987;
if(cljs.core.chunked_seq_QMARK_(seq__18142_18988__$1)){
var c__5568__auto___18989 = cljs.core.chunk_first(seq__18142_18988__$1);
var G__18990 = cljs.core.chunk_rest(seq__18142_18988__$1);
var G__18991 = c__5568__auto___18989;
var G__18992 = cljs.core.count(c__5568__auto___18989);
var G__18993 = (0);
seq__18142_18974 = G__18990;
chunk__18144_18975 = G__18991;
count__18145_18976 = G__18992;
i__18146_18977 = G__18993;
continue;
} else {
var child_18994 = cljs.core.first(seq__18142_18988__$1);
if(cljs.core.truth_(child_18994)){
node.appendChild(child_18994);


var G__18995 = cljs.core.next(seq__18142_18988__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__18142_18974 = G__18995;
chunk__18144_18975 = G__18996;
count__18145_18976 = G__18997;
i__18146_18977 = G__18998;
continue;
} else {
var G__18999 = cljs.core.next(seq__18142_18988__$1);
var G__19000 = null;
var G__19001 = (0);
var G__19002 = (0);
seq__18142_18974 = G__18999;
chunk__18144_18975 = G__19000;
count__18145_18976 = G__19001;
i__18146_18977 = G__19002;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18973);
}
}


var G__19003 = seq__18065_18861;
var G__19004 = chunk__18067_18862;
var G__19005 = count__18068_18863;
var G__19006 = (i__18069_18864 + (1));
seq__18065_18861 = G__19003;
chunk__18067_18862 = G__19004;
count__18068_18863 = G__19005;
i__18069_18864 = G__19006;
continue;
} else {
var G__19007 = seq__18065_18861;
var G__19008 = chunk__18067_18862;
var G__19009 = count__18068_18863;
var G__19010 = (i__18069_18864 + (1));
seq__18065_18861 = G__19007;
chunk__18067_18862 = G__19008;
count__18068_18863 = G__19009;
i__18069_18864 = G__19010;
continue;
}
} else {
var temp__5804__auto___19011 = cljs.core.seq(seq__18065_18861);
if(temp__5804__auto___19011){
var seq__18065_19012__$1 = temp__5804__auto___19011;
if(cljs.core.chunked_seq_QMARK_(seq__18065_19012__$1)){
var c__5568__auto___19013 = cljs.core.chunk_first(seq__18065_19012__$1);
var G__19014 = cljs.core.chunk_rest(seq__18065_19012__$1);
var G__19015 = c__5568__auto___19013;
var G__19016 = cljs.core.count(c__5568__auto___19013);
var G__19017 = (0);
seq__18065_18861 = G__19014;
chunk__18067_18862 = G__19015;
count__18068_18863 = G__19016;
i__18069_18864 = G__19017;
continue;
} else {
var child_struct_19018 = cljs.core.first(seq__18065_19012__$1);
if((!((child_struct_19018 == null)))){
if(typeof child_struct_19018 === 'string'){
var text_19019 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19019),child_struct_19018].join(''));
} else {
var children_19021 = shadow.dom.svg_node(child_struct_19018);
if(cljs.core.seq_QMARK_(children_19021)){
var seq__18170_19022 = cljs.core.seq(children_19021);
var chunk__18172_19023 = null;
var count__18173_19024 = (0);
var i__18174_19025 = (0);
while(true){
if((i__18174_19025 < count__18173_19024)){
var child_19030 = chunk__18172_19023.cljs$core$IIndexed$_nth$arity$2(null,i__18174_19025);
if(cljs.core.truth_(child_19030)){
node.appendChild(child_19030);


var G__19032 = seq__18170_19022;
var G__19033 = chunk__18172_19023;
var G__19034 = count__18173_19024;
var G__19035 = (i__18174_19025 + (1));
seq__18170_19022 = G__19032;
chunk__18172_19023 = G__19033;
count__18173_19024 = G__19034;
i__18174_19025 = G__19035;
continue;
} else {
var G__19036 = seq__18170_19022;
var G__19037 = chunk__18172_19023;
var G__19038 = count__18173_19024;
var G__19039 = (i__18174_19025 + (1));
seq__18170_19022 = G__19036;
chunk__18172_19023 = G__19037;
count__18173_19024 = G__19038;
i__18174_19025 = G__19039;
continue;
}
} else {
var temp__5804__auto___19040__$1 = cljs.core.seq(seq__18170_19022);
if(temp__5804__auto___19040__$1){
var seq__18170_19041__$1 = temp__5804__auto___19040__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18170_19041__$1)){
var c__5568__auto___19042 = cljs.core.chunk_first(seq__18170_19041__$1);
var G__19043 = cljs.core.chunk_rest(seq__18170_19041__$1);
var G__19044 = c__5568__auto___19042;
var G__19045 = cljs.core.count(c__5568__auto___19042);
var G__19046 = (0);
seq__18170_19022 = G__19043;
chunk__18172_19023 = G__19044;
count__18173_19024 = G__19045;
i__18174_19025 = G__19046;
continue;
} else {
var child_19047 = cljs.core.first(seq__18170_19041__$1);
if(cljs.core.truth_(child_19047)){
node.appendChild(child_19047);


var G__19048 = cljs.core.next(seq__18170_19041__$1);
var G__19049 = null;
var G__19050 = (0);
var G__19051 = (0);
seq__18170_19022 = G__19048;
chunk__18172_19023 = G__19049;
count__18173_19024 = G__19050;
i__18174_19025 = G__19051;
continue;
} else {
var G__19053 = cljs.core.next(seq__18170_19041__$1);
var G__19054 = null;
var G__19055 = (0);
var G__19056 = (0);
seq__18170_19022 = G__19053;
chunk__18172_19023 = G__19054;
count__18173_19024 = G__19055;
i__18174_19025 = G__19056;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19021);
}
}


var G__19057 = cljs.core.next(seq__18065_19012__$1);
var G__19058 = null;
var G__19059 = (0);
var G__19060 = (0);
seq__18065_18861 = G__19057;
chunk__18067_18862 = G__19058;
count__18068_18863 = G__19059;
i__18069_18864 = G__19060;
continue;
} else {
var G__19061 = cljs.core.next(seq__18065_19012__$1);
var G__19062 = null;
var G__19063 = (0);
var G__19064 = (0);
seq__18065_18861 = G__19061;
chunk__18067_18862 = G__19062;
count__18068_18863 = G__19063;
i__18069_18864 = G__19064;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19069 = arguments.length;
var i__5770__auto___19070 = (0);
while(true){
if((i__5770__auto___19070 < len__5769__auto___19069)){
args__5775__auto__.push((arguments[i__5770__auto___19070]));

var G__19071 = (i__5770__auto___19070 + (1));
i__5770__auto___19070 = G__19071;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18238){
var G__18239 = cljs.core.first(seq18238);
var seq18238__$1 = cljs.core.next(seq18238);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18239,seq18238__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18241 = arguments.length;
switch (G__18241) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13528__auto___19082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_18249){
var state_val_18250 = (state_18249[(1)]);
if((state_val_18250 === (1))){
var state_18249__$1 = state_18249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18249__$1,(2),once_or_cleanup);
} else {
if((state_val_18250 === (2))){
var inst_18246 = (state_18249[(2)]);
var inst_18247 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18249__$1 = (function (){var statearr_18255 = state_18249;
(statearr_18255[(7)] = inst_18246);

return statearr_18255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18249__$1,inst_18247);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13302__auto__ = null;
var shadow$dom$state_machine__13302__auto____0 = (function (){
var statearr_18256 = [null,null,null,null,null,null,null,null];
(statearr_18256[(0)] = shadow$dom$state_machine__13302__auto__);

(statearr_18256[(1)] = (1));

return statearr_18256;
});
var shadow$dom$state_machine__13302__auto____1 = (function (state_18249){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_18249);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e18257){var ex__13305__auto__ = e18257;
var statearr_18258_19087 = state_18249;
(statearr_18258_19087[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_18249[(4)]))){
var statearr_18259_19088 = state_18249;
(statearr_18259_19088[(1)] = cljs.core.first((state_18249[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19089 = state_18249;
state_18249 = G__19089;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
shadow$dom$state_machine__13302__auto__ = function(state_18249){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13302__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13302__auto____1.call(this,state_18249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13302__auto____0;
shadow$dom$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13302__auto____1;
return shadow$dom$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_18263 = f__13531__auto__();
(statearr_18263[(6)] = c__13528__auto___19082);

return statearr_18263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
