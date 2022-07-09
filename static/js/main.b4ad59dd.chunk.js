(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{155:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(61),s=n.n(c),i=n(67),o=n(3),u=n.n(o),d=n(9),l=n(8),p=(n(74),n(75),n(12)),h=n(37),j=n(62),b=n.n(j),m=n(1),f=function(e){var t=e.activeNote,n=e.onUpdateNote,a=e.isUpdated,r=e.setUpdateStatus,c=function(e,a){var c;n(Object(h.a)(Object(h.a)({},t),{},(c={},Object(p.a)(c,e,a),Object(p.a)(c,"lastModified",Date.now()),Object(p.a)(c,"isImp",!1),Object(p.a)(c,"isPinned",!1),c))),r(!1)};if(!t)return Object(m.jsx)("div",{className:"no-active-note",children:"No Active Note"});var s="."===t.body?"":t.body;return Object(m.jsx)("div",{className:"app-main",children:Object(m.jsxs)("div",{className:"app-main-note-edit",children:[Object(m.jsxs)("div",{className:"app-main-note-header",children:[Object(m.jsx)("input",{type:"text",id:"title",placeholder:"Note Title",value:t.title,onChange:function(e){return c("title",e.target.value)},autoFocus:!0}),a?Object(m.jsx)("div",{children:Object(m.jsxs)("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[Object(m.jsx)("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),Object(m.jsx)("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})}):Object(m.jsx)("div",{})]}),Object(m.jsx)("textarea",{id:"body",placeholder:"Write your note here...",value:s,onChange:function(e){return c("body",e.target.value)}}),Object(m.jsxs)("div",{className:"app-main-note-preview",children:[Object(m.jsx)("h1",{className:"preview-title",children:t.title}),Object(m.jsx)(b.a,{className:"markdown-preview",children:s})]})]})})},O=function(e){var t=e.notes,n=e.onAddNote,a=e.onDeleteNote,r=e.activeNote,c=e.setActiveNote,s=e.isLogout,i=t.sort((function(e,t){return t.updatedAt-e.updatedAt}));return Object(m.jsxs)("div",{className:"app-sidebar",children:[Object(m.jsxs)("div",{className:"app-sidebar-header",children:[Object(m.jsx)("h1",{children:"Notes"}),Object(m.jsx)("button",{onClick:n,children:"Add"}),Object(m.jsx)("button",{onClick:function(){s()},children:"Logout"})]}),Object(m.jsx)("div",{className:"app-sidebar-notes",children:i.map((function(e,t){var n=e._id,s=e.title,i=e.body,o=e.updatedAt;return Object(m.jsxs)("div",{className:"app-sidebar-note ".concat(n===r&&"active"),onClick:function(){return c(n)},children:[Object(m.jsxs)("div",{className:"sidebar-note-title",children:[Object(m.jsx)("strong",{children:s&&s.substr(0,17)+"..."}),Object(m.jsx)("button",{onClick:function(e){return a(n)},children:"Delete"})]}),Object(m.jsx)("p",{children:i&&i.substr(0,57)+"..."}),Object(m.jsxs)("small",{className:"note-meta",children:["Last Modified"," ",new Date(o).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})},x=n(63),v=n(64),g=n(68),w=n(66),k=(n(155),n(10)),y=n.n(k),N="https://jottly-app.herokuapp.com/api/v1/user",S=function(e){Object(g.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",pwd:"",name:"",contact:"",token:null,user:{}},e.createLogin=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post(N+"/login",{payload:{email:e.state.email,password:e.state.pwd}}).then((function(t){e.setState({token:t.data.token,user:t.data.user}),localStorage.setItem("token",e.state.token),console.log(t.data.token,t.data.user)}));case 2:case"end":return t.stop()}}),t)}))),e.createRegistration=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post(N+"/register",{payload:{email:e.state.email,password:e.state.pwd,name:e.state.name,phone:e.state.contact}}).then((function(t){e.setState({token:t.data.token,user:t.data.user}),localStorage.setItem("token",e.state.token),console.log(t.data.token,t.data.user)}));case 2:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleLoginSubmit=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createLogin();case 3:null!=e.state.token&&e.props.isLogin(!0,e.state.token);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRegSubmit=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createRegistration();case 3:null!=e.state.token&&e.props.isLogin(!0,e.state.token);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(v.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"auth",children:[Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("form",{onSubmit:this.handleLoginSubmit,children:[Object(m.jsx)("input",{type:"email",name:"email",placeholder:"email...",required:!0,onChange:this.handleChange}),Object(m.jsx)("input",{type:"password",name:"pwd",placeholder:"password...",required:!0,onChange:this.handleChange}),Object(m.jsx)("button",{onSubmit:this.handleLoginSubmit,children:"Log In"})]})]}),Object(m.jsxs)("div",{className:"register",children:[Object(m.jsx)("h1",{children:"Register"}),Object(m.jsxs)("form",{onSubmit:this.handleRegSubmit,children:[Object(m.jsx)("input",{type:"text",name:"name",placeholder:"name...",required:!0,onChange:this.handleChange}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"email...",required:!0,onChange:this.handleChange}),Object(m.jsx)("input",{type:"text",name:"contact",placeholder:"contact...",minLength:"10",maxLength:"10",onChange:this.handleChange}),Object(m.jsx)("input",{type:"password",name:"pwd",placeholder:"password...",required:!0,onChange:this.handleChange}),Object(m.jsx)("button",{onSubmit:this.handleRegSubmit,children:"Register"})]})]})]})}}]),n}(r.a.Component),C=n(2),L=n(65);var A=function(){var e=Object(a.useState)(localStorage.notes?JSON.parse(localStorage.notes):[]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(localStorage.token?localStorage.token:null),s=Object(l.a)(c,2),o=s[0],p=s[1],h=Object(a.useState)(!!o),j=Object(l.a)(h,2),b=j[0],x=j[1],v=Object(a.useState)(!1),g=Object(l.a)(v,2),w=g[0],k=g[1],N="https://jottly-app.herokuapp.com/api/v1/note",A=Object(a.useState)(!1),_=Object(l.a)(A,2),D=_[0],I=_[1];Object(a.useEffect)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{authorization:o}},e.next=3,y.a.post(N+"/list",{},t).then((function(e){r(e.data.data)}));case 3:case"end":return e.stop()}}),e)}))),[]);var R=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return p(n),a={headers:{authorization:n}},e.next=6,y.a.post(N+"/list",{},a).then((function(e){r(e.data.data)}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),t={headers:{authorization:o}},e.next=4,y.a.post("https://jottly-app.herokuapp.com/api/v1/user/logout",{},t).then((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{authorization:o}},a={title:"Untitled Note",body:"",isPinned:!1,isImp:!1,_id:(new L.a).toString(),updatedAt:Date.now()},r([a].concat(Object(i.a)(n))),k(a._id),e.next=6,y.a.post(N+"/add",{payload:a},t).then((function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(n.filter((function(e){return e._id!==t}))),a={headers:{authorization:o}},c={ids:[t]},e.next=5,y.a.post(N+"/delete",{payload:c},a).then((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.map((function(e){return e._id===t._id?t:e})),r(a),c={headers:{authorization:o}},s={title:t.title,body:t.body,isPinned:t.isPinned,isImp:t.isImp,_id:t._id,updatedAt:Date.now()},e.next=6,y.a.post(N+"/update",{payload:s},c).then((function(e){200===e.data.status?I(!0):I(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(C.c,{children:Object(m.jsx)(C.a,{path:"/",element:b?Object(m.jsxs)("div",{className:"App-Home",children:[Object(m.jsx)(O,{notes:n,onAddNote:z,onDeleteNote:q,activeNote:w,setActiveNote:k,isLogout:U}),Object(m.jsx)(f,{activeNote:n.find((function(e){return e._id===w})),onUpdateNote:M,isUpdated:D,setUpdateStatus:I})]}):Object(m.jsx)(S,{isLogin:R})})})})},_=n(36);s.a.render(Object(m.jsx)(_.a,{children:Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(A,{})})}),document.getElementById("root"))},75:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.b4ad59dd.chunk.js.map