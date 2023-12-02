"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{6871:function(n,e,r){r.d(e,{a:function(){return s}});var t,a=r(3430),i=r(168),c=r(5867).ZP.div(t||(t=(0,i.Z)(["\n  margin-top: 20px;\n"]))),o=r(184),s=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(a.RL,{height:"80",width:"80",radius:"48",color:"orange",ariaLabel:"watch-loading",wrapperStyle:{justifyContent:"center"},visible:!0})})}},5661:function(n,e,r){r.d(e,{W:function(){return a},f:function(){return t}});var t="https://image.tmdb.org/t/p/w500",a="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},6631:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,a,i,c,o,s,u,p=r(5861),d=r(9439),l=r(7757),f=r.n(l),x=r(2791),h=r(7689),v=r(5762),g=r(5661),m=r(168),j=r(5867),w=r(1087),Z=j.ZP.img(t||(t=(0,m.Z)(["\n  width: 394px;\n  height: 574px;\n  border-radius: 8px;\n"]))),b=j.ZP.div(a||(a=(0,m.Z)(["\n  margin: 0;\n  padding: 40px 0px;\n"]))),k=j.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  gap: 48px;\n"]))),y=j.ZP.div(c||(c=(0,m.Z)(["\n  padding: 16px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n"]))),_=j.ZP.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  margin: 0px;\n  padding: 0px;\n"]))),P=(0,j.ZP)(w.OL)(s||(s=(0,m.Z)(["\n  padding: 8px 16px;\n  text-decoration: none;\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 4px;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),L=(0,j.ZP)(w.OL)(u||(u=(0,m.Z)(["\n  padding: 8px 16px;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 4px;\n  color: white;\n  background-color: orangered;\n"]))),C=r(6871),O=r(184);function R(){var n,e,r=(0,x.useState)(null),t=(0,d.Z)(r,2),a=t[0],i=t[1],c=(0,h.UO)().movieId,o=(0,h.TH)(),s=(0,x.useRef)(o),u=(0,x.useState)(!1),l=(0,d.Z)(u,2),m=l[0],j=l[1];return(0,x.useEffect)((function(){function n(){return(n=(0,p.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,(0,v.Ny)(c);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}c&&function(){n.apply(this,arguments)}()}),[c]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(L,{to:null!==(n=null===(e=s.current.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),m&&(0,O.jsx)(C.a,{}),null!==a&&(0,O.jsxs)(b,{children:[(0,O.jsxs)(k,{children:[(0,O.jsx)(Z,{src:"".concat(a.poster_path?g.f+a.poster_path:g.W),alt:a.title}),(0,O.jsx)("div",{children:(0,O.jsxs)("div",{children:[(0,O.jsx)("h1",{children:a.title}),(0,O.jsxs)("h2",{children:["User score: ",Math.round(10*a.vote_average),"%"]}),(0,O.jsx)("h3",{children:"Overview"}),(0,O.jsx)("p",{children:a.overview}),(0,O.jsx)("h3",{children:"Genres"}),(0,O.jsx)("p",{children:a.genres.map((function(n){return n.name})).join(", ")})]})})]}),(0,O.jsxs)(y,{children:[(0,O.jsx)("h3",{children:"Additional information"}),(0,O.jsx)("nav",{children:(0,O.jsxs)(_,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(P,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(P,{to:"reviews",children:"Reviews"})})]})})]}),(0,O.jsx)(x.Suspense,{fallback:(0,O.jsx)(C.a,{}),children:(0,O.jsx)(h.j3,{})})]})]})}},5762:function(n,e,r){r.d(e,{Bt:function(){return d},Ny:function(){return u},Pv:function(){return l},k1:function(){return s},y:function(){return p}});var t=r(5861),a=r(7757),i=r.n(a),c=r(5294),o="54ea2173c00863219e76419305eca11f";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e,"&include_adult=false&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=631.edf3bd45.chunk.js.map