var cI=Object.defineProperty;var hI=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var yr=(t,e,n)=>(hI(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xv={exports:{}},cu={},Lv={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),dI=Symbol.for("react.portal"),fI=Symbol.for("react.fragment"),pI=Symbol.for("react.strict_mode"),mI=Symbol.for("react.profiler"),gI=Symbol.for("react.provider"),yI=Symbol.for("react.context"),vI=Symbol.for("react.forward_ref"),wI=Symbol.for("react.suspense"),EI=Symbol.for("react.memo"),SI=Symbol.for("react.lazy"),Dm=Symbol.iterator;function _I(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,bv={};function es(t,e,n){this.props=t,this.context=e,this.refs=bv,this.updater=n||Mv}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=es.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=bv,this.updater=n||Mv}var lf=af.prototype=new Fv;lf.constructor=af;$v(lf,es.prototype);lf.isPureReactComponent=!0;var Om=Array.isArray,Uv=Object.prototype.hasOwnProperty,uf={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Uv.call(e,r)&&!Bv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:uf.current}}function II(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function TI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xm=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TI(""+t.key):e.toString(36)}function Wa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case dI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vc(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(xm,"$&/")+"/"),Wa(i,e,n,"",function(u){return u})):i!=null&&(cf(i)&&(i=II(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vc(s,a);o+=Wa(s,e,n,l,i)}else if(l=_I(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vc(s,a++),o+=Wa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var r=[],i=0;return Wa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Ka={transition:null},kI={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:uf};Q.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=es;Q.Fragment=fI;Q.Profiler=mI;Q.PureComponent=af;Q.StrictMode=pI;Q.Suspense=wI;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kI;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$v({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Uv.call(e,l)&&!Bv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:yI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gI,_context:t},t.Consumer=t};Q.createElement=Vv;Q.createFactory=function(t){var e=Vv.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:vI,render:t}};Q.isValidElement=cf;Q.lazy=function(t){return{$$typeof:SI,_payload:{_status:-1,_result:t},_init:CI}};Q.memo=function(t,e){return{$$typeof:EI,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return it.current.useCallback(t,e)};Q.useContext=function(t){return it.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return it.current.useDeferredValue(t)};Q.useEffect=function(t,e){return it.current.useEffect(t,e)};Q.useId=function(){return it.current.useId()};Q.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return it.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};Q.useRef=function(t){return it.current.useRef(t)};Q.useState=function(t){return it.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return it.current.useTransition()};Q.version="18.2.0";Lv.exports=Q;var k=Lv.exports;const NI=Ov(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AI=k,RI=Symbol.for("react.element"),PI=Symbol.for("react.fragment"),DI=Object.prototype.hasOwnProperty,OI=AI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xI={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DI.call(e,r)&&!xI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RI,type:t,key:s,ref:o,props:i,_owner:OI.current}}cu.Fragment=PI;cu.jsx=zv;cu.jsxs=zv;xv.exports=cu;var hf=xv.exports;const Zs=hf.Fragment,T=hf.jsx,W=hf.jsxs;var Th={},jv={exports:{}},Et={},Hv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,H){var K=O.length;O.push(H);e:for(;0<K;){var me=K-1>>>1,Ne=O[me];if(0<i(Ne,H))O[me]=H,O[K]=Ne,K=me;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],K=O.pop();if(K!==H){O[0]=K;e:for(var me=0,Ne=O.length,da=Ne>>>1;me<da;){var mr=2*(me+1)-1,yc=O[mr],gr=mr+1,fa=O[gr];if(0>i(yc,K))gr<Ne&&0>i(fa,yc)?(O[me]=fa,O[gr]=K,me=gr):(O[me]=yc,O[mr]=K,me=mr);else if(gr<Ne&&0>i(fa,K))O[me]=fa,O[gr]=K,me=gr;else break e}}return H}function i(O,H){var K=O.sortIndex-H.sortIndex;return K!==0?K:O.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=O)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function w(O){if(v=!1,p(O),!y)if(n(l)!==null)y=!0,mc(_);else{var H=n(u);H!==null&&gc(w,H.startTime-O)}}function _(O,H){y=!1,v&&(v=!1,g(R),R=-1),m=!0;var K=h;try{for(p(H),d=n(l);d!==null&&(!(d.expirationTime>H)||O&&!_e());){var me=d.callback;if(typeof me=="function"){d.callback=null,h=d.priorityLevel;var Ne=me(d.expirationTime<=H);H=t.unstable_now(),typeof Ne=="function"?d.callback=Ne:d===n(l)&&r(l),p(H)}else r(l);d=n(l)}if(d!==null)var da=!0;else{var mr=n(u);mr!==null&&gc(w,mr.startTime-H),da=!1}return da}finally{d=null,h=K,m=!1}}var I=!1,S=null,R=-1,V=5,b=-1;function _e(){return!(t.unstable_now()-b<V)}function rn(){if(S!==null){var O=t.unstable_now();b=O;var H=!0;try{H=S(!0,O)}finally{H?Ze():(I=!1,S=null)}}else I=!1}var Ze;if(typeof f=="function")Ze=function(){f(rn)};else if(typeof MessageChannel<"u"){var Pm=new MessageChannel,uI=Pm.port2;Pm.port1.onmessage=rn,Ze=function(){uI.postMessage(null)}}else Ze=function(){E(rn,0)};function mc(O){S=O,I||(I=!0,Ze())}function gc(O,H){R=E(function(){O(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,mc(_))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var K=h;h=H;try{return O()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=h;h=O;try{return H()}finally{h=K}},t.unstable_scheduleCallback=function(O,H,K){var me=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?me+K:me):K=me,O){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=K+Ne,O={id:c++,callback:H,priorityLevel:O,startTime:K,expirationTime:Ne,sortIndex:-1},K>me?(O.sortIndex=K,e(u,O),n(l)===null&&O===n(u)&&(v?(g(R),R=-1):v=!0,gc(w,K-me))):(O.sortIndex=Ne,e(l,O),y||m||(y=!0,mc(_))),O},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(O){var H=h;return function(){var K=h;h=H;try{return O.apply(this,arguments)}finally{h=K}}}})(Wv);Hv.exports=Wv;var LI=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=k,vt=LI;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qv=new Set,eo={};function Wr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(eo[t]=e,t=0;t<e.length;t++)qv.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,MI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Mm={};function $I(t){return Ch.call(Mm,t)?!0:Ch.call(Lm,t)?!1:MI.test(t)?Mm[t]=!0:(Lm[t]=!0,!1)}function bI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FI(t,e,n,r){if(e===null||typeof e>"u"||bI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);Fe[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);Fe[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);Fe[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FI(e,n,i,r)&&(n=null),r||i===null?$I(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),$m=Symbol.iterator;function ps(t){return t===null||typeof t!="object"?null:(t=$m&&t[$m]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,wc;function Ts(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Ec=!1;function Sc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function UI(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function Rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case kh:return"Profiler";case mf:return"StrictMode";case Nh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Gv:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:Rh(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Rh(t(e))}catch{}}return null}function BI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rh(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VI(t){var e=Jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=VI(t))}function Xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ph(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function Dh(t,e){Zv(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oh(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oh(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Cs(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function e0(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zI=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){zI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function i0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jI=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(t,e){if(e){if(jI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fh=null,_i=null,Ii=null;function Vm(t){if(t=Ho(t)){if(typeof Fh!="function")throw Error(N(280));var e=t.stateNode;e&&(e=mu(e),Fh(t.stateNode,t.type,e))}}function s0(t){_i?Ii?Ii.push(t):Ii=[t]:_i=t}function o0(){if(_i){var t=_i,e=Ii;if(Ii=_i=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function a0(t,e){return t(e)}function l0(){}var _c=!1;function u0(t,e,n){if(_c)return t(e,n);_c=!0;try{return a0(t,e,n)}finally{_c=!1,(_i!==null||Ii!==null)&&(l0(),o0())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Uh=!1;if(mn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Uh=!1}function HI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ms=!1,pl=null,ml=!1,Bh=null,WI={onError:function(t){Ms=!0,pl=t}};function KI(t,e,n,r,i,s,o,a,l){Ms=!1,pl=null,HI.apply(WI,arguments)}function qI(t,e,n,r,i,s,o,a,l){if(KI.apply(this,arguments),Ms){if(Ms){var u=pl;Ms=!1,pl=null}else throw Error(N(198));ml||(ml=!0,Bh=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(Kr(t)!==t)throw Error(N(188))}function GI(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zm(i),t;if(s===r)return zm(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function h0(t){return t=GI(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var f0=vt.unstable_scheduleCallback,jm=vt.unstable_cancelCallback,QI=vt.unstable_shouldYield,YI=vt.unstable_requestPaint,ge=vt.unstable_now,JI=vt.unstable_getCurrentPriorityLevel,wf=vt.unstable_ImmediatePriority,p0=vt.unstable_UserBlockingPriority,gl=vt.unstable_NormalPriority,XI=vt.unstable_LowPriority,m0=vt.unstable_IdlePriority,hu=null,Yt=null;function ZI(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:nT,eT=Math.log,tT=Math.LN2;function nT(t){return t>>>=0,t===0?32:31-(eT(t)/tT|0)|0}var va=64,wa=4194304;function ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ks(a):(s&=o,s!==0&&(r=ks(s)))}else o=n&~i,o!==0?r=ks(o):s!==0&&(r=ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function rT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=rT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function sT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,Sf,w0,E0,S0,zh=!1,Ea=[],jn=null,Hn=null,Wn=null,ro=new Map,io=new Map,On=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ho(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aT(t,e,n,r,i){switch(e){case"focusin":return jn=gs(jn,t,e,n,r,i),!0;case"dragenter":return Hn=gs(Hn,t,e,n,r,i),!0;case"mouseover":return Wn=gs(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ro.set(s,gs(ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,gs(io.get(s)||null,t,e,n,r,i)),!0}return!1}function _0(t){var e=Sr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=Ho(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Wm(t,e,n){qa(t)&&n.delete(e)}function lT(){zh=!1,jn!==null&&qa(jn)&&(jn=null),Hn!==null&&qa(Hn)&&(Hn=null),Wn!==null&&qa(Wn)&&(Wn=null),ro.forEach(Wm),io.forEach(Wm)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,lT)))}function so(t){function e(i){return ys(i,t)}if(0<Ea.length){ys(Ea[0],t);for(var n=1;n<Ea.length;n++){var r=Ea[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jn!==null&&ys(jn,t),Hn!==null&&ys(Hn,t),Wn!==null&&ys(Wn,t),ro.forEach(e),io.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&On.shift()}var Ti=Cn.ReactCurrentBatchConfig,vl=!0;function uT(t,e,n,r){var i=ee,s=Ti.transition;Ti.transition=null;try{ee=1,_f(t,e,n,r)}finally{ee=i,Ti.transition=s}}function cT(t,e,n,r){var i=ee,s=Ti.transition;Ti.transition=null;try{ee=4,_f(t,e,n,r)}finally{ee=i,Ti.transition=s}}function _f(t,e,n,r){if(vl){var i=jh(t,e,n,r);if(i===null)xc(t,e,r,wl,n),Hm(t,r);else if(aT(i,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<oT.indexOf(t)){for(;i!==null;){var s=Ho(i);if(s!==null&&v0(s),s=jh(t,e,n,r),s===null&&xc(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xc(t,e,r,null,n)}}var wl=null;function jh(t,e,n,r){if(wl=null,t=vf(r),t=Sr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JI()){case wf:return 1;case p0:return 4;case gl:case XI:return 16;case m0:return 536870912;default:return 16}default:return 16}}var Fn=null,If=null,Ga=null;function T0(){if(Ga)return Ga;var t,e=If,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Km(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sa:Km,this.isPropagationStopped=Km,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=St(ts),jo=he({},ts,{view:0,detail:0}),hT=St(jo),Tc,Cc,vs,du=he({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vs&&(vs&&t.type==="mousemove"?(Tc=t.screenX-vs.screenX,Cc=t.screenY-vs.screenY):Cc=Tc=0,vs=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),qm=St(du),dT=he({},du,{dataTransfer:0}),fT=St(dT),pT=he({},jo,{relatedTarget:0}),kc=St(pT),mT=he({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=St(mT),yT=he({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vT=St(yT),wT=he({},ts,{data:0}),Gm=St(wT),ET={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ST={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_T[t])?!!e[t]:!1}function Cf(){return IT}var TT=he({},jo,{key:function(t){if(t.key){var e=ET[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ST[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CT=St(TT),kT=he({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=St(kT),NT=he({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),AT=St(NT),RT=he({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),PT=St(RT),DT=he({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OT=St(DT),xT=[9,13,27,32],kf=mn&&"CompositionEvent"in window,$s=null;mn&&"documentMode"in document&&($s=document.documentMode);var LT=mn&&"TextEvent"in window&&!$s,C0=mn&&(!kf||$s&&8<$s&&11>=$s),Ym=String.fromCharCode(32),Jm=!1;function k0(t,e){switch(t){case"keyup":return xT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function MT(t,e){switch(t){case"compositionend":return N0(e);case"keypress":return e.which!==32?null:(Jm=!0,Ym);case"textInput":return t=e.data,t===Ym&&Jm?null:t;default:return null}}function $T(t,e){if(ai)return t==="compositionend"||!kf&&k0(t,e)?(t=T0(),Ga=If=Fn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C0&&e.locale!=="ko"?null:e.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bT[t.type]:e==="textarea"}function A0(t,e,n,r){s0(r),e=El(e,"onChange"),0<e.length&&(n=new Tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bs=null,oo=null;function FT(t){U0(t,0)}function fu(t){var e=ci(t);if(Xv(e))return t}function UT(t,e){if(t==="change")return e}var R0=!1;if(mn){var Nc;if(mn){var Ac="oninput"in document;if(!Ac){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Ac=typeof Zm.oninput=="function"}Nc=Ac}else Nc=!1;R0=Nc&&(!document.documentMode||9<document.documentMode)}function eg(){bs&&(bs.detachEvent("onpropertychange",P0),oo=bs=null)}function P0(t){if(t.propertyName==="value"&&fu(oo)){var e=[];A0(e,oo,t,vf(t)),u0(FT,e)}}function BT(t,e,n){t==="focusin"?(eg(),bs=e,oo=n,bs.attachEvent("onpropertychange",P0)):t==="focusout"&&eg()}function VT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(oo)}function zT(t,e){if(t==="click")return fu(e)}function jT(t,e){if(t==="input"||t==="change")return fu(e)}function HT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:HT;function ao(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ch.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function D0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O0(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WT(t){var e=O0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D0(n.ownerDocument.documentElement,n)){if(r!==null&&Nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ng(n,s);var o=ng(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KT=mn&&"documentMode"in document&&11>=document.documentMode,li=null,Hh=null,Fs=null,Wh=!1;function rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wh||li==null||li!==fl(r)||(r=li,"selectionStart"in r&&Nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&ao(Fs,r)||(Fs=r,r=El(Hh,"onSelect"),0<r.length&&(e=new Tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},Rc={},x0={};mn&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function pu(t){if(Rc[t])return Rc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return Rc[t]=e[n];return t}var L0=pu("animationend"),M0=pu("animationiteration"),$0=pu("animationstart"),b0=pu("transitionend"),F0=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){F0.set(t,e),Wr(e,[t])}for(var Pc=0;Pc<ig.length;Pc++){var Dc=ig[Pc],qT=Dc.toLowerCase(),GT=Dc[0].toUpperCase()+Dc.slice(1);lr(qT,"on"+GT)}lr(L0,"onAnimationEnd");lr(M0,"onAnimationIteration");lr($0,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(b0,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qI(r,e,void 0,t),t.currentTarget=null}function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sg(i,a,u),s=l}}}if(ml)throw t=Bh,ml=!1,Bh=null,t}function re(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var r=t+"__bubble";n.has(r)||(B0(e,t,2,!1),n.add(r))}function Oc(t,e,n){var r=0;e&&(r|=4),B0(n,t,r,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[Ia]){t[Ia]=!0,qv.forEach(function(n){n!=="selectionchange"&&(QT.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Oc("selectionchange",!1,e))}}function B0(t,e,n,r){switch(I0(e)){case 1:var i=uT;break;case 4:i=cT;break;default:i=_f}n=i.bind(null,e,n,t),i=void 0,!Uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u0(function(){var u=s,c=vf(n),d=[];e:{var h=F0.get(t);if(h!==void 0){var m=Tf,y=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":m=CT;break;case"focusin":y="focus",m=kc;break;case"focusout":y="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=fT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=AT;break;case L0:case M0:case $0:m=gT;break;case b0:m=PT;break;case"scroll":m=hT;break;case"wheel":m=OT;break;case"copy":case"cut":case"paste":m=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qm}var v=(e&4)!==0,E=!v&&t==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,g!==null&&(w=no(f,g),w!=null&&v.push(uo(f,w,p)))),E)break;f=f.return}0<v.length&&(h=new m(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==bh&&(y=n.relatedTarget||n.fromElement)&&(Sr(y)||y[gn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Sr(y):null,y!==null&&(E=Kr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=qm,w="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qm,w="onPointerLeave",g="onPointerEnter",f="pointer"),E=m==null?h:ci(m),p=y==null?h:ci(y),h=new v(w,f+"leave",m,n,c),h.target=E,h.relatedTarget=p,w=null,Sr(c)===u&&(v=new v(g,f+"enter",y,n,c),v.target=p,v.relatedTarget=E,w=v),E=w,m&&y)t:{for(v=m,g=y,f=0,p=v;p;p=ti(p))f++;for(p=0,w=g;w;w=ti(w))p++;for(;0<f-p;)v=ti(v),f--;for(;0<p-f;)g=ti(g),p--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=ti(v),g=ti(g)}v=null}else v=null;m!==null&&og(d,h,m,v,!1),y!==null&&E!==null&&og(d,E,y,v,!0)}}e:{if(h=u?ci(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var _=UT;else if(Xm(h))if(R0)_=jT;else{_=VT;var I=BT}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=zT);if(_&&(_=_(t,u))){A0(d,_,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Oh(h,"number",h.value)}switch(I=u?ci(u):window,t){case"focusin":(Xm(I)||I.contentEditable==="true")&&(li=I,Hh=u,Fs=null);break;case"focusout":Fs=Hh=li=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,rg(d,n,c);break;case"selectionchange":if(KT)break;case"keydown":case"keyup":rg(d,n,c)}var S;if(kf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ai?k0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(C0&&n.locale!=="ko"&&(ai||R!=="onCompositionStart"?R==="onCompositionEnd"&&ai&&(S=T0()):(Fn=c,If="value"in Fn?Fn.value:Fn.textContent,ai=!0)),I=El(u,R),0<I.length&&(R=new Gm(R,t,null,n,c),d.push({event:R,listeners:I}),S?R.data=S:(S=N0(n),S!==null&&(R.data=S)))),(S=LT?MT(t,n):$T(t,n))&&(u=El(u,"onBeforeInput"),0<u.length&&(c=new Gm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}U0(d,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(uo(t,s,i)),s=no(t,e),s!=null&&r.push(uo(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=no(n,s),l!=null&&o.unshift(uo(n,l,a))):i||(l=no(n,s),l!=null&&o.push(uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YT=/\r\n?/g,JT=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(YT,`
`).replace(JT,"")}function Ta(t,e,n){if(e=ag(e),ag(t)!==e&&n)throw Error(N(425))}function Sl(){}var Kh=null,qh=null;function Gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,XT=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,ZT=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(eC)}:Qh;function eC(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),Kt="__reactFiber$"+ns,co="__reactProps$"+ns,gn="__reactContainer$"+ns,Yh="__reactEvents$"+ns,tC="__reactListeners$"+ns,nC="__reactHandles$"+ns;function Sr(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[Kt])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Kt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function mu(t){return t[co]||null}var Jh=[],hi=-1;function ur(t){return{current:t}}function se(t){0>hi||(t.current=Jh[hi],Jh[hi]=null,hi--)}function ne(t,e){hi++,Jh[hi]=t.current,t.current=e}var ir={},Ye=ur(ir),lt=ur(!1),Or=ir;function Mi(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function _l(){se(lt),se(Ye)}function cg(t,e,n){if(Ye.current!==ir)throw Error(N(168));ne(Ye,e),ne(lt,n)}function V0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,BI(t)||"Unknown",i));return he({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Or=Ye.current,ne(Ye,t),ne(lt,lt.current),!0}function hg(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=V0(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,se(lt),se(Ye),ne(Ye,t)):se(lt),ne(lt,n)}var on=null,gu=!1,Mc=!1;function z0(t){on===null?on=[t]:on.push(t)}function rC(t){gu=!0,z0(t)}function cr(){if(!Mc&&on!==null){Mc=!0;var t=0,e=ee;try{var n=on;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}on=null,gu=!1}catch(i){throw on!==null&&(on=on.slice(t+1)),f0(wf,cr),i}finally{ee=e,Mc=!1}}return null}var di=[],fi=0,Tl=null,Cl=0,Tt=[],Ct=0,xr=null,an=1,ln="";function vr(t,e){di[fi++]=Cl,di[fi++]=Tl,Tl=t,Cl=e}function j0(t,e,n){Tt[Ct++]=an,Tt[Ct++]=ln,Tt[Ct++]=xr,xr=t;var r=an;t=ln;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,an=1<<32-Ft(e)+i|n<<i|r,ln=s+t}else an=1<<s|n<<i|r,ln=t}function Af(t){t.return!==null&&(vr(t,1),j0(t,1,0))}function Rf(t){for(;t===Tl;)Tl=di[--fi],di[fi]=null,Cl=di[--fi],di[fi]=null;for(;t===xr;)xr=Tt[--Ct],Tt[Ct]=null,ln=Tt[--Ct],Tt[Ct]=null,an=Tt[--Ct],Tt[Ct]=null}var pt=null,ft=null,ae=!1,$t=null;function H0(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:an,overflow:ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function Xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(ae){var e=ft;if(e){var n=e;if(!dg(t,e)){if(Xh(t))throw Error(N(418));e=Kn(n.nextSibling);var r=pt;e&&dg(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,ae=!1,pt=t)}}else{if(Xh(t))throw Error(N(418));t.flags=t.flags&-4097|2,ae=!1,pt=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function Ca(t){if(t!==pt)return!1;if(!ae)return fg(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gh(t.type,t.memoizedProps)),e&&(e=ft)){if(Xh(t))throw W0(),Error(N(418));for(;e;)H0(t,e),e=Kn(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?Kn(t.stateNode.nextSibling):null;return!0}function W0(){for(var t=ft;t;)t=Kn(t.nextSibling)}function $i(){ft=pt=null,ae=!1}function Pf(t){$t===null?$t=[t]:$t.push(t)}var iC=Cn.ReactCurrentBatchConfig;function Lt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var kl=ur(null),Nl=null,pi=null,Df=null;function Of(){Df=pi=Nl=null}function xf(t){var e=kl.current;se(kl),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){Nl=t,Df=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Df!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(Nl===null)throw Error(N(308));pi=t,Nl.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var _r=null;function Lf(t){_r===null?_r=[t]:_r.push(t)}function K0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lf(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Lf(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ef(t,n)}}function pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var i=t.updateQueue;Dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=he({},d,h);break e;case 2:Dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mr|=o,t.lanes=o,t.memoizedState=d}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var G0=new Kv.Component().refs;function td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yu={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Qn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Ut(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Qn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Ut(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=Qn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(Ut(e,t,r,n),Ya(e,t,r))}};function gg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function Q0(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=ut(e)?Or:Ye.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yu.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G0,Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=ut(e)?Or:Ye.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(td(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yu.enqueueReplaceState(i,i.state,null),Al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===G0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function Y0(t){function e(g,f){if(t){var p=g.deletions;p===null?(g.deletions=[f],g.flags|=16):p.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Yn(g,f),g.index=0,g.sibling=null,g}function s(g,f,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<f?(g.flags|=2,f):p):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,p,w){return f===null||f.tag!==6?(f=zc(p,g.mode,w),f.return=g,f):(f=i(f,p),f.return=g,f)}function l(g,f,p,w){var _=p.type;return _===oi?c(g,f,p.props.children,w,p.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&vg(_)===f.type)?(w=i(f,p.props),w.ref=ws(g,f,p),w.return=g,w):(w=nl(p.type,p.key,p.props,null,g.mode,w),w.ref=ws(g,f,p),w.return=g,w)}function u(g,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=jc(p,g.mode,w),f.return=g,f):(f=i(f,p.children||[]),f.return=g,f)}function c(g,f,p,w,_){return f===null||f.tag!==7?(f=Rr(p,g.mode,w,_),f.return=g,f):(f=i(f,p),f.return=g,f)}function d(g,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zc(""+f,g.mode,p),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ma:return p=nl(f.type,f.key,f.props,null,g.mode,p),p.ref=ws(g,null,f),p.return=g,p;case si:return f=jc(f,g.mode,p),f.return=g,f;case Pn:var w=f._init;return d(g,w(f._payload),p)}if(Cs(f)||ps(f))return f=Rr(f,g.mode,p,null),f.return=g,f;ka(g,f)}return null}function h(g,f,p,w){var _=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(g,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ma:return p.key===_?l(g,f,p,w):null;case si:return p.key===_?u(g,f,p,w):null;case Pn:return _=p._init,h(g,f,_(p._payload),w)}if(Cs(p)||ps(p))return _!==null?null:c(g,f,p,w,null);ka(g,p)}return null}function m(g,f,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(p)||null,a(f,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ma:return g=g.get(w.key===null?p:w.key)||null,l(f,g,w,_);case si:return g=g.get(w.key===null?p:w.key)||null,u(f,g,w,_);case Pn:var I=w._init;return m(g,f,p,I(w._payload),_)}if(Cs(w)||ps(w))return g=g.get(p)||null,c(f,g,w,_,null);ka(f,w)}return null}function y(g,f,p,w){for(var _=null,I=null,S=f,R=f=0,V=null;S!==null&&R<p.length;R++){S.index>R?(V=S,S=null):V=S.sibling;var b=h(g,S,p[R],w);if(b===null){S===null&&(S=V);break}t&&S&&b.alternate===null&&e(g,S),f=s(b,f,R),I===null?_=b:I.sibling=b,I=b,S=V}if(R===p.length)return n(g,S),ae&&vr(g,R),_;if(S===null){for(;R<p.length;R++)S=d(g,p[R],w),S!==null&&(f=s(S,f,R),I===null?_=S:I.sibling=S,I=S);return ae&&vr(g,R),_}for(S=r(g,S);R<p.length;R++)V=m(S,g,R,p[R],w),V!==null&&(t&&V.alternate!==null&&S.delete(V.key===null?R:V.key),f=s(V,f,R),I===null?_=V:I.sibling=V,I=V);return t&&S.forEach(function(_e){return e(g,_e)}),ae&&vr(g,R),_}function v(g,f,p,w){var _=ps(p);if(typeof _!="function")throw Error(N(150));if(p=_.call(p),p==null)throw Error(N(151));for(var I=_=null,S=f,R=f=0,V=null,b=p.next();S!==null&&!b.done;R++,b=p.next()){S.index>R?(V=S,S=null):V=S.sibling;var _e=h(g,S,b.value,w);if(_e===null){S===null&&(S=V);break}t&&S&&_e.alternate===null&&e(g,S),f=s(_e,f,R),I===null?_=_e:I.sibling=_e,I=_e,S=V}if(b.done)return n(g,S),ae&&vr(g,R),_;if(S===null){for(;!b.done;R++,b=p.next())b=d(g,b.value,w),b!==null&&(f=s(b,f,R),I===null?_=b:I.sibling=b,I=b);return ae&&vr(g,R),_}for(S=r(g,S);!b.done;R++,b=p.next())b=m(S,g,R,b.value,w),b!==null&&(t&&b.alternate!==null&&S.delete(b.key===null?R:b.key),f=s(b,f,R),I===null?_=b:I.sibling=b,I=b);return t&&S.forEach(function(rn){return e(g,rn)}),ae&&vr(g,R),_}function E(g,f,p,w){if(typeof p=="object"&&p!==null&&p.type===oi&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ma:e:{for(var _=p.key,I=f;I!==null;){if(I.key===_){if(_=p.type,_===oi){if(I.tag===7){n(g,I.sibling),f=i(I,p.props.children),f.return=g,g=f;break e}}else if(I.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&vg(_)===I.type){n(g,I.sibling),f=i(I,p.props),f.ref=ws(g,I,p),f.return=g,g=f;break e}n(g,I);break}else e(g,I);I=I.sibling}p.type===oi?(f=Rr(p.props.children,g.mode,w,p.key),f.return=g,g=f):(w=nl(p.type,p.key,p.props,null,g.mode,w),w.ref=ws(g,f,p),w.return=g,g=w)}return o(g);case si:e:{for(I=p.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(g,f.sibling),f=i(f,p.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=jc(p,g.mode,w),f.return=g,g=f}return o(g);case Pn:return I=p._init,E(g,f,I(p._payload),w)}if(Cs(p))return y(g,f,p,w);if(ps(p))return v(g,f,p,w);ka(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,p),f.return=g,g=f):(n(g,f),f=zc(p,g.mode,w),f.return=g,g=f),o(g)):n(g,f)}return E}var bi=Y0(!0),J0=Y0(!1),Wo={},Jt=ur(Wo),ho=ur(Wo),fo=ur(Wo);function Ir(t){if(t===Wo)throw Error(N(174));return t}function $f(t,e){switch(ne(fo,e),ne(ho,t),ne(Jt,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lh(e,t)}se(Jt),ne(Jt,e)}function Fi(){se(Jt),se(ho),se(fo)}function X0(t){Ir(fo.current);var e=Ir(Jt.current),n=Lh(e,t.type);e!==n&&(ne(ho,t),ne(Jt,n))}function bf(t){ho.current===t&&(se(Jt),se(ho))}var ue=ur(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function Ff(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var Ja=Cn.ReactCurrentDispatcher,bc=Cn.ReactCurrentBatchConfig,Lr=0,ce=null,Ie=null,Re=null,Pl=!1,Us=!1,po=0,sC=0;function Ue(){throw Error(N(321))}function Uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function Bf(t,e,n,r,i,s){if(Lr=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?uC:cC,t=n(r,i),Us){s=0;do{if(Us=!1,po=0,25<=s)throw Error(N(301));s+=1,Re=Ie=null,e.updateQueue=null,Ja.current=hC,t=n(r,i)}while(Us)}if(Ja.current=Dl,e=Ie!==null&&Ie.next!==null,Lr=0,Re=Ie=ce=null,Pl=!1,e)throw Error(N(300));return t}function Vf(){var t=po!==0;return po=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ce.memoizedState=Re=t:Re=Re.next=t,Re}function Ot(){if(Ie===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Re===null?ce.memoizedState:Re.next;if(e!==null)Re=e,Ie=t;else{if(t===null)throw Error(N(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Re===null?ce.memoizedState=Re=t:Re=Re.next=t}return Re}function mo(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ce.lanes|=c,Mr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Bt(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,Mr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z0(){}function e1(t,e){var n=ce,r=Ot(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,zf(r1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,go(9,n1.bind(null,n,r,i,e),void 0,null),Pe===null)throw Error(N(349));Lr&30||t1(n,e,i)}return i}function t1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n1(t,e,n,r){e.value=n,e.getSnapshot=r,i1(e)&&s1(t)}function r1(t,e,n){return n(function(){i1(e)&&s1(t)})}function i1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function s1(t){var e=yn(t,1);e!==null&&Ut(e,t,1,-1)}function wg(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=lC.bind(null,ce,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o1(){return Ot().memoizedState}function Xa(t,e,n,r){var i=Wt();ce.flags|=t,i.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Uf(r,o.deps)){i.memoizedState=go(e,n,s,r);return}}ce.flags|=t,i.memoizedState=go(1|e,n,s,r)}function Eg(t,e){return Xa(8390656,8,t,e)}function zf(t,e){return vu(2048,8,t,e)}function a1(t,e){return vu(4,2,t,e)}function l1(t,e){return vu(4,4,t,e)}function u1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c1(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,u1.bind(null,e,t),n)}function jf(){}function h1(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d1(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f1(t,e,n){return Lr&21?(Bt(n,e)||(n=g0(),ce.lanes|=n,Mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function oC(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=bc.transition;bc.transition={};try{t(!1),e()}finally{ee=n,bc.transition=r}}function p1(){return Ot().memoizedState}function aC(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m1(t))g1(e,n);else if(n=K0(t,e,n,r),n!==null){var i=nt();Ut(n,t,r,i),y1(n,e,r)}}function lC(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m1(t))g1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bt(a,o)){var l=e.interleaved;l===null?(i.next=i,Lf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=K0(t,e,i,r),n!==null&&(i=nt(),Ut(n,t,r,i),y1(n,e,r))}}function m1(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function g1(t,e){Us=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ef(t,n)}}var Dl={readContext:Dt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},uC={readContext:Dt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,u1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aC.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:jf,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=oC.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=Wt();if(ae){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),Pe===null)throw Error(N(349));Lr&30||t1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(r1.bind(null,r,s,t),[t]),r.flags|=2048,go(9,n1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Pe.identifierPrefix;if(ae){var n=ln,r=an;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cC={readContext:Dt,useCallback:h1,useContext:Dt,useEffect:zf,useImperativeHandle:c1,useInsertionEffect:a1,useLayoutEffect:l1,useMemo:d1,useReducer:Fc,useRef:o1,useState:function(){return Fc(mo)},useDebugValue:jf,useDeferredValue:function(t){var e=Ot();return f1(e,Ie.memoizedState,t)},useTransition:function(){var t=Fc(mo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1},hC={readContext:Dt,useCallback:h1,useContext:Dt,useEffect:zf,useImperativeHandle:c1,useInsertionEffect:a1,useLayoutEffect:l1,useMemo:d1,useReducer:Uc,useRef:o1,useState:function(){return Uc(mo)},useDebugValue:jf,useDeferredValue:function(t){var e=Ot();return Ie===null?e.memoizedState=t:f1(e,Ie.memoizedState,t)},useTransition:function(){var t=Uc(mo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1};function Ui(t,e){try{var n="",r=e;do n+=UI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dC=typeof WeakMap=="function"?WeakMap:Map;function v1(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xl||(xl=!0,fd=r),rd(t,e)},n}function w1(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kC.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var fC=Cn.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?J0(e,null,n,r):bi(e,t.child,n,r)}function Tg(t,e,n,r,i){n=n.render;var s=e.ref;return Ci(e,i),r=Bf(t,e,n,r,s,i),n=Vf(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ae&&n&&Af(e),e.flags|=1,et(t,e,r,i),e.child)}function Cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E1(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function E1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,vn(t,e,i)}return id(t,e,n,r,i)}function S1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(gi,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(gi,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(gi,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(gi,dt),dt|=r;return et(t,e,i,n),e.child}function _1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,r,i){var s=ut(n)?Or:Ye.current;return s=Mi(e,s),Ci(e,i),n=Bf(t,e,n,r,s,i),r=Vf(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ae&&r&&Af(e),e.flags|=1,et(t,e,n,i),e.child)}function kg(t,e,n,r,i){if(ut(n)){var s=!0;Il(e)}else s=!1;if(Ci(e,i),e.stateNode===null)Za(t,e),Q0(e,n,r),nd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ut(n)?Or:Ye.current,u=Mi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yg(e,o,r,u),Dn=!1;var h=e.memoizedState;o.state=h,Al(e,r,o,i),l=e.memoizedState,a!==r||h!==l||lt.current||Dn?(typeof c=="function"&&(td(e,n,c,r),l=e.memoizedState),(a=Dn||gg(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Lt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ut(n)?Or:Ye.current,l=Mi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&yg(e,o,r,l),Dn=!1,h=e.memoizedState,o.state=h,Al(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||lt.current||Dn?(typeof m=="function"&&(td(e,n,m,r),y=e.memoizedState),(u=Dn||gg(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return sd(t,e,n,r,s,i)}function sd(t,e,n,r,i,s){_1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hg(e,n,!1),vn(t,e,s);r=e.stateNode,fC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bi(e,t.child,null,s),e.child=bi(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&hg(e,n,!0),e.child}function I1(t){var e=t.stateNode;e.pendingContext?cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cg(t,e.context,!1),$f(t,e.containerInfo)}function Ng(t,e,n,r,i){return $i(),Pf(i),e.flags|=256,et(t,e,n,r),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function T1(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(ue,i&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=od,t):Hf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yn(a,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=od,r}return s=t.child,t=s.sibling,r=Yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hf(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&Pf(r),bi(e,t.child,null,n),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(N(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Su({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bi(e,t.child,null,o),e.child.memoizedState=ad(o),e.memoizedState=od,s);if(!(e.mode&1))return Na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Bc(s,r,void 0),Na(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),Ut(r,t,i,-1))}return Yf(),r=Bc(Error(N(421))),Na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=Kn(i.nextSibling),pt=e,ae=!0,$t=null,t!==null&&(Tt[Ct++]=an,Tt[Ct++]=ln,Tt[Ct++]=xr,an=t.id,ln=t.overflow,xr=e),e=Hf(e,r.children),e.flags|=4096,e)}function Ag(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ed(t.return,e,n)}function Vc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,n,e);else if(t.tag===19)Ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mC(t,e,n){switch(e.tag){case 3:I1(e),$i();break;case 5:X0(e);break;case 1:ut(e.type)&&Il(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),e.flags|=128,null):n&e.child.childLanes?T1(t,e,n):(ne(ue,ue.current&1),t=vn(t,e,n),t!==null?t.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return e.lanes=0,S1(t,e,n)}return vn(t,e,n)}var k1,ld,N1,A1;k1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};N1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(Jt.current);var s=null;switch(n){case"input":i=Ph(t,i),r=Ph(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}Mh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Es(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gC(t,e,n){var r=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return ut(e.type)&&_l(),Be(e),null;case 3:return r=e.stateNode,Fi(),se(lt),se(Ye),Ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(gd($t),$t=null))),ld(t,e),Be(e),null;case 5:bf(e);var i=Ir(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)N1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Be(e),null}if(t=Ir(Jt.current),Ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[co]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ns.length;i++)re(Ns[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":bm(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Um(r,s),re("invalid",r)}Mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,a,t),i=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":ga(r),Fm(r,s,!0);break;case"textarea":ga(r),Bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[co]=r,k1(t,e,!1,!1),e.stateNode=t;e:{switch(o=$h(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ns.length;i++)re(Ns[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":bm(t,r),i=Ph(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),re("invalid",t);break;case"textarea":Um(t,r),i=xh(t,r),re("invalid",t);break;default:i=r}Mh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?i0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&pf(t,s,l,o))}switch(n){case"input":ga(t),Fm(t,r,!1);break;case"textarea":ga(t),Bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)A1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Ir(fo.current),Ir(Jt.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Be(e),null;case 13:if(se(ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&ft!==null&&e.mode&1&&!(e.flags&128))W0(),$i(),e.flags|=98560,s=!1;else if(s=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Kt]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else $t!==null&&(gd($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?Ce===0&&(Ce=3):Yf())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return Fi(),ld(t,e),t===null&&lo(e.stateNode.containerInfo),Be(e),null;case 10:return xf(e.type._context),Be(e),null;case 17:return ut(e.type)&&_l(),Be(e),null;case 19:if(se(ue),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Es(s,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Bi&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Be(e),null}else 2*ge()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function yC(t,e){switch(Rf(e),e.tag){case 1:return ut(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(),se(lt),se(Ye),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(se(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ue),null;case 4:return Fi(),null;case 10:return xf(e.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var Aa=!1,je=!1,vC=typeof WeakSet=="function"?WeakSet:Set,D=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function ud(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Rg=!1;function wC(t,e){if(Kh=vl,t=O0(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qh={focusedElem:t,selectionRange:n},vl=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Lt(e.type,v),E);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=Rg,Rg=!1,y}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ud(e,n,s)}i=i.next}while(i!==r)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R1(t){var e=t.alternate;e!==null&&(t.alternate=null,R1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[co],delete e[Yh],delete e[tC],delete e[nC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P1(t){return t.tag===5||t.tag===3||t.tag===4}function Pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var xe=null,Mt=!1;function An(t,e,n){for(n=n.child;n!==null;)D1(t,e,n),n=n.sibling}function D1(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:je||mi(n,e);case 6:var r=xe,i=Mt;xe=null,An(t,e,n),xe=r,Mt=i,xe!==null&&(Mt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Mt?(t=xe,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),so(t)):Lc(xe,n.stateNode));break;case 4:r=xe,i=Mt,xe=n.stateNode.containerInfo,Mt=!0,An(t,e,n),xe=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ud(n,e,o),i=i.next}while(i!==r)}An(t,e,n);break;case 1:if(!je&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,An(t,e,n),je=r):An(t,e,n);break;default:An(t,e,n)}}function Dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vC),e.forEach(function(r){var i=AC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,Mt=!1;break e;case 3:xe=a.stateNode.containerInfo,Mt=!0;break e;case 4:xe=a.stateNode.containerInfo,Mt=!0;break e}a=a.return}if(xe===null)throw Error(N(160));D1(s,o,i),xe=null,Mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O1(e,t),e=e.sibling}function O1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Ht(t),r&4){try{Bs(3,t,t.return),wu(3,t)}catch(v){fe(t,t.return,v)}try{Bs(5,t,t.return)}catch(v){fe(t,t.return,v)}}break;case 1:xt(e,t),Ht(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(xt(e,t),Ht(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{to(i,"")}catch(v){fe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zv(i,s),$h(a,o);var u=$h(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?i0(i,d):c==="dangerouslySetInnerHTML"?n0(i,d):c==="children"?to(i,d):pf(i,c,d,u)}switch(a){case"input":Dh(i,s);break;case"textarea":e0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Si(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[co]=s}catch(v){fe(t,t.return,v)}}break;case 6:if(xt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){fe(t,t.return,v)}}break;case 3:if(xt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(v){fe(t,t.return,v)}break;case 4:xt(e,t),Ht(t);break;case 13:xt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qf=ge())),r&4&&Dg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(je=(u=je)||c,xt(e,t),je=u):xt(e,t),Ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(h=D,m=h.child,h.tag){case 0:case 11:case 14:case 15:Bs(4,h,h.return);break;case 1:mi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:mi(h,h.return);break;case 22:if(h.memoizedState!==null){xg(d);continue}}m!==null?(m.return=h,D=m):xg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r0("display",o))}catch(v){fe(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){fe(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xt(e,t),Ht(t),r&4&&Dg(t);break;case 21:break;default:xt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var s=Pg(t);dd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pg(t);hd(t,a,o);break;default:throw Error(N(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EC(t,e,n){D=t,x1(t)}function x1(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Aa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=Aa;var u=je;if(Aa=o,(je=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Lg(i):l!==null?(l.return=o,D=l):Lg(i);for(;s!==null;)D=s,x1(s),s=s.sibling;D=i,Aa=a,je=u}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Og(t)}}function Og(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&so(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}je||e.flags&512&&cd(e)}catch(h){fe(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function xg(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Lg(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{cd(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{cd(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var SC=Math.ceil,Ol=Cn.ReactCurrentDispatcher,Wf=Cn.ReactCurrentOwner,Rt=Cn.ReactCurrentBatchConfig,J=0,Pe=null,Se=null,$e=0,dt=0,gi=ur(0),Ce=0,yo=null,Mr=0,Eu=0,Kf=0,Vs=null,ot=null,qf=0,Bi=1/0,sn=null,xl=!1,fd=null,Gn=null,Ra=!1,Un=null,Ll=0,zs=0,pd=null,el=-1,tl=0;function nt(){return J&6?ge():el!==-1?el:el=ge()}function Qn(t){return t.mode&1?J&2&&$e!==0?$e&-$e:iC.transition!==null?(tl===0&&(tl=g0()),tl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t):1}function Ut(t,e,n,r){if(50<zs)throw zs=0,pd=null,Error(N(185));zo(t,n,r),(!(J&2)||t!==Pe)&&(t===Pe&&(!(J&2)&&(Eu|=n),Ce===4&&xn(t,$e)),ct(t,r),n===1&&J===0&&!(e.mode&1)&&(Bi=ge()+500,gu&&cr()))}function ct(t,e){var n=t.callbackNode;iT(t,e);var r=yl(t,t===Pe?$e:0);if(r===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?rC(Mg.bind(null,t)):z0(Mg.bind(null,t)),ZT(function(){!(J&6)&&cr()}),n=null;else{switch(y0(r)){case 1:n=wf;break;case 4:n=p0;break;case 16:n=gl;break;case 536870912:n=m0;break;default:n=gl}n=V1(n,L1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L1(t,e){if(el=-1,tl=0,J&6)throw Error(N(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=yl(t,t===Pe?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=J;J|=2;var s=$1();(Pe!==t||$e!==e)&&(sn=null,Bi=ge()+500,Ar(t,e));do try{TC();break}catch(a){M1(t,a)}while(1);Of(),Ol.current=s,J=i,Se!==null?e=0:(Pe=null,$e=0,e=Ce)}if(e!==0){if(e===2&&(i=Vh(t),i!==0&&(r=i,e=md(t,i))),e===1)throw n=yo,Ar(t,0),xn(t,r),ct(t,ge()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!_C(i)&&(e=Ml(t,r),e===2&&(s=Vh(t),s!==0&&(r=s,e=md(t,s))),e===1))throw n=yo,Ar(t,0),xn(t,r),ct(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:wr(t,ot,sn);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=qf+500-ge(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qh(wr.bind(null,t,ot,sn),e);break}wr(t,ot,sn);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SC(r/1960))-r,10<r){t.timeoutHandle=Qh(wr.bind(null,t,ot,sn),r);break}wr(t,ot,sn);break;case 5:wr(t,ot,sn);break;default:throw Error(N(329))}}}return ct(t,ge()),t.callbackNode===n?L1.bind(null,t):null}function md(t,e){var n=Vs;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=ot,ot=n,e!==null&&gd(e)),t}function gd(t){ot===null?ot=t:ot.push.apply(ot,t)}function _C(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~Kf,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if(J&6)throw Error(N(327));ki();var e=yl(t,0);if(!(e&1))return ct(t,ge()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Vh(t);r!==0&&(e=r,n=md(t,r))}if(n===1)throw n=yo,Ar(t,0),xn(t,e),ct(t,ge()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,ot,sn),ct(t,ge()),null}function Gf(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(Bi=ge()+500,gu&&cr())}}function $r(t){Un!==null&&Un.tag===0&&!(J&6)&&ki();var e=J;J|=1;var n=Rt.transition,r=ee;try{if(Rt.transition=null,ee=1,t)return t()}finally{ee=r,Rt.transition=n,J=e,!(J&6)&&cr()}}function Qf(){dt=gi.current,se(gi)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XT(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_l();break;case 3:Fi(),se(lt),se(Ye),Ff();break;case 5:bf(r);break;case 4:Fi();break;case 13:se(ue);break;case 19:se(ue);break;case 10:xf(r.type._context);break;case 22:case 23:Qf()}n=n.return}if(Pe=t,Se=t=Yn(t.current,null),$e=dt=e,Ce=0,yo=null,Kf=Eu=Mr=0,ot=Vs=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function M1(t,e){do{var n=Se;try{if(Of(),Ja.current=Dl,Pl){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(Lr=0,Re=Ie=ce=null,Us=!1,po=0,Wf.current=null,n===null||n.return===null){Ce=1,yo=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=_g(o);if(m!==null){m.flags&=-257,Ig(m,o,a,s,e),m.mode&1&&Sg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Sg(s,u,e),Yf();break e}l=Error(N(426))}}else if(ae&&a.mode&1){var E=_g(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ig(E,o,a,s,e),Pf(Ui(l,a));break e}}s=l=Ui(l,a),Ce!==4&&(Ce=2),Vs===null?Vs=[s]:Vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=v1(s,l,e);pg(s,g);break e;case 1:a=l;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gn===null||!Gn.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=w1(s,a,e);pg(s,w);break e}}s=s.return}while(s!==null)}F1(n)}catch(_){e=_,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function $1(){var t=Ol.current;return Ol.current=Dl,t===null?Dl:t}function Yf(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Pe===null||!(Mr&268435455)&&!(Eu&268435455)||xn(Pe,$e)}function Ml(t,e){var n=J;J|=2;var r=$1();(Pe!==t||$e!==e)&&(sn=null,Ar(t,e));do try{IC();break}catch(i){M1(t,i)}while(1);if(Of(),J=n,Ol.current=r,Se!==null)throw Error(N(261));return Pe=null,$e=0,Ce}function IC(){for(;Se!==null;)b1(Se)}function TC(){for(;Se!==null&&!QI();)b1(Se)}function b1(t){var e=B1(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?F1(t):Se=e,Wf.current=null}function F1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yC(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,Se=null;return}}else if(n=gC(n,e,dt),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);Ce===0&&(Ce=5)}function wr(t,e,n){var r=ee,i=Rt.transition;try{Rt.transition=null,ee=1,CC(t,e,n,r)}finally{Rt.transition=i,ee=r}return null}function CC(t,e,n,r){do ki();while(Un!==null);if(J&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sT(t,s),t===Pe&&(Se=Pe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,V1(gl,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=ee;ee=1;var a=J;J|=4,Wf.current=null,wC(t,n),O1(n,t),WT(qh),vl=!!Kh,qh=Kh=null,t.current=n,EC(n),YI(),J=a,ee=o,Rt.transition=s}else t.current=n;if(Ra&&(Ra=!1,Un=t,Ll=i),s=t.pendingLanes,s===0&&(Gn=null),ZI(n.stateNode),ct(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,t=fd,fd=null,t;return Ll&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===pd?zs++:(zs=0,pd=t):zs=0,cr(),null}function ki(){if(Un!==null){var t=y0(Ll),e=Rt.transition,n=ee;try{if(Rt.transition=null,ee=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,Ll=0,J&6)throw Error(N(331));var i=J;for(J|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Bs(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var h=c.sibling,m=c.return;if(R1(c),c===u){D=null;break}if(h!==null){h.return=m,D=h;break}D=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,D=p;else e:for(o=f;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(_){fe(a,a.return,_)}if(a===o){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if(J=i,cr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{ee=n,Rt.transition=e}}return!1}function $g(t,e,n){e=Ui(n,e),e=v1(t,e,1),t=qn(t,e,1),e=nt(),t!==null&&(zo(t,1,e),ct(t,e))}function fe(t,e,n){if(t.tag===3)$g(t,t,n);else for(;e!==null;){if(e.tag===3){$g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){t=Ui(n,t),t=w1(e,t,1),e=qn(e,t,1),t=nt(),e!==null&&(zo(e,1,t),ct(e,t));break}}e=e.return}}function kC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Pe===t&&($e&n)===n&&(Ce===4||Ce===3&&($e&130023424)===$e&&500>ge()-qf?Ar(t,0):Kf|=n),ct(t,e)}function U1(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=nt();t=yn(t,e),t!==null&&(zo(t,e,n),ct(t,n))}function NC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U1(t,n)}function AC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),U1(t,n)}var B1;B1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,mC(t,e,n);at=!!(t.flags&131072)}else at=!1,ae&&e.flags&1048576&&j0(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Mi(e,Ye.current);Ci(e,n),i=Bf(null,e,r,t,i,n);var s=Vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mf(e),i.updater=yu,e.stateNode=i,i._reactInternals=e,nd(e,r,t,n),e=sd(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&Af(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=PC(r),t=Lt(r,t),i){case 0:e=id(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=Cg(null,e,r,Lt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),id(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),kg(t,e,r,i,n);case 3:e:{if(I1(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q0(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ui(Error(N(423)),e),e=Ng(t,e,r,n,i);break e}else if(r!==i){i=Ui(Error(N(424)),e),e=Ng(t,e,r,n,i);break e}else for(ft=Kn(e.stateNode.containerInfo.firstChild),pt=e,ae=!0,$t=null,n=J0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=vn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return X0(e),t===null&&Zh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gh(r,i)?o=null:s!==null&&Gh(r,s)&&(e.flags|=32),_1(t,e),et(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return T1(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Tg(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(kl,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!lt.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ed(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ed(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ci(e,n),i=Dt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),Cg(t,e,r,i,n);case 15:return E1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Za(t,e),e.tag=1,ut(r)?(t=!0,Il(e)):t=!1,Ci(e,n),Q0(e,r,i),nd(e,r,i,n),sd(null,e,r,!0,t,n);case 19:return C1(t,e,n);case 22:return S1(t,e,n)}throw Error(N(156,e.tag))};function V1(t,e){return f0(t,e)}function RC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new RC(t,e,n,r)}function Jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PC(t){if(typeof t=="function")return Jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===yf)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Rr(n.children,i,s,e);case mf:o=8,i|=8;break;case kh:return t=At(12,n,e,i|2),t.elementType=kh,t.lanes=s,t;case Nh:return t=At(13,n,e,i),t.elementType=Nh,t.lanes=s,t;case Ah:return t=At(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case Yv:return Su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gv:o=10;break e;case Qv:o=9;break e;case gf:o=11;break e;case yf:o=14;break e;case Pn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=At(22,t,r,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,r,i,s,o,a,l){return t=new DC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function OC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function z1(t){if(!t)return ir;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(ut(n))return V0(t,n,e)}return e}function j1(t,e,n,r,i,s,o,a,l){return t=Xf(n,r,!0,t,i,s,o,a,l),t.context=z1(null),n=t.current,r=nt(),i=Qn(n),s=dn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,zo(t,i,r),ct(t,r),t}function _u(t,e,n,r){var i=e.current,s=nt(),o=Qn(i);return n=z1(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(Ut(t,i,o,s),Ya(t,i,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function xC(){return null}var H1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ep(t){this._internalRoot=t}Iu.prototype.render=ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));_u(t,e,null,null)};Iu.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){_u(null,t,null,null)}),e[gn]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=E0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&_0(t)}};function tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function LC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$l(o);s.call(u)}}var o=j1(e,r,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=o,t[gn]=o.current,lo(t.nodeType===8?t.parentNode:t),$r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$l(l);a.call(u)}}var l=Xf(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=l,t[gn]=l.current,lo(t.nodeType===8?t.parentNode:t),$r(function(){_u(e,l,n,r)}),l}function Cu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$l(o);a.call(l)}}_u(e,o,t,i)}else o=LC(n,e,t,i,r);return $l(o)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ks(e.pendingLanes);n!==0&&(Ef(e,n|1),ct(e,ge()),!(J&6)&&(Bi=ge()+500,cr()))}break;case 13:$r(function(){var r=yn(t,1);if(r!==null){var i=nt();Ut(r,t,1,i)}}),Zf(t,1)}};Sf=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=nt();Ut(e,t,134217728,n)}Zf(t,134217728)}};w0=function(t){if(t.tag===13){var e=Qn(t),n=yn(t,e);if(n!==null){var r=nt();Ut(n,t,e,r)}Zf(t,e)}};E0=function(){return ee};S0=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Fh=function(t,e,n){switch(e){case"input":if(Dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mu(r);if(!i)throw Error(N(90));Xv(r),Dh(r,i)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};a0=Gf;l0=$r;var MC={usingClientEntryPoint:!1,Events:[Ho,ci,mu,s0,o0,Gf]},Ss={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$C={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||xC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{hu=Pa.inject($C),Yt=Pa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MC;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(N(200));return OC(t,e,null,n)};Et.createRoot=function(t,e){if(!tp(t))throw Error(N(299));var n=!1,r="",i=H1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,lo(t.nodeType===8?t.parentNode:t),new ep(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return $r(t)};Et.hydrate=function(t,e,n){if(!Tu(e))throw Error(N(200));return Cu(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!tp(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=j1(e,null,t,1,n??null,i,!1,s,o),t[gn]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Iu(e)};Et.render=function(t,e,n){if(!Tu(e))throw Error(N(200));return Cu(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(N(40));return t._reactRootContainer?($r(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};Et.unstable_batchedUpdates=Gf;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Cu(t,e,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function W1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W1)}catch(t){console.error(t)}}W1(),jv.exports=Et;var bC=jv.exports,Ug=bC;Th.createRoot=Ug.createRoot,Th.hydrateRoot=Ug.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vo.apply(this,arguments)}var Bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bn||(Bn={}));const Bg="popstate";function FC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=qr(i.location.hash.substr(1));return yd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:bl(s))}function r(i,s){ku(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return BC(e,n,r,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ku(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UC(){return Math.random().toString(36).substr(2,8)}function Vg(t,e){return{usr:t.state,key:t.key,idx:e}}function yd(t,e,n,r){return n===void 0&&(n=null),vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qr(e):e,{state:n,key:e&&e.key||r||UC()})}function bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function BC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Bn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(vo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Bn.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:g})}function h(E,g){a=Bn.Push;let f=yd(v.location,E,g);n&&n(f,E),u=c()+1;let p=Vg(f,u),w=v.createHref(f);try{o.pushState(p,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function m(E,g){a=Bn.Replace;let f=yd(v.location,E,g);n&&n(f,E),u=c();let p=Vg(f,u),w=v.createHref(f);o.replaceState(p,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:bl(E);return ye(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Bg,d),l=E,()=>{i.removeEventListener(Bg,d),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let g=y(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(E){return o.go(E)}};return v}var zg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zg||(zg={}));function VC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qr(e):e,i=np(r.pathname||"/",n);if(i==null)return null;let s=K1(t);zC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=JC(s[a],ek(i));return o}function K1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:QC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of q1(s.path))i(s,o,l)}),e}function q1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=q1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function zC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jC=/^:\w+$/,HC=3,WC=2,KC=1,qC=10,GC=-2,jg=t=>t==="*";function QC(t,e){let n=t.split("/"),r=n.length;return n.some(jg)&&(r+=GC),e&&(r+=WC),n.filter(i=>!jg(i)).reduce((i,s)=>i+(jC.test(s)?HC:s===""?KC:qC),r)}function YC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=XC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:ik(Jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return s}function XC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=tk(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ZC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ku(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ek(t){try{return decodeURI(t)}catch(e){return ku(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function tk(t,e){try{return decodeURIComponent(t)}catch(n){return ku(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function np(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qr(t):t;return{pathname:n?n.startsWith("/")?n:rk(n,e):e,search:sk(r),hash:ok(i)}}function rk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ip(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qr(t):(i=vo({},t),ye(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=nk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Jn=t=>t.join("/").replace(/\/\/+/g,"/"),ik=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ok=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ak(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const G1=["post","put","patch","delete"];new Set(G1);const lk=["get",...G1];new Set(lk);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}const sp=k.createContext(null),uk=k.createContext(null),rs=k.createContext(null),Nu=k.createContext(null),kn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Q1=k.createContext(null);function ck(t,e){let{relative:n}=e===void 0?{}:e;is()||ye(!1);let{basename:r,navigator:i}=k.useContext(rs),{hash:s,pathname:o,search:a}=J1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function is(){return k.useContext(Nu)!=null}function Gr(){return is()||ye(!1),k.useContext(Nu).location}function Y1(t){k.useContext(rs).static||k.useLayoutEffect(t)}function Au(){let{isDataRoute:t}=k.useContext(kn);return t?Ck():hk()}function hk(){is()||ye(!1);let t=k.useContext(sp),{basename:e,navigator:n}=k.useContext(rs),{matches:r}=k.useContext(kn),{pathname:i}=Gr(),s=JSON.stringify(rp(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return Y1(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=ip(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Jn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const dk=k.createContext(null);function fk(t){let e=k.useContext(kn).outlet;return e&&k.createElement(dk.Provider,{value:t},e)}function J1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(kn),{pathname:i}=Gr(),s=JSON.stringify(rp(r).map(o=>o.pathnameBase));return k.useMemo(()=>ip(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function pk(t,e){return mk(t,e)}function mk(t,e,n){is()||ye(!1);let{navigator:r}=k.useContext(rs),{matches:i}=k.useContext(kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Gr(),u;if(e){var c;let v=typeof e=="string"?qr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ye(!1),u=v}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=VC(t,{pathname:h}),y=Ek(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Jn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Jn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?k.createElement(Nu.Provider,{value:{location:Fl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bn.Pop}},y):y}function gk(){let t=Tk(),e=ak(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const yk=k.createElement(gk,null);class vk extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(kn.Provider,{value:this.props.routeContext},k.createElement(Q1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wk(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(sp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(kn.Provider,{value:e},r)}function Ek(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ye(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||yk);let h=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=d:l.route.Component?y=k.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,k.createElement(wk,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(vk,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var vd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(vd||(vd={}));var wo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(wo||(wo={}));function Sk(t){let e=k.useContext(sp);return e||ye(!1),e}function _k(t){let e=k.useContext(uk);return e||ye(!1),e}function Ik(t){let e=k.useContext(kn);return e||ye(!1),e}function X1(t){let e=Ik(),n=e.matches[e.matches.length-1];return n.route.id||ye(!1),n.route.id}function Tk(){var t;let e=k.useContext(Q1),n=_k(wo.UseRouteError),r=X1(wo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ck(){let{router:t}=Sk(vd.UseNavigateStable),e=X1(wo.UseNavigateStable),n=k.useRef(!1);return Y1(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fl({fromRouteId:e},s)))},[t,e])}function op(t){let{to:e,replace:n,state:r,relative:i}=t;is()||ye(!1);let{matches:s}=k.useContext(kn),{pathname:o}=Gr(),a=Au(),l=ip(e,rp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function ap(t){return fk(t.context)}function It(t){ye(!1)}function kk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:s,static:o=!1}=t;is()&&ye(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,y=k.useMemo(()=>{let v=np(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:m},navigationType:i}},[a,u,c,d,h,m,i]);return y==null?null:k.createElement(rs.Provider,{value:l},k.createElement(Nu.Provider,{children:n,value:y}))}function Nk(t){let{children:e,location:n}=t;return pk(wd(e),n)}var Hg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Hg||(Hg={}));new Promise(()=>{});function wd(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,wd(r.props.children,s));return}r.type!==It&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ed(){return Ed=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ed.apply(this,arguments)}function Ak(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Rk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Pk(t,e){return t.button===0&&(!e||e==="_self")&&!Rk(t)}const Dk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ok(t){let{basename:e,children:n,window:r}=t,i=k.useRef();i.current==null&&(i.current=FC({window:r,v5Compat:!0}));let s=i.current,[o,a]=k.useState({action:s.action,location:s.location});return k.useLayoutEffect(()=>s.listen(a),[s]),k.createElement(kk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mk=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=Ak(e,Dk),{basename:h}=k.useContext(rs),m,y=!1;if(typeof u=="string"&&Lk.test(u)&&(m=u,xk))try{let f=new URL(window.location.href),p=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=np(p.pathname,h);p.origin===f.origin&&w!=null?u=w+p.search+p.hash:y=!0}catch{}let v=ck(u,{relative:i}),E=$k(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||E(f)}return k.createElement("a",Ed({},d,{href:m||v,onClick:y||s?r:g,ref:n,target:l}))});var Wg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Wg||(Wg={}));var Kg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kg||(Kg={}));function $k(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Au(),l=Gr(),u=J1(t,{relative:o});return k.useCallback(c=>{if(Pk(c,n)){c.preventDefault();let d=r!==void 0?r:bl(l)===bl(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const bk="/",Fk="/error",lp="/authenticate",Uk="/welcome",Eo="/profile",Z1="/profile/edit",ew="/admin/members",Bk="/healthcheck";var tw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(tw);var Vk=tw.exports;const He=Ov(Vk),nw="/membership/assets/tas-logo-44fcb9bb.png";/**
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
 *//**
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
 */const rw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new jk;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hk=function(t){const e=rw(t);return iw.encodeByteArray(e,!0)},Ul=function(t){return Hk(t).replace(/\./g,"")},sw=function(t){try{return iw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kk=()=>Wk().__FIREBASE_DEFAULTS__,qk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sw(t[1]);return e&&JSON.parse(e)},up=()=>{try{return Kk()||qk()||Gk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ow=t=>{var e,n;return(n=(e=up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qk=t=>{const e=ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aw=()=>{var t;return(t=up())===null||t===void 0?void 0:t.config},lw=t=>{var e;return(e=up())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Yk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Jk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),a].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function uw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e2(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cw(){try{return typeof indexedDB=="object"}catch{return!1}}function hw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function t2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const n2="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=n2,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?r2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jt(i,a,r)}}function r2(t,e){return t.replace(i2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const i2=/\{\$([^}]+)}/g;function s2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function So(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qg(s)&&qg(o)){if(!So(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qg(t){return t!==null&&typeof t=="object"}/**
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
 */function ss(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function o2(t,e){const n=new a2(t,e);return n.subscribe.bind(n)}class a2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");l2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wc),i.error===void 0&&(i.error=Wc),i.complete===void 0&&(i.complete=Wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
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
 */const u2=1e3,c2=2,h2=4*60*60*1e3,d2=.5;function Gg(t,e=u2,n=c2){const r=e*Math.pow(n,t),i=Math.round(d2*r*(Math.random()-.5)*2);return Math.min(h2,r+i)}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Er="[DEFAULT]";/**
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
 */class f2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m2(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p2(t){return t===Er?void 0:t}function m2(t){return t.instantiationMode==="EAGER"}/**
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
 */class g2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const y2={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},v2=X.INFO,w2={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},E2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=w2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Ru=class{constructor(e){this.name=e,this._logLevel=v2,this._logHandler=E2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}};const S2=(t,e)=>e.some(n=>t instanceof n);let Qg,Yg;function _2(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I2(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dw=new WeakMap,Sd=new WeakMap,fw=new WeakMap,Kc=new WeakMap,cp=new WeakMap;function T2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dw.set(n,t)}).catch(()=>{}),cp.set(e,t),e}function C2(t){if(Sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sd.set(t,e)}let _d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function k2(t){_d=t(_d)}function N2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return fw.set(r,e.sort?e.sort():[e]),Xn(r)}:I2().includes(t)?function(...e){return t.apply(qc(this),e),Xn(dw.get(this))}:function(...e){return Xn(t.apply(qc(this),e))}}function A2(t){return typeof t=="function"?N2(t):(t instanceof IDBTransaction&&C2(t),S2(t,_2())?new Proxy(t,_d):t)}function Xn(t){if(t instanceof IDBRequest)return T2(t);if(Kc.has(t))return Kc.get(t);const e=A2(t);return e!==t&&(Kc.set(t,e),cp.set(e,t)),e}const qc=t=>cp.get(t);function R2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const P2=["get","getKey","getAll","getAllKeys","count"],D2=["put","add","delete","clear"],Gc=new Map;function Jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=D2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||P2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gc.set(e,s),s}k2(t=>({...t,get:(e,n,r)=>Jg(e,n)||t.get(e,n,r),has:(e,n)=>!!Jg(e,n)||t.has(e,n)}));/**
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
 */class O2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(x2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function x2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",Xg="0.9.11";/**
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
 */const br=new Ru("@firebase/app"),L2="@firebase/app-compat",M2="@firebase/analytics-compat",$2="@firebase/analytics",b2="@firebase/app-check-compat",F2="@firebase/app-check",U2="@firebase/auth",B2="@firebase/auth-compat",V2="@firebase/database",z2="@firebase/database-compat",j2="@firebase/functions",H2="@firebase/functions-compat",W2="@firebase/installations",K2="@firebase/installations-compat",q2="@firebase/messaging",G2="@firebase/messaging-compat",Q2="@firebase/performance",Y2="@firebase/performance-compat",J2="@firebase/remote-config",X2="@firebase/remote-config-compat",Z2="@firebase/storage",eN="@firebase/storage-compat",tN="@firebase/firestore",nN="@firebase/firestore-compat",rN="firebase",iN="9.22.1";/**
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
 */const Td="[DEFAULT]",sN={[Id]:"fire-core",[L2]:"fire-core-compat",[$2]:"fire-analytics",[M2]:"fire-analytics-compat",[F2]:"fire-app-check",[b2]:"fire-app-check-compat",[U2]:"fire-auth",[B2]:"fire-auth-compat",[V2]:"fire-rtdb",[z2]:"fire-rtdb-compat",[j2]:"fire-fn",[H2]:"fire-fn-compat",[W2]:"fire-iid",[K2]:"fire-iid-compat",[q2]:"fire-fcm",[G2]:"fire-fcm-compat",[Q2]:"fire-perf",[Y2]:"fire-perf-compat",[J2]:"fire-rc",[X2]:"fire-rc-compat",[Z2]:"fire-gcs",[eN]:"fire-gcs-compat",[tN]:"fire-fst",[nN]:"fire-fst-compat","fire-js":"fire-js",[rN]:"fire-js-all"};/**
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
 */const Bl=new Map,Cd=new Map;function oN(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(Cd.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,t);for(const n of Bl.values())oN(n,t);return!0}function Yr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const aN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new Qr("app","Firebase",aN);/**
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
 */class lN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const os=iN;function pw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Td,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=aw()),!n)throw Zn.create("no-options");const s=Bl.get(i);if(s){if(So(n,s.options)&&So(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new g2(i);for(const l of Cd.values())o.addComponent(l);const a=new lN(n,r,o);return Bl.set(i,a),a}function hp(t=Td){const e=Bl.get(t);if(!e&&t===Td&&aw())return pw();if(!e)throw Zn.create("no-app",{appName:t});return e}function Pt(t,e,n){var r;let i=(r=sN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}Zt(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const uN="firebase-heartbeat-database",cN=1,_o="firebase-heartbeat-store";let Qc=null;function mw(){return Qc||(Qc=R2(uN,cN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_o)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function hN(t){try{return await(await mw()).transaction(_o).objectStore(_o).get(gw(t))}catch(e){if(e instanceof jt)br.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Zg(t,e){try{const r=(await mw()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,gw(t)),await r.done}catch(n){if(n instanceof jt)br.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function gw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dN=1024,fN=30*24*60*60*1e3;class pN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ey();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=fN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ey(),{heartbeatsToSend:n,unsentEntries:r}=mN(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ey(){return new Date().toISOString().substring(0,10)}function mN(t,e=dN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ty(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cw()?hw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ty(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yN(t){Zt(new Vt("platform-logger",e=>new O2(e),"PRIVATE")),Zt(new Vt("heartbeat",e=>new pN(e),"PRIVATE")),Pt(Id,Xg,t),Pt(Id,Xg,"esm2017"),Pt("fire-js","")}yN("");function dp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vN=yw,vw=new Qr("auth","Firebase",yw());/**
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
 */const Vl=new Ru("@firebase/auth");function wN(t,...e){Vl.logLevel<=X.WARN&&Vl.warn(`Auth (${os}): ${t}`,...e)}function rl(t,...e){Vl.logLevel<=X.ERROR&&Vl.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw fp(t,...e)}function mt(t,...e){return fp(t,...e)}function EN(t,e,n){const r=Object.assign(Object.assign({},vN()),{[e]:n});return new Qr("auth","Firebase",r).create(e,{appName:t.name})}function fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vw.create(t,...e)}function x(t,e,...n){if(!t)throw fp(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function En(t,e){t||un(e)}/**
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
 */function kd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ww(){return ny()==="http:"||ny()==="https:"}function ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ww()||uw()||"connection"in navigator)?navigator.onLine:!0}function _N(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=Xk()||Zk()}get(){return SN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pp(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TN=new Ko(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,i={}){return Sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ss(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ew.fetch()(_w(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IN),e);try{const i=new CN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw As(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw As(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw As(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw EN(t,c,u);wn(t,c)}}catch(i){if(i instanceof jt)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Pu(t,e,n,r,i={}){const s=await Nn(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _w(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pp(t.config,i):`${t.config.apiScheme}://${i}`}class CN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),TN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function As(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function kN(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function NN(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Du(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:js(Yc(i.auth_time)),issuedAtTime:js(Yc(i.iat)),expirationTime:js(Yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function Du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=sw(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RN(t){const e=Du(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&PN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Io(t,NN(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LN(s.providerUserInfo):[],a=xN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Iw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function ON(t){const e=rt(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LN(t){return t.map(e=>{var{providerId:n}=e,r=dp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function MN(t,e){const n=await Sw(t,{},async()=>{const r=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_w(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ew.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new To;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function Rn(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Iw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Io(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return ON(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Io(this,kN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:S}=n;x(p&&S,e,"internal-error");const R=To.fromJSON(this.name,S);x(typeof p=="string",e,"internal-error"),Rn(d,e.name),Rn(h,e.name),x(typeof w=="boolean",e,"internal-error"),x(typeof _=="boolean",e,"internal-error"),Rn(m,e.name),Rn(y,e.name),Rn(v,e.name),Rn(E,e.name),Rn(g,e.name),Rn(f,e.name);const V=new Pr({uid:p,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:_,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:R,createdAt:g,lastLoginAt:f});return I&&Array.isArray(I)&&(V.providerData=I.map(b=>Object.assign({},b))),E&&(V._redirectEventId=E),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new To;i.updateFromServerResponse(n);const s=new Pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}}/**
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
 */const ry=new Map;function cn(t){En(t instanceof Function,"Expected a class definition");let e=ry.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ry.set(t,e),e)}/**
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
 */class Tw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tw.type="NONE";const iy=Tw;/**
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
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=il(this.userKey,i.apiKey,s),this.fullPersistenceKey=il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(cn(iy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||cn(iy);const o=il(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Pr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ni(s,e,r))}}/**
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
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rw(e))return"Blackberry";if(Pw(e))return"Webos";if(mp(e))return"Safari";if((e.includes("chrome/")||kw(e))&&!e.includes("edge/"))return"Chrome";if(Aw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cw(t=Je()){return/firefox\//i.test(t)}function mp(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kw(t=Je()){return/crios\//i.test(t)}function Nw(t=Je()){return/iemobile/i.test(t)}function Aw(t=Je()){return/android/i.test(t)}function Rw(t=Je()){return/blackberry/i.test(t)}function Pw(t=Je()){return/webos/i.test(t)}function Ou(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $N(t=Je()){var e;return Ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bN(){return e2()&&document.documentMode===10}function Dw(t=Je()){return Ou(t)||Aw(t)||Pw(t)||Rw(t)||/windows phone/i.test(t)||Nw(t)}function FN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ow(t,e=[]){let n;switch(t){case"Browser":n=sy(Je());break;case"Worker":n=`${sy(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */async function UN(t){return(await Nn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function xw(t,e){return Nn(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
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
 */function oy(t){return t!==void 0&&t.getResponse!==void 0}function ay(t){return t!==void 0&&t.enterprise!==void 0}class Lw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function BN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BN().appendChild(r)})}function Mw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VN="https://www.google.com/recaptcha/enterprise.js?render=",zN="recaptcha-enterprise",jN="NO_RECAPTCHA";class HN{constructor(e){this.type=zN,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Lw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ay(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(jN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ay(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gp(VN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class WN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class KN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ly(this),this.idTokenSubscription=new ly(this),this.beforeStateQueue=new WN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}async initializeRecaptchaConfig(){const e=await xw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Lw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new HN(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return rt(t)}class ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=o2(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qN(t,e){const n=Yr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(So(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function GN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QN(t,e,n){const r=Jr(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$w(e),{host:o,port:a}=YN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||JN()}function $w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YN(t){const e=$w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uy(o)}}}function uy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function Ai(t,e){return Pu(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const XN="http://localhost";class Fr extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:XN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ss(n)}return e}}/**
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
 */async function ZN(t,e){return Nn(t,"POST","/v1/accounts:sendVerificationCode",hr(t,e))}async function eA(t,e){return Pu(t,"POST","/v1/accounts:signInWithPhoneNumber",hr(t,e))}async function tA(t,e){const n=await Pu(t,"POST","/v1/accounts:signInWithPhoneNumber",hr(t,e));if(n.temporaryProof)throw As(t,"account-exists-with-different-credential",n);return n}const nA={USER_NOT_FOUND:"user-not-found"};async function rA(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Pu(t,"POST","/v1/accounts:signInWithPhoneNumber",hr(t,n),nA)}/**
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
 */class Hs extends yp{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Hs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Hs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return eA(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return tA(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rA(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Hs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class bw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qo extends bw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends qo{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class $n extends qo{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class bn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */class Vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pr._fromIdTokenResponse(e,r,i),o=cy(r);return new Vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cy(r);return new Vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jl extends jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jl(e,n,r,i)}}function Fw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jl._fromErrorAndOperation(t,s,e,r):s})}async function iA(t,e,n=!1){const r=await Io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vi._forOperation(t,"link",r)}/**
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
 */async function sA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Io(t,Fw(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Du(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
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
 */async function Uw(t,e,n=!1){const r="signIn",i=await Fw(t,r,e),s=await Vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oA(t,e){return Uw(Jr(t),e)}/**
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
 */function aA(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Du(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ri(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new lA(s,i);case"github.com":return new uA(s,i);case"google.com":return new cA(s,i);case"twitter.com":return new hA(s,i,t.screenName||null);case"custom":case"anonymous":return new Ri(s,null);default:return new Ri(s,r,i)}}class Ri{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Bw extends Ri{constructor(e,n,r,i){super(e,n,r),this.username=i}}class lA extends Ri{constructor(e,n){super(e,"facebook.com",n)}}class uA extends Bw{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class cA extends Ri{constructor(e,n){super(e,"google.com",n)}}class hA extends Bw{constructor(e,n,r){super(e,"twitter.com",n,r)}}function dA(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:aA(n)}function fA(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function pA(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function mA(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}/**
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
 */function gA(t,e){return Nn(t,"POST","/v2/accounts/mfaEnrollment:start",hr(t,e))}const Hl="__sak";/**
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
 */class Vw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yA(){const t=Je();return mp(t)||Ou(t)}const vA=1e3,wA=10;class zw extends Vw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yA()&&FN(),this.fallbackToPolling=Dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zw.type="LOCAL";const EA=zw;/**
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
 */class jw extends Vw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jw.type="SESSION";const Hw=jw;/**
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
 */function SA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
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
 */function vp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=vp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function we(){return window}function IA(t){we().location.href=t}/**
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
 */function wp(){return typeof we().WorkerGlobalScope<"u"&&typeof we().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kA(){return wp()?self:null}/**
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
 */const Ww="firebaseLocalStorageDb",NA=1,Wl="firebaseLocalStorage",Kw="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lu(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function AA(){const t=indexedDB.deleteDatabase(Ww);return new Go(t).toPromise()}function Nd(){const t=indexedDB.open(Ww,NA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:Kw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await AA(),e(await Nd()))})})}async function hy(t,e,n){const r=Lu(t,!0).put({[Kw]:e,value:n});return new Go(r).toPromise()}async function RA(t,e){const n=Lu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function dy(t,e){const n=Lu(t,!0).delete(e);return new Go(n).toPromise()}const PA=800,DA=3;class qw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(kA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new _A(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await hy(e,Hl,"1"),await dy(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lu(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qw.type="LOCAL";const OA=qw;/**
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
 */function xA(t,e){return Nn(t,"POST","/v2/accounts/mfaSignIn:start",hr(t,e))}/**
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
 */const LA=500,MA=6e4,Da=1e12;class $A{constructor(e){this.auth=e,this.counter=Da,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new bA(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Da;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Da;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Da;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class bA{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FA(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},MA)},LA))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FA(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Jc=Mw("rcb"),UA=new Ko(3e4,6e4),BA="https://www.google.com/recaptcha/api.js?";class VA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=we().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(zA(n),e,"argument-error"),this.shouldResolveImmediately(n)&&oy(we().grecaptcha)?Promise.resolve(we().grecaptcha):new Promise((r,i)=>{const s=we().setTimeout(()=>{i(mt(e,"network-request-failed"))},UA.get());we()[Jc]=()=>{we().clearTimeout(s),delete we()[Jc];const a=we().grecaptcha;if(!a||!oy(a)){i(mt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${BA}?${ss({onload:Jc,render:"explicit",hl:n})}`;gp(o).catch(()=>{clearTimeout(s),i(mt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=we().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zA(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class jA{async load(e){return new $A(e)}clearedOneInstance(){}}/**
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
 */const Gw="recaptcha",HA={theme:"light",type:"image"};class WA{constructor(e,n=Object.assign({},HA),r){this.parameters=n,this.type=Gw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Jr(r),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jA:new VA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=we()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(ww()&&!wp(),this.auth,"internal-error"),await KA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await UN(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function KA(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class qA{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Hs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function GA(t,e,n){const r=Jr(t),i=await QA(r,e,rt(n));return new qA(i,s=>oA(r,s))}async function QA(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===Gw,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await gA(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await xA(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ZN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
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
 */function YA(t,e){return e?cn(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ep extends yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JA(t){return Uw(t.auth,new Ep(t),t.bypassAuthState)}function XA(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),sA(n,new Ep(t),t.bypassAuthState)}async function ZA(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),iA(n,new Ep(t),t.bypassAuthState)}/**
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
 */class Qw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JA;case"linkViaPopup":case"linkViaRedirect":return ZA;case"reauthViaPopup":case"reauthViaRedirect":return XA;default:wn(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eR=new Ko(2e3,1e4);class yi extends Qw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}yi.currentPopupAction=null;/**
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
 */const tR="pendingRedirect",sl=new Map;class nR extends Qw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await rR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rR(t,e){const n=oR(e),r=sR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iR(t,e){sl.set(t._key(),e)}function sR(t){return cn(t._redirectPersistence)}function oR(t){return il(tR,t.config.apiKey,t.name)}async function aR(t,e,n=!1){const r=Jr(t),i=YA(r,e),o=await new nR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lR=10*60*1e3;class uR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lR&&this.cachedEventUids.clear(),this.cachedEventUids.has(fy(e))}saveEventToCache(e){this.cachedEventUids.add(fy(e)),this.lastProcessedEventTime=Date.now()}}function fy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yw(t);default:return!1}}/**
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
 */async function hR(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
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
 */const dR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fR=/^https?/;async function pR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(mR(n))return}catch{}wn(t,"unauthorized-domain")}function mR(t){const e=kd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fR.test(n))return!1;if(dR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gR=new Ko(3e4,6e4);function py(){const t=we().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yR(t){return new Promise((e,n)=>{var r,i,s;function o(){py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{py(),n(mt(t,"network-request-failed"))},timeout:gR.get()})}if(!((i=(r=we().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=we().gapi)===null||s===void 0)&&s.load)o();else{const a=Mw("iframefcb");return we()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},gp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ol=null,e})}let ol=null;function vR(t){return ol=ol||yR(t),ol}/**
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
 */const wR=new Ko(5e3,15e3),ER="__/auth/iframe",SR="emulator/auth/iframe",_R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TR(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pp(e,SR):`https://${t.config.authDomain}/${ER}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=IR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ss(r).slice(1)}`}async function CR(t){const e=await vR(t),n=we().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:TR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_R,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=we().setTimeout(()=>{s(o)},wR.get());function l(){we().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const kR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NR=500,AR=600,RR="_blank",PR="http://localhost";class my{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(t,e,n,r=NR,i=AR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=kw(u)?RR:n),Cw(u)&&(e=e||PR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if($N(u)&&a!=="_self")return OR(e||"",a),new my(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new my(d)}function OR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xR="__/auth/handler",LR="emulator/auth/handler",MR=encodeURIComponent("fac");async function gy(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof bw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",s2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof qo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${MR}=${encodeURIComponent(l)}`:"";return`${$R(t)}?${ss(a).slice(1)}${u}`}function $R({config:t}){return t.emulator?pp(t,LR):`https://${t.authDomain}/${xR}`}/**
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
 */const Xc="webStorageSupport";class bR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hw,this._completeRedirectFn=aR,this._overrideRedirectResult=iR}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gy(e,n,r,kd(),i);return DR(e,o,vp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gy(e,n,r,kd(),i);return IA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CR(e),r=new uR(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xc];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dw()||mp()||Ou()}}const FR=bR;var yy="@firebase/auth",vy="0.23.2";/**
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
 */class UR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VR(t){Zt(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ow(t)},u=new KN(r,i,s,l);return GN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zt(new Vt("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new UR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(yy,vy,BR(t)),Pt(yy,vy,"esm2017")}/**
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
 */const zR=5*60,jR=lw("authIdTokenMaxAge")||zR;let wy=null;const HR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jR)return;const i=n==null?void 0:n.token;wy!==i&&(wy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WR(t=hp()){const e=Yr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qN(t,{popupRedirectResolver:FR,persistence:[OA,EA,Hw]}),r=lw("authTokenSyncURL");if(r){const s=HR(r);pA(n,s,()=>s(n.currentUser)),fA(n,o=>s(o))}const i=ow("auth");return i&&QN(n,`http://${i}`),n}VR("Browser");var KR="firebase",qR="9.22.1";/**
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
 */Pt(KR,qR,"app");const GR=(t,e)=>e.some(n=>t instanceof n);let Ey,Sy;function QR(){return Ey||(Ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YR(){return Sy||(Sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jw=new WeakMap,Ad=new WeakMap,Xw=new WeakMap,Zc=new WeakMap,Sp=new WeakMap;function JR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jw.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function XR(t){if(Ad.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ad.set(t,e)}let Rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZR(t){Rd=t(Rd)}function eP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eh(this),e,...n);return Xw.set(r,e.sort?e.sort():[e]),er(r)}:YR().includes(t)?function(...e){return t.apply(eh(this),e),er(Jw.get(this))}:function(...e){return er(t.apply(eh(this),e))}}function tP(t){return typeof t=="function"?eP(t):(t instanceof IDBTransaction&&XR(t),GR(t,QR())?new Proxy(t,Rd):t)}function er(t){if(t instanceof IDBRequest)return JR(t);if(Zc.has(t))return Zc.get(t);const e=tP(t);return e!==t&&(Zc.set(t,e),Sp.set(e,t)),e}const eh=t=>Sp.get(t);function nP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(er(o.result),l.oldVersion,l.newVersion,er(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rP=["get","getKey","getAll","getAllKeys","count"],iP=["put","add","delete","clear"],th=new Map;function _y(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return th.set(e,s),s}ZR(t=>({...t,get:(e,n,r)=>_y(e,n)||t.get(e,n,r),has:(e,n)=>!!_y(e,n)||t.has(e,n)}));const Zw="@firebase/installations",_p="0.6.4";/**
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
 */const eE=1e4,tE=`w:${_p}`,nE="FIS_v2",sP="https://firebaseinstallations.googleapis.com/v1",oP=60*60*1e3,aP="installations",lP="Installations";/**
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
 */const uP={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ur=new Qr(aP,lP,uP);function rE(t){return t instanceof jt&&t.code.includes("request-failed")}/**
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
 */function iE({projectId:t}){return`${sP}/projects/${t}/installations`}function sE(t){return{token:t.token,requestStatus:2,expiresIn:hP(t.expiresIn),creationTime:Date.now()}}async function oE(t,e){const r=(await e.json()).error;return Ur.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function aE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function cP(t,{refreshToken:e}){const n=aE(t);return n.append("Authorization",dP(e)),n}async function lE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hP(t){return Number(t.replace("s","000"))}function dP(t){return`${nE} ${t}`}/**
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
 */async function fP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=iE(t),i=aE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:nE,appId:t.appId,sdkVersion:tE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await lE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:sE(u.authToken)}}else throw await oE("Create Installation",l)}/**
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
 */function uE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function pP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mP=/^[cdef][\w-]{21}$/,Pd="";function gP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yP(t);return mP.test(n)?n:Pd}catch{return Pd}}function yP(t){return pP(t).substr(0,22)}/**
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
 */function Mu(t){return`${t.appName}!${t.appId}`}/**
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
 */const cE=new Map;function hE(t,e){const n=Mu(t);dE(n,e),vP(n,e)}function dE(t,e){const n=cE.get(t);if(n)for(const r of n)r(e)}function vP(t,e){const n=wP();n&&n.postMessage({key:t,fid:e}),EP()}let Tr=null;function wP(){return!Tr&&"BroadcastChannel"in self&&(Tr=new BroadcastChannel("[Firebase] FID Change"),Tr.onmessage=t=>{dE(t.data.key,t.data.fid)}),Tr}function EP(){cE.size===0&&Tr&&(Tr.close(),Tr=null)}/**
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
 */const SP="firebase-installations-database",_P=1,Br="firebase-installations-store";let nh=null;function Ip(){return nh||(nh=nP(SP,_P,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Br)}}})),nh}async function Kl(t,e){const n=Mu(t),i=(await Ip()).transaction(Br,"readwrite"),s=i.objectStore(Br),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hE(t,e.fid),e}async function fE(t){const e=Mu(t),r=(await Ip()).transaction(Br,"readwrite");await r.objectStore(Br).delete(e),await r.done}async function $u(t,e){const n=Mu(t),i=(await Ip()).transaction(Br,"readwrite"),s=i.objectStore(Br),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hE(t,a.fid),a}/**
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
 */async function Tp(t){let e;const n=await $u(t.appConfig,r=>{const i=IP(r),s=TP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Pd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IP(t){const e=t||{fid:gP(),registrationStatus:0};return pE(e)}function TP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ur.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kP(t)}:{installationEntry:e}}async function CP(t,e){try{const n=await fP(t,e);return Kl(t.appConfig,n)}catch(n){throw rE(n)&&n.customData.serverCode===409?await fE(t.appConfig):await Kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kP(t){let e=await Iy(t.appConfig);for(;e.registrationStatus===1;)await uE(100),e=await Iy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tp(t);return r||n}return e}function Iy(t){return $u(t,e=>{if(!e)throw Ur.create("installation-not-found");return pE(e)})}function pE(t){return NP(t)?{fid:t.fid,registrationStatus:0}:t}function NP(t){return t.registrationStatus===1&&t.registrationTime+eE<Date.now()}/**
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
 */async function AP({appConfig:t,heartbeatServiceProvider:e},n){const r=RP(t,n),i=cP(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:tE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await lE(()=>fetch(r,a));if(l.ok){const u=await l.json();return sE(u)}else throw await oE("Generate Auth Token",l)}function RP(t,{fid:e}){return`${iE(t)}/${e}/authTokens:generate`}/**
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
 */async function Cp(t,e=!1){let n;const r=await $u(t.appConfig,s=>{if(!mE(s))throw Ur.create("not-registered");const o=s.authToken;if(!e&&OP(o))return s;if(o.requestStatus===1)return n=PP(t,e),s;{if(!navigator.onLine)throw Ur.create("app-offline");const a=LP(s);return n=DP(t,a),a}});return n?await n:r.authToken}async function PP(t,e){let n=await Ty(t.appConfig);for(;n.authToken.requestStatus===1;)await uE(100),n=await Ty(t.appConfig);const r=n.authToken;return r.requestStatus===0?Cp(t,e):r}function Ty(t){return $u(t,e=>{if(!mE(e))throw Ur.create("not-registered");const n=e.authToken;return MP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function DP(t,e){try{const n=await AP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Kl(t.appConfig,r),n}catch(n){if(rE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kl(t.appConfig,r)}throw n}}function mE(t){return t!==void 0&&t.registrationStatus===2}function OP(t){return t.requestStatus===2&&!xP(t)}function xP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+oP}function LP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MP(t){return t.requestStatus===1&&t.requestTime+eE<Date.now()}/**
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
 */async function $P(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tp(e);return r?r.catch(console.error):Cp(e).catch(console.error),n.fid}/**
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
 */async function bP(t,e=!1){const n=t;return await FP(n),(await Cp(n,e)).token}async function FP(t){const{registrationPromise:e}=await Tp(t);e&&await e}/**
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
 */function UP(t){if(!t||!t.options)throw rh("App Configuration");if(!t.name)throw rh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rh(t){return Ur.create("missing-app-config-values",{valueName:t})}/**
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
 */const gE="installations",BP="installations-internal",VP=t=>{const e=t.getProvider("app").getImmediate(),n=UP(e),r=Yr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zP=t=>{const e=t.getProvider("app").getImmediate(),n=Yr(e,gE).getImmediate();return{getId:()=>$P(n),getToken:i=>bP(n,i)}};function jP(){Zt(new Vt(gE,VP,"PUBLIC")),Zt(new Vt(BP,zP,"PRIVATE"))}jP();Pt(Zw,_p);Pt(Zw,_p,"esm2017");/**
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
 */const ql="analytics",HP="firebase_id",WP="origin",KP=60*1e3,qP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kp="https://www.googletagmanager.com/gtag/js";/**
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
 */const ht=new Ru("@firebase/analytics");/**
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
 */const GP={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gt=new Qr("analytics","Analytics",GP);/**
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
 */function QP(t){if(!t.startsWith(kp)){const e=gt.create("invalid-gtag-resource",{gtagURL:t});return ht.warn(e.message),""}return t}function yE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function YP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function JP(t,e){const n=YP("firebase-js-sdk-policy",{createScriptURL:QP}),r=document.createElement("script"),i=`${kp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function XP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZP(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await yE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){ht.error(a)}t("config",i,s)}async function eD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await yE(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ht.error(s)}}function tD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await eD(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await ZP(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ht.error(a)}}return i}function nD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=tD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function rD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kp)&&n.src.includes(t))return n;return null}/**
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
 */const iD=30,sD=1e3;class oD{constructor(e={},n=sD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vE=new oD;function aD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function lD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:aD(r)},s=qP.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function uD(t,e=vE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw gt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new dD;return setTimeout(async()=>{a.abort()},n!==void 0?n:KP),wE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function wE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=vE){var s;const{appId:o,measurementId:a}=t;try{await cD(r,e)}catch(l){if(a)return ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await lD(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!hD(u)){if(i.deleteThrottleMetadata(o),a)return ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Gg(n,i.intervalMillis,iD):Gg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),ht.debug(`Calling attemptFetch again in ${c} millis`),wE(t,d,r,i)}}function cD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hD(t){if(!(t instanceof jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class dD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function pD(){if(cw())try{await hw()}catch(t){return ht.warn(gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ht.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mD(t,e,n,r,i,s,o){var a;const l=uD(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&ht.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ht.error(m)),e.push(l);const u=pD().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);rD(s)||JP(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[WP]="firebase",h.update=!0,d!=null&&(h[HP]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class gD{constructor(e){this.app=e}_delete(){return delete Ws[this.app.options.appId],Promise.resolve()}}let Ws={},Cy=[];const ky={};let ih="dataLayer",yD="gtag",Ny,EE,Ay=!1;function vD(){const t=[];if(uw()&&t.push("This is a browser extension environment."),t2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});ht.warn(n.message)}}function wD(t,e,n){vD();const r=t.options.appId;if(!r)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(Ws[r]!=null)throw gt.create("already-exists",{id:r});if(!Ay){XP(ih);const{wrappedGtag:s,gtagCore:o}=nD(Ws,Cy,ky,ih,yD);EE=s,Ny=o,Ay=!0}return Ws[r]=mD(t,Cy,ky,e,Ny,ih,n),new gD(t)}function ED(t=hp()){t=rt(t);const e=Yr(t,ql);return e.isInitialized()?e.getImmediate():SD(t)}function SD(t,e={}){const n=Yr(t,ql);if(n.isInitialized()){const i=n.getImmediate();if(So(e,n.getOptions()))return i;throw gt.create("already-initialized")}return n.initialize({options:e})}function _D(t,e,n,r){t=rt(t),fD(EE,Ws[t.app.options.appId],e,n,r).catch(i=>ht.error(i))}const Ry="@firebase/analytics",Py="0.10.0";function ID(){Zt(new Vt(ql,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return wD(r,i,n)},"PUBLIC")),Zt(new Vt("analytics-internal",t,"PRIVATE")),Pt(Ry,Py),Pt(Ry,Py,"esm2017");function t(e){try{const n=e.getProvider(ql).getImmediate();return{logEvent:(r,i,s)=>_D(n,r,i,s)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}ID();var TD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Np=Np||{},B=TD||self;function bu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CD(t){return Object.prototype.hasOwnProperty.call(t,sh)&&t[sh]||(t[sh]=++kD)}var sh="closure_uid_"+(1e9*Math.random()>>>0),kD=0;function ND(t,e,n){return t.call.apply(t.bind,arguments)}function AD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=ND:qe=AD,qe.apply(null,arguments)}function Oa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function dr(){this.s=this.s,this.o=this.o}var RD=0;dr.prototype.s=!1;dr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),RD!=0)&&CD(this)};dr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const SE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ap(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(bu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var PD=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",()=>{},e),B.removeEventListener("test",()=>{},e)}catch{}return t}();function Co(t){return/^[\s\xa0]*$/.test(t)}function Fu(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return Fu().indexOf(t)!=-1}function Rp(t){return Rp[" "](t),t}Rp[" "]=function(){};function DD(t,e){var n=IO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var OD=qt("Opera"),zi=qt("Trident")||qt("MSIE"),_E=qt("Edge"),Dd=_E||zi,IE=qt("Gecko")&&!(Fu().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),xD=Fu().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function TE(){var t=B.document;return t?t.documentMode:void 0}var Od;e:{var oh="",ah=function(){var t=Fu();if(IE)return/rv:([^\);]+)(\)|;)/.exec(t);if(_E)return/Edge\/([\d\.]+)/.exec(t);if(zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xD)return/WebKit\/(\S+)/.exec(t);if(OD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ah&&(oh=ah?ah[1]:""),zi){var lh=TE();if(lh!=null&&lh>parseFloat(oh)){Od=String(lh);break e}}Od=oh}var xd;if(B.document&&zi){var Oy=TE();xd=Oy||parseInt(Od,10)||void 0}else xd=void 0;var LD=xd;function ko(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(IE){e:{try{Rp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ko.$.h.call(this)}}Oe(ko,Ge);var MD={2:"touch",3:"pen",4:"mouse"};ko.prototype.h=function(){ko.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),$D=0;function bD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++$D,this.fa=this.ia=!1}function Uu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function FD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function CE(t){const e={};for(const n in t)e[n]=t[n];return e}const xy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<xy.length;s++)n=xy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bu(t){this.src=t,this.g={},this.h=0}Bu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Md(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ld(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=SE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Uu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Md(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Dp="closure_lm_"+(1e6*Math.random()|0),uh={};function NE(t,e,n,r,i){if(r&&r.once)return RE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)NE(t,e[s],n,r,i);return null}return n=Lp(n),t&&t[Yo]?t.O(e,n,Qo(r)?!!r.capture:!!r,i):AE(t,e,n,!1,r,i)}function AE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Qo(i)?!!i.capture:!!i,a=xp(t);if(a||(t[Dp]=a=new Bu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=UD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(DE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UD(){function t(n){return e.call(t.src,t.listener,n)}const e=BD;return t}function RE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)RE(t,e[s],n,r,i);return null}return n=Lp(n),t&&t[Yo]?t.P(e,n,Qo(r)?!!r.capture:!!r,i):AE(t,e,n,!0,r,i)}function PE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)PE(t,e[s],n,r,i);else r=Qo(r)?!!r.capture:!!r,n=Lp(n),t&&t[Yo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Md(s,n,r,i),-1<n&&(Uu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=xp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Md(e,n,r,i)),(n=-1<t?e[t]:null)&&Op(n))}function Op(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yo])Ld(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(DE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xp(e))?(Ld(n,t),n.h==0&&(n.src=null,e[Dp]=null)):Uu(t)}}}function DE(t){return t in uh?uh[t]:uh[t]="on"+t}function BD(t,e){if(t.fa)t=!0;else{e=new ko(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Op(t),t=n.call(r,e)}return t}function xp(t){return t=t[Dp],t instanceof Bu?t:null}var ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lp(t){return typeof t=="function"?t:(t[ch]||(t[ch]=function(e){return t.handleEvent(e)}),t[ch])}function De(){dr.call(this),this.i=new Bu(this),this.S=this,this.J=null}Oe(De,dr);De.prototype[Yo]=!0;De.prototype.removeEventListener=function(t,e,n,r){PE(this,t,e,n,r)};function be(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var i=e;e=new Ge(r,t),kE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xa(o,r,!0,e)&&i}if(o=e.g=t,i=xa(o,r,!0,e)&&i,i=xa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xa(o,r,!1,e)&&i}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uu(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function xa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ld(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mp=B.JSON.stringify;class VD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zD(){var t=$p;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jD{constructor(){this.h=this.g=null}add(e,n){const r=OE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var OE=new VD(()=>new HD,t=>t.reset());class HD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KD(t){B.setTimeout(()=>{throw t},0)}let No,Ao=!1,$p=new jD,xE=()=>{const t=B.Promise.resolve(void 0);No=()=>{t.then(qD)}};var qD=()=>{for(var t;t=zD();){try{t.h.call(t.g)}catch(n){KD(n)}var e=OE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ao=!1};function Vu(t,e){De.call(this),this.h=t||1,this.g=e||B,this.j=qe(this.qb,this),this.l=Date.now()}Oe(Vu,De);P=Vu.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(bp(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Vu.$.N.call(this),bp(this),delete this.g};function Fp(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function LE(t){t.g=Fp(()=>{t.g=null,t.i&&(t.i=!1,LE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GD extends dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:LE(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ro(t){dr.call(this),this.h=t,this.g={}}Oe(Ro,dr);var Ly=[];function ME(t,e,n,r){Array.isArray(n)||(n&&(Ly[0]=n.toString()),n=Ly);for(var i=0;i<n.length;i++){var s=NE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $E(t){Pp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Op(e)},t),t.g={}}Ro.prototype.N=function(){Ro.$.N.call(this),$E(this)};Ro.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zu(){this.g=!0}zu.prototype.Ea=function(){this.g=!1};function QD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XD(t,n)+(r?" "+r:"")})}function JD(t,e){t.info(function(){return"TIMEOUT: "+e})}zu.prototype.info=function(){};function XD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mp(n)}catch{return e}}var Xr={},My=null;function ju(){return My=My||new De}Xr.Ta="serverreachability";function bE(t){Ge.call(this,Xr.Ta,t)}Oe(bE,Ge);function Po(t){const e=ju();be(e,new bE(e))}Xr.STAT_EVENT="statevent";function FE(t,e){Ge.call(this,Xr.STAT_EVENT,t),this.stat=e}Oe(FE,Ge);function tt(t){const e=ju();be(e,new FE(e,t))}Xr.Ua="timingevent";function UE(t,e){Ge.call(this,Xr.Ua,t),this.size=e}Oe(UE,Ge);function Jo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Hu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Up(){}Up.prototype.h=null;function $y(t){return t.h||(t.h=t.i())}function VE(){}var Xo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bp(){Ge.call(this,"d")}Oe(Bp,Ge);function Vp(){Ge.call(this,"c")}Oe(Vp,Ge);var $d;function Wu(){}Oe(Wu,Up);Wu.prototype.g=function(){return new XMLHttpRequest};Wu.prototype.i=function(){return{}};$d=new Wu;function Zo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ro(this),this.P=ZD,t=Dd?125:void 0,this.V=new Vu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new zE}function zE(){this.i=null,this.g="",this.h=!1}var ZD=45e3,bd={},Gl={};P=Zo.prototype;P.setTimeout=function(t){this.P=t};function Fd(t,e,n){t.L=1,t.v=qu(Sn(e)),t.s=n,t.S=!0,jE(t,null)}function jE(t,e){t.G=Date.now(),ea(t),t.A=Sn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),JE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new zE,t.g=vS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new GD(qe(t.Pa,t,t.g),t.O)),ME(t.U,t.g,"readystatechange",t.nb),e=t.I?CE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Po(),QD(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=Gt(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Dd||this.g&&(this.h.h||this.g.ja()||By(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Po(3):Po(2)),Ku(this);var n=this.g.da();this.ca=n;t:if(HE(this)){var r=By(this.g);t="";var i=r.length,s=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ks(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var u=a;break t}}u=null}if(n=u)vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ud(this,n);else{this.i=!1,this.o=3,tt(12),Cr(this),Ks(this);break e}}this.S?(WE(this,c,o),Dd&&this.i&&c==3&&(ME(this.U,this.V,"tick",this.mb),this.V.start())):(vi(this.j,this.m,o,null),Ud(this,o)),c==4&&Cr(this),this.i&&!this.J&&(c==4?pS(this.l,this):(this.i=!1,ea(this)))}else EO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Cr(this),Ks(this)}}}catch{}finally{}};function HE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function WE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=eO(t,n),i==Gl){e==4&&(t.o=4,tt(14),r=!1),vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bd){t.o=4,tt(15),vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vi(t.j,t.m,i,null),Ud(t,i);HE(t)&&i!=Gl&&i!=bd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qp(e),e.M=!0,tt(11))):(vi(t.j,t.m,n,"[Invalid Chunked Response]"),Cr(t),Ks(t))}P.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.C<e.length&&(Ku(this),WE(this,t,e),this.i&&t!=4&&ea(this))}};function eO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gl:(n=Number(e.substring(n,r)),isNaN(n)?bd:(r+=1,r+n>e.length?Gl:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,Cr(this)};function ea(t){t.Y=Date.now()+t.P,KE(t,t.P)}function KE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Jo(qe(t.lb,t),e)}function Ku(t){t.B&&(B.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(JD(this.j,this.A),this.L!=2&&(Po(),tt(17)),Cr(this),this.o=2,Ks(this)):KE(this,this.Y-t)};function Ks(t){t.l.H==0||t.J||pS(t.l,t)}function Cr(t){Ku(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bp(t.V),$E(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ud(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Bd(n.i,t))){if(!t.K&&Bd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jl(n),Yu(n);else break e;Kp(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Jo(qe(n.ib,n),6e3));if(1>=eS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else kr(n,11)}else if((t.K||n.g==t)&&Jl(n),!Co(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zp(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ie(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=yS(r,r.J?r.pa:null,r.Y),o.K){tS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ku(a),ea(a)),r.g=o}else dS(r);0<n.j.length&&Ju(n)}else u[0]!="stop"&&u[0]!="close"||kr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kr(n,7):Wp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Po(4)}catch{}}function tO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nO(t),r=tO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var GE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dr){this.h=t.h,Ql(this,t.j),this.s=t.s,this.g=t.g,Yl(this,t.m),this.l=t.l;var e=t.i,n=new Do;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),by(this,n),this.o=t.o}else t&&(e=String(t).match(GE))?(this.h=!1,Ql(this,e[1]||"",!0),this.s=Rs(e[2]||""),this.g=Rs(e[3]||"",!0),Yl(this,e[4]),this.l=Rs(e[5]||"",!0),by(this,e[6]||"",!0),this.o=Rs(e[7]||"")):(this.h=!1,this.i=new Do(null,this.h))}Dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,Fy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,Fy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?oO:sO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,lO)),t.join("")};function Sn(t){return new Dr(t)}function Ql(t,e,n){t.j=n?Rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function by(t,e,n){e instanceof Do?(t.i=e,uO(t.i,t.h)):(n||(e=Ps(e,aO)),t.i=new Do(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function qu(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fy=/[#\/\?@]/g,sO=/[#\?:]/g,oO=/[#\?]/g,aO=/[#\?@]/g,lO=/#/g;function Do(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fr(t){t.g||(t.g=new Map,t.h=0,t.i&&rO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Do.prototype;P.add=function(t,e){fr(this),this.i=null,t=as(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QE(t,e){fr(t),e=as(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function YE(t,e){return fr(t),e=as(t,e),t.g.has(e)}P.forEach=function(t,e){fr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){fr(this);let e=[];if(typeof t=="string")YE(this,t)&&(e=e.concat(this.g.get(as(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return fr(this),this.i=null,t=as(this,t),YE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function JE(t,e,n){QE(t,e),0<n.length&&(t.i=null,t.g.set(as(t,e),Ap(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function as(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uO(t,e){e&&!t.j&&(fr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(QE(this,r),JE(this,i,n))},t)),t.j=e}var cO=class{constructor(t,e){this.g=t,this.map=e}};function XE(t){this.l=t||hO,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hO=10;function ZE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function eS(t){return t.h?1:t.g?t.g.size:0}function Bd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zp(t,e){t.g?t.g.add(e):t.h=e}function tS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}XE.prototype.cancel=function(){if(this.i=nS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ap(t.i)}var dO=class{stringify(t){return B.JSON.stringify(t,void 0)}parse(t){return B.JSON.parse(t,void 0)}};function fO(){this.g=new dO}function pO(t,e,n){const r=n||"";try{qE(t,function(i,s){let o=i;Qo(i)&&(o=Mp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mO(t,e){const n=new zu;if(B.Image){const r=new Image;r.onload=Oa(La,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Oa(La,n,r,"TestLoadImage: error",!1,e),r.onabort=Oa(La,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Oa(La,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function La(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ta(t){this.l=t.fc||null,this.j=t.ob||!1}Oe(ta,Up);ta.prototype.g=function(){return new Gu(this.l,this.j)};ta.prototype.i=function(t){return function(){return t}}({});function Gu(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=jp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Gu,De);var jp=0;P=Gu.prototype;P.open=function(t,e){if(this.readyState!=jp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oo(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=jp};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oo(this)),this.g&&(this.readyState=3,Oo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function rS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?na(this):Oo(this),this.readyState==3&&rS(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,na(this))};P.Ya=function(t){this.g&&(this.response=t,na(this))};P.ka=function(){this.g&&na(this)};function na(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oo(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gO=B.JSON.parse;function pe(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=iS,this.L=this.M=!1}Oe(pe,De);var iS="",yO=/^https?$/i,vO=["POST","PUT"];P=pe.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$d.g(),this.C=this.u?$y(this.u):$y($d),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Uy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=SE(vO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aS(this),0<this.B&&((this.L=wO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=Fp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Uy(this,s)}};function wO(t){return zi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Np<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))};function Uy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sS(t),Qu(t)}function sS(t){t.F||(t.F=!0,be(t,"complete"),be(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,be(this,"complete"),be(this,"abort"),Qu(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qu(this,!0)),pe.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?oS(this):this.kb())};P.kb=function(){oS(this)};function oS(t){if(t.h&&typeof Np<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)Fp(t.La,0,t);else if(be(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(GE)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!yO.test(i?i.toLowerCase():"")}n=r}if(n)be(t,"complete"),be(t,"success");else{t.m=6;try{var s=2<Gt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",sS(t)}}finally{Qu(t)}}}}function Qu(t,e){if(t.g){aS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||be(t,"ready");try{n.onreadystatechange=r}catch{}}}function aS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gO(e)}};function By(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case iS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function EO(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Co(t[r]))continue;var n=WD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}FD(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lS(t){let e="";return Pp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function _s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uS(t){this.Ga=0,this.j=[],this.l=new zu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_s("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_s("baseRetryDelayMs",5e3,t),this.hb=_s("retryDelaySeedMs",1e4,t),this.eb=_s("forwardChannelMaxRetries",2,t),this.xa=_s("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new XE(t&&t.concurrentRequestLimit),this.Ja=new fO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=uS.prototype;P.ra=8;P.H=1;function Wp(t){if(cS(t),t.H==3){var e=t.W++,n=Sn(t.I);if(ie(n,"SID",t.K),ie(n,"RID",e),ie(n,"TYPE","terminate"),ra(t,n),e=new Zo(t,t.l,e),e.L=2,e.v=qu(Sn(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=vS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ea(e)}gS(t)}function Yu(t){t.g&&(qp(t),t.g.cancel(),t.g=null)}function cS(t){Yu(t),t.u&&(B.clearTimeout(t.u),t.u=null),Jl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Ju(t){if(!ZE(t.i)&&!t.m){t.m=!0;var e=t.Na;No||xE(),Ao||(No(),Ao=!0),$p.add(e,t),t.C=0}}function SO(t,e){return eS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Jo(qe(t.Na,t,e),mS(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=CE(s),kE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hS(this,i,e),n=Sn(this.I),ie(n,"RID",t),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),ra(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(lS(s)))+"&"+e:this.o&&Hp(n,this.o,s)),zp(this.i,i),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",e),ie(n,"SID","null"),i.aa=!0,Fd(i,n,null)):Fd(i,n,e),this.H=2}}else this.H==3&&(t?Vy(this,t):this.j.length==0||ZE(this.i)||Vy(this))};function Vy(t,e){var n;e?n=e.m:n=t.W++;const r=Sn(t.I);ie(r,"SID",t.K),ie(r,"RID",n),ie(r,"AID",t.V),ra(t,r),t.o&&t.s&&Hp(r,t.o,t.s),n=new Zo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=hS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zp(t.i,n),Fd(n,r,e)}function ra(t,e){t.na&&Pp(t.na,function(n,r){ie(e,r,n)}),t.h&&qE({},function(n,r){ie(e,r,n)})}function hS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{pO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function dS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;No||xE(),Ao||(No(),Ao=!0),$p.add(e,t),t.A=0}}function Kp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Jo(qe(t.Ma,t),mS(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,fS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Jo(qe(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Yu(this),fS(this))};function qp(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function fS(t){t.g=new Zo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Sn(t.wa);ie(e,"RID","rpc"),ie(e,"SID",t.K),ie(e,"AID",t.V),ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ie(e,"TO",t.qa),ie(e,"TYPE","xmlhttp"),ra(t,e),t.o&&t.s&&Hp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qu(Sn(e)),n.s=null,n.S=!0,jE(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Yu(this),Kp(this),tt(19))};function Jl(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function pS(t,e){var n=null;if(t.g==e){Jl(t),qp(t),t.g=null;var r=2}else if(Bd(t.i,e))n=e.F,tS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ju(),be(r,new UE(r,n)),Ju(t)}else dS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&SO(t,e)||r==2&&Kp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function mS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function kr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=qe(t.pb,t);n||(n=new Dr("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Ql(n,"https"),qu(n)),mO(n.toString(),r)}else tt(2);t.H=0,t.h&&t.h.za(e),gS(t),cS(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function gS(t){if(t.H=0,t.ma=[],t.h){const e=nS(t.i);(e.length!=0||t.j.length!=0)&&(Dy(t.ma,e),Dy(t.ma,t.j),t.i.i.length=0,Ap(t.j),t.j.length=0),t.h.ya()}}function yS(t,e,n){var r=n instanceof Dr?Sn(n):new Dr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yl(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Dr(null);r&&Ql(s,r),e&&(s.g=e),i&&Yl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ie(r,n,e),ie(r,"VER",t.ra),ra(t,r),r}function vS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new pe(new ta({ob:!0})):new pe(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function wS(){}P=wS.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Xl(){if(zi&&!(10<=Number(LD)))throw Error("Environmental error: no available transport.")}Xl.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){De.call(this),this.g=new uS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Co(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ls(this)}Oe(wt,De);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yS(t,null,t.Y),Ju(t)};wt.prototype.close=function(){Wp(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mp(t),t=n);e.j.push(new cO(e.fb++,t)),e.H==3&&Ju(e)};wt.prototype.N=function(){this.g.h=null,delete this.j,Wp(this.g),delete this.g,wt.$.N.call(this)};function ES(t){Bp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(ES,Bp);function SS(){Vp.call(this),this.status=1}Oe(SS,Vp);function ls(t){this.g=t}Oe(ls,wS);ls.prototype.Ba=function(){be(this.g,"a")};ls.prototype.Aa=function(t){be(this.g,new ES(t))};ls.prototype.za=function(t){be(this.g,new SS)};ls.prototype.ya=function(){be(this.g,"b")};function _O(){this.blockSize=-1}function zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Oe(zt,_O);zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)hh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){hh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){hh(this,r),i=0;break}}this.h=i,this.i+=e};zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var IO={};function Gp(t){return-128<=t&&128>t?DD(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Pi;if(0>t)return Me(Qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Vd;return new te(e,0)}function _S(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(_S(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),r=Pi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Qt(Math.pow(e,s)),r=r.R(s).add(Qt(o))):(r=r.R(n),r=r.add(Qt(o)))}return r}var Vd=4294967296,Pi=Gp(0),zd=Gp(1),zy=Gp(16777216);P=te.prototype;P.ea=function(){if(kt(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Vd+r)*e,e*=Vd}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hn(this))return"0";if(kt(this))return"-"+Me(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,r="";;){var i=eu(n,e).g;n=Zl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,hn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}P.X=function(t){return t=Zl(this,t),kt(t)?-1:hn(t)?0:1};function Me(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(zd)}P.abs=function(){return kt(this)?Me(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function Zl(t,e){return t.add(Me(e))}P.R=function(t){if(hn(this)||hn(t))return Pi;if(kt(this))return kt(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(kt(t))return Me(this.R(Me(t)));if(0>this.X(zy)&&0>t.X(zy))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ma(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ma(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ma(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ma(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function Ma(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Is(t,e){this.g=t,this.h=e}function eu(t,e){if(hn(e))throw Error("division by zero");if(hn(t))return new Is(Pi,Pi);if(kt(t))return e=eu(Me(t),e),new Is(Me(e.g),Me(e.h));if(kt(e))return e=eu(t,Me(e)),new Is(Me(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zd,r=e;0>=r.X(t);)n=jy(n),r=jy(r);var i=ni(n,1),s=ni(r,1);for(r=ni(r,2),n=ni(n,2);!hn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ni(r,1),n=ni(n,1)}return e=Zl(t,i.R(e)),new Is(i,e)}for(i=Pi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Qt(n),o=s.R(e);kt(o)||0<o.X(t);)n-=r,s=Qt(n),o=s.R(e);hn(s)&&(s=zd),i=i.add(s),t=Zl(t,o)}return new Is(i,t)}P.gb=function(t){return eu(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function jy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function ni(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}Xl.prototype.createWebChannel=Xl.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Hu.NO_ERROR=0;Hu.TIMEOUT=8;Hu.HTTP_ERROR=6;BE.COMPLETE="complete";VE.EventType=Xo;Xo.OPEN="a";Xo.CLOSE="b";Xo.ERROR="c";Xo.MESSAGE="d";De.prototype.listen=De.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;zt.prototype.digest=zt.prototype.l;zt.prototype.reset=zt.prototype.reset;zt.prototype.update=zt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=Qt;te.fromString=_S;var TO=function(){return new Xl},CO=function(){return ju()},dh=Hu,kO=BE,NO=Xr,Hy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},AO=ta,$a=VE,RO=pe,PO=zt,Di=te;const Wy="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let us="9.22.1";/**
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
 */const Vr=new Ru("@firebase/firestore");function Ky(){return Vr.logLevel}function L(t,...e){if(Vr.logLevel<=X.DEBUG){const n=e.map(Qp);Vr.debug(`Firestore (${us}): ${t}`,...n)}}function _n(t,...e){if(Vr.logLevel<=X.ERROR){const n=e.map(Qp);Vr.error(`Firestore (${us}): ${t}`,...n)}}function ji(t,...e){if(Vr.logLevel<=X.WARN){const n=e.map(Qp);Vr.warn(`Firestore (${us}): ${t}`,...n)}}function Qp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function oe(t,e){t||U()}function j(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class IS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class OO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xO{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new IS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new ze(e)}}class LO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class MO{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new LO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bO{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.T=n.token,new $O(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function FO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class TS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new ke(0,0))}static max(){return new z(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends xo{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const UO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends xo{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return UO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function BO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new sr(i,$.empty(),e)}function VO(t){return new sr(t.readTime,t.key,-1)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(z.min(),$.empty(),-1)}static max(){return new sr(z.max(),$.empty(),-1)}}function zO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const jO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ia(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==jO)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Yp.ct=-1;function Xu(t){return t==null}function tu(t){return t===0&&1/t==-1/0}function WO(t){return typeof t=="number"&&Number.isInteger(t)&&!tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function qy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function CS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class de{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new de(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gy(this.data.getIterator())}getIteratorFrom(e){return new Gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kS("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const KO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(oe(!!t),typeof t=="string"){let e=0;const n=KO.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Jp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xp(t){const e=t.mapValue.fields.__previous_value__;return Jp(e)?Xp(e):e}function Lo(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class qO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jp(t)?4:GO(t)?9007199254740991:10:U()}function en(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lo(t).isEqual(Lo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=or(r.timestampValue),o=or(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return zr(r.bytesValue).isEqual(zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ee(r.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(r.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ee(r.integerValue)===Ee(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ee(r.doubleValue),o=Ee(i.doubleValue);return s===o?tu(s)===tu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(qy(s)!==qy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!en(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function $o(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=jr(t),r=jr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ee(i.integerValue||i.doubleValue),a=Ee(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qy(t.timestampValue,e.timestampValue);case 4:return Qy(Lo(t),Lo(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=zr(i),a=zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Ee(i.latitude),Ee(s.latitude));return o!==0?o:Z(Ee(i.longitude),Ee(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Wi(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Fa.mapValue&&s===Fa.mapValue)return 0;if(i===Fa.mapValue)return 1;if(s===Fa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Z(a[c],u[c]);if(d!==0)return d;const h=Wi(o[a[c]],l[u[c]]);if(h!==0)return h}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function Qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=or(t),r=or(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Ki(t){return jd(t)}function jd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=or(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=jd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${jd(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function Hd(t){return!!t&&"integerValue"in t}function Zp(t){return!!t&&"arrayValue"in t}function Yy(t){return!!t&&"nullValue"in t}function Jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(qs(this.value))}}function NS(t){const e=[];return cs(t.fields,(n,r)=>{const i=new Ke([n]);if(al(r)){const s=NS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
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
 */class We{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new We(e,0,z.min(),z.min(),z.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new We(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new We(e,2,n,z.min(),z.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,z.min(),z.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nu{constructor(e,n){this.position=e,this.inclusive=n}}function Xy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function QO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class AS{}class Te extends AS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JO(e,n,r):n==="array-contains"?new ex(e,r):n==="in"?new tx(e,r):n==="not-in"?new nx(e,r):n==="array-contains-any"?new rx(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XO(e,r):new ZO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wi(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends AS{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new tn(e,n)}matches(e){return RS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function RS(t){return t.op==="and"}function PS(t){return YO(t)&&RS(t)}function YO(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Wd(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(PS(t))return t.filters.map(e=>Wd(e)).join(",");{const e=t.filters.map(n=>Wd(n)).join(",");return`${t.op}(${e})`}}function DS(t,e){return t instanceof Te?function(n,r){return r instanceof Te&&n.op===r.op&&n.field.isEqual(r.field)&&en(n.value,r.value)}(t,e):t instanceof tn?function(n,r){return r instanceof tn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&DS(s,r.filters[o]),!0):!1}(t,e):void U()}function OS(t){return t instanceof Te?function(e){return`${e.field.canonicalString()} ${e.op} ${Ki(e.value)}`}(t):t instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(OS).join(" ,")+"}"}(t):"Filter"}class JO extends Te{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class XO extends Te{constructor(e,n){super(e,"in",n),this.keys=xS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZO extends Te{constructor(e,n){super(e,"not-in",n),this.keys=xS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class ex extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zp(n)&&$o(n.arrayValue,this.value)}}class tx extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class nx extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$o(this.value.arrayValue,n)}}class rx extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class ix{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function ev(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ix(t,e,n,r,i,s,o)}function em(t){const e=j(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.dt=n}return e.dt}function tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!DS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zy(t.startAt,e.startAt)&&Zy(t.endAt,e.endAt)}function Kd(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function sx(t,e,n,r,i,s,o,a){return new Zu(t,e,n,r,i,s,o,a)}function nm(t){return new Zu(t)}function tv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ox(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ax(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lx(t){return t.collectionGroup!==null}function Oi(t){const e=j(t);if(e.wt===null){e.wt=[];const n=ax(e),r=ox(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Gs(n)),e.wt.push(new Gs(Ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Gs(Ke.keyField(),s))}}}return e.wt}function In(t){const e=j(t);if(!e._t)if(e.limitType==="F")e._t=ev(e.path,e.collectionGroup,Oi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Oi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Gs(s.field,o))}const r=e.endAt?new nu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new nu(e.startAt.position,e.startAt.inclusive):null;e._t=ev(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function qd(t,e,n){return new Zu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return tm(In(t),In(e))&&t.limitType===e.limitType}function LS(t){return`${em(In(t))}|lt:${t.limitType}`}function Gd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>OS(r)).join(", ")}]`),Xu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),`Target(${n})`}(In(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Oi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Xy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Oi(n),r)||n.endAt&&!function(i,s,o){const a=Xy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Oi(n),r))}(t,e)}function ux(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MS(t){return(e,n)=>{let r=!1;for(const i of Oi(t)){const s=cx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cx(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Wi(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return CS(this.inner)}size(){return this.innerSize}}/**
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
 */const hx=new de($.comparator);function Tn(){return hx}const $S=new de($.comparator);function Ds(...t){let e=$S;for(const n of t)e=e.insert(n.key,n);return e}function bS(t){let e=$S;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return Qs()}function FS(){return Qs()}function Qs(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const dx=new de($.comparator),fx=new Qe($.comparator);function G(...t){let e=fx;for(const n of t)e=e.add(n);return e}const px=new Qe(Z);function mx(){return px}/**
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
 */function US(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tu(e)?"-0":e}}function BS(t){return{integerValue:""+t}}function gx(t,e){return WO(e)?BS(e):US(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class nc{constructor(){this._=void 0}}function yx(t,e,n){return t instanceof ru?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Jp(i)&&(i=Xp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof bo?zS(t,e):t instanceof Fo?jS(t,e):function(r,i){const s=VS(r,i),o=nv(s)+nv(r.gt);return Hd(s)&&Hd(r.gt)?BS(o):US(r.serializer,o)}(t,e)}function vx(t,e,n){return t instanceof bo?zS(t,e):t instanceof Fo?jS(t,e):n}function VS(t,e){return t instanceof iu?Hd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ru extends nc{}class bo extends nc{constructor(e){super(),this.elements=e}}function zS(t,e){const n=HS(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends nc{constructor(e){super(),this.elements=e}}function jS(t,e){let n=HS(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class iu extends nc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function nv(t){return Ee(t.integerValue||t.doubleValue)}function HS(t){return Zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bo&&r instanceof bo||n instanceof Fo&&r instanceof Fo?Hi(n.elements,r.elements,en):n instanceof iu&&r instanceof iu?en(n.gt,r.gt):n instanceof ru&&r instanceof ru}(t.transform,e.transform)}class Ex{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function WS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qS(t.key,pn.none()):new oa(t.key,t.data,pn.none());{const n=t.data,r=Nt.empty();let i=new Qe(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new bt(i.toArray()),pn.none())}}function Sx(t,e,n){t instanceof oa?function(r,i,s){const o=r.value.clone(),a=iv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(r,i,s){if(!ll(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=iv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(KS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof oa?function(i,s,o,a){if(!ll(i.precondition,s))return o;const l=i.value.clone(),u=sv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(i,s,o,a){if(!ll(i.precondition,s))return o;const l=sv(i.fieldTransforms,a,s),u=s.data;return u.setAll(KS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ll(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function _x(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VS(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function rv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hi(n,r,(i,s)=>wx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends rc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends rc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iv(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vx(o,a,n[i]))}return r}function sv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yx(s,o,e))}return r}class qS extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ix extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Sx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=WS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>rv(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>rv(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=dx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */class Cx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class kx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ve,Y;function Nx(t){switch(t){default:return U();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function GS(t){if(t===void 0)return _n("GRPC error has no .code"),C.UNKNOWN;switch(t){case ve.OK:return C.OK;case ve.CANCELLED:return C.CANCELLED;case ve.UNKNOWN:return C.UNKNOWN;case ve.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ve.INTERNAL:return C.INTERNAL;case ve.UNAVAILABLE:return C.UNAVAILABLE;case ve.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ve.NOT_FOUND:return C.NOT_FOUND;case ve.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ve.ABORTED:return C.ABORTED;case ve.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ve.DATA_LOSS:return C.DATA_LOSS;default:return U()}}(Y=ve||(ve={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class im{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ua}static getOrCreateInstance(){return Ua===null&&(Ua=new im),Ua}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ua=null;/**
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
 */function Ax(){return new TextEncoder}/**
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
 */const Rx=new Di([4294967295,4294967295],0);function ov(t){const e=Ax().encode(t),n=new PO;return n.update(e),new Uint8Array(n.digest())}function av(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Di([n,r],0),new Di([i,s],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Di.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Di.fromNumber(r)));return i.compare(Rx)===1&&(i=new Di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=ov(e),[r,i]=av(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=ov(e),[r,i]=av(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ic{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ic(z.min(),i,new de(Z),Tn(),G())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,G(),G(),G())}}/**
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
 */class ul{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class QS{constructor(e,n){this.targetId=e,this.Vt=n}}class YS{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lv{constructor(){this.St=0,this.Dt=cv(),this.Ct=Xe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=G(),n=G(),r=G();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new aa(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=cv()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Px{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Tn(),this.zt=uv(),this.Wt=new de(Z)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Kd(o))if(i===0){const a=new $(o.path);this.Yt(r,a,We.newNoDocument(a,z.min()))}else oe(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=im.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var h,m,y,v,E,g;const f={localCacheCount:c,existenceFilterCount:d.count},p=d.unchangedNames;return p&&(f.bloomFilter={applied:u===0,hashCount:(h=p==null?void 0:p.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(v=(y=(m=p==null?void 0:p.bits)===null||m===void 0?void 0:m.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(g=(E=p==null?void 0:p.bits)===null||E===void 0?void 0:E.padding)!==null&&g!==void 0?g:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=zr(s).toUint8Array()}catch(c){if(c instanceof kS)return ji("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new sm(l,o,a)}catch(c){return ji(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Kd(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,We.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=G();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ic(e,n,this.Wt,this.jt,r);return this.jt=Tn(),this.zt=uv(),this.Wt=new de(Z),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new lv,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Qe(Z),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new lv),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function uv(){return new de($.comparator)}function cv(){return new de($.comparator)}const Dx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ox=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xx=(()=>({and:"AND",or:"OR"}))();class Lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qd(t,e){return t.useProto3Json||Xu(e)?e:{value:e}}function su(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mx(t,e){return su(t,e.toTimestamp())}function Xt(t){return oe(!!t),z.fromTimestamp(function(e){const n=or(e);return new ke(n.seconds,n.nanos)}(t))}function om(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function XS(t){const e=le.fromString(t);return oe(n_(e)),e}function Yd(t,e){return om(t.databaseId,e.path)}function fh(t,e){const n=XS(e);if(n.get(1)!==t.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(ZS(n))}function Jd(t,e){return om(t.databaseId,e)}function $x(t){const e=XS(t);return e.length===4?le.emptyPath():ZS(e)}function Xd(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ZS(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hv(t,e,n){return{name:Yd(t,e),fields:n.value.mapValue.fields}}function bx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(oe(u===void 0||typeof u=="string"),Xe.fromBase64String(u||"")):(oe(u===void 0||u instanceof Uint8Array),Xe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:GS(l.code);return new M(u,l.message||"")}(o);n=new YS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fh(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):z.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=We.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ul(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fh(t,r.document),s=r.readTime?Xt(r.readTime):z.min(),o=We.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fh(t,r.document),s=r.removedTargetIds||[];n=new ul([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kx(i,s),a=r.targetId;n=new QS(a,o)}}return n}function Fx(t,e){let n;if(e instanceof oa)n={update:hv(t,e.key,e.value)};else if(e instanceof qS)n={delete:Yd(t,e.key)};else if(e instanceof Zr)n={update:hv(t,e.key,e.data),updateMask:qx(e.fieldMask)};else{if(!(e instanceof Ix))return U();n={verify:Yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ru)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof iu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Mx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function Ux(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Xt(r.updateTime):Xt(i);return s.isEqual(z.min())&&(s=Xt(i)),new Ex(s,r.transformResults||[])}(n,e))):[]}function Bx(t,e){return{documents:[Jd(t,e.path)]}}function Vx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return t_(tn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ri(c.field),direction:Hx(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Qd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function zx(t){let e=$x(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=e_(c);return d instanceof tn&&PS(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Gs(ii(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Xu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new nu(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new nu(h,d)}(n.endAt)),sx(e,i,o,s,a,"F",l,u)}function jx(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function e_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ii(e.unaryFilter.field);return Te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ii(e.unaryFilter.field);return Te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ii(e.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ii(e.unaryFilter.field);return Te.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return Te.create(ii(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(n=>e_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function Hx(t){return Dx[t]}function Wx(t){return Ox[t]}function Kx(t){return xx[t]}function ri(t){return{fieldPath:t.canonicalString()}}function ii(t){return Ke.fromServerFormat(t.fieldPath)}function t_(t){return t instanceof Te?function(e){if(e.op==="=="){if(Jy(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NAN"}};if(Yy(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jy(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NOT_NAN"}};if(Yy(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(e.field),op:Wx(e.op),value:e.value}}}(t):t instanceof tn?function(e){const n=e.getFilters().map(r=>t_(r));return n.length===1?n[0]:{compositeFilter:{op:Kx(e.op),filters:n}}}(t):U()}function qx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function n_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Gx{constructor(e){this.fe=e}}function Qx(t){const e=zx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qd(e,e.limit,"L"):e}/**
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
 */class Yx{constructor(){this.rn=new Jx}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(sr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Jx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(le.comparator)).toArray()}}/**
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
 */class qi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new qi(0)}static Mn(){return new qi(-1)}}/**
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
 */class Xx{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Zx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ys(r.mutation,i,bt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const i=Nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tn();const o=Qs(),a=Qs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Zr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ys(c.mutation,u,c.mutation.getFieldMask(),ke.now())):o.set(u.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new Zx(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new de((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=FS();c.forEach(h=>{if(!s.has(h)){const m=WS(n.get(h),r.get(h));m!==null&&d.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Nr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,G())).next(c=>({batchId:a,changes:bS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ds();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,c){return new Zu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,We.newInvalidDocument(u)))});let o=Ds();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ys(u.mutation,l,bt.empty(),ke.now()),tc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class tL{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Xt(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Qx(r.bundledQuery),readTime:Xt(r.readTime)}}(n)),A.resolve()}}/**
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
 */class nL{constructor(){this.overlays=new de($.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Nr(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new de((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Nr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Nr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Cx(n,r));let s=this.ls.get(n);s===void 0&&(s=G(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class am{constructor(){this.fs=new Qe(Ae.ds),this.ws=new Qe(Ae._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ae(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new le([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new le([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=G();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||Z(e.As,n.As)}static _s(e,n){return Z(e.As,n.As)||$.comparator(e.key,n.key)}}/**
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
 */class rL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Qe(Ae.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(Z);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),A.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new $(s),0);let a=new Qe(Z);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return A.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ae(n,0),i=this.Rs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iL{constructor(e){this.Ds=e,this.docs=new de($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zO(VO(c),r)<=0||(i.has(c.key)||tc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Cs(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sL(this)}getSize(e){return A.resolve(this.size)}}class sL extends Xx{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class oL{constructor(e){this.persistence=e,this.xs=new hs(n=>em(n),tm),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Ns=0,this.ks=new am,this.targetCount=0,this.Ms=qi.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
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
 */class aL{constructor(e,n){this.$s={},this.overlays={},this.Os=new Yp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new oL(this),this.indexManager=new Yx,this.remoteDocumentCache=function(r){return new iL(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Gx(n),this.qs=new tL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new rL(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new lL(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return A.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class lL extends HO{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.Qs=new am,this.js=null}static zs(e){return new lm(e)}get Ws(){if(this.js)return this.js;throw U()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new um(e,n.fromCache,r,i)}}/**
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
 */class uL{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(tv(n))return A.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qd(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,qd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return tv(n)||i.isEqual(z.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Ky()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gd(n)),this.Wi(e,o,n,BO(i,-1)))})}ji(e,n){let r=new Qe(MS(e));return n.forEach((i,s)=>{tc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Ky()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Gd(n)),this.Ui.getDocumentsMatchingQuery(e,n,sr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class cL{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new de(Z),this.Yi=new hs(s=>em(s),tm),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eL(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function hL(t,e,n,r){return new cL(t,e,n,r)}async function r_(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function dL(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=A.resolve();return d.forEach(m=>{h=h.next(()=>u.getEntry(a,m)).next(y=>{const v=l.docVersions.get(m);oe(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=G();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function i_(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function fL(t,e){const n=j(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let m=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(Xe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(d,m),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=Tn(),u=G();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(pL(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(z.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function pL(t,e,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function mL(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gL(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Zd(t,e,n){const r=j(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sa(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function dv(t,e,n){const r=j(t);let i=z.min(),s=G();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),d=c.Yi.get(u);return d!==void 0?A.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,In(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:G())).next(a=>(yL(r,ux(e),a),{documents:a,ir:s})))}function yL(t,e,n){let r=t.Xi.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class fv{constructor(){this.activeTargetIds=mx()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vL{constructor(){this.Hr=new fv,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wL{Yr(e){}shutdown(){}}/**
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
 */class pv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ba=null;function ph(){return Ba===null?Ba=268435456+Math.round(2147483648*Math.random()):Ba++,"0x"+Ba.toString(16)}/**
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
 */const EL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class SL{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ve="WebChannelConnection";class _L extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=ph(),a=this.To(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(L("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ji("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+us,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=EL[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=ph();return new Promise((o,a)=>{const l=new RO;l.setWithCredentials(!0),l.listenOnce(kO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dh.NO_ERROR:const c=l.getResponseJson();L(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case dh.TIMEOUT:L(Ve,`RPC '${e}' ${s} timed out`),a(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const d=l.getStatus();if(L(Ve,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(E)>=0?E:C.UNKNOWN}(m.status);a(new M(y,m.message))}else a(new M(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(C.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{L(Ve,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(Ve,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=ph(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TO(),a=CO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new AO({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(Ve,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,m=!1;const y=new SL({ro:E=>{m?L(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(h||(L(Ve,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),L(Ve,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},oo:()=>d.close()}),v=(E,g,f)=>{E.listen(g,p=>{try{f(p)}catch(w){setTimeout(()=>{throw w},0)}})};return v(d,$a.EventType.OPEN,()=>{m||L(Ve,`RPC '${e}' stream ${i} transport opened.`)}),v(d,$a.EventType.CLOSE,()=>{m||(m=!0,L(Ve,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(d,$a.EventType.ERROR,E=>{m||(m=!0,ji(Ve,`RPC '${e}' stream ${i} transport errored:`,E),y.wo(new M(C.UNAVAILABLE,"The operation could not be completed")))}),v(d,$a.EventType.MESSAGE,E=>{var g;if(!m){const f=E.data[0];oe(!!f);const p=f,w=p.error||((g=p[0])===null||g===void 0?void 0:g.error);if(w){L(Ve,`RPC '${e}' stream ${i} received error:`,w);const _=w.status;let I=function(R){const V=ve[R];if(V!==void 0)return GS(V)}(_),S=w.message;I===void 0&&(I=C.INTERNAL,S="Unknown error status: "+_+" with message "+w.message),m=!0,y.wo(new M(I,S)),d.close()}else L(Ve,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),v(a,NO.STAT_EVENT,E=>{E.stat===Hy.PROXY?L(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Hy.NOPROXY&&L(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function mh(){return typeof document<"u"?document:null}/**
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
 */function sc(t){return new Lx(t,!0)}/**
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
 */class s_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class o_{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new s_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IL extends o_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=bx(this.serializer,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?Xt(s.readTime):z.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Xd(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Kd(a)?{documents:Bx(i,a)}:{query:Vx(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=JS(i,s.resumeToken);const l=Qd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(z.min())>0){o.readTime=su(i,s.snapshotVersion.toTimestamp());const l=Qd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=jx(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Xd(this.serializer),n.removeTarget=e,this.Wo(n)}}class TL extends o_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Ux(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.cu(r,n)}return oe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Xd(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Fx(this.serializer,r))};this.Wo(n)}}/**
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
 */class CL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(C.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(C.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class kL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(_n(n),this.mu=!1):L("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class NL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{ei(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l.vu.add(4),await la(l),l.bu.set("Unknown"),l.vu.delete(4),await oc(l)}(this))})}),this.bu=new kL(r,i)}}async function oc(t){if(ei(t))for(const e of t.Ru)await e(!0)}async function la(t){for(const e of t.Ru)await e(!1)}function a_(t,e){const n=j(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),dm(n)?hm(n):ds(n).Ko()&&cm(n,e))}function l_(t,e){const n=j(t),r=ds(n);n.Au.delete(e),r.Ko()&&u_(n,e),n.Au.size===0&&(r.Ko()?r.jo():ei(n)&&n.bu.set("Unknown"))}function cm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).su(e)}function u_(t,e){t.Vu.qt(e),ds(t).iu(e)}function hm(t){t.Vu=new Px({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.bu.gu()}function dm(t){return ei(t)&&!ds(t).Uo()&&t.Au.size>0}function ei(t){return j(t).vu.size===0}function c_(t){t.Vu=void 0}async function AL(t){t.Au.forEach((e,n)=>{cm(t,e)})}async function RL(t,e){c_(t),dm(t)?(t.bu.Iu(e),hm(t)):t.bu.set("Unknown")}async function PL(t,e,n){if(t.bu.set("Online"),e instanceof YS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ou(t,r)}else if(e instanceof ul?t.Vu.Ht(e):e instanceof QS?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(z.min()))try{const r=await i_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Xe.EMPTY_BYTE_STRING,u.snapshotVersion)),u_(i,a);const c=new Vn(u.target,a,l,u.sequenceNumber);cm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await ou(t,r)}}async function ou(t,e,n){if(!sa(e))throw e;t.vu.add(1),await la(t),t.bu.set("Offline"),n||(n=()=>i_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await oc(t)})}function h_(t,e){return e().catch(n=>ou(t,n,e))}async function ac(t){const e=j(t),n=ar(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;DL(e);)try{const i=await mL(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,OL(e,i)}catch(i){await ou(e,i)}d_(e)&&f_(e)}function DL(t){return ei(t)&&t.Eu.length<10}function OL(t,e){t.Eu.push(e);const n=ar(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function d_(t){return ei(t)&&!ar(t).Uo()&&t.Eu.length>0}function f_(t){ar(t).start()}async function xL(t){ar(t).hu()}async function LL(t){const e=ar(t);for(const n of t.Eu)e.uu(n.mutations)}async function ML(t,e,n){const r=t.Eu.shift(),i=rm.from(r,e,n);await h_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ac(t)}async function $L(t,e){e&&ar(t).ou&&await async function(n,r){if(i=r.code,Nx(i)&&i!==C.ABORTED){const s=n.Eu.shift();ar(n).Qo(),await h_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ac(n)}var i}(t,e),d_(t)&&f_(t)}async function mv(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=ei(n);n.vu.add(3),await la(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await oc(n)}async function bL(t,e){const n=j(t);e?(n.vu.delete(2),await oc(n)):e||(n.vu.add(2),await la(n),n.bu.set("Unknown"))}function ds(t){return t.Su||(t.Su=function(e,n,r){const i=j(e);return i.fu(),new IL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:AL.bind(null,t),ao:RL.bind(null,t),nu:PL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),dm(t)?hm(t):t.bu.set("Unknown")):(await t.Su.stop(),c_(t))})),t.Su}function ar(t){return t.Du||(t.Du=function(e,n,r){const i=j(e);return i.fu(),new TL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:xL.bind(null,t),ao:$L.bind(null,t),au:LL.bind(null,t),cu:ML.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ac(t)):(await t.Du.stop(),t.Eu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new fm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(t,e){if(_n("AsyncQueue",`${e}: ${t}`),sa(t))return new M(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class gv{constructor(){this.Cu=new de($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):U():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gi(e,n,xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class FL{constructor(){this.Nu=void 0,this.listeners=[]}}class UL{constructor(){this.queries=new hs(e=>LS(e),ec),this.onlineState="Unknown",this.ku=new Set}}async function p_(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new FL),i)try{s.Nu=await n.onListen(r)}catch(o){const a=pm(o,`Initialization of query '${Gd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&mm(n)}async function m_(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function BL(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&mm(n)}function VL(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function mm(t){t.ku.forEach(e=>{e.next()})}class g_{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class y_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class zL{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=G(),this.mutatedKeys=G(),this.tc=MS(e),this.ec=new xi(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new gv,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),m=tc(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;h&&m?h.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),E=!0):this.rc(h,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),E=!0):h&&!m&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,h){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return m(d)-m(h)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Gi(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new gv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=G(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new v_(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new y_(r))}),n}hc(e){this.Yu=e.ir,this.Zu=G();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Gi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class jL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HL{constructor(e){this.key=e,this.fc=!1}}class WL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new hs(a=>LS(a),ec),this._c=new Map,this.mc=new Set,this.gc=new de($.comparator),this.yc=new Map,this.Ic=new am,this.Tc={},this.Ec=new Map,this.Ac=qi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function KL(t,e){const n=nM(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await gL(n.localStore,In(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await qL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&a_(n.remoteStore,o)}return i}async function qL(t,e,n,r,i){t.Rc=(d,h,m)=>async function(y,v,E,g){let f=v.view.sc(E);f.zi&&(f=await dv(y.localStore,v.query,!1).then(({documents:_})=>v.view.sc(_,f)));const p=g&&g.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,p);return vv(y,v.targetId,w.cc),w.snapshot}(t,d,h,m);const s=await dv(t.localStore,e,!0),o=new zL(e,s.ir),a=o.sc(s.documents),l=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);vv(t,n,u.cc);const c=new jL(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function GL(t,e){const n=j(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!ec(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),l_(n.remoteStore,r.targetId),ef(n,r.targetId)}).catch(ia)):(ef(n,r.targetId),await Zd(n.localStore,r.targetId,!0))}async function QL(t,e,n){const r=rM(t);try{const i=await function(s,o){const a=j(s),l=ke.now(),u=o.reduce((h,m)=>h.add(m.key),G());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let m=Tn(),y=G();return a.Zi.getEntries(h,u).next(v=>{m=v,m.forEach((E,g)=>{g.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,m)).next(v=>{c=v;const E=[];for(const g of o){const f=_x(g,c.get(g.key).overlayedDocument);f!=null&&E.push(new Zr(g.key,f,NS(f.value.mapValue),pn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,E,o)}).next(v=>{d=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,v.batchId,E)})}).then(()=>({batchId:d.batchId,changes:bS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new de(Z)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await ua(r,i.changes),await ac(r.remoteStore)}catch(i){const s=pm(i,"Failed to persist write");n.reject(s)}}async function w_(t,e){const n=j(t);try{const r=await fL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?oe(o.fc):i.removedDocuments.size>0&&(oe(o.fc),o.fc=!1))}),await ua(n,r,e)}catch(r){await ia(r)}}function yv(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&mm(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YL(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new de($.comparator);o=o.insert(s,We.newNoDocument(s,z.min()));const a=G().add(s),l=new ic(z.min(),new Map,new de(Z),o,a);await w_(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),gm(r)}else await Zd(r.localStore,e,!1).then(()=>ef(r,e,n)).catch(ia)}async function JL(t,e){const n=j(t),r=e.batch.batchId;try{const i=await dL(n.localStore,e);S_(n,r,null),E_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await ia(i)}}async function XL(t,e,n){const r=j(t);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(oe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);S_(r,e,n),E_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await ia(i)}}function E_(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function S_(t,e,n){const r=j(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function ef(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||__(t,r)})}function __(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(l_(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),gm(t))}function vv(t,e,n){for(const r of n)r instanceof y_?(t.Ic.addReference(r.key,e),ZL(t,r)):r instanceof v_?(L("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||__(t,r.key)):U()}function ZL(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.mc.add(r),gm(t))}function gm(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(le.fromString(e)),r=t.Ac.next();t.yc.set(r,new HL(n)),t.gc=t.gc.insert(n,r),a_(t.remoteStore,new Vn(In(nm(n.path)),r,"TargetPurposeLimboResolution",Yp.ct))}}async function ua(t,e,n){const r=j(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=um.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>A.forEach(l,d=>A.forEach(d.Fi,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>A.forEach(d.Bi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!sa(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ji.get(d),m=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(r.localStore,s))}async function eM(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await r_(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new M(C.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.er)}}function tM(t,e){const n=j(t),r=n.yc.get(e);if(r&&r.fc)return G().add(r.key);{let i=G();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function nM(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=w_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YL.bind(null,e),e.dc.nu=BL.bind(null,e.eventManager),e.dc.Pc=VL.bind(null,e.eventManager),e}function rM(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XL.bind(null,e),e}class wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hL(this.persistence,new uL,e.initialUser,this.serializer)}createPersistence(e){return new aL(lm.zs,this.serializer)}createSharedClientState(e){return new vL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eM.bind(null,this.syncEngine),await bL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new UL}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new _L(i));var i;return function(s,o,a,l){return new CL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>yv(this.syncEngine,a,0),o=pv.D()?new pv:new wL,new NL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new WL(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);L("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await la(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class I_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=TS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await r_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aM(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>mv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>mv(e.remoteStore,s)),t._onlineComponents=e}function oM(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function aM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!oM(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new wv)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await gh(t,new wv);return t._offlineComponents}async function T_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Ev(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Ev(t,new iM))),t._onlineComponents}function lM(t){return T_(t).then(e=>e.syncEngine)}async function C_(t){const e=await T_(t),n=e.eventManager;return n.onListen=KL.bind(null,e.syncEngine),n.onUnlisten=GL.bind(null,e.syncEngine),n}function uM(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new I_({next:d=>{s.enqueueAndForget(()=>m_(i,c));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new M(C.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new M(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new g_(nm(o.path),u,{includeMetadataChanges:!0,Ku:!0});return p_(i,c)}(await C_(t),t.asyncQueue,e,n,r)),r.promise}function cM(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new I_({next:d=>{s.enqueueAndForget(()=>m_(i,c)),d.fromCache&&a.source==="server"?l.reject(new M(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new g_(o,u,{includeMetadataChanges:!0,Ku:!0});return p_(i,c)}(await C_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function k_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sv=new Map;/**
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
 */function N_(t,e,n){if(!n)throw new M(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hM(t,e,n,r){if(e===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _v(t){if(!$.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iv(t){if($.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ym(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ym(t);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Tv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class lc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DO;switch(n.type){case"firstParty":return new MO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Sv.get(e);n&&(L("ComponentProvider","Removing Datastore"),Sv.delete(e),n.terminate())}(this),Promise.resolve()}}function dM(t,e,n,r={}){var i;const s=(t=Hr(t,lc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ji("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ze.MOCK_USER;else{o=Jk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ze(l)}t._authCredentials=new OO(new IS(o,a))}}/**
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
 */class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class uc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uc(this.firestore,e,this._query)}}class tr extends uc{constructor(e,n,r){super(e,n,nm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new $(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function fM(t,e,...n){if(t=rt(t),N_("collection","path",e),t instanceof lc){const r=le.fromString(e,...n);return Iv(r),new tr(t,null,r)}{if(!(t instanceof yt||t instanceof tr))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Iv(r),new tr(t.firestore,null,r)}}function A_(t,e,...n){if(t=rt(t),arguments.length===1&&(e=TS.A()),N_("doc","path",e),t instanceof lc){const r=le.fromString(e,...n);return _v(r),new yt(t,null,new $(r))}{if(!(t instanceof yt||t instanceof tr))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return _v(r),new yt(t.firestore,t instanceof tr?t.converter:null,new $(r))}}/**
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
 */class pM{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new s_(this,"async_queue_retry"),this.Xc=()=>{const n=mh();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new fn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!sa(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw _n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=fm.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class cc extends lc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new pM,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||R_(this),this._firestoreClient.terminate()}}function mM(t,e){const n=typeof t=="object"?t:hp(),r=typeof t=="string"?t:e||"(default)",i=Yr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Qk("firestore");s&&dM(i,...s)}return i}function vm(t){return t._firestoreClient||R_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function R_(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new qO(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,k_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new sM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qi(Xe.fromBase64String(e))}catch(n){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qi(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class P_{constructor(e){this._methodName=e}}/**
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
 */class Em{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */const gM=/^__.*__$/;class yM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}function D_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Sm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Sm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return au(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(D_(this.ca)&&gM.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class vM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}ya(e,n,r,i=!1){return new Sm({ca:e,methodName:n,ga:r,path:Ke.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wM(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new vM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EM(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);M_("Data must be an object, but it was:",o,r);const a=x_(r,o);let l,u;if(s.merge)l=new bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=SM(e,d,n);if(!o.contains(h))throw new M(C.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);IM(c,h)||c.push(h)}l=new bt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new yM(new Nt(a),l,u)}function O_(t,e){if(L_(t=rt(t)))return M_("Unsupported field value:",e,t),x_(t,e);if(t instanceof P_)return function(n,r){if(!D_(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=O_(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gx(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ke.fromDate(n);return{timestampValue:su(r.serializer,i)}}if(n instanceof ke){const i=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:su(r.serializer,i)}}if(n instanceof Em)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qi)return{bytesValue:JS(r.serializer,n._byteString)};if(n instanceof yt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:om(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${ym(n)}`)}(t,e)}function x_(t,e){const n={};return CS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,i)=>{const s=O_(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function L_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Em||t instanceof Qi||t instanceof yt||t instanceof P_)}function M_(t,e,n){if(!L_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ym(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function SM(t,e,n){if((e=rt(e))instanceof wm)return e._internalPath;if(typeof e=="string")return $_(t,e);throw au("Field path arguments must be of type string or ",t,!1,void 0,n)}const _M=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(_M)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wm(...e.split("."))._internalPath}catch{throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function au(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(C.INVALID_ARGUMENT,a+t+l)}function IM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class b_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(F_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TM extends b_{data(){return super.data()}}function F_(t,e){return typeof e=="string"?$_(t,e):e instanceof wm?e._internalPath:e._delegate._internalPath}/**
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
 */function CM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kM{convertValue(e,n="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Em(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Lo(e));default:return null}}convertTimestamp(e){const n=or(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);oe(n_(r));const i=new Mo(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function NM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class U_ extends b_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(F_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cl extends U_{data(e={}){return super.data(e)}}class AM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cl(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new cl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new cl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:RM(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function PM(t){t=Hr(t,yt);const e=Hr(t.firestore,cc);return uM(vm(e),t._key).then(n=>LM(e,t,n))}class B_ extends kM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function DM(t){t=Hr(t,uc);const e=Hr(t.firestore,cc),n=vm(e),r=new B_(e);return CM(t._query),cM(n,t._query).then(i=>new AM(e,r,t,i))}function OM(t,e,n){t=Hr(t,yt);const r=Hr(t.firestore,cc),i=NM(t.converter,e,n);return xM(r,[EM(wM(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function xM(t,e){return function(n,r){const i=new fn;return n.asyncQueue.enqueueAndForget(async()=>QL(await lM(n),r,i)),i.promise}(vm(t),e)}function LM(t,e,n){const r=n.docs.get(e._key),i=new B_(t);return new U_(t,i,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){us=n})(os),Zt(new Vt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new cc(new xO(n.getProvider("auth-internal")),new bO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pt(Wy,"3.12.1",t),Pt(Wy,"3.12.1","esm2017")})();const MM={apiKey:"AIzaSyA_8lct9jb2uNucLXL-GGxKAkN2psWvC88",authDomain:"thaiastro-demo.firebaseapp.com",projectId:"thaiastro-demo",storageBucket:"thaiastro-demo.appspot.com",messagingSenderId:"228224947525",appId:"1:228224947525:web:54cdec7d989a486e445a2c",measurementId:"G-5H6YN0C34K"},_m=pw(MM);ED(_m);const hl=WR(_m),Im=mM(_m);hl.useDeviceLanguage();const Ei=class{};let F=Ei;yr(F,"isProduction",!1),yr(F,"build",e=>n=>`[${e}] ${n}`),yr(F,"log",(...e)=>!Ei.isProduction&&console.log(...e)),yr(F,"info",(...e)=>!Ei.isProduction&&console.info(...e)),yr(F,"warn",(...e)=>!Ei.isProduction&&console.warn(...e)),yr(F,"error",(...e)=>!Ei.isProduction&&console.error(...e));const Js=F.build("userData"),V_=t=>{F.log(Js("getting the user data"));const e=A_(Im,"users",t);return PM(e).then(n=>(F.log(Js("received the data")),n.data())).catch(n=>(F.error(Js("getUserData cannot get the data"),n),n))},Tm=(t,e)=>{const n=A_(Im,"users",t),r={...e};return OM(n,r,{merge:!0}).then(()=>{F.log(Js("user data has been upserted"))}).catch(i=>(F.error(Js("upsertUser cannot get the data"),i),i))},$M=(t,e)=>sessionStorage.setItem(t,e),z_=t=>sessionStorage.getItem(t),j_=t=>sessionStorage.removeItem(t),Uo="isNewUser",bM=()=>W("div",{role:"status",children:[W("svg",{"aria-hidden":"true",className:"w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-white fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[T("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),T("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),T("span",{className:"sr-only",children:"Loading…"})]}),H_=k.createContext(void 0),fs=()=>k.useContext(H_),FM=({children:t})=>{const e=F.build("AuthProvider"),[n,r]=k.useState(),[i,s]=k.useState(),[o,a]=k.useState(!0);if(k.useEffect(()=>mA(hl,async p=>{if(!p)return F.info(e("auth state changed to no user"));F.info(e("auth state changed")),r(p)}),[e]),k.useEffect(()=>{n&&y(n).then(()=>a(!1))},[n]),o)return T("main",{className:"h-screen w-full flex items-center justify-center",children:T(bM,{})});const l=!!n,u=()=>{$M(Uo,"true")},c=()=>{j_(Uo)},d=f=>{F.log(e("getting additional user info"));const p=dA(f);return F.info(e(`this user is a ${p!=null&&p.isNewUser?"new":"returning"} user`)),p},h=(f,p)=>{if(F.log(e(`inserting user data, defined: ${!!n} (u: ${!!f}), new: ${p==null?void 0:p.isNewUser}`)),!n&&!f)return new Promise(()=>n);if(!(p!=null&&p.isNewUser))return new Promise(()=>!1);const w={userId:f.uid,phoneNumber:f.phoneNumber||"",points:[]};return Tm(f.uid,w).then(()=>(F.log(e("user data has been inserted")),u(),!0)).catch(_=>{throw F.error(e("cannot insert user data"),_.code,_),F.error(JSON.stringify(_)),_.code})},m=(f,p)=>(F.log(e("sending OTP ")),GA(hl,f,p).then(w=>(F.log(e("OTP has been sucessfully sent")),window.confirmationResult=w,w)).catch(w=>{throw F.error(e("OTP was not sent"),w.code,w),F.error(JSON.stringify(w)),w.code}));function y(f){return V_(f.uid).then(p=>(s(p),p))}const g={isLoggedIn:l,memberData:i,user:n,clearNewUser:c,getAdditionalUserInfo:d,insertUserData:h,sendOtp:m,setAsNewUser:u,updateMemberData:y,verifyOtp:f=>(F.log(e("verifying OTP ")),window.confirmationResult.confirm(f).then(p=>(F.log(e("OTP has been verified")),r(p.user),p)).catch(p=>{throw F.error(e("OTP verification failed"),p.code,p),F.error(JSON.stringify(p)),p.code})),verifyRecaptcha:f=>(F.log(e("verifying recaptcha")),window.recaptchaVerifier||(window.recaptchaVerifier=new WA(f,{size:"invisible",callback:p=>{},"error-callback":p=>{F.error(e("Error from verifyRecaptcha: "),p)}},hl)),window.recaptchaVerifier.verify().then(p=>(F.log(e("recaptcha has been verified")),p)).catch(p=>{throw F.error(e("recaptcha failed to verify"),p.code,p),F.error(JSON.stringify(p)),p.code}))};return T(H_.Provider,{value:g,children:t})},Cv=()=>{const t="sign-in-button",[e,n]=k.useState(""),[r,i]=k.useState(""),[s,o]=k.useState(0),[a,l]=k.useState(),u=fs(),c=Au(),d=!1,h=F.build("Authenticate");k.useEffect(()=>{u!=null&&u.isLoggedIn&&(F.log(h("User is already logged in, redirecting to profile page")),c(Eo))},[u==null?void 0:u.isLoggedIn,c,h]);const m=S=>{switch(S){case 7:return["หมายเลขโทรศัพท์ไม่ถูกต้อง",`หมายเลข ${e} ไม่ถูกต้อง โปรดตรวจสอบอีกครั้ง`];case 1:case 8:return["โปรดกรอกหมายเลขโทรศัพท์","คุณยังไม่ได้กรอกหมายเลขโทรศัพท์ โปรดกรอกหมายเลขโทรศัพท์ของคุณ"];case 9:return["เกิดข้อผิดพลาด","คุณทำรายการถี่เกินไป โปรดรอสักพักก่อนลองใหม่อีกครั้ง"];case 18:return["เกิดข้อผิดพลาด","ผู้ใช้นี้ถูกระงับการใช้งาน"];case 16:return["รหัส OTP ไม่ถูกต้อง","ลองตรวจสอบรหัส OTP ที่ได้รับทาง SMS อีกครั้ง รหัสนี้มี 6 หลักและเป็นตัวเลขเท่านั้น"];case 15:return["โปรดกรอกรหัส OTP","ลองตรวจสอบรหัส OTP ที่ได้รับทาง SMS อีกครั้ง รหัสนี้มี 6 หลักและเป็นตัวเลขเท่านั้น"];case 17:return["รหัส OTP หมดอายุแล้ว","กรุณาเริ่มใหม่อีกครั้ง"];case 21:return["เกิดข้อผิดพลาด","เราไม่สามารถสร้างบัญชีให้ท่านได้ โปรดติดต่อสมาคมดาราศาสตร์ไทย 02 381 7409 หรือที่เพจสมาคมดาราศาสตร์ไทย"];case 3:case 14:case 6:case 10:case 11:case 20:default:return["เกิดข้อผิดพลาด","มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง"]}},y=S=>{o(S);const[R,V]=m(S);l({text:R,hint:V})},v=()=>{o(5),l(void 0),u==null||u.sendOtp(e,window.recaptchaVerifier).then(()=>{o(12)}).catch(S=>{console.warn(S),y(S==="auth/captcha-check-failed"?6:S==="auth/invalid-phone-number"?7:S==="auth/missing-phone-number"?8:S==="auth/quota-exceeded"?10:S==="auth/operation-not-allowed"?11:S==="auth/too-many-requests"?9:6)})},E=S=>{const R=u==null?void 0:u.getAdditionalUserInfo(S);R&&(u==null||u.insertUserData(S.user,R).then(V=>{if(V)o(23),c(Z1);else if(V===!1)o(22),c(Eo);else if(V==null){const[b,_e]=m(20);l({text:b,hint:_e})}}).catch(()=>{y(21)}))},g=()=>{o(13),l(void 0),u==null||u.verifyOtp(r).then(S=>{o(19),E(S)}).catch(S=>{y(S==="auth/invalid-verification-code"?16:S==="auth/missing-verification-code"?15:S==="auth/code-expired"?17:S==="auth/user-disabled"?18:14)})},f=()=>{if(u==null||u.clearNewUser(),o(2),l(void 0),!e)return y(1);u==null||u.verifyRecaptcha(t).then(()=>{F.log(h("recaptcha verified")),o(4)}).then(v).catch(S=>{y(3)})},p=()=>s===0?"รับรหัสผ่าน":s===2?"กำลังตรวจสอบ…":"WHATTT!?",w=S=>{n(()=>S.target.value.length>=3&&!S.target.value.includes("+")?`+66${S.target.value}`:S.target.value)},_=T("section",{children:T("img",{alt:"สมาคมดาราศาสตร์ไทย",src:nw,className:"w-16",style:{filter:"contrast(0) brightness(0) invert()"}})}),I=W("section",{className:"mt-8",children:[a&&W("div",{className:He("my-8 bg-red-300 text-red-700 rounded-md p-4 min-w-[6rem] font-heading"),children:[W("h3",{className:"tas-body-large font-semibold",children:[a==null?void 0:a.text," (",s,")"]}),(a==null?void 0:a.hint)&&T("div",{className:"tas-body-small mt-2",children:a==null?void 0:a.hint}),d]}),W("label",{children:[T("span",{className:"font-heading tas-body",children:"หมายเลขโทรศัพท์"}),T("input",{className:"mt-3 border w-full h-10 p-2 text-black",placeholder:"0801234567",type:"text",inputMode:"numeric",pattern:"[0-9]*",onChange:w,disabled:s>=12})]}),s<12&&T("button",{className:He("bg-blue-700 px-3 py-2 mt-6","tas-body text-white font-heading font-medium"),onClick:f,children:p()}),s>=12&&W(Zs,{children:[W("label",{className:"mt-6 block",children:[T("span",{className:"font-heading tas-body",children:"รหัสผ่านที่ได้รับ"}),T("input",{className:"mt-3 border w-full h-10 p-2 text-black",type:"text",placeholder:"123456",inputMode:"numeric",pattern:"[0-9]*",onChange:S=>i(S.target.value)})]}),T("button",{className:He("bg-blue-700 px-3 py-2 mt-6","tas-body text-white font-heading font-medium"),onClick:g,children:"ตรวจสอบ OTP"})]})]});return W(Zs,{children:[_,I,T("div",{"aria-hidden":!0,id:t})]})},yh=t=>W("label",{...t.labelProps,className:He("block",t.classNames),children:[T("span",{className:He("tas-body",t.labelClasses),children:t.label}),t.hint&&T("div",{className:He("mt-3 tas-body text-tas-secondary",t.hintClasses),children:t.hint}),T("input",{...t.inputProps,className:He("h-10 mt-3 border-2 p-2 tas-body",t.inputClasses)})]}),UM=()=>{const t=fs(),e=Au(),[n,r]=k.useState(),[i,s]=k.useState(!1),o=z_(Uo)==="true";if(k.useEffect(()=>{if(!(t!=null&&t.user)||!(t!=null&&t.memberData))return;const{firstName:d="",lastName:h="",email:m="",membershipId:y=""}=t.memberData;r({firstName:d,lastName:h,email:m,membershipId:y})},[t]),!(t!=null&&t.user)||!(t!=null&&t.memberData))return T("h1",{children:"NO DATA!"});const a=d=>{const h=d.target,m=h.type==="checkbox"?h.checked:h.value,y=h.name;r({...n,[y]:m})},l=d=>{const h=t==null?void 0:t.user;if(!h)return;d.preventDefault(),s(!0);const m={...n};Tm(h.uid,m).then(()=>t==null?void 0:t.updateMemberData(h)).then(()=>e(Eo))},u=()=>W("div",{className:He("mt-8 bg-blue-700 text-white rounded-md p-4 min-w-[6rem] font-heading"),children:[T("h3",{className:"tas-body-large font-semibold",children:"เหลือแค่ขั้นตอนเดียวเท่านั้น!"}),T("div",{className:"tas-body-small mt-2",children:"เพื่อให้ท่านได้รับการบริการที่ครบถ้วนและเพิ่มความปลอดภัย กรุณากรอกข้อมูลส่วนตัวของท่าน"})]}),c=()=>W("section",{className:"mt-8 text-sm text-neutral-500 text-opacity-50 font-heading",children:[T("p",{className:"",children:"สมาคมดาราศาสตร์ไทยจะใช้ข้อมูลนี้เป็นการภายใน และไม่เปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอกหากไม่ได้รับความยินยอมของท่านโดยเด็ดขาด"}),T("p",{className:"mt-4",children:"สำหรับรายละเอียดวัตถุประสงค์ และการใช้ข้อมูลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ท่านสามารถศึกษาได้จากหน้านโยบายความเป็นส่วนตัว"})]});return W(Zs,{children:[W("section",{className:"",children:[W("h1",{className:"tas-heading-l font-semibold",children:[T("div",{className:"tas-caption-l",children:"แก้ไข"}),"ข้อมูลส่วนตัว"]}),o&&T(u,{}),W("form",{onSubmit:l,children:[W("fieldset",{className:"mt-8",children:[T(yh,{classNames:"w-full",label:"ชื่อ",labelClasses:"font-heading",inputClasses:"border-neutral-700 w-full text-black",inputProps:{type:"text",name:"firstName",defaultValue:n==null?void 0:n.firstName,placeholder:"เอกภพ",required:!0,onChange:a}}),T(yh,{classNames:"mt-6 w-full",label:"นามสกุล",labelClasses:"font-heading",inputClasses:"border-neutral-500 w-full text-black",inputProps:{type:"text",name:"lastName",defaultValue:n==null?void 0:n.lastName,placeholder:"ดาราวงศ์",required:!0,onChange:a}}),T(yh,{classNames:"mt-6 w-full",label:"อีเมล (ไม่บังคับ)",labelClasses:"font-heading",inputClasses:"border-neutral-500 w-full text-black",inputProps:{type:"email",name:"email",placeholder:"ekkaphop.dara@astro.mail",defaultValue:n==null?void 0:n.email,onChange:a}})]}),W("div",{className:"mt-6 flex gap-2 font-heading tas-body",children:[T("button",{className:He(i?"bg-blue-300":"bg-tas-100 hover:bg-tas-300","px-3 py-2","text-white font-medium"),type:i?"button":"submit",disabled:i,children:i?"กำลังบันทึก":"บันทึกข้อมูล"}),!i&&T("button",{className:He("px-3 py-2","hover:bg-red-200","text-red-500 hover:text-red-700"),onClick:()=>e(Eo),children:"ยกเลิก"})]})]})]}),T(c,{})]})};var ca={},BM=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},W_={},_t={};let Cm;const VM=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];_t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};_t.getSymbolTotalCodewords=function(e){return VM[e]};_t.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};_t.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Cm=e};_t.isKanjiModeEnabled=function(){return typeof Cm<"u"};_t.toSJIS=function(e){return Cm(e)};var hc={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(hc);function K_(){this.buffer=[],this.length=0}K_.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var zM=K_;function ha(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ha.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};ha.prototype.get=function(t,e){return this.data[t*this.size+e]};ha.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};ha.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var jM=ha,q_={};(function(t){const e=_t.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let l=0;l<o;l++)a===0&&l===0||a===0&&l===o-1||a===o-1&&l===0||i.push([s[a],s[l]]);return i}})(q_);var G_={};const HM=_t.getSymbolSize,kv=7;G_.getPositions=function(e){const n=HM(e);return[[0,0],[n-kv,0],[0,n-kv]]};var Q_={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,l=0,u=null,c=null;for(let d=0;d<s;d++){a=l=0,u=c=null;for(let h=0;h<s;h++){let m=i.get(d,h);m===u?a++:(a>=5&&(o+=e.N1+(a-5)),u=m,a=1),m=i.get(h,d),m===c?l++:(l>=5&&(o+=e.N1+(l-5)),c=m,l=1)}a>=5&&(o+=e.N1+(a-5)),l>=5&&(o+=e.N1+(l-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let l=0;l<s-1;l++){const u=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(u===4||u===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,l=0;for(let u=0;u<s;u++){a=l=0;for(let c=0;c<s;c++)a=a<<1&2047|i.get(u,c),c>=10&&(a===1488||a===93)&&o++,l=l<<1&2047|i.get(c,u),c>=10&&(l===1488||l===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let l=0;l<o;l++)s+=i.data[l];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let l=0;l<o;l++)s.isReserved(l,a)||s.xor(l,a,n(i,l,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let u=0;u<o;u++){s(u),t.applyMask(u,i);const c=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(u,i),c<l&&(l=c,a=u)}return a}})(Q_);var dc={};const zn=hc,Va=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],za=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];dc.getBlocksCount=function(e,n){switch(n){case zn.L:return Va[(e-1)*4+0];case zn.M:return Va[(e-1)*4+1];case zn.Q:return Va[(e-1)*4+2];case zn.H:return Va[(e-1)*4+3];default:return}};dc.getTotalCodewordsCount=function(e,n){switch(n){case zn.L:return za[(e-1)*4+0];case zn.M:return za[(e-1)*4+1];case zn.Q:return za[(e-1)*4+2];case zn.H:return za[(e-1)*4+3];default:return}};var Y_={},fc={};const Xs=new Uint8Array(512),lu=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Xs[n]=e,lu[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Xs[n]=Xs[n-255]})();fc.log=function(e){if(e<1)throw new Error("log("+e+")");return lu[e]};fc.exp=function(e){return Xs[e]};fc.mul=function(e,n){return e===0||n===0?0:Xs[lu[e]+lu[n]]};(function(t){const e=fc;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let l=0;l<i.length;l++)s[l]^=e.mul(i[l],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Y_);const J_=Y_;function km(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}km.prototype.initialize=function(e){this.degree=e,this.genPoly=J_.generateECPolynomial(this.degree)};km.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=J_.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var WM=km,X_={},pr={},Nm={};Nm.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var nn={};const Z_="[0-9]+",KM="[A-Z $%*+\\-./:]+";let Bo="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Bo=Bo.replace(/u/g,"\\u");const qM="(?:(?![A-Z0-9 $%*+\\-./:]|"+Bo+`)(?:.|[\r
]))+`;nn.KANJI=new RegExp(Bo,"g");nn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");nn.BYTE=new RegExp(qM,"g");nn.NUMERIC=new RegExp(Z_,"g");nn.ALPHANUMERIC=new RegExp(KM,"g");const GM=new RegExp("^"+Bo+"$"),QM=new RegExp("^"+Z_+"$"),YM=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");nn.testKanji=function(e){return GM.test(e)};nn.testNumeric=function(e){return QM.test(e)};nn.testAlphanumeric=function(e){return YM.test(e)};(function(t){const e=Nm,n=nn;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(pr);(function(t){const e=_t,n=dc,r=hc,i=pr,s=Nm,o=7973,a=e.getBCHDigit(o);function l(h,m,y){for(let v=1;v<=40;v++)if(m<=t.getCapacity(v,y,h))return v}function u(h,m){return i.getCharCountIndicator(h,m)+4}function c(h,m){let y=0;return h.forEach(function(v){const E=u(v.mode,m);y+=E+v.getBitsLength()}),y}function d(h,m){for(let y=1;y<=40;y++)if(c(h,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,v){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const E=e.getSymbolTotalCodewords(m),g=n.getTotalCodewordsCount(m,y),f=(E-g)*8;if(v===i.MIXED)return f;const p=f-u(v,m);switch(v){case i.NUMERIC:return Math.floor(p/10*3);case i.ALPHANUMERIC:return Math.floor(p/11*2);case i.KANJI:return Math.floor(p/13);case i.BYTE:default:return Math.floor(p/8)}},t.getBestVersionForData=function(m,y){let v;const E=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return d(m,E);if(m.length===0)return 1;v=m[0]}else v=m;return l(v.mode,v.getLength(),E)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(X_);var eI={};const tf=_t,tI=1335,JM=21522,Nv=tf.getBCHDigit(tI);eI.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;tf.getBCHDigit(i)-Nv>=0;)i^=tI<<tf.getBCHDigit(i)-Nv;return(r<<10|i)^JM};var nI={};const XM=pr;function Yi(t){this.mode=XM.NUMERIC,this.data=t.toString()}Yi.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Yi.prototype.getLength=function(){return this.data.length};Yi.prototype.getBitsLength=function(){return Yi.getBitsLength(this.data.length)};Yi.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var ZM=Yi;const e$=pr,vh=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ji(t){this.mode=e$.ALPHANUMERIC,this.data=t}Ji.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Ji.prototype.getLength=function(){return this.data.length};Ji.prototype.getBitsLength=function(){return Ji.getBitsLength(this.data.length)};Ji.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=vh.indexOf(this.data[n])*45;r+=vh.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(vh.indexOf(this.data[n]),6)};var t$=Ji,n$=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const r$=n$,i$=pr;function Xi(t){this.mode=i$.BYTE,typeof t=="string"&&(t=r$(t)),this.data=new Uint8Array(t)}Xi.getBitsLength=function(e){return e*8};Xi.prototype.getLength=function(){return this.data.length};Xi.prototype.getBitsLength=function(){return Xi.getBitsLength(this.data.length)};Xi.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var s$=Xi;const o$=pr,a$=_t;function Zi(t){this.mode=o$.KANJI,this.data=t}Zi.getBitsLength=function(e){return e*13};Zi.prototype.getLength=function(){return this.data.length};Zi.prototype.getBitsLength=function(){return Zi.getBitsLength(this.data.length)};Zi.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=a$.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var l$=Zi,rI={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,u,c,d,h,m,y,v,E;!a.empty();){l=a.pop(),u=l.value,d=l.cost,h=n[u]||{};for(c in h)h.hasOwnProperty(c)&&(m=h[c],y=d+m,v=o[c],E=typeof o[c]>"u",(E||v>y)&&(o[c]=y,a.push(c,y),s[c]=u))}if(typeof i<"u"&&typeof o[i]>"u"){var g=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(g)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(rI);var u$=rI.exports;(function(t){const e=pr,n=ZM,r=t$,i=s$,s=l$,o=nn,a=_t,l=u$;function u(g){return unescape(encodeURIComponent(g)).length}function c(g,f,p){const w=[];let _;for(;(_=g.exec(p))!==null;)w.push({data:_[0],index:_.index,mode:f,length:_[0].length});return w}function d(g){const f=c(o.NUMERIC,e.NUMERIC,g),p=c(o.ALPHANUMERIC,e.ALPHANUMERIC,g);let w,_;return a.isKanjiModeEnabled()?(w=c(o.BYTE,e.BYTE,g),_=c(o.KANJI,e.KANJI,g)):(w=c(o.BYTE_KANJI,e.BYTE,g),_=[]),f.concat(p,w,_).sort(function(S,R){return S.index-R.index}).map(function(S){return{data:S.data,mode:S.mode,length:S.length}})}function h(g,f){switch(f){case e.NUMERIC:return n.getBitsLength(g);case e.ALPHANUMERIC:return r.getBitsLength(g);case e.KANJI:return s.getBitsLength(g);case e.BYTE:return i.getBitsLength(g)}}function m(g){return g.reduce(function(f,p){const w=f.length-1>=0?f[f.length-1]:null;return w&&w.mode===p.mode?(f[f.length-1].data+=p.data,f):(f.push(p),f)},[])}function y(g){const f=[];for(let p=0;p<g.length;p++){const w=g[p];switch(w.mode){case e.NUMERIC:f.push([w,{data:w.data,mode:e.ALPHANUMERIC,length:w.length},{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.ALPHANUMERIC:f.push([w,{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.KANJI:f.push([w,{data:w.data,mode:e.BYTE,length:u(w.data)}]);break;case e.BYTE:f.push([{data:w.data,mode:e.BYTE,length:u(w.data)}])}}return f}function v(g,f){const p={},w={start:{}};let _=["start"];for(let I=0;I<g.length;I++){const S=g[I],R=[];for(let V=0;V<S.length;V++){const b=S[V],_e=""+I+V;R.push(_e),p[_e]={node:b,lastCount:0},w[_e]={};for(let rn=0;rn<_.length;rn++){const Ze=_[rn];p[Ze]&&p[Ze].node.mode===b.mode?(w[Ze][_e]=h(p[Ze].lastCount+b.length,b.mode)-h(p[Ze].lastCount,b.mode),p[Ze].lastCount+=b.length):(p[Ze]&&(p[Ze].lastCount=b.length),w[Ze][_e]=h(b.length,b.mode)+4+e.getCharCountIndicator(b.mode,f))}}_=R}for(let I=0;I<_.length;I++)w[_[I]].end=0;return{map:w,table:p}}function E(g,f){let p;const w=e.getBestModeForData(g);if(p=e.from(f,w),p!==e.BYTE&&p.bit<w.bit)throw new Error('"'+g+'" cannot be encoded with mode '+e.toString(p)+`.
 Suggested mode is: `+e.toString(w));switch(p===e.KANJI&&!a.isKanjiModeEnabled()&&(p=e.BYTE),p){case e.NUMERIC:return new n(g);case e.ALPHANUMERIC:return new r(g);case e.KANJI:return new s(g);case e.BYTE:return new i(g)}}t.fromArray=function(f){return f.reduce(function(p,w){return typeof w=="string"?p.push(E(w,null)):w.data&&p.push(E(w.data,w.mode)),p},[])},t.fromString=function(f,p){const w=d(f,a.isKanjiModeEnabled()),_=y(w),I=v(_,p),S=l.find_path(I.map,"start","end"),R=[];for(let V=1;V<S.length-1;V++)R.push(I.table[S[V]].node);return t.fromArray(m(R))},t.rawSplit=function(f){return t.fromArray(d(f,a.isKanjiModeEnabled()))}})(nI);const pc=_t,wh=hc,c$=zM,h$=jM,d$=q_,f$=G_,nf=Q_,rf=dc,p$=WM,uu=X_,m$=eI,g$=pr,Eh=nI;function y$(t,e){const n=t.size,r=f$.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let l=-1;l<=7;l++)o+l<=-1||n<=o+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(s+a,o+l,!0,!0):t.set(s+a,o+l,!1,!0))}}function v$(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function w$(t,e){const n=d$.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function E$(t,e){const n=t.size,r=uu.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function Sh(t,e,n){const r=t.size,i=m$.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function S$(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let u=!1;o<e.length&&(u=(e[o]>>>s&1)===1),t.set(i,a-l,u),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function _$(t,e,n){const r=new c$;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),g$.getCharCountIndicator(l.mode,t)),l.write(r)});const i=pc.getSymbolTotalCodewords(t),s=rf.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return I$(r,t,e)}function I$(t,e,n){const r=pc.getSymbolTotalCodewords(e),i=rf.getTotalCodewordsCount(e,n),s=r-i,o=rf.getBlocksCount(e,n),a=r%o,l=o-a,u=Math.floor(r/o),c=Math.floor(s/o),d=c+1,h=u-c,m=new p$(h);let y=0;const v=new Array(o),E=new Array(o);let g=0;const f=new Uint8Array(t.buffer);for(let S=0;S<o;S++){const R=S<l?c:d;v[S]=f.slice(y,y+R),E[S]=m.encode(v[S]),y+=R,g=Math.max(g,R)}const p=new Uint8Array(r);let w=0,_,I;for(_=0;_<g;_++)for(I=0;I<o;I++)_<v[I].length&&(p[w++]=v[I][_]);for(_=0;_<h;_++)for(I=0;I<o;I++)p[w++]=E[I][_];return p}function T$(t,e,n,r){let i;if(Array.isArray(t))i=Eh.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const c=Eh.rawSplit(t);u=uu.getBestVersionForData(c,n)}i=Eh.fromString(t,u||40)}else throw new Error("Invalid data");const s=uu.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=_$(e,n,i),a=pc.getSymbolSize(e),l=new h$(a);return y$(l,e),v$(l),w$(l,e),Sh(l,n,0),e>=7&&E$(l,e),S$(l,o),isNaN(r)&&(r=nf.getBestMask(l,Sh.bind(null,l,n))),nf.applyMask(r,l),Sh(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}W_.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=wh.M,i,s;return typeof n<"u"&&(r=wh.from(n.errorCorrectionLevel,wh.M),i=uu.from(n.version),s=nf.from(n.maskPattern),n.toSJISFunc&&pc.setToSJISFunction(n.toSJISFunc)),T$(e,i,r,s)};var iI={},Am={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,l=t.getScale(o,s),u=Math.floor((o+s.margin*2)*l),c=s.margin*l,d=[s.color.light,s.color.dark];for(let h=0;h<u;h++)for(let m=0;m<u;m++){let y=(h*u+m)*4,v=s.color.light;if(h>=c&&m>=c&&h<u-c&&m<u-c){const E=Math.floor((h-c)/l),g=Math.floor((m-c)/l);v=d[a[E*o+g]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(Am);(function(t){const e=Am;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let l=a,u=o;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),o||(u=r()),l=e.getOptions(l);const c=e.getImageWidth(s.modules.size,l),d=u.getContext("2d"),h=d.createImageData(c,c);return e.qrToImageData(h.data,s,l),n(d,u,c),d.putImageData(h,0,0),u},t.renderToDataURL=function(s,o,a){let l=a;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),l||(l={});const u=t.render(s,o,l),c=l.type||"image/png",d=l.rendererOpts||{};return u.toDataURL(c,d.quality)}})(iI);var sI={};const C$=Am;function Av(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function _h(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function k$(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),u=Math.floor(a/e);!l&&!s&&(s=!0),t[a]?(o++,a>0&&l>0&&t[a-1]||(r+=s?_h("M",l+n,.5+u+n):_h("m",i,0),i=0,s=!1),l+1<e&&t[a+1]||(r+=_h("h",o),o=0)):i++}return r}sI.render=function(e,n,r){const i=C$.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,l=i.color.light.a?"<path "+Av(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+Av(i.color.dark,"stroke")+' d="'+k$(o,s,i.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof r=="function"&&r(null,h),h};const N$=BM,sf=W_,oI=iI,A$=sI;function Rm(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!N$())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,u){try{const c=sf.create(n,r);l(t(c,e,r))}catch(c){u(c)}})}try{const l=sf.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}ca.create=sf.create;ca.toCanvas=Rm.bind(null,oI.render);ca.toDataURL=Rm.bind(null,oI.renderToDataURL);ca.toString=Rm.bind(null,function(t,e,n){return A$.render(t,n)});var aI={},wi=nr&&nr.__assign||function(){return wi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},wi.apply(this,arguments)},R$=nr&&nr.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),P$=nr&&nr.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),D$=nr&&nr.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&R$(e,t,n);return P$(e,t),e};Object.defineProperty(aI,"__esModule",{value:!0});var ja=D$(k),Ha=k,lI=function(t){var e=t.cardStyles,n=e.back,r=e.front,i=t.cardZIndex,s=t.containerStyle,o=t.containerClassName,a=t.flipDirection,l=t.flipSpeedFrontToBack,u=t.flipSpeedBackToFront,c=t.infinite,d=(0,Ha.useState)(t.isFlipped),h=d[0],m=d[1],y=(0,Ha.useState)(0),v=y[0],E=y[1];(0,Ha.useEffect)(function(){t.isFlipped!==h&&(m(t.isFlipped),E(function(R){return R+180}))},[t.isFlipped]);var g=(0,Ha.useMemo)(function(){var R="react-card-flip";return o&&(R+=" ".concat(o)),R},[o]),f=function(R){if(t.children.length!==2)throw new Error("Component ReactCardFlip requires 2 children to function");return t.children[R]},p="rotateY(".concat(c?v:h?180:0,"deg)"),w="rotateY(".concat(c?v+180:h?0:-180,"deg)"),_="rotateX(".concat(c?v:h?180:0,"deg)"),I="rotateX(".concat(c?v+180:h?0:-180,"deg)"),S={back:wi({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"relative":"absolute",top:"0",transform:a==="horizontal"?w:I,transformStyle:"preserve-3d",transition:"".concat(l,"s"),width:"100%"},n),container:{perspective:"1000px",zIndex:"".concat(i)},flipper:{height:"100%",position:"relative",width:"100%"},front:wi({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"absolute":"relative",top:"0",transform:a==="horizontal"?p:_,transformStyle:"preserve-3d",transition:"".concat(u,"s"),width:"100%",zIndex:"2"},r)};return ja.createElement("div",{className:g,style:wi(wi({},S.container),s)},ja.createElement("div",{className:"react-card-flipper",style:S.flipper},ja.createElement("div",{className:"react-card-front",style:S.front},f(0)),ja.createElement("div",{className:"react-card-back",style:S.back},f(1))))};lI.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1};var O$=aI.default=lI;const x$="th-th",L$={day:"numeric",month:"narrow",year:"2-digit"},M$=t=>e=>n=>new Intl.DateTimeFormat(t,e).format(n),$$=M$(x$),dl=$$(L$),Rv=t=>t.toDate(),b$=()=>{const[t,e]=k.useState(new Date);return k.useEffect(()=>{const n=setInterval(()=>{e(new Date)},1e3);return()=>clearInterval(n)},[]),T("small",{className:"mt-2",children:t.toLocaleString("en-gb")})},F$=()=>{var E,g,f,p,w;const t=fs(),[e,n]=k.useState(void 0),[r,i]=k.useState(),[,s]=k.useReducer(_=>_+1,0),o=z_(Uo)==="true",a=F.build("Profile");if(k.useEffect(()=>{var _,I;(_=t==null?void 0:t.user)!=null&&_.uid&&ca.toDataURL((I=t==null?void 0:t.user)==null?void 0:I.uid,{errorCorrectionLevel:"H",margin:0,width:128,color:{dark:"#001980",light:"#0000"}}).then(n).catch(S=>{F.error(a("cannot generate QR code"),S)})},[(E=t==null?void 0:t.user)==null?void 0:E.uid,a]),!(t!=null&&t.isLoggedIn))return T(op,{to:Fk});const l=t.memberData,u=((f=(g=t==null?void 0:t.memberData)==null?void 0:g.points)==null?void 0:f.reduce((_,I)=>_+I.points,0))??0,c=()=>T("img",{src:e,alt:l==null?void 0:l.userId,title:l==null?void 0:l.userId}),d=({title:_,content:I,className:S})=>W("div",{className:He("shadow-md rounded-md p-4 min-w-[6rem]",S),children:[T("h3",{className:"tas-body-small",children:_}),T("div",{className:"tas-body-large font-semibold",children:I})]}),h=()=>{j_(Uo),s()},m=()=>W("div",{className:He("relative mt-6 bg-tas-500 text-white rounded-md p-4 min-w-[6rem] font-heading"),children:[T("div",{onClick:h,className:"absolute top-4 right-4 text-gray-100 hover:cursor-pointer",children:"✕"}),T("h3",{className:"tas-body-large font-semibold",children:"ยินดีต้อนรับ"}),T("div",{className:"tas-body-small mt-2",children:"คุณได้เป็นสมาชิกเรียบร้อยแล้ว คุณสามารถดูแต้ม และบัตรสมาชิกได้ที่หน้านี้"}),T("div",{className:"tas-body-small mt-2",children:"แสดงหน้านี้เพื่อสะสมแต้มจากการเข้าร่วมกิจกรรม การซื้อสินค้าต่าง ๆ จากสมาคมดาราศาสตร์ไทย"})]}),y="aspect-[1.616/1] w-full flex items-center justify-center shadow-md font-heading",v=T("div",{className:He("aspect-[1.616/1] mt-4"),onClick:()=>i(_=>!_),children:W(O$,{isFlipped:r,children:[W("div",{className:He(y,"bg-tas-ci bg-gradient-to-bl from-tas-300 to-tas-900","rounded-md flex-col"),children:[r===void 0&&T("div",{className:He("absolute top-4 right-4","w-4 h-4 rounded-full bg-neutral-100 bg-opacity-80","animate-ping")}),T("img",{src:nw,className:"h-16"}),T("h3",{className:"mt-4 font-medium text-md text-white",children:"สมาชิกสมาคมดาราศาสตร์ไทย"})]}),W("div",{className:He(y,"flex-col rounded-md border-2 border-tas-500"),children:[T(c,{}),T(b$,{})]})]})});return W(Zs,{children:[T("section",{className:"",children:W("h1",{className:"tas-heading-l font-semibold",children:[T("div",{className:"tas-caption-l",children:"สวัสดี"}),l==null?void 0:l.firstName," ",l==null?void 0:l.lastName]})}),o&&T(m,{}),W("section",{className:"mt-6 font-heading flex gap-4",children:[T(d,{title:"แต้ม",content:u}),T(d,{title:"สมาชิกตั้งแต่",content:dl(new Date((p=t==null?void 0:t.user)==null?void 0:p.metadata.creationTime))})]}),W("section",{className:"mt-8",children:[W("h2",{className:"tas-heading-m font-semibold",children:["บัตรสมาชิกของฉัน  ",((w=t==null?void 0:t.memberData)==null?void 0:w.isAdmin)&&T(Mk,{to:ew,children:"🪄"})]}),v]})," "]})},U$=()=>{const t=Gr(),e=fs();return e!=null&&e.isLoggedIn?T(ap,{}):T(op,{to:lp,state:{from:t},replace:!0})},B$=()=>W("section",{className:"",children:[W("h1",{className:"mt-8 tas-heading-l font-semibold",children:[T("div",{className:"tas-caption-l",children:"ยินดีต้อนรับ"}),"คุณใกล้จะเป็นสมาชิกแล้ว"]}),T("p",{className:"mt-4 tas-body-m font-heading",children:"เพื่อให้ท่านได้รับการบริการที่ครบถ้วน และเพิ่มความปลอดภัย สมาคมดาราศาสตร์ไทยอยากรู้จักท่านให้มากขึ้น"}),T("button",{className:"bg-white px-3 py-2 mt-8 tas-body text-black font-heading font-medium",children:"กรอกข้อมูลส่วนตัว"}),T("p",{className:"mt-16 text-sm text-white text-opacity-50 font-heading",children:"สมาคมดาราศาสตร์ไทยจะใช้ข้อมูลนี้เป็นการภายใน และไม่เปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอกหากไม่ได้รับความยินยอมของท่านโดยเด็ดขาด"}),T("p",{className:"mt-4 text-sm text-white text-opacity-50 font-heading",children:"สำหรับรายละเอียดวัตถุประสงค์และการใช้ข้อมูลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ท่านสามารถศึกษาได้จากหน้านโยบายความเป็นส่วนตัว"})]}),V$=()=>T("main",{className:"min-h-screen w-screen",children:T("div",{className:"w-full max-w-lg mx-auto py-16 px-8",children:T(ap,{})})}),z$=()=>{var r,i;const t=Gr(),e=fs(),n=F.build("AdminGuard");return F.log(n(`checking the user's priviledge; isLoggedIn: ${e==null?void 0:e.isLoggedIn}, isAdmin: ${(r=e==null?void 0:e.memberData)==null?void 0:r.isAdmin}`)),!(e!=null&&e.isLoggedIn)||!((i=e==null?void 0:e.memberData)!=null&&i.isAdmin)?T(op,{to:lp,state:{from:t},replace:!0}):T(ap,{})},j$="modulepreload",H$=function(t){return"/membership/"+t},Pv={},W$=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=H$(s),s in Pv)return;Pv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":j$,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};class q{constructor(e,n,r,i,s){this._legacyCanvasSize=q.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),r&&typeof r=="object"?this._onDecode=n:(console.warn(r||i||s?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=n),n=typeof r=="object"?r:{},this._onDecodeError=n.onDecodeError||(typeof r=="function"?r:this._onDecodeError),this._calculateScanRegion=n.calculateScanRegion||(typeof i=="function"?i:this._calculateScanRegion),this._preferredCamera=n.preferredCamera||s||this._preferredCamera,this._legacyCanvasSize=typeof r=="number"?r:typeof i=="number"?i:this._legacyCanvasSize,this._maxScansPerSecond=n.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let o=!1;if(e.hidden&&(e.hidden=!1,o=!0),document.body.contains(e)||(document.body.appendChild(e),o=!0),r=e.parentElement,n.highlightScanRegion||n.highlightCodeOutline){if(i=!!n.overlay,this.$overlay=n.overlay||document.createElement("div"),s=this.$overlay.style,s.position="absolute",s.display="none",s.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!i&&n.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}r.insertBefore(this.$overlay,this.$video.nextSibling)}n.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame(()=>{let a=window.getComputedStyle(e);a.display==="none"&&(e.style.setProperty("display","block","important"),o=!0),a.visibility!=="visible"&&(e.style.setProperty("visibility","visible","important"),o=!0),o&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=q.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await q.listCameras(!1)).length}catch{return!1}}static async listCameras(e=!1){if(!navigator.mediaDevices)return[];let n=async()=>(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="videoinput"),r;try{e&&(await n()).every(i=>!i.label)&&(r=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(await n()).map((i,s)=>({id:i.deviceId,label:i.label||(s===0?"Default Camera":`Camera ${s+1}`)}))}finally{r&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),q._stopVideoStream(r))}}async hasFlash(){let e;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;e=this.$video.srcObject}else e=(await this._getCameraStream()).stream;return"torch"in e.getVideoTracks()[0].getSettings()}catch{return!1}finally{e&&e!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),q._stopVideoStream(e))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(e){throw this._flashOn=!1,e}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),q._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&(window.location.protocol!=="https:"&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)await this.$video.play();else try{let{stream:e,facingMode:n}=await this._getCameraStream();!this._active||this._paused?q._stopVideoStream(e):(this._setVideoMirror(n),this.$video.srcObject=e,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(e){if(!this._paused)throw this._active=!1,e}}stop(){this.pause(),this._active=!1}async pause(e=!1){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let n=()=>{this.$video.srcObject instanceof MediaStream&&(q._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return e?(n(),!0):(await new Promise(r=>setTimeout(r,300)),this._paused?(n(),!0):!1)}async setCamera(e){e!==this._preferredCamera&&(this._preferredCamera=e,await this._restartVideoStream())}static async scanImage(e,n,r,i,s=!1,o=!1){let a,l=!1;n&&("scanRegion"in n||"qrEngine"in n||"canvas"in n||"disallowCanvasResizing"in n||"alsoTryWithoutScanRegion"in n||"returnDetailedScanResult"in n)?(a=n.scanRegion,r=n.qrEngine,i=n.canvas,s=n.disallowCanvasResizing||!1,o=n.alsoTryWithoutScanRegion||!1,l=!0):console.warn(n||r||i||s||o?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),n=!!r;try{let u,c;[r,u]=await Promise.all([r||q.createQrEngine(),q._loadImage(e)]),[i,c]=q._drawToCanvas(u,a,i,s);let d;if(r instanceof Worker){let h=r;n||q._postWorkerMessageSync(h,"inversionMode","both"),d=await new Promise((m,y)=>{let v,E,g,f=-1;E=w=>{w.data.id===f&&(h.removeEventListener("message",E),h.removeEventListener("error",g),clearTimeout(v),w.data.data!==null?m({data:w.data.data,cornerPoints:q._convertPoints(w.data.cornerPoints,a)}):y(q.NO_QR_CODE_FOUND))},g=w=>{h.removeEventListener("message",E),h.removeEventListener("error",g),clearTimeout(v),y("Scanner error: "+(w?w.message||w:"Unknown Error"))},h.addEventListener("message",E),h.addEventListener("error",g),v=setTimeout(()=>g("timeout"),1e4);let p=c.getImageData(0,0,i.width,i.height);f=q._postWorkerMessageSync(h,"decode",p,[p.data.buffer])})}else d=await Promise.race([new Promise((h,m)=>window.setTimeout(()=>m("Scanner error: timeout"),1e4)),(async()=>{try{var[h]=await r.detect(i);if(!h)throw q.NO_QR_CODE_FOUND;return{data:h.rawValue,cornerPoints:q._convertPoints(h.cornerPoints,a)}}catch(m){if(h=m.message||m,/not implemented|service unavailable/.test(h))return q._disableBarcodeDetector=!0,q.scanImage(e,{scanRegion:a,canvas:i,disallowCanvasResizing:s,alsoTryWithoutScanRegion:o});throw`Scanner error: ${h}`}})()]);return l?d:d.data}catch(u){if(!a||!o)throw u;let c=await q.scanImage(e,{qrEngine:r,canvas:i,disallowCanvasResizing:s});return l?c:c.data}finally{n||q._postWorkerMessage(r,"close")}}setGrayscaleWeights(e,n,r,i=!0){q._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:n,blue:r,useIntegerApproximation:i})}setInversionMode(e){q._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static async createQrEngine(e){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>W$(()=>import("./qr-scanner-worker.min-5f44a019.js"),[]).then(r=>r.createWorker()),!(!q._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code")))return e();let n=navigator.userAgentData;return n&&n.brands.some(({brand:r})=>/Chromium/i.test(r))&&/mac ?OS/i.test(n.platform)&&await n.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:r,platformVersion:i})=>/arm/i.test(r||"arm")&&13<=parseInt(i||"13")).catch(()=>!0)?e():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let n=Math.round(.6666666666666666*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-n)/2),y:Math.round((e.videoHeight-n)/2),width:n,height:n,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var e=this.$video,n=e.videoWidth,r=e.videoHeight,i=e.offsetWidth,s=e.offsetHeight,o=e.offsetLeft,a=e.offsetTop,l=window.getComputedStyle(e),u=l.objectFit,c=n/r,d=i/s;switch(u){case"none":var h=n,m=r;break;case"fill":h=i,m=s;break;default:(u==="cover"?c>d:c<d)?(m=s,h=m*c):(h=i,m=h/c),u==="scale-down"&&(h=Math.min(h,n),m=Math.min(m,r))}var[y,v]=l.objectPosition.split(" ").map((g,f)=>{const p=parseFloat(g);return g.endsWith("%")?(f?s-m:i-h)*p/100:p});l=this._scanRegion.width||n,d=this._scanRegion.height||r,u=this._scanRegion.x||0;var E=this._scanRegion.y||0;c=this.$overlay.style,c.width=`${l/n*h}px`,c.height=`${d/r*m}px`,c.top=`${a+v+E/r*m}px`,r=/scaleX\(-1\)/.test(e.style.transform),c.left=`${o+(r?i-y-h:y)+(r?n-u-l:u)/n*h}px`,c.transform=e.style.transform}})}static _convertPoints(e,n){if(!n)return e;let r=n.x||0,i=n.y||0,s=n.width&&n.downScaledWidth?n.width/n.downScaledWidth:1;n=n.height&&n.downScaledHeight?n.height/n.downScaledHeight:1;for(let o of e)o.x=o.x*s+r,o.y=o.y*n+i;return e}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(async()=>{if(!(1>=this.$video.readyState)){var e=Date.now()-this._lastScanTimestamp,n=1e3/this._maxScansPerSecond;e<n&&await new Promise(i=>setTimeout(i,n-e)),this._lastScanTimestamp=Date.now();try{var r=await q.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(i){if(!this._active)return;this._onDecodeError(i)}!q._disableBarcodeDetector||await this._qrEnginePromise instanceof Worker||(this._qrEnginePromise=q.createQrEngine()),r?(this._onDecode?this._onDecode(r):this._legacyOnDecode&&this._legacyOnDecode(r.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",r.cornerPoints.map(({x:i,y:s})=>`${i},${s}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()})}_onDecodeError(e){e!==q.NO_QR_CODE_FOUND&&console.log(e)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let e=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",n=[{width:{min:1024}},{width:{min:768}},{}],r=n.map(i=>Object.assign({},i,{[e]:{exact:this._preferredCamera}}));for(let i of[...r,...n])try{let s=await navigator.mediaDevices.getUserMedia({video:i,audio:!1}),o=this._getFacingMode(s)||(i.facingMode?this._preferredCamera:this._preferredCamera==="environment"?"user":"environment");return{stream:s,facingMode:o}}catch{}throw"Camera not found."}async _restartVideoStream(){let e=this._paused;await this.pause(!0)&&!e&&this._active&&await this.start()}static _stopVideoStream(e){for(let n of e.getTracks())n.stop(),e.removeTrack(n)}_setVideoMirror(e){this.$video.style.transform="scaleX("+(e==="user"?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,n,r,i=!1){r=r||document.createElement("canvas");let s=n&&n.x?n.x:0,o=n&&n.y?n.y:0,a=n&&n.width?n.width:e.videoWidth||e.width,l=n&&n.height?n.height:e.videoHeight||e.height;return i||(i=n&&n.downScaledWidth?n.downScaledWidth:a,n=n&&n.downScaledHeight?n.downScaledHeight:l,r.width!==i&&(r.width=i),r.height!==n&&(r.height=n)),n=r.getContext("2d",{alpha:!1}),n.imageSmoothingEnabled=!1,n.drawImage(e,s,o,a,l,0,0,r.width,r.height),[r,n]}static async _loadImage(e){if(e instanceof Image)return await q._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(e instanceof File||e instanceof Blob||e instanceof URL||typeof e=="string"){let n=new Image;n.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return await q._awaitImageLoad(n),n}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(n.src)}}else throw"Unsupported image type."}static async _awaitImageLoad(e){e.complete&&e.naturalWidth!==0||await new Promise((n,r)=>{let i=s=>{e.removeEventListener("load",i),e.removeEventListener("error",i),s instanceof ErrorEvent?r("Image load error"):n()};e.addEventListener("load",i),e.addEventListener("error",i)})}static async _postWorkerMessage(e,n,r,i){return q._postWorkerMessageSync(await e,n,r,i)}static _postWorkerMessageSync(e,n,r,i){if(!(e instanceof Worker))return-1;let s=q._workerMessageId++;return e.postMessage({id:s,type:n,data:r},i),s}}q.DEFAULT_CANVAS_SIZE=400;q.NO_QR_CODE_FOUND="No QR code found";q._disableBarcodeDetector=!1;q._workerMessageId=0;const K$="events",Ih=F.build("userData"),q$=()=>(F.log(Ih("getting all the event datas")),DM(fM(Im,K$)).then(t=>(F.log(Ih("received the data")),t.docs.map(e=>e.data()).map(e=>({...e,startAt:Rv(e.startAt),endAt:Rv(e.endAt)})).sort((e,n)=>n.startAt.getTime()-e.startAt.getTime()))).catch(t=>(F.error(Ih("getAllEventDatas cannot get the data"),t),t))),of="EVT",Dv=(t,e)=>`${t}-${e}`,G$=(t,e,n,r)=>({...n,awardedBy:r,awardedAt:new Date,sourceId:`${t}-${e}`}),Q$=t=>e=>(n,r,i)=>{const s=[...n.points,G$(t,e,r,i)],o={...n,points:s};return console.log("upsertingData",o),Tm(n.userId,o)},Y$=Q$(of),J$=()=>{const t=fs(),e=k.useRef(null),[n,r]=k.useState(""),[i,s]=k.useState(),[o,a]=k.useState(),[l,u]=k.useState();k.useEffect(()=>{if(!(e!=null&&e.current))return;const m=new q(e==null?void 0:e.current,y=>{r(y.data)},{highlightScanRegion:!0,highlightCodeOutline:!0});return m.start(),()=>{m.stop(),m.destroy()}}),k.useEffect(()=>{q$().then(a)},[]),k.useEffect(()=>{n&&V_(n).then(s)},[n]);const c=l&&W("div",{className:"mt-4",children:[T("strong",{children:l.name})," (",l.id,")",W("div",{children:[dl(l.startAt),"–",dl(l.endAt)]}),T("p",{children:l.description}),W("strong",{children:[l.points.points," แต้ม"]})," (",l.points.basePoints,"×",l.points.multiplier," เท่า )"]}),d=m=>i!=null&&i.points?i.points.find(y=>(console.log(y.sourceId,Dv(of,m.id)),y.sourceId===Dv(of,m.id)))!==void 0:!1,h=()=>{var m;!l||!i||!(t!=null&&t.user)||Y$(l.id)(i,l.points,(m=t==null?void 0:t.user)==null?void 0:m.uid).then(()=>{F.log("Points awarded")})};return W(Zs,{children:[T("section",{children:"Main"}),!n&&T("section",{className:"p-8",children:T("div",{className:"aspect-square w-full rounded-md overflow-hidden",children:T("video",{className:"block w-full h-full object-cover",ref:e})})}),T("section",{className:"mt-8",children:W("h2",{children:[i==null?void 0:i.firstName," ",i==null?void 0:i.lastName]})}),W("section",{className:"mt-8",children:[W("select",{defaultValue:"default",onChange:m=>u(o==null?void 0:o.find(y=>y.id===m.currentTarget.value)),children:[T("option",{value:"default",disabled:!0,children:"เลือกกิจกรรมที่ผู้ใช้นี้เข้าร่วม"},"default"),o==null?void 0:o.map(m=>W("option",{value:m.id,disabled:d(m),children:[m.name," (",dl(m.startAt),") ",d(m)&&"(ได้รับแล้ว)"]},m.id))]}),c,l&&T("button",{className:"mt-4",onClick:h,children:"เพิ่มคะแนน"})]})]})},X$=()=>T(FM,{children:T(Ok,{children:T(Nk,{children:W(It,{element:T(V$,{}),children:[T(It,{path:bk,element:T(Cv,{})}),T(It,{path:lp,element:T(Cv,{})}),W(It,{element:T(U$,{}),children:[T(It,{path:Uk,element:T(B$,{})}),T(It,{path:Z1,element:T(UM,{})}),T(It,{path:Eo,element:T(F$,{})}),T(It,{path:"inside",element:T("div",{children:"inside"})})]}),T(It,{element:T(z$,{}),children:T(It,{path:ew,element:T(J$,{})})}),T(It,{path:Bk,element:T("div",{children:"Healthy :)"})})]})})})});Th.createRoot(document.getElementById("root")).render(T(NI.StrictMode,{children:T(X$,{})}));
