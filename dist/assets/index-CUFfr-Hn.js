var wm=Object.defineProperty;var Cm=(n,e,t)=>e in n?wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ft=(n,e,t)=>Cm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Eu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Zt={},ms=[],Mi=()=>{},Cd=()=>!1,Jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qo=n=>n.startsWith("onUpdate:"),vn=Object.assign,Su=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pm=Object.prototype.hasOwnProperty,zt=(n,e)=>Pm.call(n,e),yt=Array.isArray,gs=n=>Pa(n)==="[object Map]",Pd=n=>Pa(n)==="[object Set]",Mf=n=>Pa(n)==="[object Date]",At=n=>typeof n=="function",tn=n=>typeof n=="string",Ri=n=>typeof n=="symbol",Kt=n=>n!==null&&typeof n=="object",Dd=n=>(Kt(n)||At(n))&&At(n.then)&&At(n.catch),Ld=Object.prototype.toString,Pa=n=>Ld.call(n),Dm=n=>Pa(n).slice(8,-1),Id=n=>Pa(n)==="[object Object]",Mu=n=>tn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,oa=Eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Lm=/-\w/g,ni=el(n=>n.replace(Lm,e=>e.slice(1).toUpperCase())),Im=/\B([A-Z])/g,Vr=el(n=>n.replace(Im,"-$1").toLowerCase()),Fd=el(n=>n.charAt(0).toUpperCase()+n.slice(1)),gl=el(n=>n?`on${Fd(n)}`:""),bi=(n,e)=>!Object.is(n,e),_l=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Nd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Fm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Tf;const tl=()=>Tf||(Tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tu(n){if(yt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=tn(i)?Bm(i):Tu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(tn(n)||Kt(n))return n}const Nm=/;(?![^(]*\))/g,Um=/:([^]+)/,Om=/\/\*[^]*?\*\//g;function Bm(n){const e={};return n.replace(Om,"").split(Nm).forEach(t=>{if(t){const i=t.split(Um);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Au(n){let e="";if(tn(n))e=n;else if(yt(n))for(let t=0;t<n.length;t++){const i=Au(n[t]);i&&(e+=i+" ")}else if(Kt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zm=Eu(Gm);function Ud(n){return!!n||n===""}function Vm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ru(n[i],e[i]);return t}function Ru(n,e){if(n===e)return!0;let t=Mf(n),i=Mf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ri(n),i=Ri(e),t||i)return n===e;if(t=yt(n),i=yt(e),t||i)return t&&i?Vm(n,e):!1;if(t=Kt(n),i=Kt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Ru(n[a],e[a]))return!1}}return String(n)===String(e)}const Od=n=>!!(n&&n.__v_isRef===!0),xo=n=>tn(n)?n:n==null?"":yt(n)||Kt(n)&&(n.toString===Ld||!At(n.toString))?Od(n)?xo(n.value):JSON.stringify(n,Bd,2):String(n),Bd=(n,e)=>Od(e)?Bd(n,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[vl(i,s)+" =>"]=r,t),{})}:Pd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vl(t))}:Ri(e)?vl(e):Kt(e)&&!yt(e)&&!Id(e)?String(e):e,vl=(n,e="")=>{var t;return Ri(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class km{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&gn&&(gn.active?(this.parent=gn,this.index=(gn.scopes||(gn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=gn;try{return gn=this,e()}finally{gn=t}}}on(){++this._on===1&&(this.prevScope=gn,gn=this)}off(){if(this._on>0&&--this._on===0){if(gn===this)gn=this.prevScope;else{let e=gn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hm(){return gn}let $t;const xl=new WeakSet;class Gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gn&&(gn.active?gn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xl.has(this)&&(xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Af(this),kd(this);const e=$t,t=ii;$t=this,ii=!0;try{return this.fn()}finally{Hd(this),$t=e,ii=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pu(e);this.deps=this.depsTail=void 0,Af(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gc(this)&&this.run()}get dirty(){return gc(this)}}let zd=0,la,ca;function Vd(n,e=!1){if(n.flags|=8,e){n.next=ca,ca=n;return}n.next=la,la=n}function wu(){zd++}function Cu(){if(--zd>0)return;if(ca){let e=ca;for(ca=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;la;){let e=la;for(la=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function kd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Pu(i),Wm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function gc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_a)||(n.globalVersion=_a,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!gc(n))))return;n.flags|=2;const e=n.dep,t=$t,i=ii;$t=n,ii=!0;try{kd(n);const r=n.fn(n._value);(e.version===0||bi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{$t=t,ii=i,Hd(n),n.flags&=-3}}function Pu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Pu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ii=!0;const Xd=[];function Zi(){Xd.push(ii),ii=!1}function Ji(){const n=Xd.pop();ii=n===void 0?!0:n}function Af(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$t;$t=void 0;try{e()}finally{$t=t}}}let _a=0;class Xm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!$t||!ii||$t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$t)t=this.activeLink=new Xm($t,this),$t.deps?(t.prevDep=$t.depsTail,$t.depsTail.nextDep=t,$t.depsTail=t):$t.deps=$t.depsTail=t,jd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=$t.depsTail,t.nextDep=void 0,$t.depsTail.nextDep=t,$t.depsTail=t,$t.deps===t&&($t.deps=i)}return t}trigger(e){this.version++,_a++,this.notify(e)}notify(e){wu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cu()}}}function jd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _c=new WeakMap,Br=Symbol(""),vc=Symbol(""),va=Symbol("");function En(n,e,t){if(ii&&$t){let i=_c.get(n);i||_c.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Du),r.map=i,r.key=t),r.track()}}function Xi(n,e,t,i,r,s){const a=_c.get(n);if(!a){_a++;return}const o=l=>{l&&l.trigger()};if(wu(),e==="clear")a.forEach(o);else{const l=yt(n),c=l&&Mu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===va||!Ri(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(va)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Br)),gs(n)&&o(a.get(vc)));break;case"delete":l||(o(a.get(Br)),gs(n)&&o(a.get(vc)));break;case"set":gs(n)&&o(a.get(Br));break}}Cu()}function qr(n){const e=Gt(n);return e===n?e:(En(e,"iterate",va),ri(n)?e:e.map(Qi))}function Lu(n){return En(n=Gt(n),"iterate",va),n}function vi(n,e){return xr(n)?xa(_s(n)?Qi(e):e):Qi(e)}const jm={__proto__:null,[Symbol.iterator](){return bl(this,Symbol.iterator,n=>vi(this,n))},concat(...n){return qr(this).concat(...n.map(e=>yt(e)?qr(e):e))},entries(){return bl(this,"entries",n=>(n[1]=vi(this,n[1]),n))},every(n,e){return Ni(this,"every",n,e,void 0,arguments)},filter(n,e){return Ni(this,"filter",n,e,t=>t.map(i=>vi(this,i)),arguments)},find(n,e){return Ni(this,"find",n,e,t=>vi(this,t),arguments)},findIndex(n,e){return Ni(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ni(this,"findLast",n,e,t=>vi(this,t),arguments)},findLastIndex(n,e){return Ni(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ni(this,"forEach",n,e,void 0,arguments)},includes(...n){return yl(this,"includes",n)},indexOf(...n){return yl(this,"indexOf",n)},join(n){return qr(this).join(n)},lastIndexOf(...n){return yl(this,"lastIndexOf",n)},map(n,e){return Ni(this,"map",n,e,void 0,arguments)},pop(){return ks(this,"pop")},push(...n){return ks(this,"push",n)},reduce(n,...e){return Rf(this,"reduce",n,e)},reduceRight(n,...e){return Rf(this,"reduceRight",n,e)},shift(){return ks(this,"shift")},some(n,e){return Ni(this,"some",n,e,void 0,arguments)},splice(...n){return ks(this,"splice",n)},toReversed(){return qr(this).toReversed()},toSorted(n){return qr(this).toSorted(n)},toSpliced(...n){return qr(this).toSpliced(...n)},unshift(...n){return ks(this,"unshift",n)},values(){return bl(this,"values",n=>vi(this,n))}};function bl(n,e,t){const i=Lu(n),r=i[e]();return i!==n&&!ri(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ym=Array.prototype;function Ni(n,e,t,i,r,s){const a=Lu(n),o=a!==n&&!ri(n),l=a[e];if(l!==Ym[e]){const f=l.apply(n,s);return o?Qi(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,vi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Rf(n,e,t,i){const r=Lu(n),s=r!==n&&!ri(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=vi(n,c)),t.call(this,c,vi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?vi(n,l):l}function yl(n,e,t){const i=Gt(n);En(i,"iterate",va);const r=i[e](...t);return(r===-1||r===!1)&&Uu(t[0])?(t[0]=Gt(t[0]),i[e](...t)):r}function ks(n,e,t=[]){Zi(),wu();const i=Gt(n)[e].apply(n,t);return Cu(),Ji(),i}const qm=Eu("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ri));function Km(n){Ri(n)||(n=String(n));const e=Gt(this);return En(e,"has",n),e.hasOwnProperty(n)}class qd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?sg:Jd:s?Zd:$d).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=yt(e);if(!r){let l;if(a&&(l=jm[t]))return l;if(t==="hasOwnProperty")return Km}const o=Reflect.get(e,t,Sn(e)?e:i);if((Ri(t)?Yd.has(t):qm(t))||(r||En(e,"get",t),s))return o;if(Sn(o)){const l=a&&Mu(t)?o:o.value;return r&&Kt(l)?bc(l):l}return Kt(o)?r?bc(o):Fu(o):o}}class Kd extends qd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=yt(e)&&Mu(t);if(!this._isShallow){const c=xr(s);if(!ri(i)&&!xr(i)&&(s=Gt(s),i=Gt(i)),!a&&Sn(s)&&!Sn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:zt(e,t),l=Reflect.set(e,t,i,Sn(e)?e:r);return e===Gt(r)&&(o?bi(i,s)&&Xi(e,"set",t,i):Xi(e,"add",t,i)),l}deleteProperty(e,t){const i=zt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ri(t)||!Yd.has(t))&&En(e,"has",t),i}ownKeys(e){return En(e,"iterate",yt(e)?"length":Br),Reflect.ownKeys(e)}}class $m extends qd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zm=new Kd,Jm=new $m,Qm=new Kd(!0);const xc=n=>n,Ga=n=>Reflect.getPrototypeOf(n);function eg(n,e,t){return function(...i){const r=this.__v_raw,s=Gt(r),a=gs(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?xc:e?xa:Qi;return!e&&En(s,"iterate",l?vc:Br),vn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function za(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function tg(n,e){const t={get(r){const s=this.__v_raw,a=Gt(s),o=Gt(r);n||(bi(r,o)&&En(a,"get",r),En(a,"get",o));const{has:l}=Ga(a),c=e?xc:n?xa:Qi;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&En(Gt(r),"iterate",Br),r.size},has(r){const s=this.__v_raw,a=Gt(s),o=Gt(r);return n||(bi(r,o)&&En(a,"has",r),En(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Gt(o),c=e?xc:n?xa:Qi;return!n&&En(l,"iterate",Br),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return vn(t,n?{add:za("add"),set:za("set"),delete:za("delete"),clear:za("clear")}:{add(r){const s=Gt(this),a=Ga(s),o=Gt(r),l=!e&&!ri(r)&&!xr(r)?o:r;return a.has.call(s,l)||bi(r,l)&&a.has.call(s,r)||bi(o,l)&&a.has.call(s,o)||(s.add(l),Xi(s,"add",l,l)),this},set(r,s){!e&&!ri(s)&&!xr(s)&&(s=Gt(s));const a=Gt(this),{has:o,get:l}=Ga(a);let c=o.call(a,r);c||(r=Gt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?bi(s,u)&&Xi(a,"set",r,s):Xi(a,"add",r,s),this},delete(r){const s=Gt(this),{has:a,get:o}=Ga(s);let l=a.call(s,r);l||(r=Gt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Xi(s,"delete",r,void 0),c},clear(){const r=Gt(this),s=r.size!==0,a=r.clear();return s&&Xi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=eg(r,n,e)}),t}function Iu(n,e){const t=tg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(zt(t,r)&&r in i?t:i,r,s)}const ng={get:Iu(!1,!1)},ig={get:Iu(!1,!0)},rg={get:Iu(!0,!1)};const $d=new WeakMap,Zd=new WeakMap,Jd=new WeakMap,sg=new WeakMap;function ag(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function og(n){return n.__v_skip||!Object.isExtensible(n)?0:ag(Dm(n))}function Fu(n){return xr(n)?n:Nu(n,!1,Zm,ng,$d)}function lg(n){return Nu(n,!1,Qm,ig,Zd)}function bc(n){return Nu(n,!0,Jm,rg,Jd)}function Nu(n,e,t,i,r){if(!Kt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=og(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function _s(n){return xr(n)?_s(n.__v_raw):!!(n&&n.__v_isReactive)}function xr(n){return!!(n&&n.__v_isReadonly)}function ri(n){return!!(n&&n.__v_isShallow)}function Uu(n){return n?!!n.__v_raw:!1}function Gt(n){const e=n&&n.__v_raw;return e?Gt(e):n}function cg(n){return!zt(n,"__v_skip")&&Object.isExtensible(n)&&Nd(n,"__v_skip",!0),n}const Qi=n=>Kt(n)?Fu(n):n,xa=n=>Kt(n)?bc(n):n;function Sn(n){return n?n.__v_isRef===!0:!1}function El(n){return ug(n,!1)}function ug(n,e){return Sn(n)?n:new fg(n,e)}class fg{constructor(e,t){this.dep=new Du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Gt(e),this._value=t?e:Qi(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||ri(e)||xr(e);e=i?e:Gt(e),bi(e,t)&&(this._rawValue=e,this._value=i?e:Qi(e),this.dep.trigger())}}function bo(n){return Sn(n)?n.value:n}const hg={get:(n,e,t)=>e==="__v_raw"?n:bo(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Sn(r)&&!Sn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Qd(n){return _s(n)?n:new Proxy(n,hg)}class dg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_a-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$t!==this)return Vd(this,!0),!0}get value(){const e=this.dep.track();return Wd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pg(n,e,t=!1){let i,r;return At(n)?i=n:(i=n.get,r=n.set),new dg(i,r,t)}const Va={},Lo=new WeakMap;let Pr;function mg(n,e=!1,t=Pr){if(t){let i=Lo.get(t);i||Lo.set(t,i=[]),i.push(n)}}function gg(n,e,t=Zt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=w=>r?w:ri(w)||r===!1||r===0?mr(w,1):mr(w);let u,f,h,p,v=!1,b=!1;if(Sn(n)?(f=()=>n.value,v=ri(n)):_s(n)?(f=()=>c(n),v=!0):yt(n)?(b=!0,v=n.some(w=>_s(w)||ri(w)),f=()=>n.map(w=>{if(Sn(w))return w.value;if(_s(w))return c(w);if(At(w))return l?l(w,2):w()})):At(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Zi();try{h()}finally{Ji()}}const w=Pr;Pr=u;try{return l?l(n,3,[p]):n(p)}finally{Pr=w}}:f=Mi,e&&r){const w=f,V=r===!0?1/0:r;f=()=>mr(w(),V)}const g=Hm(),_=()=>{u.stop(),g&&g.active&&Su(g.effects,u)};if(s&&e){const w=e;e=(...V)=>{w(...V),_()}}let E=b?new Array(n.length).fill(Va):Va;const A=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const V=u.run();if(r||v||(b?V.some((N,k)=>bi(N,E[k])):bi(V,E))){h&&h();const N=Pr;Pr=u;try{const k=[V,E===Va?void 0:b&&E[0]===Va?[]:E,p];E=V,l?l(e,3,k):e(...k)}finally{Pr=N}}}else u.run()};return o&&o(A),u=new Gd(f),u.scheduler=a?()=>a(A,!1):A,p=w=>mg(w,!1,u),h=u.onStop=()=>{const w=Lo.get(u);if(w){if(l)l(w,4);else for(const V of w)V();Lo.delete(u)}},e?i?A(!0):E=u.run():a?a(A.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function mr(n,e=1/0,t){if(e<=0||!Kt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Sn(n))mr(n.value,e,t);else if(yt(n))for(let i=0;i<n.length;i++)mr(n[i],e,t);else if(Pd(n)||gs(n))n.forEach(i=>{mr(i,e,t)});else if(Id(n)){for(const i in n)mr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Da(n,e,t,i){try{return i?n(...i):n()}catch(r){nl(r,e,t)}}function wi(n,e,t,i){if(At(n)){const r=Da(n,e,t,i);return r&&Dd(r)&&r.catch(s=>{nl(s,e,t)}),r}if(yt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wi(n[s],e,t,i));return r}}function nl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Zt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Zi(),Da(s,null,10,[n,l,c]),Ji();return}}_g(n,t,r,i,a)}function _g(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Rn=[];let gi=-1;const vs=[];let pr=null,fs=0;const ep=Promise.resolve();let Io=null;function vg(n){const e=Io||ep;return n?e.then(this?n.bind(this):n):e}function xg(n){let e=gi+1,t=Rn.length;for(;e<t;){const i=e+t>>>1,r=Rn[i],s=ba(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ou(n){if(!(n.flags&1)){const e=ba(n),t=Rn[Rn.length-1];!t||!(n.flags&2)&&e>=ba(t)?Rn.push(n):Rn.splice(xg(e),0,n),n.flags|=1,tp()}}function tp(){Io||(Io=ep.then(ip))}function bg(n){yt(n)?vs.push(...n):pr&&n.id===-1?pr.splice(fs+1,0,n):n.flags&1||(vs.push(n),n.flags|=1),tp()}function wf(n,e,t=gi+1){for(;t<Rn.length;t++){const i=Rn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Rn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function np(n){if(vs.length){const e=[...new Set(vs)].sort((t,i)=>ba(t)-ba(i));if(vs.length=0,pr){pr.push(...e);return}for(pr=e,fs=0;fs<pr.length;fs++){const t=pr[fs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}pr=null,fs=0}}const ba=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ip(n){try{for(gi=0;gi<Rn.length;gi++){const e=Rn[gi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gi<Rn.length;gi++){const e=Rn[gi];e&&(e.flags&=-2)}gi=-1,Rn.length=0,np(),Io=null,(Rn.length||vs.length)&&ip()}}let yi=null,rp=null;function Fo(n){const e=yi;return yi=n,rp=n&&n.type.__scopeId||null,e}function yg(n,e=yi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Gf(-1);const s=Fo(e);let a;try{a=n(...r)}finally{Fo(s),i._d&&Gf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Sr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Zi(),wi(l,t,8,[n.el,o,n,e]),Ji())}}function Eg(n,e){if(Cn){let t=Cn.provides;const i=Cn.parent&&Cn.parent.provides;i===t&&(t=Cn.provides=Object.create(i)),t[n]=e}}function yo(n,e,t=!1){const i=S_();if(i||xs){let r=xs?xs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&At(e)?e.call(i&&i.proxy):e}}const Sg=Symbol.for("v-scx"),Mg=()=>yo(Sg);function Sl(n,e,t){return sp(n,e,t)}function sp(n,e,t=Zt){const{immediate:i,deep:r,flush:s,once:a}=t,o=vn({},t),l=e&&i||!e&&s!=="post";let c;if(Ea){if(s==="sync"){const p=Mg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mi,p.resume=Mi,p.pause=Mi,p}}const u=Cn;o.call=(p,v,b)=>wi(p,u,v,b);let f=!1;s==="post"?o.scheduler=p=>{Dn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():Ou(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=gg(n,e,o);return Ea&&(c?c.push(h):l&&h()),h}function Tg(n,e,t){const i=this.proxy,r=tn(n)?n.includes(".")?ap(i,n):()=>i[n]:n.bind(i,i);let s;At(e)?s=e:(s=e.handler,t=e);const a=La(this),o=sp(r,s.bind(i),t);return a(),o}function ap(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ag=Symbol("_vte"),Rg=n=>n.__isTeleport,wg=Symbol("_leaveCb");function Bu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Bu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Cg(n,e){return At(n)?vn({name:n.name},e,{setup:n}):n}function op(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Cf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const No=new WeakMap;function ua(n,e,t,i,r=!1){if(yt(n)){n.forEach((b,g)=>ua(b,e&&(yt(e)?e[g]:e),t,i,r));return}if(fa(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ua(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Hu(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Zt?o.refs={}:o.refs,f=o.setupState,h=Gt(f),p=f===Zt?Cd:b=>Cf(u,b)?!1:zt(h,b),v=(b,g)=>!(g&&Cf(u,g));if(c!=null&&c!==l){if(Pf(e),tn(c))u[c]=null,p(c)&&(f[c]=null);else if(Sn(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(At(l))Da(l,o,12,[a,u]);else{const b=tn(l),g=Sn(l);if(b||g){const _=()=>{if(n.f){const E=b?p(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)yt(E)&&Su(E,s);else if(yt(E))E.includes(s)||E.push(s);else if(b)u[l]=[s],p(l)&&(f[l]=u[l]);else{const A=[s];v(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else b?(u[l]=a,p(l)&&(f[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{_(),No.delete(n)};E.id=-1,No.set(n,E),Dn(E,t)}else Pf(n),_()}}}function Pf(n){const e=No.get(n);e&&(e.flags|=8,No.delete(n))}tl().requestIdleCallback;tl().cancelIdleCallback;const fa=n=>!!n.type.__asyncLoader,lp=n=>n.type.__isKeepAlive;function Pg(n,e){cp(n,"a",e)}function Dg(n,e){cp(n,"da",e)}function cp(n,e,t=Cn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(il(e,i,t),t){let r=t.parent;for(;r&&r.parent;)lp(r.parent.vnode)&&Lg(i,e,t,r),r=r.parent}}function Lg(n,e,t,i){const r=il(e,n,i,!0);Gu(()=>{Su(i[e],r)},t)}function il(n,e,t=Cn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Zi();const o=La(t),l=wi(e,t,n,a);return o(),Ji(),l});return i?r.unshift(s):r.push(s),s}}const rr=n=>(e,t=Cn)=>{(!Ea||n==="sp")&&il(n,(...i)=>e(...i),t)},Ig=rr("bm"),up=rr("m"),Fg=rr("bu"),Ng=rr("u"),Ug=rr("bum"),Gu=rr("um"),Og=rr("sp"),Bg=rr("rtg"),Gg=rr("rtc");function zg(n,e=Cn){il("ec",n,e)}const Vg=Symbol.for("v-ndc"),yc=n=>n?Dp(n)?Hu(n):yc(n.parent):null,ha=vn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yc(n.parent),$root:n=>yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hp(n),$forceUpdate:n=>n.f||(n.f=()=>{Ou(n.update)}),$nextTick:n=>n.n||(n.n=vg.bind(n.proxy)),$watch:n=>Tg.bind(n)}),Ml=(n,e)=>n!==Zt&&!n.__isScriptSetup&&zt(n,e),kg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ml(i,e))return a[e]=1,i[e];if(r!==Zt&&zt(r,e))return a[e]=2,r[e];if(zt(s,e))return a[e]=3,s[e];if(t!==Zt&&zt(t,e))return a[e]=4,t[e];Ec&&(a[e]=0)}}const c=ha[e];let u,f;if(c)return e==="$attrs"&&En(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Zt&&zt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,zt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ml(r,e)?(r[e]=t,!0):i!==Zt&&zt(i,e)?(i[e]=t,!0):zt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Zt&&o[0]!=="$"&&zt(n,o)||Ml(e,o)||zt(s,o)||zt(i,o)||zt(ha,o)||zt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:zt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Df(n){return yt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ec=!0;function Hg(n){const e=hp(n),t=n.proxy,i=n.ctx;Ec=!1,e.beforeCreate&&Lf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:b,deactivated:g,beforeDestroy:_,beforeUnmount:E,destroyed:A,unmounted:w,render:V,renderTracked:N,renderTriggered:k,errorCaptured:T,serverPrefetch:B,expose:Z,inheritAttrs:Y,components:fe,directives:Ee,filters:Me}=e;if(c&&Wg(c,i,null),a)for(const re in a){const Re=a[re];At(Re)&&(i[re]=Re.bind(t))}if(r){const re=r.call(t,t);Kt(re)&&(n.data=Fu(re))}if(Ec=!0,s)for(const re in s){const Re=s[re],Ue=At(Re)?Re.bind(t,t):At(Re.get)?Re.get.bind(t,t):Mi,Ke=!At(Re)&&At(Re.set)?Re.set.bind(t):Mi,et=C_({get:Ue,set:Ke});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>et.value,set:nt=>et.value=nt})}if(o)for(const re in o)fp(o[re],i,t,re);if(l){const re=At(l)?l.call(t):l;Reflect.ownKeys(re).forEach(Re=>{Eg(Re,re[Re])})}u&&Lf(u,n,"c");function ce(re,Re){yt(Re)?Re.forEach(Ue=>re(Ue.bind(t))):Re&&re(Re.bind(t))}if(ce(Ig,f),ce(up,h),ce(Fg,p),ce(Ng,v),ce(Pg,b),ce(Dg,g),ce(zg,T),ce(Gg,N),ce(Bg,k),ce(Ug,E),ce(Gu,w),ce(Og,B),yt(Z))if(Z.length){const re=n.exposed||(n.exposed={});Z.forEach(Re=>{Object.defineProperty(re,Re,{get:()=>t[Re],set:Ue=>t[Re]=Ue,enumerable:!0})})}else n.exposed||(n.exposed={});V&&n.render===Mi&&(n.render=V),Y!=null&&(n.inheritAttrs=Y),fe&&(n.components=fe),Ee&&(n.directives=Ee),B&&op(n)}function Wg(n,e,t=Mi){yt(n)&&(n=Sc(n));for(const i in n){const r=n[i];let s;Kt(r)?"default"in r?s=yo(r.from||i,r.default,!0):s=yo(r.from||i):s=yo(r),Sn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Lf(n,e,t){wi(yt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fp(n,e,t,i){let r=i.includes(".")?ap(t,i):()=>t[i];if(tn(n)){const s=e[n];At(s)&&Sl(r,s)}else if(At(n))Sl(r,n.bind(t));else if(Kt(n))if(yt(n))n.forEach(s=>fp(s,e,t,i));else{const s=At(n.handler)?n.handler.bind(t):e[n.handler];At(s)&&Sl(r,s,n)}}function hp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Uo(l,c,a,!0)),Uo(l,e,a)),Kt(e)&&s.set(e,l),l}function Uo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Uo(n,s,t,!0),r&&r.forEach(a=>Uo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Xg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Xg={data:If,props:Ff,emits:Ff,methods:ta,computed:ta,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:ta,directives:ta,watch:Yg,provide:If,inject:jg};function If(n,e){return e?n?function(){return vn(At(n)?n.call(this,this):n,At(e)?e.call(this,this):e)}:e:n}function jg(n,e){return ta(Sc(n),Sc(e))}function Sc(n){if(yt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tn(n,e){return n?[...new Set([].concat(n,e))]:e}function ta(n,e){return n?vn(Object.create(null),n,e):e}function Ff(n,e){return n?yt(n)&&yt(e)?[...new Set([...n,...e])]:vn(Object.create(null),Df(n),Df(e??{})):e}function Yg(n,e){if(!n)return e;if(!e)return n;const t=vn(Object.create(null),n);for(const i in e)t[i]=Tn(n[i],e[i]);return t}function dp(){return{app:null,config:{isNativeTag:Cd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function Kg(n,e){return function(i,r=null){At(i)||(i=vn({},i)),r!=null&&!Kt(r)&&(r=null);const s=dp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:qg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:P_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&At(u.install)?(a.add(u),u.install(c,...f)):At(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||qi(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Hu(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(wi(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=xs;xs=c;try{return u()}finally{xs=f}}};return c}}let xs=null;const $g=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${Vr(e)}Modifiers`];function Zg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Zt;let r=t;const s=e.startsWith("update:"),a=s&&$g(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>tn(u)?u.trim():u)),a.number&&(r=t.map(Fm)));let o,l=i[o=gl(e)]||i[o=gl(ni(e))];!l&&s&&(l=i[o=gl(Vr(e))]),l&&wi(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,wi(c,n,6,r)}}const Jg=new WeakMap;function pp(n,e,t=!1){const i=t?Jg:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!At(n)){const l=c=>{const u=pp(c,e,!0);u&&(o=!0,vn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Kt(n)&&i.set(n,null),null):(yt(s)?s.forEach(l=>a[l]=null):vn(a,s),Kt(n)&&i.set(n,a),a)}function rl(n,e){return!n||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),zt(n,e[0].toLowerCase()+e.slice(1))||zt(n,Vr(e))||zt(n,e))}function Nf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:b}=n,g=Fo(n);let _,E;try{if(t.shapeFlag&4){const w=r||i,V=w;_=xi(c.call(V,w,u,f,p,h,v)),E=o}else{const w=e;_=xi(w.length>1?w(f,{attrs:o,slots:a,emit:l}):w(f,null)),E=e.props?o:Qg(o)}}catch(w){da.length=0,nl(w,n,1),_=qi(br)}let A=_;if(E&&b!==!1){const w=Object.keys(E),{shapeFlag:V}=A;w.length&&V&7&&(s&&w.some(Qo)&&(E=e_(E,s)),A=Ms(A,E,!1,!0))}return t.dirs&&(A=Ms(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Bu(A,t.transition),_=A,Fo(g),_}const Qg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Jo(t))&&((e||(e={}))[t]=n[t]);return e},e_=(n,e)=>{const t={};for(const i in n)(!Qo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function t_(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(mp(a,i,h)&&!rl(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Uf(i,a,c):!0:!!a;return!1}function Uf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(mp(e,n,s)&&!rl(t,s))return!0}return!1}function mp(n,e,t){const i=n[t],r=e[t];return t==="style"&&Kt(i)&&Kt(r)?!Ru(i,r):i!==r}function n_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const gp={},_p=()=>Object.create(gp),vp=n=>Object.getPrototypeOf(n)===gp;function i_(n,e,t,i=!1){const r={},s=_p();n.propsDefaults=Object.create(null),xp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:lg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function r_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Gt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(rl(n.emitsOptions,h))continue;const p=e[h];if(l)if(zt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=ni(h);r[v]=Mc(l,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{xp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!zt(e,f)&&((u=Vr(f))===f||!zt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Mc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!zt(e,f))&&(delete s[f],c=!0)}c&&Xi(n.attrs,"set","")}function xp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(oa(l))continue;const c=e[l];let u;r&&zt(r,u=ni(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:rl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Gt(t),c=o||Zt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Mc(r,l,f,c[f],n,!zt(c,f))}}return a}function Mc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=zt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&At(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=La(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Vr(t))&&(i=!0))}return i}const s_=new WeakMap;function bp(n,e,t=!1){const i=t?s_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!At(n)){const u=f=>{l=!0;const[h,p]=bp(f,e,!0);vn(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Kt(n)&&i.set(n,ms),ms;if(yt(s))for(let u=0;u<s.length;u++){const f=ni(s[u]);Of(f)&&(a[f]=Zt)}else if(s)for(const u in s){const f=ni(u);if(Of(f)){const h=s[u],p=a[f]=yt(h)||At(h)?{type:h}:vn({},h),v=p.type;let b=!1,g=!0;if(yt(v))for(let _=0;_<v.length;++_){const E=v[_],A=At(E)&&E.name;if(A==="Boolean"){b=!0;break}else A==="String"&&(g=!1)}else b=At(v)&&v.name==="Boolean";p[0]=b,p[1]=g,(b||zt(p,"default"))&&o.push(f)}}const c=[a,o];return Kt(n)&&i.set(n,c),c}function Of(n){return n[0]!=="$"&&!oa(n)}const zu=n=>n==="_"||n==="_ctx"||n==="$stable",Vu=n=>yt(n)?n.map(xi):[xi(n)],a_=(n,e,t)=>{if(e._n)return e;const i=yg((...r)=>Vu(e(...r)),t);return i._c=!1,i},yp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zu(r))continue;const s=n[r];if(At(s))e[r]=a_(r,s,i);else if(s!=null){const a=Vu(s);e[r]=()=>a}}},Ep=(n,e)=>{const t=Vu(e);n.slots.default=()=>t},Sp=(n,e,t)=>{for(const i in e)(t||!zu(i))&&(n[i]=e[i])},o_=(n,e,t)=>{const i=n.slots=_p();if(n.vnode.shapeFlag&32){const r=e._;r?(Sp(i,e,t),t&&Nd(i,"_",r,!0)):yp(e,i)}else e&&Ep(n,e)},l_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Zt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Sp(r,e,t):(s=!e.$stable,yp(e,r)),a=e}else e&&(Ep(n,e),a={default:1});if(s)for(const o in r)!zu(o)&&a[o]==null&&delete r[o]},Dn=d_;function c_(n){return u_(n)}function u_(n,e){const t=tl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Mi,insertStaticContent:v}=n,b=(R,m,he,Se=null,me=null,we=null,De=void 0,Ne=null,F=!!m.dynamicChildren)=>{if(R===m)return;R&&!Hs(R,m)&&(Se=Ze(R),nt(R,me,we,!0),R=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:ue,ref:ze,shapeFlag:Ae}=m;switch(ue){case sl:g(R,m,he,Se);break;case br:_(R,m,he,Se);break;case Al:R==null&&E(m,he,Se,De);break;case Hi:fe(R,m,he,Se,me,we,De,Ne,F);break;default:Ae&1?V(R,m,he,Se,me,we,De,Ne,F):Ae&6?Ee(R,m,he,Se,me,we,De,Ne,F):(Ae&64||Ae&128)&&ue.process(R,m,he,Se,me,we,De,Ne,F,ut)}ze!=null&&me?ua(ze,R&&R.ref,we,m||R,!m):ze==null&&R&&R.ref!=null&&ua(R.ref,null,we,R,!0)},g=(R,m,he,Se)=>{if(R==null)i(m.el=o(m.children),he,Se);else{const me=m.el=R.el;m.children!==R.children&&c(me,m.children)}},_=(R,m,he,Se)=>{R==null?i(m.el=l(m.children||""),he,Se):m.el=R.el},E=(R,m,he,Se)=>{[R.el,R.anchor]=v(R.children,m,he,Se,R.el,R.anchor)},A=({el:R,anchor:m},he,Se)=>{let me;for(;R&&R!==m;)me=h(R),i(R,he,Se),R=me;i(m,he,Se)},w=({el:R,anchor:m})=>{let he;for(;R&&R!==m;)he=h(R),r(R),R=he;r(m)},V=(R,m,he,Se,me,we,De,Ne,F)=>{if(m.type==="svg"?De="svg":m.type==="math"&&(De="mathml"),R==null)N(m,he,Se,me,we,De,Ne,F);else{const ue=R.el&&R.el._isVueCE?R.el:null;try{ue&&ue._beginPatch(),B(R,m,me,we,De,Ne,F)}finally{ue&&ue._endPatch()}}},N=(R,m,he,Se,me,we,De,Ne)=>{let F,ue;const{props:ze,shapeFlag:Ae,transition:_e,dirs:it}=R;if(F=R.el=a(R.type,we,ze&&ze.is,ze),Ae&8?u(F,R.children):Ae&16&&T(R.children,F,null,Se,me,Tl(R,we),De,Ne),it&&Sr(R,null,Se,"created"),k(F,R,R.scopeId,De,Se),ze){for(const y in ze)y!=="value"&&!oa(y)&&s(F,y,null,ze[y],we,Se);"value"in ze&&s(F,"value",null,ze.value,we),(ue=ze.onVnodeBeforeMount)&&di(ue,Se,R)}it&&Sr(R,null,Se,"beforeMount");const P=f_(me,_e);P&&_e.beforeEnter(F),i(F,m,he),((ue=ze&&ze.onVnodeMounted)||P||it)&&Dn(()=>{try{ue&&di(ue,Se,R),P&&_e.enter(F),it&&Sr(R,null,Se,"mounted")}finally{}},me)},k=(R,m,he,Se,me)=>{if(he&&p(R,he),Se)for(let we=0;we<Se.length;we++)p(R,Se[we]);if(me){let we=me.subTree;if(m===we||Rp(we.type)&&(we.ssContent===m||we.ssFallback===m)){const De=me.vnode;k(R,De,De.scopeId,De.slotScopeIds,me.parent)}}},T=(R,m,he,Se,me,we,De,Ne,F=0)=>{for(let ue=F;ue<R.length;ue++){const ze=R[ue]=Ne?Wi(R[ue]):xi(R[ue]);b(null,ze,m,he,Se,me,we,De,Ne)}},B=(R,m,he,Se,me,we,De)=>{const Ne=m.el=R.el;let{patchFlag:F,dynamicChildren:ue,dirs:ze}=m;F|=R.patchFlag&16;const Ae=R.props||Zt,_e=m.props||Zt;let it;if(he&&Mr(he,!1),(it=_e.onVnodeBeforeUpdate)&&di(it,he,m,R),ze&&Sr(m,R,he,"beforeUpdate"),he&&Mr(he,!0),(Ae.innerHTML&&_e.innerHTML==null||Ae.textContent&&_e.textContent==null)&&u(Ne,""),ue?Z(R.dynamicChildren,ue,Ne,he,Se,Tl(m,me),we):De||Re(R,m,Ne,null,he,Se,Tl(m,me),we,!1),F>0){if(F&16)Y(Ne,Ae,_e,he,me);else if(F&2&&Ae.class!==_e.class&&s(Ne,"class",null,_e.class,me),F&4&&s(Ne,"style",Ae.style,_e.style,me),F&8){const P=m.dynamicProps;for(let y=0;y<P.length;y++){const K=P[y],be=Ae[K],Ce=_e[K];(Ce!==be||K==="value")&&s(Ne,K,be,Ce,me,he)}}F&1&&R.children!==m.children&&u(Ne,m.children)}else!De&&ue==null&&Y(Ne,Ae,_e,he,me);((it=_e.onVnodeUpdated)||ze)&&Dn(()=>{it&&di(it,he,m,R),ze&&Sr(m,R,he,"updated")},Se)},Z=(R,m,he,Se,me,we,De)=>{for(let Ne=0;Ne<m.length;Ne++){const F=R[Ne],ue=m[Ne],ze=F.el&&(F.type===Hi||!Hs(F,ue)||F.shapeFlag&198)?f(F.el):he;b(F,ue,ze,null,Se,me,we,De,!0)}},Y=(R,m,he,Se,me)=>{if(m!==he){if(m!==Zt)for(const we in m)!oa(we)&&!(we in he)&&s(R,we,m[we],null,me,Se);for(const we in he){if(oa(we))continue;const De=he[we],Ne=m[we];De!==Ne&&we!=="value"&&s(R,we,Ne,De,me,Se)}"value"in he&&s(R,"value",m.value,he.value,me)}},fe=(R,m,he,Se,me,we,De,Ne,F)=>{const ue=m.el=R?R.el:o(""),ze=m.anchor=R?R.anchor:o("");let{patchFlag:Ae,dynamicChildren:_e,slotScopeIds:it}=m;it&&(Ne=Ne?Ne.concat(it):it),R==null?(i(ue,he,Se),i(ze,he,Se),T(m.children||[],he,ze,me,we,De,Ne,F)):Ae>0&&Ae&64&&_e&&R.dynamicChildren&&R.dynamicChildren.length===_e.length?(Z(R.dynamicChildren,_e,he,me,we,De,Ne),(m.key!=null||me&&m===me.subTree)&&Mp(R,m,!0)):Re(R,m,he,ze,me,we,De,Ne,F)},Ee=(R,m,he,Se,me,we,De,Ne,F)=>{m.slotScopeIds=Ne,R==null?m.shapeFlag&512?me.ctx.activate(m,he,Se,De,F):Me(m,he,Se,me,we,De,F):te(R,m,F)},Me=(R,m,he,Se,me,we,De)=>{const Ne=R.component=E_(R,Se,me);if(lp(R)&&(Ne.ctx.renderer=ut),M_(Ne,!1,De),Ne.asyncDep){if(me&&me.registerDep(Ne,ce,De),!R.el){const F=Ne.subTree=qi(br);_(null,F,m,he),R.placeholder=F.el}}else ce(Ne,R,m,he,me,we,De)},te=(R,m,he)=>{const Se=m.component=R.component;if(t_(R,m,he))if(Se.asyncDep&&!Se.asyncResolved){re(Se,m,he);return}else Se.next=m,Se.update();else m.el=R.el,Se.vnode=m},ce=(R,m,he,Se,me,we,De)=>{const Ne=()=>{if(R.isMounted){let{next:Ae,bu:_e,u:it,parent:P,vnode:y}=R;{const Xe=Tp(R);if(Xe){Ae&&(Ae.el=y.el,re(R,Ae,De)),Xe.asyncDep.then(()=>{Dn(()=>{R.isUnmounted||ue()},me)});return}}let K=Ae,be;Mr(R,!1),Ae?(Ae.el=y.el,re(R,Ae,De)):Ae=y,_e&&_l(_e),(be=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&di(be,P,Ae,y),Mr(R,!0);const Ce=Nf(R),ke=R.subTree;R.subTree=Ce,b(ke,Ce,f(ke.el),Ze(ke),R,me,we),Ae.el=Ce.el,K===null&&n_(R,Ce.el),it&&Dn(it,me),(be=Ae.props&&Ae.props.onVnodeUpdated)&&Dn(()=>di(be,P,Ae,y),me)}else{let Ae;const{el:_e,props:it}=m,{bm:P,m:y,parent:K,root:be,type:Ce}=R,ke=fa(m);Mr(R,!1),P&&_l(P),!ke&&(Ae=it&&it.onVnodeBeforeMount)&&di(Ae,K,m),Mr(R,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(Ce,R.parent?R.parent.type:void 0);const Xe=R.subTree=Nf(R);b(null,Xe,he,Se,R,me,we),m.el=Xe.el}if(y&&Dn(y,me),!ke&&(Ae=it&&it.onVnodeMounted)){const Xe=m;Dn(()=>di(Ae,K,Xe),me)}(m.shapeFlag&256||K&&fa(K.vnode)&&K.vnode.shapeFlag&256)&&R.a&&Dn(R.a,me),R.isMounted=!0,m=he=Se=null}};R.scope.on();const F=R.effect=new Gd(Ne);R.scope.off();const ue=R.update=F.run.bind(F),ze=R.job=F.runIfDirty.bind(F);ze.i=R,ze.id=R.uid,F.scheduler=()=>Ou(ze),Mr(R,!0),ue()},re=(R,m,he)=>{m.component=R;const Se=R.vnode.props;R.vnode=m,R.next=null,r_(R,m.props,Se,he),l_(R,m.children,he),Zi(),wf(R),Ji()},Re=(R,m,he,Se,me,we,De,Ne,F=!1)=>{const ue=R&&R.children,ze=R?R.shapeFlag:0,Ae=m.children,{patchFlag:_e,shapeFlag:it}=m;if(_e>0){if(_e&128){Ke(ue,Ae,he,Se,me,we,De,Ne,F);return}else if(_e&256){Ue(ue,Ae,he,Se,me,we,De,Ne,F);return}}it&8?(ze&16&&Te(ue,me,we),Ae!==ue&&u(he,Ae)):ze&16?it&16?Ke(ue,Ae,he,Se,me,we,De,Ne,F):Te(ue,me,we,!0):(ze&8&&u(he,""),it&16&&T(Ae,he,Se,me,we,De,Ne,F))},Ue=(R,m,he,Se,me,we,De,Ne,F)=>{R=R||ms,m=m||ms;const ue=R.length,ze=m.length,Ae=Math.min(ue,ze);let _e;for(_e=0;_e<Ae;_e++){const it=m[_e]=F?Wi(m[_e]):xi(m[_e]);b(R[_e],it,he,null,me,we,De,Ne,F)}ue>ze?Te(R,me,we,!0,!1,Ae):T(m,he,Se,me,we,De,Ne,F,Ae)},Ke=(R,m,he,Se,me,we,De,Ne,F)=>{let ue=0;const ze=m.length;let Ae=R.length-1,_e=ze-1;for(;ue<=Ae&&ue<=_e;){const it=R[ue],P=m[ue]=F?Wi(m[ue]):xi(m[ue]);if(Hs(it,P))b(it,P,he,null,me,we,De,Ne,F);else break;ue++}for(;ue<=Ae&&ue<=_e;){const it=R[Ae],P=m[_e]=F?Wi(m[_e]):xi(m[_e]);if(Hs(it,P))b(it,P,he,null,me,we,De,Ne,F);else break;Ae--,_e--}if(ue>Ae){if(ue<=_e){const it=_e+1,P=it<ze?m[it].el:Se;for(;ue<=_e;)b(null,m[ue]=F?Wi(m[ue]):xi(m[ue]),he,P,me,we,De,Ne,F),ue++}}else if(ue>_e)for(;ue<=Ae;)nt(R[ue],me,we,!0),ue++;else{const it=ue,P=ue,y=new Map;for(ue=P;ue<=_e;ue++){const Ye=m[ue]=F?Wi(m[ue]):xi(m[ue]);Ye.key!=null&&y.set(Ye.key,ue)}let K,be=0;const Ce=_e-P+1;let ke=!1,Xe=0;const ye=new Array(Ce);for(ue=0;ue<Ce;ue++)ye[ue]=0;for(ue=it;ue<=Ae;ue++){const Ye=R[ue];if(be>=Ce){nt(Ye,me,we,!0);continue}let Fe;if(Ye.key!=null)Fe=y.get(Ye.key);else for(K=P;K<=_e;K++)if(ye[K-P]===0&&Hs(Ye,m[K])){Fe=K;break}Fe===void 0?nt(Ye,me,we,!0):(ye[Fe-P]=ue+1,Fe>=Xe?Xe=Fe:ke=!0,b(Ye,m[Fe],he,null,me,we,De,Ne,F),be++)}const Pe=ke?h_(ye):ms;for(K=Pe.length-1,ue=Ce-1;ue>=0;ue--){const Ye=P+ue,Fe=m[Ye],Ve=m[Ye+1],He=Ye+1<ze?Ve.el||Ap(Ve):Se;ye[ue]===0?b(null,Fe,he,He,me,we,De,Ne,F):ke&&(K<0||ue!==Pe[K]?et(Fe,he,He,2):K--)}}},et=(R,m,he,Se,me=null)=>{const{el:we,type:De,transition:Ne,children:F,shapeFlag:ue}=R;if(ue&6){et(R.component.subTree,m,he,Se);return}if(ue&128){R.suspense.move(m,he,Se);return}if(ue&64){De.move(R,m,he,ut);return}if(De===Hi){i(we,m,he);for(let Ae=0;Ae<F.length;Ae++)et(F[Ae],m,he,Se);i(R.anchor,m,he);return}if(De===Al){A(R,m,he);return}if(Se!==2&&ue&1&&Ne)if(Se===0)Ne.beforeEnter(we),i(we,m,he),Dn(()=>Ne.enter(we),me);else{const{leave:Ae,delayLeave:_e,afterLeave:it}=Ne,P=()=>{R.ctx.isUnmounted?r(we):i(we,m,he)},y=()=>{we._isLeaving&&we[wg](!0),Ae(we,()=>{P(),it&&it()})};_e?_e(we,P,y):y()}else i(we,m,he)},nt=(R,m,he,Se=!1,me=!1)=>{const{type:we,props:De,ref:Ne,children:F,dynamicChildren:ue,shapeFlag:ze,patchFlag:Ae,dirs:_e,cacheIndex:it,memo:P}=R;if(Ae===-2&&(me=!1),Ne!=null&&(Zi(),ua(Ne,null,he,R,!0),Ji()),it!=null&&(m.renderCache[it]=void 0),ze&256){m.ctx.deactivate(R);return}const y=ze&1&&_e,K=!fa(R);let be;if(K&&(be=De&&De.onVnodeBeforeUnmount)&&di(be,m,R),ze&6)ft(R.component,he,Se);else{if(ze&128){R.suspense.unmount(he,Se);return}y&&Sr(R,null,m,"beforeUnmount"),ze&64?R.type.remove(R,m,he,ut,Se):ue&&!ue.hasOnce&&(we!==Hi||Ae>0&&Ae&64)?Te(ue,m,he,!1,!0):(we===Hi&&Ae&384||!me&&ze&16)&&Te(F,m,he),Se&&Mt(R)}const Ce=P!=null&&it==null;(K&&(be=De&&De.onVnodeUnmounted)||y||Ce)&&Dn(()=>{be&&di(be,m,R),y&&Sr(R,null,m,"unmounted"),Ce&&(R.el=null)},he)},Mt=R=>{const{type:m,el:he,anchor:Se,transition:me}=R;if(m===Hi){Ut(he,Se);return}if(m===Al){w(R);return}const we=()=>{r(he),me&&!me.persisted&&me.afterLeave&&me.afterLeave()};if(R.shapeFlag&1&&me&&!me.persisted){const{leave:De,delayLeave:Ne}=me,F=()=>De(he,we);Ne?Ne(R.el,we,F):F()}else we()},Ut=(R,m)=>{let he;for(;R!==m;)he=h(R),r(R),R=he;r(m)},ft=(R,m,he)=>{const{bum:Se,scope:me,job:we,subTree:De,um:Ne,m:F,a:ue}=R;Bf(F),Bf(ue),Se&&_l(Se),me.stop(),we&&(we.flags|=8,nt(De,R,m,he)),Ne&&Dn(Ne,m),Dn(()=>{R.isUnmounted=!0},m)},Te=(R,m,he,Se=!1,me=!1,we=0)=>{for(let De=we;De<R.length;De++)nt(R[De],m,he,Se,me)},Ze=R=>{if(R.shapeFlag&6)return Ze(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const m=h(R.anchor||R.el),he=m&&m[Ag];return he?h(he):m};let je=!1;const ct=(R,m,he)=>{let Se;R==null?m._vnode&&(nt(m._vnode,null,null,!0),Se=m._vnode.component):b(m._vnode||null,R,m,null,null,null,he),m._vnode=R,je||(je=!0,wf(Se),np(),je=!1)},ut={p:b,um:nt,m:et,r:Mt,mt:Me,mc:T,pc:Re,pbc:Z,n:Ze,o:n};return{render:ct,hydrate:void 0,createApp:Kg(ct)}}function Tl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Mr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function f_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Mp(n,e,t=!1){const i=n.children,r=e.children;if(yt(i)&&yt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Wi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Mp(a,o)),o.type===sl&&(o.patchFlag===-1&&(o=r[s]=Wi(o)),o.el=a.el),o.type===br&&!o.el&&(o.el=a.el)}}function h_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Tp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tp(e)}function Bf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ap(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ap(e.subTree):null}const Rp=n=>n.__isSuspense;function d_(n,e){e&&e.pendingBranch?yt(n)?e.effects.push(...n):e.effects.push(n):bg(n)}const Hi=Symbol.for("v-fgt"),sl=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),Al=Symbol.for("v-stc"),da=[];let Gn=null;function Eo(n=!1){da.push(Gn=n?null:[])}function p_(){da.pop(),Gn=da[da.length-1]||null}let ya=1;function Gf(n,e=!1){ya+=n,n<0&&Gn&&e&&(Gn.hasOnce=!0)}function wp(n){return n.dynamicChildren=ya>0?Gn||ms:null,p_(),ya>0&&Gn&&Gn.push(n),n}function Rl(n,e,t,i,r,s){return wp(Lr(n,e,t,i,r,s,!0))}function m_(n,e,t,i,r){return wp(qi(n,e,t,i,r,!0))}function Cp(n){return n?n.__v_isVNode===!0:!1}function Hs(n,e){return n.type===e.type&&n.key===e.key}const Pp=({key:n})=>n??null,So=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?tn(n)||Sn(n)||At(n)?{i:yi,r:n,k:e,f:!!t}:n:null);function Lr(n,e=null,t=null,i=0,r=null,s=n===Hi?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pp(e),ref:e&&So(e),scopeId:rp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yi};return o?(ku(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=tn(t)?8:16),ya>0&&!a&&Gn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gn.push(l),l}const qi=g_;function g_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vg)&&(n=br),Cp(n)){const o=Ms(n,e,!0);return t&&ku(o,t),ya>0&&!s&&Gn&&(o.shapeFlag&6?Gn[Gn.indexOf(n)]=o:Gn.push(o)),o.patchFlag=-2,o}if(w_(n)&&(n=n.__vccOpts),e){e=__(e);let{class:o,style:l}=e;o&&!tn(o)&&(e.class=Au(o)),Kt(l)&&(Uu(l)&&!yt(l)&&(l=vn({},l)),e.style=Tu(l))}const a=tn(n)?1:Rp(n)?128:Rg(n)?64:Kt(n)?4:At(n)?2:0;return Lr(n,e,t,i,r,a,s,!0)}function __(n){return n?Uu(n)||vp(n)?vn({},n):n:null}function Ms(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?x_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pp(c),ref:e&&e.ref?t&&s?yt(s)?s.concat(So(e)):[s,So(e)]:So(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Hi?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Bu(u,l.clone(u)),u}function v_(n=" ",e=0){return qi(sl,null,n,e)}function zf(n="",e=!1){return e?(Eo(),m_(br,null,n)):qi(br,null,n)}function xi(n){return n==null||typeof n=="boolean"?qi(br):yt(n)?qi(Hi,null,n.slice()):Cp(n)?Wi(n):qi(sl,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function ku(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(yt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ku(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!vp(e)?e._ctx=yi:r===3&&yi&&(yi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else At(e)?(e={default:e,_ctx:yi},t=32):(e=String(e),i&64?(t=16,e=[v_(e)]):t=8);n.children=e,n.shapeFlag|=t}function x_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Au([e.class,i.class]));else if(r==="style")e.style=Tu([e.style,i.style]);else if(Jo(r)){const s=e[r],a=i[r];a&&s!==a&&!(yt(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!Qo(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function di(n,e,t,i=null){wi(n,e,7,[t,i])}const b_=dp();let y_=0;function E_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||b_,s={uid:y_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new km(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bp(i,r),emitsOptions:pp(i,r),emit:null,emitted:null,propsDefaults:Zt,inheritAttrs:i.inheritAttrs,ctx:Zt,data:Zt,props:Zt,attrs:Zt,slots:Zt,refs:Zt,setupState:Zt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Zg.bind(null,s),n.ce&&n.ce(s),s}let Cn=null;const S_=()=>Cn||yi;let Oo,Tc;{const n=tl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Oo=e("__VUE_INSTANCE_SETTERS__",t=>Cn=t),Tc=e("__VUE_SSR_SETTERS__",t=>Ea=t)}const La=n=>{const e=Cn;return Oo(n),n.scope.on(),()=>{n.scope.off(),Oo(e)}},Vf=()=>{Cn&&Cn.scope.off(),Oo(null)};function Dp(n){return n.vnode.shapeFlag&4}let Ea=!1;function M_(n,e=!1,t=!1){e&&Tc(e);const{props:i,children:r}=n.vnode,s=Dp(n);i_(n,i,s,e),o_(n,r,t||e);const a=s?T_(n,e):void 0;return e&&Tc(!1),a}function T_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kg);const{setup:i}=t;if(i){Zi();const r=n.setupContext=i.length>1?R_(n):null,s=La(n),a=Da(i,n,0,[n.props,r]),o=Dd(a);if(Ji(),s(),(o||n.sp)&&!fa(n)&&op(n),o){if(a.then(Vf,Vf),e)return a.then(l=>{kf(n,l)}).catch(l=>{nl(l,n,0)});n.asyncDep=a}else kf(n,a)}else Lp(n)}function kf(n,e,t){At(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Kt(e)&&(n.setupState=Qd(e)),Lp(n)}function Lp(n,e,t){const i=n.type;n.render||(n.render=i.render||Mi);{const r=La(n);Zi();try{Hg(n)}finally{Ji(),r()}}}const A_={get(n,e){return En(n,"get",""),n[e]}};function R_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,A_),slots:n.slots,emit:n.emit,expose:e}}function Hu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qd(cg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ha)return ha[t](n)},has(e,t){return t in e||t in ha}})):n.proxy}function w_(n){return At(n)&&"__vccOpts"in n}const C_=(n,e)=>pg(n,e,Ea),P_="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ac;const Hf=typeof window<"u"&&window.trustedTypes;if(Hf)try{Ac=Hf.createPolicy("vue",{createHTML:n=>n})}catch{}const Ip=Ac?n=>Ac.createHTML(n):n=>n,D_="http://www.w3.org/2000/svg",L_="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,Wf=ki&&ki.createElement("template"),I_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ki.createElementNS(D_,n):e==="mathml"?ki.createElementNS(L_,n):t?ki.createElement(n,{is:t}):ki.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ki.createTextNode(n),createComment:n=>ki.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ki.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Wf.innerHTML=Ip(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Wf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},F_=Symbol("_vtc");function N_(n,e,t){const i=n[F_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xf=Symbol("_vod"),U_=Symbol("_vsh"),O_=Symbol(""),B_=/(?:^|;)\s*display\s*:/;function G_(n,e,t){const i=n.style,r=tn(t);let s=!1;if(t&&!r){if(e)if(tn(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&na(i,o,"")}else for(const a in e)t[a]==null&&na(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?V_(n,a,!tn(e)&&e?e[a]:void 0,o)||na(i,a,o):na(i,a,"")}}else if(r){if(e!==t){const a=i[O_];a&&(t+=";"+a),i.cssText=t,s=B_.test(t)}}else e&&n.removeAttribute("style");Xf in n&&(n[Xf]=s?i.display:"",n[U_]&&(i.display="none"))}const jf=/\s*!important$/;function na(n,e,t){if(yt(t))t.forEach(i=>na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=z_(n,e);jf.test(t)?n.setProperty(Vr(i),t.replace(jf,""),"important"):n[i]=t}}const Yf=["Webkit","Moz","ms"],wl={};function z_(n,e){const t=wl[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return wl[e]=i;i=Fd(i);for(let r=0;r<Yf.length;r++){const s=Yf[r]+i;if(s in n)return wl[e]=s}return e}function V_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&tn(i)&&t===i}const qf="http://www.w3.org/1999/xlink";function Kf(n,e,t,i,r,s=zm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qf,e.slice(6,e.length)):n.setAttributeNS(qf,e,t):t==null||s&&!Ud(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ri(t)?String(t):t)}function $f(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ip(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Ud(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function k_(n,e,t,i){n.addEventListener(e,t,i)}function H_(n,e,t,i){n.removeEventListener(e,t,i)}const Zf=Symbol("_vei");function W_(n,e,t,i,r=null){const s=n[Zf]||(n[Zf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=X_(e);if(i){const c=s[e]=q_(i,r);k_(n,o,c,l)}else a&&(H_(n,o,a,l),s[e]=void 0)}}const Jf=/(?:Once|Passive|Capture)$/;function X_(n){let e;if(Jf.test(n)){e={};let i;for(;i=n.match(Jf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vr(n.slice(2)),e]}let Cl=0;const j_=Promise.resolve(),Y_=()=>Cl||(j_.then(()=>Cl=0),Cl=Date.now());function q_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wi(K_(i,t.value),e,5,[i])};return t.value=n,t.attached=Y_(),t}function K_(n,e){if(yt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$_=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?N_(n,i,a):e==="style"?G_(n,t,i):Jo(e)?Qo(e)||W_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Z_(n,e,i,a))?($f(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kf(n,e,i,a,s,e!=="value")):n._isVueCE&&(J_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!tn(i)))?$f(n,ni(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kf(n,e,i,a))};function Z_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qf(e)&&At(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qf(e)&&tn(t)?!1:e in n}function J_(n,e){const t=n._def.props;if(!t)return!1;const i=ni(e);return Array.isArray(t)?t.some(r=>ni(r)===i):Object.keys(t).some(r=>ni(r)===i)}const Q_=vn({patchProp:$_},I_);let eh;function e0(){return eh||(eh=c_(Q_))}const t0=(...n)=>{const e=e0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=i0(i);if(!r)return;const s=e._component;!At(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,n0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function n0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function i0(n){return tn(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wu="184",r0=0,th=1,s0=2,Mo=1,a0=2,ia=3,er=0,Ln=1,Qn=2,Ki=0,bs=1,nh=2,ih=3,rh=4,o0=5,Ir=100,l0=101,c0=102,u0=103,f0=104,h0=200,d0=201,p0=202,m0=203,Rc=204,wc=205,g0=206,_0=207,v0=208,x0=209,b0=210,y0=211,E0=212,S0=213,M0=214,Cc=0,Pc=1,Dc=2,Ts=3,Lc=4,Ic=5,Fc=6,Nc=7,Fp=0,T0=1,A0=2,Ti=0,Np=1,Up=2,Op=3,Bp=4,Gp=5,zp=6,Vp=7,sh="attached",R0="detached",kp=300,Gr=301,As=302,Pl=303,Dl=304,al=306,Rs=1e3,Ei=1001,Bo=1002,cn=1003,Hp=1004,ra=1005,Jt=1006,To=1007,ji=1008,Bn=1009,Wp=1010,Xp=1011,Sa=1012,Xu=1013,Ci=1014,jn=1015,tr=1016,ju=1017,Yu=1018,Ma=1020,jp=35902,Yp=35899,qp=1021,qu=1022,Yn=1023,nr=1026,Nr=1027,Ku=1028,$u=1029,zr=1030,Zu=1031,Ju=1033,Ao=33776,Ro=33777,wo=33778,Co=33779,Uc=35840,Oc=35841,Bc=35842,Gc=35843,zc=36196,Vc=37492,kc=37496,Hc=37488,Wc=37489,Go=37490,Xc=37491,jc=37808,Yc=37809,qc=37810,Kc=37811,$c=37812,Zc=37813,Jc=37814,Qc=37815,eu=37816,tu=37817,nu=37818,iu=37819,ru=37820,su=37821,au=36492,ou=36494,lu=36495,cu=36283,uu=36284,zo=36285,fu=36286,Ta=2300,Aa=2301,Ll=2302,ah=2303,oh=2400,lh=2401,ch=2402,w0=2500,C0=0,Kp=1,hu=2,P0=3200,Vo=0,D0=1,gr="",_n="srgb",zn="srgb-linear",ko="linear",Vt="srgb",Kr=7680,uh=519,L0=512,I0=513,F0=514,Qu=515,N0=516,U0=517,ef=518,O0=519,du=35044,fh="300 es",Si=2e3,Ra=2001;function B0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const G0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ka(n,e){return new G0[n](e)}function z0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function V0(){const n=wa("canvas");return n.style.display="block",n}const hh={};function Ho(...n){const e="THREE."+n.shift();console.log(e,...n)}function $p(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=$p(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function dt(...n){n=$p(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pu(...n){const e=n.join(" ");e in hh||(hh[e]=!0,ot(...n))}function k0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const H0={[Cc]:Pc,[Dc]:Fc,[Lc]:Nc,[Ts]:Ic,[Pc]:Cc,[Fc]:Dc,[Nc]:Lc,[Ic]:Ts};class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const pa=Math.PI/180,ws=180/Math.PI;function si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function W0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function X0(n,e,t){return n!==e?(t-n)/(e-n):0}function ma(n,e,t){return(1-t)*n+t*e}function j0(n,e,t,i){return ma(n,e,1-Math.exp(-t*i))}function Y0(n,e=1){return e-Math.abs(tf(n,e*2)-e)}function q0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function K0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Z0(n,e){return n+Math.random()*(e-n)}function J0(n){return n*(.5-Math.random())}function Q0(n){n!==void 0&&(dh=n);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ev(n){return n*pa}function tv(n){return n*ws}function nv(n){return(n&n-1)===0&&n!==0}function iv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sv(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*p,o*u,o*c);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hs={DEG2RAD:pa,RAD2DEG:ws,generateUUID:si,clamp:Lt,euclideanModulo:tf,mapLinear:W0,inverseLerp:X0,lerp:ma,damp:j0,pingpong:Y0,smoothstep:q0,smootherstep:K0,randInt:$0,randFloat:Z0,randFloatSpread:J0,seededRandom:Q0,degToRad:ev,radToDeg:tv,isPowerOfTwo:nv,ceilPowerOfTwo:iv,floorPowerOfTwo:rv,setQuaternionFromProperEuler:sv,normalize:kt,denormalize:ei},pf=class pf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pf.prototype.isVector2=!0;let Nt=pf;class Di{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],v=s[a+2],b=s[a+3];if(f!==b||l!==h||c!==p||u!==v){let g=l*h+c*p+u*v+f*b;g<0&&(h=-h,p=-p,v=-v,b=-b,g=-g);let _=1-o;if(g<.9995){const E=Math.acos(g),A=Math.sin(E);_=Math.sin(_*E)/A,o=Math.sin(o*E)/A,l=l*_+h*o,c=c*_+p*o,u=u*_+v*o,f=f*_+b*o}else{l=l*_+h*o,c=c*_+p*o,u=u*_+v*o,f=f*_+b*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mf=class mf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mf.prototype.isVector3=!0;let ee=mf;const Il=new ee,ph=new Di,gf=class gf{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],b=r[0],g=r[3],_=r[6],E=r[1],A=r[4],w=r[7],V=r[2],N=r[5],k=r[8];return s[0]=a*b+o*E+l*V,s[3]=a*g+o*A+l*N,s[6]=a*_+o*w+l*k,s[1]=c*b+u*E+f*V,s[4]=c*g+u*A+f*N,s[7]=c*_+u*w+f*k,s[2]=h*b+p*E+v*V,s[5]=h*g+p*A+v*N,s[8]=h*_+p*w+v*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gf.prototype.isMatrix3=!0;let xt=gf;const Fl=new xt,mh=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function av(){const n={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Vt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Vt&&(r.r=ys(r.r),r.g=ys(r.g),r.b=ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gr?ko:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zn]:{primaries:e,whitePoint:i,transfer:ko,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}const Dt=av();function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $r;class ov{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=wa("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lv=0;class nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nl(r[a].image)):s.push(Nl(r[a]))}else s=Nl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ov.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let cv=0;const Ul=new ee;class un extends kr{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Ei,r=Ei,s=Jt,a=ji,o=Yn,l=Bn,c=un.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=si(),this.name="",this.source=new nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=kp;un.DEFAULT_ANISOTROPY=1;const _f=class _f{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],b=l[2],g=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,w=(p+1)/2,V=(_+1)/2,N=(u+h)/4,k=(f+b)/4,T=(v+g)/4;return A>w&&A>V?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=N/i,s=k/i):w>V?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=N/r,s=T/r):V<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),i=k/s,r=T/s),this.set(i,r,s,t),this}let E=Math.sqrt((g-v)*(g-v)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(f-b)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_f.prototype.isVector4=!0;let qt=_f;class uv extends kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new un(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends uv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zp extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fv extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zo=class Zo{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,b,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,b,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=v,_[11]=b,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,b=c*f;t[0]=h+b*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,b=c*f;t[0]=h-b*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-b*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,dv)}lookAt(e,t,i){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),or.crossVectors(i,Un),or.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),or.crossVectors(i,Un)),or.normalize(),Ha.crossVectors(Un,or),r[0]=or.x,r[4]=Ha.x,r[8]=Un.x,r[1]=or.y,r[5]=Ha.y,r[9]=Un.y,r[2]=or.z,r[6]=Ha.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],b=i[6],g=i[10],_=i[14],E=i[3],A=i[7],w=i[11],V=i[15],N=r[0],k=r[4],T=r[8],B=r[12],Z=r[1],Y=r[5],fe=r[9],Ee=r[13],Me=r[2],te=r[6],ce=r[10],re=r[14],Re=r[3],Ue=r[7],Ke=r[11],et=r[15];return s[0]=a*N+o*Z+l*Me+c*Re,s[4]=a*k+o*Y+l*te+c*Ue,s[8]=a*T+o*fe+l*ce+c*Ke,s[12]=a*B+o*Ee+l*re+c*et,s[1]=u*N+f*Z+h*Me+p*Re,s[5]=u*k+f*Y+h*te+p*Ue,s[9]=u*T+f*fe+h*ce+p*Ke,s[13]=u*B+f*Ee+h*re+p*et,s[2]=v*N+b*Z+g*Me+_*Re,s[6]=v*k+b*Y+g*te+_*Ue,s[10]=v*T+b*fe+g*ce+_*Ke,s[14]=v*B+b*Ee+g*re+_*et,s[3]=E*N+A*Z+w*Me+V*Re,s[7]=E*k+A*Y+w*te+V*Ue,s[11]=E*T+A*fe+w*ce+V*Ke,s[15]=E*B+A*Ee+w*re+V*et,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],b=e[7],g=e[11],_=e[15],E=l*p-c*h,A=o*p-c*f,w=o*h-l*f,V=a*p-c*u,N=a*h-l*u,k=a*f-o*u;return t*(b*E-g*A+_*w)-i*(v*E-g*V+_*N)+r*(v*A-b*V+_*k)-s*(v*w-b*N+g*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],b=e[13],g=e[14],_=e[15],E=t*o-i*a,A=t*l-r*a,w=t*c-s*a,V=i*l-r*o,N=i*c-s*o,k=r*c-s*l,T=u*b-f*v,B=u*g-h*v,Z=u*_-p*v,Y=f*g-h*b,fe=f*_-p*b,Ee=h*_-p*g,Me=E*Ee-A*fe+w*Y+V*Z-N*B+k*T;if(Me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/Me;return e[0]=(o*Ee-l*fe+c*Y)*te,e[1]=(r*fe-i*Ee-s*Y)*te,e[2]=(b*k-g*N+_*V)*te,e[3]=(h*N-f*k-p*V)*te,e[4]=(l*Z-a*Ee-c*B)*te,e[5]=(t*Ee-r*Z+s*B)*te,e[6]=(g*w-v*k-_*A)*te,e[7]=(u*k-h*w+p*A)*te,e[8]=(a*fe-o*Z+c*T)*te,e[9]=(i*Z-t*fe-s*T)*te,e[10]=(v*N-b*w+_*E)*te,e[11]=(f*w-u*N-p*E)*te,e[12]=(o*B-a*Y-l*T)*te,e[13]=(t*Y-i*B+r*T)*te,e[14]=(b*A-v*V-g*E)*te,e[15]=(u*V-f*A+h*E)*te,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,b=a*u,g=a*f,_=o*f,E=l*c,A=l*u,w=l*f,V=i.x,N=i.y,k=i.z;return r[0]=(1-(b+_))*V,r[1]=(p+w)*V,r[2]=(v-A)*V,r[3]=0,r[4]=(p-w)*N,r[5]=(1-(h+_))*N,r[6]=(g+E)*N,r[7]=0,r[8]=(v+A)*k,r[9]=(g-E)*k,r[10]=(1-(h+b))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$n.copy(this);const c=1/a,u=1/o,f=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Si,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let v,b;if(l)v=s/(a-s),b=a*s/(a-s);else if(o===Si)v=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Ra)v=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Si,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,b;if(l)v=1/(a-s),b=a/(a-s);else if(o===Si)v=-2/(a-s),b=-(a+s)/(a-s);else if(o===Ra)v=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Zo.prototype.isMatrix4=!0;let St=Zo;const Zr=new ee,$n=new St,hv=new ee(0,0,0),dv=new ee(1,1,1),or=new ee,Ha=new ee,Un=new ee,_h=new St,vh=new Di;class ir{constructor(e=0,t=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pv=0;const xh=new ee,Jr=new Di,Ui=new St,Wa=new ee,Ws=new ee,mv=new ee,gv=new Di,bh=new ee(1,0,0),yh=new ee(0,1,0),Eh=new ee(0,0,1),Sh={type:"added"},_v={type:"removed"},Qr={type:"childadded",child:null},Ol={type:"childremoved",child:null};class jt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new ee,t=new ir,i=new Di,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new xt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ws,Wa,this.up):Ui.lookAt(Wa,Ws,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ui),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_v),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new ee(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let _r=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const vv={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),_=this._getHandJoint(c,b);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Dt.workingColorSpace){if(e=tf(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Gl(a,s,e+1/3),this.g=Gl(a,s,e),this.b=Gl(a,s,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=Jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Dt.workingToColorSpace(yn.copy(this),e),Math.round(Lt(yn.r*255,0,255))*65536+Math.round(Lt(yn.g*255,0,255))*256+Math.round(Lt(yn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(yn.copy(this),t);const i=yn.r,r=yn.g,s=yn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=_n){Dt.workingToColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,r=yn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Xa);const i=ma(lr.h,Xa.h,t),r=ma(lr.s,Xa.s,t),s=ma(lr.l,Xa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new bt;bt.NAMES=Jp;class xv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new ee,Oi=new ee,zl=new ee,Bi=new ee,es=new ee,ts=new ee,Mh=new ee,Vl=new ee,kl=new ee,Hl=new ee,Wl=new qt,Xl=new qt,jl=new qt;class ti{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zn.subVectors(r,t),Oi.subVectors(i,t),zl.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Oi),l=Zn.dot(zl),c=Oi.dot(Oi),u=Oi.dot(zl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Wl.setScalar(0),Xl.setScalar(0),jl.setScalar(0),Wl.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,i),jl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wl,s.x),a.addScaledVector(Xl,s.y),a.addScaledVector(jl,s.z),a}static isFrontFacing(e,t,i,r){return Zn.subVectors(i,t),Oi.subVectors(e,t),Zn.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),Zn.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;es.subVectors(r,i),ts.subVectors(s,i),Vl.subVectors(e,i);const l=es.dot(Vl),c=ts.dot(Vl);if(l<=0&&c<=0)return t.copy(i);kl.subVectors(e,r);const u=es.dot(kl),f=ts.dot(kl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(es,a);Hl.subVectors(e,s);const p=es.dot(Hl),v=ts.dot(Hl);if(v>=0&&p<=v)return t.copy(s);const b=p*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ts,o);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Mh.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Mh,o);const _=1/(g+b+h);return a=b*_,o=h*_,t.copy(i).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ci{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Ya.subVectors(this.max,Xs),ns.subVectors(e.a,Xs),is.subVectors(e.b,Xs),rs.subVectors(e.c,Xs),cr.subVectors(is,ns),ur.subVectors(rs,is),Tr.subVectors(ns,rs);let t=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Tr.z,Tr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Tr.z,0,-Tr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Tr.y,Tr.x,0];return!Yl(t,ns,is,rs,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,ns,is,rs,Ya))?!1:(qa.crossVectors(cr,ur),t=[qa.x,qa.y,qa.z],Yl(t,ns,is,rs,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Jn=new ee,ja=new ci,ns=new ee,is=new ee,rs=new ee,cr=new ee,ur=new ee,Tr=new ee,Xs=new ee,Ya=new ee,qa=new ee,Ar=new ee;function Yl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ar.fromArray(n,s);const o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const an=new ee,Ka=new Nt;let bv=0;class on extends kr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qp extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class em extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ai extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}const yv=new ci,js=new ee,ql=new ee;class qn{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(ql)),this.expandByPoint(js.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ev=0;const Hn=new St,Kl=new jt,ss=new ee,On=new ci,Ys=new ci,pn=new ee;class Pn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?em:Qp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ai(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(On.min,Ys.min),On.expandByPoint(pn),pn.addVectors(On.max,Ys.max),On.expandByPoint(pn)):(On.expandByPoint(Ys.min),On.expandByPoint(Ys.max))}On.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),pn.add(ss)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new ee,l[T]=new ee;const c=new ee,u=new ee,f=new ee,h=new Nt,p=new Nt,v=new Nt,b=new ee,g=new ee;function _(T,B,Z){c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,B),f.fromBufferAttribute(i,Z),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,B),v.fromBufferAttribute(s,Z),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const Y=1/(p.x*v.y-v.x*p.y);isFinite(Y)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(Y),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(Y),o[T].add(b),o[B].add(b),o[Z].add(b),l[T].add(g),l[B].add(g),l[Z].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let T=0,B=E.length;T<B;++T){const Z=E[T],Y=Z.start,fe=Z.count;for(let Ee=Y,Me=Y+fe;Ee<Me;Ee+=3)_(e.getX(Ee+0),e.getX(Ee+1),e.getX(Ee+2))}const A=new ee,w=new ee,V=new ee,N=new ee;function k(T){V.fromBufferAttribute(r,T),N.copy(V);const B=o[T];A.copy(B),A.sub(V.multiplyScalar(V.dot(B))).normalize(),w.crossVectors(N,B);const Y=w.dot(l[T])<0?-1:1;a.setXYZW(T,A.x,A.y,A.z,Y)}for(let T=0,B=E.length;T<B;++T){const Z=E[T],Y=Z.start,fe=Z.count;for(let Ee=Y,Me=Y+fe;Ee<Me;Ee+=3)k(e.getX(Ee+0)),k(e.getX(Ee+1)),k(e.getX(Ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new ee,s=new ee,a=new ee,o=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),b=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let _=0;_<u;_++)h[v++]=c[p++]}return new on(h,u,f)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=du,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new ee;class Ca{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Sv=0;class oi extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=si(),this.name="",this.type="Material",this.blending=bs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=wc,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new ee,$l=new ee,$a=new ee,fr=new ee,Zl=new ee,Za=new ee,Jl=new ee;class Ia{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$l.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),fr.copy(this.origin).sub($l);const s=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=fr.dot(this.direction),l=-fr.dot($a),c=fr.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($l).addScaledVector($a,h),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,r,s){Zl.subVectors(t,e),Za.subVectors(i,e),Jl.crossVectors(Zl,Za);let a=this.direction.dot(Jl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fr.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(fr,Za));if(l<0)return null;const c=o*this.direction.dot(Zl.cross(fr));if(c<0||l+c>a)return null;const u=-o*fr.dot(Jl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ur extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Th=new St,Rr=new Ia,Ja=new qn,Ah=new ee,Qa=new ee,eo=new ee,to=new ee,Ql=new ee,no=new ee,Rh=new ee,io=new ee;class xn extends jt{constructor(e=new Pn,t=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){no.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ql.fromBufferAttribute(f,e),a?no.addScaledVector(Ql,u):no.addScaledVector(Ql.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ja,Ah)===null||Rr.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){const g=h[v],_=a[g.materialIndex],E=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let w=E,V=A;w<V;w+=3){const N=o.getX(w),k=o.getX(w+1),T=o.getX(w+2);r=ro(this,_,e,i,c,u,f,N,k,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let g=v,_=b;g<_;g+=3){const E=o.getX(g),A=o.getX(g+1),w=o.getX(g+2);r=ro(this,a,e,i,c,u,f,E,A,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){const g=h[v],_=a[g.materialIndex],E=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=E,V=A;w<V;w+=3){const N=w,k=w+1,T=w+2;r=ro(this,_,e,i,c,u,f,N,k,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=v,_=b;g<_;g+=3){const E=g,A=g+1,w=g+2;r=ro(this,a,e,i,c,u,f,E,A,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Mv(n,e,t,i,r,s,a,o){let l;if(e.side===Ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;io.copy(o),io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function ro(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Qa),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);const u=Mv(n,e,t,i,Qa,eo,to,Rh);if(u){const f=new ee;ti.getBarycoord(Rh,Qa,eo,to,f),r&&(u.uv=ti.getInterpolatedAttribute(r,o,l,c,f,new Nt)),s&&(u.uv1=ti.getInterpolatedAttribute(s,o,l,c,f,new Nt)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,f,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new ee,materialIndex:0};ti.getNormal(Qa,eo,to,h.normal),u.face=h,u.barycoord=f}return u}const qs=new qt,wh=new qt,Ch=new qt,Tv=new qt,Ph=new St,so=new ee,ec=new qn,Dh=new St,tc=new Ia;class Av extends xn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new St,this.bindMatrixInverse=new St,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(r),e.ray.intersectsSphere(ec)!==!1&&(Dh.copy(r).invert(),tc.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R0?this.bindMatrixInverse.copy(this.bindMatrix).invert():ot("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;wh.fromBufferAttribute(r.attributes.skinIndex,e),Ch.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(qs.copy(t),t.set(0,0,0,0)):(qs.set(...t,1),t.set(0,0,0)),qs.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Ch.getComponent(s);if(a!==0){const o=wh.getComponent(s);Ph.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Tv.copy(qs).applyMatrix4(Ph),a)}}return t.isVector4&&(t.w=qs.w),t.applyMatrix4(this.bindMatrixInverse)}}class nm extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ol extends un{constructor(e=null,t=1,i=1,r,s,a,o,l,c=cn,u=cn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new St,Rv=new St;class sf{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ot("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new St)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new St;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Rv;Lh.multiplyMatrices(o,t[s]),Lh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new sf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ol(t,e,e,Yn,jn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(ot("Skeleton: No bone found with UUID:",s),a=new nm),this.bones.push(a),this.boneInverses.push(new St().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Wo extends on{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new St,Ih=new St,ao=[],Fh=new ci,wv=new St,Ks=new xn,$s=new qn;class Cv extends xn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,as),Fh.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,as),$s.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),e.ray.intersectsSphere($s)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,as),Ih.multiplyMatrices(i,as),Ks.matrixWorld=Ih,Ks.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){const l=ao[a];l.instanceId=s,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(r*this.count),r,this.count,Ku,jn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nc=new ee,Pv=new ee,Dv=new xt;class Dr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nc.subVectors(i,t).cross(Pv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(nc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dv.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new qn,Lv=new Nt(.5,.5),oo=new ee;class af{constructor(e=new Dr,t=new Dr,i=new Dr,r=new Dr,s=new Dr,a=new Dr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],v=s[8],b=s[9],g=s[10],_=s[11],E=s[12],A=s[13],w=s[14],V=s[15];if(r[0].setComponents(c-a,p-u,_-v,V-E).normalize(),r[1].setComponents(c+a,p+u,_+v,V+E).normalize(),r[2].setComponents(c+o,p+f,_+b,V+A).normalize(),r[3].setComponents(c-o,p-f,_-b,V-A).normalize(),i)r[4].setComponents(l,h,g,w).normalize(),r[5].setComponents(c-l,p-h,_-g,V-w).normalize();else if(r[4].setComponents(c-l,p-h,_-g,V-w).normalize(),t===Si)r[5].setComponents(c+l,p+h,_+g,V+w).normalize();else if(t===Ra)r[5].setComponents(l,h,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const t=Lv.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class im extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xo=new ee,jo=new ee,Nh=new St,Zs=new Ia,lo=new qn,ic=new ee,Uh=new ee;class of extends jt{constructor(e=new Pn,t=new im){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Xo.fromBufferAttribute(t,r-1),jo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xo.distanceTo(jo);e.setAttribute("lineDistance",new ai(i,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,e.ray.intersectsSphere(lo)===!1)return;Nh.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Nh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let b=p,g=v-1;b<g;b+=c){const _=u.getX(b),E=u.getX(b+1),A=co(this,e,Zs,l,_,E,b);A&&t.push(A)}if(this.isLineLoop){const b=u.getX(v-1),g=u.getX(p),_=co(this,e,Zs,l,b,g,v-1);_&&t.push(_)}}else{const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let b=p,g=v-1;b<g;b+=c){const _=co(this,e,Zs,l,b,b+1,b);_&&t.push(_)}if(this.isLineLoop){const b=co(this,e,Zs,l,v-1,p,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function co(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Xo.fromBufferAttribute(o,r),jo.fromBufferAttribute(o,s),t.distanceSqToSegment(Xo,jo,ic,Uh)>i)return;ic.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ic);if(!(c<e.near||c>e.far))return{distance:c,point:Uh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Oh=new ee,Bh=new ee;class Iv extends of{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Oh.fromBufferAttribute(t,r),Bh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Oh.distanceTo(Bh);e.setAttribute("lineDistance",new ai(i,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fv extends of{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rm extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new St,mu=new Ia,uo=new qn,fo=new ee;class Nv extends jt{constructor(e=new Pn,t=new rm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;Gh.copy(r).invert(),mu.copy(e.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,b=p;v<b;v++){const g=c.getX(v);fo.fromBufferAttribute(f,g),zh(fo,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,b=p;v<b;v++)fo.fromBufferAttribute(f,v),zh(fo,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zh(n,e,t,i,r,s,a){const o=mu.distanceSqToPoint(n);if(o<t){const l=new ee;mu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Uv extends un{constructor(e,t,i,r,s=Jt,a=Jt,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class sm extends un{constructor(e=[],t=Gr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cs extends un{constructor(e,t,i=Ci,r,s,a,o=cn,l=cn,c,u=nr,f=1){if(u!==nr&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ov extends Cs{constructor(e,t=Ci,i=Gr,r,s,a=cn,o=cn,l,c=nr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class am extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fs extends Pn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(f,2));function v(b,g,_,E,A,w,V,N,k,T,B){const Z=w/k,Y=V/T,fe=w/2,Ee=V/2,Me=N/2,te=k+1,ce=T+1;let re=0,Re=0;const Ue=new ee;for(let Ke=0;Ke<ce;Ke++){const et=Ke*Y-Ee;for(let nt=0;nt<te;nt++){const Mt=nt*Z-fe;Ue[b]=Mt*E,Ue[g]=et*A,Ue[_]=Me,c.push(Ue.x,Ue.y,Ue.z),Ue[b]=0,Ue[g]=0,Ue[_]=N>0?1:-1,u.push(Ue.x,Ue.y,Ue.z),f.push(nt/k),f.push(1-Ke/T),re+=1}}for(let Ke=0;Ke<T;Ke++)for(let et=0;et<k;et++){const nt=h+et+te*Ke,Mt=h+et+te*(Ke+1),Ut=h+(et+1)+te*(Ke+1),ft=h+(et+1)+te*Ke;l.push(nt,Mt,ft),l.push(Mt,Ut,ft),Re+=6}o.addGroup(p,Re,B),p+=Re,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ll extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],b=[],g=[];for(let _=0;_<u;_++){const E=_*h-a;for(let A=0;A<c;A++){const w=A*f-s;v.push(w,-E,0),b.push(0,0,1),g.push(A/o),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<o;E++){const A=E+c*_,w=E+c*(_+1),V=E+1+c*(_+1),N=E+1+c*_;p.push(A,w,N),p.push(w,V,N)}this.setIndex(p),this.setAttribute("position",new ai(v,3)),this.setAttribute("normal",new ai(b,3)),this.setAttribute("uv",new ai(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Vh(r))r.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Vh(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function An(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Vh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function om(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Gv={clone:Ps,merge:An};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lm extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lf extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Li extends lf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class kv extends oi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Hv extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ho(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Xv(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function kh(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function cm(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Ns{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jv extends Ns{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lh:s=e,o=2*t-i;break;case ch:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lh:a=e,l=2*i-t;break;case ch:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(r-t),b=v*v,g=b*v,_=-h*g+2*h*b-h*v,E=(1+h)*g+(-1.5-2*h)*b+(-.5+h)*v+1,A=(-1-p)*g+(1.5+p)*b+.5*v,w=p*g-p*b;for(let V=0;V!==o;++V)s[V]=_*a[u+V]+E*a[c+V]+A*a[l+V]+w*a[f+V];return s}}class Yv extends Ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class qv extends Ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kv extends Ns{interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const b=(i-t)/(r-t),g=1-b;for(let _=0;_!==o;++_)s[_]=a[c+_]*g+a[l+_]*b;return s}const p=o*2,v=e-1;for(let b=0;b!==o;++b){const g=a[c+b],_=a[l+b],E=v*p+b*2,A=h[E],w=h[E+1],V=e*p+b*2,N=f[V],k=f[V+1];let T=(i-t)/(r-t),B,Z,Y,fe,Ee;for(let Me=0;Me<8;Me++){B=T*T,Z=B*T,Y=1-T,fe=Y*Y,Ee=fe*Y;const ce=Ee*t+3*fe*T*A+3*Y*B*N+Z*r-i;if(Math.abs(ce)<1e-10)break;const re=3*fe*(A-t)+6*Y*T*(N-A)+3*B*(r-N);if(Math.abs(re)<1e-10)break;T=T-ce/re,T=Math.max(0,Math.min(1,T))}s[b]=Ee*g+3*fe*T*w+3*Y*B*k+Z*_}return s}}class ui{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Kv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break;case ah:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ot("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){dt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){dt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&z0(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){dt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ll,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*i,h=f-i,p=f+i;for(let v=0;v!==i;++v){const b=t[f+v];if(b!==t[h+v]||b!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Aa;class Us extends ui{constructor(e,t,i){super(e,t,i)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ta;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class um extends ui{constructor(e,t,i,r){super(e,t,i,r)}}um.prototype.ValueTypeName="color";class Ds extends ui{constructor(e,t,i,r){super(e,t,i,r)}}Ds.prototype.ValueTypeName="number";class $v extends Ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Di.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Ls extends ui{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new $v(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends ui{constructor(e,t,i){super(e,t,i)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Ta;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends ui{constructor(e,t,i,r){super(e,t,i,r)}}Is.prototype.ValueTypeName="vector";class Zv{constructor(e="",t=-1,i=[],r=w0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Qv(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(ui.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Xv(l);l=kh(l,1,u),c=kh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(ot("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return dt("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,v,b){if(p.length!==0){const g=[],_=[];cm(p,g,_,v),g.length!==0&&b.push(new f(h,g,_))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let v;for(v=0;v<h.length;v++)if(h[v].morphTargets)for(let b=0;b<h[v].morphTargets.length;b++)p[h[v].morphTargets[b]]=-1;for(const b in p){const g=[],_=[];for(let E=0;E!==h[v].morphTargets.length;++E){const A=h[v];g.push(A.time),_.push(A.morphTarget===b?1:0)}r.push(new Ds(".morphTargetInfluence["+b+"]",g,_))}l=p.length*a}else{const p=".bones["+t[f].name+"]";i(Is,p+".position",h,"pos",r),i(Ls,p+".quaternion",h,"rot",r),i(Is,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Jv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return um;case"quaternion":return Ls;case"bool":case"boolean":return Us;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Qv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jv(n.type);if(n.times===void 0){const t=[],i=[];cm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Yi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Hh(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Hh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Hh(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ex=new fm;class Hr{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class tx extends Error{constructor(e,t){super(e),this.response=t}}class cf extends Hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:r});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ot("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,v=p!==0;let b=0;const g=new ReadableStream({start(_){E();function E(){f.read().then(({done:A,value:w})=>{if(A)_.close();else{b+=w.byteLength;const V=new ProgressEvent("progress",{lengthComputable:v,loaded:b,total:p});for(let N=0,k=u.length;N<k;N++){const T=u[N];T.onProgress&&T.onProgress(V)}_.enqueue(w),E()}},A=>{_.error(A)})}}});return new Response(g)}else throw new tx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Yi.add(`file:${e}`,c);const u=Vi[e];delete Vi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const os=new WeakMap;class nx extends Hr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=os.get(a);f===void 0&&(f=[],os.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=wa("img");function l(){u(),t&&t(this);const f=os.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}os.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Yi.remove(`image:${e}`);const h=os.get(this)||[];for(let p=0;p<h.length;p++){const v=h[p];v.onError&&v.onError(f)}os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ix extends Hr{constructor(e){super(e)}load(e,t,i,r){const s=new un,a=new nx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class cl extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const rc=new St,Wh=new ee,Xh=new ee;class uf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new af,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ra||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new ee,mo=new Di,pi=new ee;class hm extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(po,mo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new ee,jh=new Nt,Yh=new Nt;class wn extends hm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Yh),t.subVectors(Yh,jh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rx extends uf{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sx extends cl{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new rx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ax extends uf{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class ox extends cl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ax}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ul extends hm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lx extends uf{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dm extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new lx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cx extends cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ga{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ux extends Pn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class fx extends Hr{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new cf(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):dt(l),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(p,v){if(t[v]!==void 0)return t[v];const g=p.interleavedBuffers[v],_=s(p,g.buffer),E=ka(g.type,_),A=new tm(E,g.stride);return A.uuid=g.uuid,t[v]=A,A}function s(p,v){if(i[v]!==void 0)return i[v];const g=p.arrayBuffers[v],_=new Uint32Array(g).buffer;return i[v]=_,_}const a=e.isInstancedBufferGeometry?new ux:new Pn,o=e.data.index;if(o!==void 0){const p=ka(o.type,o.array);a.setIndex(new on(p,1))}const l=e.data.attributes;for(const p in l){const v=l[p];let b;if(v.isInterleavedBufferAttribute){const g=r(e.data,v.data);b=new Ca(g,v.itemSize,v.offset,v.normalized)}else{const g=ka(v.type,v.array),_=v.isInstancedBufferAttribute?Wo:on;b=new _(g,v.itemSize,v.normalized)}v.name!==void 0&&(b.name=v.name),v.usage!==void 0&&b.setUsage(v.usage),a.setAttribute(p,b)}const c=e.data.morphAttributes;if(c)for(const p in c){const v=c[p],b=[];for(let g=0,_=v.length;g<_;g++){const E=v[g];let A;if(E.isInterleavedBufferAttribute){const w=r(e.data,E.data);A=new Ca(w,E.itemSize,E.offset,E.normalized)}else{const w=ka(E.type,E.array);A=new on(w,E.itemSize,E.normalized)}E.name!==void 0&&(A.name=E.name),b.push(A)}a.morphAttributes[p]=b}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let p=0,v=f.length;p!==v;++p){const b=f[p];a.addGroup(b.start,b.count,b.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new qn().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const sc=new WeakMap;class hx extends Hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ot("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ot("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{sc.has(a)===!0?(r&&r(sc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Yi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),sc.set(l,c),Yi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Yi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=-90,cs=1;class dx extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(ls,cs,e,t);r.layers=this.layers,this.add(r);const s=new wn(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new wn(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new wn(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new wn(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new wn(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class px extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ff="\\[\\]\\.:\\/",mx=new RegExp("["+ff+"]","g"),hf="[^"+ff+"]",gx="[^"+ff.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",hf),vx=/(WCOD+)?/.source.replace("WCOD",gx),xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),yx=new RegExp("^"+_x+vx+xx+bx+"$"),Ex=["material","materials","bones","map"];class Sx{constructor(e,t,i){const r=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ht{constructor(e,t,i){this.path=t,this.parsedPath=i||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,t,i):new Ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){const t=yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Ex.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=Sx;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qh=new St;class Mx{constructor(e,t,i=0,r=1/0){this.ray=new Ia(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(e,t=!0,i=[]){return gu(e,this,i,t),i.sort(Kh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)gu(e[r],this,i,t);return i.sort(Kh),i}}function Kh(n,e){return n.distance-e.distance}function gu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)gu(s[a],e,t,!0)}}const vf=class vf{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};vf.prototype.isMatrix2=!0;let $h=vf;function Zh(n,e,t,i){const r=Tx(i);switch(t){case qp:return n*e;case Ku:return n*e/r.components*r.byteLength;case $u:return n*e/r.components*r.byteLength;case zr:return n*e*2/r.components*r.byteLength;case Zu:return n*e*2/r.components*r.byteLength;case qu:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case Ju:return n*e*4/r.components*r.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case Uc:case Bc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case Vc:case Hc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kc:case Go:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case au:case ou:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zo:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tx(n){switch(n){case Bn:case Wp:return{byteLength:1,components:1};case Sa:case Xp:case tr:return{byteLength:2,components:1};case ju:case Yu:return{byteLength:2,components:4};case Ci:case Xu:case jn:return{byteLength:4,components:1};case jp:case Yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ax(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],b=f[p];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const b=f[p];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ab=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ob=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ey=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:Rx,alphahash_pars_fragment:wx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Dx,alphatest_pars_fragment:Lx,aomap_fragment:Ix,aomap_pars_fragment:Fx,batching_pars_vertex:Nx,batching_vertex:Ux,begin_vertex:Ox,beginnormal_vertex:Bx,bsdfs:Gx,iridescence_fragment:zx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Xx,color_fragment:jx,color_pars_fragment:Yx,color_pars_vertex:qx,color_vertex:Kx,common:$x,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:eb,emissivemap_fragment:tb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ab,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:xb,envmap_vertex:cb,fog_vertex:ub,fog_pars_vertex:fb,fog_fragment:hb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:vb,lights_toon_fragment:bb,lights_toon_pars_fragment:yb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Tb,lights_fragment_begin:Ab,lights_fragment_maps:Rb,lights_fragment_end:wb,lightprobes_pars_fragment:Cb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Ib,map_fragment:Fb,map_pars_fragment:Nb,map_particle_fragment:Ub,map_particle_pars_fragment:Ob,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:zb,morphcolor_vertex:Vb,morphnormal_vertex:kb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Wb,normal_fragment_begin:Xb,normal_fragment_maps:jb,normal_pars_fragment:Yb,normal_pars_vertex:qb,normal_vertex:Kb,normalmap_pars_fragment:$b,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:Qb,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:ry,dithering_fragment:sy,dithering_pars_fragment:ay,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:uy,shadowmap_vertex:fy,shadowmask_pars_fragment:hy,skinbase_vertex:dy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:xy,tonemapping_pars_fragment:by,transmission_fragment:yy,transmission_pars_fragment:Ey,uv_pars_fragment:Sy,uv_pars_vertex:My,uv_vertex:Ty,worldpos_vertex:Ay,background_vert:Ry,background_frag:wy,backgroundCube_vert:Cy,backgroundCube_frag:Py,cube_vert:Dy,cube_frag:Ly,depth_vert:Iy,depth_frag:Fy,distance_vert:Ny,distance_frag:Uy,equirect_vert:Oy,equirect_frag:By,linedashed_vert:Gy,linedashed_frag:zy,meshbasic_vert:Vy,meshbasic_frag:ky,meshlambert_vert:Hy,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:jy,meshnormal_vert:Yy,meshnormal_frag:qy,meshphong_vert:Ky,meshphong_frag:$y,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:Qy,meshtoon_frag:eE,points_vert:tE,points_frag:nE,shadow_vert:iE,shadow_frag:rE,sprite_vert:sE,sprite_frag:aE},Qe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Xn={basic:{uniforms:An([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:An([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:An([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:An([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:An([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new bt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:An([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:An([Qe.points,Qe.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:An([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:An([Qe.common,Qe.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:An([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:An([Qe.sprite,Qe.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:An([Qe.common,Qe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:An([Qe.lights,Qe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Xn.physical={uniforms:An([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const go={r:0,b:0,g:0},oE=new St,mm=new xt;mm.set(-1,0,0,0,1,0,0,0,1);function lE(n,e,t,i,r,s){const a=new bt(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const w=E.backgroundBlurriness>0;A=e.get(A,w)}return A}function v(E){let A=!1;const w=p(E);w===null?g(a,o):w&&w.isColor&&(g(w,1),A=!0);const V=n.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,s):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(E,A){const w=p(A);w&&(w.isCubeTexture||w.mapping===al)?(c===void 0&&(c=new xn(new Fs(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ps(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(V,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mm),c.material.toneMapped=Dt.getTransfer(w.colorSpace)!==Vt,(u!==w||f!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new xn(new ll(2,2),new li({name:"BackgroundMaterial",uniforms:Ps(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Dt.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,A){E.getRGB(go,om(n)),t.buffers.color.setClear(go.r,go.g,go.b,A,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:v,addToRenderList:b,dispose:_}}function cE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(Y,fe,Ee,Me,te){let ce=!1;const re=f(Y,Me,Ee,fe);s!==re&&(s=re,c(s.object)),ce=p(Y,Me,Ee,te),ce&&v(Y,Me,Ee,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,w(Y,fe,Ee,Me),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(Y){return n.bindVertexArray(Y)}function u(Y){return n.deleteVertexArray(Y)}function f(Y,fe,Ee,Me){const te=Me.wireframe===!0;let ce=i[fe.id];ce===void 0&&(ce={},i[fe.id]=ce);const re=Y.isInstancedMesh===!0?Y.id:0;let Re=ce[re];Re===void 0&&(Re={},ce[re]=Re);let Ue=Re[Ee.id];Ue===void 0&&(Ue={},Re[Ee.id]=Ue);let Ke=Ue[te];return Ke===void 0&&(Ke=h(l()),Ue[te]=Ke),Ke}function h(Y){const fe=[],Ee=[],Me=[];for(let te=0;te<t;te++)fe[te]=0,Ee[te]=0,Me[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:fe,enabledAttributes:Ee,attributeDivisors:Me,object:Y,attributes:{},index:null}}function p(Y,fe,Ee,Me){const te=s.attributes,ce=fe.attributes;let re=0;const Re=Ee.getAttributes();for(const Ue in Re)if(Re[Ue].location>=0){const et=te[Ue];let nt=ce[Ue];if(nt===void 0&&(Ue==="instanceMatrix"&&Y.instanceMatrix&&(nt=Y.instanceMatrix),Ue==="instanceColor"&&Y.instanceColor&&(nt=Y.instanceColor)),et===void 0||et.attribute!==nt||nt&&et.data!==nt.data)return!0;re++}return s.attributesNum!==re||s.index!==Me}function v(Y,fe,Ee,Me){const te={},ce=fe.attributes;let re=0;const Re=Ee.getAttributes();for(const Ue in Re)if(Re[Ue].location>=0){let et=ce[Ue];et===void 0&&(Ue==="instanceMatrix"&&Y.instanceMatrix&&(et=Y.instanceMatrix),Ue==="instanceColor"&&Y.instanceColor&&(et=Y.instanceColor));const nt={};nt.attribute=et,et&&et.data&&(nt.data=et.data),te[Ue]=nt,re++}s.attributes=te,s.attributesNum=re,s.index=Me}function b(){const Y=s.newAttributes;for(let fe=0,Ee=Y.length;fe<Ee;fe++)Y[fe]=0}function g(Y){_(Y,0)}function _(Y,fe){const Ee=s.newAttributes,Me=s.enabledAttributes,te=s.attributeDivisors;Ee[Y]=1,Me[Y]===0&&(n.enableVertexAttribArray(Y),Me[Y]=1),te[Y]!==fe&&(n.vertexAttribDivisor(Y,fe),te[Y]=fe)}function E(){const Y=s.newAttributes,fe=s.enabledAttributes;for(let Ee=0,Me=fe.length;Ee<Me;Ee++)fe[Ee]!==Y[Ee]&&(n.disableVertexAttribArray(Ee),fe[Ee]=0)}function A(Y,fe,Ee,Me,te,ce,re){re===!0?n.vertexAttribIPointer(Y,fe,Ee,te,ce):n.vertexAttribPointer(Y,fe,Ee,Me,te,ce)}function w(Y,fe,Ee,Me){b();const te=Me.attributes,ce=Ee.getAttributes(),re=fe.defaultAttributeValues;for(const Re in ce){const Ue=ce[Re];if(Ue.location>=0){let Ke=te[Re];if(Ke===void 0&&(Re==="instanceMatrix"&&Y.instanceMatrix&&(Ke=Y.instanceMatrix),Re==="instanceColor"&&Y.instanceColor&&(Ke=Y.instanceColor)),Ke!==void 0){const et=Ke.normalized,nt=Ke.itemSize,Mt=e.get(Ke);if(Mt===void 0)continue;const Ut=Mt.buffer,ft=Mt.type,Te=Mt.bytesPerElement,Ze=ft===n.INT||ft===n.UNSIGNED_INT||Ke.gpuType===Xu;if(Ke.isInterleavedBufferAttribute){const je=Ke.data,ct=je.stride,ut=Ke.offset;if(je.isInstancedInterleavedBuffer){for(let ht=0;ht<Ue.locationSize;ht++)_(Ue.location+ht,je.meshPerAttribute);Y.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let ht=0;ht<Ue.locationSize;ht++)g(Ue.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let ht=0;ht<Ue.locationSize;ht++)A(Ue.location+ht,nt/Ue.locationSize,ft,et,ct*Te,(ut+nt/Ue.locationSize*ht)*Te,Ze)}else{if(Ke.isInstancedBufferAttribute){for(let je=0;je<Ue.locationSize;je++)_(Ue.location+je,Ke.meshPerAttribute);Y.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let je=0;je<Ue.locationSize;je++)g(Ue.location+je);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let je=0;je<Ue.locationSize;je++)A(Ue.location+je,nt/Ue.locationSize,ft,et,nt*Te,nt/Ue.locationSize*je*Te,Ze)}}else if(re!==void 0){const et=re[Re];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(Ue.location,et);break;case 3:n.vertexAttrib3fv(Ue.location,et);break;case 4:n.vertexAttrib4fv(Ue.location,et);break;default:n.vertexAttrib1fv(Ue.location,et)}}}}E()}function V(){B();for(const Y in i){const fe=i[Y];for(const Ee in fe){const Me=fe[Ee];for(const te in Me){const ce=Me[te];for(const re in ce)u(ce[re].object),delete ce[re];delete Me[te]}}delete i[Y]}}function N(Y){if(i[Y.id]===void 0)return;const fe=i[Y.id];for(const Ee in fe){const Me=fe[Ee];for(const te in Me){const ce=Me[te];for(const re in ce)u(ce[re].object),delete ce[re];delete Me[te]}}delete i[Y.id]}function k(Y){for(const fe in i){const Ee=i[fe];for(const Me in Ee){const te=Ee[Me];if(te[Y.id]===void 0)continue;const ce=te[Y.id];for(const re in ce)u(ce[re].object),delete ce[re];delete te[Y.id]}}}function T(Y){for(const fe in i){const Ee=i[fe],Me=Y.isInstancedMesh===!0?Y.id:0,te=Ee[Me];if(te!==void 0){for(const ce in te){const re=te[ce];for(const Re in re)u(re[Re].object),delete re[Re];delete te[ce]}delete Ee[Me],Object.keys(Ee).length===0&&delete i[fe]}}}function B(){Z(),a=!0,s!==r&&(s=r,c(s.object))}function Z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:Z,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:g,disableUnusedAttributes:E}}function uE(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(k){return!(k!==Yn&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){const T=k===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Bn&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==jn&&!T)}function l(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:w,maxSamples:V,samples:N}}function hE(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Dr,o=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,_=n.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const E=s?0:i,A=E*4;let w=_.clippingState||null;l.value=w,w=u(v,h,A,p);for(let V=0;V!==A;++V)w[V]=t[V];_.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const b=f!==null?f.length:0;let g=null;if(b!==0){if(g=l.value,v!==!0||g===null){const _=p+b*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<_)&&(g=new Float32Array(_));for(let A=0,w=p;A!==b;++A,w+=4)a.copy(f[A]).applyMatrix4(E,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const vr=4,Jh=[.125,.215,.35,.446,.526,.582],Fr=20,dE=256,Js=new ul,Qh=new bt;let ac=null,oc=0,lc=0,cc=!1;const pE=new ee;class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=pE}=s;ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,oc,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:tr,format:Yn,colorSpace:zn,depthBuffer:!1},r=td(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mE(s)),this._blurMaterial=_E(s,e,t),this._ggxMaterial=gE(s,e,t)}return r}_compileMaterial(e){const t=new xn(new Pn,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,r,s){const l=new wn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Qh),f.toneMapping=Ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new Fs,new Ur({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let _=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,_=!0):(g.color.copy(Qh),_=!0);for(let A=0;A<6;A++){const w=A%3;w===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):w===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const V=this._cubeSize;us(r,w*V,A>2?V:0,V,V),f.setRenderTarget(r),_&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gr||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-vr?i-v+vr:0),_=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,us(s,g,_,3*b,2*b),r.setRenderTarget(s),r.render(o,Js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,us(e,g,_,3*b,2*b),r.setRenderTarget(e),r.render(o,Js)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),b=s/v,g=isFinite(s)?1+Math.floor(u*b):Fr;g>Fr&&ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const _=[];let E=0;for(let k=0;k<Fr;++k){const T=k/b,B=Math.exp(-T*T/2);_.push(B),k===0?E+=B:k<g&&(E+=2*B)}for(let k=0;k<_.length;k++)_[k]=_[k]/E;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const w=this._sizeLods[r],V=3*w*(r>A-vr?r-A+vr:0),N=4*(this._cubeSize-w);us(t,V,N,3*w,2*w),l.setRenderTarget(t),l.render(f,Js)}}function mE(n){const e=[],t=[],i=[];let r=n;const s=n-vr+1+Jh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-vr?l=Jh[a-n+vr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,b=3,g=2,_=1,E=new Float32Array(b*v*p),A=new Float32Array(g*v*p),w=new Float32Array(_*v*p);for(let N=0;N<p;N++){const k=N%3*2/3-1,T=N>2?0:-1,B=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];E.set(B,b*v*N),A.set(h,g*v*N);const Z=[N,N,N,N,N,N];w.set(Z,_*v*N)}const V=new Pn;V.setAttribute("position",new on(E,b)),V.setAttribute("uv",new on(A,g)),V.setAttribute("faceIndex",new on(w,_)),i.push(new xn(V,null)),r>vr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function td(n,e,t){const i=new Ai(n,e,t);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gE(n,e,t){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function _E(n,e,t){const i=new Float32Array(Fr),r=new ee(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function nd(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function id(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gm extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fs(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Ki});s.uniforms.tEquirect.value=t;const a=new xn(r,s),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=Jt),new dx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function vE(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Pl||p===Dl)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const b=new gm(v.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,v=p===Pl||p===Dl,b=p===Gr||p===As;if(v||b){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new ed(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return v&&E&&E.height>0||b&&E&&l(E)?(i===null&&(i=new ed(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===Pl?h.mapping=Gr:p===Dl&&(h.mapping=As),h}function l(h){let p=0;const v=6;for(let b=0;b<v;b++)h[b]!==void 0&&p++;return p===v}function c(h){const p=h.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function xE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pu("WebGLRenderer: "+i+" extension not supported."),r}}}function bE(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(p!==null){const E=p.array;b=p.version;for(let A=0,w=E.length;A<w;A+=3){const V=E[A+0],N=E[A+1],k=E[A+2];h.push(V,N,N,k,k,V)}}else{const E=v.array;b=v.version;for(let A=0,w=E.length/3-1;A<w;A+=3){const V=A+0,N=A+1,k=A+2;h.push(V,N,N,k,k,V)}}const g=new(v.count>=65535?em:Qp)(h,1);g.version=b;const _=s.get(f);_&&e.remove(_),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function yE(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*a,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let b=0;for(let g=0;g<p;g++)b+=h[g];t.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function EE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function SE(n,e,t){const i=new WeakMap,r=new qt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let B=function(){k.dispose(),i.delete(o),o.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),v===!0&&(A=2),b===!0&&(A=3);let w=o.attributes.position.count*A,V=1;w>e.maxTextureSize&&(V=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*V*4*f),k=new Zp(N,w,V,f);k.type=jn,k.needsUpdate=!0;const T=A*4;for(let Z=0;Z<f;Z++){const Y=g[Z],fe=_[Z],Ee=E[Z],Me=w*V*4*Z;for(let te=0;te<Y.count;te++){const ce=te*T;p===!0&&(r.fromBufferAttribute(Y,te),N[Me+ce+0]=r.x,N[Me+ce+1]=r.y,N[Me+ce+2]=r.z,N[Me+ce+3]=0),v===!0&&(r.fromBufferAttribute(fe,te),N[Me+ce+4]=r.x,N[Me+ce+5]=r.y,N[Me+ce+6]=r.z,N[Me+ce+7]=0),b===!0&&(r.fromBufferAttribute(Ee,te),N[Me+ce+8]=r.x,N[Me+ce+9]=r.y,N[Me+ce+10]=r.z,N[Me+ce+11]=Ee.itemSize===4?r.w:1)}}h={count:f,texture:k,size:new Nt(w,V)},i.set(o,h),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ME(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const TE={[Np]:"LINEAR_TONE_MAPPING",[Up]:"REINHARD_TONE_MAPPING",[Op]:"CINEON_TONE_MAPPING",[Bp]:"ACES_FILMIC_TONE_MAPPING",[zp]:"AGX_TONE_MAPPING",[Vp]:"NEUTRAL_TONE_MAPPING",[Gp]:"CUSTOM_TONE_MAPPING"};function AE(n,e,t,i,r){const s=new Ai(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Cs(e,t):void 0}),a=new Ai(e,t,{type:tr,depthBuffer:!1,stencilBuffer:!1}),o=new Pn;o.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ai([0,2,0,0,2,0],2));const l=new lm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new xn(o,l),u=new ul(-1,1,1,-1,0,1);let f=null,h=null,p=!1,v,b=null,g=[],_=!1;this.setSize=function(E,A){s.setSize(E,A),a.setSize(E,A);for(let w=0;w<g.length;w++){const V=g[w];V.setSize&&V.setSize(E,A)}},this.setEffects=function(E){g=E,_=g.length>0&&g[0].isRenderPass===!0;const A=s.width,w=s.height;for(let V=0;V<g.length;V++){const N=g[V];N.setSize&&N.setSize(A,w)}},this.begin=function(E,A){if(p||E.toneMapping===Ti&&g.length===0)return!1;if(b=A,A!==null){const w=A.width,V=A.height;(s.width!==w||s.height!==V)&&this.setSize(w,V)}return _===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=Ti,!0},this.hasRenderPass=function(){return _},this.end=function(E,A){E.toneMapping=v,p=!0;let w=s,V=a;for(let N=0;N<g.length;N++){const k=g[N];if(k.enabled!==!1&&(k.render(E,V,w,A),k.needsSwap!==!1)){const T=w;w=V,V=T}}if(f!==E.outputColorSpace||h!==E.toneMapping){f=E.outputColorSpace,h=E.toneMapping,l.defines={},Dt.getTransfer(f)===Vt&&(l.defines.SRGB_TRANSFER="");const N=TE[h];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(b),E.render(c,u),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const _m=new un,_u=new Cs(1,1),vm=new Zp,xm=new fv,bm=new sm,rd=[],sd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rd[r];if(s===void 0&&(s=new Float32Array(r),rd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function CE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function PE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function DE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),hn(t,i)}}function LE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),hn(t,i)}}function IE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),hn(t,i)}}function FE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function UE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function OE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function BE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function zE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function VE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function kE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(_u.compareFunction=t.isReversedDepthBuffer()?ef:Qu,s=_u):s=_m,t.setTexture2D(e||s,r)}function HE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xm,r)}function WE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bm,r)}function XE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vm,r)}function jE(n){switch(n){case 5126:return RE;case 35664:return wE;case 35665:return CE;case 35666:return PE;case 35674:return DE;case 35675:return LE;case 35676:return IE;case 5124:case 35670:return FE;case 35667:case 35671:return NE;case 35668:case 35672:return UE;case 35669:case 35673:return OE;case 5125:return BE;case 36294:return GE;case 36295:return zE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function YE(n,e){n.uniform1fv(this.addr,e)}function qE(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function KE(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function $E(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function ZE(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JE(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QE(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function rS(n,e){n.uniform1uiv(this.addr,e)}function sS(n,e){n.uniform2uiv(this.addr,e)}function aS(n,e){n.uniform3uiv(this.addr,e)}function oS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=_u:a=_m;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function cS(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||xm,s[a])}function uS(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bm,s[a])}function fS(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vm,s[a])}function hS(n){switch(n){case 5126:return YE;case 35664:return qE;case 35665:return KE;case 35666:return $E;case 35674:return ZE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return aS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}class dS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jE(t.type)}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function gS(n,e,t){const i=n.name,r=i.length;for(uc.lastIndex=0;;){const s=uc.exec(i),a=uc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cd(t,c===void 0?new dS(o,n,e):new pS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new mS(o),cd(t,f)),t=f}}}class Po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _S=37297;let vS=0;function xS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const fd=new xt;function bS(n){Dt._getMatrix(fd,Dt.workingColorSpace,n);const e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(n)){case ko:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xS(n.getShaderSource(e),o)}else return s}function yS(n,e){const t=bS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ES={[Np]:"Linear",[Up]:"Reinhard",[Op]:"Cineon",[Bp]:"ACESFilmic",[zp]:"AgX",[Vp]:"Neutral",[Gp]:"Custom"};function SS(n,e){const t=ES[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _o=new ee;function MS(){Dt.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function AS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sa(n){return n!==""}function dd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(n){return n.replace(wS,PS)}const CS=new Map;function PS(n,e){let t=Rt[e];if(t===void 0){const i=CS.get(e);if(i!==void 0)t=Rt[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vu(t)}const DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(DS,LS)}function LS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IS={[Mo]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function FS(n){return IS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NS={[Gr]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[al]:"ENVMAP_TYPE_CUBE_UV"};function US(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":NS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const OS={[As]:"ENVMAP_MODE_REFRACTION"};function BS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":OS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GS={[Fp]:"ENVMAP_BLENDING_MULTIPLY",[T0]:"ENVMAP_BLENDING_MIX",[A0]:"ENVMAP_BLENDING_ADD"};function zS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":GS[n.combine]||"ENVMAP_BLENDING_NONE"}function VS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=FS(t),c=US(t),u=BS(t),f=zS(t),h=VS(t),p=TS(t),v=AS(s),b=r.createProgram();let g,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sa).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sa).join(`
`),_.length>0&&(_+=`
`)):(g=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),_=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?SS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),MS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=vu(a),a=dd(a,t),a=pd(a,t),o=vu(o),o=dd(o,t),o=pd(o,t),a=md(a),o=md(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=E+g+a,w=E+_+o,V=ud(r,r.VERTEX_SHADER,A),N=ud(r,r.FRAGMENT_SHADER,w);r.attachShader(b,V),r.attachShader(b,N),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function k(Y){if(n.debug.checkShaderErrors){const fe=r.getProgramInfoLog(b)||"",Ee=r.getShaderInfoLog(V)||"",Me=r.getShaderInfoLog(N)||"",te=fe.trim(),ce=Ee.trim(),re=Me.trim();let Re=!0,Ue=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,V,N);else{const Ke=hd(r,V,"vertex"),et=hd(r,N,"fragment");dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+te+`
`+Ke+`
`+et)}else te!==""?ot("WebGLProgram: Program Info Log:",te):(ce===""||re==="")&&(Ue=!1);Ue&&(Y.diagnostics={runnable:Re,programLog:te,vertexShader:{log:ce,prefix:g},fragmentShader:{log:re,prefix:_}})}r.deleteShader(V),r.deleteShader(N),T=new Po(r,b),B=RS(r,b)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let B;this.getAttributes=function(){return B===void 0&&k(this),B};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=r.getProgramParameter(b,_S)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=N,this}let HS=0;class WS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XS(e),t.set(e,i)),i}}class XS{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}}function jS(n){return n===zr||n===Go||n===zo}function YS(n,e,t,i,r,s){const a=new rf,o=new WS,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function b(T,B,Z,Y,fe,Ee){const Me=Y.fog,te=fe.geometry,ce=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,re=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Re=e.get(T.envMap||ce,re),Ue=Re&&Re.mapping===al?Re.image.height:null,Ke=p[T.type];T.precision!==null&&(h=i.getMaxPrecision(T.precision),h!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const et=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,nt=et!==void 0?et.length:0;let Mt=0;te.morphAttributes.position!==void 0&&(Mt=1),te.morphAttributes.normal!==void 0&&(Mt=2),te.morphAttributes.color!==void 0&&(Mt=3);let Ut,ft,Te,Ze;if(Ke){const _t=Xn[Ke];Ut=_t.vertexShader,ft=_t.fragmentShader}else Ut=T.vertexShader,ft=T.fragmentShader,o.update(T),Te=o.getVertexShaderID(T),Ze=o.getFragmentShaderID(T);const je=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),ut=fe.isInstancedMesh===!0,ht=fe.isBatchedMesh===!0,R=!!T.map,m=!!T.matcap,he=!!Re,Se=!!T.aoMap,me=!!T.lightMap,we=!!T.bumpMap,De=!!T.normalMap,Ne=!!T.displacementMap,F=!!T.emissiveMap,ue=!!T.metalnessMap,ze=!!T.roughnessMap,Ae=T.anisotropy>0,_e=T.clearcoat>0,it=T.dispersion>0,P=T.iridescence>0,y=T.sheen>0,K=T.transmission>0,be=Ae&&!!T.anisotropyMap,Ce=_e&&!!T.clearcoatMap,ke=_e&&!!T.clearcoatNormalMap,Xe=_e&&!!T.clearcoatRoughnessMap,ye=P&&!!T.iridescenceMap,Pe=P&&!!T.iridescenceThicknessMap,Ye=y&&!!T.sheenColorMap,Fe=y&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,He=!!T.specularColorMap,pt=!!T.specularIntensityMap,at=K&&!!T.transmissionMap,It=K&&!!T.thicknessMap,H=!!T.gradientMap,Ge=!!T.alphaMap,ve=T.alphaTest>0,$e=!!T.alphaHash,de=!!T.extensions;let Oe=Ti;T.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Be={shaderID:Ke,shaderType:T.type,shaderName:T.name,vertexShader:Ut,fragmentShader:ft,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:Ze,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:ht,batchingColor:ht&&fe._colorsTexture!==null,instancing:ut,instancingColor:ut&&fe.instanceColor!==null,instancingMorph:ut&&fe.morphTexture!==null,outputColorSpace:je===null?n.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:R,matcap:m,envMap:he,envMapMode:he&&Re.mapping,envMapCubeUVHeight:Ue,aoMap:Se,lightMap:me,bumpMap:we,normalMap:De,displacementMap:Ne,emissiveMap:F,normalMapObjectSpace:De&&T.normalMapType===D0,normalMapTangentSpace:De&&T.normalMapType===Vo,packedNormalMap:De&&T.normalMapType===Vo&&jS(T.normalMap.format),metalnessMap:ue,roughnessMap:ze,anisotropy:Ae,anisotropyMap:be,clearcoat:_e,clearcoatMap:Ce,clearcoatNormalMap:ke,clearcoatRoughnessMap:Xe,dispersion:it,iridescence:P,iridescenceMap:ye,iridescenceThicknessMap:Pe,sheen:y,sheenColorMap:Ye,sheenRoughnessMap:Fe,specularMap:Ve,specularColorMap:He,specularIntensityMap:pt,transmission:K,transmissionMap:at,thicknessMap:It,gradientMap:H,opaque:T.transparent===!1&&T.blending===bs&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:ve,alphaHash:$e,combine:T.combine,mapUv:R&&v(T.map.channel),aoMapUv:Se&&v(T.aoMap.channel),lightMapUv:me&&v(T.lightMap.channel),bumpMapUv:we&&v(T.bumpMap.channel),normalMapUv:De&&v(T.normalMap.channel),displacementMapUv:Ne&&v(T.displacementMap.channel),emissiveMapUv:F&&v(T.emissiveMap.channel),metalnessMapUv:ue&&v(T.metalnessMap.channel),roughnessMapUv:ze&&v(T.roughnessMap.channel),anisotropyMapUv:be&&v(T.anisotropyMap.channel),clearcoatMapUv:Ce&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(T.sheenRoughnessMap.channel),specularMapUv:Ve&&v(T.specularMap.channel),specularColorMapUv:He&&v(T.specularColorMap.channel),specularIntensityMapUv:pt&&v(T.specularIntensityMap.channel),transmissionMapUv:at&&v(T.transmissionMap.channel),thicknessMapUv:It&&v(T.thicknessMap.channel),alphaMapUv:Ge&&v(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(De||Ae),vertexNormals:!!te.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!te.attributes.uv&&(R||Ge),fog:!!Me,useFog:T.fog===!0,fogExp2:!!Me&&Me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||te.attributes.normal===void 0&&De===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:fe.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Mt,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:Ee.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:R&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:F&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qn,flipSided:T.side===Ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:de&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&T.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.customVertexShaderID),B.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)B.push(Z),B.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(_(B,T),E(B,T),B.push(n.outputColorSpace)),B.push(T.customProgramCacheKey),B.join()}function _(T,B){T.push(B.precision),T.push(B.outputColorSpace),T.push(B.envMapMode),T.push(B.envMapCubeUVHeight),T.push(B.mapUv),T.push(B.alphaMapUv),T.push(B.lightMapUv),T.push(B.aoMapUv),T.push(B.bumpMapUv),T.push(B.normalMapUv),T.push(B.displacementMapUv),T.push(B.emissiveMapUv),T.push(B.metalnessMapUv),T.push(B.roughnessMapUv),T.push(B.anisotropyMapUv),T.push(B.clearcoatMapUv),T.push(B.clearcoatNormalMapUv),T.push(B.clearcoatRoughnessMapUv),T.push(B.iridescenceMapUv),T.push(B.iridescenceThicknessMapUv),T.push(B.sheenColorMapUv),T.push(B.sheenRoughnessMapUv),T.push(B.specularMapUv),T.push(B.specularColorMapUv),T.push(B.specularIntensityMapUv),T.push(B.transmissionMapUv),T.push(B.thicknessMapUv),T.push(B.combine),T.push(B.fogExp2),T.push(B.sizeAttenuation),T.push(B.morphTargetsCount),T.push(B.morphAttributeCount),T.push(B.numDirLights),T.push(B.numPointLights),T.push(B.numSpotLights),T.push(B.numSpotLightMaps),T.push(B.numHemiLights),T.push(B.numRectAreaLights),T.push(B.numDirLightShadows),T.push(B.numPointLightShadows),T.push(B.numSpotLightShadows),T.push(B.numSpotLightShadowsWithMaps),T.push(B.numLightProbes),T.push(B.shadowMapType),T.push(B.toneMapping),T.push(B.numClippingPlanes),T.push(B.numClipIntersection),T.push(B.depthPacking)}function E(T,B){a.disableAll(),B.instancing&&a.enable(0),B.instancingColor&&a.enable(1),B.instancingMorph&&a.enable(2),B.matcap&&a.enable(3),B.envMap&&a.enable(4),B.normalMapObjectSpace&&a.enable(5),B.normalMapTangentSpace&&a.enable(6),B.clearcoat&&a.enable(7),B.iridescence&&a.enable(8),B.alphaTest&&a.enable(9),B.vertexColors&&a.enable(10),B.vertexAlphas&&a.enable(11),B.vertexUv1s&&a.enable(12),B.vertexUv2s&&a.enable(13),B.vertexUv3s&&a.enable(14),B.vertexTangents&&a.enable(15),B.anisotropy&&a.enable(16),B.alphaHash&&a.enable(17),B.batching&&a.enable(18),B.dispersion&&a.enable(19),B.batchingColor&&a.enable(20),B.gradientMap&&a.enable(21),B.packedNormalMap&&a.enable(22),B.vertexNormals&&a.enable(23),T.push(a.mask),a.disableAll(),B.fog&&a.enable(0),B.useFog&&a.enable(1),B.flatShading&&a.enable(2),B.logarithmicDepthBuffer&&a.enable(3),B.reversedDepthBuffer&&a.enable(4),B.skinning&&a.enable(5),B.morphTargets&&a.enable(6),B.morphNormals&&a.enable(7),B.morphColors&&a.enable(8),B.premultipliedAlpha&&a.enable(9),B.shadowMapEnabled&&a.enable(10),B.doubleSided&&a.enable(11),B.flipSided&&a.enable(12),B.useDepthPacking&&a.enable(13),B.dithering&&a.enable(14),B.transmission&&a.enable(15),B.sheen&&a.enable(16),B.opaque&&a.enable(17),B.pointsUvs&&a.enable(18),B.decodeVideoTexture&&a.enable(19),B.decodeVideoTextureEmissive&&a.enable(20),B.alphaToCoverage&&a.enable(21),B.numLightProbeGrids>0&&a.enable(22),T.push(a.mask)}function A(T){const B=p[T.type];let Z;if(B){const Y=Xn[B];Z=Gv.clone(Y.uniforms)}else Z=T.uniforms;return Z}function w(T,B){let Z=u.get(B);return Z!==void 0?++Z.usedTimes:(Z=new kS(n,B,T,r),c.push(Z),u.set(B,Z)),Z}function V(T){if(--T.usedTimes===0){const B=c.indexOf(T);c[B]=c[c.length-1],c.pop(),u.delete(T.cacheKey),T.destroy()}}function N(T){o.remove(T)}function k(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:A,acquireProgram:w,releaseProgram:V,releaseShaderCache:N,programs:c,dispose:k}}function qS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function KS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,b,g,_){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:_},n[e]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=v,E.materialVariant=a(h),E.groupOrder=b,E.renderOrder=h.renderOrder,E.z=g,E.group=_),e++,E}function l(h,p,v,b,g,_){const E=o(h,p,v,b,g,_);v.transmission>0?i.push(E):v.transparent===!0?r.push(E):t.push(E)}function c(h,p,v,b,g,_){const E=o(h,p,v,b,g,_);v.transmission>0?i.unshift(E):v.transparent===!0?r.unshift(E):t.unshift(E)}function u(h,p){t.length>1&&t.sort(h||KS),i.length>1&&i.sort(p||_d),r.length>1&&r.sort(p||_d)}function f(){for(let h=e,p=n.length;h<p;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function $S(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new vd,n.set(i,[a])):r>=s.length?(a=new vd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new bt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function JS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QS=0;function eM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tM(n){const e=new ZS,t=JS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const r=new ee,s=new St,a=new St;function o(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,v=0,b=0,g=0,_=0,E=0,A=0,w=0,V=0,N=0,k=0;c.sort(eM);for(let B=0,Z=c.length;B<Z;B++){const Y=c[B],fe=Y.color,Ee=Y.intensity,Me=Y.distance;let te=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===zr?te=Y.shadow.map.texture:te=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)u+=fe.r*Ee,f+=fe.g*Ee,h+=fe.b*Ee;else if(Y.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(Y.sh.coefficients[ce],Ee);k++}else if(Y.isDirectionalLight){const ce=e.get(Y);if(ce.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const re=Y.shadow,Re=t.get(Y);Re.shadowIntensity=re.intensity,Re.shadowBias=re.bias,Re.shadowNormalBias=re.normalBias,Re.shadowRadius=re.radius,Re.shadowMapSize=re.mapSize,i.directionalShadow[p]=Re,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=Y.shadow.matrix,E++}i.directional[p]=ce,p++}else if(Y.isSpotLight){const ce=e.get(Y);ce.position.setFromMatrixPosition(Y.matrixWorld),ce.color.copy(fe).multiplyScalar(Ee),ce.distance=Me,ce.coneCos=Math.cos(Y.angle),ce.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ce.decay=Y.decay,i.spot[b]=ce;const re=Y.shadow;if(Y.map&&(i.spotLightMap[V]=Y.map,V++,re.updateMatrices(Y),Y.castShadow&&N++),i.spotLightMatrix[b]=re.matrix,Y.castShadow){const Re=t.get(Y);Re.shadowIntensity=re.intensity,Re.shadowBias=re.bias,Re.shadowNormalBias=re.normalBias,Re.shadowRadius=re.radius,Re.shadowMapSize=re.mapSize,i.spotShadow[b]=Re,i.spotShadowMap[b]=te,w++}b++}else if(Y.isRectAreaLight){const ce=e.get(Y);ce.color.copy(fe).multiplyScalar(Ee),ce.halfWidth.set(Y.width*.5,0,0),ce.halfHeight.set(0,Y.height*.5,0),i.rectArea[g]=ce,g++}else if(Y.isPointLight){const ce=e.get(Y);if(ce.color.copy(Y.color).multiplyScalar(Y.intensity),ce.distance=Y.distance,ce.decay=Y.decay,Y.castShadow){const re=Y.shadow,Re=t.get(Y);Re.shadowIntensity=re.intensity,Re.shadowBias=re.bias,Re.shadowNormalBias=re.normalBias,Re.shadowRadius=re.radius,Re.shadowMapSize=re.mapSize,Re.shadowCameraNear=re.camera.near,Re.shadowCameraFar=re.camera.far,i.pointShadow[v]=Re,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=Y.shadow.matrix,A++}i.point[v]=ce,v++}else if(Y.isHemisphereLight){const ce=e.get(Y);ce.skyColor.copy(Y.color).multiplyScalar(Ee),ce.groundColor.copy(Y.groundColor).multiplyScalar(Ee),i.hemi[_]=ce,_++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Qe.LTC_FLOAT_1,i.rectAreaLTC2=Qe.LTC_FLOAT_2):(i.rectAreaLTC1=Qe.LTC_HALF_1,i.rectAreaLTC2=Qe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==p||T.pointLength!==v||T.spotLength!==b||T.rectAreaLength!==g||T.hemiLength!==_||T.numDirectionalShadows!==E||T.numPointShadows!==A||T.numSpotShadows!==w||T.numSpotMaps!==V||T.numLightProbes!==k)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=g,i.point.length=v,i.hemi.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+V-N,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=k,T.directionalLength=p,T.pointLength=v,T.spotLength=b,T.rectAreaLength=g,T.hemiLength=_,T.numDirectionalShadows=E,T.numPointShadows=A,T.numSpotShadows=w,T.numSpotMaps=V,T.numLightProbes=k,i.version=QS++)}function l(c,u){let f=0,h=0,p=0,v=0,b=0;const g=u.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){const A=c[_];if(A.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),f++}else if(A.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),p++}else if(A.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function xd(n){const e=new tM(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xd(n),e.set(r,[o])):s>=a.length?(o=new xd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sM=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],aM=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],bd=new St,Qs=new ee,fc=new ee;function oM(n,e,t){let i=new af;const r=new Nt,s=new Nt,a=new qt,o=new Hv,l=new Wv,c={},u=t.maxTextureSize,f={[er]:Ln,[Ln]:er,[Qn]:Qn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:iM,fragmentShader:rM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Pn;v.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new xn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let _=this.type;this.render=function(N,k,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;this.type===a0&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mo);const B=n.getRenderTarget(),Z=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),fe=n.state;fe.setBlending(Ki),fe.buffers.depth.getReversed()===!0?fe.buffers.color.setClear(0,0,0,0):fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const Ee=_!==this.type;Ee&&k.traverse(function(Me){Me.material&&(Array.isArray(Me.material)?Me.material.forEach(te=>te.needsUpdate=!0):Me.material.needsUpdate=!0)});for(let Me=0,te=N.length;Me<te;Me++){const ce=N[Me],re=ce.shadow;if(re===void 0){ot("WebGLShadowMap:",ce,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;r.copy(re.mapSize);const Re=re.getFrameExtents();r.multiply(Re),s.copy(re.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Re.x),r.x=s.x*Re.x,re.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Re.y),r.y=s.y*Re.y,re.mapSize.y=s.y));const Ue=n.state.buffers.depth.getReversed();if(re.camera._reversedDepth=Ue,re.map===null||Ee===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===ia){if(ce.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new Ai(r.x,r.y,{format:zr,type:tr,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),re.map.texture.name=ce.name+".shadowMap",re.map.depthTexture=new Cs(r.x,r.y,jn),re.map.depthTexture.name=ce.name+".shadowMapDepth",re.map.depthTexture.format=nr,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=cn,re.map.depthTexture.magFilter=cn}else ce.isPointLight?(re.map=new gm(r.x),re.map.depthTexture=new Ov(r.x,Ci)):(re.map=new Ai(r.x,r.y),re.map.depthTexture=new Cs(r.x,r.y,Ci)),re.map.depthTexture.name=ce.name+".shadowMap",re.map.depthTexture.format=nr,this.type===Mo?(re.map.depthTexture.compareFunction=Ue?ef:Qu,re.map.depthTexture.minFilter=Jt,re.map.depthTexture.magFilter=Jt):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=cn,re.map.depthTexture.magFilter=cn);re.camera.updateProjectionMatrix()}const Ke=re.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<Ke;et++){if(re.map.isWebGLCubeRenderTarget)n.setRenderTarget(re.map,et),n.clear();else{et===0&&(n.setRenderTarget(re.map),n.clear());const nt=re.getViewport(et);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),fe.viewport(a)}if(ce.isPointLight){const nt=re.camera,Mt=re.matrix,Ut=ce.distance||nt.far;Ut!==nt.far&&(nt.far=Ut,nt.updateProjectionMatrix()),Qs.setFromMatrixPosition(ce.matrixWorld),nt.position.copy(Qs),fc.copy(nt.position),fc.add(sM[et]),nt.up.copy(aM[et]),nt.lookAt(fc),nt.updateMatrixWorld(),Mt.makeTranslation(-Qs.x,-Qs.y,-Qs.z),bd.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),re._frustum.setFromProjectionMatrix(bd,nt.coordinateSystem,nt.reversedDepth)}else re.updateMatrices(ce);i=re.getFrustum(),w(k,T,re.camera,ce,this.type)}re.isPointLightShadow!==!0&&this.type===ia&&E(re,T),re.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(B,Z,Y)};function E(N,k){const T=e.update(b);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ai(r.x,r.y,{format:zr,type:tr})),h.uniforms.shadow_pass.value=N.map.depthTexture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(k,null,T,h,b,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(k,null,T,p,b,null)}function A(N,k,T,B){let Z=null;const Y=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(Y!==void 0)Z=Y;else if(Z=T.isPointLight===!0?l:o,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const fe=Z.uuid,Ee=k.uuid;let Me=c[fe];Me===void 0&&(Me={},c[fe]=Me);let te=Me[Ee];te===void 0&&(te=Z.clone(),Me[Ee]=te,k.addEventListener("dispose",V)),Z=te}if(Z.visible=k.visible,Z.wireframe=k.wireframe,B===ia?Z.side=k.shadowSide!==null?k.shadowSide:k.side:Z.side=k.shadowSide!==null?k.shadowSide:f[k.side],Z.alphaMap=k.alphaMap,Z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,Z.map=k.map,Z.clipShadows=k.clipShadows,Z.clippingPlanes=k.clippingPlanes,Z.clipIntersection=k.clipIntersection,Z.displacementMap=k.displacementMap,Z.displacementScale=k.displacementScale,Z.displacementBias=k.displacementBias,Z.wireframeLinewidth=k.wireframeLinewidth,Z.linewidth=k.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const fe=n.properties.get(Z);fe.light=T}return Z}function w(N,k,T,B,Z){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Z===ia)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const Ee=e.update(N),Me=N.material;if(Array.isArray(Me)){const te=Ee.groups;for(let ce=0,re=te.length;ce<re;ce++){const Re=te[ce],Ue=Me[Re.materialIndex];if(Ue&&Ue.visible){const Ke=A(N,Ue,B,Z);N.onBeforeShadow(n,N,k,T,Ee,Ke,Re),n.renderBufferDirect(T,null,Ee,Ke,N,Re),N.onAfterShadow(n,N,k,T,Ee,Ke,Re)}}}else if(Me.visible){const te=A(N,Me,B,Z);N.onBeforeShadow(n,N,k,T,Ee,te,null),n.renderBufferDirect(T,null,Ee,te,N,null),N.onAfterShadow(n,N,k,T,Ee,te,null)}}const fe=N.children;for(let Ee=0,Me=fe.length;Ee<Me;Ee++)w(fe[Ee],k,T,B,Z)}function V(N){N.target.removeEventListener("dispose",V);for(const T in c){const B=c[T],Z=N.target.uuid;Z in B&&(B[Z].dispose(),delete B[Z])}}}function lM(n,e){function t(){let H=!1;const Ge=new qt;let ve=null;const $e=new qt(0,0,0,0);return{setMask:function(de){ve!==de&&!H&&(n.colorMask(de,de,de,de),ve=de)},setLocked:function(de){H=de},setClear:function(de,Oe,Be,_t,Wt){Wt===!0&&(de*=_t,Oe*=_t,Be*=_t),Ge.set(de,Oe,Be,_t),$e.equals(Ge)===!1&&(n.clearColor(de,Oe,Be,_t),$e.copy(Ge))},reset:function(){H=!1,ve=null,$e.set(-1,0,0,0)}}}function i(){let H=!1,Ge=!1,ve=null,$e=null,de=null;return{setReversed:function(Oe){if(Ge!==Oe){const Be=e.get("EXT_clip_control");Oe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ge=Oe;const _t=de;de=null,this.setClear(_t)}},getReversed:function(){return Ge},setTest:function(Oe){Oe?je(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(Oe){ve!==Oe&&!H&&(n.depthMask(Oe),ve=Oe)},setFunc:function(Oe){if(Ge&&(Oe=H0[Oe]),$e!==Oe){switch(Oe){case Cc:n.depthFunc(n.NEVER);break;case Pc:n.depthFunc(n.ALWAYS);break;case Dc:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case Fc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$e=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){de!==Oe&&(de=Oe,Ge&&(Oe=1-Oe),n.clearDepth(Oe))},reset:function(){H=!1,ve=null,$e=null,de=null,Ge=!1}}}function r(){let H=!1,Ge=null,ve=null,$e=null,de=null,Oe=null,Be=null,_t=null,Wt=null;return{setTest:function(lt){H||(lt?je(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(lt){Ge!==lt&&!H&&(n.stencilMask(lt),Ge=lt)},setFunc:function(lt,Qt,mn){(ve!==lt||$e!==Qt||de!==mn)&&(n.stencilFunc(lt,Qt,mn),ve=lt,$e=Qt,de=mn)},setOp:function(lt,Qt,mn){(Oe!==lt||Be!==Qt||_t!==mn)&&(n.stencilOp(lt,Qt,mn),Oe=lt,Be=Qt,_t=mn)},setLocked:function(lt){H=lt},setClear:function(lt){Wt!==lt&&(n.clearStencil(lt),Wt=lt)},reset:function(){H=!1,Ge=null,ve=null,$e=null,de=null,Oe=null,Be=null,_t=null,Wt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,v=[],b=null,g=!1,_=null,E=null,A=null,w=null,V=null,N=null,k=null,T=new bt(0,0,0),B=0,Z=!1,Y=null,fe=null,Ee=null,Me=null,te=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Re=0;const Ue=n.getParameter(n.VERSION);Ue.indexOf("WebGL")!==-1?(Re=parseFloat(/^WebGL (\d)/.exec(Ue)[1]),re=Re>=1):Ue.indexOf("OpenGL ES")!==-1&&(Re=parseFloat(/^OpenGL ES (\d)/.exec(Ue)[1]),re=Re>=2);let Ke=null,et={};const nt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Ut=new qt().fromArray(nt),ft=new qt().fromArray(Mt);function Te(H,Ge,ve,$e){const de=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(H,Oe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<ve;Be++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ge,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Ge+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Oe}const Ze={};Ze[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ze[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ze[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),je(n.DEPTH_TEST),a.setFunc(Ts),we(!1),De(th),je(n.CULL_FACE),Se(Ki);function je(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ct(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function ut(H,Ge){return h[H]!==Ge?(n.bindFramebuffer(H,Ge),h[H]=Ge,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ge),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ge),!0):!1}function ht(H,Ge){let ve=v,$e=!1;if(H){ve=p.get(Ge),ve===void 0&&(ve=[],p.set(Ge,ve));const de=H.textures;if(ve.length!==de.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,Be=de.length;Oe<Be;Oe++)ve[Oe]=n.COLOR_ATTACHMENT0+Oe;ve.length=de.length,$e=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,$e=!0);$e&&n.drawBuffers(ve)}function R(H){return b!==H?(n.useProgram(H),b=H,!0):!1}const m={[Ir]:n.FUNC_ADD,[l0]:n.FUNC_SUBTRACT,[c0]:n.FUNC_REVERSE_SUBTRACT};m[u0]=n.MIN,m[f0]=n.MAX;const he={[h0]:n.ZERO,[d0]:n.ONE,[p0]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[b0]:n.SRC_ALPHA_SATURATE,[v0]:n.DST_COLOR,[g0]:n.DST_ALPHA,[m0]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[x0]:n.ONE_MINUS_DST_COLOR,[_0]:n.ONE_MINUS_DST_ALPHA,[y0]:n.CONSTANT_COLOR,[E0]:n.ONE_MINUS_CONSTANT_COLOR,[S0]:n.CONSTANT_ALPHA,[M0]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(H,Ge,ve,$e,de,Oe,Be,_t,Wt,lt){if(H===Ki){g===!0&&(ct(n.BLEND),g=!1);return}if(g===!1&&(je(n.BLEND),g=!0),H!==o0){if(H!==_||lt!==Z){if((E!==Ir||V!==Ir)&&(n.blendEquation(n.FUNC_ADD),E=Ir,V=Ir),lt)switch(H){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nh:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:dt("WebGLState: Invalid blending: ",H);break}else switch(H){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ih:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",H);break}A=null,w=null,N=null,k=null,T.set(0,0,0),B=0,_=H,Z=lt}return}de=de||Ge,Oe=Oe||ve,Be=Be||$e,(Ge!==E||de!==V)&&(n.blendEquationSeparate(m[Ge],m[de]),E=Ge,V=de),(ve!==A||$e!==w||Oe!==N||Be!==k)&&(n.blendFuncSeparate(he[ve],he[$e],he[Oe],he[Be]),A=ve,w=$e,N=Oe,k=Be),(_t.equals(T)===!1||Wt!==B)&&(n.blendColor(_t.r,_t.g,_t.b,Wt),T.copy(_t),B=Wt),_=H,Z=!1}function me(H,Ge){H.side===Qn?ct(n.CULL_FACE):je(n.CULL_FACE);let ve=H.side===Ln;Ge&&(ve=!ve),we(ve),H.blending===bs&&H.transparent===!1?Se(Ki):Se(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const $e=H.stencilWrite;o.setTest($e),$e&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),F(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?je(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(H){Y!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),Y=H)}function De(H){H!==r0?(je(n.CULL_FACE),H!==fe&&(H===th?n.cullFace(n.BACK):H===s0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),fe=H}function Ne(H){H!==Ee&&(re&&n.lineWidth(H),Ee=H)}function F(H,Ge,ve){H?(je(n.POLYGON_OFFSET_FILL),(Me!==Ge||te!==ve)&&(Me=Ge,te=ve,a.getReversed()&&(Ge=-Ge),n.polygonOffset(Ge,ve))):ct(n.POLYGON_OFFSET_FILL)}function ue(H){H?je(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ze(H){H===void 0&&(H=n.TEXTURE0+ce-1),Ke!==H&&(n.activeTexture(H),Ke=H)}function Ae(H,Ge,ve){ve===void 0&&(Ke===null?ve=n.TEXTURE0+ce-1:ve=Ke);let $e=et[ve];$e===void 0&&($e={type:void 0,texture:void 0},et[ve]=$e),($e.type!==H||$e.texture!==Ge)&&(Ke!==ve&&(n.activeTexture(ve),Ke=ve),n.bindTexture(H,Ge||Ze[H]),$e.type=H,$e.texture=Ge)}function _e(){const H=et[Ke];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function y(){try{n.texSubImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function K(){try{n.texSubImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function be(){try{n.compressedTexSubImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function ke(){try{n.texStorage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function Xe(){try{n.texStorage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function ye(){try{n.texImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function Pe(){try{n.texImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function Ye(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function Fe(H,Ge){f[H]!==Ge&&(n.pixelStorei(H,Ge),f[H]=Ge)}function Ve(H){Ut.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ut.copy(H))}function He(H){ft.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ft.copy(H))}function pt(H,Ge){let ve=c.get(Ge);ve===void 0&&(ve=new WeakMap,c.set(Ge,ve));let $e=ve.get(H);$e===void 0&&($e=n.getUniformBlockIndex(Ge,H.name),ve.set(H,$e))}function at(H,Ge){const $e=c.get(Ge).get(H);l.get(Ge)!==$e&&(n.uniformBlockBinding(Ge,$e,H.__bindingPointIndex),l.set(Ge,$e))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},Ke=null,et={},h={},p=new WeakMap,v=[],b=null,g=!1,_=null,E=null,A=null,w=null,V=null,N=null,k=null,T=new bt(0,0,0),B=0,Z=!1,Y=null,fe=null,Ee=null,Me=null,te=null,Ut.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:je,disable:ct,bindFramebuffer:ut,drawBuffers:ht,useProgram:R,setBlending:Se,setMaterial:me,setFlipSided:we,setCullFace:De,setLineWidth:Ne,setPolygonOffset:F,setScissorTest:ue,activeTexture:ze,bindTexture:Ae,unbindTexture:_e,compressedTexImage2D:it,compressedTexImage3D:P,texImage2D:ye,texImage3D:Pe,pixelStorei:Fe,getParameter:Ye,updateUBOMapping:pt,uniformBlockBinding:at,texStorage2D:ke,texStorage3D:Xe,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:be,compressedTexSubImage3D:Ce,scissor:Ve,viewport:He,reset:It}}function cM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,y){return v?new OffscreenCanvas(P,y):wa("canvas")}function g(P,y,K){let be=1;const Ce=it(P);if((Ce.width>K||Ce.height>K)&&(be=K/Math.max(Ce.width,Ce.height)),be<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ke=Math.floor(be*Ce.width),Xe=Math.floor(be*Ce.height);h===void 0&&(h=b(ke,Xe));const ye=y?b(ke,Xe):h;return ye.width=ke,ye.height=Xe,ye.getContext("2d").drawImage(P,0,0,ke,Xe),ot("WebGLRenderer: Texture has been resized from ("+Ce.width+"x"+Ce.height+") to ("+ke+"x"+Xe+")."),ye}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+Ce.width+"x"+Ce.height+")."),P;return P}function _(P){return P.generateMipmaps}function E(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,y,K,be,Ce,ke=!1){if(P!==null){if(n[P]!==void 0)return n[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Xe;be&&(Xe=e.get("EXT_texture_norm16"),Xe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=y;if(y===n.RED&&(K===n.FLOAT&&(ye=n.R32F),K===n.HALF_FLOAT&&(ye=n.R16F),K===n.UNSIGNED_BYTE&&(ye=n.R8),K===n.UNSIGNED_SHORT&&Xe&&(ye=Xe.R16_EXT),K===n.SHORT&&Xe&&(ye=Xe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ye=n.R8UI),K===n.UNSIGNED_SHORT&&(ye=n.R16UI),K===n.UNSIGNED_INT&&(ye=n.R32UI),K===n.BYTE&&(ye=n.R8I),K===n.SHORT&&(ye=n.R16I),K===n.INT&&(ye=n.R32I)),y===n.RG&&(K===n.FLOAT&&(ye=n.RG32F),K===n.HALF_FLOAT&&(ye=n.RG16F),K===n.UNSIGNED_BYTE&&(ye=n.RG8),K===n.UNSIGNED_SHORT&&Xe&&(ye=Xe.RG16_EXT),K===n.SHORT&&Xe&&(ye=Xe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ye=n.RG8UI),K===n.UNSIGNED_SHORT&&(ye=n.RG16UI),K===n.UNSIGNED_INT&&(ye=n.RG32UI),K===n.BYTE&&(ye=n.RG8I),K===n.SHORT&&(ye=n.RG16I),K===n.INT&&(ye=n.RG32I)),y===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ye=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ye=n.RGB16UI),K===n.UNSIGNED_INT&&(ye=n.RGB32UI),K===n.BYTE&&(ye=n.RGB8I),K===n.SHORT&&(ye=n.RGB16I),K===n.INT&&(ye=n.RGB32I)),y===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ye=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ye=n.RGBA16UI),K===n.UNSIGNED_INT&&(ye=n.RGBA32UI),K===n.BYTE&&(ye=n.RGBA8I),K===n.SHORT&&(ye=n.RGBA16I),K===n.INT&&(ye=n.RGBA32I)),y===n.RGB&&(K===n.UNSIGNED_SHORT&&Xe&&(ye=Xe.RGB16_EXT),K===n.SHORT&&Xe&&(ye=Xe.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(ye=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ye=n.R11F_G11F_B10F)),y===n.RGBA){const Pe=ke?ko:Dt.getTransfer(Ce);K===n.FLOAT&&(ye=n.RGBA32F),K===n.HALF_FLOAT&&(ye=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ye=Pe===Vt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Xe&&(ye=Xe.RGBA16_EXT),K===n.SHORT&&Xe&&(ye=Xe.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function V(P,y){let K;return P?y===null||y===Ci||y===Ma?K=n.DEPTH24_STENCIL8:y===jn?K=n.DEPTH32F_STENCIL8:y===Sa&&(K=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===Ma?K=n.DEPTH_COMPONENT24:y===jn?K=n.DEPTH_COMPONENT32F:y===Sa&&(K=n.DEPTH_COMPONENT16),K}function N(P,y){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==Jt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function k(P){const y=P.target;y.removeEventListener("dispose",k),B(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function T(P){const y=P.target;y.removeEventListener("dispose",T),Y(y)}function B(P){const y=i.get(P);if(y.__webglInit===void 0)return;const K=P.source,be=p.get(K);if(be){const Ce=be[y.__cacheKey];Ce.usedTimes--,Ce.usedTimes===0&&Z(P),Object.keys(be).length===0&&p.delete(K)}i.remove(P)}function Z(P){const y=i.get(P);n.deleteTexture(y.__webglTexture);const K=P.source,be=p.get(K);delete be[y.__cacheKey],a.memory.textures--}function Y(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(y.__webglFramebuffer[be]))for(let Ce=0;Ce<y.__webglFramebuffer[be].length;Ce++)n.deleteFramebuffer(y.__webglFramebuffer[be][Ce]);else n.deleteFramebuffer(y.__webglFramebuffer[be]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[be])}else{if(Array.isArray(y.__webglFramebuffer))for(let be=0;be<y.__webglFramebuffer.length;be++)n.deleteFramebuffer(y.__webglFramebuffer[be]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let be=0;be<y.__webglColorRenderbuffer.length;be++)y.__webglColorRenderbuffer[be]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[be]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=P.textures;for(let be=0,Ce=K.length;be<Ce;be++){const ke=i.get(K[be]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),a.memory.textures--),i.remove(K[be])}i.remove(P)}let fe=0;function Ee(){fe=0}function Me(){return fe}function te(P){fe=P}function ce(){const P=fe;return P>=r.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),fe+=1,P}function re(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function Re(P,y){const K=i.get(P);if(P.isVideoTexture&&Ae(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const be=P.image;if(be===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(K,P,y);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+y)}function Ue(P,y){const K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ct(K,P,y);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+y)}function Ke(P,y){const K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ct(K,P,y);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+y)}function et(P,y){const K=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){ut(K,P,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+y)}const nt={[Rs]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},Mt={[cn]:n.NEAREST,[Hp]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[To]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Ut={[L0]:n.NEVER,[O0]:n.ALWAYS,[I0]:n.LESS,[Qu]:n.LEQUAL,[F0]:n.EQUAL,[ef]:n.GEQUAL,[N0]:n.GREATER,[U0]:n.NOTEQUAL};function ft(P,y){if(y.type===jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Jt||y.magFilter===To||y.magFilter===ra||y.magFilter===ji||y.minFilter===Jt||y.minFilter===To||y.minFilter===ra||y.minFilter===ji)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,nt[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,nt[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,nt[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Mt[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Mt[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ut[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==ra&&y.minFilter!==ji||y.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Te(P,y){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",k));const be=y.source;let Ce=p.get(be);Ce===void 0&&(Ce={},p.set(be,Ce));const ke=re(y);if(ke!==P.__cacheKey){Ce[ke]===void 0&&(Ce[ke]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),Ce[ke].usedTimes++;const Xe=Ce[P.__cacheKey];Xe!==void 0&&(Ce[P.__cacheKey].usedTimes--,Xe.usedTimes===0&&Z(y)),P.__cacheKey=ke,P.__webglTexture=Ce[ke].texture}return K}function Ze(P,y,K){return Math.floor(Math.floor(P/K)/y)}function je(P,y,K,be){const ke=P.updateRanges;if(ke.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,K,be,y.data);else{ke.sort((Fe,Ve)=>Fe.start-Ve.start);let Xe=0;for(let Fe=1;Fe<ke.length;Fe++){const Ve=ke[Xe],He=ke[Fe],pt=Ve.start+Ve.count,at=Ze(He.start,y.width,4),It=Ze(Ve.start,y.width,4);He.start<=pt+1&&at===It&&Ze(He.start+He.count-1,y.width,4)===at?Ve.count=Math.max(Ve.count,He.start+He.count-Ve.start):(++Xe,ke[Xe]=He)}ke.length=Xe+1;const ye=t.getParameter(n.UNPACK_ROW_LENGTH),Pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,Ve=ke.length;Fe<Ve;Fe++){const He=ke[Fe],pt=Math.floor(He.start/4),at=Math.ceil(He.count/4),It=pt%y.width,H=Math.floor(pt/y.width),Ge=at,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,It),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,It,H,Ge,ve,K,be,y.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ye),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ye)}}function ct(P,y,K){let be=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(be=n.TEXTURE_3D);const Ce=Te(P,y),ke=y.source;t.bindTexture(be,P.__webglTexture,n.TEXTURE0+K);const Xe=i.get(ke);if(ke.version!==Xe.__version||Ce===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ve=Dt.getPrimaries(Dt.workingColorSpace),$e=y.colorSpace===gr?null:Dt.getPrimaries(y.colorSpace),de=y.colorSpace===gr||ve===$e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let Pe=g(y.image,!1,r.maxTextureSize);Pe=_e(y,Pe);const Ye=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type);let Ve=w(y.internalFormat,Ye,Fe,y.normalized,y.colorSpace,y.isVideoTexture);ft(be,y);let He;const pt=y.mipmaps,at=y.isVideoTexture!==!0,It=Xe.__version===void 0||Ce===!0,H=ke.dataReady,Ge=N(y,Pe);if(y.isDepthTexture)Ve=V(y.format===Nr,y.type),It&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ve,Pe.width,Pe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,Pe.width,Pe.height,0,Ye,Fe,null));else if(y.isDataTexture)if(pt.length>0){at&&It&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,pt[0].width,pt[0].height);for(let ve=0,$e=pt.length;ve<$e;ve++)He=pt[ve],at?H&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,He.width,He.height,Ye,Fe,He.data):t.texImage2D(n.TEXTURE_2D,ve,Ve,He.width,He.height,0,Ye,Fe,He.data);y.generateMipmaps=!1}else at?(It&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,Pe.width,Pe.height),H&&je(y,Pe,Ye,Fe)):t.texImage2D(n.TEXTURE_2D,0,Ve,Pe.width,Pe.height,0,Ye,Fe,Pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){at&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,pt[0].width,pt[0].height,Pe.depth);for(let ve=0,$e=pt.length;ve<$e;ve++)if(He=pt[ve],y.format!==Yn)if(Ye!==null)if(at){if(H)if(y.layerUpdates.size>0){const de=Zh(He.width,He.height,y.format,y.type);for(const Oe of y.layerUpdates){const Be=He.data.subarray(Oe*de/He.data.BYTES_PER_ELEMENT,(Oe+1)*de/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Oe,He.width,He.height,1,Ye,Be)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,He.width,He.height,Pe.depth,Ye,He.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ve,He.width,He.height,Pe.depth,0,He.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,He.width,He.height,Pe.depth,Ye,Fe,He.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ve,He.width,He.height,Pe.depth,0,Ye,Fe,He.data)}else{at&&It&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,pt[0].width,pt[0].height);for(let ve=0,$e=pt.length;ve<$e;ve++)He=pt[ve],y.format!==Yn?Ye!==null?at?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,He.width,He.height,Ye,He.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ve,He.width,He.height,0,He.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,He.width,He.height,Ye,Fe,He.data):t.texImage2D(n.TEXTURE_2D,ve,Ve,He.width,He.height,0,Ye,Fe,He.data)}else if(y.isDataArrayTexture)if(at){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,Pe.width,Pe.height,Pe.depth),H)if(y.layerUpdates.size>0){const ve=Zh(Pe.width,Pe.height,y.format,y.type);for(const $e of y.layerUpdates){const de=Pe.data.subarray($e*ve/Pe.data.BYTES_PER_ELEMENT,($e+1)*ve/Pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$e,Pe.width,Pe.height,1,Ye,Fe,de)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,Ye,Fe,Pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,Pe.width,Pe.height,Pe.depth,0,Ye,Fe,Pe.data);else if(y.isData3DTexture)at?(It&&t.texStorage3D(n.TEXTURE_3D,Ge,Ve,Pe.width,Pe.height,Pe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,Ye,Fe,Pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,Pe.width,Pe.height,Pe.depth,0,Ye,Fe,Pe.data);else if(y.isFramebufferTexture){if(It)if(at)t.texStorage2D(n.TEXTURE_2D,Ge,Ve,Pe.width,Pe.height);else{let ve=Pe.width,$e=Pe.height;for(let de=0;de<Ge;de++)t.texImage2D(n.TEXTURE_2D,de,Ve,ve,$e,0,Ye,Fe,null),ve>>=1,$e>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),Pe.parentNode!==ve){ve.appendChild(Pe),f.add(y),ve.onpaint=_t=>{const Wt=_t.changedElements;for(const lt of f)Wt.includes(lt.image)&&(lt.needsUpdate=!0)},ve.requestPaint();return}const $e=0,de=n.RGBA,Oe=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,$e,de,Oe,Be,Pe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pt.length>0){if(at&&It){const ve=it(pt[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ve.width,ve.height)}for(let ve=0,$e=pt.length;ve<$e;ve++)He=pt[ve],at?H&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ye,Fe,He):t.texImage2D(n.TEXTURE_2D,ve,Ve,Ye,Fe,He);y.generateMipmaps=!1}else if(at){if(It){const ve=it(Pe);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ve.width,ve.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ye,Fe,Pe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ye,Fe,Pe);_(y)&&E(be),Xe.__version=ke.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ut(P,y,K){if(y.image.length!==6)return;const be=Te(P,y),Ce=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+K);const ke=i.get(Ce);if(Ce.version!==ke.__version||be===!0){t.activeTexture(n.TEXTURE0+K);const Xe=Dt.getPrimaries(Dt.workingColorSpace),ye=y.colorSpace===gr?null:Dt.getPrimaries(y.colorSpace),Pe=y.colorSpace===gr||Xe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,Ve=[];for(let Oe=0;Oe<6;Oe++)!Ye&&!Fe?Ve[Oe]=g(y.image[Oe],!0,r.maxCubemapSize):Ve[Oe]=Fe?y.image[Oe].image:y.image[Oe],Ve[Oe]=_e(y,Ve[Oe]);const He=Ve[0],pt=s.convert(y.format,y.colorSpace),at=s.convert(y.type),It=w(y.internalFormat,pt,at,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,Ge=ke.__version===void 0||be===!0,ve=Ce.dataReady;let $e=N(y,He);ft(n.TEXTURE_CUBE_MAP,y);let de;if(Ye){H&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,It,He.width,He.height);for(let Oe=0;Oe<6;Oe++){de=Ve[Oe].mipmaps;for(let Be=0;Be<de.length;Be++){const _t=de[Be];y.format!==Yn?pt!==null?H?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be,0,0,_t.width,_t.height,pt,_t.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be,It,_t.width,_t.height,0,_t.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be,0,0,_t.width,_t.height,pt,at,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be,It,_t.width,_t.height,0,pt,at,_t.data)}}}else{if(de=y.mipmaps,H&&Ge){de.length>0&&$e++;const Oe=it(Ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,It,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(Fe){H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ve[Oe].width,Ve[Oe].height,pt,at,Ve[Oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,It,Ve[Oe].width,Ve[Oe].height,0,pt,at,Ve[Oe].data);for(let Be=0;Be<de.length;Be++){const Wt=de[Be].image[Oe].image;H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be+1,0,0,Wt.width,Wt.height,pt,at,Wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be+1,It,Wt.width,Wt.height,0,pt,at,Wt.data)}}else{H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,pt,at,Ve[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,It,pt,at,Ve[Oe]);for(let Be=0;Be<de.length;Be++){const _t=de[Be];H?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be+1,0,0,pt,at,_t.image[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Be+1,It,pt,at,_t.image[Oe])}}}_(y)&&E(n.TEXTURE_CUBE_MAP),ke.__version=Ce.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ht(P,y,K,be,Ce,ke){const Xe=s.convert(K.format,K.colorSpace),ye=s.convert(K.type),Pe=w(K.internalFormat,Xe,ye,K.normalized,K.colorSpace),Ye=i.get(y),Fe=i.get(K);if(Fe.__renderTarget=y,!Ye.__hasExternalTextures){const Ve=Math.max(1,y.width>>ke),He=Math.max(1,y.height>>ke);Ce===n.TEXTURE_3D||Ce===n.TEXTURE_2D_ARRAY?t.texImage3D(Ce,ke,Pe,Ve,He,y.depth,0,Xe,ye,null):t.texImage2D(Ce,ke,Pe,Ve,He,0,Xe,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ze(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,Ce,Fe.__webglTexture,0,ue(y)):(Ce===n.TEXTURE_2D||Ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,Ce,Fe.__webglTexture,ke),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(P,y,K){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const be=y.depthTexture,Ce=be&&be.isDepthTexture?be.type:null,ke=V(y.stencilBuffer,Ce),Xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ze(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(y),ke,y.width,y.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(y),ke,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ke,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Xe,n.RENDERBUFFER,P)}else{const be=y.textures;for(let Ce=0;Ce<be.length;Ce++){const ke=be[Ce],Xe=s.convert(ke.format,ke.colorSpace),ye=s.convert(ke.type),Pe=w(ke.internalFormat,Xe,ye,ke.normalized,ke.colorSpace);ze(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(y),Pe,y.width,y.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(y),Pe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function m(P,y,K){const be=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ce=i.get(y.depthTexture);if(Ce.__renderTarget=y,(!Ce.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),be){if(Ce.__webglInit===void 0&&(Ce.__webglInit=!0,y.depthTexture.addEventListener("dispose",k)),Ce.__webglTexture===void 0){Ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Ce.__webglTexture),ft(n.TEXTURE_CUBE_MAP,y.depthTexture);const Ye=s.convert(y.depthTexture.format),Fe=s.convert(y.depthTexture.type);let Ve;y.depthTexture.format===nr?Ve=n.DEPTH_COMPONENT24:y.depthTexture.format===Nr&&(Ve=n.DEPTH24_STENCIL8);for(let He=0;He<6;He++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ve,y.width,y.height,0,Ye,Fe,null)}}else Re(y.depthTexture,0);const ke=Ce.__webglTexture,Xe=ue(y),ye=be?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,Pe=y.depthTexture.format===Nr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===nr)ze(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ye,ke,0,Xe):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ye,ke,0);else if(y.depthTexture.format===Nr)ze(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ye,ke,0,Xe):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ye,ke,0);else throw new Error("Unknown depthTexture format")}function he(P){const y=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const be=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),be){const Ce=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,be.removeEventListener("dispose",Ce)};be.addEventListener("dispose",Ce),y.__depthDisposeCallback=Ce}y.__boundDepthTexture=be}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let be=0;be<6;be++)m(y.__webglFramebuffer[be],P,be);else{const be=P.texture.mipmaps;be&&be.length>0?m(y.__webglFramebuffer[0],P,0):m(y.__webglFramebuffer,P,0)}else if(K){y.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[be]),y.__webglDepthbuffer[be]===void 0)y.__webglDepthbuffer[be]=n.createRenderbuffer(),R(y.__webglDepthbuffer[be],P,!1);else{const Ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=y.__webglDepthbuffer[be];n.bindRenderbuffer(n.RENDERBUFFER,ke),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,ke)}}else{const be=P.texture.mipmaps;if(be&&be.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),R(y.__webglDepthbuffer,P,!1);else{const Ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ke),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,ke)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(P,y,K){const be=i.get(P);y!==void 0&&ht(be.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&he(P)}function me(P){const y=P.texture,K=i.get(P),be=i.get(y);P.addEventListener("dispose",T);const Ce=P.textures,ke=P.isWebGLCubeRenderTarget===!0,Xe=Ce.length>1;if(Xe||(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=y.version,a.memory.textures++),ke){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let Pe=0;Pe<y.mipmaps.length;Pe++)K.__webglFramebuffer[ye][Pe]=n.createFramebuffer()}else K.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<y.mipmaps.length;ye++)K.__webglFramebuffer[ye]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Xe)for(let ye=0,Pe=Ce.length;ye<Pe;ye++){const Ye=i.get(Ce[ye]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ze(P)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ye=0;ye<Ce.length;ye++){const Pe=Ce[ye];K.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[ye]);const Ye=s.convert(Pe.format,Pe.colorSpace),Fe=s.convert(Pe.type),Ve=w(Pe.internalFormat,Ye,Fe,Pe.normalized,Pe.colorSpace,P.isXRRenderTarget===!0),He=ue(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,K.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),R(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ke){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),ft(n.TEXTURE_CUBE_MAP,y);for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)ht(K.__webglFramebuffer[ye][Pe],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe);else ht(K.__webglFramebuffer[ye],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(y)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let ye=0,Pe=Ce.length;ye<Pe;ye++){const Ye=Ce[ye],Fe=i.get(Ye);let Ve=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ve=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ve,Fe.__webglTexture),ft(Ve,Ye),ht(K.__webglFramebuffer,P,Ye,n.COLOR_ATTACHMENT0+ye,Ve,0),_(Ye)&&E(Ve)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,be.__webglTexture),ft(ye,y),y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)ht(K.__webglFramebuffer[Pe],P,y,n.COLOR_ATTACHMENT0,ye,Pe);else ht(K.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,ye,0);_(y)&&E(ye),t.unbindTexture()}P.depthBuffer&&he(P)}function we(P){const y=P.textures;for(let K=0,be=y.length;K<be;K++){const Ce=y[K];if(_(Ce)){const ke=A(P),Xe=i.get(Ce).__webglTexture;t.bindTexture(ke,Xe),E(ke),t.unbindTexture()}}}const De=[],Ne=[];function F(P){if(P.samples>0){if(ze(P)===!1){const y=P.textures,K=P.width,be=P.height;let Ce=n.COLOR_BUFFER_BIT;const ke=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=i.get(P),ye=y.length>1;if(ye)for(let Ye=0;Ye<y.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ye=0;Ye<y.length;Ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ce|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ce|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ye]);const Fe=i.get(y[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,K,be,0,0,K,be,Ce,n.NEAREST),l===!0&&(De.length=0,Ne.length=0,De.push(n.COLOR_ATTACHMENT0+Ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(De.push(ke),Ne.push(ke),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ye=0;Ye<y.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ye]);const Fe=i.get(y[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ue(P){return Math.min(r.maxSamples,P.samples)}function ze(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(P){const y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function _e(P,y){const K=P.colorSpace,be=P.format,Ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==zn&&K!==gr&&(Dt.getTransfer(K)===Vt?(be!==Yn||Ce!==Bn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",K)),y}function it(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=Ee,this.getTextureUnits=Me,this.setTextureUnits=te,this.setTexture2D=Re,this.setTexture2DArray=Ue,this.setTexture3D=Ke,this.setTextureCube=et,this.rebindTextures=Se,this.setupRenderTarget=me,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uM(n,e){function t(i,r=gr){let s;const a=Dt.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wp)return n.BYTE;if(i===Xp)return n.SHORT;if(i===Sa)return n.UNSIGNED_SHORT;if(i===Xu)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===tr)return n.HALF_FLOAT;if(i===qp)return n.ALPHA;if(i===qu)return n.RGB;if(i===Yn)return n.RGBA;if(i===nr)return n.DEPTH_COMPONENT;if(i===Nr)return n.DEPTH_STENCIL;if(i===Ku)return n.RED;if(i===$u)return n.RED_INTEGER;if(i===zr)return n.RG;if(i===Zu)return n.RG_INTEGER;if(i===Ju)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===wo||i===Co)if(a===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uc||i===Oc||i===Bc||i===Gc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Vc||i===kc||i===Hc||i===Wc||i===Go||i===Xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zc||i===Vc)return a===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hc)return s.COMPRESSED_R11_EAC;if(i===Wc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return s.COMPRESSED_RG11_EAC;if(i===Xc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jc||i===Yc||i===qc||i===Kc||i===$c||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===iu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ru)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===au||i===ou||i===lu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===au)return a===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cu||i===uu||i===zo||i===fu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new am(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:fM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pM extends kr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const b=typeof XRWebGLBinding<"u",g=new dM,_={},E=t.getContextAttributes();let A=null,w=null;const V=[],N=[],k=new Nt;let T=null;const B=new wn;B.viewport=new qt;const Z=new wn;Z.viewport=new qt;const Y=[B,Z],fe=new px;let Ee=null,Me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Te){let Ze=V[Te];return Ze===void 0&&(Ze=new Bl,V[Te]=Ze),Ze.getTargetRaySpace()},this.getControllerGrip=function(Te){let Ze=V[Te];return Ze===void 0&&(Ze=new Bl,V[Te]=Ze),Ze.getGripSpace()},this.getHand=function(Te){let Ze=V[Te];return Ze===void 0&&(Ze=new Bl,V[Te]=Ze),Ze.getHandSpace()};function te(Te){const Ze=N.indexOf(Te.inputSource);if(Ze===-1)return;const je=V[Ze];je!==void 0&&(je.update(Te.inputSource,Te.frame,c||a),je.dispatchEvent({type:Te.type,data:Te.inputSource}))}function ce(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",re);for(let Te=0;Te<V.length;Te++){const Ze=N[Te];Ze!==null&&(N[Te]=null,V[Te].disconnect(Ze))}Ee=null,Me=null,g.reset();for(const Te in _)delete _[Te];e.setRenderTarget(A),p=null,h=null,f=null,r=null,w=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Te){s=Te,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Te){o=Te,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Te){c=Te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Te){if(r=Te,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",re),E.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let je=null,ct=null,ut=null;E.depth&&(ut=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,je=E.stencil?Nr:nr,ct=E.stencil?Ma:Ci);const ht={colorFormat:t.RGBA8,depthFormat:ut,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ht),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Ai(h.textureWidth,h.textureHeight,{format:Yn,type:Bn,depthTexture:new Cs(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,je),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const je={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,je),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ai(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(Te){for(let Ze=0;Ze<Te.removed.length;Ze++){const je=Te.removed[Ze],ct=N.indexOf(je);ct>=0&&(N[ct]=null,V[ct].disconnect(je))}for(let Ze=0;Ze<Te.added.length;Ze++){const je=Te.added[Ze];let ct=N.indexOf(je);if(ct===-1){for(let ht=0;ht<V.length;ht++)if(ht>=N.length){N.push(je),ct=ht;break}else if(N[ht]===null){N[ht]=je,ct=ht;break}if(ct===-1)break}const ut=V[ct];ut&&ut.connect(je)}}const Re=new ee,Ue=new ee;function Ke(Te,Ze,je){Re.setFromMatrixPosition(Ze.matrixWorld),Ue.setFromMatrixPosition(je.matrixWorld);const ct=Re.distanceTo(Ue),ut=Ze.projectionMatrix.elements,ht=je.projectionMatrix.elements,R=ut[14]/(ut[10]-1),m=ut[14]/(ut[10]+1),he=(ut[9]+1)/ut[5],Se=(ut[9]-1)/ut[5],me=(ut[8]-1)/ut[0],we=(ht[8]+1)/ht[0],De=R*me,Ne=R*we,F=ct/(-me+we),ue=F*-me;if(Ze.matrixWorld.decompose(Te.position,Te.quaternion,Te.scale),Te.translateX(ue),Te.translateZ(F),Te.matrixWorld.compose(Te.position,Te.quaternion,Te.scale),Te.matrixWorldInverse.copy(Te.matrixWorld).invert(),ut[10]===-1)Te.projectionMatrix.copy(Ze.projectionMatrix),Te.projectionMatrixInverse.copy(Ze.projectionMatrixInverse);else{const ze=R+F,Ae=m+F,_e=De-ue,it=Ne+(ct-ue),P=he*m/Ae*ze,y=Se*m/Ae*ze;Te.projectionMatrix.makePerspective(_e,it,P,y,ze,Ae),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert()}}function et(Te,Ze){Ze===null?Te.matrixWorld.copy(Te.matrix):Te.matrixWorld.multiplyMatrices(Ze.matrixWorld,Te.matrix),Te.matrixWorldInverse.copy(Te.matrixWorld).invert()}this.updateCamera=function(Te){if(r===null)return;let Ze=Te.near,je=Te.far;g.texture!==null&&(g.depthNear>0&&(Ze=g.depthNear),g.depthFar>0&&(je=g.depthFar)),fe.near=Z.near=B.near=Ze,fe.far=Z.far=B.far=je,(Ee!==fe.near||Me!==fe.far)&&(r.updateRenderState({depthNear:fe.near,depthFar:fe.far}),Ee=fe.near,Me=fe.far),fe.layers.mask=Te.layers.mask|6,B.layers.mask=fe.layers.mask&-5,Z.layers.mask=fe.layers.mask&-3;const ct=Te.parent,ut=fe.cameras;et(fe,ct);for(let ht=0;ht<ut.length;ht++)et(ut[ht],ct);ut.length===2?Ke(fe,B,Z):fe.projectionMatrix.copy(B.projectionMatrix),nt(Te,fe,ct)};function nt(Te,Ze,je){je===null?Te.matrix.copy(Ze.matrixWorld):(Te.matrix.copy(je.matrixWorld),Te.matrix.invert(),Te.matrix.multiply(Ze.matrixWorld)),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.updateMatrixWorld(!0),Te.projectionMatrix.copy(Ze.projectionMatrix),Te.projectionMatrixInverse.copy(Ze.projectionMatrixInverse),Te.isPerspectiveCamera&&(Te.fov=ws*2*Math.atan(1/Te.projectionMatrix.elements[5]),Te.zoom=1)}this.getCamera=function(){return fe},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Te){l=Te,h!==null&&(h.fixedFoveation=Te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(fe)},this.getCameraTexture=function(Te){return _[Te]};let Mt=null;function Ut(Te,Ze){if(u=Ze.getViewerPose(c||a),v=Ze,u!==null){const je=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ct=!1;je.length!==fe.cameras.length&&(fe.cameras.length=0,ct=!0);for(let m=0;m<je.length;m++){const he=je[m];let Se=null;if(p!==null)Se=p.getViewport(he);else{const we=f.getViewSubImage(h,he);Se=we.viewport,m===0&&(e.setRenderTargetTextures(w,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(w))}let me=Y[m];me===void 0&&(me=new wn,me.layers.enable(m),me.viewport=new qt,Y[m]=me),me.matrix.fromArray(he.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(he.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Se.x,Se.y,Se.width,Se.height),m===0&&(fe.matrix.copy(me.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale)),ct===!0&&fe.cameras.push(me)}const ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const m=f.getDepthInformation(je[0]);m&&m.isValid&&m.texture&&g.init(m,r.renderState)}if(ut&&ut.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let m=0;m<je.length;m++){const he=je[m].camera;if(he){let Se=_[he];Se||(Se=new am,_[he]=Se);const me=f.getCameraImage(he);Se.sourceTexture=me}}}}for(let je=0;je<V.length;je++){const ct=N[je],ut=V[je];ct!==null&&ut!==void 0&&ut.update(ct,Ze,c||a)}Mt&&Mt(Te,Ze),Ze.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ze}),v=null}const ft=new pm;ft.setAnimationLoop(Ut),this.setAnimationLoop=function(Te){Mt=Te},this.dispose=function(){}}}const mM=new St,ym=new xt;ym.set(-1,0,0,0,1,0,0,0,1);function gM(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,om(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,E,A,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(g,_):_.isMeshLambertMaterial?(s(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(g,_),f(g,_)):_.isMeshPhongMaterial?(s(g,_),u(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(g,_),h(g,_),_.isMeshPhysicalMaterial&&p(g,_,w)):_.isMeshMatcapMaterial?(s(g,_),v(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),b(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?l(g,_,E,A):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Ln&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Ln&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const E=e.get(_),A=E.envMap,w=E.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ym),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,E,A){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*E,g.scale.value=A*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function h(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function p(g,_,E){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ln&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,_){_.matcap&&(g.matcap.value=_.matcap)}function b(g,_){const E=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _M(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const w=A.program;i.uniformBlockBinding(E,w)}function c(E,A){let w=r[E.id];w===void 0&&(v(E),w=u(E),r[E.id]=w,E.addEventListener("dispose",g));const V=A.program;i.updateUBOMapping(E,V);const N=e.render.frame;s[E.id]!==N&&(h(E),s[E.id]=N)}function u(E){const A=f();E.__bindingPointIndex=A;const w=n.createBuffer(),V=E.__size,N=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,V,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,w),w}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const A=r[E.id],w=E.uniforms,V=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let N=0,k=w.length;N<k;N++){const T=Array.isArray(w[N])?w[N]:[w[N]];for(let B=0,Z=T.length;B<Z;B++){const Y=T[B];if(p(Y,N,B,V)===!0){const fe=Y.__offset,Ee=Array.isArray(Y.value)?Y.value:[Y.value];let Me=0;for(let te=0;te<Ee.length;te++){const ce=Ee[te],re=b(ce);typeof ce=="number"||typeof ce=="boolean"?(Y.__data[0]=ce,n.bufferSubData(n.UNIFORM_BUFFER,fe+Me,Y.__data)):ce.isMatrix3?(Y.__data[0]=ce.elements[0],Y.__data[1]=ce.elements[1],Y.__data[2]=ce.elements[2],Y.__data[3]=0,Y.__data[4]=ce.elements[3],Y.__data[5]=ce.elements[4],Y.__data[6]=ce.elements[5],Y.__data[7]=0,Y.__data[8]=ce.elements[6],Y.__data[9]=ce.elements[7],Y.__data[10]=ce.elements[8],Y.__data[11]=0):ArrayBuffer.isView(ce)?Y.__data.set(new ce.constructor(ce.buffer,ce.byteOffset,Y.__data.length)):(ce.toArray(Y.__data,Me),Me+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,fe,Y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,A,w,V){const N=E.value,k=A+"_"+w;if(V[k]===void 0)return typeof N=="number"||typeof N=="boolean"?V[k]=N:ArrayBuffer.isView(N)?V[k]=N.slice():V[k]=N.clone(),!0;{const T=V[k];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return V[k]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(T.equals(N)===!1)return T.copy(N),!0}}return!1}function v(E){const A=E.uniforms;let w=0;const V=16;for(let k=0,T=A.length;k<T;k++){const B=Array.isArray(A[k])?A[k]:[A[k]];for(let Z=0,Y=B.length;Z<Y;Z++){const fe=B[Z],Ee=Array.isArray(fe.value)?fe.value:[fe.value];for(let Me=0,te=Ee.length;Me<te;Me++){const ce=Ee[Me],re=b(ce),Re=w%V,Ue=Re%re.boundary,Ke=Re+Ue;w+=Ue,Ke!==0&&V-Ke<re.storage&&(w+=V-Ke),fe.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=w,w+=re.storage}}}const N=w%V;return N>0&&(w+=V-N),E.__size=w,E.__cache={},this}function b(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(A.boundary=16,A.storage=E.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",E),A}function g(E){const A=E.target;A.removeEventListener("dispose",g);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function _(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}const vM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function xM(){return mi===null&&(mi=new ol(vM,16,16,zr,tr),mi.name="DFG_LUT",mi.minFilter=Jt,mi.magFilter=Jt,mi.wrapS=Ei,mi.wrapT=Ei,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class bM{constructor(e={}){const{canvas:t=V0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Bn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=p,g=new Set([Ju,Zu,$u]),_=new Set([Bn,Ci,Sa,Ma,ju,Yu]),E=new Uint32Array(4),A=new Int32Array(4),w=new ee;let V=null,N=null;const k=[],T=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let Y=!1,fe=null;this._outputColorSpace=_n;let Ee=0,Me=0,te=null,ce=-1,re=null;const Re=new qt,Ue=new qt;let Ke=null;const et=new bt(0);let nt=0,Mt=t.width,Ut=t.height,ft=1,Te=null,Ze=null;const je=new qt(0,0,Mt,Ut),ct=new qt(0,0,Mt,Ut);let ut=!1;const ht=new af;let R=!1,m=!1;const he=new St,Se=new ee,me=new qt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ne(){return te===null?ft:1}let F=i;function ue(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wu}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",_t,!1),F===null){const D="webgl2";if(F=ue(D,x),F===null)throw ue(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw dt("WebGLRenderer: "+x.message),x}let ze,Ae,_e,it,P,y,K,be,Ce,ke,Xe,ye,Pe,Ye,Fe,Ve,He,pt,at,It,H,Ge,ve;function $e(){ze=new xE(F),ze.init(),H=new uM(F,ze),Ae=new fE(F,ze,e,H),_e=new lM(F,ze),Ae.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),it=new EE(F),P=new qS,y=new cM(F,ze,_e,P,Ae,H,it),K=new vE(Z),be=new Ax(F),Ge=new cE(F,be),Ce=new bE(F,be,it,Ge),ke=new ME(F,Ce,be,Ge,it),pt=new SE(F,Ae,y),Fe=new hE(P),Xe=new YS(Z,K,ze,Ae,Ge,Fe),ye=new gM(Z,P),Pe=new $S,Ye=new nM(ze),He=new lE(Z,K,_e,ke,v,l),Ve=new oM(Z,ke,Ae),ve=new _M(F,it,Ae,_e),at=new uE(F,ze,it),It=new yE(F,ze,it),it.programs=Xe.programs,Z.capabilities=Ae,Z.extensions=ze,Z.properties=P,Z.renderLists=Pe,Z.shadowMap=Ve,Z.state=_e,Z.info=it}$e(),b!==Bn&&(B=new AE(b,t.width,t.height,r,s));const de=new pM(Z,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=ze.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ze.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(x){x!==void 0&&(ft=x,this.setSize(Mt,Ut,!1))},this.getSize=function(x){return x.set(Mt,Ut)},this.setSize=function(x,D,L=!0){if(de.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=x,Ut=D,t.width=Math.floor(x*ft),t.height=Math.floor(D*ft),L===!0&&(t.style.width=x+"px",t.style.height=D+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Mt*ft,Ut*ft).floor()},this.setDrawingBufferSize=function(x,D,L){Mt=x,Ut=D,ft=L,t.width=Math.floor(x*L),t.height=Math.floor(D*L),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(b===Bn){dt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){ot("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(Re)},this.getViewport=function(x){return x.copy(je)},this.setViewport=function(x,D,L,G){x.isVector4?je.set(x.x,x.y,x.z,x.w):je.set(x,D,L,G),_e.viewport(Re.copy(je).multiplyScalar(ft).round())},this.getScissor=function(x){return x.copy(ct)},this.setScissor=function(x,D,L,G){x.isVector4?ct.set(x.x,x.y,x.z,x.w):ct.set(x,D,L,G),_e.scissor(Ue.copy(ct).multiplyScalar(ft).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(x){_e.setScissorTest(ut=x)},this.setOpaqueSort=function(x){Te=x},this.setTransparentSort=function(x){Ze=x},this.getClearColor=function(x){return x.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,L=!0){let G=0;if(x){let z=!1;if(te!==null){const C=te.texture.format;z=g.has(C)}if(z){const C=te.texture.type,Q=_.has(C),ie=He.getClearColor(),oe=He.getClearAlpha(),ae=ie.r,I=ie.g,q=ie.b;Q?(E[0]=ae,E[1]=I,E[2]=q,E[3]=oe,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=ae,A[1]=I,A[2]=q,A[3]=oe,F.clearBufferiv(F.COLOR,0,A))}else G|=F.COLOR_BUFFER_BIT}D&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),L&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),fe=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),He.dispose(),Pe.dispose(),Ye.dispose(),P.dispose(),K.dispose(),ke.dispose(),Ge.dispose(),ve.dispose(),Xe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Na),de.removeEventListener("sessionend",vt),In.stop()};function Oe(x){x.preventDefault(),Ho("WebGLRenderer: Context Lost."),Y=!0}function Be(){Ho("WebGLRenderer: Context Restored."),Y=!1;const x=it.autoReset,D=Ve.enabled,L=Ve.autoUpdate,G=Ve.needsUpdate,z=Ve.type;$e(),it.autoReset=x,Ve.enabled=D,Ve.autoUpdate=L,Ve.needsUpdate=G,Ve.type=z}function _t(x){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Wt(x){const D=x.target;D.removeEventListener("dispose",Wt),lt(D)}function lt(x){Qt(x),P.remove(x)}function Qt(x){const D=P.get(x).programs;D!==void 0&&(D.forEach(function(L){Xe.releaseProgram(L)}),x.isShaderMaterial&&Xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,L,G,z,C){D===null&&(D=we);const Q=z.isMesh&&z.matrixWorld.determinant()<0,ie=J(x,D,L,G,z);_e.setMaterial(G,Q);let oe=L.index,ae=1;if(G.wireframe===!0){if(oe=Ce.getWireframeAttribute(L),oe===void 0)return;ae=2}const I=L.drawRange,q=L.attributes.position;let pe=I.start*ae,Le=(I.start+I.count)*ae;C!==null&&(pe=Math.max(pe,C.start*ae),Le=Math.min(Le,(C.start+C.count)*ae)),oe!==null?(pe=Math.max(pe,0),Le=Math.min(Le,oe.count)):q!=null&&(pe=Math.max(pe,0),Le=Math.min(Le,q.count));const le=Le-pe;if(le<0||le===1/0)return;Ge.setup(z,G,ie,L,oe);let qe,tt=at;if(oe!==null&&(qe=be.get(oe),tt=It,tt.setIndex(qe)),z.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Ne()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(z.isLine){let Je=G.linewidth;Je===void 0&&(Je=1),_e.setLineWidth(Je*Ne()),z.isLineSegments?tt.setMode(F.LINES):z.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else z.isPoints?tt.setMode(F.POINTS):z.isSprite&&tt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Je=z._multiDrawStarts,X=z._multiDrawCounts,U=z._multiDrawCount,xe=oe?be.get(oe).bytesPerElement:1,rt=P.get(G).currentProgram.getUniforms();for(let st=0;st<U;st++)rt.setValue(F,"_gl_DrawID",st),tt.render(Je[st]/xe,X[st])}else if(z.isInstancedMesh)tt.renderInstances(pe,le,z.count);else if(L.isInstancedBufferGeometry){const Je=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,X=Math.min(L.instanceCount,Je);tt.renderInstances(pe,le,X)}else tt.render(pe,le)};function mn(x,D,L){x.transparent===!0&&x.side===Qn&&x.forceSinglePass===!1?(x.side=Ln,x.needsUpdate=!0,S(x,D,L),x.side=er,x.needsUpdate=!0,S(x,D,L),x.side=Qn):S(x,D,L)}this.compile=function(x,D,L=null){L===null&&(L=x),N=Ye.get(L),N.init(D),T.push(N),L.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(N.pushLight(z),z.castShadow&&N.pushShadow(z))}),x!==L&&x.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(N.pushLight(z),z.castShadow&&N.pushShadow(z))}),N.setupLights();const G=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const C=z.material;if(C)if(Array.isArray(C))for(let Q=0;Q<C.length;Q++){const ie=C[Q];mn(ie,L,z),G.add(ie)}else mn(C,L,z),G.add(C)}),N=T.pop(),G},this.compileAsync=function(x,D,L=null){const G=this.compile(x,D,L);return new Promise(z=>{function C(){if(G.forEach(function(Q){P.get(Q).currentProgram.isReady()&&G.delete(Q)}),G.size===0){z(x);return}setTimeout(C,10)}ze.get("KHR_parallel_shader_compile")!==null?C():setTimeout(C,10)})};let fi=null;function Ot(x){fi&&fi(x)}function Na(){In.stop()}function vt(){In.start()}const In=new pm;In.setAnimationLoop(Ot),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(x){fi=x,de.setAnimationLoop(x),x===null?In.stop():In.start()},de.addEventListener("sessionstart",Na),de.addEventListener("sessionend",vt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;fe!==null&&fe.renderStart(x,D);const L=de.enabled===!0&&de.isPresenting===!0,G=B!==null&&(te===null||L)&&B.begin(Z,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(D),D=de.getCamera()),x.isScene===!0&&x.onBeforeRender(Z,x,D,te),N=Ye.get(x,T.length),N.init(D),N.state.textureUnits=y.getTextureUnits(),T.push(N),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ht.setFromProjectionMatrix(he,Si,D.reversedDepth),m=this.localClippingEnabled,R=Fe.init(this.clippingPlanes,m),V=Pe.get(x,k.length),V.init(),k.push(V),de.enabled===!0&&de.isPresenting===!0){const Q=Z.xr.getDepthSensingMesh();Q!==null&&Fn(Q,D,-1/0,Z.sortObjects)}Fn(x,D,0,Z.sortObjects),V.finish(),Z.sortObjects===!0&&V.sort(Te,Ze),De=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,De&&He.addToRenderList(V,x),this.info.render.frame++,R===!0&&Fe.beginShadows();const z=N.state.shadowsArray;if(Ve.render(z,x,D),R===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&B.hasRenderPass())===!1){const Q=V.opaque,ie=V.transmissive;if(N.setupLights(),D.isArrayCamera){const oe=D.cameras;if(ie.length>0)for(let ae=0,I=oe.length;ae<I;ae++){const q=oe[ae];Xr(Q,ie,x,q)}De&&He.render(x);for(let ae=0,I=oe.length;ae<I;ae++){const q=oe[ae];Wr(V,x,q,q.viewport)}}else ie.length>0&&Xr(Q,ie,x,D),De&&He.render(x),Wr(V,x,D)}te!==null&&Me===0&&(y.updateMultisampleRenderTarget(te),y.updateRenderTargetMipmap(te)),G&&B.end(Z),x.isScene===!0&&x.onAfterRender(Z,x,D),Ge.resetDefaultState(),ce=-1,re=null,T.pop(),T.length>0?(N=T[T.length-1],y.setTextureUnits(N.state.textureUnits),R===!0&&Fe.setGlobalState(Z.clippingPlanes,N.state.camera)):N=null,k.pop(),k.length>0?V=k[k.length-1]:V=null,fe!==null&&fe.renderEnd()};function Fn(x,D,L,G){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)L=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLightProbeGrid)N.pushLightProbeGrid(x);else if(x.isLight)N.pushLight(x),x.castShadow&&N.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ht.intersectsSprite(x)){G&&me.setFromMatrixPosition(x.matrixWorld).applyMatrix4(he);const Q=ke.update(x),ie=x.material;ie.visible&&V.push(x,Q,ie,L,me.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ht.intersectsObject(x))){const Q=ke.update(x),ie=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),me.copy(x.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),me.copy(Q.boundingSphere.center)),me.applyMatrix4(x.matrixWorld).applyMatrix4(he)),Array.isArray(ie)){const oe=Q.groups;for(let ae=0,I=oe.length;ae<I;ae++){const q=oe[ae],pe=ie[q.materialIndex];pe&&pe.visible&&V.push(x,Q,pe,L,me.z,q)}}else ie.visible&&V.push(x,Q,ie,L,me.z,null)}}const C=x.children;for(let Q=0,ie=C.length;Q<ie;Q++)Fn(C[Q],D,L,G)}function Wr(x,D,L,G){const{opaque:z,transmissive:C,transparent:Q}=x;N.setupLightsView(L),R===!0&&Fe.setGlobalState(Z.clippingPlanes,L),G&&_e.viewport(Re.copy(G)),z.length>0&&sr(z,D,L),C.length>0&&sr(C,D,L),Q.length>0&&sr(Q,D,L),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Xr(x,D,L,G){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[G.id]===void 0){const pe=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[G.id]=new Ai(1,1,{generateMipmaps:!0,type:pe?tr:Bn,minFilter:ji,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const C=N.state.transmissionRenderTarget[G.id],Q=G.viewport||Re;C.setSize(Q.z*Z.transmissionResolutionScale,Q.w*Z.transmissionResolutionScale);const ie=Z.getRenderTarget(),oe=Z.getActiveCubeFace(),ae=Z.getActiveMipmapLevel();Z.setRenderTarget(C),Z.getClearColor(et),nt=Z.getClearAlpha(),nt<1&&Z.setClearColor(16777215,.5),Z.clear(),De&&He.render(L);const I=Z.toneMapping;Z.toneMapping=Ti;const q=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),N.setupLightsView(G),R===!0&&Fe.setGlobalState(Z.clippingPlanes,G),sr(x,L,G),y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C),ze.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Le=0,le=D.length;Le<le;Le++){const qe=D[Le],{object:tt,geometry:Je,material:X,group:U}=qe;if(X.side===Qn&&tt.layers.test(G.layers)){const xe=X.side;X.side=Ln,X.needsUpdate=!0,d(tt,L,G,Je,X,U),X.side=xe,X.needsUpdate=!0,pe=!0}}pe===!0&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C))}Z.setRenderTarget(ie,oe,ae),Z.setClearColor(et,nt),q!==void 0&&(G.viewport=q),Z.toneMapping=I}function sr(x,D,L){const G=D.isScene===!0?D.overrideMaterial:null;for(let z=0,C=x.length;z<C;z++){const Q=x[z],{object:ie,geometry:oe,group:ae}=Q;let I=Q.material;I.allowOverride===!0&&G!==null&&(I=G),ie.layers.test(L.layers)&&d(ie,D,L,oe,I,ae)}}function d(x,D,L,G,z,C){x.onBeforeRender(Z,D,L,G,z,C),x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(Z,D,L,G,x,C),z.transparent===!0&&z.side===Qn&&z.forceSinglePass===!1?(z.side=Ln,z.needsUpdate=!0,Z.renderBufferDirect(L,D,G,z,x,C),z.side=er,z.needsUpdate=!0,Z.renderBufferDirect(L,D,G,z,x,C),z.side=Qn):Z.renderBufferDirect(L,D,G,z,x,C),x.onAfterRender(Z,D,L,G,z,C)}function S(x,D,L){D.isScene!==!0&&(D=we);const G=P.get(x),z=N.state.lights,C=N.state.shadowsArray,Q=z.state.version,ie=Xe.getParameters(x,z.state,C,D,L,N.state.lightProbeGridArray),oe=Xe.getProgramCacheKey(ie);let ae=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;const I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=K.get(x.envMap||G.environment,I),G.envMapRotation=G.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,ae===void 0&&(x.addEventListener("dispose",Wt),ae=new Map,G.programs=ae);let q=ae.get(oe);if(q!==void 0){if(G.currentProgram===q&&G.lightsStateVersion===Q)return O(x,ie),q}else ie.uniforms=Xe.getUniforms(x),fe!==null&&x.isNodeMaterial&&fe.build(x,L,ie),x.onBeforeCompile(ie,Z),q=Xe.acquireProgram(ie,oe),ae.set(oe,q),G.uniforms=ie.uniforms;const pe=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(pe.clippingPlanes=Fe.uniform),O(x,ie),G.needsLights=$(x),G.lightsStateVersion=Q,G.needsLights&&(pe.ambientLightColor.value=z.state.ambient,pe.lightProbe.value=z.state.probe,pe.directionalLights.value=z.state.directional,pe.directionalLightShadows.value=z.state.directionalShadow,pe.spotLights.value=z.state.spot,pe.spotLightShadows.value=z.state.spotShadow,pe.rectAreaLights.value=z.state.rectArea,pe.ltc_1.value=z.state.rectAreaLTC1,pe.ltc_2.value=z.state.rectAreaLTC2,pe.pointLights.value=z.state.point,pe.pointLightShadows.value=z.state.pointShadow,pe.hemisphereLights.value=z.state.hemi,pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,pe.spotLightMatrix.value=z.state.spotLightMatrix,pe.spotLightMap.value=z.state.spotLightMap,pe.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=N.state.lightProbeGridArray.length>0,G.currentProgram=q,G.uniformsList=null,q}function M(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Po.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function O(x,D){const L=P.get(x);L.outputColorSpace=D.outputColorSpace,L.batching=D.batching,L.batchingColor=D.batchingColor,L.instancing=D.instancing,L.instancingColor=D.instancingColor,L.instancingMorph=D.instancingMorph,L.skinning=D.skinning,L.morphTargets=D.morphTargets,L.morphNormals=D.morphNormals,L.morphColors=D.morphColors,L.morphTargetsCount=D.morphTargetsCount,L.numClippingPlanes=D.numClippingPlanes,L.numIntersection=D.numClipIntersection,L.vertexAlphas=D.vertexAlphas,L.vertexTangents=D.vertexTangents,L.toneMapping=D.toneMapping}function W(x,D){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;w.setFromMatrixPosition(D.matrixWorld);for(let L=0,G=x.length;L<G;L++){const z=x[L];if(z.texture!==null&&z.boundingBox.containsPoint(w))return z}return null}function J(x,D,L,G,z){D.isScene!==!0&&(D=we),y.resetTextureUnits();const C=D.fog,Q=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,ie=te===null?Z.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,oe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ae=K.get(G.envMap||Q,oe),I=G.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,q=!!L.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),pe=!!L.morphAttributes.position,Le=!!L.morphAttributes.normal,le=!!L.morphAttributes.color;let qe=Ti;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=Z.toneMapping);const tt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Je=tt!==void 0?tt.length:0,X=P.get(G),U=N.state.lights;if(R===!0&&(m===!0||x!==re)){const Bt=x===re&&G.id===ce;Fe.setState(G,x,Bt)}let xe=!1;G.version===X.__version?(X.needsLights&&X.lightsStateVersion!==U.state.version||X.outputColorSpace!==ie||z.isBatchedMesh&&X.batching===!1||!z.isBatchedMesh&&X.batching===!0||z.isBatchedMesh&&X.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&X.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&X.instancing===!1||!z.isInstancedMesh&&X.instancing===!0||z.isSkinnedMesh&&X.skinning===!1||!z.isSkinnedMesh&&X.skinning===!0||z.isInstancedMesh&&X.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&X.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&X.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&X.instancingMorph===!1&&z.morphTexture!==null||X.envMap!==ae||G.fog===!0&&X.fog!==C||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==Fe.numPlanes||X.numIntersection!==Fe.numIntersection)||X.vertexAlphas!==I||X.vertexTangents!==q||X.morphTargets!==pe||X.morphNormals!==Le||X.morphColors!==le||X.toneMapping!==qe||X.morphTargetsCount!==Je||!!X.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,X.__version=G.version);let rt=X.currentProgram;xe===!0&&(rt=S(G,D,z),fe&&G.isNodeMaterial&&fe.onUpdateProgram(G,rt,X));let st=!1,mt=!1,rn=!1;const Ct=rt.getUniforms(),Xt=X.uniforms;if(_e.useProgram(rt.program)&&(st=!0,mt=!0,rn=!0),G.id!==ce&&(ce=G.id,mt=!0),X.needsLights){const Bt=W(N.state.lightProbeGridArray,z);X.lightProbeGrid!==Bt&&(X.lightProbeGrid=Bt,mt=!0)}if(st||re!==x){_e.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ct.setValue(F,"projectionMatrix",x.projectionMatrix),Ct.setValue(F,"viewMatrix",x.matrixWorldInverse);const Vn=Ct.map.cameraPosition;Vn!==void 0&&Vn.setValue(F,Se.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&Ct.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ct.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),re!==x&&(re=x,mt=!0,rn=!0)}if(X.needsLights&&(U.state.directionalShadowMap.length>0&&Ct.setValue(F,"directionalShadowMap",U.state.directionalShadowMap,y),U.state.spotShadowMap.length>0&&Ct.setValue(F,"spotShadowMap",U.state.spotShadowMap,y),U.state.pointShadowMap.length>0&&Ct.setValue(F,"pointShadowMap",U.state.pointShadowMap,y)),z.isSkinnedMesh){Ct.setOptional(F,z,"bindMatrix"),Ct.setOptional(F,z,"bindMatrixInverse");const Bt=z.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ct.setValue(F,"boneTexture",Bt.boneTexture,y))}z.isBatchedMesh&&(Ct.setOptional(F,z,"batchingTexture"),Ct.setValue(F,"batchingTexture",z._matricesTexture,y),Ct.setOptional(F,z,"batchingIdTexture"),Ct.setValue(F,"batchingIdTexture",z._indirectTexture,y),Ct.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Ct.setValue(F,"batchingColorTexture",z._colorsTexture,y));const Ie=L.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&pt.update(z,L,rt),(mt||X.receiveShadow!==z.receiveShadow)&&(X.receiveShadow=z.receiveShadow,Ct.setValue(F,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(Xt.envMapIntensity.value=D.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=xM()),mt){if(Ct.setValue(F,"toneMappingExposure",Z.toneMappingExposure),X.needsLights&&se(Xt,rn),C&&G.fog===!0&&ye.refreshFogUniforms(Xt,C),ye.refreshMaterialUniforms(Xt,G,ft,Ut,N.state.transmissionRenderTarget[x.id]),X.needsLights&&X.lightProbeGrid){const Bt=X.lightProbeGrid;Xt.probesSH.value=Bt.texture,Xt.probesMin.value.copy(Bt.boundingBox.min),Xt.probesMax.value.copy(Bt.boundingBox.max),Xt.probesResolution.value.copy(Bt.resolution)}Po.upload(F,M(X),Xt,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Po.upload(F,M(X),Xt,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ct.setValue(F,"center",z.center),Ct.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ct.setValue(F,"normalMatrix",z.normalMatrix),Ct.setValue(F,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const Bt=G.uniformsGroups;for(let Vn=0,Ii=Bt.length;Vn<Ii;Vn++){const ar=Bt[Vn];ve.update(ar,rt),ve.bind(ar,rt)}}return rt}function se(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function $(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Ee},this.getActiveMipmapLevel=function(){return Me},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,D,L){const G=P.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),P.get(x.texture).__webglTexture=D,P.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:L,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const L=P.get(x);L.__webglFramebuffer=D,L.__useDefaultFramebuffer=D===void 0};const j=F.createFramebuffer();this.setRenderTarget=function(x,D=0,L=0){te=x,Ee=D,Me=L;let G=null,z=!1,C=!1;if(x){const ie=P.get(x);if(ie.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(F.FRAMEBUFFER,ie.__webglFramebuffer),Re.copy(x.viewport),Ue.copy(x.scissor),Ke=x.scissorTest,_e.viewport(Re),_e.scissor(Ue),_e.setScissorTest(Ke),ce=-1;return}else if(ie.__webglFramebuffer===void 0)y.setupRenderTarget(x);else if(ie.__hasExternalTextures)y.rebindTextures(x,P.get(x.texture).__webglTexture,P.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const I=x.depthTexture;if(ie.__boundDepthTexture!==I){if(I!==null&&P.has(I)&&(x.width!==I.image.width||x.height!==I.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(x)}}const oe=x.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(C=!0);const ae=P.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ae[D])?G=ae[D][L]:G=ae[D],z=!0):x.samples>0&&y.useMultisampledRTT(x)===!1?G=P.get(x).__webglMultisampledFramebuffer:Array.isArray(ae)?G=ae[L]:G=ae,Re.copy(x.viewport),Ue.copy(x.scissor),Ke=x.scissorTest}else Re.copy(je).multiplyScalar(ft).floor(),Ue.copy(ct).multiplyScalar(ft).floor(),Ke=ut;if(L!==0&&(G=j),_e.bindFramebuffer(F.FRAMEBUFFER,G)&&_e.drawBuffers(x,G),_e.viewport(Re),_e.scissor(Ue),_e.setScissorTest(Ke),z){const ie=P.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ie.__webglTexture,L)}else if(C){const ie=D;for(let oe=0;oe<x.textures.length;oe++){const ae=P.get(x.textures[oe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+oe,ae.__webglTexture,L,ie)}}else if(x!==null&&L!==0){const ie=P.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ie.__webglTexture,L)}ce=-1},this.readRenderTargetPixels=function(x,D,L,G,z,C,Q,ie=0){if(!(x&&x.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Q!==void 0&&(oe=oe[Q]),oe){_e.bindFramebuffer(F.FRAMEBUFFER,oe);try{const ae=x.textures[ie],I=ae.format,q=ae.type;if(x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ie),!Ae.textureFormatReadable(I)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(q)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-G&&L>=0&&L<=x.height-z&&F.readPixels(D,L,G,z,H.convert(I),H.convert(q),C)}finally{const ae=te!==null?P.get(te).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(x,D,L,G,z,C,Q,ie=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Q!==void 0&&(oe=oe[Q]),oe)if(D>=0&&D<=x.width-G&&L>=0&&L<=x.height-z){_e.bindFramebuffer(F.FRAMEBUFFER,oe);const ae=x.textures[ie],I=ae.format,q=ae.type;if(x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ie),!Ae.textureFormatReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,C.byteLength,F.STREAM_READ),F.readPixels(D,L,G,z,H.convert(I),H.convert(q),0);const Le=te!==null?P.get(te).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Le);const le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await k0(F,le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,C),F.deleteBuffer(pe),F.deleteSync(le),C}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,L=0){const G=Math.pow(2,-L),z=Math.floor(x.image.width*G),C=Math.floor(x.image.height*G),Q=D!==null?D.x:0,ie=D!==null?D.y:0;y.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,L,0,0,Q,ie,z,C),_e.unbindTexture()};const ne=F.createFramebuffer(),ge=F.createFramebuffer();this.copyTextureToTexture=function(x,D,L=null,G=null,z=0,C=0){let Q,ie,oe,ae,I,q,pe,Le,le;const qe=x.isCompressedTexture?x.mipmaps[C]:x.image;if(L!==null)Q=L.max.x-L.min.x,ie=L.max.y-L.min.y,oe=L.isBox3?L.max.z-L.min.z:1,ae=L.min.x,I=L.min.y,q=L.isBox3?L.min.z:0;else{const Xt=Math.pow(2,-z);Q=Math.floor(qe.width*Xt),ie=Math.floor(qe.height*Xt),x.isDataArrayTexture?oe=qe.depth:x.isData3DTexture?oe=Math.floor(qe.depth*Xt):oe=1,ae=0,I=0,q=0}G!==null?(pe=G.x,Le=G.y,le=G.z):(pe=0,Le=0,le=0);const tt=H.convert(D.format),Je=H.convert(D.type);let X;D.isData3DTexture?(y.setTexture3D(D,0),X=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),X=F.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),X=F.TEXTURE_2D),_e.activeTexture(F.TEXTURE0),_e.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),_e.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_e.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const U=_e.getParameter(F.UNPACK_ROW_LENGTH),xe=_e.getParameter(F.UNPACK_IMAGE_HEIGHT),rt=_e.getParameter(F.UNPACK_SKIP_PIXELS),st=_e.getParameter(F.UNPACK_SKIP_ROWS),mt=_e.getParameter(F.UNPACK_SKIP_IMAGES);_e.pixelStorei(F.UNPACK_ROW_LENGTH,qe.width),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe.height),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,ae),_e.pixelStorei(F.UNPACK_SKIP_ROWS,I),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,q);const rn=x.isDataArrayTexture||x.isData3DTexture,Ct=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Xt=P.get(x),Ie=P.get(D),Bt=P.get(Xt.__renderTarget),Vn=P.get(Ie.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Ii=0;Ii<oe;Ii++)rn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,P.get(x).__webglTexture,z,q+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,P.get(D).__webglTexture,C,le+Ii)),F.blitFramebuffer(ae,I,Q,ie,pe,Le,Q,ie,F.DEPTH_BUFFER_BIT,F.NEAREST);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||P.has(x)){const Xt=P.get(x),Ie=P.get(D);_e.bindFramebuffer(F.READ_FRAMEBUFFER,ne),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,ge);for(let Bt=0;Bt<oe;Bt++)rn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.__webglTexture,z,q+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xt.__webglTexture,z),Ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,C,le+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,C),z!==0?F.blitFramebuffer(ae,I,Q,ie,pe,Le,Q,ie,F.COLOR_BUFFER_BIT,F.NEAREST):Ct?F.copyTexSubImage3D(X,C,pe,Le,le+Bt,ae,I,Q,ie):F.copyTexSubImage2D(X,C,pe,Le,ae,I,Q,ie);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ct?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(X,C,pe,Le,le,Q,ie,oe,tt,Je,qe.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(X,C,pe,Le,le,Q,ie,oe,tt,qe.data):F.texSubImage3D(X,C,pe,Le,le,Q,ie,oe,tt,Je,qe):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,C,pe,Le,Q,ie,tt,Je,qe.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,C,pe,Le,qe.width,qe.height,tt,qe.data):F.texSubImage2D(F.TEXTURE_2D,C,pe,Le,Q,ie,tt,Je,qe);_e.pixelStorei(F.UNPACK_ROW_LENGTH,U),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),_e.pixelStorei(F.UNPACK_SKIP_ROWS,st),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,mt),C===0&&D.generateMipmaps&&F.generateMipmap(X),_e.unbindTexture()},this.initRenderTarget=function(x){P.get(x).__webglFramebuffer===void 0&&y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),_e.unbindTexture()},this.resetState=function(){Ee=0,Me=0,te=null,_e.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}function yd(n,e){if(e===C0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===hu||e===Kp){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===hu)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function yM(n){const e=new Map,t=new Map,i=n.clone();return Em(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Em(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Em(n.children[i],e.children[i],t)}class EM extends Hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new Ed(t,wt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ed(t,wt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new zM(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ga.extractUrlBase(e);a=ga.resolveURL(c,this.path)}else a=ga.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new cf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sm){try{a[wt.KHR_BINARY_GLTF]=new VM(e)}catch(f){r&&r(f);return}s=JSON.parse(a[wt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new eT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case wt.KHR_MATERIALS_UNLIT:a[f]=new TM;break;case wt.KHR_DRACO_MESH_COMPRESSION:a[f]=new kM(s,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:a[f]=new HM;break;case wt.KHR_MESH_QUANTIZATION:a[f]=new WM;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function SM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function nn(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class MM{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new bt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],zn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new dm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ox(u),c.distance=f;break;case"spot":c=new sx(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class TM{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ur}extendParams(e,t,i){const r=[];e.color=new bt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,_n))}return Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class RM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Nt(s,s)}return Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class CM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class PM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new bt(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],zn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,_n)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class DM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new bt().setRGB(s[0],s[1],s[2],zn),Promise.all(r)}}class IM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class FM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new bt().setRGB(s[0],s[1],s[2],zn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,_n)),Promise.all(r)}}class NM{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class UM{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class OM{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class BM{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class GM{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Ed{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(p),u,f,h,r.mode,r.filter),p})})}else return null}}class zM{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const v of f){const b=new St,g=new ee,_=new Di,E=new ee(1,1,1),A=new Cv(v.geometry,v.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,w),l.SCALE&&E.fromBufferAttribute(l.SCALE,w),A.setMatrixAt(w,b.compose(g,_,E));for(const w in l)if(w==="_COLOR_0"){const V=l[w];A.instanceColor=new Wo(V.array,V.itemSize,V.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&v.geometry.setAttribute(w,l[w]);jt.prototype.copy.call(A,v),this.parser.assignFinalMaterial(A),p.push(A)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Sm="glTF",ea=12,Sd={JSON:1313821514,BIN:5130562};class VM{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ea),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ea,s=new DataView(e,ea);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Sd.JSON){const c=new Uint8Array(e,ea+a,o);this.content=i.decode(c)}else if(l===Sd.BIN){const c=ea+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=xu[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=xu[u]||u.toLowerCase();if(a[u]!==void 0){const h=i.accessors[e.attributes[u]],p=Es[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(p){for(const v in p.attributes){const b=p.attributes[v],g=l[v];g!==void 0&&(b.normalized=g)}f(p)},o,c,zn,h)})})}}class HM{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WM{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}}class Mm extends Ns{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,f=(i-t)/u,h=f*f,p=h*f,v=e*c,b=v-c,g=-2*p+3*h,_=p-h,E=1-g,A=_-h+f;for(let w=0;w!==o;w++){const V=a[b+w+o],N=a[b+w+l]*u,k=a[v+w+o],T=a[v+w]*u;s[w]=E*V+A*N+g*k+_*T}return s}}const XM=new Di;class jM extends Mm{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return XM.fromArray(s).normalize().toArray(s),s}}const Wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Md={9728:cn,9729:Jt,9984:Hp,9985:To,9986:ra,9987:ji},Td={33071:Ei,33648:Bo,10497:Rs},hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YM={CUBICSPLINE:void 0,LINEAR:Aa,STEP:Ta},dc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new lf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:er})),n.DefaultMaterial}function Cr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function _i(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KM(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function $M(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZM(n){let e;const t=n.extensions&&n.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pc(t.attributes):e=n.indices+":"+pc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+pc(n.targets[i]);return e}function pc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function bu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const QM=new St;class eT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new ix(this.options.manager):this.textureLoader=new hx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Cr(s,o,r),_i(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(ga.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=hc[r.type],o=Es[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new on(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=hc[r.type],c=Es[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let b,g;if(p&&p!==f){const _=Math.floor(h/p),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let A=t.cache.get(E);A||(b=new c(o,_*p,r.count*p/u),A=new tm(b,p/u),t.cache.add(E,A)),g=new Ca(A,l,h%p/u,v)}else o===null?b=new c(r.count*l):b=new c(o,h,r.count*l),g=new on(b,l,v);if(r.sparse!==void 0){const _=hc.SCALAR,E=Es[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,V=new E(a[1],A,r.sparse.count*_),N=new c(a[2],w,r.sparse.count*l);o!==null&&(g=new on(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let k=0,T=V.length;k<T;k++){const B=V[k];if(g.setX(B,N[k*l]),l>=2&&g.setY(B,N[k*l+1]),l>=3&&g.setZ(B,N[k*l+2]),l>=4&&g.setW(B,N[k*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Md[h.magFilter]||Jt,u.minFilter=Md[h.minFilter]||ji,u.wrapS=Td[h.wrapS]||Rs,u.wrapT=Td[h.wrapT]||Rs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==cn&&u.minFilter!==Jt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let v=h;t.isImageBitmapLoader===!0&&(v=function(b){const g=new un(b);g.needsUpdate=!0,h(g)}),t.load(ga.resolveURL(f,s.path),v,void 0,p)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),_i(f,a),f.userData.mimeType=a.mimeType||JM(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[wt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new rm,oi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new im,oi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return lf}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[wt.KHR_MATERIALS_UNLIT]){const f=r[wt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new bt(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],zn),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,_n)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Qn);const u=s.alphaMode||dc.OPAQUE;if(u===dc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===dc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ur&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Nt(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==Ur&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ur){const f=s.emissiveFactor;o.emissive=new bt().setRGB(f[0],f[1],f[2],zn)}return s.emissiveTexture!==void 0&&a!==Ur&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,_n)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),_i(f,s),t.associations.set(f,{materials:e}),s.extensions&&Cr(r,f,s),f})}createUniqueName(e){const t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ad(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=ZM(c),f=r[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Ad(new Pn,c,t),r[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?qM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,v=u.length;p<v;p++){const b=u[p],g=a[p];let _;const E=c[p];if(g.mode===Wn.TRIANGLES||g.mode===Wn.TRIANGLE_STRIP||g.mode===Wn.TRIANGLE_FAN||g.mode===void 0)_=s.isSkinnedMesh===!0?new Av(b,E):new xn(b,E),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),g.mode===Wn.TRIANGLE_STRIP?_.geometry=yd(_.geometry,Kp):g.mode===Wn.TRIANGLE_FAN&&(_.geometry=yd(_.geometry,hu));else if(g.mode===Wn.LINES)_=new Iv(b,E);else if(g.mode===Wn.LINE_STRIP)_=new of(b,E);else if(g.mode===Wn.LINE_LOOP)_=new Fv(b,E);else if(g.mode===Wn.POINTS)_=new Nv(b,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(_.geometry.morphAttributes).length>0&&$M(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),_i(_,s),g.extensions&&Cr(r,_,g),t.assignFinalMaterial(_),f.push(_)}for(let p=0,v=f.length;p<v;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Cr(r,f[0],s),f[0];const h=new _r;s.extensions&&Cr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,v=f.length;p<v;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new wn(hs.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ul(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),_i(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new St;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sf(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const p=r.channels[f],v=r.samplers[p.sampler],b=p.target,g=b.node,_=r.parameters!==void 0?r.parameters[v.input]:v.input,E=r.parameters!==void 0?r.parameters[v.output]:v.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",E)),c.push(v),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],v=f[2],b=f[3],g=f[4],_=[];for(let A=0,w=h.length;A<w;A++){const V=h[A],N=p[A],k=v[A],T=b[A],B=g[A];if(V===void 0)continue;V.updateMatrix&&V.updateMatrix();const Z=i._createAnimationTracks(V,N,k,T,B);if(Z)for(let Y=0;Y<Z.length;Y++)_.push(Z[Y])}const E=new Zv(s,void 0,_);return _i(E,r),E})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,QM)});for(let p=0,v=f.length;p<v;p++)u.add(f[p]);if(u.userData.pivot!==void 0&&f.length>0){const p=u.userData.pivot,v=f[0];u.pivot=new ee().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],v.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new nm:c.length>1?u=new _r:c.length===1?u=c[0]:u=new jt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),_i(u,s),s.extensions&&Cr(i,u,s),s.matrix!==void 0){const f=new St;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(u);r.associations.set(u,{...f})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new _r;i.name&&(s.name=r.createUniqueName(i.name)),_i(s,i),i.extensions&&Cr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++){const h=l[u];h.parent!==null?s.add(yM(h)):s.add(h)}const c=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof oi||h instanceof un)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}dr[s.path]===dr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(dr[s.path]){case dr.weights:u=Ds;break;case dr.rotation:u=Ls;break;case dr.translation:case dr.scale:u=Is;break;default:switch(i.itemSize){case 1:u=Ds;break;case 2:case 3:default:u=Is;break}break}const f=r.interpolation!==void 0?YM[r.interpolation]:Aa,h=this._getArrayFromAccessor(i);for(let p=0,v=l.length;p<v;p++){const b=new u(l[p]+"."+dr[s.path],t.array,h,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=bu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Ls?jM:Mm;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tT(n,e,t){const i=e.attributes,r=new ci;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new ee(l[0],l[1],l[2]),new ee(c[0],c[1],c[2])),o.normalized){const u=bu(Es[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new ee,l=new ee;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,v=h.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),h.normalized){const b=bu(Es[h.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new qn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Ad(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=xu[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Dt.workingColorSpace!==zn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Dt.workingColorSpace}" not supported.`),_i(n,e),tT(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?KM(n,e.targets,t):n})}var nT=function(){var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,h){return u==Array.prototype||u==Object.prototype||(u[f]=h.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var f=0;f<u.length;++f){var h=u[f];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var t=e(this);function i(u,f){if(f)e:{var h=t;u=u.split(".");for(var p=0;p<u.length-1;p++){var v=u[p];if(!(v in h))break e;h=h[v]}u=u[u.length-1],p=h[u],f=f(p),f!=p&&f!=null&&n(h,u,{configurable:!0,writable:!0,value:f})}}function r(u){var f=0;return function(){return f<u.length?{done:!1,value:u[f++]}:{done:!0}}}function s(u){var f=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];if(f)return f.call(u);if(typeof u.length=="number")return{next:r(u)};throw Error(String(u)+" is not an iterable or ArrayLike")}i("Symbol",function(u){function f(b){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new h(p+(b||"")+"_"+v++,b)}function h(b,g){this.D=b,n(this,"description",{configurable:!0,writable:!0,value:g})}if(u)return u;h.prototype.toString=function(){return this.D};var p="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",v=0;return f}),i("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<f.length;h++){var p=t[f[h]];typeof p=="function"&&typeof p.prototype[u]!="function"&&n(p.prototype,u,{configurable:!0,writable:!0,value:function(){return a(r(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}i("Promise",function(u){function f(g){this.ba=0,this.qa=void 0,this.D=[],this.Zc=!1;var _=this.eb();try{g(_.resolve,_.reject)}catch(E){_.reject(E)}}function h(){this.D=null}function p(g){return g instanceof f?g:new f(function(_){_(g)})}if(u)return u;h.prototype.ba=function(g){if(this.D==null){this.D=[];var _=this;this.qa(function(){_.fb()})}this.D.push(g)};var v=t.setTimeout;h.prototype.qa=function(g){v(g,0)},h.prototype.fb=function(){for(;this.D&&this.D.length;){var g=this.D;this.D=[];for(var _=0;_<g.length;++_){var E=g[_];g[_]=null;try{E()}catch(A){this.eb(A)}}}this.D=null},h.prototype.eb=function(g){this.qa(function(){throw g})},f.prototype.eb=function(){function g(A){return function(w){E||(E=!0,A.call(_,w))}}var _=this,E=!1;return{resolve:g(this.Ie),reject:g(this.fb)}},f.prototype.Ie=function(g){if(g===this)this.fb(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof f)this.Le(g);else{e:switch(typeof g){case"object":var _=g!=null;break e;case"function":_=!0;break e;default:_=!1}_?this.He(g):this.De(g)}},f.prototype.He=function(g){var _=void 0;try{_=g.then}catch(E){this.fb(E);return}typeof _=="function"?this.Me(_,g):this.De(g)},f.prototype.fb=function(g){this.$c(2,g)},f.prototype.De=function(g){this.$c(1,g)},f.prototype.$c=function(g,_){if(this.ba!=0)throw Error("Cannot settle("+g+", "+_+"): Promise already settled in state"+this.ba);this.ba=g,this.qa=_,this.ba===2&&this.Ke(),this.Fe()},f.prototype.Ke=function(){var g=this;v(function(){if(g.Ge()){var _=t.console;typeof _<"u"&&_.error(g.qa)}},1)},f.prototype.Ge=function(){if(this.Zc)return!1;var g=t.CustomEvent,_=t.Event,E=t.dispatchEvent;return typeof E>"u"?!0:(typeof g=="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof _=="function"?g=new _("unhandledrejection",{cancelable:!0}):(g=t.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g)),g.promise=this,g.reason=this.qa,E(g))},f.prototype.Fe=function(){if(this.D!=null){for(var g=0;g<this.D.length;++g)b.ba(this.D[g]);this.D=null}};var b=new h;return f.prototype.Le=function(g){var _=this.eb();g.ob(_.resolve,_.reject)},f.prototype.Me=function(g,_){var E=this.eb();try{g.call(_,E.resolve,E.reject)}catch(A){E.reject(A)}},f.prototype.then=function(g,_){function E(N,k){return typeof N=="function"?function(T){try{A(N(T))}catch(B){w(B)}}:k}var A,w,V=new f(function(N,k){A=N,w=k});return this.ob(E(g,A),E(_,w)),V},f.prototype.catch=function(g){return this.then(void 0,g)},f.prototype.ob=function(g,_){function E(){switch(A.ba){case 1:g(A.qa);break;case 2:_(A.qa);break;default:throw Error("Unexpected state: "+A.ba)}}var A=this;this.D==null?b.ba(E):this.D.push(E),this.Zc=!0},f.resolve=p,f.reject=function(g){return new f(function(_,E){E(g)})},f.race=function(g){return new f(function(_,E){for(var A=s(g),w=A.next();!w.done;w=A.next())p(w.value).ob(_,E)})},f.all=function(g){var _=s(g),E=_.next();return E.done?p([]):new f(function(A,w){function V(T){return function(B){N[T]=B,k--,k==0&&A(N)}}var N=[],k=0;do N.push(void 0),k++,p(E.value).ob(V(N.length-1),w),E=_.next();while(!E.done)})},f}),i("Math.log2",function(u){return u||function(f){return Math.log(f)/Math.LN2}});function o(u,f){u instanceof String&&(u+="");var h=0,p=!1,v={next:function(){if(!p&&h<u.length){var b=h++;return{value:f(b,u[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.keys",function(u){return u||function(){return o(this,function(f){return f})}});var l=typeof Object.assign=="function"?Object.assign:function(u,f){for(var h=1;h<arguments.length;h++){var p=arguments[h];if(p)for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(u[v]=p[v])}return u};i("Object.assign",function(u){return u||l});function c(u,f,h){u instanceof String&&(u=String(u));for(var p=u.length,v=0;v<p;v++){var b=u[v];if(f.call(h,b,v,u))return{Kd:v,Ee:b}}return{Kd:-1,Ee:void 0}}return i("Array.prototype.find",function(u){return u||function(f,h){return c(this,f,h).Ee}}),i("Object.is",function(u){return u||function(f,h){return f===h?f!==0||1/f===1/h:f!==f&&h!==h}}),i("Array.prototype.includes",function(u){return u||function(f,h){var p=this;p instanceof String&&(p=String(p));var v=p.length;for(h=h||0,0>h&&(h=Math.max(h+v,0));h<v;h++){var b=p[h];if(b===f||Object.is(b,f))return!0}return!1}}),i("String.prototype.includes",function(u){return u||function(f,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,h||0)!==-1}}),i("Array.prototype.findIndex",function(u){return u||function(f,h){return c(this,f,h).Kd}}),i("Promise.prototype.finally",function(u){return u||function(f){return this.then(function(h){return Promise.resolve(f()).then(function(){return h})},function(h){return Promise.resolve(f()).then(function(){throw h})})}}),window.JEELIZFACEFILTERGEN=function(){function u(d){var S=null,M=null,O=null,W=0,J=this,se=null,$={cb:[],Mb:"none",Fc:!1,Lb:null,grid:null};this.A=function(){this.We(se.cb),O.Eg({Mb:se.Mb,Fc:se.Fc,Lb:se.Lb})},this.Jf=function(j){return S[j]},this.Xb=function(j){["s32","s34","s27"].forEach(function(ne){R.U(ne,[{type:"2f",name:"u21",value:j}])}),S&&S.forEach(function(ne){ne.Xb(j)})},this.We=function(j){var ne=null;W=j.length;var ge=se.grid!==null&&d.grid.length&&!(d.grid[0]===1&&d.grid[1]===1),x=ge?se.grid:[1,1];ge&&this.Xb(x),S=j.map(function(D,L){return D=Object.assign({},D,{index:L,parent:J,Ob:ne,Xf:L===W-1,$a:ge,V:x}),ne=L=L===0?it.instance(D):P.instance(D)}),M=S[0],O=S[W-1],S.forEach(function(D,L){L!==0&&D.mg()})},this.W=function(j){j.h(0);var ne=j;return S.forEach(function(ge){ne=ge.W(ne,!1)}),ne},this.If=function(){return M.Hf()},this.Ya=function(){return O.Lf()},this.Dd=function(){return O.Dd()},this.m=function(){S&&(S.forEach(function(j){j.m()}),O=M=S=null,W=0)},typeof d<"u"&&(se=Object.assign({},$,d),this.A())}function f(d,S){return d[S>>3]>>7-(S&7)&1}function h(d,S,M){for(var O=0,W=0;W<M;W++)O=O<<1|f(d,S+W);return O}function p(d){var S=null;d=d.data,typeof btoa>"u"&&typeof Buffer<"u"?S=Buffer.from(d,"base64").toString("latin1"):S=atob(d),d=S.length;for(var M=new Uint8Array(d),O=0;O<d;++O)M[O]=S.charCodeAt(O);return M}function v(d){return typeof d=="string"?JSON.parse(d):d}function b(d){if(typeof v(d).nb>"u"){var S=v(d);d=S.ne;var M=S.nf,O=S.n;S=p(S);for(var W=new Float32Array(O),J=new Float32Array(M),se=d+M+1,$=new Float32Array(M),j=.5,ne=0;ne<M;ne++)$[ne]=j,j*=.5;for(j=0;j<O;++j){var ge=se*j;ne=f(S,ge)===0?1:-1;var x=h(S,ge+1,d),D=S;ge=ge+1+d;for(var L=J.length,G=0,z=ge;z<ge+L;++z)J[G]=f(D,z),++G;for(ge=D=0;ge<M;++ge)D+=J[ge]*$[ge];W[j]=D===0&&x===0?0:ne*(1+D)*Math.pow(2,1+x-Math.pow(2,d-1))}d=W}else if(O=v(d),d=O.nb,d===0)d=new Uint8Array(O.nb);else{for(M=O.n,O=p(O),S=new Uint32Array(M),W=0;W<M;++W)S[W]=h(O,W*d,d);d=S}return d}function g(){return[ve.ready,ve.play,ve.pause].indexOf($e)!==-1}function _(){if($e===ve.play)return!1;$e=ve.play,He.stop(),N()}function E(){return $e!==ve.play?!1:(Ve.stop(),He.stop(),$e=ve.pause,!0)}function A(d,S,M,O,W){return d=4*(3*S+d)+M,O+(vt.buffer[d]/255+vt.buffer[d+12]/65025)*(W-O)}function w(){m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1),he.Of()}function V(){var d=at.ta();return ze.O(),m.viewport(0,0,3,2*d),R.set("s62"),vt.Aa.h(0),ue.l(!1,!1),lt.enableAsyncReadPixels?F.Qb(0,0,3,2*d,vt.buffer,T,1):F.je(0,0,3,2*d,vt.buffer)}function N(){$e!==ve.pause&&(lt.isCleanGLStateAtEachIteration&&(R.sd(),ue.reset(),ue.Ea(),m.disable(m.DEPTH_TEST),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1),R.Ma()),Ve.Kc(k,V,B,T,Z,lt.animateProcessOrder))}function k(){if(ze.ha(),!de.Eb)if(de.Db)de.element.needsUpdate&&(de.F.re(de.element.videoWidth,de.element.videoHeight),de.F.Wb(de.element.arrayBuffer),de.element.needsUpdate=!1);else{var d=de.element.currentTime,S=d-de.Pb;0>S&&(de.Pb=d,S=0),1e3*S<H.Pg||(de.Pb+=S,de.F.refresh())}for(d=Ve.Kf(),at.update(d,Fn),S=0;S<d;++S){at.Ub(S),R.set("s64");var M=Fn[at.Ed()];R.K("u46",1+fi.Lc*(Math.cos(M.ry)-1)),Be.Ga&&R.K("u45",M.rz),at.ze("u44");var O=Wt.If();M=It.rf(Ot.u,M,O),Ot.Za.N(M,O),de.F.h(0),vt.Aa.h(1),ue.l(!1,!1),Wt.W(Ot.Za)}Ve.Ub()}function T(){ze.Mg(),lt.isCleanGLStateAtEachIteration&&(ze.reset(),Ae.reset(),m.enable(m.DEPTH_TEST)),Be.$b&&Be.$b(at.Wd()?Fn:Fn[0]),lt.isCleanGLStateAtEachIteration&&(m.disable(m.BLEND),ue.reset(),ue.Ea())}function B(){for(var d=0;d<at.ta();++d)if(at.cg(d)){var S=d,M=In[S],O=[S],W=Fn[S],J=Wr[S],se=2*S;if(M.qb=A(1,se,3,0,1),W.detected=Te.ca(W.detected,M.qb,H.Oe),M.x=A(0,se,1,-1,1),M.y=A(0,se,2,-1,1),M.ea=A(0,se,3,0,1),M.qb<lt.multiDetectionThresholdFactors[0]*lt.threshold)M.xa=Math.floor(M.xa/2),Be.Ga&&(W.rz=0,W.ry=0);else{var $=vt.gb;for(M.rx=A(1,se,0,-$[0],$[0]),M.ry=A(1,se,1,-$[1],$[1]),M.za=A(1,se,2,-$[2],$[2]),$=0;$<vt.da;++$)M.zd[$]=vt.Fa[$](A(2,se,$,0,1));for(se=M.ea*vt.me,O.dx=M.x-W.xRaw,O.dy=M.y-W.yRaw,O.jc=se-W.sRaw,O.fc=M.rx-W.rx,O.hc=M.ry-W.ry,O.ic=Be.Ga?M.za:M.za-W.rz,$=Ve.Bf(),O=(1-ut.Jb(Qt.translationFactorRange[0],Qt.translationFactorRange[1],Math.sqrt(O.dx*O.dx+O.dy*O.dy+O.jc*O.jc)/$))*(1-ut.Jb(Qt.rotationFactorRange[0],Qt.rotationFactorRange[1],Math.sqrt(O.fc*O.fc+O.hc*O.hc+O.ic*O.ic)/$))*ut.Jb(Qt.qualityFactorRange[0],Qt.qualityFactorRange[1],M.qb),S=J[++Xr[S]%J.length]=O,$=0;$<J.length;++$)S=Math.min(S,J[$]);for(S=Math.max(.5,S),O=Math.min(S,O),J=Te.ca(Qt.alphaRange[1],Qt.alphaRange[0],Math.pow(O,H.Qe)),W.xRaw=Te.ca(W.xRaw,M.x,J),W.yRaw=Te.ca(W.yRaw,M.y,J),W.sRaw=Te.ca(W.sRaw,se,J),W.rx=Te.ca(W.rx,M.rx,J),W.ry=Te.ca(W.ry,M.ry,J),W.rz=Be.Ga?W.rz+Qt.followZRotAlphaFactor*J*M.za:Te.ca(W.rz,M.za,J),S=W.sRaw*fi.ec*Math.sin(W.ry),se=Math.sin(W.rz)*S/mn,W.x=W.xRaw+Math.cos(W.rz)*S,W.y=W.yRaw+se,W.s=W.sRaw,J=Math.max(J,H.Pe),S=0;S<vt.da;++S)W.expressions[S]=Te.ca(W.expressions[S],M.zd[S],J);++M.xa}}}function Z(){$e===ve.play&&He.Kc(N)}function Y(){Ot.Za=It.instance({});var d={width:H.we,height:at.ta(),isFloat:!0,isPot:!1,array:at.lf(new Float32Array([0,.5,.5,0,0,0,0,0,0,0,0,0]))};vt.Aa=we.instance(d)}function fe(){R.U("s64",[{type:"1i",name:"u1",value:0},{type:"1i",name:"u42",value:1},{type:"2f",name:"u43",value:Ot.H},{type:"1f",name:"u44",value:.5},{type:"1f",name:"u45",value:0}]),R.U("s65",[{type:"1i",name:"u47",value:0},{type:"1i",name:"u42",value:1},{type:"1f",name:"u50",value:H.Kg},{type:"1f",name:"u51",value:lt.threshold},{type:"3f",name:"u49",value:[vt.R[0]*Ot.H[0],vt.R[1]*Ot.H[1],vt.R[2]]},{type:"1f",name:"u44",value:.5},{type:"1f",name:"u52",value:1},{type:"1f",name:"u45",value:0}]);var d=[{type:"1i",name:"u47",value:0}];R.U("s66",d),R.U("s67",d),R.U("s62",[{type:"1i",name:"u42",value:0},{type:"1f",name:"u55",value:Ot.H[0]},{type:"2f",name:"u54",value:[0,.5/at.ta()]}])}function Ee(){Ot.H[0]=1,Ot.H[1]=Ot.u/Ot.J,pt.A({Nb:lt.overlapFactors,ce:lt.nScaleLevels,u:Ot.u,J:Ot.J,le:lt.scale0Factor,R:vt.R,Mc:lt.scanCenterFirst})}function Me(d){if(Be.Pa)te(typeof Be.Pa=="string"?JSON.parse(Be.Pa):Be.Pa,d);else{var S=Be.dd;S.toUpperCase().split(".").pop()!=="JSON"&&(S+=H.neuralNetworkPath),Ze.get(S,function(M){M=JSON.parse(M),te(M,d)})}}function te(d,S){if(d.exportData){var M=d.exportData;if(M.rotationEulerAnglesFactors&&(vt.gb=M.rotationEulerAnglesFactors),M.translationScalingFactors){var O=M.translationScalingFactors,W=lt.translationScalingFactors;vt.R[0]=O[0]*W[0],vt.R[1]=O[1]*W[1],vt.R[2]=O[2]*W[2]}typeof M.nExpressions<"u"&&(vt.da=M.nExpressions),vt.me=M.dsMean?1+M.dsMean:1,fi.Lc=.4,fi.ec=.7,typeof M.fgScaleXFactor<"u"&&(fi.Lc=M.fgScaleXFactor),typeof M.fgDisplaceXFactor<"u"&&(fi.ec=M.fgDisplaceXFactor)}if(vt.da||(vt.da=H.be),!vt.Fa)for(vt.Fa=[],M=0;M<vt.da;++M)vt.Fa.push(H.uf);S(d)}function ce(){return he.A({pb:Be.ja,width:Ot.u,height:Ot.J,debug:!1,Ec:function(){ft("GLCONTEXT_LOST")},antialias:Be.antialias,premultipliedAlpha:!0})?!0:(ft("GL_INCOMPATIBLE"),!1)}function re(){var d=at.Ed(),S=Fn[d];vt.Aa.ug(1),m.viewport(0,d,1,1),R.set("s65"),Be.Ga&&R.K("u45",S.rz),at.ze("u44");var M=1,O=at.Gg(In,Fn,Ot.u/Ot.J);at.Wd()&&(O&&(M=0,In[d].xa=0,S.isDetected=!1,S.detected=0),R.K("u52",M)),R.Ag("u48",pt.get(d)),ue.l(!1,!1),(at.Vd()||O)&&(m.viewport(1,d,1,1),R.set("s66"),R.K("u52",M),ue.l(!1,!1)),at.Vd()&&(m.viewport(2,d,1,1),R.set("s67"),ue.l(!1,!1)),vt.Aa.sync()}function Re(){if(de.F&&de.F.remove(),de.Db=!!de.element.isFakeVideo,de.Db){var d=et();d={isFlipY:!1,array:de.element.arrayBuffer,width:d.w,height:d.Ia,isKeepArray:!0}}else d={L:de.element};de.Rc=Ae.instance(Object.assign({isPot:!1,isLinear:!0,isFloat:!1},d)),de.F=de.Rc}function Ue(){var d=[{type:"mat2",name:"u41",value:de.B}];R.U("s63",[{type:"1i",name:"u1",value:0}].concat(d)),R.U("s64",d)}function Ke(){var d=[.5,.5],S=de.H[1]/de.H[0];switch(mn=he.Y()/he.M(),Math.abs(Ge.rotate)===90&&(S=1/S),S>mn?d[1]*=mn/S:d[0]*=S/mn,R.U("s65",[{name:"u53",type:"1f",value:mn}]),de.B[0]=0,de.B[1]=0,de.B[2]=0,de.B[3]=0,Ge.rotate){case 0:de.B[0]=d[0],de.B[3]=d[1];break;case 180:de.B[0]=-d[0],de.B[3]=-d[1];break;case 90:de.B[1]=d[0],de.B[2]=-d[1];break;case-90:de.B[1]=-d[0],de.B[2]=d[1]}Ge.flipX&&(de.B[0]*=-1,de.B[2]*=-1),de.Eb||(de.B[1]*=-1,de.B[3]*=-1)}function et(){var d={w:de.element.videoWidth||de.element.width,Ia:de.element.videoHeight||de.element.height};if(!d.w||!d.Ia||4>d.w||4>d.Ia)throw Error("INVALID VIDEO DIMENSIONS - width = "+d.w+" height = "+d.Ia);return d}function nt(){var d=et(),S=de.H[0]!==d.w||de.H[1]!==d.Ia;return S&&(de.H[0]=d.w,de.H[1]=d.Ia),S}function Mt(d,S){return $e===ve.error?!1:(de.element=d,nt(),S&&S(),!0)}function Ut(d,S,M){d&&d(),de.Ua={video:{facingMode:{exact:Ge.facingMode},width:{min:Ge.minWidth,max:Ge.maxWidth,ideal:Ge.idealWidth},height:{min:Ge.minHeight,max:Ge.maxHeight,ideal:Ge.idealHeight}},audio:!1},Fe.fd(de.Ua,Ge.deviceId),Fe.get(de.element?de.element:Fe.Id(),function(O){S&&S(O),M(O)},function(){ft("WEBCAM_UNAVAILABLE")},de.Ua)}function ft(d){$e!==ve.error&&($e=ve.error,Be.Ta&&Be.Ta(d))}var Te={Rh:function(d){return Math.ceil(Math.log2(d))},mi:function(d){return Math.log2(d)},ii:function(d){return Math.log2(d)%1===0},ah:function(d){var S=[0,0,0,0];return d.forEach(function(M){S[0]+=M[0],S[1]+=M[1],S[2]+=M[2],S[3]+=M[3]}),S},bh:function(d,S,M){return Math.min(Math.max(d,S),M)},fh:function(d){return d*Math.PI/180},ui:function(d,S){return S=Math.pow(10,S),Math.round(d*S)/S},vi:function(d){return Math.round(1e6*d)/1e6},Sh:function(d,S){return(100*d/S).toFixed(3)},ca:function(d,S,M){return d*(1-M)+S*M},ni:function(d,S){return d[0]*(1-S)+d[1]*S},kf:function(d,S){return Te.bf(d-S)},bf:function(d){for(;d>Math.PI;)d-=2*Math.PI;for(;d<=-Math.PI;)d+=2*Math.PI;return d},jh:function(d,S){return Math.abs(Te.kf(d,S))},Qg:function(d,S){return Math.atan2(Math.sin(d)+Math.sin(S),Math.cos(d)+Math.cos(S))}},Ze={get:function(d,S,M){var O=new XMLHttpRequest;O.open("GET",d,!0),O.withCredentials=!1,O.onreadystatechange=function(){O.readyState===4&&(O.status===200||O.status===0?S(O.responseText):typeof M<"u"&&M(O.status))},O.send()},Mf:function(d){return new Promise(function(S,M){Ze.get(d,S,M)})},Oh:function(d,S,M){d+=M?"?"+Ze.qf(M):"",Ze.get(d,function(O){S(JSON.parse(O))})},pi:function(d,S,M){var O=new XMLHttpRequest;O.open("POST",d,!0),O.setRequestHeader("Content-type","application/x-www-form-urlencoded"),O.onreadystatechange=function(){O.readyState!==4||O.status!==200&&O.status!==0||M(O.responseText)},O.send(S)},qf:function(d){return typeof d=="string"?d:Object.keys(d).map(function(S){return encodeURIComponent(S)+"="+encodeURIComponent(d[S])}).join("&")},Ch:function(d,S){var M=new XMLHttpRequest;M.open("POST",d,!0),M.responseType="arraybuffer",M.onload=function(){S(M.response)},M.send()}},je={create:function(d,S){for(var M=Array(S),O=0;O<S;++O)M[O]=d;return M},gh:function(d,S){for(var M=0;M<d.length;++M)S[M]=d[M]},clone:function(d){for(var S=Array(d.length),M=0;M<d.length;++M)S[M]=d[M];return S},yi:function(d,S,M){d.forEach(function(O,W){S[W]=O*M})},Ki:function(d){for(var S=d.length-1;0<S;--S){var M=Math.floor(Math.random()*(S+1)),O=d[S];d[S]=d[M],d[M]=O}},Mi:function(d){return d.sort(function(S,M){return S-M})},Jg:function(d){return Array.isArray(d)||d.constructor===Float32Array||d.constructor===Uint8Array}},ct={cc:function(d,S){if(S===0||typeof d!="object")return d;d=Object.assign({},d),S=S===void 0||S===-1?-1:S-1;for(var M in d)d[M]=ct.cc(d[M],S);return d},ih:function(d){return JSON.parse(JSON.stringify(d))}},ut={Li:function(d,S,M){return d=Math.min(Math.max((M-d)/(S-d),0),1),d*d*(3-2*d)},Jb:function(d,S,M){return Math.min(Math.max((M-d)/(S-d),0),1)},uh:function(d,S,M,O){return Math.pow(Math.min(Math.max((O-d)/(S-d),0),1),M)},Ri:function(){return 0},oi:function(){return 1},li:function(d){return d},rh:function(d){return d*d},wh:function(d){return d*(2-d)},oh:function(d){return .5>d?2*d*d:-1+(4-2*d)*d},mh:function(d){return d*d*d},vh:function(d){return--d*d*d+1},nh:function(d){return .5>d?4*d*d*d:(d-1)*(2*d-2)*(2*d-2)+1},sh:function(d){return d*d*d*d},xh:function(d){return 1- --d*d*d*d},ph:function(d){return .5>d?8*d*d*d*d:1-8*--d*d*d*d},th:function(d){return d*d*d*d*d},yh:function(d){return 1+--d*d*d*d*d},qh:function(d){return .5>d?16*d*d*d*d*d:1+16*--d*d*d*d*d}},ht={yf:function(d,S,M){switch(d){case"relu":return M+"=max(vec4(0.),"+S+");";case"elu":return M+"=mix(exp(-abs("+S+"))-vec4(1.),"+S+",step(0.,"+S+"));";case"elu01":return M+"=mix(0.1*exp(-abs("+S+"))-vec4(0.1),"+S+",step(0.,"+S+"));";case"arctan":return M+"=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;";case"copy":return"";case"gelu":return M+"="+M+`;
          vec4 zou=`+S+`;
          vec4 polyZou=0.7978845608028654*(zou+0.044715*zou*zou*zou);
          vec4 exZou=exp(-abs(polyZou));
          vec4 exZou2=exZou*exZou;
          vec4 tanhZou=sign(polyZou)*(vec4(1.)-exZou2)/(vec4(1.)+exZou2);
          `+M+"=0.5*zou*(vec4(1.)+tanhZou);";default:return!1}}},R=function(){function d(X,U,xe){return U=X.createShader(U),X.shaderSource(U,xe),X.compileShader(U),X.getShaderParameter(U,X.COMPILE_STATUS)?U:null}function S(X,U,xe){U=d(X,X.VERTEX_SHADER,U),xe=d(X,X.FRAGMENT_SHADER,xe),X===m&&$.push(U,xe);var rt=X.createProgram();return X.attachShader(rt,U),X.attachShader(rt,xe),X.linkProgram(rt),rt}function M(X){return["float","sampler2D","int"].map(function(U){return"precision "+X+" "+U+`;
`}).join("")}function O(X,U){if(U.o=!!U.o,!U.o){U.Ba=U.Ba||"precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5);}",U.mb=U.mb||["a0"],U.Ra=U.Ra||[2],U.precision=U.precision||D,U.id=ge++,U.pe!==void 0&&(U.pe.forEach(function(st,mt){U.g=U.g.replace(st,U.Rb[mt])}),U.pe.splice(0)),U.Yc=0,U.Ra.forEach(function(st){U.Yc+=4*st});var xe=M(U.precision);if(U.ya=S(X,xe+U.Ba,xe+U.g),U.C={},U.i.forEach(function(st){U.C[st]=X.getUniformLocation(U.ya,st)}),U.attributes={},U.Sa=[],U.mb.forEach(function(st){var mt=X.getAttribLocation(U.ya,st);U.attributes[st]=mt,U.Sa.push(mt)}),U.j){X.useProgram(U.ya),ne=U,j=U.id;for(var rt in U.j)X.uniform1i(U.C[rt],U.j[rt])}U.wa=!0}}function W(X){Se.yg(Je),j!==X.id&&(Je.S(),j=X.id,ne=X,m.useProgram(X.ya),X.Sa.forEach(function(U){U!==0&&m.enableVertexAttribArray(U)}))}function J(X,U,xe){return O(X,U),X.useProgram(U.ya),X.enableVertexAttribArray(U.attributes.a0),j=-1,ne=U}function se(){return{g:"uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",i:["u1"],j:{u1:0}}}var $=[],j=-1,ne=null,ge=0,x=!1,D="highp",L=["u1"],G=["u0"],z={u1:0},C={u0:0},Q={u1:0,u2:1},ie={u1:0,u3:1},oe=["u1","u3","u4"],ae=["u5","u6"],I={u5:0},q=["u7","u8","u9","u10"],pe={u7:0,u8:1},Le={s0:se(),s1:{g:"uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",i:L,j:z,precision:"lowp"},s2:{g:"uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}",i:["u1","u2"],j:Q},s3:{g:"uniform sampler2D u1;uniform vec2 u11,u12;varying vec2 vv0;void main(){vec2 a=vv0*u11+u12;gl_FragColor=texture2D(u1,a);}",i:["u1","u11","u12"],j:z,o:!0},s4:{g:"uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}",i:L,j:z},s5:{g:"uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",i:["u1","u2"],j:Q},s6:{g:"uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}",i:L,j:z},s7:{g:"uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}",i:L,j:z},s8:{g:"uniform sampler2D u0;uniform float u11;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u11;}",i:["u0","u11"],j:C},s9:{g:"uniform sampler2D u0;uniform float u11;varying vec2 vv0;const vec4 f=vec4(.25),g=vec4(1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u11,f);gl_FragColor=b*g;}",i:["u0","u11"],j:C},s10:{g:"uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}",i:L,j:z},s11:{g:"uniform sampler2D u1,u13;uniform float u14;const vec4 f=vec4(1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u13,vv0);gl_FragColor=mix(b,a,u14*f);}",i:["u1","u13","u14"],j:{u1:0,u13:1}},s12:{g:"uniform sampler2D u1;uniform vec2 u15;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u15)+texture2D(u1,vv0+u15*vec2(1.,-1.))+texture2D(u1,vv0+u15*vec2(-1.,-1.))+texture2D(u1,vv0+u15*vec2(-1.,1.)));}",i:["u1","u15"],j:z},s13:{g:"uniform sampler2D u1;varying vec2 vv0;vec4 f(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),g=exp2(c);vec3 h=clamp(b/g,0.,1.);return vec4(h,(c+128.)/256.);}void main(){vec3 a=texture2D(u1,vv0).rgb;gl_FragColor=f(a);}",i:L,j:z,o:!0},s14:{g:"uniform sampler2D u1;varying vec2 vv0;vec3 f(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=vec4(f(a),1.);}",i:L,j:z,o:!0},s15:{g:"uniform sampler2D u1;uniform vec4 u16;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u16);gl_FragColor=j(a);}",i:["u1","u16"],j:z},s16:{g:"uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",i:G,j:C,o:!0},s17:{g:"uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}",i:G,j:C,o:!0},s18:{g:"uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.);const float g=.797885,h=.044715;vec4 i(vec4 a){vec4 b=exp(-abs(a)),c=b*b,d=sign(a)*(e-c)/(e+c);return d;}void main(){vec4 a=texture2D(u0,vv0),b=a+h*a*a*a,c=i(g*b);gl_FragColor=.5*a*(e+c);}",i:G,j:C,o:!0},s19:{g:"uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}",i:G,j:C,o:!0},s20:{g:"uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(a)-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",i:G,j:C},s21:{g:"uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",i:G,j:C},s22:{g:"uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=2.*atan(e*texture2D(u0,vv0))/e;}",i:G,j:C,o:!0},s23:{g:"uniform sampler2D u0,u17;uniform float u18;const vec2 e=vec2(.5);const float f=1e-5;const vec4 g=vec4(1.),i=vec4(0.);varying vec2 vv0;void main(){vec4 a=texture2D(u17,e);float b=u18*u18;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}",i:["u0","u17","u18"],j:{u0:0,u17:1},o:!0},s24:{g:"uniform sampler2D u1;uniform vec2 u19;varying vec2 vv0;void main(){float a=u19.x*u19.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u19.y),f=floor(u19.x*fract(b*u19.y)),g=(f*u19.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",i:["u1","u19"],j:z},s25:{g:"uniform sampler2D u8,u7,u20;varying vec2 vv0;void main(){vec4 a=texture2D(u20,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u8,b),f=texture2D(u7,c);gl_FragColor=d*f;}",i:["u8","u7","u20"],j:Object.assign({u20:2},pe),o:!0},s26:{g:"uniform float u9,u10;uniform sampler2D u8,u7;varying vec2 vv0;void main(){vec2 b=fract(vv0*u9);float a=u9*u10;vec2 c=(vec2(.5)+floor(a*vv0))/a;vec4 d=texture2D(u8,c),f=texture2D(u7,b);gl_FragColor=d*f;}",i:q,j:pe},s27:{g:"uniform float u9,u10;uniform vec2 u21;uniform sampler2D u8,u7;varying vec2 vv0;void main(){float a=u9*u10;vec2 b=mod(vv0*u21,vec2(1.)),c=floor(vv0*u21)/u21,d=c+fract(b*u9)/u21,f=(vec2(.5)+floor(a*b))/a;vec4 g=texture2D(u8,f),h=texture2D(u7,d);gl_FragColor=g*h;}",i:["u21"].concat(q),j:pe,o:!0},s28:{g:"uniform float u9,u10;uniform sampler2D u8,u7,u23,u24,u25,u26;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 c=fract(vv0*u9),d=vv0;float h=u9*u10;d=(.5+floor(h*vv0))/h;vec4 l=texture2D(u8,d),m=texture2D(u7,c),a=texture2D(u26,d);a=floor(.5+a*255.);vec4 n=texture2D(u23,c),o=texture2D(u24,c),p=texture2D(u25,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b,r=i*m+j*n+k*o+q*p;gl_FragColor=l*r;}",i:["u26","u23","u24","u25"].concat(q),j:Object.assign({u26:3,u23:4,u24:5,u25:6},pe),o:!0},s29:{g:"uniform sampler2D u8,u7,u3;uniform float u9,u27,u28,u10;uniform vec2 u29;varying vec2 vv0;const vec2 f=vec2(1.),l=vec2(0.);void main(){vec2 c=floor(u27*vv0),d=u27*vv0-c;float g=u9/u27;vec2 h=floor(d*g),i=d*g-h,j=(c+i)/u27;float m=u27*u10/u9;vec2 b=m*h,n=floor(.5*(u10-1.)*(f-u29));b=floor(u29*b+n);vec2 a=(b+i*u28)/u10;a+=.25/u10;vec2 k=step(a,f)*step(l,a);vec4 o=texture2D(u8,j),p=texture2D(u7,a),q=o*p,r=texture2D(u3,j);gl_FragColor=(q*u28*u28+r)*k.x*k.y;}",i:["u27","u28","u3","u29"].concat(q),j:Object.assign({u3:2},pe)},s30:{g:"uniform sampler2D u8,u7;varying vec2 vv0;void main(){vec4 a=texture2D(u8,vv0),b=texture2D(u7,vv0);gl_FragColor=a*b;}",i:["u8","u7"],j:pe,o:!0},s31:{g:"uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;void main(){gl_FragColor=texture2D(u3,vv0)+u4*texture2D(u1,vv0);}",i:oe,j:ie},s32:{g:"uniform sampler2D u1,u3;uniform vec2 u21;uniform float u4;varying vec2 vv0;void main(){gl_FragColor=texture2D(u3,vv0*u21)+u4*texture2D(u1,vv0);}",i:["u21"].concat(oe),j:ie,o:!0},s33:{g:"uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u3,vv0)+u4*texture2D(u1,vv0);vec2 h=mod(gl_FragCoord.xy,vec2(2.)),d=step(h,vec2(.75));float b=d.x+2.*d.y,c=step(2.5,b),g=(1.-c)*step(1.5,b),i=(1.-c)*(1.-g)*step(.5,b);a=mix(a,a.argb,i*e),a=mix(a,a.barg,g*e),a=mix(a,a.gbar,c*e),gl_FragColor=a;}",i:oe,j:ie,o:!0},s34:{g:"uniform sampler2D u1,u3;uniform vec2 u21;uniform float u4;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u3,vv0*u21)+u4*texture2D(u1,vv0);vec2 h=mod(gl_FragCoord.xy,vec2(2.)),d=step(h,vec2(.75));float b=d.x+2.*d.y,c=step(2.5,b),g=(1.-c)*step(1.5,b),i=(1.-c)*(1.-g)*step(.5,b);a=mix(a,a.argb,i*e),a=mix(a,a.barg,g*e),a=mix(a,a.gbar,c*e),gl_FragColor=a;}",i:["u21"].concat(oe),j:ie,o:!0},s35:{g:"uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;const vec4 h=vec4(1.);void main(){vec4 a=texture2D(u3,vv0)+u4*texture2D(u1,vv0);vec2 b=floor(gl_FragCoord.xy);vec3 d=b.x*vec3(1.)+vec3(0.,1.,2.);float c=mod(b.y,2.);vec4 f=vec4(c,(1.-c)*step(mod(d,vec3(3.)),vec3(.5)));mat4 g=mat4(a.rgba,a.gbar,a.barg,a.argb);gl_FragColor=g*f;}",i:oe,j:ie,o:!0},s36:{g:"varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",i:L,j:z,precision:"lowp"},s37:{g:"varying vec2 vv0;uniform sampler2D u1;uniform float u30;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u30)).rgb,c=texture2D(u1,vv0+vec2(u30,u30)).rgb,d=texture2D(u1,vv0+vec2(u30,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}",i:["u1","u30"],j:z,precision:"lowp"},s38:{g:"varying vec2 vv0;uniform sampler2D u1;uniform float u30;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u30)).rgb,c=texture2D(u1,vv0+vec2(u30,u30)).rgb,d=texture2D(u1,vv0+vec2(u30,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",i:["u1","u30"],j:z,precision:"lowp"},s39:{g:"varying vec2 vv0;uniform sampler2D u1,u2;uniform float u31;const vec4 f=vec4(1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u31,vv0.y-u31))*1.,a-=texture2D(u1,vec2(vv0.x-u31,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u31,vv0.y+u31))*1.,a+=texture2D(u1,vec2(vv0.x+u31,vv0.y-u31))*1.,a+=texture2D(u1,vec2(vv0.x+u31,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u31,vv0.y+u31))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u31,vv0.y-u31))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u31))*2.,b-=texture2D(u1,vec2(vv0.x+u31,vv0.y-u31))*1.,b+=texture2D(u1,vec2(vv0.x-u31,vv0.y+u31))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u31))*2.,b+=texture2D(u1,vec2(vv0.x+u31,vv0.y+u31))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",i:["u1","u2","u31"],j:Q,o:!0},s40:{g:"varying vec2 vv0;uniform sampler2D u1,u2;uniform float u31;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u31,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}",i:["u1","u2","u31"],j:Q,o:!0},s41:{g:"uniform sampler2D u5;uniform vec2 u6;varying vec2 vv0;const vec2 f=vec2(1.),g=vec2(.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=f/u6,c=u6/2.,d=floor(vv0*c)+g,j=d/c,b=j-a*.5;vec4 k=texture2D(u5,b),l=texture2D(u5,b+a*h),m=texture2D(u5,b+a*i),n=texture2D(u5,b+a),o=max(k,l),p=max(m,n);gl_FragColor=max(o,p);}",i:ae,j:I,o:!0},s42:{g:"uniform sampler2D u5;uniform vec2 u6;varying vec2 vv0;const vec2 k=vec2(1.),l=vec2(1.,0.),m=vec2(0.,1.),n=vec2(2.,0.),o=vec2(0.,2.);vec4 e(vec2 b,vec2 a){vec4 c=texture2D(u5,a),d=texture2D(u5,a+b*l),f=texture2D(u5,a+b*m),g=texture2D(u5,a+b),h=max(c,d),i=max(f,g);return max(h,i);}void main(){vec2 a=k/u6,c=u6/4.,d=4.*floor(vv0*c),f=d/u6,b=f+a*.5;vec4 g=e(a,b),h=e(a,b+a*n),i=e(a,b+a*2.),p=e(a,b+a*o),q=max(g,h),r=max(i,p);gl_FragColor=max(q,r);}",i:ae,j:I,o:!0},s43:{g:"uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",i:["u1"],j:z,precision:"lowp",o:!0},s44:{g:"uniform sampler2D u1;uniform vec2 u15;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u15)+2002./e*texture2D(u1,vv0-2.*u15)+3003./e*texture2D(u1,vv0-u15)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u15)+2002./e*texture2D(u1,vv0+2.*u15)+1001./e*texture2D(u1,vv0+3.*u15);gl_FragColor=a;}",i:["u15","u1"],j:z,precision:"lowp",o:!0},s45:{g:"uniform sampler2D u1,u17,u32;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u17,vv0),b=texture2D(u32,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",i:["u1","u17","u32"],j:{u1:0,u17:1,u32:2},o:!0}},le={s46:{g:"uniform float u9,u33;uniform sampler2D u8,u7,u3;varying vec2 vv0;const vec2 ZERO2=vec2(0.),ONE2=vec2(1.),HALF2=vec2(.5),EPS2=vec2(1e-5);void main(){vec4 sum=texture2D(u3,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u9,xyTo=floor(vv0*u9+eps2);float weightSize=toSparsity*u9;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u33*(xyPatch-halfFromSparsity))/u9,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u8,uvWeight)*texture2D(u7,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",i:["u9","u8","u7","u3","u33"],Rb:["1.1111","gl_FragColor\\*=2.2222;"]},s47:{g:"uniform float u9,u33,u10;uniform sampler2D u8,u7,u3;varying vec2 vv0;const vec2 ZERO2=vec2(0.),ONE2=vec2(1.),HALF2=vec2(.5),EPS2=vec2(1e-4);void main(){vec4 sum=texture2D(u3,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u10,xyTo=floor(vv0*u9+eps2);float weightSize=fromSparsity*u10;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u9;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u33*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u10,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u8,uvWeight)*texture2D(u7,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",i:"u9 u10 u8 u7 u3 u33".split(" "),Rb:["1.1111","gl_FragColor\\*=2.2222;","3.3333"]}},qe=null,tt=null,Je={Gb:function(){return x},A:function(){if(!x){qe=ct.cc(Le,2),tt=ct.cc(le,2),D="highp",m.getShaderPrecisionFormat&&(m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT),m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.LOW_FLOAT));for(var X in qe)O(m,qe[X]);R.set("s0"),m.enableVertexAttribArray(0),x=!0}},jb:function(X){X.forEach(function(U){Je.gd(U)})},gd:function(X){qe[X.id]=X,O(m,X,X.id)},Qf:function(X,U,xe){U||(U=X),qe[U]=Object.create(tt[X]),qe[U].Wf=!0,tt[X].Rb&&tt[X].Rb.forEach(function(rt,st){var mt="";rt.substring(0,7)==="gl_Frag"?(rt=new RegExp("[,;]?"+rt,"g"),mt=";"):rt=new RegExp(rt,"g"),qe[U].g=qe[U].g.replace(rt,mt+xe[st])}),O(m,qe[U])},set:function(X){var U=qe[X];U.o&&(U.o=!1,O(m,U)),W(U)},hb:function(X){return J(X,se())},Pc:function(X){return J(X,{g:"void main(){gl_FragColor=vec4(.5,.5,.5,.5);}",i:[],precision:D})},tf:function(X){return typeof qe[X]>"u"?!1:qe[X].wa},S:function(){j!==-1&&(j=-1,ne.Sa.forEach(function(X){X!==0&&m.disableVertexAttribArray(X)}))},Qc:function(){var X=0;ne.Sa.forEach(function(U,xe){xe=ne.Ra[xe],m.vertexAttribPointer(U,xe,m.FLOAT,!1,ne.Yc,X),X+=4*xe})},sd:function(){m.enableVertexAttribArray(0)},Ma:function(){Je.Sb(m)},Sb:function(X){X.vertexAttribPointer(ne.Sa[0],2,X.FLOAT,!1,8,0)},Fi:function(X,U){m.uniform1i(ne.C[X],U)},K:function(X,U){m.uniform1f(ne.C[X],U)},X:function(X,U,xe){m.uniform2f(ne.C[X],U,xe)},zg:function(X,U){m.uniform2fv(ne.C[X],U)},Ag:function(X,U){m.uniform3fv(ne.C[X],U)},Gi:function(X,U,xe,rt){m.uniform3f(ne.C[X],U,xe,rt)},Bg:function(X,U,xe,rt,st){m.uniform4f(ne.C[X],U,xe,rt,st)},ue:function(X,U){m.uniform4fv(ne.C[X],U)},Hi:function(X,U){m.uniformMatrix2fv(ne.C[X],!1,U)},Ii:function(X,U){m.uniformMatrix3fv(ne.C[X],!1,U)},Ji:function(X,U){m.uniformMatrix4fv(ne.C[X],!1,U)},U:function(X,U){Je.set(X),U.forEach(function(xe){switch(xe.type){case"4f":m.uniform4fv(ne.C[xe.name],xe.value);break;case"3f":m.uniform3fv(ne.C[xe.name],xe.value);break;case"2f":m.uniform2fv(ne.C[xe.name],xe.value);break;case"1f":m.uniform1f(ne.C[xe.name],xe.value);break;case"1i":m.uniform1i(ne.C[xe.name],xe.value);break;case"mat2":m.uniformMatrix2fv(ne.C[xe.name],!1,xe.value);break;case"mat3":m.uniformMatrix3fv(ne.C[xe.name],!1,xe.value);break;case"mat4":m.uniformMatrix4fv(ne.C[xe.name],!1,xe.value)}})},Qh:function(){return"lowp"},m:function(){Je.S(),m.disableVertexAttribArray(0);for(var X in qe){var U=qe[X];U.wa&&(U.wa=!1,m.deleteProgram(U.ya)),U.Wf&&delete qe[X]}$.forEach(function(xe){m.deleteShader(xe)}),$.splice(0),ge=0,x=!1,ne=null,j=-1}};return Je}(),m=null,he=function(){function d(L){return console.log("ERROR in ContextFF: ",L),!1}function S(){return navigator.userAgent&&navigator.userAgent.indexOf("forceWebGL1")!==-1}function M(L,G,z){L.setAttribute("width",G),L.setAttribute("height",z)}function O(L){if(S())return!1;var G=document.createElement("canvas");M(G,5,5);var z=null;try{z=G.getContext("webgl2",L)}catch{return!1}return z?(W(z),F.td(z),L=F.dc(z),!L.ma&&!L.oa?(_e.m(),F.reset(),!1):(z=_e.hd(z,L),_e.m(),F.reset(),!!z)):!1}function W(L){L.clearColor(0,0,0,0),L.disable(L.DEPTH_TEST),L.disable(L.BLEND),L.disable(L.DITHER),L.disable(L.STENCIL_TEST),L.disable(L.CULL_FACE),L.GENERATE_MIPMAP_HINT&&L.FASTEST&&L.hint(L.GENERATE_MIPMAP_HINT,L.FASTEST),L.disable(L.SAMPLE_ALPHA_TO_COVERAGE),L.disable(L.SAMPLE_COVERAGE),L.depthFunc(L.LEQUAL),L.clearDepth(1)}var J=null,se=null,$=null,j=!0,ne=null,ge=null,x=[],D={M:function(){return J.width},Y:function(){return J.height},Hh:function(){return J},Fh:function(){return m},pa:function(){return j},flush:function(){m.flush()},Of:function(){ze.reset(),ze.ha(),D.sg()},sg:function(){Ae.reset(),ue.reset(),R.S(),R.sd(),m.disable(m.DEPTH_TEST),m.disable(m.BLEND),ue.Ea(),R.Ma()},Af:function(){return ne||(ne=new Uint8Array(J.width*J.height*4)),m.readPixels(0,0,J.width,J.height,m.RGBA,m.UNSIGNED_BYTE,ne),ne},Jh:function(){return J.toDataURL("image/jpeg")},Kh:function(){ze.O(),se||(se=document.createElement("canvas"),$=se.getContext("2d")),M(se,J.width,J.height);for(var L=D.Af(),G=$.createImageData(se.width,se.height),z=se.width,C=se.height,Q=G.data,ie=0;ie<C;++ie)for(var oe=C-ie-1,ae=0;ae<z;++ae){var I=4*(ie*z+ae),q=4*(oe*z+ae);Q[I]=L[q],Q[I+1]=L[q+1],Q[I+2]=L[q+2],Q[I+3]=L[q+3]}return $.putImageData(G,0,0),se.toDataURL("image/png")},Ih:function(L){!se&&L&&(se=document.createElement("canvas"),$=se.getContext("2d"));var G=L?se:document.createElement("canvas");return M(G,J.width,J.height),(L?$:G.getContext("2d")).drawImage(J,0,0),G},A:function(L){if(L=Object.assign({na:null,Ec:null,pb:null,nd:null,width:512,height:512,premultipliedAlpha:!1,Tf:!0,antialias:!1,debug:!1,hh:!1},L),L.na?(m=L.na,J=L.na.canvas):L.nd&&!L.pb?J=document.getElementById(L.nd):L.pb&&(J=L.pb),J||(J=document.createElement("canvas")),J.width=L.width,J.height=L.height,m)j=m instanceof WebGL2RenderingContext;else{j=!0;var G={antialias:L.antialias,alpha:!0,preserveDrawingBuffer:!0,premultipliedAlpha:L.premultipliedAlpha,stencil:!1,depth:L.Tf,failIfMajorPerformanceCaveat:!0,powerPreference:"high-performance"};navigator&&navigator.userAgent&&navigator.userAgent.indexOf("noAntialiasing")!==-1&&(G.antialias=!1);var z=O(G);z||!G.antialias||S()||(G.antialias=!1,z=O(G)),z&&(m=J.getContext("webgl2",G)),m?j=!0:((m=J.getContext("webgl",G))||(m=J.getContext("experimental-webgl",G)),j=!1)}return m?(L.Ec&&J.addEventListener&&(ge=L.Ec,J.addEventListener("webglcontextlost",ge,!1)),F.A()?(W(m),R.A(),ue.A(),_e.hd(m,F.zf()),x.forEach(function(C){C(m)}),x.splice(0),!0):d("Not enough GL capabilities")):d("WebGL1 and 2 are not enabled")},Wg:function(){return new Promise(function(L){m?L(m):x.push(L)})},m:function(){m&&(F.m(),R.m(),_e.m()),ge&&(J.removeEventListener("webglcontextlost",ge,!1),ge=null),m=ne=$=se=J=null,x.splice(0)}};return D}(),Se=function(){function d(){S===null&&(typeof R<"u"?S=R:typeof JEShaders<"u"&&(S=JEShaders))}var S=null;return{reset:function(){S=null},yg:function(M){S!==M&&(S&&S.S(),S=M)},Gb:function(){return S.Gb()},Ma:function(){return S.Ma()},Sb:function(M){return S.Sb(M)},Qc:function(){return S.Qc()},S:function(){return S.S()},set:function(M){return d(),S.set(M)},hb:function(M){return d(),S.hb(M)},Pc:function(M){return d(),S.Pc(M)}}}(),me=function(){function d(U){m.bindTexture(m.TEXTURE_2D,U)}function S(){return $?m.NO_ERROR:m.getError()}function M(U){qe[0]=U,U=tt[0];var xe=U>>16&32768,rt=U>>12&2047,st=U>>23&255;return 103>st?xe:142<st?xe|31744|((st==255?0:1)&&U&8388607):113>st?(rt|=2048,xe|(rt>>114-st)+(rt>>113-st&1)):xe=(xe|st-112<<10|rt>>1)+(rt&1)}function O(U){var xe=new Uint16Array(U.length);return U.forEach(function(rt,st){xe[st]=M(rt)}),xe}function W(){if(Je.qc!==null)return Je.qc;var U=se(O([.5,.5,.5,.5]),!0);return U===null?!0:Je.qc=U}function J(){if(Je.rc!==null)return Je.rc;var U=se(new Uint8Array([127,127,127,127]),!1);return U===null?!0:Je.rc=U}function se(U,xe){if(!Se.Gb()||!Q)return null;var rt=null,st=Math.sqrt(U.length/4);try{var mt=m.getError();if(mt==="FUCKING_BIG_ERROR"||(rt=X.instance({isFloat:!1,T:xe,array:U,width:st}),mt=m.getError(),mt!==m.NO_ERROR))return!1}catch{return!1}for(Ne.O(),m.viewport(0,0,st,st),m.clearColor(0,0,0,0),m.clear(m.COLOR_BUFFER_BIT),Se.set("s0"),rt.Da(0),De.l(!0,!0),U=4*st*st,xe=new Uint8Array(U),m.readPixels(0,0,st,st,m.RGBA,m.UNSIGNED_BYTE,xe),st=!0,mt=0;mt<U;++mt)st=st&&3>Math.abs(xe[mt]-127);return rt.remove(),Ne.ha(),st}var $=!1,j=0,ne=null,ge=0,x=null,D=null,L=null,G=null,z=null,C=null,Q=!1,ie=[],oe={isFloat:!1,isPot:!0,isLinear:!1,isMipmap:!1,Sd:!1,isAnisotropicFiltering:!1,isMirrorX:!1,isMirrorY:!1,isSrgb:!1,isKeepArray:!1,isFlipY:null,width:0,height:0,url:null,array:null,data:null,L:null,pc:null,Vf:!1,T:!1,G:null,Kb:4,yc:0},ae=!1,I=null,q=null,pe=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Le=!1,le=!1,qe=new Float32Array(1),tt=new Int32Array(qe.buffer),Je={qc:null,rc:null},X={A:function(){Q||(z=[m.RGBA,null,m.RGBA,m.RGBA],C=[m.RGBA,null,m.RGBA,m.RGBA],ne=[m.TEXTURE0,m.TEXTURE1,m.TEXTURE2,m.TEXTURE3,m.TEXTURE4,m.TEXTURE5,m.TEXTURE6,m.TEXTURE7],Le=typeof JEContext<"u",le=typeof F<"u",Le&&JEContext.ji()&&ne.push(m.TEXTURE8,m.TEXTURE9),x=[-1,-1,-1,-1,-1,-1,-1,-1],G=[m.UNSIGNED_BYTE,m.FLOAT,m.FLOAT],Q=!0)},Bi:function(){m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.LINEAR),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.LINEAR)},Ci:function(){m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST)},Pf:function(){if(!D){for(var U=new Float32Array(16384),xe=0;16384>xe;++xe)U[xe]=2*Math.random()-1;D={random:X.instance({isFloat:!0,isPot:!0,array:U,width:64}),Ce:X.instance({isFloat:!1,isPot:!0,width:1,array:new Uint8Array([0,0,0,0])})}}X.Og()},se:function(U){m.framebufferTexture2D(Ne.nc(),m.COLOR_ATTACHMENT0,m.TEXTURE_2D,U,0)},Zh:function(){return D.Ce},Og:function(){G[1]=F.mc(m)},wg:function(){C=z=[m.RGBA,m.RGBA,m.RGBA,m.RGBA]},ke:function(U){R.set("s1"),Ne.O();var xe=U.M(),rt=U.Y();m.viewport(0,0,xe,rt),U.h(0),De.l(!1,!1)},si:function(U,xe){X.ke(U),m.readPixels(0,0,U.M(),U.Y(),m.RGBA,m.UNSIGNED_BYTE,xe)},ti:function(U,xe){return X.ke(U),F.Qb(0,0,U.M(),U.Y(),xe)},Bd:function(U,xe,rt,st,mt,rn,Ct){U.activeTexture(U.TEXTURE0);var Xt=U.createTexture();U.bindTexture(U.TEXTURE_2D,Xt),mt=mt instanceof Float32Array?mt:new Float32Array(mt),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_S,U.CLAMP_TO_EDGE),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_T,U.CLAMP_TO_EDGE),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,rn),U.texImage2D(U.TEXTURE_2D,0,U.RGBA,rt,st,0,U.RGBA,U.FLOAT,mt),U.bindTexture(U.TEXTURE_2D,null),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,!1),Ct&&(Ne.ha(),R.hb(U)),U.viewport(0,0,rt,st),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe,0),U.bindTexture(U.TEXTURE_2D,Xt),Ct?De.l(!0,!0):ue.vb(U),U.deleteTexture(Xt),Q&&(x[0]=-1,L=null,j=0)},Zb:function(U){U!==j&&(m.activeTexture(ne[U]),j=U)},Di:function(U){$=U},instance:function(U){var xe;function rt(){Et=Ie.L.videoWidth!==void 0?Ie.L.videoWidth:Ie.L.width,Tt=Ie.L.videoHeight!==void 0?Ie.L.videoHeight:Ie.L.height}function st(We){var gt=S();return gt==="FUCKING_BIG_ERROR"?!1:(m.texImage2D(m.TEXTURE_2D,0,ln,en,sn,We),gt=S(),gt!==m.NO_ERROR&&en!==m.RGBA&&(en=m.RGBA,m.texImage2D(m.TEXTURE_2D,0,ln,en,sn,We)),!0)}function mt(){if(!bf){d(Nn),hi&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,hi),Ie.isPot?(m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,Ie.isMirrorX?m.MIRRORED_REPEAT:m.REPEAT),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,Ie.isMirrorY?m.MIRRORED_REPEAT:m.REPEAT)):(m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE)),Ie.isAnisotropicFiltering&&typeof JESETTINGS<"u"&&m.texParameterf(m.TEXTURE_2D,JEContext.Lh().TEXTURE_MAX_ANISOTROPY_EXT,JESETTINGS.Sg),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,Ie.isLinear?m.LINEAR:m.NEAREST);var We=Ie.isMipmap&&!jr;if(m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,Ie.Sd?m.LINEAR_MIPMAP_LINEAR:Ie.isLinear?We?m.NEAREST_MIPMAP_LINEAR:m.LINEAR:We?m.NEAREST_MIPMAP_NEAREST:m.NEAREST),en=z[Ie.Kb-1],ln=C[Ie.Kb-1],sn=G[Vn],F.pa()&&(We=F.Cf(),en===m.RGBA&&sn===m.FLOAT?Ie.isMipmap||Ie.isLinear?ln=_e.Ef(m):F.jd()?We&&(ln=We):ln=m.RGBA16F||m.RGBA:en===m.RGB&&sn===m.FLOAT&&We&&(ln=We,en=m.RGBA)),(Ie.T&&!Ie.isFloat||Ie.isFloat&&Ie.isMipmap&&_e.ag())&&(ln=F.Df(),sn=F.mc(m)),Ie.yc&&(Oa=Ie.yc),Ie.isSrgb&&Ie.Kb===4&&(en=JEContext.Xh()),Ie.L)st(Ie.L);else if(Ie.url)st(yr);else if(kn){We=kn;try{m.getError()!=="FUCKING_BIG_ERROR"&&(m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,We),S()!==m.NO_ERROR&&(m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,null),S()!==m.NO_ERROR&&m.texImage2D(m.TEXTURE_2D,0,m.RGBA,Et,Tt,0,m.RGBA,m.UNSIGNED_BYTE,null)))}catch{m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,null)}Ie.isKeepArray||(kn=null)}else We=S(),We!=="FUCKING_BIG_ERROR"&&(m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,null),We=S(),We!==m.NO_ERROR&&(en=m.RGBA,Ie.T&&sn!==m.FLOAT&&(sn=m.FLOAT,m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,null))));if(Ie.isMipmap){if(!jr&&Yt)Yt.wb(),Ba=!0;else if(jr){We=Math.log2(Math.min(Et,Tt)),Yr=Array(1+We),Yr[0]=Nn;for(var gt=1;gt<=We;++gt){var dn=Math.pow(2,gt),Pt=Et/dn;dn=Tt/dn;var Er=m.createTexture();d(Er),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST),m.texImage2D(m.TEXTURE_2D,0,ln,Pt,dn,0,en,sn,null),d(null),Yr[gt]=Er}Ba=!0}}d(null),x[j]=-1,hi&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1),Gs=!0,Ie.G&&Yt&&(Ie.G(Yt),Ie.G=null)}}function rn(){for(var We=Et*Tt,gt=2*We,dn=3*We,Pt=0;Pt<We;++Pt)Kn[0][Pt]=Vs[Pt],Kn[1][Pt]=Vs[Pt+We],Kn[2][Pt]=Vs[Pt+gt],Kn[3][Pt]=Vs[Pt+dn]}function Ct(){var We=Et*Tt*4;Fi=[new Uint8Array(We),new Uint8Array(We),new Uint8Array(We),new Uint8Array(We)],Kn=[new Float32Array(Fi[0].buffer),new Float32Array(Fi[1].buffer),new Float32Array(Fi[2].buffer),new Float32Array(Fi[3].buffer)],Ua=new Uint8Array(4*We),Vs=new Float32Array(Ua.buffer),zs=!0}function Xt(){xe=new Uint8Array(Et*Tt*4),Ef=new Float32Array(xe.buffer),ml=!0}var Ie=Object.assign({},oe,U),Bt=ge++;Ie.isFlipY===null&&(Ie.isFlipY=!!Ie.url),Ie.data&&(Ie.array=typeof Ie.data=="string"?b(Ie.data):Ie.isFloat?new Float32Array(Ie.data):new Uint8Array(Ie.data),Ie.isFlipY=!1);var Vn=0,Ii=!!Ie.L,ar=null,pl=null,xf=!1;Ie.T=Ie.T||Ie.isFloat,Ie.T&&(Vn=1),!Ie.Vf&&Ie.isFloat&&le&&!F.jd()&&(Ie.isFloat=!1),Ie.isFloat&&(Vn=2),Ie.isAnisotropicFiltering&&Le&&!JEContext.ci()&&(Ie.isAnisotropicFiltering=!1);var Nn=Ie.pc||m.createTexture(),yr=null,kn=!1,Et=0,Tt=0,Gs=!1,bf=!1,zs=!1,Kn=null,Fi=null,Ua=null,Vs=null,ln=null,en=null,sn=null,hi=Ie.isFlipY,Rm=(U=Ie.T&&Ie.isMipmap)&&_e.Xe(),jr=!!(U&&!Rm),Yr=null,Oa=-1,yf=-1,Ba=!1,ml=!1,Ef=xe=null;Ie.width&&(Et=Ie.width,Tt=Ie.height?Ie.height:Et);var Yt={get:function(){return Nn},M:function(){return Et},Y:function(){return Tt},$h:function(){return Ie.url},di:function(){return Ie.isFloat},fi:function(){return Ie.T},Ai:function(We){Nn=We},gi:function(){return Ie.isLinear},wb:function(){m.generateMipmap(m.TEXTURE_2D)},Ue:function(We,gt){jr?(We||(We=Yt.Fd()),X.Zb(gt),d(Yr[We]),x[gt]=-1):Yt.h(gt)},Fd:function(){return Oa===-1&&(Oa=Math.log2(Et)),Oa},te:function(We){m.TEXTURE_MAX_LEVEL&&m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAX_LEVEL,We)},xf:function(We){if(We||(We=Yt.Fd()),jr){R.set("s12"),X.Zb(0);for(var gt=Et,dn=Tt,Pt=1;Pt<=We;++Pt)gt/=2,dn/=2,R.X("u15",.25/gt,.25/dn),m.viewport(0,0,gt,dn),d(Yr[Pt-1]),m.framebufferTexture2D(Ne.nc(),m.COLOR_ATTACHMENT0,m.TEXTURE_2D,Yr[Pt],0),De.l(!1,Pt===1);x[0]=-1}else We!==yf&&(yf=We,Yt.te(We)),Yt.wb()},Ei:function(We){(Ii=!je.Jg(We))?(kn=null,Ie.L=We,rt()):kn=We},h:function(We){return!Gs||(X.Zb(We),x[We]===Bt)?!1:(d(Nn),x[We]=Bt,!0)},Da:function(We){m.activeTexture(ne[We]),j=We,d(Nn),x[We]=Bt},v:function(){L=Yt,X.se(Nn)},N:function(){m.viewport(0,0,Et,Tt),L=Yt,X.se(Nn)},Wc:X.Wc,re:function(We,gt){Et=We,Tt=gt},resize:function(We,gt){Yt.re(We,gt),mt()},clone:function(We){return We=X.instance({width:Et,height:Tt,T:Ie.T,isFloat:Ie.isFloat,isLinear:Ie.isLinear,isMirrorY:Ie.isMirrorY,isFlipY:We?!hi:hi,isPot:Ie.isPot}),Se.set("s0"),Ne.ha(),We.N(),Yt.h(0),De.l(!0,!0),We},Cg:function(){m.viewport(0,0,Et,Tt)},remove:function(){m.deleteTexture(Nn),bf=!0,ie.splice(ie.indexOf(Yt),1),Yt=null},refresh:function(){Yt.Da(0),hi&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!0),Ii?m.texImage2D(m.TEXTURE_2D,0,ln,en,sn,Ie.L):m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,kn),hi&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1)},ie:function(){return zs||Ct(),m.readPixels(0,0,Et,4*Tt,m.RGBA,m.UNSIGNED_BYTE,Ua),rn(),Kn},pg:function(){return zs||Ct(),F.Qb(0,0,Et,4*Tt,Ua).then(function(){return rn(),Kn})},rg:function(){return ml||Xt(),m.readPixels(0,0,Et,Tt,m.RGBA,m.UNSIGNED_BYTE,xe),Ef},qg:function(){return ml||Xt(),F.Qb(0,0,Et,Tt,xe)},pd:function(We){if(Ne.O(),R.set("s15"),Yt.h(0),We)m.viewport(0,0,Et,Tt),R.Bg("u16",.25,.25,.25,.25),De.l(!1,!0);else for(We=0;4>We;++We)m.viewport(0,Tt*We,Et,Tt),R.ue("u16",pe[We]),De.l(!1,We===0)},Wb:function(We){var gt=sn===G[0]&&!J();d(Nn),hi&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!0),gt?(xf||(ar=document.createElement("canvas"),ar.width=Et,ar.height=Tt,pl=ar.getContext("2d"),pl.createImageData(Et,Tt),xf=!0),null.data.set(We),pl.putImageData(null,0,0),m.texImage2D(m.TEXTURE_2D,0,ln,en,sn,ar)):m.texImage2D(m.TEXTURE_2D,0,ln,Et,Tt,0,en,sn,We),x[j]=Bt,hi&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1)},Qi:function(We,gt){d(Nn),gt&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!0),m.texImage2D(m.TEXTURE_2D,0,ln,en,sn,We),x[j]=Bt,gt&&m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1)},zi:function(We,gt){var dn=Et*Tt,Pt=4*dn;We=Ie.T?We?"RGBE":"JSON":"RGBA",gt&&(We=gt),gt=F.pa()&&!1;var Er=null;switch(We){case"RGBE":Er="s13";break;case"JSON":Er=gt?"s0":"s15";break;case"RGBA":case"RGBAARRAY":Er="s7"}if(zs||(We==="RGBA"||We==="RGBE"||We==="RGBAARRAY"?(Fi=new Uint8Array(Pt),zs=!0):We!=="JSON"||gt||Ct()),Ne.O(),R.set(Er),Yt.h(0),Pt=null,We==="RGBA"||We==="RGBE"||We==="RGBAARRAY"){if(m.viewport(0,0,Et,Tt),De.l(!0,!0),m.readPixels(0,0,Et,Tt,m.RGBA,m.UNSIGNED_BYTE,Fi),We==="RGBAARRAY")return{data:Fi};ae||(I=document.createElement("canvas"),q=I.getContext("2d"),ae=!0),I.width=Et,I.height=Tt,dn=q.createImageData(Et,Tt),dn.data.set(Fi),q.putImageData(dn,0,0),Pt=I.toDataURL("image/png")}else if(We==="JSON")if(gt)Pt=new Float32Array(dn),m.viewport(0,0,Et,Tt),De.l(!0,!0),m.readPixels(0,0,Et,Tt,m.RGBA,m.FLOAT,Pt);else{for(Pt=0;4>Pt;++Pt)m.viewport(0,Tt*Pt,Et,Tt),R.ue("u16",pe[Pt]),De.l(!Pt,!Pt);for(Yt.ie(),Pt=Array(dn),gt=0;gt<dn;++gt)Pt[4*gt]=Kn[0][gt],Pt[4*gt+1]=Kn[1][gt],Pt[4*gt+2]=Kn[2][gt],Pt[4*gt+3]=Kn[3][gt]}return{format:We,data:Pt,width:Et,height:Tt,isMirrorY:Ie.isMirrorY,isFlipY:We==="RGBA"?Ie.isFlipY:!Ie.isFlipY}}};if(Ie.isMipmap&&!jr&&Gs&&!Ba&&(Yt.wb(),Ba=!0),Ie.url)d(Nn),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,1,1,0,m.RGBA,m.UNSIGNED_BYTE,null),yr=new Image,yr.crossOrigin="anonymous",yr.src=Ie.url,yr.onload=function(){Et=yr.width,Tt=yr.height,mt()};else if(Ie.L){var Sf=function(){rt(),Et?mt():setTimeout(Sf,1)};Sf()}else Ie.array?(Ie.T&&!Ie.isFloat?Ie.array instanceof Uint16Array?(kn=Ie.array,mt()):W()?(kn=O(Ie.array),mt()):(mt(),X.Bd(m,Nn,Yt.M(),Yt.Y(),Ie.array,hi,!0)):(kn=Ie.isFloat?Ie.array instanceof Float32Array?Ie.array:new Float32Array(Ie.array):Ie.array instanceof Uint8Array?Ie.array:new Uint8Array(Ie.array),mt()),Ie.isKeepArray||(kn&&kn!==Ie.array&&(kn=null),delete Ie.array)):Ie.pc?Gs=!0:mt();return Yt.Vh=Yt.M,Ie.G&&Gs&&(Ie.G(Yt),Ie.G=null),ie.push(Yt),Yt},O:function(U){U!==j&&(m.activeTexture(ne[U]),j=U),x[U]=-1,d(null)},Vg:function(U){D.random.h(U)},Wc:function(){L=null,m.framebufferTexture2D(Ne.nc(),m.COLOR_ATTACHMENT0,m.TEXTURE_2D,null,0)},reset:function(){j!==0&&m.activeTexture(ne[0]);for(var U=0;U<ne.length;++U)x[U]=-1;j=-1},wi:function(){j=-1},Lg:function(){for(var U=0;U<ne.length;++U)X.O(U)},Cd:function(){D&&(D.random.remove(),D.Ce.remove())},Pi:function(U,xe){if(U.format==="RGBA"||U.format==="RGBE"){var rt=new Image;rt.src=U.data,rt.onload=function(){X.instance({isMirrorY:U.isMirrorY,isFlipY:U.isFlipY,isFloat:!1,L:rt,G:function(st){if(U.format==="RGBA")xe(st);else{var mt=U.width,rn=U.height,Ct=X.instance({isMirrorY:U.isMirrorY,isFloat:!0,width:mt,height:rn,isFlipY:U.isFlipY});Ne.ha(),m.viewport(0,0,mt,rn),R.set("s14"),Ct.v(),st.h(0),De.l(!0,!0),X.O(0),xe(Ct),F.flush(),st.remove()}}})}}else U.format==="JSON"?xe(X.instance({isFloat:!0,isFlipY:U.isFlipY,width:U.width,height:U.height,array:new Float32Array(U.data)})):xe(!1)},df:O,m:function(){L&&(ze.ha(),X.Wc(),ze.O()),X.Lg(),ie.slice(0).forEach(function(U){U.remove()}),ie.splice(0),Q=!1,ge=0,typeof _e<"u"&&_e.m(),D=null}};return X}(),we=function(){return{instance:function(d){var S=[me.instance(d),me.instance(d)],M=[S[1],S[0]],O=M,W={ug:function(J){O[1].v(),O[0].h(J),W.xe()},vg:function(J){O[1].N(),O[0].h(J),W.xe()},xe:function(){O=O===S?M:S},refresh:function(){O[0].refresh(),O[1].refresh()},h:function(J){O[0].h(J)},Da:function(J){O[0].Da(J)},Ug:function(J){O[1].h(J)},Ph:function(){return O[0]},Th:function(){return O[1]},Wb:function(J){O[0].Wb(J),O[1].Wb(J)},remove:function(){O[0].remove(),O[1].remove(),O=null},sync:function(){W.vg(0),R.set("s0"),ue.l(!1,!1)}};return W}}}(),De=function(){function d(j){var ne={fa:null,indices:null};return ne.fa=j.createBuffer(),j.bindBuffer(j.ARRAY_BUFFER,ne.fa),j.bufferData(j.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),j.STATIC_DRAW),ne.indices=j.createBuffer(),j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,ne.indices),j.bufferData(j.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2]),j.STATIC_DRAW),ne}var S=null,M=0,O=!1,W=[],J=-2,se=-2,$={reset:function(){se=J=-2},A:function(){O||(S=d(m),$.Ea(),O=!0)},instance:function(j){var ne=M++,ge=j.indices?j.indices.length:0,x=typeof j.mode>"u"?m.STATIC_DRAW:j.mode,D=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,D),m.bufferData(m.ARRAY_BUFFER,j.fa instanceof Float32Array?j.fa:new Float32Array(j.fa),x),J=ne;var L=null,G=null,z=null;if(j.indices){L=m.createBuffer(),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,L);var C=null;65536>j.indices.length?(C=Uint16Array,G=m.UNSIGNED_SHORT,z=2):(C=Uint32Array,G=m.UNSIGNED_INT,z=4),C=j.indices instanceof C?j.indices:new C(j.indices),m.bufferData(m.ELEMENT_ARRAY_BUFFER,C,x),se=ne}var Q={Ve:function(ie){J!==ne&&(m.bindBuffer(m.ARRAY_BUFFER,D),J=ne),ie&&Se.Qc()},Se:function(){se!==ne&&(m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,L),se=ne)},bind:function(ie){Q.Ve(ie),Q.Se()},kh:function(){m.drawElements(m.TRIANGLES,ge,G,0)},lh:function(ie,oe){m.drawElements(m.TRIANGLES,ie,G,oe*z)},remove:function(){m.deleteBuffer(D),j.indices&&m.deleteBuffer(L),Q=null}};return W.push(Q),Q},Ea:function(){J!==-1&&(m.bindBuffer(m.ARRAY_BUFFER,S.fa),J=-1),se!==-1&&(m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,S.indices),se=-1)},l:function(j,ne){j&&De.Ea(),ne&&Se.Ma(),m.drawElements(m.TRIANGLES,3,m.UNSIGNED_SHORT,0)},vb:function(j){j=j||m;var ne=d(j);j.bindBuffer(j.ARRAY_BUFFER,ne.fa),j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,ne.indices),Se.Sb(j),j.clear(j.COLOR_BUFFER_BIT),j.drawElements(j.TRIANGLES,3,j.UNSIGNED_SHORT,0),j.flush(),j.bindBuffer(j.ARRAY_BUFFER,null),j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,null),j.deleteBuffer(ne.fa),j.deleteBuffer(ne.indices),$.reset(),O&&($.Ea(),Se.Ma())},Cd:function(){var j=m,ne=S;j.deleteBuffer(ne.fa),j.deleteBuffer(ne.indices)},m:function(){$.Cd(),W.forEach(function(j){j.remove()}),m.bindBuffer(m.ARRAY_BUFFER,null),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,null),$.reset(),O=!1,W.splice(0),M=0}};return $}(),Ne=function(){var d=null,S=null,M=null,O=!1,W=[],J={I:-2,Ad:1},se={Gb:function(){return O},A:function(){if(!O){d=m.createFramebuffer();var $=F.pa();S=$&&m.DRAW_FRAMEBUFFER?m.DRAW_FRAMEBUFFER:m.FRAMEBUFFER,M=$&&m.READ_FRAMEBUFFER?m.READ_FRAMEBUFFER:m.FRAMEBUFFER,O=!0}},Mh:function(){return S},Ff:function(){return M},nc:function(){return m.FRAMEBUFFER},Uh:function(){return J},Eh:function(){return d},instance:function($){$.Nd===void 0&&($.Nd=!1);var j=$.F?$.F:null,ne=$.width,ge=$.height!==void 0?$.height:$.width,x=d,D=null,L=!1,G=!1,z=0;j&&(ne=ne||j.M(),ge=ge||j.Y());var C={qe:function(){L||(x=m.createFramebuffer(),L=!0,z=J.Ad++)},Ne:function(){C.qe(),C.v(),D=m.createRenderbuffer(),m.bindRenderbuffer(m.RENDERBUFFER,D),m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,ne,ge),m.framebufferRenderbuffer(S,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,D),m.clearDepth(1)},bind:function(Q,ie){z!==J.I&&(m.bindFramebuffer(S,x),J.I=z),j&&j.v(),ie&&m.viewport(0,0,ne,ge),Q&&m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT)},Tg:function(){z!==J.I&&(m.bindFramebuffer(S,x),J.I=z)},clear:function(){m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT)},dh:function(){m.clear(m.COLOR_BUFFER_BIT)},eh:function(){m.clear(m.DEPTH_BUFFER_BIT)},Cg:function(){m.viewport(0,0,ne,ge)},v:function(){z!==J.I&&(m.bindFramebuffer(S,x),J.I=z)},rtt:function(Q){j=Q,J.I!==z&&(m.bindFramebuffer(m.FRAMEBUFFER,x),J.I=z),Q.v()},O:function(){m.bindFramebuffer(S,null),J.I=-1},resize:function(Q,ie){ne=Q,ge=ie,D&&(m.bindRenderbuffer(m.RENDERBUFFER,D),m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,ne,ge))},remove:function(){x===d||G||(m.bindFramebuffer(S,x),m.framebufferTexture2D(S,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,null,0),D&&m.framebufferRenderbuffer(S,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,null),m.bindFramebuffer(S,null),J.I=-1,m.deleteFramebuffer(x),D&&m.deleteRenderbuffer(D)),G=!0}};return $.Nd&&C.Ne(),W.push(C),C},O:function(){m.bindFramebuffer(S,null),J.I=-1},Mg:function(){m.bindFramebuffer(S,null),m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT),F.ve(),J.I=-1},reset:function(){J.I=-2},ha:function(){J.I!==0&&(m.bindFramebuffer(S,d),J.I=0)},clear:function(){F.ve(),m.clear(m.COLOR_BUFFER_BIT)},m:function(){se.O(),W.forEach(function($){$.remove()}),d!==null&&(m.deleteFramebuffer(d),d=null),se.reset(),O=!1,W.splice(0),J.Ad=1}};return se}(),F=function(){function d(){$=typeof he>"u"?JEContext:he,j=!0}function S(I,q,pe){for(var Le=0;Le<q.length;++Le){var le=pe.getExtension(q[Le]+"_"+I);if(le)return le}return null}function M(){C.Vb!==null&&(clearTimeout(C.Vb),C.Vb=null),C.Ja=!1}function O(I){if(C.ua.length===0){C.Z=m.PIXEL_PACK_BUFFER,C.ua.splice(0),C.yb.splice(0);for(var q=0;q<C.Va;++q)C.ua.push(m.createBuffer()),C.yb.push(-1);C.la=0,C.Cc=0}m.bindBuffer(C.Z,C.ua[C.la]),I.byteLength!==C.yb[C.la]&&(m.bufferData(C.Z,I.byteLength,m.STREAM_READ),C.yb[C.la]=I.byteLength),C.ai=!0}function W(){m.bindBuffer(C.Z,null)}function J(){C.Ha.forEach(function(I){m.deleteSync(I)}),C.Ha.splice(0)}function se(){C.la=(C.la+1)%C.Va,++C.Cc}var $=null,j=!1,ne={Pd:!1,Sc:null,Tc:null,Td:!1,$f:!1,Uc:null,Ud:!1,Vc:null,Qd:!1,ac:null,Rf:!1,bc:null,Sf:!1},ge=null,x={ma:!0,oa:!0,lc:!0,he:!1},D=null,L=!0,G=null,z=null,C={ef:1,Va:-1,la:0,Cc:0,Ja:!1,ua:[],Ha:[],yb:[],Z:null,Vb:null},Q="EXT WEBGL OES MOZ_OES WEBKIT_OES KHR".split(" "),ie=["OES","MOZ_OES","WEBKIT_OES"],oe=typeof window>"u"?{}:window,ae={A:function(){if(j)return!0;ae.reset(),j||d();var I=m;return ge.Pd||(ge.Sc=ae.wd(I),oe.GL_EXT_FLOAT=ge.Sc,ge.Td=!!ge.Sc,(ge.Td||ae.pa())&&(ge.Tc=ae.xd(I),ge.$f=!!ge.Tc,oe.GL_EXT_FLOATLINEAR=ge.Tc),ge.Pd=!0),ge.Qd||(ge.Uc=ae.tb(I),ge.Uc&&(ge.Ud=!0,oe.GL_EXT_HALFFLOAT=ge.Uc),(ge.Ud||ae.pa())&&(ge.Vc=ae.yd(I),oe.GL_EXT_HALFFLOATLINEAR=ge.Vc),ge.bi=!!ge.Vc,ge.Qd=!0),ge.ac=ae.ud(I),ge.Rf=!!ge.ac,oe.GL_EXT_COLORBUFFERFLOAT=ge.ac,ge.bc=ae.vd(I),ge.Sf=!!ge.bc,oe.GL_EXT_COLORBUFFERHALFFLOAT=ge.bc,Ne.A(),me.A(),ae.gf()?(De.A(),me.Pf(),!0):!1},reset:function(){ge=Object.assign({},ne),D=Object.assign({},x)},M:function(){return j||d(),$.M()},Y:function(){return j||d(),$.Y()},pa:function(){return j||d(),$.pa()},td:function(I){ae.ud(I),ae.vd(I),ae.wd(I),ae.xd(I),ae.tb(I),ae.yd(I)},ud:S.bind(null,"color_buffer_float",Q),vd:S.bind(null,"color_buffer_half_float",Q),wd:S.bind(null,"texture_float",ie),xd:S.bind(null,"texture_float_linear",ie),tb:S.bind(null,"texture_half_float",ie),yd:S.bind(null,"texture_half_float_linear",ie),mc:function(I){var q=ae.tb(I);return q&&q.HALF_FLOAT_OES?q.HALF_FLOAT_OES:I.HALF_FLOAT||I.FLOAT},Cf:function(){return z||m.RGBA32F||m.RGBA},Df:function(){return G||m.RGBA16F||m.RGBA},zf:function(){return D},jd:function(){return D.ma},Yg:function(){return D.oa},Xg:function(){return D.lc},Ye:function(){return D.he&&L},Ae:function(I){L=I,!I&&C.Ja&&(J(),m.bindBuffer(C.Z,null),C.Ja=!1)},hi:function(){return C.Ja},Tb:function(I,q,pe){function Le(){I.bindTexture(I.TEXTURE_2D,null),I.bindFramebuffer(le,null),I.deleteTexture(Je),I.deleteFramebuffer(tt)}var le=I.FRAMEBUFFER,qe=I.NEAREST,tt=I.createFramebuffer();I.bindFramebuffer(le,tt);var Je=I.createTexture();if(I.activeTexture(I.TEXTURE0),I.bindTexture(I.TEXTURE_2D,Je),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,!1),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_WRAP_S,I.CLAMP_TO_EDGE),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_WRAP_T,I.CLAMP_TO_EDGE),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,qe),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,qe),I.texImage2D(I.TEXTURE_2D,0,q,3,3,0,I.RGBA,pe,null),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je,0),I.checkFramebufferStatus(I.READ_FRAMEBUFFER||I.FRAMEBUFFER)!==I.FRAMEBUFFER_COMPLETE)return Le(),!1;for(Se.Pc(I),I.clearColor(0,0,0,0),I.viewport(0,0,3,3),I.disable(I.DEPTH_TEST),I.clear(I.COLOR_BUFFER_BIT),De.vb(I),I.bindFramebuffer(le,null),Se.hb(I),I.activeTexture(I.TEXTURE0),I.bindTexture(I.TEXTURE_2D,Je),De.vb(I),q=new Uint8Array(36),I.readPixels(0,0,3,3,I.RGBA,I.UNSIGNED_BYTE,q),Le(),pe=0;36>pe;++pe)if(pe%4!==3&&3<Math.abs(q[pe]-127))return!1;return!0},dc:function(I){var q={ma:!1,oa:!1};I.disable(I.BLEND),I.clearColor(0,0,0,0),I.clear(I.COLOR_BUFFER_BIT),I.RGBA32F&&ae.Tb(I,I.RGBA32F,I.FLOAT)&&(q.ma=!0,z=I.RGBA32F),!q.ma&&ae.Tb(I,I.RGBA,I.FLOAT)&&(q.ma=!0,z=I.RGBA);var pe=ae.mc(I);return G=null,I.RGBA16F&&ae.Tb(I,I.RGBA16F,pe)&&(q.oa=!0,G=I.RGBA16F),!q.oa&&ae.Tb(I,I.RGBA,pe)&&(q.oa=!0,G=I.RGBA),q},hf:function(){var I=Ne.instance({width:2});I.qe();var q=me.instance({width:2,isFloat:!0,Kb:3});I.v(),q.v(),ae.flush(),m.checkFramebufferStatus(Ne.Ff())!==m.FRAMEBUFFER_COMPLETE?(me.wg(),D.lc=!1):D.lc=!0,I.remove(),q.remove()},jf:function(){var I=!1;ae.pa()&&(I="PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer".split(" ").every(function(q){return typeof m[q]<"u"})),D.he=I},gf:function(){var I=ae.dc(m);return Object.assign(D,I),!D.ma&&!D.oa?!1:(ae.hf(),ae.jf(),!0)},je:function(I,q,pe,Le,le){return m.readPixels(I,q,pe,Le,m.RGBA,m.UNSIGNED_BYTE,le),Promise.resolve(le,!1)},Qb:function(I,q,pe,Le,le,qe,tt){if(!ae.Ye())return ae.je(I,q,pe,Le,le);C.Va=tt||C.ef,O(le),m.readPixels(I,q,pe,Le,m.RGBA,m.UNSIGNED_BYTE,0),C.Ha[C.la]=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0),ae.flush();var Je=!1;return new Promise(function(X,U){function xe(){if(!C.Ja)return M(),W(),se(),U(),!1;var rt=(C.la+1)%C.Va;switch(m.clientWaitSync(C.Ha[rt],0,0)){case m.TIMEOUT_EXPIRED:case m.WAIT_FAILED:break;default:return M(),m.deleteSync(C.Ha[rt]),C.Ha[rt]=null,m.bindBuffer(C.Z,C.ua[rt]),m.getBufferSubData(C.Z,0,le),W(),se(),X(le,Je),!0}return C.Vb=setTimeout(xe,0),!1}M(),C.Cc+1<C.Va?(W(),se(),X(le,!1)):(C.Ja=!0,xe()||!qe||Je||(Je=!0,qe()))})},ve:function(){m.viewport(0,0,ae.M(),ae.Y())},flush:function(){m.flush()},m:function(){M(),J(),me.m(),Ne.m(),De.m(),C.ua.forEach(function(I){m.deleteBuffer(I)}),C.ua.splice(0),Se.reset(),j=!1}};return ae}(),ue=De,ze=Ne,Ae=me,_e=function(){function d(I,q,pe,Le){C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,Le?C.NEAREST_MIPMAP_NEAREST:C.LINEAR);var le=null;if(pe!==null)try{if(le=C.getError(),le==="FUCKING_BIG_ERROR"||(C.texImage2D(C.TEXTURE_2D,0,I,4,4,0,C.RGBA,q,pe),le=C.getError(),le!==C.NO_ERROR))return!1}catch{return!1}if(Le&&C.generateMipmap(C.TEXTURE_2D),C.clear(C.COLOR_BUFFER_BIT),ue.vb(C),le=C.getError(),le==="FUCKING_BIG_ERROR"||(C.readPixels(0,0,2,2,C.RGBA,C.UNSIGNED_BYTE,ge),le=C.getError(),le===C.INVALID_OPERATION&&typeof C.PIXEL_PACK_BUFFER<"u"&&(C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.readPixels(0,0,2,2,C.RGBA,C.UNSIGNED_BYTE,ge),le=C.getError()),le!==C.NO_ERROR))return!1;for(pe=!0,Le=0;16>Le;++Le)pe=pe&&4>Math.abs(ge[Le]-127);return pe&&(j.ee=q,j.Md=I),pe}function S(I,q){return Q.ma&&d(I,C.FLOAT,new Float32Array(x),q)?($=se.ed,!0):!1}function M(I,q,pe){if(!Q.oa)return!1;var Le=me.df(x),le=F.tb(C);return le&&le.HALF_FLOAT_OES&&d(I,le.HALF_FLOAT_OES,Le,q)||C.HALF_FLOAT&&d(I,C.HALF_FLOAT,Le,q)||(Le=new Float32Array(x),d(I,C.FLOAT,Le,q))?($=se.Qa,!0):(C.bindTexture(C.TEXTURE_2D,pe),C.texImage2D(C.TEXTURE_2D,0,C.RGBA,2,2,0,C.RGBA,C.UNSIGNED_BYTE,null),C.bindFramebuffer(j.rb,ae),me.Bd(C,pe,2,2,Le,!1,!1),C.bindFramebuffer(j.rb,null),C.bindTexture(C.TEXTURE_2D,pe),d(I,null,null,q)?($=se.Qa,!0):!1)}function O(I,q,pe){return ne=!0,M(I,!0,pe)||S(q,!0)?!0:(ne=!1,!!(M(I,!1,pe)||S(q,!1)))}function W(I){if($===se.S){C=I||m,$=se.RGBA8,ne=!0,F.td(C),Q||(Q=F.dc(C)),ze.reset(),ae=C.createFramebuffer(),j.rb=C.DRAW_FRAMEBUFFER||C.FRAMEBUFFER,C.bindFramebuffer(j.rb,null),C.clearColor(0,0,0,0),C.viewport(0,0,2,2),R.S(),ie=R.hb(C),I=C.createTexture(),C.activeTexture(C.TEXTURE0),C.bindTexture(C.TEXTURE_2D,I),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,C.REPEAT),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,C.REPEAT),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MAG_FILTER,C.NEAREST),oe=I;var q=I=C.RGBA,pe=C.RGBA16F,Le=C.RGBA32F;return Le&&(I=Le),pe&&(q=pe),(pe||Le)&&O(q,I,oe)||(I=q=C.RGBA,O(q,I,oe))?(J(),!0):($=se.RGBA8,J(),!1)}}function J(){C.deleteProgram(ie.ya),C.deleteTexture(oe),oe=ie=null}for(var se={S:-1,ed:3,Qa:2,RGBA8:0},$=se.S,j={ee:null,Md:null,rb:null},ne=!0,ge=new Uint8Array(16),x=Array(64),D=0;4>D;++D)for(var L=0;4>L;++L){var G=(L+D)%2===0?1:0,z=4*D+L;x[4*z]=G,x[4*z+1]=G,x[4*z+2]=G,x[4*z+3]=G}var C=null,Q=null,ie=null,oe=null,ae=null;return{Xe:function(I){return W(I),ne},hd:function(I,q){return $===se.S&&(typeof(q!=="undefined")&&(Q=q),W(I)),$!==se.RGBA8},ei:function(I){return W(I),$===se.ed},ag:function(I){return W(I),$===se.Qa},Nh:function(I){return W(I),j.ee},Ef:function(I){return W(I),j.Md},m:function(){C=null,ne=!0,$=se.S,Q=null}}}(),it=function(){return{instance:function(d){function S(){ge&&ge.remove(),ge=Ae.instance({isFloat:!1,isPot:!1,width:M.size*M.V[0],height:M.size*M.V[1],isLinear:M.isLinear})}var M=Object.assign({mask:null,size:-1,preprocessing:"none",preprocessingSize:d.size,customInputShader:null,isLinear:!0,nBlurPass:1,varianceMin:.1,blurKernelSizePx:5,gain:1,overlap:0,isNormalized:!1,tilt:-1,V:[1,1]},d),O=null,W=!1,J=!1,se=null,$=!1;d=!1;var j=null;M.mask&&(W=!0,typeof H<"u"&&H&&H.Re!==void 0&&(M.mask=H.Re+M.mask),O=Ae.instance({isFloat:!1,url:M.mask}));var ne=null;switch(M.customInputShader&&(ne="s50",R.gd({name:"_",id:ne,g:M.customInputShader,Oi:["uSource"],precision:"lowp"}),R.U(ne,[{type:"1i",name:"_",value:0}])),M.preprocessing){case"sobel":j="s39",$=!0;break;case"meanNormalization":j="s40",$=!0;break;case"grayScale":j="s36",$=!1;break;case"grayScaleTilt":j="s37",d=!0,$=!1;break;case"rgbGrayTilt":j="s38",d=!0,$=!1;break;case"copy":j=ne||"s0";break;case"inputLightRegulation":j=ne||"s36",se=Xe.instance({Ld:M.preprocessingSize,de:M.size,ae:M.nBlurPass,$:!1}),J=!0;break;case"inputMix0":j="none",se=ye.instance({u:M.preprocessingSize,sa:M.varianceMin,ia:M.blurKernelSizePx,gain:M.gain||1,$:!1,isLinear:M.isLinear}),J=!0;break;case"inputMix1":j="none",se=Pe.instance({u:M.preprocessingSize,sa:M.varianceMin,ia:M.blurKernelSizePx,gain:M.gain||1,$:!1}),J=!0;break;case"inputCut4":j="none",se=Ye.instance({u:M.preprocessingSize,sa:M.varianceMin,ia:M.blurKernelSizePx,gain:M.gain||1,ab:M.isNormalized||!1,Jc:M.overlap||0,$:!1}),M.preprocessingSize*=se.Gf(),J=!0;break;case"direct":case"none":case"abort":j="abort";break;default:j="s4"}M.preprocessingSize=Math.ceil(M.preprocessingSize),d&&R.U(j,[{name:"u30",type:"1f",value:M.tilt}]),W&&(j+="Mask");var ge=null;S();var x={M:function(){return M.size},Hf:function(){return M.preprocessingSize},oc:function(){return x.M()},Lf:function(){return J?se.Ya():ge},Xb:function(D){M.V=D,S()},W:function(D){if(ze.ha(),j==="abort")return D.h(0),D;j!=="none"&&(R.set(j),$&&R.K("u31",1/M.size),ge.N(),W&&O.h(1),ue.l(!1,!1),ge.h(0),D=ge),J&&se.process(D)},m:function(){ge.remove(),W&&O.remove()}};return x}}}(),P=function(){return{instance:function(d){function S(){if(ae.Na){W.input&&(W.input.remove(),W.Bb.remove());var q=d.size*d.sparsity;oe=Math.log(q/d.size)/Math.log(2),W.input=Ae.instance({isMipmap:!0,isFloat:!0,isPot:!0,width:q*d.V[0],height:q*d.V[1],yc:oe}),W.Bb=Ae.instance({isFloat:!0,isPot:!0,width:d.size*d.V[0],height:d.size*d.V[1]})}}function M(){W.output&&W.output.remove(),W.output=Ae.instance({isFloat:!0,isPot:!se,isLinear:!se&&$.isLinear,width:d.size*d.V[0],height:d.size*d.V[1]})}function O(q){return $.buffer.forEach(function(pe,Le){$.results[Le][0]=q[0][pe],$.results[Le][1]=q[1][pe],$.results[Le][2]=q[2][pe],$.results[Le][3]=q[3][pe]}),$.results}d.normalize=d.normalize||!1;var W={input:null,bias:null,Bb:null,output:null,Ic:null,Gc:null,Hc:null},J=null,se=!0,$={type:"undef",G:null,isLinear:!1,buffer:[],results:[],Cb:!1},j=-1,ne=d.isReorganize?d.isReorganize:!1,ge=!!d.kernelsCount,x=[d.$a?"s32":"s31",d.$a?"s34":"s33","s35"][d.shiftRGBAMode||0],D={isEnabled:!1},L=1/d.size;d.Xf?(d.sparsity=typeof d.sparsity<"u"?d.sparsity:d.Ob.oc(),se=!1):d.connectivityUp==="full"&&(d.sparsity=d.Ob.oc());var G={elu:"s19",elu01:"s20",relu:"s17",gelu:"s18",arctan:"s21",arctan2:"s22",sigmoid:"s16",copy:"s0"}[d.activation],z=d.sparsity*d.sparsity,C=!1,Q=d.size,ie="";if(d.maxPooling){switch(d.maxPooling.size){case 2:ie="s41";break;case 4:ie="s42"}C=!0,Q/=d.maxPooling.size,W.Gc=Ae.instance({isFloat:!0,isPot:!1,width:Q})}var oe=-1,ae=null;se&&M(),W.bias=Ae.instance(d.bias);var I={M:function(){return d.size},oc:function(){return Q},Dd:function(){return d.classesCount},Te:function(q){J.h(q)},mg:function(){d.remap&&d.remap.isEnabled&&(D={isEnabled:!0,eg:Ae.instance(d.remap.maskTexture),cb:d.remap.layers.map(function(q){return d.parent.Jf(q)}),depth:d.remap.depth})},xg:function(){switch(d.connectivityUp){case"direct":ae=y.instance(d.connectivity);break;case"square":ae=be.instance(d.connectivity);break;case"squareFast":ae=ke.instance(d.connectivity,d.activation);break;case"full":ae=K.instance(Object.assign({$a:d.$a},d.connectivity));break;case"conv":j=d.kernelsCount,ae=Ce.instance(d.connectivity),ne&&(W.Ic=Ae.instance({width:Q,isFloat:!0,isFlipY:!1,isPot:!1}))}S()},W:function(q,pe){if(J=q,ae.Na?(W.input.N(),ge&&W.bias.h(2),ae.W(D),W.input.h(0),W.input.xf(oe),W.Bb.N(),ge?R.set("s0"):(R.set(x),R.K("u4",z),W.bias.h(1)),W.input.Ue(oe,0),ue.l(!1,!1),R.set(G),W.output.v(),W.Bb.h(0),ue.l(!1,!1)):(W.output.N(),W.bias.h(1),ae.W()),se)return pe=W.output,C&&(W.Gc.N(),pe.h(0),R.set(ie),R.X("u6",d.size,d.size),ue.l(!1,!1),pe=W.Gc),ne&&(W.Ic.v(),R.set("s24"),R.X("u19",j,Q/j),pe.h(0),ue.l(!1,!1),pe=W.Ic),pe.h(0),pe;var Le=W.output;switch((d.normalize||$.Cb)&&(q=d.normalize,R.set($.Cb?"s9":"s8"),R.K("u11",q?L:1),W.Hc.N(),Le.h(0),ue.l(!1,!1),Le=W.Hc),q=null,$.type){case"cpuRGBA2Float":Le.pd(!1),pe?q=I.ng(Le).then($.G):(Le=I.og(Le),$.G(Le));break;case"cpuMeanFloat":if(Le.pd(!0),pe)q=Le.qg().then($.G);else{Le=Le.rg();for(var le=0;le<Le.length;++le);$.G(Le)}break;case"gpuRawAvg":case"gpuRaw":Le.h(0);case"none":$.G!==null&&$.G(Le)}return pe&&q===null&&(q=Promise.resolve()),q},Xb:function(q){d.V=q,S(),M()},Eg:function(q){q&&($.type=q.Mb||"none",$.G=q.Lb||null,$.isLinear=!!q.Fc),M(),q=typeof d.classesCount<"u"&&d.classesCount?d.classesCount:d.size*d.size;for(var pe=0,Le=0,le=0;pe<q;++pe)$.buffer.push(Le+(d.size-1-le)*d.size),$.results.push([-1,-1,-1,-1]),++Le,Le===d.size&&(Le=0,++le);$.Cb=$.type==="gpuRawAvg"||$.type==="cpuMeanFloat",(d.normalize||$.Cb)&&(W.Hc=Ae.instance({isFloat:!0,isPot:!0,width:d.size}))},ng:function(q){return q.pg().then(O)},og:function(q){return q=q.ie(),O(q),$.results},m:function(){for(var q in W){var pe=W[q];pe&&pe.remove()}ae&&(ae.m(),ae=null)}};return d.Ob&&I.xg(d.Ob),I}}}(),y=function(){return{instance:function(d){var S=Ae.instance(d.weights);return{Na:!0,xb:function(){return 1},m:function(){S.remove()},Nf:function(){return S},W:function(){R.set("s30"),S.h(1),ue.l(!1,!1)}}}}}(),K=function(){return{instance:function(d){var S=d.fromLayerSize,M=Ae.instance(d.weights),O=d.$a?"s27":"s26";return{Na:!0,xb:function(){return S},m:function(){M.remove()},W:function(W){if(W.isEnabled){R.set("s28"),W.eg.h(3);for(var J=Math.min(W.cb.length,W.depth),se=0;se<J;++se)W.cb[se].Te(4+se)}else R.set(O);R.K("u9",d.toLayerSize),R.K("u10",d.fromLayerSize),M.h(1),ue.l(!1,!1)}}}}}(),be=function(){return{instance:function(d){for(var S=d.fromLayerSize,M=d.toLayerSize,O=d.toSparsity,W=O*M,J=W/S,se=S/M,$=0,j=0,ne=0,ge=Array(O*M*O*M*4),x=Array(O*M*O*M*4),D=Array(S*S),L=0;L<D.length;++L)D[L]=0;L=Math.floor(O/2);for(var G=.5/M,z=.5/S,C=.5/W,Q=0;Q<M;++Q)for(var ie=Math.round(Q*se),oe=0;oe<M;++oe){var ae=Math.round(oe*se),I=Q/M,q=oe/M;I+=G,q+=G;for(var pe=0;pe<O;++pe){var Le=ie+pe-L;0>Le&&(Le+=S),Le>=S&&(Le-=S);for(var le=0;le<O;++le){var qe=$/W,tt=j/W,Je=ae+le-L;0>Je&&(Je+=S),Je>=S&&(Je-=S);var X=Le/S,U=Je/S;tt=1-tt-1/W,X+=z,U+=z,qe+=C,tt+=C;var xe=Q*O+pe,rt=oe*O+le;rt=M*O-rt-1,xe=rt*M*O+xe,ge[4*xe]=qe,ge[4*xe+1]=tt,ge[4*xe+2]=X,ge[4*xe+3]=U,U=D[Je*S+Le]++,xe=U%J,X=Le*J+xe,Je=Je*J+(U-xe)/J,Je=S*J-1-Je,Je=Je*S*J+X,x[4*Je]=qe,x[4*Je+1]=tt,x[4*Je+2]=I,x[4*Je+3]=q,++$>=W&&($=0,++j),++ne}}}D=null;var st=Ae.instance(d.weights);delete d.weights.data;var mt=Ae.instance({width:W,isFloat:!0,array:new Float32Array(x),isPot:!0});x=null;var rn=Ae.instance({width:W,isFloat:!0,array:new Float32Array(ge),isPot:!0});return ge=null,{Na:!0,xb:function(){return J},m:function(){mt.remove(),rn.remove(),st.remove()},W:function(){R.set("s25"),st.h(1),rn.h(2),ue.l(!1,!1)}}}}}(),Ce=function(){return{instance:function(d){var S=d.kernelsCount,M=d.toSparsity,O=M*d.toLayerSize/d.fromLayerSize,W=d.inputScale||[1,1],J=Ae.instance(d.weights);return{Na:!0,xb:function(){return O},Yh:function(){return M},Nf:function(){return J},m:function(){J.remove()},W:function(){R.set("s29"),R.zg("u29",W),R.K("u27",S),R.K("u28",M),R.K("u9",d.toLayerSize),R.K("u10",d.fromLayerSize),J.h(1),ue.l(!1,!1)}}}}}(),ke=function(){return{instance:function(d,S){var M=d.fromLayerSize,O=d.toLayerSize,W=d.toSparsity,J=d.stride?d.stride:1,se=W*O/M,$=O<M,j=M/O,ne=Ae.instance(d.weights),ge="s51"+[M.toString(),O.toString(),W.toString(),J.toString(),S].join("_");return R.tf(ge)||(d=ht.yf(S,"gl_FragColor","gl_FragColor"),O=[{type:"1f",name:"u9",value:O},{type:"1f",name:"u33",value:J}],$&&O.push({type:"1f",name:"u10",value:M}),M=[($?se:W).toFixed(1),d],$&&M.push(j.toFixed(1)),R.Qf($?"s47":"s46",ge,M),R.U(ge,O.concat([{type:"1i",name:"u7",value:0},{type:"1i",name:"u3",value:1},{type:"1i",name:"u8",value:3}]))),{Na:!1,xb:function(){return se},m:function(){ne.remove()},W:function(){R.set(ge),ne.h(3),ue.l(!1,!1)}}}}}(),Xe=function(){return{instance:function(d){var S=d.ae?d.ae:3,M=d.Ld?d.Ld:64,O=d.de?d.de:64,W=!!d.$;d={isFloat:!1,width:M,isPot:!1,isFlipY:!1};var J=Ae.instance(d),se=Ae.instance(d),$=Ae.instance(d),j=Ae.instance(d),ne=Ae.instance({isFloat:!0,width:O,isPot:!1,isFlipY:!1}),ge=1/M;return{process:function(x){R.set("s43"),j.v(),ue.l(W,!1),R.set("s44");for(var D=0;D<S;++D)J.v(),R.X("u15",ge,0),ue.l(W,!1),$.v(),j.h(0),ue.l(W,!1),se.v(),J.h(0),R.X("u15",0,ge),ue.l(W,!1),j.v(),$.h(0),ue.l(W,!1),D!==S-1&&se.h(0);R.set("s45"),ne.v(),x.h(0),se.h(1),j.h(2),ue.l(W,!1),ne.h(0)},Ya:function(){return ne}}}}}(),ye=function(){return{instance:function(d){function S(j,ne){return Ae.instance({isFloat:j,width:M.u,isPot:!1,isFlipY:!1,isLinear:ne})}var M=Object.assign({sa:.1,ia:9,u:128,gain:1,$:!1,isLinear:!0},d),O=S(!1,!1),W=[S(!1,M.isLinear),S(!1,M.isLinear),S(!1,M.isLinear)],J=[S(!1,M.isLinear),S(!1,M.isLinear),S(!1,M.isLinear)],se=S(!0,M.isLinear),$=[O,J[0],J[1]];return d={u1:0},R.jb([{id:"s53",name:"_",g:"uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.);void main(){vec3 a=texture2D(u1,vv0).rgb;float b=dot(a,f);gl_FragColor=vec4(b);}",j:d,i:["u1"],precision:"lowp"},{id:"s54",name:"_",g:"uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u34;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u34*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}".replace("1.1111",Math.round((M.ia-1)/2).toFixed(2)).replace("2.2222",(1/M.u).toFixed(6)),j:d,i:["u1","u34"],precision:"lowp"},{id:"s55",name:"_",g:"uniform sampler2D u35,u36,u37,u38;const float f=1.1111;const vec3 g=vec3(1.);const float h=2.2222;varying vec2 vv0;void main(){vec3 a=texture2D(u35,vv0).rgb;float c=texture2D(u36,vv0).r,d=texture2D(u37,vv0).r,i=texture2D(u38,vv0).r,j=a.r*a.r;vec3 b=vec3(c,d,i),k=max(g*f,abs(vec3(j)-b*b)),l=sqrt(k);gl_FragColor=vec4(a.r,h*(a-b)/l);}".replace("1.1111",M.sa.toFixed(4)).replace("2.2222",M.gain.toFixed(4)),j:{u35:0,u36:1,u37:2,u38:3},i:["u35","u36","u37","u38"],precision:"highp"}]),{process:function(){R.set("s53"),O.N(),ue.l(M.$,!1),R.set("s54");for(var j=0;3>j;++j)R.X("u34",1,0),W[j].v(),$[j].h(0),ue.l(!1,!1),R.X("u34",0,1),J[j].v(),W[j].h(0),ue.l(!1,!1);R.set("s55"),se.v(),O.h(0),J[0].h(1),J[1].h(2),J[2].h(3),ue.l(!1,!1),se.h(0)},Ya:function(){return se}}}}}(),Pe=function(){return{instance:function(d){function S($){return Ae.instance({isFloat:$,width:M.u,isPot:!1,isFlipY:!1})}var M=Object.assign({sa:.1,ia:9,u:128,gain:1,$:!1},d),O=S(!1),W=S(!1),J=S(!1),se=S(!0);return d={u1:0},R.jb([{id:"s56",name:"_",g:"uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.);void main(){vec3 a=texture2D(u1,vv0).rgb;float b=dot(a,f);gl_FragColor=vec4(a.rgb,b);}",j:d,i:["u1"],precision:"lowp"},{id:"s57",name:"_",g:"uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u34;varying vec2 vv0;void main(){vec3 b=vec3(0.);float c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u34*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).rgb,c+=f;}b/=c,gl_FragColor=vec4(b,1.);}".replace("1.1111",Math.round((M.ia-1)/2).toFixed(2)).replace("2.2222",(1/M.u).toFixed(6)),j:d,i:["u1","u34"],precision:"lowp"},{id:"s58",name:"_",g:"uniform sampler2D u0,u39;const float f=1.1111;const vec3 g=vec3(1.);const float h=2.2222;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);vec3 c=texture2D(u39,vv0).rgb;float d=a.a*a.a;vec3 b=c.rgb,i=max(g*f,abs(vec3(d)-b*b)),j=sqrt(i);gl_FragColor=vec4(a.a,h*(a.rgb-b)/j);}".replace("1.1111",M.sa.toFixed(4)).replace("2.2222",M.gain.toFixed(4)),j:{u0:0,u39:1},i:["u0","u39"],precision:"highp"}]),{process:function(){R.set("s56"),O.N(),ue.l(M.$,!1),R.set("s57"),R.X("u34",1,0),W.v(),O.h(0),ue.l(!1,!1),R.X("u34",0,1),J.v(),W.h(0),ue.l(!1,!1),R.set("s58"),se.v(),O.h(0),J.h(1),ue.l(!1,!1),se.h(0)},Ya:function(){return se}}}}}(),Ye=function(){return{instance:function(d){function S(j){return Ae.instance({isFloat:j,width:M.u,isPot:!1,isFlipY:!1})}var M=Object.assign({sa:.1,ia:9,u:128,gain:1,Jc:0,ab:!1,$:!1},d),O=S(!1),W=null,J=null,se=null;M.ab&&(W=S(!1),J=S(!1),se=S(!0)),d={u1:0};var $=[{id:"s59",name:"_",g:"uniform sampler2D u1;const float f=1.1111;varying vec2 vv0;const vec3 e=vec3(.2126,.7152,.0722);void main(){vec2 a=vv0*.5*(f+1.);float b=.5*(1.-f),c=dot(texture2D(u1,a).rgb,e),d=dot(texture2D(u1,a+vec2(0.,b)).rgb,e),h=dot(texture2D(u1,a+vec2(b,0.)).rgb,e),i=dot(texture2D(u1,a+vec2(b,b)).rgb,e);gl_FragColor=vec4(c,d,h,i);}".replace("1.1111",M.Jc.toFixed(4)),j:d,i:["u1"],precision:"lowp"}];return M.ab&&$.push({id:"s60",name:"_",g:"uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u34;varying vec2 vv0;void main(){vec4 b=vec4(0.);float c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u34*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j),c+=f;}gl_FragColor=b/c;}".replace("1.1111",Math.round((M.ia-1)/2).toFixed(2)).replace("2.2222",(1/M.u).toFixed(6)),j:d,i:["u1","u34"],precision:"lowp"},{id:"s61",name:"_",g:"uniform sampler2D u0,u39;const float f=1.1111;const vec4 g=vec4(1.);const float h=2.2222;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u39,vv0),d=a*a,b=c,i=max(g*f,abs(d-b*b)),j=sqrt(i);gl_FragColor=h*(a-b)/j;}".replace("1.1111",M.sa.toFixed(4)).replace("2.2222",M.gain.toFixed(4)),j:{u0:0,u39:1},i:["u0","u39"],precision:"highp"}),R.jb($),{process:function(){R.set("s59"),O.N(),ue.l(M.$,!1),M.ab?(R.set("s60"),R.X("u34",1,0),W.v(),O.h(0),ue.l(!1,!1),R.X("u34",0,1),J.v(),W.h(0),ue.l(!1,!1),R.set("s61"),se.v(),O.h(0),J.h(1),ue.l(!1,!1),se.h(0)):O.h(0)},Gf:function(){return 2-M.Jc},Ya:function(){return M.ab?se:O}}}}}(),Fe={Id:function(){return Fe.md()?document.createElement("video"):!1},Xa:function(d,S){d[S]=!0,d.setAttribute(S,"true")},af:function(){var d=!1,S=navigator.userAgent||navigator.vendor||window.opera;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(S)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(S.substr(0,4)))&&(d=!0),d},$e:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},bg:function(){try{return!!window.matchMedia("(orientation: portrait)").matches}catch{return window.innerHeight>window.innerWidth}},$g:function(){return Fe.kd()||Fe.$e()},Fg:function(d,S){window.addEventListener("beforeunload",function(){S&&S.getTracks&&S.getTracks().forEach(function(M){S.removeTrack(M)}),d.videoStream&&d.videoStream.stop(),d.videoStream=null},!1)},kd:function(){var d=navigator.userAgent.toLowerCase();return d.indexOf("safari")!==-1&&d.indexOf("chrome")===-1},Ah:function(){return Fe.af()&&Fe.bg()?window.innerHeight/window.innerWidth*45:45},md:function(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)},pause:function(d){d.pause()},xi:function(d){d.play()},release:function(d){d.pause(),d.videoStream&&d.videoStream.stop(),d.videoStream=null},ld:function(d){if(!d)return d;var S=null;if(d.video){var M=function(O){return O&&typeof O=="object"?Object.assign({},O):O};S={},typeof d.video.width<"u"&&(S.width=M(d.video.width)),typeof d.video.height<"u"&&(S.height=M(d.video.height)),typeof d.video.facingMode<"u"&&(S.facingMode=M(d.video.facingMode))}return S={audio:d.audio,video:S},typeof d.deviceId<"u"&&Fe.fd(S,d.deviceId),S},fd:function(d,S){S&&(d.video=d.video||{},d.video.deviceId={exact:S},d.video.facingMode&&delete d.video.facingMode)},ye:function(d){var S=d.video.width;return d.video.width=d.video.height,d.video.height=S,d},ff:function(d){function S(D){return[480,576,640,648,720,768,800,960,1080,1152,1280,1366,1920].sort(function(L,G){return Math.abs(L-D)-Math.abs(G-D)})}function M(D){var L=Fe.ld(d);D=D(L),W.push(D),O(D)}function O(D){if(D.video&&D.video.facingMode&&D.video.facingMode.exact){var L=D.video.facingMode.exact;D=Fe.ld(D),delete D.video.facingMode.exact,D.video.facingMode.ideal=L,W.push(D)}}var W=[];if(!d||!d.video)return W;if(O(d),d.video.width&&d.video.height){if(d.video.width.ideal&&d.video.height.ideal){var J=S(d.video.width.ideal).slice(0,3),se=S(d.video.height.ideal).slice(0,3),$={},j=0;for($.Ca=void 0;j<J.length;$={Ca:$.Ca},++j){$.Ca=J[j];var ne={},ge=0;for(ne.va=void 0;ge<se.length;ne={va:ne.va},++ge)if(ne.va=se[ge],$.Ca!==d.video.width.ideal||ne.va!==d.video.height.ideal){var x=Math.max($.Ca,ne.va)/Math.min($.Ca,ne.va);x<4/3-.1||x>16/9+.1||M(function(D,L){return function(G){return G.video.width.ideal=D.Ca,G.video.height.ideal=L.va,G}}($,ne))}}}M(function(D){return Fe.ye(D)})}return d.video.width&&d.video.height&&(d.video.width.ideal&&d.video.height.ideal&&M(function(D){return delete D.video.width.ideal,delete D.video.height.ideal,D}),M(function(D){return delete D.video.width,delete D.video.height,D})),d.video.facingMode&&(M(function(D){return delete D.video.facingMode,D}),d.video.width&&d.video.height&&M(function(D){return Fe.ye(D),delete D.video.facingMode,D})),W.push({audio:d.audio,video:!0}),W},$d:function(d){if(d.volume=0,Fe.Xa(d,"muted"),Fe.kd()){if(d.volume===1){var S=function(){d.volume=0,window.removeEventListener("mousemove",S,!1),window.removeEventListener("touchstart",S,!1)};window.addEventListener("mousemove",S,!1),window.addEventListener("touchstart",S,!1)}setTimeout(function(){d.volume=0,Fe.Xa(d,"muted")},5)}},Be:function(d,S,M){return d===null?Promise.resolve():new Promise(function(O,W){if(d.srcObject&&d.srcObject.getVideoTracks){var J=d.srcObject.getVideoTracks();J.length!==1?W("INVALID_TRACKNUMBER"):(J=J[0],S?Fe.get(d,O,W,M):(J.stop(),O()))}else W("BAD_IMPLEMENTATION")})},Gd:function(d,S,M,O){function W(se){J||(J=!0,M(se))}var J=!1;return navigator.mediaDevices.getUserMedia(O).then(function(se){function $(){setTimeout(function(){if(d.currentTime){var ne=d.videoHeight;if(d.videoWidth===0||ne===0)W("VIDEO_NULLSIZE");else{ne={Ze:null,Dg:null,fg:null};try{var ge=se.getVideoTracks()[0];ge&&(ne.fg=ge,ne.Ze=ge.getCapabilities(),ne.Dg=ge.getSettings())}catch{}J||(Fe.Fg(d,se),S(d,se,ne))}}else W("VIDEO_NOTSTARTED")},700)}function j(){d.removeEventListener("loadeddata",j,!1);var ne=d.play();Fe.$d(d),typeof ne>"u"?$():ne.then(function(){$()}).catch(function(){W("VIDEO_PLAYPROMISEREJECTED")})}typeof d.srcObject<"u"?d.srcObject=se:(d.src=window.URL.createObjectURL(se),d.videoStream=se),Fe.$d(d),d.addEventListener("loadeddata",j,!1)}).catch(function(se){W(se)})},Mf:function(d,S){var M=S||Fe.Id();return new Promise(function(O,W){Fe.get(M,O,W,d)})},get:function(d,S,M,O){if(!d)return M&&M("VIDEO_NOT_PROVIDED"),!1;if(!Fe.md())return M&&M("MEDIASTREAMAPI_NOT_FOUND"),!1;Fe.Xa(d,"autoplay"),Fe.Xa(d,"playsinline"),O&&O.audio?d.volume=0:Fe.Xa(d,"muted"),Fe.cf(O).then(function(){Fe.Gd(d,S,function(){function W(se){if(se.length===0)M("NO_VALID_MEDIASTREAM_FALLBACK_CONSTRAINTS");else{var $=se.shift();Fe.Gd(d,S,function(){W(se)},$)}}var J=Fe.ff(O);W(J)},O)})},cf:function(d){if(!d||!d.video||!d.video.facingMode)return Promise.resolve("NO_VIDEO_CONSTRAINTS");if(d.video.deviceId)return Promise.resolve("DEVICEID_ALREADY_SET");var S=d.video.facingMode;if(S=S.exact||S.ideal,!S)return Promise.resolve("NO_FACINGMODE");var M={user:[],environment:["camera2 0"]}[S];return M&&M.length!==0?new Promise(function(O){Fe.Hd(function(W){W?(W=W.find(function(J){var se=J.label;return se?M.some(function($){return se.includes($)}):!1}))?(d.video.deviceId={exact:W.deviceId},O("SUCCESS")):O("NO_PREFERRED_DEVICE_FOUND"):O("NO_DEVICES_FOUND")})}):Promise.resolve("NO_PREFERRED_CAMERAS")},Hd:function(d){if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices)return d(!1,"NOTSUPPORTED"),!1;navigator.mediaDevices.enumerateDevices().then(function(S){(S=S.filter(function(M){return M.kind&&M.kind.toLowerCase().indexOf("video")!==-1&&M.label&&M.deviceId}))&&S.length&&0<S.length?d(S,!1):d(!1,"NODEVICESFOUND")}).catch(function(){d(!1,"PROMISEREJECTED")})},Zg:function(d,S,M){var O={};O[S]=M,S=[],S.push(O),d.applyConstraints({advanced:S}).catch(function(){})}},Ve=function(){function d(C,Q,ie,oe,ae,I,q){if(!G)if(q===I.length)ae();else{switch(I[q]){case"A":ie();break;case"D":C();break;case"S":Q().then(function(pe,Le){z.Ub(),d(C,Q,ie,Le?null:oe,ae,I,++q)}).catch(function(pe){console.log("An error occurred in the WebAR loop: ",pe),ae()});return;case"R":oe&&oe()}d(C,Q,ie,oe,ae,I,++q)}}var S={n:5,Bc:1,xc:0,wf:[25,39],od:45,sb:[2,200],k:.7,Ng:200,lg:.05},M=-1,O=null,W=-1,J=-1,se=0,$=-1,j=-1,ne=0,ge=null,x=0,D=S.sb[1],L=Math.log(2),G=!0,z={Kf:function(){switch(M){case-1:return-1;case 0:return j+O.xc;case 1:return ne}},Gh:function(C){switch(M){case-1:return 1;case 0:return Math.pow(Math.min(Math.max($,0),O.n-1)/(O.n-1),C||1);case 1:return(ne-O.xc)/(O.n-1)}},A:function(C){O=Object.assign({},S,C),$=j=O.Bc,M=0,ge=O.wf.slice(0),z.reset(),z.sf().then(function(Q){Q>=O.od||(Q/=O.od,ge[0]*=Q,ge[1]*=Q)})},Ub:function(C){C=(typeof C>"u"?Date.now():C)||0;var Q=Math.min(Math.max(C-x,O.sb[0]),O.sb[1]);D=Q,x=C;var ie=W===-1?0:O.k;W=Math.min(Math.max(1e3/Q,5),120)*(1-ie)+W*ie,C-J>O.Ng&&5<++se&&(Q=O.k,$=$*(1-Q)+(W<ge[0]?j-1:W>ge[1]?j+1:j)*Q,Math.abs($-j)>1-O.lg&&(Q=Math.min(Math.max(Math.round($),0),O.n-1),Q!==j&&($=j=Q,W=.5*(ge[1]-ge[0]))),J=C)},Kc:function(C,Q,ie,oe,ae,I){G=!1,d(C,Q,ie,oe,ae,I,0)},stop:function(){G=!0},Nc:function(C){ne=C,M=1},Xc:function(){M=0,z.reset()},reset:function(){D=S.sb[1],J=W=-1,se=0},Ni:function(C,Q,ie){return ie=Math.exp(-L*D/ie),(1-ie)*C+ie*Q},Bf:function(){return D},sf:function(){return new Promise(function(C){function Q(q){q=q||Date.now();var pe=Math.max(0,q-oe);oe=q,ae++!==0&&0<pe&&(ie=Math.min(ie,pe),++I),10>=ae?window.requestAnimationFrame(Q):C(Math.round(1e3/ie))}var ie=1/0,oe=0,ae=0,I=0;setTimeout(Q,1)})}};return z}(),He=function(){function d(){M(z+L.zc),C.port.postMessage("DONE")}function S(){ae.lb=L.kb===0?ie(M):ie(O)}function M(le){oe.Ka&&G!==null&&(le-=z,le=Math.min(Math.max(le,L.qd[0]),L.qd[1]),z+=le,J(),I.isEnabled&&I.bb&&oe.aa&&z-I.vc>L.cd&&(ne(),I.vc=z),G(z))}function O(le){oe.Ka&&(ae.timeout=setTimeout(M.bind(null,le),L.kb))}function W(){G=null,oe.Ka=!1,J()}function J(){ae.lb&&(window.cancelAnimationFrame(ae.lb),ae.lb=null),ae.timeout&&(window.clearTimeout(ae.timeout),ae.timeout=null)}function se(le){le&&!oe.aa?(oe.aa=!0,Q&&Ve.Xc(),C.port.postMessage("STOP"),F.Ae(!0),S()):!le&&oe.aa&&(oe.aa=!1,Q&&Ve.Nc(1),F.Ae(!1),C.port.postMessage("START"))}function $(le){le.target.hidden?pe():q()}function j(le,qe,tt){return qe=le.createShader(qe),le.shaderSource(qe,tt),le.compileShader(qe),qe}function ne(){I.bb=!1;var le=I.na,qe=I.zb,tt=I.Ab,Je=I.Z;le.uniform1f(I.Jd,Math.random()),I.La?qe.beginQueryEXT(Je,tt):le.beginQuery(Je,tt),le.drawElements(le.POINTS,1,le.UNSIGNED_SHORT,0),I.La?qe.endQueryEXT(Je):le.endQuery(Je),F.flush(),x().then(function(X){X===0||isNaN(X)?(I.isEnabled=!1,console.log("WARNING in benchmark_GPUClock: WebGL timer queries is not working properly. timeElapsedNs =",X)):(X=L.Je*L.bd*1e3/X,I.Yb=(I.Yb+1)%L.Oa,I.wc[I.Yb]=X,++I.Xd>L.Oa&&(I.Hb.set(I.wc),I.Hb.sort(function(U,xe){return U-xe}),X=I.Hb[Math.floor(L.Oa/2)],I.ub=Math.max(I.ub,X),L.ad(X/I.ub)),I.bb=!0)}).catch(function(){I.bb=!0})}function ge(le){var qe=I.na,tt=I.zb,Je=I.Ab;Je=I.La?tt.Dh(Je,tt.QUERY_RESULT_AVAILABLE_EXT):qe.getQueryParameter(Je,qe.QUERY_RESULT_AVAILABLE),qe=qe.getParameter(tt.GPU_DISJOINT_EXT),Je?le(!qe):setTimeout(ge.bind(null,le),.1)}function x(){return new Promise(function(le,qe){ge(function(tt){if(tt){tt=I.na;var Je=I.zb,X=I.Ab;tt=I.La?Je.getQueryObjectEXT(X,Je.QUERY_RESULT_EXT):tt.getQueryParameter(X,tt.QUERY_RESULT),le(tt)}else qe()})})}var D={Rd:!0,qd:[1,200],zc:20,kb:0,bd:50,Je:240,cd:3e3,Oa:3,ad:null},L=null,G=null,z=0,C=null,Q=!1,ie=null,oe={wa:!1,aa:!0,uc:!1,tc:!1,sc:!1,Ka:!1},ae={lb:null,timeout:null},I={isEnabled:!1,bb:!1,na:null,zb:null,Ab:null,Z:null,Jd:null,La:!0,vc:0,Xd:0,wc:null,Hb:null,Yb:0,ub:0},q=se.bind(null,!0),pe=se.bind(null,!1),Le={A:function(le){if(L=Object.assign(D,le),Object.assign(oe,{aa:!0,wa:!0,Ka:!1}),ie=window.requestPostAnimationFrame||window.requestAnimationFrame,L.ad!==null){le=document.createElement("canvas"),le.setAttribute("width","1"),le.setAttribute("height","1");var qe={antialias:!1};if(le=le.getContext("webgl2",qe)||le.getContext("webgl",qe),qe=le.getExtension("EXT_disjoint_timer_query")||le.getExtension("EXT_disjoint_timer_query_webgl2")){I.na=le,I.zb=qe,I.isEnabled=!0,I.La=!!qe.beginQueryEXT;var tt=j(le,le.VERTEX_SHADER,"attribute vec4 a0;void main(){gl_Position=a0;}"),Je=j(le,le.FRAGMENT_SHADER,"precision lowp float;uniform float u40;void main(){vec4 a=u40*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace("666",L.bd.toString())),X=le.createProgram();le.attachShader(X,tt),le.attachShader(X,Je),le.linkProgram(X),tt=le.getAttribLocation(X,"a0"),I.Jd=le.getUniformLocation(X,"u40"),le.useProgram(X),le.enableVertexAttribArray(tt),X=le.createBuffer(),le.bindBuffer(le.ARRAY_BUFFER,X),le.bufferData(le.ARRAY_BUFFER,new Float32Array([.5,.5,0,1]),le.STATIC_DRAW),le.vertexAttribPointer(tt,4,le.FLOAT,!1,16,0),X=le.createBuffer(),le.bindBuffer(le.ELEMENT_ARRAY_BUFFER,X),le.bufferData(le.ELEMENT_ARRAY_BUFFER,new Uint16Array([0]),le.STATIC_DRAW),le.disable(le.DEPTH_TEST),le.disable(le.DITHER),le.disable(le.STENCIL_TEST),le.viewport(0,0,1,1),X=I.La?qe.createQueryEXT():le.createQuery(),I.Ab=X,I.Z=qe.TIME_ELAPSED_EXT||le.TIME_ELAPSED,I.vc=-L.cd,I.wc=new Float32Array(L.Oa),I.Hb=new Float32Array(L.Oa),I.ub=0,I.Yb=0,I.Xd=0,I.bb=!0}}if(L.Rd){le=!1;try{if(typeof SharedWorker>"u"){var U=URL.createObjectURL(new Blob([`let handler = null;
      self.addEventListener('message', function(e){
        if (handler !== null){
          clearTimeout(handler);
          handler = null;
        }
        switch (e.data) {
          case 'START':
          case 'DONE':
            handler = setTimeout(function(){
              self.postMessage('TICK');
            }, `+L.zc.toString()+`);
            break;
          case 'STOP':
            break;
        };
      }, false);`],{type:"text/javascript"})),xe=new Worker(U);xe.addEventListener("message",d),C={ge:xe,port:xe},oe.uc=!0}else{var rt=URL.createObjectURL(new Blob([`let handler = null;
      onconnect = function(e) {
        const port = e.ports[0];
        port.addEventListener('message', function(e) {
          
          if (handler !== null){
            clearTimeout(handler);
            handler = null;
          }
          switch (e.data) {
            case 'START':
            case 'DONE':
              handler = setTimeout(function(){
                port.postMessage('TICK');
              }, `+L.zc.toString()+`);
              break;
            case 'STOP':
              break;
          };
          
        });
        
        port.start();
      } // end onconnect()`],{type:"text/javascript"})),st=new SharedWorker(rt);st.port.start(),st.port.addEventListener("message",d),C={ge:st,port:st.port},oe.tc=!0}le=!0}catch{}le&&("onvisibilitychange"in document?document.addEventListener("visibilitychange",$):(window.addEventListener("blur",pe),window.addEventListener("focus",q)),window.addEventListener("pagehide",pe),window.addEventListener("pageshow",q),oe.sc=!0)}Q=typeof Ve<"u"},m:function(){W(),oe.sc&&("onvisibilitychange"in document?document.removeEventListener("visibilitychange",$):(window.removeEventListener("blur",pe),window.removeEventListener("focus",q)),window.removeEventListener("pagehide",pe),window.removeEventListener("pageshow",q),oe.sc=!1),oe.tc?(C.port.close(),oe.tc=!1):oe.uc&&(C.ge.terminate(),oe.uc=!1),Object.assign(oe,{aa:!0,wa:!1,Ka:!1}),G=null},ki:function(){return oe.aa},update:function(le){Object.assign(L,le)},Kc:function(le){oe.wa||Le.A({}),J(),oe.Ka=!0,G=le,oe.aa&&S()},stop:W};return Le}(),pt=function(){function d(x,D){var L=x[0]-.5;x=x[1]-.5;var G=D[0]-.5;return D=D[1]-.5,L*L+x*x-(G*G+D*D)}var S={ce:4,Nb:[1.5,1.5,2],R:[.1,.1,.1],le:1,u:-1,J:-1,Ig:2,kg:1,Mc:!0,Yf:!1,mf:.8},M=null,O=[],W=[],J=[],se=[0],$=[.5,.5,1],j=null,ne=0,ge=[0,0,0];return{A:function(x){M=Object.assign({},S,x),O.splice(0),W.splice(0),J.splice(0),ne=0,x=M.Nb[0]*M.R[0];var D=M.Nb[1]*M.R[1],L=1/(1+M.Nb[2]*M.R[2]),G=Math.min(M.u,M.J),z=M.u/M.J,C=M.le*G,Q=C/M.u;C/=M.J;var ie=.5*G/M.u;G=.5*G/M.J;var oe=.5*M.mf;oe*=oe;for(var ae=0;ae<M.ce;++ae){var I=[];W.push(I);var q=Math.pow(L,ae),pe=Q*q,Le=C*q;q=pe*M.kg,J.push(q);var le=pe*x,qe=Le*D;pe/=2,Le/=2;for(var tt=1+(1-pe-pe)/le,Je=1+(1-Le-Le)/qe,X=0;X<Je;++X)for(var U=Le+X*qe,xe=U-.5,rt=0;rt<tt;++rt){var st=pe+rt*le,mt=st-.5;if(!(mt*mt+xe*xe>oe)){if(M.Yf){var rn=Math.abs(xe)+.5*q*z;if(Math.abs(mt)+.5*q>ie||rn>G)continue}st=[st,U,q],O.push(st),I.push(st)}}M.Mc&&I.sort(d),j=O}M.Mc&&O.sort(d)},get:function(x){var D=j.length;if(D===0)return $;for(;x>=se.length;)se.push(0);se[x]>=D&&(se[x]=0);var L=j[Math.floor(se[x])%D];return se[x]=(se[x]+1/M.Ig)%D,ne===0?L:(ge[0]=L[0],ge[1]=L[1],ge[2]=ne,ge)},ri:function(x){x>=se.length||(se[x]=Math.floor(Math.random()*j.length))},Oc:function(x){if(ne=x,ne===0)j=O;else{for(var D=J.length,L=D-1,G=0;G<D;++G)if(J[G]<=x){L=G;break}j=W[L]}},reset:function(){for(var x=O.length/se.length,D=0;D<se.length;++D)se[D]=Math.floor(D*x);ne=0,j=O}}}(),at=function(){function d(C,Q,ie,oe){return Math.max(0,ie>C?C+Q/2-(ie-oe/2):ie+oe/2-(C-Q/2))}function S(C){return!$.Od(C)}function M(C,Q,ie){for(var oe=C.length;G.length<oe;)G.push({ra:[0,0],Ib:[0,0],ka:[0,0],za:0,scale:0,Wa:0,ib:0});oe=C.length;for(var ae=0;ae<oe;++ae){var I=C[ae],q=G[ae],pe=Q[ae].rz,Le=Math.cos(pe),le=Math.sin(pe);q.za=pe,q.Wa=Le,q.ib=le,q.ka[0]=I.x,q.ka[1]=I.y/ie,q.scale=I.ea,q.ra[0]=I.ea*$.rd[0],q.ra[1]=I.ea*$.rd[1],q.Ib[0]=q.ra[0]*q.ra[0],q.Ib[1]=q.ra[1]*q.ra[1]}}function O(C,Q,ie){var oe=Math.abs(-C.ib*(ie-C.ka[1])-C.Wa*(Q-C.ka[0]));return Q=Math.abs(C.Wa*(ie-C.ka[1])-C.ib*(Q-C.ka[0])),1>=oe*oe/C.Ib[0]+Q*Q/C.Ib[1]}function W(C,Q,ie,oe){var ae=C[ie];M(C,Q,oe);var I=G[ie];return C.some(function(q,pe){if(!(q=pe===ie||ae.xa>q.xa||3>q.xa||!(0<d(ae.x,ae.ea*L,q.x,q.ea*L))||!(0<d(ae.y,ae.ea*oe*L,q.y,q.ea*oe*L)))){q=G[pe],I.scale>q.scale?pe=I:(pe=q,q=I);for(var Le=0,le=0,qe=$.pf,tt=0;tt<qe;++tt)for(var Je=((tt+.5)/qe*2-1)*q.ra[1],X=0;X<qe;++X){var U=((X+.5)/qe*2-1)*q.ra[0],xe=q.ka[0]+(-Je*q.ib+U*q.Wa);U=q.ka[1]+(Je*q.Wa+U*q.ib),O(q,xe,U)&&(++Le,O(pe,xe,U)&&++le)}q=le/Le<$.Zd}return!q})}function J(C){return C.isDetected}var se={P:1,Zd:.3,rd:[1,1],pf:6,oe:.3,Od:null,Zf:!0},$=null,j=0,ne=null,ge=!1,x=0,D=0,L=Math.sqrt(2),G=[],z={A:function(C){$=Object.assign({},se,C),ne=[0]},Wd:function(){return $.P!==1},Ed:function(){return j},Vd:function(){return ge},ta:function(){return $.P},Wh:function(){return ne},cg:function(C){return ne.includes(C)},update:function(C,Q){var ie=ne;if(ie.length>C)ie.splice(0,ie.length-C);else for(;ie.length<C;)ie.push(0);if($.P!==1)if(Q.every(S)){Q=x;for(var oe=0;oe<C;++oe)ie[oe]=Q,Q=(Q+1)%$.P;x=Q}else{oe=Math.round($.oe*C),oe=Math.max(1,oe);for(var ae=x,I=0,q=0;I<C;++I){if(S(Q[ae])&&++q>oe)do++ae===$.P&&(ae=0);while(S(Q[ae]));ie[I]=ae,ae=(ae+1)%$.P}x=ae}},Ub:function(C){return j=ne[C],D=(.5+j)/$.P,ge=ne.lastIndexOf(j)===C,j},Gg:function(C,Q,ie){return $.P===1?!1:W(C,Q,j,ie)},ze:function(C){$.Zf&&$.P===1||R.K(C,D)},vf:function(C){return C.find(J)},Bh:function(C){return C.findIndex(J)},zh:function(C){var Q=z.vf(C);return!Q||C.every(J)?(pt.Oc(0),!1):(pt.Oc(Q.s),!0)},lf:function(C){for(var Q=new Float32Array(C.length*$.P),ie=0,oe;ie<$.P;++ie)for(oe=0;oe<C.length;++oe)Q[ie*C.length+oe]=C[oe];return Q},kc:function(C){for(var Q=[],ie=0;ie<$.P;++ie){var oe=Q,ae=oe.push,I=void 0,q=C,pe={};for(I in q){var Le=I,le=q[I],qe=typeof le;le=["string","boolean","number"].includes(qe)?le:qe!=="object"?null:ArrayBuffer.isView(le)?le.slice():JSON.parse(JSON.stringify(le)),pe[Le]=le}ae.call(oe,pe)}return Q}};return z}(),It=function(){var d={Uf:!0,isLinear:!0,Ac:[4,11]};return{rf:function(S,M,O){return M.isDetected?Math.floor(M.s*S):(S=Math.floor(Math.log2(S/4)),S=Math.min(Math.max(S,4),9),Math.max(O,Math.pow(2,S)))},instance:function(S){var M=Object.assign({},d,S),O=[],W=null,J=-1,se=null,$=!1;for(S=M.Ac[0];S<=M.Ac[1];++S)O[S]=null;return{N:function(j,ne){if(ne!==J&&(W&&W.remove(),W=Ae.instance({isLinear:M.isLinear,isPot:!0,width:ne})),$=M.Uf&&ne<.5*j){j=Math.floor(Math.log2(j));var ge=M.Ac;if(j=Math.min(Math.max(j,ge[0]),ge[1]),ge=j,!O[ge]){var x=Ae.instance({isPot:!0,isMipmap:!0,Sd:!0,width:Math.pow(2,ge)});O[ge]={F:x,Yd:-1}}j=O[j],se=j.F,j.Yd!==ne&&(ge=Math.log2(ne),se.h(0),se.te(ge),me.O(0),j.Yd=ne)}else se=W;J=ne,se.N()},h:function(j){se.h(j),$&&se.wb()},Da:function(j){se.Da(j)},remove:function(){W&&W.remove(),O.forEach(function(j){j&&j.F.remove()})}}}}}(),H={neuralNetworkPath:"NN_DEFAULT.json",ga:0,tg:{threshold:1.2,nScaleLevels:2,scale0Factor:.8,nDetectsPerLoopRange:[2,6],overlapFactors:[2,2,3],scanCenterFirst:!0,nDetectsPerLoop:-1,multiDetectionThresholdFactors:[.5,.6],translationScalingFactors:[.3,.3,1],isCleanGLStateAtEachIteration:!0,enableAsyncReadPixels:!1,animateProcessOrder:"DSAR"},Kg:50,hg:.4,gg:8,ig:.3,Hg:{translationFactorRange:[.002,.01],rotationFactorRange:[.015,.1],qualityFactorRange:[.8,.98],alphaRange:[.04,1],followZRotAlphaFactor:.8},gb:[.65,1,.262],Oe:.2,Qe:2,Pe:.1,jg:8,be:1,uf:ut.Jb.bind(null,.3,.7),Pg:20,we:3},Ge={facingMode:"user",idealWidth:800,idealHeight:600,minWidth:480,maxWidth:1920,minHeight:480,maxHeight:1920,rotate:0,flipX:!1},ve={Dc:-3,dg:-1,error:-2,ready:1,play:2,pause:3},$e=ve.Dc,de=null,Oe={Eb:!1,Rc:null,element:null,F:null,H:[0,0],B:[.5,0,0,.5],Pb:0,Ua:null,Db:!1},Be=null,_t={Ta:null,$b:null,antialias:!0,dd:"./",Pa:null,ja:null,ga:H.ga,fe:H.ga,Fb:!1,Ga:!0},Wt=null,lt=null,Qt=null,mn=1,fi={Lc:-1,ec:-1},Ot=null,Na={u:0,J:0,H:[0,0],Za:null},vt={Aa:null,buffer:null,R:null,gb:null,da:H.be,me:1,Fa:null},In=null,Fn=null,Wr=[],Xr=[],sr={VERSION:"3.4.1",init:function(d){function S(){$e!==ve.error&&++O===2&&(Ke(),Re(),Ue(),Be.Ta&&($e=ve.ready,Be.Ta(!1,{GL:m,canvasElement:Be.ja,videoTexture:de.F.get(),videoTransformMat2:de.B,maxFacesDetected:at.ta(),videoElement:de.element}),w()),_())}if($e!==ve.Dc)return d.callbackReady&&d.callbackReady("ALREADY_INITIALIZED"),!1;if($e=ve.dg,de=Object.assign({},Oe),Be=Object.assign({},_t),Ot=Object.assign({},Na),vt.gb=H.gb.slice(0),typeof d.antialias<"u"&&(Be.antialias=d.antialias),d.callbackReady&&(Be.Ta=d.callbackReady),d.callbackTrack&&(Be.$b=d.callbackTrack),d.nExpressions&&(vt.da=d.nExpressions),d.expressionsEasings&&(vt.Fa=d.expressionsEasings),typeof d.animateDelay<"u"&&(Be.ga=d.animateDelay),typeof d.NNCPath<"u"&&(Be.dd=d.NNCPath),typeof d.NNC<"u"&&(Be.Pa=d.NNC),typeof d.followZRot<"u"&&(Be.Ga=!!d.followZRot),!d.canvasId&&!d.canvas)return ft("NO_CANVASID"),!1;if(Be.ja=d.canvas?d.canvas:document.getElementById(d.canvasId),!Be.ja)return ft("INVALID_CANVASID"),!1;if(Ot.u=Be.ja.width,Ot.J=Be.ja.height,!Ot.u||!Ot.J)return ft("INVALID_CANVASDIMENSIONS"),!1;lt=Object.create(H.tg),d.scanSettings&&Object.assign(lt,d.scanSettings);var M=1;if(typeof d.maxFacesDetected<"u"&&(M=Math.max(1,d.maxFacesDetected)),M>H.gg)return ft("MAXFACES_TOOHIGH"),!1;for(at.A({P:M,Zd:H.hg,oe:H.ig,Od:function(W){return W.detected>lt.multiDetectionThresholdFactors[1]*lt.threshold}}),M=0;M<at.ta();++M)Wr.push(new Float32Array(H.jg)),Xr.push(0);He.A({Rd:d.isKeepRunningOnWinFocusLost||!1,kb:Be.ga}),Ve.A({Bc:0,n:lt.nDetectsPerLoopRange[1]-lt.nDetectsPerLoopRange[0]+1,xc:lt.nDetectsPerLoopRange[0]}),lt.nDetectsPerLoop!==-1?Ve.Nc(lt.nDetectsPerLoop):Ve.Xc(),vt.R=lt.translationScalingFactors.slice(0),Qt=Object.create(H.Hg),d.stabilizationSettings&&Object.assign(Qt,d.stabilizationSettings);var O=0;return d.videoSettings&&d.videoSettings.videoElement?Mt(d.videoSettings.videoElement,S):(d.videoSettings&&Object.assign(Ge,d.videoSettings),Ut(d.onWebcamAsk,d.onWebcamGet,function(W){Mt(W,S)})),Me(function(W){if(!ce())return!1;Wt=new u({cb:W.layers,Mb:"gpuRawAvg",Lb:re}),R.jb([{id:"s63",name:"_",Ba:"attribute vec2 a0;uniform mat2 u41;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5)+u41*a0;}",mb:["a0"],Ra:[2],g:"uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",i:["u1","u41"],precision:"lowp"},{id:"s64",name:"_",g:"uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",Ba:"attribute vec2 a0;uniform sampler2D u42;uniform mat2 u41;uniform vec2 u43;uniform float u44,u45,u46;varying vec2 vv0;void main(){vec4 a=texture2D(u42,vec2(.17,u44));vec2 f=a.gb,g=a.a*u43,b=a0;b.x*=u46;float c=cos(u45),d=sin(u45);vec2 h=mat2(c,d,-d,c)*b,i=f+h*.5*g,j=i-.5;vv0=vec2(.5)+2.*u41*j,gl_Position=vec4(a0,0.,1.);}",mb:["a0"],Ra:[2],i:"u1 u42 u43 u44 u45 u46 u41".split(" "),precision:"lowp"},{id:"s65",name:"_",g:"uniform sampler2D u47,u42;uniform vec3 u48,u49;uniform float u50,u51,u44,u52,u45,u53;const vec4 e=vec4(.25);void main(){vec4 d=texture2D(u47,vec2(.625,.625)),f=texture2D(u47,vec2(.875,.625)),a=texture2D(u42,vec2(.17,u44));float g=dot(d-f,e);bool h=g>u51;a.r<-.5?a.r+=1.:h?a.r=2.:a.r>u50?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r=mix(-2.,a.r,u52);if(a.r<.9)a=vec4(1.,u48);else{a.r*=step(1.9,a.r);float i=dot(e,texture2D(u47,vec2(.875,.875))),j=dot(e,texture2D(u47,vec2(.125,.625))),k=dot(e,texture2D(u47,vec2(.375,.625))),b=cos(u45),c=sin(u45);vec2 l=mat2(b,c*u53,-c/u53,b)*vec2(i,j);a.gba+=vec3(l,k)*u49*a.a;}gl_FragColor=a;}",Ba:"attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",i:"u47 u42 u48 u50 u49 u52 u45 u53 u51 u44".split(" ")},{id:"s66",name:"_",Ba:"attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",g:"uniform sampler2D u47;uniform float u52;const vec4 e=vec4(.25);const vec3 f=vec3(.5);void main(){float a=dot(e,texture2D(u47,vec2(.125,.875))),b=dot(e,texture2D(u47,vec2(.375,.875))),c=dot(e,texture2D(u47,vec2(.625,.875))),d=dot(e,texture2D(u47,vec2(.625,.625)));vec3 g=vec3(a,b,c)*.5+f;gl_FragColor=vec4(g,d*u52);}",i:["u47","u52"]},{id:"s67",name:"_",Ba:"attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",g:"uniform sampler2D u47;const vec4 e=vec4(.25);void main(){float a=dot(e,texture2D(u47,vec2(.375,.375))),b=dot(e,texture2D(u47,vec2(.625,.375))),c=dot(e,texture2D(u47,vec2(.875,.375))),d=dot(e,texture2D(u47,vec2(.125,.125)));gl_FragColor=vec4(a,b,c,d);}",i:["u47"]},{id:"s62",name:"_",g:"uniform sampler2D u42;uniform vec2 u54;uniform float u55;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),c=step(.33,vv0.x);vec4 a=texture2D(u42,vv0+u54);a.a=mix(a.a*u55,a.a,c);vec4 d=floor(255.*a),g=255.*(255.*a-d),b=mix(d,g,f)/255.;b.x=mix(step(a.x,1.5),b.x,c),gl_FragColor=b;}",i:["u42","u55","u54"]}]),Y(),vt.buffer=new Uint8Array(8*H.we*at.ta()),In=at.kc({qb:0,x:0,y:0,ea:1,rx:0,ry:0,za:0,zd:new Float32Array(vt.da),xa:0}),Fn=at.kc({detected:0,x:0,y:0,s:1,xRaw:0,yRaw:0,sRaw:1,rx:0,ry:0,rz:0,expressions:new Float32Array(vt.da)}),at.kc({dx:0,dy:0,jc:0,fc:0,hc:0,ic:0}),Ee(),fe(),S()}),!0},destroy:function(){return He.m(),new Promise(function(d){sr.toggle_pause(!0,!0).finally(function(){Wt&&Wt.m(),he.m(),Wt=Fn=In=null,Wr.splice(0),Xr.splice(0),Ot.Za=null,vt.Aa=null,vt.Fa=null,de.F=null,$e=ve.Dc,d()}).catch(function(){})})},toggle_videoStream:function(d){return de.Db||!de.element?Promise.resolve():Fe.Be(de.element,d,de.Ua)},toggle_pause:function(d,S){return g()?(S=S?sr.toggle_videoStream(!d):Promise.resolve(),d?E():S.then(function(){_()}),S):Promise.reject("NOT_READY")},update_videoSettings:function(d){return E(),new Promise(function(S,M){Fe.Be(de.element,!1,de.Ua).then(function(){Object.assign(Ge,d),Ut(null,null,function(O){Mt(O,function(){Ke(),Ue(),_(),S()})})}).catch(M)})},toggle_slow:function(d){g()&&$e===ve.play&&(d&&!Be.Fb?(Be.fe=Be.ga,lt.nDetectsPerLoop=1,this.set_animateDelay(H.Rg),Be.Fb=!0):!d&&Be.Fb&&(lt.nDetectsPerLoop=-1,this.set_animateDelay(Be.fe),Be.Fb=!1))},set_animateDelay:function(d){Be.ga=d,He.update({kb:Be.ga})},resize:function(){if(!g())return!1;var d=Be.ja.width,S=Be.ja.height;return!nt()&&d===Ot.u&&S===Ot.J?!1:(Ot.u=d,Ot.J=S,R.S(),Ee(),fe(),Ke(),Ue(),!0)},set_inputTexture:function(d,S,M){de.H[0]=S,de.H[1]=M,de.F=Ae.instance({width:S,height:M,pc:d}),de.Eb=!0,Ke(),w(),Ue()},reset_GLState:function(){w(),Ot.Za.remove(),vt.Aa.remove(),Y()},render_video:function(){ze.O(),R.set("s63"),m.viewport(0,0,Ot.u,Ot.J),de.F.h(0),ue.l(!0,!0)},reset_inputTexture:function(){de.Eb=!1,de.F=de.Rc,nt(),Ke(),Ue()},get_videoDevices:function(d){return Fe.Hd(d)},set_scanSettings:function(d){Object.assign(lt,d),lt.nDetectsPerLoop!==-1?Ve.Nc(lt.nDetectsPerLoop):Ve.Xc(),Ee(),fe()},set_stabilizationSettings:function(d){Object.assign(Qt,d)},set_videoOrientation:function(d,S){g()&&(Ge.flipX=S,Ge.rotate=d,Ke(),Ue())},update_videoElement:function(d,S){Mt(d||de.element,function(){Re(),Ke(),Ue(),S&&S()})},create_new:function(){return window.JEELIZFACEFILTERGEN()}};return sr},window.JEELIZFACEFILTER=window.JEELIZFACEFILTERGEN(),nT||window.JEELIZFACEFILTER}();const Yo=window.JEELIZFACEFILTER;class iT{constructor(){Ft(this,"settings",{rotationOffsetX:0,pivotOffsetYZ:[.2,.6],detectionThreshold:.6,detectionHysteresis:.08,cameraMinVideoDimFov:35});Ft(this,"threeRenderer",null);Ft(this,"threeScene",null);Ft(this,"threeVideoMesh",null);Ft(this,"threeVideoTexture",null);Ft(this,"threeTranslation",null);Ft(this,"detectCallback",null);Ft(this,"isVideoTextureReady",!1);Ft(this,"faceFilterCanvas",null);Ft(this,"videoElement",null);Ft(this,"isDetected",!1);Ft(this,"scaleW",1);Ft(this,"canvasAspectRatio",-1);Ft(this,"threeCompositeObjects",[]);Ft(this,"glVideoTexture",null);Ft(this,"videoTransformMat2",null);Ft(this,"videoBackgroundElement",null);Ft(this,"sanitizedGeometries",new WeakSet)}ensureVideoBackgroundLayer(){if(!this.faceFilterCanvas||!this.videoElement)return;const e=this.faceFilterCanvas,t=e.parentElement;if(!t)return;const i=`${e.id||"jeeFaceFilterCanvas"}__video_bg`,r=t.querySelector(`#${i}`);r&&r.remove();const s=this.videoElement.cloneNode(!0);s.id=i,s.autoplay=!0,s.muted=!0,s.playsInline=!0,s.srcObject=this.videoElement.srcObject,s.style.position="absolute",s.style.top="0",s.style.left="50%",s.style.transform="translateX(-50%) rotateY(180deg)",s.style.width="100%",s.style.height="100%",s.style.objectFit="cover",s.style.pointerEvents="none",s.style.zIndex="1",t.style.position||(t.style.position="relative"),e.style.position="relative",e.style.zIndex="3",e.style.background="transparent",t.insertBefore(s,e),this.videoBackgroundElement=s,s.play().catch(()=>{})}updateVideoFaceMask(e){if(!this.videoBackgroundElement)return;const t=e[0];if(!t||t.detected<this.settings.detectionThreshold-this.settings.detectionHysteresis){this.videoBackgroundElement.style.visibility="hidden",this.videoBackgroundElement.style.maskImage="none",this.videoBackgroundElement.style.setProperty("-webkit-mask-image","none");return}this.videoBackgroundElement.style.visibility="visible";const i=hs.clamp(t.x*this.scaleW,-1,1),r=hs.clamp(t.y*this.scaleW,-1,1),s=50+i*50,a=50-r*50-2,o=hs.clamp(t.s*this.scaleW*100,12,80),l=hs.clamp(o*.98,16,60),c=hs.clamp(o*1.2,20,70),u=`radial-gradient(ellipse ${l}% ${c}% at ${s}% ${a}%, rgba(0, 0, 0, 1) 82%, rgba(0, 0, 0, 0) 100%)`;this.videoBackgroundElement.style.maskImage=u,this.videoBackgroundElement.style.setProperty("-webkit-mask-image",u),this.videoBackgroundElement.style.maskRepeat="no-repeat",this.videoBackgroundElement.style.setProperty("-webkit-mask-repeat","no-repeat")}destroy(){this.isVideoTextureReady=!1,this.sanitizedGeometries=new WeakSet,this.threeCompositeObjects.splice(0),this.threeVideoTexture&&(this.threeVideoTexture.dispose(),this.threeVideoTexture=null)}hasInvalidPositionValues(e){for(let t=0;t<e.count;t++)if(!Number.isFinite(e.getX(t))||!Number.isFinite(e.getY(t))||!Number.isFinite(e.getZ(t)))return!0;return!1}sanitizeGeometryPositions(e){const t=e.getAttribute("position");if(!t)return;let i=!1;for(let r=0;r<t.count;r++){const s=t.getX(r),a=t.getY(r),o=t.getZ(r);(!Number.isFinite(s)||!Number.isFinite(a)||!Number.isFinite(o))&&(t.setXYZ(r,Number.isFinite(s)?s:0,Number.isFinite(a)?a:0,Number.isFinite(o)?o:0),i=!0)}if(i&&(t.needsUpdate=!0),this.hasInvalidPositionValues(t)){e.boundingBox=new ci(new ee,new ee),e.boundingSphere=new qn(new ee,1);return}e.computeBoundingBox(),e.computeBoundingSphere()}sanitizeSceneGeometries(){this.threeScene&&this.threeScene.traverse(e=>{const t=e;if(!t.isMesh||!t.geometry)return;const i=t.geometry;this.sanitizedGeometries.has(i)||(this.sanitizeGeometryPositions(i),this.sanitizedGeometries.add(i))})}createThreeCompositeObjects(){if(!this.threeScene)return;const e=new jt;e.frustumCulled=!1,e.visible=!1,this.threeCompositeObjects.push(e),this.threeScene.add(e)}createVideoScreen(){const e=`attribute vec2 position;
      uniform mat2 videoTransformMat2;
      varying vec2 vUV;
      void main(void){
        gl_Position = vec4(position, 0., 1.);
        vUV = 0.5 + videoTransformMat2 * position;
      }`,t=`precision lowp float;
      uniform sampler2D samplerVideo;
      varying vec2 vUV;
      void main(void){
        gl_FragColor = texture2D(samplerVideo, vUV);
      }`;if(!this.threeScene)return;if(this.videoElement){const o=new Uv(this.videoElement);o.magFilter=Jt,o.minFilter=Jt,o.generateMipmaps=!1,this.threeVideoTexture=o,this.isVideoTextureReady=!0}else this.threeVideoTexture=new ol(new Uint8Array([255,0,0]),1,1,qu),this.threeVideoTexture.needsUpdate=!0;const i=new lm({depthWrite:!1,depthTest:!1,vertexShader:e,fragmentShader:t,uniforms:{samplerVideo:{value:this.threeVideoTexture},videoTransformMat2:{value:this.videoTransformMat2}}}),r=new Pn,s=new Float32Array([-1,-1,1,-1,1,1,-1,1]);(r.setAttribute||r.addAttribute).bind(r)("position",new on(s,2)),r.setIndex(new on(new Uint16Array([0,1,2,0,2,3]),1)),this.threeVideoMesh=new xn(r,i),this.isVideoTextureReady||this.applyVideoTexture(this.threeVideoMesh),this.threeVideoMesh.renderOrder=-1e3,this.threeVideoMesh.frustumCulled=!1,this.threeVideoMesh.visible=!1}detectInternal(e){this.threeCompositeObjects.forEach((t,i)=>{this.isDetected=t.visible;const r=e[i];r&&(this.isDetected&&r.detected<this.settings.detectionThreshold-this.settings.detectionHysteresis||!this.isDetected&&r.detected>this.settings.detectionThreshold+this.settings.detectionHysteresis&&(this.detectCallback&&this.detectCallback(!0),t.visible=!0))})}updatePoses(e,t){const i=Math.tan(t.aspect*t.fov*Math.PI/360);this.threeCompositeObjects.forEach((r,s)=>{if(!r.visible)return;const a=e[s];if(!a||this.canvasAspectRatio<=0||!this.threeTranslation)return;const o=Math.cos(a.rz),l=Math.sin(a.rz),f=1/(2*(a.s*this.scaleW)*i)+.5,h=a.x*this.scaleW,p=a.y*this.scaleW,v=-f,b=h*f*i,g=p*f*i/this.canvasAspectRatio;r.position.set(-l*this.settings.pivotOffsetYZ[0],-o*this.settings.pivotOffsetYZ[0],-this.settings.pivotOffsetYZ[1]),r.rotation.set(a.rx+this.settings.rotationOffsetX,a.ry,a.rz,"ZYX"),r.position.applyEuler(r.rotation),this.threeTranslation.set(b,g+this.settings.pivotOffsetYZ[0],v+this.settings.pivotOffsetYZ[1]),r.position.add(this.threeTranslation)})}init(e,t){return this.destroy(),this.glVideoTexture=e.videoTexture,this.videoTransformMat2=e.videoTransformMat2,this.faceFilterCanvas=e.canvasElement,this.videoElement=e.videoElement,this.ensureVideoBackgroundLayer(),t&&(this.detectCallback=t),this.threeRenderer=new bM({context:e.GL,canvas:this.faceFilterCanvas||void 0,alpha:!!e.alpha,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!1,this.threeScene=new xv,this.threeTranslation=new ee,this.createThreeCompositeObjects(),this.createVideoScreen(),window.addEventListener("orientationchange",()=>{setTimeout(Yo.resize,1e3)},!1),{videoMesh:this.threeVideoMesh,renderer:this.threeRenderer,scene:this.threeScene,faceObject:this.threeCompositeObjects[0]}}detect(e){const t=[e];this.detectInternal(t)}getIsDetected(){return this.isDetected}render(e,t){const i=[e];this.detectInternal(i),this.updateVideoFaceMask(i),this.updatePoses(i,t),this.sanitizeSceneGeometries(),this.threeRenderer&&(this.threeRenderer.state.reset(),this.threeRenderer.clearDepth()),this.threeRenderer&&this.threeScene&&this.threeRenderer.render(this.threeScene,t)}sortFaces(e,t,i){const r={X:0,Y:1,Z:2}[t.toUpperCase()],s=i?-1:1;if(!e.index)return;const a=e.index.count/3,o=new Array(a);for(let u=0;u<a;++u)o[u]=[e.index.array[3*u],e.index.array[3*u+1],e.index.array[3*u+2]];const l=e.attributes.position.array,c=o.map(u=>[(l[3*u[0]]+l[3*u[1]]+l[3*u[2]])/3,(l[3*u[0]+1]+l[3*u[1]+1]+l[3*u[2]+1])/3,(l[3*u[0]+2]+l[3*u[1]+2]+l[3*u[2]+2])/3,u]);c.sort((u,f)=>(u[r]-f[r])*s),c.forEach((u,f)=>{const h=u[3];e.index.array[3*f]=h[0],e.index.array[3*f+1]=h[1],e.index.array[3*f+2]=h[2]})}getThreeVideoTexture(){return this.threeVideoTexture}applyVideoTexture(e){this.isVideoTextureReady||!this.threeRenderer||!this.threeVideoTexture||!this.glVideoTexture||(e.onAfterRender=()=>{try{this.threeRenderer.properties.update(this.threeVideoTexture,"__webglTexture",this.glVideoTexture),this.threeVideoTexture.magFilter=Jt,this.threeVideoTexture.minFilter=Jt,this.isVideoTextureReady=!0}catch{console.log("WARNING in JeelizThreeHelper: the glVideoTexture is not fully initialized")}delete e.onAfterRender})}createThreejsOccluder(e,t){const i=new xn;return new fx().load(e,r=>{const s=new li({vertexShader:Xn.basic.vertexShader,fragmentShader:`precision lowp float;
 void main(void){
 gl_FragColor=vec4(1.,0.,0.,1.);
 }`,uniforms:Xn.basic.uniforms,colorWrite:!1});i.renderOrder=-1,i.material=s,i.geometry=r,t&&t(i)}),i}setPivotOffsetYZ(e){this.settings.pivotOffsetYZ=e}createCamera(e,t){const i=new wn(1,1,e||.1,t||100);return this.updateCamera(i),i}updateCamera(e){if(!this.threeRenderer||!this.videoElement)return;const t=this.threeRenderer.domElement,i=t.width,r=t.height;this.canvasAspectRatio=i/r;const s=this.videoElement.videoWidth,a=this.videoElement.videoHeight,o=s/a,l=a>s?1/o:1,c=this.settings.cameraMinVideoDimFov*l;console.log("INFO in JeelizThreeHelper - updateCamera(): Estimated vertical video FoV is",c);let u=1;this.canvasAspectRatio>o?u=i/s:u=r/a;const f=s*u,h=a*u,p=(f-i)/2,v=(h-r)/2;this.scaleW=i/f,e.aspect=this.canvasAspectRatio,e.fov=c,console.log("INFO in JeelizThreeHelper.updateCamera(): camera vertical estimated FoV is",c,"deg"),e.setViewOffset(f,h,p,v,i,r),e.updateProjectionMatrix(),this.threeRenderer.setSize(i,r,!1),this.threeRenderer.setViewport(0,0,i,r)}resize(e,t,i){this.threeRenderer&&(this.threeRenderer.domElement.width=e,this.threeRenderer.domElement.height=t,Yo.resize(),i&&this.updateCamera(i))}}const qo=new iT,Fa={idle:0,dragging:2};let dl=Fa.idle,ds=new ee,Ko=-1,$o=-1,Do=[],mc=null,aa=null;function rT(n,e){const t=e,i=new ee,r=new ee,s=new ee,a=-1;if(dl!==Fa.dragging)return;const o=!!("touches"in t&&t.touches&&t.touches.length),l=o?t.touches[0].clientX:t.clientX,c=o?t.touches[0].clientY:t.clientY,u=l-Ko,f=c-$o;Ko=l,$o=c;const h=-u/n.offsetWidth,p=-f/n.offsetHeight,v=Do.length===1?Do[0]:Do.find(function(E){if(!E.parent.visible)return!1;i.set(-(l/n.offsetWidth)*2+1,-(c/n.offsetHeight)*2+1,.5);const A=new Mx;return A.setFromCamera(i,aa),A.intersectObjects(E.children).length>0});if(!v)return;if(s.set(h,p,1),r.copy(s),!aa)throw new Error("Cannot find the THREE.js camera. Pass the scene camera to addDragEventListener().");r.unproject(aa),r.sub(aa.position),r.normalize();const b=a/r.z;ds.copy(r).multiplyScalar(b),ds.setZ(0);const g=new Di,_=new ir;_.setFromQuaternion(g),ds.applyEuler(v.getWorldQuaternion(_)),ds.multiplyScalar(10),v.position.add(ds)}function sT(n){const e=!!("touches"in n&&n.touches&&n.touches.length);e&&n.touches.length>1||(Ko=e?n.touches[0].clientX:n.clientX,$o=e?n.touches[0].clientY:n.clientY)}function Rd(n){sT(n),dl=Fa.dragging}function vo(){dl=Fa.idle}function aT(n,e,t,i){Do=Array.isArray(n)?n:[n],aa=i||null;const r=document.getElementById("jeeFaceFilterCanvas");r&&(dl=Fa.idle,ds=new ee,Ko=void 0,$o=void 0,mc=rT.bind(void 0,r),r.addEventListener("mousemove",mc,!0),r.addEventListener("touchmove",mc,!0),r.addEventListener("mousedown",Rd),r.addEventListener("touchstart",Rd),r.addEventListener("mouseup",vo),r.addEventListener("touchend",vo),r.addEventListener("mouseout",vo),r.addEventListener("touchcancel",vo))}var Ss=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Ss.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Ss.Bounce.In(n*2)*.5:Ss.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),ps=function(){return performance.now()},Tm=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=0,s=t;r<s.length;r++){var a=s[r];(e=a._group)===null||e===void 0||e.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},n.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},n.prototype.update=function(e,t){e===void 0&&(e=ps()),t===void 0&&(t=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],a=!t;s&&s.update(e,a)===!1&&!t&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n}(),Or={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Or.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Or.Utils.Bernstein,a=0;a<=i;a++)t+=r(1-e,i-a)*r(e,a)*n[a]*s(i,a);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Or.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Or.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*t+s+a)*l+(-3*e+3*t-2*s-a)*o+s*r+e}}},df=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),yu=new Tm,oT=function(){function n(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ss.Linear.None,this._interpolationFunction=Or.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=df.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=yu,yu.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=ps()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var a in i){var o=e[a],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(i[a]);if(!(c==="undefined"||c==="function")){if(u){var f=i[a];if(f.length===0)continue;for(var h=[o],p=0,v=f.length;p<v;p+=1){var b=this._handleRelativeValue(o,f[p]);if(isNaN(b)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(b)}u&&(i[a]=h)}if((c==="object"||l)&&o&&!u){t[a]=l?[]:{};var g=o;for(var _ in g)t[a][_]=g[_];r[a]=l?[]:{};var f=i[a];if(!this._isDynamic){var E={};for(var _ in f)E[_]=f[_];i[a]=f=E}this._setupProperties(g,t[a],f,r[a],s)}else(typeof t[a]>"u"||s)&&(t[a]=o),l||(t[a]*=1),u?r[a]=i[a].slice().reverse():r[a]=t[a]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(e){return e===void 0&&(e=ps()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},n.prototype.resume=function(e){return e===void 0&&(e=ps()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Ss.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Or.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=ps()),t===void 0&&(t=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*o,c=function(){if(i._duration===0||a>l)return 1;var b=Math.trunc(a/o),g=a-b*o,_=Math.min(g/i._duration,1);return _===0&&a===i._duration?1:_},u=c(),f=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var p=0,v=this._chainedTweens.length;p<v;p++)this._chainedTweens[p].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var a=t[s]||0,o=i[s],l=Array.isArray(e[s]),c=Array.isArray(o),u=!l&&c;u?e[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n.autoStartOnUpdate=!1,n}(),lT="25.0.0",cT=df.nextId,Pi=yu,uT=Pi.getAll.bind(Pi),fT=Pi.removeAll.bind(Pi),hT=Pi.add.bind(Pi),dT=Pi.remove.bind(Pi),pT=Pi.update.bind(Pi),mT={Easing:Ss,Group:Tm,Interpolation:Or,now:ps,Sequence:df,nextId:cT,Tween:oT,VERSION:lT,getAll:uT,removeAll:fT,add:hT,remove:dT,update:pT};const gT=function(){let n=null,e=null,t=!1,i=0,r=1,s=!1,a=null,o=null,l=!1;const c=[[640,480],[768,480],[800,600],[960,640],[960,720],[1024,768],[1280,720],[1920,1080]];function u(E,A){const w=E.style.transform;w.indexOf(A)===-1&&(E.style.transform=A+" "+w)}function f(E,A){const w=E[0]/E[1],V=A[0]/A[1];var N,k;w>V?(N=E,k=A):(N=A,k=E);const T=Math.min(N[0],k[0])*Math.min(N[1],k[1]);var B;return N[0]>=k[0]&&N[1]>=k[1]?B=N[0]*N[1]:k[0]>N[0]&&k[1]>N[1]?B=k[0]*k[1]:(B=N[0]*N[1],B+=(k[1]-N[1])*k[0]),T/B}function h(){const E=n.getBoundingClientRect();p(E.width,E.height)}function p(E,A){e=[Math.round(r*E),Math.round(r*A)],n.setAttribute("width",e[0]),n.setAttribute("height",e[1]),console.log("INFO in JeelizResizer - set canvas resolution to",e[0],"X",e[1]),t&&(n.style.width=E.toString()+"px",n.style.height=A.toString()+"px")}function v(){a&&clearTimeout(a),a=setTimeout(g,50)}function b(){const E=[window.innerWidth,window.innerHeight];l&&E.reverse(),p(E[0],E[1])}function g(){b(),Yo.resize(),a=null,o&&o()}const _={is_portrait:function(){try{return!!window.matchMedia("(orientation: portrait)").matches}catch{return window.innerHeight>window.innerWidth}},check_isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},get_IOSVersion:function(){const E=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return E.length>2?[parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3]||0,10)]:[0,0,0]},check_isAndroid:function(){return navigator.userAgent.toLowerCase().indexOf("android")!==-1},get_androidVersion:function(){const A=navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/i);if(!A||A.length<2)return[0,0,0];const w=A[1].split(".");return[parseInt(w[0],10),parseInt(w[1],10),parseInt(w[2]||0,10)]},require_flipVideoWHIfPortrait:function(){return!1},size_canvas:function(E){const A=Object.assign({canvasId:"undefinedCanvasId",canvas:null,overSamplingFactor:window.devicePixelRatio||1,isFullScreen:!1,isInvWH:!1,CSSFlipX:!1,isApplyCSS:!1,onResize:null,callback:function(){}},E);if(n=A.canvas?A.canvas:document.getElementById(A.canvasId),s=A.isFullScreen,l=A.isInvWH,t=A.isApplyCSS,r=A.overSamplingFactor,s)o=A.onResize,b(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1);else{const N=n.getBoundingClientRect();if(N.width===0||N.height===0){if(console.log("WARNING in JeelizResize.size_canvas(): the canvas has its width or its height null, Retry a bit later..."),++i>20){A.callback("CANNOT_RESIZECANVAS");return}setTimeout(_.size_canvas.bind(null,A),50);return}i=0,h()}A.CSSFlipX&&u(n,"rotateY(180deg)");const w=c.map(function(N){return N.slice(0)});_.is_portrait()&&_.require_flipVideoWHIfPortrait(),w.sort(function(N,k){return f(k,e)-f(N,e)});const V={idealWidth:w[0][0],idealHeight:w[0][1]};console.log("INFO in JeelizResizer: bestCameraResolution =",V),setTimeout(A.callback.bind(null,!1,V),1)},resize_canvas:function(){s?b():h()},get_canvasSize:function(){return e}};return _}();class _T{constructor(){Ft(this,"threeCamera",null);Ft(this,"isDetected",!1);Ft(this,"modelObj3D",new jt);Ft(this,"frameObj3D",new jt);Ft(this,"isOverThreshold",!1);Ft(this,"isUnderThreshold",!0);Ft(this,"isLoaded",!1);Ft(this,"mixer",null);Ft(this,"action",null);Ft(this,"isAnimating",!1);Ft(this,"isOpaque",!1);Ft(this,"isTongueOut",!1);Ft(this,"isAnimationOver",!1);Ft(this,"videoGeometry",null);Ft(this,"detectCallback",e=>{console.log(e?"INFO in detect_callback(): DETECTED":"INFO in detect_callback(): LOST")})}afterReset(){}initFaceFilter(e,t){Yo.init({canvasId:e,NNCPath:"/neuralNets/",nExpressions:2,videoSettings:t,callbackReady:(i,r)=>{if(i){console.log("AN ERROR HAPPENS. SORRY BRO :( . ERR =",i);return}console.log("INFO: JEELIZFACEFILTER IS READY"),this.initThreeScene(r)},callbackTrack:i=>{this.isDetected=qo.getIsDetected(),this.isDetected&&this.onDetectedTrack(i),mT.update(),this.isOpaque&&this.mixer&&this.mixer.update(.16),this.threeCamera&&qo.render(i,this.threeCamera)}})}resetState(){this.threeCamera=null,this.isDetected=!1,this.modelObj3D=new jt,this.frameObj3D=new jt,this.isOverThreshold=!1,this.isUnderThreshold=!0,this.isLoaded=!1,this.mixer=null,this.action=null,this.isAnimating=!1,this.isOpaque=!1,this.isTongueOut=!1,this.isAnimationOver=!1,this.videoGeometry=null,this.afterReset()}init(e="jeeFaceFilterCanvas"){this.resetState(),gT.size_canvas({canvasId:e,callback:(t,i)=>{this.initFaceFilter(e,i)}})}}const vT={dog:{attachments:[{id:"leftDuck",glb:"../Duck.glb",slot:"leftEar",size:.35,offset:[0,0,0],rotation:[0,0,0]},{id:"rightDuck",glb:"../Duck.glb",slot:"rightEar",size:.35,offset:[0,0,0],rotation:[0,0,0]}],background:{image:"/assets/background.svg"},camera:{opacity:1},body:{image:"/assets/body.svg",xPercent:50,bottomPercent:-2,widthPercent:74,opacity:1}}},Am={avatars:vT},xT=Am.avatars.dog,bT={"../Duck.glb":new URL("/assets/Duck-C0g_OreA.glb",import.meta.url).href,"../tut.glb":new URL("/assets/tut-C43NHdX9.glb",import.meta.url).href},wd={leftEar:[-.42,.34,.04],rightEar:[.42,.34,.04],nose:[0,0,.22],mouth:[0,-.18,.2],hat:[0,.56,.04]};class yT extends _T{constructor(){super(...arguments);Ft(this,"attachmentMeshes",[])}emitExpression(t,i,r,s){window.dispatchEvent(new CustomEvent("face-expression",{detail:{label:t,smileScore:i,frownScore:r,all:s}}))}createStableMaterial(t){const i=t.clone();return i.visible=!0,i.transparent=!1,i.opacity=1,i.depthTest=!1,i.depthWrite=!1,i.side=Qn,i.needsUpdate=!0,i}createStableMaterialSet(t){return Array.isArray(t)?t.map(i=>this.createStableMaterial(i)):this.createStableMaterial(t)}buildStaticMeshGroupFromGLB(t){const i=new _r;t.updateMatrixWorld(!0);const r=new St().copy(t.matrixWorld).invert();return t.traverse(s=>{const a=s;if(!a.isMesh||!a.geometry)return;const o=new xn(a.geometry.clone(),this.createStableMaterialSet(a.material)),l=new St().copy(r).multiply(a.matrixWorld);o.applyMatrix4(l),o.matrixAutoUpdate=!1,o.frustumCulled=!1,i.add(o)}),i}afterReset(){this.attachmentMeshes=[]}fitObjectToTargetSize(t,i){const r=new ci().setFromObject(t),s=new ee;r.getSize(s);const a=Math.max(s.x,s.y,s.z);Number.isFinite(a)&&a>0&&t.scale.multiplyScalar(i/a)}configureLoadedObject(t,i,r,s,a){this.sanitizeObjectGeometries(t),this.fitObjectToTargetSize(t,i),t.visible=!0,t.position.setX(r),t.position.setY(s),t.position.setZ(a),t.renderOrder=1e4,t.traverse(o=>{o.visible=!0,o.frustumCulled=!1,o.renderOrder=1e4})}sanitizeObjectGeometries(t){t.traverse(i=>{const s=i.geometry,a=s==null?void 0:s.getAttribute("position");if(!a)return;const o=a.array;let l=!1;for(let c=0;c<o.length;c++){const u=o[c];Number.isFinite(u)||(a.array[c]=0,l=!0)}l&&(a.needsUpdate=!0),s.computeBoundingBox(),s.computeBoundingSphere()})}getAttachmentAnchorPosition(t,i){const r=wd[t]||wd.nose;return{x:r[0]+((i==null?void 0:i[0])||0),y:r[1]+((i==null?void 0:i[1])||0),z:r[2]+((i==null?void 0:i[2])||0)}}initThreeScene(t){const i=qo.init(t,this.detectCallback);this.videoGeometry=i.videoMesh.geometry;const r=new fm,s=new EM(r);let a=0;xT.attachments.forEach(c=>{const u=bT[c.glb]||c.glb;s.load(u,f=>{const h=f.scene||f.scenes[0];if(!h)return;const p=this.buildStaticMeshGroupFromGLB(h),v=this.getAttachmentAnchorPosition(c.slot,c.offset);this.configureLoadedObject(p,c.size,v.x,v.y,v.z),p.rotation.set(c.rotation[0],c.rotation[1],c.rotation[2]),this.modelObj3D.add(p),this.attachmentMeshes.push(p),a+=1},void 0,f=>{console.error(`Failed to load attachment ${c.id}:`,f)})}),r.onLoad=()=>{if(a===0){const c=new xn(new Fs(.35,.35,.35),new kv({wireframe:!0}));c.frustumCulled=!1,this.modelObj3D.add(c)}aT(this.modelObj3D,void 0,!1,this.threeCamera),i.faceObject.add(this.modelObj3D),this.isLoaded=!0};const o=new cx(16777215,.8);i.scene.add(o);const l=new dm(16777215,.5);l.position.set(100,1e3,1e3),i.scene.add(l),this.threeCamera=qo.createCamera(),i.scene.add(this.frameObj3D)}onDetectedTrack(t){const i=Array.isArray(t==null?void 0:t.expressions)?t.expressions:t!=null&&t.expressions?Array.from(t.expressions):[];if(!i.length){this.emitExpression("neutral",0,0,[]);return}const r=Number(i[0]??0),s=Number(i[1]??0);let a="neutral";r>.55&&r>s+.1?a="smile":s>.45&&s>r+.05&&(a="frown"),this.emitExpression(a,r,s,i.map(o=>Number(o)))}}const ET=new yT;function ST(n="jeeFaceFilterCanvas"){ET.init(n)}const MT={class:"page"},TT={class:"expressionBadge"},AT=["src"],RT=Cg({__name:"App",setup(n){var p;const e=Am.avatars.dog,t=!0,i=!0,r=e.body.image,a={"--camera-opacity":`${(p=e.camera)==null?void 0:p.opacity}`},o={backgroundImage:`url(${e.background.image})`},l={left:`${e.body.xPercent}%`,bottom:`${e.body.bottomPercent}%`,width:`${e.body.widthPercent}%`,opacity:`${e.body.opacity}`},c=El("neutral"),u=El(0),f=El(0),h=v=>{var g,_,E;const b=v;c.value=((g=b.detail)==null?void 0:g.label)||"neutral",u.value=Number(((_=b.detail)==null?void 0:_.smileScore)??0),f.value=Number(((E=b.detail)==null?void 0:E.frownScore)??0)};return up(()=>{console.log("Initializing dog face filter..."),window.addEventListener("face-expression",h),ST("jeeFaceFilterCanvas")}),Gu(()=>{window.removeEventListener("face-expression",h)}),(v,b)=>(Eo(),Rl("main",MT,[b[2]||(b[2]=Lr("h1",{class:"title"},"Mashcams v2",-1)),Lr("p",TT," Expression: "+xo(c.value)+" (smile "+xo(u.value.toFixed(2))+", frown "+xo(f.value.toFixed(2))+") ",1),Lr("div",{class:"canvasContainer",style:a},[bo(t)?(Eo(),Rl("div",{key:0,class:"sceneBackground",style:o})):zf("",!0),bo(i)?(Eo(),Rl("img",{key:1,class:"bodyOverlay",src:bo(r),style:l,alt:""},null,8,AT)):zf("",!0),b[0]||(b[0]=Lr("canvas",{id:"jeeFaceFilterCanvas",width:"600",height:"600"},null,-1)),b[1]||(b[1]=Lr("div",{id:"filter"},null,-1))])]))}}),wT=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},CT=wT(RT,[["__scopeId","data-v-0cf0fc85"]]);t0(CT).mount("#app");
