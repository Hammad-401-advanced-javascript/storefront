(this.webpackJsonpstorefront=this.webpackJsonpstorefront||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=n(2),l=(n(21),{products:[{name:"TV",category:"electronics",price:699,inStock:5,image:"https://lh3.googleusercontent.com/proxy/sVQhAsf0CQTG2DqgMg_ao_1a30cQJ_JcYWkPCcbXFm7eo5cwWn7OIN9w3LKbeqZ4GJ3Ibdhg-Vbkr4K-UQS7nbMC92DJ0G4a7rlkU_RV91WfWL29sJdU"},{name:"Radio",category:"electronics",price:99,inStock:15,image:"https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png"},{name:"Shirt",category:"clothing",price:9,inStock:25,image:"https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png"},{name:"Socks",category:"clothing",price:12,inStock:10,image:"https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png"},{name:"Apples",category:"food",price:.99,inStock:500,image:"https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png"},{name:"Eggs",category:"food",price:1.99,inStock:12,image:"https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png"},{name:"Bread",category:"food",price:2.39,inStock:90,image:"https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png"}]}),s={activate:function(e){return{type:"ACTIVATE",payload:e}}},p=Object(i.b)((function(e){return{products:e.products}}),s)((function(e){return r.a.createElement("section",null,e.products.products.map((function(e,t){return r.a.createElement("div",{key:t,className:"container"},r.a.createElement("p",null,e.image),r.a.createElement("h4",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:"!#"},"ADD TO CART"),r.a.createElement("a",{href:"!#"},"VIEW DETAILS"))})))})),g={categories:[{name:"electronics",displayName:"Elecronics",description:"electronics"},{name:"food",displayName:"Food",description:"food"},{name:"clothing",displayName:"Clothing",description:"clothing"}],activeCategory:""},u={activate:function(e){return{type:"ACTIVATE",payload:e}}},m=Object(i.b)((function(e){return{categories:e.categories,products:e.products}}),u)((function(e){return r.a.createElement("section",null,r.a.createElement("ul",null,e.categories.categories.map((function(t){return r.a.createElement("li",{onClick:function(){return e.activate(t.name)},key:t.name}," ",t.displayName," ")}))))}));var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"OUR STORE")))};var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{id:"footer"},r.a.createElement("h2",null,"\xa9 codeFellows")))};var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(f,null))},E=n(1),y=n(9),k=Object(E.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ACTIVATE":var r=e.products.filter((function(e){return e.category===a}));return{products:r};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ACTIVATE":var r,c=e.categories.map((function(e){return e.name===a&&(r=e.name),e}));return{categories:c,activeCategory:r};default:return e}}}),v=Object(E.createStore)(k,Object(y.composeWithDevTools)());function b(){return r.a.createElement(i.a,{store:v},r.a.createElement(h,null))}o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cf930057.chunk.js.map