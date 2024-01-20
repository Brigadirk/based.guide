goog.provide('app.pages.projectpage');
app.pages.projectpage.project_page = (function app$pages$projectpage$project_page(pageid){
app.api.backend.fetch_project(pageid);

return (function (){
var project = cljs.core.deref(app.state.project_page);
if(cljs.core.truth_((function (){var and__5043__auto__ = project;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.empty_QMARK_(project);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Page not found"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center my-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"markdown-text","markdown-text",-1773502116).cljs$core$IFn$_invoke$arity$1(project)], null)], null);
}
});
});

//# sourceMappingURL=app.pages.projectpage.js.map
