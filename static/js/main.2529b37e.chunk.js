(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(31),r=a.n(l),i=(a(41),a(13)),o=a(12),s=a(4),m=a(5),u=a(7),p=a(6),h=a(8),d=a(15),E=a.n(d),b=a(32),f=a.n(b),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={recipe:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.edamam.com/search?q=icecream&app_id=".concat("ed3de50e","&app_key=").concat("ac0727b9ef7767420b1267545d421144")).then((function(t){console.log(t.data.hits),e.setState({recipe:t.data.hits})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"Main"},this.state.recipe.map((function(e){return c.a.createElement("div",{className:"child",key:e.recipe.label},c.a.createElement(f.a,{top:!0,right:!0},c.a.createElement("div",{className:"details"},c.a.createElement("h4",null,e.recipe.source),c.a.createElement("img",{src:e.recipe.image,alt:"img-recipe"}),c.a.createElement(i.b,{to:"Details/".concat(e.recipe.label)},c.a.createElement("p",{className:"url"},e.recipe.label)))))})))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Moses Codes  |  2020"))}}]),t}(n.Component),O=a(35),j=a.n(O),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(j.a,null,c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("h3",null,"Recipe Book")))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav2"},c.a.createElement("h3",null,c.a.createElement("span",null," HOME ")," | Recipe Book"),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(i.b,{to:"/"},c.a.createElement("li",null,"Home")),c.a.createElement(i.b,{to:"/search"},c.a.createElement("li",null,"Searches")))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getRecipe=function(e){e.preventDefault();var t=e.target.elements.RecipeName.value;E.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("ed3de50e","&app_key=").concat("ac0727b9ef7767420b1267545d421144")).then((function(e){console.log(e.data.hits),a.setState({searched:e.data.hits})})).catch((function(e){console.log(e)}))},a.state={searched:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"search"},c.a.createElement("h3",null,"Search recipe of your own favorite"),c.a.createElement("br",null),c.a.createElement("form",{onSubmit:this.getRecipe},c.a.createElement("input",{type:"text",name:"RecipeName"}),c.a.createElement("button",{type:"submit"},"Search"))),c.a.createElement("div",{className:"Main2"},this.state.searched.map((function(e){return c.a.createElement("div",{className:"child",key:e.recipe.label},c.a.createElement("div",{className:"details"},c.a.createElement("h4",null,e.recipe.label),c.a.createElement("img",{src:e.recipe.image,alt:"img-recipe"}),c.a.createElement("p",null,"Food Source :",e.recipe.source),c.a.createElement("p",null,"Yield : ",e.recipe.yield),c.a.createElement("p",null,"calories : ",e.recipe.calories)))}))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={Single:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.edamam.com/search?q=".concat(this.props.match.params.label,"&app_id=").concat("ed3de50e","&app_key=").concat("ac0727b9ef7767420b1267545d421144")).then((function(t){console.log(t.data.hits),e.setState({Single:t.data.hits})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"Main2"},this.state.Single.map((function(e){return c.a.createElement("div",{className:"child",key:e.recipe.label},c.a.createElement("div",{className:"details"},c.a.createElement("h4",null,e.recipe.label),c.a.createElement("img",{src:e.recipe.image,alt:"img-recipe"}),c.a.createElement("p",null,"Food Source :",e.recipe.source),c.a.createElement("p",null,"Yield : ",e.recipe.yield),c.a.createElement("p",null,"calories : ",e.recipe.calories),c.a.createElement("p",null,"Yield : ",e.recipe.yield),c.a.createElement("p",null,"ingredients : ",e.recipe.ingredients.map((function(e){return c.a.createElement("li",{key:e.id},e.text)})))))})))}}]),t}(n.Component);a(65);var w=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(y,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:v}),c.a.createElement(o.a,{path:"/Search",component:N}),c.a.createElement(o.a,{path:"/Details/:id",component:S})),c.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.2529b37e.chunk.js.map