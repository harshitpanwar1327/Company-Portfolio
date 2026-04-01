const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Navigation-WOvOevcL.js","assets/index-RCrMFbuf.js","assets/index-CERmEIxG.css","assets/Code-DwQ8bcn3.js","assets/createSvgIcon-B0FHeTVF.js","assets/index-BXxXHulq.js","assets/Advertisement-CVYNlktE.js","assets/Reviews-Dov9XFiJ.js","assets/Footer--o_VpOl9.js"])))=>i.map(i=>d[i]);
import{c as ys,R as H,r as et,j as E,H as Ln,m as xn,A as Mn,_ as At,y as Or}from"./index-RCrMFbuf.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Fn=ys("mail",Un);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Bn=ys("phone",Vn);class tt{constructor(e=0,r="Network Error"){this.status=e,this.text=r}}const Hn=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},F={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Hn()},rr=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},jn=(t,e="https://api.emailjs.com")=>{if(!t)return;const r=rr(t);F.publicKey=r.publicKey,F.blockHeadless=r.blockHeadless,F.storageProvider=r.storageProvider,F.blockList=r.blockList,F.limitRate=r.limitRate,F.origin=r.origin||e},_s=async(t,e,r={})=>{const s=await fetch(F.origin+t,{method:"POST",headers:r,body:e}),n=await s.text(),i=new tt(s.status,n);if(s.ok)return i;throw i},bs=(t,e,r)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},$n=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},vs=t=>t.webdriver||!t.languages||t.languages.length===0,ws=()=>new tt(451,"Unavailable For Headless Browser"),Wn=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},zn=t=>!t.list?.length||!t.watchVariable,qn=(t,e)=>t instanceof FormData?t.get(e):t[e],Is=(t,e)=>{if(zn(t))return!1;Wn(t.list,t.watchVariable);const r=qn(e,t.watchVariable);return typeof r!="string"?!1:t.list.includes(r)},Es=()=>new tt(403,"Forbidden"),Gn=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},Kn=async(t,e,r)=>{const s=Number(await r.get(t)||0);return e-Date.now()+s},Ts=async(t,e,r)=>{if(!e.throttle||!r)return!1;Gn(e.throttle,e.id);const s=e.id||t;return await Kn(s,e.throttle,r)>0?!0:(await r.set(s,Date.now().toString()),!1)},Ss=()=>new tt(429,"Too Many Requests"),Jn=async(t,e,r,s)=>{const n=rr(s),i=n.publicKey||F.publicKey,o=n.blockHeadless||F.blockHeadless,l=n.storageProvider||F.storageProvider,d={...F.blockList,...n.blockList},f={...F.limitRate,...n.limitRate};return o&&vs(navigator)?Promise.reject(ws()):(bs(i,t,e),$n(r),r&&Is(d,r)?Promise.reject(Es()):await Ts(location.pathname,f,l)?Promise.reject(Ss()):_s("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:t,template_id:e,template_params:r}),{"Content-type":"application/json"}))},Yn=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Xn=t=>typeof t=="string"?document.querySelector(t):t,Qn=async(t,e,r,s)=>{const n=rr(s),i=n.publicKey||F.publicKey,o=n.blockHeadless||F.blockHeadless,l=F.storageProvider||n.storageProvider,d={...F.blockList,...n.blockList},f={...F.limitRate,...n.limitRate};if(o&&vs(navigator))return Promise.reject(ws());const w=Xn(r);bs(i,t,e),Yn(w);const _=new FormData(w);return Is(d,_)?Promise.reject(Es()):await Ts(location.pathname,f,l)?Promise.reject(Ss()):(_.append("lib_version","4.4.1"),_.append("service_id",t),_.append("template_id",e),_.append("user_id",i),_s("/api/v1.0/email/send-form",_))},Zn={init:jn,send:Jn,sendForm:Qn,EmailJSResponseStatus:tt};var rt=t=>t.type==="checkbox",Ce=t=>t instanceof Date,G=t=>t==null;const As=t=>typeof t=="object";var N=t=>!G(t)&&!Array.isArray(t)&&As(t)&&!Ce(t),ei=t=>N(t)&&t.target?rt(t.target)?t.target.checked:t.target.value:t,ks=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,ti=(t,e)=>t.has(ks(e)),ri=t=>{const e=t.constructor&&t.constructor.prototype;return N(e)&&e.hasOwnProperty("isPrototypeOf")},sr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(t){if(t instanceof Date)return new Date(t);const e=typeof FileList<"u"&&t instanceof FileList;if(sr&&(t instanceof Blob||e))return t;const r=Array.isArray(t);if(!r&&!(N(t)&&ri(t)))return t;const s=r?[]:Object.create(Object.getPrototypeOf(t));for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=M(t[n]));return s}var kt=t=>/^\w*$/.test(t),D=t=>t===void 0,nr=t=>Array.isArray(t)?t.filter(Boolean):[],ir=t=>nr(t.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(t,e,r)=>{if(!e||!N(t))return r;const s=(kt(e)?[e]:ir(e)).reduce((n,i)=>G(n)?n:n[i],t);return D(s)||s===t?D(t[e])?r:t[e]:s},ne=t=>typeof t=="boolean",Q=t=>typeof t=="function",P=(t,e,r)=>{let s=-1;const n=kt(e)?[e]:ir(e),i=n.length,o=i-1;for(;++s<i;){const l=n[s];let d=r;if(s!==o){const f=t[l];d=N(f)||Array.isArray(f)?f:isNaN(+n[s+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;t[l]=d,t=t[l]}};const Ne={BLUR:"blur",FOCUS_OUT:"focusout",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ut="form",Cs="root",si=H.createContext(null);si.displayName="HookFormControlContext";var ni=(t,e,r,s=!0)=>{const n={defaultValues:e._defaultValues};for(const i in t)Object.defineProperty(n,i,{get:()=>{const o=i;return e._proxyFormState[o]!==Z.all&&(e._proxyFormState[o]=!s||Z.all),t[o]}});return n};const ii=typeof window<"u"?H.useLayoutEffect:H.useEffect;var $=t=>typeof t=="string",oi=(t,e,r,s,n)=>$(t)?(s&&e.watch.add(t),m(r,t,n)):Array.isArray(t)?t.map(i=>(s&&e.watch.add(i),m(r,i))):(s&&(e.watchAll=!0),r),qt=t=>G(t)||!As(t);function be(t,e,r=new WeakSet){if(qt(t)||qt(e))return Object.is(t,e);if(Ce(t)&&Ce(e))return Object.is(t.getTime(),e.getTime());const s=Object.keys(t),n=Object.keys(e);if(s.length!==n.length)return!1;if(r.has(t)||r.has(e))return!0;r.add(t),r.add(e);for(const i of s){const o=t[i];if(!n.includes(i))return!1;if(i!=="ref"){const l=e[i];if(Ce(o)&&Ce(l)||N(o)&&N(l)||Array.isArray(o)&&Array.isArray(l)?!be(o,l,r):!Object.is(o,l))return!1}}return!0}const ai=H.createContext(null);ai.displayName="HookFormContext";var ci=(t,e,r,s,n)=>e?{...r[t],types:{...r[t]&&r[t].types?r[t].types:{},[s]:n||!0}}:{},Ke=t=>Array.isArray(t)?t:[t],Nr=()=>{let t=[];return{get observers(){return t},next:n=>{for(const i of t)i.next&&i.next(n)},subscribe:n=>(t.push(n),{unsubscribe:()=>{t=t.filter(i=>i!==n)}}),unsubscribe:()=>{t=[]}}};function Rs(t,e){const r={};for(const s in t)if(t.hasOwnProperty(s)){const n=t[s],i=e[s];if(n&&N(n)&&i){const o=Rs(n,i);N(o)&&(r[s]=o)}else t[s]&&(r[s]=i)}return r}var j=t=>N(t)&&!Object.keys(t).length,or=t=>t.type==="file",yt=t=>{if(!sr)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Ps=t=>t.type==="select-multiple",ar=t=>t.type==="radio",li=t=>ar(t)||rt(t),Ft=t=>yt(t)&&t.isConnected;function ui(t,e){const r=e.slice(0,-1).length;let s=0;for(;s<r;)t=D(t)?s++:t[e[s++]];return t}function di(t){for(const e in t)if(t.hasOwnProperty(e)&&!D(t[e]))return!1;return!0}function L(t,e){const r=Array.isArray(e)?e:kt(e)?[e]:ir(e),s=r.length===1?t:ui(t,r),n=r.length-1,i=r[n];return s&&delete s[i],n!==0&&(N(s)&&j(s)||Array.isArray(s)&&di(s))&&L(t,r.slice(0,-1)),t}var hi=t=>{for(const e in t)if(Q(t[e]))return!0;return!1};function Ds(t){return Array.isArray(t)||N(t)&&!hi(t)}function Gt(t,e={}){for(const r in t){const s=t[r];Ds(s)?(e[r]=Array.isArray(s)?[]:{},Gt(s,e[r])):D(s)||(e[r]=!0)}return e}function xe(t,e,r){r||(r=Gt(e));for(const s in t){const n=t[s];if(Ds(n))D(e)||qt(r[s])?r[s]=Gt(n,Array.isArray(n)?[]:{}):xe(n,G(e)?{}:e[s],r[s]);else{const i=e[s];r[s]=!be(n,i)}}return r}const Lr={value:!1,isValid:!1},xr={value:!0,isValid:!0};var Os=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!D(t[0].attributes.value)?D(t[0].value)||t[0].value===""?xr:{value:t[0].value,isValid:!0}:xr:Lr}return Lr},Ns=(t,{valueAsNumber:e,valueAsDate:r,setValueAs:s})=>D(t)?t:e?t===""?NaN:t&&+t:r&&$(t)?new Date(t):s?s(t):t;const Mr={isValid:!1,value:null};var Ls=t=>Array.isArray(t)?t.reduce((e,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e,Mr):Mr;function Ur(t){const e=t.ref;return or(e)?e.files:ar(e)?Ls(t.refs).value:Ps(e)?[...e.selectedOptions].map(({value:r})=>r):rt(e)?Os(t.refs).value:Ns(D(e.value)?t.ref.value:e.value,t)}var fi=(t,e,r,s)=>{const n={};for(const i of t){const o=m(e,i);o&&P(n,i,o._f)}return{criteriaMode:r,names:[...t],fields:n,shouldUseNativeValidation:s}},_t=t=>t instanceof RegExp,Ge=t=>D(t)?t:_t(t)?t.source:N(t)?_t(t.value)?t.value.source:t.value:t,Fr=t=>({isOnSubmit:!t||t===Z.onSubmit,isOnBlur:t===Z.onBlur,isOnChange:t===Z.onChange,isOnAll:t===Z.all,isOnTouch:t===Z.onTouched});const Vr="AsyncFunction";var pi=t=>!!t&&!!t.validate&&!!(Q(t.validate)&&t.validate.constructor.name===Vr||N(t.validate)&&Object.values(t.validate).find(e=>e.constructor.name===Vr)),gi=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate),Br=(t,e,r)=>!r&&(e.watchAll||e.watch.has(t)||[...e.watch].some(s=>t.startsWith(s)&&/^\.\w+/.test(t.slice(s.length))));const Je=(t,e,r,s)=>{for(const n of r||Object.keys(t)){const i=m(t,n);if(i){const{_f:o,...l}=i;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],n)&&!s)return!0;if(o.ref&&e(o.ref,o.name)&&!s)return!0;if(Je(l,e))break}else if(N(l)&&Je(l,e))break}}};function Hr(t,e,r){const s=m(t,r);if(s||kt(r))return{error:s,name:r};const n=r.split(".");for(;n.length;){const i=n.join("."),o=m(e,i),l=m(t,i);if(o&&!Array.isArray(o)&&r!==i)return{name:r};if(l&&l.type)return{name:i,error:l};if(l&&l.root&&l.root.type)return{name:`${i}.root`,error:l.root};n.pop()}return{name:r}}var mi=(t,e,r,s)=>{r(t);const{name:n,...i}=t;return j(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(o=>e[o]===(!s||Z.all))},yi=(t,e,r)=>!t||!e||t===e||Ke(t).some(s=>s&&(r?s===e:s.startsWith(e)||e.startsWith(s))),_i=(t,e,r,s,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(e||t):(r?s.isOnBlur:n.isOnBlur)?!t:(r?s.isOnChange:n.isOnChange)?t:!0,bi=(t,e)=>!nr(m(t,e)).length&&L(t,e),vi=(t,e,r)=>{const s=Ke(m(t,r));return P(s,Cs,e[r]),P(t,r,s),t};function jr(t,e,r="validate"){if($(t)||Array.isArray(t)&&t.every($)||ne(t)&&!t)return{type:r,message:$(t)?t:"",ref:e}}var Le=t=>N(t)&&!_t(t)?t:{value:t,message:""},$r=async(t,e,r,s,n,i)=>{const{ref:o,refs:l,required:d,maxLength:f,minLength:w,min:_,max:T,pattern:v,validate:U,name:V,valueAsNumber:J,mount:B}=t._f,A=m(r,V);if(!B||e.has(V))return{};const ce=l?l[0]:o,le=k=>{n&&ce.reportValidity&&(ce.setCustomValidity(ne(k)?"":k||""),ce.reportValidity())},x={},ze=ar(o),lt=rt(o),Ae=ze||lt,Oe=(J||or(o))&&D(o.value)&&D(A)||yt(o)&&o.value===""||A===""||Array.isArray(A)&&!A.length,me=ci.bind(null,V,s,x),ue=(k,S,O,z=X.maxLength,Y=X.minLength)=>{const re=k?S:O;x[V]={type:k?z:Y,message:re,ref:o,...me(k?z:Y,re)}};if(i?!Array.isArray(A)||!A.length:d&&(!Ae&&(Oe||G(A))||ne(A)&&!A||lt&&!Os(l).isValid||ze&&!Ls(l).isValid)){const{value:k,message:S}=$(d)?{value:!!d,message:d}:Le(d);if(k&&(x[V]={type:X.required,message:S,ref:ce,...me(X.required,S)},!s))return le(S),x}if(!Oe&&(!G(_)||!G(T))){let k,S;const O=Le(T),z=Le(_);if(!G(A)&&!isNaN(A)){const Y=o.valueAsNumber||A&&+A;G(O.value)||(k=Y>O.value),G(z.value)||(S=Y<z.value)}else{const Y=o.valueAsDate||new Date(A),re=ut=>new Date(new Date().toDateString()+" "+ut),ye=o.type=="time",qe=o.type=="week";$(O.value)&&A&&(k=ye?re(A)>re(O.value):qe?A>O.value:Y>new Date(O.value)),$(z.value)&&A&&(S=ye?re(A)<re(z.value):qe?A<z.value:Y<new Date(z.value))}if((k||S)&&(ue(!!k,O.message,z.message,X.max,X.min),!s))return le(x[V].message),x}if((f||w)&&!Oe&&($(A)||i&&Array.isArray(A))){const k=Le(f),S=Le(w),O=!G(k.value)&&A.length>+k.value,z=!G(S.value)&&A.length<+S.value;if((O||z)&&(ue(O,k.message,S.message),!s))return le(x[V].message),x}if(v&&!Oe&&$(A)){const{value:k,message:S}=Le(v);if(_t(k)&&!A.match(k)&&(x[V]={type:X.pattern,message:S,ref:o,...me(X.pattern,S)},!s))return le(S),x}if(U){if(Q(U)){const k=await U(A,r),S=jr(k,ce);if(S&&(x[V]={...S,...me(X.validate,S.message)},!s))return le(S.message),x}else if(N(U)){let k={};for(const S in U){if(!j(k)&&!s)break;const O=jr(await U[S](A,r),ce,S);O&&(k={...O,...me(S,O.message)},le(O.message),s&&(x[V]=k))}if(!j(k)&&(x[V]={ref:ce,...k},!s))return x}}return le(!0),x};const wi={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function Ii(t={}){let e={...wi,...t},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:Q(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},s={},n=N(e.defaultValues)||N(e.values)?M(e.defaultValues||e.values)||{}:{},i=e.shouldUnregister?{}:M(n),o={action:!1,mount:!1,watch:!1,keepIsValid:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,f=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={...w};let T={..._};const v={array:Nr(),state:Nr()},U=e.criteriaMode===Z.all,V=a=>c=>{clearTimeout(f),f=setTimeout(a,c)},J=async a=>{if(!o.keepIsValid&&!e.disabled&&(_.isValid||T.isValid||a)){let c;e.resolver?(c=j((await Ae()).errors),B()):c=await ue({fields:s,onlyCheckValid:!0,eventType:Ne.VALID}),c!==r.isValid&&v.state.next({isValid:c})}},B=(a,c)=>{!e.disabled&&(_.isValidating||_.validatingFields||T.isValidating||T.validatingFields)&&((a||Array.from(l.mount)).forEach(u=>{u&&(c?P(r.validatingFields,u,c):L(r.validatingFields,u))}),v.state.next({validatingFields:r.validatingFields,isValidating:!j(r.validatingFields)}))},A=(a,c=[],u,g,h=!0,p=!0)=>{if(g&&u&&!e.disabled){if(o.action=!0,p&&Array.isArray(m(s,a))){const y=u(m(s,a),g.argA,g.argB);h&&P(s,a,y)}if(p&&Array.isArray(m(r.errors,a))){const y=u(m(r.errors,a),g.argA,g.argB);h&&P(r.errors,a,y),bi(r.errors,a)}if((_.touchedFields||T.touchedFields)&&p&&Array.isArray(m(r.touchedFields,a))){const y=u(m(r.touchedFields,a),g.argA,g.argB);h&&P(r.touchedFields,a,y)}if(_.dirtyFields||T.dirtyFields){const y=xe(n,i),I=ks(a);P(r.dirtyFields,I,m(y,I))}v.state.next({name:a,isDirty:S(a,c),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else P(i,a,c)},ce=(a,c)=>{P(r.errors,a,c),v.state.next({errors:r.errors})},le=a=>{r.errors=a,v.state.next({errors:r.errors,isValid:!1})},x=(a,c,u,g)=>{const h=m(s,a);if(h){const p=m(i,a,D(u)?m(n,a):u);D(p)||g&&g.defaultChecked||c?P(i,a,c?p:Ur(h._f)):Y(a,p),o.mount&&!o.action&&J()}},ze=(a,c,u,g,h)=>{let p=!1,y=!1;const I={name:a};if(!e.disabled){if(!u||g){(_.isDirty||T.isDirty)&&(y=r.isDirty,r.isDirty=I.isDirty=S(),p=y!==I.isDirty);const C=be(m(n,a),c);y=!!m(r.dirtyFields,a),C?L(r.dirtyFields,a):P(r.dirtyFields,a,!0),I.dirtyFields=r.dirtyFields,p=p||(_.dirtyFields||T.dirtyFields)&&y!==!C}if(u){const C=m(r.touchedFields,a);C||(P(r.touchedFields,a,u),I.touchedFields=r.touchedFields,p=p||(_.touchedFields||T.touchedFields)&&C!==u)}p&&h&&v.state.next(I)}return p?I:{}},lt=(a,c,u,g)=>{const h=m(r.errors,a),p=(_.isValid||T.isValid)&&ne(c)&&r.isValid!==c;if(e.delayError&&u?(d=V(()=>ce(a,u)),d(e.delayError)):(clearTimeout(f),d=null,u?P(r.errors,a,u):L(r.errors,a)),(u?!be(h,u):h)||!j(g)||p){const y={...g,...p&&ne(c)?{isValid:c}:{},errors:r.errors,name:a};r={...r,...y},v.state.next(y)}},Ae=async a=>(B(a,!0),await e.resolver(i,e.context,fi(a||l.mount,s,e.criteriaMode,e.shouldUseNativeValidation))),Oe=async a=>{const{errors:c}=await Ae(a);if(B(a),a)for(const u of a){const g=m(c,u);g?P(r.errors,u,g):L(r.errors,u)}else r.errors=c;return c},me=async({name:a,eventType:c})=>{if(t.validate){const u=await t.validate({formValues:i,formState:r,name:a,eventType:c});if(N(u))for(const g in u)u[g]&&dt(`${Ut}.${g}`,{message:$(u.message)?u.message:"",type:X.validate});else $(u)||!u?dt(Ut,{message:u||"",type:X.validate}):Er(Ut);return u}return!0},ue=async({fields:a,onlyCheckValid:c,name:u,eventType:g,context:h={valid:!0,runRootValidation:!1}})=>{if(t.validate&&(h.runRootValidation=!0,!await me({name:u,eventType:g})&&(h.valid=!1,c)))return h.valid;for(const p in a){const y=a[p];if(y){const{_f:I,...C}=y;if(I){const K=l.array.has(I.name),se=y._f&&pi(y._f);se&&_.validatingFields&&B([I.name],!0);const q=await $r(y,l.disabled,i,U,e.shouldUseNativeValidation&&!c,K);if(se&&_.validatingFields&&B([I.name]),q[I.name]&&(h.valid=!1,c)||(!c&&(m(q,I.name)?K?vi(r.errors,q,I.name):P(r.errors,I.name,q[I.name]):L(r.errors,I.name)),t.shouldUseNativeValidation&&q[I.name]))break}!j(C)&&await ue({context:h,onlyCheckValid:c,fields:C,name:p,eventType:g})}}return h.valid},k=()=>{for(const a of l.unMount){const c=m(s,a);c&&(c._f.refs?c._f.refs.every(u=>!Ft(u)):!Ft(c._f.ref))&&Ot(a)}l.unMount=new Set},S=(a,c)=>!e.disabled&&(a&&c&&P(i,a,c),!be(wr(),n)),O=(a,c,u)=>oi(a,l,{...o.mount?i:D(c)?n:$(a)?{[a]:c}:c},u,c),z=a=>nr(m(o.mount?i:n,a,e.shouldUnregister?m(n,a,[]):[])),Y=(a,c,u={})=>{const g=m(s,a);let h=c;if(g){const p=g._f;p&&(!p.disabled&&P(i,a,Ns(c,p)),h=yt(p.ref)&&G(c)?"":c,Ps(p.ref)?[...p.ref.options].forEach(y=>y.selected=h.includes(y.value)):p.refs?rt(p.ref)?p.refs.forEach(y=>{(!y.defaultChecked||!y.disabled)&&(Array.isArray(h)?y.checked=!!h.find(I=>I===y.value):y.checked=h===y.value||!!h)}):p.refs.forEach(y=>y.checked=y.value===h):or(p.ref)?p.ref.value="":(p.ref.value=h,p.ref.type||v.state.next({name:a,values:M(i)})))}(u.shouldDirty||u.shouldTouch)&&ze(a,h,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Dt(a)},re=(a,c,u)=>{for(const g in c){if(!c.hasOwnProperty(g))return;const h=c[g],p=a+"."+g,y=m(s,p);(l.array.has(a)||N(h)||y&&!y._f)&&!Ce(h)?re(p,h,u):Y(p,h,u)}},ye=(a,c,u={})=>{const g=m(s,a),h=l.array.has(a),p=M(c);P(i,a,p),h?(v.array.next({name:a,values:M(i)}),(_.isDirty||_.dirtyFields||T.isDirty||T.dirtyFields)&&u.shouldDirty&&v.state.next({name:a,dirtyFields:xe(n,i),isDirty:S(a,p)})):g&&!g._f&&!G(p)?re(a,p,u):Y(a,p,u),Br(a,l)?v.state.next({...r,name:a,values:M(i)}):v.state.next({name:o.mount?a:void 0,values:M(i)})},qe=async a=>{o.mount=!0;const c=a.target;let u=c.name,g=!0;const h=m(s,u),p=C=>{g=Number.isNaN(C)||Ce(C)&&isNaN(C.getTime())||be(C,m(i,u,C))},y=Fr(e.mode),I=Fr(e.reValidateMode);if(h){let C,K;const se=c.type?Ur(h._f):ei(a),q=a.type===Ne.BLUR||a.type===Ne.FOCUS_OUT,Dn=!gi(h._f)&&!t.validate&&!e.resolver&&!m(r.errors,u)&&!h._f.deps||_i(q,m(r.touchedFields,u),r.isSubmitted,I,y),xt=Br(u,l,q);P(i,u,se),q?(!c||!c.readOnly)&&(h._f.onBlur&&h._f.onBlur(a),d&&d(0)):h._f.onChange&&h._f.onChange(a);const Mt=ze(u,se,q),On=!j(Mt)||xt;if(!q&&v.state.next({name:u,type:a.type,values:M(i)}),Dn)return(_.isValid||T.isValid)&&(e.mode==="onBlur"?q&&J():q||J()),On&&v.state.next({name:u,...xt?{}:Mt});if(!e.resolver&&t.validate&&await me({name:u,eventType:a.type}),!q&&xt&&v.state.next({...r}),e.resolver){const{errors:Pr}=await Ae([u]);if(B([u]),p(se),g){const Nn=Hr(r.errors,s,u),Dr=Hr(Pr,s,Nn.name||u);C=Dr.error,u=Dr.name,K=j(Pr)}}else B([u],!0),C=(await $r(h,l.disabled,i,U,e.shouldUseNativeValidation))[u],B([u]),p(se),g&&(C?K=!1:(_.isValid||T.isValid)&&(K=await ue({fields:s,onlyCheckValid:!0,name:u,eventType:a.type})));g&&(h._f.deps&&(!Array.isArray(h._f.deps)||h._f.deps.length>0)&&Dt(h._f.deps),lt(u,K,C,Mt))}},ut=(a,c)=>{if(m(r.errors,c)&&a.focus)return a.focus(),1},Dt=async(a,c={})=>{let u,g;const h=Ke(a);if(e.resolver){const p=await Oe(D(a)?a:h);u=j(p),g=a?!h.some(y=>m(p,y)):u}else a?(g=(await Promise.all(h.map(async p=>{const y=m(s,p);return await ue({fields:y&&y._f?{[p]:y}:y,eventType:Ne.TRIGGER})}))).every(Boolean),!(!g&&!r.isValid)&&J()):g=u=await ue({fields:s,name:a,eventType:Ne.TRIGGER});return v.state.next({...!$(a)||(_.isValid||T.isValid)&&u!==r.isValid?{}:{name:a},...e.resolver||!a?{isValid:u}:{},errors:r.errors}),c.shouldFocus&&!g&&Je(s,ut,a?h:l.mount),g},wr=(a,c)=>{let u={...o.mount?i:n};return c&&(u=Rs(c.dirtyFields?r.dirtyFields:r.touchedFields,u)),D(a)?u:$(a)?m(u,a):a.map(g=>m(u,g))},Ir=(a,c)=>({invalid:!!m((c||r).errors,a),isDirty:!!m((c||r).dirtyFields,a),error:m((c||r).errors,a),isValidating:!!m(r.validatingFields,a),isTouched:!!m((c||r).touchedFields,a)}),Er=a=>{const c=a?Ke(a):void 0;c?.forEach(u=>L(r.errors,u)),c?c.forEach(u=>{v.state.next({name:u,errors:r.errors})}):v.state.next({errors:{}})},dt=(a,c,u)=>{const g=(m(s,a,{_f:{}})._f||{}).ref,h=m(r.errors,a)||{},{ref:p,message:y,type:I,...C}=h;P(r.errors,a,{...C,...c,ref:g}),v.state.next({name:a,errors:r.errors,isValid:!1}),u&&u.shouldFocus&&g&&g.focus&&g.focus()},Sn=(a,c)=>Q(a)?v.state.subscribe({next:u=>"values"in u&&a(O(void 0,c),u)}):O(a,c,!0),Tr=a=>v.state.subscribe({next:c=>{yi(a.name,c.name,a.exact)&&mi(c,a.formState||_,Pn,a.reRenderRoot)&&a.callback({values:{...i},...r,...c,defaultValues:n})}}).unsubscribe,An=a=>(o.mount=!0,T={...T,...a.formState},Tr({...a,formState:{...w,...a.formState}})),Ot=(a,c={})=>{for(const u of a?Ke(a):l.mount)l.mount.delete(u),l.array.delete(u),c.keepValue||(L(s,u),L(i,u)),!c.keepError&&L(r.errors,u),!c.keepDirty&&L(r.dirtyFields,u),!c.keepTouched&&L(r.touchedFields,u),!c.keepIsValidating&&L(r.validatingFields,u),!e.shouldUnregister&&!c.keepDefaultValue&&L(n,u);v.state.next({values:M(i)}),v.state.next({...r,...c.keepDirty?{isDirty:S()}:{}}),!c.keepIsValid&&J()},Sr=({disabled:a,name:c})=>{if(ne(a)&&o.mount||a||l.disabled.has(c)){const h=l.disabled.has(c)!==!!a;a?l.disabled.add(c):l.disabled.delete(c),h&&o.mount&&!o.action&&J()}},Nt=(a,c={})=>{let u=m(s,a);const g=ne(c.disabled)||ne(e.disabled);return P(s,a,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:a}},name:a,mount:!0,...c}}),l.mount.add(a),u?Sr({disabled:ne(c.disabled)?c.disabled:e.disabled,name:a}):x(a,!0,c.value),{...g?{disabled:c.disabled||e.disabled}:{},...e.progressive?{required:!!c.required,min:Ge(c.min),max:Ge(c.max),minLength:Ge(c.minLength),maxLength:Ge(c.maxLength),pattern:Ge(c.pattern)}:{},name:a,onChange:qe,onBlur:qe,ref:h=>{if(h){Nt(a,c),u=m(s,a);const p=D(h.value)&&h.querySelectorAll&&h.querySelectorAll("input,select,textarea")[0]||h,y=li(p),I=u._f.refs||[];if(y?I.find(C=>C===p):p===u._f.ref)return;P(s,a,{_f:{...u._f,...y?{refs:[...I.filter(Ft),p,...Array.isArray(m(n,a))?[{}]:[]],ref:{type:p.type,name:a}}:{ref:p}}}),x(a,!1,void 0,p)}else u=m(s,a,{}),u._f&&(u._f.mount=!1),(e.shouldUnregister||c.shouldUnregister)&&!(ti(l.array,a)&&o.action)&&l.unMount.add(a)}}},Lt=()=>e.shouldFocusError&&Je(s,ut,l.mount),kn=a=>{ne(a)&&(v.state.next({disabled:a}),Je(s,(c,u)=>{const g=m(s,u);g&&(c.disabled=g._f.disabled||a,Array.isArray(g._f.refs)&&g._f.refs.forEach(h=>{h.disabled=g._f.disabled||a}))},0,!1))},Ar=(a,c)=>async u=>{let g;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let h=M(i);if(v.state.next({isSubmitting:!0}),e.resolver){const{errors:p,values:y}=await Ae();B(),r.errors=p,h=M(y)}else await ue({fields:s,eventType:Ne.SUBMIT});if(l.disabled.size)for(const p of l.disabled)L(h,p);if(L(r.errors,Cs),j(r.errors)){v.state.next({errors:{}});try{await a(h,u)}catch(p){g=p}}else c&&await c({...r.errors},u),Lt(),setTimeout(Lt);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:j(r.errors)&&!g,submitCount:r.submitCount+1,errors:r.errors}),g)throw g},Cn=(a,c={})=>{m(s,a)&&(D(c.defaultValue)?ye(a,M(m(n,a))):(ye(a,c.defaultValue),P(n,a,M(c.defaultValue))),c.keepTouched||L(r.touchedFields,a),c.keepDirty||(L(r.dirtyFields,a),r.isDirty=c.defaultValue?S(a,M(m(n,a))):S()),c.keepError||(L(r.errors,a),_.isValid&&J()),v.state.next({...r}))},kr=(a,c={})=>{const u=a?M(a):n,g=M(u),h=j(a),p=h?n:g;if(c.keepDefaultValues||(n=u),!c.keepValues){if(c.keepDirtyValues){const y=new Set([...l.mount,...Object.keys(xe(n,i))]);for(const I of Array.from(y)){const C=m(r.dirtyFields,I),K=m(i,I),se=m(p,I);C&&!D(K)?P(p,I,K):!C&&!D(se)&&ye(I,se)}}else{if(sr&&D(a))for(const y of l.mount){const I=m(s,y);if(I&&I._f){const C=Array.isArray(I._f.refs)?I._f.refs[0]:I._f.ref;if(yt(C)){const K=C.closest("form");if(K){K.reset();break}}}}if(c.keepFieldsRef)for(const y of l.mount)ye(y,m(p,y));else s={}}i=e.shouldUnregister?c.keepDefaultValues?M(n):{}:M(p),v.array.next({values:{...p}}),v.state.next({values:{...p}})}l={mount:c.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!_.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!e.shouldUnregister&&!j(p),o.watch=!!e.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,c.keepErrors||(r.errors={}),v.state.next({submitCount:c.keepSubmitCount?r.submitCount:0,isDirty:h?!1:c.keepDirty?r.isDirty:!!(c.keepDefaultValues&&!be(a,n)),isSubmitted:c.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:h?{}:c.keepDirtyValues?c.keepDefaultValues&&i?xe(n,i):r.dirtyFields:c.keepDefaultValues&&a?xe(n,a):c.keepDirty?r.dirtyFields:{},touchedFields:c.keepTouched?r.touchedFields:{},errors:c.keepErrors?r.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},Cr=(a,c)=>kr(Q(a)?a(i):a,{...e.resetOptions,...c}),Rn=(a,c={})=>{const u=m(s,a),g=u&&u._f;if(g){const h=g.refs?g.refs[0]:g.ref;h.focus&&setTimeout(()=>{h.focus(),c.shouldSelect&&Q(h.select)&&h.select()})}},Pn=a=>{r={...r,...a}},Rr={control:{register:Nt,unregister:Ot,getFieldState:Ir,handleSubmit:Ar,setError:dt,_subscribe:Tr,_runSchema:Ae,_updateIsValidating:B,_focusError:Lt,_getWatch:O,_getDirty:S,_setValid:J,_setFieldArray:A,_setDisabledField:Sr,_setErrors:le,_getFieldArray:z,_reset:kr,_resetDefaultValues:()=>Q(e.defaultValues)&&e.defaultValues().then(a=>{Cr(a,e.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:k,_disableForm:kn,_subjects:v,_proxyFormState:_,get _fields(){return s},get _formValues(){return i},get _state(){return o},set _state(a){o=a},get _defaultValues(){return n},get _names(){return l},set _names(a){l=a},get _formState(){return r},get _options(){return e},set _options(a){e={...e,...a}}},subscribe:An,trigger:Dt,register:Nt,handleSubmit:Ar,watch:Sn,setValue:ye,getValues:wr,reset:Cr,resetField:Cn,clearErrors:Er,unregister:Ot,setError:dt,setFocus:Rn,getFieldState:Ir};return{...Rr,formControl:Rr}}function Ei(t={}){const e=H.useRef(void 0),r=H.useRef(void 0),[s,n]=H.useState({isDirty:!1,isValidating:!1,isLoading:Q(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,isReady:!1,defaultValues:Q(t.defaultValues)?void 0:t.defaultValues});if(!e.current)if(t.formControl)e.current={...t.formControl,formState:s},t.defaultValues&&!Q(t.defaultValues)&&t.formControl.reset(t.defaultValues,t.resetOptions);else{const{formControl:o,...l}=Ii(t);e.current={...l,formState:s}}const i=e.current.control;return i._options=t,ii(()=>{const o=i._subscribe({formState:i._proxyFormState,callback:()=>n({...i._formState}),reRenderRoot:!0});return n(l=>({...l,isReady:!0})),i._formState.isReady=!0,o},[i]),H.useEffect(()=>i._disableForm(t.disabled),[i,t.disabled]),H.useEffect(()=>{t.mode&&(i._options.mode=t.mode),t.reValidateMode&&(i._options.reValidateMode=t.reValidateMode)},[i,t.mode,t.reValidateMode]),H.useEffect(()=>{t.errors&&(i._setErrors(t.errors),i._focusError())},[i,t.errors]),H.useEffect(()=>{t.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,t.shouldUnregister]),H.useEffect(()=>{if(i._proxyFormState.isDirty){const o=i._getDirty();o!==s.isDirty&&i._subjects.state.next({isDirty:o})}},[i,s.isDirty]),H.useEffect(()=>{var o;t.values&&!be(t.values,r.current)?(i._reset(t.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((o=i._options.resetOptions)===null||o===void 0)&&o.keepIsValid||i._setValid(),r.current=t.values,n(l=>({...l}))):i._resetDefaultValues()},[i,t.values]),H.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),e.current.formState=H.useMemo(()=>ni(s,i),[i,s]),e.current}const Ti=()=>{};var Wr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=function(t){const e=[];let r=0;for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++s)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},Si=function(t){const e=[];let r=0,s=0;for(;r<t.length;){const n=t[r++];if(n<128)e[s++]=String.fromCharCode(n);else if(n>191&&n<224){const i=t[r++];e[s++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=t[r++],o=t[r++],l=t[r++],d=((n&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const i=t[r++],o=t[r++];e[s++]=String.fromCharCode((n&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ms={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let n=0;n<t.length;n+=3){const i=t[n],o=n+1<t.length,l=o?t[n+1]:0,d=n+2<t.length,f=d?t[n+2]:0,w=i>>2,_=(i&3)<<4|l>>4;let T=(l&15)<<2|f>>6,v=f&63;d||(v=64,o||(T=64)),s.push(r[w],r[_],r[T],r[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Si(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let n=0;n<t.length;){const i=r[t.charAt(n++)],l=n<t.length?r[t.charAt(n)]:0;++n;const f=n<t.length?r[t.charAt(n)]:64;++n;const _=n<t.length?r[t.charAt(n)]:64;if(++n,i==null||l==null||f==null||_==null)throw new Ai;const T=i<<2|l>>4;if(s.push(T),f!==64){const v=l<<4&240|f>>2;if(s.push(v),_!==64){const U=f<<6&192|_;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ai extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ki=function(t){const e=xs(t);return Ms.encodeByteArray(e,!0)},Us=function(t){return ki(t).replace(/\./g,"")},Fs=function(t){try{return Ms.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=()=>Ci().__FIREBASE_DEFAULTS__,Pi=()=>{if(typeof process>"u"||typeof Wr>"u")return;const t=Wr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Di=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fs(t[1]);return e&&JSON.parse(e)},cr=()=>{try{return Ti()||Ri()||Pi()||Di()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oi=t=>cr()?.emulatorHosts?.[t],Vs=()=>cr()?.config,Bs=t=>cr()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Li(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())}function xi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mi(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ui(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fi(){const t=W();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vi(){try{return typeof indexedDB=="object"}catch{return!1}}function Bi(){return new Promise((t,e)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(s);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(s),t(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{e(n.error?.message||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="FirebaseError";class Se extends Error{constructor(e,r,s){super(r),this.code=e,this.customData=s,this.name=Hi,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(e,r,s){this.service=e,this.serviceName=r,this.errors=s}create(e,...r){const s=r[0]||{},n=`${this.service}/${e}`,i=this.errors[e],o=i?ji(i,s):"Error",l=`${this.serviceName}: ${o} (${n}).`;return new Se(n,l,s)}}function ji(t,e){return t.replace($i,(r,s)=>{const n=e[s];return n!=null?String(n):`<${s}?>`})}const $i=/\{\$([^}]+)}/g;function Wi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Be(t,e){if(t===e)return!0;const r=Object.keys(t),s=Object.keys(e);for(const n of r){if(!s.includes(n))return!1;const i=t[n],o=e[n];if(zr(i)&&zr(o)){if(!Be(i,o))return!1}else if(i!==o)return!1}for(const n of s)if(!r.includes(n))return!1;return!0}function zr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){const e=[];for(const[r,s]of Object.entries(t))Array.isArray(s)?s.forEach(n=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zi(t,e){const r=new qi(t,e);return r.subscribe.bind(r)}class qi{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,s){let n;if(e===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");Gi(e,["next","error","complete"])?n=e:n={next:e,error:r,complete:s},n.next===void 0&&(n.next=Vt),n.error===void 0&&(n.error=Vt),n.complete===void 0&&(n.complete=Vt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gi(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Vt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ki(t){return(await fetch(t,{credentials:"include"})).ok}class He{constructor(e,r,s){this.name=e,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const s=new Ni;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&s.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(s)return null;throw n}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xi(e))try{this.getOrInitializeService({instanceIdentifier:ke})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:n});s.resolve(i)}catch{}}}}clearInstance(e=ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ke){return this.instances.has(e)}getOptions(e=ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(n)}return n}onInit(e,r){const s=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(s)??new Set;n.add(e),this.onInitCallbacks.set(s,n);const i=this.instances.get(s);return i&&e(i,s),()=>{n.delete(e)}}invokeOnInitCallbacks(e,r){const s=this.onInitCallbacks.get(r);if(s)for(const n of s)try{n(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yi(e),options:r}),this.instances.set(e,s),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ke){return this.component?this.component.multipleInstances?e:ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yi(t){return t===ke?void 0:t}function Xi(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Ji(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Zi={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},eo=R.INFO,to={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},ro=(t,e,...r)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),n=to[e];if(n)console[n](`[${s}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=eo,this._logHandler=ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const so=(t,e)=>e.some(r=>t instanceof r);let qr,Gr;function no(){return qr||(qr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function io(){return Gr||(Gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const js=new WeakMap,Kt=new WeakMap,$s=new WeakMap,Bt=new WeakMap,ur=new WeakMap;function oo(t){const e=new Promise((r,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{r(Ee(t.result)),n()},o=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(r=>{r instanceof IDBCursor&&js.set(r,t)}).catch(()=>{}),ur.set(e,t),e}function ao(t){if(Kt.has(t))return;const e=new Promise((r,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{r(),n()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kt.set(t,e)}let Jt={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Kt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$s.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ee(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function co(t){Jt=t(Jt)}function lo(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const s=t.call(Ht(this),e,...r);return $s.set(s,e.sort?e.sort():[e]),Ee(s)}:io().includes(t)?function(...e){return t.apply(Ht(this),e),Ee(js.get(this))}:function(...e){return Ee(t.apply(Ht(this),e))}}function uo(t){return typeof t=="function"?lo(t):(t instanceof IDBTransaction&&ao(t),so(t,no())?new Proxy(t,Jt):t)}function Ee(t){if(t instanceof IDBRequest)return oo(t);if(Bt.has(t))return Bt.get(t);const e=uo(t);return e!==t&&(Bt.set(t,e),ur.set(e,t)),e}const Ht=t=>ur.get(t);function ho(t,e,{blocked:r,upgrade:s,blocking:n,terminated:i}={}){const o=indexedDB.open(t,e),l=Ee(o);return s&&o.addEventListener("upgradeneeded",d=>{s(Ee(o.result),d.oldVersion,d.newVersion,Ee(o.transaction),d)}),r&&o.addEventListener("blocked",d=>r(d.oldVersion,d.newVersion,d)),l.then(d=>{i&&d.addEventListener("close",()=>i()),n&&d.addEventListener("versionchange",f=>n(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const fo=["get","getKey","getAll","getAllKeys","count"],po=["put","add","delete","clear"],jt=new Map;function Kr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jt.get(e))return jt.get(e);const r=e.replace(/FromIndex$/,""),s=e!==r,n=po.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(n||fo.includes(r)))return;const i=async function(o,...l){const d=this.transaction(o,n?"readwrite":"readonly");let f=d.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[r](...l),n&&d.done]))[0]};return jt.set(e,i),i}co(t=>({...t,get:(e,r,s)=>Kr(e,r)||t.get(e,r,s),has:(e,r)=>!!Kr(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(mo(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function mo(t){return t.getComponent()?.type==="VERSION"}const Yt="@firebase/app",Jr="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Hs("@firebase/app"),yo="@firebase/app-compat",_o="@firebase/analytics-compat",bo="@firebase/analytics",vo="@firebase/app-check-compat",wo="@firebase/app-check",Io="@firebase/auth",Eo="@firebase/auth-compat",To="@firebase/database",So="@firebase/data-connect",Ao="@firebase/database-compat",ko="@firebase/functions",Co="@firebase/functions-compat",Ro="@firebase/installations",Po="@firebase/installations-compat",Do="@firebase/messaging",Oo="@firebase/messaging-compat",No="@firebase/performance",Lo="@firebase/performance-compat",xo="@firebase/remote-config",Mo="@firebase/remote-config-compat",Uo="@firebase/storage",Fo="@firebase/storage-compat",Vo="@firebase/firestore",Bo="@firebase/ai",Ho="@firebase/firestore-compat",jo="firebase",$o="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]",Wo={[Yt]:"fire-core",[yo]:"fire-core-compat",[bo]:"fire-analytics",[_o]:"fire-analytics-compat",[wo]:"fire-app-check",[vo]:"fire-app-check-compat",[Io]:"fire-auth",[Eo]:"fire-auth-compat",[To]:"fire-rtdb",[So]:"fire-data-connect",[Ao]:"fire-rtdb-compat",[ko]:"fire-fn",[Co]:"fire-fn-compat",[Ro]:"fire-iid",[Po]:"fire-iid-compat",[Do]:"fire-fcm",[Oo]:"fire-fcm-compat",[No]:"fire-perf",[Lo]:"fire-perf-compat",[xo]:"fire-rc",[Mo]:"fire-rc-compat",[Uo]:"fire-gcs",[Fo]:"fire-gcs-compat",[Vo]:"fire-fst",[Ho]:"fire-fst-compat",[Bo]:"fire-vertex","fire-js":"fire-js",[jo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Map,zo=new Map,Qt=new Map;function Yr(t,e){try{t.container.addComponent(e)}catch(r){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Xe(t){const e=t.name;if(Qt.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const r of bt.values())Yr(r,t);for(const r of zo.values())Yr(r,t);return!0}function Ws(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function ie(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new st("app","Firebase",qo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,r,s){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=$o;function zs(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const s={name:Xt,automaticDataCollectionEnabled:!0,...e},n=s.name;if(typeof n!="string"||!n)throw Te.create("bad-app-name",{appName:String(n)});if(r||(r=Vs()),!r)throw Te.create("no-options");const i=bt.get(n);if(i){if(Be(r,i.options)&&Be(s,i.config))return i;throw Te.create("duplicate-app",{appName:n})}const o=new Qi(n);for(const d of Qt.values())o.addComponent(d);const l=new Go(r,s,o);return bt.set(n,l),l}function Ko(t=Xt){const e=bt.get(t);if(!e&&t===Xt&&Vs())return zs();if(!e)throw Te.create("no-app",{appName:t});return e}function Me(t,e,r){let s=Wo[t]??t;r&&(s+=`-${r}`);const n=s.match(/\s|\//),i=e.match(/\s|\//);if(n||i){const o=[`Unable to register library "${s}" with version "${e}":`];n&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),n&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(o.join(" "));return}Xe(new He(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="firebase-heartbeat-database",Yo=1,Qe="firebase-heartbeat-store";let $t=null;function qs(){return $t||($t=ho(Jo,Yo,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qe)}catch(r){console.warn(r)}}}}).catch(t=>{throw Te.create("idb-open",{originalErrorMessage:t.message})})),$t}async function Xo(t){try{const r=(await qs()).transaction(Qe),s=await r.objectStore(Qe).get(Gs(t));return await r.done,s}catch(e){if(e instanceof Se)pe.warn(e.message);else{const r=Te.create("idb-get",{originalErrorMessage:e?.message});pe.warn(r.message)}}}async function Xr(t,e){try{const s=(await qs()).transaction(Qe,"readwrite");await s.objectStore(Qe).put(e,Gs(t)),await s.done}catch(r){if(r instanceof Se)pe.warn(r.message);else{const s=Te.create("idb-set",{originalErrorMessage:r?.message});pe.warn(s.message)}}}function Gs(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=1024,Zo=30;class ea{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new ra(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(n=>n.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Zo){const n=sa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qr(),{heartbeatsToSend:r,unsentEntries:s}=ta(this._heartbeatsCache.heartbeats),n=Us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return pe.warn(e),""}}}function Qr(){return new Date().toISOString().substring(0,10)}function ta(t,e=Qo){const r=[];let s=t.slice();for(const n of t){const i=r.find(o=>o.agent===n.agent);if(i){if(i.dates.push(n.date),Zr(r)>e){i.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Zr(r)>e){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class ra{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vi()?Bi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Xo(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zr(t){return Us(JSON.stringify({version:2,heartbeats:t})).length}function sa(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let s=1;s<t.length;s++)t[s].date<r&&(r=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){Xe(new He("platform-logger",e=>new go(e),"PRIVATE")),Xe(new He("heartbeat",e=>new ea(e),"PRIVATE")),Me(Yt,Jr,t),Me(Yt,Jr,"esm2020"),Me("fire-js","")}na("");function Ks(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ia=Ks,Js=new st("auth","Firebase",Ks());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Hs("@firebase/auth");function oa(t,...e){vt.logLevel<=R.WARN&&vt.warn(`Auth (${it}): ${t}`,...e)}function ft(t,...e){vt.logLevel<=R.ERROR&&vt.error(`Auth (${it}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,...e){throw hr(t,...e)}function te(t,...e){return hr(t,...e)}function dr(t,e,r){const s={...ia(),[e]:r};return new st("auth","Firebase",s).create(e,{appName:t.name})}function Pe(t){return dr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aa(t,e,r){const s=r;if(!(e instanceof s))throw s.name!==e.constructor.name&&ae(t,"argument-error"),dr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hr(t,...e){if(typeof t!="string"){const r=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(r,...s)}return Js.create(t,...e)}function b(t,e,...r){if(!t)throw hr(e,...r)}function he(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ft(e),new Error(e)}function ge(t,e){t||he(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof self<"u"&&self.location?.href||""}function ca(){return es()==="http:"||es()==="https:"}function es(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ca()||Mi()||"connection"in navigator)?navigator.onLine:!0}function ua(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,r){this.shortDelay=e,this.longDelay=r,ge(r>e,"Short delay should be less than long delay!"),this.isMobile=Li()||Ui()}get(){return la()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){ge(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{static initialize(e,r,s){this.fetchImpl=e,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fa=new ot(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function We(t,e,r,s,n={}){return Xs(t,n,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=nt({key:t.config.apiKey,...o}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:d,...i};return xi()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&lr(t.emulatorConfig.host)&&(f.credentials="include"),Ys.fetch()(await Qs(t,t.config.apiHost,r,l),f)})}async function Xs(t,e,r){t._canInitEmulator=!1;const s={...da,...e};try{const n=new ga(t),i=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ht(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[d,f]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw ht(t,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw ht(t,"email-already-in-use",o);if(d==="USER_DISABLED")throw ht(t,"user-disabled",o);const w=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw dr(t,w,f);ae(t,w)}}catch(n){if(n instanceof Se)throw n;ae(t,"network-request-failed",{message:String(n)})}}async function pa(t,e,r,s,n={}){const i=await We(t,e,r,s,n);return"mfaPendingCredential"in i&&ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qs(t,e,r,s){const n=`${e}${r}?${s}`,i=t,o=i.config.emulator?fr(t.config,n):`${t.config.apiScheme}://${n}`;return ha.includes(r)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ga{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(te(this.auth,"network-request-failed")),fa.get())})}}function ht(t,e,r){const s={appName:t.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const n=te(t,e,s);return n.customData._tokenResponse=r,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e){return We(t,"POST","/v1/accounts:delete",e)}async function wt(t,e){return We(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ya(t,e=!1){const r=$e(t),s=await r.getIdToken(e),n=gr(s);b(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const i=typeof n.firebase=="object"?n.firebase:void 0,o=i?.sign_in_provider;return{claims:n,token:s,authTime:Ye(Wt(n.auth_time)),issuedAtTime:Ye(Wt(n.iat)),expirationTime:Ye(Wt(n.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Wt(t){return Number(t)*1e3}function gr(t){const[e,r,s]=t.split(".");if(e===void 0||r===void 0||s===void 0)return ft("JWT malformed, contained fewer than 3 sections"),null;try{const n=Fs(r);return n?JSON.parse(n):(ft("Failed to decode base64 JWT payload"),null)}catch(n){return ft("Caught error parsing JWT payload as JSON",n?.toString()),null}}function ts(t){const e=gr(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(t,e,r=!1){if(r)return e;try{return await e}catch(s){throw s instanceof Se&&_a(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function _a({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t){const e=t.auth,r=await t.getIdToken(),s=await Ze(t,wt(e,{idToken:r}));b(s?.users.length,e,"internal-error");const n=s.users[0];t._notifyReloadListener(n);const i=n.providerUserInfo?.length?Zs(n.providerUserInfo):[],o=wa(t.providerData,i),l=t.isAnonymous,d=!(t.email&&n.passwordHash)&&!o?.length,f=l?d:!1,w={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new er(n.createdAt,n.lastLoginAt),isAnonymous:f};Object.assign(t,w)}async function va(t){const e=$e(t);await It(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wa(t,e){return[...t.filter(s=>!e.some(n=>n.providerId===s.providerId)),...e]}function Zs(t){return t.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e){const r=await Xs(t,{},async()=>{const s=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:i}=t.config,o=await Qs(t,n,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return t.emulatorConfig&&lr(t.emulatorConfig.host)&&(d.credentials="include"),Ys.fetch()(o,d)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Ea(t,e){return We(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ts(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){b(e.length!==0,"internal-error");const r=ts(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:s,refreshToken:n,expiresIn:i}=await Ia(e,r);this.updateTokensAndExpiration(s,n,Number(i))}updateTokensAndExpiration(e,r,s){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,r){const{refreshToken:s,accessToken:n,expirationTime:i}=r,o=new Ue;return s&&(b(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),n&&(b(typeof n=="string","internal-error",{appName:e}),o.accessToken=n),i&&(b(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ue,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ee{constructor({uid:e,auth:r,stsTokenManager:s,...n}){this.providerId="firebase",this.proactiveRefresh=new ba(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new er(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const r=await Ze(this,this.stsTokenManager.getToken(this.auth,e));return b(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return ya(this,e)}reload(){return va(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>({...r})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new ee({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),r&&await It(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(Pe(this.auth));const e=await this.getIdToken();return await Ze(this,ma(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){const s=r.displayName??void 0,n=r.email??void 0,i=r.phoneNumber??void 0,o=r.photoURL??void 0,l=r.tenantId??void 0,d=r._redirectEventId??void 0,f=r.createdAt??void 0,w=r.lastLoginAt??void 0,{uid:_,emailVerified:T,isAnonymous:v,providerData:U,stsTokenManager:V}=r;b(_&&V,e,"internal-error");const J=Ue.fromJSON(this.name,V);b(typeof _=="string",e,"internal-error"),_e(s,e.name),_e(n,e.name),b(typeof T=="boolean",e,"internal-error"),b(typeof v=="boolean",e,"internal-error"),_e(i,e.name),_e(o,e.name),_e(l,e.name),_e(d,e.name),_e(f,e.name),_e(w,e.name);const B=new ee({uid:_,auth:e,email:n,emailVerified:T,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:J,createdAt:f,lastLoginAt:w});return U&&Array.isArray(U)&&(B.providerData=U.map(A=>({...A}))),d&&(B._redirectEventId=d),B}static async _fromIdTokenResponse(e,r,s=!1){const n=new Ue;n.updateFromServerResponse(r);const i=new ee({uid:r.localId,auth:e,stsTokenManager:n,isAnonymous:s});return await It(i),i}static async _fromGetAccountInfoResponse(e,r,s){const n=r.users[0];b(n.localId!==void 0,"internal-error");const i=n.providerUserInfo!==void 0?Zs(n.providerUserInfo):[],o=!(n.email&&n.passwordHash)&&!i?.length,l=new Ue;l.updateFromIdToken(s);const d=new ee({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:o}),f={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new er(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!i?.length};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Map;function fe(t){ge(t instanceof Function,"Expected a class definition");let e=rs.get(t);return e?(ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rs.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}en.type="NONE";const ss=en;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,r){return`firebase:${t}:${e}:${r}`}class Fe{constructor(e,r,s){this.persistence=e,this.auth=r,this.userKey=s;const{config:n,name:i}=this.auth;this.fullUserKey=pt(this.userKey,n.apiKey,i),this.fullPersistenceKey=pt("persistence",n.apiKey,i),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await wt(this.auth,{idToken:e}).catch(()=>{});return r?ee._fromGetAccountInfoResponse(this.auth,r,e):null}return ee._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,s="authUser"){if(!r.length)return new Fe(fe(ss),e,s);const n=(await Promise.all(r.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=n[0]||fe(ss);const o=pt(s,e.config.apiKey,e.name);let l=null;for(const f of r)try{const w=await f._get(o);if(w){let _;if(typeof w=="string"){const T=await wt(e,{idToken:w}).catch(()=>{});if(!T)break;_=await ee._fromGetAccountInfoResponse(e,T,w)}else _=ee._fromJSON(e,w);f!==i&&(l=_),i=f;break}}catch{}const d=n.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new Fe(i,e,s):(i=d[0],l&&await i._set(o,l.toJSON()),await Promise.all(r.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new Fe(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(an(e))return"Blackberry";if(cn(e))return"Webos";if(rn(e))return"Safari";if((e.includes("chrome/")||sn(e))&&!e.includes("edge/"))return"Chrome";if(on(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(r);if(s?.length===2)return s[1]}return"Other"}function tn(t=W()){return/firefox\//i.test(t)}function rn(t=W()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sn(t=W()){return/crios\//i.test(t)}function nn(t=W()){return/iemobile/i.test(t)}function on(t=W()){return/android/i.test(t)}function an(t=W()){return/blackberry/i.test(t)}function cn(t=W()){return/webos/i.test(t)}function mr(t=W()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ta(t=W()){return mr(t)&&!!window.navigator?.standalone}function Sa(){return Fi()&&document.documentMode===10}function ln(t=W()){return mr(t)||on(t)||cn(t)||an(t)||/windows phone/i.test(t)||nn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e=[]){let r;switch(t){case"Browser":r=ns(W());break;case"Worker":r=`${ns(W())}-${t}`;break;default:r=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${it}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const s=i=>new Promise((o,l)=>{try{const d=e(i);o(d)}catch(d){l(d)}});s.onAbort=r,this.queue.push(s);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e={}){return We(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=6;class Ra{constructor(e){const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Ca,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){const s=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=e.length>=s),n&&(r.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let n=0;n<e.length;n++)s=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,r,s,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,r,s,n){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new is(this),this.idTokenSubscription=new is(this),this.beforeStateQueue=new Aa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Js,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=fe(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Fe.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await wt(this,{idToken:e}),s=await ee._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ie(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(s=l.user,n=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await It(e)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ua()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(Pe(this));const r=e?$e(e):null;return r&&b(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(Pe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(Pe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ka(this),r=new Ra(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new st("auth","Firebase",e())}onAuthStateChanged(e,r,s){return this.registerStateListener(this.authStateSubscription,e,r,s)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,s){return this.registerStateListener(this.idTokenSubscription,e,r,s)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ea(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,r){const s=await this.getOrInitRedirectPersistenceManager(r);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&fe(e)||this._popupRedirectResolver;b(r,this,"argument-error"),this.redirectPersistenceManager=await Fe.create(this,[fe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,s,n){if(this._deleted)return()=>{};const i=typeof r=="function"?r:r.next.bind(r);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof r=="function"){const d=e.addObserver(r,s,n);return()=>{o=!0,d()}}else{const d=e.addObserver(r);return()=>{o=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=un(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&oa(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ct(t){return $e(t)}class is{constructor(e){this.auth=e,this.observer=null,this.addObserver=zi(r=>this.observer=r)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Da(t){yr=t}function Oa(t){return yr.loadJS(t)}function Na(){return yr.gapiScript}function La(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e){const r=Ws(t,"auth");if(r.isInitialized()){const n=r.getImmediate(),i=r.getOptions();if(Be(i,e??{}))return n;ae(n,"already-initialized")}return r.initialize({options:e})}function Ma(t,e){const r=e?.persistence||[],s=(Array.isArray(r)?r:[r]).map(fe);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Ua(t,e,r){const s=Ct(t);b(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const n=!1,i=dn(e),{host:o,port:l}=Fa(e),d=l===null?"":`:${l}`,f={url:`${i}//${o}${d}/`},w=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!s._canInitEmulator){b(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),b(Be(f,s.config.emulator)&&Be(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,lr(o)?Ki(`${i}//${o}${d}`):Va()}function dn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fa(t){const e=dn(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(s);if(n){const i=n[1];return{host:i,port:os(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:os(o)}}}function os(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Va(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,r){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="http://localhost";class De extends hn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):ae("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:n,...i}=r;if(!s||!n)return null;const o=new De(s,n);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const r=this.buildRequest();return Ve(e,r)}_linkToIdToken(e,r){const s=this.buildRequest();return s.idToken=r,Ve(e,s)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Ve(e,r)}buildRequest(){const e={requestUri:Ba,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=nt(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends _r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends at{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends at{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return De._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:s}=e;if(!r&&!s)return null;try{return de.credential(r,s)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends at{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends at{constructor(){super("twitter.com")}static credential(e,r){return De._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:s}=e;if(!r||!s)return null;try{return Ie.credential(r,s)}catch{return null}}}Ie.TWITTER_SIGN_IN_METHOD="twitter.com";Ie.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,s,n=!1){const i=await ee._fromIdTokenResponse(e,s,n),o=as(s);return new je({user:i,providerId:o,_tokenResponse:s,operationType:r})}static async _forOperation(e,r,s){await e._updateTokensIfNecessary(s,!0);const n=as(s);return new je({user:e,providerId:n,_tokenResponse:s,operationType:r})}}function as(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Se{constructor(e,r,s,n){super(r.code,r.message),this.operationType=s,this.user=n,Object.setPrototypeOf(this,Et.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,r,s,n){return new Et(e,r,s,n)}}function fn(t,e,r,s){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Et._fromErrorAndOperation(t,i,e,s):i})}async function Ha(t,e,r=!1){const s=await Ze(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return je._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t,e,r=!1){const{auth:s}=t;if(ie(s.app))return Promise.reject(Pe(s));const n="reauthenticate";try{const i=await Ze(t,fn(s,n,e,t),r);b(i.idToken,s,"internal-error");const o=gr(i.idToken);b(o,s,"internal-error");const{sub:l}=o;return b(t.uid===l,s,"user-mismatch"),je._forOperation(t,n,i)}catch(i){throw i?.code==="auth/user-not-found"&&ae(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t,e,r=!1){if(ie(t.app))return Promise.reject(Pe(t));const s="signIn",n=await fn(t,s,e),i=await je._fromIdTokenResponse(t,s,n);return r||await t._updateCurrentUser(i.user),i}function Wa(t,e,r,s){return $e(t).onIdTokenChanged(e,r,s)}function za(t,e,r){return $e(t).beforeAuthStateChanged(e,r)}const Tt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Tt,"1"),this.storage.removeItem(Tt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=1e3,Ga=10;class gn extends pn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ln(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const s=this.storage.getItem(r),n=this.localCache[r];s!==n&&e(r,n,s)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const s=e.key;r?this.detachListener():this.stopPolling();const n=()=>{const o=this.storage.getItem(s);!r&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Sa()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Ga):n()}notifyListeners(e,r){this.localCache[e]=r;const s=this.listeners[e];if(s)for(const n of Array.from(s))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:s}),!0)})},qa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}gn.type="LOCAL";const Ka=gn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends pn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}mn.type="SESSION";const yn=mn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(n=>n.isListeningto(e));if(r)return r;const s=new Rt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:s,eventType:n,data:i}=r.data,o=this.handlersMap[n];if(!o?.size)return;r.ports[0].postMessage({status:"ack",eventId:s,eventType:n});const l=Array.from(o).map(async f=>f(r.origin,i)),d=await Ja(l);r.ports[0].postMessage({status:"done",eventId:s,eventType:n,response:d})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t="",e=10){let r="";for(let s=0;s<e;s++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,s=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,o;return new Promise((l,d)=>{const f=br("",20);n.port1.start();const w=setTimeout(()=>{d(new Error("unsupported_event"))},s);o={messageChannel:n,onMessage(_){const T=_;if(T.data.eventId===f)switch(T.data.status){case"ack":clearTimeout(w),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(T.data.response);break;default:clearTimeout(w),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(o),n.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:r},[n.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function Xa(t){oe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function Qa(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Za(){return navigator?.serviceWorker?.controller||null}function ec(){return _n()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="firebaseLocalStorageDb",tc=1,St="firebaseLocalStorage",vn="fbase_key";class ct{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Pt(t,e){return t.transaction([St],e?"readwrite":"readonly").objectStore(St)}function rc(){const t=indexedDB.deleteDatabase(bn);return new ct(t).toPromise()}function tr(){const t=indexedDB.open(bn,tc);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(St,{keyPath:vn})}catch(n){r(n)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(St)?e(s):(s.close(),await rc(),e(await tr()))})})}async function cs(t,e,r){const s=Pt(t,!0).put({[vn]:e,value:r});return new ct(s).toPromise()}async function sc(t,e){const r=Pt(t,!1).get(e),s=await new ct(r).toPromise();return s===void 0?null:s.value}function ls(t,e){const r=Pt(t,!0).delete(e);return new ct(r).toPromise()}const nc=800,ic=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(r++>ic)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _n()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rt._getInstance(ec()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Qa(),!this.activeServiceWorker)return;this.sender=new Ya(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Za()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tr();return await cs(e,Tt,"1"),await ls(e,Tt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(s=>cs(s,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(s=>sc(s,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ls(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const i=Pt(n,!1).getAll();return new ct(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],s=new Set;if(e.length!==0)for(const{fbase_key:n,value:i}of e)s.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!s.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(e,r){this.localCache[e]=r;const s=this.listeners[e];if(s)for(const n of Array.from(s))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wn.type="LOCAL";const oc=wn;new ot(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){return e?fe(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends hn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Ve(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function ac(t){return $a(t.auth,new vr(t),t.bypassAuthState)}function cc(t){const{auth:e,user:r}=t;return b(r,e,"internal-error"),ja(r,new vr(t),t.bypassAuthState)}async function lc(t){const{auth:e,user:r}=t;return b(r,e,"internal-error"),Ha(r,new vr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,r,s,n,i=!1){this.auth=e,this.resolver=s,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:s,postBody:n,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:r,sessionId:s,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ac;case"linkViaPopup":case"linkViaRedirect":return lc;case"reauthViaPopup":case"reauthViaRedirect":return cc;default:ae(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new ot(2e3,1e4);async function dc(t,e,r){if(ie(t.app))return Promise.reject(te(t,"operation-not-supported-in-this-environment"));const s=Ct(t);aa(t,e,_r);const n=In(s,r);return new Re(s,"signInViaPopup",e,n).executeNotNull()}class Re extends En{constructor(e,r,s,n,i){super(e,r,n,i),this.provider=s,this.authWindow=null,this.pollId=null,Re.currentPopupAction&&Re.currentPopupAction.cancel(),Re.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=br();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Re.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uc.get())};e()}}Re.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="pendingRedirect",gt=new Map;class fc extends En{constructor(e,r,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,s),this.eventId=null}async execute(){let e=gt.get(this.auth._key());if(!e){try{const s=await pc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(r){e=()=>Promise.reject(r)}gt.set(this.auth._key(),e)}return this.bypassAuthState||gt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pc(t,e){const r=yc(e),s=mc(t);if(!await s._isAvailable())return!1;const n=await s._get(r)==="true";return await s._remove(r),n}function gc(t,e){gt.set(t._key(),e)}function mc(t){return fe(t._redirectPersistence)}function yc(t){return pt(hc,t.config.apiKey,t.name)}async function _c(t,e,r=!1){if(ie(t.app))return Promise.reject(Pe(t));const s=Ct(t),n=In(s,e),o=await new fc(s,n,r).execute();return o&&!r&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=600*1e3;class vc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(r=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wc(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){if(e.error&&!Tn(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";r.onError(te(this.auth,s))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const s=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bc&&this.cachedEventUids.clear(),this.cachedEventUids.has(us(e))}saveEventToCache(e){this.cachedEventUids.add(us(e)),this.lastProcessedEventTime=Date.now()}}function us(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tn({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function wc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tn(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t,e={}){return We(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tc=/^https?/;async function Sc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ic(t);for(const r of e)try{if(Ac(r))return}catch{}ae(t,"unauthorized-domain")}function Ac(t){const e=Zt(),{protocol:r,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===s}if(!Tc.test(r))return!1;if(Ec.test(t))return s===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new ot(3e4,6e4);function ds(){const t=oe().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Cc(t){return new Promise((e,r)=>{function s(){ds(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ds(),r(te(t,"network-request-failed"))},timeout:kc.get()})}if(oe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(oe().gapi?.load)s();else{const n=La("iframefcb");return oe()[n]=()=>{gapi.load?s():r(te(t,"network-request-failed"))},Oa(`${Na()}?onload=${n}`).catch(i=>r(i))}}).catch(e=>{throw mt=null,e})}let mt=null;function Rc(t){return mt=mt||Cc(t),mt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new ot(5e3,15e3),Dc="__/auth/iframe",Oc="emulator/auth/iframe",Nc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xc(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?fr(e,Oc):`https://${t.config.authDomain}/${Dc}`,s={apiKey:e.apiKey,appName:t.name,v:it},n=Lc.get(t.config.apiHost);n&&(s.eid=n);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${r}?${nt(s).slice(1)}`}async function Mc(t){const e=await Rc(t),r=oe().gapi;return b(r,t,"internal-error"),e.open({where:document.body,url:xc(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nc,dontclear:!0},s=>new Promise(async(n,i)=>{await s.restyle({setHideOnLeave:!1});const o=te(t,"network-request-failed"),l=oe().setTimeout(()=>{i(o)},Pc.get());function d(){oe().clearTimeout(l),n(s)}s.ping(d).then(d,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fc=500,Vc=600,Bc="_blank",Hc="http://localhost";class hs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jc(t,e,r,s=Fc,n=Vc){const i=Math.max((window.screen.availHeight-n)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...Uc,width:s.toString(),height:n.toString(),top:i,left:o},f=W().toLowerCase();r&&(l=sn(f)?Bc:r),tn(f)&&(e=e||Hc,d.scrollbars="yes");const w=Object.entries(d).reduce((T,[v,U])=>`${T}${v}=${U},`,"");if(Ta(f)&&l!=="_self")return $c(e||"",l),new hs(null);const _=window.open(e||"",l,w);b(_,t,"popup-blocked");try{_.focus()}catch{}return new hs(_)}function $c(t,e){const r=document.createElement("a");r.href=t,r.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="__/auth/handler",zc="emulator/auth/handler",qc=encodeURIComponent("fac");async function fs(t,e,r,s,n,i){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:s,v:it,eventId:n};if(e instanceof _r){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,_]of Object.entries({}))o[w]=_}if(e instanceof at){const w=e.getScopes().filter(_=>_!=="");w.length>0&&(o.scopes=w.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const w of Object.keys(l))l[w]===void 0&&delete l[w];const d=await t._getAppCheckToken(),f=d?`#${qc}=${encodeURIComponent(d)}`:"";return`${Gc(t)}?${nt(l).slice(1)}${f}`}function Gc({config:t}){return t.emulator?fr(t,zc):`https://${t.authDomain}/${Wc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="webStorageSupport";class Kc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yn,this._completeRedirectFn=_c,this._overrideRedirectResult=gc}async _openPopup(e,r,s,n){ge(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await fs(e,r,s,Zt(),n);return jc(e,i,br())}async _openRedirect(e,r,s,n){await this._originValidation(e);const i=await fs(e,r,s,Zt(),n);return Xa(i),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:n,promise:i}=this.eventManagers[r];return n?Promise.resolve(n):(ge(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[r]={promise:s},s.catch(()=>{delete this.eventManagers[r]}),s}async initAndGetManager(e){const r=await Mc(e),s=new vc(e);return r.register("authEvent",n=>(b(n?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=r,s}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(zt,{type:zt},n=>{const i=n?.[0]?.[zt];i!==void 0&&r(!!i),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Sc(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ln()||rn()||mr()}}const Jc=Kc;var ps="@firebase/auth",gs="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qc(t){Xe(new He("auth",(e,{options:r})=>{const s=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:un(t)},f=new Pa(s,n,i,d);return Ma(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,s)=>{e.getProvider("auth-internal").initialize()})),Xe(new He("auth-internal",e=>{const r=Ct(e.getProvider("auth").getImmediate());return(s=>new Yc(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(ps,gs,Xc(t)),Me(ps,gs,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=300,el=Bs("authIdTokenMaxAge")||Zc;let ms=null;const tl=t=>async e=>{const r=e&&await e.getIdTokenResult(),s=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(s&&s>el)return;const n=r?.token;ms!==n&&(ms=n,await fetch(t,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function rl(t=Ko()){const e=Ws(t,"auth");if(e.isInitialized())return e.getImmediate();const r=xa(t,{popupRedirectResolver:Jc,persistence:[oc,Ka,yn]}),s=Bs("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=tl(i.toString());za(r,o,()=>o(r.currentUser)),Wa(r,l=>o(l))}}const n=Oi("auth");return n&&Ua(r,`http://${n}`),r}function sl(){return document.getElementsByTagName("head")?.[0]??document}Da({loadJS(t){return new Promise((e,r)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=n=>{const i=te("internal-error");i.customData=n,r(i)},s.type="text/javascript",s.charset="UTF-8",sl().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qc("Browser");var nl="firebase",il="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(nl,il,"app");const ol={apiKey:"AIzaSyBwuDBdmcGIjeu82Lm-8SsUPeMmxmqULIU",authDomain:"codeweave-website.firebaseapp.com",projectId:"codeweave-website",storageBucket:"codeweave-website.firebasestorage.app",messagingSenderId:"509044820906",appId:"1:509044820906:web:c5c992c0b152acec9af9d3"},al=zs(ol),cl=rl(al),ll=new de,ul=et.lazy(()=>At(()=>import("./Navigation-WOvOevcL.js"),__vite__mapDeps([0,1,2,3,4,5]))),dl=et.lazy(()=>At(()=>import("./Advertisement-CVYNlktE.js"),__vite__mapDeps([6,1,2]))),hl=et.lazy(()=>At(()=>import("./Reviews-Dov9XFiJ.js"),__vite__mapDeps([7,1,2]))),fl=et.lazy(()=>At(()=>import("./Footer--o_VpOl9.js"),__vite__mapDeps([8,1,2,3,4]))),ml=()=>{const[t,e]=et.useState(!1),{register:r,handleSubmit:s,reset:n,formState:{errors:i}}=Ei(),o=async l=>{if(!t)try{e(!0);const f=(await dc(cl,ll)).user;await Zn.send("service_ahuxmmp","template_nukrowj",{user_email:f.email,user_name:l.name,user_phone:l.phone,message:l.message},{publicKey:"7k5uzJGcU_EmDwn_S"}),Or.success("Email sent successfully"),n(),e(!1)}catch(d){console.log(d),Or.error("Email not sent!"),e(!1)}};return E.jsxs(E.Fragment,{children:[E.jsxs(Ln,{children:[E.jsx("title",{children:"Contact CodeWeave | Start Your SaaS Project"}),E.jsx("meta",{name:"description",content:"Contact CodeWeave to build your SaaS product, ERP system, or custom web application. Let's turn your idea into reality."}),E.jsx("meta",{name:"robots",content:"index, follow"})]}),E.jsxs(xn.Element,{name:"contact",className:"relative w-screen px-4 md:px-12 lg:px-20 pb-8 bg-black overflow-hidden flex flex-col justify-between gap-16",children:[E.jsx(ul,{}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 text-white",children:[E.jsxs("div",{className:"flex flex-col gap-8",children:[E.jsx("h1",{className:"text-5xl md:text-6xl font-semibold",children:"Let's get in touch"}),E.jsx("p",{className:"text-justify",children:"Whether you have a question, a project in mind, or just want to say hello, we’d love to hear from you. Our team is always ready to discuss new opportunities, provide support, and explore how we can work together to bring your ideas to life. Feel free to reach out through the form or the contact details below."}),E.jsx("hr",{className:"text-white/50"}),E.jsxs("p",{className:"flex items-center gap-3",children:[E.jsx(Bn,{className:"w-5 h-5"}),E.jsx("a",{href:"tel:+918595994381",className:"hover:text-white/80 transition duration-300",children:"+91 8595994381,"}),E.jsx("a",{href:"tel:+919311201990",className:"hover:text-white/80 transition duration-300",children:"+91 9311201990"})]}),E.jsxs("p",{className:"flex items-center gap-3",children:[E.jsx(Fn,{className:"w-5 h-5"}),E.jsx("a",{href:"mailto:codeweave1327@gmail.com",className:"hover:text-white/80 transition duration-300",children:"codeweave1327@gmail.com"})]})]}),E.jsxs("form",{className:"bg-neutral-900 p-8 rounded-2xl space-y-4",onSubmit:s(o),children:[E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("label",{htmlFor:"name",children:"Name"}),E.jsx("input",{id:"name",type:"text",placeholder:"Jane Smith",className:"w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white",required:!0,...r("name",{required:"Name is required",pattern:{value:/^[A-Za-z\s]{3,50}$/,message:"Name should contain only letters and atleast to letters"}})}),i.name&&E.jsx("p",{className:"text-red-500 text-xs",children:i.name.message})]}),E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("label",{htmlFor:"phone",children:"Phone"}),E.jsx("input",{id:"phone",type:"tel",placeholder:"+91 85xxxxxxxx",className:"w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white",required:!0,...r("phone",{required:"Phone number is required",pattern:{value:/^(\+91[-\s]?)?[6-9]\d{9}$/,message:"Enter a valid phone number"}})}),i.phone&&E.jsx("p",{className:"text-red-500 text-xs",children:i.phone.message})]}),E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("label",{htmlFor:"message",children:"Message"}),E.jsx("textarea",{id:"message",placeholder:"Tell us about your requirements...",className:"w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white",required:!0,rows:4,...r("message")})]}),E.jsxs("button",{className:`flex items-center justify-between p-1 rounded-full font-semibold w-full ${t?"bg-gray-400 !cursor-not-allowed":"bg-white hover:bg-gray-200 group"}`,children:[E.jsx("p",{className:"text-black px-3 mx-auto",children:t?"Sending...":"Submit"}),E.jsx(Mn,{size:40,className:"bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out"})]})]})]})]}),E.jsx(hl,{}),E.jsx(dl,{}),E.jsx(fl,{})]})};export{ml as default};
