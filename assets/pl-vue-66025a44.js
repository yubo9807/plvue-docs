var It=Object.defineProperty;var Wt=(t,n,e)=>n in t?It(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var b=(t,n,e)=>(Wt(t,typeof n!="symbol"?n+"":n,e),e),at=(t,n,e)=>{if(!n.has(t))throw TypeError("Cannot "+e)};var lt=(t,n,e)=>(at(t,n,"read from private field"),e?e.call(t):n.get(t)),pt=(t,n,e)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,e)},$=(t,n,e,r)=>(at(t,n,"write to private field"),r?r.call(t,e):n.set(t,e),e);function nt(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function R(t){return["object","array"].includes(nt(t))}function Dt(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function rt(t,n){if(R(t)&&R(n)){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;for(const o of e)if(!r.includes(o)||!rt(t[o],n[o]))return!1;return!0}else return t===n}function Ct(){return typeof window=="object"}function S(t){return nt(t)==="object"}function N(t){return Array.isArray(t)}function G(t){return typeof t=="string"}function h(t){return typeof t=="function"}function M(t){Promise.resolve().then(t)}function y(t){const n=new WeakMap,e=["null","weakset","weakmap"],r={set(s){const i=new Set;for(const c of s)i.add(o(c));return i},map(s){const i=new Map;for(const[c,u]of s.entries())i.set(c,o(u));return i}};function o(s){const i=nt(s);if(typeof s!="object"||e.includes(i))return s;if(n.has(s))return n.get(s);if(r[i])return r[i](s);const c=N(s)?[]:{};Object.setPrototypeOf(c,Object.getPrototypeOf(s)),n.set(s,c);for(const u in s)c[u]=o(s[u]);return c}return o(t)}function I(t,n){return Object.assign({},t,n)}function Mt(){return Number(Math.random().toString().slice(2)).toString(32)}function P(...t){console.warn(...t)}let x=null;const W=new WeakMap;function D(t){x=t,t(),x=null}function Vt(t){const n=W.get(t)||[],e=n.some(r=>x===r);x&&!e&&(n.push(x),W.set(t,n))}function ht(t){const n=W.get(t);n&&n.forEach((e,r)=>{e()===!0&&(n.splice(r,1),W.set(t,n))})}const Lt=new WeakMap,J=new WeakMap,V={RAW:Symbol("__v_raw"),IS_READONLY:Symbol("__v_isReadonly")};function T(t){if(!R(t)||Object.isFrozen(t))return P(`lue cannot be made reactive: ${t}`),t;if(Lt.get(t))return t;let n=null;return new Proxy(t,{get(e,r,o){if(r===V.RAW)return e;if(R(e[r]))return T(e[r]);const s=Reflect.get(e,r,o);return Vt(e),s},set(e,r,o,s){if(e[V.IS_READONLY])return!0;if(R(e[r])){const l=e[r],m=new Set;for(const d in o)m.add(d),this.set(l,d,o[d],s[r]);for(const d in l)m.has(d)||this.deleteProperty(l,d);return!0}if(Reflect.get(e,r,s)===o)return!0;const c=Reflect.set(e,r,o,s),u=J.get(e)||new Set;u.add(r);const f=u.size;return J.set(e,u),M(()=>{const l=Reflect.get(e,r,s);c&&l===o&&f===1&&ht(e),J.delete(e)}),c},deleteProperty(e,r){const o=Reflect.get(e,r);if(R(o)){for(const c in o)this.deleteProperty(o,c);return!0}const s=Dt(e,r),i=Reflect.deleteProperty(e,r);return n=r,M(()=>{s&&i&&o!==void 0&&r===n&&(ht(e),n=null)}),i}})}function qt(t){return!!t[V.RAW]}function L(t){return qt(t)?t[V.RAW]:t}function Bt(t){const n=T({value:t});function e(){return n.value}function r(o){n.value=o}return[e,r]}const Ut="__v_isRef";var se;class Kt{constructor(n){b(this,se,!0);b(this,"__v_isShallow",!1);b(this,"_rawValue");b(this,"_value");b(this,"getSignal");b(this,"setSignal");this._rawValue=n;const[e,r]=Bt(n);this.getSignal=e,this.setSignal=r,this._value=e()}get value(){return this.getSignal()}set value(n){this.setSignal(n),this._rawValue=n}}se=Ut;function zt(t=void 0){return new Kt(t)}function Ot(t,n,e={}){let r=!1;if(r)return;const o=t();e.immediate&&n(o,void 0);let s=y(o),i=!0;return D(()=>{if(r)return!0;const c=t();if(R(c)){e.deep&&!rt(c,s)&&(n(c,s),s=y(c));return}if(i){i=!1;return}c!==s&&(n(c,s),s=c)}),()=>{r=!0}}function O(t){return["string","number"].includes(typeof t)&&t!==""}function jt(t){return!/^on/.test(t)}function ot(t){return S(t)&&(G(t.tag)||j(t.tag))}function g(t){return h(t)&&!j(t)}function st(t){return[void 0,null,"",!0,!1].includes(t)}function F(t){return document.createTextNode(t)}function p(t,n,...e){const r={tag:t,attrs:n||{},children:e};return g(r.tag)&&r.children.length===0&&r.attrs.children&&(r.children=r.attrs.children),r}function it(t){return t.prototype._id}function C({children:t}){return t}const q=Symbol("Fragment");C.prototype[q]=q;function j(t){return h(t)&&t.prototype[q]===q}const B=new WeakMap;function xt(t,n=[]){return t.forEach(e=>{S(e)&&(g(e.tag)?n.push({comp:e.tag,compId:it(e.tag),props:I(e.attrs,{children:t})}):O(e.tag)&&xt(e.children,n))}),n}function ct(t,n=[]){const e=B.get(t)||[];return n.push(...e),e.forEach(r=>{const o=ct(r.comp);n.push(...o)}),n}let dt=null;function Ht(t,n){"ref"in n&&(n.ref.value=dt),dt=null}let Nt=!1;function gt(t){Nt=t}const mt=new Map;function yt(t){const n=ct(t).map(r=>r.compId);n.unshift(it(t));const e=[];n.forEach(r=>{const o=mt.get(r)||[];e.push(...o),mt.delete(r)}),e.forEach(r=>{r()})}const bt=new Map;function wt(t){const n=ct(t).map(r=>r.compId);n.unshift(it(t));const e=[];n.forEach(r=>{const o=bt.get(r)||[];e.push(...o),bt.delete(r)}),e.forEach(r=>{r()})}function k(t,n,e){if(G(t))return ut(t,n,e);if(j(t))return U(e);if(g(t)){t=t,t.prototype._id=Mt();const r=I(n,{children:e}),o=t(r);return Ht(t,n),O(o)?F(o):(B.set(t,xt(o.children)),k(o.tag,o.attrs,o.children))}}function ut(t,n={},e=[""]){if(j(t))return k(t,n,e);const r=document.createElement(t);e.forEach(o=>{if(!st(o)){if(O(o)){const s=F(o);s.nodeValue=o,r.appendChild(s);return}if(h(o)){const s=U([o]);r.appendChild(s);return}if(N(o)){const s=U(o);r.appendChild(s);return}if(ot(o)){const s=ut(o.tag,o.attrs,o.children);r.appendChild(s);return}if(S(o)&&g(o.tag)){const s=k(o.tag,o.attrs,o.children);r.appendChild(s);return}P(`render: 不支持 ${o} 值渲染`)}});for(const o in n){const s=n[o];if(![void 0,null].includes(s)){if(o.startsWith("data-")){r.dataset[o.slice(5)]=s;continue}if(o==="ref"){s.value=r;continue}if(o==="created"&&h(s)){s(r);continue}if(h(s)&&jt(o)){D(()=>{r[o]=s()});continue}r[o]=s}}if(n.style&&S(n.style))for(const o in n.style){const s=n.style[o];h(s)?D(()=>r.style[o]=s()):r.style[o]=s}return r}function U(t){const n=document.createDocumentFragment();return t.forEach(e=>{if(!st(e)){if(O(e)){const r=F(e);r.nodeValue=e,n.appendChild(r);return}if(h(e)){Gt(n,e);return}if(N(e)){const r=U(e);n.appendChild(r);return}if(ot(e)){const r=ut(e.tag,e.attrs,e.children);n.appendChild(r);return}if(S(e)&&g(e.tag)){const r=k(e.tag,e.attrs,e.children);n.appendChild(r);return}P(`render: 不支持 ${e} 值渲染`)}}),n}function St(t){if(O(t))return F(t);if(ot(t)||S(t)&&g(t.tag))return k(t.tag,t.attrs,t.children)}function Yt(t,n){let e=0,r=t.length-1;for(;e<=r;){var o=Math.ceil((e+r)/2);if(n===t[o].key)return o;n<t[o].key?r=o-1:n>t[o].key&&(e=o+1)}return-1}function Gt(t,n){let e=[],r=!0,o=null;const s=F("");t.appendChild(s),D(()=>{let i=n();if(i&&S(i)&&j(i.tag)){P("不支持响应式节点片段渲染");return}N(i)||(i=[i]),i=i.filter(u=>!st(u));let c=0;for(;c<i.length;){let u=i[c];const f=Yt(e,c);if(f>=0){if(rt(u,e[f].tree)){c++;continue}const l=St(u);if(!l){i.splice(f,1),c++;continue}const m=e[f].tree;if(g(m.tag)&&yt(m.tag),e[f].node.parentElement.replaceChild(l,e[f].node),g(m.tag)){const d=m.tag;wt(d),B.delete(d)}e[f].tree=u,e[f].node=l}else{const l=St(u);if(!l){c++;continue}if(r)t.appendChild(l);else if(e.length===0)o??(o=s.parentElement),o.insertBefore(l,s.nextSibling);else{const m=e[e.length-1].node,d=m.nextSibling;m.parentElement.insertBefore(l,d)}e.push({key:c,tree:u,node:l})}c++}if(e.length>i.length){for(let u=i.length;u<e.length;u++){const f=e[u].tree;if(g(f.tag)&&yt(f.tag),e[u].node.remove(),g(f.tag)){const l=f.tag;wt(l),B.delete(l)}}e.splice(i.length,e.length-i.length)}r=!1})}function ft(t,n={},e=[""]){if(j(t)){const s=I(n,{children:e}),i=t(s);return K(i)}if(g(t)){const s=I(n,{children:e}),i=t(s);return ft(i.tag,i.attrs,i.children)}let r="";for(const s in n){if(s.startsWith("on")||s==="ref")continue;let i=h(n[s])&&jt(s)?n[s]():n[s];if(s==="className"){i&&(r+=` class="${i}"`);continue}if(s==="style"&&S(i)){for(const c in i)h(i[c])&&(i[c]=i[c]());i='"'+JSON.stringify(i).slice(1,-1).replaceAll('"',"").replaceAll(",",";")+'"'}r+=` ${s}="${i}"`}const o=K(e);return`<${t}${r}>${o}</${t}>`}function K(t){let n="";return t.forEach(e=>{if(O(e)){n+=e.toString();return}if(N(e)){n+=K(e);return}if(h(e)){const r=e();n+=K([r]);return}if(S(e)){n+=ft(e.tag,e.attrs,e.children);return}P(`renderToString: 不支持 ${e} 值渲染`)}),n}const Rt=[];function Jt(){Rt.forEach(t=>{t()}),Rt.length=0}const Z=[];let Pt=!1;function ce(t){if(!Nt){if(Pt){M(t);return}Z.push(t)}}function Qt(){Z.forEach(t=>{t()}),Z.length=0,Pt=!0}function ue({tag:t,attrs:n,children:e}){const r=k(t,n,e);return Jt(),M(Qt),r}function Xt({tag:t,attrs:n,children:e}){gt(!0);const r=ft(t,n,e);return gt(!1),r}function Zt(t){const n={};return t.replace(/([^?&=]+)=([^&]+)/g,(e,r,o)=>n[r]=o),n}function v(t){const n=new URL("http://0.0.0.0"+t);return{fullPath:n.href.replace(n.origin,""),path:n.pathname,query:Zt(n.search),hash:n.hash,meta:{}}}function vt(t){let n="";for(const r in t.query)t.query[r]&&(n+=`${r}=${t.query[r]}&`);n=n?"?"+n.slice(0,-1):"";let e=t.hash?"#"+t.hash:"";return t.path+n+e}function A(t){return t.replace(/\/{1,}/g,"/")}function Tt(t,n){G(t)&&(t=v(t));for(const r in t)a[r]=t[r];const{fullPath:e}=a;_.mode==="history"?history[n==="push"?"pushState":"replaceState"]({},"",e):location.hash=e}function Ft(t){Tt(t,"push")}function $t(t){Tt(t,"replace")}function Q(t){history.go(t)}function te(){return{back:()=>Q(-1),forward:()=>Q(1),go:Q,push:Ft,replace:$t,options:_,currentRoute:L(a)}}function fe(){return a}const _={base:"",mode:"history",ssrDataKey:"g_initialProps"};let a=null;function Et(){const{origin:t,href:n,hash:e}=location;return _.mode==="hash"?e.replace("#",""):n.replace(t+_.base,"")}let tt=null;function ae(t){if(Object.assign(_,t),Ct()){const n=v(Et());a=T(n),window.addEventListener("popstate",()=>{const e=v(Et());for(const r in e)a[r]=e[r]})}return{...te(),beforeEach(n){tt=n}}}const z={currentTemplate:"",ssrData:{}};function le(t){}function At(t,n){const e=t.find(c=>{const{path:u,exact:f}=c.attrs;return f===!1?(n+"/").startsWith(A(u+"/")):A(u)===n});if(!e)return;const{path:r,component:o,beforeEnter:s,meta:i}=e.attrs;return{path:A(r),component:o,meta:i,beforeEnter:s}}let w;const kt=[];function ee(t){const n=zt();let e={};function r(s){const i=At(t.children,s);if(!i){e={},n.value=t.notFound;return}async function c(){if(i.component.prototype||(i.component=(await i.component()).default),n.value===i.component)return;e.path=i.path;const u=et(i.component);if(u){const f=window[_.ssrDataKey];f&&e.path in f?(e.data=f[e.path],delete f[e.path]):e.data=await u(y(e))}n.value=i.component,e.meta=i.meta,a.meta=i.meta}if(tt){tt(L(a),w,()=>{w=y(a),s===a.path?c():r(a.path)});return}if(i.beforeEnter){i.beforeEnter(L(a),w,()=>{w=y(a),s===a.path?c():r(a.path)});return}w=y(a),c()}const o=Ot(()=>a.path,s=>{if(w){const i=w.path.split("/"),c=s.split("/");i[1]!==c[1]&&kt.forEach(u=>u())}r(s)},{immediate:!0});return t.prefix&&kt.push(o),p(C,null,()=>p(n.value,{...e}))}const H=T([]);function ne(t){const n=At(t.children,a.path);if(!n){const c=t.notFound;return p(c||C,null)}let e=!1;if(n.beforeEnter&&(e=!0,n.beforeEnter(L(a),w,()=>{w=y(a),e=!1})),e)return p(C,null);let r=n.component;a.meta=n.meta;const o={path:n.path,meta:n.meta},s=`r_${Mt()}`;if(!r.prototype)return H.push(s),r().then(async c=>{r=c.default;const u=et(r);u&&(o.data=await u(y(o)),z.ssrData[o.path]=o.data),_t(s,r,o)}),p(C,null,s);const i=et(r);return i?(H.push(s),i(y(o)).then(c=>{o.data=c,z.ssrData[o.path]=c,_t(s,r,o)}),p(C,null,s)):p(r,{...o})}function pe(t){return t.prefix&&t.children.forEach(n=>{n.attrs.path=A(t.prefix+n.attrs.path)}),Ct()?p(ee,{...t}):p(ne,{...t})}function _t(t,n,e){const r=Xt(p(n,{...e})),o=H.indexOf(t);H.splice(o,1);const s=z.currentTemplate.replace(t,r);z.currentTemplate=s}function et(t){const{getInitialProps:n}=t.prototype;if(n&&h(n))return n}function he(t){G(t.to)||(t.to=vt(t.to));function n(e){e.preventDefault(),t.type==="push"?Ft(t.to):$t(t.to)}return p("a",{className:t.className,href:_.base+t.to,onclick:n},t.children)}const Y=Symbol("action");function re(t){return h(t)&&t.prototype[Y]===Y}var E;class oe{constructor(n,e){b(this,"state");b(this,"actions");pt(this,E,!0);this.state=T(y(n)),this.actions={};for(const r in e){let s=function(...i){$(o,E,!1);const c=e[r](...i);if(R(c)&&c[Symbol.toStringTag]==="Promise")c.then(u=>(o._merge(n),M(()=>$(o,E,!0)),u));else return o._merge(n),M(()=>$(o,E,!0)),c};const o=this;s.prototype[Y]=Y,o.actions[r]=s}Object.assign(this.state,this.actions);for(const r in this.actions)Object.defineProperty(this.state,r,{writable:!1});Ot(()=>this.state,()=>{lt(this,E)&&(console.error("Failed to update state."),this._merge(n))},{deep:!0})}_merge(n){const e=Object.keys(n);for(const r in n)this.state[r]=n[r];for(const r in this.state)re(this.state[r])||!e.includes(r)&&delete this.state[r]}}E=new WeakMap;const X=new WeakMap;function de(t,n){return()=>{if(!X.has(t)){const e=new oe(t,n);X.set(t,e.state)}return X.get(t)}}export{C as F,he as L,pe as R,le as a,Ct as b,de as c,zt as d,fe as e,p as h,ae as i,ce as o,ue as r,te as u,Ot as w};