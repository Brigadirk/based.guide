goog.provide('app.projects');
app.projects.project_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.projects.transform_project = (function app$projects$transform_project(project){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/name"),new cljs.core.Keyword(null,"pageid","pageid",160137765),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/pageid"),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/tags"),new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"frontimage")], null);
});
app.projects.fetch_and_update_projects = (function app$projects$fetch_and_update_projects(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:8080/front",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.reset_BANG_(app.projects.project_list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.projects.transform_project,response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),app.components.common.error_handler], null)], 0));
});

//# sourceMappingURL=app.projects.js.map
