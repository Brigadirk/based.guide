goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13607 = (function (f,blockable,meta13608){
this.f = f;
this.blockable = blockable;
this.meta13608 = meta13608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13609,meta13608__$1){
var self__ = this;
var _13609__$1 = this;
return (new cljs.core.async.t_cljs$core$async13607(self__.f,self__.blockable,meta13608__$1));
}));

(cljs.core.async.t_cljs$core$async13607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13609){
var self__ = this;
var _13609__$1 = this;
return self__.meta13608;
}));

(cljs.core.async.t_cljs$core$async13607.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13608","meta13608",1540104254,null)], null);
}));

(cljs.core.async.t_cljs$core$async13607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13607");

(cljs.core.async.t_cljs$core$async13607.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13607.
 */
cljs.core.async.__GT_t_cljs$core$async13607 = (function cljs$core$async$__GT_t_cljs$core$async13607(f,blockable,meta13608){
return (new cljs.core.async.t_cljs$core$async13607(f,blockable,meta13608));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13606 = arguments.length;
switch (G__13606) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13607(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13622 = arguments.length;
switch (G__13622) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13625 = arguments.length;
switch (G__13625) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13630 = arguments.length;
switch (G__13630) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16795 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16795) : fn1.call(null,val_16795));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16795) : fn1.call(null,val_16795));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13638 = arguments.length;
switch (G__13638) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___16800 = n;
var x_16801 = (0);
while(true){
if((x_16801 < n__5636__auto___16800)){
(a[x_16801] = x_16801);

var G__16803 = (x_16801 + (1));
x_16801 = G__16803;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13639 = (function (flag,meta13640){
this.flag = flag;
this.meta13640 = meta13640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13641,meta13640__$1){
var self__ = this;
var _13641__$1 = this;
return (new cljs.core.async.t_cljs$core$async13639(self__.flag,meta13640__$1));
}));

(cljs.core.async.t_cljs$core$async13639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13641){
var self__ = this;
var _13641__$1 = this;
return self__.meta13640;
}));

(cljs.core.async.t_cljs$core$async13639.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13639.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13640","meta13640",834545047,null)], null);
}));

(cljs.core.async.t_cljs$core$async13639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13639");

(cljs.core.async.t_cljs$core$async13639.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13639.
 */
cljs.core.async.__GT_t_cljs$core$async13639 = (function cljs$core$async$__GT_t_cljs$core$async13639(flag,meta13640){
return (new cljs.core.async.t_cljs$core$async13639(flag,meta13640));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13639(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13654 = (function (flag,cb,meta13655){
this.flag = flag;
this.cb = cb;
this.meta13655 = meta13655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13656,meta13655__$1){
var self__ = this;
var _13656__$1 = this;
return (new cljs.core.async.t_cljs$core$async13654(self__.flag,self__.cb,meta13655__$1));
}));

(cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13656){
var self__ = this;
var _13656__$1 = this;
return self__.meta13655;
}));

(cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13655","meta13655",-696307088,null)], null);
}));

