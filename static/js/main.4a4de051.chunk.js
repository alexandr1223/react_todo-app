(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c,o=n(1),r=n.n(o),i=n(9),a=n.n(i),s=(n(14),n(15),n(16),n(3)),l=n(2),u=n(7),d=function(t,e){return fetch("".concat("https://mate.academy/students-api/").concat(t),e).then((function(t){if(!t.ok)throw new Error("Error with loading data...");return t.json()}))},j=function(t,e){return d(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:e})})},f=function(t){return d(t,{method:"DELETE",headers:{"Content-Type":"application/json"}})},b=n(0),p=function(t){var e=t.setTodos,n=Object(o.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],a=function(t){var n,c;t.preventDefault(),(n="todos/?userId=3644",c=r,d(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:c,userId:3643,completed:!1})})).then((function(t){e((function(e){return[].concat(Object(u.a)(e),[{id:+t.id,title:"".concat(t.title),completed:!1}])}))})),i("")};return Object(b.jsx)("form",{onSubmit:function(t){return a(t)},children:Object(b.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:r,onChange:function(t){return i(t.target.value)}})})},m=n(4),h=n.n(m),O=function(t){var e=t.item,n=Object(o.useState)(!1),c=Object(l.a)(n,2),r=c[0],i=c[1],a=Object(o.useState)(e.title),u=Object(l.a)(a,2),p=u[0],m=u[1],O=Object(o.useContext)(x).setTodos;Object(o.useEffect)((function(){var t=function(t){27===t.keyCode&&(""===e.title&&v(e.id),y(e.id,p),i(!1))};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[]);var y=function(t,e){(function(t,e){return d(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e})})})("todos/".concat(t),e).then((function(){O((function(n){return n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{title:e}):n}))}))}))},v=function(t){f("todos/".concat(t)).then((function(){O((function(e){return e.filter((function(e){return e.id!==t}))}))}))};return Object(b.jsxs)("li",{className:h()({completed:e.completed},{editing:r}),children:[Object(b.jsxs)("div",{className:"view",children:[Object(b.jsx)("input",{type:"checkbox",className:"toggle",checked:e.completed,id:e.completed?"toggle-completed":"toggle-view",onChange:function(){return t=e.id,n=!e.completed,void j("todos/".concat(t),n).then((function(){O((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}))}));var t,n}}),Object(b.jsx)("label",{onDoubleClick:function(){i(!0)},children:e.title}),Object(b.jsx)("button",{type:"button",className:"destroy","data-cy":"deleteTodo",onClick:function(){return v(e.id)}})]}),Object(b.jsx)("input",{type:"text",className:"edit",value:p,onChange:function(t){return m(t.target.value)},onBlur:function(t){return function(t){""===t.target.value?(v(e.id),i(!1)):(y(e.id,p),i(!1))}(t)},onKeyPress:function(t){return function(t){"Enter"===t.key&&(""===t.target.value?(v(e.id),i(!1)):i(!1)),27===t.keyCode&&i(!1)}(t)}})]})},y=function(t){var e=t.items,n=t.sortBy,c=Object(u.a)(e);switch(n){case"active":c=c.filter((function(t){return!1===t.completed}));break;case"completed":c=c.filter((function(t){return!0===t.completed}))}return Object(b.jsx)("ul",{className:"todo-list","data-cy":"todoList",children:c&&c.map((function(t){return Object(b.jsx)(O,{item:t},t.id)}))})};!function(t){t.All="all",t.Active="active",t.Completed="completed"}(c||(c={}));var v=function(t){var e=t.sortBy,n=t.setSortBy;return Object(b.jsxs)("ul",{className:"filters",children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{type:"button",className:h()({selected:e===c.All}),onClick:function(){return n(c.All)},children:"All"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{type:"button",className:h()({selected:e===c.Active}),onClick:function(){return n(c.Active)},children:"Active"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{type:"button",className:h()({selected:e===c.Completed}),onClick:function(){return n(c.Completed)},children:"Completed"})})]})},x=r.a.createContext({}),g=function(){var t=function(t,e){var n=Object(o.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(c){return e}})),c=Object(l.a)(n,2),r=c[0],i=c[1];return[r,function(e){try{var n=e instanceof Function?e(r):e;i(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(c){throw new Error("Error")}}]}("todos",[]),e=Object(l.a)(t,2),n=e[0],r=e[1],i=Object(o.useState)(!1),a=Object(l.a)(i,2),u=a[0],d=a[1],m=Object(o.useState)(c.All),h=Object(l.a)(m,2),O=h[0],g=h[1];Object(o.useEffect)((function(){fetch("https://mate.academy/students-api/todos/?userId=".concat(3643)).then((function(t){return t.json()})).then((function(t){r(t)}))}),[]),Object(o.useEffect)((function(){var t=n.every((function(t){return!0===t.completed}));d(!!t)}),[n]);var C={setTodos:r};return Object(b.jsxs)("section",{className:"todoapp",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:"todos"}),Object(b.jsx)(p,{setTodos:r})]}),Object(b.jsxs)("section",{className:"main",children:[Object(b.jsx)("input",{type:"checkbox",id:"toggle-all",checked:u,className:"toggle-all",onChange:function(){return r((function(t){return t.map((function(t){return t.completed!==!u?(j("todos/".concat(t.id),!u),Object(s.a)(Object(s.a)({},t),{},{completed:!u})):t}))})),void d(!u)}}),Object(b.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(b.jsx)(x.Provider,{value:C,children:Object(b.jsx)(y,{items:n,sortBy:O})})]}),Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(n.length>0?n.filter((function(t){return!t.completed})).length:0," items left")}),Object(b.jsx)(v,{sortBy:O,setSortBy:g}),(n.length>0?n.filter((function(t){return t.completed})).length:"")>0&&Object(b.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){n.forEach((function(t){!0===t.completed&&f("todos/".concat(t.id)).then(r(n.filter((function(t){return!0!==t.completed}))))}))},children:"Clear completed"})]})]})};a.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4a4de051.chunk.js.map