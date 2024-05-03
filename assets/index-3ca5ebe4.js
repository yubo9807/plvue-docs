"use strict";var N=Object.defineProperty;var S=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>(S(e,typeof t!="symbol"?t+"":t,n),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("pl-vue/lib/router"),o=require("pl-vue"),h=require("../server.js"),y=require("pl-vue/lib/utils"),E=require("axios-minified");require("http");require("fs");require("path");require("pl-vue/lib/store");function P(e=document.documentElement,t=0){const n=e.offsetTop||0;window.scrollTo({top:n+t,behavior:"smooth"})}const p=new Set,w=400;function $(e){const t=o.ref(!0),n=o.ref();let r=null;const s=Symbol("id");p.add(s);async function a(){if(t.value=!0,await I(w),p.delete(s),p.size===0)u.remove();else{const C=Number(n.value.dataset.sort),R=n.value.offsetHeight;n.value.remove(),[...u.children].forEach((m,v)=>{if(v<C)return;const T=parseInt(m.style.top);m.style.top=T-R-10+"px",m.dataset.sort=v+""})}}function f(){clearTimeout(r),t.value=!1}function i(){e.duration!==null&&(r=setTimeout(a,e.duration||4e3))}return o.h("div",{ref:n,className:["comp-message",e.type,()=>t.value&&"hidden"],"data-sort":p.size-1+"",style:`--time: ${w/1e3}s`,onmouseenter:f,onmouseout:i},e.message,o.h("span",{className:"icon-close",onclick:a},"×"))}let u=null;function c(e){if(!y.isBrowser())return;const t=h.app.render(o.h($,{...e}));u??(u=h.app.render(o.h("div",{className:"comp-message-wrap"}))),u.appendChild(t),document.body.appendChild(u)}c.info=e=>c({message:e,type:"info"});c.success=e=>c({message:e,type:"success"});c.error=e=>c({message:e,type:"error"});c.warning=e=>c({message:e,type:"warning"});c.closeAll=async()=>{!y.isBrowser()&&!u||([...u.children].forEach(e=>{e.classList.add("hidden"),e.remove()}),p.clear(),u.remove())};class L{constructor(t){g(this,"config");g(this,"instance");y.isBrowser()&&U(),this.config=t,this.instance=E.create(t),this.instance.interceptors.request.use(n=>this.requestUse(n)),this.instance.interceptors.response.use(n=>this.responseUse(n),n=>{const{response:r,config:s,message:a}=n;if(r&&r.data)return this.responseUse(r);const{url:f}=n.config;return Promise.reject({code:500,msg:a||"network error: "+f})})}requestUse(t){return t}responseUse(t){const n=t.data;return(this[n.code]||this.error)(t)}200(t){return Promise.resolve(t.data)}error(t){const{data:n,config:r}=t;return!r.noTips&&c.error(n.msg),Promise.reject(n)}}function B(e){return e.then(t=>[null,t]).catch(t=>[t,null])}function I(e){return new Promise(t=>{setTimeout(t,e)})}function U(){window.addEventListener("online",()=>{c.closeAll(),c.success("网络恢复")}),window.addEventListener("offline",()=>{c({type:"error",message:"网络中断",duration:null})})}class j extends L{constructor(){super({baseURL:h.env.BASE_API,timeout:5e3})}}const x=new j;function b(e){return B(x.instance(e))}function A(){return b({url:"/file/read",params:{path:"/plvue/config.json"}})}function F(e){return b({url:"/file/read",params:{path:e}})}const M="container-4ac8c9",_="side-f9a8bf",D="active-889810",H="content-a47edb",z="md-6c63ce",O="copy-e3443b",V="outline-fdec55",J="link-b5a57d",G="show-side-a60745",d={container:M,side:_,active:D,content:H,md:z,copy:O,outline:V,link:J,"show-side":"show-side-a60745",showSide:G};function k(e){const t=o.ref(),n={title:e.data.config[e.path.split("/").pop()],description:""},r=e.data.content.match(/<p>(.+)<\/p>/);r&&(n.description=r[1].replace(/<[^>]+>/g,"")),l.useRoute(),l.useRouter();const s=o.ref(),a=o.shallowBestRef([]);function f(i){typeof i=="string"&&(i=document.getElementById(i)),i&&P(i,-60)}return o.h("div",{ref:t,className:d.content},o.h(l.Helmet,null,o.h("title",null,()=>n.title+" | Pl Vue"),o.h("meta",{name:"description",content:()=>n.description})),o.h("section",{ref:s,className:["markdown",d.md],innerHTML:e.data.content}),o.h("aside",{className:d.outline},o.h("ul",null,()=>a.value.map(i=>o.h("li",{style:`--rank: ${i.rank-2}`,onclick:()=>f(i.id)},i.text)))))}k.prototype.getInitialProps=async e=>{const t=e.path.replace("/docs/",""),[n,r]=await F(`/plvue/${t}.md`),s={config:exports.backupConfig,content:""};if(n)return s;const a=exports.backupConfig[t];return s.content=`<h1>${a}</h1>${r.data.content}`,s};exports.backupConfig=null;function q(e){exports.backupConfig=e.data;const t=[];for(const s in e.data)t.push({label:e.data[s],value:s});const n=o.ref(!1),r=o.ref(null);return h.useStoreFixedBtns(),o.h("div",{className:["leayer",d.container]},o.h("ul",{ref:r,className:[d.side,()=>n.value&&d.active],onclick:()=>n.value=!1},t.map(s=>o.h("li",null,o.h(l.Link,{to:`${e.path}/${s.value}`},s.label)))),o.h(l.Router,{prefix:e.path,loading:h.Loading},o.h(l.Route,{path:"",redirect:e.path+"/"+t[0].value,component:()=>{}}),...t.map(s=>o.h(l.Route,{path:"/"+s.value,component:K(k)}))))}q.prototype.getInitialProps=async()=>{const[e,t]=await A();if(e)return{};const n=JSON.parse(t.data.content);return exports.backupConfig=n,n};function K(e){const t=function(...n){return e.apply(this,n)};return t.prototype=e.prototype,t}exports.default=q;
