goog.provide('app.routingconfig');
app.routingconfig.route_component_map = (function app$routingconfig$route_component_map(path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"/")){
return app.pages.main.main_grid;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"/about")){
return app.pages.about.about_page;
} else {
return app.pages.projectpage.project_page(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pageid","pageid",160137765),cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//))], null));

}
}
});

//# sourceMappingURL=app.routingconfig.js.map
