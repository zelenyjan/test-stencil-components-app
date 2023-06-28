import{a as xo,b as wo,H as Po}from"./index-dd1e5e8a.js";function E(e){return e=e||[],Array.isArray(e)?e:[e]}function b(e){return`[Vaadin.Router] ${e}`}function Lo(e){if(typeof e!="object")return String(e);const o=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return o==="Object"||o==="Array"?`${o} ${JSON.stringify(e)}`:o}const O="module",S="nomodule",B=[O,S];function R(e){if(!e.match(/.+\.[m]?js$/))throw new Error(b(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function io(e){if(!e||!m(e.path))throw new Error(b('Expected route config to be an object with a "path" string property, or an array of such objects'));const o=e.bundle,t=["component","redirect","bundle"];if(!y(e.action)&&!Array.isArray(e.children)&&!y(e.children)&&!D(o)&&!t.some(n=>m(e[n])))throw new Error(b(`Expected route config "${e.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(o)if(m(o))R(o);else if(B.some(n=>n in o))B.forEach(n=>n in o&&R(o[n]));else throw new Error(b('Expected route bundle to include either "'+S+'" or "'+O+'" keys, or both'));e.redirect&&["bundle","component"].forEach(n=>{n in e&&console.warn(b(`Route config "${e.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function I(e){E(e).forEach(o=>io(o))}function U(e,o){let t=document.head.querySelector('script[src="'+e+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",e),o===O?t.setAttribute("type",O):o===S&&t.setAttribute(S,""),t.async=!0),new Promise((n,s)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,n(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),s(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function _o(e){return m(e)?U(e):Promise.race(B.filter(o=>o in e).map(o=>U(e[o],o)))}function x(e,o){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:o}))}function D(e){return typeof e=="object"&&!!e}function y(e){return typeof e=="function"}function m(e){return typeof e=="string"}function no(e){const o=new Error(b(`Page not found (${e.pathname})`));return o.context=e,o.code=404,o}const k=new class{};function jo(e){const o=e.port,t=e.protocol,i=t==="http:"&&o==="80"||t==="https:"&&o==="443"?e.hostname:e.host;return`${t}//${i}`}function F(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let o=e.target;const t=e.composedPath?e.composedPath():e.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){o=a;break}}for(;o&&o.nodeName.toLowerCase()!=="a";)o=o.parentNode;if(!o||o.nodeName.toLowerCase()!=="a"||o.target&&o.target.toLowerCase()!=="_self"||o.hasAttribute("download")||o.hasAttribute("router-ignore")||o.pathname===window.location.pathname&&o.hash!==""||(o.origin||jo(o))!==window.location.origin)return;const{pathname:s,search:i,hash:r}=o;x("go",{pathname:s,search:i,hash:r})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const qo={activate(){window.document.addEventListener("click",F)},inactivate(){window.document.removeEventListener("click",F)}},Eo=/Trident/.test(navigator.userAgent);Eo&&!y(window.PopStateEvent)&&(window.PopStateEvent=function(e,o){o=o||{};var t=document.createEvent("Event");return t.initEvent(e,!!o.bubbles,!!o.cancelable),t.state=o.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Z(e){if(e.state==="vaadin-router-ignore")return;const{pathname:o,search:t,hash:n}=window.location;x("go",{pathname:o,search:t,hash:n})}const Oo={activate(){window.addEventListener("popstate",Z)},inactivate(){window.removeEventListener("popstate",Z)}};var z=vo,So=C,Do=Mo,Vo=ro,To=co,ao="/",so="./",Bo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function C(e,o){for(var t=[],n=0,s=0,i="",r=o&&o.delimiter||ao,c=o&&o.delimiters||so,a=!1,l;(l=Bo.exec(e))!==null;){var u=l[0],p=l[1],v=l.index;if(i+=e.slice(s,v),s=v+u.length,p){i+=p[1],a=!0;continue}var g="",N=e[s],bo=l[2],fo=l[3],ho=l[4],P=l[5];if(!a&&i.length){var V=i.length-1;c.indexOf(i[V])>-1&&(g=i[V],i=i.slice(0,V))}i&&(t.push(i),i="",a=!1);var yo=g!==""&&N!==void 0&&N!==g,ko=P==="+"||P==="*",zo=P==="?"||P==="*",A=g||r,H=fo||ho;t.push({name:bo||n++,prefix:g,delimiter:A,optional:zo,repeat:ko,partial:yo,pattern:H?Co(H):"[^"+f(A)+"]+?"})}return(i||s<e.length)&&t.push(i+e.substr(s)),t}function Mo(e,o){return ro(C(e,o))}function ro(e){for(var o=new Array(e.length),t=0;t<e.length;t++)typeof e[t]=="object"&&(o[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(n,s){for(var i="",r=s&&s.encode||encodeURIComponent,c=0;c<e.length;c++){var a=e[c];if(typeof a=="string"){i+=a;continue}var l=n?n[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(u=r(l[p],a),!o[c].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(p===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=r(String(l),a),!o[c].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');i+=a.prefix+u;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function f(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Co(e){return e.replace(/([=!:$/()])/g,"\\$1")}function lo(e){return e&&e.sensitive?"":"i"}function No(e,o){if(!o)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)o.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Ao(e,o,t){for(var n=[],s=0;s<e.length;s++)n.push(vo(e[s],o,t).source);return new RegExp("(?:"+n.join("|")+")",lo(t))}function Ho(e,o,t){return co(C(e,t),o,t)}function co(e,o,t){t=t||{};for(var n=t.strict,s=t.start!==!1,i=t.end!==!1,r=f(t.delimiter||ao),c=t.delimiters||so,a=[].concat(t.endsWith||[]).map(f).concat("$").join("|"),l=s?"^":"",u=e.length===0,p=0;p<e.length;p++){var v=e[p];if(typeof v=="string")l+=f(v),u=p===e.length-1&&c.indexOf(v[v.length-1])>-1;else{var g=v.repeat?"(?:"+v.pattern+")(?:"+f(v.delimiter)+"(?:"+v.pattern+"))*":v.pattern;o&&o.push(v),v.optional?v.partial?l+=f(v.prefix)+"("+g+")?":l+="(?:"+f(v.prefix)+"("+g+"))?":l+=f(v.prefix)+"("+g+")"}}return i?(n||(l+="(?:"+r+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+r+"(?="+a+"))?"),u||(l+="(?="+r+"|"+a+")")),new RegExp(l,lo(t))}function vo(e,o,t){return e instanceof RegExp?No(e,o):Array.isArray(e)?Ao(e,o,t):Ho(e,o,t)}z.parse=So;z.compile=Do;z.tokensToFunction=Vo;z.tokensToRegExp=To;const{hasOwnProperty:Ro}=Object.prototype,M=new Map;M.set("|false",{keys:[],pattern:/(?:)/});function $(e){try{return decodeURIComponent(e)}catch{return e}}function Io(e,o,t,n,s){t=!!t;const i=`${e}|${t}`;let r=M.get(i);if(!r){const l=[];r={keys:l,pattern:z(e,l,{end:t,strict:e===""})},M.set(i,r)}const c=r.pattern.exec(o);if(!c)return null;const a=Object.assign({},s);for(let l=1;l<c.length;l++){const u=r.keys[l-1],p=u.name,v=c[l];(v!==void 0||!Ro.call(a,p))&&(u.repeat?a[p]=v?v.split(u.delimiter).map($):[]:a[p]=v&&$(v))}return{path:c[0],keys:(n||[]).concat(r.keys),params:a}}function uo(e,o,t,n,s){let i,r,c=0,a=e.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!i&&(i=Io(a,o,!u,n,s),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;c<u.length;){if(!r){const v=u[c];v.parent=e;let g=i.path.length;g>0&&o.charAt(g)==="/"&&(g+=1),r=uo(v,o.substr(g),t,i.keys,i.params)}const p=r.next(l);if(!p.done)return{done:!1,value:p.value};r=null,c++}return{done:!0}}}}function Uo(e){if(y(e.route.action))return e.route.action(e)}function Fo(e,o){let t=o;for(;t;)if(t=t.parent,t===e)return!0;return!1}function Zo(e){let o=`Path '${e.pathname}' is not properly resolved due to an error.`;const t=(e.route||{}).path;return t&&(o+=` Resolution had failed on route: '${t}'`),o}function $o(e,o){const{route:t,path:n}=o;if(t&&!t.__synthetic){const s={path:n,route:t};if(!e.chain)e.chain=[];else if(t.parent){let i=e.chain.length;for(;i--&&e.chain[i].route&&e.chain[i].route!==t.parent;)e.chain.pop()}e.chain.push(s)}}class w{constructor(o,t={}){if(Object(o)!==o)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Uo,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(o)?{path:"",__children:o,parent:null,__synthetic:!0}:o,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(o){I(o);const t=[...E(o)];this.root.__children=t}addRoutes(o){return I(o),this.root.__children.push(...E(o)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(o){const t=Object.assign({},this.context,m(o)?{pathname:o}:o),n=uo(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let i=null,r=null,c=t;function a(l,u=i.value.route,p){const v=p===null&&i.value.route;return i=r||n.next(v),r=null,!l&&(i.done||!Fo(u,i.value.route))?(r=i,Promise.resolve(k)):i.done?Promise.reject(no(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,i.value),$o(c,i.value),Promise.resolve(s(c)).then(g=>g!=null&&g!==k?(c.result=g.result||g,c):a(l,u,g)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=Zo(c);if(l?console.warn(u):l=new Error(u),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(o,t){return new URL(o,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(o){if(!this.baseUrl)return o;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(o,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}w.pathToRegexp=z;const{pathToRegexp:X}=w,K=new Map;function po(e,o,t){const n=o.name||o.component;if(n&&(e.has(n)?e.get(n).push(o):e.set(n,[o])),Array.isArray(t))for(let s=0;s<t.length;s++){const i=t[s];i.parent=o,po(e,i,i.__children||i.children)}}function W(e,o){const t=e.get(o);if(t&&t.length>1)throw new Error(`Duplicate route with name "${o}". Try seting unique 'name' route properties.`);return t&&t[0]}function G(e){let o=e.path;return o=Array.isArray(o)?o[0]:o,o!==void 0?o:""}function Xo(e,o={}){if(!(e instanceof w))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,s)=>{let i=W(t,n);if(!i&&(t.clear(),po(t,e.root,e.root.__children),i=W(t,n),!i))throw new Error(`Route "${n}" not found`);let r=K.get(i.fullPath);if(!r){let a=G(i),l=i.parent;for(;l;){const g=G(l);g&&(a=g.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=X.parse(a),p=X.tokensToFunction(u),v=Object.create(null);for(let g=0;g<u.length;g++)m(u[g])||(v[u[g].name]=!0);r={toPath:p,keys:v},K.set(a,r),i.fullPath=a}let c=r.toPath(s,o)||"/";if(o.stringifyQueryParams&&s){const a={},l=Object.keys(s);for(let p=0;p<l.length;p++){const v=l[p];r.keys[v]||(a[v]=s[v])}const u=o.stringifyQueryParams(a);u&&(c+=u.charAt(0)==="?"?u:`?${u}`)}return c}}let Q=[];function Ko(e){Q.forEach(o=>o.inactivate()),e.forEach(o=>o.activate()),Q=e}const Wo=e=>{const o=getComputedStyle(e).getPropertyValue("animation-name");return o&&o!=="none"},Go=(e,o)=>{const t=()=>{e.removeEventListener("animationend",t),o()};e.addEventListener("animationend",t)};function J(e,o){return e.classList.add(o),new Promise(t=>{if(Wo(e)){const n=e.getBoundingClientRect(),s=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${s}`),Go(e,()=>{e.classList.remove(o),e.removeAttribute("style"),t()})}else e.classList.remove(o),t()})}const Qo=256;function T(e){return e!=null}function Jo(e){const o=Object.assign({},e);return delete o.next,o}function d({pathname:e="",search:o="",hash:t="",chain:n=[],params:s={},redirectFrom:i,resolver:r},c){const a=n.map(l=>l.route);return{baseUrl:r&&r.baseUrl||"",pathname:e,search:o,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:s,redirectFrom:i,getUrl:(l={})=>j(h.pathToRegexp.compile(go(a))(Object.assign({},s,l)),r)}}function Y(e,o){const t=Object.assign({},e.params);return{redirect:{pathname:o,from:e.pathname,params:t}}}function Yo(e,o){o.location=d(e);const t=e.chain.map(n=>n.route).indexOf(e.route);return e.chain[t].element=o,o}function _(e,o,t){if(y(e))return e.apply(t,o)}function oo(e,o,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return _(t[e],o,t)}}function oe(e,o){if(!Array.isArray(e)&&!D(e))throw new Error(b(`Incorrect "children" value for the route ${o.path}: expected array or object, but got ${e}`));o.__children=[];const t=E(e);for(let n=0;n<t.length;n++)io(t[n]),o.__children.push(t[n])}function L(e){if(e&&e.length){const o=e[0].parentNode;for(let t=0;t<e.length;t++)o.removeChild(e[t])}}function j(e,o){const t=o.__effectiveBaseUrl;return t?o.constructor.__createUrl(e.replace(/^\//,""),t).pathname:e}function go(e){return e.map(o=>o.path).reduce((o,t)=>t.length?o.replace(/\/$/,"")+"/"+t.replace(/^\//,""):o,"")}class h extends w{constructor(o,t){const n=document.head.querySelector("base"),s=n&&n.getAttribute("href");super([],Object.assign({baseUrl:s&&w.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=r=>this.__resolveRoute(r);const i=h.NavigationTrigger;h.setTriggers.apply(h,Object.keys(i).map(r=>i[r])),this.ready=Promise.resolve(o),this.location=d({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(o),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(o){const t=o.route;let n=Promise.resolve();y(t.children)&&(n=n.then(()=>t.children(Jo(o))).then(i=>{!T(i)&&!y(t.children)&&(i=t.children),oe(i,t)}));const s={redirect:i=>Y(o,i),component:i=>{const r=document.createElement(i);return this.__createdByRouter.set(r,!0),r}};return n.then(()=>{if(this.__isLatestRender(o))return _(t.action,[o,s],t)}).then(i=>{if(T(i)&&(i instanceof HTMLElement||i.redirect||i===k))return i;if(m(t.redirect))return s.redirect(t.redirect);if(t.bundle)return _o(t.bundle).then(()=>{},()=>{throw new Error(b(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(T(i))return i;if(m(t.component))return s.component(t.component)})}setOutlet(o){o&&this.__ensureOutlet(o),this.__outlet=o}getOutlet(){return this.__outlet}setRoutes(o,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(o),t||this.__onNavigationEvent(),this.ready}render(o,t){const n=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},m(o)?{pathname:o}:o,{__renderId:n});return this.ready=this.resolve(s).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const r=this.__previousContext;if(i===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=d(i),t&&this.__updateBrowserHistory(i,n===1),x("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,r),this.__previousContext=i,this.location;this.__addAppearingContent(i,r);const c=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,r),c.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),L(this.__outlet&&this.__outlet.children),this.location=d(Object.assign(s,{resolver:this})),x("error",Object.assign({router:this,error:i},s)),i}),this.ready}__fullyResolveChain(o,t=o){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const i=n!==t?n:o,c=j(go(n.chain),n.resolver)===n.pathname,a=(l,u=l.route,p)=>l.next(void 0,u,p).then(v=>v===null||v===k?c?l:u.parent!==null?a(l,u.parent,v):v:v);return a(n).then(l=>{if(l===null||l===k)throw no(i);return l&&l!==k&&l!==n?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(o){const t=o.result;return t instanceof HTMLElement?(Yo(o,t),Promise.resolve(o)):t.redirect?this.__redirect(t.redirect,o.__redirectCount,o.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(b(`Invalid route resolution result for path "${o.pathname}". Expected redirect object or HTML element, but got: "${Lo(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(o){return this.__runOnBeforeCallbacks(o).then(t=>t===this.__previousContext||t===o?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(o){const t=this.__previousContext||{},n=t.chain||[],s=o.chain;let i=Promise.resolve();const r=()=>({cancel:!0}),c=a=>Y(o,a);if(o.__divergedChainIndex=0,o.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,s.length)&&!(n[a].route!==s[a].route||n[a].path!==s[a].path&&n[a].element!==s[a].element||!this.__isReusableElement(n[a].element,s[a].element));a=++o.__divergedChainIndex);if(o.__skipAttach=s.length===n.length&&o.__divergedChainIndex==s.length&&this.__isReusableElement(o.result,t.result),o.__skipAttach){for(let a=s.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,o,{prevent:r},n[a]);for(let a=0;a<s.length;a++)i=this.__runOnBeforeEnterCallbacks(i,o,{prevent:r,redirect:c},s[a]),n[a].element.location=d(o,n[a].route)}else for(let a=n.length-1;a>=o.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,o,{prevent:r},n[a])}if(!o.__skipAttach)for(let a=0;a<s.length;a++)a<o.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=d(o,n[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,o,{prevent:r,redirect:c},s[a]),s[a].element&&(s[a].element.location=d(o,s[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=o.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,o.__redirectCount,o.__renderId)}return o})}__runOnBeforeLeaveCallbacks(o,t,n,s){const i=d(t);return o.then(r=>{if(this.__isLatestRender(t))return oo("onBeforeLeave",[i,n,this],s.element)(r)}).then(r=>{if(!(r||{}).redirect)return r})}__runOnBeforeEnterCallbacks(o,t,n,s){const i=d(t,s.route);return o.then(r=>{if(this.__isLatestRender(t))return oo("onBeforeEnter",[i,n,this],s.element)(r)})}__isReusableElement(o,t){return o&&t?this.__createdByRouter.get(o)&&this.__createdByRouter.get(t)?o.localName===t.localName:o===t:!1}__isLatestRender(o){return o.__renderId===this.__lastStartedRenderId}__redirect(o,t,n){if(t>Qo)throw new Error(b(`Too many redirects when rendering ${o.from}`));return this.resolve({pathname:this.urlForPath(o.pathname,o.params),redirectFrom:o.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(o=this.__outlet){if(!(o instanceof Node))throw new TypeError(b(`Expected router outlet to be a valid DOM Node (but got ${o})`))}__updateBrowserHistory({pathname:o,search:t="",hash:n=""},s){if(window.location.pathname!==o||window.location.search!==t||window.location.hash!==n){const i=s?"replaceState":"pushState";window.history[i](null,document.title,o+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(o,t){let n=this.__outlet;for(let s=0;s<o.__divergedChainIndex;s++){const i=t&&t.chain[s].element;if(i)if(i.parentNode===n)o.chain[s].element=i,n=i;else break}return n}__addAppearingContent(o,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(o,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(i=>this.__addedByRouter.get(i)&&i!==o.result);let s=n;for(let i=o.__divergedChainIndex;i<o.chain.length;i++){const r=o.chain[i].element;r&&(s.appendChild(r),this.__addedByRouter.set(r,!0),s===n&&this.__appearingContent.push(r),s=r)}}__removeDisappearingContent(){this.__disappearingContent&&L(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(L(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(o,t){if(t)for(let n=t.chain.length-1;n>=o.__divergedChainIndex&&this.__isLatestRender(o);n--){const s=t.chain[n].element;if(s)try{const i=d(o);_(s.onAfterLeave,[i,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&L(s.children)}}}__runOnAfterEnterCallbacks(o){for(let t=o.__divergedChainIndex;t<o.chain.length&&this.__isLatestRender(o);t++){const n=o.chain[t].element||{},s=d(o,o.chain[t].route);_(n.onAfterEnter,[s,{},o.resolver],n)}}__animateIfNeeded(o){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],s=[],i=o.chain;let r;for(let c=i.length;c>0;c--)if(i[c-1].route.animate){r=i[c-1].route.animate;break}if(t&&n&&r){const c=D(r)&&r.leave||"leaving",a=D(r)&&r.enter||"entering";s.push(J(t,c)),s.push(J(n,a))}return Promise.all(s).then(()=>o)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(o){const{pathname:t,search:n,hash:s}=o?o.detail:window.location;m(this.__normalizePathname(t))&&(o&&o.preventDefault&&o.preventDefault(),this.render({pathname:t,search:n,hash:s},!0))}static setTriggers(...o){Ko(o)}urlForName(o,t){return this.__urlForName||(this.__urlForName=Xo(this)),j(this.__urlForName(o,t),this)}urlForPath(o,t){return j(h.pathToRegexp.compile(o)(t),this)}static go(o){const{pathname:t,search:n,hash:s}=m(o)?this.__createUrl(o,"http://a"):o;return x("go",{pathname:t,search:n,hash:s})}}const ee=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,q=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function te(){function e(){return!0}return mo(e)}function ie(){try{return ne()?!0:ae()?q?!se():!te():!1}catch{return!1}}function ne(){return localStorage.getItem("vaadin.developmentmode.force")}function ae(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function se(){return!!(q&&Object.keys(q).map(o=>q[o]).filter(o=>o.productionMode).length>0)}function mo(e,o){if(typeof e!="function")return;const t=ee.exec(e.toString());if(t)try{e=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(o)}window.Vaadin=window.Vaadin||{};const eo=function(e,o){if(window.Vaadin.developmentMode)return mo(e,o)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ie());function re(){}const le=function(){if(typeof eo=="function")return eo(re)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});le();h.NavigationTrigger={POPSTATE:Oo,CLICK:qo};class ce extends HTMLElement{connectedCallback(){this.innerHTML=""}}customElements.get("home-page")===void 0&&customElements.define("home-page",ce);class ve extends HTMLElement{connectedCallback(){this.innerHTML=`

		<h4>Accordion - extra small</h4>
		<div class="container-view">
			<gov-accordion size="xs">
				<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Kontaktní osoby" disabled is-expanded>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Působnost v agendách">
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Zřizované organizace">
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br>
			<gov-accordion size="xs">
				<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Kontaktní osoby">
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Působnost v agendách">
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Zřizované organizace">
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<h4>Accordion - small</h4>
			<div class="container-view">
				<gov-accordion size="s">
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby" disabled is-expanded>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion size="s">
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<h4>Without border</h4>
				<gov-accordion size="s" no-border>
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>

			<h4>Accordion - medium (default)</h4>
			<div class="container-view">
				<gov-accordion>
					<gov-accordion-item trigger-tag="h1" label="Lorem ipsum dolor sit amet" disabled annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<gov-badge variant="primary" size="s" slot="suffix">super badge</gov-badge>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion>
					<gov-accordion-item trigger-tag="h1" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dictum consectetur. Sed posuere tellus in lobortis aliquam. Pellentesque a porttitor purus." is-expanded annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<gov-badge variant="primary" size="s" slot="suffix">super badge</gov-badge>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>

			<h4>Accordion - large</h4>
			<div class="container-view">
				<gov-accordion size="l">
					<gov-accordion-item trigger-tag="h1" label="Základní informace" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion size="l">
					<gov-accordion-item trigger-tag="h1" label="Základní informace" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>




			<h4>Accordion Secondary - extra small</h4>
			<div class="container-view">
				<gov-accordion size="xs" variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" disabled>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion size="xs" variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>
			<h4>Accordion Secondary - small</h4>
			<div class="container-view">
				<gov-accordion size="s" variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon" disabled>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion size="s" variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Font Awesome Icon">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>

			<h4>Accordion Secondary - medium (default)</h4>
			<div class="container-view">
				<gov-accordion variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Lorem ipsum dolor sit amet">
						<gov-badge variant="primary" size="s" slot="suffix">super badge</gov-badge>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dictum consectetur. Sed posuere tellus in lobortis aliquam. Pellentesque a porttitor purus." is-expanded>
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<gov-badge variant="primary" size="s" slot="suffix">super badge</gov-badge>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>

			<h4>Accordion Secondary - large</h4>
			<div class="container-view">
				<gov-accordion size="l" variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Základní informace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
				<br>
				<gov-accordion size="l" variant="secondary">
					<gov-accordion-item trigger-tag="h1" label="Základní informace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Kontaktní osoby">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Působnost v agendách">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
					<gov-accordion-item label="Zřizované organizace">
						<gov-icon slot="icon" name="info"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-accordion-item>
				</gov-accordion>
			</div>


		`}}customElements.get("accordion-page")===void 0&&customElements.define("accordion-page",ve);class ue extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Alert</h2>

		<gov-alert variant="secondary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert variant="warning" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Warning - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert variant="error" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert variant="success" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert variant="primary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>

		<h3>Inverse</h3>
		<br>
		<gov-alert inverse="TRUE" variant="secondary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert inverse="True" variant="warning" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Warning - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert inverse="1" variant="error" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert inverse="true" variant="success" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		<br>
		<gov-alert inverse="true" variant="primary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-alert>
		`}}customElements.get("alert-page")===void 0&&customElements.define("alert-page",ue);class pe extends HTMLElement{connectedCallback(){this.innerHTML=`
			<h1>Badges</h1>
			<h4>Badges close</h4>
			<div class="container-view">
			<gov-badge variant="primary" size="s">
				Not clickable S
				<gov-button slot="right" variant="primary" type="solid" wcag-label="Zavřít vše" size="s">
					<gov-icon slot="right-icon" name="x-lg"></gov-icon>
				</gov-button>
			</gov-badge>
			<gov-badge variant="primary" size="m">
				Not clickable M
				<gov-button slot="right" variant="primary" type="solid" wcag-label="Zavřít vše" size="m">
					<gov-icon slot="right-icon" name="x-lg"></gov-icon>
				</gov-button>
			</gov-badge>
			<gov-badge variant="primary" size="l">
				Not clickable L
				<gov-button slot="right" variant="primary" type="solid" wcag-label="Zavřít vše" size="l">
					<gov-icon slot="right-icon" name="x-lg"></gov-icon>
				</gov-button>
			</gov-badge>
			<gov-badge variant="primary" size="xl">
				Not clickable XL
				<gov-button slot="right" variant="primary" type="solid" wcag-label="Zavřít vše" size="xl">
					<gov-icon slot="right-icon" name="x-lg"></gov-icon>
				</gov-button>
			</gov-badge>
			</div>
			<h4>Badges - primary (default)</h4>
			<div class="container-view">
				<gov-badge variant="primary" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="primary" size="xs" inverse>
					Badge
				</gov-badge>
				<gov-badge variant="primary" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Not clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="primary" href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Normal href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="primary" disabled href="http://www.example.com/" target="_blank">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Disabled with href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="primary" size="l" href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="primary" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
						X-Large Primary
				</gov-badge>
			</div>
			<h4>Badges - primary (outlined)</h4>
			<div class="container-view">
				<gov-badge variant="primary" type="outlined" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="primary" tag="a" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Primary
				</gov-badge>
				<gov-badge variant="primary" tag="button" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Primary
				</gov-badge>
				<gov-badge variant="primary" tag="a" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Primary
				</gov-badge>
				<gov-badge variant="primary" tag="button" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Primary
				</gov-badge>
			</div>
			<hr />

			<h4>Badges - secondary (default)</h4>
			<div class="container-view">
				<gov-badge variant="secondary" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="secondary" size="xs" inverse>
					Badge
				</gov-badge>
				<gov-badge variant="secondary" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Not clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge tag="button" variant="secondary">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Normal href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="secondary" disabled href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Disabled with href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="secondary" size="l" tag="a">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="secondary" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
						X-Large secondary
				</gov-badge>
			</div>
			<h4>Badges - secondary (outlined)</h4>
			<div class="container-view">
				<gov-badge variant="secondary" tag="a" type="outlined" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="secondary" tag="a" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small secondary
				</gov-badge>
				<gov-badge variant="secondary" tag="button" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal secondary
				</gov-badge>
				<gov-badge variant="secondary" tag="a" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large secondary
				</gov-badge>
				<gov-badge variant="secondary" tag="button" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large secondary
				</gov-badge>
			</div>
			<hr />

			<h4>Badges - success (default)</h4>
			<div class="container-view">
				<gov-badge variant="success" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="success" size="xs" inverse>
					Badge
				</gov-badge>
				<gov-badge variant="success" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Not clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge tag="button" variant="success">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Normal href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="success" disabled href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Disabled with href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="success" size="l" tag="a">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="success" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
						X-Large success
				</gov-badge>
			</div>
			<h4>Badges - success (outlined)</h4>
			<div class="container-view">
				<gov-badge variant="success" tag="a" type="outlined" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="success" tag="a" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small success
				</gov-badge>
				<gov-badge variant="success" tag="button" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal success
				</gov-badge>
				<gov-badge variant="success" tag="a" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large success
				</gov-badge>
				<gov-badge variant="success" tag="button" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large success
				</gov-badge>
			</div>
			<hr />

			<h4>Badges - warning (default)</h4>
			<div class="container-view">
				<gov-badge variant="warning" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="warning" size="xs" inverse>
					Badge
				</gov-badge>
				<gov-badge variant="warning" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Not clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge tag="button" variant="warning">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Normal href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="warning" disabled href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Disabled with href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="warning" size="l" tag="a">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="warning" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
						X-Large warning
				</gov-badge>
			</div>
			<h4>Badges - warning (outlined)</h4>
			<div class="container-view">
				<gov-badge variant="warning" tag="a" type="outlined" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="warning" tag="a" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small warning
				</gov-badge>
				<gov-badge variant="warning" tag="button" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal warning
				</gov-badge>
				<gov-badge variant="warning" tag="a" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large warning
				</gov-badge>
				<gov-badge variant="warning" tag="button" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large warning
				</gov-badge>
			</div>
			<hr />

			<h4>Badges - error (default)</h4>
			<div class="container-view">
				<gov-badge variant="error" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="error" size="xs" inverse>
					Badge
				</gov-badge>
				<gov-badge variant="error" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Not clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge tag="button" variant="error">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Normal href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="error" disabled href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Disabled with href
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="error" size="l" href="http://www.example.com/">
					<gov-icon slot="left-icon" name="info"></gov-icon>
						Clickable
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-badge>
				<gov-badge variant="error" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
						X-Large error
				</gov-badge>
			</div>
			<h4>Badges - error (outlined)</h4>
			<div class="container-view">
				<gov-badge variant="error" tag="a" type="outlined" size="xs">
					Badge
				</gov-badge>
				<gov-badge variant="error" tag="a" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small error
				</gov-badge>
				<gov-badge variant="error" tag="button" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal error
				</gov-badge>
				<gov-badge variant="error" tag="a" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large error
				</gov-badge>
				<gov-badge variant="error" tag="button" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large error
				</gov-badge>
			</div>
		`}}customElements.get("badge-page")===void 0&&customElements.define("badge-page",pe);class ge extends HTMLElement{connectedCallback(){this.innerHTML=`
			<h1>Buttons</h1>
			<h4>Buttons - primary (default)</h4>
			<div class="container-view">
				<gov-button variant="primary" size="s" href="http://localhost:3333/button">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br><br>
				<gov-button variant="primary" size="s" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="primary" size="s" href="http://localhost:3333/button" loading="1" disabled>
					Odeslat
				</gov-button>
				<gov-button variant="primary" href="http://localhost:3333/button" loading="0">
					Odeslat
				</gov-button>
				<gov-button variant="primary" href="http://localhost:3333/button" loading="1" disabled>
					Odeslat
				</gov-button>
				<gov-button variant="primary" size="l" loading="true">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Odeslat
				</gov-button>
				<gov-button variant="primary" size="l" loading="true" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Odeslat
				</gov-button>
				<gov-button variant="primary" size="xl" loading="false">
					Odeslat
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" size="xl" loading="true" disabled>
					Odeslat
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="primary" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="primary" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="primary" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="primary" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="primary" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="primary" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<h4>Buttons - primary (expanded)</h4>
			<div class="container-view">
				<gov-button variant="primary" expanded="true">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Expanded
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
			</div>
			<h4>Buttons - primary (inversed)</h4>
			<div class="container-view gov-bg--primary-600">
				<gov-button inverse variant="primary" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - primary (outlined)</h4>
			<div class="container-view">
				<gov-button variant="primary" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="primary" type="outlined" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="primary" type="outlined" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - primary (outlined inversed)</h4>
			<div class="container-view gov-bg--primary-600">
				<gov-button inverse variant="primary" type="outlined" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="outlined" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="outlined" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="outlined" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="outlined" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="outlined" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>

			<h4>Buttons - primary (base)</h4>
			<div class="container-view">
				<gov-button variant="primary" type="base" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="base" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="base" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="base" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="primary" type="base" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="primary" type="base" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - primary (base inversed)</h4>
			<div class="container-view gov-bg--primary-600">
				<gov-button inverse variant="primary" type="base" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="base" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="base" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="base" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="base" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="base" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - primary (link)</h4>
			<div class="container-view">
				<gov-button variant="primary" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="primary" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="primary" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="primary" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - primary (link inversed)</h4>
			<div class="container-view gov-bg--primary-600">
				<gov-button inverse variant="primary" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Primary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="primary" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Primary
					<gov-icon inverse slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button inverse variant="primary" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button inverse variant="primary" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (default)</h4>
			<div class="container-view">
				<gov-button variant="secondary" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="secondary" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="secondary" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
				<br>
				<gov-button variant="secondary" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (inversed)</h4>
			<div class="container-view gov-bg--secondary-800">
				<gov-button inverse variant="secondary" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (outlined)</h4>
			<div class="container-view">
				<gov-button variant="secondary" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="secondary" type="outlined" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="secondary" type="outlined" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (outlined inversed)</h4>
			<div class="container-view gov-bg--secondary-800">
				<gov-button inverse variant="secondary" type="outlined" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="outlined" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="outlined" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="outlined" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="outlined" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="outlined" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (base)</h4>
			<div class="container-view">
				<gov-button variant="secondary" type="base" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="base" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="base" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="base" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="secondary" type="base" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="secondary" type="base" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (base inversed)</h4>
			<div class="container-view gov-bg--secondary-800">
				<gov-button inverse variant="secondary" type="base" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="base" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="base" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="base" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="base" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="base" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (link)</h4>
			<div class="container-view">
				<gov-button variant="secondary" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="secondary" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="secondary" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="secondary" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - secondary (link inversed)</h4>
			<div class="container-view gov-bg--secondary-800">
				<gov-button inverse variant="secondary" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large Secondary
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="secondary" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large Secondary
					<gov-icon inverse slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button inverse variant="secondary" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button inverse variant="secondary" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (default)</h4>
			<div class="container-view">
				<gov-button variant="warning" size="s" class="u-mr--medium u-mr-mobile--2xl u-mr-tablet--unset u-mr-portable--medium">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="warning" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="warning" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
				<br>
				<gov-button variant="warning" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="warning" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="warning" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="warning" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="warning" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="warning" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (inversed)</h4>
			<div class="container-view gov-bg--warning-500">
				<gov-button inverse variant="warning" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (outlined)</h4>
			<div class="container-view">
				<gov-button variant="warning" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="warning" type="outlined" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="warning" type="outlined" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (outlined inversed)</h4>
			<div class="container-view gov-bg--warning-500">
				<gov-button inverse variant="warning" type="outlined" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="outlined" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="outlined" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="outlined" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="outlined" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="outlined" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (base)</h4>
			<div class="container-view">
				<gov-button variant="warning" type="base" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="base" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="base" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="base" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="warning" type="base" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="warning" type="base" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (base inversed)</h4>
			<div class="container-view gov-bg--warning-500">
				<gov-button inverse variant="warning" type="base" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="base" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="base" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="base" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="base" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="base" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (link)</h4>
			<div class="container-view">
				<gov-button variant="warning" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="warning" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="warning" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="warning" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - warning (link inversed)</h4>
			<div class="container-view gov-bg--warning-500">
				<gov-button inverse variant="warning" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large warning
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="warning" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large warning
					<gov-icon inverse slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button inverse variant="warning" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button inverse variant="warning" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (default)</h4>
			<div class="container-view">
				<gov-button variant="success" size="s" class="u-mr--medium u-mr-mobile--2xl u-mr-tablet--unset u-mr-portable--medium">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="success" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="success" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
				<br>
				<gov-button variant="success" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="success" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="success" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="success" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="success" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="success" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (inversed)</h4>
			<div class="container-view gov-bg--success-500">
				<gov-button inverse variant="success" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (outlined)</h4>
			<div class="container-view">
				<gov-button variant="success" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="success" type="outlined" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="success" type="outlined" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (outlined inversed)</h4>
			<div class="container-view gov-bg--success-500">
				<gov-button inverse variant="success" type="outlined" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="outlined" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="outlined" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="outlined" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="outlined" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="outlined" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (base)</h4>
			<div class="container-view">
				<gov-button variant="success" type="base" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="base" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="base" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="base" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="success" type="base" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="success" type="base" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (base inversed)</h4>
			<div class="container-view gov-bg--success-500">
				<gov-button inverse variant="success" type="base" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="base" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="base" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="base" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="base" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="base" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (link)</h4>
			<div class="container-view">
				<gov-button variant="success" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="success" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="success" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="success" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - success (link inversed)</h4>
			<div class="container-view gov-bg--success-500">
				<gov-button inverse variant="success" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large success
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="success" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large success
					<gov-icon inverse slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button inverse variant="success" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button inverse variant="success" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (default)</h4>
			<div class="container-view">
				<gov-button variant="error" size="s" class="u-mr--medium u-mr-mobile--2xl u-mr-tablet--unset u-mr-portable--medium">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" size="xl" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="error" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="error" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
				<br>
				<gov-button variant="error" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="error" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="error" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="error" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="error" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button variant="error" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (inversed)</h4>
			<div class="container-view gov-bg--error-400">
				<gov-button inverse variant="error" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (outlined)</h4>
			<div class="container-view">
				<gov-button variant="error" type="outlined" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="outlined" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="outlined" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="outlined" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="error" type="outlined" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="error" type="outlined" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (outlined inversed)</h4>
			<div class="container-view gov-bg--error-400">
				<gov-button inverse variant="error" type="outlined" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="outlined" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="outlined" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="outlined" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="outlined" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="outlined" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (base)</h4>
			<div class="container-view">
				<gov-button variant="error" type="base" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="base" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="base" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="base" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="error" type="base" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="error" type="base" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (base inversed)</h4>
			<div class="container-view gov-bg--error-400">
				<gov-button inverse variant="error" type="base" size="s">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="base" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="base" size="l">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="base" size="xl" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="base" loading="false">
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="base" loading="true" disabled>
					<gov-icon slot="left-icon" name="x-lg"></gov-icon>
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (link)</h4>
			<div class="container-view">
				<gov-button variant="error" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button variant="error" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button variant="error" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button variant="error" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />

			<h4>Buttons - error (link inversed)</h4>
			<div class="container-view gov-bg--error-400">
				<gov-button inverse variant="error" type="link" size="s">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Small error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="link" disabled>
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Normal error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="link" size="l">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					Large error
					<gov-icon slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<gov-button inverse variant="error" type="link" disabled size="xl">
					<gov-icon slot="left-icon" name="info"></gov-icon>
					X-Large error
					<gov-icon inverse slot="right-icon" name="info"></gov-icon>
				</gov-button>
				<br>
				<gov-button inverse variant="error" type="link" href="http://localhost:3333/button" loading="false">
					Odeslat
				</gov-button>
				<gov-button inverse variant="error" type="link" href="http://localhost:3333/button" loading="true" disabled>
					Odeslat
				</gov-button>
			</div>
			<hr />
		`}}customElements.get("button-page")===void 0&&customElements.define("button-page",ge);class de extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Breadcrumbs</h2>

		<gov-breadcrumbs wcag-label="Drobečková navigace pro stránku Czech POINT">
			<ul>
				<li>
					<button>
					Domů
					</button>
				</li>
				<li>
					<gov-icon  name="chevron-right"></gov-icon>
					<a href="#">Kam dál</a>
				</li>
				<li>
					<gov-icon  name="chevron-right"></gov-icon>
					<a href="#">
					Český eGovernment
					</a>
				</li>
				<li>
					<gov-icon name="chevron-right"></gov-icon>
					<strong>Czech POINT</strong>
				</li>
			</ul>
		</gov-breadcrumbs>

		`}}customElements.get("breadcrumbs-page")===void 0&&customElements.define("breadcrumbs-page",de);class me extends HTMLElement{connectedCallback(){this.innerHTML=`

		<div style="max-width: 650px">
			<h2>Card</h2>

			<gov-card label="Fusce tellus odio, dapibus id fermentum quis" expanded collapsible class="gov-bg--success-100">
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
				</p>
			</gov-card>

			<br>

			<div style="height: 400px">
				<gov-card label="Fusce tellus odio, dapibus id fermentum quis" expanded collapsible>
					<p class="gov-color--secondary-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
					</p>
					<gov-button variant="primary" size="s" href="http://localhost:3333/button">
						Button
					</gov-button>
					<p slot="footer" class="gov-color--primary-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
					</p>
				</gov-card>
			</div>
			<br>
			<gov-card label="Fusce tellus odio, dapibus id fermentum quis">
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
				</p>
				<gov-button variant="primary" size="s" href="http://localhost:3333/button">
					Button
				</gov-button>
				<p slot="footer" color="gov-color--primary-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
				</p>
			</gov-card>
			<h3>Image slot</h3>
			<gov-card expanded>
				<img slot="img" src="https://picsum.photos/536/354" src="" alt="Obárzek" width="536" height="354">
				<p class="gov-text--l gov-color--secondary-800">
					<b>
						Commodo consequat.
					</b>
				</p>
				<p class="gov-color--secondary-700">
					Commodo consequat. Nullam rhoncus aliquam metus.
				</p>
				<p class="gov-color--secondary-700">
					<a href="#">Chci vědět více</a>
				</p>
			</gov-card>
			<h3>Shadow variant</h3>
			<gov-card expanded class="gov-box-shadow--m">
				<img slot="img" src="https://picsum.photos/536/354" src="" alt="Obárzek" width="536" height="354">
				<p class="gov-text--l gov-color--secondary-800">
					<b>
						Commodo consequat.
					</b>
				</p>
				<p class="gov-color--secondary-700">
					Commodo consequat. Nullam rhoncus aliquam metus.
				</p>
				<gov-button variant="primary" size="s" href="http://localhost:3333/button">
					Jak založit
				</gov-button>
				<gov-button variant="primary" type="outlined" size="s" href="http://localhost:3333/button">
					Zjistit více
				</gov-button>
			</gov-card>
			<h3>With icon</h3>
			<gov-card>
				<gov-icon name="car" type="complex"></gov-icon>
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Fusce tellus.
				</p>
				<gov-button variant="primary" type="outlined" size="s" href="http://localhost:3333/button">
					Learn more
				</gov-button>
			</gov-card>
			<h3>Horizontal orientation</h3>
			<gov-card promotion>
				<gov-icon slot="icon" name="car" type="complex"></gov-icon>
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Fusce tellus.
				</p>
				<gov-button slot="btn" variant="primary" type="outlined" size="s" href="http://localhost:3333/button">
					Learn more
				</gov-button>
			</gov-card>
		</div>

		`}}customElements.get("card-page")===void 0&&customElements.define("card-page",me);class be extends HTMLElement{connectedCallback(){this.innerHTML=`
			<gov-cookiebar>
				<h2 class="h4">Můžeme si u vás uložit cookies?</h2>

				<p>
					Co že to znamená? Cookies jsou malé datové soubory, které slouží např. k tomu, aby si web pamatoval vaše nastavení a to, co vás zajímá, nebo abychom jej zlepšovali . Pro ukládání různých typů cookies od vás potřebujeme souhlas. Web bude fungovat i bez souhlasu, s ním ale o něco lépe.
				</p>

				<gov-button variant="primary" slot="actions-primary">
					Souhlasím se všemi
				</gov-button>

				<gov-button variant="primary" type="outlined" slot="actions-primary">
					Odmítnout všechny
				</gov-button>

				<gov-button variant="primary" type="base" slot="actions-secondary">
					Podrobné nastavení
				</gov-button>
			</gov-cookiebar>
		`}}customElements.get("cookiebar-page")===void 0&&customElements.define("cookiebar-page",be);class fe extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Container</h2>

		<gov-container>
			<p>Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
		</gov-container>
		`}}customElements.get("container-page")===void 0&&customElements.define("container-page",fe);class he extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Empty</h2>

		<gov-empty>
			<gov-icon slot="icon" name="car" type="complex"></gov-icon>
			<p class="gov-text--2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
			</p>
			<p class="gov-text--l gov-color--secondary-700">
				Informace o tom, že je potřeba upřesnit vyhledávání
			</p>
			<gov-spacer size="l"></gov-spacer>
			<gov-button variant="primary">
				Přejít na jinou stránku
			</gov-button>
		</gov-empty>
		<gov-empty align="right">
			<gov-icon slot="icon" name="car" type="complex"></gov-icon>
			<p class="gov-text--2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
			</p>
			<p class="gov-text--l gov-color--secondary-700">
				Informace o tom, že je potřeba upřesnit vyhledávání
			</p>
		</gov-empty>
		<gov-empty align="center">
			<gov-icon slot="icon" name="car" type="complex"></gov-icon>
			<p class="gov-text--2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
			</p>
			<p class="gov-text--l gov-color--secondary-700">
				Informace o tom, že je potřeba upřesnit vyhledávání
			</p>
		</gov-empty>
		`}}customElements.get("empty-page")===void 0&&customElements.define("empty-page",he);class ye extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Error</h2>
		<gov-error-code>
			<gov-icon slot="icon" name="card-400" type="complex"></gov-icon>
			<h2 class="gov-text--6xl">Page Not Found</h2>
			<p class="gov-text--l">Sorry, the page you are looking for does not exist.</p>
		</gov-error-code>
		`}}customElements.get("error-page")===void 0&&customElements.define("error-page",ye);const to=e=>e&&e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),ke=(e,o)=>Math.floor(Math.random()*(o-e+1)+e),ze=()=>[{name:"Pepa"},{name:"Katak"},{name:"Tomáš"},{name:"Ludvík"},{name:"Anežda"},{name:"Xaviér"},{name:"Ondřej"},{name:"Mirek"},{name:"Zdeněk"},{name:"Monika"},{name:"Jirka"},{name:"Abrahám"},{name:"Lucie"},{name:"Emily"},{name:"Pavel"},{name:"Gustav"},{name:"Amálie"}];class xe extends HTMLElement{connectedCallback(){setTimeout(()=>{const o=document.getElementById("bagr"),t=document.getElementById("ba");t&&t.addEventListener("gov-change",function(n){console.log(n)}),o&&o.setSearchCallback(n=>new Promise(s=>{setTimeout(()=>{s(ze().filter(({name:i})=>i?to(i).toLowerCase().indexOf(to(n).toLowerCase())>-1:!1))},ke(100,1e3))}))},1e3),this.innerHTML=`
			<h2>
				Samostatné použití
			</h2>
			<gov-form-input placeholder="Co hledáte">
				<gov-icon slot="right-icon" name="info"></gov-icon>
			</gov-form-input>
			<br>
			<gov-form-select size="l" name="test-me">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<br>
			<gov-form-multi-select size="xl" id="ba" placeholder="Placeholder" wcag-described-by="me-and-you">
				<option value>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d" selected>Value D</option>
				<option value="e">Value E</option>
				<option value="f">Value F</option>
				<option value="g">Value G</option>
				<option value="h">Value H</option>
				<option value="i" selected>Value I</option>
			</gov-form-multi-select>
			<br>
			<gov-form-checkbox name="test-me-c" value="me" checked no-label></gov-form-checkbox>
			<gov-form-radio name="superRadio2" value="me1" no-label></gov-form-radio>
			<br>
			<gov-form-radio name="superRadio2" value="me2" checked no-label></gov-form-radio>
			<gov-form-switch name="test-me" value="me2" checked no-label></gov-form-switch>
			<gov-form-checkbox name="test-me-c" value="me" checked>
				<gov-form-label slot="label">Souhlasím</gov-form-label>
			</gov-form-checkbox>
			<gov-form-radio name="superRadio" value="me1">
				<gov-form-label slot="label">Souhlasím</gov-form-label>
			</gov-form-radio>
			<gov-form-radio name="superRadio" value="me2" checked>
				<gov-form-label slot="label">Souhlasím</gov-form-label>
			</gov-form-radio>
			<gov-form-switch name="test-me" value="me2" checked>
				<gov-form-label slot="label">Souhlasím</gov-form-label>
			</gov-form-switch>


			<h2>
				Date & Time input (nativní)
			</h2>
			<gov-form-input size="m" placeholder="Co hledáte" input-type="datetime-local"></gov-form-input>
			<br>
			<gov-form-input size="l" placeholder="Co hledáte" input-type="date"></gov-form-input>
			<br>
			<gov-form-input size="xl" placeholder="Co hledáte" input-type="time"></gov-form-input>

			<h2>Search</h2>
			<gov-form-control size="m">
				<gov-form-group>
					<gov-form-search name="test-me-c" value="me" checked>
						<gov-form-input slot="input" id="kapr" name="test-me" placeholder="Co hledáte"></gov-form-input>
						<gov-button slot="button" variant="primary" size="s">
							<gov-icon slot="left-icon" name="search"></gov-icon>
						</gov-button>
					</gov-form-search>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="l">
				<gov-form-group>
					<gov-form-search name="test-me-c" value="me" checked>
						<gov-form-input slot="input" id="kapr" name="test-me" placeholder="Co hledáte"></gov-form-input>
						<gov-button slot="button" variant="primary" size="m">
							Hledat
						</gov-button>
					</gov-form-search>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="xl">
				<gov-form-group>
					<gov-form-search name="test-me-c" value="me" checked variant="secondary">
						<gov-form-input slot="input" id="kapr" name="test-me" placeholder="Co hledáte"></gov-form-input>
						<gov-button slot="button" variant="secondary" size="l">
							Hledat
						</gov-button>
					</gov-form-search>
				</gov-form-group>
			</gov-form-control>

			<h2>File</h2>
			<div class="container-view">
			<h3>Normal</h3>
				<gov-form-control>
					<gov-form-label size="s" slot="top">Přidat přílohu *</gov-form-label>
					<gov-form-group>
						<gov-form-file name="test-me-c" expanded accept="image/*" max-file-size="1024">
							<p>
								<gov-button variant="primary" type="outlined" tabindex="-1">
									Nahrát soubor ze zařízení
								</gov-button>
							</p>
							<p class="gov-text--s">
								Podporované formáty XML, PDF, DOC
							</p>
						</gov-form-file>
					</gov-form-group>
				</gov-form-control>
				<br>

				<gov-form-control disabled>
					<gov-form-label size="s" slot="top">Přidat přílohu *</gov-form-label>
					<gov-form-group>
						<gov-form-file name="test-me-c">
							<p aria-hidden="true">
								<gov-button disabled variant="primary" type="outlined">
									<gov-icon slot="left-icon" name="upload"></gov-icon>
									Nahrát soubor ze zařízení
								</gov-button>
							</p>
							<p class="gov-text--s">
								Podporované formáty XML, PDF, DOC
							</p>
						</gov-form-file>
					</gov-form-group>
				</gov-form-control>
				<br>

				<gov-form-control invalid>
					<gov-form-label size="s" slot="top">Přidat přílohu *</gov-form-label>
					<gov-form-group>
						<gov-form-file name="test-me-c">
							<p>
								<gov-button variant="primary" type="outlined">
									<gov-icon slot="left-icon" name="upload"></gov-icon>
									Nahrát soubor ze zařízení
								</gov-button>
							</p>
							<p class="gov-text--s">
								Podporované formáty XML, PDF, DOC
							</p>
						</gov-form-file>
					</gov-form-group>
					<gov-form-message slot="bottom" variant="error">
						<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
						Required
					</gov-form-message>
				</gov-form-control>
				<br>

				<h3>Expanded</h3>
				<gov-form-control>
					<gov-form-label size="s" slot="top">Přidat přílohu *</gov-form-label>
					<gov-form-group>
						<gov-form-file expanded name="test-me-c">
							<p class="gov-color--secondary-800">
								Přetáhněte soubor nebo
							</p>
							<p>
								<gov-button variant="primary" type="outlined">
									Nahrajte ze zařízení
								</gov-button>
							</p>
							<p class="gov-text--s">
								Podporované formáty XML, PDF, DOC
							</p>
						</gov-form-file>
					</gov-form-group>
				</gov-form-control>
				<br>

				<gov-form-control disabled>
					<gov-form-label size="s" slot="top">Přidat přílohu *</gov-form-label>
					<gov-form-group>
						<gov-form-file expanded name="test-me-c">
							<p class="gov-color--secondary-800">
								Přetáhněte soubor nebo
							</p>
							<p>
								<gov-button disabled variant="primary" type="outlined">
									Nahrát ze zařízení
								</gov-button>
							</p>
							<p class="gov-text--s">
								Podporované formáty XML, PDF, DOC
							</p>
						</gov-form-file>
					</gov-form-group>
				</gov-form-control>
				<br>

				<gov-form-control invalid>
					<gov-form-label size="s" slot="top">Přidat přílohu *</gov-form-label>
					<gov-form-group>
						<gov-form-file expanded name="test-me-c">
							<p class="gov-color--secondary-800">
								Přetáhněte soubor nebo
							</p>
							<p>
								<gov-button variant="primary" type="outlined">
									Nahrát ze zařízení
								</gov-button>
							</p>
							<p class="gov-text--s">
								Podporované formáty XML, PDF, DOC
							</p>
						</gov-form-file>
					</gov-form-group>
					<gov-form-message slot="bottom" variant="error">
						<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
						Required
					</gov-form-message>
				</gov-form-control>
				<br>
			</div>

			<h2>Multiselect</h2>
			<gov-form-control>
				<gov-form-label slot="top">Multiselect</gov-form-label>
				<gov-form-group>
					<gov-form-multi-select id="ba" placeholder="Placeholder" wcag-described-by="me-and-you">
						<option value>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d" selected>Value D</option>
						<option value="e">Value E</option>
						<option value="f">Value F</option>
						<option value="g">Value G</option>
						<option value="h">Value H</option>
						<option value="i" selected>Value I</option>
					</gov-form-multi-select>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>

			<h2>Autocomplete</h2>
			<gov-form-control>
				<gov-form-label slot="top">Label of autocomplete</gov-form-label>
				<gov-form-group>
					<gov-form-autocomplete placeholder="Placeholder autcomplete" id="bagr"></gov-form-autocomplete>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>

			<h2>Textarea</h2>
			<h3>
				Default
			</h3>
			<gov-form-control type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of textarea</gov-form-label>
				<gov-form-group>
					<gov-form-input multiline rows="3" name="test-me" placeholder="Placeholder"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Invalid
			</h3>
			<gov-form-control invalid="TRUE" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of textarea</gov-form-label>
				<gov-form-group>
					<gov-form-input required multiline rows="3" name="test-me" value="Value of textarea"></gov-form-input>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<h3>
				Disabled
			</h3>
			<gov-form-control disabled type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of textarea</gov-form-label>
				<gov-form-group>
					<gov-form-input multiline rows="3" name="test-me" value="Value of textarea"></gov-form-input>
				</gov-form-group>
			</gov-form-control>

			<h2>Checkbox</h2>
			<h3>
				Gaps
			</h3>

			<gov-form-control size="xs">
				<gov-form-label size="xs" slot="top">Label of word</gov-form-label>
				<gov-form-group gap="2xs">
					<gov-form-checkbox name="test-me-c" value="me" checked></gov-form-checkbox>
					<gov-form-checkbox name="test-me-c" value="me" checked></gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="xs">
				<gov-form-group gap="2xs">
					<gov-form-checkbox name="test-me-c" value="me" required checked>
						<gov-form-label slot="label">Option 1</gov-form-label>
					</gov-form-checkbox>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 2</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="s">
				<gov-form-group gap="xs">
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 1</gov-form-label>
					</gov-form-checkbox>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 2</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="m">
				<gov-form-group gap="s">
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 1</gov-form-label>
					</gov-form-checkbox>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 2</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="l">
				<gov-form-group gap="m">
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 1</gov-form-label>
					</gov-form-checkbox>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Option 2</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>

			<h3>
				Default
			</h3>
			<gov-form-control size="xs">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="s">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="m">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Invalid
			</h3>
			<gov-form-control invalid="true" size="xs">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control invalid="true" size="s">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control invalid="true" size="m">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			
			<h3>
				Disabled
			</h3>
			<gov-form-control disabled size="xs">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me">
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="True" size="s">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me">
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="TRUE" size="m">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="1" size="l">
				<gov-form-group>
					<gov-form-checkbox name="test-me-c" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-checkbox>
				</gov-form-group>
			</gov-form-control>

			<h2>Radio</h2>
			<h3>
				Default group
			</h3>
			<gov-form-control size="xs" fieldset>
					<gov-form-label legend size="s" slot="top">Seznam skupiny</gov-form-label>
				<gov-form-group>
					<gov-form-radio name="test1" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test1" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="s">
				<gov-form-group>
					<gov-form-radio name="test2" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test2" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="m">
				<gov-form-group>
					<gov-form-radio name="test3" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test3" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control size="l">
				<gov-form-group>
					<gov-form-radio name="test4" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test4" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Invalid
			</h3>
			<gov-form-control invalid="true" size="xs">
				<gov-form-group>
					<gov-form-radio name="test5" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test5" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<br>
			<gov-form-control invalid="true" size="s">
				<gov-form-group>
					<gov-form-radio name="test6" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test6" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<br>
			<gov-form-control invalid="true" size="m">
				<gov-form-group>
					<gov-form-radio name="test7" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test7" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<br>
			<gov-form-control invalid="true" size="l">
				<gov-form-group>
					<gov-form-radio name="test8" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test8" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<h3>
				Disabled
			</h3>
			<gov-form-control size="xs" disabled>
				<gov-form-group>
					<gov-form-radio name="test9" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test9" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control disabled="true" size="s">
				<gov-form-group>
					<gov-form-radio name="test10" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test10" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control disabled="true" size="m">
				<gov-form-group>
					<gov-form-radio name="test11" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test11" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>
			<br>
			<gov-form-control disabled="true" size="l">
				<gov-form-group>
					<gov-form-radio name="test12" value="me" >
						<gov-form-label slot="label">Value 1</gov-form-label>
					</gov-form-radio>
					<gov-form-radio name="test12" value="me2" checked>
						<gov-form-label slot="label">Value 2</gov-form-label>
					</gov-form-radio>
				</gov-form-group>
			</gov-form-control>

			<h2>Select</h2>
			<h3>
				Default
			</h3>
			<gov-form-control size="m">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="a" selected>Value A</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="xl">
				<gov-form-label size="m" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="a" selected>Value A</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Prefix / sufix
			</h3>
			<gov-form-control size="m">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<span slot="prefix">$</span>
						<span slot="sufix">Kč</span>

						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<span slot="prefix">$</span>
						<span slot="sufix">Kč</span>

						<option value="a" selected>Value A</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l">
				<gov-form-label size="m" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<span slot="prefix">$</span>
						<span slot="sufix">Kč</span>

						<option value="a" selected>Value A</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Invalid
			</h3>
			<gov-form-control invalid="true" size="m">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control invalid="true" size="l">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control invalid="true" size="xl">
				<gov-form-label size="m" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<h3>
				Disabled
			</h3>
			<gov-form-control size="m" disabled>
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="true" size="m">
				<gov-form-label size="s" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="true" size="l">
				<gov-form-label size="m" slot="top">Souhlasím</gov-form-label>
				<gov-form-group>
					<gov-form-select name="test-me">
						<option value="" selected>Placeholder</option>
						<option value="b">Value B</option>
						<option value="c">Value C</option>
						<option value="d">Value D</option>
					</gov-form-select>
				</gov-form-group>
			</gov-form-control>

			<h2>Input</h2>
			<h3>
				Default
			</h3>
			<gov-form-control size="m" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" id="kapr" name="test-me" placeholder="Placeholder"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input 3333</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Prefix / sufix
			</h3>
			<gov-form-control size="m" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" id="kapr" name="test-me" placeholder="Placeholder">
						<span slot="prefix">$</span>
						<span slot="sufix">Kč</span>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<span slot="prefix">$</span>
						<span slot="sufix">Kč</span>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<span slot="prefix">$</span>
						<span slot="sufix">Kč</span>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Left icon
			</h3>
			<gov-form-control size="m" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" placeholder="Placeholder">
						<gov-icon slot="left-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="left-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="left-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Right icon
			</h3>
			<gov-form-control size="m" type="input" id="metro2">
				<gov-form-label slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" placeholder="Placeholder">
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="right-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="right-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Success
			</h3>
			<gov-form-control success="true" size="m" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" placeholder="Placeholder"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control success="True" size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="right-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control success="1" size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="left-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Invalid
			</h3>
			<gov-form-control invalid="true" size="m" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" placeholder="Placeholder"></gov-form-input>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control invalid="true" size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="right-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control invalid="true" size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="left-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<h3>
				Disabled
			</h3>
			<gov-form-control size="m" type="input" id="metro2" disabled>
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" placeholder="Placeholder">
						<gov-icon slot="right-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="True" size="l" type="input" id="metro2">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="right-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control disabled="1" size="xl" type="input" id="metro2">
				<gov-form-label size="m" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input id="kapr" name="test-me" value="Value of input">
						<gov-icon slot="left-icon" name="info"></gov-icon>
					</gov-form-input>
				</gov-form-group>
			</gov-form-control>

			<h3>
				Password power
			</h3>
			<gov-form-password-power power="0"></gov-form-password-power>
			<gov-form-password-power power="1">slabé</gov-form-password-power>
			<gov-form-password-power power="2">střední</gov-form-password-power>
			<gov-form-password-power power="3">silné</gov-form-password-power>

			<h2>Switch</h2>
			<h3>
				Default
			</h3>
			<gov-form-control size="xs">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="s">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="m">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>

			<gov-form-control size="l">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>

			<h3>
				With message
			</h3>
			<gov-form-control size="xs">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control size="s">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control size="m">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<gov-form-control size="l">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
				<gov-form-message slot="bottom" variant="error">
					<gov-icon slot="icon" name="exclamation-triangle-fill"></gov-icon>
					Required
				</gov-form-message>
			</gov-form-control>
			<h3>
				With label
			</h3>
			<gov-form-control size="xs">
				<gov-form-label size="s" slot="top">Label of toggle</gov-form-label>
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="s">
				<gov-form-label size="s" slot="top">Label of toggle</gov-form-label>
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="m">
				<gov-form-label size="m" slot="top">Label of toggle</gov-form-label>
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l">
				<gov-form-label size="m" slot="top">Label of toggle</gov-form-label>
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Disabled
			</h3>
			<gov-form-control type="switch" size="xs" disabled>
				<gov-form-group>
					<gov-form-switch name="test-me" value="me">
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control type="switch" size="s" disabled="true">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me">
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control type="switch" size="m" disabled="true">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control type="switch" size="l" disabled="true">
				<gov-form-group>
					<gov-form-switch name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<h3>
				Invalid
			</h3>
			<gov-form-control size="xs" invalid="True">
				<gov-form-group>
					<gov-form-switch invalid name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="s" invalid="TRUE">
				<gov-form-group>
					<gov-form-switch invalid name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="m" invalid="true">
				<gov-form-group>
					<gov-form-switch invalid name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
			<gov-form-control size="l" invalid="1">
				<gov-form-group>
					<gov-form-switch invalid name="test-me" value="me" checked>
						<gov-form-label slot="label">Souhlasím</gov-form-label>
					</gov-form-switch>
				</gov-form-group>
			</gov-form-control>
		`}}customElements.get("forms-page")===void 0&&customElements.define("forms-page",xe);class we extends HTMLElement{connectedCallback(){this.innerHTML=`
			<h4>Forms</h4>
			<div class="container-view container-view--inline">
			</div>
		`}}customElements.get("forms-restructue-page")===void 0&&customElements.define("forms-restructue-page",we);class Pe extends HTMLElement{connectedCallback(){this.innerHTML=`
			<gov-form-label>
				Form Label
			</gov-form-label>
	`}}customElements.get("form-label-page")===void 0&&customElements.define("form-label-page",Pe);class Le extends HTMLElement{connectedCallback(){this.innerHTML=`
			<gov-form-message>
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Default
				</p>
			</gov-form-message>
			<gov-form-message>
				<p>
					Default
				</p>
			</gov-form-message>
			<gov-form-message variant="secondary">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Secondary
				</p>
			</gov-form-message>
			<gov-form-message variant="secondary">
				<p>
					Secondary
				</p>
			</gov-form-message>
			<gov-form-message variant="error">
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Error
				</p>
			</gov-form-message>
			<gov-form-message variant="error">
				<p>
					Error
				</p>
			</gov-form-message>
			<gov-form-message variant="warning">
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Warning
				</p>
			</gov-form-message>
			<gov-form-message variant="warning">
				<p>
					Warning
				</p>
			</gov-form-message>
			<gov-form-message variant="success">
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Success
				</p>
			</gov-form-message>
			<gov-form-message variant="success">
				<p>
					Success
				</p>
			</gov-form-message>
			<gov-form-message>
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus eros, a dapibus metus. Ut a leo lorem. Sed ut fermentum diam. Sed porttitor ligula est, eget lobortis lacus rutrum et. Nunc sapien arcu, faucibus sit amet justo vel, aliquam gravida magna. Pellentesque et tempor risus. 
				</p>
				<p>
					Aliquam suscipit justo dolor, et pellentesque dui venenatis quis. Vestibulum dignissim libero urna, non ultricies neque consequat ut.
				</p>
			</gov-form-message>
			<gov-form-message>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus eros, a dapibus metus. Ut a leo lorem. Sed ut fermentum diam. Sed porttitor ligula est, eget lobortis lacus rutrum et. Nunc sapien arcu, faucibus sit amet justo vel, aliquam gravida magna. Pellentesque et tempor risus. 
				</p>
				<p>
					Aliquam suscipit justo dolor, et pellentesque dui venenatis quis. Vestibulum dignissim libero urna, non ultricies neque consequat ut.
				</p>
			</gov-form-message>
	`}}customElements.get("form-message-page")===void 0&&customElements.define("form-message-page",Le);class _e extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>
			Grid
		</h2>
		<style>
			.gov-grid-item span {
				display: block;
				background: lightgray;
				padding: 10px;
			}
		</style>
		<gov-grid>
			<gov-grid-item size="1/12"><span>1/12</span></gov-grid-item>
			<gov-grid-item size="11/12"><span>11/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="2/12"><span>2/12</span></gov-grid-item>
			<gov-grid-item size="10/12"><span>10/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="3/12"><span>3/12</span></gov-grid-item>
			<gov-grid-item size="9/12"><span>9/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="4/12"><span>4/12</span></gov-grid-item>
			<gov-grid-item size="8/12"><span>8/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="5/12"><span>5/12</span></gov-grid-item>
			<gov-grid-item size="7/12"><span>7/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="6/12"><span>6/12</span></gov-grid-item>
			<gov-grid-item size="6/12"><span>6/12</span></gov-grid-item>
		</gov-grid>

		<h2>Responsive grid</h2>
		<gov-grid>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 1</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 2</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 3</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 4</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 5</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 6</span></gov-grid-item>
		</gov-grid>

		<h2>Horizontal (X) align</h2>
		<gov-grid>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat. Morbi mauris eros, porttitor non tellus sed, iaculis ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat.</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-x="middle">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat. Morbi mauris eros, porttitor non tellus sed, iaculis ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat.</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-x="bottom">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat. Morbi mauris eros, porttitor non tellus sed, iaculis ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat.</span></gov-grid-item>
		</gov-grid>
		<br>

		<h2>Vertical (Y) align</h2>
		<gov-grid>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-y="center">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-y="right">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
		</gov-grid>
			`}}customElements.get("grid-page")===void 0&&customElements.define("grid-page",_e);class je extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Layout</h2>

		<gov-container>
			<gov-layout type="stretch">
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="right">
				<gov-layout-column>
					<p><b>Aside right</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside right</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="left">
				<gov-layout-column>
					<p><b>Aside left</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside left</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="right" inverse>
				<gov-layout-column>
					<p><b>Aside right inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside right inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="left" inverse>
				<gov-layout-column>
					<p><b>Aside left inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside left inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="text" variant="left">
				<gov-layout-column>
					<p><b>Text left</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="text">
				<gov-layout-column>
					<p><b>Text</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="text" variant="right">
				<gov-layout-column>
					<p><b>Text right</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
		</gov-container>
		<br>

		`}}customElements.get("layout-page")===void 0&&customElements.define("layout-page",je);class qe extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>
			Content Message
		</h2>
		<gov-message variant="error">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="primary">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="success">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="warning">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="secondary">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>

		<div class="gov-bg--secondary-300" style="padding: 48px">
			<h3>Inverse</h3>
			<gov-message inverse variant="error">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="primary">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="success">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="warning">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="secondary">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
		</div>

		<h3>Shadow</h3>
		<gov-message variant="secondary" shadow>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
			`}}customElements.get("message-page")===void 0&&customElements.define("message-page",qe);class Ee extends HTMLElement{connectedCallback(){setTimeout(function(){document.getElementById("btn").addEventListener("gov-click",function(){document.getElementById("modal").setAttribute("open","true")})},500),this.innerHTML=`
			<h2>Modal</h2>
			<gov-button variant="primary" id="btn" wcag-label="Zobrazit formulář o výši dávky">Vyplnit formulář</gov-button>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>

			<gov-modal label="Podání daňového přiznání" id="modal" wcag-close-label="Zavřít modal žádosti o dávku">
				<gov-icon slot="icon" name="info"></gov-icon>
				<h3>Obsah modálního okna</h3>
				<p>Bude tvořen libovolnými komponentami</p>
				<h3>Obsah modálního okna</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros libero, pulvinar vitae tempor at, laoreet quis mi. Vivamus vitae orci mi. Sed eget nisi convallis, condimentum diam a, fermentum risus. Proin vulputate pretium nisi sit amet commodo. Fusce ac magna velit. Maecenas sit amet sem quis arcu lobortis varius a non urna. Morbi ex neque, tempor bibendum sagittis vitae, vulputate ut nibh. Vestibulum sit amet pretium metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut molestie varius nisi, sed mattis quam mollis vulputate. Morbi semper, purus sed ornare sodales, risus tellus porta massa, et eleifend erat diam vitae ex.
				</p>
				<p>
					Suspendisse quis justo nibh. Aenean id purus mattis, posuere urna a, blandit magna. Aenean a ante eleifend, ornare ipsum quis, bibendum mauris. Integer eget posuere sem, in tincidunt quam. Phasellus massa erat, sodales vel hendrerit vitae, ultrices quis dolor. Fusce id vestibulum sem, eu pretium sem. Praesent lacinia, odio non aliquam cursus, arcu ipsum ornare diam, vitae pharetra erat dui non velit. Quisque eu tempus mi. Nam a diam mauris. Quisque sollicitudin risus eu neque accumsan vulputate. Ut tincidunt metus eu nulla sodales, vitae dictum justo ornare. In tincidunt lobortis nunc, ac imperdiet odio condimentum nec. Ut aliquet pulvinar ligula vitae tincidunt. Phasellus egestas ut leo pretium laoreet. Fusce et vestibulum purus. Duis semper sem massa, non dignissim nunc aliquam sit amet.
				</p>
				<p>
					Praesent blandit mattis neque varius sagittis. Nulla ac scelerisque justo. Vestibulum aliquet blandit pharetra. Quisque lacus mi, tincidunt ac dui at, lobortis efficitur nisi. Fusce laoreet maximus purus, sit amet pulvinar mauris facilisis in. Integer fermentum elit eu aliquam sodales. Curabitur laoreet pharetra est rutrum posuere. In at eros tempus ex sodales facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras placerat dolor ac urna elementum facilisis. Aenean diam nibh, sollicitudin in porta sed, laoreet in nisl. Ut scelerisque tortor augue, vitae fermentum dui ornare non. Nulla fringilla libero non metus venenatis, eu maximus massa placerat. Praesent elementum convallis metus, vel iaculis sem pretium cursus.
				</p>
				<gov-button variant="primary" wcag-label="Vyplnit formulář o výši dávky">Vyplnit formulář</gov-button>
			</gov-modal>
		`}}customElements.get("modal-page")===void 0&&customElements.define("modal-page",Ee);class Oe extends HTMLElement{connectedCallback(){setTimeout(function(){document.getElementById("btn").addEventListener("gov-click",function(){document.getElementById("loading").setAttribute("loading","true")})},500),this.innerHTML=`
			<h2>Loading</h2>
			<div class="preview-container">
      <div class="skeletons-defaults">
        <h2>Default</h2>
        <gov-skeleton variant="success"></gov-skeleton>     
      </div>
      <div class="skeletons-appearance-circle">
        <h2>Default circle</h2>
        <gov-skeleton shape="circle"> </gov-skeleton>
      </div> 
      <div class="skeletons-appearance-circle">
        <h2>Default rect</h2>
        <gov-skeleton shape="rect"> </gov-skeleton>
      </div>       
      <div class="skeletons-with-count">
        <h2>Default 4 rows</h2>
        <gov-skeleton count="2"></gov-skeleton>
      </div>           
      <div class="skeletons-animation-no-animation">
        <h2>Without animation</h2>
        <gov-skeleton animation="false"></gov-skeleton>
      </div>
      <div class="skeletons-animation-pulse">
        <h2>Pulse animation</h2>
        <gov-skeleton animation="pulse"></gov-skeleton>
      </div>
      <div class="skeletons-animation-progress">
        <h2>Progress animation</h2>
        <gov-skeleton animation="progress"></gov-skeleton>
      </div>
      <div class="skeletons-with-theming">
        <h2>Custom styles</h2>
        <style>
          .custom-skeleton {
            --skeleton-width: 100px;
            --skeleton-height: 100px;
            --skeleton-background: #cccccc;
            --skeleton-border-radius: 20px;
          }
        </style>
        <gov-skeleton></gov-skeleton>
      </div>
      <div>
        <h2>Custom width</h2>
        <gov-skeleton width="500px"></gov-skeleton>
      </div>
      <div>
        <h2>Custom height</h2>
        <gov-skeleton height="80px"></gov-skeleton>
      </div>
    </div>
			
			
			<gov-button variant="primary" id="btn" wcag-label="Zobrazit načítání">Zobrazit načítání</gov-button>

			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>

			<gov-loading id="loading">Načítání</gov-loading>
		`}}customElements.get("loading-page")===void 0&&customElements.define("loading-page",Oe);class Se extends HTMLElement{connectedCallback(){this.innerHTML=`

			<h4>Nav</h4>

			<gov-nav wcag-label="Hlavní navigace">
				<gov-nav-item href="#">
					Úvod
				</gov-nav-item>
				<gov-nav-item href="#">
					Služby veřejná správy
				</gov-nav-item>
				<gov-nav-item href="#">
					Životní události
				</gov-nav-item>
				<gov-nav-item href="#">
					O živote v ČR
				</gov-nav-item>
				<gov-nav-item href="#">
					Časté dotazy
				</gov-nav-item>
			</gov-nav>
		`}}customElements.get("nav-page")===void 0&&customElements.define("nav-page",Se);class De extends HTMLElement{connectedCallback(){setTimeout(()=>{const o=document.getElementById("bagr");o&&o.addEventListener("gov-page",()=>{})},500),this.innerHTML=`
		<h2>Pagination</h2>

		<gov-pagination id="bagr" total="212" wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<gov-pagination size="s" total="212" wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<gov-pagination type="select" total="212"  wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<gov-pagination type="select" size="s" total="212"  wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<br>
		<gov-pagination variant="secondary" total="212" current="2" wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<gov-pagination size="s" variant="secondary" wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<gov-pagination type="select" variant="secondary" total="212"  wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>
		<br>
		<gov-pagination type="select" variant="secondary" size="s" total="212"  wcag-label="Stránkování pro sekci dokumenty"></gov-pagination>

		`}}customElements.get("pagination-page")===void 0&&customElements.define("pagination-page",De);class Ve extends HTMLElement{connectedCallback(){setTimeout(function(){document.getElementById("btn").addEventListener("gov-click",function(){document.getElementById("modal").setAttribute("open","true")})},500),this.innerHTML=`
            <h2>Prompt</h2>
			<gov-button variant="error" id="btn">Smazat dokument</gov-button>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>

			<gov-prompt label="Smazání dokumentu" id="modal" wcag-close-label="Zavřít prompt">
				<gov-icon class="gov-color--error-400" slot="icon" name="info"></gov-icon>
				<p class="gov-text--l gov-color--secondary-800">Opravdu chcete tento dokument smazat?</p>
				<p>Pokud tak učiníte, tak již nebude cesty zpět a souboru bude nenávratně odstraněn ze serveru. Ujistěte se, že máte dostatečnou zálohu.</p>
                <gov-button slot="actions" size="l" variant="primary" type="base">Zrušit</gov-button>
                <gov-button slot="actions" size="l" variant="error">Smazat dokument</gov-button>
			</gov-prompt>
		`}}customElements.get("prompt-page")===void 0&&customElements.define("prompt-page",Ve);class Te extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Side nav</h2>

		<div style="max-width: 300px;">
			<gov-side-nav>
				<gov-side-nav-item label="Hlavní skupina" count="true" href="#">
					<gov-side-nav-item label="Vše o našem projektu">
						<gov-side-nav-item label="Hodnocení">
						</gov-side-nav-item>
						<gov-side-nav-item label="Rozpočtová politika" count="true">
						</gov-side-nav-item>
						<gov-side-nav-item label="Partneři">
						</gov-side-nav-item>
					</gov-side-nav-item>

					<gov-side-nav-item label="O nás" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="O společnosti" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="Kontakt">
					</gov-side-nav-item>
				</gov-side-nav-item>

				<gov-side-nav-item label="Produkty" href="#">
				</gov-side-nav-item>

				<gov-side-nav-item label="Ocenění">
				</gov-side-nav-item>

				<gov-side-nav-item label="Naši klienti" href="#">
				</gov-side-nav-item>
			</gov-side-nav>
			<h3>Compact</h3>
			<gov-side-nav compact="true">
				<gov-side-nav-item label="Hlavní skupina" count="true" href="#">
					<gov-side-nav-item label="Vše o našem projektu">
						<gov-side-nav-item label="Hodnocení">
						</gov-side-nav-item>
						<gov-side-nav-item label="Rozpočtová politika" count="true">
						</gov-side-nav-item>
						<gov-side-nav-item label="Partneři">
						</gov-side-nav-item>
					</gov-side-nav-item>

					<gov-side-nav-item label="O nás" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="O společnosti" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="Kontakt">
					</gov-side-nav-item>
				</gov-side-nav-item>

				<gov-side-nav-item label="Produkty" href="#">
				</gov-side-nav-item>

				<gov-side-nav-item label="Ocenění">
				</gov-side-nav-item>

				<gov-side-nav-item label="Naši klienti" href="#">
				</gov-side-nav-item>
			</gov-side-nav>

			<h3>Inverse</h3>
			<div class="gov-bg--secondary-300" style="padding: 20px;">
				<gov-side-nav inverse="true">
					<gov-side-nav-item label="Hlavní skupina" count="true" href="#">
						<gov-icon slot="icon" name="info"></gov-icon>
						<gov-side-nav-item label="Vše o našem projektu">
							<gov-icon slot="icon" name="info"></gov-icon>
							<gov-side-nav-item label="Hodnocení">
							</gov-side-nav-item>
							<gov-side-nav-item label="Rozpočtová politika" count="true">
							</gov-side-nav-item>
							<gov-side-nav-item label="Partneři">
							</gov-side-nav-item>
						</gov-side-nav-item>

						<gov-side-nav-item label="O nás" href="#">
							<gov-icon slot="icon" name="info"></gov-icon>
						</gov-side-nav-item>

						<gov-side-nav-item label="O společnosti" href="#">
							<gov-icon slot="icon" name="info"></gov-icon>
						</gov-side-nav-item>

						<gov-side-nav-item label="Kontakt">
							<gov-icon slot="icon" name="info"></gov-icon>
						</gov-side-nav-item>
					</gov-side-nav-item>

					<gov-side-nav-item label="Produkty" href="#">
						<gov-icon slot="icon" name="info"></gov-icon>
					</gov-side-nav-item>

					<gov-side-nav-item label="Ocenění">
						<gov-icon slot="icon" name="info"></gov-icon>
					</gov-side-nav-item>

					<gov-side-nav-item label="Naši klienti" href="#">
						<gov-icon slot="icon" name="info"></gov-icon>
					</gov-side-nav-item>
				</gov-side-nav>
			</div>
		</div>
		`}}customElements.get("side-nav-page")===void 0&&customElements.define("side-nav-page",Te);class Be extends HTMLElement{connectedCallback(){this.innerHTML=`
			<gov-spacer size="2xs"></gov-spacer>
			<gov-spacer size="xs"></gov-spacer>
			<gov-spacer size="s"></gov-spacer>
			<gov-spacer size="m"></gov-spacer>
			<gov-spacer size="l" breakpoint="sm"></gov-spacer>
			<gov-spacer size="xl"></gov-spacer>
			<gov-spacer size="2xl"></gov-spacer>
			<gov-spacer size="3xl"></gov-spacer>
			<gov-spacer size="4xl"></gov-spacer>
		`}}customElements.get("spacer-page")===void 0&&customElements.define("spacer-page",Be);class Me extends HTMLElement{connectedCallback(){this.innerHTML=`
			<gov-statsbar>
				<gov-statsbar-item>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar>
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">Font Awesome</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar icon-position="left">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar inverse variant="secondary">
				<gov-statsbar-item>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar inverse>
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar inverse variant="secondary" icon-position="left">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar variant="secondary">
					<gov-statsbar-item>
						<slot>215 mil</slot>
						<p slot="text">datových zpráv</p>
					</gov-statsbar-item>
					<gov-statsbar-item>
						<slot>1 mil</slot>
						<p slot="text">datových schránek</p>
					</gov-statsbar-item>
					<gov-statsbar-item>
						<slot>967 tis</slot>
						<p slot="text">hodin ušetřených ve frontách</p>
					</gov-statsbar-item>
					<gov-statsbar-item>
						<slot>12 mil</slot>
						<p slot="text">ušetřených korun</p>
					</gov-statsbar-item>
			</gov-statsbar>
			<gov-statsbar variant="secondary">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<gov-statsbar variant="secondary" icon-position="left">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
		`}}customElements.get("statsbar-page")===void 0&&customElements.define("statsbar-page",Me);class Ce extends HTMLElement{connectedCallback(){this.innerHTML=`
			<h2>Stepper</h2>

			<h3>Velikost M</h3>

			<gov-stepper>
				<gov-stepper-item trigger-tag="h1" label="Hotový krok" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
					<gov-icon slot="prefix" name="check-lg"></gov-icon>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus. Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Chybový krok" variant="error">
					<gov-icon slot="prefix" name="x-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item collapsible="true" label="Krok s textem, obrázkem, tlačítkem" variant="primary" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<span slot="prefix">2</span>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus. Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus. Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="secondary">
					<span slot="prefix">3</span>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="warning">
					<span slot="prefix">4</span>
				</gov-stepper-item>
			</gov-stepper>

			<br><br>
			<h3>Velikost S</h3>

			<gov-stepper size="s">
				<gov-stepper-item trigger-tag="h1" label="Hotový krok" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<gov-icon slot="prefix" name="check-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Chybový krok" variant="error">
					<gov-icon slot="prefix" name="x-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Krok s textem, obrázkem, tlačítkem" variant="primary">
					<span slot="prefix">2</span>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="secondary">
					<span slot="prefix">3</span>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="warning">
					<span slot="prefix">4</span>
				</gov-stepper-item>
			</gov-stepper>

			<br><br>
			<h3>Velikost XS</h3>

			<gov-stepper size="xs">
				<gov-stepper-item trigger-tag="h1" label="Hotový krok" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<gov-icon slot="prefix" name="check-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Chybový krok" variant="error">
					<gov-icon slot="prefix" name="x-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Krok s textem, obrázkem, tlačítkem" variant="primary">
					<span slot="prefix">2</span>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="secondary">
					<span slot="prefix">3</span>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="warning">
					<span slot="prefix">4</span>
				</gov-stepper-item>
			</gov-stepper>
		`}}customElements.get("stepper-page")===void 0&&customElements.define("stepper-page",Ce);class Ne extends HTMLElement{connectedCallback(){this.innerHTML=`
			<h2>Tabs</h2>
			<gov-tabs id="po" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="secondary" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="success" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="warning" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="error" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>

			<gov-tabs id="po" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>

			<gov-tabs id="po" variant="secondary" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="success" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="warning" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="error" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>

			<h2>Vertical tabs</h2>
			<gov-tabs id="po" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi super tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi super tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="Muj super tab">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Dalsi super tab s dlouhým popisem" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Další super tab s naprosto nesmyslně dlouhým popisem, který se doufám nevyužije">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" type="badge" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="Muj super tab">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Dalsi super tab s dlouhým popisem" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Další super tab s naprosto nesmyslně dlouhým popisem, který se doufám nevyužije">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
		`}}customElements.get("tabs-page")===void 0&&customElements.define("tabs-page",Ne);class Ae extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>Tiles</h2>

		<div class="gov-bg--secondary-300" style="padding: 48px;">
			<div style="max-width: 600px;">
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<br>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<ul class="gov-list--plain">
						<li><a href="#">Občanský život</a></li>
						<li><a href="#">Podnikání v ČR</a></li>
						<li><a href="#">Czech POINT</a></li>
					</ul>
				</gov-tile>
			</div>
			<div style="max-width: 800px;">
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#" promotion>
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
			</div>
			<br>

			<gov-tiles columns="4">
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
			</gov-tiles>
			<br>
			<gov-tiles columns="3" no-border>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy" href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
			</gov-tiles>

		</div>
		`}}customElements.get("tiles-page")===void 0&&customElements.define("tiles-page",Ae);class He extends HTMLElement{connectedCallback(){this.innerHTML=`
			<p>
				Default scheme, size Small. Nelze umístit jako toggle element který je blokový - tj. div, h1, h2, atp.
				<gov-tooltip position="right" size="s" icon>
					<gov-icon name="info"></gov-icon>
					<gov-tooltip-content>
						<ul>
							<li>Toggler div, h1, h2 rozbije celou komponentu. </li>
							<li>Můžu použít tagy jako span, anchor, gov-icon - inlinové. Zde je použita ikonka z knihovny font-awesome</li>
						</ul>
					</gov-tooltip-content>
				</gov-tooltip>
				za prací do států EU byste měli být vždy pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy tento stát.
			</p>
			<p>
				V rámci
				<gov-tooltip variant="secondary" position="top" size="s" message="Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.">
					případě vycestování (top)
				</gov-tooltip>
				států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>V rámci
				<gov-tooltip variant="secondary" position="bottom" size="s">
					případě vycestování (bottom)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				<gov-tooltip variant="secondary" position="left" size="s">
					případě vycestování (left)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V
				<gov-tooltip position="right">
					případě vycestování postion (right)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				za prací do států EU byste měli být vždy pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy tento stát.
			</p>
			<p>
				V rámci
				<gov-tooltip position="top">
					případě vycestování (top)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
			V rámci
				<gov-tooltip position="bottom">
					případě vycestování (bottom)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				<gov-tooltip variant="secondary" position="left">
					případě vycestování (left)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát. V rámci států EU platí princip jednoho pojištění. V
				<gov-tooltip variant="secondary" position="right" size="l">
					případě vycestování (right)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>V rámci
				<gov-tooltip position="top" size="l">
					případě vycestování (top)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci
				<gov-tooltip variant="secondary" position="bottom" size="l">
					případě vycestování (bottom)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				<gov-tooltip inverse variant="secondary" position="left" size="l">
					případě vycestování (left)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
				<br /><br /><br /><br /><br />x
			</p>
	`}}customElements.get("tooltip-page")===void 0&&customElements.define("tooltip-page",He);class Re extends HTMLElement{connectedCallback(){this.innerHTML=`
			<p>
				<a class="gov-text--xs" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--s" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--m" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--l" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--2xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--3xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--4xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--5xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--6xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
			</p>

			<ul>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
			</ul>
			<ol>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
			</ol>

			<h6 class="gov-text--6xl">Heading 1 Heading 1 Heading 1</h6>
			<h2>Heading 2 Heading 2 Heading 2</h2>
			<p>
				Body 1/400<br />A lead <a href="#copy" target="_blank">paragraph with no more than four lines</a> . Body 1/400 A lead paragraph with no more than four lines. Body 1/400 A lead paragraph with no more than four lines
			</p>
			<h4 class="gov-text--l">Heading 2 Heading 2 Heading 2</h4>
			<h3>Heading 3 Heading 3 Heading 3</h3>
			<p>
				Body 2/400<br />This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines
			</p>
			<h2>Heading 2 Heading 2 Heading 2</h2>
			<h3>Heading 3 Heading 3 Heading 3</h3>
			<p>
				Body 3/400<br />This is for body copy in components such as accordion, structured list or tile. This is for body copy in components such as accordion, structured list or tile.
			</p>
			<h3>Heading 3 Heading 3 Heading 3</h3>
			<h4>Heading 4 Heading 4 Heading 4</h4>
			<p>
				Bold - Body 1/700<br />A lead paragraph with no more than four lines. Body 1/400 A lead paragraph with no more than four lines. Body 1/400 A lead paragraph with no more than four lines
			</p>
			<h4>Heading 4 Heading 4 Heading 4</h4>
			<h5>Heading 5 Heading 5 Heading 5</h5>
			<p>
				Bold - Body 2/700<br />This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines
			</p>
			<h5>Heading 5 Heading 5 Heading 5</h5>
			<h6>Heading 6 Heading 6 Heading 6</h6>
			<p>
				Bold - Body 3/700<br />This is for body copy in components such as accordion, structured list or tile. This is for body copy in components such as accordion, structured list or tile.
			</p>
			<h6>Heading 6 Heading 6 Heading 6</h6>
			<p class="text-x-small">
				Assistive<br />This is for explanatory helper text that appears below a field
			</p>
			<ul>
				<li>seznam položka seznam položka seznam položka<br />seznam položka seznam položka seznam položka</li>
				<li>seznam položka seznam položka seznam položka</li>
				<li>seznam položka seznam položka seznam položka</li>
			</ul>
		`}}customElements.get("typography-page")===void 0&&customElements.define("typography-page",Re);class Ie extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>
			Toast Message
		</h2>
		<gov-toast variant="success">
			<gov-icon name="check-lg" slot="icon"></gov-icon>
			<p>
				Vaše dokumenty byly úspěšně staženy.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="error" gravity="bottom" position="left">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Není možné požadavek zpracovat z důvodu chyby serveru.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="warning" position="left">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Žádost se nepodařilo odeslat, zkontrolujte nastavení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="primary" position="center">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Soubory jsou připraveny ke stažení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="secondary"  gravity="bottom" position="right">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Vaše aplikace byla aktualizovaná na novou verzi!
			</p>
		</gov-toast>
			`}}customElements.get("toast-message-page")===void 0&&customElements.define("toast-message-page",Ie);class Ue extends HTMLElement{connectedCallback(){this.innerHTML=`
		<h2>
			Toast Message Countdown
		</h2>
		<gov-toast variant="success" type="solid">
			<gov-icon name="check-lg" slot="icon"></gov-icon>
			<p>
				Vaše dokumenty byly úspěšně staženy.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="error" type="solid" gravity="bottom" position="left">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Není možné požadavek zpracovat z důvodu chyby serveru.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="warning" type="solid" position="left">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Žádost se nepodařilo odeslat, zkontrolujte nastavení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="primary" type="solid" position="center">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Soubory jsou připraveny ke stažení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="secondary" type="solid" gravity="bottom" position="right">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Vaše aplikace byla aktualizovaná na novou verzi!
			</p>
		</gov-toast>
			`}}customElements.get("toast-message-countdown-page")===void 0&&customElements.define("toast-message-countdown-page",Ue);class Fe extends HTMLElement{connectedCallback(){this.innerHTML=`
            <h2>Wizzard</h2>
			<div class="gov-bg--secondary-300" style="padding: 48px">
				<gov-wizzard>
					<gov-wizzard-item label-tag="h1" label="Font Awesome Icon" variant="success" collapsible>
						<gov-icon slot="prefix" name="check-lg"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Kontaktní osoby" variant="primary" is-expanded>
						<span slot="prefix">2</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Působnost v agendách" variant="secondary" collapsible="false">
						<span slot="prefix">3</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Zřizované organizace" variant="error" collapsible annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus.">
						<span slot="prefix">4</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Zřizované organizace" variant="warning" is-expanded>
						<span slot="prefix">5</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
				</gov-wizzard>

				<br><br>

				<gov-wizzard size="s">
					<gov-wizzard-item label-tag="h1" label="Font Awesome Icon" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus." collapsible>
						<gov-icon slot="prefix" name="check-lg"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Kontaktní osoby" variant="primary" is-expanded>
						<span slot="prefix">2</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Působnost v agendách" variant="secondary">
						<span slot="prefix">3</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Zřizované organizace" variant="error">
						<span slot="prefix">4</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Zřizované organizace" variant="warning">
						<span slot="prefix">5</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
				</gov-wizzard>
				<br><br>
	
				<gov-wizzard size="xs">
					<gov-wizzard-item label-tag="h1" label="Font Awesome Icon" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus." collapsible>
						<gov-icon slot="prefix" name="check-lg"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Kontaktní osoby" variant="primary" is-expanded>
						<span slot="prefix">2</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Působnost v agendách" variant="secondary">
						<span slot="prefix">3</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Zřizované organizace" variant="error">
						<span slot="prefix">4</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
					<gov-wizzard-item label="Zřizované organizace" variant="warning">
						<span slot="prefix">5</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizzard-item>
				</gov-wizzard>
			</div>
		`}}customElements.get("wizzard-page")===void 0&&customElements.define("wizzard-page",Fe);const Ze=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}html,body{margin:0;padding:0}.container-view{padding:12px}hr{height:0;border:0 none;border-top:1px solid gainsboro;font-size:0}hr.inversed{border-top-color:#254e80}",$e=class{constructor(e){xo(this,e)}componentWillLoad(){const e=document.getElementById("outlet");e.innerHTML="",new h(e).setRoutes([{path:"/",component:"home-page"},{path:"/alert",component:"alert-page"},{path:"/accordion",component:"accordion-page"},{path:"/badge",component:"badge-page"},{path:"/button",component:"button-page"},{path:"/breadcrumbs",component:"breadcrumbs-page"},{path:"/card",component:"card-page"},{path:"/message",component:"message-page"},{path:"/cookiebar",component:"cookiebar-page"},{path:"/container",component:"container-page"},{path:"/empty",component:"empty-page"},{path:"/error",component:"error-page"},{path:"/forms",component:"forms-page"},{path:"/forms-restructue",component:"forms-restructure-page"},{path:"/form-message",component:"form-message-page"},{path:"/form-label",component:"form-label-page"},{path:"/grid",component:"grid-page"},{path:"/loading",component:"loading-page"},{path:"/modal",component:"modal-page"},{path:"/nav",component:"nav-page"},{path:"/spacer",component:"spacer-page"},{path:"/statsbar",component:"statsbar-page"},{path:"/stepper",component:"stepper-page"},{path:"/tabs",component:"tabs-page"},{path:"/tooltip",component:"tooltip-page"},{path:"/tiles",component:"tiles-page"},{path:"/typography",component:"typography-page"},{path:"/toast-message",component:"toast-message-page"},{path:"/toast-message-countdown",component:"toast-message-countdown-page"},{path:"/pagination",component:"pagination-page"},{path:"/prompt",component:"prompt-page"},{path:"/wizzard",component:"wizzard-page"},{path:"/side-nav",component:"side-nav-page"},{path:"/grid",component:"grid-page"},{path:"/layout",component:"layout-page"}])}render(){return wo(Po,null)}};$e.style=Ze;export{$e as gov_app};
