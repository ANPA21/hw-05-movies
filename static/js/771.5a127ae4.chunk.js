"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{111:function(n,t,e){e.d(t,{e:function(){return u}});var r=e(689),a=e(87),i=e(184),u=function(n){var t=n.movies,e=(0,r.TH)();return(0,i.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.name,u=n.title;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:e},children:r||u})},t)}))})}},771:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,i,u,o,c=e(861),s=e(439),p=e(757),l=e.n(p),f=e(791),d=e(168),h=e(444),x=h.ZP.header(r||(r=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=h.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=h.ZP.button(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://img.icons8.com/?size=512&id=88638&format=png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),b=h.ZP.span(u||(u=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),v=h.ZP.input(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),Z=e(184),y=function(n){var t=n.onSubmit,e=(0,f.useState)(""),r=(0,s.Z)(e,2),a=r[0],i=r[1];return(0,Z.jsx)(x,{className:"searchbar",children:(0,Z.jsxs)(g,{className:"form",onSubmit:function(n){n.preventDefault(),t(a)},children:[(0,Z.jsx)(m,{type:"submit",className:"button",children:(0,Z.jsx)(b,{className:"button-label",children:"Search"})}),(0,Z.jsx)(v,{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(n){i(n.target.value)}})]})})},w=e(86),k=e(111),j=e(87),S=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),i=(0,s.Z)(a,2),u=i[0],o=i[1],p=(0,f.useState)(null),d=(0,s.Z)(p,2),h=d[0],x=d[1],g=(0,j.lr)(),m=(0,s.Z)(g,2),b=m[0],v=m[1],S=b.get("query");return(0,f.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,c.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o(!0),x(!1),!S){t.next=8;break}return t.next=6,(0,w.Wf)(S,n.signal);case 6:e=t.sent,r(e);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),x(!0);case 13:return t.prev=13,o(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return n.abort}}),[S]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(y,{onSubmit:function(n){v({query:n}),r([]),x(null)}}),h&&(0,Z.jsx)("div",{children:"Something went wrong, try again."}),u&&(0,Z.jsx)("div",{children:"Movies are loading, please wait."}),S&&(0,Z.jsx)(k.e,{movies:e})]})}},915:function(n,t,e){e.d(t,{LT:function(){return a},Zm:function(){return i},_n:function(){return r}});var r="https://api.themoviedb.org/3",a="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU3YTFjYjU0NjUxYjBlYzNkZGY0MDZkMWQzOWZkOCIsInN1YiI6IjY0MzY1ZGIyOTQ2MzE4MDEyNjM4YmFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0MaGaafY6aZaycjfml7ZFP5IeOK1GQtKuKpxIF3v51o",i="https://image.tmdb.org/t/p/original"},86:function(n,t,e){e.d(t,{M1:function(){return f},TP:function(){return p},Wf:function(){return g},XT:function(){return c},tx:function(){return h}});var r=e(861),a=e(757),i=e.n(a),u=e(243),o=e(915);function c(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?language=en-US",{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"}/credits?language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"}/reviews?language=en-US&page=1"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?query=".concat(t,"&include_adult=true&language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL=o._n,u.Z.defaults.headers={Authorization:o.LT,accept:"application/json"}}}]);
//# sourceMappingURL=771.5a127ae4.chunk.js.map