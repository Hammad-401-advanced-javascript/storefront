(this.webpackJsonpstorefront=this.webpackJsonpstorefront||[]).push([[0],{38:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),o=a.n(c),i=a(11),l=(a(48),a(79)),u=a(80),m=a(76),s=a(75),p=a(74),d=a(73),E=a(21),g=a(72),f=Object(i.b)((function(e){return{categories:e.categories}}))((function(e){return n.a.createElement(g.a,{maxWidth:"md",component:"main"},e.categories.products.map((function(t,a){if(t.category===e.categories.activeCategory)return n.a.createElement(d.a,null,n.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(u.a,null,n.a.createElement(p.a,{title:t.name,titleTypographyProps:{align:"center"}}),n.a.createElement(s.a,null,n.a.createElement(E.a,{variant:"h5",color:"textPrimary"},"Category: ",t.category),n.a.createElement(E.a,{variant:"h5",color:"textPrimary"},"Price: ",t.price,"$"),n.a.createElement(E.a,{variant:"h5",color:"textPrimary"},"inStock: ",t.inStock)),n.a.createElement(m.a,null,n.a.createElement(l.a,{variant:"outlined",color:"primary"},"ADD TO CART"),n.a.createElement(l.a,{variant:"outlined",color:"primary"},"VIEW DETAILS")))))})))})),y={categories:[{name:"electronics",displayName:"Elecronics",description:"electronics"},{name:"food",displayName:"Food",description:"food"},{name:"clothing",displayName:"Clothing",description:"clothing"}],products:[{name:"TV",category:"electronics",price:699,inStock:5},{name:"Radio",category:"electronics",price:99,inStock:15},{name:"Shirt",category:"clothing",price:9,inStock:25},{name:"Socks",category:"clothing",price:12,inStock:10},{name:"Apples",category:"food",price:.99,inStock:500},{name:"Eggs",category:"food",price:1.99,inStock:12},{name:"Bread",category:"food",price:2.39,inStock:90}],activeCategory:"food"},v={activate:function(e){return{type:"ACTIVATE",payload:e}}},h=Object(i.b)((function(e){return{categories:e.categories}}),v)((function(e){return n.a.createElement("section",null,n.a.createElement("ul",null,e.categories.categories.map((function(t){return n.a.createElement("li",{onClick:function(){return e.activate(t.name)},key:t.name}," ",t.displayName," ")}))))})),k=a(77),b=Object(i.b)((function(e){return{cart:e.cart}}))((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("h1",null,"OUR STORE"),n.a.createElement(k.a,{className:"a",color:"primary"},"CART (",e.cart.count,")")))}));var C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{id:"footer"},n.a.createElement("h2",null,"\xa9 codeFellows")))},O=a(35),S=a(34),T={products:[],count:0},A={remove:function(e){return{type:"REMOVE",payload:e}}},j=Object(i.b)((function(e){return{cart:e.cart}}),A)((function(e){return n.a.createElement("div",{className:"cart"},e.cart.products.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement(k.a,{className:"a",color:"primary",onClick:function(){return e.add(t)}},t),n.a.createElement(l.a,{onClick:function(){return e.remove(t)}},"x"))})))})),R=a(78);var x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(R.a,null,n.a.createElement(b,null),n.a.createElement(j,null),n.a.createElement(h,null),n.a.createElement(f,null),n.a.createElement(C,null)))},N=a(13),D=a(33),V=Object(N.combineReducers)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"ACTIVATE":return e.activeCategory=r,{categories:e.categories,products:e.products,activeCategory:e.activeCategory};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"ADD":return{products:[].concat(Object(S.a)(e.products),[r]),count:e.count+1};case"REMOVE":var n=Object(O.a)({},e),c=n.products.filter((function(e){if(r!==e)return e}));return{products:c,count:e.count-1};default:return e}}}),w=Object(N.createStore)(V,Object(D.composeWithDevTools)());function F(){return n.a.createElement(i.a,{store:w},n.a.createElement(x,null))}o.a.render(n.a.createElement(F,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.eea83ff5.chunk.js.map