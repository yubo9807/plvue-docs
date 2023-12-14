var Pe=Object.defineProperty;var Fe=(e,n,t)=>n in e?Pe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var h=(e,n,t)=>(Fe(e,typeof n!="symbol"?n+"":n,t),t);function oe(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function M(e){return["object","array"].includes(oe(e))}function Ae(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function se(e,n){if(M(e)&&M(n)){const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const o of t)if(!r.includes(o)||!se(e[o],n[o]))return!1;return!0}else return e===n}function ke(){return typeof window=="object"}function S(e){return oe(e)==="object"}function P(e){return Array.isArray(e)}function J(e){return typeof e=="string"}function p(e){return typeof e=="function"}function W(e){Promise.resolve().then(e)}function m(e){const n=new WeakMap,t=["null","weakset","weakmap"],r={function(s){const c=function(...u){return s.apply(this,u)};return c.prototype=o(s.prototype),c},set(s){const c=new Set;for(const u of s)c.add(o(u));return c},map(s){const c=new Map;for(const[u,i]of s.entries())c.set(u,o(i));return c}};function o(s){const c=oe(s);if(!["object","function"].includes(typeof s)||t.includes(c))return s;if(n.has(s))return n.get(s);if(r[c])return r[c](s);const u=P(s)?[]:{};Object.setPrototypeOf(u,Object.getPrototypeOf(s)),n.set(s,u);for(const i in s)u[i]=o(s[i]);return u}return o(e)}function D(e,n){return Object.assign({},e,n)}function Me(){return Number((Math.random()+"").slice(2)).toString(32)}function x(...e){console.warn(...e)}let O=null;const V=new WeakMap;function q(e){O=e,e(),O=null}function Le(e){const n=V.get(e)||[],t=n.some(r=>O===r);O&&!t&&(n.push(O),V.set(e,n))}function he(e){const n=V.get(e);n&&n.forEach((t,r)=>{t()===!0&&(n.splice(r,1),V.set(e,n))})}const We=new WeakMap,Z=new WeakMap,B={RAW:Symbol("__v_raw"),IS_READONLY:Symbol("__v_isReadonly")};function F(e){if(!M(e)||Object.isFrozen(e))return x(`lue cannot be made reactive: ${e}`),e;if(We.get(e))return e;let n=null;return new Proxy(e,{get(t,r,o){if(r===B.RAW)return t;if(M(t[r]))return F(t[r]);const s=Reflect.get(t,r,o);return Le(t),s},set(t,r,o,s){if(t[B.IS_READONLY])return!0;if(M(t[r])){const l=t[r],R=new Set;for(const y in o)R.add(y),this.set(l,y,o[y],s[r]);for(const y in l)R.has(y)||this.deleteProperty(l,y);return!0}if(Reflect.get(t,r,s)===o)return!0;const u=Reflect.set(t,r,o,s),i=Z.get(t)||new Set;i.add(r);const a=i.size;return Z.set(t,i),W(()=>{const l=Reflect.get(t,r,s);u&&l===o&&a===1&&he(t),Z.delete(t)}),u},deleteProperty(t,r){const o=Reflect.get(t,r),s=Ae(t,r),c=Reflect.deleteProperty(t,r);return n=r,W(()=>{s&&c&&o!==void 0&&r===n&&(he(t),n=null)}),c}})}function De(e){return S(e)&&!!e[B.RAW]}function C(e){return De(e)?e[B.RAW]:e}function Ve(e){const n={value:e},t=F(n);function r(){return t.value}function o(s){t.value=s}return[r,o,n]}const je="__v_isRef";var it;class qe{constructor(n){h(this,it,!0);h(this,"__v_isShallow",!1);h(this,"_rawValue");h(this,"_value");h(this,"getSignal");h(this,"setSignal");const[t,r,o]=Ve(n);this._rawValue=o,this.getSignal=t,this.setSignal=r,this._value=t()}get value(){return this.getSignal()}set value(n){this.setSignal(n)}}it=je;function Be(e=void 0){return new qe(e)}class He{constructor(n){h(this,"fn");this.fn=n}}var ut;class de{constructor(n,t){h(this,"__v_isReadonly",!0);h(this,ut,!0);h(this,"_cacheable",!0);h(this,"_dirty",!0);h(this,"computed");h(this,"_setter");this.computed=new He(n),this._setter=t}get value(){return this.computed.fn()}set value(n){this._setter?this._setter(n):x("Write operation failed: computed value is readonly")}}ut=je;function ft(e){return p(e)?new de(e):new de(e.get,e.set)}function Ue(e,n,t={}){let r=!1;if(r)return;const o=e();t.immediate&&n(o,void 0);let s=m(o),c=!0;return q(()=>{if(r)return!0;const u=e();if(M(u)){t.deep&&!se(u,s)&&(n(u,s),s=m(u));return}if(c){c=!1;return}u!==s&&(n(u,s),s=u)}),()=>{r=!0}}function T(e){return["string","number"].includes(typeof e)&&e!==""}function xe(e){return!/^on/.test(e)}function ce(e){return S(e)&&(J(e.tag)||N(e.tag))}function E(e){return p(e)&&!N(e)}function ie(e){return[void 0,null,"",!0,!1].includes(e)}function A(e){return document.createTextNode(e)}function b(e,n){e.appendChild(n)}function d(e,n,...t){const r={tag:e,attrs:n||{},children:t};return E(r.tag)&&r.children.length===0&&r.attrs.children&&(r.children=r.attrs.children),r}function Q(e){return e.prototype._id}function k({children:e}){return e}const H=Symbol("Fragment");k.prototype[H]=H;function N(e){return p(e)&&e.prototype[H]===H}const U=new WeakMap;function Te(e,n=[]){return e.forEach(t=>{S(t)&&(E(t.tag)?n.push({comp:t.tag,compId:Q(t.tag),props:D(t.attrs,{children:e})}):T(t.tag)&&Te(t.children,n))}),n}function ue(e,n=[]){const t=U.get(e)||[];return n.push(...t),t.forEach(r=>{const o=ue(r.comp);n.push(...o)}),n}let ae=null;function Ke(e){ae=e}let pe=null;function ze(e,n){ae=e,"ref"in n&&(n.ref.value=pe),pe=null}let fe=!1;function me(e){fe=e}const ge=new Map;function ye(e){const n=ue(e).map(r=>r.compId);n.unshift(Q(e));const t=[];n.forEach(r=>{const o=ge.get(r)||[];t.push(...o),ge.delete(r)}),t.forEach(r=>{r()})}const K=new Map;function Ye(e){if(fe)return;const n=Q(ae),t=K.get(n)||[];t.some(o=>o===e)||(t.push(e),K.set(n,t))}function we(e){const n=ue(e).map(r=>r.compId);n.unshift(Q(e));const t=[];n.forEach(r=>{const o=K.get(r)||[];t.push(...o),K.delete(r)}),t.forEach(r=>{r()})}function j(e,n,t){if(J(e))return le(e,n,t);if(N(e))return $(t);if(E(e)){e=e,e.prototype._id=Me(),Ke(e);const r=D(n,{children:t}),o=e(r);return ze(e,n),T(o)?A(o):(U.set(e,Te(o.children)),j(o.tag,o.attrs,o.children))}}function le(e,n={},t=[""]){if(N(e))return j(e,n,t);const r=document.createElement(e);t.forEach(o=>{if(!ie(o)){if(T(o)){const s=A(o);s.nodeValue=o,b(r,s);return}if(p(o)){const s=$([o]);b(r,s);return}if(P(o)){const s=$(o);b(r,s);return}if(ce(o)){const s=le(o.tag,o.attrs,o.children);b(r,s);return}if(S(o)&&E(o.tag)){const s=j(o.tag,o.attrs,o.children);b(r,s);return}x(`render: 不支持 ${o} 值渲染`)}});for(const o in n){const s=n[o];if(![void 0,null].includes(s)){if(o.startsWith("data-")){r.dataset[o.slice(5)]=s;continue}if(o==="ref"){s.value=r;continue}if(o==="created"&&p(s)){s(r);continue}if(p(s)&&xe(o)){q(()=>{r[o]=s()});continue}r[o]=s}}if(n.style&&S(n.style))for(const o in n.style){const s=n.style[o];p(s)?q(()=>r.style[o]=s()):r.style[o]=s}return r}function $(e){const n=document.createDocumentFragment();return e.forEach(t=>{if(!ie(t)){if(T(t)){const r=A(t);r.nodeValue=t,b(n,r);return}if(p(t)){Je(n,t);return}if(P(t)){const r=$(t);b(n,r);return}if(ce(t)){const r=le(t.tag,t.attrs,t.children);b(n,r);return}if(S(t)&&E(t.tag)){const r=j(t.tag,t.attrs,t.children);b(n,r);return}x(`render: 不支持 ${t} 值渲染`)}}),n}function be(e){if(T(e))return A(e);if(ce(e)||S(e)&&E(e.tag))return j(e.tag,e.attrs,e.children)}function Ge(e,n){let t=0,r=e.length-1;for(;t<=r;){var o=Math.ceil((t+r)/2);if(n===e[o].key)return o;n<e[o].key?r=o-1:n>e[o].key&&(t=o+1)}return-1}function Je(e,n){let t=[],r=!0,o=null;const s=A("");b(e,s),q(()=>{let c=n();if(c&&S(c)&&N(c.tag)){x("不支持响应式节点片段渲染");return}P(c)||(c=[c]),c=c.filter(i=>!ie(i));let u=0;for(;u<c.length;){let i=c[u];const a=Ge(t,u);if(a>=0){if(se(i,t[a].tree)){u++;continue}const l=be(i);if(!l){c.splice(a,1),u++;continue}const R=t[a].tree;if(E(R.tag)&&ye(R.tag),t[a].node.parentElement.replaceChild(l,t[a].node),E(R.tag)){const y=R.tag;we(y),U.delete(y)}t[a].tree=i,t[a].node=l}else{const l=be(i);if(!l){u++;continue}if(r)b(e,l);else if(t.length===0)o??(o=s.parentElement),o.insertBefore(l,s.nextSibling);else{const R=t[t.length-1].node,y=R.nextSibling;R.parentElement.insertBefore(l,y)}t.push({key:u,tree:i,node:l})}u++}if(t.length>c.length){for(let i=c.length;i<t.length;i++){const a=t[i].tree;if(E(a.tag)&&ye(a.tag),t[i].node.remove(),E(a.tag)){const l=a.tag;we(l),U.delete(l)}}t.splice(c.length,t.length-c.length)}r=!1})}function X(e,n={},t=[""]){if(N(e)){const s=D(n,{children:t}),c=e(s);return z(c)}if(E(e)){const s=D(n,{children:t}),c=e(s);return X(c.tag,c.attrs,c.children)}let r="";for(const s in n){if(s.startsWith("on")||s==="ref")continue;let c=p(n[s])&&xe(s)?n[s]():n[s];if(s==="className"){c&&(r+=` class="${c}"`);continue}if(s==="style"&&S(c)){for(const u in c)p(c[u])&&(c[u]=c[u]());c='"'+JSON.stringify(c).slice(1,-1).replaceAll('"',"").replaceAll(",",";")+'"'}r+=` ${s}="${c}"`}const o=z(t);return`<${e}${r}>${o}</${e}>`}function z(e){let n="";return e.forEach(t=>{if(T(t)){n+=t.toString();return}if(P(t)){n+=z(t);return}if(p(t)){const r=t();n+=z([r]);return}if(S(t)){n+=X(t.tag,t.attrs,t.children);return}x(`renderToString: 不支持 ${t} 值渲染`)}),n}const Ee=[];function Qe(){Ee.forEach(e=>{e()}),Ee.length=0}const te=[];let Ne=!1;function Xe(e){if(!fe){if(Ne){W(e);return}te.push(e)}}function Ze(){te.forEach(e=>{e()}),te.length=0,Ne=!0}function lt({tag:e,attrs:n,children:t}){const r=j(e,n,t);return Qe(),W(Ze),r}function ve({tag:e,attrs:n,children:t}){me(!0);const r=X(e,n,t);return me(!1),r}function et(e){const n={};return e.replace(/([^?&=]+)=([^&]+)/g,(t,r,o)=>n[r]=o),n}function ne(e){const n=new URL("http://0.0.0.0"+e);return{fullPath:n.href.replace(n.origin,""),path:n.pathname,query:et(n.search),hash:n.hash,meta:{}}}function tt(e){let n="";for(const r in e.query)e.query[r]&&(n+=`${r}=${e.query[r]}&`);n=n?"?"+n.slice(0,-1):"";let t=e.hash?"#"+e.hash:"";return e.path+n+t}function L(e){return e.replace(/\/{1,}/g,"/")}function Oe(e,n){J(e)&&(g.mode==="history"&&(e=g.base+e),e=ne(e));for(const r in e)f[r]=e[r];const{fullPath:t}=f;g.mode==="history"?history[n==="push"?"pushState":"replaceState"]({},"",t):location.hash=t}function Ce(e){Oe(e,"push")}function $e(e){Oe(e,"replace")}function v(e){history.go(e)}function nt(){return{back:()=>v(-1),forward:()=>v(1),go:v,push:Ce,replace:$e,options:g,currentRoute:C(f)}}function ht(){return f}const g={base:"",mode:"history",ssrDataKey:"g_initialProps"};let f=null;function Re(){const{origin:e,href:n,hash:t}=location;return g.mode==="hash"?t.replace("#",""):n.replace(e+g.base,"")}let I=null;function dt(e){if(Object.assign(g,e),ke()){const n=ne(Re());f=F(n),window.addEventListener("popstate",()=>{const t=ne(Re());for(const r in t)f[r]=t[r]})}return{...nt(),beforeEach(n){I=n}}}const _={currentTemplate:"",ssrData:{}};function pt(e){}function Ie(e,n){n=n.replace(g.base,"");const t=e.find(u=>{const{path:i,exact:a}=u.attrs;return a===!1?(n+"/").startsWith(L(i+"/")):L(i)===n});if(!t)return;const{path:r,component:o,beforeEnter:s,meta:c}=t.attrs;return{path:L(r),component:o,meta:c,beforeEnter:s}}let w;const Se=[];function rt(e){const n=Be();let t={};function r(s){const c=Ie(e.children,s);if(!c){t={},n.value=e.notFound;return}async function u(){if(c.component.prototype||(c.component=(await c.component()).default),n.value===c.component)return;t.path=c.path;const i=re(c.component);if(i){const a=window[g.ssrDataKey];a&&t.path in a?(t.data=a[t.path],delete a[t.path]):t.data=await i(m(t))}n.value=c.component,t.meta=c.meta,f.meta=c.meta}if(I){I(C(f),w,()=>{w=m(f),s===f.path?u():r(f.path)});return}if(c.beforeEnter){c.beforeEnter(C(f),w,()=>{w=m(f),s===f.path?u():r(f.path)});return}w=m(f),u()}const o=Ue(()=>f.path,s=>{if(w){const c=w.path.split("/"),u=s.split("/");c[1]!==u[1]&&Se.forEach(i=>i())}r(s)},{immediate:!0});return e.prefix&&Se.push(o),d(k,null,()=>d(n.value,{...t}))}const Y=F([]);function ot(e){const n=Ie(e.children,f.path);if(!n){const u=e.notFound;return d(u||k,null)}let t=!1;if(I&&(t=!0,I(C(f),w,()=>{w=m(f),t=!1})),n.beforeEnter&&(t=!0,n.beforeEnter(C(f),w,()=>{w=m(f),t=!1})),t)return d(k,null);let r=n.component;f.meta=n.meta;const o={path:n.path,meta:n.meta},s=`r_${Me()}`;if(!r.prototype)return Y.push(s),r().then(async u=>{r=u.default;const i=re(r);i&&(o.data=await i(m(o)),_.ssrData[o.path]=o.data),_e(s,r,o)}),d(k,null,s);const c=re(r);return c?(Y.push(s),c(m(o)).then(u=>{o.data=u,_.ssrData[o.path]=u,_e(s,r,o)}),d(k,null,s)):d(r,{...o})}function mt(e){return e.prefix&&e.children.forEach(n=>{n.attrs.path=L(e.prefix+n.attrs.path)}),ke()?d(rt,{...e}):d(ot,{...e})}function _e(e,n,t){const r=ve(d(n,{...t})),o=Y.indexOf(e);Y.splice(o,1);const s=_.currentTemplate.replace(e,r);_.currentTemplate=s}function re(e){const{getInitialProps:n}=e.prototype;if(n&&p(n))return n}function gt(e){J(e.to)||(e.to=tt(e.to));const n=g.mode==="hash"?`${g.base}#${e.to}`:g.base+e.to;function t(r){r.preventDefault(),e.type==="replace"?$e(e.to):Ce(e.to)}return d("a",{className:e.className,href:n,onclick:t},e.children)}function yt(e){const n=[];if(e.children.forEach(o=>{o.tag==="title"?n.push(new RegExp("<title")):o.tag==="meta"&&o.attrs.name&&n.push(new RegExp(`<meta name=("|')?${o.attrs.name}`))}),_.currentTemplate){const c=_.currentTemplate.match(/\<head\>(.*)\<\/head>/s)[1].trim().split(`
`).filter(i=>i.includes("<"));for(let i=0;i<c.length;i++){c[i]=c[i].trim();for(let a=0;a<n.length;a++)n[a].test(c[i])&&(c[i]="")}e.children.forEach(i=>{const a=X(i.tag,i.attrs,i.children);c.push(a)});const u=c.filter(i=>i).join(`
`);_.currentTemplate=_.currentTemplate.replace(/\<head\>.*\<\/head>/s,`<head>
${u}
</head>`)}let t=[],r=0;return Xe(()=>{const o=document.head,s=o.innerHTML.split(`
`).filter(i=>i.includes("<")),c=[];e:for(let i=0;i<n.length;i++)for(let a=i;a<s.length;a++)if(n[i].test(s[a])){c.push(i);continue e}c.forEach(i=>{t.push(o.children[i].cloneNode(!0)),o.children[i].remove()}),r=e.children.length;const u=$(e.children);o.insertBefore(u,o.children[0])}),Ye(()=>{const o=document.head;for(let s=0;s<r;s++)o.children[0].remove();t.forEach(s=>{o.insertBefore(s,o.childNodes[0])})}),d(k,null)}const G=Symbol("action");function st(e){return p(e)&&e.prototype[G]===G}class ct{constructor(n,t){h(this,"state");h(this,"actions");this.state=F(m(n)),this.actions={};for(const r in t){let s=function(...c){const u=t[r](...c);if(M(u)&&u[Symbol.toStringTag]==="Promise")u.then(i=>(o._merge(n),i));else return o._merge(n),u};const o=this;s.prototype[G]=G,o.actions[r]=s}Object.assign(this.state,this.actions);for(const r in this.actions)Object.defineProperty(this.state,r,{writable:!1})}_merge(n){const t=m(n),r=Object.keys(t);for(const o in t)this.state[o]=t[o];for(const o in this.state)st(this.state[o])||!r.includes(o)&&delete this.state[o]}}const ee=new WeakMap;function wt(e,n){return()=>{if(!ee.has(e)){const t=new ct(e,n);ee.set(e,t.state)}return ee.get(e)}}export{k as F,yt as H,gt as L,mt as R,ft as a,pt as b,wt as c,m as d,lt as e,ke as f,Ye as g,d as h,dt as i,ht as j,W as n,Xe as o,Be as r,nt as u,Ue as w};
