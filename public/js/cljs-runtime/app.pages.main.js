goog.provide('app.pages.main');
app.pages.main.main_grid = (function app$pages$main$main_grid(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-wrap justify-center max-w-md mx-auto"], null),(function (){var projects = cljs.core.deref(app.state.project_list);
if(cljs.core.truth_((function (){var and__5043__auto__ = projects;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.empty_QMARK_(projects);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center h-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"No projects found"], null)], null);
} else {
var iter__5523__auto__ = (function app$pages$main$main_grid_$_iter__15585(s__15586){
return (new cljs.core.LazySeq(null,(function (){
var s__15586__$1 = s__15586;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15586__$1);
if(temp__5804__auto__){
var s__15586__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15586__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15586__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15588 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15587 = (0);
while(true){
if((i__15587 < size__5522__auto__)){
var project = cljs.core._nth(c__5521__auto__,i__15587);
cljs.core.chunk_append(b__15588,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full md:w-1/3 p-4"], null),app.components.common.nav_link(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pageid","pageid",160137765).cljs$core$IFn$_invoke$arity$1(project))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-lg shadow relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-full h-auto shadow-lg rounded-lg",new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 flex items-center justify-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold text-center text-black shadow-white"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null)));

var G__15589 = (i__15587 + (1));
i__15587 = G__15589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15588),app$pages$main$main_grid_$_iter__15585(cljs.core.chunk_rest(s__15586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15588),null);
}
} else {
var project = cljs.core.first(s__15586__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full md:w-1/3 p-4"], null),app.components.common.nav_link(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pageid","pageid",160137765).cljs$core$IFn$_invoke$arity$1(project))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-lg shadow relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-full h-auto shadow-lg rounded-lg",new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 flex items-center justify-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold text-center text-black shadow-white"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null)),app$pages$main$main_grid_$_iter__15585(cljs.core.rest(s__15586__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(projects);
}
})()], null);
});

//# sourceMappingURL=app.pages.main.js.map
