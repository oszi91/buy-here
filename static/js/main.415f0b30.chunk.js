(this["webpackJsonpbuy-here"]=this["webpackJsonpbuy-here"]||[]).push([[0],{37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(15),s=a.n(n),i=a(2),o=a(25),l=a(17),u=(a(37),a(9)),d=a(26),j=a.n(d),b=a(5),m=a(3),h=a(18),O={cartQuantity:0,cartData:[]},f=Object(u.b)({name:"cart",initialState:O,reducers:{addToCart:function(e,t){e.cartQuantity++;var a=t.payload,c=e.cartData.find((function(e){return e.id===a.id}));c?c.quantity++:e.cartData=[].concat(Object(h.a)(e.cartData),[Object(m.a)(Object(m.a)({},a),{},{quantity:1})])},removeFromCart:function(e,t){var a=t.payload,c=a.id,r=a.removeCompletely,n=e.cartData.find((function(e){return e.id===c}));r?e.cartQuantity=e.cartQuantity-n.quantity:e.cartQuantity--,1===n.quantity||r?e.cartData=e.cartData.filter((function(e){return e.id!==c})):n.quantity--},reset:function(){return O}}}),p=f.actions,x=f.reducer,_={userInfo:{email:"",name:"",surname:"",phoneNumber:"",street:"",streetNumber:"",postCode:"",city:""},errors:{}},N=Object(u.b)({name:"checkout",initialState:_,reducers:{checkoutHandle:function(e,t){e.userInfo[t.payload.fieldName]=t.payload.userData},checkoutErrors:function(e,t){e.errors=t.payload},reset:function(){return _}}}),v=N.actions,g=N.reducer,y=Object(u.b)({name:"data",initialState:{data:[],productsToFetch:6,loading:!1,currProduct:{}},reducers:{fetchData:function(e,t){e.data=t.payload,e.loading=!1},fetchSingleProduct:function(e,t){e.currProduct=t.payload,e.loading=!1},updateProductsToFetch:function(e,t){e.productsToFetch=e.productsToFetch+t.payload},loadingData:function(e){e.loading=!0}}}),C=y.actions,k=y.reducer,w=Object(u.b)({name:"favorites",initialState:{favorites:[]},reducers:{addOrDelete:function(e,t){var a=t.payload,c=e.favorites.find((function(e){return e.id===a.id}));e.favorites=c?e.favorites.filter((function(e){return e.id!==a.id})):[].concat(Object(h.a)(e.favorites),[t.payload])}}}),F=w.actions,T=w.reducer,D=Object(u.b)({name:"messages",initialState:{message:null},reducers:{showMessage:function(e,t){var a=t.payload,c=a.status,r=a.title;e.message={status:c,title:r}},hideMessage:function(e){e.message=null}}}),M=D.actions,S=D.reducer,P={key:"root",storage:j.a,whitelist:["cart","favorites"]},E=Object(b.b)({cart:x,checkout:g,message:S,data:k,favorites:T}),I=Object(l.a)(P,E),q=Object(u.a)({reducer:I,middleware:function(e){return e({serializableCheck:!1})}}),B=a(6),U=a(4),z=a(10),H=a.n(z),L=a(14),R=function(e){return function(){var t=Object(L.a)(H.a.mark((function t(a,c){var r,n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e&&a(C.updateProductsToFetch(e)),r=function(){var e=Object(L.a)(H.a.mark((function e(){var t,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c().data.productsToFetch,e.next=3,fetch("https://fakestoreapi.com/products?limit=".concat(t));case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Can't fetch data!");case 6:return e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a(C.loadingData()),t.prev=3,t.next=6,r();case 6:n=t.sent,a(C.fetchData(n)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),a(M.showMessage({status:"error",title:"Ups. We can't fetch data."}));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e,a){return t.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(L.a)(H.a.mark((function t(a){var c,r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(L.a)(H.a.mark((function t(){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fakestoreapi.com/products/".concat(e));case 2:if((a=t.sent).ok){t.next=5;break}throw new Error("Can't fetch data!");case 5:return t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a(C.loadingData()),t.prev=2,t.next=5,c();case 5:r=t.sent,a(C.fetchSingleProduct(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a(M.showMessage({status:"error",title:"Ups. We can't fetch that product."}));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)},X=function(e){return function(t){t(p.addToCart(e)),t(M.showMessage({status:"success",title:"Item was added to cart."})),setTimeout((function(){t(M.hideMessage())}),500)}},Y=function(e){return function(t){t(p.removeFromCart(e)),t(M.showMessage({status:"success",title:"Item was removed from cart."})),setTimeout((function(){t(M.hideMessage())}),500)}},J=function(e,t){return e.split("",t).reduce((function(e,a){return e.length===t-1?"".concat(e).concat(a,"..."):"".concat(e).concat(a)}),"")},W=a(0),K=function(e){var t=e.id,a=e.image,c=e.title,r=e.price,n=e.quantity,s=Object(i.b)(),o=J(c,25);return Object(W.jsx)("li",{className:"cartList__item",children:Object(W.jsxs)("div",{className:"userCart",children:[Object(W.jsx)("div",{className:"userCart__photo",children:Object(W.jsx)("img",{className:"userCart__photo__img",src:a,alt:c})}),Object(W.jsx)("p",{className:"userCart__name",children:o}),Object(W.jsxs)("div",{className:"userCart__quantity",children:[Object(W.jsx)("button",{className:"userCart__quantity__minus",value:"minus",onClick:function(){s(Y({id:t,removeCompletely:!1}))},children:"-"}),Object(W.jsx)("p",{className:"userCart__quantity__number",children:n}),Object(W.jsx)("button",{className:"userCart__quantity__add",value:"plus",onClick:function(){s(X({id:t}))},children:"+"})]}),Object(W.jsxs)("div",{className:"userCart__price",children:[Object(W.jsxs)("span",{className:"userCart__price__total",children:[(r*n).toFixed(2)," EUR"]}),Object(W.jsxs)("span",{className:"userCart__price__oneItem",children:["(",r," EUR / item)"]})]}),Object(W.jsx)("div",{className:"userCart__trash",onClick:function(){s(Y({id:t,removeCompletely:!0}))},children:Object(W.jsx)("i",{className:"fas fa-trash"})})]})})},G=function(){var e=Object(i.c)((function(e){return e.cart.cartData})),t=A(e).toFixed(2);return Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"cartContainer",children:[Object(W.jsx)("h1",{className:"cartContainer__header",children:"YOUR CART"}),e.length?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"cartContainer__cart",children:[Object(W.jsx)("ul",{className:"cartList",children:e.map((function(e){return Object(W.jsx)(K,Object(m.a)({},e),e.id)}))}),Object(W.jsxs)("div",{className:"cartSum",children:[Object(W.jsx)("p",{className:"cartSum__head",children:"Summary"}),Object(W.jsxs)("p",{className:"cartSum__totalPrice",children:[t," EUR"]})]})]}),Object(W.jsx)("div",{className:"cartContainer__btns",children:Object(W.jsx)(B.b,{to:"/checkout",className:"cartContainer__btns__btn",children:"Checkout"})})]}):Object(W.jsxs)("div",{className:"cartContainer__empty",children:["Ups. It's empty. ",Object(W.jsx)("i",{className:"far fa-frown"})]})]})})},V=a(19),Z=Object(U.h)((function(e){var t=e.children,a=e.location.pathname;return Object(c.useEffect)((function(){window.scrollTo({top:0,left:0})}),[a]),t||null})),$=function(){var e=Object(U.f)(),t=Object(c.useState)(5),a=Object(V.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){var t=null;return r>0?t=setTimeout((function(){return n(r-1)}),1e3):e.push("/"),function(){return clearTimeout(t)}})),Object(W.jsxs)("div",{className:"confirmation",children:[Object(W.jsx)("h1",{className:"confirmation__header",children:"Thank you for shopping!"}),Object(W.jsxs)("h2",{className:"confirmation__redirect",children:["You will be redirected to the home page in"," ",Object(W.jsx)("span",{className:"confirmation__redirect__sec",children:r})," seconds."]})]})},ee=function(e){var t=e.dispatchFieldName,a=e.labelText,c=e.type,r=e.id,n=e.placeholder,s=e.error,o=e.state,l=Object(i.b)();return Object(W.jsxs)("div",{className:"checkout__inputsContainer",children:[Object(W.jsx)("label",{className:"checkout__inputsContainer__label",htmlFor:r,children:a}),Object(W.jsx)("input",{value:o,onChange:function(e){return l(v.checkoutHandle({fieldName:t,userData:"tel"===c?parseFloat(e.currentTarget.value,10)||"":e.currentTarget.value}))},className:"checkout__inputsContainer__input",name:r,id:r,type:c,placeholder:n}),s&&Object(W.jsx)("p",{className:"checkout__inputsContainer__err",children:s})]})};ee.defaultProps={type:"text"};var te=ee,ae=function(e){return/\d/.test(e)},ce=function(e){var t={};return(e.name.length<3||ae(e.name))&&(t=Object(m.a)(Object(m.a)({},t),{},{name:"Field must contain min. 3 characters (cannot be numbers)"})),(e.surname.length<3||ae(e.surname))&&(t=Object(m.a)(Object(m.a)({},t),{},{surname:"Field must contain min. 3 characters (cannot be numbers)"})),(e.street.length<2||ae(e.street))&&(t=Object(m.a)(Object(m.a)({},t),{},{street:"Field must contain min. 2 characters (cannot be numbers)"})),e.streetNumber.length<=0&&(t=Object(m.a)(Object(m.a)({},t),{},{streetNumber:"Field can't be empty"})),(e.city.length<3||ae(e.city))&&(t=Object(m.a)(Object(m.a)({},t),{},{city:"Field must contain min. 3 characters (cannot be numbers)"})),(5!==e.postCode.toString().length||isNaN(e.postCode))&&(t=Object(m.a)(Object(m.a)({},t),{},{postCode:"Field must contain 5 numbers (XXXXX)"})),(e.phoneNumber.toString().length<8||isNaN(e.phoneNumber))&&(t=Object(m.a)(Object(m.a)({},t),{},{phoneNumber:"Field must contain min. 8 characters (only numbers)"})),e.email.length<5&&e.email.indexOf("@")<0&&(t=Object(m.a)(Object(m.a)({},t),{},{email:"Field must contain '@' and min. 5 characters"})),t},re=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),a=Object(V.a)(t,2),r=a[0],n=a[1],s=Object(i.c)((function(e){return e.checkout.userInfo})),o=Object(i.c)((function(e){return e.checkout.errors})),l=Object(i.c)((function(e){return e.cart.cartData})),u=A(l).toFixed(2),d=s.email,j=s.name,b=s.surname,m=s.phoneNumber,h=s.street,O=s.streetNumber,f=s.postCode,x=s.city;return Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:"checkoutContainer",children:Object(W.jsxs)("form",{className:"checkout",onSubmit:function(t){t.preventDefault(),0===Object.keys(ce(s)).length?(n(!0),e(p.reset()),e(v.reset())):(window.scrollTo(0,0),e(v.checkoutErrors(ce(s))))},children:[Object(W.jsxs)("div",{className:"checkout__section",children:[r&&Object(W.jsx)($,{}),Object(W.jsx)("h1",{className:"checkout__section__header",children:"Checkout"}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"name",labelText:"Name",id:"name",state:j,error:o.name}),Object(W.jsx)(te,{dispatchFieldName:"surname",labelText:"Surname",id:"surname",state:b,error:o.surname})]}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"street",labelText:"Street",id:"street",state:h,error:o.street}),Object(W.jsx)(te,{dispatchFieldName:"streetNumber",labelText:"Number",id:"streetNumber",state:O,error:o.streetNumber,type:"tel"})]}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"postCode",labelText:"post Code",id:"postCode",state:f,error:o.postCode,type:"tel"}),Object(W.jsx)(te,{dispatchFieldName:"city",labelText:"City",id:"city",state:x,error:o.city})]}),Object(W.jsxs)("div",{className:"checkout__container__2inputs",children:[Object(W.jsx)(te,{dispatchFieldName:"phoneNumber",labelText:"phone number",id:"phoneNumber",state:m,error:o.phoneNumber,type:"tel"}),Object(W.jsx)(te,{dispatchFieldName:"email",labelText:"email",id:"email",state:d,error:o.email})]})]}),!r&&Object(W.jsxs)("button",{className:"checkout__btn",children:["Confirm & Pay",Object(W.jsxs)("span",{className:"checkout__btn__price",children:["(",u," EUR)"]})]})]})})})},ne=function(){var e,t=Object(i.c)((function(e){return e.message.message})),a=t.status,c=t.title;return e="error"===a?"messages__error":"messages__success",Object(W.jsx)("ul",{className:"messages ".concat(e),children:Object(W.jsx)("li",{className:"messages__title",children:c})})},se=function(){var e=Object(i.c)((function(e){return e.cart.cartQuantity})),t=Object(i.c)((function(e){return e.message.message})),a=Object(i.c)((function(e){return e.favorites.favorites})),c=0!==e&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("p",{className:"headerItem__placeholder"}),Object(W.jsx)("p",{className:"headerItem__quantity",children:e})]}),r=0!==a.length&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("p",{className:"headerItem__placeholder"}),Object(W.jsx)("p",{className:"headerItem__quantity",children:a.length})]});return Object(W.jsxs)("header",{className:"header",children:[Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"headerContainer",children:[Object(W.jsx)("div",{className:"logo",children:Object(W.jsxs)(B.b,{className:"logo__txt",to:"/",children:["buy",Object(W.jsx)("span",{className:"logo__txt--color",children:"Here"}),"!"]})}),Object(W.jsxs)("div",{className:"headerContainer",children:[Object(W.jsx)("div",{className:"headerItem",children:Object(W.jsxs)(B.b,{className:"headerItem__link",to:"/favorites",children:[Object(W.jsx)("i",{className:"fas fa-star"}),r]})}),Object(W.jsx)("div",{className:"headerItem",children:Object(W.jsxs)(B.b,{className:"headerItem__link",to:"/cart",children:[Object(W.jsx)("i",{className:"fas fa-shopping-cart"}),c]})})]})]})}),t&&Object(W.jsx)(ne,{})]})},ie=function(){return Object(W.jsx)("footer",{className:"footer",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:"footer__container",children:Object(W.jsxs)("div",{className:"aboutMe",children:[Object(W.jsx)("p",{className:"aboutMe__contact",children:"Contact"}),Object(W.jsxs)("ul",{className:"aboutMe-list",children:[Object(W.jsx)("li",{className:"aboutMe__data",children:Object(W.jsxs)("a",{className:"aboutMe__data__link",href:"https://github.com/oszi91",target:"_blank",rel:"noopener noreferrer",children:[Object(W.jsx)("i",{className:"fab fa-github"}),"Oszi91"]})}),Object(W.jsx)("li",{className:"aboutMe__data",children:Object(W.jsxs)("a",{className:"aboutMe__data__link",href:"mailto:oszywapawel@gmail.com",children:[Object(W.jsx)("i",{className:"fas fa-envelope"}),"oszywapawel@gmail.com"]})}),Object(W.jsx)("li",{className:"aboutMe__data",children:Object(W.jsxs)("a",{className:"aboutMe__data__link",href:"https://www.linkedin.com/in/pawel-oszywa",target:"_blank",rel:"noopener noreferrer",children:[Object(W.jsx)("i",{className:"fab fa-linkedin"}),"PawelOszywa"]})})]})]})})})})},oe=function(e){var t=e.addToCartHandle;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("button",{className:"productBtn",onClick:t,children:["Add ",Object(W.jsx)("i",{className:"fas fa-plus-circle"})]})})},le=function(e){var t,a=e.addOrDelete,c=e.id;return t=Object(i.c)((function(e){return e.favorites.favorites.find((function(e){return e.id===c}))}))?"fas fa-star":"far fa-star",Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("button",{className:"addToFav",onClick:a,children:Object(W.jsx)("i",{className:t})})})},ue=function(e){var t=e.image,a=e.title,c=e.price,r=e.description;return Object(W.jsxs)("div",{className:"product",children:[Object(W.jsx)("div",{className:"product__photo",children:Object(W.jsx)("img",{className:"product__photo__img",src:t,alt:a})}),Object(W.jsx)("h2",{className:"product__name",children:a}),r&&Object(W.jsx)("h3",{className:"product__desc",children:r}),Object(W.jsxs)("h4",{className:"product__price",children:[c," EUR"]})]})},de=function(e){var t=e.id,a=e.image,c=e.title,r=e.price,n=Object(i.b)(),s=J(c,25),o={id:t,image:a,title:c,price:r,quantity:0};return Object(W.jsxs)("li",{className:"productsList__item",children:[Object(W.jsx)(B.b,{to:"/".concat(t),children:Object(W.jsx)(ue,{image:a,title:s,price:r})}),Object(W.jsx)(oe,{addToCartHandle:function(){n(X(o))}}),Object(W.jsx)(le,{addOrDelete:function(){n(F.addOrDelete(o))},id:t})]})},je=function(e){var t=e.id,a=Object(i.c)((function(e){return e.data.data})).filter((function(e){return e.id!==t})).map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})).slice(0,3);return Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"checkAlsoProducts",children:[Object(W.jsxs)("h1",{className:"checkAlsoProducts__header",children:["CHECK ALSO ",Object(W.jsx)("i",{className:"fas fa-chevron-circle-down"})]}),Object(W.jsx)("ul",{className:"productsList",children:a.map((function(e){return Object(W.jsx)(de,Object(m.a)({},e),e.id)}))})]})})},be=function(){return Object(W.jsx)("section",{className:"loading",children:Object(W.jsx)("div",{className:"loading__spinner"})})},me=function(e){var t=e.id,a=Object(i.b)(),c=function(e){a(Q(e))},r={next:t+1,prev:t-1},n=r.prev<=0?null:r.prev,s=r.next>20?null:r.next;return Object(W.jsxs)(W.Fragment,{children:[s&&Object(W.jsxs)(B.b,{onClick:function(){return c(r.next)},className:"navBtn navBtn__next",to:"/".concat(r.next),children:["Next ",Object(W.jsx)("i",{className:"fas fa-arrow-circle-right"})]}),n&&Object(W.jsxs)(B.b,{onClick:function(){return c(r.prev)},className:"navBtn navBtn__prev",to:"/".concat(r.prev),children:[Object(W.jsx)("i",{className:"fas fa-arrow-circle-left"})," Prev"]})]})},he=function(){var e=Object(U.g)().id,t=Object(i.b)(),a=Object(i.c)((function(e){return e.data.data})),r=Object(i.c)((function(e){return e.data.currProduct})),n=Object(i.c)((function(e){return e.data.loading})),s=r.title,o=r.description,l=r.price,u=r.image,d=r.category,j=Number(e);Object(c.useEffect)((function(){t(Q(j))}),[t,j]);var b={id:j,image:u,title:s,price:l,quantity:0};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"oneProductBigConatainer",children:Object(W.jsxs)("div",{className:"oneProductBig",children:[!n&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(ue,{title:s,description:o,price:l,image:u}),Object(W.jsx)(oe,{addToCartHandle:function(){t(X(b))}}),Object(W.jsx)(le,{addOrDelete:function(){t(F.addOrDelete(b))},id:j}),Object(W.jsx)(me,{id:j})]}),n&&Object(W.jsx)(be,{})]})}),Object(W.jsx)(je,{category:d,data:a})]})},Oe=function(e){var t=e.data,a=e.loading;return Object(W.jsx)("main",{className:"productsContainer",children:Object(W.jsxs)("ul",{className:"productsList",children:[t.map((function(e){return Object(W.jsx)(de,Object(m.a)({},e),e.id)})),a&&Object(W.jsx)(be,{})]})})},fe=function(e){var t=e.updateProducts,a=e.showBtn;return Object(W.jsx)(W.Fragment,{children:a&&Object(W.jsx)("div",{className:"loadMore",children:Object(W.jsx)("button",{className:"loadMore__btn",onClick:t,children:"Load more"})})})},pe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.data.data})),a=Object(i.c)((function(e){return e.data.loading})),c=Object(i.c)((function(e){return e.data.productsToFetch}))<=t.length,r=function(){e(R(6))};return Object(W.jsxs)("div",{className:"container",children:[Object(W.jsx)(Oe,{data:t,loading:a}),Object(W.jsx)(fe,{updateProducts:function(){return e(r)},showBtn:c})]})},xe=function(){var e=Object(i.c)((function(e){return e.favorites.favorites}));return Object(W.jsx)("div",{className:"container",children:e.length?Object(W.jsx)(Oe,{data:e}):Object(W.jsx)("div",{className:"favoritesEmptyContainer",children:Object(W.jsxs)("div",{className:"favoritesEmpty",children:["You don't have any favorite products."," ",Object(W.jsx)("i",{className:"far fa-frown"})]})})})},_e=function(){var e=Object(i.b)();return Object(c.useEffect)((function(){e(R())}),[e]),Object(W.jsx)(B.a,{children:Object(W.jsxs)(Z,{children:[Object(W.jsx)(se,{}),Object(W.jsxs)(U.c,{children:[Object(W.jsx)(U.a,{exact:!0,path:"/",component:pe}),Object(W.jsx)(U.a,{exact:!0,path:"/cart",component:G}),Object(W.jsx)(U.a,{exact:!0,path:"/favorites",component:xe}),Object(W.jsx)(U.a,{exact:!0,path:"/checkout",component:re}),Object(W.jsx)(U.a,{path:"/:id",component:he})]}),Object(W.jsx)(ie,{})]})})},Ne=Object(l.b)(q);s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(i.a,{store:q,children:Object(W.jsx)(o.a,{loading:Object(W.jsx)(be,{}),persistor:Ne,children:Object(W.jsx)(_e,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.415f0b30.chunk.js.map