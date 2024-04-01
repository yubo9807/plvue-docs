var x=Object.defineProperty;var A=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>(A(e,typeof t!="symbol"?t+"":t,n),n);import{i as _,h as s,r as f,o as E,H as I,g as k,R as F,f as C,L as U}from"./pl-vue-b476077e.js";import{a as w,e as $,_ as R,c as B,u as j,L as D,w as H}from"./main-1780af9e.js";import{a as M}from"./axios-minified-06d31459.js";const m=new Set,S=400;let v=0;function O(e){const t=f(!0),n=f();let o=null;const r=Symbol("id");m.add(r),E(async()=>{n.value.style.top=v+"px";const d=n.value.offsetHeight;v+=d+10,await N(100),t.value=!1,a()});async function i(){if(t.value=!0,await N(S),m.delete(r),m.size===0)u.remove();else{const d=Number(n.value.dataset.sort),L=n.value.offsetHeight;v-=L+10,n.value.remove(),[...u.children].forEach((y,b)=>{if(b<d)return;const q=parseInt(y.style.top);y.style.top=q-L-10+"px",y.dataset.sort=b+""})}}function l(){clearTimeout(o),t.value=!1}function a(){e.duration!==null&&(o=setTimeout(i,e.duration||4e3))}return s("div",{ref:n,className:()=>["comp-message",e.type,t.value&&"hidden"],"data-sort":m.size-1+"",style:`--time: ${S/1e3}s`,onmouseenter:l,onmouseout:a},e.message,s("span",{className:"icon-close",onclick:i},"×"))}let u=null;function c(e){if(!_())return;const t=w.render(s(O,{...e}));u??(u=w.render(s("div",{className:"comp-message-wrap"}))),u.appendChild(t),document.body.appendChild(u)}c.info=e=>c({message:e,type:"info"});c.success=e=>c({message:e,type:"success"});c.error=e=>c({message:e,type:"error"});c.warning=e=>c({message:e,type:"warning"});c.closeAll=async()=>{!_()&&!u||([...u.children].forEach(e=>{e.classList.add("hidden"),e.remove()}),m.clear(),v=0,u.remove())};class V{constructor(t){g(this,"config");g(this,"instance");_()&&J(),this.config=t,this.instance=M.create(t),this.instance.interceptors.request.use(n=>this.requestUse(n)),this.instance.interceptors.response.use(n=>this.responseUse(n),n=>{const{response:o,config:r,message:i}=n;if(o&&o.data)return this.responseUse(o);const{url:l}=n.config;return Promise.reject({code:500,msg:i||"network error: "+l})})}requestUse(t){return t}responseUse(t){const n=t.data;return(this[n.code]||this.error)(t)}200(t){return Promise.resolve(t.data)}error(t){const{data:n,config:o}=t;return!o.noTips&&c.error(n.msg),Promise.reject(n)}}function z(e){return e.then(t=>[null,t]).catch(t=>[t,null])}function N(e){return new Promise(t=>{setTimeout(t,e)})}function J(){window.addEventListener("online",()=>{c.closeAll(),c.success("网络恢复")}),window.addEventListener("offline",()=>{c({type:"error",message:"网络中断",duration:null})})}class W extends V{constructor(){super({baseURL:$.BASE_API,timeout:5e3})}}const G=new W;function P(e){return z(G.instance(e))}function K(){return P({url:"/file/read",params:{path:"/plvue/config.json"}})}function Q(e){return P({url:"/file/read",params:{path:e}})}const X="container-4ac8c9",Y="side-f9a8bf",Z="active-889810",ee="content-a47edb",te="copy-e3443b",ne="show-side-a60745",p={container:X,side:Y,active:Z,content:ee,copy:te,"show-side":"show-side-a60745",showSide:ne};function T(e){const t=f(),n={title:e.data.config[e.path.split("/").pop()],description:""},o=e.data.content.match(/<p>(.+)<\/p>/);return o&&(n.description=o[1].replace(/<[^>]+>/g,"")),E(async()=>{R(()=>Promise.resolve({}),["assets/highlight-cc2e2427.css"]);const r=(await R(()=>import("./highlight.js-21019354.js"),["assets/highlight.js-21019354.js","assets/axios-minified-06d31459.js"])).default;t.value.querySelectorAll("pre code").forEach(l=>{const a=l.innerText;r.highlightElement(l);const d=w.render(s("span",{className:p.copy,onclick:()=>{B(a),c.success("复制成功")}},"copy"));l.parentElement.appendChild(d)})}),s("div",{ref:t,className:[p.content,"markdown"]},s(I,null,s("title",null,()=>n.title+" | Pl Vue"),s("meta",{name:"description",content:()=>n.description})),s("section",{innerHTML:e.data.content}))}T.prototype.getInitialProps=async e=>{const t=e.path.replace("/docs/",""),[n,o]=await Q(`/plvue/${t}.md`),r={config:h,content:""};if(n)return r;const i=h[t];return r.content=`<h1>${i}</h1>${o.data.content}`,r};let h=null;function se(e){h=e.data,k(()=>{h=null});const t=[];for(const a in e.data)t.push({label:e.data[a],value:a});const n=f(!1),o=f(null),r=f(null),i=j(),l=Symbol("side_btn");return E(()=>{let a=null;const d=s("li",{ref:r,className:p.showSide,onclick:()=>{n.value?(n.value=!1,a&&document.removeEventListener("click",a)):(n.value=!0,a=H([o.value,r.value],()=>{n.value=!1}))}},"〒");i.add(l,d,1)}),k(()=>{i.delete(l)}),s("div",{className:["leayer",p.container]},s("ul",{ref:o,className:()=>[p.side,n.value&&p.active],onclick:()=>n.value=!1},t.map(a=>s("li",null,s(U,{to:`${e.path}/${a.value}`},a.label)))),s(F,{prefix:e.path,loading:D},s(C,{path:"",redirect:e.path+"/"+t[0].value,component:()=>{}}),...t.map(a=>s(C,{path:"/"+a.value,component:oe(T)}))))}se.prototype.getInitialProps=async()=>{const[e,t]=await K();if(e)return{};const n=JSON.parse(t.data.content);return h=n,n};function oe(e){const t=function(...n){return e.apply(this,n)};return t.prototype=e.prototype,t}export{h as backupConfig,se as default};
