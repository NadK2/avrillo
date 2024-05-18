import{r as i,m as y,e as me,j as a,a as z,Y as Le}from"./app-DXIVQPXb.js";import{A as $e,a as se,P as Re}from"./Api-anBHNKmD.js";var Pe=Object.defineProperty,De=(e,t,r)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t,r)=>(De(e,typeof t!="symbol"?t+"":t,r),r);let Ae=class{constructor(){Z(this,"current",this.detect()),Z(this,"handoffState","pending"),Z(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},U=new Ae,P=(e,t)=>{U.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function $(e){let t=i.useRef(e);return P(()=>{t.current=e},[e]),t}let N=function(e){let t=$(e);return y.useCallback((...r)=>t.current(...r),[t])};function Me(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function D(){let e=[],t={addEventListener(r,n,s,d){return r.addEventListener(n,s,d),t.add(()=>r.removeEventListener(n,s,d))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Me(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,s){let d=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:s}),this.add(()=>{Object.assign(r.style,{[n]:d})})},group(r){let n=D();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let s of e.splice(n,1))s()}},dispose(){for(let r of e.splice(0))r()}};return t}function ge(){let[e]=i.useState(D);return i.useEffect(()=>()=>e.dispose(),[e]),e}function He(){let e=typeof document>"u";return"useSyncExternalStore"in me?(t=>t.useSyncExternalStore)(me)(()=>()=>{},()=>!1,()=>!e):!1}function ve(){let e=He(),[t,r]=i.useState(U.isHandoffComplete);return t&&U.isHandoffComplete===!1&&r(!1),i.useEffect(()=>{t!==!0&&r(!0)},[t]),i.useEffect(()=>U.handoff(),[]),e?!1:t}function j(e,t,...r){if(e in t){let s=t[e];return typeof s=="function"?s(...r):s}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}let qe=Symbol();function xe(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let r=N(n=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(n):s.current=n)});return e.every(n=>n==null||(n==null?void 0:n[qe]))?void 0:r}function I(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var be=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(be||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function ye({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:s,visible:d=!0,name:u,mergeRefs:f}){f=f??Be;let o=je(t,e);if(d)return B(o,r,n,u,f);let l=s??0;if(l&2){let{static:c=!1,...x}=o;if(c)return B(x,r,n,u,f)}if(l&1){let{unmount:c=!0,...x}=o;return j(c?0:1,{0(){return null},1(){return B({...x,hidden:!0,style:{display:"none"}},r,n,u,f)}})}return B(o,r,n,u,f)}function B(e,t={},r,n,s){let{as:d=r,children:u,refName:f="ref",...o}=ee(e,["unmount","static"]),l=e.ref!==void 0?{[f]:e.ref}:{},c=typeof u=="function"?u(t):u;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let x={};if(t){let v=!1,g=[];for(let[h,p]of Object.entries(t))typeof p=="boolean"&&(v=!0),p===!0&&g.push(h);v&&(x["data-headlessui-state"]=g.join(" "))}if(d===i.Fragment&&Object.keys(he(o)).length>0){if(!i.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let v=c.props,g=typeof(v==null?void 0:v.className)=="function"?(...p)=>I(v==null?void 0:v.className(...p),o.className):I(v==null?void 0:v.className,o.className),h=g?{className:g}:{};return i.cloneElement(c,Object.assign({},je(c.props,he(ee(o,["ref"]))),x,l,{ref:s(c.ref,l.ref)},h))}return i.createElement(d,Object.assign({},ee(o,["ref"]),d!==i.Fragment&&l,d!==i.Fragment&&x),c)}function Be(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function je(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let s in n)s.startsWith("on")&&typeof n[s]=="function"?(r[s]!=null||(r[s]=[]),r[s].push(n[s])):t[s]=n[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](s,...d){let u=r[n];for(let f of u){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;f(s,...d)}}});return t}function ae(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function he(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function ee(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let oe=i.createContext(null);oe.displayName="OpenClosedContext";var w=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(w||{});function we(){return i.useContext(oe)}function Qe({value:e,children:t}){return y.createElement(oe.Provider,{value:e},t)}function le(){let e=i.useRef(!1);return P(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ue(e=0){let[t,r]=i.useState(e),n=le(),s=i.useCallback(o=>{n.current&&r(l=>l|o)},[t,n]),d=i.useCallback(o=>!!(t&o),[t]),u=i.useCallback(o=>{n.current&&r(l=>l&~o)},[r,n]),f=i.useCallback(o=>{n.current&&r(l=>l^o)},[r]);return{flags:t,addFlag:s,hasFlag:d,removeFlag:u,toggleFlag:f}}function Ie(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function te(e,...t){e&&t.length>0&&e.classList.add(...t)}function re(e,...t){e&&t.length>0&&e.classList.remove(...t)}function ze(e,t){let r=D();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:s}=getComputedStyle(e),[d,u]=[n,s].map(o=>{let[l=0]=o.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,x)=>x-c);return l}),f=d+u;if(f!==0){r.group(l=>{l.setTimeout(()=>{t(),l.dispose()},f),l.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&l.dispose()})});let o=r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t(),o())})}else t();return r.add(()=>t()),r.dispose}function Ve(e,t,r,n){let s=r?"enter":"leave",d=D(),u=n!==void 0?Ie(n):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let f=j(s,{enter:()=>t.enter,leave:()=>t.leave}),o=j(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=j(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return re(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),te(e,...t.base,...f,...l),d.nextFrame(()=>{re(e,...t.base,...f,...l),te(e,...t.base,...f,...o),ze(e,()=>(re(e,...t.base,...f),te(e,...t.base,...t.entered),u()))}),d.dispose}function We({immediate:e,container:t,direction:r,classes:n,onStart:s,onStop:d}){let u=le(),f=ge(),o=$(r);P(()=>{e&&(o.current="enter")},[e]),P(()=>{let l=D();f.add(l.dispose);let c=t.current;if(c&&o.current!=="idle"&&u.current)return l.dispose(),s.current(o.current),l.add(Ve(c,n.current,o.current==="enter",()=>{l.dispose(),d.current(o.current)})),l.dispose},[r])}function C(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let V=i.createContext(null);V.displayName="TransitionContext";var Ye=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ye||{});function Ge(){let e=i.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ke(){let e=i.useContext(W);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let W=i.createContext(null);W.displayName="NestingContext";function Y(e){return"children"in e?Y(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ne(e,t){let r=$(e),n=i.useRef([]),s=le(),d=ge(),u=N((g,h=T.Hidden)=>{let p=n.current.findIndex(({el:m})=>m===g);p!==-1&&(j(h,{[T.Unmount](){n.current.splice(p,1)},[T.Hidden](){n.current[p].state="hidden"}}),d.microTask(()=>{var m;!Y(n)&&s.current&&((m=r.current)==null||m.call(r))}))}),f=N(g=>{let h=n.current.find(({el:p})=>p===g);return h?h.state!=="visible"&&(h.state="visible"):n.current.push({el:g,state:"visible"}),()=>u(g,T.Unmount)}),o=i.useRef([]),l=i.useRef(Promise.resolve()),c=i.useRef({enter:[],leave:[],idle:[]}),x=N((g,h,p)=>{o.current.splice(0),t&&(t.chains.current[h]=t.chains.current[h].filter(([m])=>m!==g)),t==null||t.chains.current[h].push([g,new Promise(m=>{o.current.push(m)})]),t==null||t.chains.current[h].push([g,new Promise(m=>{Promise.all(c.current[h].map(([k,O])=>O)).then(()=>m())})]),h==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>p(h)):p(h)}),v=N((g,h,p)=>{Promise.all(c.current[h].splice(0).map(([m,k])=>k)).then(()=>{var m;(m=o.current.shift())==null||m()}).then(()=>p(h))});return i.useMemo(()=>({children:n,register:f,unregister:u,onStart:x,onStop:v,wait:l,chains:c}),[f,u,n,x,v,c,l])}function _e(){}let Je=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function pe(e){var t;let r={};for(let n of Je)r[n]=(t=e[n])!=null?t:_e;return r}function Xe(e){let t=i.useRef(pe(e));return i.useEffect(()=>{t.current=pe(e)},[e]),t}let Ze="div",Ee=be.RenderStrategy;function et(e,t){var r,n;let{beforeEnter:s,afterEnter:d,beforeLeave:u,afterLeave:f,enter:o,enterFrom:l,enterTo:c,entered:x,leave:v,leaveFrom:g,leaveTo:h,...p}=e,m=i.useRef(null),k=xe(m,t),O=(r=p.unmount)==null||r?T.Unmount:T.Hidden,{show:b,appear:F,initial:ce}=Ge(),[S,K]=i.useState(b?"visible":"hidden"),de=Ke(),{register:A,unregister:M}=de;i.useEffect(()=>A(m),[A,m]),i.useEffect(()=>{if(O===T.Hidden&&m.current){if(b&&S!=="visible"){K("visible");return}return j(S,{hidden:()=>M(m),visible:()=>A(m)})}},[S,m,A,M,b,O]);let _=$({base:C(p.className),enter:C(o),enterFrom:C(l),enterTo:C(c),entered:C(x),leave:C(v),leaveFrom:C(g),leaveTo:C(h)}),H=Xe({beforeEnter:s,afterEnter:d,beforeLeave:u,afterLeave:f}),J=ve();i.useEffect(()=>{if(J&&S==="visible"&&m.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[m,S,J]);let Te=ce&&!F,fe=F&&b&&ce,Fe=!J||Te?"idle":b?"enter":"leave",R=Ue(0),Se=N(E=>j(E,{enter:()=>{R.addFlag(w.Opening),H.current.beforeEnter()},leave:()=>{R.addFlag(w.Closing),H.current.beforeLeave()},idle:()=>{}})),ke=N(E=>j(E,{enter:()=>{R.removeFlag(w.Opening),H.current.afterEnter()},leave:()=>{R.removeFlag(w.Closing),H.current.afterLeave()},idle:()=>{}})),q=Ne(()=>{K("hidden"),M(m)},de),X=i.useRef(!1);We({immediate:fe,container:m,classes:_,direction:Fe,onStart:$(E=>{X.current=!0,q.onStart(m,E,Se)}),onStop:$(E=>{X.current=!1,q.onStop(m,E,ke),E==="leave"&&!Y(q)&&(K("hidden"),M(m))})});let L=p,Oe={ref:k};return fe?L={...L,className:I(p.className,..._.current.enter,..._.current.enterFrom)}:X.current&&(L.className=I(p.className,(n=m.current)==null?void 0:n.className),L.className===""&&delete L.className),y.createElement(W.Provider,{value:q},y.createElement(Qe,{value:j(S,{visible:w.Open,hidden:w.Closed})|R.flags},ye({ourProps:Oe,theirProps:L,defaultTag:Ze,features:Ee,visible:S==="visible",name:"Transition.Child"})))}function tt(e,t){let{show:r,appear:n=!1,unmount:s=!0,...d}=e,u=i.useRef(null),f=xe(u,t);ve();let o=we();if(r===void 0&&o!==null&&(r=(o&w.Open)===w.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,c]=i.useState(r?"visible":"hidden"),x=Ne(()=>{c("hidden")}),[v,g]=i.useState(!0),h=i.useRef([r]);P(()=>{v!==!1&&h.current[h.current.length-1]!==r&&(h.current.push(r),g(!1))},[h,r]);let p=i.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);i.useEffect(()=>{if(r)c("visible");else if(!Y(x))c("hidden");else{let b=u.current;if(!b)return;let F=b.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&c("hidden")}},[r,x]);let m={unmount:s},k=N(()=>{var b;v&&g(!1),(b=e.beforeEnter)==null||b.call(e)}),O=N(()=>{var b;v&&g(!1),(b=e.beforeLeave)==null||b.call(e)});return y.createElement(W.Provider,{value:x},y.createElement(V.Provider,{value:p},ye({ourProps:{...m,as:i.Fragment,children:y.createElement(Ce,{ref:f,...m,...d,beforeEnter:k,beforeLeave:O})},theirProps:{},defaultTag:i.Fragment,features:Ee,visible:l==="visible",name:"Transition"})))}function rt(e,t){let r=i.useContext(V)!==null,n=we()!==null;return y.createElement(y.Fragment,null,!r&&n?y.createElement(ie,{ref:t,...e}):y.createElement(Ce,{ref:t,...e}))}let ie=ae(tt),Ce=ae(et),nt=ae(rt),st=Object.assign(ie,{Child:nt,Root:ie});const ue=i.createContext(),G=({children:e})=>{const[t,r]=i.useState(!1),n=()=>{r(s=>!s)};return a.jsx(ue.Provider,{value:{open:t,setOpen:r,toggleOpen:n},children:a.jsx("div",{className:"relative",children:e})})},it=({children:e})=>{const{open:t,setOpen:r,toggleOpen:n}=i.useContext(ue);return a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:n,children:e}),t&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},at=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:n})=>{const{open:s,setOpen:d}=i.useContext(ue);let u="origin-top";e==="left"?u="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(u="ltr:origin-top-right rtl:origin-top-left end-0");let f="";return t==="48"&&(f="w-48"),a.jsx(a.Fragment,{children:a.jsx(st,{as:i.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${u} ${f}`,onClick:()=>d(!1),children:a.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:n})})})})},ot=({className:e="",children:t,...r})=>a.jsx(z,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:t});G.Trigger=it;G.Content=at;G.Link=ot;const Q=G;function lt({active:e=!1,className:t="",children:r,...n}){return a.jsx(z,{...n,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:r})}function ne({active:e=!1,className:t="",children:r,...n}){return a.jsx(z,{...n,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}function ut({header:e,children:t}){const[r,n]=i.useState(!1);return a.jsxs("div",{className:"min-h-screen bg-gray-100",children:[a.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between h-16",children:[a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"shrink-0 flex items-center",children:a.jsx(z,{href:"/",children:a.jsx($e,{className:"block h-9 w-auto fill-current text-gray-800"})})}),a.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:a.jsx(lt,{href:route("dashboard"),active:route().current("dashboard"),children:"Quotes"})})]}),a.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:a.jsx("div",{className:"ms-3 relative",children:a.jsxs(Q,{children:[a.jsx(Q.Trigger,{children:a.jsx("span",{className:"inline-flex rounded-md",children:a.jsx("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:a.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})})}),a.jsx(Q.Content,{children:a.jsx(Q.Link,{onClick:()=>{se.logout(),window.location="/login"},method:"post",as:"button",children:"Log Out"})})]})})}),a.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:a.jsx("button",{onClick:()=>n(s=>!s),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:a.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("path",{className:r?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),a.jsx("path",{className:r?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),a.jsxs("div",{className:(r?"block":"hidden")+" sm:hidden",children:[a.jsx("div",{className:"pt-2 pb-3 space-y-1",children:a.jsx(ne,{href:route("dashboard"),active:route().current("dashboard"),children:"Quotes"})}),a.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[a.jsx("div",{className:"px-4",children:a.jsx("div",{className:"font-medium text-base text-gray-800"})}),a.jsxs("div",{className:"mt-3 space-y-1",children:[a.jsx(ne,{href:route("profile.edit"),children:"Profile"}),a.jsx(ne,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),a.jsx("main",{children:t})]})}function mt(e){const[t,r]=i.useState([]),[n,s]=i.useState(!0);i.useEffect(()=>{if(!se.getToken()){window.location="/login";return}d()},[]);const d=()=>{s(!0),se.quotes().then(u=>{s(!1),r(u.data.quotes)}).catch(u=>{s(!1),console.log(u)})};return a.jsxs(ut,{header:a.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Quotes"}),children:[a.jsx(Le,{title:"Quotes"}),a.jsx("div",{className:"py-12",children:a.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[a.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-6 text-gray-900",children:t.map(u=>a.jsx("div",{children:u}))})}),a.jsx("div",{class:"text-center",children:a.jsx(Re,{onClick:()=>{d()},className:"mt-4",disabled:n,children:"refresh"})})]})})]})}export{mt as default};