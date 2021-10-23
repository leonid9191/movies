(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),i=c(4),r=c.n(i);c(11);function o(){return Object(a.jsx)("nav",{className:"blue-grey lighten-3",children:Object(a.jsxs)("div",{className:"nav-wrapper",children:[Object(a.jsx)("a",{href:"!#",className:"brand-logo",children:"Movies App"}),Object(a.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"!#",children:"Link for something"})})})]})})}function l(){return Object(a.jsx)("footer",{className:"page-footer blue-grey darken-4",children:Object(a.jsx)("div",{className:"footer-copyright",children:Object(a.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(a.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})}var j=c(2),d=c(5);function h(e){var t=e.Title,c=e.Year,n=e.imdbID,s=e.Type,i=e.Poster;return Object(a.jsxs)("div",{id:n,className:"card movie",children:[Object(a.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===i?Object(a.jsx)("img",{className:"activator",alt:"",src:"https://via.placeholder.com/300x450?text=".concat(t)}):Object(a.jsx)("img",{className:"activator",alt:"",src:i})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(a.jsxs)("p",{children:[c," ",Object(a.jsx)("span",{className:"right",children:s})]})]})]})}function b(e){var t=e.movies,c=void 0===t?[]:t;return Object(a.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(a.jsx)(h,Object(d.a)({},e),e.imdbID)})):Object(a.jsx)("h4",{children:"Nothing found"})})}function O(){return Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"indeterminate"})})}var u=function(e){var t=e.searchMovies,c=void 0===t?Function.prototype:t,s=Object(n.useState)(""),i=Object(j.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)("all"),d=Object(j.a)(l,2),h=d[0],b=d[1],O=function(e){b(e.target.dataset.type),c(r,e.target.dataset.type)};return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{placeholder:"Search",type:"search",value:r,className:"validate",onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(r,h)}}),Object(a.jsx)("button",{className:"btn search-btn",onClick:function(){return c(r,h)},children:"Search"})]}),Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:O,checked:"all"===h}),Object(a.jsx)("span",{children:"All"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:O,checked:"movie"===h}),Object(a.jsx)("span",{children:"Movies only"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:O,checked:"series"===h}),Object(a.jsx)("span",{children:"Serials only"})]})]})]})},m=Object({NODE_ENV:"production",PUBLIC_URL:"/movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY;function p(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),r=Object(j.a)(i,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?i=tt3896198&apikey=".concat(m,"&s=all")).then((function(e){return e.json()})).then((function(e){s(e.Search),l(!1)})).catch((function(e){console.log(e),l(!1)}))}),[]),Object(a.jsxs)("main",{className:"container content",children:[Object(a.jsx)(u,{searchMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";l(!1),fetch("https://www.omdbapi.com/?i=tt3896198&apikey=".concat(m,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){l(!1),s(e.Search)})).catch((function(e){console.log(e),l(!1)}))}}),o?Object(a.jsx)(O,{}):Object(a.jsx)(b,{movies:c})]})}var x=function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(o,{}),Object(a.jsx)(p,{}),Object(a.jsx)(l,{})]})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2c56afcd.chunk.js.map