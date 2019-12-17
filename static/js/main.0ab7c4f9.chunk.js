(this["webpackJsonpcomment-feed"]=this["webpackJsonpcomment-feed"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),u=(n(11),n(1)),i=n(2);n(12);var l=function(e){var t=e.label,n=e.id,r=Object(i.a)(e,["label","id"]);return a.a.createElement("div",{className:"Input"},a.a.createElement("input",Object.assign({},r,{id:n,className:"Input__input"})),a.a.createElement("label",{htmlFor:n,className:"Input__label"},t))};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createElement("g",{id:"Rounded"},a.a.createElement("path",{d:"M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"})),d=function(e){var t=e.svgRef,n=e.title,r=m(e,["svgRef","title"]);return a.a.createElement("svg",s({viewBox:"0 0 24 24",ref:t},r),n?a.a.createElement("title",null,n):null,f)},p=a.a.forwardRef((function(e,t){return a.a.createElement(d,s({svgRef:t},e))}));n.p,n(13);function b(e){var t=e.active,n=e.className,r=void 0===n?"":n,c=Object(i.a)(e,["active","className"]),o="StarButton StarButton--".concat(t?"active":"unactive"," ").concat(r);return a.a.createElement("button",Object.assign({},c,{className:o}),a.a.createElement(p,{"data-testid":"star"}))}b.defaultProps={active:!1,"data-testid":"starButton",type:"button"};var v=b,E=(n(14),function(e){var t=e.likes.includes(e.currentUser.id),n=t?function(){return e.onDislike(e.id)}:function(){return e.onLike(e.id)};return a.a.createElement("div",{className:"Comment"},a.a.createElement("h4",null,e.author),a.a.createElement("p",null,e.text),a.a.createElement(v,{onClick:n,"data-testid":e.id,active:t,className:"Comment__StarButton"}))});n(15);var O=function(e){return a.a.createElement("button",Object.assign({type:"button"},e,{className:"Button"}))};n(16);function h(e){var t=e.header,n=e.comments,r=e.onComment,c=e.onLike,o=e.onDislike,i=e.auth,s=a.a.useState(""),m=Object(u.a)(s,2),f=m[0],d=m[1],p=a.a.useState(""),b=Object(u.a)(p,2),v=b[0],h=b[1],y=function(e){return c(e,i)},g=function(e){return o(e,i)};return a.a.createElement("div",{className:"CommentFeed"},a.a.createElement("header",{className:"CommentFeed__header"},a.a.createElement("h1",null,t)),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r({author:f,text:v}),d(""),h("")},className:"CommentForm"},a.a.createElement(l,{label:"Author",id:"author",type:"text",value:f,onChange:function(e){return d(e.target.value)},required:!0}),a.a.createElement(l,{label:"Comment",id:"text",type:"text",value:v,onChange:function(e){return h(e.target.value)},required:!0}),a.a.createElement(O,{type:"submit"},"Submit Comment")),a.a.createElement("div",{className:"CommentList"},a.a.createElement("h3",null,"Latest Comments"),n.map((function(e,t){return a.a.createElement(E,Object.assign({key:t},e,{onLike:y,onDislike:g,currentUser:i}))}))))}h.defaultProps={header:"Comment Feed"};var y=h,g=n(5);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e,t){switch(t.type){case"CREATE_COMMENT":return e.concat(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.comment,{likes:[]}));case"LIKE_COMMENT":return e.map((function(e){return e.id===t.id&&e.likes.push(t.auth.id),e}));case"UNLIKE_COMMENT":return e.map((function(e){if(e.id===t.id){var n=e.likes.indexOf(t.auth.id);e.likes.splice(n,1)}return e}));default:return e}}var k={id:"john-doe",name:"John Doe"},N=[{id:"comment-0",author:"John Doe",text:"A boats but a mystery box could be anything.",likes:[k.id]},{id:"comment-1",author:"Max Powers Jr",text:"Krypton sucks.",likes:[]}];var w=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(r.useReducer)(C,e),n=Object(u.a)(t,2),a=n[0],c=n[1];return{comments:a,onComment:function(e){return c({comment:e,type:"CREATE_COMMENT"})},onLike:function(e,t){return c({id:e,auth:t,type:"LIKE_COMMENT"})},onDislike:function(e,t){return c({id:e,auth:t,type:"UNLIKE_COMMENT"})}}}(N);return a.a.createElement(y,Object.assign({header:"Comment Feed",auth:k},e))};o.a.render(a.a.createElement(w,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.0ab7c4f9.chunk.js.map