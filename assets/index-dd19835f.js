var A=Object.defineProperty;var I=(o,t,n)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var N=(o,t,n)=>(I(o,typeof t!="symbol"?t+"":t,n),n);import{h as e,L as v,r as h,c as O,H,u as B,o as $,w as q,n as T,a as x,R as C,b as j}from"./pl-vue-f3d66934.js";import{a as D}from"./axios-minified-06d31459.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const F="production",g=Object.freeze({BASE_URL:"",NODE_ENV:F,BASE_API:"http://hicky.hpyyb.cn/api",GITHUB_URL:"https://github.com/yubo9807/"}),V="banner-64e93c",G="box-e24f47",M="bg-a171c3",J="blend-4c743b",W="btn-05bf70",z="enter-825ce4",K="article-e5ab12",X="paragraph-6f9bd7",Q="mark-66b760",Y="peculiarity-fd110f",u={banner:V,box:G,bg:M,blend:J,btn:W,enter:z,article:K,paragraph:X,mark:Q,peculiarity:Y},Z="main-67f0a8",ee={main:Z},te="header-ada874",ne="navigation-0bbde6",_={header:te,navigation:ne};function oe(){return e("header",{className:_.header},e("div",null,e(v,{to:"/"},e("h1",null,"Pl Vue"))),e("nav",{className:_.navigation},e(v,{to:"/docs"},"文档"),e("a",{href:g.GITHUB_URL+"mvvm_vue3",target:"_blank"},"GitHub")))}const re="footer-967a98",se={footer:re};function ae(){return e("footer",{className:se.footer},e("strong",null,"⚠️ 注意事项"),e("p",null,"本文文档仅供学习参考。并未发布正式版本，不提供任何商业用途。"))}function P(o){return e("div",null,e(oe,null),e("main",{className:ee.main},o.children),e(ae,null))}function m(...o){return o.join(" ").trim().replace(/\s+/," ")}function ce(){return e(P,null,e("div",{className:u.banner},e("div",{className:u.box},e("div",{className:u.bg},e("strong",null,"Pl Vue"),e("p",null,"一个 JS 库，只关心数据与函数之间的联动")),e(v,{className:u.btn,to:"/docs/reactivity"},"API 参考"))),e("article",{className:m("leayer","module-gap",u.article)},e("p",{className:u.paragraph},"Pl Vue 是一个将响应式数据的使用高度交予开发者决定的一个库，它不依赖于任何第三方库。该库提供了组件化、挂载钩子、Router、Store 以及服务端渲染相关 API。项目搭建可参考  ",e("a",{href:g.GITHUB_URL+"mvvm_vue3"},"GitHub"),"。"),e("p",{className:u.mark},"该库本身与 Vue 框架无任何关系，只是多数 API 在命名上相同而已。")),e("ul",{className:m("leayer","module-gap",u.peculiarity)},e("li",null,e("h2",null,"响不响应式的，高度交予开发者决定"),e("p",null,"JSX 编程方式，响应式数据统一使用函数的方式包裹。",e(v,{to:"/docs/property"},"了解更多"))),e("li",null,e("h2",null,"无虚拟 DOM 参与"),e("p",null,"将用到响应式数据的函数进行收集，在数据更新后执行相应的函数。因此直接省去了虚拟 DOM 的比较。")),e("li",null,e("h2",null,"拿来就用，灵活多变"),e("p",null,"无需脚手架，原生应用亦可构建。",e("a",{href:g.GITHUB_URL+"single-page",target:"_blank"},"代码示例"))),e("li",null,e("h2",null,"代码精简，minify < 12k"),e("p",null,"手写 h 与 Fragment，将代码体积精简到极致。"))))}const le="modulepreload",ie=function(o){return"/"+o},w={},L=function(t,n,a){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ie(r),r in w)return;w[r]=!0;const c=r.endsWith(".css"),b=c?'[rel="stylesheet"]':"";if(!!a)for(let i=s.length-1;i>=0;i--){const d=s[i];if(d.href===r&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${b}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":le,c||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),c)return new Promise((i,d)=>{l.addEventListener("load",i),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})},ue="container-4ac8c9",de="side-f9a8bf",fe="active-889810",me="content-a47edb",pe="show-side-a60745",f={container:ue,side:de,active:fe,content:me,"show-side":"show-side-a60745",showSide:pe};class he{constructor(t){N(this,"config");N(this,"instance");this.config=t,this.instance=D.create(t),this.instance.interceptors.request.use(n=>this.requestUse(n)),this.instance.interceptors.response.use(n=>this.responseUse(n),n=>{const{response:a,config:s,message:r}=n;if(a&&a.data)return this.responseUse(a);const{url:c}=n.config;return Promise.reject({code:500,msg:r||"network error: "+c})})}requestUse(t){return t}responseUse(t){const n=t.data;return(this[n.code]||this.error)(t)}200(t){return Promise.resolve(t.data)}error(t){const{data:n,config:a}=t;return Promise.reject(n)}}function ve(o){return o.then(t=>[null,t]).catch(t=>[t,null])}class ge extends he{constructor(){super({baseURL:g.BASE_API,timeout:5e3})}}const be=new ge;function E(o){return ve(be.instance(o))}function ye(){return E({url:"/file/read",params:{path:"/plvue/config.json"}})}function Ne(o){return E({url:"/file/read",params:{path:o}})}function R({data:o}){const t=h(o.list),n=h(o.content),a=B(),s=h(!1),r=h(c());function c(){return a.path.replace(a.monitor,"").slice(1)||t.value[0]&&t.value[0].value}const b=h(null);$(async()=>{const l=q(()=>a.path,async p=>{if(a.monitor!=="/docs")return l();r.value=c(),n.value=await U(r.value),s.value=!1,T(d)});L(()=>import("./highlight.js-bbd7096d.js").then(p=>p.d),["assets/highlight.js-bbd7096d.js","assets/axios-minified-06d31459.js","assets/highlight-54439809.css"]);const i=(await L(()=>import("./highlight.js-bbd7096d.js").then(p=>p.c),["assets/highlight.js-bbd7096d.js","assets/axios-minified-06d31459.js","assets/highlight-54439809.css"])).default;d();function d(){b.value.querySelectorAll("pre code").forEach(k=>{i.highlightElement(k)})}});const y=O(()=>{var l;return(l=t.value.find(i=>i.value===r.value))==null?void 0:l.label});return e(P,null,e(H,null,e("title",null,()=>y.value+" | Pl Vue"),e("meta",{name:"description",content:()=>`${y.value}`})),e("div",{className:m("leayer",f.container)},e("ul",{className:()=>m(f.side,s.value?f.active:"")},t.value.map(l=>e("li",{className:()=>r.value===l.value?f.active:""},e(v,{to:`/docs/${l.value}`},l.label)))),e("div",{ref:b,className:m(f.content,"markdown")},e("div",{innerHTML:()=>n.value}))),e("div",{className:()=>m(f.showSide,s.value?f.active:""),onclick:()=>s.value=!s.value}))}R.prototype.getInitialProps=async o=>{const t=await _e(),n=await U(o.path.replace(o.monitor,"")||t[0]&&t[0].value);return{list:t,content:n}};async function _e(){const[o,t]=await ye(),n=[];if(o)return n;const a=JSON.parse(t.data.content);for(const s in a)n.push({label:a[s],value:s});return n}async function U(o){const[t,n]=await Ne(`/plvue/${o}.md`);return t?"":n.data.content}const we="not-found-710606",Le={"not-found":"not-found-710606",notFound:we};function Pe(){return e("div",{className:Le["not-found"]},"404")}x({base:g.BASE_URL,mode:"hash",routes:[{path:"/",component:ce},{path:"/docs",component:R,exact:!1},{component:Pe}]});function Ee(){return e(C,null)}const S=document.getElementById("root");S.innerHTML="";S.appendChild(j(e(Ee,null)));
