(this["webpackJsonpbuy-here"]=this["webpackJsonpbuy-here"]||[]).push([[0],{37:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(15),s=c.n(n),i=c(2),o=c(25),l=c(17),u=(c(37),c(9)),d=c(26),j=c.n(d),b=c(6),m=c(3),h=c(18),O={cartQuantity:0,cartData:[]},f=Object(u.b)({name:"cart",initialState:O,reducers:{addToCart:function(e,t){e.cartQuantity++;var c=t.payload,a=e.cartData.find((function(e){return e.id===c.id}));a?a.quantity++:e.cartData=[].concat(Object(h.a)(e.cartData),[Object(m.a)(Object(m.a)({},c),{},{quantity:1})])},removeFromCart:function(e,t){var c=t.payload,a=c.id,r=c.removeCompletely,n=e.cartData.find((function(e){return e.id===a}));r?e.cartQuantity=e.cartQuantity-n.quantity:e.cartQuantity--,1===n.quantity||r?e.cartData=e.cartData.filter((function(e){return e.id!==a})):n.quantity--},reset:function(){return O}}}),x=f.actions,p=f.reducer,_={userInfo:{email:"",name:"",surname:"",phoneNumber:"",street:"",streetNumber:"",postCode:"",city:""},errors:{}},N=Object(u.b)({name:"checkout",initialState:_,reducers:{checkoutHandle:function(e,t){e.userInfo[t.payload.fieldName]=t.payload.userData},checkoutErrors:function(e,t){e.errors=t.payload},reset:function(){return _}}}),v=N.actions,g=N.reducer,y=Object(u.b)({name:"data",initialState:{data:[],productsToFetch:6,loading:!1,currProduct:{}},reducers:{fetchData:function(e,t){e.data=t.payload,e.loading=!1},fetchSingleProduct:function(e,t){e.currProduct=t.payload,e.loading=!1},updateProductsToFetch:function(e,t){e.productsToFetch=e.productsToFetch+t.payload},loadingData:function(e){e.loading=!0}}}),C=y.actions,k=y.reducer,w=Object(u.b)({name:"favorites",initialState:{favorites:[]},reducers:{addOrDelete:function(e,t){var c=t.payload,a=e.favorites.find((function(e){return e.id===c.id}));e.favorites=a?e.favorites.filter((function(e){return e.id!==c.id})):[].concat(Object(h.a)(e.favorites),[t.payload])}}}),F=w.actions,T=w.reducer,D=Object(u.b)({name:"messages",initialState:{message:null},reducers:{showMessage:function(e,t){var c=t.payload,a=c.status,r=c.title;e.message={status:a,title:r}},hideMessage:function(e){e.message=null}}}),M=D.actions,S=D.reducer,E={key:"root",storage:j.a,whitelist:["cart","favorites"]},P=Object(b.b)({cart:p,checkout:g,message:S,data:k,favorites:T}),I=Object(l.a)(E,P),q=Object(u.a)({reducer:I,middleware:function(e){return e({serializableCheck:!1})}}),B=c(5),H=c(4),U=c(10),z=c.n(U),L=c(14),R=function(e){return function(){var t=Object(L.a)(z.a.mark((function t(c,a){var r,n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e&&c(C.updateProductsToFetch(e)),r=function(){var e=Object(L.a)(z.a.mark((function e(){var t,c,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a().data.productsToFetch,e.next=3,fetch("https://fakestoreapi.com/products?limit=".concat(t));case 3:if((c=e.sent).ok){e.next=6;break}throw new Error("Can't fetch data!");case 6:return e.next=8,c.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c(C.loadingData()),t.prev=3,t.next=6,r();case 6:n=t.sent,c(C.fetchData(n)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),c(M.showMessage({status:"error",title:"Ups. We can't fetch data."}));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e,c){return t.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(L.a)(z.a.mark((function t(c){var a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){var t=Object(L.a)(z.a.mark((function t(){var c,a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fakestoreapi.com/products/".concat(e));case 2:if((c=t.sent).ok){t.next=5;break}throw new Error("Can't fetch data!");case 5:return t.next=7,c.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c(C.loadingData()),t.prev=2,t.next=5,a();case 5:r=t.sent,c(C.fetchSingleProduct(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),c(M.showMessage({status:"error",title:"Ups. We can't fetch that product."}));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)},X=function(e){return function(t){t(x.addToCart(e)),t(M.showMessage({status:"success",title:"Item was added to cart."})),setTimeout((function(){t(M.hideMessage())}),500)}},Y=function(e){return function(t){t(x.removeFromCart(e)),t(M.showMessage({status:"success",title:"Item was removed from cart."})),setTimeout((function(){t(M.hideMessage())}),500)}},J=function(e,t){return e.split("",t).reduce((function(e,c){return e.length===t-1?"".concat(e).concat(c,"..."):"".concat(e).concat(c)}),"")},W=c(0),K=function(e){var t=e.id,c=e.image,a=e.title,r=e.price,n=e.quantity,s=Object(i.b)(),o=J(a,25);return Object(W.jsx)("li",{className:"cartList__item",children:Object(W.jsxs)("div",{className:"userCart",children:[Object(W.jsx)("div",{className:"userCart__photo",children:Object(W.jsx)("img",{className:"userCart__photo__img",src:c,alt:a})}),Object(W.jsx)("p",{className:"userCart__name",children:o}),Object(W.jsxs)("div",{className:"userCart__quantity",children:[Object(W.jsx)("button",{className:"userCart__quantity__minus",value:"minus",onClick:function(){s(Y({id:t,removeCompletely:!1}))},children:"-"}),Object(W.jsx)("p",{className:"userCart__quantity__number",children:n}),Object(W.jsx)("button",{className:"userCart__quantity__add",value:"plus",onClick:function(){s(X({id:t}))},children:"+"})]}),Object(W.jsxs)("div",{className:"userCart__price",children:[Object(W.jsxs)("span",{className:"userCart__price__total",children:[(r*n).toFixed(2)," EUR"]}),Object(W.jsxs)("span",{className:"userCart__price__oneItem",children:["(",r," EUR / item)"]})]}),Object(W.jsx)("div",{className:"userCart__trash",onClick:function(){s(Y({id:t,removeCompletely:!0}))},children:Object(W.jsx)("i",{className:"fas fa-trash"})})]})})},V=function(){var e=Object(i.c)((function(e){return e.cart.cartData})),t=A(e).toFixed(2);return Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"cartContainer",children:[Object(W.jsx)("h1",{className:"cartContainer__header",children:"YOUR CART"}),e.length?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"cartContainer__cart",children:[Object(W.jsx)("ul",{className:"cartList",children:e.map((function(e){return Object(W.jsx)(K,Object(m.a)({},e),e.id)}))}),Object(W.jsxs)("div",{className:"cartSum",children:[Object(W.jsx)("p",{className:"cartSum__head",children:"Summary"}),Object(W.jsxs)("p",{className:"cartSum__totalPrice",children:[t," EUR"]})]})]}),Object(W.jsx)("div",{className:"cartContainer__btns",children:Object(W.jsx)(B.b,{to:"/checkout",className:"cartContainer__btns__btn",children:"Checkout"})})]}):Object(W.jsxs)("div",{className:"cartContainer__empty",children:["Ups. It's empty. ",Object(W.jsx)("i",{className:"far fa-frown"})]})]})})},G=c(19),Z=Object(H.h)((function(e){var t=e.children,c=e.location.pathname;return Object(a.useEffect)((function(){window.scrollTo({top:0,left:0})}),[c]),t||null})),$=function(){var e=Object(H.f)(),t=Object(a.useState)(5),c=Object(G.a)(t,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){var t=null;return r>0?t=setTimeout((function(){return n(r-1)}),1e3):e.push("/"),function(){return clearTimeout(t)}})),Object(W.jsxs)("div",{className:"confirmation",children:[Object(W.jsx)("h1",{className:"confirmation__header",children:"Thank you for shopping!"}),Object(W.jsxs)("h2",{className:"confirmation__redirect",children:["You will be redirected to the home page in"," ",Object(W.jsx)("span",{className:"confirmation__redirect__sec",children:r})," seconds."]})]})},ee=function(e){var t=e.dispatchFieldName,c=e.labelText,a=e.type,r=e.id,n=e.placeholder,s=e.error,o=e.state,l=Object(i.b)();return Object(W.jsxs)("div",{className:"checkout__inputsContainer",children:[Object(W.jsx)("label",{className:"checkout__inputsContainer__label",htmlFor:r,children:c}),Object(W.jsx)("input",{value:o,onChange:function(e){return l(v.checkoutHandle({fieldName:t,userData:"tel"===a?parseFloat(e.currentTarget.value,10)||"":e.currentTarget.value}))},className:"checkout__inputsContainer__input",name:r,id:r,type:a,placeholder:n}),s&&Object(W.jsx)("p",{className:"checkout__inputsContainer__err",children:s})]})};ee.defaultProps={type:"text"};var te=ee,ce=function(e){return/\d/.test(e)},ae=function(e){var t={};return(e.name.length<3||ce(e.name))&&(t=Object(m.a)(Object(m.a)({},t),{},{name:"Field must contain min. 3 characters (cannot be numbers)"})),(e.surname.length<3||ce(e.surname))&&(t=Object(m.a)(Object(m.a)({},t),{},{surname:"Field must contain min. 3 characters (cannot be numbers)"})),(e.street.length<2||ce(e.street))&&(t=Object(m.a)(Object(m.a)({},t),{},{street:"Field must contain min. 2 characters (cannot be numbers)"})),e.streetNumber.length<=0&&(t=Object(m.a)(Object(m.a)({},t),{},{streetNumber:"Field can't be empty"})),(e.city.length<3||ce(e.city))&&(t=Object(m.a)(Object(m.a)({},t),{},{city:"Field must contain min. 3 characters (cannot be numbers)"})),(5!==e.postCode.toString().length||isNaN(e.postCode))&&(t=Object(m.a)(Object(m.a)({},t),{},{postCode:"Field must contain 5 numbers (XXXXX)"})),(e.phoneNumber.toString().length<8||isNaN(e.phoneNumber))&&(t=Object(m.a)(Object(m.a)({},t),{},{phoneNumber:"Field must contain min. 8 characters (only numbers)"})),e.email.length<5&&e.email.indexOf("@")<0&&(t=Object(m.a)(Object(m.a)({},t),{},{email:"Field must contain '@' and min. 5 characters"})),t},re=function(){var e=Object(i.b)(),t=Object(a.useState)(!1),c=Object(G.a)(t,2),r=c[0],n=c[1],s=Object(i.c)((function(e){return e.checkout.userInfo})),o=Object(i.c)((function(e){return e.checkout.errors})),l=Object(i.c)((function(e){return e.cart.cartData})),u=A(l).toFixed(2),d=s.email,j=s.name,b=s.surname,m=s.phoneNumber,h=s.street,O=s.streetNumber,f=s.postCode,p=s.city;return Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:"checkoutContainer",children:Object(W.jsxs)("form",{className:"checkout",onSubmit:function(t){t.preventDefault(),0===Object.keys(ae(s)).length?(n(!0),e(x.reset()),e(v.reset())):(!function(e){var t,c=Object.keys(e).map((function(e){return document.getElementsByName(e)[0]})).filter((function(e){return!!e}));c.sort((function(e,t){return t.scrollHeight-e.scrollHeight})),null===(t=c[0])||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center"})}(ae(s)),e(v.checkoutErrors(ae(s))))},children:[Object(W.jsxs)("div",{className:"checkout__section",children:[r&&Object(W.jsx)($,{}),Object(W.jsx)("h1",{className:"checkout__section__header",children:"Checkout"}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"name",labelText:"Name",id:"name",state:j,error:o.name}),Object(W.jsx)(te,{dispatchFieldName:"surname",labelText:"Surname",id:"surname",state:b,error:o.surname})]}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"street",labelText:"Street",id:"street",state:h,error:o.street}),Object(W.jsx)(te,{dispatchFieldName:"streetNumber",labelText:"Number",id:"streetNumber",state:O,error:o.streetNumber,type:"tel"})]}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"postCode",labelText:"post Code",id:"postCode",state:f,error:o.postCode,type:"tel"}),Object(W.jsx)(te,{dispatchFieldName:"city",labelText:"City",id:"city",state:p,error:o.city})]}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"phoneNumber",labelText:"phone number",id:"phoneNumber",state:m,error:o.phoneNumber,type:"tel"}),Object(W.jsx)(te,{dispatchFieldName:"email",labelText:"email",id:"email",state:d,error:o.email})]})]}),!r&&Object(W.jsxs)("button",{className:"checkout__btn",children:["Confirm & Pay",Object(W.jsxs)("span",{className:"checkout__btn__price",children:["(",u," EUR)"]})]})]})})})},ne=function(){var e=Object(i.c)((function(e){return e.cart.cartQuantity})),t=Object(i.c)((function(e){return e.favorites.favorites})),c=0!==e&&Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"headerItem__circle",children:e})}),a=0!==t.length&&Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"headerItem__circle",children:t.length})});return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"headerItem",children:Object(W.jsxs)(B.b,{className:"headerItem__link",to:"/favorites",children:[Object(W.jsx)("i",{className:"fas fa-star"}),a]})}),Object(W.jsx)("div",{className:"headerItem",children:Object(W.jsxs)(B.b,{className:"headerItem__link",to:"/cart",children:[Object(W.jsx)("i",{className:"fas fa-shopping-cart"}),c]})})]})},se=function(){return Object(W.jsx)("div",{className:"logo",children:Object(W.jsxs)(B.b,{className:"logo__txt",to:"/",children:["buy",Object(W.jsx)("span",{className:"logo__txt--color",children:"Here"}),"!"]})})},ie=function(){var e,t=Object(i.c)((function(e){return e.message.message})),c=t.status,a=t.title;return e="error"===c?"messages__error":"messages__success",Object(W.jsx)("ul",{className:"messages ".concat(e),children:Object(W.jsx)("li",{className:"messages__title",children:a})})},oe=function(){var e=Object(i.c)((function(e){return e.message.message}));return Object(W.jsxs)("header",{className:"header",children:[Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"headerContainer",children:[Object(W.jsx)(se,{}),Object(W.jsx)("div",{className:"headerContainer",children:Object(W.jsx)(ne,{})})]})}),e&&Object(W.jsx)(ie,{})]})},le=function(){return Object(W.jsx)("footer",{className:"footer",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:"footer__container",children:Object(W.jsxs)("div",{className:"aboutMe",children:[Object(W.jsx)("p",{className:"aboutMe__contact",children:"Contact"}),Object(W.jsxs)("ul",{className:"aboutMe-list",children:[Object(W.jsx)("li",{className:"aboutMe__data",children:Object(W.jsxs)("a",{className:"aboutMe__data__link",href:"https://github.com/oszi91",target:"_blank",rel:"noopener noreferrer",children:[Object(W.jsx)("i",{className:"fab fa-github"}),"Oszi91"]})}),Object(W.jsx)("li",{className:"aboutMe__data",children:Object(W.jsxs)("a",{className:"aboutMe__data__link",href:"mailto:oszywapawel@gmail.com",children:[Object(W.jsx)("i",{className:"fas fa-envelope"}),"oszywapawel@gmail.com"]})}),Object(W.jsx)("li",{className:"aboutMe__data",children:Object(W.jsxs)("a",{className:"aboutMe__data__link",href:"https://www.linkedin.com/in/pawel-oszywa",target:"_blank",rel:"noopener noreferrer",children:[Object(W.jsx)("i",{className:"fab fa-linkedin"}),"PawelOszywa"]})})]})]})})})})},ue=function(e){var t=e.addToCartHandle;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("button",{className:"productBtn",onClick:t,children:["Add ",Object(W.jsx)("i",{className:"fas fa-plus-circle"})]})})},de=function(e){var t,c=e.addOrDelete,a=e.id;return t=Object(i.c)((function(e){return e.favorites.favorites.find((function(e){return e.id===a}))}))?"fas fa-star":"far fa-star",Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("button",{className:"addToFav",onClick:c,children:Object(W.jsx)("i",{className:t})})})},je=function(e){var t=e.image,c=e.title,a=e.price,r=e.description;return Object(W.jsxs)("div",{className:"product",children:[Object(W.jsx)("div",{className:"product__photo",children:Object(W.jsx)("img",{className:"product__photo__img",src:t,alt:c})}),Object(W.jsx)("h2",{className:"product__name",children:c}),r&&Object(W.jsx)("h3",{className:"product__desc",children:r}),Object(W.jsxs)("h4",{className:"product__price",children:[a," EUR"]})]})},be=function(e){var t=e.id,c=e.image,a=e.title,r=e.price,n=Object(i.b)(),s=J(a,25),o={id:t,image:c,title:a,price:r,quantity:0};return Object(W.jsxs)("li",{className:"productsList__item",children:[Object(W.jsx)(B.b,{to:"/".concat(t),children:Object(W.jsx)(je,{image:c,title:s,price:r})}),Object(W.jsx)(ue,{addToCartHandle:function(){n(X(o))}}),Object(W.jsx)(de,{addOrDelete:function(){n(F.addOrDelete(o))},id:t})]})},me=function(e){var t=e.id,c=Object(i.c)((function(e){return e.data.data})).filter((function(e){return e.id!==t})).map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})).slice(0,3);return Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"checkAlsoProducts",children:[Object(W.jsxs)("h1",{className:"checkAlsoProducts__header",children:["CHECK ALSO ",Object(W.jsx)("i",{className:"fas fa-chevron-circle-down"})]}),Object(W.jsx)("ul",{className:"productsList",children:c.map((function(e){return Object(W.jsx)(be,Object(m.a)({},e),e.id)}))})]})})},he=function(){return Object(W.jsx)("section",{className:"loading",children:Object(W.jsx)("div",{className:"loading__spinner"})})},Oe=function(e){var t=e.id,c=Object(i.b)(),a=function(e){c(Q(e))},r={next:t+1,prev:t-1},n=r.prev<=0?null:r.prev,s=r.next>20?null:r.next;return Object(W.jsxs)(W.Fragment,{children:[s&&Object(W.jsxs)(B.b,{onClick:function(){return a(r.next)},className:"navBtn navBtn__next",to:"/".concat(r.next),children:["Next ",Object(W.jsx)("i",{className:"fas fa-arrow-circle-right"})]}),n&&Object(W.jsxs)(B.b,{onClick:function(){return a(r.prev)},className:"navBtn navBtn__prev",to:"/".concat(r.prev),children:[Object(W.jsx)("i",{className:"fas fa-arrow-circle-left"})," Prev"]})]})},fe=function(){var e=Object(H.g)().id,t=Object(i.b)(),c=Object(i.c)((function(e){return e.data.data})),r=Object(i.c)((function(e){return e.data.currProduct})),n=Object(i.c)((function(e){return e.data.loading})),s=r.title,o=r.description,l=r.price,u=r.image,d=r.category,j=Number(e);Object(a.useEffect)((function(){t(Q(j))}),[t,j]);var b={id:j,image:u,title:s,price:l,quantity:0};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"oneProductBigConatainer",children:Object(W.jsxs)("div",{className:"oneProductBig",children:[!n&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(je,{title:s,description:o,price:l,image:u}),Object(W.jsx)(ue,{addToCartHandle:function(){t(X(b))}}),Object(W.jsx)(de,{addOrDelete:function(){t(F.addOrDelete(b))},id:j}),Object(W.jsx)(Oe,{id:j})]}),n&&Object(W.jsx)(he,{})]})}),Object(W.jsx)(me,{category:d,data:c})]})},xe=function(e){var t=e.data,c=e.loading;return Object(W.jsx)("main",{className:"productsContainer",children:Object(W.jsxs)("ul",{className:"productsList",children:[t.map((function(e){return Object(W.jsx)(be,Object(m.a)({},e),e.id)})),c&&Object(W.jsx)(he,{})]})})},pe=function(e){var t=e.updateProducts,c=e.showBtn;return Object(W.jsx)(W.Fragment,{children:c&&Object(W.jsx)("div",{className:"loadMore",children:Object(W.jsx)("button",{className:"loadMore__btn",onClick:t,children:"Load more"})})})},_e=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.data.data})),c=Object(i.c)((function(e){return e.data.loading})),a=Object(i.c)((function(e){return e.data.productsToFetch}))<=t.length,r=function(){e(R(6))};return Object(W.jsxs)("div",{className:"container",children:[Object(W.jsx)(xe,{data:t,loading:c}),Object(W.jsx)(pe,{updateProducts:function(){return e(r)},showBtn:a})]})},Ne=function(){var e=Object(i.c)((function(e){return e.favorites.favorites}));return Object(W.jsx)("div",{className:"container",children:e.length?Object(W.jsx)(xe,{data:e}):Object(W.jsx)("div",{className:"favoritesEmptyContainer",children:Object(W.jsxs)("div",{className:"favoritesEmpty",children:["You don't have any favorite products."," ",Object(W.jsx)("i",{className:"far fa-frown"})]})})})},ve=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(R())}),[e]),Object(W.jsx)(B.a,{children:Object(W.jsxs)(Z,{children:[Object(W.jsx)(oe,{}),Object(W.jsxs)(H.c,{children:[Object(W.jsx)(H.a,{exact:!0,path:"/",component:_e}),Object(W.jsx)(H.a,{exact:!0,path:"/cart",component:V}),Object(W.jsx)(H.a,{exact:!0,path:"/favorites",component:Ne}),Object(W.jsx)(H.a,{exact:!0,path:"/checkout",component:re}),Object(W.jsx)(H.a,{path:"/:id",component:fe})]}),Object(W.jsx)(le,{})]})})},ge=Object(l.b)(q);s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(i.a,{store:q,children:Object(W.jsx)(o.a,{loading:Object(W.jsx)(he,{}),persistor:ge,children:Object(W.jsx)(ve,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.7755ab7d.chunk.js.map