import{F as L}from"./immer-9093c292.js";import{c as X,a as F,b as U,d as k}from"./redux-cf6e261f.js";import{t as R}from"./redux-thunk-ef899f4c.js";var N=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}(),z=globalThis&&globalThis.__generator||function(r,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function d(a){return function(l){return u([a,l])}}function u(a){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,o=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){e.label=a[1];break}if(a[0]===6&&e.label<i[1]){e.label=i[1],i=a;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(a);break}i[2]&&e.ops.pop(),e.trys.pop();continue}a=t.call(r,e)}catch(l){a=[6,l],o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},S=globalThis&&globalThis.__spreadArray||function(r,t){for(var e=0,n=t.length,o=r.length;e<n;e++,o++)r[o]=t[e];return r},B=Object.defineProperty,H=Object.defineProperties,J=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,V=function(r,t,e){return t in r?B(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e},g=function(r,t){for(var e in t||(t={}))K.call(t,e)&&V(r,e,t[e]);if(x)for(var n=0,o=x(t);n<o.length;n++){var e=o[n];Q.call(t,e)&&V(r,e,t[e])}return r},C=function(r,t){return H(r,J(t))},Y=function(r,t,e){return new Promise(function(n,o){var i=function(u){try{d(e.next(u))}catch(a){o(a)}},s=function(u){try{d(e.throw(u))}catch(a){o(a)}},d=function(u){return u.done?n(u.value):Promise.resolve(u.value).then(i,s)};d((e=e.apply(r,t)).next())})},Z=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?k:k.apply(null,arguments)};function $(r){if(typeof r!="object"||r===null)return!1;var t=Object.getPrototypeOf(r);if(t===null)return!0;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return t===e}function w(r,t){function e(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return g(g({type:r,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:r,payload:n[0]}}return e.toString=function(){return""+r},e.type=r,e.match=function(n){return n.type===r},e}var ee=function(r){N(t,r);function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=r.apply(this,e)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.prototype.concat.apply(this,e)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length===1&&Array.isArray(e[0])?new(t.bind.apply(t,S([void 0],e[0].concat(this)))):new(t.bind.apply(t,S([void 0],e.concat(this))))},t}(Array),re=function(r){N(t,r);function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=r.apply(this,e)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.prototype.concat.apply(this,e)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length===1&&Array.isArray(e[0])?new(t.bind.apply(t,S([void 0],e[0].concat(this)))):new(t.bind.apply(t,S([void 0],e.concat(this))))},t}(Array);function te(r){return typeof r=="boolean"}function ne(){return function(t){return ae(t)}}function ae(r){r===void 0&&(r={});var t=r.thunk,e=t===void 0?!0:t;r.immutableCheck,r.serializableCheck,r.actionCreatorCheck;var n=new ee;return e&&(te(e)?n.push(R):n.push(R.withExtraArgument(e.extraArgument))),n}var oe=!0;function pe(r){var t=ne(),e=r||{},n=e.reducer,o=n===void 0?void 0:n,i=e.middleware,s=i===void 0?t():i,d=e.devTools,u=d===void 0?!0:d,a=e.preloadedState,l=a===void 0?void 0:a,v=e.enhancers,f=v===void 0?void 0:v,c;if(typeof o=="function")c=o;else if($(o))c=X(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=s;typeof p=="function"&&(p=p(t));var O=F.apply(void 0,p),_=k;u&&(_=Z(g({trace:!oe},typeof u=="object"&&u)));var j=new re(O),y=j;Array.isArray(f)?y=S([O],f):typeof f=="function"&&(y=f(j));var T=_.apply(void 0,y);return U(c,l,T)}var ie="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ue=function(r){r===void 0&&(r=21);for(var t="",e=r;e--;)t+=ie[Math.random()*64|0];return t},le=["name","message","stack","code"],M=function(){function r(t,e){this.payload=t,this.meta=e}return r}(),W=function(){function r(t,e){this.payload=t,this.meta=e}return r}(),ce=function(r){if(typeof r=="object"&&r!==null){for(var t={},e=0,n=le;e<n.length;e++){var o=n[e];typeof r[o]=="string"&&(t[o]=r[o])}return t}return{message:String(r)}};(function(){function r(t,e,n){var o=w(t+"/fulfilled",function(a,l,v,f){return{payload:a,meta:C(g({},f||{}),{arg:v,requestId:l,requestStatus:"fulfilled"})}}),i=w(t+"/pending",function(a,l,v){return{payload:void 0,meta:C(g({},v||{}),{arg:l,requestId:a,requestStatus:"pending"})}}),s=w(t+"/rejected",function(a,l,v,f,c){return{payload:f,error:(n&&n.serializeError||ce)(a||"Rejected"),meta:C(g({},c||{}),{arg:v,requestId:l,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"})}}),d=typeof AbortController<"u"?AbortController:function(){function a(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return a.prototype.abort=function(){},a}();function u(a){return function(l,v,f){var c=n!=null&&n.idGenerator?n.idGenerator(a):ue(),p=new d,O;function _(y){O=y,p.abort()}var j=function(){return Y(this,null,function(){var y,T,m,E,q,P,D;return z(this,function(b){switch(b.label){case 0:return b.trys.push([0,4,,5]),E=(y=n==null?void 0:n.condition)==null?void 0:y.call(n,a,{getState:v,extra:f}),se(E)?[4,E]:[3,2];case 1:E=b.sent(),b.label=2;case 2:if(E===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return q=new Promise(function(h,A){return p.signal.addEventListener("abort",function(){return A({name:"AbortError",message:O||"Aborted"})})}),l(i(c,a,(T=n==null?void 0:n.getPendingMeta)==null?void 0:T.call(n,{requestId:c,arg:a},{getState:v,extra:f}))),[4,Promise.race([q,Promise.resolve(e(a,{dispatch:l,getState:v,extra:f,requestId:c,signal:p.signal,abort:_,rejectWithValue:function(h,A){return new M(h,A)},fulfillWithValue:function(h,A){return new W(h,A)}})).then(function(h){if(h instanceof M)throw h;return h instanceof W?o(h.payload,c,a,h.meta):o(h,c,a)})])];case 3:return m=b.sent(),[3,5];case 4:return P=b.sent(),m=P instanceof M?s(null,c,a,P.payload,P.meta):s(P,c,a),[3,5];case 5:return D=n&&!n.dispatchConditionRejection&&s.match(m)&&m.meta.condition,D||l(m),[2,m]}})})}();return Object.assign(j,{abort:_,requestId:c,arg:a,unwrap:function(){return j.then(fe)}})}}return Object.assign(u,{pending:i,rejected:s,fulfilled:o,typePrefix:t})}return r.withTypes=function(){return r},r})();function fe(r){if(r.meta&&r.meta.rejectedWithValue)throw r.payload;if(r.error)throw r.error;return r.payload}function se(r){return r!==null&&typeof r=="object"&&typeof r.then=="function"}var I="listenerMiddleware";w(I+"/add");w(I+"/removeAll");w(I+"/remove");var G;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);L();export{pe as c};