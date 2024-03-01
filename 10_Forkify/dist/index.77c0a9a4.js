let e;var t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g,m,y,b,_=globalThis;function w(e){return e&&e.__esModule?e.default:e}var k={},E={},S=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
S("object"==typeof self&&self)||S("object"==typeof _&&_)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||E||Function("return this")();var j={},$={};// Detect IE8's incomplete defineProperty implementation
j=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},L={};L=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;O=L?F.bind(F):function(){return F.apply(F,arguments)};var M={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;a=x&&!M.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:M;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},q={},I={},H=Function.prototype,N=H.call,A=L&&H.bind.bind(N,N),C={},D=(I=L?A:function(e){return function(){return N.apply(e,arguments)}})({}.toString),R=I("".slice);C=function(e){return R(D(e),8,-1)};var W=Object,z=I("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
q=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?z(e,""):W(e)}:W;var G={},U={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
U=function(e){return null==e};var B=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
G=function(e){if(U(e))throw new B("Can't call method on "+e);return e},T=function(e){return q(G(e))};var J={},Y={},Q={},V={},K={},X="object"==typeof document&&document.all,Z=(K={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
V=K.IS_HTMLDDA?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e};var ee=K.all;Q=K.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:V(e)||e===ee}:function(e){return"object"==typeof e?null!==e:V(e)};var et={},er={};er=function(e,t){var r;return arguments.length<2?(r=E[e],V(r)?r:void 0):E[e]&&E[e][t]};var en={};en=I({}.isPrototypeOf);var ei={},eo={},ea={},es={};es="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ec=E.process,eu=E.Deno,el=ec&&ec.versions||eu&&eu.version,ed=el&&el.v8;ed&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(c=(s=ed.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!c&&es&&(!(s=es.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=es.match(/Chrome\/(\d+)/))&&(c=+s[1]),ea=c;var ep=E.String;ei=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eo=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ep(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ea&&ea<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ef=Object;et=ei?function(e){return"symbol"==typeof e}:function(e){var t=er("Symbol");return V(t)&&en(t.prototype,ef(e))};var eh={},ev={},eg={},em=String;eg=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;// `Assert: IsCallable(argument) is true`
ev=function(e){if(V(e))return e;throw new ey(eg(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eh=function(e,t){var r=e[t];return U(r)?void 0:ev(r)};var eb={},e_=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eb=function(e,t){var r,n;if("string"===t&&V(r=e.toString)&&!Q(n=O(r,e))||V(r=e.valueOf)&&!Q(n=O(r,e))||"string"!==t&&V(r=e.toString)&&!Q(n=O(r,e)))return n;throw new e_("Can't convert object to primitive value")};var ew={},ek={};ek=!1;var eE={},eS={},ej=Object.defineProperty;eS=function(e,t){try{ej(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var e$="__core-js_shared__";eE=E[e$]||eS(e$,{}),(ew=function(e,t){return eE[e]||(eE[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.2",mode:ek?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eO={},eL={},eF=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eL=function(e){return eF(G(e))};var eM=I({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eO=Object.hasOwn||function(e,t){return eM(eL(e),t)};var ex={},eP=0,eT=Math.random(),eq=I(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eP+eT,36)};var eI=E.Symbol,eH=ew("wks"),eN=ei?eI.for||eI:eI&&eI.withoutSetter||ex,eA=TypeError,eC=(eO(eH,t="toPrimitive")||(eH[t]=eo&&eO(eI,t)?eI[t]:eN("Symbol."+t)),eH[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Y=function(e,t){if(!Q(e)||et(e))return e;var r,n=eh(e,eC);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!Q(r)||et(r))return r;throw new eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
J=function(e){var t=Y(e,"string");return et(t)?t:t+""};var eD={},eR={},eW=E.document,ez=Q(eW)&&Q(eW.createElement);eR=function(e){return ez?eW.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eD=!j&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eG=Object.getOwnPropertyDescriptor;o=j?eG:function(e,t){if(e=T(e),t=J(t),eD)try{return eG(e,t)}catch(e){}if(eO(e,t))return P(!O(a,e,t),e[t])};var eU={},eB={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eB=j&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eJ={},eY=String,eQ=TypeError;// `Assert: Type(argument) is Object`
eJ=function(e){if(Q(e))return e;throw new eQ(eY(e)+" is not an object")};var eV=TypeError,eK=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";u=j?eB?function(e,t,r){if(eJ(e),t=J(t),eJ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(eJ(e),t=J(t),eJ(r),eD)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=j?function(e,t,r){return u(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e4={},e3=Function.prototype,e9=j&&Object.getOwnPropertyDescriptor,e7=eO(e3,"name")&&(!j||j&&e9(e3,"name").configurable),e8={},e5=I(Function.toString);V(eE.inspectSource)||(eE.inspectSource=function(e){return e5(e)}),e8=eE.inspectSource;var e6={},te={},tt=E.WeakMap;te=V(tt)&&/native code/.test(String(tt));var tr={},tn=ew("keys");tr=function(e){return tn[e]||(tn[e]=ex(e))};var ti={};ti={};var to="Object already initialized",ta=E.TypeError,ts=E.WeakMap;if(te||eE.state){var tc=eE.state||(eE.state=new ts);/* eslint-disable no-self-assign -- prototype methods protection */tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,/* eslint-enable no-self-assign -- prototype methods protection */l=function(e,t){if(tc.has(e))throw new ta(to);return t.facade=e,tc.set(e,t),t},d=function(e){return tc.get(e)||{}},p=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,l=function(e,t){if(eO(e,tu))throw new ta(to);return t.facade=e,eU(e,tu,t),t},d=function(e){return eO(e,tu)?e[tu]:{}},p=function(e){return eO(e,tu)}}var tl=(e6={set:l,get:d,has:p,enforce:function(e){return p(e)?d(e):l(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=d(t)).type!==e)throw new ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=e6.get,tf=String,th=Object.defineProperty,tv=I("".slice),tg=I("".replace),tm=I([].join),ty=j&&!$(function(){return 8!==th(function(){},"length",{value:8}).length}),tb=String(String).split("String"),t_=e4=function(e,t,r){"Symbol("===tv(tf(t),0,7)&&(t="["+tg(tf(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e7&&e.name!==t)&&(j?th(e,"name",{value:t,configurable:!0}):e.name=t),ty&&r&&eO(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?j&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eO(n,"source")||(n.source=tm(tb,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=t_(function(){return V(this)&&tp(this).source||e8(this)},"toString"),e2=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(V(r)&&e4(r,o,n),n.global)i?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:u(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tw={},tk={},tE={},tS={},tj={},t$={},tO=Math.ceil,tL=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t$=Math.trunc||function(e){var t=+e;return(t>0?tL:tO)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:t$(t)};var tF=Math.max,tM=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tS=function(e,t){var r=tj(e);return r<0?tF(r+t,0):tM(r,t)};var tx={},tP={},tT=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tP=function(e){return e>0?tT(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tx=function(e){return tP(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tq=function(e){return function(t,r,n){var i,o=T(t),a=tx(o),s=tS(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tI={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tq(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tq(!1)}.indexOf,tH=I([].push);tE=function(e,t){var r,n=T(e),i=0,o=[];for(r in n)!eO(ti,r)&&eO(n,r)&&tH(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eO(n,r=t[i++])&&(~tI(o,r)||tH(o,r));return o};var tN=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tE(e,tN)},h=Object.getOwnPropertySymbols;var tA=I([].concat);// all object keys, includes non-enumerable and symbols
tk=er("Reflect","ownKeys")||function(e){var t=f(eJ(e));return h?tA(t,h(e)):t},tw=function(e,t,r){for(var n=tk(t),i=0;i<n.length;i++){var a=n[i];eO(e,a)||r&&eO(r,a)||u(e,a,o(t,a))}};var tC={},tD=/#|\.prototype\./,tR=function(e,t){var r=tz[tW(e)];return r===tU||r!==tG&&(V(t)?$(t):!!t)},tW=tR.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tz=tR.data={},tG=tR.NATIVE="N",tU=tR.POLYFILL="P";tC=tR,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/k=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?E:l?E[c]||eS(c,{}):(E[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tC(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tw(a,i)}(e.sham||i&&i.sham)&&eU(a,"sham",!0),e2(r,n,a,e)}};var tB={},tJ={},tY=Function.prototype,tQ=tY.apply,tV=tY.call;// eslint-disable-next-line es/no-reflect -- safe
tJ="object"==typeof Reflect&&Reflect.apply||(L?tV.bind(tQ):function(){return tV.apply(tQ,arguments)});var tK={},tX={},tZ=(tX=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===C(e))return I(e)})(tX.bind);// optional / simple context binding
tK=function(e,t){return ev(e),void 0===t?e:L?tZ(e,t):function(){return e.apply(t,arguments)}};var t0={};t0=er("document","documentElement");var t1={};t1=I([].slice);var t2={},t4=TypeError;t2=function(e,t){if(e<t)throw new t4("Not enough arguments");return e};var t3={};// eslint-disable-next-line redos/no-vulnerable -- safe
t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(es);var t9={};t9="process"===C(E.process);var t7=E.setImmediate,t8=E.clearImmediate,t5=E.process,t6=E.Dispatch,re=E.Function,rt=E.MessageChannel,rr=E.String,rn=0,ri={},ro="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
v=E.location});var ra=function(e){if(eO(ri,e)){var t=ri[e];delete ri[e],t()}},rs=function(e){return function(){ra(e)}},rc=function(e){ra(e.data)},ru=function(e){// old engines have not location.origin
E.postMessage(rr(e),v.protocol+"//"+v.host)};t7&&t8||(t7=function(e){t2(arguments.length,1);var t=V(e)?e:re(e),r=t1(arguments,1);return ri[++rn]=function(){tJ(t,void 0,r)},g(rn),rn},t8=function(e){delete ri[e]},t9?g=function(e){t5.nextTick(rs(e))}:t6&&t6.now?g=function(e){t6.now(rs(e))}:rt&&!t3?(y=(m=new rt).port2,m.port1.onmessage=rc,g=tK(y.postMessage,y)):E.addEventListener&&V(E.postMessage)&&!E.importScripts&&v&&"file:"!==v.protocol&&!$(ru)?(g=ru,E.addEventListener("message",rc,!1)):g=ro in eR("script")?function(e){t0.appendChild(eR("script"))[ro]=function(){t0.removeChild(this),ra(e)}}:function(e){setTimeout(rs(e),0)});var rl=(tB={set:t7,clear:t8}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
k({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rl},{clearImmediate:rl});var rd=tB.set,rp={},rf={};/* global Bun -- Deno case */rf="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rh=E.Function,rv=/MSIE .\./.test(es)||rf&&((r=E.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rp=function(e,t){var r=t?2:1;return rv?function(n,i/* , ...arguments */){var o=t2(arguments.length,1)>r,a=V(n)?n:rh(n),s=o?t1(arguments,r):[],c=o?function(){tJ(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rg=E.setImmediate?rp(rd,!1):rd;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
k({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rg},{setImmediate:rg});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rm}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const ry="https://forkify-api.herokuapp.com/api/v2/recipes/",rb="fade4ab7-0481-4db1-8793-5e8c2f670034",r_=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} : ${n.status}`);return i}catch(e){throw console.log(e),e}},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rk=function(e){let{recipe:t}=e.data;return{publisher:t.publisher,ingredients:t.ingredients,sourceUrl:t.source_url,image:t.image_url,title:t.title,servings:t.servings,cookingTime:t.cooking_time,id:t.id,...t.key&&{key:t.key}}},rE=async e=>{try{let t=await r_(`${ry}${e}?key=${rb}`);rw.recipe=rk(t),rw.bookmarks.some(t=>t.id===e)?rw.recipe.bookmarked=!0:rw.recipe.bookmarked=!1}catch(e){//console.log(e);
throw Error(e)}},rS=async function(e){try{rw.search.query=e;let t=await r_(`${ry}?search=${e}&key=${rb}`);rw.search.page=1,rw.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}}))}catch(e){//console.log(e);
throw Error(e)}},rj=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},r$=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rO=function(){localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},rL=function(e){//add bookmark
rw.bookmarks.push(e),e.id===rw.recipe.id&&(rw.recipe.bookmarked=!0),rO()},rF=function(e){//delete bookmark
let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),e===rw.recipe.id&&(rw.recipe.bookmarked=!1),rO()};(e=localStorage.getItem("bookmarks"))&&(rw.bookmarks=JSON.parse(e));const rM=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format. Please use correct format (quantity,unit,description )");let[r,n,i]=t;return{quantity:r?Number(r):null,unit:n,description:i}}),r={publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,title:e.title,servings:+e.servings,cooking_time:+e.cookingTime,id:e.id,ingredients:t},n=await r_(`${ry}?key=${rb}`,r);rw.recipe=rk(n),rL(rw.recipe)}catch(e){throw e}};var rx={};rx=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(n(this.denominator)){var e=i(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(n(this.numerator)){var e=i(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},b=Fraction;class rP{_data;/**
   *
   * @param {*} data
   * @param {*} render
   * @returns
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/w(rx)}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=` 
        <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/w(rx)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=` 
        <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/w(rx)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_generateMarkupIngridient(){return this._data.ingredients.map(e=>` <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/w(rx)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>`).join(" ")}}class rT extends rP{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src=${this._data.image} alt=${this._data.title} class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
      </figure>

      <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/w(rx)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/w(rx)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${/*@__PURE__*/w(rx)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${/*@__PURE__*/w(rx)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${/*@__PURE__*/w(rx)}#icon-user"></use>
        </svg>
     </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${/*@__PURE__*/w(rx)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._generateMarkupIngridient()}
       
      </ul>
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href=${this._data.sourceUrl} 
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/w(rx)}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`}_generateMarkupIngridient(){return this._data.ingredients.map(e=>` <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/w(rx)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new b(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>`).join(" ")}addHandlerRender(e){["hashchange","load"].forEach(t=>{window.addEventListener(t,e)})}}var rq=new rT;class rI{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHanlderSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rH=new rI,rN=new class extends rP{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
       <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
         <figure class="preview__fig">
           <img src=${this._data.image} alt="Test" />
         </figure>
         <div class="preview__data">
           <h4 class="preview__title">${this._data.title}</h4>
           <p class="preview__publisher">${this._data.publisher}</p>
           <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/w(rx)}#icon-user"></use>
            </svg>
        </div>
         </div>
         
       </a>
    </li>`}};class rA extends rP{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ";_message="";_generateMarkup(){//console.log(this._data);
return this._data.map(e=>rN.render(e,!1)).join("");//callback(curr,i,arr)
}}var rC=new rA;class rD extends rP{_parentElement=document.querySelector(".pagination");_errorMessage="No recipes found for your query! Please try again ";_message="";addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//Page 1 and there are other pages
1===e&&t>1?` <button data-goto=${e+1} class="btn--inline pagination__btn--next">
                <span>${e+1}</span>
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/w(rx)}#icon-arrow-right"></use>
                </svg>
              </button>`:e===t&&t>1?`<button data-goto=${e-1} class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/w(rx)}#icon-arrow-left"></use>
                </svg>
                <span>${e-1}</span>
              </button>`:e<t?`
              <button data-goto=${e-1} class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/w(rx)}#icon-arrow-left"></use>
                </svg>
                <span>${e-1}</span>
              </button>
              <button data-goto=${e+1} class="btn--inline pagination__btn--next">
                <span>${e+1}</span>
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/w(rx)}#icon-arrow-right"></use>
                </svg>
              </button>   
    `:"")}}var rR=new rD;class rW extends rP{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it !";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){//console.log(this._data);
return this._data.map(e=>rN.render(e,!1)).join("");//callback(curr,i,arr)
}}var rz=new rW;class rG extends rP{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was successfully uploaded";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow();// this._addHandlerUpload();
}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var rU=new rG;///////////////////////////////////////
const rB=async function(){try{//get hash/ recipeID from URL
let e=location.hash?.slice(1);if(!e)return;rq.renderSpinner(),rC.update(rj()),rz.update(rw.bookmarks),//2) Loading Recipe
await rE(e);let{recipe:t}=rw;rq.render(rw.recipe)}catch(e){console.log(e),rq.renderError()}},rJ=async function(){try{//1) Get search query
let e=rH.getQuery();if(!e)return;rC.renderSpinner(),//2) Load results
await rS(e),rC.render(rj()),rR.render(rw.search)}catch(e){console.log(e)}},rY=async function(e){try{rU.renderSpinner(),//Upload recipe data
await rM(e),rq.render(rw.recipe),rU.renderMessage(),rz.render(rw.bookmarks),//change ID in url
window.history.pushState(null,"",`#${rw.recipe.id}`),//close Modal
setTimeout(function(){rU.toggleWindow()},2500)}catch(e){rU.renderError(e.message),console.log(e)}};rz.addHandlerRender(function(){rz.render(rw.bookmarks)}),rq.addHandlerRender(rB),rq.addHandlerUpdateServings(function(e){//update servings in state
r$(e),rq.update(rw.recipe)}),rq.addHandlerAddBookmark(function(){rw.recipe.bookmarked?rF(rw.recipe.id):rL(rw.recipe),rq.update(rw.recipe),rz.render(rw.bookmarks)}),rH.addHanlderSearch(rJ),rR.addHandlerClick(function(e){rC.render(rj(e)),rR.render(rw.search)}),rU.addHandlerUpload(rY);//# sourceMappingURL=index.77c0a9a4.js.map

//# sourceMappingURL=index.77c0a9a4.js.map
