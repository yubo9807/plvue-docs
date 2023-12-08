var A=Object.defineProperty;var I=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>(I(e,typeof t!="symbol"?t+"":t,n),n);import{j as p,e as S,_ as C}from"./main-d5ea6444.js";import{b as _,r as L,h as a,d as m,o as E,e as U,R as j,a as x,L as D,u as H,w as $,H as F,n as M,f as O}from"./pl-vue-871d2792.js";import{a as V}from"./axios-minified-06d31459.js";const f=new Set,N=400;let h=0;function z(e){const t=m(!0),n=m();let s=null;const o=Symbol("id");f.add(o),E(async()=>{n.value.style.top=h+"px";const g=n.value.offsetHeight;h+=g+10,await P(100),t.value=!1,d()});async function l(){if(t.value=!0,await P(N),f.delete(o),f.size===0)i.remove();else{const g=Number(n.value.dataset.sort),R=n.value.offsetHeight;h-=R+10,n.value.remove(),[...i.children].forEach((w,b)=>{if(b<g)return;const q=parseInt(w.style.top);w.style.top=q-R-10+"px",w.dataset.sort=b+""})}}function c(){clearTimeout(s),t.value=!1}function d(){e.duration!==null&&(s=setTimeout(l,e.duration||4e3))}return a("div",{ref:n,className:()=>p("comp-message",e.type,t.value&&"hidden"),"data-sort":f.size-1+"",style:`--time: ${N/1e3}s`,onmouseenter:c,onmouseout:d},e.message,a("span",{className:"icon-close",onclick:l},"×"))}let i=null;function r(e){if(!_())return;const t=L(a(z,{...e}));i??(i=L(a("div",{className:"comp-message-wrap"}))),i.appendChild(t),document.body.appendChild(i)}r.info=e=>r({message:e,type:"info"});r.success=e=>r({message:e,type:"success"});r.error=e=>r({message:e,type:"error"});r.warning=e=>r({message:e,type:"warning"});r.closeAll=async()=>{!_()&&!i||([...i.children].forEach(e=>{e.classList.add("hidden"),e.remove()}),f.clear(),h=0,i.remove())};class B{constructor(t){y(this,"config");y(this,"instance");_()&&G(),this.config=t,this.instance=V.create(t),this.instance.interceptors.request.use(n=>this.requestUse(n)),this.instance.interceptors.response.use(n=>this.responseUse(n),n=>{const{response:s,config:o,message:l}=n;if(s&&s.data)return this.responseUse(s);const{url:c}=n.config;return Promise.reject({code:500,msg:l||"network error: "+c})})}requestUse(t){return t}responseUse(t){const n=t.data;return(this[n.code]||this.error)(t)}200(t){return Promise.resolve(t.data)}error(t){const{data:n,config:s}=t;return!s.noTips&&r.error(n.msg),Promise.reject(n)}}function J(e){return e.then(t=>[null,t]).catch(t=>[t,null])}function P(e){return new Promise(t=>{setTimeout(t,e)})}function G(){window.addEventListener("online",()=>{r.closeAll(),r.success("网络恢复")}),window.addEventListener("offline",()=>{r({type:"error",message:"网络中断",duration:null})})}class K extends B{constructor(){super({baseURL:S.BASE_API,timeout:5e3})}}const Q=new K;function T(e){return J(Q.instance(e))}function W(){return T({url:"/file/read",params:{path:"/plvue/config.json"}})}function X(e){return T({url:"/file/read",params:{path:e}})}const Y="container-4ac8c9",Z="side-f9a8bf",ee="active-889810",te="content-a47edb",ne="show-side-a60745",u={container:Y,side:Z,active:ee,content:te,"show-side":"show-side-a60745",showSide:ne};let v=null;function se(e){v=e.data,U(()=>{v=null});const t=[];for(const o in e.data)t.push({label:e.data[o],value:o});const n=m(""),s=m(!1);return E(()=>{const o=O(),l=H();$(()=>o.path,c=>{const d=c.replace(e.path,"");if(d){n.value=d.slice(1);return}M(()=>{l.replace(e.path+"/"+t[0].value)})},{immediate:!0})}),a("div",{className:p("leayer",u.container)},a("ul",{className:()=>p(u.side,s.value?u.active:""),onclick:()=>s.value=!1},t.map(o=>a("li",{className:()=>n.value===o.value&&u.active},a(D,{to:`${e.path}/${o.value}`},o.label)))),a(j,{prefix:e.path},...t.map(o=>a(x,{path:"/"+o.value,component:oe(k)}))),a("div",{className:()=>p(u.showSide,s.value?u.active:""),onclick:()=>s.value=!s.value}))}function oe(e){const t=function(...n){return e.apply(this,n)};return t.prototype=e.prototype,t}se.prototype.getInitialProps=async()=>{const[e,t]=await W();if(e)return{};const n=JSON.parse(t.data.content);return v=n,n};function k(e){const t=m(),n={title:e.data.config[e.path.split("/").pop()],description:""},s=e.data.content.match(/<p>(.+)<\/p>/);return s&&(n.description=s[1].replace(/<[^>]+>/g,"")),E(async()=>{C(()=>import("./highlight.js-5e1ab8e1.js").then(c=>c.d),["assets/highlight.js-5e1ab8e1.js","assets/axios-minified-06d31459.js","assets/highlight-c5123cb4.css"]);const o=(await C(()=>import("./highlight.js-5e1ab8e1.js").then(c=>c.c),["assets/highlight.js-5e1ab8e1.js","assets/axios-minified-06d31459.js","assets/highlight-c5123cb4.css"])).default;t.value.querySelectorAll("pre code").forEach(c=>{o.highlightElement(c)})}),a("div",{ref:t,className:p(u.content,"markdown")},a(F,null,a("title",null,()=>n.title+" | Pl Vue"),a("meta",{name:"description",content:()=>n.description})),a("div",{innerHTML:e.data.content}))}k.prototype.getInitialProps=async e=>{const[t,n]=await X(`/plvue${e.path.replace("/docs","")}.md`),s={config:v,content:""};return t||(s.content=n.data.content),s};export{se as default};
