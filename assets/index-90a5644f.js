"use strict";var T=Object.defineProperty;var k=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(k(e,typeof t!="symbol"?t+"":t,n),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("pl-vue/lib/router"),s=require("pl-vue"),a=require("../server.js"),v=require("pl-vue/lib/utils"),E=require("axios-minified");require("http");require("fs");require("path");require("pl-vue/lib/store");const u=new Set,y=400;function R(e){const t=s.ref(!0),n=s.ref();let r=null;const i=Symbol("id");u.add(i);async function d(){if(t.value=!0,await U(y),u.delete(i),u.size===0)c.remove();else{const P=Number(n.value.dataset.sort),S=n.value.offsetHeight;n.value.remove(),[...c.children].forEach((p,w)=>{if(w<P)return;const j=parseInt(p.style.top);p.style.top=j-S-10+"px",p.dataset.sort=w+""})}}function h(){clearTimeout(r),t.value=!1}function N(){e.duration!==null&&(r=setTimeout(d,e.duration||4e3))}return s.h("div",{ref:n,className:()=>a.joinClass("comp-message",e.type,t.value&&"hidden"),"data-sort":u.size-1+"",style:`--time: ${y/1e3}s`,onmouseenter:h,onmouseout:N},e.message,s.h("span",{className:"icon-close",onclick:d},"×"))}let c=null;function o(e){if(!v.isBrowser())return;const t=s.render(s.h(R,{...e}));c??(c=s.render(s.h("div",{className:"comp-message-wrap"}))),c.appendChild(t),document.body.appendChild(c)}o.info=e=>o({message:e,type:"info"});o.success=e=>o({message:e,type:"success"});o.error=e=>o({message:e,type:"error"});o.warning=e=>o({message:e,type:"warning"});o.closeAll=async()=>{!v.isBrowser()&&!c||([...c.children].forEach(e=>{e.classList.add("hidden"),e.remove()}),u.clear(),c.remove())};class I{constructor(t){m(this,"config");m(this,"instance");v.isBrowser()&&$(),this.config=t,this.instance=E.create(t),this.instance.interceptors.request.use(n=>this.requestUse(n)),this.instance.interceptors.response.use(n=>this.responseUse(n),n=>{const{response:r,config:i,message:d}=n;if(r&&r.data)return this.responseUse(r);const{url:h}=n.config;return Promise.reject({code:500,msg:d||"network error: "+h})})}requestUse(t){return t}responseUse(t){const n=t.data;return(this[n.code]||this.error)(t)}200(t){return Promise.resolve(t.data)}error(t){const{data:n,config:r}=t;return!r.noTips&&o.error(n.msg),Promise.reject(n)}}function L(e){return e.then(t=>[null,t]).catch(t=>[t,null])}function U(e){return new Promise(t=>{setTimeout(t,e)})}function $(){window.addEventListener("online",()=>{o.closeAll(),o.success("网络恢复")}),window.addEventListener("offline",()=>{o({type:"error",message:"网络中断",duration:null})})}class A extends I{constructor(){super({baseURL:a.env.BASE_API,timeout:5e3})}}const B=new A;function q(e){return L(B.instance(e))}function F(){return q({url:"/file/read",params:{path:"/plvue/config.json"}})}function x(e){return q({url:"/file/read",params:{path:e}})}const M="container-4ac8c9",_="side-f9a8bf",D="active-889810",H="content-a47edb",z="show-side-a60745",l={container:M,side:_,active:D,content:H,"show-side":"show-side-a60745",showSide:z};let g=null;function C(e){g=e.data;const t=[];for(const i in e.data)t.push({label:e.data[i],value:i});const n=s.ref(""),r=s.ref(!1);return a.useStoreFixedBtns(),s.h("div",{className:a.joinClass("leayer",l.container)},s.h("ul",{className:()=>a.joinClass(l.side,r.value?l.active:""),onclick:()=>r.value=!1},t.map(i=>s.h("li",{className:()=>n.value===i.value&&l.active},s.h(f.Link,{to:`${e.path}/${i.value}`},i.label)))),s.h(f.Router,{prefix:e.path},...t.map(i=>s.h(f.Route,{path:"/"+i.value,component:O(b)}))))}C.prototype.getInitialProps=async()=>{const[e,t]=await F();if(e)return{};const n=JSON.parse(t.data.content);return g=n,n};function O(e){const t=function(...n){return e.apply(this,n)};return t.prototype=e.prototype,t}function b(e){const t=s.ref(),n={title:e.data.config[e.path.split("/").pop()],description:""},r=e.data.content.match(/<p>(.+)<\/p>/);return r&&(n.description=r[1].replace(/<[^>]+>/g,"")),s.h("div",{ref:t,className:a.joinClass(l.content,"markdown")},s.h(f.Helmet,null,s.h("title",null,()=>n.title+" | Pl Vue"),s.h("meta",{name:"description",content:()=>n.description})),s.h("div",{innerHTML:e.data.content}))}b.prototype.getInitialProps=async e=>{const[t,n]=await x(`/plvue${e.path.replace("/docs","")}.md`),r={config:g,content:""};return t||(r.content=n.data.content),r};exports.default=C;
