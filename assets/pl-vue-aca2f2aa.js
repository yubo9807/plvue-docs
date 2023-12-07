var Le=Object.defineProperty;var We=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>(We(e,typeof t!="symbol"?t+"":t,n),n),de=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var pe=(e,t,n)=>(de(e,t,"read from private field"),n?n.call(e):t.get(e)),me=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},W=(e,t,n,r)=>(de(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);function se(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function R(e){return["object","array"].includes(se(e))}function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ce(e,t){if(R(e)&&R(t)){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!r.includes(o)||!ce(e[o],t[o]))return!1;return!0}else return e===t}function xe(){return typeof window=="object"}function E(e){return se(e)==="object"}function F(e){return Array.isArray(e)}function Q(e){return typeof e=="string"}function d(e){return typeof e=="function"}function x(e){Promise.resolve().then(e)}function y(e){const t=new WeakMap,n=["null","weakset","weakmap"],r={set(s){const c=new Set;for(const u of s)c.add(o(u));return c},map(s){const c=new Map;for(const[u,i]of s.entries())c.set(u,o(i));return c}};function o(s){const c=se(s);if(typeof s!="object"||n.includes(c))return s;if(t.has(s))return t.get(s);if(r[c])return r[c](s);const u=F(s)?[]:{};Object.setPrototypeOf(u,Object.getPrototypeOf(s)),t.set(s,u);for(const i in s)u[i]=o(s[i]);return u}return o(e)}function V(e,t){return Object.assign({},e,t)}function Te(){return Number(Math.random().toString().slice(2)).toString(32)}function I(...e){console.warn(...e)}let N=null;const q=new WeakMap;function B(e){N=e,e(),N=null}function Ve(e){const t=q.get(e)||[],n=t.some(r=>N===r);N&&!n&&(t.push(N),q.set(e,t))}function ge(e){const t=q.get(e);t&&t.forEach((n,r)=>{n()===!0&&(t.splice(r,1),q.set(e,t))})}const qe=new WeakMap,v=new WeakMap,H={RAW:Symbol("__v_raw"),IS_READONLY:Symbol("__v_isReadonly")};function A(e){if(!R(e)||Object.isFrozen(e))return I(`lue cannot be made reactive: ${e}`),e;if(qe.get(e))return e;let t=null;return new Proxy(e,{get(n,r,o){if(r===H.RAW)return n;if(R(n[r]))return A(n[r]);const s=Reflect.get(n,r,o);return Ve(n),s},set(n,r,o,s){if(n[H.IS_READONLY])return!0;if(R(n[r])){const l=n[r],w=new Set;for(const m in o)w.add(m),this.set(l,m,o[m],s[r]);for(const m in l)w.has(m)||this.deleteProperty(l,m);return!0}if(Reflect.get(n,r,s)===o)return!0;const u=Reflect.set(n,r,o,s),i=v.get(n)||new Set;i.add(r);const a=i.size;return v.set(n,i),x(()=>{const l=Reflect.get(n,r,s);u&&l===o&&a===1&&ge(n),v.delete(n)}),u},deleteProperty(n,r){const o=Reflect.get(n,r);if(R(o)){for(const u in o)this.deleteProperty(o,u);return!0}const s=De(n,r),c=Reflect.deleteProperty(n,r);return t=r,x(()=>{s&&c&&o!==void 0&&r===t&&(ge(n),t=null)}),c}})}function Be(e){return E(e)&&!!e[H.RAW]}function O(e){return Be(e)?e[H.RAW]:e}function He(e){const t=A({value:e});function n(){return t.value}function r(o){t.value=o}return[n,r]}const Ue="__v_isRef";var at;class Ke{constructor(t){S(this,at,!0);S(this,"__v_isShallow",!1);S(this,"_rawValue");S(this,"_value");S(this,"getSignal");S(this,"setSignal");this._rawValue=t;const[n,r]=He(t);this.getSignal=n,this.setSignal=r,this._value=n()}get value(){return this.getSignal()}set value(t){this.setSignal(t),this._rawValue=t}}at=Ue;function ze(e=void 0){return new Ke(e)}function je(e,t,n={}){let r=!1;if(r)return;const o=e();n.immediate&&t(o,void 0);let s=y(o),c=!0;return B(()=>{if(r)return!0;const u=e();if(R(u)){n.deep&&!ce(u,s)&&(t(u,s),s=y(u));return}if(c){c=!1;return}u!==s&&(t(u,s),s=u)}),()=>{r=!0}}function T(e){return["string","number"].includes(typeof e)&&e!==""}function Ne(e){return!/^on/.test(e)}function ie(e){return E(e)&&(Q(e.tag)||j(e.tag))}function b(e){return d(e)&&!j(e)}function ue(e){return[void 0,null,"",!0,!1].includes(e)}function L(e){return document.createTextNode(e)}function h(e,t,...n){const r={tag:e,attrs:t||{},children:n};return b(r.tag)&&r.children.length===0&&r.attrs.children&&(r.children=r.attrs.children),r}function X(e){return e.prototype._id}function C({children:e}){return e}const U=Symbol("Fragment");C.prototype[U]=U;function j(e){return d(e)&&e.prototype[U]===U}const K=new WeakMap;function Oe(e,t=[]){return e.forEach(n=>{E(n)&&(b(n.tag)?t.push({comp:n.tag,compId:X(n.tag),props:V(n.attrs,{children:e})}):T(n.tag)&&Oe(n.children,t))}),t}function ae(e,t=[]){const n=K.get(e)||[];return t.push(...n),n.forEach(r=>{const o=ae(r.comp);t.push(...o)}),t}let fe=null;function Ye(e){fe=e}let ye=null;function Ge(e,t){fe=e,"ref"in t&&(t.ref.value=ye),ye=null}let le=!1;function be(e){le=e}const we=new Map;function Ee(e){const t=ae(e).map(r=>r.compId);t.unshift(X(e));const n=[];t.forEach(r=>{const o=we.get(r)||[];n.push(...o),we.delete(r)}),n.forEach(r=>{r()})}const z=new Map;function Je(e){if(le)return;const t=X(fe),n=z.get(t)||[];n.some(o=>o===e)||(n.push(e),z.set(t,n))}function Se(e){const t=ae(e).map(r=>r.compId);t.unshift(X(e));const n=[];t.forEach(r=>{const o=z.get(r)||[];n.push(...o),z.delete(r)}),n.forEach(r=>{r()})}function M(e,t,n){if(Q(e))return he(e,t,n);if(j(e))return $(n);if(b(e)){e=e,e.prototype._id=Te(),Ye(e);const r=V(t,{children:n}),o=e(r);return Ge(e,t),T(o)?L(o):(K.set(e,Oe(o.children)),M(o.tag,o.attrs,o.children))}}function he(e,t={},n=[""]){if(j(e))return M(e,t,n);const r=document.createElement(e);n.forEach(o=>{if(!ue(o)){if(T(o)){const s=L(o);s.nodeValue=o,r.appendChild(s);return}if(d(o)){const s=$([o]);r.appendChild(s);return}if(F(o)){const s=$(o);r.appendChild(s);return}if(ie(o)){const s=he(o.tag,o.attrs,o.children);r.appendChild(s);return}if(E(o)&&b(o.tag)){const s=M(o.tag,o.attrs,o.children);r.appendChild(s);return}I(`render: 不支持 ${o} 值渲染`)}});for(const o in t){const s=t[o];if(![void 0,null].includes(s)){if(o.startsWith("data-")){r.dataset[o.slice(5)]=s;continue}if(o==="ref"){s.value=r;continue}if(o==="created"&&d(s)){s(r);continue}if(d(s)&&Ne(o)){B(()=>{r[o]=s()});continue}r[o]=s}}if(t.style&&E(t.style))for(const o in t.style){const s=t.style[o];d(s)?B(()=>r.style[o]=s()):r.style[o]=s}return r}function $(e){const t=document.createDocumentFragment();return e.forEach(n=>{if(!ue(n)){if(T(n)){const r=L(n);r.nodeValue=n,t.appendChild(r);return}if(d(n)){Xe(t,n);return}if(F(n)){const r=$(n);t.appendChild(r);return}if(ie(n)){const r=he(n.tag,n.attrs,n.children);t.appendChild(r);return}if(E(n)&&b(n.tag)){const r=M(n.tag,n.attrs,n.children);t.appendChild(r);return}I(`render: 不支持 ${n} 值渲染`)}}),t}function Re(e){if(T(e))return L(e);if(ie(e)||E(e)&&b(e.tag))return M(e.tag,e.attrs,e.children)}function Qe(e,t){let n=0,r=e.length-1;for(;n<=r;){var o=Math.ceil((n+r)/2);if(t===e[o].key)return o;t<e[o].key?r=o-1:t>e[o].key&&(n=o+1)}return-1}function Xe(e,t){let n=[],r=!0,o=null;const s=L("");e.appendChild(s),B(()=>{let c=t();if(c&&E(c)&&j(c.tag)){I("不支持响应式节点片段渲染");return}F(c)||(c=[c]),c=c.filter(i=>!ue(i));let u=0;for(;u<c.length;){let i=c[u];const a=Qe(n,u);if(a>=0){if(ce(i,n[a].tree)){u++;continue}const l=Re(i);if(!l){c.splice(a,1),u++;continue}const w=n[a].tree;if(b(w.tag)&&Ee(w.tag),n[a].node.parentElement.replaceChild(l,n[a].node),b(w.tag)){const m=w.tag;Se(m),K.delete(m)}n[a].tree=i,n[a].node=l}else{const l=Re(i);if(!l){u++;continue}if(r)e.appendChild(l);else if(n.length===0)o??(o=s.parentElement),o.insertBefore(l,s.nextSibling);else{const w=n[n.length-1].node,m=w.nextSibling;w.parentElement.insertBefore(l,m)}n.push({key:u,tree:i,node:l})}u++}if(n.length>c.length){for(let i=c.length;i<n.length;i++){const a=n[i].tree;if(b(a.tag)&&Ee(a.tag),n[i].node.remove(),b(a.tag)){const l=a.tag;Se(l),K.delete(l)}}n.splice(c.length,n.length-c.length)}r=!1})}function Z(e,t={},n=[""]){if(j(e)){const s=V(t,{children:n}),c=e(s);return Y(c)}if(b(e)){const s=V(t,{children:n}),c=e(s);return Z(c.tag,c.attrs,c.children)}let r="";for(const s in t){if(s.startsWith("on")||s==="ref")continue;let c=d(t[s])&&Ne(s)?t[s]():t[s];if(s==="className"){c&&(r+=` class="${c}"`);continue}if(s==="style"&&E(c)){for(const u in c)d(c[u])&&(c[u]=c[u]());c='"'+JSON.stringify(c).slice(1,-1).replaceAll('"',"").replaceAll(",",";")+'"'}r+=` ${s}="${c}"`}const o=Y(n);return`<${e}${r}>${o}</${e}>`}function Y(e){let t="";return e.forEach(n=>{if(T(n)){t+=n.toString();return}if(F(n)){t+=Y(n);return}if(d(n)){const r=n();t+=Y([r]);return}if(E(n)){t+=Z(n.tag,n.attrs,n.children);return}I(`renderToString: 不支持 ${n} 值渲染`)}),t}const ke=[];function Ze(){ke.forEach(e=>{e()}),ke.length=0}const ne=[];let $e=!1;function ve(e){if(!le){if($e){x(e);return}ne.push(e)}}function et(){ne.forEach(e=>{e()}),ne.length=0,$e=!0}function lt({tag:e,attrs:t,children:n}){const r=M(e,t,n);return Ze(),x(et),r}function tt({tag:e,attrs:t,children:n}){be(!0);const r=Z(e,t,n);return be(!1),r}function nt(e){const t={};return e.replace(/([^?&=]+)=([^&]+)/g,(n,r,o)=>t[r]=o),t}function re(e){const t=new URL("http://0.0.0.0"+e);return{fullPath:t.href.replace(t.origin,""),path:t.pathname,query:nt(t.search),hash:t.hash,meta:{}}}function rt(e){let t="";for(const r in e.query)e.query[r]&&(t+=`${r}=${e.query[r]}&`);t=t?"?"+t.slice(0,-1):"";let n=e.hash?"#"+e.hash:"";return e.path+t+n}function D(e){return e.replace(/\/{1,}/g,"/")}function Pe(e,t){Q(e)&&(p.mode==="history"&&(e=p.base+e),e=re(e));for(const r in e)f[r]=e[r];const{fullPath:n}=f;p.mode==="history"?history[t==="push"?"pushState":"replaceState"]({},"",n):location.hash=n}function Fe(e){Pe(e,"push")}function Ie(e){Pe(e,"replace")}function ee(e){history.go(e)}function ot(){return{back:()=>ee(-1),forward:()=>ee(1),go:ee,push:Fe,replace:Ie,options:p,currentRoute:O(f)}}function ht(){return f}const p={base:"",mode:"history",ssrDataKey:"g_initialProps"};let f=null;function Ce(){const{origin:e,href:t,hash:n}=location;return p.mode==="hash"?n.replace("#",""):t.replace(e+p.base,"")}let P=null;function dt(e){if(Object.assign(p,e),xe()){const t=re(Ce());f=A(t),window.addEventListener("popstate",()=>{const n=re(Ce());for(const r in n)f[r]=n[r]})}return{...ot(),beforeEach(t){P=t}}}const k={currentTemplate:"",ssrData:{}};function pt(e){}function Ae(e,t){t=t.replace(p.base,"");const n=e.find(u=>{const{path:i,exact:a}=u.attrs;return a===!1?(t+"/").startsWith(D(i+"/")):D(i)===t});if(!n)return;const{path:r,component:o,beforeEnter:s,meta:c}=n.attrs;return{path:D(r),component:o,meta:c,beforeEnter:s}}let g;const _e=[];function st(e){const t=ze();let n={};function r(s){const c=Ae(e.children,s);if(!c){n={},t.value=e.notFound;return}async function u(){if(c.component.prototype||(c.component=(await c.component()).default),t.value===c.component)return;n.path=c.path;const i=oe(c.component);if(i){const a=window[p.ssrDataKey];a&&n.path in a?(n.data=a[n.path],delete a[n.path]):n.data=await i(y(n))}t.value=c.component,n.meta=c.meta,f.meta=c.meta}if(P){P(O(f),g,()=>{g=y(f),s===f.path?u():r(f.path)});return}if(c.beforeEnter){c.beforeEnter(O(f),g,()=>{g=y(f),s===f.path?u():r(f.path)});return}g=y(f),u()}const o=je(()=>f.path,s=>{if(g){const c=g.path.split("/"),u=s.split("/");c[1]!==u[1]&&_e.forEach(i=>i())}r(s)},{immediate:!0});return e.prefix&&_e.push(o),h(C,null,()=>h(t.value,{...n}))}const G=A([]);function ct(e){const t=Ae(e.children,f.path);if(!t){const u=e.notFound;return h(u||C,null)}let n=!1;if(P&&(n=!0,P(O(f),g,()=>{g=y(f),n=!1})),t.beforeEnter&&(n=!0,t.beforeEnter(O(f),g,()=>{g=y(f),n=!1})),n)return h(C,null);let r=t.component;f.meta=t.meta;const o={path:t.path,meta:t.meta},s=`r_${Te()}`;if(!r.prototype)return G.push(s),r().then(async u=>{r=u.default;const i=oe(r);i&&(o.data=await i(y(o)),k.ssrData[o.path]=o.data),Me(s,r,o)}),h(C,null,s);const c=oe(r);return c?(G.push(s),c(y(o)).then(u=>{o.data=u,k.ssrData[o.path]=u,Me(s,r,o)}),h(C,null,s)):h(r,{...o})}function mt(e){return e.prefix&&e.children.forEach(t=>{t.attrs.path=D(e.prefix+t.attrs.path)}),xe()?h(st,{...e}):h(ct,{...e})}function Me(e,t,n){const r=tt(h(t,{...n})),o=G.indexOf(e);G.splice(o,1);const s=k.currentTemplate.replace(e,r);k.currentTemplate=s}function oe(e){const{getInitialProps:t}=e.prototype;if(t&&d(t))return t}function gt(e){Q(e.to)||(e.to=rt(e.to));const t=p.mode==="hash"?`${p.base}#${e.to}`:p.base+e.to;function n(r){r.preventDefault(),e.type==="push"?Fe(e.to):Ie(e.to)}return h("a",{className:e.className,href:t,onclick:n},e.children)}function yt(e){const t=[];if(e.children.forEach(o=>{o.tag==="title"?t.push(new RegExp("<title")):o.tag==="meta"&&o.attrs.name&&t.push(new RegExp(`<meta name=("|')?${o.attrs.name}`))}),k.currentTemplate){const c=k.currentTemplate.match(/\<head\>(.*)\<\/head>/s)[1].trim().split(`
`).filter(i=>i.includes("<"));for(let i=0;i<c.length;i++){c[i]=c[i].trim();for(let a=0;a<t.length;a++)t[a].test(c[i])&&(c[i]="")}e.children.forEach(i=>{const a=Z(i.tag,i.attrs,i.children);c.push(a)});const u=c.filter(i=>i).join(`
`);k.currentTemplate=k.currentTemplate.replace(/\<head\>.*\<\/head>/s,`<head>
${u}
</head>`)}let n=[],r=0;return ve(()=>{const o=document.head,s=o.innerHTML.split(`
`).filter(i=>i.includes("<")),c=[];e:for(let i=0;i<t.length;i++)for(let a=i;a<s.length;a++)if(t[i].test(s[a])){c.push(i);continue e}c.forEach(i=>{n.push(o.children[i].cloneNode(!0)),o.children[i].remove()}),r=e.children.length;const u=$(e.children);o.insertBefore(u,o.children[0])}),Je(()=>{const o=document.head;for(let s=0;s<r;s++)o.children[0].remove();n.forEach(s=>{o.insertBefore(s,o.childNodes[0])})}),h(C,null)}const J=Symbol("action");function it(e){return d(e)&&e.prototype[J]===J}var _;class ut{constructor(t,n){S(this,"state");S(this,"actions");me(this,_,!0);this.state=A(y(t)),this.actions={};for(const r in n){let s=function(...c){W(o,_,!1);const u=n[r](...c);if(R(u)&&u[Symbol.toStringTag]==="Promise")u.then(i=>(o._merge(t),x(()=>W(o,_,!0)),i));else return o._merge(t),x(()=>W(o,_,!0)),u};const o=this;s.prototype[J]=J,o.actions[r]=s}Object.assign(this.state,this.actions);for(const r in this.actions)Object.defineProperty(this.state,r,{writable:!1});je(()=>this.state,()=>{pe(this,_)&&(console.error("Failed to update state."),this._merge(t))},{deep:!0})}_merge(t){const n=Object.keys(t);for(const r in t)this.state[r]=t[r];for(const r in this.state)it(this.state[r])||!n.includes(r)&&delete this.state[r]}}_=new WeakMap;const te=new WeakMap;function bt(e,t){return()=>{if(!te.has(e)){const n=new ut(e,t);te.set(e,n.state)}return te.get(e)}}export{C as F,yt as H,gt as L,mt as R,pt as a,xe as b,bt as c,ze as d,ht as e,h,dt as i,ve as o,lt as r,ot as u,je as w};
