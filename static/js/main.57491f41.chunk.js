(this.webpackJsonpconsilio=this.webpackJsonpconsilio||[]).push([[0],{101:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(70),i=c.n(n),r=c(13),o=c.n(r),d=c(25),j=c(3),l=(c(79),c(80),c(1)),u=function(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h2",{children:"Covid19"}),Object(l.jsx)("ul",{className:"nav-links",children:Object(l.jsx)("li",{children:Object(l.jsxs)("button",{className:"btn",children:[Object(l.jsx)("i",{class:"bi bi-grid-1x2-fill",style:{color:"#ffff"}}),Object(l.jsx)("a",{href:"#",children:"Dashboard"})]})})})]})},b=(c(82),function(e){var t=e.sList,c=e.dList,a=e.load,n=e.setStateQuery,i=e.setDistrictQuery,r=e.setStateNameQuery,o=Object(s.useState)("Kerala"),d=Object(j.a)(o,2),u=d[0],b=d[1],O=Object(s.useState)("Select District"),f=Object(j.a)(O,2),h=f[0],v=f[1];return Object(s.useEffect)((function(){if(!a){var e=t[u].statecode;n(e.toLowerCase())}r(u),i(h)}),[u,n,h,i,t,a,r]),Object(l.jsxs)("div",{className:"district",children:[Object(l.jsx)("div",{className:"",children:Object(l.jsxs)("h2",{children:["Overview : ","Select District"===h?u:h]})}),Object(l.jsxs)("div",{className:"selectors",children:[Object(l.jsx)("div",{className:"select",children:a?"":Object(l.jsx)("select",{value:u,onChange:function(e){b(e.target.value),v("Select District")},children:Object.keys(t).map((function(e){return"State Unassigned"!==e?Object(l.jsx)("option",{value:e,children:e},e):""}))})}),Object(l.jsx)("div",{className:"select",children:a?"":Object(l.jsxs)("select",{value:h,onChange:function(e){return v(e.target.value)},children:[Object(l.jsx)("option",{value:"Select District",children:"Select District"}),Object.keys(c).map((function(e){return"Other State"!==e&&"Unknown"!==e?Object(l.jsx)("option",{value:e,children:e},e):""}))]})})]})]})}),O=c(2),f=c(26),h=c.n(f),v=(c(101),function(e){var t=e.load,c=e.districtD,a=e.selectedS,n=e.selectedD,i=(e.selectedSN,e.Sdate),r=e.SdateData,u=Object(s.useState)([]),b=Object(j.a)(u,2),f=b[0],v=b[1],x=Object(s.useState)(!0),p=Object(j.a)(x,2),m=p[0],S=p[1];return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,s,d,j,l,u,b,f,x,p,m,D,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.toUpperCase(),e.next=3,h.a.get("https://api.covid19india.org/v4/min/timeseries-".concat(t,".min.json"));case 3:if(s=e.sent,d=s.data[t],j=d.districts,c(j),l=[],u=[],"Select District"===n){for(b=d.dates,f=Object.keys(b).length,l=[],u=[],x=f-7;x<f;x++)l.push(Object.keys(b)[x]);l.map((function(e){return u.push(b[e].delta)})),i(Object(O.a)(l)),r(Object(O.a)(u))}else{for(console.log(a,d),p=d.districts[n].dates,m=Object.keys(p).length,l=[],u=[],D=m-7;D<m;D++)l.push(Object.keys(p)[D]);l.map((function(e){return u.push(p[e].delta)})),i(Object(O.a)(l)),r(Object(O.a)(u))}g=[{status:"Confirmed",data:u[6].confirmed,increase:u[6].confirmed-u[5].confirmed,icon:"fas fa-hospital-user"},{status:"Recovered",data:u[6].recovered,increase:u[6].recovered-u[5].recovered,icon:"bi bi-heart-fill"},{status:"Deceased",data:u[6].deceased,increase:u[6].deceased-u[5].deceased,icon:"bi bi-x-octagon-fill"}],v([].concat(g)),S(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,n]),Object(l.jsx)("div",{className:"cards",children:m||t?"Loading..":f.map((function(e,t){var c="-";return void 0!==e.data&&(c=e.data),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)("i",{className:e.icon,style:{color:"#ffff"}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:e.status}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"-"===c?"-":e.increase})]})]},t)}))})}),x=c(73),p=(c(208),function(e){var t=e.stateD,c=e.stateDateD,s=[],a=[];c.map((function(e){void 0!==e&&("confirmed"in e&&s.push(e.confirmed),"recovered"in e&&a.push(e.recovered))}));var n={labels:Object(O.a)(t),datasets:[{label:"Confirmed",data:s,fill:!1,borderColor:"rgb(255, 7, 58)",tension:.1},{label:"Recovered",data:a,fill:!1,borderColor:"rgb(40, 167, 69)",tension:.1}]};return Object(l.jsx)("div",{className:"chart",children:Object(l.jsx)(x.a,{data:n,height:300,options:{maintainAspectRatio:!1}})})});var m=function(){var e=Object(s.useState)({}),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)({}),i=Object(j.a)(n,2),r=i[0],O=i[1],f=Object(s.useState)("kl"),x=Object(j.a)(f,2),m=x[0],S=x[1],D=Object(s.useState)("Kerala"),g=Object(j.a)(D,2),N=g[0],y=g[1],k=Object(s.useState)("Select District"),w=Object(j.a)(k,2),C=w[0],L=w[1],Q=Object(s.useState)([]),E=Object(j.a)(Q,2),R=E[0],U=E[1],A=Object(s.useState)([]),J=Object(j.a)(A,2),K=J[0],_=J[1],B=Object(s.useState)(!0),I=Object(j.a)(B,2),M=I[0],q=I[1];return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19india.org/state_district_wise.json");case 2:return t=e.sent,e.next=5,a(t.data);case 5:q(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"overview",children:[Object(l.jsx)(b,{sList:c,dList:r,load:M,setStateQuery:function(e){return S(e)},setDistrictQuery:function(e){return L(e)},setStateNameQuery:function(e){return y(e)}}),Object(l.jsx)(v,{load:M,sList:c,selectedS:m,selectedSN:N,selectedD:C,Sdate:function(e){return U(e)},SdateData:function(e){return _(e)},districtD:function(e){return O(e)}}),Object(l.jsx)(p,{stateD:R,stateDateD:K})]})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))},79:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){}},[[209,1,2]]]);
//# sourceMappingURL=main.57491f41.chunk.js.map