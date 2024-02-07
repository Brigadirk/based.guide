goog.provide('app.components.common');
app.components.common.horizontal_line = (function app$components$common$horizontal_line(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0"], null)], null)], null);
});
app.components.common.nav_link = (function app$components$common$nav_link(path,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
event.preventDefault();

return cljs.core.reset_BANG_(app.state.current_route,path);
})], null),title], null);
});
app.components.common.handler = (function app$components$common$handler(response){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
});
app.components.common.error_handler = (function app$components$common$error_handler(p__15548){
var map__15549 = p__15548;
var map__15549__$1 = cljs.core.__destructure_map(map__15549);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15549__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15549__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});

//# sourceMappingURL=app.components.common.js.map
