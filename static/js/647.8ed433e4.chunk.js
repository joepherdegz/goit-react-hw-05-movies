"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[647],{713:function(r,t,e){e.d(t,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=e(861),a=e(757),u=e.n(a),c=e(759);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"b30e20b0751027d191af0344cc7d8939"};var s=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day");case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},647:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(689),o=e(713),f=e(184),p=function(r){var t=r.author,e=r.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:t}),(0,f.jsx)("p",{children:e})]})},v="ReviewsList_titleWrap__927GL",h="ReviewsList_listWrap__i5QKy",d="ReviewsList_noticeWrap__pL-yU",l=function(){var r=(0,i.UO)().movieId,t=(0,s.useState)([]),e=(0,a.Z)(t,2),u=e[0],l=e[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Hx)(r);case 3:e=t.sent,l(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,f.jsx)(f.Fragment,{children:0!==u.length?(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:v,children:(0,f.jsx)("h1",{children:"Reviews"})}),(0,f.jsx)("ul",{className:h,children:u.map((function(r){var t=r.id,e=r.author,n=r.content;return(0,f.jsx)(p,{author:e,content:n},t)}))})]}):(0,f.jsx)("div",{className:d,children:"We don't have any reviews for this movie!"})})}}}]);
//# sourceMappingURL=647.8ed433e4.chunk.js.map