(function(t){function e(e){for(var a,s,i=e[0],r=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o={app:0},c=[];function i(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-644a48f0":"228d9954","chunk-7462b17c":"31720387","chunk-839028d8":"c6d96d79","chunk-8b5cf1be":"98dc05aa","chunk-bdfdabda":"5a51c50d","chunk-c5db292a":"e8669fb5"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-644a48f0":1,"chunk-7462b17c":1,"chunk-839028d8":1,"chunk-8b5cf1be":1,"chunk-bdfdabda":1,"chunk-c5db292a":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-644a48f0":"63f953a6","chunk-7462b17c":"f946070f","chunk-839028d8":"fc96dd7d","chunk-8b5cf1be":"855c6aec","chunk-bdfdabda":"f10761fb","chunk-c5db292a":"0c2966c4"}[t]+".css",o=r.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[t],d.parentNode.removeChild(d),n(c)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=i(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",p.name="ChunkLoadError",p.type=a,p.request=s,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c6d":function(t,e,n){"use strict";var a=n("cebe"),s=n.n(a),o=n("c4f5"),c=s.a.create();c.interceptors.response.use((function(t){return 0!==t.data.code?(Object(o["a"])({content:t.data.msg,type:"error",duration:1500}),null):t.data.data})),e["a"]=c},"20ac":function(t,e,n){"use strict";n("9521")},"2c81":function(t,e,n){t.exports=n.p+"img/404.5b8a38c7.jpg"},"36d5":function(t,e,n){"use strict";n("94c4")},4045:function(t,e,n){t.exports=n.p+"img/loading.6cc04d10.svg"},4174:function(t,e,n){t.exports=n.p+"img/default.969421d9.gif"},"431a":function(t,e,n){"use strict";n("8517")},"45e4":function(t,e,n){"use strict";n("eada")},"4b51":function(t,e,n){},"4c07":function(t,e,n){},"536b":function(t,e,n){t.exports={message:"showMessage-module_message_3v7H3","message-info":"showMessage-module_message-info_1ZW3l","message-success":"showMessage-module_message-success_gMWiM","message-warn":"showMessage-module_message-warn_1Jfh3","message-error":"showMessage-module_message-error_2UIr3",icon:"showMessage-module_icon_3nHuj"}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),s=n.n(a),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[n("div",{staticClass:"aside"},[n("SiteAside")],1)]},proxy:!0},{key:"default",fn:function(){return[n("RouterView")]},proxy:!0}])}),n("ToTop")],1)},c=[],i=n("5849"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"siteAside-container"},[t.data?[n("div",{staticClass:"avatar"},[n("Avatar",{attrs:{url:t.data.avatar}}),n("h1",{staticClass:"title"},[t._v(t._s(t.data.siteTitle))])],1),n("Menu"),t.data?n("Contact"):t._e(),n("p",{staticClass:"footer"},[t._v(t._s(t.data.icp))])]:t._e()],2)},l=[],u=n("5530"),p=n("77c0"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"menu-container"},t._l(t.items,(function(e,a){return n("li",{key:a},[n("router-link",{attrs:{exact:e.exact,to:{name:e.name}}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:e.icon}})],1),n("span",[t._v(t._s(e.title))])])],1)})),0)},m=[],h=(n("9911"),n("2ca0"),n("d010")),g={data:function(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Blog",title:"文章",icon:"article",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"project",exact:!0},{name:"Message",title:"留言板",icon:"messageBoard",exact:!0}]}},methods:{isSelected:function(t){var e=t.link.toLowerCase(),n=location.pathname.toLowerCase();return console.log(e,n),t.startWith?n.startsWith(e):location.pathname.toLowerCase()===e.toLowerCase()}},components:{Icon:h["a"]}},f=g,b=(n("45e4"),n("2877")),v=Object(b["a"])(f,d,m,!1,null,"3a502f5e",null),y=v.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"contact-container"},[n("li",[n("a",{attrs:{target:"_blank",href:t.data.github}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[t._v(t._s(t.data.githubName))])])]),n("li",[n("a",{attrs:{href:"mailto:"+t.data.mail}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"email"}})],1),n("span",[t._v(t._s(t.data.mail))])])]),n("li",[n("a",{attrs:{href:"tencent://message/?Menu=yes&uin="+t.data.qq+"&Service=300&sigT=45a1e5847943b64c6ff3990fBa9e644d2b31356cb0b4ac6b24663a3c8dd0fBaa12a595b1714f9d45"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[t._v(t._s(t.data.qq))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:t.data.qqQrCode,alt:""}})])]),n("li",[n("a",{attrs:{href:"mailto:13145048898@163.com"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[t._v(t._s(t.data.weixin))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:t.data.weixinQrCode,alt:""}})])])])},w=[],k=(n("a9e3"),n("5880")),x={components:{Icon:h["a"]},computed:Object(k["mapState"])("setting",["data"]),props:{github:{type:String,default:"shinesunj"},email:{type:String,default:"13145048898@163.com"},qq:{type:Number,default:1484969992},weixin:{type:Number,default:15052398473}}},C=x,O=(n("8483"),Object(b["a"])(C,j,w,!1,null,"6568e2de",null)),S=O.exports,_={components:{Avatar:p["a"],Menu:y,Contact:S},computed:Object(u["a"])({},Object(k["mapState"])("setting",["data"]))},T=_,A=(n("8554"),Object(b["a"])(T,r,l,!1,null,"4b6fd1f0",null)),q=A.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"to-top-container",on:{click:t.handleClick}},[t._v("Top")])},z=[],M={data:function(){return{show:!1}},created:function(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed:function(){this.$bus.$off("mainScroll",this.handleScroll)},methods:{handleScroll:function(t){this.show=!!t&&t.scrollTop>=500},handleClick:function(){this.$bus.$emit("setMainScroll",0)}}},P=M,L=(n("a0eb"),Object(b["a"])(P,R,z,!1,null,"6d4ea437",null)),E=L.exports,D={components:{Layout:i["a"],SiteAside:q,ToTop:E}},N=D,$=(n("431a"),Object(b["a"])(N,o,c,!1,null,"9b79e982",null)),H=$.exports,I=(n("4b51"),n("6389")),B=n.n(I),J=n("1da1"),V=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"not-found-container"},[a("img",{attrs:{src:n("2c81"),alt:""}})])}],G={},K=G,Q=(n("809b"),Object(b["a"])(K,V,W,!1,null,"75c09a01",null)),F=Q.exports,U=(n("a5d8"),n("323e"));function X(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(U["start"])(),e.next=4;break;case 4:return e.next=6,t();case 6:return n=e.sent,Object(U["done"])(),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))}Object(U["configure"])({trickleSpeed:20,showSpinner:!1});var Y=[{name:"Home",path:"/index.html",component:X((function(){return n.e("chunk-644a48f0").then(n.bind(null,"16c0"))})),meta:{title:"首页"}},{name:"About",path:"/About",component:X((function(){return n.e("chunk-839028d8").then(n.bind(null,"0737"))})),meta:{title:"关于我"}},{name:"Blog",path:"/article",component:X((function(){return n.e("chunk-8b5cf1be").then(n.bind(null,"3b5d"))})),meta:{title:"文章"}},{name:"CategoryBlog",path:"/article/cate/:categoryId",component:X((function(){return n.e("chunk-8b5cf1be").then(n.bind(null,"3b5d"))})),meta:{title:"文章"}},{name:"BlogDetail",path:"/article/:id",component:X((function(){return n.e("chunk-7462b17c").then(n.bind(null,"ccf9"))})),meta:{title:"文章详情"}},{name:"Message",path:"/Message",component:X((function(){return n.e("chunk-bdfdabda").then(n.bind(null,"8fc4"))})),meta:{title:"留言板"}},{name:"Project",path:"/Project",component:X((function(){return n.e("chunk-c5db292a").then(n.bind(null,"34fb"))})),meta:{title:"项目和效果"}},{name:"NotFound",path:"*",component:F}],Z=Y,tt=n("0c6d");function et(){return nt.apply(this,arguments)}function nt(){return nt=Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,tt["a"].get("/api/banner");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}var at={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchBanner:function(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.data.length){e.next=2;break}return e.abrupt("return");case 2:return t.commit("setLoading",!0),e.next=5,et();case 5:n=e.sent,t.commit("setData",n),t.commit("setLoading",!1);case 8:case"end":return e.stop()}}),e)})))()}}};function st(){return ot.apply(this,arguments)}function ot(){return ot=Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,tt["a"].get("/api/setting");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),ot.apply(this,arguments)}var ct=n("ed08"),it={namespaced:!0,state:{loading:!1,data:null},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchSetting:function(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setLoading",!0),e.next=3,st();case 3:if(n=e.sent,t.commit("setData",n),t.commit("setLoading",!1),!n.favicon){e.next=15;break}if(a=document.querySelector("link[ref='shortcut icon']"),!a){e.next=10;break}return e.abrupt("return");case 10:a=document.createElement("link"),a.rel="shortcut icon",a.type="images/x-icon",a.href=n.favicon,document.querySelector("head").appendChild(a);case 15:n.siteTitle&&ct["c"].setSiteTitle(n.siteTitle);case 16:case"end":return e.stop()}}),e)})))()}}};function rt(){return lt.apply(this,arguments)}function lt(){return lt=Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,tt["a"].get("/api/about");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),lt.apply(this,arguments)}var ut={namespaced:!0,state:{loading:!1,data:""},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchAbout:function(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.data){e.next=2;break}return e.abrupt("return");case 2:return t.commit("setLoading",!0),e.next=5,rt();case 5:n=e.sent,t.commit("setData",n),t.commit("setLoading",!1);case 8:case"end":return e.stop()}}),e)})))()}}};function pt(){return dt.apply(this,arguments)}function dt(){return dt=Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,tt["a"].get("/api/project");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),dt.apply(this,arguments)}var mt={namespaced:!0,state:{loading:!1,data:null},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchProject:function(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.data){e.next=2;break}return e.abrupt("return");case 2:return t.commit("setLoading",!0),e.next=5,pt();case 5:n=e.sent,t.commit("setData",n),t.commit("setLoading",!1);case 8:case"end":return e.stop()}}),e)})))()}}};window.Vuex||Object(k["install"])(s.a);var ht=new k["Store"]({modules:{banner:at,setting:it,about:ut,project:mt},strict:!0});window.VueRouter||s.a.use(B.a);var gt=new B.a({routes:Z,mode:"history"});gt.afterEach((function(t,e){t.meta.title&&ct["c"].setRouteTitle(t.meta.title)}));var ft=gt,bt=n("96eb"),vt=n.n(bt);vt.a.mock("/api/banner","get",{code:0,msg:"",data:[{id:"1",midImg:"http://mdrs.yuanjin.tech/img/20201031141507.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031141350.jpg",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"2",midImg:"http://mdrs.yuanjin.tech/img/20201031205550.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031205551.jpg",title:"血火同源",description:"如果我回头，一切都完了"},{id:"3",midImg:"http://mdrs.yuanjin.tech/img/20201031204401.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031204403.jpg",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var yt=n("ade3"),jt=n("b383"),wt=n.n(jt);vt.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),vt.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){var e=wt.a.parse(t.url),n=Object(yt["a"])({"total|2000-3000":0},"rows|".concat(e.limit||10),[{id:"@guid",title:"@ctitle(1, 50)",description:"@cparagraph(1, 10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":["@image(300x250, @color, #fff, @natural)",null],createDate:"@date('T')"}]);return vt.a.mock({code:0,msg:"",data:n})})),vt.a.mock(/^\/api\/blog\/[^/]+$/,"get",(function(t){var e=wt.a.parse(t.url);return vt.a.mock({code:0,msg:"",data:Object(yt["a"])({"total|2000-3000":0},"rows|".concat(e.limit||10),[{id:"@guid",title:"@ctitle(1, 50)",description:"@cparagraph(1, 10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":[vt.a.Random.image("300x250","#000","#fff","Random Image"),null],createDate:"@date('T')"}])})})),vt.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[vt.a.Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n  <p>阅读本文，你需要首先知道：</p><ol>\n  <li>浏览器的同源策略</li>\n  <li>跨域问题</li>\n  <li>JSONP原理</li>\n  <li>cookie原理</li>\n  </ol>\n  </blockquote>\n  <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n  <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n  <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n  </ol>\n  <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n        <figcaption>image-20200421152122793</figcaption>\n    \n      </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n  <li><strong>简单请求</strong></li>\n  <li><strong>需要预检的请求</strong></li>\n  <li><strong>附带身份凭证的请求</strong></li>\n  </ul>\n  <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n  <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n  <li>get</li>\n  <li>post</li>\n  <li>head</li>\n  </ul>\n  </li>\n  <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n  <li><code>Accept</code></li>\n  <li><code>Accept-Language</code></li>\n  <li><code>Content-Language</code></li>\n  <li><code>Content-Type</code></li>\n  <li><code>DPR</code></li>\n  <li><code>Downlink</code></li>\n  <li><code>Save-Data</code></li>\n  <li><code>Viewport-Width</code></li>\n  <li><code>Width</code></li>\n  </ul>\n  </li>\n  <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n  <li><code>text/plain</code></li>\n  <li><code>multipart/form-data</code></li>\n  <li><code>application/x-www-form-urlencoded</code></li>\n  </ul>\n  </li>\n  </ol>\n  <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n  \n  <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n  })\n  \n  <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">headers</span>:{\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n    }\n  })\n  \n  <span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n  })\n  \n  <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n    <span class="hljs-attr">headers</span>: {\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    }\n  })</code></pre>\n  <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n  <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n  <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n  <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n  </ol>\n  <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n  <li>*：表示我很开放，什么人我都允许访问</li>\n  <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n  </ul>\n  <blockquote>\n  <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n  <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n        <figcaption>image-20200421162846480</figcaption>\n    \n      </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  <li><strong>服务器允许</strong></li>\n  <li><strong>浏览器发送真实请求</strong></li>\n  <li><strong>服务器完成真实的响应</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n    <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    },\n    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n  });</code></pre>\n  <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  </ol>\n  <pre><code>OPTIONS /api/user HTTP/1.1\n  Host: crossdomain.com\n  ...\n  Origin: http://my.com\n  Access-Control-Request-Method: POST\n  Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n  <li>请求方法为<code>OPTIONS</code></li>\n  <li>没有请求体</li>\n  <li>请求头中包含<ul>\n  <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n  <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n  <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n  </ul>\n  </li>\n  </ul>\n  <ol start="2">\n  <li><strong>服务器允许</strong></li>\n  </ol>\n  <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  Access-Control-Allow-Methods: POST\n  Access-Control-Allow-Headers: a, b, content-type\n  Access-Control-Max-Age: 86400\n  ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n  <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n  <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n  <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n  <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n  </ul>\n  <ol start="3">\n  <li><strong>浏览器发送真实请求</strong></li>\n  </ol>\n  <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com\n  \n  {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n  <li><strong>服务器响应真实请求</strong></li>\n  </ol>\n  <pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n        <figcaption>image-20200421165913320</figcaption>\n    \n      </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n  <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n  xhr.withCredentials = <span class="hljs-literal">true</span>;\n  \n  <span class="hljs-comment">// fetch api</span>\n  fetch(url, {\n    <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n  })</code></pre>\n  <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),vt.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),vt.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(t){var e=wt.a.parse(t.url);return vt.a.mock({code:0,msg:"",data:Object(yt["a"])({"total|50-200":0},"rows|".concat(e.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),vt.a.mock("/api/setting","get",{code:0,msg:"",data:{avatar:"https://avatars.githubusercontent.com/u/49119720?v=4",siteTitle:"我的个人空间",github:"https://github.com/shinesunj?tab=repositories",qq:"1484969992",qqQrCode:"https://avatars.githubusercontent.com/u/49119720?v=4",weixin:"jia1886699382",weixinQrCode:"https://avatars.githubusercontent.com/u/49119720?s=400&u=89f9ff50aa0b04b49e17b7f8c8aba5790cf7f5d1&v=4",mail:"13145048898@163.com",icp:"江苏ICP备17001719号",githubName:"shinesunj",favicon:"https://avatars.githubusercontent.com/u/49119720?v=4"}}),vt.a.mock("/api/about","get",{code:0,msg:"",data:"https://www.strml.net/"}),vt.a.mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@uuid",name:"@ctitle(1, 10)","url|1":["@url",null],"github|1":["@url",null],"description|1-4":["@cparagraph(1, 5)"],thumb:"@image(300x250, @color, #fff, @natural)"}]}),vt.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),vt.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(t){var e=wt.a.parse(t.url);return vt.a.mock({code:0,msg:"",data:Object(yt["a"])({total:52},"rows|".concat(e.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),vt.a.setup({timeout:"1000-2000"});var kt=n("c4f5"),xt=new s.a({});s.a.prototype.$bus=xt;var Ct=xt,Ot=n("4045"),St=n.n(Ot),_t=n("5c5c"),Tt=n.n(_t);function At(t){return t.querySelector("img[data-role=loading]")}function qt(){var t=document.createElement("img");return t.dataset.role="loading",t.src=St.a,t.className=Tt.a.loading,t}var Rt=function(t,e){var n=At(t);if(e.value){if(!n){var a=qt();t.appendChild(a)}}else n&&n.remove()},zt=n("b85c"),Mt=(n("4de4"),n("4174")),Pt=n.n(Mt),Lt=[];function Et(t){t.dom.src=Pt.a;var e=document.documentElement.clientHeight,n=t.dom.getBoundingClientRect(),a=n.height||150;if(n.top>=-a&&n.top<=e){var s=new Image;s.onload=function(){t.dom.src=t.src},s.src=t.src,Lt=Lt.filter((function(e){return e!==t}))}}function Dt(){var t,e=Object(zt["a"])(Lt);try{for(e.s();!(t=e.n()).done;){var n=t.value;Et(n)}}catch(a){e.e(a)}finally{e.f()}}function Nt(t){Dt()}Ct.$on("mainScroll",Object(ct["a"])(Nt,50));var $t={inserted:function(t,e){var n={dom:t,src:e.value};Lt.push(n),Et(n)},unbind:function(t){Lt=Lt.filter((function(e){return e.dom!==t}))}};ht.dispatch("setting/fetchSetting"),s.a.directive("loading",Rt),s.a.directive("lazy",$t),s.a.prototype.$showMessage=kt["a"],new s.a({store:ht,router:ft,render:function(t){return t(H)}}).$mount("#app")},5849:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},s=[],o={},c=o,i=(n("36d5"),n("2877")),r=Object(i["a"])(c,a,s,!1,null,"2354fdd6",null);e["a"]=r.exports},5880:function(t,e){t.exports=Vuex},"5c5c":function(t,e,n){t.exports={loading:"loading-module_loading_1dKWw"}},6389:function(t,e){t.exports=VueRouter},"77c0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},s=[],o=(n("a9e3"),{props:{url:{type:String,required:!0},size:{type:Number,default:150}}}),c=o,i=(n("20ac"),n("2877")),r=Object(i["a"])(c,a,s,!1,null,"66546829",null);e["a"]=r.exports},"809b":function(t,e,n){"use strict";n("dabf")},8483:function(t,e,n){"use strict";n("c92b")},8517:function(t,e,n){},8554:function(t,e,n){"use strict";n("ef91")},"8bbf":function(t,e){t.exports=Vue},"94c4":function(t,e,n){},9521:function(t,e,n){},a0eb:function(t,e,n){"use strict";n("d8f8")},be24:function(t,e,n){"use strict";n("4c07")},c4f5:function(t,e,n){"use strict";n("99af");var a=n("dc93"),s=n("d010"),o=n("536b"),c=n.n(o);e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.content||"",n=t.type||"info",o=t.duration||2e3,i=t.container||document.body;console.log(n);var r=document.createElement("div"),l=Object(a["a"])(s["a"],{type:n});r.innerHTML='<span class="'.concat(c.a.icon,'">').concat(l.outerHTML,"</span><div>").concat(e,"</div>");var u=c.a["message-".concat(n)];r.className="".concat(c.a.message," ").concat(u),t.container&&"static"===getComputedStyle(i).position&&(i.style.position="relative"),i.appendChild(r),r.clientHeight,r.style.opacity=1,r.style.transform="translate(-50%,-50%)",setTimeout((function(){r.style.opacity=0,r.style.transform="translate(-50%,-50%) translateY(-25px)",r.addEventListener("transitionend",(function(){r.remove(),t.callback&&t.callback()}),{once:!0})}),o)}},c92b:function(t,e,n){},cebe:function(t,e){t.exports=axios},d010:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont icon-container",class:t.fontClass})},s=[],o=(n("b64b"),{home:"iconhome",download:"icondirection-down",nodata:"iconzanwushuju",email:"iconemail",github:"icongithub",qq:"iconqq",weixin:"iconweixin",article:"iconwenzhang_huaban",about:"iconiconset0103",project:"iconxiangmu",messageBoard:"iconliuyanban-05",info:"iconinfo",error:"iconErrorCircle",warn:"iconwarn",success:"iconsuccess",top:"iconshangjiantou",down:"iconxiajiantou"}),c=(Object.keys(o),{props:{type:{type:String,required:!0}},computed:{fontClass:function(){return o[this.type]}}}),i=c,r=(n("be24"),n("2877")),l=Object(r["a"])(i,a,s,!1,null,"ca23590c",null);e["a"]=l.exports},d8f8:function(t,e,n){},dabf:function(t,e,n){},dc93:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("8bbf"),s=n.n(a);function o(t,e){var n=new s.a({render:function(n){return n(t,{props:e})}});return n.$mount(),n.$el}},eada:function(t,e,n){},ed08:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return r}));n("c4f5"),n("dc93"),n("4d90"),n("d3b7"),n("25f0"),n("99af");var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(+t),a=(n.getMonth()+1).toString().padStart(2,"0"),s=n.getDate().toString().padStart(2,"0"),o="".concat(n.getFullYear(),"-").concat(a,"-").concat(s);if(e){var c=n.getHours().toString().padStart(2,"0"),i=n.getMinutes().toString().padStart(2,"0"),r=n.getSeconds().toString().padStart(2,"0");o+=" ".concat(c,":").concat(i,":").concat(r)}return o},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=null;return function(){for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){t.apply(void 0,s)}),e)}},o="",c="";function i(){document.title=o||c?o&&!c?o:!o&&c?c:"".concat(o,"-").concat(c):"loading..."}var r={setRouteTitle:function(t){o=t,i()},setSiteTitle:function(t){c=t,i()}}},ef91:function(t,e,n){}});