"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{6871:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(3430),i=e(168),o=e(5867).ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n"]))),c=e(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.RL,{height:"80",width:"80",radius:"48",color:"orange",ariaLabel:"watch-loading",wrapperStyle:{justifyContent:"center"},visible:!0})})}},7335:function(n,t,e){e.d(t,{O:function(){return y}});var r,a,i,o,c,u,s=e(5661),p=e(168),f=e(1087),d=e(5867),l=d.ZP.div(r||(r=(0,p.Z)(["\n  margin: 0;\n  padding: 40px 0px;\n"]))),h=d.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 48px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=d.ZP.li(i||(i=(0,p.Z)(["\n  width: 394px;\n  height: 574px;\n  border-radius: 8px;\n"]))),g=d.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: 574px;\n  border-radius: 8px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"])),x),m=d.ZP.h3(c||(c=(0,p.Z)(["\n  margin-top: 8px;\n  padding: 0;\n  text-align: center;\n  color: gray;\n"]))),v=(0,d.ZP)(f.rU)(u||(u=(0,p.Z)(["\n  text-decoration: none;\n"]))),Z=e(7689),b=e(184),y=function(n){var t=n.movies,e=(0,Z.TH)();return console.log(t.length),(0,b.jsx)(l,{children:(0,b.jsx)(h,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,b.jsx)(x,{children:(0,b.jsxs)(v,{to:"/movies/".concat(t),state:{from:e},children:[(0,b.jsx)(g,{src:"".concat(a?s.f+a:s.W),alt:r}),(0,b.jsx)(m,{children:r})]})},t)}))})})}},5661:function(n,t,e){e.d(t,{W:function(){return a},f:function(){return r}});var r="https://image.tmdb.org/t/p/w500",a="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},5321:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,i,o=e(3433),c=e(5861),u=e(9439),s=e(7757),p=e.n(s),f=e(7335),d=e(5705),l=e(2791),h=e(3061),x=e(1087),g=e(5762),m=e(168),v=e(5867),Z=(0,v.ZP)(d.l0)(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-left: 48px;\n"]))),b=v.ZP.button(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border-right: none;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n"]))),y=(0,v.ZP)(d.gN)(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 48px;\n  font: inherit;\n  font-size: 20px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-left: none;\n  outline: none;\n"]))),w=e(6871),k=e(5218),j=e(184);function P(){var n=(0,x.lr)(),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)([]),i=(0,u.Z)(a,2),s=i[0],m=i[1],v=(0,l.useState)(!1),P=(0,u.Z)(v,2),_=P[0],S=P[1],q=e.get("query");return(0,l.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,(0,g.Pv)(q);case 4:(t=n.sent).results.length>0?m((0,o.Z)(t.results)):(k.ZP.error("Oops! No movies found for this search. Try search again"),m([])),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:return n.prev=11,S(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}q&&function(){n.apply(this,arguments)}()}),[q]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.J9,{initialValues:{text:""},onSubmit:function(n,t){t.resetForm(),r({query:n.text})},children:(0,j.jsxs)(Z,{children:[(0,j.jsx)(b,{type:"submit",children:(0,j.jsx)(h.FKI,{})}),(0,j.jsx)(y,{name:"text",type:"text",placeholder:"Search movie"})]})}),_&&(0,j.jsx)(w.a,{}),(0,j.jsx)(f.O,{movies:s}),(0,j.jsx)(k.x7,{position:"top-right",toastOptions:{success:{duration:3e3,theme:{primary:"green",secondary:"black"}}}})]})}},5762:function(n,t,e){e.d(t,{Bt:function(){return f},Ny:function(){return s},Pv:function(){return d},k1:function(){return u},y:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),o=e(5294),c="54ea2173c00863219e76419305eca11f";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=321.a02dd1b6.chunk.js.map