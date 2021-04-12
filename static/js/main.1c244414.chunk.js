(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r),o=a(1),l=(a(12),a(13),a(14),a(2)),u=a.n(l),m=c.a.memo((function(e){var t=e.filterPosts,a=e.selectUserId,n=e.userId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts: ".concat(t.length)),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User: ".concat(e.userId,"]")," "),e.title),c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){a(e.id===n?0:e.id,e)}},n===e.id?"Close":"Open"))}))))}));m.propTypes={filterPosts:u.a.arrayOf(u.a.shape({id:u.a.number.isRequired,title:u.a.string||null.isRequired,userId:u.a.number.isRequired})).isRequired,selectUserId:u.a.func.isRequired,userId:u.a.number.isRequired};var i=a(3),d=a(4),f=(a(17),c.a.memo((function(e){var t=e.loadComments,a=Object(n.useState)({name:"",email:"",body:""}),r=Object(o.a)(a,2),s=r[0],l=r[1],u=function(e){var t=e.target,a=t.name,n=t.value;l(Object(i.a)(Object(i.a)({},s),{},Object(d.a)({},a,n)))};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),l({name:"",email:"",body:""})},className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s.name,onChange:u,required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:s.email,onChange:u,required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:s.body,onChange:u,required:!0})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}))),b=(a(18),a(19),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),p="https://mate-api.herokuapp.com",E=function(e,t){return fetch("".concat(p).concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},_=function(e){return E("/comments?postId=".concat(e))},h=function(e){var t,a,n=e.userId,c=e.name,r=e.email,s=e.body;return t="/comments",a={postId:n,name:c,email:r,body:s},fetch("".concat(p).concat(t),{method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return e.data}))},v=function(e){var t=e.userId,a=e.post,r=Object(n.useState)([]),s=Object(o.a)(r,2),l=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(o.a)(m,2),E=d[0],v=d[1];Object(n.useEffect)((function(){_(t).then((function(e){u(e)}))}),[t]);var N=Object(n.useCallback)((function(e){h(Object(i.a)({userId:t},e)).then((function(){return _(t)})).then(u)}),[t]),O=function(e){(function(e){return fetch("".concat(p,"/comments/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return e.data}))})(e).then((function(){return _(t)})).then(u)};return c.a.createElement("div",{className:"PostDetails"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,a.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button PostDetails__button",onClick:function(){v(!E)}},"Hide ".concat(l.length," comments")),E&&c.a.createElement("ul",{className:"PostDetails__list"},l&&l.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{onClick:function(){O(e.id)},type:"button",className:"PostDetails__remove-button button"},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,{loadComments:N})))):c.a.createElement(b,null))},N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),l=Object(o.a)(s,2),u=l[0],i=l[1],d=Object(n.useState)("0"),f=Object(o.a)(d,2),b=f[0],p=f[1],_=Object(n.useState)([]),h=Object(o.a)(_,2),N=h[0],O=h[1],j=Object(n.useState)(N),y=Object(o.a)(j,2),P=y[0],C=y[1],I=Object(n.useState)(0),S=Object(o.a)(I,2),g=S[0],k=S[1];Object(n.useEffect)((function(){E("/users").then((function(e){r(e.filter((function(e){return e.id<10})).sort((function(e,t){return e.id-t.id})))})),E("/posts").then((function(e){O(e),C(e)}))}),[]);var w=Object(n.useCallback)((function(e,t){k(e),i(t)}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",name:"user",value:b,onChange:function(e){var t,a=e.target;p(a.value),t=a.value,C("0"!==t?N.filter((function(e){return+e.userId===+t})):N.map((function(e){return e})))}},c.a.createElement("option",{value:"0"},"All users"),a.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(m,{filterPosts:P,selectUserId:w,userId:g})),0!==g&&c.a.createElement("div",{className:"App__content"},c.a.createElement(v,{userId:g,post:u}))))};s.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.1c244414.chunk.js.map