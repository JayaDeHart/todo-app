(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{145:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(46),i=n(47),s=n(53),a=n(51),l=n(0),r=n.n(l),o=n(7),j=n.n(o),u=n(1),b=r.a.createContext();var d=function(e){return Object(u.jsx)(b.Provider,{value:{showCompleted:!0,pagination:4,sortBy:"assigned"},children:e.children})},O=n(52),h=n(13),m=n(21),x=n(28),f=function(e){var t=Object(l.useState)({}),n=Object(h.a)(t,2),c=n[0],i=n[1];return{handleChange:function(e){e.persist(),i((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}};var p=function(e){return Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{children:["To Do List: ",e.incomplete," items pending"]})})},g=n(151);var v=function(e){var t=e.handleChange,n=e.handleSubmit;return Object(u.jsxs)("form",{className:"form",onSubmit:n,children:[Object(u.jsx)("h2",{children:"Add To Do Item"}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"To Do Item"}),Object(u.jsx)("input",{onChange:t,name:"text",type:"text",placeholder:"Item Details"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Assigned To"}),Object(u.jsx)("input",{onChange:t,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Difficulty"}),Object(u.jsx)("input",{onChange:t,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(u.jsx)("label",{children:Object(u.jsx)(g.a,{type:"submit",children:"Add Item"})})]})},C=n(10);var y=function(e){var t=e.toggleComplete,n=e.list;return Object(u.jsx)("div",{className:"todo-items",children:n.map((function(e){return Object(u.jsxs)(g.b,{elevation:C.a.ONE,children:[Object(u.jsx)("p",{children:e.text}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(u.jsxs)("div",{onClick:function(){return t(e.id)},children:["Complete: ",e.complete.toString()]})]},e.id)}))})},S=n(152),D=(n(145),n(146),function(){var e=Object(l.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)([]),s=Object(h.a)(i,2),a=s[0],r=s[1],o=f((function(e){console.log(e),e.id=Object(S.a)(),e.complete=!1,c([].concat(Object(O.a)(n),[e]))})),j=o.handleChange,d=o.handleSubmit,m=Object(l.useState)(0),x=Object(h.a)(m,2),g=x[0],C=x[1],D=Object(l.useContext)(b).pagination,k=Object(l.useState)([]),N=Object(h.a)(k,2),A=N[0],I=N[1];return Object(l.useEffect)((function(){var e=n.filter((function(e){return!e.complete})).length;r(e),document.title="To Do List: ".concat(a)}),[n]),Object(l.useEffect)((function(){var e=g*D,t=g*D+D;I(n.slice(e,t))}),[n,g]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{incomplete:a}),Object(u.jsxs)("div",{className:"main-content",children:[Object(u.jsx)(v,{handleSubmit:d,handleChange:j}),Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{list:A,toggleComplete:function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));c(t)}}),n.length>4&&Object(u.jsx)("button",{onClick:function(){C((function(e){return e+1}))},children:"Next"}),n.length>4&&g>0&&Object(u.jsx)("button",{onClick:function(){C((function(e){return e-1}))},children:"Previous"}),Object(u.jsx)("div",{children:g})]})]})]})}),k=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(D,{})})},N=function(e){Object(s.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)(k,{})}}]),n}(r.a.Component),A=document.getElementById("root");j.a.render(Object(u.jsx)(N,{}),A)}},[[147,1,2]]]);
//# sourceMappingURL=main.e692a007.chunk.js.map