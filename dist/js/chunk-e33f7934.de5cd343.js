(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e33f7934"],{"057f":function(t,e,r){var n=r("fc6a"),s=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return s(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?a(t):s(n(t))}},"159b":function(t,e,r){var n=r("da84"),s=r("fdbc"),i=r("17c2"),o=r("9112");for(var a in s){var c=n[a],f=c&&c.prototype;if(f&&f.forEach!==i)try{o(f,"forEach",i)}catch(u){f.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,s=r("a640"),i=s("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),s=r("b622"),i=r("2d00"),o=s("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1e4b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-100 w-screen h-screen"},[r("div",{staticClass:"w-full h-full flex items-center justify-center"},[r("el-card",{staticClass:"chat flex-none",attrs:{"body-style":{padding:"0px"}}},[r("div",{staticClass:"flex w-full h-full"},[r("div",{staticClass:"w-16 bg-gray-900"}),r("div",{staticClass:"w-64 bg-gray-100 flex flex-col border-r"},[r("div",{staticClass:"flex h-12 px-3 items-center"},[r("el-input",{attrs:{size:"mini",placeholder:"搜索","prefix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),r("el-button",{staticClass:"ml-2",attrs:{size:"mini",icon:"el-icon-plus"},on:{click:function(e){return t.onRoomAdd()}}})],1),r("overlay-scrollbars",{staticClass:"flex-1"},t._l(t.rooms,(function(e,n){return r("div",{key:n,staticClass:"flex p-3",class:t.activeIndex===n?"bg-gray-300":"",on:{click:function(e){return t.clickRoomItem(n)}}},[r("el-image",{staticClass:"w-10 h-10 mr-2",attrs:{fit:"fit",src:e.avatarurl}}),r("div",{staticClass:"flex-1"},[r("div",{staticClass:"flex items-center justify-between mb-1"},[r("div",{staticClass:"truncate"},[t._v(t._s(e.name_note?e.name_note:e.name))]),r("div",{staticClass:"text-xs text-gray-400"},[t._v(t._s(e.last_message?e.last_message.created_at:""))])]),r("div",{staticClass:"flex items-center justify-between text-xs text-gray-400"},[r("div",{staticClass:"truncate"},[t._v(t._s(e.last_message?e.last_message.content:""))]),r("div",[e.unread_count>0?r("i",{staticClass:"el-icon-message-solid"},[t._v(t._s(e.unread_count))]):t._e()])])])],1)})),0)],1),r("div",{staticClass:"flex flex-col h-full w-140"},[r("div",{staticClass:"h-12 px-3 flex items-center justify-between bg-gray-50 border-b"},[r("div",[t._v("聊天")]),r("div",[r("i",{staticClass:"el-icon-more"})])]),r("overlay-scrollbars",{staticClass:"flex-1"},[r("div",{staticClass:"bg-gray-50 min-h-full"},t._l(t.messages,(function(e,n){return r("div",{key:n},[r("div",{staticClass:"flex"},[r("el-image",{staticClass:"w-10 h-10 mr-2",attrs:{fit:"fit",src:e.avatarurl}}),r("div",[r("div",[t._v("123123")]),r("div",[t._v(t._s(e.content))])])],1)])})),0)]),r("div",{staticClass:"flex-none p-3 border-t"},[r("div",{staticClass:"mb-1 text-xl text-gray-500"},[r("i",{staticClass:"el-icon-picture-outline mr-2"}),r("i",{staticClass:"el-icon-chat-line-round mr-2"})]),r("overlay-scrollbars",{staticClass:"h-20"},[r("el-input",{staticClass:"w-full chat-textarea",attrs:{type:"textarea",autosize:{minRows:3},placeholder:"请输入内容"},model:{value:t.messageStr,callback:function(e){t.messageStr=e},expression:"messageStr"}})],1),r("div",{staticClass:"text-right mt-2"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.sendMessage()}}},[t._v("发送")])],1)],1)],1)])])],1)])},s=[],i=r("5530"),o=r("2f62"),a={name:"index",data:function(){return{messages:[],textarea1:"",keyword:"",roomAddForm:{room_id:"",user_id:""},rooms:[],activeIndex:-1,roomId:"",messageStr:""}},watch:{roomListData:function(t){this.rooms=t.data},roomAddData:function(t){console.log(t)},messageListData:function(t){this.messages=t.data},messageAddData:function(t){this.messages.push(t.data),this.messageStr=""}},mounted:function(){this.roomList()},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["roomList","roomAdd","messageList","messageAdd"])),{},{onRoomAdd:function(){this.roomAdd(this.roomAddForm)},clickRoomItem:function(t){this.activeIndex=t,this.roomId=this.rooms[t].id,this.messageList({room_id:this.roomId})},sendMessage:function(){this.messageAdd({room_id:this.roomId,content:this.messageStr,type:0})}}),computed:Object(i["a"])({},Object(o["c"])(["roomListData","roomAddData","messageListData","messageAddData"]))},c=a,f=(r("dff4"),r("2877")),u=Object(f["a"])(c,n,s,!1,null,"6b7493c0",null);e["default"]=u.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),s=r("b727").filter,i=r("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),s=r("e8b5"),i=r("b622"),o=i("species");t.exports=function(t,e){var r;return s(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),s=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});s(e,t)||o(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),s=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?s.f(t,o,i(0,r)):t[o]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),s=r("da84"),i=r("d066"),o=r("c430"),a=r("83ab"),c=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),m=r("825a"),v=r("7b0b"),p=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),w=r("df75"),x=r("241c"),O=r("057f"),j=r("7418"),C=r("06cf"),_=r("9bf2"),S=r("d1e7"),k=r("9112"),P=r("6eeb"),A=r("5692"),D=r("f772"),E=r("d012"),I=r("90e3"),L=r("b622"),N=r("e538"),R=r("746f"),z=r("d44e"),F=r("69f3"),J=r("b727").forEach,M=D("hidden"),T="Symbol",B="prototype",Q=L("toPrimitive"),W=F.set,$=F.getterFor(T),q=Object[B],G=s.Symbol,H=i("JSON","stringify"),K=C.f,U=_.f,V=O.f,X=S.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=s.QObject,st=!nt||!nt[B]||!nt[B].findChild,it=a&&u((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(q,e);n&&delete q[e],U(t,e,r),n&&t!==q&&U(q,e,n)}:U,ot=function(t,e){var r=Y[t]=y(G[B]);return W(r,{type:T,tag:t,description:e}),a||(r.description=e),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,r){t===q&&ct(Z,e,r),m(t);var n=g(e,!0);return m(r),l(Y,n)?(r.enumerable?(l(t,M)&&t[M][n]&&(t[M][n]=!1),r=y(r,{enumerable:h(0,!1)})):(l(t,M)||U(t,M,h(1,{})),t[M][n]=!0),it(t,n,r)):U(t,n,r)},ft=function(t,e){m(t);var r=p(e),n=w(r).concat(mt(r));return J(n,(function(e){a&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,M)&&this[M][e])||r)},dt=function(t,e){var r=p(t),n=g(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var s=K(r,n);return!s||!l(Y,n)||l(r,M)&&r[M][n]||(s.enumerable=!0),s}},bt=function(t){var e=V(p(t)),r=[];return J(e,(function(t){l(Y,t)||l(E,t)||r.push(t)})),r},mt=function(t){var e=t===q,r=V(e?Z:p(t)),n=[];return J(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===q&&r.call(Z,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),it(this,e,h(1,t))};return a&&st&&it(q,e,{configurable:!0,set:r}),ot(e,t)},P(G[B],"toString",(function(){return $(this).tag})),P(G,"withoutSetter",(function(t){return ot(I(t),t)})),S.f=lt,_.f=ct,C.f=dt,x.f=O.f=bt,j.f=mt,N.f=function(t){return ot(L(t),t)},a&&(U(G[B],"description",{configurable:!0,get:function(){return $(this).description}}),o||P(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),J(w(rt),(function(t){R(t)})),n({target:T,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:mt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),H){var vt=!c||u((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,s=[t],i=1;while(arguments.length>i)s.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),s[1]=e,H.apply(null,s)}})}G[B][Q]||k(G[B],Q,G[B].valueOf),z(G,T),E[M]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),s=r("7b0b"),i=r("df75"),o=r("d039"),a=o((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(s(t))}})},b727:function(t,e,r){var n=r("0366"),s=r("44ad"),i=r("7b0b"),o=r("50c4"),a=r("65f0"),c=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,d=7==t,b=5==t||l;return function(m,v,p,g){for(var h,y,w=i(m),x=s(w),O=n(v,p,3),j=o(x.length),C=0,_=g||a,S=e?_(m,j):r||d?_(m,0):void 0;j>C;C++)if((b||C in x)&&(h=x[C],y=O(h,C,w),t))if(e)S[C]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return C;case 2:c.call(S,h)}else switch(t){case 4:return!1;case 7:c.call(S,h)}return l?-1:f||u?u:S}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},dbb4:function(t,e,r){var n=r("23e7"),s=r("83ab"),i=r("56ef"),o=r("fc6a"),a=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),s=a.f,f=i(n),u={},l=0;while(f.length>l)r=s(n,e=f[l++]),void 0!==r&&c(u,e,r);return u}})},dff4:function(t,e,r){"use strict";r("e229")},e229:function(t,e,r){},e439:function(t,e,r){var n=r("23e7"),s=r("d039"),i=r("fc6a"),o=r("06cf").f,a=r("83ab"),c=s((function(){o(1)})),f=!a||c;n({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-e33f7934.de5cd343.js.map