goog.provide('app.api.backend');
app.api.backend.transform_project = (function app$api$backend$transform_project(project){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/name"),new cljs.core.Keyword(null,"pageid","pageid",160137765),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/pageid"),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/tags"),new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"frontimage")], null);
});
app.api.backend.fetch_and_update_projects = (function app$api$backend$fetch_and_update_projects(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://based-guide-backend.onrender.com/front",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.reset_BANG_(app.state.project_list,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.api.backend.transform_project,response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),app.components.common.error_handler], null)], 0));
});
app.api.backend.transform_page = (function app$api$backend$transform_page(project){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/name"),new cljs.core.Keyword(null,"pageid","pageid",160137765),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/pageid"),new cljs.core.Keyword(null,"associated-links","associated-links",668661371),JSON.parse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"associated_links")),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/tags"),new cljs.core.Keyword(null,"markdown-text","markdown-text",-1773502116),cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,"projects/markdown_text")], null);
});
app.api.backend.fetch_project = (function app$api$backend$fetch_project(page){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://based-guide-backend.onrender.com/projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pageid","pageid",160137765).cljs$core$IFn$_invoke$arity$1(page))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.reset_BANG_(app.state.project_page,app.api.backend.transform_page(cljs.core.first(response)));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),app.components.common.error_handler], null)], 0));
});

//# sourceMappingURL=app.api.backend.js.map
