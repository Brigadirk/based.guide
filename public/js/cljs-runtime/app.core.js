goog.provide('app.core');
app.core.init_routing = (function app$core$init_routing(){
return cljs.core.add_watch(app.state.current_route,new cljs.core.Keyword(null,"route-change","route-change",1497541830),(function (_,___$1,___$2,new_route){
return app.routing.navigate(new_route);
}));
});
app.core.main = (function app$core$main(){
app.core.init_routing();

app.api.backend.fetch_and_update_projects();

var current_path_15566 = window.location.pathname;
cljs.core.reset_BANG_(app.state.current_route,current_path_15566);

app.routing.navigate(current_path_15566);

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.layout], null),document.getElementById("app"));

return window.addEventListener("popstate",(function (_){
return app.routing.navigate(window.location.pathname);
}));
});
goog.exportSymbol('app.core.main', app.core.main);

//# sourceMappingURL=app.core.js.map
