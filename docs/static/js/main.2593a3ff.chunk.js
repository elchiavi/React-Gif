(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=7hMW2YMQ1Awd1EmtbCBoJ1OP65rJJ3fu"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsxs)("p",{children:[" ",e," "]})]})},p=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),a}(e),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__fade_in",children:[" ",e," "]}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.jsx)(m,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(r.useState)(["Dragon Ball"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifApp"}),Object(a.jsx)(o,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(p,{category:t},t)}))})]})};n(17);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2593a3ff.chunk.js.map