(cljs.core.async.t_cljs$core$async13654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13654");

(cljs.core.async.t_cljs$core$async13654.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13654.
 */
cljs.core.async.__GT_t_cljs$core$async13654 = (function cljs$core$async$__GT_t_cljs$core$async13654(flag,cb,meta13655){
return (new cljs.core.async.t_cljs$core$async13654(flag,cb,meta13655));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13654(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13669_SHARP_){
var G__13681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13669_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13681) : fret.call(null,G__13681));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13670_SHARP_){
var G__13685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13670_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13685) : fret.call(null,G__13685));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16817 = (i + (1));
i = G__16817;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16818 = arguments.length;
var i__5770__auto___16819 = (0);
while(true){
if((i__5770__auto___16819 < len__5769__auto___16818)){
args__5775__auto__.push((arguments[i__5770__auto___16819]));

var G__16821 = (i__5770__auto___16819 + (1));
i__5770__auto___16819 = G__16821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13706){
var map__13707 = p__13706;
var map__13707__$1 = cljs.core.__destructure_map(map__13707);
var opts = map__13707__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13701){
var G__13702 = cljs.core.first(seq13701);
var seq13701__$1 = cljs.core.next(seq13701);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13702,seq13701__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13732 = arguments.length;
switch (G__13732) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13528__auto___16837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_13799){
var state_val_13800 = (state_13799[(1)]);
if((state_val_13800 === (7))){
var inst_13793 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13807_16841 = state_13799__$1;
(statearr_13807_16841[(2)] = inst_13793);

(statearr_13807_16841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (1))){
var state_13799__$1 = state_13799;
var statearr_13811_16842 = state_13799__$1;
(statearr_13811_16842[(2)] = null);

(statearr_13811_16842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (4))){
var inst_13768 = (state_13799[(7)]);
var inst_13768__$1 = (state_13799[(2)]);
var inst_13771 = (inst_13768__$1 == null);
var state_13799__$1 = (function (){var statearr_13821 = state_13799;
(statearr_13821[(7)] = inst_13768__$1);

return statearr_13821;
})();
if(cljs.core.truth_(inst_13771)){
var statearr_13823_16846 = state_13799__$1;
(statearr_13823_16846[(1)] = (5));

} else {
var statearr_13824_16847 = state_13799__$1;
(statearr_13824_16847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (13))){
var state_13799__$1 = state_13799;
var statearr_13832_16848 = state_13799__$1;
(statearr_13832_16848[(2)] = null);

(statearr_13832_16848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (6))){
var inst_13768 = (state_13799[(7)]);
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13799__$1,(11),to,inst_13768);
} else {
if((state_val_13800 === (3))){
var inst_13796 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13799__$1,inst_13796);
} else {
if((state_val_13800 === (12))){
var state_13799__$1 = state_13799;
var statearr_13841_16852 = state_13799__$1;
(statearr_13841_16852[(2)] = null);

(statearr_13841_16852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (2))){
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13799__$1,(4),from);
} else {
if((state_val_13800 === (11))){
var inst_13782 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
if(cljs.core.truth_(inst_13782)){
var statearr_13843_16855 = state_13799__$1;
(statearr_13843_16855[(1)] = (12));

} else {
var statearr_13844_16856 = state_13799__$1;
(statearr_13844_16856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (9))){
var state_13799__$1 = state_13799;
var statearr_13847_16859 = state_13799__$1;
(statearr_13847_16859[(2)] = null);

(statearr_13847_16859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (5))){
var state_13799__$1 = state_13799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13852_16861 = state_13799__$1;
(statearr_13852_16861[(1)] = (8));

} else {
var statearr_13853_16862 = state_13799__$1;
(statearr_13853_16862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (14))){
var inst_13790 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13855_16863 = state_13799__$1;
(statearr_13855_16863[(2)] = inst_13790);

(statearr_13855_16863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (10))){
var inst_13779 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13860_16864 = state_13799__$1;
(statearr_13860_16864[(2)] = inst_13779);

(statearr_13860_16864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13800 === (8))){
var inst_13775 = cljs.core.async.close_BANG_(to);
var state_13799__$1 = state_13799;
var statearr_13866_16865 = state_13799__$1;
(statearr_13866_16865[(2)] = inst_13775);

(statearr_13866_16865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_13871 = [null,null,null,null,null,null,null,null];
(statearr_13871[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_13871[(1)] = (1));

return statearr_13871;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_13799){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_13799);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e13874){var ex__13305__auto__ = e13874;
var statearr_13879_16866 = state_13799;
(statearr_13879_16866[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_13799[(4)]))){
var statearr_13881_16868 = state_13799;
(statearr_13881_16868[(1)] = cljs.core.first((state_13799[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16869 = state_13799;
state_13799 = G__16869;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_13799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_13799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_13885 = f__13531__auto__();
(statearr_13885[(6)] = c__13528__auto___16837);

return statearr_13885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13909){
var vec__13911 = p__13909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,(1),null);
var job = vec__13911;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13528__auto___16876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_13918){
var state_val_13919 = (state_13918[(1)]);
if((state_val_13919 === (1))){
var state_13918__$1 = state_13918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13918__$1,(2),res,v);
} else {
if((state_val_13919 === (2))){
var inst_13915 = (state_13918[(2)]);
var inst_13916 = cljs.core.async.close_BANG_(res);
var state_13918__$1 = (function (){var statearr_13921 = state_13918;
(statearr_13921[(7)] = inst_13915);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13918__$1,inst_13916);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0 = (function (){
var statearr_13925 = [null,null,null,null,null,null,null,null];
(statearr_13925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__);

(statearr_13925[(1)] = (1));

return statearr_13925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1 = (function (state_13918){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_13918);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e13929){var ex__13305__auto__ = e13929;
var statearr_13930_16892 = state_13918;
(statearr_13930_16892[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_13918[(4)]))){
var statearr_13932_16894 = state_13918;
(statearr_13932_16894[(1)] = cljs.core.first((state_13918[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16895 = state_13918;
state_13918 = G__16895;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = function(state_13918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1.call(this,state_13918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_13935 = f__13531__auto__();
(statearr_13935[(6)] = c__13528__auto___16876);

return statearr_13935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13940){
var vec__13941 = p__13940;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13941,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13941,(1),null);
var job = vec__13941;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___16906 = n;
var __16907 = (0);
while(true){
if((__16907 < n__5636__auto___16906)){
var G__13945_16908 = type;
var G__13945_16909__$1 = (((G__13945_16908 instanceof cljs.core.Keyword))?G__13945_16908.fqn:null);
switch (G__13945_16909__$1) {
case "compute":
var c__13528__auto___16911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16907,c__13528__auto___16911,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async){
return (function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = ((function (__16907,c__13528__auto___16911,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async){
return (function (state_13964){
var state_val_13965 = (state_13964[(1)]);
if((state_val_13965 === (1))){
var state_13964__$1 = state_13964;
var statearr_13978_16914 = state_13964__$1;
(statearr_13978_16914[(2)] = null);

(statearr_13978_16914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (2))){
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13964__$1,(4),jobs);
} else {
if((state_val_13965 === (3))){
var inst_13962 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13964__$1,inst_13962);
} else {
if((state_val_13965 === (4))){
var inst_13953 = (state_13964[(2)]);
var inst_13955 = process__$1(inst_13953);
var state_13964__$1 = state_13964;
if(cljs.core.truth_(inst_13955)){
var statearr_13988_16918 = state_13964__$1;
(statearr_13988_16918[(1)] = (5));

} else {
var statearr_13991_16919 = state_13964__$1;
(statearr_13991_16919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (5))){
var state_13964__$1 = state_13964;
var statearr_13993_16929 = state_13964__$1;
(statearr_13993_16929[(2)] = null);

(statearr_13993_16929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (6))){
var state_13964__$1 = state_13964;
var statearr_13994_16933 = state_13964__$1;
(statearr_13994_16933[(2)] = null);

(statearr_13994_16933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (7))){
var inst_13960 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
var statearr_13995_16937 = state_13964__$1;
(statearr_13995_16937[(2)] = inst_13960);

(statearr_13995_16937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16907,c__13528__auto___16911,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async))
;
return ((function (__16907,switch__13301__auto__,c__13528__auto___16911,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0 = (function (){
var statearr_13996 = [null,null,null,null,null,null,null];
(statearr_13996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__);

(statearr_13996[(1)] = (1));

return statearr_13996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1 = (function (state_13964){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_13964);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e13997){var ex__13305__auto__ = e13997;
var statearr_13998_16944 = state_13964;
(statearr_13998_16944[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_13964[(4)]))){
var statearr_13999_16945 = state_13964;
(statearr_13999_16945[(1)] = cljs.core.first((state_13964[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16946 = state_13964;
state_13964 = G__16946;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = function(state_13964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1.call(this,state_13964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__;
})()
;})(__16907,switch__13301__auto__,c__13528__auto___16911,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async))
})();
var state__13532__auto__ = (function (){var statearr_14000 = f__13531__auto__();
(statearr_14000[(6)] = c__13528__auto___16911);

return statearr_14000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
});})(__16907,c__13528__auto___16911,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async))
);


break;
case "async":
var c__13528__auto___16951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16907,c__13528__auto___16951,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async){
return (function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = ((function (__16907,c__13528__auto___16951,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async){
return (function (state_14015){
var state_val_14016 = (state_14015[(1)]);
if((state_val_14016 === (1))){
var state_14015__$1 = state_14015;
var statearr_14017_16952 = state_14015__$1;
(statearr_14017_16952[(2)] = null);

(statearr_14017_16952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14016 === (2))){
var state_14015__$1 = state_14015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14015__$1,(4),jobs);
} else {
if((state_val_14016 === (3))){
var inst_14012 = (state_14015[(2)]);
var state_14015__$1 = state_14015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14015__$1,inst_14012);
} else {
if((state_val_14016 === (4))){
var inst_14004 = (state_14015[(2)]);
var inst_14005 = async(inst_14004);
var state_14015__$1 = state_14015;
if(cljs.core.truth_(inst_14005)){
var statearr_14030_16955 = state_14015__$1;
(statearr_14030_16955[(1)] = (5));

} else {
var statearr_14035_16956 = state_14015__$1;
(statearr_14035_16956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14016 === (5))){
var state_14015__$1 = state_14015;
var statearr_14045_16957 = state_14015__$1;
(statearr_14045_16957[(2)] = null);

(statearr_14045_16957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14016 === (6))){
var state_14015__$1 = state_14015;
var statearr_14048_16958 = state_14015__$1;
(statearr_14048_16958[(2)] = null);

(statearr_14048_16958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14016 === (7))){
var inst_14010 = (state_14015[(2)]);
var state_14015__$1 = state_14015;
var statearr_14050_16959 = state_14015__$1;
(statearr_14050_16959[(2)] = inst_14010);

(statearr_14050_16959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16907,c__13528__auto___16951,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async))
;
return ((function (__16907,switch__13301__auto__,c__13528__auto___16951,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0 = (function (){
var statearr_14051 = [null,null,null,null,null,null,null];
(statearr_14051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__);

(statearr_14051[(1)] = (1));

return statearr_14051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1 = (function (state_14015){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14015);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14052){var ex__13305__auto__ = e14052;
var statearr_14053_16961 = state_14015;
(statearr_14053_16961[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14015[(4)]))){
var statearr_14054_16965 = state_14015;
(statearr_14054_16965[(1)] = cljs.core.first((state_14015[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16968 = state_14015;
state_14015 = G__16968;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = function(state_14015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1.call(this,state_14015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__;
})()
;})(__16907,switch__13301__auto__,c__13528__auto___16951,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async))
})();
var state__13532__auto__ = (function (){var statearr_14055 = f__13531__auto__();
(statearr_14055[(6)] = c__13528__auto___16951);

return statearr_14055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
});})(__16907,c__13528__auto___16951,G__13945_16908,G__13945_16909__$1,n__5636__auto___16906,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13945_16909__$1)].join('')));

}

var G__16972 = (__16907 + (1));
__16907 = G__16972;
continue;
} else {
}
break;
}

var c__13528__auto___16973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14083){
var state_val_14084 = (state_14083[(1)]);
if((state_val_14084 === (7))){
var inst_14079 = (state_14083[(2)]);
var state_14083__$1 = state_14083;
var statearr_14090_16976 = state_14083__$1;
(statearr_14090_16976[(2)] = inst_14079);

(statearr_14090_16976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14084 === (1))){
var state_14083__$1 = state_14083;
var statearr_14091_16977 = state_14083__$1;
(statearr_14091_16977[(2)] = null);

(statearr_14091_16977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14084 === (4))){
var inst_14061 = (state_14083[(7)]);
var inst_14061__$1 = (state_14083[(2)]);
var inst_14064 = (inst_14061__$1 == null);
var state_14083__$1 = (function (){var statearr_14092 = state_14083;
(statearr_14092[(7)] = inst_14061__$1);

return statearr_14092;
})();
if(cljs.core.truth_(inst_14064)){
var statearr_14093_16983 = state_14083__$1;
(statearr_14093_16983[(1)] = (5));

} else {
var statearr_14094_16985 = state_14083__$1;
(statearr_14094_16985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14084 === (6))){
var inst_14068 = (state_14083[(8)]);
var inst_14061 = (state_14083[(7)]);
var inst_14068__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14071 = [inst_14061,inst_14068__$1];
var inst_14072 = (new cljs.core.PersistentVector(null,2,(5),inst_14070,inst_14071,null));
var state_14083__$1 = (function (){var statearr_14095 = state_14083;
(statearr_14095[(8)] = inst_14068__$1);

return statearr_14095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14083__$1,(8),jobs,inst_14072);
} else {
if((state_val_14084 === (3))){
var inst_14081 = (state_14083[(2)]);
var state_14083__$1 = state_14083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14083__$1,inst_14081);
} else {
if((state_val_14084 === (2))){
var state_14083__$1 = state_14083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14083__$1,(4),from);
} else {
if((state_val_14084 === (9))){
var inst_14076 = (state_14083[(2)]);
var state_14083__$1 = (function (){var statearr_14106 = state_14083;
(statearr_14106[(9)] = inst_14076);

return statearr_14106;
})();
var statearr_14113_16992 = state_14083__$1;
(statearr_14113_16992[(2)] = null);

(statearr_14113_16992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14084 === (5))){
var inst_14066 = cljs.core.async.close_BANG_(jobs);
var state_14083__$1 = state_14083;
var statearr_14123_16997 = state_14083__$1;
(statearr_14123_16997[(2)] = inst_14066);

(statearr_14123_16997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14084 === (8))){
var inst_14068 = (state_14083[(8)]);
var inst_14074 = (state_14083[(2)]);
var state_14083__$1 = (function (){var statearr_14128 = state_14083;
(statearr_14128[(10)] = inst_14074);

return statearr_14128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14083__$1,(9),results,inst_14068);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0 = (function (){
var statearr_14132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__);

(statearr_14132[(1)] = (1));

return statearr_14132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1 = (function (state_14083){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14083);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14135){var ex__13305__auto__ = e14135;
var statearr_14136_17002 = state_14083;
(statearr_14136_17002[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14083[(4)]))){
var statearr_14137_17003 = state_14083;
(statearr_14137_17003[(1)] = cljs.core.first((state_14083[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17004 = state_14083;
state_14083 = G__17004;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = function(state_14083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1.call(this,state_14083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_14142 = f__13531__auto__();
(statearr_14142[(6)] = c__13528__auto___16973);

return statearr_14142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


var c__13528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14188){
var state_val_14189 = (state_14188[(1)]);
if((state_val_14189 === (7))){
var inst_14182 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14194_17011 = state_14188__$1;
(statearr_14194_17011[(2)] = inst_14182);

(statearr_14194_17011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (20))){
var state_14188__$1 = state_14188;
var statearr_14201_17016 = state_14188__$1;
(statearr_14201_17016[(2)] = null);

(statearr_14201_17016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (1))){
var state_14188__$1 = state_14188;
var statearr_14214_17020 = state_14188__$1;
(statearr_14214_17020[(2)] = null);

(statearr_14214_17020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (4))){
var inst_14148 = (state_14188[(7)]);
var inst_14148__$1 = (state_14188[(2)]);
var inst_14149 = (inst_14148__$1 == null);
var state_14188__$1 = (function (){var statearr_14217 = state_14188;
(statearr_14217[(7)] = inst_14148__$1);

return statearr_14217;
})();
if(cljs.core.truth_(inst_14149)){
var statearr_14220_17021 = state_14188__$1;
(statearr_14220_17021[(1)] = (5));

} else {
var statearr_14221_17022 = state_14188__$1;
(statearr_14221_17022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (15))){
var inst_14161 = (state_14188[(8)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14188__$1,(18),to,inst_14161);
} else {
if((state_val_14189 === (21))){
var inst_14177 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14227_17026 = state_14188__$1;
(statearr_14227_17026[(2)] = inst_14177);

(statearr_14227_17026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (13))){
var inst_14179 = (state_14188[(2)]);
var state_14188__$1 = (function (){var statearr_14239 = state_14188;
(statearr_14239[(9)] = inst_14179);

return statearr_14239;
})();
var statearr_14241_17027 = state_14188__$1;
(statearr_14241_17027[(2)] = null);

(statearr_14241_17027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (6))){
var inst_14148 = (state_14188[(7)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14188__$1,(11),inst_14148);
} else {
if((state_val_14189 === (17))){
var inst_14171 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
if(cljs.core.truth_(inst_14171)){
var statearr_14246_17031 = state_14188__$1;
(statearr_14246_17031[(1)] = (19));

} else {
var statearr_14247_17032 = state_14188__$1;
(statearr_14247_17032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (3))){
var inst_14184 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14188__$1,inst_14184);
} else {
if((state_val_14189 === (12))){
var inst_14158 = (state_14188[(10)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14188__$1,(14),inst_14158);
} else {
if((state_val_14189 === (2))){
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14188__$1,(4),results);
} else {
if((state_val_14189 === (19))){
var state_14188__$1 = state_14188;
var statearr_14261_17033 = state_14188__$1;
(statearr_14261_17033[(2)] = null);

(statearr_14261_17033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (11))){
var inst_14158 = (state_14188[(2)]);
var state_14188__$1 = (function (){var statearr_14267 = state_14188;
(statearr_14267[(10)] = inst_14158);

return statearr_14267;
})();
var statearr_14273_17038 = state_14188__$1;
(statearr_14273_17038[(2)] = null);

(statearr_14273_17038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (9))){
var state_14188__$1 = state_14188;
var statearr_14277_17039 = state_14188__$1;
(statearr_14277_17039[(2)] = null);

(statearr_14277_17039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (5))){
var state_14188__$1 = state_14188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14278_17040 = state_14188__$1;
(statearr_14278_17040[(1)] = (8));

} else {
var statearr_14279_17041 = state_14188__$1;
(statearr_14279_17041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (14))){
var inst_14161 = (state_14188[(8)]);
var inst_14164 = (state_14188[(11)]);
var inst_14161__$1 = (state_14188[(2)]);
var inst_14163 = (inst_14161__$1 == null);
var inst_14164__$1 = cljs.core.not(inst_14163);
var state_14188__$1 = (function (){var statearr_14281 = state_14188;
(statearr_14281[(8)] = inst_14161__$1);

(statearr_14281[(11)] = inst_14164__$1);

return statearr_14281;
})();
if(inst_14164__$1){
var statearr_14284_17042 = state_14188__$1;
(statearr_14284_17042[(1)] = (15));

} else {
var statearr_14285_17043 = state_14188__$1;
(statearr_14285_17043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (16))){
var inst_14164 = (state_14188[(11)]);
var state_14188__$1 = state_14188;
var statearr_14288_17048 = state_14188__$1;
(statearr_14288_17048[(2)] = inst_14164);

(statearr_14288_17048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (10))){
var inst_14155 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14290_17052 = state_14188__$1;
(statearr_14290_17052[(2)] = inst_14155);

(statearr_14290_17052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (18))){
var inst_14167 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14292_17053 = state_14188__$1;
(statearr_14292_17053[(2)] = inst_14167);

(statearr_14292_17053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (8))){
var inst_14152 = cljs.core.async.close_BANG_(to);
var state_14188__$1 = state_14188;
var statearr_14293_17054 = state_14188__$1;
(statearr_14293_17054[(2)] = inst_14152);

(statearr_14293_17054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0 = (function (){
var statearr_14298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__);

(statearr_14298[(1)] = (1));

return statearr_14298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1 = (function (state_14188){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14188);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14302){var ex__13305__auto__ = e14302;
var statearr_14303_17058 = state_14188;
(statearr_14303_17058[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14188[(4)]))){
var statearr_14306_17063 = state_14188;
(statearr_14306_17063[(1)] = cljs.core.first((state_14188[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17064 = state_14188;
state_14188 = G__17064;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_14319 = f__13531__auto__();
(statearr_14319[(6)] = c__13528__auto__);

return statearr_14319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

return c__13528__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14325 = arguments.length;
switch (G__14325) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14330 = arguments.length;
switch (G__14330) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14337 = arguments.length;
switch (G__14337) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13528__auto___17089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14375){
var state_val_14376 = (state_14375[(1)]);
if((state_val_14376 === (7))){
var inst_14369 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
var statearr_14379_17094 = state_14375__$1;
(statearr_14379_17094[(2)] = inst_14369);

(statearr_14379_17094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (1))){
var state_14375__$1 = state_14375;
var statearr_14383_17095 = state_14375__$1;
(statearr_14383_17095[(2)] = null);

(statearr_14383_17095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (4))){
var inst_14348 = (state_14375[(7)]);
var inst_14348__$1 = (state_14375[(2)]);
var inst_14350 = (inst_14348__$1 == null);
var state_14375__$1 = (function (){var statearr_14389 = state_14375;
(statearr_14389[(7)] = inst_14348__$1);

return statearr_14389;
})();
if(cljs.core.truth_(inst_14350)){
var statearr_14390_17096 = state_14375__$1;
(statearr_14390_17096[(1)] = (5));

} else {
var statearr_14391_17097 = state_14375__$1;
(statearr_14391_17097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (13))){
var state_14375__$1 = state_14375;
var statearr_14394_17100 = state_14375__$1;
(statearr_14394_17100[(2)] = null);

(statearr_14394_17100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (6))){
var inst_14348 = (state_14375[(7)]);
var inst_14356 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14348) : p.call(null,inst_14348));
var state_14375__$1 = state_14375;
if(cljs.core.truth_(inst_14356)){
var statearr_14396_17102 = state_14375__$1;
(statearr_14396_17102[(1)] = (9));

} else {
var statearr_14397_17105 = state_14375__$1;
(statearr_14397_17105[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (3))){
var inst_14371 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14375__$1,inst_14371);
} else {
if((state_val_14376 === (12))){
var state_14375__$1 = state_14375;
var statearr_14400_17112 = state_14375__$1;
(statearr_14400_17112[(2)] = null);

(statearr_14400_17112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (2))){
var state_14375__$1 = state_14375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14375__$1,(4),ch);
} else {
if((state_val_14376 === (11))){
var inst_14348 = (state_14375[(7)]);
var inst_14360 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14375__$1,(8),inst_14360,inst_14348);
} else {
if((state_val_14376 === (9))){
var state_14375__$1 = state_14375;
var statearr_14406_17121 = state_14375__$1;
(statearr_14406_17121[(2)] = tc);

(statearr_14406_17121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (5))){
var inst_14352 = cljs.core.async.close_BANG_(tc);
var inst_14353 = cljs.core.async.close_BANG_(fc);
var state_14375__$1 = (function (){var statearr_14411 = state_14375;
(statearr_14411[(8)] = inst_14352);

return statearr_14411;
})();
var statearr_14412_17122 = state_14375__$1;
(statearr_14412_17122[(2)] = inst_14353);

(statearr_14412_17122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (14))){
var inst_14367 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
var statearr_14414_17125 = state_14375__$1;
(statearr_14414_17125[(2)] = inst_14367);

(statearr_14414_17125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (10))){
var state_14375__$1 = state_14375;
var statearr_14418_17127 = state_14375__$1;
(statearr_14418_17127[(2)] = fc);

(statearr_14418_17127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (8))){
var inst_14362 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
if(cljs.core.truth_(inst_14362)){
var statearr_14421_17128 = state_14375__$1;
(statearr_14421_17128[(1)] = (12));

} else {
var statearr_14425_17129 = state_14375__$1;
(statearr_14425_17129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_14429 = [null,null,null,null,null,null,null,null,null];
(statearr_14429[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_14429[(1)] = (1));

return statearr_14429;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_14375){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14375);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14431){var ex__13305__auto__ = e14431;
var statearr_14432_17133 = state_14375;
(statearr_14432_17133[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14375[(4)]))){
var statearr_14433_17134 = state_14375;
(statearr_14433_17134[(1)] = cljs.core.first((state_14375[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17135 = state_14375;
state_14375 = G__17135;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_14375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_14375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_14438 = f__13531__auto__();
(statearr_14438[(6)] = c__13528__auto___17089);

return statearr_14438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14467){
var state_val_14468 = (state_14467[(1)]);
if((state_val_14468 === (7))){
var inst_14462 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14473_17142 = state_14467__$1;
(statearr_14473_17142[(2)] = inst_14462);

(statearr_14473_17142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (1))){
var inst_14441 = init;
var inst_14442 = inst_14441;
var state_14467__$1 = (function (){var statearr_14476 = state_14467;
(statearr_14476[(7)] = inst_14442);

return statearr_14476;
})();
var statearr_14479_17143 = state_14467__$1;
(statearr_14479_17143[(2)] = null);

(statearr_14479_17143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (4))){
var inst_14446 = (state_14467[(8)]);
var inst_14446__$1 = (state_14467[(2)]);
var inst_14447 = (inst_14446__$1 == null);
var state_14467__$1 = (function (){var statearr_14481 = state_14467;
(statearr_14481[(8)] = inst_14446__$1);

return statearr_14481;
})();
if(cljs.core.truth_(inst_14447)){
var statearr_14484_17144 = state_14467__$1;
(statearr_14484_17144[(1)] = (5));

} else {
var statearr_14486_17145 = state_14467__$1;
(statearr_14486_17145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (6))){
var inst_14446 = (state_14467[(8)]);
var inst_14453 = (state_14467[(9)]);
var inst_14442 = (state_14467[(7)]);
var inst_14453__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14442,inst_14446) : f.call(null,inst_14442,inst_14446));
var inst_14454 = cljs.core.reduced_QMARK_(inst_14453__$1);
var state_14467__$1 = (function (){var statearr_14488 = state_14467;
(statearr_14488[(9)] = inst_14453__$1);

return statearr_14488;
})();
if(inst_14454){
var statearr_14489_17146 = state_14467__$1;
(statearr_14489_17146[(1)] = (8));

} else {
var statearr_14490_17147 = state_14467__$1;
(statearr_14490_17147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (3))){
var inst_14464 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14467__$1,inst_14464);
} else {
if((state_val_14468 === (2))){
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14467__$1,(4),ch);
} else {
if((state_val_14468 === (9))){
var inst_14453 = (state_14467[(9)]);
var inst_14442 = inst_14453;
var state_14467__$1 = (function (){var statearr_14498 = state_14467;
(statearr_14498[(7)] = inst_14442);

return statearr_14498;
})();
var statearr_14499_17151 = state_14467__$1;
(statearr_14499_17151[(2)] = null);

(statearr_14499_17151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (5))){
var inst_14442 = (state_14467[(7)]);
var state_14467__$1 = state_14467;
var statearr_14502_17155 = state_14467__$1;
(statearr_14502_17155[(2)] = inst_14442);

(statearr_14502_17155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (10))){
var inst_14460 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14503_17159 = state_14467__$1;
(statearr_14503_17159[(2)] = inst_14460);

(statearr_14503_17159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (8))){
var inst_14453 = (state_14467[(9)]);
var inst_14456 = cljs.core.deref(inst_14453);
var state_14467__$1 = state_14467;
var statearr_14505_17160 = state_14467__$1;
(statearr_14505_17160[(2)] = inst_14456);

(statearr_14505_17160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13302__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13302__auto____0 = (function (){
var statearr_14512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14512[(0)] = cljs$core$async$reduce_$_state_machine__13302__auto__);

(statearr_14512[(1)] = (1));

return statearr_14512;
});
var cljs$core$async$reduce_$_state_machine__13302__auto____1 = (function (state_14467){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14467);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14513){var ex__13305__auto__ = e14513;
var statearr_14514_17163 = state_14467;
(statearr_14514_17163[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14467[(4)]))){
var statearr_14515_17164 = state_14467;
(statearr_14515_17164[(1)] = cljs.core.first((state_14467[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17165 = state_14467;
state_14467 = G__17165;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13302__auto__ = function(state_14467){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13302__auto____1.call(this,state_14467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13302__auto____0;
cljs$core$async$reduce_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13302__auto____1;
return cljs$core$async$reduce_$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_14520 = f__13531__auto__();
(statearr_14520[(6)] = c__13528__auto__);

return statearr_14520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

return c__13528__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14541){
var state_val_14542 = (state_14541[(1)]);
if((state_val_14542 === (1))){
var inst_14527 = cljs.core.async.reduce(f__$1,init,ch);
var state_14541__$1 = state_14541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14541__$1,(2),inst_14527);
} else {
if((state_val_14542 === (2))){
var inst_14529 = (state_14541[(2)]);
var inst_14537 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14529) : f__$1.call(null,inst_14529));
var state_14541__$1 = state_14541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14541__$1,inst_14537);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13302__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13302__auto____0 = (function (){
var statearr_14552 = [null,null,null,null,null,null,null];
(statearr_14552[(0)] = cljs$core$async$transduce_$_state_machine__13302__auto__);

(statearr_14552[(1)] = (1));

return statearr_14552;
});
var cljs$core$async$transduce_$_state_machine__13302__auto____1 = (function (state_14541){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14541);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14557){var ex__13305__auto__ = e14557;
var statearr_14558_17170 = state_14541;
(statearr_14558_17170[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14541[(4)]))){
var statearr_14559_17171 = state_14541;
(statearr_14559_17171[(1)] = cljs.core.first((state_14541[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17172 = state_14541;
state_14541 = G__17172;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13302__auto__ = function(state_14541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13302__auto____1.call(this,state_14541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13302__auto____0;
cljs$core$async$transduce_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13302__auto____1;
return cljs$core$async$transduce_$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_14564 = f__13531__auto__();
(statearr_14564[(6)] = c__13528__auto__);

return statearr_14564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

return c__13528__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14570 = arguments.length;
switch (G__14570) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14608){
var state_val_14609 = (state_14608[(1)]);
if((state_val_14609 === (7))){
var inst_14588 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
var statearr_14611_17181 = state_14608__$1;
(statearr_14611_17181[(2)] = inst_14588);

(statearr_14611_17181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (1))){
var inst_14580 = cljs.core.seq(coll);
var inst_14581 = inst_14580;
var state_14608__$1 = (function (){var statearr_14613 = state_14608;
(statearr_14613[(7)] = inst_14581);

return statearr_14613;
})();
var statearr_14615_17184 = state_14608__$1;
(statearr_14615_17184[(2)] = null);

(statearr_14615_17184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (4))){
var inst_14581 = (state_14608[(7)]);
var inst_14586 = cljs.core.first(inst_14581);
var state_14608__$1 = state_14608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14608__$1,(7),ch,inst_14586);
} else {
if((state_val_14609 === (13))){
var inst_14602 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
var statearr_14619_17191 = state_14608__$1;
(statearr_14619_17191[(2)] = inst_14602);

(statearr_14619_17191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (6))){
var inst_14591 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
if(cljs.core.truth_(inst_14591)){
var statearr_14621_17194 = state_14608__$1;
(statearr_14621_17194[(1)] = (8));

} else {
var statearr_14622_17197 = state_14608__$1;
(statearr_14622_17197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (3))){
var inst_14606 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14608__$1,inst_14606);
} else {
if((state_val_14609 === (12))){
var state_14608__$1 = state_14608;
var statearr_14624_17199 = state_14608__$1;
(statearr_14624_17199[(2)] = null);

(statearr_14624_17199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (2))){
var inst_14581 = (state_14608[(7)]);
var state_14608__$1 = state_14608;
if(cljs.core.truth_(inst_14581)){
var statearr_14627_17201 = state_14608__$1;
(statearr_14627_17201[(1)] = (4));

} else {
var statearr_14629_17203 = state_14608__$1;
(statearr_14629_17203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (11))){
var inst_14599 = cljs.core.async.close_BANG_(ch);
var state_14608__$1 = state_14608;
var statearr_14633_17204 = state_14608__$1;
(statearr_14633_17204[(2)] = inst_14599);

(statearr_14633_17204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (9))){
var state_14608__$1 = state_14608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14634_17208 = state_14608__$1;
(statearr_14634_17208[(1)] = (11));

} else {
var statearr_14635_17209 = state_14608__$1;
(statearr_14635_17209[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (5))){
var inst_14581 = (state_14608[(7)]);
var state_14608__$1 = state_14608;
var statearr_14637_17213 = state_14608__$1;
(statearr_14637_17213[(2)] = inst_14581);

(statearr_14637_17213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (10))){
var inst_14604 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
var statearr_14641_17214 = state_14608__$1;
(statearr_14641_17214[(2)] = inst_14604);

(statearr_14641_17214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (8))){
var inst_14581 = (state_14608[(7)]);
var inst_14593 = cljs.core.next(inst_14581);
var inst_14581__$1 = inst_14593;
var state_14608__$1 = (function (){var statearr_14645 = state_14608;
(statearr_14645[(7)] = inst_14581__$1);

return statearr_14645;
})();
var statearr_14648_17218 = state_14608__$1;
(statearr_14648_17218[(2)] = null);

(statearr_14648_17218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_14661 = [null,null,null,null,null,null,null,null];
(statearr_14661[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_14661[(1)] = (1));

return statearr_14661;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_14608){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14608);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e14666){var ex__13305__auto__ = e14666;
var statearr_14669_17222 = state_14608;
(statearr_14669_17222[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14608[(4)]))){
var statearr_14670_17223 = state_14608;
(statearr_14670_17223[(1)] = cljs.core.first((state_14608[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17224 = state_14608;
state_14608 = G__17224;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_14608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_14608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_14673 = f__13531__auto__();
(statearr_14673[(6)] = c__13528__auto__);

return statearr_14673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

return c__13528__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14678 = arguments.length;
switch (G__14678) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17245 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17245(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17246 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17246(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17247 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17247(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17248 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17248(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14706 = (function (ch,cs,meta14707){
this.ch = ch;
this.cs = cs;
this.meta14707 = meta14707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14708,meta14707__$1){
var self__ = this;
var _14708__$1 = this;
return (new cljs.core.async.t_cljs$core$async14706(self__.ch,self__.cs,meta14707__$1));
}));

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14708){
var self__ = this;
var _14708__$1 = this;
return self__.meta14707;
}));

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14707","meta14707",592325733,null)], null);
}));

(cljs.core.async.t_cljs$core$async14706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14706");

(cljs.core.async.t_cljs$core$async14706.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14706.
 */
cljs.core.async.__GT_t_cljs$core$async14706 = (function cljs$core$async$__GT_t_cljs$core$async14706(ch,cs,meta14707){
return (new cljs.core.async.t_cljs$core$async14706(ch,cs,meta14707));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14706(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13528__auto___17261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_14901){
var state_val_14902 = (state_14901[(1)]);
if((state_val_14902 === (7))){
var inst_14897 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_14906_17262 = state_14901__$1;
(statearr_14906_17262[(2)] = inst_14897);

(statearr_14906_17262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (20))){
var inst_14786 = (state_14901[(7)]);
var inst_14799 = cljs.core.first(inst_14786);
var inst_14800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14799,(0),null);
var inst_14801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14799,(1),null);
var state_14901__$1 = (function (){var statearr_14907 = state_14901;
(statearr_14907[(8)] = inst_14800);

return statearr_14907;
})();
if(cljs.core.truth_(inst_14801)){
var statearr_14909_17263 = state_14901__$1;
(statearr_14909_17263[(1)] = (22));

} else {
var statearr_14910_17264 = state_14901__$1;
(statearr_14910_17264[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (27))){
var inst_14835 = (state_14901[(9)]);
var inst_14840 = (state_14901[(10)]);
var inst_14833 = (state_14901[(11)]);
var inst_14743 = (state_14901[(12)]);
var inst_14840__$1 = cljs.core._nth(inst_14833,inst_14835);
var inst_14841 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14840__$1,inst_14743,done);
var state_14901__$1 = (function (){var statearr_14911 = state_14901;
(statearr_14911[(10)] = inst_14840__$1);

return statearr_14911;
})();
if(cljs.core.truth_(inst_14841)){
var statearr_14912_17265 = state_14901__$1;
(statearr_14912_17265[(1)] = (30));

} else {
var statearr_14913_17266 = state_14901__$1;
(statearr_14913_17266[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (1))){
var state_14901__$1 = state_14901;
var statearr_14914_17267 = state_14901__$1;
(statearr_14914_17267[(2)] = null);

(statearr_14914_17267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (24))){
var inst_14786 = (state_14901[(7)]);
var inst_14806 = (state_14901[(2)]);
var inst_14807 = cljs.core.next(inst_14786);
var inst_14758 = inst_14807;
var inst_14759 = null;
var inst_14760 = (0);
var inst_14761 = (0);
var state_14901__$1 = (function (){var statearr_14916 = state_14901;
(statearr_14916[(13)] = inst_14761);

(statearr_14916[(14)] = inst_14759);

(statearr_14916[(15)] = inst_14760);

(statearr_14916[(16)] = inst_14806);

(statearr_14916[(17)] = inst_14758);

return statearr_14916;
})();
var statearr_14920_17268 = state_14901__$1;
(statearr_14920_17268[(2)] = null);

(statearr_14920_17268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (39))){
var state_14901__$1 = state_14901;
var statearr_14927_17269 = state_14901__$1;
(statearr_14927_17269[(2)] = null);

(statearr_14927_17269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (4))){
var inst_14743 = (state_14901[(12)]);
var inst_14743__$1 = (state_14901[(2)]);
var inst_14744 = (inst_14743__$1 == null);
var state_14901__$1 = (function (){var statearr_14930 = state_14901;
(statearr_14930[(12)] = inst_14743__$1);

return statearr_14930;
})();
if(cljs.core.truth_(inst_14744)){
var statearr_14931_17273 = state_14901__$1;
(statearr_14931_17273[(1)] = (5));

} else {
var statearr_14932_17278 = state_14901__$1;
(statearr_14932_17278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (15))){
var inst_14761 = (state_14901[(13)]);
var inst_14759 = (state_14901[(14)]);
var inst_14760 = (state_14901[(15)]);
var inst_14758 = (state_14901[(17)]);
var inst_14777 = (state_14901[(2)]);
var inst_14783 = (inst_14761 + (1));
var tmp14922 = inst_14759;
var tmp14923 = inst_14760;
var tmp14924 = inst_14758;
var inst_14758__$1 = tmp14924;
var inst_14759__$1 = tmp14922;
var inst_14760__$1 = tmp14923;
var inst_14761__$1 = inst_14783;
var state_14901__$1 = (function (){var statearr_14936 = state_14901;
(statearr_14936[(18)] = inst_14777);

(statearr_14936[(13)] = inst_14761__$1);

(statearr_14936[(14)] = inst_14759__$1);

(statearr_14936[(15)] = inst_14760__$1);

(statearr_14936[(17)] = inst_14758__$1);

return statearr_14936;
})();
var statearr_14937_17291 = state_14901__$1;
(statearr_14937_17291[(2)] = null);

(statearr_14937_17291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (21))){
var inst_14814 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_14942_17292 = state_14901__$1;
(statearr_14942_17292[(2)] = inst_14814);

(statearr_14942_17292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (31))){
var inst_14840 = (state_14901[(10)]);
var inst_14847 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14840);
var state_14901__$1 = state_14901;
var statearr_14944_17293 = state_14901__$1;
(statearr_14944_17293[(2)] = inst_14847);

(statearr_14944_17293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (32))){
var inst_14835 = (state_14901[(9)]);
var inst_14834 = (state_14901[(19)]);
var inst_14832 = (state_14901[(20)]);
var inst_14833 = (state_14901[(11)]);
var inst_14849 = (state_14901[(2)]);
var inst_14850 = (inst_14835 + (1));
var tmp14938 = inst_14834;
var tmp14939 = inst_14832;
var tmp14940 = inst_14833;
var inst_14832__$1 = tmp14939;
var inst_14833__$1 = tmp14940;
var inst_14834__$1 = tmp14938;
var inst_14835__$1 = inst_14850;
var state_14901__$1 = (function (){var statearr_14945 = state_14901;
(statearr_14945[(9)] = inst_14835__$1);

(statearr_14945[(19)] = inst_14834__$1);

(statearr_14945[(20)] = inst_14832__$1);

(statearr_14945[(11)] = inst_14833__$1);

(statearr_14945[(21)] = inst_14849);

return statearr_14945;
})();
var statearr_14946_17297 = state_14901__$1;
(statearr_14946_17297[(2)] = null);

(statearr_14946_17297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (40))){
var inst_14869 = (state_14901[(22)]);
var inst_14873 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14869);
var state_14901__$1 = state_14901;
var statearr_14947_17298 = state_14901__$1;
(statearr_14947_17298[(2)] = inst_14873);

(statearr_14947_17298[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (33))){
var inst_14853 = (state_14901[(23)]);
var inst_14855 = cljs.core.chunked_seq_QMARK_(inst_14853);
var state_14901__$1 = state_14901;
if(inst_14855){
var statearr_14949_17302 = state_14901__$1;
(statearr_14949_17302[(1)] = (36));

} else {
var statearr_14950_17303 = state_14901__$1;
(statearr_14950_17303[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (13))){
var inst_14770 = (state_14901[(24)]);
var inst_14773 = cljs.core.async.close_BANG_(inst_14770);
var state_14901__$1 = state_14901;
var statearr_14951_17304 = state_14901__$1;
(statearr_14951_17304[(2)] = inst_14773);

(statearr_14951_17304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (22))){
var inst_14800 = (state_14901[(8)]);
var inst_14803 = cljs.core.async.close_BANG_(inst_14800);
var state_14901__$1 = state_14901;
var statearr_14953_17309 = state_14901__$1;
(statearr_14953_17309[(2)] = inst_14803);

(statearr_14953_17309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (36))){
var inst_14853 = (state_14901[(23)]);
var inst_14859 = cljs.core.chunk_first(inst_14853);
var inst_14863 = cljs.core.chunk_rest(inst_14853);
var inst_14866 = cljs.core.count(inst_14859);
var inst_14832 = inst_14863;
var inst_14833 = inst_14859;
var inst_14834 = inst_14866;
var inst_14835 = (0);
var state_14901__$1 = (function (){var statearr_14954 = state_14901;
(statearr_14954[(9)] = inst_14835);

(statearr_14954[(19)] = inst_14834);

(statearr_14954[(20)] = inst_14832);

(statearr_14954[(11)] = inst_14833);

return statearr_14954;
})();
var statearr_14955_17316 = state_14901__$1;
(statearr_14955_17316[(2)] = null);

(statearr_14955_17316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (41))){
var inst_14853 = (state_14901[(23)]);
var inst_14875 = (state_14901[(2)]);
var inst_14876 = cljs.core.next(inst_14853);
var inst_14832 = inst_14876;
var inst_14833 = null;
var inst_14834 = (0);
var inst_14835 = (0);
var state_14901__$1 = (function (){var statearr_14957 = state_14901;
(statearr_14957[(9)] = inst_14835);

(statearr_14957[(25)] = inst_14875);

(statearr_14957[(19)] = inst_14834);

(statearr_14957[(20)] = inst_14832);

(statearr_14957[(11)] = inst_14833);

return statearr_14957;
})();
var statearr_14959_17317 = state_14901__$1;
(statearr_14959_17317[(2)] = null);

(statearr_14959_17317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (43))){
var state_14901__$1 = state_14901;
var statearr_14961_17324 = state_14901__$1;
(statearr_14961_17324[(2)] = null);

(statearr_14961_17324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (29))){
var inst_14884 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_14963_17325 = state_14901__$1;
(statearr_14963_17325[(2)] = inst_14884);

(statearr_14963_17325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (44))){
var inst_14894 = (state_14901[(2)]);
var state_14901__$1 = (function (){var statearr_14967 = state_14901;
(statearr_14967[(26)] = inst_14894);

return statearr_14967;
})();
var statearr_14971_17329 = state_14901__$1;
(statearr_14971_17329[(2)] = null);

(statearr_14971_17329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (6))){
var inst_14824 = (state_14901[(27)]);
var inst_14823 = cljs.core.deref(cs);
var inst_14824__$1 = cljs.core.keys(inst_14823);
var inst_14825 = cljs.core.count(inst_14824__$1);
var inst_14826 = cljs.core.reset_BANG_(dctr,inst_14825);
var inst_14831 = cljs.core.seq(inst_14824__$1);
var inst_14832 = inst_14831;
var inst_14833 = null;
var inst_14834 = (0);
var inst_14835 = (0);
var state_14901__$1 = (function (){var statearr_14972 = state_14901;
(statearr_14972[(9)] = inst_14835);

(statearr_14972[(28)] = inst_14826);

(statearr_14972[(27)] = inst_14824__$1);

(statearr_14972[(19)] = inst_14834);

(statearr_14972[(20)] = inst_14832);

(statearr_14972[(11)] = inst_14833);

return statearr_14972;
})();
var statearr_14973_17337 = state_14901__$1;
(statearr_14973_17337[(2)] = null);

(statearr_14973_17337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (28))){
var inst_14853 = (state_14901[(23)]);
var inst_14832 = (state_14901[(20)]);
var inst_14853__$1 = cljs.core.seq(inst_14832);
var state_14901__$1 = (function (){var statearr_14977 = state_14901;
(statearr_14977[(23)] = inst_14853__$1);

return statearr_14977;
})();
if(inst_14853__$1){
var statearr_14978_17341 = state_14901__$1;
(statearr_14978_17341[(1)] = (33));

} else {
var statearr_14979_17342 = state_14901__$1;
(statearr_14979_17342[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (25))){
var inst_14835 = (state_14901[(9)]);
var inst_14834 = (state_14901[(19)]);
var inst_14837 = (inst_14835 < inst_14834);
var inst_14838 = inst_14837;
var state_14901__$1 = state_14901;
if(cljs.core.truth_(inst_14838)){
var statearr_14981_17347 = state_14901__$1;
(statearr_14981_17347[(1)] = (27));

} else {
var statearr_14982_17348 = state_14901__$1;
(statearr_14982_17348[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (34))){
var state_14901__$1 = state_14901;
var statearr_14983_17352 = state_14901__$1;
(statearr_14983_17352[(2)] = null);

(statearr_14983_17352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (17))){
var state_14901__$1 = state_14901;
var statearr_14984_17353 = state_14901__$1;
(statearr_14984_17353[(2)] = null);

(statearr_14984_17353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (3))){
var inst_14899 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14901__$1,inst_14899);
} else {
if((state_val_14902 === (12))){
var inst_14819 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_14988_17356 = state_14901__$1;
(statearr_14988_17356[(2)] = inst_14819);

(statearr_14988_17356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (2))){
var state_14901__$1 = state_14901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14901__$1,(4),ch);
} else {
if((state_val_14902 === (23))){
var state_14901__$1 = state_14901;
var statearr_14989_17358 = state_14901__$1;
(statearr_14989_17358[(2)] = null);

(statearr_14989_17358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (35))){
var inst_14882 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_14991_17359 = state_14901__$1;
(statearr_14991_17359[(2)] = inst_14882);

(statearr_14991_17359[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (19))){
var inst_14786 = (state_14901[(7)]);
var inst_14791 = cljs.core.chunk_first(inst_14786);
var inst_14792 = cljs.core.chunk_rest(inst_14786);
var inst_14793 = cljs.core.count(inst_14791);
var inst_14758 = inst_14792;
var inst_14759 = inst_14791;
var inst_14760 = inst_14793;
var inst_14761 = (0);
var state_14901__$1 = (function (){var statearr_14992 = state_14901;
(statearr_14992[(13)] = inst_14761);

(statearr_14992[(14)] = inst_14759);

(statearr_14992[(15)] = inst_14760);

(statearr_14992[(17)] = inst_14758);

return statearr_14992;
})();
var statearr_14993_17372 = state_14901__$1;
(statearr_14993_17372[(2)] = null);

(statearr_14993_17372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (11))){
var inst_14786 = (state_14901[(7)]);
var inst_14758 = (state_14901[(17)]);
var inst_14786__$1 = cljs.core.seq(inst_14758);
var state_14901__$1 = (function (){var statearr_14995 = state_14901;
(statearr_14995[(7)] = inst_14786__$1);

return statearr_14995;
})();
if(inst_14786__$1){
var statearr_14996_17373 = state_14901__$1;
(statearr_14996_17373[(1)] = (16));

} else {
var statearr_14997_17374 = state_14901__$1;
(statearr_14997_17374[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (9))){
var inst_14821 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_15002_17375 = state_14901__$1;
(statearr_15002_17375[(2)] = inst_14821);

(statearr_15002_17375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (5))){
var inst_14753 = cljs.core.deref(cs);
var inst_14757 = cljs.core.seq(inst_14753);
var inst_14758 = inst_14757;
var inst_14759 = null;
var inst_14760 = (0);
var inst_14761 = (0);
var state_14901__$1 = (function (){var statearr_15004 = state_14901;
(statearr_15004[(13)] = inst_14761);

(statearr_15004[(14)] = inst_14759);

(statearr_15004[(15)] = inst_14760);

(statearr_15004[(17)] = inst_14758);

return statearr_15004;
})();
var statearr_15010_17376 = state_14901__$1;
(statearr_15010_17376[(2)] = null);

(statearr_15010_17376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (14))){
var state_14901__$1 = state_14901;
var statearr_15011_17377 = state_14901__$1;
(statearr_15011_17377[(2)] = null);

(statearr_15011_17377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (45))){
var inst_14891 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_15013_17378 = state_14901__$1;
(statearr_15013_17378[(2)] = inst_14891);

(statearr_15013_17378[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (26))){
var inst_14824 = (state_14901[(27)]);
var inst_14887 = (state_14901[(2)]);
var inst_14888 = cljs.core.seq(inst_14824);
var state_14901__$1 = (function (){var statearr_15015 = state_14901;
(statearr_15015[(29)] = inst_14887);

return statearr_15015;
})();
if(inst_14888){
var statearr_15016_17379 = state_14901__$1;
(statearr_15016_17379[(1)] = (42));

} else {
var statearr_15017_17380 = state_14901__$1;
(statearr_15017_17380[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (16))){
var inst_14786 = (state_14901[(7)]);
var inst_14788 = cljs.core.chunked_seq_QMARK_(inst_14786);
var state_14901__$1 = state_14901;
if(inst_14788){
var statearr_15019_17381 = state_14901__$1;
(statearr_15019_17381[(1)] = (19));

} else {
var statearr_15020_17382 = state_14901__$1;
(statearr_15020_17382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (38))){
var inst_14879 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_15021_17384 = state_14901__$1;
(statearr_15021_17384[(2)] = inst_14879);

(statearr_15021_17384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (30))){
var state_14901__$1 = state_14901;
var statearr_15023_17385 = state_14901__$1;
(statearr_15023_17385[(2)] = null);

(statearr_15023_17385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (10))){
var inst_14761 = (state_14901[(13)]);
var inst_14759 = (state_14901[(14)]);
var inst_14769 = cljs.core._nth(inst_14759,inst_14761);
var inst_14770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14769,(0),null);
var inst_14771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14769,(1),null);
var state_14901__$1 = (function (){var statearr_15024 = state_14901;
(statearr_15024[(24)] = inst_14770);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14771)){
var statearr_15028_17393 = state_14901__$1;
(statearr_15028_17393[(1)] = (13));

} else {
var statearr_15032_17394 = state_14901__$1;
(statearr_15032_17394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (18))){
var inst_14817 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_15034_17395 = state_14901__$1;
(statearr_15034_17395[(2)] = inst_14817);

(statearr_15034_17395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (42))){
var state_14901__$1 = state_14901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14901__$1,(45),dchan);
} else {
if((state_val_14902 === (37))){
var inst_14853 = (state_14901[(23)]);
var inst_14869 = (state_14901[(22)]);
var inst_14743 = (state_14901[(12)]);
var inst_14869__$1 = cljs.core.first(inst_14853);
var inst_14870 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14869__$1,inst_14743,done);
var state_14901__$1 = (function (){var statearr_15035 = state_14901;
(statearr_15035[(22)] = inst_14869__$1);

return statearr_15035;
})();
if(cljs.core.truth_(inst_14870)){
var statearr_15036_17396 = state_14901__$1;
(statearr_15036_17396[(1)] = (39));

} else {
var statearr_15037_17397 = state_14901__$1;
(statearr_15037_17397[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (8))){
var inst_14761 = (state_14901[(13)]);
var inst_14760 = (state_14901[(15)]);
var inst_14763 = (inst_14761 < inst_14760);
var inst_14764 = inst_14763;
var state_14901__$1 = state_14901;
if(cljs.core.truth_(inst_14764)){
var statearr_15038_17399 = state_14901__$1;
(statearr_15038_17399[(1)] = (10));

} else {
var statearr_15039_17400 = state_14901__$1;
(statearr_15039_17400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13302__auto__ = null;
var cljs$core$async$mult_$_state_machine__13302__auto____0 = (function (){
var statearr_15041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15041[(0)] = cljs$core$async$mult_$_state_machine__13302__auto__);

(statearr_15041[(1)] = (1));

return statearr_15041;
});
var cljs$core$async$mult_$_state_machine__13302__auto____1 = (function (state_14901){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_14901);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e15042){var ex__13305__auto__ = e15042;
var statearr_15043_17402 = state_14901;
(statearr_15043_17402[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_14901[(4)]))){
var statearr_15044_17404 = state_14901;
(statearr_15044_17404[(1)] = cljs.core.first((state_14901[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17406 = state_14901;
state_14901 = G__17406;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13302__auto__ = function(state_14901){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13302__auto____1.call(this,state_14901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13302__auto____0;
cljs$core$async$mult_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13302__auto____1;
return cljs$core$async$mult_$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_15045 = f__13531__auto__();
(statearr_15045[(6)] = c__13528__auto___17261);

return statearr_15045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15047 = arguments.length;
switch (G__15047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17424 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17424(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17428 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17428(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17432 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17432(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17436 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17436(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17439 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17439(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17450 = arguments.length;
var i__5770__auto___17451 = (0);
while(true){
if((i__5770__auto___17451 < len__5769__auto___17450)){
args__5775__auto__.push((arguments[i__5770__auto___17451]));

var G__17452 = (i__5770__auto___17451 + (1));
i__5770__auto___17451 = G__17452;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15067){
var map__15069 = p__15067;
var map__15069__$1 = cljs.core.__destructure_map(map__15069);
var opts = map__15069__$1;
var statearr_15074_17455 = state;
(statearr_15074_17455[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15076_17457 = state;
(statearr_15076_17457[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15078_17460 = state;
(statearr_15078_17460[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15063){
var G__15064 = cljs.core.first(seq15063);
var seq15063__$1 = cljs.core.next(seq15063);
var G__15065 = cljs.core.first(seq15063__$1);
var seq15063__$2 = cljs.core.next(seq15063__$1);
var G__15066 = cljs.core.first(seq15063__$2);
var seq15063__$3 = cljs.core.next(seq15063__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15064,G__15065,G__15066,seq15063__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15093 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15094){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15094 = meta15094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15095,meta15094__$1){
var self__ = this;
var _15095__$1 = this;
return (new cljs.core.async.t_cljs$core$async15093(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15094__$1));
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15095){
var self__ = this;
var _15095__$1 = this;
return self__.meta15094;
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15093.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15094","meta15094",-60837827,null)], null);
}));

(cljs.core.async.t_cljs$core$async15093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15093");

(cljs.core.async.t_cljs$core$async15093.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15093.
 */
cljs.core.async.__GT_t_cljs$core$async15093 = (function cljs$core$async$__GT_t_cljs$core$async15093(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15094){
return (new cljs.core.async.t_cljs$core$async15093(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15094));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15093(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13528__auto___17493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_15171){
var state_val_15172 = (state_15171[(1)]);
if((state_val_15172 === (7))){
var inst_15130 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15130)){
var statearr_15174_17501 = state_15171__$1;
(statearr_15174_17501[(1)] = (8));

} else {
var statearr_15176_17505 = state_15171__$1;
(statearr_15176_17505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (20))){
var inst_15123 = (state_15171[(7)]);
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15171__$1,(23),out,inst_15123);
} else {
if((state_val_15172 === (1))){
var inst_15103 = calc_state();
var inst_15104 = cljs.core.__destructure_map(inst_15103);
var inst_15105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15104,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15104,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15104,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15108 = inst_15103;
var state_15171__$1 = (function (){var statearr_15179 = state_15171;
(statearr_15179[(8)] = inst_15106);

(statearr_15179[(9)] = inst_15108);

(statearr_15179[(10)] = inst_15105);

(statearr_15179[(11)] = inst_15107);

return statearr_15179;
})();
var statearr_15181_17526 = state_15171__$1;
(statearr_15181_17526[(2)] = null);

(statearr_15181_17526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (24))){
var inst_15111 = (state_15171[(12)]);
var inst_15108 = inst_15111;
var state_15171__$1 = (function (){var statearr_15183 = state_15171;
(statearr_15183[(9)] = inst_15108);

return statearr_15183;
})();
var statearr_15185_17532 = state_15171__$1;
(statearr_15185_17532[(2)] = null);

(statearr_15185_17532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (4))){
var inst_15123 = (state_15171[(7)]);
var inst_15125 = (state_15171[(13)]);
var inst_15122 = (state_15171[(2)]);
var inst_15123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15122,(0),null);
var inst_15124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15122,(1),null);
var inst_15125__$1 = (inst_15123__$1 == null);
var state_15171__$1 = (function (){var statearr_15188 = state_15171;
(statearr_15188[(14)] = inst_15124);

(statearr_15188[(7)] = inst_15123__$1);

(statearr_15188[(13)] = inst_15125__$1);

return statearr_15188;
})();
if(cljs.core.truth_(inst_15125__$1)){
var statearr_15189_17536 = state_15171__$1;
(statearr_15189_17536[(1)] = (5));

} else {
var statearr_15190_17537 = state_15171__$1;
(statearr_15190_17537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (15))){
var inst_15112 = (state_15171[(15)]);
var inst_15145 = (state_15171[(16)]);
var inst_15145__$1 = cljs.core.empty_QMARK_(inst_15112);
var state_15171__$1 = (function (){var statearr_15194 = state_15171;
(statearr_15194[(16)] = inst_15145__$1);

return statearr_15194;
})();
if(inst_15145__$1){
var statearr_15195_17538 = state_15171__$1;
(statearr_15195_17538[(1)] = (17));

} else {
var statearr_15197_17539 = state_15171__$1;
(statearr_15197_17539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (21))){
var inst_15111 = (state_15171[(12)]);
var inst_15108 = inst_15111;
var state_15171__$1 = (function (){var statearr_15202 = state_15171;
(statearr_15202[(9)] = inst_15108);

return statearr_15202;
})();
var statearr_15203_17541 = state_15171__$1;
(statearr_15203_17541[(2)] = null);

(statearr_15203_17541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (13))){
var inst_15138 = (state_15171[(2)]);
var inst_15139 = calc_state();
var inst_15108 = inst_15139;
var state_15171__$1 = (function (){var statearr_15205 = state_15171;
(statearr_15205[(9)] = inst_15108);

(statearr_15205[(17)] = inst_15138);

return statearr_15205;
})();
var statearr_15206_17545 = state_15171__$1;
(statearr_15206_17545[(2)] = null);

(statearr_15206_17545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (22))){
var inst_15165 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15207_17550 = state_15171__$1;
(statearr_15207_17550[(2)] = inst_15165);

(statearr_15207_17550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (6))){
var inst_15124 = (state_15171[(14)]);
var inst_15128 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15124,change);
var state_15171__$1 = state_15171;
var statearr_15208_17555 = state_15171__$1;
(statearr_15208_17555[(2)] = inst_15128);

(statearr_15208_17555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (25))){
var state_15171__$1 = state_15171;
var statearr_15210_17556 = state_15171__$1;
(statearr_15210_17556[(2)] = null);

(statearr_15210_17556[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (17))){
var inst_15124 = (state_15171[(14)]);
var inst_15113 = (state_15171[(18)]);
var inst_15147 = (inst_15113.cljs$core$IFn$_invoke$arity$1 ? inst_15113.cljs$core$IFn$_invoke$arity$1(inst_15124) : inst_15113.call(null,inst_15124));
var inst_15148 = cljs.core.not(inst_15147);
var state_15171__$1 = state_15171;
var statearr_15212_17566 = state_15171__$1;
(statearr_15212_17566[(2)] = inst_15148);

(statearr_15212_17566[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (3))){
var inst_15169 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15171__$1,inst_15169);
} else {
if((state_val_15172 === (12))){
var state_15171__$1 = state_15171;
var statearr_15213_17567 = state_15171__$1;
(statearr_15213_17567[(2)] = null);

(statearr_15213_17567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (2))){
var inst_15111 = (state_15171[(12)]);
var inst_15108 = (state_15171[(9)]);
var inst_15111__$1 = cljs.core.__destructure_map(inst_15108);
var inst_15112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15111__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15111__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15111__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15171__$1 = (function (){var statearr_15214 = state_15171;
(statearr_15214[(12)] = inst_15111__$1);

(statearr_15214[(15)] = inst_15112);

(statearr_15214[(18)] = inst_15113);

return statearr_15214;
})();
return cljs.core.async.ioc_alts_BANG_(state_15171__$1,(4),inst_15117);
} else {
if((state_val_15172 === (23))){
var inst_15156 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15156)){
var statearr_15215_17574 = state_15171__$1;
(statearr_15215_17574[(1)] = (24));

} else {
var statearr_15216_17575 = state_15171__$1;
(statearr_15216_17575[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (19))){
var inst_15151 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15222_17576 = state_15171__$1;
(statearr_15222_17576[(2)] = inst_15151);

(statearr_15222_17576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (11))){
var inst_15124 = (state_15171[(14)]);
var inst_15134 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15124);
var state_15171__$1 = state_15171;
var statearr_15224_17593 = state_15171__$1;
(statearr_15224_17593[(2)] = inst_15134);

(statearr_15224_17593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (9))){
var inst_15142 = (state_15171[(19)]);
var inst_15112 = (state_15171[(15)]);
var inst_15124 = (state_15171[(14)]);
var inst_15142__$1 = (inst_15112.cljs$core$IFn$_invoke$arity$1 ? inst_15112.cljs$core$IFn$_invoke$arity$1(inst_15124) : inst_15112.call(null,inst_15124));
var state_15171__$1 = (function (){var statearr_15225 = state_15171;
(statearr_15225[(19)] = inst_15142__$1);

return statearr_15225;
})();
if(cljs.core.truth_(inst_15142__$1)){
var statearr_15226_17594 = state_15171__$1;
(statearr_15226_17594[(1)] = (14));

} else {
var statearr_15227_17595 = state_15171__$1;
(statearr_15227_17595[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (5))){
var inst_15125 = (state_15171[(13)]);
var state_15171__$1 = state_15171;
var statearr_15228_17596 = state_15171__$1;
(statearr_15228_17596[(2)] = inst_15125);

(statearr_15228_17596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (14))){
var inst_15142 = (state_15171[(19)]);
var state_15171__$1 = state_15171;
var statearr_15230_17597 = state_15171__$1;
(statearr_15230_17597[(2)] = inst_15142);

(statearr_15230_17597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (26))){
var inst_15161 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15233_17601 = state_15171__$1;
(statearr_15233_17601[(2)] = inst_15161);

(statearr_15233_17601[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (16))){
var inst_15153 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15153)){
var statearr_15234_17603 = state_15171__$1;
(statearr_15234_17603[(1)] = (20));

} else {
var statearr_15235_17604 = state_15171__$1;
(statearr_15235_17604[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (10))){
var inst_15167 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15236_17608 = state_15171__$1;
(statearr_15236_17608[(2)] = inst_15167);

(statearr_15236_17608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (18))){
var inst_15145 = (state_15171[(16)]);
var state_15171__$1 = state_15171;
var statearr_15237_17611 = state_15171__$1;
(statearr_15237_17611[(2)] = inst_15145);

(statearr_15237_17611[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (8))){
var inst_15123 = (state_15171[(7)]);
var inst_15132 = (inst_15123 == null);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15132)){
var statearr_15238_17615 = state_15171__$1;
(statearr_15238_17615[(1)] = (11));

} else {
var statearr_15239_17616 = state_15171__$1;
(statearr_15239_17616[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13302__auto__ = null;
var cljs$core$async$mix_$_state_machine__13302__auto____0 = (function (){
var statearr_15241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15241[(0)] = cljs$core$async$mix_$_state_machine__13302__auto__);

(statearr_15241[(1)] = (1));

return statearr_15241;
});
var cljs$core$async$mix_$_state_machine__13302__auto____1 = (function (state_15171){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_15171);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e15242){var ex__13305__auto__ = e15242;
var statearr_15243_17622 = state_15171;
(statearr_15243_17622[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_15171[(4)]))){
var statearr_15244_17624 = state_15171;
(statearr_15244_17624[(1)] = cljs.core.first((state_15171[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17625 = state_15171;
state_15171 = G__17625;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13302__auto__ = function(state_15171){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13302__auto____1.call(this,state_15171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13302__auto____0;
cljs$core$async$mix_$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13302__auto____1;
return cljs$core$async$mix_$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_15245 = f__13531__auto__();
(statearr_15245[(6)] = c__13528__auto___17493);

return statearr_15245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17629 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17629(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17630 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17630(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17642 = (function() {
var G__17643 = null;
var G__17643__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17643__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17643 = function(p,v){
switch(arguments.length){
case 1:
return G__17643__1.call(this,p);
case 2:
return G__17643__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17643.cljs$core$IFn$_invoke$arity$1 = G__17643__1;
G__17643.cljs$core$IFn$_invoke$arity$2 = G__17643__2;
return G__17643;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15280 = arguments.length;
switch (G__15280) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17642(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17642(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15308 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15309){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15309 = meta15309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15310,meta15309__$1){
var self__ = this;
var _15310__$1 = this;
return (new cljs.core.async.t_cljs$core$async15308(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15309__$1));
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15310){
var self__ = this;
var _15310__$1 = this;
return self__.meta15309;
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15309","meta15309",470618331,null)], null);
}));

(cljs.core.async.t_cljs$core$async15308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15308");

(cljs.core.async.t_cljs$core$async15308.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15308.
 */
cljs.core.async.__GT_t_cljs$core$async15308 = (function cljs$core$async$__GT_t_cljs$core$async15308(ch,topic_fn,buf_fn,mults,ensure_mult,meta15309){
return (new cljs.core.async.t_cljs$core$async15308(ch,topic_fn,buf_fn,mults,ensure_mult,meta15309));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15293 = arguments.length;
switch (G__15293) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15285_SHARP_){
if(cljs.core.truth_((p1__15285_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15285_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15285_SHARP_.call(null,topic)))){
return p1__15285_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15285_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15308(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13528__auto___17664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_15410){
var state_val_15411 = (state_15410[(1)]);
if((state_val_15411 === (7))){
var inst_15405 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15412_17666 = state_15410__$1;
(statearr_15412_17666[(2)] = inst_15405);

(statearr_15412_17666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (20))){
var state_15410__$1 = state_15410;
var statearr_15413_17673 = state_15410__$1;
(statearr_15413_17673[(2)] = null);

(statearr_15413_17673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (1))){
var state_15410__$1 = state_15410;
var statearr_15416_17674 = state_15410__$1;
(statearr_15416_17674[(2)] = null);

(statearr_15416_17674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (24))){
var inst_15387 = (state_15410[(7)]);
var inst_15397 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15387);
var state_15410__$1 = state_15410;
var statearr_15418_17675 = state_15410__$1;
(statearr_15418_17675[(2)] = inst_15397);

(statearr_15418_17675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (4))){
var inst_15336 = (state_15410[(8)]);
var inst_15336__$1 = (state_15410[(2)]);
var inst_15337 = (inst_15336__$1 == null);
var state_15410__$1 = (function (){var statearr_15421 = state_15410;
(statearr_15421[(8)] = inst_15336__$1);

return statearr_15421;
})();
if(cljs.core.truth_(inst_15337)){
var statearr_15422_17683 = state_15410__$1;
(statearr_15422_17683[(1)] = (5));

} else {
var statearr_15423_17684 = state_15410__$1;
(statearr_15423_17684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (15))){
var inst_15379 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15424_17685 = state_15410__$1;
(statearr_15424_17685[(2)] = inst_15379);

(statearr_15424_17685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (21))){
var inst_15402 = (state_15410[(2)]);
var state_15410__$1 = (function (){var statearr_15429 = state_15410;
(statearr_15429[(9)] = inst_15402);

return statearr_15429;
})();
var statearr_15430_17686 = state_15410__$1;
(statearr_15430_17686[(2)] = null);

(statearr_15430_17686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (13))){
var inst_15361 = (state_15410[(10)]);
var inst_15363 = cljs.core.chunked_seq_QMARK_(inst_15361);
var state_15410__$1 = state_15410;
if(inst_15363){
var statearr_15433_17694 = state_15410__$1;
(statearr_15433_17694[(1)] = (16));

} else {
var statearr_15434_17698 = state_15410__$1;
(statearr_15434_17698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (22))){
var inst_15393 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
if(cljs.core.truth_(inst_15393)){
var statearr_15435_17699 = state_15410__$1;
(statearr_15435_17699[(1)] = (23));

} else {
var statearr_15436_17700 = state_15410__$1;
(statearr_15436_17700[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (6))){
var inst_15336 = (state_15410[(8)]);
var inst_15389 = (state_15410[(11)]);
var inst_15387 = (state_15410[(7)]);
var inst_15387__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15336) : topic_fn.call(null,inst_15336));
var inst_15388 = cljs.core.deref(mults);
var inst_15389__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15388,inst_15387__$1);
var state_15410__$1 = (function (){var statearr_15438 = state_15410;
(statearr_15438[(11)] = inst_15389__$1);

(statearr_15438[(7)] = inst_15387__$1);

return statearr_15438;
})();
if(cljs.core.truth_(inst_15389__$1)){
var statearr_15439_17703 = state_15410__$1;
(statearr_15439_17703[(1)] = (19));

} else {
var statearr_15440_17707 = state_15410__$1;
(statearr_15440_17707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (25))){
var inst_15399 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15441_17711 = state_15410__$1;
(statearr_15441_17711[(2)] = inst_15399);

(statearr_15441_17711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (17))){
var inst_15361 = (state_15410[(10)]);
var inst_15370 = cljs.core.first(inst_15361);
var inst_15371 = cljs.core.async.muxch_STAR_(inst_15370);
var inst_15372 = cljs.core.async.close_BANG_(inst_15371);
var inst_15373 = cljs.core.next(inst_15361);
var inst_15347 = inst_15373;
var inst_15348 = null;
var inst_15349 = (0);
var inst_15350 = (0);
var state_15410__$1 = (function (){var statearr_15447 = state_15410;
(statearr_15447[(12)] = inst_15348);

(statearr_15447[(13)] = inst_15372);

(statearr_15447[(14)] = inst_15350);

(statearr_15447[(15)] = inst_15347);

(statearr_15447[(16)] = inst_15349);

return statearr_15447;
})();
var statearr_15448_17713 = state_15410__$1;
(statearr_15448_17713[(2)] = null);

(statearr_15448_17713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (3))){
var inst_15407 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15410__$1,inst_15407);
} else {
if((state_val_15411 === (12))){
var inst_15381 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15449_17718 = state_15410__$1;
(statearr_15449_17718[(2)] = inst_15381);

(statearr_15449_17718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (2))){
var state_15410__$1 = state_15410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15410__$1,(4),ch);
} else {
if((state_val_15411 === (23))){
var state_15410__$1 = state_15410;
var statearr_15450_17722 = state_15410__$1;
(statearr_15450_17722[(2)] = null);

(statearr_15450_17722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (19))){
var inst_15336 = (state_15410[(8)]);
var inst_15389 = (state_15410[(11)]);
var inst_15391 = cljs.core.async.muxch_STAR_(inst_15389);
var state_15410__$1 = state_15410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15410__$1,(22),inst_15391,inst_15336);
} else {
if((state_val_15411 === (11))){
var inst_15361 = (state_15410[(10)]);
var inst_15347 = (state_15410[(15)]);
var inst_15361__$1 = cljs.core.seq(inst_15347);
var state_15410__$1 = (function (){var statearr_15452 = state_15410;
(statearr_15452[(10)] = inst_15361__$1);

return statearr_15452;
})();
if(inst_15361__$1){
var statearr_15453_17723 = state_15410__$1;
(statearr_15453_17723[(1)] = (13));

} else {
var statearr_15456_17725 = state_15410__$1;
(statearr_15456_17725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (9))){
var inst_15385 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15459_17726 = state_15410__$1;
(statearr_15459_17726[(2)] = inst_15385);

(statearr_15459_17726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (5))){
var inst_15343 = cljs.core.deref(mults);
var inst_15344 = cljs.core.vals(inst_15343);
var inst_15345 = cljs.core.seq(inst_15344);
var inst_15347 = inst_15345;
var inst_15348 = null;
var inst_15349 = (0);
var inst_15350 = (0);
var state_15410__$1 = (function (){var statearr_15462 = state_15410;
(statearr_15462[(12)] = inst_15348);

(statearr_15462[(14)] = inst_15350);

(statearr_15462[(15)] = inst_15347);

(statearr_15462[(16)] = inst_15349);

return statearr_15462;
})();
var statearr_15463_17731 = state_15410__$1;
(statearr_15463_17731[(2)] = null);

(statearr_15463_17731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (14))){
var state_15410__$1 = state_15410;
var statearr_15467_17732 = state_15410__$1;
(statearr_15467_17732[(2)] = null);

(statearr_15467_17732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (16))){
var inst_15361 = (state_15410[(10)]);
var inst_15365 = cljs.core.chunk_first(inst_15361);
var inst_15366 = cljs.core.chunk_rest(inst_15361);
var inst_15367 = cljs.core.count(inst_15365);
var inst_15347 = inst_15366;
var inst_15348 = inst_15365;
var inst_15349 = inst_15367;
var inst_15350 = (0);
var state_15410__$1 = (function (){var statearr_15469 = state_15410;
(statearr_15469[(12)] = inst_15348);

(statearr_15469[(14)] = inst_15350);

(statearr_15469[(15)] = inst_15347);

(statearr_15469[(16)] = inst_15349);

return statearr_15469;
})();
var statearr_15470_17734 = state_15410__$1;
(statearr_15470_17734[(2)] = null);

(statearr_15470_17734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (10))){
var inst_15348 = (state_15410[(12)]);
var inst_15350 = (state_15410[(14)]);
var inst_15347 = (state_15410[(15)]);
var inst_15349 = (state_15410[(16)]);
var inst_15355 = cljs.core._nth(inst_15348,inst_15350);
var inst_15356 = cljs.core.async.muxch_STAR_(inst_15355);
var inst_15357 = cljs.core.async.close_BANG_(inst_15356);
var inst_15358 = (inst_15350 + (1));
var tmp15464 = inst_15348;
var tmp15465 = inst_15347;
var tmp15466 = inst_15349;
var inst_15347__$1 = tmp15465;
var inst_15348__$1 = tmp15464;
var inst_15349__$1 = tmp15466;
var inst_15350__$1 = inst_15358;
var state_15410__$1 = (function (){var statearr_15473 = state_15410;
(statearr_15473[(12)] = inst_15348__$1);

(statearr_15473[(17)] = inst_15357);

(statearr_15473[(14)] = inst_15350__$1);

(statearr_15473[(15)] = inst_15347__$1);

(statearr_15473[(16)] = inst_15349__$1);

return statearr_15473;
})();
var statearr_15477_17740 = state_15410__$1;
(statearr_15477_17740[(2)] = null);

(statearr_15477_17740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (18))){
var inst_15376 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15481_17743 = state_15410__$1;
(statearr_15481_17743[(2)] = inst_15376);

(statearr_15481_17743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15411 === (8))){
var inst_15350 = (state_15410[(14)]);
var inst_15349 = (state_15410[(16)]);
var inst_15352 = (inst_15350 < inst_15349);
var inst_15353 = inst_15352;
var state_15410__$1 = state_15410;
if(cljs.core.truth_(inst_15353)){
var statearr_15486_17744 = state_15410__$1;
(statearr_15486_17744[(1)] = (10));

} else {
var statearr_15487_17745 = state_15410__$1;
(statearr_15487_17745[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_15488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15488[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_15488[(1)] = (1));

return statearr_15488;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_15410){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_15410);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e15489){var ex__13305__auto__ = e15489;
var statearr_15490_17746 = state_15410;
(statearr_15490_17746[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_15410[(4)]))){
var statearr_15491_17747 = state_15410;
(statearr_15491_17747[(1)] = cljs.core.first((state_15410[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17748 = state_15410;
state_15410 = G__17748;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_15410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_15410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_15492 = f__13531__auto__();
(statearr_15492[(6)] = c__13528__auto___17664);

return statearr_15492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15496 = arguments.length;
switch (G__15496) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15505 = arguments.length;
switch (G__15505) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15518 = arguments.length;
switch (G__15518) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13528__auto___17767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_15570){
var state_val_15571 = (state_15570[(1)]);
if((state_val_15571 === (7))){
var state_15570__$1 = state_15570;
var statearr_15572_17769 = state_15570__$1;
(statearr_15572_17769[(2)] = null);

(statearr_15572_17769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (1))){
var state_15570__$1 = state_15570;
var statearr_15573_17770 = state_15570__$1;
(statearr_15573_17770[(2)] = null);

(statearr_15573_17770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (4))){
var inst_15527 = (state_15570[(7)]);
var inst_15528 = (state_15570[(8)]);
var inst_15530 = (inst_15528 < inst_15527);
var state_15570__$1 = state_15570;
if(cljs.core.truth_(inst_15530)){
var statearr_15577_17775 = state_15570__$1;
(statearr_15577_17775[(1)] = (6));

} else {
var statearr_15578_17776 = state_15570__$1;
(statearr_15578_17776[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (15))){
var inst_15553 = (state_15570[(9)]);
var inst_15558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15553);
var state_15570__$1 = state_15570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15570__$1,(17),out,inst_15558);
} else {
if((state_val_15571 === (13))){
var inst_15553 = (state_15570[(9)]);
var inst_15553__$1 = (state_15570[(2)]);
var inst_15554 = cljs.core.some(cljs.core.nil_QMARK_,inst_15553__$1);
var state_15570__$1 = (function (){var statearr_15582 = state_15570;
(statearr_15582[(9)] = inst_15553__$1);

return statearr_15582;
})();
if(cljs.core.truth_(inst_15554)){
var statearr_15583_17778 = state_15570__$1;
(statearr_15583_17778[(1)] = (14));

} else {
var statearr_15584_17779 = state_15570__$1;
(statearr_15584_17779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (6))){
var state_15570__$1 = state_15570;
var statearr_15585_17787 = state_15570__$1;
(statearr_15585_17787[(2)] = null);

(statearr_15585_17787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (17))){
var inst_15560 = (state_15570[(2)]);
var state_15570__$1 = (function (){var statearr_15594 = state_15570;
(statearr_15594[(10)] = inst_15560);

return statearr_15594;
})();
var statearr_15595_17788 = state_15570__$1;
(statearr_15595_17788[(2)] = null);

(statearr_15595_17788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (3))){
var inst_15565 = (state_15570[(2)]);
var state_15570__$1 = state_15570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15570__$1,inst_15565);
} else {
if((state_val_15571 === (12))){
var _ = (function (){var statearr_15602 = state_15570;
(statearr_15602[(4)] = cljs.core.rest((state_15570[(4)])));

return statearr_15602;
})();
var state_15570__$1 = state_15570;
var ex15591 = (state_15570__$1[(2)]);
var statearr_15605_17794 = state_15570__$1;
(statearr_15605_17794[(5)] = ex15591);


if((ex15591 instanceof Object)){
var statearr_15609_17795 = state_15570__$1;
(statearr_15609_17795[(1)] = (11));

(statearr_15609_17795[(5)] = null);

} else {
throw ex15591;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (2))){
var inst_15526 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15527 = cnt;
var inst_15528 = (0);
var state_15570__$1 = (function (){var statearr_15615 = state_15570;
(statearr_15615[(7)] = inst_15527);

(statearr_15615[(8)] = inst_15528);

(statearr_15615[(11)] = inst_15526);

return statearr_15615;
})();
var statearr_15616_17797 = state_15570__$1;
(statearr_15616_17797[(2)] = null);

(statearr_15616_17797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (11))){
var inst_15532 = (state_15570[(2)]);
var inst_15533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15570__$1 = (function (){var statearr_15618 = state_15570;
(statearr_15618[(12)] = inst_15532);

return statearr_15618;
})();
var statearr_15619_17799 = state_15570__$1;
(statearr_15619_17799[(2)] = inst_15533);

(statearr_15619_17799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (9))){
var inst_15528 = (state_15570[(8)]);
var _ = (function (){var statearr_15623 = state_15570;
(statearr_15623[(4)] = cljs.core.cons((12),(state_15570[(4)])));

return statearr_15623;
})();
var inst_15539 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15528) : chs__$1.call(null,inst_15528));
var inst_15540 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15528) : done.call(null,inst_15528));
var inst_15541 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15539,inst_15540);
var ___$1 = (function (){var statearr_15625 = state_15570;
(statearr_15625[(4)] = cljs.core.rest((state_15570[(4)])));

return statearr_15625;
})();
var state_15570__$1 = state_15570;
var statearr_15626_17800 = state_15570__$1;
(statearr_15626_17800[(2)] = inst_15541);

(statearr_15626_17800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (5))){
var inst_15551 = (state_15570[(2)]);
var state_15570__$1 = (function (){var statearr_15630 = state_15570;
(statearr_15630[(13)] = inst_15551);

return statearr_15630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15570__$1,(13),dchan);
} else {
if((state_val_15571 === (14))){
var inst_15556 = cljs.core.async.close_BANG_(out);
var state_15570__$1 = state_15570;
var statearr_15633_17802 = state_15570__$1;
(statearr_15633_17802[(2)] = inst_15556);

(statearr_15633_17802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (16))){
var inst_15563 = (state_15570[(2)]);
var state_15570__$1 = state_15570;
var statearr_15638_17808 = state_15570__$1;
(statearr_15638_17808[(2)] = inst_15563);

(statearr_15638_17808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (10))){
var inst_15528 = (state_15570[(8)]);
var inst_15544 = (state_15570[(2)]);
var inst_15545 = (inst_15528 + (1));
var inst_15528__$1 = inst_15545;
var state_15570__$1 = (function (){var statearr_15639 = state_15570;
(statearr_15639[(8)] = inst_15528__$1);

(statearr_15639[(14)] = inst_15544);

return statearr_15639;
})();
var statearr_15643_17816 = state_15570__$1;
(statearr_15643_17816[(2)] = null);

(statearr_15643_17816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (8))){
var inst_15549 = (state_15570[(2)]);
var state_15570__$1 = state_15570;
var statearr_15644_17817 = state_15570__$1;
(statearr_15644_17817[(2)] = inst_15549);

(statearr_15644_17817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_15651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15651[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_15651[(1)] = (1));

return statearr_15651;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_15570){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_15570);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e15654){var ex__13305__auto__ = e15654;
var statearr_15656_17825 = state_15570;
(statearr_15656_17825[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_15570[(4)]))){
var statearr_15657_17828 = state_15570;
(statearr_15657_17828[(1)] = cljs.core.first((state_15570[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17829 = state_15570;
state_15570 = G__17829;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_15570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_15570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_15663 = f__13531__auto__();
(statearr_15663[(6)] = c__13528__auto___17767);

return statearr_15663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15673 = arguments.length;
switch (G__15673) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13528__auto___17833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_15725){
var state_val_15726 = (state_15725[(1)]);
if((state_val_15726 === (7))){
var inst_15691 = (state_15725[(7)]);
var inst_15692 = (state_15725[(8)]);
var inst_15691__$1 = (state_15725[(2)]);
var inst_15692__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15691__$1,(0),null);
var inst_15693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15691__$1,(1),null);
var inst_15695 = (inst_15692__$1 == null);
var state_15725__$1 = (function (){var statearr_15731 = state_15725;
(statearr_15731[(7)] = inst_15691__$1);

(statearr_15731[(8)] = inst_15692__$1);

(statearr_15731[(9)] = inst_15693);

return statearr_15731;
})();
if(cljs.core.truth_(inst_15695)){
var statearr_15733_17839 = state_15725__$1;
(statearr_15733_17839[(1)] = (8));

} else {
var statearr_15734_17840 = state_15725__$1;
(statearr_15734_17840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (1))){
var inst_15679 = cljs.core.vec(chs);
var inst_15680 = inst_15679;
var state_15725__$1 = (function (){var statearr_15743 = state_15725;
(statearr_15743[(10)] = inst_15680);

return statearr_15743;
})();
var statearr_15746_17841 = state_15725__$1;
(statearr_15746_17841[(2)] = null);

(statearr_15746_17841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (4))){
var inst_15680 = (state_15725[(10)]);
var state_15725__$1 = state_15725;
return cljs.core.async.ioc_alts_BANG_(state_15725__$1,(7),inst_15680);
} else {
if((state_val_15726 === (6))){
var inst_15719 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15753_17854 = state_15725__$1;
(statearr_15753_17854[(2)] = inst_15719);

(statearr_15753_17854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (3))){
var inst_15721 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15725__$1,inst_15721);
} else {
if((state_val_15726 === (2))){
var inst_15680 = (state_15725[(10)]);
var inst_15684 = cljs.core.count(inst_15680);
var inst_15685 = (inst_15684 > (0));
var state_15725__$1 = state_15725;
if(cljs.core.truth_(inst_15685)){
var statearr_15758_17855 = state_15725__$1;
(statearr_15758_17855[(1)] = (4));

} else {
var statearr_15763_17856 = state_15725__$1;
(statearr_15763_17856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (11))){
var inst_15680 = (state_15725[(10)]);
var inst_15711 = (state_15725[(2)]);
var tmp15754 = inst_15680;
var inst_15680__$1 = tmp15754;
var state_15725__$1 = (function (){var statearr_15766 = state_15725;
(statearr_15766[(10)] = inst_15680__$1);

(statearr_15766[(11)] = inst_15711);

return statearr_15766;
})();
var statearr_15769_17857 = state_15725__$1;
(statearr_15769_17857[(2)] = null);

(statearr_15769_17857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (9))){
var inst_15692 = (state_15725[(8)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15725__$1,(11),out,inst_15692);
} else {
if((state_val_15726 === (5))){
var inst_15717 = cljs.core.async.close_BANG_(out);
var state_15725__$1 = state_15725;
var statearr_15778_17858 = state_15725__$1;
(statearr_15778_17858[(2)] = inst_15717);

(statearr_15778_17858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (10))){
var inst_15715 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15779_17859 = state_15725__$1;
(statearr_15779_17859[(2)] = inst_15715);

(statearr_15779_17859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (8))){
var inst_15691 = (state_15725[(7)]);
var inst_15680 = (state_15725[(10)]);
var inst_15692 = (state_15725[(8)]);
var inst_15693 = (state_15725[(9)]);
var inst_15702 = (function (){var cs = inst_15680;
var vec__15687 = inst_15691;
var v = inst_15692;
var c = inst_15693;
return (function (p1__15667_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15667_SHARP_);
});
})();
var inst_15703 = cljs.core.filterv(inst_15702,inst_15680);
var inst_15680__$1 = inst_15703;
var state_15725__$1 = (function (){var statearr_15784 = state_15725;
(statearr_15784[(10)] = inst_15680__$1);

return statearr_15784;
})();
var statearr_15785_17860 = state_15725__$1;
(statearr_15785_17860[(2)] = null);

(statearr_15785_17860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_15793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15793[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_15793[(1)] = (1));

return statearr_15793;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_15725){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_15725);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e15796){var ex__13305__auto__ = e15796;
var statearr_15797_17865 = state_15725;
(statearr_15797_17865[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_15725[(4)]))){
var statearr_15799_17866 = state_15725;
(statearr_15799_17866[(1)] = cljs.core.first((state_15725[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17867 = state_15725;
state_15725 = G__17867;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_15725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_15725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_15806 = f__13531__auto__();
(statearr_15806[(6)] = c__13528__auto___17833);

return statearr_15806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15819 = arguments.length;
switch (G__15819) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13528__auto___17870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_15853){
var state_val_15854 = (state_15853[(1)]);
if((state_val_15854 === (7))){
var inst_15834 = (state_15853[(7)]);
var inst_15834__$1 = (state_15853[(2)]);
var inst_15836 = (inst_15834__$1 == null);
var inst_15837 = cljs.core.not(inst_15836);
var state_15853__$1 = (function (){var statearr_15860 = state_15853;
(statearr_15860[(7)] = inst_15834__$1);

return statearr_15860;
})();
if(inst_15837){
var statearr_15861_17871 = state_15853__$1;
(statearr_15861_17871[(1)] = (8));

} else {
var statearr_15862_17872 = state_15853__$1;
(statearr_15862_17872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (1))){
var inst_15827 = (0);
var state_15853__$1 = (function (){var statearr_15865 = state_15853;
(statearr_15865[(8)] = inst_15827);

return statearr_15865;
})();
var statearr_15868_17879 = state_15853__$1;
(statearr_15868_17879[(2)] = null);

(statearr_15868_17879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (4))){
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15853__$1,(7),ch);
} else {
if((state_val_15854 === (6))){
var inst_15848 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15871_17881 = state_15853__$1;
(statearr_15871_17881[(2)] = inst_15848);

(statearr_15871_17881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (3))){
var inst_15850 = (state_15853[(2)]);
var inst_15851 = cljs.core.async.close_BANG_(out);
var state_15853__$1 = (function (){var statearr_15876 = state_15853;
(statearr_15876[(9)] = inst_15850);

return statearr_15876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15853__$1,inst_15851);
} else {
if((state_val_15854 === (2))){
var inst_15827 = (state_15853[(8)]);
var inst_15829 = (inst_15827 < n);
var state_15853__$1 = state_15853;
if(cljs.core.truth_(inst_15829)){
var statearr_15878_17888 = state_15853__$1;
(statearr_15878_17888[(1)] = (4));

} else {
var statearr_15882_17889 = state_15853__$1;
(statearr_15882_17889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (11))){
var inst_15827 = (state_15853[(8)]);
var inst_15840 = (state_15853[(2)]);
var inst_15841 = (inst_15827 + (1));
var inst_15827__$1 = inst_15841;
var state_15853__$1 = (function (){var statearr_15885 = state_15853;
(statearr_15885[(8)] = inst_15827__$1);

(statearr_15885[(10)] = inst_15840);

return statearr_15885;
})();
var statearr_15887_17890 = state_15853__$1;
(statearr_15887_17890[(2)] = null);

(statearr_15887_17890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (9))){
var state_15853__$1 = state_15853;
var statearr_15890_17891 = state_15853__$1;
(statearr_15890_17891[(2)] = null);

(statearr_15890_17891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (5))){
var state_15853__$1 = state_15853;
var statearr_15895_17896 = state_15853__$1;
(statearr_15895_17896[(2)] = null);

(statearr_15895_17896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (10))){
var inst_15845 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15897_17897 = state_15853__$1;
(statearr_15897_17897[(2)] = inst_15845);

(statearr_15897_17897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (8))){
var inst_15834 = (state_15853[(7)]);
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15853__$1,(11),out,inst_15834);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_15901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15901[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_15901[(1)] = (1));

return statearr_15901;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_15853){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_15853);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e15903){var ex__13305__auto__ = e15903;
var statearr_15904_17898 = state_15853;
(statearr_15904_17898[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_15853[(4)]))){
var statearr_15907_17899 = state_15853;
(statearr_15907_17899[(1)] = cljs.core.first((state_15853[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17900 = state_15853;
state_15853 = G__17900;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_15853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_15853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_15909 = f__13531__auto__();
(statearr_15909[(6)] = c__13528__auto___17870);

return statearr_15909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15934 = (function (f,ch,meta15917,_,fn1,meta15935){
this.f = f;
this.ch = ch;
this.meta15917 = meta15917;
this._ = _;
this.fn1 = fn1;
this.meta15935 = meta15935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15936,meta15935__$1){
var self__ = this;
var _15936__$1 = this;
return (new cljs.core.async.t_cljs$core$async15934(self__.f,self__.ch,self__.meta15917,self__._,self__.fn1,meta15935__$1));
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15936){
var self__ = this;
var _15936__$1 = this;
return self__.meta15935;
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15910_SHARP_){
var G__15960 = (((p1__15910_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15910_SHARP_) : self__.f.call(null,p1__15910_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15960) : f1.call(null,G__15960));
});
}));

(cljs.core.async.t_cljs$core$async15934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15917","meta15917",-938287712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15916","cljs.core.async/t_cljs$core$async15916",364160527,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15935","meta15935",2112799103,null)], null);
}));

(cljs.core.async.t_cljs$core$async15934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15934");

(cljs.core.async.t_cljs$core$async15934.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15934.
 */
cljs.core.async.__GT_t_cljs$core$async15934 = (function cljs$core$async$__GT_t_cljs$core$async15934(f,ch,meta15917,_,fn1,meta15935){
return (new cljs.core.async.t_cljs$core$async15934(f,ch,meta15917,_,fn1,meta15935));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15916 = (function (f,ch,meta15917){
this.f = f;
this.ch = ch;
this.meta15917 = meta15917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15918,meta15917__$1){
var self__ = this;
var _15918__$1 = this;
return (new cljs.core.async.t_cljs$core$async15916(self__.f,self__.ch,meta15917__$1));
}));

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15918){
var self__ = this;
var _15918__$1 = this;
return self__.meta15917;
}));

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15934(self__.f,self__.ch,self__.meta15917,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15979 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15979) : self__.f.call(null,G__15979));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15917","meta15917",-938287712,null)], null);
}));

(cljs.core.async.t_cljs$core$async15916.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15916");

(cljs.core.async.t_cljs$core$async15916.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15916");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15916.
 */
cljs.core.async.__GT_t_cljs$core$async15916 = (function cljs$core$async$__GT_t_cljs$core$async15916(f,ch,meta15917){
return (new cljs.core.async.t_cljs$core$async15916(f,ch,meta15917));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15916(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15998 = (function (f,ch,meta15999){
this.f = f;
this.ch = ch;
this.meta15999 = meta15999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16000,meta15999__$1){
var self__ = this;
var _16000__$1 = this;
return (new cljs.core.async.t_cljs$core$async15998(self__.f,self__.ch,meta15999__$1));
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16000){
var self__ = this;
var _16000__$1 = this;
return self__.meta15999;
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15999","meta15999",1349413371,null)], null);
}));

(cljs.core.async.t_cljs$core$async15998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15998");

(cljs.core.async.t_cljs$core$async15998.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15998.
 */
cljs.core.async.__GT_t_cljs$core$async15998 = (function cljs$core$async$__GT_t_cljs$core$async15998(f,ch,meta15999){
return (new cljs.core.async.t_cljs$core$async15998(f,ch,meta15999));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15998(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16024 = (function (p,ch,meta16025){
this.p = p;
this.ch = ch;
this.meta16025 = meta16025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16026,meta16025__$1){
var self__ = this;
var _16026__$1 = this;
return (new cljs.core.async.t_cljs$core$async16024(self__.p,self__.ch,meta16025__$1));
}));

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16026){
var self__ = this;
var _16026__$1 = this;
return self__.meta16025;
}));

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16025","meta16025",-1804961263,null)], null);
}));

(cljs.core.async.t_cljs$core$async16024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16024");

(cljs.core.async.t_cljs$core$async16024.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16024.
 */
cljs.core.async.__GT_t_cljs$core$async16024 = (function cljs$core$async$__GT_t_cljs$core$async16024(p,ch,meta16025){
return (new cljs.core.async.t_cljs$core$async16024(p,ch,meta16025));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16024(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16054 = arguments.length;
switch (G__16054) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13528__auto___17936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_16077){
var state_val_16078 = (state_16077[(1)]);
if((state_val_16078 === (7))){
var inst_16073 = (state_16077[(2)]);
var state_16077__$1 = state_16077;
var statearr_16083_17941 = state_16077__$1;
(statearr_16083_17941[(2)] = inst_16073);

(statearr_16083_17941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (1))){
var state_16077__$1 = state_16077;
var statearr_16087_17942 = state_16077__$1;
(statearr_16087_17942[(2)] = null);

(statearr_16087_17942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (4))){
var inst_16059 = (state_16077[(7)]);
var inst_16059__$1 = (state_16077[(2)]);
var inst_16060 = (inst_16059__$1 == null);
var state_16077__$1 = (function (){var statearr_16089 = state_16077;
(statearr_16089[(7)] = inst_16059__$1);

return statearr_16089;
})();
if(cljs.core.truth_(inst_16060)){
var statearr_16090_17943 = state_16077__$1;
(statearr_16090_17943[(1)] = (5));

} else {
var statearr_16091_17944 = state_16077__$1;
(statearr_16091_17944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (6))){
var inst_16059 = (state_16077[(7)]);
var inst_16064 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16059) : p.call(null,inst_16059));
var state_16077__$1 = state_16077;
if(cljs.core.truth_(inst_16064)){
var statearr_16092_17952 = state_16077__$1;
(statearr_16092_17952[(1)] = (8));

} else {
var statearr_16096_17953 = state_16077__$1;
(statearr_16096_17953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (3))){
var inst_16075 = (state_16077[(2)]);
var state_16077__$1 = state_16077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16077__$1,inst_16075);
} else {
if((state_val_16078 === (2))){
var state_16077__$1 = state_16077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16077__$1,(4),ch);
} else {
if((state_val_16078 === (11))){
var inst_16067 = (state_16077[(2)]);
var state_16077__$1 = state_16077;
var statearr_16101_17955 = state_16077__$1;
(statearr_16101_17955[(2)] = inst_16067);

(statearr_16101_17955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (9))){
var state_16077__$1 = state_16077;
var statearr_16105_17958 = state_16077__$1;
(statearr_16105_17958[(2)] = null);

(statearr_16105_17958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (5))){
var inst_16062 = cljs.core.async.close_BANG_(out);
var state_16077__$1 = state_16077;
var statearr_16107_17960 = state_16077__$1;
(statearr_16107_17960[(2)] = inst_16062);

(statearr_16107_17960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (10))){
var inst_16070 = (state_16077[(2)]);
var state_16077__$1 = (function (){var statearr_16108 = state_16077;
(statearr_16108[(8)] = inst_16070);

return statearr_16108;
})();
var statearr_16109_17961 = state_16077__$1;
(statearr_16109_17961[(2)] = null);

(statearr_16109_17961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16078 === (8))){
var inst_16059 = (state_16077[(7)]);
var state_16077__$1 = state_16077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16077__$1,(11),out,inst_16059);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_16129 = [null,null,null,null,null,null,null,null,null];
(statearr_16129[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_16129[(1)] = (1));

return statearr_16129;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_16077){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_16077);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e16130){var ex__13305__auto__ = e16130;
var statearr_16132_17967 = state_16077;
(statearr_16132_17967[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_16077[(4)]))){
var statearr_16134_17968 = state_16077;
(statearr_16134_17968[(1)] = cljs.core.first((state_16077[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_16077;
state_16077 = G__17969;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_16077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_16077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_16135 = f__13531__auto__();
(statearr_16135[(6)] = c__13528__auto___17936);

return statearr_16135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16142 = arguments.length;
switch (G__16142) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_16217){
var state_val_16218 = (state_16217[(1)]);
if((state_val_16218 === (7))){
var inst_16213 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16226_17971 = state_16217__$1;
(statearr_16226_17971[(2)] = inst_16213);

(statearr_16226_17971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (20))){
var inst_16175 = (state_16217[(7)]);
var inst_16194 = (state_16217[(2)]);
var inst_16195 = cljs.core.next(inst_16175);
var inst_16156 = inst_16195;
var inst_16157 = null;
var inst_16158 = (0);
var inst_16159 = (0);
var state_16217__$1 = (function (){var statearr_16231 = state_16217;
(statearr_16231[(8)] = inst_16156);

(statearr_16231[(9)] = inst_16158);

(statearr_16231[(10)] = inst_16157);

(statearr_16231[(11)] = inst_16194);

(statearr_16231[(12)] = inst_16159);

return statearr_16231;
})();
var statearr_16232_17972 = state_16217__$1;
(statearr_16232_17972[(2)] = null);

(statearr_16232_17972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (1))){
var state_16217__$1 = state_16217;
var statearr_16234_17974 = state_16217__$1;
(statearr_16234_17974[(2)] = null);

(statearr_16234_17974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (4))){
var inst_16145 = (state_16217[(13)]);
var inst_16145__$1 = (state_16217[(2)]);
var inst_16146 = (inst_16145__$1 == null);
var state_16217__$1 = (function (){var statearr_16238 = state_16217;
(statearr_16238[(13)] = inst_16145__$1);

return statearr_16238;
})();
if(cljs.core.truth_(inst_16146)){
var statearr_16241_17978 = state_16217__$1;
(statearr_16241_17978[(1)] = (5));

} else {
var statearr_16243_17979 = state_16217__$1;
(statearr_16243_17979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (15))){
var state_16217__$1 = state_16217;
var statearr_16249_17980 = state_16217__$1;
(statearr_16249_17980[(2)] = null);

(statearr_16249_17980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (21))){
var state_16217__$1 = state_16217;
var statearr_16250_17984 = state_16217__$1;
(statearr_16250_17984[(2)] = null);

(statearr_16250_17984[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (13))){
var inst_16156 = (state_16217[(8)]);
var inst_16158 = (state_16217[(9)]);
var inst_16157 = (state_16217[(10)]);
var inst_16159 = (state_16217[(12)]);
var inst_16171 = (state_16217[(2)]);
var inst_16172 = (inst_16159 + (1));
var tmp16244 = inst_16156;
var tmp16245 = inst_16158;
var tmp16246 = inst_16157;
var inst_16156__$1 = tmp16244;
var inst_16157__$1 = tmp16246;
var inst_16158__$1 = tmp16245;
var inst_16159__$1 = inst_16172;
var state_16217__$1 = (function (){var statearr_16256 = state_16217;
(statearr_16256[(8)] = inst_16156__$1);

(statearr_16256[(9)] = inst_16158__$1);

(statearr_16256[(10)] = inst_16157__$1);

(statearr_16256[(14)] = inst_16171);

(statearr_16256[(12)] = inst_16159__$1);

return statearr_16256;
})();
var statearr_16257_17985 = state_16217__$1;
(statearr_16257_17985[(2)] = null);

(statearr_16257_17985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (22))){
var state_16217__$1 = state_16217;
var statearr_16260_17986 = state_16217__$1;
(statearr_16260_17986[(2)] = null);

(statearr_16260_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (6))){
var inst_16145 = (state_16217[(13)]);
var inst_16154 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16145) : f.call(null,inst_16145));
var inst_16155 = cljs.core.seq(inst_16154);
var inst_16156 = inst_16155;
var inst_16157 = null;
var inst_16158 = (0);
var inst_16159 = (0);
var state_16217__$1 = (function (){var statearr_16263 = state_16217;
(statearr_16263[(8)] = inst_16156);

(statearr_16263[(9)] = inst_16158);

(statearr_16263[(10)] = inst_16157);

(statearr_16263[(12)] = inst_16159);

return statearr_16263;
})();
var statearr_16264_17991 = state_16217__$1;
(statearr_16264_17991[(2)] = null);

(statearr_16264_17991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (17))){
var inst_16175 = (state_16217[(7)]);
var inst_16187 = cljs.core.chunk_first(inst_16175);
var inst_16188 = cljs.core.chunk_rest(inst_16175);
var inst_16189 = cljs.core.count(inst_16187);
var inst_16156 = inst_16188;
var inst_16157 = inst_16187;
var inst_16158 = inst_16189;
var inst_16159 = (0);
var state_16217__$1 = (function (){var statearr_16265 = state_16217;
(statearr_16265[(8)] = inst_16156);

(statearr_16265[(9)] = inst_16158);

(statearr_16265[(10)] = inst_16157);

(statearr_16265[(12)] = inst_16159);

return statearr_16265;
})();
var statearr_16266_18001 = state_16217__$1;
(statearr_16266_18001[(2)] = null);

(statearr_16266_18001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (3))){
var inst_16215 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16217__$1,inst_16215);
} else {
if((state_val_16218 === (12))){
var inst_16203 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16267_18002 = state_16217__$1;
(statearr_16267_18002[(2)] = inst_16203);

(statearr_16267_18002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (2))){
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16217__$1,(4),in$);
} else {
if((state_val_16218 === (23))){
var inst_16211 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16271_18003 = state_16217__$1;
(statearr_16271_18003[(2)] = inst_16211);

(statearr_16271_18003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (19))){
var inst_16198 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16272_18004 = state_16217__$1;
(statearr_16272_18004[(2)] = inst_16198);

(statearr_16272_18004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (11))){
var inst_16156 = (state_16217[(8)]);
var inst_16175 = (state_16217[(7)]);
var inst_16175__$1 = cljs.core.seq(inst_16156);
var state_16217__$1 = (function (){var statearr_16274 = state_16217;
(statearr_16274[(7)] = inst_16175__$1);

return statearr_16274;
})();
if(inst_16175__$1){
var statearr_16275_18005 = state_16217__$1;
(statearr_16275_18005[(1)] = (14));

} else {
var statearr_16277_18006 = state_16217__$1;
(statearr_16277_18006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (9))){
var inst_16205 = (state_16217[(2)]);
var inst_16206 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16217__$1 = (function (){var statearr_16279 = state_16217;
(statearr_16279[(15)] = inst_16205);

return statearr_16279;
})();
if(cljs.core.truth_(inst_16206)){
var statearr_16280_18007 = state_16217__$1;
(statearr_16280_18007[(1)] = (21));

} else {
var statearr_16282_18008 = state_16217__$1;
(statearr_16282_18008[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (5))){
var inst_16148 = cljs.core.async.close_BANG_(out);
var state_16217__$1 = state_16217;
var statearr_16284_18009 = state_16217__$1;
(statearr_16284_18009[(2)] = inst_16148);

(statearr_16284_18009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (14))){
var inst_16175 = (state_16217[(7)]);
var inst_16180 = cljs.core.chunked_seq_QMARK_(inst_16175);
var state_16217__$1 = state_16217;
if(inst_16180){
var statearr_16285_18010 = state_16217__$1;
(statearr_16285_18010[(1)] = (17));

} else {
var statearr_16286_18011 = state_16217__$1;
(statearr_16286_18011[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (16))){
var inst_16201 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16287_18012 = state_16217__$1;
(statearr_16287_18012[(2)] = inst_16201);

(statearr_16287_18012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (10))){
var inst_16157 = (state_16217[(10)]);
var inst_16159 = (state_16217[(12)]);
var inst_16169 = cljs.core._nth(inst_16157,inst_16159);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16217__$1,(13),out,inst_16169);
} else {
if((state_val_16218 === (18))){
var inst_16175 = (state_16217[(7)]);
var inst_16192 = cljs.core.first(inst_16175);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16217__$1,(20),out,inst_16192);
} else {
if((state_val_16218 === (8))){
var inst_16158 = (state_16217[(9)]);
var inst_16159 = (state_16217[(12)]);
var inst_16163 = (inst_16159 < inst_16158);
var inst_16164 = inst_16163;
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16164)){
var statearr_16290_18019 = state_16217__$1;
(statearr_16290_18019[(1)] = (10));

} else {
var statearr_16292_18020 = state_16217__$1;
(statearr_16292_18020[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13302__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13302__auto____0 = (function (){
var statearr_16322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16322[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13302__auto__);

(statearr_16322[(1)] = (1));

return statearr_16322;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13302__auto____1 = (function (state_16217){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_16217);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e16323){var ex__13305__auto__ = e16323;
var statearr_16325_18031 = state_16217;
(statearr_16325_18031[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_16217[(4)]))){
var statearr_16326_18032 = state_16217;
(statearr_16326_18032[(1)] = cljs.core.first((state_16217[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18033 = state_16217;
state_16217 = G__18033;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13302__auto__ = function(state_16217){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13302__auto____1.call(this,state_16217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13302__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13302__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_16330 = f__13531__auto__();
(statearr_16330[(6)] = c__13528__auto__);

return statearr_16330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));

return c__13528__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16338 = arguments.length;
switch (G__16338) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16356 = arguments.length;
switch (G__16356) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16369 = arguments.length;
switch (G__16369) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13528__auto___18046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_16403){
var state_val_16404 = (state_16403[(1)]);
if((state_val_16404 === (7))){
var inst_16396 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16428_18047 = state_16403__$1;
(statearr_16428_18047[(2)] = inst_16396);

(statearr_16428_18047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (1))){
var inst_16376 = null;
var state_16403__$1 = (function (){var statearr_16429 = state_16403;
(statearr_16429[(7)] = inst_16376);

return statearr_16429;
})();
var statearr_16430_18049 = state_16403__$1;
(statearr_16430_18049[(2)] = null);

(statearr_16430_18049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (4))){
var inst_16379 = (state_16403[(8)]);
var inst_16379__$1 = (state_16403[(2)]);
var inst_16382 = (inst_16379__$1 == null);
var inst_16383 = cljs.core.not(inst_16382);
var state_16403__$1 = (function (){var statearr_16431 = state_16403;
(statearr_16431[(8)] = inst_16379__$1);

return statearr_16431;
})();
if(inst_16383){
var statearr_16433_18050 = state_16403__$1;
(statearr_16433_18050[(1)] = (5));

} else {
var statearr_16434_18051 = state_16403__$1;
(statearr_16434_18051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (6))){
var state_16403__$1 = state_16403;
var statearr_16438_18055 = state_16403__$1;
(statearr_16438_18055[(2)] = null);

(statearr_16438_18055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (3))){
var inst_16399 = (state_16403[(2)]);
var inst_16400 = cljs.core.async.close_BANG_(out);
var state_16403__$1 = (function (){var statearr_16446 = state_16403;
(statearr_16446[(9)] = inst_16399);

return statearr_16446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16403__$1,inst_16400);
} else {
if((state_val_16404 === (2))){
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16403__$1,(4),ch);
} else {
if((state_val_16404 === (11))){
var inst_16379 = (state_16403[(8)]);
var inst_16390 = (state_16403[(2)]);
var inst_16376 = inst_16379;
var state_16403__$1 = (function (){var statearr_16447 = state_16403;
(statearr_16447[(7)] = inst_16376);

(statearr_16447[(10)] = inst_16390);

return statearr_16447;
})();
var statearr_16451_18057 = state_16403__$1;
(statearr_16451_18057[(2)] = null);

(statearr_16451_18057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (9))){
var inst_16379 = (state_16403[(8)]);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16403__$1,(11),out,inst_16379);
} else {
if((state_val_16404 === (5))){
var inst_16376 = (state_16403[(7)]);
var inst_16379 = (state_16403[(8)]);
var inst_16385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16379,inst_16376);
var state_16403__$1 = state_16403;
if(inst_16385){
var statearr_16453_18058 = state_16403__$1;
(statearr_16453_18058[(1)] = (8));

} else {
var statearr_16454_18059 = state_16403__$1;
(statearr_16454_18059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (10))){
var inst_16393 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16455_18060 = state_16403__$1;
(statearr_16455_18060[(2)] = inst_16393);

(statearr_16455_18060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (8))){
var inst_16376 = (state_16403[(7)]);
var tmp16452 = inst_16376;
var inst_16376__$1 = tmp16452;
var state_16403__$1 = (function (){var statearr_16461 = state_16403;
(statearr_16461[(7)] = inst_16376__$1);

return statearr_16461;
})();
var statearr_16468_18064 = state_16403__$1;
(statearr_16468_18064[(2)] = null);

(statearr_16468_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_16473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16473[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_16473[(1)] = (1));

return statearr_16473;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_16403){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_16403);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e16474){var ex__13305__auto__ = e16474;
var statearr_16475_18074 = state_16403;
(statearr_16475_18074[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_16403[(4)]))){
var statearr_16480_18075 = state_16403;
(statearr_16480_18075[(1)] = cljs.core.first((state_16403[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_16403;
state_16403 = G__18076;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_16403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_16403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_16481 = f__13531__auto__();
(statearr_16481[(6)] = c__13528__auto___18046);

return statearr_16481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16483 = arguments.length;
switch (G__16483) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13528__auto___18085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_16535){
var state_val_16537 = (state_16535[(1)]);
if((state_val_16537 === (7))){
var inst_16531 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16546_18087 = state_16535__$1;
(statearr_16546_18087[(2)] = inst_16531);

(statearr_16546_18087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (1))){
var inst_16494 = (new Array(n));
var inst_16495 = inst_16494;
var inst_16496 = (0);
var state_16535__$1 = (function (){var statearr_16548 = state_16535;
(statearr_16548[(7)] = inst_16496);

(statearr_16548[(8)] = inst_16495);

return statearr_16548;
})();
var statearr_16552_18091 = state_16535__$1;
(statearr_16552_18091[(2)] = null);

(statearr_16552_18091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (4))){
var inst_16499 = (state_16535[(9)]);
var inst_16499__$1 = (state_16535[(2)]);
var inst_16500 = (inst_16499__$1 == null);
var inst_16501 = cljs.core.not(inst_16500);
var state_16535__$1 = (function (){var statearr_16553 = state_16535;
(statearr_16553[(9)] = inst_16499__$1);

return statearr_16553;
})();
if(inst_16501){
var statearr_16556_18095 = state_16535__$1;
(statearr_16556_18095[(1)] = (5));

} else {
var statearr_16558_18096 = state_16535__$1;
(statearr_16558_18096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (15))){
var inst_16525 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16561_18100 = state_16535__$1;
(statearr_16561_18100[(2)] = inst_16525);

(statearr_16561_18100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (13))){
var state_16535__$1 = state_16535;
var statearr_16563_18101 = state_16535__$1;
(statearr_16563_18101[(2)] = null);

(statearr_16563_18101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (6))){
var inst_16496 = (state_16535[(7)]);
var inst_16521 = (inst_16496 > (0));
var state_16535__$1 = state_16535;
if(cljs.core.truth_(inst_16521)){
var statearr_16564_18102 = state_16535__$1;
(statearr_16564_18102[(1)] = (12));

} else {
var statearr_16566_18103 = state_16535__$1;
(statearr_16566_18103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (3))){
var inst_16533 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16535__$1,inst_16533);
} else {
if((state_val_16537 === (12))){
var inst_16495 = (state_16535[(8)]);
var inst_16523 = cljs.core.vec(inst_16495);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16535__$1,(15),out,inst_16523);
} else {
if((state_val_16537 === (2))){
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16535__$1,(4),ch);
} else {
if((state_val_16537 === (11))){
var inst_16511 = (state_16535[(2)]);
var inst_16512 = (new Array(n));
var inst_16495 = inst_16512;
var inst_16496 = (0);
var state_16535__$1 = (function (){var statearr_16570 = state_16535;
(statearr_16570[(10)] = inst_16511);

(statearr_16570[(7)] = inst_16496);

(statearr_16570[(8)] = inst_16495);

return statearr_16570;
})();
var statearr_16571_18115 = state_16535__$1;
(statearr_16571_18115[(2)] = null);

(statearr_16571_18115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (9))){
var inst_16495 = (state_16535[(8)]);
var inst_16509 = cljs.core.vec(inst_16495);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16535__$1,(11),out,inst_16509);
} else {
if((state_val_16537 === (5))){
var inst_16504 = (state_16535[(11)]);
var inst_16499 = (state_16535[(9)]);
var inst_16496 = (state_16535[(7)]);
var inst_16495 = (state_16535[(8)]);
var inst_16503 = (inst_16495[inst_16496] = inst_16499);
var inst_16504__$1 = (inst_16496 + (1));
var inst_16505 = (inst_16504__$1 < n);
var state_16535__$1 = (function (){var statearr_16574 = state_16535;
(statearr_16574[(11)] = inst_16504__$1);

(statearr_16574[(12)] = inst_16503);

return statearr_16574;
})();
if(cljs.core.truth_(inst_16505)){
var statearr_16578_18130 = state_16535__$1;
(statearr_16578_18130[(1)] = (8));

} else {
var statearr_16579_18131 = state_16535__$1;
(statearr_16579_18131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (14))){
var inst_16528 = (state_16535[(2)]);
var inst_16529 = cljs.core.async.close_BANG_(out);
var state_16535__$1 = (function (){var statearr_16586 = state_16535;
(statearr_16586[(13)] = inst_16528);

return statearr_16586;
})();
var statearr_16587_18132 = state_16535__$1;
(statearr_16587_18132[(2)] = inst_16529);

(statearr_16587_18132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (10))){
var inst_16515 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16588_18136 = state_16535__$1;
(statearr_16588_18136[(2)] = inst_16515);

(statearr_16588_18136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (8))){
var inst_16504 = (state_16535[(11)]);
var inst_16495 = (state_16535[(8)]);
var tmp16583 = inst_16495;
var inst_16495__$1 = tmp16583;
var inst_16496 = inst_16504;
var state_16535__$1 = (function (){var statearr_16592 = state_16535;
(statearr_16592[(7)] = inst_16496);

(statearr_16592[(8)] = inst_16495__$1);

return statearr_16592;
})();
var statearr_16593_18137 = state_16535__$1;
(statearr_16593_18137[(2)] = null);

(statearr_16593_18137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_16598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16598[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_16598[(1)] = (1));

return statearr_16598;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_16535){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_16535);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e16600){var ex__13305__auto__ = e16600;
var statearr_16601_18148 = state_16535;
(statearr_16601_18148[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_16535[(4)]))){
var statearr_16602_18149 = state_16535;
(statearr_16602_18149[(1)] = cljs.core.first((state_16535[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18150 = state_16535;
state_16535 = G__18150;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_16535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_16535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_16606 = f__13531__auto__();
(statearr_16606[(6)] = c__13528__auto___18085);

return statearr_16606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16612 = arguments.length;
switch (G__16612) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13528__auto___18153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13531__auto__ = (function (){var switch__13301__auto__ = (function (state_16666){
var state_val_16667 = (state_16666[(1)]);
if((state_val_16667 === (7))){
var inst_16661 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
var statearr_16671_18154 = state_16666__$1;
(statearr_16671_18154[(2)] = inst_16661);

(statearr_16671_18154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (1))){
var inst_16613 = [];
var inst_16614 = inst_16613;
var inst_16615 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16666__$1 = (function (){var statearr_16673 = state_16666;
(statearr_16673[(7)] = inst_16614);

(statearr_16673[(8)] = inst_16615);

return statearr_16673;
})();
var statearr_16675_18155 = state_16666__$1;
(statearr_16675_18155[(2)] = null);

(statearr_16675_18155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (4))){
var inst_16618 = (state_16666[(9)]);
var inst_16618__$1 = (state_16666[(2)]);
var inst_16619 = (inst_16618__$1 == null);
var inst_16620 = cljs.core.not(inst_16619);
var state_16666__$1 = (function (){var statearr_16679 = state_16666;
(statearr_16679[(9)] = inst_16618__$1);

return statearr_16679;
})();
if(inst_16620){
var statearr_16680_18159 = state_16666__$1;
(statearr_16680_18159[(1)] = (5));

} else {
var statearr_16682_18160 = state_16666__$1;
(statearr_16682_18160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (15))){
var inst_16614 = (state_16666[(7)]);
var inst_16653 = cljs.core.vec(inst_16614);
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16666__$1,(18),out,inst_16653);
} else {
if((state_val_16667 === (13))){
var inst_16647 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
var statearr_16686_18161 = state_16666__$1;
(statearr_16686_18161[(2)] = inst_16647);

(statearr_16686_18161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (6))){
var inst_16614 = (state_16666[(7)]);
var inst_16650 = inst_16614.length;
var inst_16651 = (inst_16650 > (0));
var state_16666__$1 = state_16666;
if(cljs.core.truth_(inst_16651)){
var statearr_16687_18162 = state_16666__$1;
(statearr_16687_18162[(1)] = (15));

} else {
var statearr_16688_18163 = state_16666__$1;
(statearr_16688_18163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (17))){
var inst_16658 = (state_16666[(2)]);
var inst_16659 = cljs.core.async.close_BANG_(out);
var state_16666__$1 = (function (){var statearr_16692 = state_16666;
(statearr_16692[(10)] = inst_16658);

return statearr_16692;
})();
var statearr_16693_18164 = state_16666__$1;
(statearr_16693_18164[(2)] = inst_16659);

(statearr_16693_18164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (3))){
var inst_16663 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16666__$1,inst_16663);
} else {
if((state_val_16667 === (12))){
var inst_16614 = (state_16666[(7)]);
var inst_16638 = cljs.core.vec(inst_16614);
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16666__$1,(14),out,inst_16638);
} else {
if((state_val_16667 === (2))){
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16666__$1,(4),ch);
} else {
if((state_val_16667 === (11))){
var inst_16614 = (state_16666[(7)]);
var inst_16622 = (state_16666[(11)]);
var inst_16618 = (state_16666[(9)]);
var inst_16635 = inst_16614.push(inst_16618);
var tmp16694 = inst_16614;
var inst_16614__$1 = tmp16694;
var inst_16615 = inst_16622;
var state_16666__$1 = (function (){var statearr_16700 = state_16666;
(statearr_16700[(7)] = inst_16614__$1);

(statearr_16700[(8)] = inst_16615);

(statearr_16700[(12)] = inst_16635);

return statearr_16700;
})();
var statearr_16701_18182 = state_16666__$1;
(statearr_16701_18182[(2)] = null);

(statearr_16701_18182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (9))){
var inst_16615 = (state_16666[(8)]);
var inst_16627 = cljs.core.keyword_identical_QMARK_(inst_16615,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16666__$1 = state_16666;
var statearr_16702_18192 = state_16666__$1;
(statearr_16702_18192[(2)] = inst_16627);

(statearr_16702_18192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (5))){
var inst_16623 = (state_16666[(13)]);
var inst_16622 = (state_16666[(11)]);
var inst_16618 = (state_16666[(9)]);
var inst_16615 = (state_16666[(8)]);
var inst_16622__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16618) : f.call(null,inst_16618));
var inst_16623__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16622__$1,inst_16615);
var state_16666__$1 = (function (){var statearr_16708 = state_16666;
(statearr_16708[(13)] = inst_16623__$1);

(statearr_16708[(11)] = inst_16622__$1);

return statearr_16708;
})();
if(inst_16623__$1){
var statearr_16709_18215 = state_16666__$1;
(statearr_16709_18215[(1)] = (8));

} else {
var statearr_16710_18216 = state_16666__$1;
(statearr_16710_18216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (14))){
var inst_16622 = (state_16666[(11)]);
var inst_16618 = (state_16666[(9)]);
var inst_16640 = (state_16666[(2)]);
var inst_16642 = [];
var inst_16643 = inst_16642.push(inst_16618);
var inst_16614 = inst_16642;
var inst_16615 = inst_16622;
var state_16666__$1 = (function (){var statearr_16712 = state_16666;
(statearr_16712[(14)] = inst_16643);

(statearr_16712[(7)] = inst_16614);

(statearr_16712[(15)] = inst_16640);

(statearr_16712[(8)] = inst_16615);

return statearr_16712;
})();
var statearr_16716_18217 = state_16666__$1;
(statearr_16716_18217[(2)] = null);

(statearr_16716_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (16))){
var state_16666__$1 = state_16666;
var statearr_16721_18218 = state_16666__$1;
(statearr_16721_18218[(2)] = null);

(statearr_16721_18218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (10))){
var inst_16629 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
if(cljs.core.truth_(inst_16629)){
var statearr_16722_18222 = state_16666__$1;
(statearr_16722_18222[(1)] = (11));

} else {
var statearr_16723_18226 = state_16666__$1;
(statearr_16723_18226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (18))){
var inst_16655 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
var statearr_16724_18227 = state_16666__$1;
(statearr_16724_18227[(2)] = inst_16655);

(statearr_16724_18227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16667 === (8))){
var inst_16623 = (state_16666[(13)]);
var state_16666__$1 = state_16666;
var statearr_16725_18231 = state_16666__$1;
(statearr_16725_18231[(2)] = inst_16623);

(statearr_16725_18231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13302__auto__ = null;
var cljs$core$async$state_machine__13302__auto____0 = (function (){
var statearr_16726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16726[(0)] = cljs$core$async$state_machine__13302__auto__);

(statearr_16726[(1)] = (1));

return statearr_16726;
});
var cljs$core$async$state_machine__13302__auto____1 = (function (state_16666){
while(true){
var ret_value__13303__auto__ = (function (){try{while(true){
var result__13304__auto__ = switch__13301__auto__(state_16666);
if(cljs.core.keyword_identical_QMARK_(result__13304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13304__auto__;
}
break;
}
}catch (e16727){var ex__13305__auto__ = e16727;
var statearr_16728_18232 = state_16666;
(statearr_16728_18232[(2)] = ex__13305__auto__);


if(cljs.core.seq((state_16666[(4)]))){
var statearr_16729_18233 = state_16666;
(statearr_16729_18233[(1)] = cljs.core.first((state_16666[(4)])));

} else {
throw ex__13305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18234 = state_16666;
state_16666 = G__18234;
continue;
} else {
return ret_value__13303__auto__;
}
break;
}
});
cljs$core$async$state_machine__13302__auto__ = function(state_16666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13302__auto____1.call(this,state_16666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13302__auto____0;
cljs$core$async$state_machine__13302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13302__auto____1;
return cljs$core$async$state_machine__13302__auto__;
})()
})();
var state__13532__auto__ = (function (){var statearr_16732 = f__13531__auto__();
(statearr_16732[(6)] = c__13528__auto___18153);

return statearr_16732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13532__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
