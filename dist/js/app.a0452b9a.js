(function(e){function t(t){for(var n,c,o=t[0],d=t[1],i=t[2],l=0,u=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);f&&f(t);while(u.length)u.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1283abd6"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var i=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("ecee"),s=a("c074"),c=a("ad3d");r["c"].add(s["a"]),n["default"].component("font-awesome-icon",c["a"]);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{staticStyle:{"text-align":"center"},attrs:{app:"",color:"primary",dark:""}},[a("h2",{staticStyle:{"text-align":"center",color:"black"}},[e._v("Serainu Dashboard Task.")])]),a("v-main",{staticStyle:{"background-color":"rgb(247, 237, 237)"}},[a("HelloWorld")],1)],1)},d=[],i=a("5530"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("v-card",{staticStyle:{"padding-left":"5%","padding-right":"5%","padding-bottom":"5%"}},[a("v-card-title",{staticClass:"text-center"},[a("b",[e._v("Overall Threat Exposure Score.")])]),a("v-card-subtitle",{staticStyle:{color:"black","text-align":"center"}},[a("b",[e._v("Exposure Score")])]),a("p",{staticStyle:{"font-size":"13px"}},[e._v(" This core reflects the current exposure asociated with machines in your organisation. ")]),a("p",{staticStyle:{"font-size":"13px"}},[e._v(" Score is potentially impacted by active exceptions. ")]),a("v-row",[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("canvas",{staticStyle:{"margin-top":"-30%"},attrs:{id:"canvas",height:"200",width:"200"}})]),a("v-col",{staticStyle:{"margin-top":"-8%","text-align":"center","font-size":"10px"},attrs:{md:"12","offset-md":"0"}},[a("v-chip",{staticClass:"ma-2",attrs:{color:"green"}}),e._v(" 0% - 25% Low "),a("v-chip",{staticClass:"ma-2",attrs:{color:"yellow"}}),e._v(" 26% - 50% Medium "),a("v-chip",{staticClass:"ma-2",attrs:{color:"orange"}}),e._v(" 51% - 75% High "),a("v-chip",{staticClass:"ma-2",attrs:{color:"red"}}),e._v(" 76% - 100% Very High ")],1)],1)],1)],1)],1),a("v-row",{staticStyle:{"text-align":"center"}},[e._l(e.dataGetter,(function(t,n){return[a("v-col",{key:n,attrs:{md:"4"}},[a("v-card",{staticStyle:{"padding-left":"5%","padding-right":"5%","padding-bottom":"5%",height:"100%"}},[a("v-card-title",{staticStyle:{"text-align":"center",color:"black"}},[e._v(" "+e._s(t.indicatorDetails.description)+" ")]),a("v-card-subtitle",{staticStyle:{color:"black","text-align":"center"}},[a("b",[e._v("TES Score For "+e._s(t.indicatorDetails.name)+" :")])]),a("v-simple-table",[[a("thead",[a("tr",{staticStyle:{"background-color":"#fcdede"}},[a("td",{staticStyle:{"text-align":"center","font-size":"10px","text-decoration":"bold"}},[a("b",[e._v("CVEQ Domain")])]),a("td",{staticStyle:{"text-align":"center","font-size":"10px"}},[a("b",[e._v("CVEQ Threat Indicator")])]),a("td",{staticStyle:{"text-align":"center","font-size":"10px"}},[a("b",[e._v("Deteacted")])]),a("td",{staticStyle:{"text-align":"center","font-size":"10px"}},[a("b",[e._v("Validated")])])])]),a("tbody",[e._l(t.CVECThreatIndicators,(function(t,n){return[a("tr",{key:n},[a("td",{key:n+"first",staticStyle:{"text-align":"center","font-size":"10px"}},[e._v(" "+e._s(t.uniqueIdentifier)+" ")]),a("td",{key:n+"second",staticStyle:{"text-align":"center","font-size":"10px"}},[e._v(" "+e._s(t.name)+" ")]),a("v-tooltip",{staticStyle:{"background-color":"black",color:"red"},attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(r){var s=r.on,c=r.attrs;return[t.detacted>=0&&t.detacted<=1.25?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"rgb(0, 255, 0, 0.4)","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.detacted)+" ")]):e._e(),t.detacted>=1.26&&t.detacted<=2.5?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"yellow","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.detacted)+" ")]):e._e(),t.detacted>=2.6&&t.detacted<=3.75?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"orange","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.detacted)+" ")]):e._e(),t.detacted>=3.76&&t.detacted<=5?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"rgb(255, 0, 0, 0.4)","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.detacted)+" ")]):e._e()]}}],null,!0)},[a("span",[e._v(e._s(t.name))])]),a("v-tooltip",{staticStyle:{"background-color":"black",color:"red"},attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(r){var s=r.on,c=r.attrs;return[t.validated/t.detacted*100>=0&&t.validated/t.detacted*100<=25?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"rgb(255, 0, 0, 0.4)","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.validated)+" ")]):e._e(),t.validated/t.detacted*100>=26&&t.validated/t.detacted*100<=50?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"orange","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.validated)+" ")]):e._e(),t.validated/t.detacted*100>=51&&t.validated/t.detacted*100<=75?a("td",e._g(e._b({key:n+"third",staticStyle:{"background-color":"yellow","text-align":"center","font-size":"10px"}},"td",c,!1),s),[e._v(" "+e._s(t.validated)+" ")]):e._e(),t.validated/t.detacted*100>=76&&t.validated/t.detacted*100<=100?a("td",e._g(e._b({key:n+"third",staticStyle:{"text-align":"center","font-size":"10px","background-color":"rgb(0, 255, 0, 0.4)"}},"td",c,!1),s),[e._v(" "+e._s(t.validated)+" ")]):e._e()]}}],null,!0)},[a("span",[e._v(e._s(t.name))])])],1)]}))],2)]],2)],1)],1)]}))],2)],1)},f=[],u=a("d092"),b=a.n(u),j=a("2f62"),p={computed:Object(i["a"])({},Object(j["b"])(["dataGetter"])),mounted:function(){var e=document.getElementById("canvas").getContext("2d"),t=new b.a(e,{type:"gauge",data:{datasets:[{value:48,data:[25,50,75,100],backgroundColor:["green","yellow","orange","red"]}]},options:{needle:{radiusPercentage:2,widthPercentage:3.2,lengthPercentage:80,color:"rgba(0, 0, 0, 1)"},valueLabel:{bottomMarginPercentage:-10,display:!0,fontSize:15,formatter:function(e){return Math.round(e)+" %  /  100%"},color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 1)",borderRadius:5,padding:{top:10,bottom:10},margin:{top:10}}}});console.log(t)},name:"HelloWorld",data:function(){return{desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]}}},g=p,m=a("2877"),v=Object(m["a"])(g,l,f,!1,null,null,null),h=v.exports,y={name:"App",computed:Object(i["a"])({},Object(j["b"])(["dataGetter"])),created:function(){this.$store.dispatch("fetchData")},components:{HelloWorld:h},data:function(){return{}}},_=y,k=Object(m["a"])(_,o,d,!1,null,null,null),x=k.exports,S=a("bc3a"),z=a.n(S),w={data:null},O={},C={fetchData:function(){z.a.get("http://127.0.0.1:8001/api/fetchData").then((function(e){200===e.status&&(w.data=e.data,console.log("This is the data."),console.log(w.data))})).catch((function(e){console.log(e)}))}},E={dataGetter:function(e){return e.data}},P={state:w,mutations:O,actions:C,getters:E},T=P;n["default"].use(j["a"]);var D=new j["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{NavigationModule:T}}),F=(a("d3b7"),a("8c4f")),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},M=[],V={name:"Home",components:{HelloWorld:h}},L=V,W=Object(m["a"])(L,H,M,!1,null,null,null),A=W.exports;n["default"].use(F["a"]);var G=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],I=new F["a"]({routes:G,mode:"history"}),$=I,q=a("ce5b"),J=a.n(q);a("bf40");n["default"].use(J.a);var N=new J.a({theme:{themes:{light:{primary:"#29ab87",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");n["default"].config.productionTip=!1,new n["default"]({store:D,router:$,vuetify:N,render:function(e){return e(x)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a0452b9a.js.map