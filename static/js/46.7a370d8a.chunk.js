"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{46:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),i=e.n(u),c=e(791),s=e(689),o=e(87),p=e(86),f=e(184),l=(0,c.lazy)((function(){return e.e(354).then(e.bind(e,354))}));t.default=function(){var n,t,e=(0,c.useState)(null),u=(0,a.Z)(e,2),h=u[0],d=u[1],v=(0,c.useState)(!1),g=(0,a.Z)(v,2),m=g[0],Z=g[1],y=(0,c.useState)(!1),w=(0,a.Z)(y,2),x=w[0],k=w[1],b=(0,s.UO)().movieId,j=(0,s.TH)(),I=(0,c.useRef)(null!==(n=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,c.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(!0),Z(!1),t.next=5,(0,p.TP)(b,n.signal);case 5:e=t.sent,d(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(!0);case 12:return t.prev=12,k(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return n.abort}}),[b]),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.rU,{to:I.current,children:"Go Back"}),m&&(0,f.jsx)("div",{children:"Something went wrong, try again."}),x&&(0,f.jsx)("div",{children:"Movies are loading, please wait."}),h&&(0,f.jsx)(l,{movie:h,from:I.current})]})}},915:function(n,t,e){e.d(t,{LT:function(){return a},VI:function(){return i},Zm:function(){return u},_n:function(){return r}});var r="https://api.themoviedb.org/3",a="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU3YTFjYjU0NjUxYjBlYzNkZGY0MDZkMWQzOWZkOCIsInN1YiI6IjY0MzY1ZGIyOTQ2MzE4MDEyNjM4YmFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0MaGaafY6aZaycjfml7ZFP5IeOK1GQtKuKpxIF3v51o",u="https://image.tmdb.org/t/p/original",i="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"},86:function(n,t,e){e.d(t,{M1:function(){return l},TP:function(){return p},Wf:function(){return g},XT:function(){return s},tx:function(){return d}});var r=e(861),a=e(757),u=e.n(a),i=e(243),c=e(915);function s(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?language=en-US",{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"}/credits?language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"}/reviews?language=en-US&page=1"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?query=".concat(t,"&include_adult=true&language=en-US"),{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL=c._n,i.Z.defaults.headers={Authorization:c.LT,accept:"application/json"}}}]);
//# sourceMappingURL=46.7a370d8a.chunk.js.map