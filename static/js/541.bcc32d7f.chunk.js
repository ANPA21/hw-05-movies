"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),s=e(689),o=e(86),p=e(915),l=e(184);t.default=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)(null),e=(0,a.Z)(t,2),u=e[0],f=e[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),g=d[0],v=d[1],m=(0,i.useState)(!1),Z=(0,a.Z)(m,2),x=Z[0],w=Z[1];return(0,i.useEffect)((function(){var t=new AbortController;function e(){return(e=(0,r.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),v(!1),e.next=5,(0,o.M1)(n,t.signal);case 5:r=e.sent,f(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v(!0);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){return t.abort}}),[n]),(0,l.jsxs)("div",{children:[g&&(0,l.jsx)("div",{children:"Something went wrong, try again."}),x&&(0,l.jsx)("div",{children:"Movies are loading, please wait."}),u&&u.cast.slice(0,10).map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:r?"".concat(p.Zm).concat(r):"".concat(p.VI),alt:e,width:"200"}),(0,l.jsx)("h1",{children:e}),(0,l.jsxs)("p",{children:["Character: ",a]})]},t)}))]})}},915:function(n,t,e){e.d(t,{LT:function(){return a},VI:function(){return c},Zm:function(){return u},_n:function(){return r}});var r="https://api.themoviedb.org/3",a="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU3YTFjYjU0NjUxYjBlYzNkZGY0MDZkMWQzOWZkOCIsInN1YiI6IjY0MzY1ZGIyOTQ2MzE4MDEyNjM4YmFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0MaGaafY6aZaycjfml7ZFP5IeOK1GQtKuKpxIF3v51o",u="https://image.tmdb.org/t/p/original",c="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"},86:function(n,t,e){e.d(t,{M1:function(){return f},TP:function(){return p},Wf:function(){return v},XT:function(){return s},tx:function(){return d}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i=e(915);function s(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?language=en-US",{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"}/credits?language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"}/reviews?language=en-US&page=1"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(t,"&include_adult=true&language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL=i._n,c.Z.defaults.headers={Authorization:i.LT,accept:"application/json"}}}]);
//# sourceMappingURL=541.bcc32d7f.chunk.js.map