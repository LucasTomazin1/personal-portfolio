(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hf={exports:{}},io={},Bf={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),um=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),mm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),vm=Symbol.for("react.suspense"),gm=Symbol.for("react.memo"),ym=Symbol.for("react.lazy"),Wu=Symbol.iterator;function wm(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var Wf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vf=Object.assign,Yf={};function pr(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Wf}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=pr.prototype;function Ns(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Wf}var Ts=Ns.prototype=new Qf;Ts.constructor=Ns;Vf(Ts,pr.prototype);Ts.isPureReactComponent=!0;var Vu=Array.isArray,Gf=Object.prototype.hasOwnProperty,As={current:null},Kf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Gf.call(t,r)&&!Kf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xi,type:e,key:a,ref:o,props:i,_owner:As.current}}function xm(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function js(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function km(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?km(""+e.key):t.toString(36)}function oa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xi:case um:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+jo(o,0):r,Vu(i)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),oa(i,t,n,"",function(u){return u})):i!=null&&(js(i)&&(i=xm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Vu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+jo(a,l);o+=oa(a,t,n,s,i)}else if(s=wm(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+jo(a,l++),o+=oa(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return oa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},la={transition:null},Em={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:la,ReactCurrentOwner:As};function Zf(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=pr;R.Fragment=cm;R.Profiler=dm;R.PureComponent=Ns;R.StrictMode=fm;R.Suspense=vm;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;R.act=Zf;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vf({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=As.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Gf.call(t,s)&&!Kf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xi,type:e.type,key:i,ref:a,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pm,_context:e},e.Consumer=e};R.createElement=Xf;R.createFactory=function(e){var t=Xf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:hm,render:e}};R.isValidElement=js;R.lazy=function(e){return{$$typeof:ym,_payload:{_status:-1,_result:e},_init:Sm}};R.memo=function(e,t){return{$$typeof:gm,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=la.transition;la.transition={};try{e()}finally{la.transition=t}};R.unstable_act=Zf;R.useCallback=function(e,t){return Se.current.useCallback(e,t)};R.useContext=function(e){return Se.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};R.useEffect=function(e,t){return Se.current.useEffect(e,t)};R.useId=function(){return Se.current.useId()};R.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return Se.current.useMemo(e,t)};R.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};R.useRef=function(e){return Se.current.useRef(e)};R.useState=function(e){return Se.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return Se.current.useTransition()};R.version="18.3.1";Bf.exports=R;var mr=Bf.exports;const oe=Uf(mr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=mr,Pm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,zm=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Om={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)bm.call(t,r)&&!Om.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Pm,type:e,key:a,ref:o,props:i,_owner:zm.current}}io.Fragment=_m;io.jsx=Jf;io.jsxs=Jf;Hf.exports=io;var E=Hf.exports,ml={},qf={exports:{}},Re={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var A=P.length;P.push(T);e:for(;0<A;){var H=A-1>>>1,B=P[H];if(0<i(B,T))P[H]=T,P[A]=B,A=H;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],A=P.pop();if(A!==T){P[0]=A;e:for(var H=0,B=P.length,on=B>>>1;H<on;){var Ye=2*(H+1)-1,bt=P[Ye],Ne=Ye+1,ft=P[Ne];if(0>i(bt,A))Ne<B&&0>i(ft,bt)?(P[H]=ft,P[Ne]=A,H=Ne):(P[H]=bt,P[Ye]=A,H=Ye);else if(Ne<B&&0>i(ft,A))P[H]=ft,P[Ne]=A,H=Ne;else break e}}return T}function i(P,T){var A=P.sortIndex-T.sortIndex;return A!==0?A:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,h=3,v=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=P)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function g(P){if(w=!1,m(P),!y)if(n(s)!==null)y=!0,wr(x);else{var T=n(u);T!==null&&an(g,T.startTime-P)}}function x(P,T){y=!1,w&&(w=!1,p(z),z=-1),v=!0;var A=h;try{for(m(T),d=n(s);d!==null&&(!(d.expirationTime>T)||P&&!Oe());){var H=d.callback;if(typeof H=="function"){d.callback=null,h=d.priorityLevel;var B=H(d.expirationTime<=T);T=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(s)&&r(s),m(T)}else r(s);d=n(s)}if(d!==null)var on=!0;else{var Ye=n(u);Ye!==null&&an(g,Ye.startTime-T),on=!1}return on}finally{d=null,h=A,v=!1}}var S=!1,k=null,z=-1,$=5,I=-1;function Oe(){return!(e.unstable_now()-I<$)}function nn(){if(k!==null){var P=e.unstable_now();I=P;var T=!0;try{T=k(!0,P)}finally{T?rn():(S=!1,k=null)}}else S=!1}var rn;if(typeof c=="function")rn=function(){c(nn)};else if(typeof MessageChannel<"u"){var Oi=new MessageChannel,To=Oi.port2;Oi.port1.onmessage=nn,rn=function(){To.postMessage(null)}}else rn=function(){N(nn,0)};function wr(P){k=P,S||(S=!0,rn())}function an(P,T){z=N(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,wr(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var A=h;h=T;try{return P()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var A=h;h=P;try{return T()}finally{h=A}},e.unstable_scheduleCallback=function(P,T,A){var H=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?H+A:H):A=H,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=A+B,P={id:f++,callback:T,priorityLevel:P,startTime:A,expirationTime:B,sortIndex:-1},A>H?(P.sortIndex=A,t(u,P),n(s)===null&&P===n(u)&&(w?(p(z),z=-1):w=!0,an(g,A-H))):(P.sortIndex=B,t(s,P),y||v||(y=!0,wr(x))),P},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(P){var T=h;return function(){var A=h;h=T;try{return P.apply(this,arguments)}finally{h=A}}}})(td);ed.exports=td;var Nm=ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=mr,Le=Nm;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nd=new Set,Xr={};function bn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Xr[e]=t,e=0;e<t.length;e++)nd.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,Am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Gu={};function jm(e){return hl.call(Gu,e)?!0:hl.call(Qu,e)?!1:Am.test(e)?Gu[e]=!0:(Qu[e]=!0,!1)}function Im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lm(e,t,n,r){if(t===null||typeof t>"u"||Im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Is=/[\-:]([a-z])/g;function Ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Is,Ls);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Is,Ls);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Is,Ls);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lm(t,n,i,r)&&(n=null),r||i===null?jm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),$s=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),id=Symbol.for("react.context"),Ms=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Ds=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),ad=Symbol.for("react.offscreen"),Ku=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Io;function Ar(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Lo=!1;function Ro(e,t){if(!e||Lo)return"";Lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function Rm(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Ro(e.type,!1),e;case 11:return e=Ro(e.type.render,!1),e;case 1:return e=Ro(e.type,!0),e;default:return""}}function wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Tn:return"Portal";case vl:return"Profiler";case $s:return"StrictMode";case gl:return"Suspense";case yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case id:return(e.displayName||"Context")+".Consumer";case rd:return(e._context.displayName||"Context")+".Provider";case Ms:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ds:return t=e.displayName||null,t!==null?t:wl(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return wl(e(t))}catch{}}return null}function $m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wl(t);case 8:return t===$s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mm(e){var t=od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=Mm(e))}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sd(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function kl(e,t){sd(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sl(e,t,n){(t!=="number"||Pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(jr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function ud(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ii,fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ii=Ii||document.createElement("div"),Ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function dd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function pd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fm=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Gn=null,Kn=null;function ec(e){if(e=Ei(e)){if(typeof zl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=uo(t),zl(e.stateNode,e.type,t))}}function md(e){Gn?Kn?Kn.push(e):Kn=[e]:Gn=e}function hd(){if(Gn){var e=Gn,t=Kn;if(Kn=Gn=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function vd(e,t){return e(t)}function gd(){}var $o=!1;function yd(e,t,n){if($o)return e(t,n);$o=!0;try{return vd(e,t,n)}finally{$o=!1,(Gn!==null||Kn!==null)&&(gd(),hd())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ol=!1;if(yt)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Ol=!1}function Um(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Dr=!1,_a=null,ba=!1,Nl=null,Hm={onError:function(e){Dr=!0,_a=e}};function Bm(e,t,n,r,i,a,o,l,s){Dr=!1,_a=null,Um.apply(Hm,arguments)}function Wm(e,t,n,r,i,a,o,l,s){if(Bm.apply(this,arguments),Dr){if(Dr){var u=_a;Dr=!1,_a=null}else throw Error(C(198));ba||(ba=!0,Nl=u)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(zn(e)!==e)throw Error(C(188))}function Vm(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return tc(i),e;if(a===r)return tc(i),t;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function xd(e){return e=Vm(e),e!==null?kd(e):null}function kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=Le.unstable_scheduleCallback,nc=Le.unstable_cancelCallback,Ym=Le.unstable_shouldYield,Qm=Le.unstable_requestPaint,ne=Le.unstable_now,Gm=Le.unstable_getCurrentPriorityLevel,Us=Le.unstable_ImmediatePriority,Ed=Le.unstable_UserBlockingPriority,za=Le.unstable_NormalPriority,Km=Le.unstable_LowPriority,Cd=Le.unstable_IdlePriority,ao=null,st=null;function Xm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:qm,Zm=Math.log,Jm=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Zm(e)/Jm|0)|0}var Li=64,Ri=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ir(l):(a&=o,a!==0&&(r=Ir(a)))}else o=n&~i,o!==0?r=Ir(o):a!==0&&(r=Ir(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function e0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Je(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=e0(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=Li;return Li<<=1,!(Li&4194240)&&(Li=64),e}function Mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function n0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function _d(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,Bs,zd,Od,Nd,Al=!1,$i=[],Dt=null,Ft=null,Ut=null,qr=new Map,ei=new Map,Lt=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function Er(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ei(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function i0(e,t,n,r,i){switch(t){case"focusin":return Dt=Er(Dt,e,t,n,r,i),!0;case"dragenter":return Ft=Er(Ft,e,t,n,r,i),!0;case"mouseover":return Ut=Er(Ut,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qr.set(a,Er(qr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ei.set(a,Er(ei.get(a)||null,e,t,n,r,i)),!0}return!1}function Td(e){var t=cn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=wd(n),t!==null){e.blockedOn=t,Nd(e.priority,function(){zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=Ei(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function ic(e,t,n){sa(e)&&n.delete(t)}function a0(){Al=!1,Dt!==null&&sa(Dt)&&(Dt=null),Ft!==null&&sa(Ft)&&(Ft=null),Ut!==null&&sa(Ut)&&(Ut=null),qr.forEach(ic),ei.forEach(ic)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,a0)))}function ti(e){function t(i){return Cr(i,e)}if(0<$i.length){Cr($i[0],e);for(var n=1;n<$i.length;n++){var r=$i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&Cr(Dt,e),Ft!==null&&Cr(Ft,e),Ut!==null&&Cr(Ut,e),qr.forEach(t),ei.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Td(n),n.blockedOn===null&&Lt.shift()}var Xn=Pt.ReactCurrentBatchConfig,Na=!0;function o0(e,t,n,r){var i=F,a=Xn.transition;Xn.transition=null;try{F=1,Ws(e,t,n,r)}finally{F=i,Xn.transition=a}}function l0(e,t,n,r){var i=F,a=Xn.transition;Xn.transition=null;try{F=4,Ws(e,t,n,r)}finally{F=i,Xn.transition=a}}function Ws(e,t,n,r){if(Na){var i=jl(e,t,n,r);if(i===null)Go(e,t,r,Ta,n),rc(e,r);else if(i0(i,e,t,n,r))r.stopPropagation();else if(rc(e,r),t&4&&-1<r0.indexOf(e)){for(;i!==null;){var a=Ei(i);if(a!==null&&bd(a),a=jl(e,t,n,r),a===null&&Go(e,t,r,Ta,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var Ta=null;function jl(e,t,n,r){if(Ta=null,e=Fs(r),e=cn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gm()){case Us:return 1;case Ed:return 4;case za:case Km:return 16;case Cd:return 536870912;default:return 16}default:return 16}}var $t=null,Vs=null,ua=null;function jd(){if(ua)return ua;var e,t=Vs,n=t.length,r,i="value"in $t?$t.value:$t.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ua=i.slice(e,1<r?1-r:void 0)}function ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function ac(){return!1}function $e(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Mi:ac,this.isPropagationStopped=ac,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=$e(hr),Si=q({},hr,{view:0,detail:0}),s0=$e(Si),Do,Fo,Pr,oo=q({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Do=e.screenX-Pr.screenX,Fo=e.screenY-Pr.screenY):Fo=Do=0,Pr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),oc=$e(oo),u0=q({},oo,{dataTransfer:0}),c0=$e(u0),f0=q({},Si,{relatedTarget:0}),Uo=$e(f0),d0=q({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=$e(d0),m0=q({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h0=$e(m0),v0=q({},hr,{data:0}),lc=$e(v0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w0[e])?!!t[e]:!1}function Qs(){return x0}var k0=q({},Si,{key:function(e){if(e.key){var t=g0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S0=$e(k0),E0=q({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=$e(E0),C0=q({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),P0=$e(C0),_0=q({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=$e(_0),z0=q({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=$e(z0),N0=[9,13,27,32],Gs=yt&&"CompositionEvent"in window,Fr=null;yt&&"documentMode"in document&&(Fr=document.documentMode);var T0=yt&&"TextEvent"in window&&!Fr,Id=yt&&(!Gs||Fr&&8<Fr&&11>=Fr),uc=" ",cc=!1;function Ld(e,t){switch(e){case"keyup":return N0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function A0(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(cc=!0,uc);case"textInput":return e=t.data,e===uc&&cc?null:e;default:return null}}function j0(e,t){if(jn)return e==="compositionend"||!Gs&&Ld(e,t)?(e=jd(),ua=Vs=$t=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Id&&t.locale!=="ko"?null:t.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I0[e.type]:t==="textarea"}function $d(e,t,n,r){md(r),t=Aa(t,"onChange"),0<t.length&&(n=new Ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,ni=null;function L0(e){Gd(e,0)}function lo(e){var t=Rn(e);if(ld(t))return e}function R0(e,t){if(e==="change")return t}var Md=!1;if(yt){var Ho;if(yt){var Bo="oninput"in document;if(!Bo){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Bo=typeof dc.oninput=="function"}Ho=Bo}else Ho=!1;Md=Ho&&(!document.documentMode||9<document.documentMode)}function pc(){Ur&&(Ur.detachEvent("onpropertychange",Dd),ni=Ur=null)}function Dd(e){if(e.propertyName==="value"&&lo(ni)){var t=[];$d(t,ni,e,Fs(e)),yd(L0,t)}}function $0(e,t,n){e==="focusin"?(pc(),Ur=t,ni=n,Ur.attachEvent("onpropertychange",Dd)):e==="focusout"&&pc()}function M0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(ni)}function D0(e,t){if(e==="click")return lo(t)}function F0(e,t){if(e==="input"||e==="change")return lo(t)}function U0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:U0;function ri(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var n=mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function Fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ud(){for(var e=window,t=Pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pa(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function H0(e){var t=Ud(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fd(n.ownerDocument.documentElement,n)){if(r!==null&&Ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=hc(n,a);var o=hc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var B0=yt&&"documentMode"in document&&11>=document.documentMode,In=null,Il=null,Hr=null,Ll=!1;function vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||In==null||In!==Pa(r)||(r=In,"selectionStart"in r&&Ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&ri(Hr,r)||(Hr=r,r=Aa(Il,"onSelect"),0<r.length&&(t=new Ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Wo={},Hd={};yt&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function so(e){if(Wo[e])return Wo[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hd)return Wo[e]=t[n];return e}var Bd=so("animationend"),Wd=so("animationiteration"),Vd=so("animationstart"),Yd=so("transitionend"),Qd=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Qd.set(e,t),bn(t,[e])}for(var Vo=0;Vo<gc.length;Vo++){var Yo=gc[Vo],W0=Yo.toLowerCase(),V0=Yo[0].toUpperCase()+Yo.slice(1);qt(W0,"on"+V0)}qt(Bd,"onAnimationEnd");qt(Wd,"onAnimationIteration");qt(Vd,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Yd,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wm(r,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;yc(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;yc(i,l,u),a=s}}}if(ba)throw e=Nl,ba=!1,Nl=null,e}function V(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Kd(t,e,2,!1),n.add(r))}function Qo(e,t,n){var r=0;t&&(r|=4),Kd(n,e,r,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Fi]){e[Fi]=!0,nd.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,Qo("selectionchange",!1,t))}}function Kd(e,t,n,r){switch(Ad(t)){case 1:var i=o0;break;case 4:i=l0;break;default:i=Ws}n=i.bind(null,t,n,e),i=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=cn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}yd(function(){var u=a,f=Fs(n),d=[];e:{var h=Qd.get(e);if(h!==void 0){var v=Ys,y=e;switch(e){case"keypress":if(ca(n)===0)break e;case"keydown":case"keyup":v=S0;break;case"focusin":y="focus",v=Uo;break;case"focusout":y="blur",v=Uo;break;case"beforeblur":case"afterblur":v=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=P0;break;case Bd:case Wd:case Vd:v=p0;break;case Yd:v=b0;break;case"scroll":v=s0;break;case"wheel":v=O0;break;case"copy":case"cut":case"paste":v=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sc}var w=(t&4)!==0,N=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var c=u,m;c!==null;){m=c;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,p!==null&&(g=Jr(c,p),g!=null&&w.push(ai(c,g,m)))),N)break;c=c.return}0<w.length&&(h=new v(h,y,null,n,f),d.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==bl&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[wt]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?cn(y):null,y!==null&&(N=zn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=oc,g="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=sc,g="onPointerLeave",p="onPointerEnter",c="pointer"),N=v==null?h:Rn(v),m=y==null?h:Rn(y),h=new w(g,c+"leave",v,n,f),h.target=N,h.relatedTarget=m,g=null,cn(f)===u&&(w=new w(p,c+"enter",y,n,f),w.target=m,w.relatedTarget=N,g=w),N=g,v&&y)t:{for(w=v,p=y,c=0,m=w;m;m=On(m))c++;for(m=0,g=p;g;g=On(g))m++;for(;0<c-m;)w=On(w),c--;for(;0<m-c;)p=On(p),m--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=On(w),p=On(p)}w=null}else w=null;v!==null&&wc(d,h,v,w,!1),y!==null&&N!==null&&wc(d,N,y,w,!0)}}e:{if(h=u?Rn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=R0;else if(fc(h))if(Md)x=F0;else{x=M0;var S=$0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=D0);if(x&&(x=x(e,u))){$d(d,x,n,f);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Sl(h,"number",h.value)}switch(S=u?Rn(u):window,e){case"focusin":(fc(S)||S.contentEditable==="true")&&(In=S,Il=u,Hr=null);break;case"focusout":Hr=Il=In=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,vc(d,n,f);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":vc(d,n,f)}var k;if(Gs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else jn?Ld(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Id&&n.locale!=="ko"&&(jn||z!=="onCompositionStart"?z==="onCompositionEnd"&&jn&&(k=jd()):($t=f,Vs="value"in $t?$t.value:$t.textContent,jn=!0)),S=Aa(u,z),0<S.length&&(z=new lc(z,e,null,n,f),d.push({event:z,listeners:S}),k?z.data=k:(k=Rd(n),k!==null&&(z.data=k)))),(k=T0?A0(e,n):j0(e,n))&&(u=Aa(u,"onBeforeInput"),0<u.length&&(f=new lc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=k))}Gd(d,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Aa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Jr(e,n),a!=null&&r.unshift(ai(e,a,i)),a=Jr(e,t),a!=null&&r.push(ai(e,a,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Jr(n,a),s!=null&&o.unshift(ai(n,s,l))):i||(s=Jr(n,a),s!=null&&o.push(ai(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Q0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(Q0,`
`).replace(G0,"")}function Ui(e,t,n){if(t=xc(t),xc(e)!==t&&n)throw Error(C(425))}function ja(){}var Rl=null,$l=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,X0=typeof queueMicrotask=="function"?queueMicrotask:typeof kc<"u"?function(e){return kc.resolve(null).then(e).catch(Z0)}:Dl;function Z0(e){setTimeout(function(){throw e})}function Ko(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),ot="__reactFiber$"+vr,oi="__reactProps$"+vr,wt="__reactContainer$"+vr,Fl="__reactEvents$"+vr,J0="__reactListeners$"+vr,q0="__reactHandles$"+vr;function cn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sc(e);e!==null;){if(n=e[ot])return n;e=Sc(e)}return t}e=n,n=e.parentNode}return null}function Ei(e){return e=e[ot]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function uo(e){return e[oi]||null}var Ul=[],$n=-1;function en(e){return{current:e}}function G(e){0>$n||(e.current=Ul[$n],Ul[$n]=null,$n--)}function W(e,t){$n++,Ul[$n]=e.current,e.current=t}var Kt={},we=en(Kt),_e=en(!1),xn=Kt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function be(e){return e=e.childContextTypes,e!=null}function Ia(){G(_e),G(we)}function Ec(e,t,n){if(we.current!==Kt)throw Error(C(168));W(we,t),W(_e,n)}function Xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,$m(e)||"Unknown",i));return q({},n,r)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,xn=we.current,W(we,e),W(_e,_e.current),!0}function Cc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Xd(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,G(_e),G(we),W(we,e)):G(_e),W(_e,n)}var mt=null,co=!1,Xo=!1;function Zd(e){mt===null?mt=[e]:mt.push(e)}function eh(e){co=!0,Zd(e)}function tn(){if(!Xo&&mt!==null){Xo=!0;var e=0,t=F;try{var n=mt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,co=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Sd(Us,tn),i}finally{F=t,Xo=!1}}return null}var Mn=[],Dn=0,Ra=null,$a=0,De=[],Fe=0,kn=null,ht=1,vt="";function sn(e,t){Mn[Dn++]=$a,Mn[Dn++]=Ra,Ra=e,$a=t}function Jd(e,t,n){De[Fe++]=ht,De[Fe++]=vt,De[Fe++]=kn,kn=e;var r=ht;e=vt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ht=1<<32-Je(t)+i|n<<i|r,vt=a+e}else ht=1<<a|n<<i|r,vt=e}function Xs(e){e.return!==null&&(sn(e,1),Jd(e,1,0))}function Zs(e){for(;e===Ra;)Ra=Mn[--Dn],Mn[Dn]=null,$a=Mn[--Dn],Mn[Dn]=null;for(;e===kn;)kn=De[--Fe],De[Fe]=null,vt=De[--Fe],De[Fe]=null,ht=De[--Fe],De[Fe]=null}var Ie=null,je=null,X=!1,Xe=null;function qd(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,je=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:ht,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,je=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(X){var t=je;if(t){var n=t;if(!Pc(e,t)){if(Hl(e))throw Error(C(418));t=Ht(n.nextSibling);var r=Ie;t&&Pc(e,t)?qd(r,n):(e.flags=e.flags&-4097|2,X=!1,Ie=e)}}else{if(Hl(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,Ie=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Hi(e){if(e!==Ie)return!1;if(!X)return _c(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=je)){if(Hl(e))throw e1(),Error(C(418));for(;t;)qd(e,t),t=Ht(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ie?Ht(e.stateNode.nextSibling):null;return!0}function e1(){for(var e=je;e;)e=Ht(e.nextSibling)}function nr(){je=Ie=null,X=!1}function Js(e){Xe===null?Xe=[e]:Xe.push(e)}var th=Pt.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function t1(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Yt(p,c),p.index=0,p.sibling=null,p}function a(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,m,g){return c===null||c.tag!==6?(c=rl(m,p.mode,g),c.return=p,c):(c=i(c,m),c.return=p,c)}function s(p,c,m,g){var x=m.type;return x===An?f(p,c,m.props.children,g,m.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===jt&&bc(x)===c.type)?(g=i(c,m.props),g.ref=_r(p,c,m),g.return=p,g):(g=ga(m.type,m.key,m.props,null,p.mode,g),g.ref=_r(p,c,m),g.return=p,g)}function u(p,c,m,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=il(m,p.mode,g),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function f(p,c,m,g,x){return c===null||c.tag!==7?(c=yn(m,p.mode,g,x),c.return=p,c):(c=i(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=rl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ai:return m=ga(c.type,c.key,c.props,null,p.mode,m),m.ref=_r(p,null,c),m.return=p,m;case Tn:return c=il(c,p.mode,m),c.return=p,c;case jt:var g=c._init;return d(p,g(c._payload),m)}if(jr(c)||kr(c))return c=yn(c,p.mode,m,null),c.return=p,c;Bi(p,c)}return null}function h(p,c,m,g){var x=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:l(p,c,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:return m.key===x?s(p,c,m,g):null;case Tn:return m.key===x?u(p,c,m,g):null;case jt:return x=m._init,h(p,c,x(m._payload),g)}if(jr(m)||kr(m))return x!==null?null:f(p,c,m,g,null);Bi(p,m)}return null}function v(p,c,m,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(m)||null,l(c,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:return p=p.get(g.key===null?m:g.key)||null,s(c,p,g,x);case Tn:return p=p.get(g.key===null?m:g.key)||null,u(c,p,g,x);case jt:var S=g._init;return v(p,c,m,S(g._payload),x)}if(jr(g)||kr(g))return p=p.get(m)||null,f(c,p,g,x,null);Bi(c,g)}return null}function y(p,c,m,g){for(var x=null,S=null,k=c,z=c=0,$=null;k!==null&&z<m.length;z++){k.index>z?($=k,k=null):$=k.sibling;var I=h(p,k,m[z],g);if(I===null){k===null&&(k=$);break}e&&k&&I.alternate===null&&t(p,k),c=a(I,c,z),S===null?x=I:S.sibling=I,S=I,k=$}if(z===m.length)return n(p,k),X&&sn(p,z),x;if(k===null){for(;z<m.length;z++)k=d(p,m[z],g),k!==null&&(c=a(k,c,z),S===null?x=k:S.sibling=k,S=k);return X&&sn(p,z),x}for(k=r(p,k);z<m.length;z++)$=v(k,p,z,m[z],g),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?z:$.key),c=a($,c,z),S===null?x=$:S.sibling=$,S=$);return e&&k.forEach(function(Oe){return t(p,Oe)}),X&&sn(p,z),x}function w(p,c,m,g){var x=kr(m);if(typeof x!="function")throw Error(C(150));if(m=x.call(m),m==null)throw Error(C(151));for(var S=x=null,k=c,z=c=0,$=null,I=m.next();k!==null&&!I.done;z++,I=m.next()){k.index>z?($=k,k=null):$=k.sibling;var Oe=h(p,k,I.value,g);if(Oe===null){k===null&&(k=$);break}e&&k&&Oe.alternate===null&&t(p,k),c=a(Oe,c,z),S===null?x=Oe:S.sibling=Oe,S=Oe,k=$}if(I.done)return n(p,k),X&&sn(p,z),x;if(k===null){for(;!I.done;z++,I=m.next())I=d(p,I.value,g),I!==null&&(c=a(I,c,z),S===null?x=I:S.sibling=I,S=I);return X&&sn(p,z),x}for(k=r(p,k);!I.done;z++,I=m.next())I=v(k,p,z,I.value,g),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?z:I.key),c=a(I,c,z),S===null?x=I:S.sibling=I,S=I);return e&&k.forEach(function(nn){return t(p,nn)}),X&&sn(p,z),x}function N(p,c,m,g){if(typeof m=="object"&&m!==null&&m.type===An&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:e:{for(var x=m.key,S=c;S!==null;){if(S.key===x){if(x=m.type,x===An){if(S.tag===7){n(p,S.sibling),c=i(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===jt&&bc(x)===S.type){n(p,S.sibling),c=i(S,m.props),c.ref=_r(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===An?(c=yn(m.props.children,p.mode,g,m.key),c.return=p,p=c):(g=ga(m.type,m.key,m.props,null,p.mode,g),g.ref=_r(p,c,m),g.return=p,p=g)}return o(p);case Tn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=il(m,p.mode,g),c.return=p,p=c}return o(p);case jt:return S=m._init,N(p,c,S(m._payload),g)}if(jr(m))return y(p,c,m,g);if(kr(m))return w(p,c,m,g);Bi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=rl(m,p.mode,g),c.return=p,p=c),o(p)):n(p,c)}return N}var rr=t1(!0),n1=t1(!1),Ma=en(null),Da=null,Fn=null,qs=null;function eu(){qs=Fn=Da=null}function tu(e){var t=Ma.current;G(Ma),e._currentValue=t}function Wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Da=e,qs=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(qs!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Da===null)throw Error(C(308));Fn=e,Da.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function nu(e){fn===null?fn=[e]:fn.push(e)}function r1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nu(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,nu(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hs(e,n)}}function zc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fa(e,t,n,r){var i=e.updateQueue;It=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,f=u=s=null,l=a;do{var h=l.lane,v=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(h=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=q({},d,h);break e;case 2:It=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);En|=o,e.lanes=o,e.memoizedState=d}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ci={},ut=en(Ci),li=en(Ci),si=en(Ci);function dn(e){if(e===Ci)throw Error(C(174));return e}function iu(e,t){switch(W(si,t),W(li,e),W(ut,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}G(ut),W(ut,t)}function ir(){G(ut),G(li),G(si)}function a1(e){dn(si.current);var t=dn(ut.current),n=Cl(t,e.type);t!==n&&(W(li,e),W(ut,n))}function au(e){li.current===e&&(G(ut),G(li))}var Z=en(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=[];function ou(){for(var e=0;e<Zo.length;e++)Zo[e]._workInProgressVersionPrimary=null;Zo.length=0}var da=Pt.ReactCurrentDispatcher,Jo=Pt.ReactCurrentBatchConfig,Sn=0,J=null,ae=null,ue=null,Ha=!1,Br=!1,ui=0,nh=0;function he(){throw Error(C(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function su(e,t,n,r,i,a){if(Sn=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,da.current=e===null||e.memoizedState===null?oh:lh,e=n(r,i),Br){a=0;do{if(Br=!1,ui=0,25<=a)throw Error(C(301));a+=1,ue=ae=null,t.updateQueue=null,da.current=sh,e=n(r,i)}while(Br)}if(da.current=Ba,t=ae!==null&&ae.next!==null,Sn=0,ue=ae=J=null,Ha=!1,t)throw Error(C(300));return e}function uu(){var e=ui!==0;return ui=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function We(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function ci(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=We(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var f=u.lane;if((Sn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,J.lanes|=f,En|=f}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,tt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,J.lanes|=a,En|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=We(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);tt(a,t.memoizedState)||(Pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function o1(){}function l1(e,t){var n=J,r=We(),i=t(),a=!tt(r.memoizedState,i);if(a&&(r.memoizedState=i,Pe=!0),r=r.queue,cu(c1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,fi(9,u1.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(C(349));Sn&30||s1(n,t,i)}return i}function s1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function u1(e,t,n,r){t.value=n,t.getSnapshot=r,f1(t)&&d1(e)}function c1(e,t,n){return n(function(){f1(t)&&d1(e)})}function f1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function d1(e){var t=xt(e,1);t!==null&&qe(t,e,1,-1)}function Nc(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=ah.bind(null,J,e),[t.memoizedState,e]}function fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function p1(){return We().memoizedState}function pa(e,t,n,r){var i=rt();J.flags|=e,i.memoizedState=fi(1|t,n,void 0,r===void 0?null:r)}function fo(e,t,n,r){var i=We();r=r===void 0?null:r;var a=void 0;if(ae!==null){var o=ae.memoizedState;if(a=o.destroy,r!==null&&lu(r,o.deps)){i.memoizedState=fi(t,n,a,r);return}}J.flags|=e,i.memoizedState=fi(1|t,n,a,r)}function Tc(e,t){return pa(8390656,8,e,t)}function cu(e,t){return fo(2048,8,e,t)}function m1(e,t){return fo(4,2,e,t)}function h1(e,t){return fo(4,4,e,t)}function v1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g1(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,v1.bind(null,t,e),n)}function fu(){}function y1(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function w1(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function x1(e,t,n){return Sn&21?(tt(n,t)||(n=Pd(),J.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function rh(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Jo.transition;Jo.transition={};try{e(!1),t()}finally{F=n,Jo.transition=r}}function k1(){return We().memoizedState}function ih(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S1(e))E1(t,n);else if(n=r1(e,t,n,r),n!==null){var i=ke();qe(n,e,r,i),C1(n,t,r)}}function ah(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S1(e))E1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,tt(l,o)){var s=t.interleaved;s===null?(i.next=i,nu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=r1(e,t,i,r),n!==null&&(i=ke(),qe(n,e,r,i),C1(n,t,r))}}function S1(e){var t=e.alternate;return e===J||t!==null&&t===J}function E1(e,t){Br=Ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function C1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hs(e,n)}}var Ba={readContext:Be,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},oh={readContext:Be,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pa(4194308,4,v1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return pa(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Nc,useDebugValue:fu,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Nc(!1),t=e[0];return e=rh.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=rt();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));Sn&30||s1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Tc(c1.bind(null,r,a,e),[e]),r.flags|=2048,fi(9,u1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=rt(),t=fe.identifierPrefix;if(X){var n=vt,r=ht;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lh={readContext:Be,useCallback:y1,useContext:Be,useEffect:cu,useImperativeHandle:g1,useInsertionEffect:m1,useLayoutEffect:h1,useMemo:w1,useReducer:qo,useRef:p1,useState:function(){return qo(ci)},useDebugValue:fu,useDeferredValue:function(e){var t=We();return x1(t,ae.memoizedState,e)},useTransition:function(){var e=qo(ci)[0],t=We().memoizedState;return[e,t]},useMutableSource:o1,useSyncExternalStore:l1,useId:k1,unstable_isNewReconciler:!1},sh={readContext:Be,useCallback:y1,useContext:Be,useEffect:cu,useImperativeHandle:g1,useInsertionEffect:m1,useLayoutEffect:h1,useMemo:w1,useReducer:el,useRef:p1,useState:function(){return el(ci)},useDebugValue:fu,useDeferredValue:function(e){var t=We();return ae===null?t.memoizedState=e:x1(t,ae.memoizedState,e)},useTransition:function(){var e=el(ci)[0],t=We().memoizedState;return[e,t]},useMutableSource:o1,useSyncExternalStore:l1,useId:k1,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Vt(e),a=gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,i),t!==null&&(qe(t,e,i,r),fa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Vt(e),a=gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,i),t!==null&&(qe(t,e,i,r),fa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Vt(e),i=gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(qe(t,e,r,n),fa(t,e,r))}};function Ac(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,a):!0}function P1(e,t,n){var r=!1,i=Kt,a=t.contextType;return typeof a=="object"&&a!==null?a=Be(a):(i=be(t)?xn:we.current,r=t.contextTypes,a=(r=r!=null)?tr(e,i):Kt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ru(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Be(a):(a=be(t)?xn:we.current,i.context=tr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Vl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&po.enqueueReplaceState(i,i.state,null),Fa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=Rm(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uh=typeof WeakMap=="function"?WeakMap:Map;function _1(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Va||(Va=!0,rs=r),Ql(e,t)},n}function b1(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Eh.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var ch=Pt.ReactCurrentOwner,Pe=!1;function xe(e,t,n,r){t.child=e===null?n1(t,null,n,r):rr(t,e.child,n,r)}function $c(e,t,n,r,i){n=n.render;var a=t.ref;return Zn(t,i),r=su(e,t,n,r,a,i),n=uu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(X&&n&&Xs(t),t.flags|=1,xe(e,t,r,i),t.child)}function Mc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!wu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,z1(e,t,a,r,i)):(e=ga(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(o,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Yt(a,r),e.ref=t.ref,e.return=t,t.child=e}function z1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ri(a,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,kt(e,t,i)}return Gl(e,t,n,r,i)}function O1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Hn,Ae),Ae|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Hn,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,W(Hn,Ae),Ae|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,W(Hn,Ae),Ae|=r;return xe(e,t,i,n),t.child}function N1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,i){var a=be(n)?xn:we.current;return a=tr(t,a),Zn(t,i),n=su(e,t,n,r,a,i),r=uu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(X&&r&&Xs(t),t.flags|=1,xe(e,t,n,i),t.child)}function Dc(e,t,n,r,i){if(be(n)){var a=!0;La(t)}else a=!1;if(Zn(t,i),t.stateNode===null)ma(e,t),P1(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=be(n)?xn:we.current,u=tr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jc(t,o,r,u),It=!1;var h=t.memoizedState;o.state=h,Fa(t,r,o,i),s=t.memoizedState,l!==r||h!==s||_e.current||It?(typeof f=="function"&&(Vl(t,n,f,r),s=t.memoizedState),(l=It||Ac(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,i1(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ge(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=be(n)?xn:we.current,s=tr(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&jc(t,o,r,s),It=!1,h=t.memoizedState,o.state=h,Fa(t,r,o,i);var y=t.memoizedState;l!==d||h!==y||_e.current||It?(typeof v=="function"&&(Vl(t,n,v,r),y=t.memoizedState),(u=It||Ac(t,n,u,r,h,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,a,i)}function Kl(e,t,n,r,i,a){N1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Cc(t,n,!1),kt(e,t,a);r=t.stateNode,ch.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=rr(t,e.child,null,a),t.child=rr(t,null,l,a)):xe(e,t,l,a),t.memoizedState=r.state,i&&Cc(t,n,!0),t.child}function T1(e){var t=e.stateNode;t.pendingContext?Ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ec(e,t.context,!1),iu(e,t.containerInfo)}function Fc(e,t,n,r,i){return nr(),Js(i),t.flags|=256,xe(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function A1(e,t,n){var r=t.pendingProps,i=Z.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Z,i&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=vo(o,r,0,null),e=yn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):du(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fh(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Yt(l,a):(a=yn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return a=e.child,e=a.sibling,r=Yt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function du(e,t){return t=vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Js(r),rr(t,e.child,null,n),e=du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fh(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(C(422))),Wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=vo({mode:"visible",children:r.children},i,0,null),a=yn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&rr(t,e.child,null,o),t.child.memoizedState=Zl(o),t.memoizedState=Xl,a);if(!(t.mode&1))return Wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(C(419)),r=tl(a,r,void 0),Wi(e,t,o,r)}if(l=(o&e.childLanes)!==0,Pe||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,xt(e,i),qe(r,e,i,-1))}return yu(),r=tl(Error(C(421))),Wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ch.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,je=Ht(i.nextSibling),Ie=t,X=!0,Xe=null,e!==null&&(De[Fe++]=ht,De[Fe++]=vt,De[Fe++]=kn,ht=e.id,vt=e.overflow,kn=t),t=du(t,r.children),t.flags|=4096,t)}function Uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wl(e.return,t,n)}function nl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function j1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(xe(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,n,t);else if(e.tag===19)Uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ma(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dh(e,t,n){switch(t.tag){case 3:T1(t),nr();break;case 5:a1(t);break;case 1:be(t.type)&&La(t);break;case 4:iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Ma,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?A1(e,t,n):(W(Z,Z.current&1),e=kt(e,t,n),e!==null?e.sibling:null);W(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return j1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,O1(e,t,n)}return kt(e,t,n)}var I1,Jl,L1,R1;I1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jl=function(){};L1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dn(ut.current);var a=null;switch(n){case"input":i=xl(e,i),r=xl(e,r),a=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":i=El(e,i),r=El(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ja)}Pl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};R1=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ph(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return be(t.type)&&Ia(),ve(t),null;case 3:return r=t.stateNode,ir(),G(_e),G(we),ou(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(os(Xe),Xe=null))),Jl(e,t),ve(t),null;case 5:au(t);var i=dn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)L1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=dn(ut.current),Hi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ot]=t,r[oi]=a,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)V(Lr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Xu(r,a),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},V("invalid",r);break;case"textarea":Ju(r,a),V("invalid",r)}Pl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ui(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ui(r.textContent,l,e),i=["children",""+l]):Xr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":ji(r),Zu(r,a,!0);break;case"textarea":ji(r),qu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ja)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ot]=t,e[oi]=r,I1(e,t,!1,!1),t.stateNode=e;e:{switch(o=_l(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)V(Lr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Xu(e,r),i=xl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ju(e,r),i=El(e,r),V("invalid",e);break;default:i=r}Pl(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?pd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fd(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zr(e,s):typeof s=="number"&&Zr(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xr.hasOwnProperty(a)?s!=null&&a==="onScroll"&&V("scroll",e):s!=null&&Rs(e,a,s,o))}switch(n){case"input":ji(e),Zu(e,r,!1);break;case"textarea":ji(e),qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Qn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)R1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=dn(si.current),dn(ut.current),Hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(a=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:Ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ui(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return ve(t),null;case 13:if(G(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&je!==null&&t.mode&1&&!(t.flags&128))e1(),nr(),t.flags|=98560,a=!1;else if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[ot]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else Xe!==null&&(os(Xe),Xe=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):yu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return ir(),Jl(e,t),e===null&&ii(t.stateNode.containerInfo),ve(t),null;case 10:return tu(t.type._context),ve(t),null;case 17:return be(t.type)&&Ia(),ve(t),null;case 19:if(G(Z),a=t.memoizedState,a===null)return ve(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)br(a,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ua(e),o!==null){for(t.flags|=128,br(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Z,Z.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>or&&(t.flags|=128,r=!0,br(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ua(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!X)return ve(t),null}else 2*ne()-a.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,br(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=Z.current,W(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function mh(e,t){switch(Zs(t),t.tag){case 1:return be(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),G(_e),G(we),ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return au(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return ir(),null;case 10:return tu(t.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var Vi=!1,ge=!1,hh=typeof WeakSet=="function"?WeakSet:Set,b=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Hc=!1;function vh(e,t){if(Rl=Na,e=Ud(),Ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=o),h===a&&++f===r&&(s=o),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},Na=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ge(t.type,w),N);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(g){ee(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return y=Hc,Hc=!1,y}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ql(t,n,a)}i=i.next}while(i!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function es(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $1(e){var t=e.alternate;t!==null&&(e.alternate=null,$1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[oi],delete t[Fl],delete t[J0],delete t[q0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M1(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ja));else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}function ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}var de=null,Ke=!1;function Ot(e,t,n){for(n=n.child;n!==null;)D1(e,t,n),n=n.sibling}function D1(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(ao,n)}catch{}switch(n.tag){case 5:ge||Un(n,t);case 6:var r=de,i=Ke;de=null,Ot(e,t,n),de=r,Ke=i,de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?Ko(e.parentNode,n):e.nodeType===1&&Ko(e,n),ti(e)):Ko(de,n.stateNode));break;case 4:r=de,i=Ke,de=n.stateNode.containerInfo,Ke=!0,Ot(e,t,n),de=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ql(n,t,o),i=i.next}while(i!==r)}Ot(e,t,n);break;case 1:if(!ge&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Ot(e,t,n),ge=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function Wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hh),t.forEach(function(r){var i=Ph.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Ke=!1;break e;case 3:de=l.stateNode.containerInfo,Ke=!0;break e;case 4:de=l.stateNode.containerInfo,Ke=!0;break e}l=l.return}if(de===null)throw Error(C(160));D1(a,o,i),de=null,Ke=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)F1(t,e),t=t.sibling}function F1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),nt(e),r&4){try{Wr(3,e,e.return),mo(3,e)}catch(w){ee(e,e.return,w)}try{Wr(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Qe(t,e),nt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(Qe(t,e),nt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{Zr(i,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&sd(i,a),_l(l,o);var u=_l(l,a);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?pd(i,d):f==="dangerouslySetInnerHTML"?fd(i,d):f==="children"?Zr(i,d):Rs(i,f,d,u)}switch(l){case"input":kl(i,a);break;case"textarea":ud(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Qn(i,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?Qn(i,!!a.multiple,a.defaultValue,!0):Qn(i,!!a.multiple,a.multiple?[]:"",!1))}i[oi]=a}catch(w){ee(e,e.return,w)}}break;case 6:if(Qe(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ee(e,e.return,w)}}break;case 3:if(Qe(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Qe(t,e),nt(e);break;case 13:Qe(t,e),nt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(hu=ne())),r&4&&Wc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||f,Qe(t,e),ge=u):Qe(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(b=e,f=e.child;f!==null;){for(d=b=f;b!==null;){switch(h=b,v=h.child,h.tag){case 0:case 11:case 14:case 15:Wr(4,h,h.return);break;case 1:Un(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:Un(h,h.return);break;case 22:if(h.memoizedState!==null){Yc(d);continue}}v!==null?(v.return=h,b=v):Yc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=dd("display",o))}catch(w){ee(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ee(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(t,e),nt(e),r&4&&Wc(e);break;case 21:break;default:Qe(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(M1(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zr(i,""),r.flags&=-33);var a=Bc(e);ns(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bc(e);ts(e,l,o);break;default:throw Error(C(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gh(e,t,n){b=e,U1(e)}function U1(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vi;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ge;l=Vi;var u=ge;if(Vi=o,(ge=s)&&!u)for(b=i;b!==null;)o=b,s=o.child,o.tag===22&&o.memoizedState!==null?Qc(i):s!==null?(s.return=o,b=s):Qc(i);for(;a!==null;)b=a,U1(a),a=a.sibling;b=i,Vi=l,ge=u}Vc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,b=a):Vc(e)}}function Vc(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Oc(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ti(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ge||t.flags&512&&es(t)}catch(h){ee(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Yc(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Qc(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ee(t,i,s)}}var a=t.return;try{es(t)}catch(s){ee(t,a,s)}break;case 5:var o=t.return;try{es(t)}catch(s){ee(t,o,s)}}}catch(s){ee(t,t.return,s)}if(t===e){b=null;break}var l=t.sibling;if(l!==null){l.return=t.return,b=l;break}b=t.return}}var yh=Math.ceil,Wa=Pt.ReactCurrentDispatcher,pu=Pt.ReactCurrentOwner,He=Pt.ReactCurrentBatchConfig,M=0,fe=null,ie=null,pe=0,Ae=0,Hn=en(0),le=0,di=null,En=0,ho=0,mu=0,Vr=null,Ce=null,hu=0,or=1/0,dt=null,Va=!1,rs=null,Wt=null,Yi=!1,Mt=null,Ya=0,Yr=0,is=null,ha=-1,va=0;function ke(){return M&6?ne():ha!==-1?ha:ha=ne()}function Vt(e){return e.mode&1?M&2&&pe!==0?pe&-pe:th.transition!==null?(va===0&&(va=Pd()),va):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e):1}function qe(e,t,n,r){if(50<Yr)throw Yr=0,is=null,Error(C(185));ki(e,n,r),(!(M&2)||e!==fe)&&(e===fe&&(!(M&2)&&(ho|=n),le===4&&Rt(e,pe)),ze(e,r),n===1&&M===0&&!(t.mode&1)&&(or=ne()+500,co&&tn()))}function ze(e,t){var n=e.callbackNode;t0(e,t);var r=Oa(e,e===fe?pe:0);if(r===0)n!==null&&nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nc(n),t===1)e.tag===0?eh(Gc.bind(null,e)):Zd(Gc.bind(null,e)),X0(function(){!(M&6)&&tn()}),n=null;else{switch(_d(r)){case 1:n=Us;break;case 4:n=Ed;break;case 16:n=za;break;case 536870912:n=Cd;break;default:n=za}n=K1(n,H1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function H1(e,t){if(ha=-1,va=0,M&6)throw Error(C(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Oa(e,e===fe?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qa(e,r);else{t=r;var i=M;M|=2;var a=W1();(fe!==e||pe!==t)&&(dt=null,or=ne()+500,gn(e,t));do try{kh();break}catch(l){B1(e,l)}while(!0);eu(),Wa.current=a,M=i,ie!==null?t=0:(fe=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=Tl(e),i!==0&&(r=i,t=as(e,i))),t===1)throw n=di,gn(e,0),Rt(e,r),ze(e,ne()),n;if(t===6)Rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!wh(i)&&(t=Qa(e,r),t===2&&(a=Tl(e),a!==0&&(r=a,t=as(e,a))),t===1))throw n=di,gn(e,0),Rt(e,r),ze(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:un(e,Ce,dt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=hu+500-ne(),10<t)){if(Oa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Dl(un.bind(null,e,Ce,dt),t);break}un(e,Ce,dt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Je(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yh(r/1960))-r,10<r){e.timeoutHandle=Dl(un.bind(null,e,Ce,dt),r);break}un(e,Ce,dt);break;case 5:un(e,Ce,dt);break;default:throw Error(C(329))}}}return ze(e,ne()),e.callbackNode===n?H1.bind(null,e):null}function as(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&os(t)),e}function os(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function wh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!tt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~mu,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Gc(e){if(M&6)throw Error(C(327));Jn();var t=Oa(e,0);if(!(t&1))return ze(e,ne()),null;var n=Qa(e,t);if(e.tag!==0&&n===2){var r=Tl(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=di,gn(e,0),Rt(e,t),ze(e,ne()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Ce,dt),ze(e,ne()),null}function vu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(or=ne()+500,co&&tn())}}function Cn(e){Mt!==null&&Mt.tag===0&&!(M&6)&&Jn();var t=M;M|=1;var n=He.transition,r=F;try{if(He.transition=null,F=1,e)return e()}finally{F=r,He.transition=n,M=t,!(M&6)&&tn()}}function gu(){Ae=Hn.current,G(Hn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,K0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:ir(),G(_e),G(we),ou();break;case 5:au(r);break;case 4:ir();break;case 13:G(Z);break;case 19:G(Z);break;case 10:tu(r.type._context);break;case 22:case 23:gu()}n=n.return}if(fe=e,ie=e=Yt(e.current,null),pe=Ae=t,le=0,di=null,mu=ho=En=0,Ce=Vr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}fn=null}return e}function B1(e,t){do{var n=ie;try{if(eu(),da.current=Ba,Ha){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ha=!1}if(Sn=0,ue=ae=J=null,Br=!1,ui=0,pu.current=null,n===null||n.return===null){le=1,di=t,ie=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Lc(o);if(v!==null){v.flags&=-257,Rc(v,o,l,a,t),v.mode&1&&Ic(a,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){Ic(a,u,t),yu();break e}s=Error(C(426))}}else if(X&&l.mode&1){var N=Lc(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Rc(N,o,l,a,t),Js(ar(s,l));break e}}a=s=ar(s,l),le!==4&&(le=2),Vr===null?Vr=[a]:Vr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=_1(a,s,t);zc(a,p);break e;case 1:l=s;var c=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=b1(a,l,t);zc(a,g);break e}}a=a.return}while(a!==null)}Y1(n)}catch(x){t=x,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function W1(){var e=Wa.current;return Wa.current=Ba,e===null?Ba:e}function yu(){(le===0||le===3||le===2)&&(le=4),fe===null||!(En&268435455)&&!(ho&268435455)||Rt(fe,pe)}function Qa(e,t){var n=M;M|=2;var r=W1();(fe!==e||pe!==t)&&(dt=null,gn(e,t));do try{xh();break}catch(i){B1(e,i)}while(!0);if(eu(),M=n,Wa.current=r,ie!==null)throw Error(C(261));return fe=null,pe=0,le}function xh(){for(;ie!==null;)V1(ie)}function kh(){for(;ie!==null&&!Ym();)V1(ie)}function V1(e){var t=G1(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Y1(e):ie=t,pu.current=null}function Y1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mh(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=ph(n,t,Ae),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function un(e,t,n){var r=F,i=He.transition;try{He.transition=null,F=1,Sh(e,t,n,r)}finally{He.transition=i,F=r}return null}function Sh(e,t,n,r){do Jn();while(Mt!==null);if(M&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(n0(e,a),e===fe&&(ie=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yi||(Yi=!0,K1(za,function(){return Jn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=He.transition,He.transition=null;var o=F;F=1;var l=M;M|=4,pu.current=null,vh(e,n),F1(n,e),H0($l),Na=!!Rl,$l=Rl=null,e.current=n,gh(n),Qm(),M=l,F=o,He.transition=a}else e.current=n;if(Yi&&(Yi=!1,Mt=e,Ya=i),a=e.pendingLanes,a===0&&(Wt=null),Xm(n.stateNode),ze(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Va)throw Va=!1,e=rs,rs=null,e;return Ya&1&&e.tag!==0&&Jn(),a=e.pendingLanes,a&1?e===is?Yr++:(Yr=0,is=e):Yr=0,tn(),null}function Jn(){if(Mt!==null){var e=_d(Ya),t=He.transition,n=F;try{if(He.transition=null,F=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Ya=0,M&6)throw Error(C(331));var i=M;for(M|=4,b=e.current;b!==null;){var a=b,o=a.child;if(b.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(b=u;b!==null;){var f=b;switch(f.tag){case 0:case 11:case 15:Wr(8,f,a)}var d=f.child;if(d!==null)d.return=f,b=d;else for(;b!==null;){f=b;var h=f.sibling,v=f.return;if($1(f),f===u){b=null;break}if(h!==null){h.return=v,b=h;break}b=v}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}b=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,b=o;else e:for(;b!==null;){if(a=b,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,b=p;break e}b=a.return}}var c=e.current;for(b=c;b!==null;){o=b;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,b=m;else e:for(o=c;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:mo(9,l)}}catch(x){ee(l,l.return,x)}if(l===o){b=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,b=g;break e}b=l.return}}if(M=i,tn(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(ao,e)}catch{}r=!0}return r}finally{F=n,He.transition=t}}return!1}function Kc(e,t,n){t=ar(n,t),t=_1(e,t,1),e=Bt(e,t,1),t=ke(),e!==null&&(ki(e,1,t),ze(e,t))}function ee(e,t,n){if(e.tag===3)Kc(e,e,n);else for(;t!==null;){if(t.tag===3){Kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=ar(n,e),e=b1(t,e,1),t=Bt(t,e,1),e=ke(),t!==null&&(ki(t,1,e),ze(t,e));break}}t=t.return}}function Eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>ne()-hu?gn(e,0):mu|=n),ze(e,t)}function Q1(e,t){t===0&&(e.mode&1?(t=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):t=1);var n=ke();e=xt(e,t),e!==null&&(ki(e,t,n),ze(e,n))}function Ch(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q1(e,n)}function Ph(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Q1(e,n)}var G1;G1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,dh(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,X&&t.flags&1048576&&Jd(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ma(e,t),e=t.pendingProps;var i=tr(t,we.current);Zn(t,n),i=su(null,t,r,e,i,n);var a=uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(a=!0,La(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ru(t),i.updater=po,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Kl(null,t,r,!0,a,n)):(t.tag=0,X&&a&&Xs(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ma(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bh(r),e=Ge(r,e),i){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=Dc(null,t,r,e,n);break e;case 11:t=$c(null,t,r,e,n);break e;case 14:t=Mc(null,t,r,Ge(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Dc(e,t,r,i,n);case 3:e:{if(T1(t),e===null)throw Error(C(387));r=t.pendingProps,a=t.memoizedState,i=a.element,i1(e,t),Fa(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ar(Error(C(423)),t),t=Fc(e,t,r,n,i);break e}else if(r!==i){i=ar(Error(C(424)),t),t=Fc(e,t,r,n,i);break e}else for(je=Ht(t.stateNode.containerInfo.firstChild),Ie=t,X=!0,Xe=null,n=n1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=kt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return a1(t),e===null&&Bl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ml(r,i)?o=null:a!==null&&Ml(r,a)&&(t.flags|=32),N1(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&Bl(t),null;case 13:return A1(e,t,n);case 4:return iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),$c(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,W(Ma,r._currentValue),r._currentValue=o,a!==null)if(tt(a.value,o)){if(a.children===i.children&&!_e.current){t=kt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=gt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Wl(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zn(t,n),i=Be(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ge(r,t.pendingProps),i=Ge(r.type,i),Mc(e,t,r,i,n);case 15:return z1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),ma(e,t),t.tag=1,be(r)?(e=!0,La(t)):e=!1,Zn(t,n),P1(t,r,i),Yl(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return j1(e,t,n);case 22:return O1(e,t,n)}throw Error(C(156,t.tag))};function K1(e,t){return Sd(e,t)}function _h(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new _h(e,t,n,r)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bh(e){if(typeof e=="function")return wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ms)return 11;if(e===Ds)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ga(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")wu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case An:return yn(n.children,i,a,t);case $s:o=8,i|=8;break;case vl:return e=Ue(12,n,t,i|2),e.elementType=vl,e.lanes=a,e;case gl:return e=Ue(13,n,t,i),e.elementType=gl,e.lanes=a,e;case yl:return e=Ue(19,n,t,i),e.elementType=yl,e.lanes=a,e;case ad:return vo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rd:o=10;break e;case id:o=9;break e;case Ms:o=11;break e;case Ds:o=14;break e;case jt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function yn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function vo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=ad,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mo(0),this.expirationTimes=Mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xu(e,t,n,r,i,a,o,l,s){return e=new zh(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ue(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(a),e}function Oh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function X1(e){if(!e)return Kt;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(be(n))return Xd(e,n,t)}return t}function Z1(e,t,n,r,i,a,o,l,s){return e=xu(n,r,!0,e,i,a,o,l,s),e.context=X1(null),n=e.current,r=ke(),i=Vt(n),a=gt(r,i),a.callback=t??null,Bt(n,a,i),e.current.lanes=i,ki(e,i,r),ze(e,r),e}function go(e,t,n,r){var i=t.current,a=ke(),o=Vt(i);return n=X1(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,o),e!==null&&(qe(e,i,o,a),fa(e,i,o)),o}function Ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ku(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function Nh(){return null}var J1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Su(e){this._internalRoot=e}yo.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));go(e,t,null,null)};yo.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){go(null,e,null,null)}),t[wt]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Td(e)}};function Eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zc(){}function Th(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Ga(o);a.call(u)}}var o=Z1(t,r,e,0,null,!1,!1,"",Zc);return e._reactRootContainer=o,e[wt]=o.current,ii(e.nodeType===8?e.parentNode:e),Cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ga(s);l.call(u)}}var s=xu(e,0,!1,null,null,!1,!1,"",Zc);return e._reactRootContainer=s,e[wt]=s.current,ii(e.nodeType===8?e.parentNode:e),Cn(function(){go(t,s,n,r)}),s}function xo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Ga(o);l.call(s)}}go(t,o,e,i)}else o=Th(n,t,e,i,r);return Ga(o)}bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Hs(t,n|1),ze(t,ne()),!(M&6)&&(or=ne()+500,tn()))}break;case 13:Cn(function(){var r=xt(e,1);if(r!==null){var i=ke();qe(r,e,1,i)}}),ku(e,1)}};Bs=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=ke();qe(t,e,134217728,n)}ku(e,134217728)}};zd=function(e){if(e.tag===13){var t=Vt(e),n=xt(e,t);if(n!==null){var r=ke();qe(n,e,t,r)}ku(e,t)}};Od=function(){return F};Nd=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};zl=function(e,t,n){switch(t){case"input":if(kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uo(r);if(!i)throw Error(C(90));ld(r),kl(r,i)}}}break;case"textarea":ud(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};vd=vu;gd=Cn;var Ah={usingClientEntryPoint:!1,Events:[Ei,Rn,uo,md,hd,vu]},zr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jh={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xd(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{ao=Qi.inject(jh),st=Qi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(t))throw Error(C(200));return Oh(e,t,null,n)};Re.createRoot=function(e,t){if(!Eu(e))throw Error(C(299));var n=!1,r="",i=J1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xu(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,ii(e.nodeType===8?e.parentNode:e),new Su(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=xd(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Cn(e)};Re.hydrate=function(e,t,n){if(!wo(t))throw Error(C(200));return xo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Eu(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=J1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Z1(t,null,e,1,n??null,i,!1,a,o),e[wt]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yo(t)};Re.render=function(e,t,n){if(!wo(t))throw Error(C(200));return xo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!wo(e))throw Error(C(40));return e._reactRootContainer?(Cn(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Re.unstable_batchedUpdates=vu;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return xo(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function q1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q1)}catch(e){console.error(e)}}q1(),qf.exports=Re;var Ih=qf.exports,Jc=Ih;ml.createRoot=Jc.createRoot,ml.hydrateRoot=Jc.hydrateRoot;var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ye.apply(this,arguments)};function pi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Y="-ms-",Qr="-moz-",D="-webkit-",ep="comm",ko="rule",Cu="decl",Lh="@import",tp="@keyframes",Rh="@layer",np=Math.abs,Pu=String.fromCharCode,ls=Object.assign;function $h(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function rp(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function ya(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function lr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function ip(e){return e.length}function Rr(e,t){return t.push(e),e}function Mh(e,t){return e.map(t).join("")}function qc(e,t){return e.filter(function(n){return!pt(n,t)})}var So=1,sr=1,ap=0,Ve=0,re=0,gr="";function Eo(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:So,column:sr,length:o,return:"",siblings:l}}function At(e,t){return ls(Eo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Nn(e){for(;e.root;)e=At(e.root,{children:[e]});Rr(e,e.siblings)}function Dh(){return re}function Fh(){return re=Ve>0?ce(gr,--Ve):0,sr--,re===10&&(sr=1,So--),re}function et(){return re=Ve<ap?ce(gr,Ve++):0,sr++,re===10&&(sr=1,So++),re}function wn(){return ce(gr,Ve)}function wa(){return Ve}function Co(e,t){return lr(gr,e,t)}function ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uh(e){return So=sr=1,ap=it(gr=e),Ve=0,[]}function Hh(e){return gr="",e}function al(e){return rp(Co(Ve-1,us(e===91?e+2:e===40?e+1:e)))}function Bh(e){for(;(re=wn())&&re<33;)et();return ss(e)>2||ss(re)>3?"":" "}function Wh(e,t){for(;--t&&et()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Co(e,wa()+(t<6&&wn()==32&&et()==32))}function us(e){for(;et();)switch(re){case e:return Ve;case 34:case 39:e!==34&&e!==39&&us(re);break;case 40:e===41&&us(e);break;case 92:et();break}return Ve}function Vh(e,t){for(;et()&&e+re!==57;)if(e+re===84&&wn()===47)break;return"/*"+Co(t,Ve-1)+"*"+Pu(e===47?e:et())}function Yh(e){for(;!ss(wn());)et();return Co(e,Ve)}function Qh(e){return Hh(xa("",null,null,null,[""],e=Uh(e),0,[0],e))}function xa(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,d=o,h=0,v=0,y=0,w=1,N=1,p=1,c=0,m="",g=i,x=a,S=r,k=m;N;)switch(y=c,c=et()){case 40:if(y!=108&&ce(k,d-1)==58){ya(k+=j(al(c),"&","&\f"),"&\f",np(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=al(c);break;case 9:case 10:case 13:case 32:k+=Bh(y);break;case 92:k+=Wh(wa()-1,7);continue;case 47:switch(wn()){case 42:case 47:Rr(Gh(Vh(et(),wa()),t,n,s),s);break;default:k+="/"}break;case 123*w:l[u++]=it(k)*p;case 125*w:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+f:p==-1&&(k=j(k,/\f/g,"")),v>0&&it(k)-d&&Rr(v>32?tf(k+";",r,n,d-1,s):tf(j(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Rr(S=ef(k,t,n,u,f,i,l,m,g=[],x=[],d,a),a),c===123)if(f===0)xa(k,t,S,S,g,a,d,l,x);else switch(h===99&&ce(k,3)===110?100:h){case 100:case 108:case 109:case 115:xa(e,S,S,r&&Rr(ef(e,S,S,0,0,i,l,m,i,g=[],d,x),x),i,x,d,l,r?g:x);break;default:xa(k,S,S,S,[""],x,0,l,x)}}u=f=v=0,w=p=1,m=k="",d=o;break;case 58:d=1+it(k),v=y;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&Fh()==125)continue}switch(k+=Pu(c),c*w){case 38:p=f>0?1:(k+="\f",-1);break;case 44:l[u++]=(it(k)-1)*p,p=1;break;case 64:wn()===45&&(k+=al(et())),h=wn(),f=d=it(m=k+=Yh(wa())),c++;break;case 45:y===45&&it(k)==2&&(w=0)}}return a}function ef(e,t,n,r,i,a,o,l,s,u,f,d){for(var h=i-1,v=i===0?a:[""],y=ip(v),w=0,N=0,p=0;w<r;++w)for(var c=0,m=lr(e,h+1,h=np(N=o[w])),g=e;c<y;++c)(g=rp(N>0?v[c]+" "+m:j(m,/&\f/g,v[c])))&&(s[p++]=g);return Eo(e,t,n,i===0?ko:l,s,u,f,d)}function Gh(e,t,n,r){return Eo(e,t,n,ep,Pu(Dh()),lr(e,2,-2),0,r)}function tf(e,t,n,r,i){return Eo(e,t,n,Cu,lr(e,0,r),lr(e,r+1,-1),r,i)}function op(e,t,n){switch($h(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return Qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Qr+e+Y+e+e;case 5936:switch(ce(e,t+11)){case 114:return D+e+Y+j(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+Y+j(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+Y+j(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+Y+e+e;case 6165:return D+e+Y+"flex-"+e+e;case 5187:return D+e+j(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return D+e+Y+"flex-item-"+j(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":Y+"grid-row-"+j(e,/flex-|-self/g,""))+e;case 4675:return D+e+Y+"flex-line-pack"+j(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+Y+j(e,"shrink","negative")+e;case 5292:return D+e+Y+j(e,"basis","preferred-size")+e;case 6060:return D+"box-"+j(e,"-grow","")+D+e+Y+j(e,"grow","positive")+e;case 4554:return D+j(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return j(j(j(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!pt(e,/flex-|baseline/))return Y+"grid-column-align"+lr(e,t)+e;break;case 2592:case 3360:return Y+j(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pt(r.props,/grid-\w+-end/)})?~ya(e+(n=n[t].value),"span",0)?e:Y+j(e,"-start","")+e+Y+"grid-row-span:"+(~ya(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":Y+j(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:Y+j(j(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Qr+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ya(e,"stretch",0)?op(j(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,u){return Y+i+":"+a+u+(o?Y+i+"-span:"+(l?s:+s-+a)+u:"")+e});case 4949:if(ce(e,t+6)===121)return j(e,":",":"+D)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ce(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+Y+"$2box$3")+e;case 100:return j(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,"scroll-","scroll-snap-")+e}return e}function Ka(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Kh(e,t,n,r){switch(e.type){case Rh:if(e.children.length)break;case Lh:case Cu:return e.return=e.return||e.value;case ep:return"";case tp:return e.return=e.value+"{"+Ka(e.children,r)+"}";case ko:if(!it(e.value=e.props.join(",")))return""}return it(n=Ka(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xh(e){var t=ip(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Zh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Jh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cu:e.return=op(e.value,e.length,n);return;case tp:return Ka([At(e,{value:j(e.value,"@","@"+D)})],r);case ko:if(e.length)return Mh(n=e.props,function(i){switch(pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nn(At(e,{props:[j(i,/:(read-\w+)/,":"+Qr+"$1")]})),Nn(At(e,{props:[i]})),ls(e,{props:qc(n,r)});break;case"::placeholder":Nn(At(e,{props:[j(i,/:(plac\w+)/,":"+D+"input-$1")]})),Nn(At(e,{props:[j(i,/:(plac\w+)/,":"+Qr+"$1")]})),Nn(At(e,{props:[j(i,/:(plac\w+)/,Y+"input-$1")]})),Nn(At(e,{props:[i]})),ls(e,{props:qc(n,r)});break}return""})}}var qh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},ur=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",lp="active",sp="data-styled-version",Po="6.1.11",_u=`/*!sc*/
`,bu=typeof window<"u"&&"HTMLElement"in window,ev=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),tv={},_o=Object.freeze([]),cr=Object.freeze({});function up(e,t,n){return n===void 0&&(n=cr),e.theme!==n.theme&&e.theme||t||n.theme}var cp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rv=/(^-|-$)/g;function nf(e){return e.replace(nv,"-").replace(rv,"")}var iv=/(a)(d)/gi,Gi=52,rf=function(e){return String.fromCharCode(e+(e>25?39:97))};function cs(e){var t,n="";for(t=Math.abs(e);t>Gi;t=t/Gi|0)n=rf(t%Gi)+n;return(rf(t%Gi)+n).replace(iv,"$1-$2")}var ol,fp=5381,Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dp=function(e){return Bn(fp,e)};function pp(e){return cs(dp(e)>>>0)}function av(e){return e.displayName||e.name||"Component"}function ll(e){return typeof e=="string"&&!0}var mp=typeof Symbol=="function"&&Symbol.for,hp=mp?Symbol.for("react.memo"):60115,ov=mp?Symbol.for("react.forward_ref"):60112,lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uv=((ol={})[ov]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ol[hp]=vp,ol);function af(e){return("type"in(t=e)&&t.type.$$typeof)===hp?vp:"$$typeof"in e?uv[e.$$typeof]:lv;var t}var cv=Object.defineProperty,fv=Object.getOwnPropertyNames,of=Object.getOwnPropertySymbols,dv=Object.getOwnPropertyDescriptor,pv=Object.getPrototypeOf,lf=Object.prototype;function gp(e,t,n){if(typeof t!="string"){if(lf){var r=pv(t);r&&r!==lf&&gp(e,r,n)}var i=fv(t);of&&(i=i.concat(of(t)));for(var a=af(e),o=af(t),l=0;l<i.length;++l){var s=i[l];if(!(s in sv||n&&n[s]||o&&s in o||a&&s in a)){var u=dv(t,s);try{cv(e,s,u)}catch{}}}}return e}function fr(e){return typeof e=="function"}function zu(e){return typeof e=="object"&&"styledComponentId"in e}function pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ds(e,t,n){if(n===void 0&&(n=!1),!n&&!mi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ds(e[r],t[r]);else if(mi(t))for(var r in t)e[r]=ds(e[r],t[r]);return e}function Ou(e,t){Object.defineProperty(e,"toString",{value:t})}function Pi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw Pi(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(_u);return n},e}(),ka=new Map,Xa=new Map,Sa=1,Ki=function(e){if(ka.has(e))return ka.get(e);for(;Xa.has(Sa);)Sa++;var t=Sa++;return ka.set(e,t),Xa.set(t,e),t},hv=function(e,t){Sa=t+1,ka.set(e,t),Xa.set(t,e)},vv="style[".concat(ur,"][").concat(sp,'="').concat(Po,'"]'),gv=new RegExp("^".concat(ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yv=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},wv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(_u),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(gv);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(hv(f,u),yv(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function xv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ur,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(ur,lp),r.setAttribute(sp,Po);var o=xv();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},kv=function(){function e(t){this.element=yp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw Pi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sv=function(){function e(t){this.element=yp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ev=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),sf=bu,Cv={isServer:!bu,useCSSOMInjection:!ev},Za=function(){function e(t,n,r){t===void 0&&(t=cr),n===void 0&&(n={});var i=this;this.options=ye(ye({},Cv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bu&&sf&&(sf=!1,function(a){for(var o=document.querySelectorAll(vv),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(ur)!==lp&&(wv(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ou(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",u=function(d){var h=function(p){return Xa.get(p)}(d);if(h===void 0)return"continue";var v=a.names.get(h),y=o.getGroup(d);if(v===void 0||y.length===0)return"continue";var w="".concat(ur,".g").concat(d,'[id="').concat(h,'"]'),N="";v!==void 0&&v.forEach(function(p){p.length>0&&(N+="".concat(p,","))}),s+="".concat(y).concat(w,'{content:"').concat(N,'"}').concat(_u)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ki(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ev(i):r?new kv(i):new Sv(i)}(this.options),new mv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ki(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ki(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Pv=/&/g,_v=/^\s*\/\/.*$/gm;function wp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wp(n.children,t)),n})}function bv(e){var t,n,r,i=cr,a=i.options,o=a===void 0?cr:a,l=i.plugins,s=l===void 0?_o:l,u=function(h,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===ko&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Pv,n).replace(r,u))}),o.prefix&&f.push(Jh),f.push(Kh);var d=function(h,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var N=h.replace(_v,""),p=Qh(y||v?"".concat(y," ").concat(v," { ").concat(N," }"):N);o.namespace&&(p=wp(p,o.namespace));var c=[];return Ka(p,Xh(f.concat(Zh(function(m){return c.push(m)})))),c};return d.hash=s.length?s.reduce(function(h,v){return v.name||Pi(15),Bn(h,v.name)},fp).toString():"",d}var zv=new Za,ps=bv(),xp=oe.createContext({shouldForwardProp:void 0,styleSheet:zv,stylis:ps});xp.Consumer;oe.createContext(void 0);function ms(){return mr.useContext(xp)}var Ov=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=ps);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ou(this,function(){throw Pi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ps),this.name+t.hash},e}(),Nv=function(e){return e>="A"&&e<="Z"};function uf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Nv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var kp=function(e){return e==null||e===!1||e===""},Sp=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!kp(a)&&(Array.isArray(a)&&a.isCss||fr(a)?r.push("".concat(uf(i),":"),a,";"):mi(a)?r.push.apply(r,pi(pi(["".concat(i," {")],Sp(a),!1),["}"],!1)):r.push("".concat(uf(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in qh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qt(e,t,n,r){if(kp(e))return[];if(zu(e))return[".".concat(e.styledComponentId)];if(fr(e)){if(!fr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Qt(i,t,n,r)}var a;return e instanceof Ov?n?(e.inject(n,r),[e.getName(r)]):[e]:mi(e)?Sp(e):Array.isArray(e)?Array.prototype.concat.apply(_o,e.map(function(o){return Qt(o,t,n,r)})):[e.toString()]}function Ep(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fr(n)&&!zu(n))return!1}return!0}var Tv=dp(Po),Av=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ep(t),this.componentId=n,this.baseHash=Bn(Tv,n),this.baseStyle=r,Za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pn(i,this.staticRulesId);else{var a=fs(Qt(this.rules,t,n,r)),o=cs(Bn(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=pn(i,o),this.staticRulesId=o}else{for(var s=Bn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var h=fs(Qt(d,t,n,r));s=Bn(s,h+f),u+=h}}if(u){var v=cs(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=pn(i,v)}}return i},e}(),Nu=oe.createContext(void 0);Nu.Consumer;var sl={};function jv(e,t,n){var r=zu(e),i=e,a=!ll(e),o=t.attrs,l=o===void 0?_o:o,s=t.componentId,u=s===void 0?function(g,x){var S=typeof g!="string"?"sc":nf(g);sl[S]=(sl[S]||0)+1;var k="".concat(S,"-").concat(pp(Po+S+sl[S]));return x?"".concat(x,"-").concat(k):k}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(g){return ll(g)?"styled.".concat(g):"Styled(".concat(av(g),")")}(e):f,h=t.displayName&&t.componentId?"".concat(nf(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;y=function(g,x){return w(g,x)&&N(g,x)}}else y=w}var p=new Av(n,h,r?i.componentStyle:void 0);function c(g,x){return function(S,k,z){var $=S.attrs,I=S.componentStyle,Oe=S.defaultProps,nn=S.foldedComponentIds,rn=S.styledComponentId,Oi=S.target,To=oe.useContext(Nu),wr=ms(),an=S.shouldForwardProp||wr.shouldForwardProp,P=up(k,To,Oe)||cr,T=function(bt,Ne,ft){for(var xr,ln=ye(ye({},Ne),{className:void 0,theme:ft}),Ao=0;Ao<bt.length;Ao+=1){var Ni=fr(xr=bt[Ao])?xr(ln):xr;for(var zt in Ni)ln[zt]=zt==="className"?pn(ln[zt],Ni[zt]):zt==="style"?ye(ye({},ln[zt]),Ni[zt]):Ni[zt]}return Ne.className&&(ln.className=pn(ln.className,Ne.className)),ln}($,k,P),A=T.as||Oi,H={};for(var B in T)T[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&T.theme===P||(B==="forwardedAs"?H.as=T.forwardedAs:an&&!an(B,A)||(H[B]=T[B]));var on=function(bt,Ne){var ft=ms(),xr=bt.generateAndInjectStyles(Ne,ft.styleSheet,ft.stylis);return xr}(I,T),Ye=pn(nn,rn);return on&&(Ye+=" "+on),T.className&&(Ye+=" "+T.className),H[ll(A)&&!cp.has(A)?"class":"className"]=Ye,H.ref=z,mr.createElement(A,H)}(m,g,x)}c.displayName=d;var m=oe.forwardRef(c);return m.attrs=v,m.componentStyle=p,m.displayName=d,m.shouldForwardProp=y,m.foldedComponentIds=r?pn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(x){for(var S=[],k=1;k<arguments.length;k++)S[k-1]=arguments[k];for(var z=0,$=S;z<$.length;z++)ds(x,$[z],!0);return x}({},i.defaultProps,g):g}}),Ou(m,function(){return".".concat(m.styledComponentId)}),a&&gp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function cf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ff=function(e){return Object.assign(e,{isCss:!0})};function Cp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fr(e)||mi(e))return ff(Qt(cf(_o,pi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Qt(r):ff(Qt(cf(r,t)))}function hs(e,t,n){if(n===void 0&&(n=cr),!t)throw Pi(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Cp.apply(void 0,pi([i],a,!1)))};return r.attrs=function(i){return hs(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hs(e,t,ye(ye({},n),i))},r}var Pp=function(e){return hs(jv,e)},U=Pp;cp.forEach(function(e){U[e]=Pp(e)});var Iv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ep(t),Za.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(fs(Qt(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Za.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Lv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Cp.apply(void 0,pi([e],t,!1)),i="sc-global-".concat(pp(JSON.stringify(r))),a=new Iv(r,i),o=function(s){var u=ms(),f=oe.useContext(Nu),d=oe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(d,s,u.styleSheet,f,u.stylis),oe.useLayoutEffect(function(){if(!u.styleSheet.server)return l(d,s,u.styleSheet,f,u.stylis),function(){return a.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,f,u.stylis]),null};function l(s,u,f,d,h){if(a.isStatic)a.renderStyles(s,tv,f,h);else{var v=ye(ye({},u),{theme:up(u,d,o.defaultProps)});a.renderStyles(s,v,f,h)}}return oe.memo(o)}const Rv="/personal-portfolio/assets/background-AzhoXVGH.jpg",$v="/personal-portfolio/assets/foto-BVHngl_6.png";function df(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?df(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):df(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ja(e){"@babel/helpers - typeof";return Ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ja(e)}function Mv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fv(e,t,n){return t&&Dv(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tu(e,t){return Hv(e)||Wv(e,t)||_p(e,t)||Yv()}function _i(e){return Uv(e)||Bv(e)||_p(e)||Vv()}function Uv(e){if(Array.isArray(e))return vs(e)}function Hv(e){if(Array.isArray(e))return e}function Bv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function _p(e,t){if(e){if(typeof e=="string")return vs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vs(e,t)}}function vs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pf=function(){},Au={},bp={},zp=null,Op={mark:pf,measure:pf};try{typeof window<"u"&&(Au=window),typeof document<"u"&&(bp=document),typeof MutationObserver<"u"&&(zp=MutationObserver),typeof performance<"u"&&(Op=performance)}catch{}var Qv=Au.navigator||{},mf=Qv.userAgent,hf=mf===void 0?"":mf,Xt=Au,K=bp,vf=zp,Xi=Op;Xt.document;var _t=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Np=~hf.indexOf("MSIE")||~hf.indexOf("Trident/"),Zi,Ji,qi,ea,ta,St="___FONT_AWESOME___",gs=16,Tp="fa",Ap="svg-inline--fa",Pn="data-fa-i2svg",ys="data-fa-pseudo-element",Gv="data-fa-pseudo-element-pending",ju="data-prefix",Iu="data-icon",gf="fontawesome-i2svg",Kv="async",Xv=["HTML","HEAD","STYLE","SCRIPT"],jp=function(){try{return!0}catch{return!1}}(),Q="classic",te="sharp",Lu=[Q,te];function bi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var hi=bi((Zi={},se(Zi,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),se(Zi,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Zi)),vi=bi((Ji={},se(Ji,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Ji,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ji)),gi=bi((qi={},se(qi,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(qi,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),qi)),Zv=bi((ea={},se(ea,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(ea,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ea)),Jv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ip="fa-layers-text",qv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,eg=bi((ta={},se(ta,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(ta,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ta)),Lp=[1,2,3,4,5,6,7,8,9,10],tg=Lp.concat([11,12,13,14,15,16,17,18,19,20]),ng=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yi=new Set;Object.keys(vi[Q]).map(yi.add.bind(yi));Object.keys(vi[te]).map(yi.add.bind(yi));var rg=[].concat(Lu,_i(yi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mn.GROUP,mn.SWAP_OPACITY,mn.PRIMARY,mn.SECONDARY]).concat(Lp.map(function(e){return"".concat(e,"x")})).concat(tg.map(function(e){return"w-".concat(e)})),Gr=Xt.FontAwesomeConfig||{};function ig(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ag(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var og=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];og.forEach(function(e){var t=Tu(e,2),n=t[0],r=t[1],i=ag(ig(n));i!=null&&(Gr[r]=i)})}var Rp={styleDefault:"solid",familyDefault:"classic",cssPrefix:Tp,replacementClass:Ap,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gr.familyPrefix&&(Gr.cssPrefix=Gr.familyPrefix);var dr=_(_({},Rp),Gr);dr.autoReplaceSvg||(dr.observeMutations=!1);var O={};Object.keys(Rp).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){dr[e]=n,Kr.forEach(function(r){return r(O)})},get:function(){return dr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){dr.cssPrefix=t,Kr.forEach(function(n){return n(O)})},get:function(){return dr.cssPrefix}});Xt.FontAwesomeConfig=O;var Kr=[];function lg(e){return Kr.push(e),function(){Kr.splice(Kr.indexOf(e),1)}}var Nt=gs,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sg(e){if(!(!e||!_t)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var ug="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wi(){for(var e=12,t="";e-- >0;)t+=ug[Math.random()*62|0];return t}function yr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ru(e){return e.classList?yr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $p(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat($p(e[n]),'" ')},"").trim()}function bo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function $u(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function fg(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function dg(e){var t=e.transform,n=e.width,r=n===void 0?gs:n,i=e.height,a=i===void 0?gs:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Np?s+="translate(".concat(t.x/Nt-r/2,"em, ").concat(t.y/Nt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Nt,"em), calc(-50% + ").concat(t.y/Nt,"em)) "):s+="translate(".concat(t.x/Nt,"em, ").concat(t.y/Nt,"em) "),s+="scale(".concat(t.size/Nt*(t.flipX?-1:1),", ").concat(t.size/Nt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var pg=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mp(){var e=Tp,t=Ap,n=O.cssPrefix,r=O.replacementClass,i=pg;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var yf=!1;function ul(){O.autoAddCss&&!yf&&(sg(Mp()),yf=!0)}var mg={mixout:function(){return{dom:{css:Mp,insertCss:ul}}},hooks:function(){return{beforeDOMElementCreation:function(){ul()},beforeI2svg:function(){ul()}}}},Et=Xt||{};Et[St]||(Et[St]={});Et[St].styles||(Et[St].styles={});Et[St].hooks||(Et[St].hooks={});Et[St].shims||(Et[St].shims=[]);var Ze=Et[St],Dp=[],hg=function e(){K.removeEventListener("DOMContentLoaded",e),qa=1,Dp.map(function(t){return t()})},qa=!1;_t&&(qa=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),qa||K.addEventListener("DOMContentLoaded",hg));function vg(e){_t&&(qa?setTimeout(e,0):Dp.push(e))}function zi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?$p(e):"<".concat(t," ").concat(cg(r),">").concat(a.map(zi).join(""),"</").concat(t,">")}function wf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cl=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=n,s,u,f;for(r===void 0?(s=1,f=t[a[0]]):(s=0,f=r);s<o;s++)u=a[s],f=l(f,t[u],u,t);return f};function gg(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ws(e){var t=gg(e);return t.length===1?t[0].toString(16):null}function yg(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function xf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function xs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=xf(t);typeof Ze.hooks.addPack=="function"&&!i?Ze.hooks.addPack(e,xf(t)):Ze.styles[e]=_(_({},Ze.styles[e]||{}),a),e==="fas"&&xs("fa",t)}var na,ra,ia,Wn=Ze.styles,wg=Ze.shims,xg=(na={},se(na,Q,Object.values(gi[Q])),se(na,te,Object.values(gi[te])),na),Mu=null,Fp={},Up={},Hp={},Bp={},Wp={},kg=(ra={},se(ra,Q,Object.keys(hi[Q])),se(ra,te,Object.keys(hi[te])),ra);function Sg(e){return~rg.indexOf(e)}function Eg(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Sg(i)?i:null}var Vp=function(){var t=function(a){return cl(Wn,function(o,l,s){return o[s]=cl(l,a,{}),o},{})};Fp=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Up=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),Wp=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in Wn||O.autoFetchSvg,r=cl(wg,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Hp=r.names,Bp=r.unicodes,Mu=zo(O.styleDefault,{family:O.familyDefault})};lg(function(e){Mu=zo(e.styleDefault,{family:O.familyDefault})});Vp();function Du(e,t){return(Fp[e]||{})[t]}function Cg(e,t){return(Up[e]||{})[t]}function hn(e,t){return(Wp[e]||{})[t]}function Yp(e){return Hp[e]||{prefix:null,iconName:null}}function Pg(e){var t=Bp[e],n=Du("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zt(){return Mu}var Fu=function(){return{prefix:null,iconName:null,rest:[]}};function zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,i=hi[r][e],a=vi[r][e]||vi[r][i],o=e in Ze.styles?e:null;return a||o||null}var kf=(ia={},se(ia,Q,Object.keys(gi[Q])),se(ia,te,Object.keys(gi[te])),ia);function Oo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},se(t,Q,"".concat(O.cssPrefix,"-").concat(Q)),se(t,te,"".concat(O.cssPrefix,"-").concat(te)),t),o=null,l=Q;(e.includes(a[Q])||e.some(function(u){return kf[Q].includes(u)}))&&(l=Q),(e.includes(a[te])||e.some(function(u){return kf[te].includes(u)}))&&(l=te);var s=e.reduce(function(u,f){var d=Eg(O.cssPrefix,f);if(Wn[f]?(f=xg[l].includes(f)?Zv[l][f]:f,o=f,u.prefix=f):kg[l].indexOf(f)>-1?(o=f,u.prefix=zo(f,{family:l})):d?u.iconName=d:f!==O.replacementClass&&f!==a[Q]&&f!==a[te]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var h=o==="fa"?Yp(u.iconName):{},v=hn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||v||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Wn.far&&Wn.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},Fu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===te&&(Wn.fass||O.autoFetchSvg)&&(s.prefix="fass",s.iconName=hn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Zt()||"fas"),s}var _g=function(){function e(){Mv(this,e),this.definitions={}}return Fv(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=_(_({},n.definitions[l]||{}),o[l]),xs(l,o[l]);var s=gi[Q][l];s&&xs(s,o[l]),Vp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),Sf=[],Vn={},qn={},bg=Object.keys(qn);function zg(e,t){var n=t.mixoutsTo;return Sf=e,Vn={},Object.keys(qn).forEach(function(r){bg.indexOf(r)===-1&&delete qn[r]}),Sf.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ja(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Vn[o]||(Vn[o]=[]),Vn[o].push(a[o])})}r.provides&&r.provides(qn)}),n}function ks(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Vn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function _n(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vn[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ct(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qn[e]?qn[e].apply(null,t):void 0}function Ss(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Zt();if(t)return t=hn(n,t)||t,wf(Qp.definitions,n,t)||wf(Ze.styles,n,t)}var Qp=new _g,Og=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,_n("noAuto")},Ng={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _t?(_n("beforeI2svg",t),Ct("pseudoElements2svg",t),Ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,vg(function(){Ag({autoReplaceSvgRoot:n}),_n("watch",t)})}},Tg={icon:function(t){if(t===null)return null;if(Ja(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:hn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zo(t[0]);return{prefix:r,iconName:hn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(Jv))){var i=Oo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Zt(),iconName:hn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Zt();return{prefix:a,iconName:hn(a,t)||t}}}},Me={noAuto:Og,config:O,dom:Ng,parse:Tg,library:Qp,findIconDefinition:Ss,toHtml:zi},Ag=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Ze.styles).length>0||O.autoFetchSvg)&&_t&&O.autoReplaceSvg&&Me.dom.i2svg({node:r})};function No(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return zi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_t){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function jg(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if($u(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=bo(_(_({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Ig(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},i),{},{id:o}),children:r}]}]}function Uu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,v=h===void 0?!1:h,y=r.found?r:n,w=y.width,N=y.height,p=i==="fak",c=[O.replacementClass,a?"".concat(O.cssPrefix,"-").concat(a):""].filter(function($){return d.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(d.classes).join(" "),m={children:[],attributes:_(_({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(N)})},g=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/N*16*.0625,"em")}:{};v&&(m.attributes[Pn]=""),s&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||wi())},children:[s]}),delete m.attributes.title);var x=_(_({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:_(_({},g),d.styles)}),S=r.found&&n.found?Ct("generateAbstractMask",x)||{children:[],attributes:{}}:Ct("generateAbstractIcon",x)||{children:[],attributes:{}},k=S.children,z=S.attributes;return x.children=k,x.attributes=z,l?Ig(x):jg(x)}function Ef(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=_(_(_({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[Pn]="");var f=_({},o.styles);$u(i)&&(f.transform=dg({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=bo(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Lg(e){var t=e.content,n=e.title,r=e.extra,i=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=bo(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var fl=Ze.styles;function Es(e){var t=e[0],n=e[1],r=e.slice(4),i=Tu(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(mn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(mn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(mn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Rg={found:!1,width:512,height:512};function $g(e,t){!jp&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cs(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=Zt()),new Promise(function(r,i){if(Ct("missingIconAbstract"),n==="fa"){var a=Yp(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&fl[t]&&fl[t][e]){var o=fl[t][e];return r(Es(o))}$g(e,t),r(_(_({},Rg),{},{icon:O.showMissingIcons&&e?Ct("missingIconAbstract")||{}:{}}))})}var Cf=function(){},Ps=O.measurePerformance&&Xi&&Xi.mark&&Xi.measure?Xi:{mark:Cf,measure:Cf},$r='FA "6.5.2"',Mg=function(t){return Ps.mark("".concat($r," ").concat(t," begins")),function(){return Gp(t)}},Gp=function(t){Ps.mark("".concat($r," ").concat(t," ends")),Ps.measure("".concat($r," ").concat(t),"".concat($r," ").concat(t," begins"),"".concat($r," ").concat(t," ends"))},Hu={begin:Mg,end:Gp},Ea=function(){};function Pf(e){var t=e.getAttribute?e.getAttribute(Pn):null;return typeof t=="string"}function Dg(e){var t=e.getAttribute?e.getAttribute(ju):null,n=e.getAttribute?e.getAttribute(Iu):null;return t&&n}function Fg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function Ug(){if(O.autoReplaceSvg===!0)return Ca.replace;var e=Ca[O.autoReplaceSvg];return e||Ca.replace}function Hg(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function Bg(e){return K.createElement(e)}function Kp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hg:Bg:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Kp(o,{ceFn:r}))}),i}function Wg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ca={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Kp(i),n)}),n.getAttribute(Pn)===null&&O.keepOriginalSource){var r=K.createComment(Wg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ru(n).indexOf(O.replacementClass))return Ca.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===O.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return zi(l)}).join(`
`);n.setAttribute(Pn,""),n.innerHTML=o}};function _f(e){e()}function Xp(e,t){var n=typeof t=="function"?t:Ea;if(e.length===0)n();else{var r=_f;O.mutateApproach===Kv&&(r=Xt.requestAnimationFrame||_f),r(function(){var i=Ug(),a=Hu.begin("mutate");e.map(i),a(),n()})}}var Bu=!1;function Zp(){Bu=!0}function _s(){Bu=!1}var eo=null;function bf(e){if(vf&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Ea:t,r=e.nodeCallback,i=r===void 0?Ea:r,a=e.pseudoElementsCallback,o=a===void 0?Ea:a,l=e.observeMutationsRoot,s=l===void 0?K:l;eo=new vf(function(u){if(!Bu){var f=Zt();yr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Pf(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Pf(d.target)&&~ng.indexOf(d.attributeName))if(d.attributeName==="class"&&Dg(d.target)){var h=Oo(Ru(d.target)),v=h.prefix,y=h.iconName;d.target.setAttribute(ju,v||f),y&&d.target.setAttribute(Iu,y)}else Fg(d.target)&&i(d.target)})}}),_t&&eo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vg(){eo&&eo.disconnect()}function Yg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Qg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Oo(Ru(e));return i.prefix||(i.prefix=Zt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Cg(i.prefix,e.innerText)||Du(i.prefix,ws(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Gg(e){var t=yr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||wi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Kg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qg(e),r=n.iconName,i=n.prefix,a=n.rest,o=Gg(e),l=ks("parseNodeAttributes",{},e),s=t.styleParser?Yg(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Xg=Ze.styles;function Jp(e){var t=O.autoReplaceSvg==="nest"?zf(e,{styleParser:!1}):zf(e);return~t.extra.classes.indexOf(Ip)?Ct("generateLayersText",e,t):Ct("generateSvgReplacementMutation",e,t)}var Jt=new Set;Lu.map(function(e){Jt.add("fa-".concat(e))});Object.keys(hi[Q]).map(Jt.add.bind(Jt));Object.keys(hi[te]).map(Jt.add.bind(Jt));Jt=_i(Jt);function Of(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_t)return Promise.resolve();var n=K.documentElement.classList,r=function(d){return n.add("".concat(gf,"-").concat(d))},i=function(d){return n.remove("".concat(gf,"-").concat(d))},a=O.autoFetchSvg?Jt:Lu.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Xg));a.includes("fa")||a.push("fa");var o=[".".concat(Ip,":not([").concat(Pn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(Pn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=yr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Hu.begin("onTree"),u=l.reduce(function(f,d){try{var h=Jp(d);h&&f.push(h)}catch(v){jp||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){Xp(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function Zg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jp(e).then(function(n){n&&Xp([n],t)})}function Jg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ss(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ss(i||{})),e(r,_(_({},n),{},{mask:i}))}}var qg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?lt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,v=n.titleId,y=v===void 0?null:v,w=n.classes,N=w===void 0?[]:w,p=n.attributes,c=p===void 0?{}:p,m=n.styles,g=m===void 0?{}:m;if(t){var x=t.prefix,S=t.iconName,k=t.icon;return No(_({type:"icon"},t),function(){return _n("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?c["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||wi()):(c["aria-hidden"]="true",c.focusable="false")),Uu({icons:{main:Es(k),mask:s?Es(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:_(_({},lt),i),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:c,styles:g,classes:N}})})}},e2={mixout:function(){return{icon:Jg(qg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Of,n.nodeCallback=Zg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return Of(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(v,y){Promise.all([Cs(i,l),f.iconName?Cs(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var N=Tu(w,2),p=N[0],c=N[1];v([n,Uu({icons:{main:p,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=bo(l);s.length>0&&(i.style=s);var u;return $u(o)&&(u=Ct("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},t2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return No({type:"layer"},function(){_n("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(_i(a)).join(" ")},children:o}]})}}}},n2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return No({type:"counter",content:n},function(){return _n("beforeDOMElementCreation",{content:n,params:r}),Lg({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(_i(l))}})})}}}},r2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?lt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return No({type:"text",content:n},function(){return _n("beforeDOMElementCreation",{content:n,params:r}),Ef({content:n,transform:_(_({},lt),a),title:l,extra:{attributes:d,styles:v,classes:["".concat(O.cssPrefix,"-layers-text")].concat(_i(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(Np){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ef({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},i2=new RegExp('"',"ug"),Nf=[1105920,1112319];function a2(e){var t=e.replace(i2,""),n=yg(t,0),r=n>=Nf[0]&&n<=Nf[1],i=t.length===2?t[0]===t[1]:!1;return{value:ws(i?t[0]:t),isSecondary:r||i}}function Tf(e,t){var n="".concat(Gv).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=yr(e.children),o=a.filter(function(k){return k.getAttribute(ys)===t})[0],l=Xt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(qv),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?te:Q,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?vi[h][s[2].toLowerCase()]:eg[h][u],y=a2(d),w=y.value,N=y.isSecondary,p=s[0].startsWith("FontAwesome"),c=Du(v,w),m=c;if(p){var g=Pg(w);g.iconName&&g.prefix&&(c=g.iconName,v=g.prefix)}if(c&&!N&&(!o||o.getAttribute(ju)!==v||o.getAttribute(Iu)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var x=Kg(),S=x.extra;S.attributes[ys]=t,Cs(c,v).then(function(k){var z=Uu(_(_({},x),{},{icons:{main:k,mask:Fu()},prefix:v,iconName:m,extra:S,watchable:!0})),$=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore($,e.firstChild):e.appendChild($),$.outerHTML=z.map(function(I){return zi(I)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function o2(e){return Promise.all([Tf(e,"::before"),Tf(e,"::after")])}function l2(e){return e.parentNode!==document.head&&!~Xv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ys)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Af(e){if(_t)return new Promise(function(t,n){var r=yr(e.querySelectorAll("*")).filter(l2).map(o2),i=Hu.begin("searchPseudoElements");Zp(),Promise.all(r).then(function(){i(),_s(),t()}).catch(function(){i(),_s(),n()})})}var s2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Af,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;O.searchPseudoElements&&Af(i)}}},jf=!1,u2={mixout:function(){return{dom:{unwatch:function(){Zp(),jf=!0}}}},hooks:function(){return{bootstrap:function(){bf(ks("mutationObserverCallbacks",{}))},noAuto:function(){Vg()},watch:function(n){var r=n.observeMutationsRoot;jf?_s():bf(ks("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},If=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},c2={mixout:function(){return{parse:{transform:function(n){return If(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=If(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:d,path:h};return{tag:"g",attributes:_({},v.outer),children:[{tag:"g",attributes:_({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),v.path)}]}]}}}},dl={x:0,y:0,width:"100%",height:"100%"};function Lf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function f2(e){return e.tag==="g"?e.children:[e]}var d2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Oo(i.split(" ").map(function(o){return o.trim()})):Fu();return a.prefix||(a.prefix=Zt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,f=a.icon,d=o.width,h=o.icon,v=fg({transform:s,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:_(_({},dl),{},{fill:"white"})},w=f.children?{children:f.children.map(Lf)}:{},N={tag:"g",attributes:_({},v.inner),children:[Lf(_({tag:f.tag,attributes:_(_({},f.attributes),v.path)},w))]},p={tag:"g",attributes:_({},v.outer),children:[N]},c="mask-".concat(l||wi()),m="clip-".concat(l||wi()),g={tag:"mask",attributes:_(_({},dl),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:f2(h)},g]};return r.push(x,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(c,")")},dl)}),{children:r,attributes:i}}}},p2={provides:function(t){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:_(_({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:_(_({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:_(_({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:_(_({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},m2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},h2=[mg,e2,t2,n2,r2,s2,u2,c2,d2,p2,m2];zg(h2,{mixoutsTo:Me});Me.noAuto;Me.config;Me.library;Me.dom;var bs=Me.parse;Me.findIconDefinition;Me.toHtml;var v2=Me.icon;Me.layer;Me.text;Me.counter;var qp={exports:{}},g2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y2=g2,w2=y2;function em(){}function tm(){}tm.resetWarningCache=em;var x2=function(){function e(r,i,a,o,l,s){if(s!==w2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:tm,resetWarningCache:em};return n.PropTypes=n,n};qp.exports=x2();var k2=qp.exports;const L=Uf(k2);function Rf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rf(Object(n),!0).forEach(function(r){Yn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function to(e){"@babel/helpers - typeof";return to=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},to(e)}function Yn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function E2(e,t){if(e==null)return{};var n=S2(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zs(e){return C2(e)||P2(e)||_2(e)||b2()}function C2(e){if(Array.isArray(e))return Os(e)}function P2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _2(e,t){if(e){if(typeof e=="string")return Os(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Os(e,t)}}function Os(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,v=e.inverse,y=e.border,w=e.listItem,N=e.flip,p=e.size,c=e.rotation,m=e.pull,g=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":v,"fa-border":y,"fa-li":w,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Yn(t,"fa-".concat(p),typeof p<"u"&&p!==null),Yn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Yn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Yn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map(function(x){return g[x]?x:null}).filter(function(x){return x})}function O2(e){return e=e-0,e===e}function nm(e){return O2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var N2=["style"];function T2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=nm(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[T2(i)]=a:t[i]=a,t},{})}function rm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return rm(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=A2(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[nm(u)]=f}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=E2(n,N2);return i.attrs.style=at(at({},i.attrs.style),o),e.apply(void 0,[t.tag,at(at({},i.attrs),l)].concat(zs(r)))}var im=!1;try{im=!0}catch{}function j2(){if(!im&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $f(e){if(e&&to(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bs.icon)return bs.icon(e);if(e===null)return null;if(e&&to(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function pl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Yn({},e,t):{}}var Mf={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},vn=oe.forwardRef(function(e,t){var n=at(at({},Mf),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,l=n.title,s=n.titleId,u=n.maskId,f=$f(r),d=pl("classes",[].concat(zs(z2(n)),zs((o||"").split(" ")))),h=pl("transform",typeof n.transform=="string"?bs.transform(n.transform):n.transform),v=pl("mask",$f(i)),y=v2(f,at(at(at(at({},d),h),v),{},{symbol:a,title:l,titleId:s,maskId:u}));if(!y)return j2("Could not find icon",f),null;var w=y.abstract,N={ref:t};return Object.keys(n).forEach(function(p){Mf.hasOwnProperty(p)||(N[p]=n[p])}),I2(w[0],N)});vn.displayName="FontAwesomeIcon";vn.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};var I2=rm.bind(null,oe.createElement),L2={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},R2={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},$2={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},M2={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const am=()=>E.jsxs(D2,{children:[E.jsx("li",{children:E.jsx("a",{href:"https://github.com/LucasTomazin1",target:"_blank",rel:"noopener noreferrer",children:E.jsx(vn,{icon:M2})})}),E.jsx("li",{children:E.jsx("a",{href:"https://www.linkedin.com/in/lucas-tomazini-82042a301/",target:"_blank",rel:"noopener noreferrer",children:E.jsx(vn,{icon:R2})})}),E.jsx("li",{children:E.jsx("a",{href:"https://wa.me/5554996107420",target:"_blank",rel:"noopener noreferrer",children:E.jsx(vn,{icon:$2})})}),E.jsx("li",{children:E.jsx("a",{href:"mailto:lucasgtomazini@gmail.com",target:"_blank",rel:"noopener noreferrer",children:E.jsx(vn,{icon:L2})})})]}),D2=U.ul`
  display: flex;
  gap: 6rem;
  max-width: 100%;
  font-size: 3.5rem;
  transition: all 0.3s ease-out;
  margin-bottom: 4rem;
  justify-content: space-evenly;
  

  li:hover {
    transform: scale(1.08);
    color: #8257e6;
  }

  @media (max-width: 425px) {
    gap: 2rem;
    max-width: 100%;
    font-size: 2.5rem;
    margin-bottom: 2rem; 
  }
`,F2=()=>E.jsxs(U2,{children:[E.jsxs(H2,{children:[E.jsx("span",{children:"Olá, eu sou o"}),E.jsx("h1",{children:"Lucas Tomazini"}),E.jsx("p",{children:"Desenvolvedor Front-End"}),E.jsx(am,{})]}),E.jsx(B2,{children:E.jsx(W2,{src:$v,alt:"Lucas Tomazini"})})]}),U2=U.section`
  display: flex;
  justify-content: center;
  gap: 15rem;
  padding-top: 15rem;
  align-items: center;
  padding-top: 15rem;

  @media (max-width: 1024px) {
    gap: 10rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media (max-width: 425px) {
    gap: 3rem;
    padding-top: 10rem;
  }

`,H2=U.div`
  span {
    font-size: 4.5rem;
    color: #87cefa;
  }
  h1 {
    font-size: 6rem;
    color: #8257e6;
    margin-bottom: 0.5rem;
  }
  p {
    color: #a9a9a9;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    span {
      font-size: 4rem;
    }
    h1 {
      font-size: 5.5rem;
    }
    p {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    span {
      font-size: 3.5rem;
    }
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 425px) {
    span {
      font-size: 3rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 2.5rem;
    }
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`,B2=U.div`
  display: flex;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(135, 206, 250, 1)
  );
  border-radius: 50%;
  height: 36rem;
  width: 35rem;
  justify-content: center;
  border: solid 0.7rem rgba(130, 87, 230, 0.9);
  overflow: hidden;
  box-shadow: 5px 5px 50px rgba(173, 216, 230, 0.2);

  @media (max-width: 1024px) {
    height: 30rem;
    width: 30rem;
  }

  @media (max-width: 768px) {
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: 425px) {
    height: 20rem;
    width: 20rem;
  }

  @media (max-width: 320px) {
    height: 15rem;
    width: 15rem;
  }
`,W2=U.img`
  padding-left: 5rem;
  border-radius: 50%;

  @media (max-width: 1024px) {
    padding-left: 3.5rem;
  }

  @media (max-width: 425px) {
    padding-left: 3rem;
  }

  @media (max-width: 320px) {
    padding-left: 2rem;
  }
`;var om={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Df=oe.createContext&&oe.createContext(om),V2=["attr","size","title"];function Y2(e,t){if(e==null)return{};var n=Q2(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Q2(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}function Ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ff(Object(n),!0).forEach(function(r){G2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ff(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function G2(e,t,n){return t=K2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K2(e){var t=X2(e,"string");return typeof t=="symbol"?t:t+""}function X2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lm(e){return e&&e.map((t,n)=>oe.createElement(t.tag,ro({key:n},t.attr),lm(t.child)))}function ct(e){return t=>oe.createElement(Z2,no({attr:ro({},e.attr)},t),lm(e.child))}function Z2(e){var t=n=>{var{attr:r,size:i,title:a}=e,o=Y2(e,V2),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),oe.createElement("svg",no({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:ro(ro({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&oe.createElement("title",null,a),e.children)};return Df!==void 0?oe.createElement(Df.Consumer,null,n=>t(n)):t(om)}function J2(e){return ct({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function q2(e){return ct({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}var ey={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]};const ty=()=>{const[e,t]=mr.useState(!1),n=()=>{t(!e)};return E.jsx(ny,{children:E.jsxs(ry,{children:[E.jsx(oy,{onClick:n,children:e?E.jsx(q2,{}):E.jsx(J2,{})}),E.jsxs(ay,{isOpen:e,children:[E.jsx("li",{onClick:n,children:E.jsx(aa,{href:"#about",children:"Sobre mim"})}),E.jsx("li",{onClick:n,children:E.jsx(aa,{href:"#abilities",children:"Habilidades"})}),E.jsx("li",{onClick:n,children:E.jsx(aa,{href:"#projects",children:"Projetos"})}),E.jsx("li",{onClick:n,children:E.jsx(aa,{href:"#",target:"_blanc",children:"Curriculo"})})]}),E.jsx(iy,{children:"<DevLucasTomazini />"}),E.jsx(vn,{icon:ey})]})})},ny=U.header`
  width: 100vw;
  background-color: #13131b;
  border-bottom: solid 3px #8257e6;
  position: fixed;
  z-index: 1;
`,ry=U.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  font-size: 2rem;
`,aa=U.a`
  padding: 1rem;
`,iy=U.span`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 2rem;
    font-weight: 600;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
    font-weight: 600;
  }
`,ay=U.ul`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    background-color: #13131b;
    position: absolute;
    top: 80px;
    right: ${({isOpen:e})=>e?"0":"-100%"};
    width: 100%;
    height: calc(100vh - 80px);
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease-in-out;
  }

    @media (max-width: 425px){
    top: 60px;
    height: calc(100vh - 60px);
    }
`,oy=U.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`,ly=Lv`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        width: 100%;
        background-color: #13131f;
        color: #00FFFF;
        font-family: Montserrat, sans-serif;
        scroll-behavior: smooth;
    }

    a{
        text-decoration: none;
        color: #00FFFF;
    }
    a:hover {
        color: #87CEFA;
        font-weight: 500;
    }    
    li{
        list-style-type: none;
    }
    h2{
        font-size: 4rem;
        font-weight: 600;
        margin-bottom: 5rem;
    }
    h3{
        position: relative;
        display: inline-block;
        font-size: 2rem;
        font-weight: 600;
        padding-bottom: 0.5rem;
        margin-bottom: 3rem;
    }
        @media (max-width: 1024px) {
      h2 {
          font-size: 3.5rem;
      }
      h3 {
          font-size: 1.8rem;
      }
  }

  @media (max-width: 768px) {
      h2 {
          font-size: 3rem;
          margin-bottom: 4rem;
      }
      h3 {
          font-size: 1.6rem;
      }
  }

  @media (max-width: 425px) {
      h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
      }
      h3 {
          font-size: 1.4rem;
      }
  }

  @media (max-width: 320px) {
      h2 {
          font-size: 2rem;
                  margin-bottom: 2rem;
      }
      h3 {
          font-size: 1.2rem;
      }
  }
`,sy=()=>E.jsxs(uy,{id:"about",children:[E.jsx("h2",{children:"Sobre mim"}),E.jsx("p",{children:"Sou um desenvolvedor web apaixonado por tecnologia e novos aprendizados. Atualmente, estou me dedicando ao estudo intensivo, adquirindo habilidades em HTML, CSS, JavaScript, TypeScript e React. Tenho uma estrutura organizada para meus projetos e estou aprimorando tanto minhas competências práticas quanto comportamentais e habilidades interpessoais."}),E.jsx("p",{children:"Estou em busca de oportunidades que me permitam aprender com profissionais experientes e crescer na área de desenvolvimento web. Estou pronto para enfrentar novos desafios."})]}),uy=U.div`
  padding: 10rem;
  margin: 0 20rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 8rem;
    margin: 0 15rem;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    margin: 0 10rem;
    padding-top: 8.5rem;
  }

  @media (max-width: 425px) {
    padding: 4rem;
    margin: 0 5rem;
    padding-top: 8rem;
  }

  @media (max-width: 320px) {
    padding: 3rem;
    margin: 0;
    padding-top: 8rem;
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    color: #a9a9a9;
    line-height: 1.6;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 425px) {
      font-size: 1.4rem;
    }

    @media (max-width: 320px) {
      font-size: 1.2rem;
    }
  }
`;function cy(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(e)}function fy(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(e)}function dy(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},child:[]}]})(e)}function py(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(e)}function my(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(e)}function hy(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(e)}function vy(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"},child:[]}]})(e)}function gy(e){return ct({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}const sm={"HTML 5":py,"CSS 3":cy,JavaScript:my,React:hy,"Css-in-JS":vy,Git:fy,Github:dy,TypeScript:gy},Tt=({technology:e})=>{const t=sm[e];return E.jsxs(yy,{children:[E.jsx("h5",{children:e}),E.jsx(wy,{children:E.jsx(t,{})})]})},yy=U.li`
  width: 12rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  border-top-left-radius: 2.5rem;
  border-bottom: solid 3px #8257e6;
  transition: all 0.3s ease-out;

  h5 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.08);
    color: #8257e6;
    font-weight: 500;
  }

  media (max-width: 1024px) {
    width: 10rem;
    height: 10rem;

    h5 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 768px) {
    width: 9rem;
    height: 9rem;
    border-top-left-radius: 2rem;

    h5 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 425px) {
    width: 6rem;
    height: 7rem;
    border-top-left-radius: 1.2rem;
    border-bottom: solid 2px #8257e6;

    h5 {
      font-size: 1rem;
    }
  }

  @media (max-width: 320px) {
    width: 5rem;
    height: 6rem;
    border-top-left-radius: 1rem;
    h5 {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`,wy=U.div`
  font-size: 5rem;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`,xy=()=>E.jsxs(ky,{id:"abilities",children:[E.jsx("h2",{children:"Habilidades"}),E.jsxs(Sy,{children:[E.jsx(Tt,{technology:"HTML 5"}),E.jsx(Tt,{technology:"CSS 3"}),E.jsx(Tt,{technology:"JavaScript"}),E.jsx(Tt,{technology:"TypeScript"}),E.jsx(Tt,{technology:"React"}),E.jsx(Tt,{technology:"Css-in-JS"}),E.jsx(Tt,{technology:"Git"}),E.jsx(Tt,{technology:"Github"})]})]}),ky=U.section`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  media (max-width: 1024px) {
    padding: 8rem;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    padding-top: 8.5rem;
  }

  @media (max-width: 425px) {
    padding: 4rem;
    padding-top: 7rem;
  }

  @media (max-width: 320px) {
    padding: 2rem;
  }
`,Sy=U.ul`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 40vw;

  media (max-width: 1024px) {
    max-width: 45vw;
  }

  @media (max-width: 768px) {
    max-width: 55vw;
  }

  @media (max-width: 425px) {
    max-width: 70vw;
  }
`,Or=({title:e,src:t,link:n,Replink:r,technology:i})=>{const a=i.split(", ");return E.jsxs(Ey,{children:[E.jsxs(Cy,{href:n,target:"_blank",children:[E.jsx(_y,{src:t,alt:e}),E.jsxs(Py,{children:[E.jsx("h4",{children:e}),E.jsx(by,{className:i,children:a.map(o=>{const l=sm[o];return l?E.jsx(l,{},o):null})}),E.jsx("span",{children:" Ver no GitHub Pages"})]})]}),E.jsx(zy,{href:r,target:"_blank",children:E.jsx("span",{children:"Acessar repositório"})})]})},Ey=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-out;

  span {
    font-size: 1.7rem;
  }

  &:hover {
    transform: scale(1.08);
  }
`,Cy=U.a`
  display: flex;
  justify-content: center;
  max-width: 30rem;
  height: auto;
  position: relative;
  overflow: hidden;
  border-bottom: solid 3px #8257e6;
  border-top-left-radius: 3rem;
  &:hover + a {
    visibility: visible;
  }
`,Py=U.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h4 {
    font-size: 2rem;
    font-weight: 600;
  }
`,_y=U.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`,by=U.div`
  display: flex;
  font-size: 2.5rem;
  gap: 1rem;
`,zy=U.a`
  width: 100%;
  max-width: 38rem;
  background-color: #8257e6;
  text-align: center;
  padding: 1.5rem 2.28rem;
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.3s ease-out;
  border-bottom-right-radius: 3rem;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
  @media (max-width: 768px) {
    position: static;
    visibility: visible;
  }
`,Oy="/personal-portfolio/assets/api-github-CLUkwZHN.png",Ny="/personal-portfolio/assets/clone-gta-C_1fInBv.png",Ty="/personal-portfolio/assets/validacao-formulario-B2AilG8s.png",Ay="/personal-portfolio/assets/pokedex-BAPQyFZi.png",jy="/personal-portfolio/assets/e-commerce-DXL2z271.png",Nr="https://lucastomazin1.github.io/",Tr="https://github.com/LucasTomazin1/",Iy=()=>E.jsxs(Ry,{id:"projects",children:[E.jsx("h2",{children:"Projetos"}),E.jsxs(Ly,{children:[E.jsx("h3",{children:"Destaques"}),E.jsxs($y,{children:[E.jsx(Or,{title:"Pokédex",src:Ay,link:`${Nr}pokedex`,Replink:`${Tr}pokedex`,technology:"React, JavaScript, Css-in-JS"}),E.jsx(Or,{title:"E-commerce (em desenvolvimento)",src:jy,link:`${Nr}e-commerce`,Replink:`${Tr}e-commerce`,technology:"React, TypeScript, Css-in-JS"})]}),E.jsx("h3",{children:"Outros Projetos"}),E.jsxs(My,{children:[E.jsx(Or,{title:"GitHub API",src:Oy,link:`${Nr}quest-api-github`,Replink:`${Tr}quest-api-github`,technology:"HTML 5, CSS 3, JavaScript"}),E.jsx(Or,{title:"GTA V landing page",src:Ny,link:`${Nr}projeto-gta`,Replink:`${Tr}projeto-gta`,technology:"HTML 5, CSS 3, JavaScript"}),E.jsx(Or,{title:"Validação de formulário",src:Ty,link:`${Nr}quest-api-github`,Replink:`${Tr}quest-formulario-javascript`,technology:"HTML 5, CSS 3, JavaScript"})]})]})]}),Ly=U.div`
  h3 {
    align-self: flex-start;
  }
`,Ry=U.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;

  h3::after {
    content: "";
    display: block;
    width: 75%;
    border-bottom: solid 2px #8257e6;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    padding: 8rem;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    padding-top: 8rem;
  }

  @media (max-width: 425px) {
    padding: 4rem;
    padding-top: 8rem;
    }
    
    @media (max-width: 320px) {
        padding: 3rem;
        padding-top: 7rem;
  }
`,$y=U.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding-bottom: 8rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }

  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 320px) {
    padding-bottom: 3rem;
  }
`,My=U.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding-bottom: 8rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 6rem;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 320px) {
    padding-bottom: 3rem;
  }
`,Dy=()=>E.jsxs(Fy,{children:[E.jsx(am,{}),E.jsx("span",{children:"Designed and coded by Lucas Tomazini"})]}),Fy=U.section`
  background-color: #13131b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  width: 100%;
  max-width: 100vw;

  span {
    font-weight: 400;
    font-size: 2rem;
    color: #a9a9a9;
    opacity: 0.5;
    text-align: center;
  }

   @media (max-width: 425px) {
    padding: 2.5rem;
    
    span {
      font-size: 1.5rem; 
    }
  }
`;function Uy(){return E.jsxs(E.Fragment,{children:[E.jsx(ly,{}),E.jsx(ty,{}),E.jsxs(Hy,{children:[E.jsx(F2,{}),E.jsx(sy,{}),E.jsx(xy,{}),E.jsx(Iy,{})]}),E.jsx(Dy,{})]})}const Hy=U.div`
    width: 100%;
    background-size: cover;
    background-image: linear-gradient(
        to right,
        rgba(19, 19, 31, 0.9) 0%,
        rgba(19, 19, 31, 0.5) 50%,
        rgba(19, 19, 31, 1) 100%
    ),
    linear-gradient(
        to top,
        rgba(19, 19, 31, 0) 0%,
        rgba(19, 19, 31, 0.8) 50%,
        rgba(19, 19, 31, 0) 100%
    ),
    url(${Rv});
    background-size: contain;
    background-repeat: repeat-y;
    background-position: center top;
    opacity: 1;
`;ml.createRoot(document.getElementById("root")).render(E.jsx(oe.StrictMode,{children:E.jsx(Uy,{})}));
