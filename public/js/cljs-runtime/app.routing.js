goog.provide('app.routing');
app.routing.navigate = (function app$routing$navigate(path){
var new_content_15564 = app.routingconfig.route_component_map(path);
cljs.core.reset_BANG_(app.state.current_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_content_15564], null));

return window.history.pushState(null,"",path);
});

//# sourceMappingURL=app.routing.js.map
