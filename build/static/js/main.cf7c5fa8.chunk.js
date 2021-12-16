(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){"use strict";var a=n(1),c=n.n(a).a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}});t.a=c},function(e,t,n){e.exports={button:"HeaderCartButton_button__1fb21",icon:"HeaderCartButton_icon__2ODZe",badge:"HeaderCartButton_badge__7SHcY",bump:"HeaderCartButton_bump__czbof"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__djlsi",description:"MealItem_description__1_Q2U",price:"MealItem_price__2fG65"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__vKTHL","meals-appear":"AvailableMeals_meals-appear__1ZQKU",MealsLoading:"AvailableMeals_MealsLoading__sN1iq",MealsError:"AvailableMeals_MealsError__1UwVK"}},,,function(e,t,n){e.exports={header:"Header_header__1Xfpj","main-image":"Header_main-image__3Cbu1"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__jrCEg"}},function(e,t,n){e.exports={card:"Card_card__3Zdeq"}},function(e,t,n){e.exports={form:"MealItemForm_form__s7KvU"}},function(e,t,n){e.exports={input:"Input_input__1fn_H"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(14),c=n.n(a),r=(n(24),n(2)),i=n(1),s=n.n(i),o=n(0),u=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},l=n(5),d=n.n(l),j=n(4),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(j.a),l=s.items,m=l.reduce((function(e,t){return e+t.amount}),0),b="".concat(d.a.button," ").concat(a&&d.a.bump);return Object(i.useEffect)((function(){if(0!==s.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[l]),Object(o.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(u,{})}),Object(o.jsx)("span",{className:d.a.cartText,children:" Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",f=n(12),p=n.n(f),O=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"Food O\u2019Clock"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(16),x=n.n(h),_=function(){return Object(o.jsxs)("section",{className:x.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(11),g=n.n(v),C=n(15),A=n(17),M=n.n(A),w=function(e){return Object(o.jsx)("div",{className:M.a.card,children:e.children})},y=n(8),N=n.n(y),H=n(18),E=n.n(H),I=n(3),S=n(19),k=n.n(S),D=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:k.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(I.a)(Object(I.a)({},e.input),{},{ref:t}))]})})),F=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},className:E.a.form,children:[Object(o.jsx)(D,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},L=function(e){var t=Object(i.useContext)(j.a),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:N.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:N.a.description,children:e.description}),Object(o.jsx)("div",{className:N.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(9),B=n.n(T),R=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),u=s[0],l=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){(function(){var e=Object(C.a)(g.a.mark((function e(){var t,n,c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-4e5dc-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){l(!1),b(e.message)}))}),[]),u)return Object(o.jsx)("section",{className:B.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsx)("p",{children:m})});var f=n.map((function(e){return Object(o.jsx)(L,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(w,{children:Object(o.jsx)("ul",{children:f})})})},z=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(R,{})]})},K=n(13),U={items:[],totalAmount:0},V=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(I.a)(Object(I.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(K.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[o],l=e.totalAmount-u.price;if(1===u.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(I.a)(Object(I.a)({},u),{},{amount:u.amount-1});(s=Object(K.a)(e.items))[o]=d}return{items:s,totalAmount:l}}return t.type,U},q=function(e){var t=Object(i.useReducer)(V,U),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(j.a.Provider,{value:s,children:e.children})},Y=s.a.lazy((function(){return n.e(3).then(n.bind(null,32))}));var Z=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsx)(i.Suspense,{fallback:Object(o.jsx)("p",{children:"Loading..."}),children:Object(o.jsxs)(q,{children:[n&&Object(o.jsx)(Y,{onCloseCart:function(){a(!1)}}),Object(o.jsx)(O,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(z,{})})]})})};c.a.render(Object(o.jsx)(Z,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.cf7c5fa8.chunk.js.map