function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var n={exports:{}},r={},i={exports:{}},s={},a=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function _(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||v}function k(){}function E(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||v}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=_.prototype;var x=E.prototype=new k;x.constructor=E,b(x,_.prototype),x.isPureReactComponent=!0;var S=Array.isArray,T=Object.prototype.hasOwnProperty,C={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)T.call(t,r)&&!I.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:o,props:i,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var A=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,S(i)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),D(i,t,n,"",(function(e){return e}))):null!=i&&(R(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(A,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",S(e))for(var u=0;u<e.length;u++){var c=r+P(s=e[u],u);l+=D(s,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=D(s=s.value,t,n,c=r+P(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},j={transition:null},U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:j,ReactCurrentOwner:C};function F(){throw Error("act(...) is not supported in production builds of React.")}s.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=_,s.Fragment=l,s.Profiler=c,s.PureComponent=E,s.StrictMode=u,s.Suspense=p,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,s.act=F,s.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)T.call(t,u)&&!I.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:a,type:e.type,key:i,ref:s,props:r,_owner:o}},s.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},s.createElement=N,s.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:f,render:e}},s.isValidElement=R,s.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:L}},s.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},s.startTransition=function(e){var t=j.transition;j.transition={};try{e()}finally{j.transition=t}},s.unstable_act=F,s.useCallback=function(e,t){return M.current.useCallback(e,t)},s.useContext=function(e){return M.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return M.current.useDeferredValue(e)},s.useEffect=function(e,t){return M.current.useEffect(e,t)},s.useId=function(){return M.current.useId()},s.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},s.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},s.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},s.useMemo=function(e,t){return M.current.useMemo(e,t)},s.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},s.useRef=function(e){return M.current.useRef(e)},s.useState=function(e){return M.current.useState(e)},s.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},s.useTransition=function(){return M.current.useTransition()},s.version="18.3.1",i.exports=s;var V=i.exports;const z=e({__proto__:null,default:t(V)},[V]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B=V,$=Symbol.for("react.element"),q=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,W=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function G(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)H.call(t,r)&&!K.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:$,type:e,key:s,ref:a,props:i,_owner:W.current}}r.Fragment=q,r.jsx=G,r.jsxs=G,n.exports=r;var Q=n.exports,X={exports:{}},Y={},J={exports:{}},Z={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,a=s>>>1;r<a;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function w(e){if(m=!1,b(e),!p)if(null!==n(l))p=!0,P(_);else{var t=n(u);null!==t&&D(w,t.startTime-e)}}function _(t,i){p=!1,m&&(m=!1,y(S),S=-1),f=!0;var s=d;try{for(b(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!I());){var a=h.callback;if("function"==typeof a){h.callback=null,d=h.priorityLevel;var o=a(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof o?h.callback=o:h===n(l)&&r(l),b(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&D(w,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,x=null,S=-1,T=5,C=-1;function I(){return!(e.unstable_now()-C<T)}function N(){if(null!==x){var t=e.unstable_now();C=t;var n=!0;try{n=x(!0,t)}finally{n?k():(E=!1,x=null)}}else E=!1}if("function"==typeof v)k=function(){v(N)};else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,A=R.port2;R.port1.onmessage=N,k=function(){A.postMessage(null)}}else k=function(){g(N,0)};function P(e){x=e,E||(E=!0,k())}function D(t,n){S=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,P(_))},e.unstable_forceFrameRate=function(e){0>e||125<e||(T=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var a=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?a+s:a:s=a,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>a?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(y(S),S=-1):m=!0,D(w,s-a))):(r.sortIndex=o,t(l,r),p||f||(p=!0,P(_))),r},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(Z),J.exports=Z;var ee=J.exports,te=V,ne=ee;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ie=new Set,se={};function ae(e,t){oe(e,t),oe(e+"Capture",t)}function oe(e,t){for(se[e]=t,e=0;e<t.length;e++)ie.add(t[e])}var le=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),ue=Object.prototype.hasOwnProperty,ce=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},de={};function fe(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){pe[e]=new fe(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];pe[t]=new fe(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){pe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){pe[e]=new fe(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){pe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){pe[e]=new fe(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){pe[e]=new fe(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){pe[e]=new fe(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){pe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)}));var me=/[\-:]([a-z])/g;function ge(e){return e[1].toUpperCase()}function ye(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!ue.call(de,e)||!ue.call(he,e)&&(ce.test(e)?de[e]=!0:(he[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){pe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)})),pe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){pe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)}));var ve=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),we=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),Pe=Symbol.iterator;function De(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Pe&&e[Pe]||e["@@iterator"])?e:null}var Oe,Le=Object.assign;function Me(e){if(void 0===Oe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oe=t&&t[1]||""}return"\n"+Oe+e}var je=!1;function Ue(e,t){if(!e||je)return"";je=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(pf){var r=pf}Reflect.construct(e,[],t)}else{try{t.call()}catch(pf){r=pf}e.call(t.prototype)}else{try{throw Error()}catch(pf){r=pf}e()}}catch(pf){if(pf&&r&&"string"==typeof pf.stack){for(var i=pf.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{je=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Me(e):""}function Fe(e){switch(e.tag){case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return Me("Suspense");case 19:return Me("SuspenseList");case 0:case 2:case 15:return e=Ue(e.type,!1);case 11:return e=Ue(e.type.render,!1);case 1:return e=Ue(e.type,!0);default:return""}}function Ve(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _e:return"Fragment";case we:return"Portal";case Ee:return"Profiler";case ke:return"StrictMode";case Ce:return"Suspense";case Ie:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Se:return(e.displayName||"Context")+".Consumer";case xe:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return null!==(t=e.displayName||null)?t:Ve(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Ve(e(t))}catch(n){}}return null}function ze(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $e(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function qe(e){e._valueTracker||(e._valueTracker=function(e){var t=$e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function He(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$e(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function We(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ke(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ge(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Be(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Qe(e,t){null!=(t=t.checked)&&ye(e,"checked",t,!1)}function Xe(e,t){Qe(e,t);var n=Be(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Je(e,t.type,n):t.hasOwnProperty("defaultValue")&&Je(e,t.type,Be(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ye(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Je(e,t,n){"number"===t&&We(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ze=Array.isArray;function et(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function tt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(re(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nt(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(re(92));if(Ze(n)){if(1<n.length)throw Error(re(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Be(n)}}function rt(e,t){var n=Be(t.value),r=Be(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function it(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function st(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?st(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ot,lt,ut=(lt=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ot=ot||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ot.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return lt(e,t)}))}:lt);function ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dt=["Webkit","ms","Moz","O"];function ft(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ht.hasOwnProperty(e)&&ht[e]?(""+t).trim():t+"px"}function pt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ft(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ht).forEach((function(e){dt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ht[t]=ht[e]}))}));var mt=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(e,t){if(t){if(mt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(re(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(re(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(re(62))}}function yt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function bt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var wt=null,_t=null,kt=null;function Et(e){if(e=ys(e)){if("function"!=typeof wt)throw Error(re(280));var t=e.stateNode;t&&(t=bs(t),wt(e.stateNode,e.type,t))}}function xt(e){_t?kt?kt.push(e):kt=[e]:_t=e}function St(){if(_t){var e=_t,t=kt;if(kt=_t=null,Et(e),t)for(e=0;e<t.length;e++)Et(t[e])}}function Tt(e,t){return e(t)}function Ct(){}var It=!1;function Nt(e,t,n){if(It)return e(t,n);It=!0;try{return Tt(e,t,n)}finally{It=!1,(null!==_t||null!==kt)&&(Ct(),St())}}function Rt(e,t){var n=e.stateNode;if(null===n)return null;var r=bs(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(re(231,t,typeof n));return n}var At=!1;if(le)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){At=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch(lt){At=!1}function Dt(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ot=!1,Lt=null,Mt=!1,jt=null,Ut={onError:function(e){Ot=!0,Lt=e}};function Ft(e,t,n,r,i,s,a,o,l){Ot=!1,Lt=null,Dt.apply(Ut,arguments)}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function zt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Bt(e){if(Vt(e)!==e)throw Error(re(188))}function $t(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Vt(e)))throw Error(re(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bt(i),e;if(s===r)return Bt(i),t;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(3!==n.tag)throw Error(re(188));return n.stateNode.current===n?e:t}(e))?qt(e):null}function qt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qt(e);if(null!==t)return t;e=e.sibling}return null}var Ht=ne.unstable_scheduleCallback,Wt=ne.unstable_cancelCallback,Kt=ne.unstable_shouldYield,Gt=ne.unstable_requestPaint,Qt=ne.unstable_now,Xt=ne.unstable_getCurrentPriorityLevel,Yt=ne.unstable_ImmediatePriority,Jt=ne.unstable_UserBlockingPriority,Zt=ne.unstable_NormalPriority,en=ne.unstable_LowPriority,tn=ne.unstable_IdlePriority,nn=null,rn=null;var sn=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(an(e)/on|0)|0},an=Math.log,on=Math.LN2;var ln=64,un=4194304;function cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=cn(o):0!==(s&=a)&&(r=cn(s))}else 0!==(a=n&~i)?r=cn(a):0!==s&&(r=cn(s));if(0===r)return 0;if(0!==t&&t!==r&&!(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-sn(t)),r|=e[n],t&=~i;return r}function dn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function fn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function pn(){var e=ln;return!(4194240&(ln<<=1))&&(ln=64),e}function mn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-sn(t)]=n}function yn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vn=0;function bn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var wn,_n,kn,En,xn,Sn=!1,Tn=[],Cn=null,In=null,Nn=null,Rn=new Map,An=new Map,Pn=[],Dn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function On(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function Ln(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ys(t))&&_n(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Mn(e){var t=gs(e.target);if(null!==t){var n=Vt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=zt(n)))return e.blockedOn=t,void xn(e.priority,(function(){kn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function jn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ys(n))&&_n(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);vt=r,n.target.dispatchEvent(r),vt=null,t.shift()}return!0}function Un(e,t,n){jn(e)&&n.delete(t)}function Fn(){Sn=!1,null!==Cn&&jn(Cn)&&(Cn=null),null!==In&&jn(In)&&(In=null),null!==Nn&&jn(Nn)&&(Nn=null),Rn.forEach(Un),An.forEach(Un)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Sn||(Sn=!0,ne.unstable_scheduleCallback(ne.unstable_NormalPriority,Fn)))}function zn(e){function t(t){return Vn(t,e)}if(0<Tn.length){Vn(Tn[0],e);for(var n=1;n<Tn.length;n++){var r=Tn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Cn&&Vn(Cn,e),null!==In&&Vn(In,e),null!==Nn&&Vn(Nn,e),Rn.forEach(t),An.forEach(t),n=0;n<Pn.length;n++)(r=Pn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&null===(n=Pn[0]).blockedOn;)Mn(n),null===n.blockedOn&&Pn.shift()}var Bn=ve.ReactCurrentBatchConfig,$n=!0;function qn(e,t,n,r){var i=vn,s=Bn.transition;Bn.transition=null;try{vn=1,Wn(e,t,n,r)}finally{vn=i,Bn.transition=s}}function Hn(e,t,n,r){var i=vn,s=Bn.transition;Bn.transition=null;try{vn=4,Wn(e,t,n,r)}finally{vn=i,Bn.transition=s}}function Wn(e,t,n,r){if($n){var i=Gn(e,t,n,r);if(null===i)Bi(e,t,r,Kn,n),On(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Cn=Ln(Cn,e,t,n,r,i),!0;case"dragenter":return In=Ln(In,e,t,n,r,i),!0;case"mouseover":return Nn=Ln(Nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rn.set(s,Ln(Rn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,An.set(s,Ln(An.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(On(e,r),4&t&&-1<Dn.indexOf(e)){for(;null!==i;){var s=ys(i);if(null!==s&&wn(s),null===(s=Gn(e,t,n,r))&&Bi(e,t,r,Kn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Kn=null;function Gn(e,t,n,r){if(Kn=null,null!==(e=gs(e=bt(r))))if(null===(t=Vt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=zt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kn=e,null}function Qn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xt()){case Yt:return 1;case Jt:return 4;case Zt:case en:return 16;case tn:return 536870912;default:return 16}default:return 16}}var Xn=null,Yn=null,Jn=null;function Zn(){if(Jn)return Jn;var e,t,n=Yn,r=n.length,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return Jn=i.slice(e,1<t?1-t:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tr(){return!0}function nr(){return!1}function rr(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?tr:nr,this.isPropagationStopped=nr,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var ir,sr,ar,or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=rr(or),ur=Le({},or,{view:0,detail:0}),cr=rr(ur),hr=Le({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Er,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&"mousemove"===e.type?(ir=e.screenX-ar.screenX,sr=e.screenY-ar.screenY):sr=ir=0,ar=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),dr=rr(hr),fr=rr(Le({},hr,{dataTransfer:0})),pr=rr(Le({},ur,{relatedTarget:0})),mr=rr(Le({},or,{animationName:0,elapsedTime:0,pseudoElement:0})),gr=Le({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=rr(gr),vr=rr(Le({},or,{data:0})),br={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Er(){return kr}var xr=Le({},ur,{key:function(e){if(e.key){var t=br[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=er(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Er,charCode:function(e){return"keypress"===e.type?er(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?er(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Sr=rr(xr),Tr=rr(Le({},hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Cr=rr(Le({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Er})),Ir=rr(Le({},or,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=Le({},hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rr=rr(Nr),Ar=[9,13,27,32],Pr=le&&"CompositionEvent"in window,Dr=null;le&&"documentMode"in document&&(Dr=document.documentMode);var Or=le&&"TextEvent"in window&&!Dr,Lr=le&&(!Pr||Dr&&8<Dr&&11>=Dr),Mr=String.fromCharCode(32),jr=!1;function Ur(e,t){switch(e){case"keyup":return-1!==Ar.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Vr=!1;var zr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!zr[e.type]:"textarea"===t}function $r(e,t,n,r){xt(r),0<(t=qi(t,"onChange")).length&&(n=new lr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,Hr=null;function Wr(e){Mi(e,0)}function Kr(e){if(He(vs(e)))return e}function Gr(e,t){if("change"===e)return t}var Qr=!1;if(le){var Xr;if(le){var Yr="oninput"in document;if(!Yr){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),Yr="function"==typeof Jr.oninput}Xr=Yr}else Xr=!1;Qr=Xr&&(!document.documentMode||9<document.documentMode)}function Zr(){qr&&(qr.detachEvent("onpropertychange",ei),Hr=qr=null)}function ei(e){if("value"===e.propertyName&&Kr(Hr)){var t=[];$r(t,Hr,e,bt(e)),Nt(Wr,t)}}function ti(e,t,n){"focusin"===e?(Zr(),Hr=n,(qr=t).attachEvent("onpropertychange",ei)):"focusout"===e&&Zr()}function ni(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kr(Hr)}function ri(e,t){if("click"===e)return Kr(t)}function ii(e,t){if("input"===e||"change"===e)return Kr(t)}var si="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ai(e,t){if(si(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ue.call(t,i)||!si(e[i],t[i]))return!1}return!0}function oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,t){var n,r=oi(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=oi(r)}}function ui(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ui(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ci(){for(var e=window,t=We();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=We((e=t.contentWindow).document)}return t}function hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function di(e){var t=ci(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ui(n.ownerDocument.documentElement,n)){if(null!==r&&hi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=li(n,s);var a=li(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fi=le&&"documentMode"in document&&11>=document.documentMode,pi=null,mi=null,gi=null,yi=!1;function vi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yi||null==pi||pi!==We(r)||("selectionStart"in(r=pi)&&hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},gi&&ai(gi,r)||(gi=r,0<(r=qi(mi,"onSelect")).length&&(t=new lr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pi)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},_i={},ki={};function Ei(e){if(_i[e])return _i[e];if(!wi[e])return e;var t,n=wi[e];for(t in n)if(n.hasOwnProperty(t)&&t in ki)return _i[e]=n[t];return e}le&&(ki=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);var xi=Ei("animationend"),Si=Ei("animationiteration"),Ti=Ei("animationstart"),Ci=Ei("transitionend"),Ii=new Map,Ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(e,t){Ii.set(e,t),ae(t,[e])}for(var Ai=0;Ai<Ni.length;Ai++){var Pi=Ni[Ai];Ri(Pi.toLowerCase(),"on"+(Pi[0].toUpperCase()+Pi.slice(1)))}Ri(xi,"onAnimationEnd"),Ri(Si,"onAnimationIteration"),Ri(Ti,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Ci,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function Li(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(Ft.apply(this,arguments),Ot){if(!Ot)throw Error(re(198));var u=Lt;Ot=!1,Lt=null,Mt||(Mt=!0,jt=u)}}(r,t,void 0,e),e.currentTarget=null}function Mi(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Li(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Li(i,o,u),s=l}}}if(Mt)throw e=jt,Mt=!1,jt=null,e}function ji(e,t){var n=t[fs];void 0===n&&(n=t[fs]=new Set);var r=e+"__bubble";n.has(r)||(zi(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),zi(n,e,r,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[Fi]){e[Fi]=!0,ie.forEach((function(t){"selectionchange"!==t&&(Oi.has(t)||Ui(t,!1,e),Ui(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fi]||(t[Fi]=!0,Ui("selectionchange",!1,t))}}function zi(e,t,n,r){switch(Qn(t)){case 1:var i=qn;break;case 4:i=Hn;break;default:i=Wn}n=i.bind(null,t,n,e),i=void 0,!At||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=gs(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}Nt((function(){var r=s,i=bt(n),a=[];e:{var o=Ii.get(e);if(void 0!==o){var l=lr,u=e;switch(e){case"keypress":if(0===er(n))break e;case"keydown":case"keyup":l=Sr;break;case"focusin":u="focus",l=pr;break;case"focusout":u="blur",l=pr;break;case"beforeblur":case"afterblur":l=pr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Cr;break;case xi:case Si:case Ti:l=mr;break;case Ci:l=Ir;break;case"scroll":l=cr;break;case"wheel":l=Rr;break;case"copy":case"cut":case"paste":l=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tr}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=Rt(p,d))&&c.push($i(p,m,f)))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===vt||!(u=n.relatedTarget||n.fromElement)||!gs(u)&&!u[ds])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?gs(u):null)&&(u!==(h=Vt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=dr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tr,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:vs(l),f=null==u?o:vs(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,gs(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=Hi(f))p++;for(f=0,m=d;m;m=Hi(m))f++;for(;0<p-f;)c=Hi(c),p--;for(;0<f-p;)d=Hi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=Hi(c),d=Hi(d)}c=null}else c=null;null!==l&&Wi(a,o,l,c,!1),null!==u&&null!==h&&Wi(a,h,u,c,!0)}if("select"===(l=(o=r?vs(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Gr;else if(Br(o))if(Qr)g=ii;else{g=ni;var y=ti}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=ri);switch(g&&(g=g(e,r))?$r(a,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&Je(o,"number",o.value)),y=r?vs(r):window,e){case"focusin":(Br(y)||"true"===y.contentEditable)&&(pi=y,mi=r,gi=null);break;case"focusout":gi=mi=pi=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,vi(a,n,i);break;case"selectionchange":if(fi)break;case"keydown":case"keyup":vi(a,n,i)}var v;if(Pr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vr?Ur(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Lr&&"ko"!==n.locale&&(Vr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Vr&&(v=Zn()):(Yn="value"in(Xn=i)?Xn.value:Xn.textContent,Vr=!0)),0<(y=qi(r,b)).length&&(b=new vr(b,e,null,n,i),a.push({event:b,listeners:y}),v?b.data=v:null!==(v=Fr(n))&&(b.data=v))),(v=Or?function(e,t){switch(e){case"compositionend":return Fr(t);case"keypress":return 32!==t.which?null:(jr=!0,Mr);case"textInput":return(e=t.data)===Mr&&jr?null:e;default:return null}}(e,n):function(e,t){if(Vr)return"compositionend"===e||!Pr&&Ur(e,t)?(e=Zn(),Jn=Yn=Xn=null,Vr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qi(r,"onBeforeInput")).length&&(i=new vr("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Mi(a,t)}))}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=Rt(e,n))&&r.unshift($i(e,s,i)),null!=(s=Rt(e,t))&&r.push($i(e,s,i))),e=e.return}return r}function Hi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Wi(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=Rt(n,s))&&a.unshift($i(n,l,o)):i||null!=(l=Rt(n,s))&&a.push($i(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Ki=/\r\n?/g,Gi=/\u0000|\uFFFD/g;function Qi(e){return("string"==typeof e?e:""+e).replace(Ki,"\n").replace(Gi,"")}function Xi(e,t,n){if(t=Qi(t),Qi(e)!==t&&n)throw Error(re(425))}function Yi(){}var Ji=null,Zi=null;function es(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ts="function"==typeof setTimeout?setTimeout:void 0,ns="function"==typeof clearTimeout?clearTimeout:void 0,rs="function"==typeof Promise?Promise:void 0,is="function"==typeof queueMicrotask?queueMicrotask:void 0!==rs?function(e){return rs.resolve(null).then(e).catch(ss)}:ts;function ss(e){setTimeout((function(){throw e}))}function as(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void zn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);zn(t)}function os(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ls(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var us=Math.random().toString(36).slice(2),cs="__reactFiber$"+us,hs="__reactProps$"+us,ds="__reactContainer$"+us,fs="__reactEvents$"+us,ps="__reactListeners$"+us,ms="__reactHandles$"+us;function gs(e){var t=e[cs];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ds]||n[cs]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ls(e);null!==e;){if(n=e[cs])return n;e=ls(e)}return t}n=(e=n).parentNode}return null}function ys(e){return!(e=e[cs]||e[ds])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function vs(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(re(33))}function bs(e){return e[hs]||null}var ws=[],_s=-1;function ks(e){return{current:e}}function Es(e){0>_s||(e.current=ws[_s],ws[_s]=null,_s--)}function xs(e,t){_s++,ws[_s]=e.current,e.current=t}var Ss={},Ts=ks(Ss),Cs=ks(!1),Is=Ss;function Ns(e,t){var n=e.type.contextTypes;if(!n)return Ss;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Rs(e){return null!=(e=e.childContextTypes)}function As(){Es(Cs),Es(Ts)}function Ps(e,t,n){if(Ts.current!==Ss)throw Error(re(168));xs(Ts,t),xs(Cs,n)}function Ds(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(re(108,ze(e)||"Unknown",i));return Le({},n,r)}function Os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ss,Is=Ts.current,xs(Ts,e),xs(Cs,Cs.current),!0}function Ls(e,t,n){var r=e.stateNode;if(!r)throw Error(re(169));n?(e=Ds(e,t,Is),r.__reactInternalMemoizedMergedChildContext=e,Es(Cs),Es(Ts),xs(Ts,e)):Es(Cs),xs(Cs,n)}var Ms=null,js=!1,Us=!1;function Fs(e){null===Ms?Ms=[e]:Ms.push(e)}function Vs(){if(!Us&&null!==Ms){Us=!0;var e=0,t=vn;try{var n=Ms;for(vn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ms=null,js=!1}catch(hf){throw null!==Ms&&(Ms=Ms.slice(e+1)),Ht(Yt,Vs),hf}finally{vn=t,Us=!1}}return null}var zs=[],Bs=0,$s=null,qs=0,Hs=[],Ws=0,Ks=null,Gs=1,Qs="";function Xs(e,t){zs[Bs++]=qs,zs[Bs++]=$s,$s=e,qs=t}function Ys(e,t,n){Hs[Ws++]=Gs,Hs[Ws++]=Qs,Hs[Ws++]=Ks,Ks=e;var r=Gs;e=Qs;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Gs=1<<32-sn(t)+i|n<<i|r,Qs=s+e}else Gs=1<<s|n<<i|r,Qs=e}function Js(e){null!==e.return&&(Xs(e,1),Ys(e,1,0))}function Zs(e){for(;e===$s;)$s=zs[--Bs],zs[Bs]=null,qs=zs[--Bs],zs[Bs]=null;for(;e===Ks;)Ks=Hs[--Ws],Hs[Ws]=null,Qs=Hs[--Ws],Hs[Ws]=null,Gs=Hs[--Ws],Hs[Ws]=null}var ea=null,ta=null,na=!1,ra=null;function ia(e,t){var n=Ic(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ea=e,ta=os(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ea=e,ta=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ks?{id:Gs,overflow:Qs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ic(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ea=e,ta=null,!0);default:return!1}}function aa(e){return!(!(1&e.mode)||128&e.flags)}function oa(e){if(na){var t=ta;if(t){var n=t;if(!sa(e,t)){if(aa(e))throw Error(re(418));t=os(n.nextSibling);var r=ea;t&&sa(e,t)?ia(r,n):(e.flags=-4097&e.flags|2,na=!1,ea=e)}}else{if(aa(e))throw Error(re(418));e.flags=-4097&e.flags|2,na=!1,ea=e}}}function la(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ea=e}function ua(e){if(e!==ea)return!1;if(!na)return la(e),na=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!es(e.type,e.memoizedProps)),t&&(t=ta)){if(aa(e))throw ca(),Error(re(418));for(;t;)ia(e,t),t=os(t.nextSibling)}if(la(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ta=os(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ta=null}}else ta=ea?os(e.stateNode.nextSibling):null;return!0}function ca(){for(var e=ta;e;)e=os(e.nextSibling)}function ha(){ta=ea=null,na=!1}function da(e){null===ra?ra=[e]:ra.push(e)}var fa=ve.ReactCurrentBatchConfig;function pa(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(re(284));if(!n._owner)throw Error(re(290,e))}return e}function ma(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ga(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=Oc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===_e?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Re&&ga(s)===t.type)?((r=i(t,n.props)).ref=pa(e,t,n),r.return=e,r):((r=Ac(n.type,n.key,n.props,null,e.mode,r)).ref=pa(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Lc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Pc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Oc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case be:return(n=Ac(t.type,t.key,t.props,null,e.mode,n)).ref=pa(e,null,t),n.return=e,n;case we:return(t=Lc(t,e.mode,n)).return=e,t;case Re:return h(e,(0,t._init)(t._payload),n)}if(Ze(t)||De(t))return(t=Pc(t,e.mode,n,null)).return=e,t;ma(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case be:return n.key===i?l(e,t,n,r):null;case we:return n.key===i?u(e,t,n,r):null;case Re:return d(e,t,(i=n._init)(n._payload),r)}if(Ze(n)||De(n))return null!==i?null:c(e,t,n,r,null);ma(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case be:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case we:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Re:return f(e,t,n,(0,r._init)(r._payload),i)}if(Ze(r)||De(r))return c(t,e=e.get(n)||null,r,i,null);ma(t,r)}return null}return function o(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===_e&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case be:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===_e){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Re&&ga(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=pa(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===_e?((u=Pc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Ac(c.type,c.key,c.props,null,l.mode,p)).ref=pa(l,u,c),p.return=l,l=p)}return a(l);case we:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Lc(c,l.mode,p)).return=l,l=u}return a(l);case Re:return o(l,u,(g=c._init)(c._payload),p)}if(Ze(c))return function(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(i,p),na&&Xs(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return na&&Xs(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),na&&Xs(i,m),u}(l,u,c,p);if(De(c))return function(i,a,o,l){var u=De(o);if("function"!=typeof u)throw Error(re(150));if(null==(o=u.call(o)))throw Error(re(151));for(var c=u=null,p=a,m=a=0,g=null,y=o.next();null!==p&&!y.done;m++,y=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=s(v,a,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),na&&Xs(i,m),u;if(null===p){for(;!y.done;m++,y=o.next())null!==(y=h(i,y.value,l))&&(a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return na&&Xs(i,m),u}for(p=r(i,p);!y.done;m++,y=o.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),na&&Xs(i,m),u}(l,u,c,p);ma(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Oc(c,l.mode,p)).return=l,l=u),a(l)):n(l,u)}}var va=ya(!0),ba=ya(!1),wa=ks(null),_a=null,ka=null,Ea=null;function xa(){Ea=ka=_a=null}function Sa(e){var t=wa.current;Es(wa),e._currentValue=t}function Ta(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ca(e,t){_a=e,Ea=ka=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(gl=!0),e.firstContext=null)}function Ia(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===ka){if(null===_a)throw Error(re(308));ka=e,_a.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var Na=null;function Ra(e){null===Na?Na=[e]:Na.push(e)}function Aa(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ra(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pa(e,r)}function Pa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Da=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ma(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ja(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Su){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pa(e,n)}return null===(i=r.interleaved)?(t.next=t,Ra(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pa(e,n)}function Ua(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yn(e,n)}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var i=e.updateQueue;Da=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Le({},h,d);break e;case 2:Da=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Du|=a,e.lanes=a,e.memoizedState=h}}function za(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(re(191,i));i.call(r)}}}var Ba={},$a=ks(Ba),qa=ks(Ba),Ha=ks(Ba);function Wa(e){if(e===Ba)throw Error(re(174));return e}function Ka(e,t){switch(xs(Ha,t),xs(qa,e),xs($a,Ba),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:at(null,"");break;default:t=at(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Es($a),xs($a,t)}function Ga(){Es($a),Es(qa),Es(Ha)}function Qa(e){Wa(Ha.current);var t=Wa($a.current),n=at(t,e.type);t!==n&&(xs(qa,e),xs($a,n))}function Xa(e){qa.current===e&&(Es($a),Es(qa))}var Ya=ks(0);function Ja(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function eo(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var to=ve.ReactCurrentDispatcher,no=ve.ReactCurrentBatchConfig,ro=0,io=null,so=null,ao=null,oo=!1,lo=!1,uo=0,co=0;function ho(){throw Error(re(321))}function fo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!si(e[n],t[n]))return!1;return!0}function po(e,t,n,r,i,s){if(ro=s,io=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=null===e||null===e.memoizedState?Yo:Jo,e=n(r,i),lo){s=0;do{if(lo=!1,uo=0,25<=s)throw Error(re(301));s+=1,ao=so=null,t.updateQueue=null,to.current=Zo,e=n(r,i)}while(lo)}if(to.current=Xo,t=null!==so&&null!==so.next,ro=0,ao=so=io=null,oo=!1,t)throw Error(re(300));return e}function mo(){var e=0!==uo;return uo=0,e}function go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ao?io.memoizedState=ao=e:ao=ao.next=e,ao}function yo(){if(null===so){var e=io.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===ao?io.memoizedState:ao.next;if(null!==t)ao=t,so=e;else{if(null===e)throw Error(re(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===ao?io.memoizedState=ao=e:ao=ao.next=e}return ao}function vo(e,t){return"function"==typeof t?t(e):t}function bo(e){var t=yo(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((ro&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,io.lanes|=c,Du|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,si(r,t.memoizedState)||(gl=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,io.lanes|=s,Du|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);si(s,t.memoizedState)||(gl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _o(){}function ko(e,t){var n=io,r=yo(),i=t(),s=!si(r.memoizedState,i);if(s&&(r.memoizedState=i,gl=!0),r=r.queue,Oo(So.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==ao&&1&ao.memoizedState.tag){if(n.flags|=2048,No(9,xo.bind(null,n,r,i,t),void 0,null),null===Tu)throw Error(re(349));30&ro||Eo(n,t,i)}return i}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=io.updateQueue)?(t={lastEffect:null,stores:null},io.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xo(e,t,n,r){t.value=n,t.getSnapshot=r,To(t)&&Co(e)}function So(e,t,n){return n((function(){To(t)&&Co(e)}))}function To(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!si(e,n)}catch(r){return!0}}function Co(e){var t=Pa(e,1);null!==t&&Zu(t,e,1,-1)}function Io(e){var t=go();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Wo.bind(null,io,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=io.updateQueue)?(t={lastEffect:null,stores:null},io.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ro(){return yo().memoizedState}function Ao(e,t,n,r){var i=go();io.flags|=e,i.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Po(e,t,n,r){var i=yo();r=void 0===r?null:r;var s=void 0;if(null!==so){var a=so.memoizedState;if(s=a.destroy,null!==r&&fo(r,a.deps))return void(i.memoizedState=No(t,n,s,r))}io.flags|=e,i.memoizedState=No(1|t,n,s,r)}function Do(e,t){return Ao(8390656,8,e,t)}function Oo(e,t){return Po(2048,8,e,t)}function Lo(e,t){return Po(4,2,e,t)}function Mo(e,t){return Po(4,4,e,t)}function jo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Uo(e,t,n){return n=null!=n?n.concat([e]):null,Po(4,4,jo.bind(null,t,e),n)}function Fo(){}function Vo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bo(e,t,n){return 21&ro?(si(n,t)||(n=pn(),io.lanes|=n,Du|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gl=!0),e.memoizedState=n)}function $o(e,t){var n=vn;vn=0!==n&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{vn=n,no.transition=r}}function qo(){return yo().memoizedState}function Ho(e,t,n){var r=Ju(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ko(e))Go(t,n);else if(null!==(n=Aa(e,t,n,r))){Zu(n,e,r,Yu()),Qo(n,t,r)}}function Wo(e,t,n){var r=Ju(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ko(e))Go(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,si(o,a)){var l=t.interleaved;return null===l?(i.next=i,Ra(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(pf){}null!==(n=Aa(e,t,i,r))&&(Zu(n,e,r,i=Yu()),Qo(n,t,r))}}function Ko(e){var t=e.alternate;return e===io||null!==t&&t===io}function Go(e,t){lo=oo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yn(e,n)}}var Xo={readContext:Ia,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Yo={readContext:Ia,useCallback:function(e,t){return go().memoizedState=[e,void 0===t?null:t],e},useContext:Ia,useEffect:Do,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ao(4194308,4,jo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=go();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=go();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ho.bind(null,io,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},go().memoizedState=e},useState:Io,useDebugValue:Fo,useDeferredValue:function(e){return go().memoizedState=e},useTransition:function(){var e=Io(!1),t=e[0];return e=$o.bind(null,e[1]),go().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=io,i=go();if(na){if(void 0===n)throw Error(re(407));n=n()}else{if(n=t(),null===Tu)throw Error(re(349));30&ro||Eo(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Do(So.bind(null,r,s,e),[e]),r.flags|=2048,No(9,xo.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=go(),t=Tu.identifierPrefix;if(na){var n=Qs;t=":"+t+"R"+(n=(Gs&~(1<<32-sn(Gs)-1)).toString(32)+n),0<(n=uo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=co++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jo={readContext:Ia,useCallback:Vo,useContext:Ia,useEffect:Oo,useImperativeHandle:Uo,useInsertionEffect:Lo,useLayoutEffect:Mo,useMemo:zo,useReducer:bo,useRef:Ro,useState:function(){return bo(vo)},useDebugValue:Fo,useDeferredValue:function(e){return Bo(yo(),so.memoizedState,e)},useTransition:function(){return[bo(vo)[0],yo().memoizedState]},useMutableSource:_o,useSyncExternalStore:ko,useId:qo,unstable_isNewReconciler:!1},Zo={readContext:Ia,useCallback:Vo,useContext:Ia,useEffect:Oo,useImperativeHandle:Uo,useInsertionEffect:Lo,useLayoutEffect:Mo,useMemo:zo,useReducer:wo,useRef:Ro,useState:function(){return wo(vo)},useDebugValue:Fo,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:Bo(t,so.memoizedState,e)},useTransition:function(){return[wo(vo)[0],yo().memoizedState]},useMutableSource:_o,useSyncExternalStore:ko,useId:qo,unstable_isNewReconciler:!1};function el(e,t){if(e&&e.defaultProps){for(var n in t=Le({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function tl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Le({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return!!(e=e._reactInternals)&&Vt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Yu(),i=Ju(e),s=Ma(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=ja(e,s,i))&&(Zu(t,e,i,r),Ua(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Yu(),i=Ju(e),s=Ma(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=ja(e,s,i))&&(Zu(t,e,i,r),Ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yu(),r=Ju(e),i=Ma(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=ja(e,i,r))&&(Zu(t,e,r,n),Ua(t,e,r))}};function rl(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!ai(n,r)||!ai(i,s))}function il(e,t,n){var r=!1,i=Ss,s=t.contextType;return"object"==typeof s&&null!==s?s=Ia(s):(i=Rs(t)?Is:Ts.current,s=(r=null!=(r=t.contextTypes))?Ns(e,i):Ss),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sl(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Oa(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Ia(s):(s=Rs(t)?Is:Ts.current,i.context=Ns(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(tl(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),Va(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ol(e,t){try{var n="",r=t;do{n+=Fe(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}var ul="function"==typeof WeakMap?WeakMap:Map;function cl(e,t,n){(n=Ma(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zu||(zu=!0,Bu=r)},n}function hl(e,t,n){(n=Ma(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===$u?$u=new Set([this]):$u.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function dl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ul;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kc.bind(null,e,t,n),t.then(e,e))}function fl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function pl(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ma(-1,1)).tag=2,ja(n,t,1))),n.lanes|=1),e)}var ml=ve.ReactCurrentOwner,gl=!1;function yl(e,t,n,r){t.child=null===e?ba(t,null,n,r):va(t,e.child,n,r)}function vl(e,t,n,r,i){n=n.render;var s=t.ref;return Ca(t,i),r=po(e,t,n,r,s,i),n=mo(),null===e||gl?(na&&n&&Js(t),t.flags|=1,yl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zl(e,t,i))}function bl(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Nc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ac(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,wl(e,t,s,r,i))}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:ai)(a,r)&&e.ref===t.ref)return zl(e,t,i)}return t.flags|=1,(e=Rc(s,r)).ref=t.ref,e.return=t,t.child=e}function wl(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(ai(s,r)&&e.ref===t.ref){if(gl=!1,t.pendingProps=r=s,!(e.lanes&i))return t.lanes=e.lanes,zl(e,t,i);131072&e.flags&&(gl=!0)}}return El(e,t,n,r,i)}function _l(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xs(Ru,Nu),Nu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,xs(Ru,Nu),Nu|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xs(Ru,Nu),Nu|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,xs(Ru,Nu),Nu|=r;return yl(e,t,i,n),t.child}function kl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,i){var s=Rs(n)?Is:Ts.current;return s=Ns(t,s),Ca(t,i),n=po(e,t,n,r,s,i),r=mo(),null===e||gl?(na&&r&&Js(t),t.flags|=1,yl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zl(e,t,i))}function xl(e,t,n,r,i){if(Rs(n)){var s=!0;Os(t)}else s=!1;if(Ca(t,i),null===t.stateNode)Vl(e,t),il(t,n,r),al(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=Ia(u):u=Ns(t,u=Rs(n)?Is:Ts.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&sl(t,a,r,u),Da=!1;var d=t.memoizedState;a.state=d,Va(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Cs.current||Da?("function"==typeof c&&(tl(t,n,c,r),l=t.memoizedState),(o=Da||rl(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:el(t.type,o),a.props=u,h=t.pendingProps,d=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=Ia(l):l=Ns(t,l=Rs(n)?Is:Ts.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&sl(t,a,r,l),Da=!1,d=t.memoizedState,a.state=d,Va(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Cs.current||Da?("function"==typeof f&&(tl(t,n,f,r),p=t.memoizedState),(u=Da||rl(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Sl(e,t,n,r,s,i)}function Sl(e,t,n,r,i,s){kl(e,t);var a=!!(128&t.flags);if(!r&&!a)return i&&Ls(t,n,!1),zl(e,t,s);r=t.stateNode,ml.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=va(t,e.child,null,s),t.child=va(t,null,o,s)):yl(e,t,o,s),t.memoizedState=r.state,i&&Ls(t,n,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?Ps(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ps(0,t.context,!1),Ka(e,t.containerInfo)}function Cl(e,t,n,r,i){return ha(),da(i),t.flags|=256,yl(e,t,n,r),t.child}var Il,Nl,Rl,Al,Pl={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ol(e,t,n){var r,i=t.pendingProps,s=Ya.current,a=!1,o=!!(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),xs(Ya,1&s),null===e)return oa(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},1&i||null===a?a=Dc(o,i,0,null):(a.childLanes=0,a.pendingProps=o),e=Pc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Dl(n),t.memoizedState=Pl,e):Ll(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Ml(e,t,a,r=ll(Error(re(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Dc({mode:"visible",children:r.children},i,0,null),(s=Pc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&va(t,e.child,null,a),t.child.memoizedState=Dl(a),t.memoizedState=Pl,s);if(!(1&t.mode))return Ml(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var o=r.dgst;return r=o,Ml(e,t,a,r=ll(s=Error(re(419)),r,void 0))}if(o=!!(a&e.childLanes),gl||o){if(null!==(r=Tu)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=i&(r.suspendedLanes|a)?0:i)&&i!==s.retryLane&&(s.retryLane=i,Pa(e,i),Zu(r,e,i,-1))}return dc(),Ml(e,t,a,r=ll(Error(re(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=xc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ta=os(i.nextSibling),ea=t,na=!0,ra=null,null!==e&&(Hs[Ws++]=Gs,Hs[Ws++]=Qs,Hs[Ws++]=Ks,Gs=e.id,Qs=e.overflow,Ks=t),t=Ll(t,r.children),t.flags|=4096,t)}(e,t,o,i,r,s,n);if(a){a=i.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&o||t.child===s?(i=Rc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?a=Rc(r,a):(a=Pc(a,o,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=null===(o=e.child.memoizedState)?Dl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Pl,i}return e=(a=e.child).sibling,i=Rc(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ll(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,n,r){return null!==r&&da(r),va(t,e.child,null,n),(e=Ll(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function jl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ta(e.return,t,n)}function Ul(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(yl(e,t,r.children,n),2&(r=Ya.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&jl(e,n,t);else if(19===e.tag)jl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xs(Ya,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ja(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ul(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ja(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ul(t,!0,n,null,s);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Vl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Du|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(re(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Bl(e,t){if(!na)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $l(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $l(t),null;case 1:case 17:return Rs(t.type)&&As(),$l(t),null;case 3:return r=t.stateNode,Ga(),Es(Cs),Es(Ts),eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ra&&(rc(ra),ra=null))),Nl(e,t),$l(t),null;case 5:Xa(t);var i=Wa(Ha.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(re(166));return $l(t),null}if(e=Wa($a.current),ua(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[cs]=t,r[hs]=s,e=!!(1&t.mode),n){case"dialog":ji("cancel",r),ji("close",r);break;case"iframe":case"object":case"embed":ji("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)ji(Di[i],r);break;case"source":ji("error",r);break;case"img":case"image":case"link":ji("error",r),ji("load",r);break;case"details":ji("toggle",r);break;case"input":Ge(r,s),ji("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ji("invalid",r);break;case"textarea":nt(r,s),ji("invalid",r)}for(var a in gt(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&Xi(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&Xi(r.textContent,o,e),i=["children",""+o]):se.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&ji("scroll",r)}switch(n){case"input":qe(r),Ye(r,s,!0);break;case"textarea":qe(r),it(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Yi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=st(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[cs]=t,e[hs]=r,Il(e,t,!1,!1),t.stateNode=e;e:{switch(a=yt(n,r),n){case"dialog":ji("cancel",e),ji("close",e),i=r;break;case"iframe":case"object":case"embed":ji("load",e),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)ji(Di[i],e);i=r;break;case"source":ji("error",e),i=r;break;case"img":case"image":case"link":ji("error",e),ji("load",e),i=r;break;case"details":ji("toggle",e),i=r;break;case"input":Ge(e,r),i=Ke(e,r),ji("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),ji("invalid",e);break;case"textarea":nt(e,r),i=tt(e,r),ji("invalid",e)}for(s in gt(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?pt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ut(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&ct(e,l):"number"==typeof l&&ct(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(se.hasOwnProperty(s)?null!=l&&"onScroll"===s&&ji("scroll",e):null!=l&&ye(e,s,l,a))}switch(n){case"input":qe(e),Ye(e,r,!1);break;case"textarea":qe(e),it(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Be(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?et(e,!!r.multiple,s,!1):null!=r.defaultValue&&et(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return $l(t),null;case 6:if(e&&null!=t.stateNode)Al(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(re(166));if(n=Wa(Ha.current),Wa($a.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[cs]=t,(s=r.nodeValue!==n)&&null!==(e=ea))switch(e.tag){case 3:Xi(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xi(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[cs]=t,t.stateNode=r}return $l(t),null;case 13:if(Es(Ya),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(na&&null!==ta&&1&t.mode&&!(128&t.flags))ca(),ha(),t.flags|=98560,s=!1;else if(s=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(re(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(re(317));s[cs]=t}else ha(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;$l(t),s=!1}else null!==ra&&(rc(ra),ra=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Ya.current?0===Au&&(Au=3):dc())),null!==t.updateQueue&&(t.flags|=4),$l(t),null);case 4:return Ga(),Nl(e,t),null===e&&Vi(t.stateNode.containerInfo),$l(t),null;case 10:return Sa(t.type._context),$l(t),null;case 19:if(Es(Ya),null===(s=t.memoizedState))return $l(t),null;if(r=!!(128&t.flags),null===(a=s.rendering))if(r)Bl(s,!1);else{if(0!==Au||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=Ja(e))){for(t.flags|=128,Bl(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xs(Ya,1&Ya.current|2),t.child}e=e.sibling}null!==s.tail&&Qt()>Fu&&(t.flags|=128,r=!0,Bl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Ja(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Bl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!na)return $l(t),null}else 2*Qt()-s.renderingStartTime>Fu&&1073741824!==n&&(t.flags|=128,r=!0,Bl(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Qt(),t.sibling=null,n=Ya.current,xs(Ya,r?1&n|2:1&n),t):($l(t),null);case 22:case 23:return lc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Nu)&&($l(t),6&t.subtreeFlags&&(t.flags|=8192)):$l(t),null;case 24:case 25:return null}throw Error(re(156,t.tag))}function Hl(e,t){switch(Zs(t),t.tag){case 1:return Rs(t.type)&&As(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ga(),Es(Cs),Es(Ts),eo(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xa(t),null;case 13:if(Es(Ya),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(re(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Es(Ya),null;case 4:return Ga(),null;case 10:return Sa(t.type._context),null;case 22:case 23:return lc(),null;default:return null}}Il=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Rl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wa($a.current);var s,a=null;switch(n){case"input":i=Ke(e,i),r=Ke(e,r),a=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),a=[];break;case"textarea":i=tt(e,i),r=tt(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Yi)}for(u in gt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(se.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(se.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&ji("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Al=function(e,t,n,r){n!==r&&(t.flags|=4)};var Wl=!1,Kl=!1,Gl="function"==typeof WeakSet?WeakSet:Set,Ql=null;function Xl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){_c(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){_c(e,t,r)}}var Jl=!1;function Zl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&Yl(t,n,s)}i=i.next}while(i!==r)}}function eu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function tu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function nu(e){var t=e.alternate;null!==t&&(e.alternate=null,nu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[cs],delete t[hs],delete t[fs],delete t[ps],delete t[ms])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return 5===e.tag||3===e.tag||4===e.tag}function iu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function su(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Yi));else if(4!==r&&null!==(e=e.child))for(su(e,t,n),e=e.sibling;null!==e;)su(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(au(e,t,n),e=e.sibling;null!==e;)au(e,t,n),e=e.sibling}var ou=null,lu=!1;function uu(e,t,n){for(n=n.child;null!==n;)cu(e,t,n),n=n.sibling}function cu(e,t,n){if(rn&&"function"==typeof rn.onCommitFiberUnmount)try{rn.onCommitFiberUnmount(nn,n)}catch(o){}switch(n.tag){case 5:Kl||Xl(n,t);case 6:var r=ou,i=lu;ou=null,uu(e,t,n),lu=i,null!==(ou=r)&&(lu?(e=ou,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ou.removeChild(n.stateNode));break;case 18:null!==ou&&(lu?(e=ou,n=n.stateNode,8===e.nodeType?as(e.parentNode,n):1===e.nodeType&&as(e,n),zn(e)):as(ou,n.stateNode));break;case 4:r=ou,i=lu,ou=n.stateNode.containerInfo,lu=!0,uu(e,t,n),ou=r,lu=i;break;case 0:case 11:case 14:case 15:if(!Kl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(2&s||4&s)&&Yl(n,t,a),i=i.next}while(i!==r)}uu(e,t,n);break;case 1:if(!Kl&&(Xl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){_c(n,t,o)}uu(e,t,n);break;case 21:uu(e,t,n);break;case 22:1&n.mode?(Kl=(r=Kl)||null!==n.memoizedState,uu(e,t,n),Kl=r):uu(e,t,n);break;default:uu(e,t,n)}}function hu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=Sc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function du(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:ou=o.stateNode,lu=!1;break e;case 3:case 4:ou=o.stateNode.containerInfo,lu=!0;break e}o=o.return}if(null===ou)throw Error(re(160));cu(s,a,i),ou=null,lu=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(pf){_c(i,t,pf)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)fu(t,e),t=t.sibling}function fu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(du(t,e),pu(e),4&r){try{Zl(3,e,e.return),eu(3,e)}catch(df){_c(e,e.return,df)}try{Zl(5,e,e.return)}catch(df){_c(e,e.return,df)}}break;case 1:du(t,e),pu(e),512&r&&null!==n&&Xl(n,n.return);break;case 5:if(du(t,e),pu(e),512&r&&null!==n&&Xl(n,n.return),32&e.flags){var i=e.stateNode;try{ct(i,"")}catch(df){_c(e,e.return,df)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&Qe(i,s),yt(o,a);var u=yt(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?pt(i,h):"dangerouslySetInnerHTML"===c?ut(i,h):"children"===c?ct(i,h):ye(i,c,h,u)}switch(o){case"input":Xe(i,s);break;case"textarea":rt(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?et(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?et(i,!!s.multiple,s.defaultValue,!0):et(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(df){_c(e,e.return,df)}}break;case 6:if(du(t,e),pu(e),4&r){if(null===e.stateNode)throw Error(re(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(df){_c(e,e.return,df)}}break;case 3:if(du(t,e),pu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(df){_c(e,e.return,df)}break;case 4:default:du(t,e),pu(e);break;case 13:du(t,e),pu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Uu=Qt())),4&r&&hu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Kl=(u=Kl)||c,du(t,e),Kl=u):du(t,e),pu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Ql=e,c=e.child;null!==c;){for(h=Ql=c;null!==Ql;){switch(f=(d=Ql).child,d.tag){case 0:case 11:case 14:case 15:Zl(4,d,d.return);break;case 1:Xl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(df){_c(r,n,df)}}break;case 5:Xl(d,d.return);break;case 22:if(null!==d.memoizedState){vu(h);continue}}null!==f?(f.return=d,Ql=f):vu(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=h.stateNode,a=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=ft("display",a))}catch(df){_c(e,e.return,df)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(df){_c(e,e.return,df)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:du(t,e),pu(e),4&r&&hu(e);case 21:}}function pu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ru(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ct(i,""),r.flags&=-33),au(e,iu(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;su(e,iu(e),s);break;default:throw Error(re(161))}}catch(a){_c(e,e.return,a)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function mu(e,t,n){Ql=e,gu(e)}function gu(e,t,n){for(var r=!!(1&e.mode);null!==Ql;){var i=Ql,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Wl;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||Kl;o=Wl;var u=Kl;if(Wl=a,(Kl=l)&&!u)for(Ql=i;null!==Ql;)l=(a=Ql).child,22===a.tag&&null!==a.memoizedState?bu(i):null!==l?(l.return=a,Ql=l):bu(i);for(;null!==s;)Ql=s,gu(s),s=s.sibling;Ql=i,Wl=o,Kl=u}yu(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Ql=s):yu(e)}}function yu(e){for(;null!==Ql;){var t=Ql;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Kl||eu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Kl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:el(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&za(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}za(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&zn(h)}}}break;default:throw Error(re(163))}Kl||512&t.flags&&tu(t)}catch(ff){_c(t,t.return,ff)}}if(t===e){Ql=null;break}if(null!==(n=t.sibling)){n.return=t.return,Ql=n;break}Ql=t.return}}function vu(e){for(;null!==Ql;){var t=Ql;if(t===e){Ql=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Ql=n;break}Ql=t.return}}function bu(e){for(;null!==Ql;){var t=Ql;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{eu(4,t)}catch(l){_c(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){_c(t,i,l)}}var s=t.return;try{tu(t)}catch(l){_c(t,s,l)}break;case 5:var a=t.return;try{tu(t)}catch(l){_c(t,a,l)}}}catch(l){_c(t,t.return,l)}if(t===e){Ql=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Ql=o;break}Ql=t.return}}var wu,_u=Math.ceil,ku=ve.ReactCurrentDispatcher,Eu=ve.ReactCurrentOwner,xu=ve.ReactCurrentBatchConfig,Su=0,Tu=null,Cu=null,Iu=0,Nu=0,Ru=ks(0),Au=0,Pu=null,Du=0,Ou=0,Lu=0,Mu=null,ju=null,Uu=0,Fu=1/0,Vu=null,zu=!1,Bu=null,$u=null,qu=!1,Hu=null,Wu=0,Ku=0,Gu=null,Qu=-1,Xu=0;function Yu(){return 6&Su?Qt():-1!==Qu?Qu:Qu=Qt()}function Ju(e){return 1&e.mode?2&Su&&0!==Iu?Iu&-Iu:null!==fa.transition?(0===Xu&&(Xu=pn()),Xu):0!==(e=vn)?e:e=void 0===(e=window.event)?16:Qn(e.type):1}function Zu(e,t,n,r){if(50<Ku)throw Ku=0,Gu=null,Error(re(185));gn(e,n,r),2&Su&&e===Tu||(e===Tu&&(!(2&Su)&&(Ou|=n),4===Au&&ic(e,Iu)),ec(e,r),1===n&&0===Su&&!(1&t.mode)&&(Fu=Qt()+500,js&&Vs()))}function ec(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-sn(s),o=1<<a,l=i[a];-1===l?o&n&&!(o&r)||(i[a]=dn(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r=hn(e,e===Tu?Iu:0);if(0===r)null!==n&&Wt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Wt(n),1===t)0===e.tag?function(e){js=!0,Fs(e)}(sc.bind(null,e)):Fs(sc.bind(null,e)),is((function(){!(6&Su)&&Vs()})),n=null;else{switch(bn(r)){case 1:n=Yt;break;case 4:n=Jt;break;case 16:default:n=Zt;break;case 536870912:n=tn}n=Tc(n,tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tc(e,t){if(Qu=-1,Xu=0,6&Su)throw Error(re(327));var n=e.callbackNode;if(bc()&&e.callbackNode!==n)return null;var r=hn(e,e===Tu?Iu:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=fc(e,r);else{t=r;var i=Su;Su|=2;var s=hc();for(Tu===e&&Iu===t||(Vu=null,Fu=Qt()+500,uc(e,t));;)try{mc();break}catch(o){cc(e,o)}xa(),ku.current=s,Su=i,null!==Cu?t=0:(Tu=null,Iu=0,t=Au)}if(0!==t){if(2===t&&(0!==(i=fn(e))&&(r=i,t=nc(e,i))),1===t)throw n=Pu,uc(e,0),ic(e,r),ec(e,Qt()),n;if(6===t)ic(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!si(s(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=fc(e,r),2===t&&(s=fn(e),0!==s&&(r=s,t=nc(e,s))),1!==t)))throw n=Pu,uc(e,0),ic(e,r),ec(e,Qt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(re(345));case 2:case 5:vc(e,ju,Vu);break;case 3:if(ic(e,r),(130023424&r)===r&&10<(t=Uu+500-Qt())){if(0!==hn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){Yu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ts(vc.bind(null,e,ju,Vu),t);break}vc(e,ju,Vu);break;case 4:if(ic(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=Qt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_u(r/1960))-r)){e.timeoutHandle=ts(vc.bind(null,e,ju,Vu),r);break}vc(e,ju,Vu);break;default:throw Error(re(329))}}}return ec(e,Qt()),e.callbackNode===n?tc.bind(null,e):null}function nc(e,t){var n=Mu;return e.current.memoizedState.isDehydrated&&(uc(e,t).flags|=256),2!==(e=fc(e,t))&&(t=ju,ju=n,null!==t&&rc(t)),e}function rc(e){null===ju?ju=e:ju.push.apply(ju,e)}function ic(e,t){for(t&=~Lu,t&=~Ou,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(6&Su)throw Error(re(327));bc();var t=hn(e,0);if(!(1&t))return ec(e,Qt()),null;var n=fc(e,t);if(0!==e.tag&&2===n){var r=fn(e);0!==r&&(t=r,n=nc(e,r))}if(1===n)throw n=Pu,uc(e,0),ic(e,t),ec(e,Qt()),n;if(6===n)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vc(e,ju,Vu),ec(e,Qt()),null}function ac(e,t){var n=Su;Su|=1;try{return e(t)}finally{0===(Su=n)&&(Fu=Qt()+500,js&&Vs())}}function oc(e){null!==Hu&&0===Hu.tag&&!(6&Su)&&bc();var t=Su;Su|=1;var n=xu.transition,r=vn;try{if(xu.transition=null,vn=1,e)return e()}finally{vn=r,xu.transition=n,!(6&(Su=t))&&Vs()}}function lc(){Nu=Ru.current,Es(Ru)}function uc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ns(n)),null!==Cu)for(n=Cu.return;null!==n;){var r=n;switch(Zs(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&As();break;case 3:Ga(),Es(Cs),Es(Ts),eo();break;case 5:Xa(r);break;case 4:Ga();break;case 13:case 19:Es(Ya);break;case 10:Sa(r.type._context);break;case 22:case 23:lc()}n=n.return}if(Tu=e,Cu=e=Rc(e.current,null),Iu=Nu=t,Au=0,Pu=null,Lu=Ou=Du=0,ju=Mu=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}Na=null}return e}function cc(e,t){for(;;){var n=Cu;try{if(xa(),to.current=Xo,oo){for(var r=io.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}oo=!1}if(ro=0,ao=so=io=null,lo=!1,uo=0,Eu.current=null,null===n||null===n.return){Au=1,Pu=t,Cu=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Iu,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=fl(a);if(null!==f){f.flags&=-257,pl(f,a,o,0,t),1&f.mode&&dl(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){dl(s,u,t),dc();break e}l=Error(re(426))}else if(na&&1&o.mode){var g=fl(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),pl(g,a,o,0,t),da(ol(l,o));break e}}s=l=ol(l,o),4!==Au&&(Au=2),null===Mu?Mu=[s]:Mu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Fa(s,cl(0,l,t));break e;case 1:o=l;var y=s.type,v=s.stateNode;if(!(128&s.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==$u&&$u.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,Fa(s,hl(s,o,t));break e}}s=s.return}while(null!==s)}yc(n)}catch(b){t=b,Cu===n&&null!==n&&(Cu=n=n.return);continue}break}}function hc(){var e=ku.current;return ku.current=Xo,null===e?Xo:e}function dc(){0!==Au&&3!==Au&&2!==Au||(Au=4),null===Tu||!(268435455&Du)&&!(268435455&Ou)||ic(Tu,Iu)}function fc(e,t){var n=Su;Su|=2;var r=hc();for(Tu===e&&Iu===t||(Vu=null,uc(e,t));;)try{pc();break}catch(hf){cc(e,hf)}if(xa(),Su=n,ku.current=r,null!==Cu)throw Error(re(261));return Tu=null,Iu=0,Au}function pc(){for(;null!==Cu;)gc(Cu)}function mc(){for(;null!==Cu&&!Kt();)gc(Cu)}function gc(e){var t=wu(e.alternate,e,Nu);e.memoizedProps=e.pendingProps,null===t?yc(e):Cu=t,Eu.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Hl(n,t)))return n.flags&=32767,void(Cu=n);if(null===e)return Au=6,void(Cu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=ql(n,t,Nu)))return void(Cu=n);if(null!==(t=t.sibling))return void(Cu=t);Cu=t=e}while(null!==t);0===Au&&(Au=5)}function vc(e,t,n){var r=vn,i=xu.transition;try{xu.transition=null,vn=1,function(e,t,n,r){do{bc()}while(null!==Hu);if(6&Su)throw Error(re(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Tu&&(Cu=Tu=null,Iu=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||qu||(qu=!0,Tc(Zt,(function(){return bc(),null}))),s=!!(15990&n.flags),!!(15990&n.subtreeFlags)||s){s=xu.transition,xu.transition=null;var a=vn;vn=1;var o=Su;Su|=4,Eu.current=null,function(e,t){if(Ji=$n,hi(e=ci())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(w){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},$n=!1,Ql=t;null!==Ql;)if(e=(t=Ql).child,1028&t.subtreeFlags&&null!==e)e.return=t,Ql=e;else for(;null!==Ql;){t=Ql;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:el(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(re(163))}}catch(w){_c(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Ql=e;break}Ql=t.return}p=Jl,Jl=!1}(e,n),fu(n,e),di(Zi),$n=!!Ji,Zi=Ji=null,e.current=n,mu(n),Gt(),Su=o,vn=a,xu.transition=s}else e.current=n;if(qu&&(qu=!1,Hu=e,Wu=i),s=e.pendingLanes,0===s&&($u=null),function(e){if(rn&&"function"==typeof rn.onCommitFiberRoot)try{rn.onCommitFiberRoot(nn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),ec(e,Qt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zu)throw zu=!1,e=Bu,Bu=null,e;!!(1&Wu)&&0!==e.tag&&bc(),s=e.pendingLanes,1&s?e===Gu?Ku++:(Ku=0,Gu=e):Ku=0,Vs()}(e,t,n,r)}finally{xu.transition=i,vn=r}return null}function bc(){if(null!==Hu){var e=bn(Wu),t=xu.transition,n=vn;try{if(xu.transition=null,vn=16>e?16:e,null===Hu)var r=!1;else{if(e=Hu,Hu=null,Wu=0,6&Su)throw Error(re(331));var i=Su;for(Su|=4,Ql=e.current;null!==Ql;){var s=Ql,a=s.child;if(16&Ql.flags){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(Ql=u;null!==Ql;){var c=Ql;switch(c.tag){case 0:case 11:case 15:Zl(8,c,s)}var h=c.child;if(null!==h)h.return=c,Ql=h;else for(;null!==Ql;){var d=(c=Ql).sibling,f=c.return;if(nu(c),c===u){Ql=null;break}if(null!==d){d.return=f,Ql=d;break}Ql=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Ql=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Ql=a;else e:for(;null!==Ql;){if(2048&(s=Ql).flags)switch(s.tag){case 0:case 11:case 15:Zl(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Ql=y;break e}Ql=s.return}}var v=e.current;for(Ql=v;null!==Ql;){var b=(a=Ql).child;if(2064&a.subtreeFlags&&null!==b)b.return=a,Ql=b;else e:for(a=v;null!==Ql;){if(2048&(o=Ql).flags)try{switch(o.tag){case 0:case 11:case 15:eu(9,o)}}catch(_){_c(o,o.return,_)}if(o===a){Ql=null;break e}var w=o.sibling;if(null!==w){w.return=o.return,Ql=w;break e}Ql=o.return}}if(Su=i,Vs(),rn&&"function"==typeof rn.onPostCommitFiberRoot)try{rn.onPostCommitFiberRoot(nn,e)}catch(_){}r=!0}return r}finally{vn=n,xu.transition=t}}return!1}function wc(e,t,n){e=ja(e,t=cl(0,t=ol(n,t),1),1),t=Yu(),null!==e&&(gn(e,1,t),ec(e,t))}function _c(e,t,n){if(3===e.tag)wc(e,e,n);else for(;null!==t;){if(3===t.tag){wc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===$u||!$u.has(r))){t=ja(t,e=hl(t,e=ol(n,e),1),1),e=Yu(),null!==t&&(gn(t,1,e),ec(t,e));break}}t=t.return}}function kc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Yu(),e.pingedLanes|=e.suspendedLanes&n,Tu===e&&(Iu&n)===n&&(4===Au||3===Au&&(130023424&Iu)===Iu&&500>Qt()-Uu?uc(e,0):Lu|=n),ec(e,t)}function Ec(e,t){0===t&&(1&e.mode?(t=un,!(130023424&(un<<=1))&&(un=4194304)):t=1);var n=Yu();null!==(e=Pa(e,t))&&(gn(e,t,n),ec(e,n))}function xc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Sc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(re(314))}null!==r&&r.delete(t),Ec(e,n)}function Tc(e,t){return Ht(e,t)}function Cc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ic(e,t,n,r){return new Cc(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Ic(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ac(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Nc(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case _e:return Pc(n.children,i,s,t);case ke:a=8,i|=8;break;case Ee:return(e=Ic(12,n,t,2|i)).elementType=Ee,e.lanes=s,e;case Ce:return(e=Ic(13,n,t,i)).elementType=Ce,e.lanes=s,e;case Ie:return(e=Ic(19,n,t,i)).elementType=Ie,e.lanes=s,e;case Ae:return Dc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case xe:a=10;break e;case Se:a=9;break e;case Te:a=11;break e;case Ne:a=14;break e;case Re:a=16,r=null;break e}throw Error(re(130,null==e?e:typeof e,""))}return(t=Ic(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Pc(e,t,n,r){return(e=Ic(7,e,r,t)).lanes=n,e}function Dc(e,t,n,r){return(e=Ic(22,e,r,t)).elementType=Ae,e.lanes=n,e.stateNode={isHidden:!1},e}function Oc(e,t,n){return(e=Ic(6,e,null,t)).lanes=n,e}function Lc(e,t,n){return(t=Ic(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jc(e,t,n,r,i,s,a,o,l){return e=new Mc(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Ic(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(s),e}function Uc(e){if(!e)return Ss;e:{if(Vt(e=e._reactInternals)!==e||1!==e.tag)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rs(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(re(171))}if(1===e.tag){var n=e.type;if(Rs(n))return Ds(e,n,t)}return t}function Fc(e,t,n,r,i,s,a,o,l){return(e=jc(n,r,!0,e,0,s,0,o,l)).context=Uc(null),n=e.current,(s=Ma(r=Yu(),i=Ju(n))).callback=null!=t?t:null,ja(n,s,i),e.current.lanes=i,gn(e,i,r),ec(e,r),e}function Vc(e,t,n,r){var i=t.current,s=Yu(),a=Ju(i);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ma(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=ja(i,t,a))&&(Zu(e,i,a,s),Ua(e,i,a)),a}function zc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Bc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function $c(e,t){Bc(e,t),(e=e.alternate)&&Bc(e,t)}wu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Cs.current)gl=!0;else{if(!(e.lanes&n||128&t.flags))return gl=!1,function(e,t,n){switch(t.tag){case 3:Tl(t),ha();break;case 5:Qa(t);break;case 1:Rs(t.type)&&Os(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xs(wa,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(xs(Ya,1&Ya.current),t.flags|=128,null):n&t.child.childLanes?Ol(e,t,n):(xs(Ya,1&Ya.current),null!==(e=zl(e,t,n))?e.sibling:null);xs(Ya,1&Ya.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return Fl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),xs(Ya,Ya.current),r)break;return null;case 22:case 23:return t.lanes=0,_l(e,t,n)}return zl(e,t,n)}(e,t,n);gl=!!(131072&e.flags)}else gl=!1,na&&1048576&t.flags&&Ys(t,qs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var i=Ns(t,Ts.current);Ca(t,n),i=po(null,t,r,e,i,n);var s=mo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rs(r)?(s=!0,Os(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Oa(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,al(t,r,e,n),t=Sl(null,t,r,!0,s,n)):(t.tag=0,na&&s&&Js(t),yl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Nc(e)?1:0;if(null!=e){if((e=e.$$typeof)===Te)return 11;if(e===Ne)return 14}return 2}(r),e=el(r,e),i){case 0:t=El(null,t,r,e,n);break e;case 1:t=xl(null,t,r,e,n);break e;case 11:t=vl(null,t,r,e,n);break e;case 14:t=bl(null,t,r,el(r.type,e),n);break e}throw Error(re(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,El(e,t,r,i=t.elementType===r?i:el(r,i),n);case 1:return r=t.type,i=t.pendingProps,xl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 3:e:{if(Tl(t),null===e)throw Error(re(387));r=t.pendingProps,i=(s=t.memoizedState).element,La(e,t),Va(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Cl(e,t,r,n,i=ol(Error(re(423)),t));break e}if(r!==i){t=Cl(e,t,r,n,i=ol(Error(re(424)),t));break e}for(ta=os(t.stateNode.containerInfo.firstChild),ea=t,na=!0,ra=null,n=ba(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===i){t=zl(e,t,n);break e}yl(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&oa(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,es(r,i)?a=null:null!==s&&es(r,s)&&(t.flags|=32),kl(e,t),yl(e,t,a,n),t.child;case 6:return null===e&&oa(t),null;case 13:return Ol(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=va(t,null,r,n):yl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,vl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 7:return yl(e,t,t.pendingProps,n),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,xs(wa,r._currentValue),r._currentValue=a,null!==s)if(si(s.value,a)){if(s.children===i.children&&!Cs.current){t=zl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Ma(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ta(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(re(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),Ta(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}yl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ca(t,n),r=r(i=Ia(i)),t.flags|=1,yl(e,t,r,n),t.child;case 14:return i=el(r=t.type,t.pendingProps),bl(e,t,r,i=el(r.type,i),n);case 15:return wl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:el(r,i),Vl(e,t),t.tag=1,Rs(r)?(e=!0,Os(t)):e=!1,Ca(t,n),il(t,r,i),al(t,r,i,n),Sl(null,t,r,!0,e,n);case 19:return Fl(e,t,n);case 22:return _l(e,t,n)}throw Error(re(156,t.tag))};var qc="function"==typeof reportError?reportError:function(e){};function Hc(e){this._internalRoot=e}function Wc(e){this._internalRoot=e}function Kc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Qc(){}function Xc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=zc(a);o.call(e)}}Vc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=zc(a);s.call(e)}}var a=Fc(t,r,e,0,null,!1,0,"",Qc);return e._reactRootContainer=a,e[ds]=a.current,Vi(8===e.nodeType?e.parentNode:e),oc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=zc(l);o.call(e)}}var l=jc(e,0,!1,null,0,!1,0,"",Qc);return e._reactRootContainer=l,e[ds]=l.current,Vi(8===e.nodeType?e.parentNode:e),oc((function(){Vc(t,l,n,r)})),l}(n,t,e,i,r);return zc(a)}Wc.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(re(409));Vc(e,t,null,null)},Wc.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;oc((function(){Vc(null,e,null,null)})),t[ds]=null}},Wc.prototype.unstable_scheduleHydration=function(e){if(e){var t=En();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&0!==t&&t<Pn[n].priority;n++);Pn.splice(n,0,e),0===n&&Mn(e)}},wn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cn(t.pendingLanes);0!==n&&(yn(t,1|n),ec(t,Qt()),!(6&Su)&&(Fu=Qt()+500,Vs()))}break;case 13:oc((function(){var t=Pa(e,1);if(null!==t){var n=Yu();Zu(t,e,1,n)}})),$c(e,1)}},_n=function(e){if(13===e.tag){var t=Pa(e,134217728);if(null!==t)Zu(t,e,134217728,Yu());$c(e,134217728)}},kn=function(e){if(13===e.tag){var t=Ju(e),n=Pa(e,t);if(null!==n)Zu(n,e,t,Yu());$c(e,t)}},En=function(){return vn},xn=function(e,t){var n=vn;try{return vn=e,t()}finally{vn=n}},wt=function(e,t,n){switch(t){case"input":if(Xe(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bs(r);if(!i)throw Error(re(90));He(r),Xe(r,i)}}}break;case"textarea":rt(e,n);break;case"select":null!=(t=n.value)&&et(e,!!n.multiple,t,!1)}},Tt=ac,Ct=oc;var Yc={usingClientEntryPoint:!1,Events:[ys,vs,bs,xt,St,ac]},Jc={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zc={bundleType:Jc.bundleType,version:Jc.version,rendererPackageName:Jc.rendererPackageName,rendererConfig:Jc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$t(e))?null:e.stateNode},findFiberByHostInstance:Jc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eh.isDisabled&&eh.supportsFiber)try{nn=eh.inject(Zc),rn=eh}catch(lt){}}Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yc,Y.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Kc(t))throw Error(re(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:we,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},Y.createRoot=function(e,t){if(!Kc(e))throw Error(re(299));var n=!1,r="",i=qc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=jc(e,1,!1,null,0,n,0,r,i),e[ds]=t.current,Vi(8===e.nodeType?e.parentNode:e),new Hc(t)},Y.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(re(188));throw e=Object.keys(e).join(","),Error(re(268,e))}return e=null===(e=$t(t))?null:e.stateNode},Y.flushSync=function(e){return oc(e)},Y.hydrate=function(e,t,n){if(!Gc(t))throw Error(re(200));return Xc(null,e,t,!0,n)},Y.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(re(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=qc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Fc(t,null,e,1,null!=n?n:null,i,0,s,a),e[ds]=t.current,Vi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wc(t)},Y.render=function(e,t,n){if(!Gc(t))throw Error(re(200));return Xc(null,e,t,!1,n)},Y.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(re(40));return!!e._reactRootContainer&&(oc((function(){Xc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ds]=null}))})),!0)},Y.unstable_batchedUpdates=ac,Y.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gc(n))throw Error(re(200));if(null==e||void 0===e._reactInternals)throw Error(re(38));return Xc(e,t,n,!1,r)},Y.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),X.exports=Y;var th,nh,rh,ih=X.exports;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function sh(){return sh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sh.apply(this,arguments)}th=ih.createRoot,ih.hydrateRoot,(rh=nh||(nh={})).Pop="POP",rh.Push="PUSH",rh.Replace="REPLACE";const ah="popstate";function oh(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=nh.Pop,l=null,u=c();null==u&&(u=0,a.replaceState(sh({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function h(){o=nh.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:o,location:m.location,delta:t})}function d(e,t){o=nh.Push;let n=hh(m.location,e,t);u=c()+1;let r=ch(n,u),h=m.createHref(n);try{a.pushState(r,"",h)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;i.location.assign(h)}s&&l&&l({action:o,location:m.location,delta:1})}function f(e,t){o=nh.Replace;let n=hh(m.location,e,t);u=c();let r=ch(n,u),i=m.createHref(n);a.replaceState(r,"",i),s&&l&&l({action:o,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:dh(e);return n=n.replace(/ $/,"%20"),lh(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return o},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ah,h),l=e,()=>{i.removeEventListener(ah,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>a.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return hh("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:dh(t)}),0,e)}function lh(e,t){if(!1===e||null==e)throw new Error(t)}function uh(e,t){if(!e)try{throw new Error(t)}catch(hf){}}function ch(e,t){return{usr:e.state,key:e.key,idx:t}}function hh(e,t,n,r){return void 0===n&&(n=null),sh({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?fh(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function dh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function fh(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var ph,mh;function gh(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let i="string"==typeof t?fh(t):t,s=Rh(i.pathname||"/",n);if(null==s)return null;let a=yh(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l){let e=Nh(s);o=Ch(a[l],e,r)}return o}(e,t,n,!1)}function yh(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let a={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(lh(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let o=Oh([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(lh(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),yh(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:Th(o,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of vh(e.path))i(e,t,r);else i(e,t)})),t}function vh(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let a=vh(r.join("/")),o=[];return o.push(...a.map((e=>""===e?s:[s,e].join("/")))),i&&o.push(...a),o.map((t=>e.startsWith("/")&&""===t?"/":t))}(mh=ph||(ph={})).data="data",mh.deferred="deferred",mh.redirect="redirect",mh.error="error";const bh=/^:[\w-]+$/,wh=3,_h=2,kh=1,Eh=10,xh=-2,Sh=e=>"*"===e;function Th(e,t){let n=e.split("/"),r=n.length;return n.some(Sh)&&(r+=xh),t&&(r+=_h),n.filter((e=>!Sh(e))).reduce(((e,t)=>e+(bh.test(t)?wh:""===t?kh:Eh)),r)}function Ch(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],l=o===r.length-1,u="/"===s?t:t.slice(s.length)||"/",c=Ih({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),h=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Ih({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:Oh([s,c.pathname]),pathnameBase:Lh(Oh([s,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(s=Oh([s,c.pathnameBase]))}return a}function Ih(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);uh("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=o[n]||"";a=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:s,pathnameBase:a,pattern:e}}function Nh(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return uh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Rh(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Ah(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Ph(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function Dh(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=fh(e):(i=sh({},e),lh(!i.pathname||!i.pathname.includes("?"),Ah("?","pathname","search",i)),lh(!i.pathname||!i.pathname.includes("#"),Ah("#","pathname","hash",i)),lh(!i.search||!i.search.includes("#"),Ah("#","search","hash",i)));let s,a=""===e||""===i.pathname,o=a?"/":i.pathname;if(null==o)s=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?fh(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:Mh(r),hash:jh(i)}}(i,s),u=o&&"/"!==o&&o.endsWith("/"),c=(a||"."===o)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const Oh=e=>e.join("/").replace(/\/\/+/g,"/"),Lh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mh=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",jh=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const Uh=["post","put","patch","delete"];new Set(Uh);const Fh=["get",...Uh];
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vh(){return Vh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vh.apply(this,arguments)}new Set(Fh);const zh=V.createContext(null),Bh=V.createContext(null),$h=V.createContext(null),qh=V.createContext(null),Hh=V.createContext({outlet:null,matches:[],isDataRoute:!1}),Wh=V.createContext(null);function Kh(){return null!=V.useContext(qh)}function Gh(){return Kh()||lh(!1),V.useContext(qh).location}function Qh(e){V.useContext($h).static||V.useLayoutEffect(e)}function Xh(){let{isDataRoute:e}=V.useContext(Hh);return e?function(){let{router:e}=function(){let e=V.useContext(zh);return e||lh(!1),e}(rd.UseNavigateStable),t=sd(id.UseNavigateStable),n=V.useRef(!1);return Qh((()=>{n.current=!0})),V.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,Vh({fromRouteId:t},i)))}),[e,t])}():function(){Kh()||lh(!1);let e=V.useContext(zh),{basename:t,future:n,navigator:r}=V.useContext($h),{matches:i}=V.useContext(Hh),{pathname:s}=Gh(),a=JSON.stringify(Ph(i,n.v7_relativeSplatPath)),o=V.useRef(!1);return Qh((()=>{o.current=!0})),V.useCallback((function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void r.go(n);let l=Dh(n,JSON.parse(a),s,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Oh([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[t,r,a,s,e])}()}function Yh(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=V.useContext($h),{matches:i}=V.useContext(Hh),{pathname:s}=Gh(),a=JSON.stringify(Ph(i,r.v7_relativeSplatPath));return V.useMemo((()=>Dh(e,JSON.parse(a),s,"path"===n)),[e,a,s,n])}function Jh(e,t){return function(e,t,n,r){Kh()||lh(!1);let{navigator:i}=V.useContext($h),{matches:s}=V.useContext(Hh),a=s[s.length-1],o=a?a.params:{};!a||a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u,c=Gh();if(t){var h;let e="string"==typeof t?fh(t):t;"/"===l||(null==(h=e.pathname)?void 0:h.startsWith(l))||lh(!1),u=e}else u=c;let d=u.pathname||"/",f=d;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=gh(e,{pathname:f}),m=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var s;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(s=r)&&s.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let a=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id])));e>=0||lh(!1),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let e=a[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){l=!0,a=u>=0?a.slice(0,u+1):[a[0]];break}}}return a.reduceRight(((e,r,i)=>{let s,c=!1,h=null,d=null;n&&(s=o&&r.route.id?o[r.route.id]:void 0,h=r.route.errorElement||ed,l&&(u<0&&0===i?(c=!0,d=null):u===i&&(c=!0,d=r.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,i+1)),p=()=>{let t;return t=s?h:c?d:r.route.Component?V.createElement(r.route.Component,null):r.route.element?r.route.element:e,V.createElement(nd,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?V.createElement(td,{location:n.location,revalidation:n.revalidation,component:h,error:s,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Oh([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Oh([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n,r);if(t&&m)return V.createElement(qh.Provider,{value:{location:Vh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nh.Pop}},m);return m}(e,t)}function Zh(){let e=function(){var e;let t=V.useContext(Wh),n=function(){let e=V.useContext(Bh);return e||lh(!1),e}(id.UseRouteError),r=sd(id.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},t),n?V.createElement("pre",{style:r},n):null,null)}const ed=V.createElement(Zh,null);class td extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?V.createElement(Hh.Provider,{value:this.props.routeContext},V.createElement(Wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nd(e){let{routeContext:t,match:n,children:r}=e,i=V.useContext(zh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Hh.Provider,{value:t},r)}var rd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rd||{}),id=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(id||{});function sd(e){let t=function(){let e=V.useContext(Hh);return e||lh(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||lh(!1),n.route.id}const ad={};const od=(e,t,n)=>{var r;ad[r="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(ad[r]=!0)};function ld(e){lh(!1)}function ud(e){let{basename:t="/",children:n=null,location:r,navigationType:i=nh.Pop,navigator:s,static:a=!1,future:o}=e;Kh()&&lh(!1);let l=t.replace(/^\/*/,"/"),u=V.useMemo((()=>({basename:l,navigator:s,static:a,future:Vh({v7_relativeSplatPath:!1},o)})),[l,o,s,a]);"string"==typeof r&&(r=fh(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:p="default"}=r,m=V.useMemo((()=>{let e=Rh(c,l);return null==e?null:{location:{pathname:e,search:h,hash:d,state:f,key:p},navigationType:i}}),[l,c,h,d,f,p,i]);return null==m?null:V.createElement($h.Provider,{value:u},V.createElement(qh.Provider,{children:n,value:m}))}function cd(e){let{children:t,location:n}=e;return Jh(hd(t),n)}function hd(e,t){void 0===t&&(t=[]);let n=[];return V.Children.forEach(e,((e,r)=>{if(!V.isValidElement(e))return;let i=[...t,r];if(e.type===V.Fragment)return void n.push.apply(n,hd(e.props.children,i));e.type!==ld&&lh(!1),e.props.index&&e.props.children&&lh(!1);let s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=hd(e.props.children,i)),n.push(s)})),n}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dd(){return dd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dd.apply(this,arguments)}function fd(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}new Promise((()=>{}));const pd=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(hf){}const md=z.startTransition;function gd(e){let{basename:t,children:n,future:r,window:i}=e,s=V.useRef();null==s.current&&(s.current=oh({window:i,v5Compat:!0}));let a=s.current,[o,l]=V.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=V.useCallback((e=>{u&&md?md((()=>l(e))):l(e)}),[l,u]);return V.useLayoutEffect((()=>a.listen(c)),[a,c]),V.useEffect((()=>{return null!=(e=r)&&e.v7_startTransition||od("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void(null!=e&&e.v7_relativeSplatPath||t||od("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"));var e,t}),[r]),V.createElement(ud,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const yd="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,vd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bd=V.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:h}=e,d=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,pd),{basename:f}=V.useContext($h),p=!1;if("string"==typeof u&&vd.test(u)&&(n=u,yd))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Rh(t.pathname,f);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(hf){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;Kh()||lh(!1);let{basename:r,navigator:i}=V.useContext($h),{hash:s,pathname:a,search:o}=Yh(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:Oh([r,a])),i.createHref({pathname:l,search:o,hash:s})}(u,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:o}=void 0===t?{}:t,l=Xh(),u=Gh(),c=Yh(e,{relative:a});return V.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:dh(u)===dh(c);l(e,{replace:n,state:i,preventScrollReset:s,relative:a,viewTransition:o})}}),[u,l,c,r,i,n,e,s,a,o])}(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:i,viewTransition:h});return V.createElement("a",dd({},d,{href:n||m,onClick:p||s?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))}));var wd,_d,kd,Ed;function xd(e){let t=V.useRef(fd(e)),n=V.useRef(!1),r=Gh(),i=V.useMemo((()=>function(e,t){let n=fd(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(r.search,n.current?null:t.current)),[r.search]),s=Xh(),a=V.useCallback(((e,t)=>{const r=fd("function"==typeof e?e(i):e);n.current=!0,s("?"+r,t)}),[s,i]);return[i,a]}function Sd({children:e}){return Q.jsxs("div",{className:"relative min-h-screen bg-black",children:[Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-900 to-black"}),Q.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626387346567-68d0c49c78e1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"}),Q.jsx("div",{className:"absolute inset-0 bg-grid-white/[0.02] bg-grid"}),Q.jsx("div",{className:"relative",children:e})]})}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */(_d=wd||(wd={})).UseScrollRestoration="useScrollRestoration",_d.UseSubmit="useSubmit",_d.UseSubmitFetcher="useSubmitFetcher",_d.UseFetcher="useFetcher",_d.useViewTransitionState="useViewTransitionState",(Ed=kd||(kd={})).UseFetcher="useFetcher",Ed.UseFetchers="useFetchers",Ed.UseScrollRestoration="useScrollRestoration";var Td={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=(e,t)=>{const n=V.forwardRef((({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:o,...l},u)=>{return V.createElement("svg",{ref:u,...Td,width:r,height:r,stroke:n,strokeWidth:s?24*Number(i)/Number(r):i,className:["lucide",`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,a].join(" "),...l},[...t.map((([e,t])=>V.createElement(e,t))),...Array.isArray(o)?o:[o]]);var c}));return n.displayName=`${e}`,n},Id=Cd("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Nd=Cd("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),Rd=Cd("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]),Ad=Cd("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),Pd=Cd("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),Dd=Cd("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Od=Cd("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),Ld=Cd("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),Md=Cd("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),jd=Cd("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Ud=Cd("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);let Fd,Vd,zd,Bd={data:""},$d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,qd=/\/\*[^]*?\*\/|  +/g,Hd=/\n+/g,Wd=(e,t)=>{let n="",r="",i="";for(let s in e){let a=e[s];"@"==s[0]?"i"==s[1]?n=s+" "+a+";":r+="f"==s[1]?Wd(a,s):s+"{"+Wd(a,"k"==s[1]?"":t)+"}":"object"==typeof a?r+=Wd(a,t?t.replace(/([^,])+/g,(e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):s):null!=a&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Wd.p?Wd.p(s,a):s+":"+a+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Kd={},Gd=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+Gd(e[n]);return t}return e};function Qd(e){let t=this||{},n=e.call?e(t.p):e;return((e,t,n,r,i)=>{let s=Gd(e),a=Kd[s]||(Kd[s]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(s));if(!Kd[a]){let t=s!==e?e:(e=>{let t,n,r=[{}];for(;t=$d.exec(e.replace(qd,""));)t[4]?r.shift():t[3]?(n=t[3].replace(Hd," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(Hd," ").trim();return r[0]})(e);Kd[a]=Wd(i?{["@keyframes "+a]:t}:t,n?"":"."+a)}let o=n&&Kd.g?Kd.g:null;return n&&(Kd.g=Kd[a]),l=Kd[a],u=t,c=r,(h=o)?u.data=u.data.replace(h,l):-1===u.data.indexOf(l)&&(u.data=c?l+u.data:u.data+l),a;var l,u,c,h})(n.unshift?n.raw?((e,t,n)=>e.reduce(((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":Wd(e,""):!1===e?"":e}return e+r+(null==s?"":s)}),""))(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,(r=t.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||Bd),t.g,t.o,t.k);var r}Qd.bind({g:1});let Xd=Qd.bind({k:1});function Yd(e,t){let n=this||{};return function(){let t=arguments;return function r(i,s){let a=Object.assign({},i),o=a.className||r.className;n.p=Object.assign({theme:Vd&&Vd()},a),n.o=/ *go\d+/.test(o),a.className=Qd.apply(n,t)+(o?" "+o:"");let l=e;return e[0]&&(l=a.as||e,delete a.as),zd&&l[0]&&zd(a),Fd(l,a)}}}var Jd=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,Zd=(()=>{let e=0;return()=>(++e).toString()})(),ef=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),tf=new Map,nf=e=>{if(tf.has(e))return;let t=setTimeout((()=>{tf.delete(e),of({type:4,toastId:e})}),1e3);tf.set(e,t)},rf=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=tf.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?rf(e,{type:1,toast:n}):rf(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?nf(r):e.toasts.forEach((e=>{nf(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},sf=[],af={toasts:[],pausedAt:void 0},of=e=>{af=rf(af,e),sf.forEach((e=>{e(af)}))},lf={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},uf=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||Zd()}))(t,e,n);return of({type:2,toast:r}),r.id},cf=(e,t)=>uf("blank")(e,t);cf.error=uf("error"),cf.success=uf("success"),cf.loading=uf("loading"),cf.custom=uf("custom"),cf.dismiss=e=>{of({type:3,toastId:e})},cf.remove=e=>of({type:4,toastId:e}),cf.promise=(e,t,n)=>{let r=cf.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(cf.success(Jd(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{cf.error(Jd(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var hf,df,ff,pf,mf=(e,t)=>{of({type:1,toast:{id:e,height:t}})},gf=()=>{of({type:5,time:Date.now()})},yf=e=>{let{toasts:t,pausedAt:n}=((e={})=>{let[t,n]=V.useState(af);V.useEffect((()=>(sf.push(n),()=>{let e=sf.indexOf(n);e>-1&&sf.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||lf[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}})(e);V.useEffect((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>cf.dismiss(t.id)),n);t.visible&&cf.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=V.useCallback((()=>{n&&of({type:6,time:Date.now()})}),[n]),i=V.useCallback(((e,n)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=n||{},a=t.filter((t=>(t.position||s)===(e.position||s)&&t.height)),o=a.findIndex((t=>t.id===e.id)),l=a.filter(((e,t)=>t<o&&e.visible)).length;return a.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:mf,startPause:gf,endPause:r,calculateOffset:i}}},vf=Xd`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,bf=Xd`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wf=Xd`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_f=Yd("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${bf} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${wf} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,kf=Xd`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ef=Yd("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${kf} 1s linear infinite;
`,xf=Xd`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Sf=Xd`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Tf=Yd("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Sf} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Cf=Yd("div")`
  position: absolute;
`,If=Yd("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Nf=Xd`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rf=Yd("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Nf} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Af=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return void 0!==t?"string"==typeof t?V.createElement(Rf,null,t):t:"blank"===n?null:V.createElement(If,null,V.createElement(Ef,{...r}),"loading"!==n&&V.createElement(Cf,null,"error"===n?V.createElement(_f,{...r}):V.createElement(Tf,{...r})))},Pf=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Df=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Of=Yd("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Lf=Yd("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Mf=V.memo((({toast:e,position:t,style:n,children:r})=>{let i=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=ef()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Pf(n),Df(n)];return{animation:t?`${Xd(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Xd(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=V.createElement(Af,{toast:e}),a=V.createElement(Lf,{...e.ariaProps},Jd(e.message,e));return V.createElement(Of,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof r?r({icon:s,message:a}):V.createElement(V.Fragment,null,s,a))}));hf=V.createElement,Wd.p=df,Fd=hf,Vd=ff,zd=pf;var jf=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=V.useCallback((t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return V.createElement("div",{ref:s,className:t,style:n},i)},Uf=Qd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ff=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:a})=>{let{toasts:o,handlers:l}=yf(n);return V.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map((n=>{let s=n.position||t,a=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ef()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}})(s,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return V.createElement(jf,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?Uf:"",style:a},"custom"===n.type?Jd(n.message,n):i?i(n):V.createElement(Mf,{toast:n,position:s}))})))},Vf={};
/**
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
 */
const zf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Bf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(zf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new $f;const l=t<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qf=function(e){return function(e){const t=zf(e);return Bf.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Hf=function(e){try{return Bf.decodeString(e,!0)}catch(hf){}return null};
/**
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
 */
const Wf=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Kf=()=>{try{return Wf()||(()=>{if("undefined"==typeof process)return;const e=Vf.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(hf){return}const t=e&&Hf(e[1]);return t&&JSON.parse(t)})()}catch(hf){return}},Gf=e=>{var t,n;return null===(n=null===(t=Kf())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Qf=e=>{const t=Gf(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Xf=()=>{var e;return null===(e=Kf())||void 0===e?void 0:e.config},Yf=e=>{var t;return null===(t=Kf())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function Zf(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ep(){return!function(){var e;const t=null===(e=Kf())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(hf){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class tp extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,tp.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,np.prototype.create)}}class np{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(rp,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new tp(r,a,n)}}const rp=/\{\$([^}]+)}/g;function ip(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(sp(n)&&sp(s)){if(!ip(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sp(e){return null!==e&&"object"==typeof e}
/**
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
 */function ap(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class op{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=lp),void 0===r.error&&(r.error=lp),void 0===r.complete&&(r.complete=lp);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(hf){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(hf){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function lp(){}
/**
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
 */function up(e){return e&&e._delegate?e._delegate:e}class cp{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const hp="[DEFAULT]";
/**
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
 */class dp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Jf;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(hf){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(hf){if(r)return null;throw hf}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:hp})}catch(hf){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(hf){}}}}clearInstance(e=hp){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=hp){return this.instances.has(e)}getOptions(e=hp){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===hp?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=hp){return this.component?this.component.multipleInstances?e:hp:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var pp,mp;(mp=pp||(pp={}))[mp.DEBUG=0]="DEBUG",mp[mp.VERBOSE=1]="VERBOSE",mp[mp.INFO=2]="INFO",mp[mp.WARN=3]="WARN",mp[mp.ERROR=4]="ERROR",mp[mp.SILENT=5]="SILENT";const gp={debug:pp.DEBUG,verbose:pp.VERBOSE,info:pp.INFO,warn:pp.WARN,error:pp.ERROR,silent:pp.SILENT},yp=pp.INFO,vp={[pp.DEBUG]:"log",[pp.VERBOSE]:"log",[pp.INFO]:"info",[pp.WARN]:"warn",[pp.ERROR]:"error"},bp=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!vp[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wp{constructor(e){this.name=e,this._logLevel=yp,this._logHandler=bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pp))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?gp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pp.DEBUG,...e),this._logHandler(this,pp.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pp.VERBOSE,...e),this._logHandler(this,pp.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pp.INFO,...e),this._logHandler(this,pp.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pp.WARN,...e),this._logHandler(this,pp.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pp.ERROR,...e),this._logHandler(this,pp.ERROR,...e)}}let _p,kp;const Ep=new WeakMap,xp=new WeakMap,Sp=new WeakMap,Tp=new WeakMap,Cp=new WeakMap;let Ip={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xp.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Sp.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ap(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Np(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Pp(this),t),Ap(Ep.get(this))}:function(...t){return Ap(e.apply(Pp(this),t))}:function(t,...n){const r=e.call(Pp(this),t,...n);return Sp.set(r,t.sort?t.sort():[t]),Ap(r)}}function Rp(e){return"function"==typeof e?Np(e):(e instanceof IDBTransaction&&function(e){if(xp.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));xp.set(e,t)}(e),t=e,(_p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ip):e);var t}function Ap(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Ap(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ep.set(t,e)})).catch((()=>{})),Cp.set(t,e),t}(e);if(Tp.has(e))return Tp.get(e);const t=Rp(e);return t!==e&&(Tp.set(e,t),Cp.set(t,e)),t}const Pp=e=>Cp.get(e);const Dp=["get","getKey","getAll","getAllKeys","count"],Op=["put","add","delete","clear"],Lp=new Map;function Mp(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Lp.get(t))return Lp.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Op.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Dp.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return Lp.set(t,s),s}Ip=(e=>({...e,get:(t,n,r)=>Mp(t,n)||e.get(t,n,r),has:(t,n)=>!!Mp(t,n)||e.has(t,n)}))(Ip);
/**
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
 */
class jp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Up="@firebase/app",Fp="0.10.13",Vp=new wp("@firebase/app"),zp="@firebase/app-compat",Bp="@firebase/analytics-compat",$p="@firebase/analytics",qp="@firebase/app-check-compat",Hp="@firebase/app-check",Wp="@firebase/auth",Kp="@firebase/auth-compat",Gp="@firebase/database",Qp="@firebase/data-connect",Xp="@firebase/database-compat",Yp="@firebase/functions",Jp="@firebase/functions-compat",Zp="@firebase/installations",em="@firebase/installations-compat",tm="@firebase/messaging",nm="@firebase/messaging-compat",rm="@firebase/performance",im="@firebase/performance-compat",sm="@firebase/remote-config",am="@firebase/remote-config-compat",om="@firebase/storage",lm="@firebase/storage-compat",um="@firebase/firestore",cm="@firebase/vertexai-preview",hm="@firebase/firestore-compat",dm="firebase",fm="[DEFAULT]",pm={[Up]:"fire-core",[zp]:"fire-core-compat",[$p]:"fire-analytics",[Bp]:"fire-analytics-compat",[Hp]:"fire-app-check",[qp]:"fire-app-check-compat",[Wp]:"fire-auth",[Kp]:"fire-auth-compat",[Gp]:"fire-rtdb",[Qp]:"fire-data-connect",[Xp]:"fire-rtdb-compat",[Yp]:"fire-fn",[Jp]:"fire-fn-compat",[Zp]:"fire-iid",[em]:"fire-iid-compat",[tm]:"fire-fcm",[nm]:"fire-fcm-compat",[rm]:"fire-perf",[im]:"fire-perf-compat",[sm]:"fire-rc",[am]:"fire-rc-compat",[om]:"fire-gcs",[lm]:"fire-gcs-compat",[um]:"fire-fst",[hm]:"fire-fst-compat",[cm]:"fire-vertex","fire-js":"fire-js",[dm]:"fire-js-all"},mm=new Map,gm=new Map,ym=new Map;function vm(e,t){try{e.container.addComponent(t)}catch(hf){Vp.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,hf)}}function bm(e){const t=e.name;if(ym.has(t))return Vp.debug(`There were multiple attempts to register component ${t}.`),!1;ym.set(t,e);for(const n of mm.values())vm(n,e);for(const n of gm.values())vm(n,e);return!0}function wm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function _m(e){return void 0!==e.settings}
/**
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
 */const km=new np("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class Em{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cp("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw km.create("app-deleted",{appName:this._name})}}
/**
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
 */const xm="10.14.1";function Sm(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:fm,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw km.create("bad-app-name",{appName:String(i)});if(n||(n=Xf()),!n)throw km.create("no-options");const s=mm.get(i);if(s){if(ip(n,s.options)&&ip(r,s.config))return s;throw km.create("duplicate-app",{appName:i})}const a=new fp(i);for(const l of ym.values())a.addComponent(l);const o=new Em(n,r,a);return mm.set(i,o),o}function Tm(e=fm){const t=mm.get(e);if(!t&&e===fm&&Xf())return Sm();if(!t)throw km.create("no-app",{appName:e});return t}function Cm(e,t,n){var r;let i=null!==(r=pm[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Vp.warn(e.join(" "))}bm(new cp(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */const Im="firebase-heartbeat-store";let Nm=null;function Rm(){return Nm||(Nm=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Ap(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Ap(a.result),e.oldVersion,e.newVersion,Ap(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Im)}catch(hf){}}}).catch((e=>{throw km.create("idb-open",{originalErrorMessage:e.message})}))),Nm}async function Am(e,t){try{const n=(await Rm()).transaction(Im,"readwrite"),r=n.objectStore(Im);await r.put(t,Pm(e)),await n.done}catch(hf){if(hf instanceof tp)Vp.warn(hf.message);else{const t=km.create("idb-set",{originalErrorMessage:null==hf?void 0:hf.message});Vp.warn(t.message)}}}function Pm(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class Dm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lm(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Om();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(hf){Vp.warn(hf)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Om(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Mm(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mm(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=qf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(hf){return Vp.warn(hf),""}}}function Om(){return(new Date).toISOString().substring(0,10)}class Lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(hf){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Rm()).transaction(Im),n=await t.objectStore(Im).get(Pm(e));return await t.done,n}catch(hf){if(hf instanceof tp)Vp.warn(hf.message);else{const t=km.create("idb-get",{originalErrorMessage:null==hf?void 0:hf.message});Vp.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Am(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Am(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Mm(e){return qf(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var jm;jm="",bm(new cp("platform-logger",(e=>new jp(e)),"PRIVATE")),bm(new cp("heartbeat",(e=>new Dm(e)),"PRIVATE")),Cm(Up,Fp,jm),Cm(Up,Fp,"esm2017"),Cm("fire-js","");
/**
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
 */
Cm("firebase","10.14.1","app");var Um,Fm,Vm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(a<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((s=(t=n+((a=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=s+((a=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,a=0;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return d(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);h(u)||0<u.l(e);)u=(s=a(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Fm=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},Um=r}).apply(void 0!==Vm?Vm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var zm,Bm,$m,qm,Hm,Wm,Km,Gm,Qm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Qm&&Qm];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<w.length;t++)n=w[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function k(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function E(e){i.setTimeout((()=>{throw e}),0)}function x(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new T),(e=>e.reset()));class T{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,I=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},R=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(A)}};var A=()=>{for(var e;e=x();){try{e.h.call(e.g)}catch(n){E(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}I=!1};function P(){this.s=this.s,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,D);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),U=0;function F(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++U,this.da=this.fa=!1}function V(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(V(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=$(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new F(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function W(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)W(e,t[s],n,r,i);return null}return n=Z(n),e&&e[j]?e.K(t,n,a(r)?!!r.capture:!!r,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=a(i)?!!i.capture:!!i,l=Y(e);if(l||(e[q]=l=new z(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=X;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)O||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function K(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=Z(n),e&&e[j]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(V(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[j])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Y(t))?(B(n,e),0==n.h&&(n.src=null,t[q]=null)):V(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function X(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function Y(e){return(e=e[q])instanceof z?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){P.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;_(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ne(a,r,!0,t)&&i}if(i=ne(a=t.g=e,r,!0,t)&&i,i=ne(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(a=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&B(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,P),ee.prototype[j]=!0,ee.prototype.removeEventListener=function(e,t,n,r){K(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)V(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){P.call(this),this.h=e,this.g={}}h(ae,P);var oe=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}ae.prototype.N=function(){ae.aa.N.call(this),le(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){D.call(this,"d")}function ye(){D.call(this,"c")}h(ge,D),h(ye,D);var ve={},be=null;function we(){return be=be||new ee}function _e(e){D.call(this,ve.La,e)}function ke(e){const t=we();te(t,new _e(t))}function Ee(e,t){D.call(this,ve.STAT_EVENT,e),this.stat=t}function xe(e){const t=we();te(t,new Ee(t,e))}function Se(e,t){D.call(this,ve.Ma,e),this.size=t}function Te(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function Ie(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return ue(n)}catch(o){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(_e,D),ve.STAT_EVENT="statevent",h(Ee,D),ve.Ma="timingevent",h(Se,D),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Ne,Re={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ae={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Pe(){}function De(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}h(Pe,de),Pe.prototype.g=function(){return new XMLHttpRequest},Pe.prototype.i=function(){return{}},Ne=new Pe;var Le={},Me={};function je(e,t,n){e.L=1,e.v=ct(it(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Et(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Oe,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(oe[0]=i.toString()),i=oe);for(var s=0;s<i.length;s++){var a=W(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ke(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Fe(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Ve(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Te(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||an(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function We(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Ye(n.h,e)))if(!e.K&&Ye(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(pf){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Gt(n)}tn(n),xe(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Te(u(n.Za,n),6e3));if(1>=Xe(n.h)&&n.ca){try{n.ca()}catch(pf){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ut(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),a.K){Ze(r.h,a);var o=a,l=r.L;l&&(o.I=l),o.B&&($e(o),ze(o)),r.g=a}else en(r);0<n.i.length&&Xt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Kt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}ke()}catch(pf){}}De.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==$t(e)?t.j():this.Y(e)},De.prototype.Y=function(e){try{if(e==this.g)e:{const d=$t(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=d||7==t||ke(),$e(this);var n=this.g.Z();this.X=n;t:if(Fe(this)){var r=qt(this.g);e="";var s=r.length,a=4==$t(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,xe(12),He(this),qe(this);break e}Ie(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,We(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=Ve(this,o),e==Me){4==d&&(this.s=4,xe(14),n=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,xe(15),Ie(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ie(this.i,this.l,e,null),We(this,e)}if(Fe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,xe(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),nn(h),h.M=!0,xe(11))}}else Ie(this.i,this.l,o,"[Invalid Chunked Response]"),He(this),qe(this)}else Ie(this.i,this.l,o,null),We(this,o);4==d&&He(this),this.o&&!this.J&&(4==d?an(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=k(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),He(this),qe(this)}}}catch(d){}},De.prototype.cancel=function(){this.J=!0,He(this)},De.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(ke(),xe(17)),He(this),this.s=2,qe(this)):Be(this,this.S-e)};var Ke=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xe(e){return e.h?1:e.g?e.g.size:0}function Ye(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,at(this,e.s),this.l=e.l;var t=e.i,n=new bt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ot(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),at(this,t[4]),this.l=ht(t[5]||"",!0),ot(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new bt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ot(e,t,n){t instanceof bt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),Et(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new bt(t,e.h))}function ut(e,t,n){e.i.set(t,n)}function ct(e){return ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){wt(e),t=xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function kt(e,t){return wt(e),t=xt(e,t),e.g.has(t)}function Et(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(xt(e,t),d(n)),e.h+=n.length)}function xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function St(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Tt(){this.g=new he}function Ct(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;a(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(hf){throw t.push(r+"type="+encodeURIComponent("_badmap")),hf}}function It(e){this.l=e.Ub||null,this.j=e.eb||!1}function Nt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Rt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function At(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Pt(e)}function Pt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ut(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=bt.prototype).add=function(e,t){wt(this),this.i=null,e=xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){wt(this);let t=[];if("string"==typeof e)kt(this,e)&&(t=t.concat(this.g.get(xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return wt(this),this.i=null,kt(this,e=xt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},h(It,de),It.prototype.g=function(){return new Nt(this.l,this.j)},It.prototype.i=function(e){return function(){return e}}({}),h(Nt,ee),(e=Nt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Pt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,At(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?At(this):Pt(this),3==this.readyState&&Rt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,At(this))},e.Qa=function(e){this.g&&(this.response=e,At(this))},e.ga=function(){this.g&&At(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,ee);var Mt=/^https?$/i,jt=["POST","PUT"];function Ut(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ft(e),zt(e)}function Ft(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Vt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=$t(e)||2!=e.Z()))if(e.u&&4==$t(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==$t(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var a=String(e.D).match(nt)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),s=!Mt.test(a?a.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var o=2<$t(e)?e.g.statusText:""}catch(l){o=""}e.l=o+" ["+e.Z()+"]",Ft(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){Bt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(hf){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function $t(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ht(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ht("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ht("baseRetryDelayMs",5e3,e),this.cb=Ht("retryDelaySeedMs",1e4,e),this.Wa=Ht("forwardChannelMaxRetries",2,e),this.wa=Ht("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new Tt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Kt(e){if(Qt(e),3==e.G){var t=e.U++,n=it(e.I);if(ut(n,"SID",e.K),ut(n,"RID",t),ut(n,"TYPE","terminate"),Jt(e,n),(t=new De(e,e.j,t)).L=2,t.v=ct(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}un(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Qt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Xt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||R(),I||(C(),I=!0),N.add(t,e),e.B=0}}function Yt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ut(r,"SID",e.K),ut(r,"RID",n),ut(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new De(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),je(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){ut(t,n,e)})),e.l&&tt({},(function(e,n){ut(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].g;const l=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),a=!1;else try{Ct(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||R(),I||(C(),I=!0),N.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Te(u(e.Fa,e),on(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new De(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ut(t,"RID","rpc"),ut(t,"SID",e.K),ut(t,"AID",e.T),ut(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ut(t,"TO",e.ja),ut(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(it(t)),n.m=null,n.P=!0,Ue(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function an(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Ye(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=we(),new Se(r,n)),Xt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Xe(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Te(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ct(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=c(St,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(St,n,"TestLoadImage: error",!1,t,r),r.onabort=c(St,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(St,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),St(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?St(0,0,!0,t):St(0,0,!1,t)})).catch((()=>{clearTimeout(r),St(0,0,!1,t)}))}(r.toString(),n)}else xe(2);e.G=0,e.l&&e.l.sa(t),un(e),Qt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var a=new rt(null);r&&st(a,r),t&&(a.g=t),s&&at(a,s),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&ut(r,n,t),ut(r,"VER",e.la),Jt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new It({eb:n})):new Lt(e.pa)).Ha(e.J),t}function dn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Wt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Ut(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(jt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(a){Ut(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Vt(this):this.bb())},e.bb=function(){Vt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch(lt){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(lt){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Wt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){xe(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Xt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e);let s=this.o;if(this.S&&(s?(s=b(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),ut(n=it(this.I),"RID",e),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Dt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Je(this.h,i),this.Ua&&ut(n,"TYPE","init"),this.P?(ut(n,"$req",t),ut(n,"SID","null"),i.T=!0,je(i,n,null)):je(i,n,t),this.G=2}}else 3==this.G&&(e?Yt(this,e):0==this.i.length||Qe(this.h)||Yt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Te(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),xe(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},h(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Kt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new Ke(t.Ya++,e)),3==t.G&&Xt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,pn.aa.N.call(this)},h(mn,ge),h(gn,ye),h(yn,dn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Gm=function(){return new fn},Km=function(){return we()},Wm=ve,Hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Re.NO_ERROR=0,Re.TIMEOUT=8,Re.HTTP_ERROR=6,qm=Re,Ae.COMPLETE="complete",$m=Ae,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Bm=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,zm=Lt}).apply(void 0!==Qm?Qm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Xm="@firebase/firestore";
/**
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
 */class Ym{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ym.UNAUTHENTICATED=new Ym(null),Ym.GOOGLE_CREDENTIALS=new Ym("google-credentials-uid"),Ym.FIRST_PARTY=new Ym("first-party-uid"),Ym.MOCK_USER=new Ym("mock-user");
/**
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
 */
let Jm="10.14.0";
/**
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
 */const Zm=new wp("@firebase/firestore");function eg(){return Zm.logLevel}function tg(e,...t){if(Zm.logLevel<=pp.DEBUG){const n=t.map(ig);Zm.debug(`Firestore (${Jm}): ${e}`,...n)}}function ng(e,...t){if(Zm.logLevel<=pp.ERROR){const n=t.map(ig);Zm.error(`Firestore (${Jm}): ${e}`,...n)}}function rg(e,...t){if(Zm.logLevel<=pp.WARN){const n=t.map(ig);Zm.warn(`Firestore (${Jm}): ${e}`,...n)}}function ig(e){if("string"==typeof e)return e;try{
/**
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
    */
return t=e,JSON.stringify(t)}catch(df){return e}var t}
/**
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
 */function sg(e="Unexpected state"){const t=`FIRESTORE (${Jm}) INTERNAL ASSERTION FAILED: `+e;throw ng(t),new Error(t)}function ag(e,t){e||sg()}function og(e,t){return e}
/**
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
 */const lg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ug extends tp{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class cg{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class hg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ym.UNAUTHENTICATED)))}shutdown(){}}class fg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pg{constructor(e){this.t=e,this.currentUser=Ym.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ag(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new cg;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cg,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{tg("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(tg("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cg)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(tg("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ag("string"==typeof t.accessToken),new hg(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ag(null===e||"string"==typeof e),new Ym(e)}}class mg{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ym.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gg{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new mg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ym.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ag(void 0===this.o);const n=e=>{null!=e.error&&tg("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,tg("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{tg("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):tg("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ag("string"==typeof e.token),this.R=e.token,new yg(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function bg(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class wg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=bg(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function _g(e,t){return e<t?-1:e>t?1:0}function kg(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class Eg{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ug(lg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ug(lg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ug(lg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ug(lg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Eg.fromMillis(Date.now())}static fromDate(e){return Eg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Eg(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_g(this.nanoseconds,e.nanoseconds):_g(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class xg{constructor(e){this.timestamp=e}static fromTimestamp(e){return new xg(e)}static min(){return new xg(new Eg(0,0))}static max(){return new xg(new Eg(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Sg{constructor(e,t,n){void 0===t?t=0:t>e.length&&sg(),void 0===n?n=e.length-t:n>e.length-t&&sg(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Sg.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Sg?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Tg extends Sg{construct(e,t,n){return new Tg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ug(lg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Tg(t)}static emptyPath(){return new Tg([])}}const Cg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ig extends Sg{construct(e,t,n){return new Ig(e,t,n)}static isValidIdentifier(e){return Cg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ig.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ig(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ug(lg.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ug(lg.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ug(lg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ug(lg.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ig(t)}static emptyPath(){return new Ig([])}}
/**
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
 */class Ng{constructor(e){this.path=e}static fromPath(e){return new Ng(Tg.fromString(e))}static fromName(e){return new Ng(Tg.fromString(e).popFirst(5))}static empty(){return new Ng(Tg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Tg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Tg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ng(new Tg(e.slice()))}}function Rg(e){return new Ag(e.readTime,e.key,-1)}class Ag{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ag(xg.min(),Ng.empty(),-1)}static max(){return new Ag(xg.max(),Ng.empty(),-1)}}function Pg(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ng.comparator(e.documentKey,t.documentKey),0!==n?n:_g(e.largestBatchId,t.largestBatchId)
/**
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
 */)}class Dg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function Og(e){if(e.code!==lg.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;tg("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Lg{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&sg(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Lg(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Lg?t:Lg.resolve(t)}catch(t){return Lg.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Lg.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Lg.reject(t)}static resolve(e){return new Lg(((t,n)=>{t(e)}))}static reject(e){return new Lg(((t,n)=>{n(e)}))}static waitFor(e){return new Lg(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Lg.resolve(!1);for(const n of e)t=t.next((e=>e?Lg.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Lg(((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next((e=>{s[l]=e,++a,a===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Lg(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function Mg(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */class jg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Ug(e){return null==e}function Fg(e){return 0===e&&1/e==-1/0}
/**
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
 */
function Vg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zg(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Bg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */jg.oe=-1;class $g{constructor(e,t){this.comparator=e,this.root=t||Hg.EMPTY}insert(e,t){return new $g(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Hg.BLACK,null,null))}remove(e){return new $g(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hg.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qg(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qg(this.root,e,this.comparator,!1)}getReverseIterator(){return new qg(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qg(this.root,e,this.comparator,!0)}}class qg{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Hg{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Hg.RED,this.left=null!=r?r:Hg.EMPTY,this.right=null!=i?i:Hg.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Hg(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Hg.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Hg.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hg.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hg.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw sg();if(this.right.isRed())throw sg();const e=this.left.check();if(e!==this.right.check())throw sg();return e+(this.isRed()?0:1)}}Hg.EMPTY=null,Hg.RED=!0,Hg.BLACK=!1,Hg.EMPTY=new class{constructor(){this.size=0}get key(){throw sg()}get value(){throw sg()}get color(){throw sg()}get left(){throw sg()}get right(){throw sg()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Hg(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Wg{constructor(e){this.comparator=e,this.data=new $g(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kg(this.data.getIterator())}getIteratorFrom(e){return new Kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Wg))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wg(this.comparator);return t.data=e,t}}class Kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class Gg{constructor(e){this.fields=e,e.sort(Ig.comparator)}static empty(){return new Gg([])}unionWith(e){let t=new Wg(Ig.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Gg(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kg(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class Qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class Xg{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Qg("Invalid base64 string: "+t):t}}(e);return new Xg(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Xg(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _g(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xg.EMPTY_BYTE_STRING=new Xg("");const Yg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jg(e){if(ag(!!e),"string"==typeof e){let t=0;const n=Yg.exec(e);if(ag(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Zg(e.seconds),nanos:Zg(e.nanos)}}function Zg(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ey(e){return"string"==typeof e?Xg.fromBase64String(e):Xg.fromUint8Array(e)}
/**
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
 */function ty(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ny(e){const t=e.mapValue.fields.__previous_value__;return ty(t)?ny(t):t}function ry(e){const t=Jg(e.mapValue.fields.__local_write_time__.timestampValue);return new Eg(t.seconds,t.nanos)}
/**
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
 */class iy{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class sy{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sy("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sy&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const ay={fields:{__type__:{stringValue:"__max__"}}};function oy(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ty(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:sg()}function ly(e,t){if(e===t)return!0;const n=oy(e);if(n!==oy(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ry(e).isEqual(ry(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Jg(e.timestampValue),r=Jg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,ey(e.bytesValue).isEqual(ey(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Zg(e.geoPointValue.latitude)===Zg(t.geoPointValue.latitude)&&Zg(e.geoPointValue.longitude)===Zg(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Zg(e.integerValue)===Zg(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Zg(e.doubleValue),r=Zg(t.doubleValue);return n===r?Fg(n)===Fg(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return kg(e.arrayValue.values||[],t.arrayValue.values||[],ly);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Vg(n)!==Vg(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ly(n[i],r[i])))return!1;return!0}(e,t);default:return sg()}var r}function uy(e,t){return void 0!==(e.values||[]).find((e=>ly(e,t)))}function cy(e,t){if(e===t)return 0;const n=oy(e),r=oy(t);if(n!==r)return _g(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _g(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Zg(e.integerValue||e.doubleValue),r=Zg(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return hy(e.timestampValue,t.timestampValue);case 4:return hy(ry(e),ry(t));case 5:return _g(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ey(e),r=ey(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=_g(n[i],r[i]);if(0!==e)return e}return _g(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=_g(Zg(e.latitude),Zg(t.latitude));return 0!==n?n:_g(Zg(e.longitude),Zg(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return dy(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const a=e.fields||{},o=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(r=o.value)||void 0===r?void 0:r.arrayValue,c=_g((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:dy(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ay&&t===ay)return 0;if(e===ay)return 1;if(t===ay)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=_g(r[a],s[a]);if(0!==e)return e;const t=cy(n[r[a]],i[s[a]]);if(0!==t)return t}return _g(r.length,s.length)}(e.mapValue,t.mapValue);default:throw sg()}}function hy(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return _g(e,t);const n=Jg(e),r=Jg(t),i=_g(n.seconds,r.seconds);return 0!==i?i:_g(n.nanos,r.nanos)}function dy(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=cy(n[i],r[i]);if(e)return e}return _g(n.length,r.length)}function fy(e){return py(e)}function py(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Jg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ey(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Ng.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=py(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${py(e.fields[i])}`;return n+"}"}(e.mapValue):sg()}function my(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function gy(e){return!!e&&"integerValue"in e}function yy(e){return!!e&&"arrayValue"in e}function vy(e){return!!e&&"nullValue"in e}function by(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wy(e){return!!e&&"mapValue"in e}function _y(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zg(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_y(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_y(e.arrayValue.values[n]);return t}return Object.assign({},e)}class ky{constructor(e){this.value=e}static empty(){return new ky({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!wy(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_y(t)}setAll(e){let t=Ig.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_y(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());wy(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ly(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];wy(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){zg(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ky(_y(this.value))}}function Ey(e){const t=[];return zg(e.fields,((e,n)=>{const r=new Ig([e]);if(wy(n)){const e=Ey(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Gg(t)
/**
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
 */}class xy{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new xy(e,0,xg.min(),xg.min(),xg.min(),ky.empty(),0)}static newFoundDocument(e,t,n,r){return new xy(e,1,t,xg.min(),n,r,0)}static newNoDocument(e,t){return new xy(e,2,t,xg.min(),xg.min(),ky.empty(),0)}static newUnknownDocument(e,t){return new xy(e,3,t,xg.min(),xg.min(),ky.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xg.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ky.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ky.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xg.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof xy&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xy(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Sy{constructor(e,t){this.position=e,this.inclusive=t}}function Ty(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Ng.comparator(Ng.fromName(a.referenceValue),n.key):cy(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Cy(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ly(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Iy{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ny(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Ry{}class Ay extends Ry{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Uy(e,t,n):"array-contains"===t?new By(e,n):"in"===t?new $y(e,n):"not-in"===t?new qy(e,n):"array-contains-any"===t?new Hy(e,n):new Ay(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Fy(e,n):new Vy(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(cy(t,this.value)):null!==t&&oy(this.value)===oy(t)&&this.matchesComparison(cy(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return sg()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Py extends Ry{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Py(e,t)}matches(e){return Dy(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dy(e){return"and"===e.op}function Oy(e){return function(e){for(const t of e.filters)if(t instanceof Py)return!1;return!0}(e)&&Dy(e)}function Ly(e){if(e instanceof Ay)return e.field.canonicalString()+e.op.toString()+fy(e.value);if(Oy(e))return e.filters.map((e=>Ly(e))).join(",");{const t=e.filters.map((e=>Ly(e))).join(",");return`${e.op}(${t})`}}function My(e,t){return e instanceof Ay?(n=e,(r=t)instanceof Ay&&n.op===r.op&&n.field.isEqual(r.field)&&ly(n.value,r.value)):e instanceof Py?function(e,t){return t instanceof Py&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&My(n,t.filters[r])),!0)}(e,t):void sg();var n,r}function jy(e){return e instanceof Ay?`${(t=e).field.canonicalString()} ${t.op} ${fy(t.value)}`:e instanceof Py?function(e){return e.op.toString()+" {"+e.getFilters().map(jy).join(" ,")+"}"}(e):"Filter";var t}class Uy extends Ay{constructor(e,t,n){super(e,t,n),this.key=Ng.fromName(n.referenceValue)}matches(e){const t=Ng.comparator(e.key,this.key);return this.matchesComparison(t)}}class Fy extends Ay{constructor(e,t){super(e,"in",t),this.keys=zy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Vy extends Ay{constructor(e,t){super(e,"not-in",t),this.keys=zy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zy(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ng.fromName(e.referenceValue)))}class By extends Ay{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yy(t)&&uy(t.arrayValue,this.value)}}class $y extends Ay{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&uy(this.value.arrayValue,t)}}class qy extends Ay{constructor(e,t){super(e,"not-in",t)}matches(e){if(uy(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!uy(this.value.arrayValue,t)}}class Hy extends Ay{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yy(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>uy(this.value.arrayValue,e)))}}
/**
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
 */class Wy{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function Ky(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Wy(e,t,n,r,i,s,a)}function Gy(e){const t=og(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Ly(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Ug(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>fy(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>fy(e))).join(",")),t.ue=e}return t.ue}function Qy(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ny(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!My(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Cy(e.startAt,t.startAt)&&Cy(e.endAt,t.endAt)}function Xy(e){return Ng.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */class Yy{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Jy(e){return new Yy(e)}function Zy(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ev(e){return null!==e.collectionGroup}function tv(e){const t=og(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Wg(Ig.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Iy(r,n))})),e.has(Ig.keyField().canonicalString())||t.ce.push(new Iy(Ig.keyField(),n))}return t.ce}function nv(e){const t=og(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return Ky(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Iy(e.field,t)}));const n=e.endAt?new Sy(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Sy(e.startAt.position,e.startAt.inclusive):null;return Ky(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,tv(e))),t.le}function rv(e,t){const n=e.filters.concat([t]);return new Yy(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function iv(e,t,n){return new Yy(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sv(e,t){return Qy(nv(e),nv(t))&&e.limitType===t.limitType}function av(e){return`${Gy(nv(e))}|lt:${e.limitType}`}function ov(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>jy(e))).join(", ")}]`),Ug(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>fy(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>fy(e))).join(",")),`Target(${t})`}(nv(e))}; limitType=${e.limitType})`}function lv(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ng.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of tv(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Ty(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,tv(n),r)||n.endAt&&!function(e,t,n){const r=Ty(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,tv(n),r)));var n,r}function uv(e){return(t,n)=>{let r=!1;for(const i of tv(e)){const e=cv(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function cv(e,t,n){const r=e.field.isKeyField()?Ng.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?cy(r,i):sg()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return sg()}}
/**
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
 */class hv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zg(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Bg(this.inner)}size(){return this.innerSize}}
/**
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
 */const dv=new $g(Ng.comparator);function fv(){return dv}const pv=new $g(Ng.comparator);function mv(...e){let t=pv;for(const n of e)t=t.insert(n.key,n);return t}function gv(e){let t=pv;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function yv(){return bv()}function vv(){return bv()}function bv(){return new hv((e=>e.toString()),((e,t)=>e.isEqual(t)))}const wv=new $g(Ng.comparator),_v=new Wg(Ng.comparator);function kv(...e){let t=_v;for(const n of e)t=t.add(n);return t}const Ev=new Wg(_g);
/**
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
 */
function xv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fg(t)?"-0":t}}function Sv(e){return{integerValue:""+e}}function Tv(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Fg(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Sv(t):xv(e,t)}
/**
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
 */class Cv{constructor(){this._=void 0}}function Iv(e,t,n){return e instanceof Av?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ty(t)&&(t=ny(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Pv?Dv(e,t):e instanceof Ov?Lv(e,t):function(e,t){const n=Rv(e,t),r=jv(n)+jv(e.Pe);return gy(n)&&gy(e.Pe)?Sv(r):xv(e.serializer,r)}(e,t)}function Nv(e,t,n){return e instanceof Pv?Dv(e,t):e instanceof Ov?Lv(e,t):n}function Rv(e,t){return e instanceof Mv?gy(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Av extends Cv{}class Pv extends Cv{constructor(e){super(),this.elements=e}}function Dv(e,t){const n=Uv(t);for(const r of e.elements)n.some((e=>ly(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ov extends Cv{constructor(e){super(),this.elements=e}}function Lv(e,t){let n=Uv(t);for(const r of e.elements)n=n.filter((e=>!ly(e,r)));return{arrayValue:{values:n}}}class Mv extends Cv{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jv(e){return Zg(e.integerValue||e.doubleValue)}function Uv(e){return yy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class Fv{constructor(e,t){this.field=e,this.transform=t}}class Vv{constructor(e,t){this.version=e,this.transformResults=t}}class zv{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zv}static exists(e){return new zv(void 0,e)}static updateTime(e){return new zv(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bv(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class $v{}function qv(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new eb(e.key,zv.none()):new Qv(e.key,e.data,zv.none());{const n=e.data,r=ky.empty();let i=new Wg(Ig.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Xv(e.key,r,new Gg(i.toArray()),zv.none())}}function Hv(e,t,n){var r;e instanceof Qv?function(e,t,n){const r=e.value.clone(),i=Jv(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Xv?function(e,t,n){if(!Bv(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Jv(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Yv(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Wv(e,t,n,r){return e instanceof Qv?function(e,t,n,r){if(!Bv(e.precondition,t))return n;const i=e.value.clone(),s=Zv(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Xv?function(e,t,n,r){if(!Bv(e.precondition,t))return n;const i=Zv(e.fieldTransforms,r,t),s=t.data;return s.setAll(Yv(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,Bv(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Kv(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Rv(r.transform,e||null);null!=i&&(null===n&&(n=ky.empty()),n.set(r.field,i))}return n||null}function Gv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&kg(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Pv&&r instanceof Pv||n instanceof Ov&&r instanceof Ov?kg(n.elements,r.elements,ly):n instanceof Mv&&r instanceof Mv?ly(n.Pe,r.Pe):n instanceof Av&&r instanceof Av);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Qv extends $v{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xv extends $v{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yv(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Jv(e,t,n){const r=new Map;ag(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,Nv(a,o,n[i]))}return r}function Zv(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Iv(e,s,t))}return r}class eb extends $v{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tb extends $v{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class nb{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Hv(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wv(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wv(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=vv();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=qv(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(xg.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),kv())}isEqual(e){return this.batchId===e.batchId&&kg(this.mutations,e.mutations,((e,t)=>Gv(e,t)))&&kg(this.baseMutations,e.baseMutations,((e,t)=>Gv(e,t)))}}class rb{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ag(e.mutations.length===n.length);let r=function(){return wv}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new rb(e,t,n,r)}}
/**
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
 */class ib{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class sb{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var ab,ob;function lb(e){if(void 0===e)return ng("GRPC error has no .code"),lg.UNKNOWN;switch(e){case ab.OK:return lg.OK;case ab.CANCELLED:return lg.CANCELLED;case ab.UNKNOWN:return lg.UNKNOWN;case ab.DEADLINE_EXCEEDED:return lg.DEADLINE_EXCEEDED;case ab.RESOURCE_EXHAUSTED:return lg.RESOURCE_EXHAUSTED;case ab.INTERNAL:return lg.INTERNAL;case ab.UNAVAILABLE:return lg.UNAVAILABLE;case ab.UNAUTHENTICATED:return lg.UNAUTHENTICATED;case ab.INVALID_ARGUMENT:return lg.INVALID_ARGUMENT;case ab.NOT_FOUND:return lg.NOT_FOUND;case ab.ALREADY_EXISTS:return lg.ALREADY_EXISTS;case ab.PERMISSION_DENIED:return lg.PERMISSION_DENIED;case ab.FAILED_PRECONDITION:return lg.FAILED_PRECONDITION;case ab.ABORTED:return lg.ABORTED;case ab.OUT_OF_RANGE:return lg.OUT_OF_RANGE;case ab.UNIMPLEMENTED:return lg.UNIMPLEMENTED;case ab.DATA_LOSS:return lg.DATA_LOSS;default:return sg()}}(ob=ab||(ab={}))[ob.OK=0]="OK",ob[ob.CANCELLED=1]="CANCELLED",ob[ob.UNKNOWN=2]="UNKNOWN",ob[ob.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ob[ob.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ob[ob.NOT_FOUND=5]="NOT_FOUND",ob[ob.ALREADY_EXISTS=6]="ALREADY_EXISTS",ob[ob.PERMISSION_DENIED=7]="PERMISSION_DENIED",ob[ob.UNAUTHENTICATED=16]="UNAUTHENTICATED",ob[ob.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ob[ob.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ob[ob.ABORTED=10]="ABORTED",ob[ob.OUT_OF_RANGE=11]="OUT_OF_RANGE",ob[ob.UNIMPLEMENTED=12]="UNIMPLEMENTED",ob[ob.INTERNAL=13]="INTERNAL",ob[ob.UNAVAILABLE=14]="UNAVAILABLE",ob[ob.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const ub=new Um([4294967295,4294967295],0);function cb(e){const t=(new TextEncoder).encode(e),n=new Fm;return n.update(t),new Uint8Array(n.digest())}function hb(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Um([n,r],0),new Um([i,s],0)]}class db{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new fb(`Invalid padding: ${t}`);if(n<0)throw new fb(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new fb(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new fb(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Um.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Um.fromNumber(n)));return 1===r.compare(ub)&&(r=new Um([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=cb(e),[n,r]=hb(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new db(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=cb(e),[n,r]=hb(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class fb extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class pb{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,mb.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new pb(xg.min(),r,new $g(_g),fv(),kv())}}class mb{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new mb(n,t,kv(),kv(),kv())}}
/**
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
 */class gb{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class yb{constructor(e,t){this.targetId=e,this.me=t}}class vb{constructor(e,t,n=Xg.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class bb{constructor(){this.fe=0,this.ge=kb(),this.pe=Xg.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=kv(),t=kv(),n=kv();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:sg()}})),new mb(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=kb()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ag(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wb{constructor(e){this.Le=e,this.Be=new Map,this.ke=fv(),this.qe=_b(),this.Qe=new $g(_g)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:sg()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(Xy(i))if(0===n){const e=new Ng(i.path);this.Ue(t,e,xy.newNoDocument(e,xg.min()))}else ag(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,a;try{s=ey(n).toUint8Array()}catch(o){if(o instanceof Qg)return rg("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new db(s,r,i)}catch(o){return rg(o instanceof fb?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Xy(i.target)){const t=new Ng(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,xy.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=kv();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new pb(e,t,this.Qe,this.ke,n);return this.ke=fv(),this.qe=_b(),this.Qe=new $g(_g),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bb,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Wg(_g),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||tg("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bb),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function _b(){return new $g(Ng.comparator)}function kb(){return new $g(Ng.comparator)}const Eb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Sb=(()=>({and:"AND",or:"OR"}))();class Tb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cb(e,t){return e.useProto3Json||Ug(t)?t:{value:t}}function Ib(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nb(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Rb(e,t){return Ib(e,t.toTimestamp())}function Ab(e){return ag(!!e),xg.fromTimestamp(function(e){const t=Jg(e);return new Eg(t.seconds,t.nanos)}(e))}function Pb(e,t){return Db(e,t).canonicalString()}function Db(e,t){const n=(r=e,new Tg(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Ob(e){const t=Tg.fromString(e);return ag(Jb(t)),t}function Lb(e,t){return Pb(e.databaseId,t.path)}function Mb(e,t){const n=Ob(t);if(n.get(1)!==e.databaseId.projectId)throw new ug(lg.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ug(lg.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ng(Fb(n))}function jb(e,t){return Pb(e.databaseId,t)}function Ub(e){return new Tg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fb(e){return ag(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Vb(e,t,n){return{name:Lb(e,t),fields:n.value.mapValue.fields}}function zb(e,t){return{documents:[jb(e,t.path)]}}function Bb(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jb(e,i);const s=function(e){if(0!==e.length)return Xb(Py.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:Gb((t=e).field),direction:Hb(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=Cb(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var l}function $b(e){let t=function(e){const t=Ob(e);return 4===t.length?Tg.emptyPath():Fb(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ag(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=qb(e);return t instanceof Py&&Oy(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new Iy(Qb((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Ug(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Sy(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Sy(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new Yy(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",l,u)}function qb(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Qb(e.unaryFilter.field);return Ay.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Qb(e.unaryFilter.field);return Ay.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qb(e.unaryFilter.field);return Ay.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qb(e.unaryFilter.field);return Ay.create(i,"!=",{nullValue:"NULL_VALUE"});default:return sg()}}(e):void 0!==e.fieldFilter?(t=e,Ay.create(Qb(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return sg()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Py.create(e.compositeFilter.filters.map((e=>qb(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return sg()}}(e.compositeFilter.op))}(e):sg();var t}function Hb(e){return Eb[e]}function Wb(e){return xb[e]}function Kb(e){return Sb[e]}function Gb(e){return{fieldPath:e.canonicalString()}}function Qb(e){return Ig.fromServerFormat(e.fieldPath)}function Xb(e){return e instanceof Ay?function(e){if("=="===e.op){if(by(e.value))return{unaryFilter:{field:Gb(e.field),op:"IS_NAN"}};if(vy(e.value))return{unaryFilter:{field:Gb(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(by(e.value))return{unaryFilter:{field:Gb(e.field),op:"IS_NOT_NAN"}};if(vy(e.value))return{unaryFilter:{field:Gb(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gb(e.field),op:Wb(e.op),value:e.value}}}(e):e instanceof Py?function(e){const t=e.getFilters().map((e=>Xb(e)));return 1===t.length?t[0]:{compositeFilter:{op:Kb(e.op),filters:t}}}(e):sg()}function Yb(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Jb(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Zb{constructor(e,t,n,r,i=xg.min(),s=xg.min(),a=Xg.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new Zb(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zb(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class ew{constructor(e){this.ct=e}}function tw(e){const t=$b({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iv(t,t.limit,"L"):t}
/**
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
 */class nw{constructor(){this.un=new rw}addToCollectionParentIndex(e,t){return this.un.add(t),Lg.resolve()}getCollectionParents(e,t){return Lg.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Lg.resolve()}deleteFieldIndex(e,t){return Lg.resolve()}deleteAllFieldIndexes(e){return Lg.resolve()}createTargetIndexes(e,t){return Lg.resolve()}getDocumentsMatchingTarget(e,t){return Lg.resolve(null)}getIndexType(e,t){return Lg.resolve(0)}getFieldIndexes(e,t){return Lg.resolve([])}getNextCollectionGroupToUpdate(e){return Lg.resolve(null)}getMinOffset(e,t){return Lg.resolve(Ag.min())}getMinOffsetFromCollectionGroup(e,t){return Lg.resolve(Ag.min())}updateCollectionGroup(e,t,n){return Lg.resolve()}updateIndexEntries(e,t){return Lg.resolve()}}class rw{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Wg(Tg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Wg(Tg.comparator)).toArray()}}
/**
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
 */class iw{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new iw(0)}static kn(){return new iw(-1)}}
/**
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
 */class sw{constructor(){this.changes=new hv((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xy.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Lg.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class aw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class ow{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Wv(n.mutation,e,Gg.empty(),Eg.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,kv()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=kv()){const r=yv();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=mv();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=yv();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,kv())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=fv();const s=bv(),a=bv();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Xv)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Wv(a.mutation,t,a.mutation.getFieldMask(),Eg.now())):s.set(t.key,Gg.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new aw(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=bv();let r=new $g(((e,t)=>e-t)),i=kv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||Gg.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||kv()).add(e);r=r.insert(i.batchId,o)}))})).next((()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,l=r.value,u=vv();l.forEach((e=>{if(!i.has(e)){const r=qv(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Lg.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Ng.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ev(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Lg.resolve(yv());let a=-1,o=i;return s.next((t=>Lg.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Lg.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,kv()))).next((e=>({batchId:a,changes:gv(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ng(t)).next((e=>{let t=mv();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=mv();return this.indexManager.getCollectionParents(e,i).next((a=>Lg.forEach(a,(a=>{const o=(l=t,u=a.child(i),new Yy(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,xy.newInvalidDocument(r)))}));let n=mv();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Wv(s.mutation,r,Gg.empty(),Eg.now()),lv(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
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
 */class lw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Lg.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:Ab(n.createTime)}),Lg.resolve();var n}getNamedQuery(e,t){return Lg.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:tw(n.bundledQuery),readTime:Ab(n.readTime)}),Lg.resolve();var n}}
/**
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
 */class uw{constructor(){this.overlays=new $g(Ng.comparator),this.Ir=new Map}getOverlay(e,t){return Lg.resolve(this.overlays.get(t))}getOverlays(e,t){const n=yv();return Lg.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Lg.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),Lg.resolve()}getOverlaysForCollection(e,t,n){const r=yv(),i=t.length+1,s=new Ng(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Lg.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new $g(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=yv(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=yv(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return Lg.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ib(t,n));let i=this.Ir.get(t);void 0===i&&(i=kv(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.sessionToken=Xg.EMPTY_BYTE_STRING}getSessionToken(e){return Lg.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Lg.resolve()}}
/**
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
 */class hw{constructor(){this.Tr=new Wg(dw.Er),this.dr=new Wg(dw.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new dw(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new dw(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new Ng(new Tg([])),n=new dw(t,e),r=new dw(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Ng(new Tg([])),n=new dw(t,e),r=new dw(t,e+1);let i=kv();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new dw(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class dw{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Ng.comparator(e.key,t.key)||_g(e.wr,t.wr)}static Ar(e,t){return _g(e.wr,t.wr)||Ng.comparator(e.key,t.key)}}
/**
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
 */class fw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Wg(dw.Er)}checkEmpty(e){return Lg.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new nb(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.br=this.br.add(new dw(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Lg.resolve(s)}lookupMutationBatch(e,t){return Lg.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Lg.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Lg.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Lg.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new dw(t,0),r=new dw(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),Lg.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Wg(_g);return t.forEach((e=>{const t=new dw(e,0),r=new dw(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),Lg.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ng.isDocumentKey(i)||(i=i.child(""));const s=new dw(new Ng(i),0);let a=new Wg(_g);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.wr)),!0)}),s),Lg.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ag(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Lg.forEach(t.mutations,(r=>{const i=new dw(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new dw(t,0),r=this.br.firstAfterOrEqual(n);return Lg.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Lg.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class pw{constructor(e){this.Mr=e,this.docs=new $g(Ng.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Lg.resolve(n?n.document.mutableCopy():xy.newInvalidDocument(t))}getEntries(e,t){let n=fv();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():xy.newInvalidDocument(e))})),Lg.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=fv();const s=t.path,a=new Ng(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Pg(Rg(a),n)<=0||(r.has(a.key)||lv(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Lg.resolve(i)}getAllFromCollectionGroup(e,t,n,r){sg()}Or(e,t){return Lg.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new mw(this)}getSize(e){return Lg.resolve(this.size)}}class mw extends sw{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),Lg.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
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
 */class gw{constructor(e){this.persistence=e,this.Nr=new hv((e=>Gy(e)),Qy),this.lastRemoteSnapshotVersion=xg.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hw,this.targetCount=0,this.kr=iw.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),Lg.resolve()}getLastRemoteSnapshotVersion(e){return Lg.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Lg.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Lg.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Lg.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new iw(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Lg.resolve()}updateTargetData(e,t){return this.Kn(t),Lg.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Lg.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Lg.waitFor(i).next((()=>r))}getTargetCount(e){return Lg.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Lg.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Lg.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Lg.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Lg.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Lg.resolve(n)}containsKey(e,t){return Lg.resolve(this.Br.containsKey(t))}}
/**
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
 */class yw{constructor(e,t){this.qr={},this.overlays={},this.Qr=new jg(0),this.Kr=!1,this.Kr=!0,this.$r=new cw,this.referenceDelegate=e(this),this.Ur=new gw(this),this.indexManager=new nw,this.remoteDocumentCache=new pw((e=>this.referenceDelegate.Wr(e))),this.serializer=new ew(t),this.Gr=new lw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new fw(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){tg("MemoryPersistence","Starting transaction:",e);const r=new vw(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return Lg.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class vw extends Dg{constructor(e){super(),this.currentSequenceNumber=e}}class bw{constructor(e){this.persistence=e,this.Jr=new hw,this.Yr=null}static Zr(e){return new bw(e)}get Xr(){if(this.Yr)return this.Yr;throw sg()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Lg.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Lg.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Lg.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Lg.forEach(this.Xr,(n=>{const r=Ng.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,xg.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Lg.or([()=>Lg.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
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
 */class ww{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=kv(),r=kv();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ww(e,t.fromCache,n,r)}}
/**
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
 */class _w{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class kw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=ep()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Zf())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new _w;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(eg()<=pp.DEBUG&&tg("QueryEngine","SDK will not create cache indexes for query:",ov(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Lg.resolve()):(eg()<=pp.DEBUG&&tg("QueryEngine","Query:",ov(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(eg()<=pp.DEBUG&&tg("QueryEngine","The SDK decides to create cache indexes for query:",ov(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nv(t))):Lg.resolve())}Yi(e,t){if(Zy(t))return Lg.resolve(null);let n=nv(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=iv(t,null,"F"),n=nv(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=kv(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,iv(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,r){return Zy(t)||r.isEqual(xg.min())?Lg.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?Lg.resolve(null):(eg()<=pp.DEBUG&&tg("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ov(t)),this.rs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=xg.fromTimestamp(1e9===r?new Eg(n+1,0):new Eg(n,r));return new Ag(i,Ng.empty(),t)}(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Wg(uv(e));return t.forEach(((t,r)=>{lv(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return eg()<=pp.DEBUG&&tg("QueryEngine","Using full collection scan to execute query:",ov(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ag.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class Ew{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new $g(_g),this._s=new hv((e=>Gy(e)),Qy),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ow(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}async function xw(e,t){const n=og(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=kv();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Sw(e){const t=og(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function Tw(e,t){const n=og(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];t.targetChanges.forEach(((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,o))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;null!==t.targetMismatches.get(o)?u=u.withResumeToken(Xg.EMPTY_BYTE_STRING,xg.min()).withLastLimboFreeSnapshotVersion(xg.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&a.push(n.Ur.updateTargetData(e,u))}));let o=fv(),l=kv();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(function(e,t,n){let r=kv(),i=kv();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=fv();return n.forEach(((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(xg.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):tg("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}(e,s,t.documentUpdates).next((e=>{o=e.Ps,l=e.Is}))),!r.isEqual(xg.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return Lg.waitFor(a).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,o,l))).next((()=>o))})).then((e=>(n.os=i,e)))}function Cw(e,t){const n=og(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function Iw(e,t,n){const r=og(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(a){if(!Mg(a))throw a;tg("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Nw(e,t,n){const r=og(e);let i=xg.min(),s=kv();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=og(e),i=r._s.get(n);return void 0!==i?Lg.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,nv(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:xg.min(),n?s:kv()))).next((e=>(function(e,t,n){let r=e.us.get(t)||xg.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:s})))))}class Rw{constructor(){this.activeTargetIds=Ev}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Aw{constructor(){this.so=new Rw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rw,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Pw{_o(e){}shutdown(){}}
/**
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
 */class Dw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){tg("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){tg("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Ow=null;function Lw(){return null===Ow?Ow=268435456+Math.round(2147483648*Math.random()):Ow++,"0x"+Ow.toString(16)
/**
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
 */}const Mw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class jw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
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
 */const Uw="WebChannelConnection";class Fw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=Lw(),a=this.xo(e,t.toUriEncodedString());tg("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(o,r,i),this.No(e,a,o,n).then((t=>(tg("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw rg("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jm,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=Mw[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=Lw();return new Promise(((s,a)=>{const o=new zm;o.setWithCredentials(!0),o.listenOnce($m.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case qm.NO_ERROR:const t=o.getResponseJson();tg(Uw,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case qm.TIMEOUT:tg(Uw,`RPC '${e}' ${i} timed out`),a(new ug(lg.DEADLINE_EXCEEDED,"Request time out"));break;case qm.HTTP_ERROR:const n=o.getStatus();if(tg(Uw,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(lg).indexOf(t)>=0?t:lg.UNKNOWN}(t.status);a(new ug(e,t.message))}else a(new ug(lg.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ug(lg.UNAVAILABLE,"Connection failed."));break;default:sg()}}finally{tg(Uw,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);tg(Uw,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=Lw(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Gm(),a=Km(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Oo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=i.join("");tg(Uw,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=s.createWebChannel(u,o);let h=!1,d=!1;const f=new jw({Io:t=>{d?tg(Uw,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(tg(Uw,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),tg(Uw,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,Bm.EventType.OPEN,(()=>{d||(tg(Uw,`RPC '${e}' stream ${r} transport opened.`),f.yo())})),p(c,Bm.EventType.CLOSE,(()=>{d||(d=!0,tg(Uw,`RPC '${e}' stream ${r} transport closed`),f.So())})),p(c,Bm.EventType.ERROR,(t=>{d||(d=!0,rg(Uw,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new ug(lg.UNAVAILABLE,"The operation could not be completed")))})),p(c,Bm.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ag(!!i);const s=i,a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){tg(Uw,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=ab[e];if(void 0!==t)return lb(t)}(t),i=a.message;void 0===n&&(n=lg.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,f.So(new ug(n,i)),c.close()}else tg(Uw,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}})),p(a,Wm.STAT_EVENT,(t=>{t.stat===Hm.PROXY?tg(Uw,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Hm.NOPROXY&&tg(Uw,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function Vw(){return"undefined"!=typeof document?document:null}
/**
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
 */function zw(e){return new Tb(e,!0)}
/**
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
 */class Bw{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&tg("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
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
 */class $w{constructor(e,t,n,r,i,s,a,o){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Bw(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===lg.RESOURCE_EXHAUSTED?(ng(t.toString()),ng("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===lg.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new ug(lg.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return tg("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(tg("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qw extends $w{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:sg(),s=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(ag(void 0===t||"string"==typeof t),Xg.fromBase64String(t||"")):(ag(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Xg.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?lg.UNKNOWN:lb(e.code);return new ug(t,e.message||"")}(o);n=new vb(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mb(e,r.document.name),s=Ab(r.document.updateTime),a=r.document.createTime?Ab(r.document.createTime):xg.min(),o=new ky({mapValue:{fields:r.document.fields}}),l=xy.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new gb(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Mb(e,r.document),s=r.readTime?Ab(r.readTime):xg.min(),a=xy.newNoDocument(i,s),o=r.removedTargetIds||[];n=new gb([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Mb(e,r.document),s=r.removedTargetIds||[];n=new gb([],s,i,null)}else{if(!("filter"in t))return sg();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new sb(r,i),a=e.targetId;n=new yb(a,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return xg.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?xg.min():t.readTime?Ab(t.readTime):xg.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Ub(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Xy(r)?{documents:zb(e,r)}:{query:Bb(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Nb(e,t.resumeToken);const r=Cb(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(xg.min())>0){n.readTime=Ib(e,t.snapshotVersion.toTimestamp());const r=Cb(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return sg()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Ub(this.serializer),t.removeTarget=e,this.a_(t)}}class Hw extends $w{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ag(!!e.streamToken),this.lastStreamToken=e.streamToken,ag(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){ag(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(ag(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ab(e.updateTime):Ab(t);return n.isEqual(xg.min())&&(n=Ab(t)),new Vv(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ab(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Ub(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Qv)n={update:Vb(e,t.key,t.value)};else if(t instanceof eb)n={delete:Lb(e,t.key)};else if(t instanceof Xv)n={update:Vb(e,t.key,t.data),updateMask:Yb(t.fieldMask)};else{if(!(t instanceof tb))return sg();n={verify:Lb(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Av)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Pv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ov)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Mv)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw sg()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Rb(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:sg())),n;var r,i}(this.serializer,e)))};this.a_(t)}}
/**
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
 */class Ww extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ug(lg.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(e,Db(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===lg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ug(lg.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Lo(e,Db(t,n),r,s,a,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===lg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ug(lg.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Kw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ng(t),this.D_=!1):tg("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
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
 */class Gw{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{r_(this)&&(tg("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=og(e);t.L_.add(4),await Xw(t),t.q_.set("Unknown"),t.L_.delete(4),await Qw(t)}(this))}))})),this.q_=new Kw(n,r)}}async function Qw(e){if(r_(e))for(const t of e.B_)await t(!0)}async function Xw(e){for(const t of e.B_)await t(!1)}function Yw(e,t){const n=og(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),n_(n)?t_(n):__(n).r_()&&Zw(n,t))}function Jw(e,t){const n=og(e),r=__(n);n.N_.delete(t),r.r_()&&e_(n,t),0===n.N_.size&&(r.r_()?r.o_():r_(n)&&n.q_.set("Unknown"))}function Zw(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(xg.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}__(e).A_(t)}function e_(e,t){e.Q_.xe(t),__(e).R_(t)}function t_(e){e.Q_=new wb({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),__(e).start(),e.q_.v_()}function n_(e){return r_(e)&&!__(e).n_()&&e.N_.size>0}function r_(e){return 0===og(e).L_.size}function i_(e){e.Q_=void 0}async function s_(e){e.q_.set("Online")}async function a_(e){e.N_.forEach(((t,n)=>{Zw(e,t)}))}async function o_(e,t){i_(e),n_(e)?(e.q_.M_(t),t_(e)):e.q_.set("Unknown")}async function l_(e,t,n){if(e.q_.set("Online"),t instanceof vb&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){tg("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await u_(e,r)}else if(t instanceof gb?e.Q_.Ke(t):t instanceof yb?e.Q_.He(t):e.Q_.We(t),!n.isEqual(xg.min()))try{const t=await Sw(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Xg.EMPTY_BYTE_STRING,r.snapshotVersion)),e_(e,t);const i=new Zb(r.target,t,n,r.sequenceNumber);Zw(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){tg("RemoteStore","Failed to raise snapshot:",i),await u_(e,i)}}async function u_(e,t,n){if(!Mg(t))throw t;e.L_.add(1),await Xw(e),e.q_.set("Offline"),n||(n=()=>Sw(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{tg("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Qw(e)}))}function c_(e,t){return t().catch((n=>u_(e,n,t)))}async function h_(e){const t=og(e),n=k_(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;d_(t);)try{const e=await Cw(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,f_(t,e)}catch(i){await u_(t,i)}p_(t)&&m_(t)}function d_(e){return r_(e)&&e.O_.length<10}function f_(e,t){e.O_.push(t);const n=k_(e);n.r_()&&n.V_&&n.m_(t.mutations)}function p_(e){return r_(e)&&!k_(e).n_()&&e.O_.length>0}function m_(e){k_(e).start()}async function g_(e){k_(e).p_()}async function y_(e){const t=k_(e);for(const n of e.O_)t.m_(n.mutations)}async function v_(e,t,n){const r=e.O_.shift(),i=rb.from(r,t,n);await c_(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await h_(e)}async function b_(e,t){t&&k_(e).V_&&await async function(e,t){if(function(e){switch(e){default:return sg();case lg.CANCELLED:case lg.UNKNOWN:case lg.DEADLINE_EXCEEDED:case lg.RESOURCE_EXHAUSTED:case lg.INTERNAL:case lg.UNAVAILABLE:case lg.UNAUTHENTICATED:return!1;case lg.INVALID_ARGUMENT:case lg.NOT_FOUND:case lg.ALREADY_EXISTS:case lg.PERMISSION_DENIED:case lg.FAILED_PRECONDITION:case lg.ABORTED:case lg.OUT_OF_RANGE:case lg.UNIMPLEMENTED:case lg.DATA_LOSS:return!0}}(n=t.code)&&n!==lg.ABORTED){const n=e.O_.shift();k_(e).s_(),await c_(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await h_(e)}var n}(e,t),p_(e)&&m_(e)}async function w_(e,t){const n=og(e);n.asyncQueue.verifyOperationInProgress(),tg("RemoteStore","RemoteStore received new credentials");const r=r_(n);n.L_.add(3),await Xw(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Qw(n)}function __(e){return e.K_||(e.K_=function(e,t,n){const r=og(e);return r.w_(),new qw(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:s_.bind(null,e),Ro:a_.bind(null,e),mo:o_.bind(null,e),d_:l_.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),n_(e)?t_(e):e.q_.set("Unknown")):(await e.K_.stop(),i_(e))}))),e.K_}function k_(e){return e.U_||(e.U_=function(e,t,n){const r=og(e);return r.w_(),new Hw(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:g_.bind(null,e),mo:b_.bind(null,e),f_:y_.bind(null,e),g_:v_.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await h_(e)):(await e.U_.stop(),e.O_.length>0&&(tg("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
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
 */}class E_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new cg,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new E_(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ug(lg.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function x_(e,t){if(ng("AsyncQueue",`${t}: ${e}`),Mg(e))return new ug(lg.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class S_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ng.comparator(t.key,n.key):(e,t)=>Ng.comparator(e.key,t.key),this.keyedMap=mv(),this.sortedSet=new $g(this.comparator)}static emptySet(e){return new S_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof S_))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new S_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class T_{constructor(){this.W_=new $g(Ng.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):sg():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class C_{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new C_(e,t,S_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sv(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class I_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class N_{constructor(){this.queries=R_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=og(e),r=n.queries;n.queries=R_(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new ug(lg.ABORTED,"Firestore shutting down"))}}function R_(){return new hv((e=>av(e)),sv)}function A_(e,t){const n=og(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&D_(n)}function P_(e,t,n){const r=og(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function D_(e){e.Y_.forEach((e=>{e.next()}))}var O_,L_;(L_=O_||(O_={})).ea="default",L_.Cache="cache";class M_{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new C_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=C_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==O_.Cache}}
/**
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
 */class j_{constructor(e){this.key=e}}class U_{constructor(e){this.key=e}}class F_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=kv(),this.mutatedKeys=kv(),this.Aa=uv(e),this.Ra=new S_(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new T_,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=lv(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Aa(c,o)>0||l&&this.Aa(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return sg()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const a=t&&!r?this.ya():[],o=0===this.da.size&&this.current&&!r?1:0,l=o!==this.Ea;return this.Ea=o,0!==s.length||l?{snapshot:new C_(this.query,e.Ra,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new T_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=kv(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new U_(e))})),this.da.forEach((n=>{e.has(n)||t.push(new j_(n))})),t}ba(e){this.Ta=e.Ts,this.da=kv();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return C_.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class V_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class z_{constructor(e){this.key=e,this.va=!1}}class B_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new hv((e=>av(e)),sv),this.Ma=new Map,this.xa=new Set,this.Oa=new $g(Ng.comparator),this.Na=new Map,this.La=new hw,this.Ba={},this.ka=new Map,this.qa=iw.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function $_(e,t,n=!0){const r=ck(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await H_(r,t,n,!0),i}async function q_(e,t){const n=ck(e);await H_(n,t,!0,!1)}async function H_(e,t,n,r){const i=await function(e,t){const n=og(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,Lg.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new Zb(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}(e.localStore,nv(t)),s=i.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await Nw(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return ik(e,t.targetId,o.wa),o.snapshot}(e,t,n,r);const s=await Nw(e.localStore,t,!0),a=new F_(t,s.Ts),o=a.ma(s.documents),l=mb.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);ik(e,n,u.wa);const c=new V_(t,n,a);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}(e,t,s,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&Yw(e.remoteStore,i),o}async function W_(e,t,n){const r=og(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((e=>!sv(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Iw(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jw(r.remoteStore,i.targetId),nk(r,i.targetId)})).catch(Og)):(nk(r,i.targetId),await Iw(r.localStore,i.targetId,!0))}async function K_(e,t){const n=og(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jw(n.remoteStore,r.targetId))}async function G_(e,t,n){const r=function(e){const t=og(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=J_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Z_.bind(null,t),t}(e);try{const e=await function(e,t){const n=og(e),r=Eg.now(),i=t.reduce(((e,t)=>e.add(t.key)),kv());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=fv(),l=kv();return n.cs.getEntries(e,i).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((i=>{s=i;const a=[];for(const e of t){const t=Kv(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Xv(e.key,t,Ey(t.value.mapValue),zv.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:gv(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new $g(_g)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await ok(r,e.changes),await h_(r.remoteStore)}catch(i){const e=x_(i,"Failed to persist write");n.reject(e)}}async function Q_(e,t){const n=og(e);try{const e=await Tw(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(ag(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?ag(r.va):e.removedDocuments.size>0&&(ag(r.va),r.va=!1))})),await ok(n,e,t)}catch(r){await Og(r)}}function X_(e,t,n){const r=og(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=og(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&D_(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Y_(e,t,n){const r=og(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new $g(Ng.comparator);e=e.insert(s,xy.newNoDocument(s,xg.min()));const n=kv().add(s),i=new pb(xg.min(),new Map,new $g(_g),e,n);await Q_(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),ak(r)}else await Iw(r.localStore,t,!1).then((()=>nk(r,t,n))).catch(Og)}async function J_(e,t){const n=og(e),r=t.batch.batchId;try{const e=await function(e,t){const n=og(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=Lg.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ag(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=kv();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);tk(n,r,null),ek(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ok(n,e)}catch(i){await Og(i)}}async function Z_(e,t,n){const r=og(e);try{const e=await function(e,t){const n=og(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ag(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);tk(r,t,n),ek(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ok(r,e)}catch(i){await Og(i)}}function ek(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function tk(e,t,n){const r=og(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function nk(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||rk(e,t)}))}function rk(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(Jw(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),ak(e))}function ik(e,t,n){for(const r of n)r instanceof j_?(e.La.addReference(r.key,t),sk(e,r)):r instanceof U_?(tg("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||rk(e,r.key)):sg()}function sk(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(tg("SyncEngine","New document in limbo: "+n),e.xa.add(r),ak(e))}function ak(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Ng(Tg.fromString(t)),r=e.qa.next();e.Na.set(r,new z_(n)),e.Oa=e.Oa.insert(n,r),Yw(e.remoteStore,new Zb(nv(Jy(n.path)),r,"TargetPurposeLimboResolution",jg.oe))}}async function ok(e,t,n){const r=og(e),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,o)=>{a.push(r.Ka(o,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(o.targetId,i?"current":"not-current")}if(e){i.push(e);const t=ww.Wi(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.Ca.d_(i),await async function(e,t){const n=og(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Lg.forEach(t,(t=>Lg.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Lg.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Mg(r))throw r;tg("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function lk(e,t){const n=og(e);if(!n.currentUser.isEqual(t)){tg("SyncEngine","User change. New user:",t.toKey());const e=await xw(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((e=>{e.forEach((e=>{e.reject(new ug(lg.CANCELLED,i))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ok(n,e.hs)}var r,i}function uk(e,t){const n=og(e),r=n.Na.get(t);if(r&&r.va)return kv().add(r.key);{let e=kv();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function ck(e){const t=og(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Q_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Y_.bind(null,t),t.Ca.d_=A_.bind(null,t.eventManager),t.Ca.$a=P_.bind(null,t.eventManager),t}class hk{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zw(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new Ew(e,t,n,r)}(this.persistence,new kw,e.initialUser,this.serializer)}Ga(e){return new yw(bw.Zr,this.serializer)}Wa(e){return new Aw}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hk.provider={build:()=>new hk};class dk{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>X_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=lk.bind(null,this.syncEngine),await async function(e,t){const n=og(e);t?(n.L_.delete(2),await Qw(n)):t||(n.L_.add(2),await Xw(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new N_}createDatastore(e){const t=zw(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Fw(r));var r;return function(e,t,n,r){return new Ww(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Gw(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>X_(this.syncEngine,e,0)),Dw.D()?new Dw:new Pw)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new B_(e,t,n,r,i,s);return a&&(o.Qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=og(e);tg("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await Xw(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}dk.provider={build:()=>new dk};
/**
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
 */
/**
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
 */
class fk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ng("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class pk{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ym.UNAUTHENTICATED,this.clientId=wg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{tg("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(tg("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cg;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(df){const n=x_(df,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function mk(e,t){e.asyncQueue.verifyOperationInProgress(),tg("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await xw(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function gk(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){tg("FirestoreClient","Using user provided OfflineComponentProvider");try{await mk(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===lg.FAILED_PRECONDITION||n.code===lg.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;rg("Error using user provided cache. Falling back to memory cache: "+i),await mk(e,new hk)}}else tg("FirestoreClient","Using default OfflineComponentProvider"),await mk(e,new hk);var n;return e._offlineComponents}(e);tg("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>w_(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>w_(t.remoteStore,n))),e._onlineComponents=t}async function yk(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(tg("FirestoreClient","Using user provided OnlineComponentProvider"),await gk(e,e._uninitializedComponentsProvider._online)):(tg("FirestoreClient","Using default OnlineComponentProvider"),await gk(e,new dk))),e._onlineComponents}async function vk(e){const t=await yk(e),n=t.eventManager;return n.onListen=$_.bind(null,t.syncEngine),n.onUnlisten=W_.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=q_.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=K_.bind(null,t.syncEngine),n}function bk(e,t,n={}){const r=new cg;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new fk({next:n=>{s.Za(),t.enqueueAndForget((()=>async function(e,t){const n=og(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(e,a))),n.fromCache&&"server"===r.source?i.reject(new ug(lg.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new M_(n,s,{includeMetadataChanges:!0,_a:!0});return async function(t,n){const r=og(t);let i=3;const s=n.query;let a=r.queries.get(s);a?!a.H_()&&n.J_()&&(i=2):(a=new I_,i=n.J_()?0:1);try{switch(i){case 0:a.z_=await r.onListen(s,!0);break;case 1:a.z_=await r.onListen(s,!1);break;case 2:await r.onFirstRemoteStoreListen(s)}}catch(e){const r=x_(e,`Initialization of query '${ov(n.query)}' failed`);return void n.onError(r)}r.queries.set(s,a),a.j_.push(n),n.Z_(r.onlineState),a.z_&&n.X_(a.z_)&&D_(r)}(e,a)}(await vk(e),e.asyncQueue,t,n,r))),r.promise
/**
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
 */}function wk(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const _k=new Map;
/**
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
 */function kk(e,t,n){if(!n)throw new ug(lg.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ek(e){if(!Ng.isDocumentKey(e))throw new ug(lg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function xk(e){if(Ng.isDocumentKey(e))throw new ug(lg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sk(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":sg()}function Tk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ug(lg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sk(e);throw new ug(lg.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */class Ck{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ug(lg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ug(lg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ug(lg.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wk(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ug(lg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ug(lg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ug(lg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ik{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ck({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ug(lg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ug(lg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ck(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new dg;switch(e.type){case"firstParty":return new gg(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ug(lg.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=_k.get(e);t&&(tg("ComponentProvider","Removing Datastore"),_k.delete(e),t.terminate())}(this),Promise.resolve()}}function Nk(e,t,n,r={}){var i;const s=(e=Tk(e,Ik))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&rg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ym.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[qf(JSON.stringify({alg:"none",type:"JWT"})),qf(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ug(lg.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ym(s)}e._authCredentials=new fg(new hg(t,n))}}
/**
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
 */class Rk{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Rk(this.firestore,e,this._query)}}class Ak{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pk(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ak(this.firestore,e,this._key)}}class Pk extends Rk{constructor(e,t,n){super(e,t,Jy(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ak(this.firestore,null,new Ng(e))}withConverter(e){return new Pk(this.firestore,e,this._path)}}function Dk(e,t,...n){if(e=up(e),kk("collection","path",t),e instanceof Ik){const r=Tg.fromString(t,...n);return xk(r),new Pk(e,null,r)}{if(!(e instanceof Ak||e instanceof Pk))throw new ug(lg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tg.fromString(t,...n));return xk(r),new Pk(e.firestore,null,r)}}
/**
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
 */
class Ok{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Bw(this,"async_queue_retry"),this.Vu=()=>{const e=Vw();e&&tg("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=Vw();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Vw();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new cg;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(hf){if(!Mg(hf))throw hf;tg("AsyncQueue","Operation failed with retryable error: "+hf)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;throw ng("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=E_.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&sg()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Lk extends Ik{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ok,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ok(e),this._firestoreClient=void 0,await e}}}function Mk(e){if(e._terminated)throw new ug(lg.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(a=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new iy(a,o,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,wk(u.experimentalLongPollingOptions),u.useFetchStreams));var a,o,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new pk(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
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
 */(e),e._firestoreClient}class jk{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jk(Xg.fromBase64String(e))}catch(t){throw new ug(lg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jk(Xg.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Uk{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ug(lg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ig(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class Fk{constructor(e){this._methodName=e}}
/**
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
 */class Vk{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ug(lg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ug(lg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _g(this._lat,e._lat)||_g(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
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
 */const Bk=/^__.*__$/;class $k{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Xv(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qv(e,this.data,t,this.fieldTransforms)}}function qk(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw sg()}}class Hk{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Hk(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return rE(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(qk(this.Cu)&&Bk.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wk{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zw(e)}Qu(e,t,n,r=!1){return new Hk({Cu:e,methodName:t,qu:n,path:Ig.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kk(e){const t=e._freezeSettings(),n=zw(e._databaseId);return new Wk(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Gk(e,t,n,r,i,s={}){const a=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);Zk("Data must be an object, but it was:",a,r);const o=Yk(r,a);let l,u;if(s.merge)l=new Gg(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=eE(t,r,n);if(!a.contains(i))throw new ug(lg.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);iE(e,i)||e.push(i)}l=new Gg(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new $k(new ky(o),l,u)}class Qk extends Fk{_toFieldTransform(e){return new Fv(e.path,new Av)}isEqual(e){return e instanceof Qk}}function Xk(e,t){if(Jk(e=up(e)))return Zk("Unsupported field value:",t,e),Yk(e,t);if(e instanceof Fk)return function(e,t){if(!qk(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Xk(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=up(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Tv(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Eg.fromDate(e);return{timestampValue:Ib(t.serializer,n)}}if(e instanceof Eg){const n=new Eg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ib(t.serializer,n)}}if(e instanceof Vk)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof jk)return{bytesValue:Nb(t.serializer,e._byteString)};if(e instanceof Ak){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Pb(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof zk)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return xv(n.serializer,e)}))}}}}};var n;throw t.Bu(`Unsupported field value: ${Sk(e)}`)}(e,t)}function Yk(e,t){const n={};return Bg(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zg(e,((e,r)=>{const i=Xk(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Jk(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Eg||e instanceof Vk||e instanceof jk||e instanceof Ak||e instanceof Fk||e instanceof zk)}function Zk(e,t,n){if(!Jk(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Sk(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function eE(e,t,n){if((t=up(t))instanceof Uk)return t._internalPath;if("string"==typeof t)return nE(e,t);throw rE("Field path arguments must be of type string or ",e,!1,void 0,n)}const tE=new RegExp("[~\\*/\\[\\]]");function nE(e,t,n){if(t.search(tE)>=0)throw rE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Uk(...t.split("."))._internalPath}catch(ff){throw rE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rE(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new ug(lg.INVALID_ARGUMENT,o+e+l)}function iE(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class sE{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ak(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new aE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oE("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class aE extends sE{data(){return super.data()}}function oE(e,t){return"string"==typeof t?nE(e,t):t instanceof Uk?t._internalPath:t._delegate._internalPath}
/**
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
 */class lE{}class uE extends lE{}function cE(e,t,...n){let r=[];t instanceof lE&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof fE)).length,n=e.filter((e=>e instanceof hE)).length;if(t>1||t>0&&n>0)throw new ug(lg.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class hE extends uE{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new hE(e,t,n)}_apply(e){const t=this._parse(e);return gE(e._query,t),new Rk(e.firestore,e.converter,rv(e._query,t))}_parse(e){const t=Kk(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ug(lg.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){mE(a,s);const t=[];for(const n of a)t.push(pE(r,e,n));o={arrayValue:{values:t}}}else o=pE(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||mE(a,s),o=function(e,t,n,r=!1){return Xk(n,e.Qu(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return Ay.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function dE(e,t,n){const r=t,i=oE("where",e);return hE._create(i,r,n)}class fE extends lE{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fE(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Py.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)gE(n,i),n=rv(n,i)}(e._query,t),new Rk(e.firestore,e.converter,rv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function pE(e,t,n){if("string"==typeof(n=up(n))){if(""===n)throw new ug(lg.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ev(t)&&-1!==n.indexOf("/"))throw new ug(lg.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Tg.fromString(n));if(!Ng.isDocumentKey(r))throw new ug(lg.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return my(e,new Ng(r))}if(n instanceof Ak)return my(e,n._key);throw new ug(lg.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sk(n)}.`)}function mE(e,t){if(!Array.isArray(e)||0===e.length)throw new ug(lg.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gE(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ug(lg.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ug(lg.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class yE{convertValue(e,t="none"){switch(oy(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Zg(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ey(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw sg()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return zg(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Zg(e.doubleValue)));return new zk(i)}convertGeoPoint(e){return new Vk(Zg(e.latitude),Zg(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ny(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ry(e));default:return null}}convertTimestamp(e){const t=Jg(e);return new Eg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Tg.fromString(e);ag(Jb(n));const r=new sy(n.get(1),n.get(3)),i=new Ng(n.popFirst(5));return r.isEqual(t)||ng(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */
/**
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
 */
class vE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bE extends sE{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(oE("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class wE extends bE{data(e={}){return super.data(e)}}class _E{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new vE(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new wE(this._firestore,this._userDataWriter,n.key,n,new vE(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ug(lg.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new wE(e._firestore,e._userDataWriter,n.doc.key,n.doc,new vE(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new wE(e._firestore,e._userDataWriter,t.doc.key,t.doc,new vE(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:kE(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return sg()}}class EE extends yE{constructor(e){super(),this.firestore=e}convertBytes(e){return new jk(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ak(this.firestore,null,t)}}function xE(e){e=Tk(e,Rk);const t=Tk(e.firestore,Lk),n=Mk(t),r=new EE(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ug(lg.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),bk(n,e._query).then((n=>new _E(t,r,e,n)))}function SE(e,t){const n=Tk(e.firestore,Lk),r=function(e,t,...n){if(e=up(e),1===arguments.length&&(t=wg.newId()),kk("doc","path",t),e instanceof Ik){const r=Tg.fromString(t,...n);return Ek(r),new Ak(e,null,new Ng(r))}{if(!(e instanceof Ak||e instanceof Pk))throw new ug(lg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tg.fromString(t,...n));return Ek(r),new Ak(e.firestore,e instanceof Pk?e.converter:null,new Ng(r))}}(e),i=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return TE(n,[Gk(Kk(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,zv.exists(!1))]).then((()=>r))}function TE(e,t){return function(e,t){const n=new cg;return e.asyncQueue.enqueueAndForget((async()=>G_(await function(e){return yk(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Mk(e),t)}function CE(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function IE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Jm=xm,bm(new cp("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Lk(new pg(e.getProvider("auth-internal")),new vg(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ug(lg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sy(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Cm(Xm,"4.7.3",e),Cm(Xm,"4.7.3","esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const NE=IE,RE=new np("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),AE=new wp("@firebase/auth");function PE(e,...t){AE.logLevel<=pp.ERROR&&AE.error(`Auth (${xm}): ${e}`,...t)}
/**
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
 */function DE(e,...t){throw jE(e,...t)}function OE(e,...t){return jE(e,...t)}function LE(e,t,n){const r=Object.assign(Object.assign({},NE()),{[t]:n});return new np("auth","Firebase",r).create(t,{appName:e.name})}function ME(e){return LE(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jE(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return RE.create(e,...t)}function UE(e,t,...n){if(!e)throw jE(t,...n)}function FE(e){const t="INTERNAL ASSERTION FAILED: "+e;throw PE(t),new Error(t)}function VE(e,t){e||FE(t)}
/**
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
 */function zE(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function BE(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function $E(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==BE()&&"https:"!==BE()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class qE{constructor(e,t){this.shortDelay=e,this.longDelay=t,VE(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zf())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return $E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function HE(e,t){VE(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class WE{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void FE("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void FE("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void FE("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const KE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},GE=new qE(3e4,6e4);
/**
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
 */function QE(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function XE(e,t,n,r,i={}){return YE(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=ap(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:o},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),WE.fetch()(JE(e,e.config.apiHost,n,a),l)}))}async function YE(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},KE),t);try{const t=new ZE(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ex(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ex(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ex(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ex(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw LE(e,o,a);DE(e,o)}}catch(hf){if(hf instanceof tp)throw hf;DE(e,"network-request-failed",{message:String(hf)})}}function JE(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?HE(e.config,i):`${e.config.apiScheme}://${i}`}class ZE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(OE(this.auth,"network-request-failed"))),GE.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ex(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=OE(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function tx(e,t){return XE(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function nx(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(hf){}}function rx(e){return 1e3*Number(e)}function ix(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return PE("JWT malformed, contained fewer than 3 sections"),null;try{const e=Hf(n);return e?JSON.parse(e):(PE("Failed to decode base64 JWT payload"),null)}catch(hf){return PE("Caught error parsing JWT payload as JSON",null==hf?void 0:hf.toString()),null}}function sx(e){const t=ix(e);return UE(t,"internal-error"),UE(void 0!==t.exp,"internal-error"),UE(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function ax(e,t,n=!1){if(n)return t;try{return await t}catch(hf){throw hf instanceof tp&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(hf)&&e.auth.currentUser===e&&await e.auth.signOut(),hf}}class ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(hf){return void("auth/network-request-failed"===(null==hf?void 0:hf.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class lx{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nx(this.lastLoginAt),this.creationTime=nx(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ux(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ax(e,tx(n,{idToken:r}));UE(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?cx(s.providerUserInfo):[],o=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new lx(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function cx(e){return e.map((e=>{var{providerId:t}=e,n=CE(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */
/**
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
 */
class hx{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){UE(e.idToken,"internal-error"),UE(void 0!==e.idToken,"internal-error"),UE(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):sx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){UE(0!==e.length,"internal-error");const t=sx(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(UE(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await YE(e,{},(async()=>{const n=ap({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=JE(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WE.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new hx;return n&&(UE("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(UE("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(UE("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hx,this.toJSON())}_performRefresh(){return FE("not implemented")}}
/**
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
 */function dx(e,t){UE("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fx{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=CE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lx(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ax(this,this.stsTokenManager.getToken(this.auth,e));return UE(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=up(e),r=await n.getIdToken(t),i=ix(r);UE(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:nx(rx(i.auth_time)),issuedAtTime:nx(rx(i.iat)),expirationTime:nx(rx(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=up(e);await ux(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(UE(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fx(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){UE(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ux(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_m(this.auth.app))return Promise.reject(ME(this.auth));const e=await this.getIdToken();return await ax(this,async function(e,t){return XE(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:k}=t;UE(v&&k,e,"internal-error");const E=hx.fromJSON(this.name,k);UE("string"==typeof v,e,"internal-error"),dx(c,e.name),dx(h,e.name),UE("boolean"==typeof b,e,"internal-error"),UE("boolean"==typeof w,e,"internal-error"),dx(d,e.name),dx(f,e.name),dx(p,e.name),dx(m,e.name),dx(g,e.name),dx(y,e.name);const x=new fx({uid:v,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(x.providerData=_.map((e=>Object.assign({},e)))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,t,n=!1){const r=new hx;r.updateFromServerResponse(t);const i=new fx({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ux(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];UE(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?cx(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new hx;a.updateFromIdToken(n);const o=new fx({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new lx(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(o,l),o}}
/**
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
 */const px=new Map;function mx(e){VE(e instanceof Function,"Expected a class definition");let t=px.get(e);return t?(VE(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,px.set(e,t),t)}
/**
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
 */class gx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gx.type="NONE";const yx=gx;
/**
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
 */function vx(e,t,n){return`firebase:${e}:${t}:${n}`}class bx{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=vx(this.userKey,r.apiKey,i),this.fullPersistenceKey=vx("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fx._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new bx(mx(yx),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||mx(yx);const s=vx(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(s);if(t){const n=fx._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(l){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new bx(i,e,n)):new bx(i,e,n)}}
/**
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
 */function wx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xx(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_x(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Tx(t))return"Blackberry";if(Cx(t))return"Webos";if(kx(t))return"Safari";if((t.includes("chrome/")||Ex(t))&&!t.includes("edge/"))return"Chrome";if(Sx(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function _x(e=Zf()){return/firefox\//i.test(e)}function kx(e=Zf()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ex(e=Zf()){return/crios\//i.test(e)}function xx(e=Zf()){return/iemobile/i.test(e)}function Sx(e=Zf()){return/android/i.test(e)}function Tx(e=Zf()){return/blackberry/i.test(e)}function Cx(e=Zf()){return/webos/i.test(e)}function Ix(e=Zf()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Nx(){return function(){const e=Zf();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Rx(e=Zf()){return Ix(e)||Sx(e)||Cx(e)||Tx(e)||/windows phone/i.test(e)||xx(e)}
/**
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
 */function Ax(e,t=[]){let n;switch(e){case"Browser":n=wx(Zf());break;case"Worker":n=`${wx(Zf())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${xm}/${r}`}
/**
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
 */class Px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(hf){r(hf)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(hf){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==hf?void 0:hf.message})}}}
/**
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
 */class Dx{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class Ox{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mx(this),this.idTokenSubscription=new Mx(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mx(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await bx.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(hf){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await tx(this,{idToken:e}),n=await fx._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_m(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(hf){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(hf)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return UE(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(hf){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ux(e)}catch(hf){if("auth/network-request-failed"!==(null==hf?void 0:hf.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_m(this.app))return Promise.reject(ME(this));const t=e?up(e):null;return t&&UE(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&UE(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return _m(this.app)?Promise.reject(ME(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _m(this.app)?Promise.reject(ME(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(mx(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return XE(e,"GET","/v2/passwordPolicy",QE(e,t))}
/**
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
 */(this),t=new Dx(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new np("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return XE(e,"POST","/v2/accounts:revokeToken",QE(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mx(e)||this._popupRedirectResolver;UE(t,this,"argument-error"),this.redirectPersistenceManager=await bx.create(this,[mx(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(UE(a,this,"internal-error"),a.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return UE(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ax(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){AE.logLevel<=pp.WARN&&AE.warn(`Auth (${xm}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Lx(e){return up(e)}class Mx{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new op(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return UE(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let jx={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ux(e,t,n){const r=Lx(e);UE(r._canInitEmulator,r,"emulator-config-failed"),UE(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=Fx(t),{host:s,port:a}=function(e){const t=Fx(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Vx(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Vx(t)}}}(t),o=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Fx(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class zx{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return FE("not implemented")}_getIdTokenResponse(e){return FE("not implemented")}_linkToIdToken(e,t){return FE("not implemented")}_getReauthenticationResolver(e){return FE("not implemented")}}
/**
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
 */async function Bx(e,t){return async function(e,t,n,r,i={}){const s=await XE(e,t,n,r,i);return"mfaPendingCredential"in s&&DE(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",QE(e,t))}
/**
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
 */class $x extends zx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $x(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):DE("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=CE(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new $x(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Bx(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Bx(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bx(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ap(t)}return e}}
/**
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
 */class qx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Hx extends qx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class Wx extends Hx{constructor(){super("facebook.com")}static credential(e){return $x._fromParams({providerId:Wx.PROVIDER_ID,signInMethod:Wx.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wx.credentialFromTaggedObject(e)}static credentialFromError(e){return Wx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Wx.credential(e.oauthAccessToken)}catch(t){return null}}}Wx.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wx.PROVIDER_ID="facebook.com";
/**
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
 */
class Kx extends Hx{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $x._fromParams({providerId:Kx.PROVIDER_ID,signInMethod:Kx.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kx.credentialFromTaggedObject(e)}static credentialFromError(e){return Kx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Kx.credential(t,n)}catch(r){return null}}}Kx.GOOGLE_SIGN_IN_METHOD="google.com",Kx.PROVIDER_ID="google.com";
/**
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
 */
class Gx extends Hx{constructor(){super("github.com")}static credential(e){return $x._fromParams({providerId:Gx.PROVIDER_ID,signInMethod:Gx.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gx.credentialFromTaggedObject(e)}static credentialFromError(e){return Gx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gx.credential(e.oauthAccessToken)}catch(t){return null}}}Gx.GITHUB_SIGN_IN_METHOD="github.com",Gx.PROVIDER_ID="github.com";
/**
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
 */
class Qx extends Hx{constructor(){super("twitter.com")}static credential(e,t){return $x._fromParams({providerId:Qx.PROVIDER_ID,signInMethod:Qx.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qx.credentialFromTaggedObject(e)}static credentialFromError(e){return Qx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qx.credential(t,n)}catch(r){return null}}}Qx.TWITTER_SIGN_IN_METHOD="twitter.com",Qx.PROVIDER_ID="twitter.com";
/**
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
 */
class Xx{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await fx._fromIdTokenResponse(e,n,r),s=Yx(n);return new Xx({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Yx(n);return new Xx({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Yx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class Jx extends tp{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Jx.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Jx(e,t,n,r)}}function Zx(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Jx._fromErrorAndOperation(e,n,t,r);throw n}))}const eS="__sak";
/**
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
 */class tS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(eS,"1"),this.storage.removeItem(eS),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class nS extends tS{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Nx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nS.type="LOCAL";const rS=nS;
/**
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
 */class iS extends tS{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iS.type="SESSION";const sS=iS;
/**
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
 */
/**
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
 */
class aS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new aS(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function oS(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */aS.receivers=[];class lS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=oS("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function uS(){return window}
/**
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
 */
function cS(){return void 0!==uS().WorkerGlobalScope&&"function"==typeof uS().importScripts}
/**
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
 */
const hS="firebaseLocalStorageDb",dS="firebaseLocalStorage",fS="fbase_key";class pS{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mS(e,t){return e.transaction([dS],t?"readwrite":"readonly").objectStore(dS)}function gS(){const e=indexedDB.open(hS,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(dS,{keyPath:fS})}catch(hf){n(hf)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(dS)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(hS);return new pS(e).toPromise()}(),t(await gS()))}))}))}async function yS(e,t,n){const r=mS(e,!0).put({[fS]:t,value:n});return new pS(r).toPromise()}function vS(e,t){const n=mS(e,!0).delete(t);return new pS(n).toPromise()}class bS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gS()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(hf){if(t++>3)throw hf;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aS._getInstance(cS()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gS();return await yS(e,eS,"1"),await vS(e,eS),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>yS(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=mS(e,!1).get(t),r=await new pS(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vS(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mS(e,!1).getAll();return new pS(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bS.type="LOCAL";const wS=bS;new qE(3e4,6e4);
/**
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
 */
class _S extends zx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bx(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bx(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bx(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kS(e){
/**
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
 */
return async function(e,t,n=!1){if(_m(e.app))return Promise.reject(ME(e));const r="signIn",i=await Zx(e,r,t),s=await Xx._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new _S(e),e.bypassAuthState)}function ES(e){const{auth:t,user:n}=e;return UE(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e;if(_m(r.app))return Promise.reject(ME(r));const i="reauthenticate";try{const s=await ax(e,Zx(r,i,t,e),n);UE(s.idToken,r,"internal-error");const a=ix(s.idToken);UE(a,r,"internal-error");const{sub:o}=a;return UE(e.uid===o,r,"user-mismatch"),Xx._forOperation(e,i,s)}catch(hf){throw"auth/user-not-found"===(null==hf?void 0:hf.code)&&DE(r,"user-mismatch"),hf}}(n,new _S(e),e.bypassAuthState)}async function xS(e){const{auth:t,user:n}=e;return UE(n,t,"internal-error"),async function(e,t,n=!1){const r=await ax(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xx._forOperation(e,"link",r)}(n,new _S(e),e.bypassAuthState)}
/**
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
 */class SS{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(hf){this.reject(hf)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(hf){this.reject(hf)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return xS;case"reauthViaPopup":case"reauthViaRedirect":return ES;default:DE(this.auth,"internal-error")}}resolve(e){VE(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){VE(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const TS=new qE(2e3,1e4);class CS extends SS{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,CS.currentPopupAction&&CS.currentPopupAction.cancel(),CS.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return UE(e,this.auth,"internal-error"),e}async onExecution(){VE(1===this.filter.length,"Popup operations only handle one event");const e=oS();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(OE(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(OE(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,CS.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(OE(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,TS.get())};e()}}CS.currentPopupAction=null;
/**
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
 */
const IS="pendingRedirect",NS=new Map;class RS extends SS{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=NS.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return vx(IS,e.config.apiKey,e.name)}(t),r=function(e){return mx(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(hf){e=()=>Promise.reject(hf)}NS.set(this.auth._key(),e)}return this.bypassAuthState||NS.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function AS(e,t){NS.set(e._key(),t)}async function PS(e,t,n=!1){if(_m(e.app))return Promise.reject(ME(e));const r=Lx(e),i=
/**
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
 */
function(e,t){return t?mx(t):(UE(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new RS(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
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
 */class DS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LS(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!LS(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(OE(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(OS(e))}saveEventToCache(e){this.cachedEventUids.add(OS(e)),this.lastProcessedEventTime=Date.now()}}function OS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function LS({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const MS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jS=/^https?/;async function US(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return XE(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(FS(r))return}catch(n){}DE(e,"unauthorized-domain")}function FS(e){const t=zE(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!jS.test(n))return!1;if(MS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const VS=new qE(3e4,6e4);function zS(){const e=uS().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function BS(e){return new Promise(((t,n)=>{var r,i,s,a;function o(){zS(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zS(),n(OE(e,"network-request-failed"))},timeout:VS.get()})}if(null===(i=null===(r=uS().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=uS().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return uS()[t]=()=>{gapi.load?o():n(OE(e,"network-request-failed"))},(a=`${jx.gapiScript}?onload=${t}`,jx.loadJS(a)).catch((e=>n(e)))}o()}})).catch((e=>{throw $S=null,e}))}let $S=null;
/**
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
 */
const qS=new qE(5e3,15e3),HS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KS(e){const t=e.config;UE(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?HE(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:xm},i=WS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ap(r).slice(1)}`}async function GS(e){const t=await function(e){return $S=$S||BS(e),$S}(e),n=uS().gapi;return UE(n,e,"internal-error"),t.open({where:document.body,url:KS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HS,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=OE(e,"network-request-failed"),s=uS().setTimeout((()=>{r(i)}),qS.get());function a(){uS().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
/**
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
 */const QS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class XS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(hf){}}}function YS(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},QS),{width:r.toString(),height:i.toString(),top:s,left:a}),u=Zf().toLowerCase();n&&(o=Ex(u)?"_blank":n),_x(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Zf()){var t;return Ix(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",o),new XS(null);const h=window.open(t||"",o,c);UE(h,e,"popup-blocked");try{h.focus()}catch(hf){}return new XS(h)}const JS="__/auth/handler",ZS="emulator/auth/handler",eT=encodeURIComponent("fac");async function tT(e,t,n,r,i,s){UE(e.config.authDomain,e,"auth-domain-config-required"),UE(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xm,eventId:i};if(t instanceof qx){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof Hx){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${eT}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${JS}`;return HE(e,ZS)}
/**
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
 */(e)}?${ap(o).slice(1)}${u}`}const nT="webStorageSupport";const rT=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sS,this._completeRedirectFn=PS,this._overrideRedirectResult=AS}async _openPopup(e,t,n,r){var i;VE(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return YS(e,await tT(e,t,n,zE(),r),oS())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){uS().location.href=e}(await tT(e,t,n,zE(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(VE(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await GS(e),n=new DS(e);return t.register("authEvent",(t=>{UE(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nT,{type:nT},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[nT];void 0!==i&&t(!!i),DE(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=US(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rx()||kx()||Ix()}};var iT="@firebase/auth",sT="1.7.9";
/**
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
 */
class aT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){UE(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const oT=Yf("authIdTokenMaxAge")||300;let lT=null;var uT,cT;uT={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=OE("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},jx=uT,cT="Browser",bm(new cp("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;UE(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:cT,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ax(cT)},l=new Ox(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mx);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),bm(new cp("auth-internal",(e=>{const t=Lx(e.getProvider("auth").getImmediate());return new aT(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Cm(iT,sT,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(cT)),Cm(iT,sT,"esm2017");function hT(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function dT(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map((e=>dT(e)));if("function"==typeof e||"object"==typeof e)return hT(e,(e=>dT(e)));throw new Error("Data cannot be encoded in JSON: "+e)}function fT(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((e=>fT(e))):"function"==typeof e||"object"==typeof e?hT(e,(e=>fT(e))):e}
/**
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
 */const pT="functions",mT={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
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
 */class gT extends tp{constructor(e,t,n){super(`${pT}/${e}`,t||""),this.details=n}}
/**
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
 */
class yT{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((e=>this.auth=e),(()=>{})),this.messaging||t.get().then((e=>this.messaging=e),(()=>{})),this.appCheck||n.get().then((e=>this.appCheck=e),(()=>{}))}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(hf){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(hf){return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
/**
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
 */const vT="us-central1";class bT{constructor(e,t,n,r,i=vT,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new yT(t,n,r),this.cancelAllRequests=new Promise((e=>{this.deleteService=()=>Promise.resolve(e())}));try{const e=new URL(i);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=vT}catch(hf){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function wT(e,t,n){return n=>function(e,t,n,r){const i=e._url(t);return async function(e,t,n,r){n=dT(n);const i={data:n},s={},a=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);a.authToken&&(s.Authorization="Bearer "+a.authToken);a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken);null!==a.appCheckToken&&(s["X-Firebase-AppCheck"]=a.appCheckToken);const o=r.timeout||7e4,l=function(e){let t=null;return{promise:new Promise(((n,r)=>{t=setTimeout((()=>{r(new gT("deadline-exceeded","deadline-exceeded"))}),e)})),cancel:()=>{t&&clearTimeout(t)}}}(o),u=await Promise.race([_T(t,i,s,e.fetchImpl),l.promise,e.cancelAllRequests]);if(l.cancel(),!u)throw new gT("cancelled","Firebase Functions instance was deleted.");const c=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!mT[t])return new gT("internal","internal");r=mT[t],i=t}const s=e.message;"string"==typeof s&&(i=s),n=e.details,void 0!==n&&(n=fT(n))}}catch(hf){}return"ok"===r?null:new gT(r,i,n)}(u.status,u.json);if(c)throw c;if(!u.json)throw new gT("internal","Response is not valid JSON object.");let h=u.json.data;void 0===h&&(h=u.json.result);if(void 0===h)throw new gT("internal","Response is missing data field.");return{data:fT(h)}}(e,i,n,r)}(e,t,n,{})}async function _T(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(hf){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(hf){}return{status:i.status,json:s}}const kT="@firebase/functions",ET="0.11.8";function xT(e,t,n){return wT(up(e),t)}!function(e,t){bm(new cp(pT,((t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("messaging-internal"),a=t.getProvider("app-check-internal");return new bT(r,i,s,a,n,e)}),"PUBLIC").setMultipleInstances(!0)),Cm(kT,ET,t),Cm(kT,ET,"esm2017")}
/**
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
 */(fetch.bind(self));const ST=Sm({apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"}),TT=function(e){const t="string"==typeof e?e:"(default)",n=wm("object"==typeof e?e:Tm(),"firestore").getImmediate({identifier:t});if(!n._initialized){const e=Qf("firestore");e&&Nk(n,...e)}return n}(ST);!function(e=Tm()){const t=wm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
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
 */
function(e,t){const n=wm(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ip(n.getOptions(),null!=t?t:{}))return e;DE(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:rT,persistence:[wS,rS,sS]}),r=Yf("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>oT)return;const r=null==t?void 0:t.token;lT!==r&&(lT=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){up(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){up(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=Gf("auth");s&&Ux(n,`http://${s}`)}(ST);const CT=function(e=Tm(),t=vT){const n=wm(up(e),pT).getImmediate({identifier:t}),r=Qf("functions");return r&&function(e,t,n){!function(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}(up(e),t,n)}(n,...r),n}(ST),IT="newsletter_subscribers",NT=async(e,t)=>{const n=cE(Dk(TT,IT),dE("email","==",e),dE("unsubscribeToken","==",t)),r=await xE(n);if(r.empty)return!1;await function(e){return TE(Tk(e.firestore,Lk),[new eb(e._key,zv.none())])}(r.docs[0].ref);const i=xT(CT,"sendUnsubscribeEmail");return await i({email:e}),!0};function RT({isOpen:e,onClose:t}){const[n,r]=V.useState(""),[i,s]=V.useState(!1);if(!e)return null;return Q.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[Q.jsx(Ff,{position:"top-center"}),Q.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),Q.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full",children:[Q.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:Q.jsx(Ud,{className:"h-6 w-6"})}),Q.jsxs("div",{className:"text-center mb-6",children:[Q.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Join the Spatial Learning Revolution"}),Q.jsx("p",{className:"text-gray-300",children:"Be part of an innovative community shaping the future of education in the Spatial Web. Get exclusive access to:"})]}),Q.jsx("div",{className:"space-y-4 mb-6",children:["Early access to spatial computing tools","Advanced teaching methodologies","Community events and workshops","Latest spatial web research"].map(((e,t)=>Q.jsxs("div",{className:"flex items-center text-gray-300",children:[Q.jsx("div",{className:"h-2 w-2 bg-cyan-400 rounded-full mr-3"}),e]},t)))}),Q.jsxs("form",{onSubmit:async e=>{e.preventDefault(),s(!0);try{const e=await(async e=>{const t=cE(Dk(TT,IT),dE("email","==",e));return!(await xE(t)).empty})(n);if(e)return void cf.error("This email is already subscribed!");await(async e=>{const t=cE(Dk(TT,IT),dE("email","==",e));if(!(await xE(t)).empty)throw new Error("Email already subscribed");const n={email:e,subscribeDate:new Qk("serverTimestamp"),unsubscribeToken:Math.random().toString(36).substring(2)+Date.now().toString(36)},r=xT(CT,"sendWelcomeEmail");return await r({email:e,unsubscribeToken:n.unsubscribeToken}),SE(Dk(TT,IT),n)})(n),cf.success("Successfully subscribed to newsletter!"),r(""),t()}catch(i){cf.error("Failed to subscribe. Please try again.")}finally{s(!1)}},className:"space-y-4",children:[Q.jsx("input",{type:"email",value:n,onChange:e=>r(e.target.value),placeholder:"Enter your email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Q.jsx("button",{type:"submit",disabled:i,className:"w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors",children:i?"Subscribing...":"Join the Spatial Web Community"})]})]})]})}function AT({isOpen:e,onClose:t}){const[n,r]=V.useState(""),[i,s]=V.useState(""),[a,o]=V.useState("");if(!e)return null;return Q.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[Q.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),Q.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full",children:[Q.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:Q.jsx(Ud,{className:"h-6 w-6"})}),Q.jsxs("div",{className:"text-center mb-6",children:[Q.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Advertise in the Metaverse"}),Q.jsx("p",{className:"text-gray-300",children:"Reach over 3,000 XR professionals, educators, and decision-makers in the educational technology space."})]}),Q.jsx("div",{className:"space-y-4 mb-6",children:["Target audience of XR/AR/VR enthusiasts","High-engagement educational community","Premium ad placements available","Custom sponsorship opportunities"].map(((e,t)=>Q.jsxs("div",{className:"flex items-center text-gray-300",children:[Q.jsx("div",{className:"h-2 w-2 bg-cyan-400 rounded-full mr-3"}),e]},t)))}),Q.jsxs("form",{onSubmit:e=>{e.preventDefault(),t()},className:"space-y-4",children:[Q.jsx("input",{type:"email",value:n,onChange:e=>r(e.target.value),placeholder:"Your business email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Q.jsx("input",{type:"tel",value:i,onChange:e=>s(e.target.value),placeholder:"Phone number",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Q.jsx("textarea",{value:a,onChange:e=>o(e.target.value),placeholder:"Tell us about your advertising goals",rows:4,className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none",required:!0}),Q.jsx("button",{type:"submit",className:"w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors",children:"Get in Touch"})]})]})]})}function PT(){const[e,t]=V.useState(!1),[n,r]=V.useState(!1),[i,s]=V.useState(!1);return Q.jsxs(Q.Fragment,{children:[Q.jsxs("nav",{className:"fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10",children:[Q.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Q.jsxs("div",{className:"flex items-center justify-between h-16",children:[Q.jsxs("div",{className:"flex items-center",children:[Q.jsx(bd,{to:"/",className:"flex-shrink-0",children:Q.jsx(Rd,{className:"h-8 w-8 text-cyan-400"})}),Q.jsx("div",{className:"hidden md:block",children:Q.jsxs("div",{className:"ml-10 flex items-baseline space-x-4",children:[Q.jsx(bd,{to:"/resources",className:"text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Resources"}),Q.jsx(bd,{to:"/case-studies",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Case Studies"}),Q.jsx(bd,{to:"/tools",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Tools"}),Q.jsx(bd,{to:"/research",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Research"}),Q.jsx(bd,{to:"/professional-development",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Professional Development"}),Q.jsx("button",{onClick:()=>s(!0),className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Advertise with us"})]})})]}),Q.jsx("div",{className:"hidden md:block",children:Q.jsx("button",{onClick:()=>r(!0),className:"bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors",children:"Join Community"})}),Q.jsx("div",{className:"md:hidden",children:Q.jsx("button",{onClick:()=>t(!e),className:"text-gray-400 hover:text-white",children:e?Q.jsx(Ud,{className:"h-6 w-6"}):Q.jsx(Dd,{className:"h-6 w-6"})})})]})}),e&&Q.jsx("div",{className:"md:hidden",children:Q.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg",children:[Q.jsx(bd,{to:"/resources",className:"text-white block px-3 py-2 rounded-md text-base font-medium",children:"Resources"}),Q.jsx(bd,{to:"/case-studies",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Case Studies"}),Q.jsx(bd,{to:"/tools",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Tools"}),Q.jsx(bd,{to:"/research",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Research"}),Q.jsx(bd,{to:"/professional-development",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Professional Development"}),Q.jsx("button",{onClick:()=>s(!0),className:"text-gray-300 w-full text-left block px-3 py-2 rounded-md text-base font-medium",children:"Advertise with us"})]})})]}),Q.jsx(RT,{isOpen:n,onClose:()=>r(!1)}),Q.jsx(AT,{isOpen:i,onClose:()=>s(!1)})]})}function DT({image:e,category:t,title:n,excerpt:r,slug:i="#"}){return Q.jsxs(bd,{to:`/article/${i}`,className:"group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300",children:[Q.jsx("div",{className:"aspect-video overflow-hidden",children:Q.jsx("img",{src:e,alt:n,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),Q.jsxs("div",{className:"p-6",children:[Q.jsx("span",{className:"inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4",children:t}),Q.jsx("h3",{className:"text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",children:n}),Q.jsx("p",{className:"text-gray-400",children:r}),Q.jsx("span",{className:"mt-4 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors",children:"Read More →"})]})]})}const OT="https://images.unsplash.com/photo-1588980024944-041116b18964?auto=format&fit=crop&q=80",LT="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",MT="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80",jT="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80";function UT({className:e}){return V.useRef(null),V.useRef(!1),V.useEffect((()=>{}),[]),Q.jsx("div",{className:e,children:Q.jsx("div",{className:"text-gray-400 text-sm text-center",children:"Advertisement Space"})})}function FT(){return Q.jsx("div",{className:"absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12",children:"Coming Soon"})}function VT(){const[e,t]=V.useState(!1),n=[{icon:Q.jsx(Ad,{className:"h-8 w-8 text-cyan-400"}),title:"Spatial Resources",description:"Curated guides for spatial computing in education",comingSoon:!0},{icon:Q.jsx(Id,{className:"h-8 w-8 text-cyan-400"}),title:"Lesson Plans",description:"Ready-to-use spatial web lesson templates",comingSoon:!0},{icon:Q.jsx(Ld,{className:"h-8 w-8 text-cyan-400"}),title:"Community",description:"Connect with spatial computing educators",comingSoon:!1,onClick:()=>t(!0)}];return Q.jsxs("div",{className:"relative",children:[Q.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32",children:[Q.jsxs("div",{className:"text-center mb-16",children:[Q.jsxs("h1",{className:"text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight",children:["Transform Education in the",Q.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:" Spatial Web"})]}),Q.jsx("p",{className:"text-xl text-gray-300 mb-12 max-w-3xl mx-auto",children:"Discover how AR, VR, and the Spatial Web are revolutionizing learning experiences through immersive, interconnected educational environments."}),Q.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[Q.jsx(bd,{to:"/resources",className:"px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105",children:"Explore Resources"}),Q.jsx("button",{onClick:()=>t(!0),className:"px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-lg transition-all transform hover:scale-105",children:"Join Community"})]})]}),Q.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:[Q.jsx(DT,{image:"https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80",category:"Spatial Web",title:"The Future of Learning in Web3 and Spatial Computing",excerpt:"How the Spatial Web is creating new possibilities for immersive education.",slug:"spatial-web-learning"}),Q.jsx(DT,{image:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80",category:"Learning Tools",title:"Top Educational Apps for Spatial Computing",excerpt:"The best applications leveraging the Spatial Web for K-12 education.",slug:"spatial-learning-apps"}),Q.jsx(DT,{image:"https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",category:"Case Study",title:"Virtual Labs in the Spatial Web Era",excerpt:"How spatial computing is revolutionizing advanced lab work accessibility.",slug:"virtual-labs-spatial"})]}),Q.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:[Q.jsx(DT,{image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",category:"Teaching Methods",title:"Collaborative Learning in the Spatial Web",excerpt:"New approaches to group work in interconnected virtual spaces.",slug:"collaborative-spatial-learning"}),Q.jsx(DT,{image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80",category:"Technology",title:"XR and Spatial Computing in Special Education",excerpt:"Breaking barriers with spatial web technologies.",slug:"spatial-special-education"}),Q.jsx(DT,{image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",category:"Research",title:"Impact of Spatial Computing on Learning",excerpt:"Latest research on spatial web technology in education.",slug:"spatial-learning-impact"})]}),Q.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:[Q.jsx(DT,{image:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",category:"Professional Development",title:"Teaching in the Spatial Web Era",excerpt:"Preparing educators for the next generation of learning spaces.",slug:"spatial-teaching-prep"}),Q.jsx(UT,{className:"rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 aspect-[1.5] flex items-center justify-center"}),Q.jsx(DT,{image:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80",category:"Curriculum",title:"Designing Spatial Learning Experiences",excerpt:"Best practices for creating educational content in the Spatial Web.",slug:"spatial-curriculum-design"})]}),Q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto",children:n.map(((e,t)=>Q.jsxs("div",{className:"relative p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors "+(e.onClick?"cursor-pointer":""),onClick:e.onClick,children:[e.comingSoon&&Q.jsx(FT,{}),Q.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.icon,Q.jsx("h3",{className:"mt-4 text-lg font-semibold text-white",children:e.title}),Q.jsx("p",{className:"mt-2 text-gray-400",children:e.description})]})]},t)))})]}),Q.jsx(RT,{isOpen:e,onClose:()=>t(!1)})]})}function zT(){!function(){let{matches:e}=V.useContext(Hh),t=e[e.length-1];t&&t.params}();const e=Gh();V.useEffect((()=>{window.scrollTo(0,0)}),[e]);const t={title:"Meta Quest 3 Review: A New Era of Mixed Reality",category:"Review",date:"March 14, 2024",author:"John Doe",image:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80",content:"\n      <p>The Meta Quest 3 represents a significant leap forward in mixed reality technology, offering improved resolution, better comfort, and more sophisticated tracking capabilities than its predecessor.</p>\n      \n      <h2>Hardware Specifications</h2>\n      <p>The Quest 3 features a higher resolution display with improved clarity and reduced screen-door effect. The new pancake lenses provide better optical quality while reducing the overall bulk of the headset.</p>\n      \n      <h2>Mixed Reality Capabilities</h2>\n      <p>With full-color passthrough and improved depth sensing, the Quest 3 delivers compelling mixed reality experiences that blend virtual and physical worlds seamlessly.</p>\n      \n      <h2>Performance and Gaming</h2>\n      <p>Powered by the latest Snapdragon XR2 processor, the Quest 3 handles demanding VR applications with ease, maintaining smooth framerates even in complex environments.</p>\n    "};return Q.jsxs("div",{className:"pt-16",children:[Q.jsxs("div",{className:"relative h-[60vh] overflow-hidden",children:[Q.jsxs("div",{className:"absolute inset-0",children:[Q.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"})]}),Q.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8",children:Q.jsxs("div",{className:"max-w-7xl mx-auto",children:[Q.jsx("span",{className:"inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4",children:t.category}),Q.jsx("h1",{className:"text-4xl sm:text-6xl font-bold text-white mb-4",children:t.title}),Q.jsxs("div",{className:"flex items-center text-gray-300 text-sm",children:[Q.jsx("span",{children:t.author}),Q.jsx("span",{className:"mx-2",children:"•"}),Q.jsx("span",{children:t.date})]})]})})]}),Q.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:Q.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[Q.jsx("div",{className:"lg:col-span-2",children:Q.jsx("article",{className:"prose prose-invert prose-lg max-w-none",children:Q.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})})}),Q.jsx("div",{className:"space-y-8",children:Q.jsx(UT,{className:"sticky top-24 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 min-h-[600px] flex items-center justify-center"})})]})})]})}function BT({title:e,description:t,image:n}){return Q.jsxs("div",{className:"relative h-[40vh] overflow-hidden",children:[Q.jsxs("div",{className:"absolute inset-0",children:[Q.jsx("img",{src:n,alt:e,className:"w-full h-full object-cover"}),Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"})]}),Q.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8",children:Q.jsxs("div",{className:"max-w-7xl mx-auto",children:[Q.jsx("h1",{className:"text-4xl sm:text-6xl font-bold text-white mb-4",children:e}),Q.jsx("p",{className:"text-xl text-gray-300 max-w-3xl",children:t})]})})]})}function $T({children:e}){return Q.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:Q.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[Q.jsx("div",{className:"lg:col-span-2",children:Q.jsx("div",{className:"space-y-8 text-white",children:e})}),Q.jsx("div",{className:"space-y-8",children:Q.jsxs("div",{className:"bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6",children:[Q.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Quick Links"}),Q.jsxs("ul",{className:"space-y-2",children:[Q.jsx("li",{children:Q.jsx("a",{href:"#",className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:"Implementation Guide"})}),Q.jsx("li",{children:Q.jsx("a",{href:"#",className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:"Best Practices"})}),Q.jsx("li",{children:Q.jsx("a",{href:"#",className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:"Success Stories"})})]})]})})]})})}function qT(){const e=Gh();return V.useEffect((()=>{window.scrollTo(0,0)}),[e]),Q.jsxs("div",{className:"pt-16",children:[Q.jsx(BT,{title:"XR Educational Resources",description:"Comprehensive guides, tools, and materials for implementing XR technology in education.",image:OT}),Q.jsxs($T,{children:[Q.jsx("p",{className:"text-2xl font-light leading-relaxed",children:"The integration of XR technology in education represents a paradigm shift in how we approach teaching and learning. By leveraging immersive experiences, educators can create unprecedented opportunities for student engagement and comprehension. Our curated collection of resources serves as a comprehensive guide for institutions looking to embrace this transformative technology."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"From virtual field trips to interactive 3D models, XR technology opens up new possibilities for experiential learning. Students can explore historical sites, conduct virtual science experiments, or practice complex procedures in a safe, controlled environment. These hands-on experiences foster deeper understanding and retention of subject matter, while developing crucial digital literacy skills for the future."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"The successful implementation of XR in education requires careful planning, appropriate infrastructure, and well-trained educators. Our resources provide detailed guidance on hardware selection, software evaluation, curriculum integration, and best practices for classroom management in XR-enhanced learning environments. We also address important considerations such as accessibility, student safety, and measuring learning outcomes in immersive environments."})]})]})}function HT(){const e=Gh();return V.useEffect((()=>{window.scrollTo(0,0)}),[e]),Q.jsxs("div",{className:"pt-16",children:[Q.jsx(BT,{title:"XR Education Case Studies",description:"Real-world examples of successful XR implementation in educational settings.",image:LT}),Q.jsxs($T,{children:[Q.jsx("p",{className:"text-2xl font-light leading-relaxed",children:"Our collection of case studies showcases innovative applications of XR technology across diverse educational contexts. From K-12 classrooms to higher education institutions, these real-world examples demonstrate the transformative impact of immersive learning experiences. Each case study provides detailed insights into implementation strategies, challenges encountered, and measurable outcomes achieved."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"One particularly notable example comes from a high school physics program that implemented virtual reality labs. Students showed a 40% improvement in understanding complex concepts when compared to traditional teaching methods. The immersive nature of VR allowed them to visualize and interact with abstract phenomena, making theoretical concepts tangible and easier to grasp."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"These success stories also highlight the importance of proper training and support systems. Educational institutions that invested in comprehensive teacher training and technical support reported smoother adoption processes and better learning outcomes. The case studies provide valuable lessons learned and best practices that can help other institutions avoid common pitfalls and accelerate their XR implementation journey."})]})]})}function WT(){const e=Gh();return V.useEffect((()=>{window.scrollTo(0,0)}),[e]),Q.jsxs("div",{className:"pt-16",children:[Q.jsx(BT,{title:"XR Educational Tools",description:"Cutting-edge tools and platforms for creating immersive learning experiences.",image:MT}),Q.jsxs($T,{children:[Q.jsx("p",{className:"text-2xl font-light leading-relaxed",children:"The landscape of XR educational tools is rapidly evolving, offering educators an expanding array of options for creating immersive learning experiences. From user-friendly content creation platforms to sophisticated development tools, these resources enable teachers to craft engaging lessons that leverage the full potential of spatial computing and extended reality technologies."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"Modern XR tools emphasize accessibility and ease of use, allowing educators to focus on pedagogical objectives rather than technical complexities. Many platforms now offer drag-and-drop interfaces, pre-built templates, and extensive asset libraries that simplify the creation of virtual environments and interactive experiences. This democratization of XR content creation is accelerating the adoption of immersive learning across educational institutions."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"The integration of analytics and assessment capabilities within these tools provides valuable insights into student engagement and learning outcomes. Educators can track progress, identify areas where students may be struggling, and adjust their teaching strategies accordingly. This data-driven approach, combined with the immersive nature of XR, creates a powerful framework for personalized learning and improved educational outcomes."})]})]})}function KT(){const e=Gh();return V.useEffect((()=>{window.scrollTo(0,0)}),[e]),Q.jsxs("div",{className:"pt-16",children:[Q.jsx(BT,{title:"XR Education Research",description:"Latest studies and findings on the impact of XR technology in education.",image:jT}),Q.jsxs($T,{children:[Q.jsx("p",{className:"text-2xl font-light leading-relaxed",children:"Current research in XR education reveals promising trends in student engagement, knowledge retention, and skill development. Studies consistently show that immersive learning experiences can lead to deeper understanding and longer-lasting retention of complex concepts. The multi-sensory nature of XR creates stronger neural connections, making learning more effective and memorable."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"Cognitive science research has demonstrated that spatial computing and virtual environments can enhance spatial awareness, problem-solving abilities, and creative thinking. The ability to manipulate 3D objects and experience abstract concepts in tangible ways helps students develop a more intuitive understanding of complex subjects. This is particularly evident in STEM fields, where visualization of mathematical concepts and scientific phenomena can be challenging with traditional teaching methods."}),Q.jsx("p",{className:"text-xl leading-relaxed",children:"Ongoing studies are also exploring the social and emotional aspects of XR learning environments. Research indicates that collaborative virtual spaces can foster stronger peer connections and improve communication skills, even in remote learning situations. These findings are particularly relevant as educational institutions adapt to hybrid learning models and seek ways to maintain student engagement across different learning modalities."})]})]})}function GT({isOpen:e,onClose:t,program:n}){const[r,i]=V.useState(""),[s,a]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState("");if(!e||!n)return null;return Q.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[Q.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),Q.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full",children:[Q.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:Q.jsx(Ud,{className:"h-6 w-6"})}),Q.jsxs("div",{className:"text-center mb-6",children:[Q.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:n.title}),Q.jsxs("p",{className:"text-gray-300",children:["Duration: ",n.duration]}),Q.jsx("p",{className:"text-gray-300 mt-2",children:"Fill out this form to express your interest in this program. Our team will contact you with more information."})]}),Q.jsxs("form",{onSubmit:e=>{e.preventDefault(),t()},className:"space-y-4",children:[Q.jsx("input",{type:"text",value:s,onChange:e=>a(e.target.value),placeholder:"Your name",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Q.jsx("input",{type:"email",value:r,onChange:e=>i(e.target.value),placeholder:"Your email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Q.jsx("input",{type:"text",value:o,onChange:e=>l(e.target.value),placeholder:"School/Institution name",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Q.jsx("textarea",{value:u,onChange:e=>c(e.target.value),placeholder:"Any specific questions or requirements?",rows:4,className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"}),Q.jsx("button",{type:"submit",className:"w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors",children:"Request Information"})]})]})]})}function QT(){const e=Gh(),[t,n]=V.useState(null);V.useEffect((()=>{window.scrollTo(0,0)}),[e]);const r=[{id:"quick-start",title:"Quick Start: Spatial Web & XR in Education",description:"Fast-track introduction to implementing spatial computing and XR in your school. Perfect for administrators and teachers looking to begin their journey into the future of education.",duration:"3 hours",icon:Od},{id:"certification",title:"Spatial Web Teaching Certification",description:"Comprehensive certification program covering spatial computing, VR/AR/XR methodologies, classroom management, and content creation.",duration:"12 weeks",icon:Md},{id:"workshops",title:"Immersive Learning Workshop Series",description:"Hands-on workshops focused on implementing spatial web and XR technology across various subjects.",duration:"4 weeks",icon:Pd},{id:"leadership",title:"Spatial Computing Leadership in Education",description:"Advanced program for educational leaders implementing spatial web and XR programs at institutional level.",duration:"8 weeks",icon:jd},{id:"cognitive",title:"Cognitive Science of Spatial Learning",description:"Deep dive into the neuroscience and psychology of spatial computing and immersive learning experiences.",duration:"6 weeks",icon:Nd}];return Q.jsxs("div",{className:"pt-16",children:[Q.jsxs("div",{className:"relative h-[40vh] overflow-hidden",children:[Q.jsxs("div",{className:"absolute inset-0",children:[Q.jsx("img",{src:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",alt:"Professional Development",className:"w-full h-full object-cover"}),Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"})]}),Q.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8",children:Q.jsxs("div",{className:"max-w-7xl mx-auto",children:[Q.jsx("h1",{className:"text-4xl sm:text-6xl font-bold text-white mb-4",children:"Professional Development"}),Q.jsx("p",{className:"text-xl text-gray-300 max-w-3xl",children:"Comprehensive training programs for educators entering the world of spatial computing and XR education."})]})})]}),Q.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:Q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map((e=>{const t=e.icon;return Q.jsxs("button",{onClick:()=>n(e),className:"relative p-6 text-left rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300",children:[Q.jsx(FT,{}),Q.jsx(t,{className:"h-8 w-8 text-cyan-400 mb-4"}),Q.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e.title}),Q.jsx("p",{className:"text-gray-400 mb-4",children:e.description}),Q.jsxs("span",{className:"text-cyan-400 font-medium",children:["Duration: ",e.duration]})]},e.id)}))})}),Q.jsx(GT,{isOpen:!!t,onClose:()=>n(null),program:t||void 0})]})}function XT(){const[e]=xd(),[t,n]=V.useState("processing");return V.useEffect((()=>{const t=e.get("email"),r=e.get("token");if(!t||!r)return void n("error");const i=NT(t,r);n(i?"success":"error")}),[e]),Q.jsx("div",{className:"min-h-screen bg-black text-white flex items-center justify-center p-4",children:Q.jsxs("div",{className:"max-w-md w-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center",children:[Q.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Newsletter Unsubscribe"}),"processing"===t&&Q.jsx("p",{className:"text-gray-300",children:"Processing your unsubscribe request..."}),"success"===t&&Q.jsxs(Q.Fragment,{children:[Q.jsx("p",{className:"text-gray-300 mb-6",children:"You have been successfully unsubscribed from our newsletter. We're sorry to see you go!"}),Q.jsx(bd,{to:"/",className:"inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors",children:"Return to Homepage"})]}),"error"===t&&Q.jsxs(Q.Fragment,{children:[Q.jsx("p",{className:"text-gray-300 mb-6",children:"Sorry, we couldn't process your unsubscribe request. The link might be invalid or expired."}),Q.jsx(bd,{to:"/",className:"inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors",children:"Return to Homepage"})]})]})})}function YT(){return Q.jsx(gd,{children:Q.jsxs(Sd,{children:[Q.jsx(PT,{}),Q.jsxs(cd,{children:[Q.jsx(ld,{path:"/",element:Q.jsx(VT,{})}),Q.jsx(ld,{path:"/article/:slug",element:Q.jsx(zT,{})}),Q.jsx(ld,{path:"/resources",element:Q.jsx(qT,{})}),Q.jsx(ld,{path:"/case-studies",element:Q.jsx(HT,{})}),Q.jsx(ld,{path:"/tools",element:Q.jsx(WT,{})}),Q.jsx(ld,{path:"/research",element:Q.jsx(KT,{})}),Q.jsx(ld,{path:"/professional-development",element:Q.jsx(QT,{})}),Q.jsx(ld,{path:"/unsubscribe",element:Q.jsx(XT,{})})]})]})})}th(document.getElementById("root")).render(Q.jsx(V.StrictMode,{children:Q.jsx(YT,{})}));
