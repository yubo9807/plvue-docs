"use strict";var S=Object.defineProperty;var j=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("pl-vue/lib/router"),s=require("pl-vue"),a=require("../server.js"),g=require("pl-vue/lib/utils"),T=require("axios-minified");require("http");require("fs");require("path");require("pl-vue/lib/store");const u=new Set,y=400;function E(e){const t=s.ref(!0),n=s.ref();let o=null;const c=Symbol("id");u.add(c);async function d(){if(t.value=!0,await L(y),u.delete(c),u.size===0)i.remove();else{const k=Number(n.value.dataset.sort),N=n.value.offsetHeight;n.value.remove(),[...i.children].forEach((h,v)=>{if(v<k)return;const P=parseInt(h.style.top);h.style.top=P-N-10+"px",h.dataset.sort=v+""})}}function p(){clearTimeout(o),t.value=!1}function C(){e.duration!==null&&(o=setTimeout(d,e.duration||4e3))}return s.h("div",{ref:n,className:()=>a.joinClass("comp-message",e.type,t.value&&"hidden"),"data-sort":u.size-1+"",style:`--time: ${y/1e3}s`,onmouseenter:p,onmouseout:C},e.message,s.h("span",{className:"icon-close",onclick:d},"×"))}let i=null;function r(e){if(!g.isBrowser())return;const t=s.render(s.h(E,{...e}));i??(i=s.render(s.h("div",{className:"comp-message-wrap"}))),i.appendChild(t),document.body.appendChild(i)}r.info=e=>r({message:e,type:"info"});r.success=e=>r({message:e,type:"success"});r.error=e=>r({message:e,type:"error"});r.warning=e=>r({message:e,type:"warning"});r.closeAll=async()=>{!g.isBrowser()&&!i||([...i.children].forEach(e=>{e.classList.add("hidden"),e.remove()}),u.clear(),i.remove())};class R{constructor(t){m(this,"config");m(this,"instance");g.isBrowser()&&U(),this.config=t,this.instance=T.create(t),this.instance.interceptors.request.use(n=>this.requestUse(n)),this.instance.interceptors.response.use(n=>this.responseUse(n),n=>{const{response:o,config:c,message:d}=n;if(o&&o.data)return this.responseUse(o);const{url:p}=n.config;return Promise.reject({code:500,msg:d||"network error: "+p})})}requestUse(t){return t}responseUse(t){const n=t.data;return(this[n.code]||this.error)(t)}200(t){return Promise.resolve(t.data)}error(t){const{data:n,config:o}=t;return!o.noTips&&r.error(n.msg),Promise.reject(n)}}function I(e){return e.then(t=>[null,t]).catch(t=>[t,null])}function L(e){return new Promise(t=>{setTimeout(t,e)})}function U(){window.addEventListener("online",()=>{r.closeAll(),r.success("网络恢复")}),window.addEventListener("offline",()=>{r({type:"error",message:"网络中断",duration:null})})}class $ extends R{constructor(){super({baseURL:a.env.BASE_API,timeout:5e3})}}const A=new $;function w(e){return I(A.instance(e))}function B(){return w({url:"/file/read",params:{path:"/plvue/config.json"}})}function F(e){return w({url:"/file/read",params:{path:e}})}const x="container-4ac8c9",M="side-f9a8bf",_="active-889810",D="content-a47edb",H="copy-e3443b",z="show-side-a60745",l={container:x,side:M,active:_,content:D,copy:H,"show-side":"show-side-a60745",showSide:z};function q(e){const t=s.ref(),n={title:e.data.config[e.path.split("/").pop()],description:""},o=e.data.content.match(/<p>(.+)<\/p>/);return o&&(n.description=o[1].replace(/<[^>]+>/g,"")),s.h("div",{ref:t,className:a.joinClass(l.content,"markdown")},s.h(f.Helmet,null,s.h("title",null,()=>n.title+" | Pl Vue"),s.h("meta",{name:"description",content:()=>n.description})),s.h("div",{innerHTML:e.data.content}))}q.prototype.getInitialProps=async e=>{const[t,n]=await F(`/plvue${e.path.replace("/docs","")}.md`),o={config:exports.backupConfig,content:""};return t||(o.content=n.data.content),o};exports.backupConfig=null;function b(e){exports.backupConfig=e.data;const t=[];for(const c in e.data)t.push({label:e.data[c],value:c});const n=s.ref(""),o=s.ref(!1);return a.useStoreFixedBtns(),s.h("div",{className:a.joinClass("leayer",l.container)},s.h("ul",{className:()=>a.joinClass(l.side,o.value?l.active:""),onclick:()=>o.value=!1},t.map(c=>s.h("li",{className:()=>n.value===c.value&&l.active},s.h(f.Link,{to:`${e.path}/${c.value}`},c.label)))),s.h(f.Router,{prefix:e.path},...t.map(c=>s.h(f.Route,{path:"/"+c.value,component:O(q)}))))}b.prototype.getInitialProps=async()=>{const[e,t]=await B();if(e)return{};const n=JSON.parse(t.data.content);return exports.backupConfig=n,n};function O(e){const t=function(...n){return e.apply(this,n)};return t.prototype=e.prototype,t}exports.default=b;
