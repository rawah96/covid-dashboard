(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{101:function(e,t,a){e.exports=a(222)},106:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=(a(106),a(107),a(14)),l=a.n(o),i=a(21),u=a(15),d=(a(109),a(254)),m=a(255),v=a(256),f=a(84),h=a.n(f),p=a(85),E=a.n(p),b=(a(110),a(248)),y=a(252),j=a(253),w=(a(111),a(86)),O=a(45),g=a.n(O),x={legend:{display:!1},element:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return g()(e).format("0a")}}}]}};var C=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(n.useState)({}),s=Object(u.a)(c,2),o=s[0],d=s[1],m=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var r in e.cases){if(t){var c={x:r,y:e[a][r]-t};n.push(c)}t=e[a][r]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/historical/all?lastdays=120",e.next=3,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=m(e,"cases");d(t)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",{className:"line"},o.length>0?r.a.createElement(w.Line,{options:x,data:{datasets:[{backgroundColor:"orange",borderColor:"orange",data:o}]}}):null)},N=a(46),S=a.n(N);var k=function(e){var t=e.title,a=(e.dailyCases,e.total);return a?r.a.createElement("div",{className:"stats"},r.a.createElement(b.a,{className:"info-box"},r.a.createElement(y.a,null,r.a.createElement(j.a,{color:"textSecondary",className:"box-title"},t),r.a.createElement("h2",{className:"box-cases"},r.a.createElement(S.a,{duration:2,separator:",",start:0,end:a}))))):"loading"},F=(a(213),a(95)),A=(a(257),a(258),function(e){var t=Object(F.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t});var D=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://disease.sh/v3/covid-19/countries",fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));var t=A(e);c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"table"},r.a.createElement("h1",{className:"th"},"Cases by Country "),r.a.createElement("br",null),r.a.createElement("tr",null,r.a.createElement("td",null,"Country"),r.a.createElement("td",null,"Cases"),r.a.createElement("br",null),r.a.createElement("br",null)),a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.cases?r.a.createElement(S.a,{separator:",",start:e.cases,end:e.cases}):"loading ..."))}))))};a(214),a(259),a(260);var I=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),f=(o[0],o[1]);Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/countries",e.next=3,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));c(t),f(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=Object(n.useState)("worldwide"),b=Object(u.a)(p,2),y=b[0],j=b[1],w=Object(n.useState)({}),O=Object(u.a)(w,2),g=O[0],x=O[1],N=Object(n.useState)({lat:34.80746,lng:-40.4796}),S=Object(u.a)(N,2),F=(S[0],S[1]),A=Object(n.useState)(3),I=Object(u.a)(A,2),L=(I[0],I[1]),R=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("e ==> ",t.target.value),a=t.target.value,j(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=6,fetch(n).then((function(e){return e.json()})).then((function(e){j(a),x(e),e.countryInfo.lat&&e.countryInfo.lon&&F([e.countryInfo.lat,e.countryInfo.long]),L(4)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return x(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("h2",null,"COVID-19"),r.a.createElement("img",{src:h.a,width:"6%"})," ",r.a.createElement("img",{src:E.a,width:"6%"})),r.a.createElement(d.a,{className:"app-dropdown"},r.a.createElement(m.a,{id:"select",variant:"outlined",value:y,onChange:function(e){return R(e)}},r.a.createElement(v.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(v.a,{value:e.value},e.name)}))))),r.a.createElement("div",{id:"title"},r.a.createElement("h1",{id:"total"},"Total"),r.a.createElement("div",{id:"empty"})),r.a.createElement("div",{className:"app-stats"},r.a.createElement("div",null,r.a.createElement("div",{id:"stats"},r.a.createElement(k,{title:"Current",dailyCases:g.todayCases,total:g.cases}),r.a.createElement(k,{title:"Recovered",dailyCases:g.todayRecovered,total:g.recovered}),r.a.createElement(k,{title:"Deaths",dailyCases:g.todayDeaths,total:g.deaths})),r.a.createElement("div",{className:"line-chart"},r.a.createElement(C,null))),r.a.createElement(D,null)))},L=(a(215),a(65)),R=a.n(L),B=a(91),M=a.n(B),W=a(92),J=a(93),T=a.n(J),U=a(94),V=a.n(U);R.a.fcRoot(M.a,W.a,T.a,V.a);var Y=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/continents",e.next=3,fetch("https://disease.sh/v3/covid-19/continents").then((function(e){return e.json()})).then((function(e){c(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=a.map((function(e){return e.cases})),o={type:"world",width:"1000",height:"600",dataFormat:"json",dataSource:{chart:{caption:"COVID-19 SPREAD",subcaption:"2019-2020",includevalueinlabels:"1",labelsepchar:": ",entityFillHoverColor:"#FFF9C4",theme:"fusion"},colorrange:{minvalue:"0",code:"#FFE0B2",gradient:"1",color:[{minvalue:"28.95",maxvalue:"1.28",color:"#FFD74D"},{minvalue:"3.68",maxvalue:"6.53",color:"#FB8C00"},{minvalue:"7.41",maxvalue:"7.5",color:"#E65100"}]},data:[{id:"NA",value:s[0],showLabel:"1"},{id:"SA",value:s[1],showLabel:"1"},{id:"AS",value:s[2],showLabel:"1"},{id:"EU",value:s[3],showLabel:"1"},{id:"AF",value:s[4],showLabel:"1"},{id:"AU",value:s[5],showLabel:"1"}]}};return r.a.createElement("div",{className:"map"},r.a.createElement(R.a,o))};a(221);var H=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(I,null),r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement(Y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a.p+"static/media/virus.4e113c7e.svg"},85:function(e,t,a){e.exports=a.p+"static/media/mask.6e5b429d.svg"}},[[101,1,2]]]);
//# sourceMappingURL=main.e114c022.chunk.js.map