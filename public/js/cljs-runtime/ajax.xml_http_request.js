goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__17050 = e.target.readyState;
var fexpr__17049 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__17049.cljs$core$IFn$_invoke$arity$1 ? fexpr__17049.cljs$core$IFn$_invoke$arity$1(G__17050) : fexpr__17049.call(null,G__17050));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__17052,handler){
var map__17053 = p__17052;
var map__17053__$1 = cljs.core.__destructure_map(map__17053);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17053__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17053__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17053__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17053__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17053__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17053__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17053__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__17051_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__17051_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___17089 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___17089)){
var response_type_17090 = temp__5804__auto___17089;
(this$__$1.responseType = cljs.core.name(response_type_17090));
} else {
}

var seq__17057_17091 = cljs.core.seq(headers);
var chunk__17058_17092 = null;
var count__17059_17093 = (0);
var i__17060_17094 = (0);
while(true){
if((i__17060_17094 < count__17059_17093)){
var vec__17070_17095 = chunk__17058_17092.cljs$core$IIndexed$_nth$arity$2(null,i__17060_17094);
var k_17096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070_17095,(0),null);
var v_17097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070_17095,(1),null);
this$__$1.setRequestHeader(k_17096,v_17097);


var G__17098 = seq__17057_17091;
var G__17099 = chunk__17058_17092;
var G__17100 = count__17059_17093;
var G__17101 = (i__17060_17094 + (1));
seq__17057_17091 = G__17098;
chunk__17058_17092 = G__17099;
count__17059_17093 = G__17100;
i__17060_17094 = G__17101;
continue;
} else {
var temp__5804__auto___17102 = cljs.core.seq(seq__17057_17091);
if(temp__5804__auto___17102){
var seq__17057_17103__$1 = temp__5804__auto___17102;
if(cljs.core.chunked_seq_QMARK_(seq__17057_17103__$1)){
var c__5568__auto___17104 = cljs.core.chunk_first(seq__17057_17103__$1);
var G__17105 = cljs.core.chunk_rest(seq__17057_17103__$1);
var G__17106 = c__5568__auto___17104;
var G__17107 = cljs.core.count(c__5568__auto___17104);
var G__17108 = (0);
seq__17057_17091 = G__17105;
chunk__17058_17092 = G__17106;
count__17059_17093 = G__17107;
i__17060_17094 = G__17108;
continue;
} else {
var vec__17073_17109 = cljs.core.first(seq__17057_17103__$1);
var k_17110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17073_17109,(0),null);
var v_17111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17073_17109,(1),null);
this$__$1.setRequestHeader(k_17110,v_17111);


var G__17112 = cljs.core.next(seq__17057_17103__$1);
var G__17113 = null;
var G__17114 = (0);
var G__17115 = (0);
seq__17057_17091 = G__17112;
chunk__17058_17092 = G__17113;
count__17059_17093 = G__17114;
i__17060_17094 = G__17115;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
