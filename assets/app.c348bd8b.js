var Oe=Object.defineProperty,We=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var de=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))Ve.call(t,n)&&de(e,n,t[n]);if(ue)for(var n of ue(t))Ge.call(t,n)&&de(e,n,t[n]);return e},U=(e,t)=>We(e,je(t));import{r as ne,m as he,a as Le,n as Je,i as Ke,d as b,h as H,_ as m,o as u,c as h,b as l,e as _,u as d,t as K,f as P,g as S,w as R,j as w,k as O,v as W,l as L,p as f,q as N,s as se,x as q,y as Y,z as Ye,A as x,B as oe,C as Ce,D as Ee,E as ae,F as z,G as X,H as Xe,I as Re,J as Qe,K as Ze}from"./plugin-vue_export-helper.cdf78444.js";const A=typeof window!="undefined";function Te(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function Ae(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),A){const n="/vue3-hooks-plus-docs/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const De=Symbol(),pe="http://a.com",et=()=>({path:"/",component:null,data:null});function tt(e,t){const n=ne(et()),s=typeof window!="undefined";function a(r=s?location.href:"/"){const c=new URL(r,pe);return!c.pathname.endsWith("/")&&!c.pathname.endsWith(".html")&&(c.pathname+=".html",r=c.pathname+c.search+c.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),i(r)}let o=null;async function i(r,c=0){const p=new URL(r,pe),g=o=p.pathname;try{let k=e(g);if("then"in k&&typeof k.then=="function"&&(k=await k),o===g){o=null;const{default:y,__pageData:$}=k;if(!y)throw new Error(`Invalid route component: ${y}`);n.path=g,n.component=he(y),n.data=Le(JSON.parse($)),s&&Je(()=>{if(p.hash&&!c){const C=document.querySelector(decodeURIComponent(p.hash));if(C){_e(C,p.hash);return}}window.scrollTo(0,c)})}}catch(k){k.message.match(/fetch/)||console.error(k),o===g&&(o=null,n.path=g,n.component=t?he(t):null)}}return s&&(window.addEventListener("click",r=>{const c=r.target.closest("a");if(c){const{href:p,protocol:g,hostname:k,pathname:y,hash:$,target:C}=c,B=window.location,I=y.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&C!=="_blank"&&g===B.protocol&&k===B.hostname&&!(I&&I[0]!==".html")&&(r.preventDefault(),y===B.pathname?$&&$!==B.hash&&(history.pushState(null,"",$),_e(c,$,c.classList.contains("header-anchor"))):a(p))}},{capture:!0}),window.addEventListener("popstate",r=>{i(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:a}}function nt(){const e=Ke(De);if(!e)throw new Error("useRouter() is called without provider.");return e}function E(){return nt().route}function _e(e,t,n=!1){const s=document.querySelector(".nav-bar").offsetHeight,a=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(a){const o=a.offsetTop-s-15;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}const st=b({name:"VitePressContent",setup(){const e=E();return()=>e.component?H(e.component):null}});const ot={setup(){return{}}},at={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},rt=l("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),it=l("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),ct=[rt,it];function lt(e,t,n,s,a,o){return u(),h("svg",at,ct)}var ut=m(ot,[["render",lt]]);const dt={setup(){return{}}},ht={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},pt=l("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),_t=[pt];function ft(e,t,n,s,a,o){return u(),h("svg",ht,_t)}var vt=m(dt,[["render",ft]]);const mt=["href"],gt=l("div",{style:{width:"16px","margin-left":"6px"}},[l("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[l("g",null,[l("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),kt=[gt],$t=b({props:{content:null,importMap:null},setup(e){const t=e,n="https://sfc.vuejs.org/",s=_(()=>{const a={"App.vue":t.content};if(t.importMap)try{a["import-map.json"]=JSON.stringify({imports:JSON.parse(decodeURIComponent(t.importMap))})}catch{}return`${n}#${btoa(unescape(encodeURIComponent(JSON.stringify(a))))}`});return(a,o)=>(u(),h("a",{href:d(s),style:{display:"flex","align-items":"center"},target:"_blank"},kt,8,mt))}});function xt(e){const t=ne({showTip:!1});function n(){navigator.clipboard.writeText(e),t.showTip=!0,setTimeout(()=>{t.showTip=!1},5*1e3)}return U(T({},K(t)),{copyCode:n})}const fe=/<script.*>([\s\S]+)<\/script>/,ve=/<style>([\s\S]+)<\/style>/,me=/<template>([\s\S]+)<\/template>/,Z=e=>t=>{const n=t.match(e);return n&&n[1].trim()},ge=e=>JSON.parse(decodeURIComponent(e));function bt(e,t,n){const s=ne({expand:!1}),a=()=>s.expand=!s.expand,o=_(()=>{const i=Z(fe)(e)||"",r=Z(ve)(e)||"",c=Z(me)(e)||e.replace(fe,"").replace(ve,"").replace(me,"").trim(),p=ge(t),g=ge(n);return{js:i,css:r,html:c,jsLibs:p,cssLibs:g}});return U(T({},K(s)),{toggleExpand:a,parsedCode:o})}const wt={props:{componentName:String,htmlStr:String,codeStr:String,importMap:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:ut,codeSvg:vt,OnlineEdit:$t},setup(e){const t=_(()=>{var c;return decodeURIComponent((c=e.htmlStr)!=null?c:"")}),n=_(()=>{var c;return decodeURIComponent((c=e.codeStr)!=null?c:"")}),{showTip:s,copyCode:a}=xt(n.value),{expand:o,toggleExpand:i,parsedCode:r}=bt(n.value,e.jsLibsStr,e.cssLibsStr);return{expand:o,toggleExpand:i,decodedHtmlStr:t,parsedCode:r,showTip:s,copyCode:a,decodedCodeStr:n}}},yt={class:"demo-slot"},St={class:"demo-title-desc"},Lt={class:"demo-title"},Ct={class:"demo-desc"},Et={class:"demo-actions"},Rt={class:"demo-platforms"},Tt={class:"demo-buttons"},At={class:"demo-actions-copy"},Dt={class:"demo-actions-tip"},Pt=["innerHTML"];function Bt(e,t,n,s,a,o){const i=P("OnlineEdit"),r=P("copySvg"),c=P("codeSvg"),p=P("ClientOnly");return u(),S(p,null,{default:R(()=>[l("article",se(e.$attrs,{class:"demo"}),[l("div",yt,[w(e.$slots,"default")]),O(l("div",St,[l("span",Lt,L(n.title),1),l("span",Ct,L(n.desc),1)],512),[[W,n.title||n.desc]]),l("div",Et,[l("div",Rt,[f(i,{content:s.decodedCodeStr,importMap:n.importMap},null,8,["content","importMap"])]),l("div",Tt,[l("div",At,[O(l("span",Dt,"\u590D\u5236\u6210\u529F!",512),[[W,s.showTip]]),O(f(r,{onClick:s.copyCode,title:"\u590D\u5236"},null,8,["onClick"]),[[W,!s.showTip]])]),f(c,{class:"demo-actions-expand",onClick:t[0]||(t[0]=g=>s.toggleExpand()),title:"\u5C55\u5F00"})])]),O(l("div",{innerHTML:s.decodedHtmlStr,class:N(`language-${n.language} extra-class`)},null,10,Pt),[[W,s.expand]])],16)]),_:3})}var It=m(wt,[["render",Bt]]);const Mt=b({setup(e,{slots:t}){const n=q(!1);return Y(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}});function Ut(e,t,n,s){Object.defineProperties(e.config.globalProperties,{$site:{get(){return t.value}},$siteByRoute:{get(){return n.value}},$themeConfig:{get(){return n.value.themeConfig}},$page:{get(){return s.value}},$frontmatter:{get(){return s.value.frontmatter}},$lang:{get(){return n.value.lang}},$localePath:{get(){const{locales:a}=t.value,{lang:o}=n.value,i=Object.keys(a).find(r=>a[r].lang===o);return a&&i||"/"}},$title:{get(){return s.value.title?s.value.title+" | "+n.value.title:n.value.title}},$description:{get(){return s.value.description||n.value.description}},$withBase:{value(a){return Te(t.value.base,a)}}})}function Ht(e){e.component("Content",st),e.component("ClientOnly",Mt),e.component("Demo",It),e.component("Debug",()=>null)}var Nt='{"lang":"en-US","title":"Vue3-hooks-plus","description":"_description","base":"/vue3-hooks-plus-docs/","head":[["link",{"rel":"icon","href":"/vue3-hooks-plus-docs/favicon.ico"}]],"themeConfig":{"lang":"zh-CN","title":"Vue3-hooks-plus","logo":"/logo.png","nav":[{"text":"\u6307\u5357","link":"/"},{"text":"Hooks","link":"/useRequest/"}],"sidebar":{"/":[{"text":"useRequest","children":[{"text":"\u5FEB\u901F\u4F7F\u7528","link":"/useRequest/"},{"text":"\u57FA\u7840\u7528\u6CD5","link":"/useRequest/basic/"},{"text":"loadingDelay","link":"/useRequest/loadingDelay/"},{"text":"\u8F6E\u8BE2","link":"/useRequest/polling/"},{"text":"Ready","link":"/useRequest/ready/"},{"text":"\u4F9D\u8D56\u5237\u65B0","link":"/useRequest/refreshDeps/"},{"text":"\u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42","link":"/useRequest/refreshOnWindowFocus/"},{"text":"\u9632\u6296","link":"/useRequest/debounce/"},{"text":"\u8282\u6D41","link":"/useRequest/throttle/"},{"text":"\u7F13\u5B58 & SWR","link":"/useRequest/cache/"},{"text":"\u9519\u8BEF\u91CD\u8BD5","link":"/useRequest/retry/"}]},{"text":"State","children":[{"text":"useBoolean","link":"/useBoolean/"},{"text":"useDebounce","link":"/useDebounce/"},{"text":"useThrottle","link":"/useThrottle/"},{"text":"useToggle","link":"/useToggle/"},{"text":"useCookieState","link":"/useCookieState/"},{"text":"useLocalStorageState","link":"/useLocalStorageState/"},{"text":"useSessionStorageState","link":"/useSessionStorageState/"},{"text":"useMap","link":"/useMap/"},{"text":"useSet","link":"/useSet/"}]},{"text":"Effect","children":[{"text":"useDebounceFn","link":"/useDebounceFn/"},{"text":"useThrottleFn","link":"/useThrottleFn/"},{"text":"useLockFn","link":"/useLockFn/"},{"text":"useUpdate","link":"/useUpdate/"},{"text":"useInterval","link":"/useInterval/"},{"text":"useTimeout","link":"/useTimeout/"}]},{"text":"Scene","children":[{"text":"useEcharts","link":"/useEcharts/"},{"text":"useVirtualList","link":"/useVirtualList/"}]},{"text":"Dom","children":[{"text":"useEventListener","link":"/useEventListener/"},{"text":"useExternal","link":"/useExternal/"},{"text":"useDrop & useDrag","link":"/useDrop/"},{"text":"useFavicon","link":"/useFavicon/"},{"text":"useTitle","link":"/useTitle/"},{"text":"useSize","link":"/useSize/"},{"text":"useHover","link":"/useHover/"},{"text":"useWinResize","link":"/useWinResize/"},{"text":"useFocusWithin","link":"/useFocusWithin/"}]},{"text":"Advanced","children":[{"text":"useEventEmitter","link":"/useEventEmitter/"}]},{"text":"Dev","children":[{"text":"useTrackedEffect","link":"/useTrackedEffect/"},{"text":"useWhyDidYouUpdate","link":"/useWhyDidYouUpdate/"}]}]},"search":{"searchMaxSuggestions":10},"repo":"/InhiblabCore/vue3-hooks-plus","repoLabel":"Github","lastUpdated":"\u6700\u8FD1\u66F4\u65B0","prevLink":true,"nextLink":true},"locales":{},"customData":{}}';const V=q(zt(Nt));function Q(){return V}function zt(e){return Le(JSON.parse(e))}const qt=typeof window!="undefined";function Ft(e,t){t.sort((n,s)=>{const a=s.split("/").length-n.split("/").length;return a!==0?a:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function ke(e,t){const n=Ft(t,Object.keys(e));return n?e[n]:void 0}function Ot(e,t){t=Wt(e,t);const n=ke(e.locales||{},t)||{},s=ke(e.themeConfig&&e.themeConfig.locales||{},t)||{};return U(T(T({},e),n),{themeConfig:U(T(T({},e.themeConfig),s),{locales:{}}),locales:{}})}function Wt(e,t){if(!qt)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}function D(e){const t=e||E();return _(()=>Ot(V.value,t.path))}function F(e){const t=e||E();return _(()=>t.data)}function jt(e,t){const n=Array.from(document.querySelectorAll("meta"));let s=!0;const a=o=>{if(s){s=!1;return}n.forEach(i=>document.head.removeChild(i)),n.length=0,o&&o.length&&o.forEach(i=>{const r=Vt(i);document.head.appendChild(r),n.push(r)})};Ye(()=>{const o=e.data,i=t.value,r=o&&o.title,c=o&&o.description,p=o&&o.frontmatter.head;document.title=(r?r+" | ":"")+i.title,a([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:c||i.description}],...i.head,...p&&Jt(p)||[]])})}function Vt([e,t,n]){const s=document.createElement(e);for(const a in t)s.setAttribute(a,t[a]);return n&&(s.innerHTML=n),s}function Gt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Jt(e){return e.filter(t=>!Gt(t))}const Kt=/#.*$/,Yt=/(index)?\.(md|html)$/,G=/\/$/,Xt=/^[a-z]+:/i;function Qt(e){return e==null}function re(e){return Array.isArray(e)}function ie(e){return Xt.test(e)}function Zt(e,t){if(t===void 0)return!1;const n=$e(`/${e.data.relativePath}`),s=$e(t);return n===s}function $e(e){return decodeURI(e).replace(Kt,"").replace(Yt,"")}function en(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function te(e){return/^\//.test(e)?e:`/${e}`}function Pe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function tn(e){return e===!1||e==="auto"||re(e)}function nn(e){return e.children!==void 0}function sn(e){return re(e)?e.length===0:!e}function ce(e,t){if(tn(e))return e;t=te(t);for(const n in e)if(t.startsWith(te(n)))return e[n];return"auto"}function Be(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Pe(n.link)}),nn(n)&&(t=[...t,...Be(n.children)]),t),[])}const on={},an=["href","aria-label"],rn=["src"];function cn(e,t){return u(),h("a",{class:"nav-bar-title",href:e.$withBase(e.$localePath),"aria-label":`${e.$siteByRoute.title}, back to home`},[e.$themeConfig.logo?(u(),h("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,rn)):x("",!0),oe(" "+L(e.$site.title),1)],8,an)}var ln=m(on,[["render",cn],["__scopeId","data-v-05b58416"]]);function un(){const e=E(),t=Q();return _(()=>{const s=t.value.themeConfig.locales;if(!s)return null;const a=Object.keys(s);if(a.length<=1)return null;const o=A?t.value.base:"/",i=o.endsWith("/")?o.slice(0,-1):o,r=e.path.slice(i.length),c=a.find($=>$==="/"?!1:r.startsWith($)),p=c?r.substring(c.length-1):r,g=a.map($=>{const C=$.endsWith("/")?$.slice(0,-1):$;return{text:s[$].label,link:`${C}${p}`}}),k=c||"/";return{text:s[k].selectText?s[k].selectText:"Languages",items:g}})}const dn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function hn(){const e=D();return _(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=pn(n);return{text:_n(s,t.repoLabel),link:s}})}function pn(e){return/^https?:/.test(e)?e:`https://github.com/${e}`}function _n(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=dn.find(([a,o])=>o.test(n[0]));return s&&s[0]?s[0]:"Source"}function fn(){const e=Q();function t(n){return Te(e.value.base,n)}return{withBase:t}}function Ie(e){const t=E(),{withBase:n}=fn(),s=ie(e.value.link);return{props:_(()=>{const o=xe(`/${t.data.relativePath}`);let i=!1;if(e.value.activeMatch)i=new RegExp(e.value.activeMatch).test(o);else{const r=xe(n(e.value.link));i=r==="/"?r===o:o.startsWith(r)}return{class:{active:i,isExternal:s},href:s?e.value.link:n(e.value.link),target:e.value.target||s?"_blank":null,rel:e.value.rel||s?"noopener noreferrer":null,"aria-label":e.value.ariaLabel}}),isExternal:s}}function xe(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const vn={},mn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},gn=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),kn=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),$n=[gn,kn];function xn(e,t){return u(),h("svg",mn,$n)}var le=m(vn,[["render",xn]]);const bn={class:"nav-link"},wn=b({props:{item:null},setup(e){const n=K(e),{props:s,isExternal:a}=Ie(n.item);return(o,i)=>(u(),h("div",bn,[l("a",se({class:"item"},d(s)),[oe(L(e.item.text)+" ",1),d(a)?(u(),S(le,{key:0})):x("",!0)],16)]))}});var be=m(wn,[["__scopeId","data-v-77e86150"]]);const yn=e=>(Ce("data-v-66fd601c"),e=e(),Ee(),e),Sn={class:"nav-dropdown-link-item"},Ln=yn(()=>l("span",{class:"arrow"},null,-1)),Cn={class:"text"},En={class:"icon"},Rn=b({props:{item:null},setup(e){const n=K(e),{props:s,isExternal:a}=Ie(n.item);return(o,i)=>(u(),h("div",Sn,[l("a",se({class:"item"},d(s)),[Ln,l("span",Cn,L(e.item.text),1),l("span",En,[d(a)?(u(),S(le,{key:0})):x("",!0)])],16)]))}});var Tn=m(Rn,[["__scopeId","data-v-66fd601c"]]);const An=["aria-label"],Dn={class:"button-text"},Pn={class:"dialog"},Bn=b({props:{item:null},setup(e){const t=E(),n=q(!1);ae(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(a,o)=>(u(),h("div",{class:N(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[l("span",Dn,L(e.item.text),1),l("span",{class:N(["button-arrow",n.value?"down":"right"])},null,2)],8,An),l("ul",Pn,[(u(!0),h(z,null,X(e.item.items,i=>(u(),h("li",{key:i.text,class:"dialog-item"},[f(Tn,{item:i},null,8,["item"])]))),128))])],2))}});var we=m(Bn,[["__scopeId","data-v-0fc1387b"]]);const In={key:0,class:"nav-links"},Mn={key:1,class:"item"},Un={key:2,class:"item"},Hn=b({setup(e){const t=D(),n=un(),s=hn(),a=_(()=>o.value||s.value),o=_(()=>t.value.themeConfig.nav);return(i,r)=>d(a)?(u(),h("nav",In,[d(o)?(u(!0),h(z,{key:0},X(d(o),c=>(u(),h("div",{key:c.text,class:"item"},[c.items?(u(),S(we,{key:0,item:c},null,8,["item"])):(u(),S(be,{key:1,item:c},null,8,["item"]))]))),128)):x("",!0),d(n)?(u(),h("div",Mn,[f(we,{item:d(n)},null,8,["item"])])):x("",!0),d(s)?(u(),h("div",Un,[f(be,{item:d(s)},null,8,["item"])])):x("",!0)])):x("",!0)}});var Me=m(Hn,[["__scopeId","data-v-3de693e3"]]);const Nn={emits:["toggle"]},zn=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),qn=[zn];function Fn(e,t,n,s,a,o){return u(),h("div",{class:"sidebar-button",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},qn)}var On=m(Nn,[["render",Fn]]);const Wn=e=>(Ce("data-v-b2bb904e"),e=e(),Ee(),e),jn={class:"nav-bar"},Vn=Wn(()=>l("div",{class:"flex-grow"},null,-1)),Gn={class:"nav"},Jn=b({emits:["toggle"],setup(e){return(t,n)=>(u(),h("header",jn,[f(On,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),f(ln),Vn,l("div",Gn,[f(Me)]),w(t.$slots,"search",{},void 0,!0)]))}});var Kn=m(Jn,[["__scopeId","data-v-b2bb904e"]]);function Yn(){let e=null,t=null;const n=ts(s,300);function s(){const i=Xn(),r=Qn(i);for(let c=0;c<r.length;c++){const p=r[c],g=r[c+1],[k,y]=es(c,p,g);if(k){history.replaceState(null,document.title,y||" "),a(y);return}}}function a(i){if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${i}"]`),!t)return;t.classList.add("active");const r=t.closest(".sidebar-links > ul > li");r&&r!==t.parentElement?(e=r.querySelector("a"),e&&e.classList.add("active")):e=null}function o(i){i&&i.classList.remove("active")}Y(()=>{s(),window.addEventListener("scroll",n)}),Xe(()=>{a(decodeURIComponent(location.hash))}),Re(()=>{window.removeEventListener("scroll",n)})}function Xn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Qn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Zn(){return document.querySelector(".nav-bar").offsetHeight}function ye(e){const t=Zn();return e.parentElement.offsetTop-t-15}function es(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ye(t)?[!1,null]:!n||s<ye(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function ts(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function ns(){const e=E(),t=D();return Yn(),_(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,a=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Se(n,a);const o=ce(t.value.themeConfig.sidebar,e.data.relativePath);return o===!1?[]:o==="auto"?Se(n,a):o})}function Se(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:a,title:o,slug:i})=>{if(a-1>t)return;const r={text:o,link:`#${i}`};a===2?(s=r,n.push(r)):s&&(s.children||(s.children=[])).push(r)}),n}const Ue=e=>{const t=E(),n=Q();t.data.headers;const s=e.item.text,a=ss(n.value.base,e.item.link),o=e.item.children,i=Zt(t,e.item.link),r=os(i,o);return H("li",{class:"sidebar-link"},[H(a?"a":"p",{class:{"sidebar-link-item":!0,active:i},href:a},s),r])};function ss(e,t){return t===void 0||t.startsWith("#")?t:en(e,t)}function os(e,t,n){return t&&t.length>0?H("ul",{class:"sidebar-links"},t.map(s=>H(Ue,{item:s}))):null}const as={key:0,class:"sidebar-links"},rs=b({setup(e){const t=ns();return(n,s)=>d(t).length>0?(u(),h("ul",as,[(u(!0),h(z,null,X(d(t),a=>(u(),S(d(Ue),{key:a.text,item:a},null,8,["item"]))),128))])):x("",!0)}});const is={setup(){const e=E();return{slugs:_(()=>{var a;const n=((a=e.data.headers)!=null?a:[]).filter(o=>o.level>1);let s=10;for(const{level:o}of n)s>o&&(s=o);return n.filter(o=>o.level<s+2).map(o=>U(T({},o),{link:`#${o.slug}`,level:o.level===s?1:2}))})}}},cs={class:"right-slug"},ls=["href"];function us(e,t,n,s,a,o){return u(),h("ul",cs,[(u(!0),h(z,null,X(s.slugs,({level:i,link:r,title:c})=>(u(),h("li",{class:N(`slug-item level-${i}`),key:r},[l("a",{href:r,class:"link"},L(c),9,ls)],2))),128))])}var ds=m(is,[["render",us],["__scopeId","data-v-ca112384"]]);const hs=b({props:{open:{type:Boolean,required:!0}},setup(e){return(t,n)=>(u(),h(z,null,[l("aside",{class:N(["sidebar hover-scrollbar",{open:e.open}])},[f(Me,{class:"nav"}),w(t.$slots,"sidebar-top",{},void 0,!0),f(rs),w(t.$slots,"sidebar-bottom",{},void 0,!0)],2),f(ds)],64))}});var ps=m(hs,[["__scopeId","data-v-61004fbf"]]);const _s=/bitbucket.org/;function fs(){const e=D(),t=F(),n=_(()=>{const a=Qt(t.value.frontmatter.editLink)?e.value.themeConfig.editLinks:t.value.frontmatter.editLink,{repo:o,docsDir:i="",docsBranch:r="master",docsRepo:c=o}=e.value.themeConfig,{relativePath:p}=t.value;return!a||!p||!o?null:vs(o,c,i,r,p)}),s=_(()=>e.value.themeConfig.editLinkText||"Edit this page");return{url:n,text:s}}function vs(e,t,n,s,a){return _s.test(e)?gs(e,t,n,s,a):ms(e,t,n,s,a)}function ms(e,t,n,s,a){return(ie(t)?t:`https://github.com/${t}`).replace(G,"")+`/edit/${s}/`+(n?n.replace(G,"")+"/":"")+a}function gs(e,t,n,s,a){return(ie(t)?t:e).replace(G,"")+`/src/${s}/`+(n?n.replace(G,"")+"/":"")+a+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const ks={class:"edit-link"},$s=["href"],xs=b({setup(e){const{url:t,text:n}=fs();return(s,a)=>(u(),h("div",ks,[d(t)?(u(),h("a",{key:0,class:"link",href:d(t),target:"_blank",rel:"noopener noreferrer"},[oe(L(d(n))+" ",1),f(le,{class:"icon"})],8,$s)):x("",!0)]))}});var bs=m(xs,[["__scopeId","data-v-17eda031"]]);const ws={key:0,class:"last-updated"},ys={class:"prefix"},Ss={class:"datetime"},Ls=b({setup(e){const t=D(),n=F(),s=_(()=>{const i=t.value.themeConfig.lastUpdated;return i!==void 0&&i!==!1}),a=_(()=>{const i=t.value.themeConfig.lastUpdated;return i===!0?"Last Updated":i}),o=q("");return Y(()=>{o.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(i,r)=>d(s)?(u(),h("p",ws,[l("span",ys,L(d(a))+":",1),l("span",Ss,L(o.value),1)])):x("",!0)}});var Cs=m(Ls,[["__scopeId","data-v-5a2a6a2c"]]);const Es={class:"page-footer"},Rs={class:"edit"},Ts={class:"updated"},As=b({setup(e){return(t,n)=>(u(),h("footer",Es,[l("div",Rs,[f(bs)]),l("div",Ts,[f(Cs)])]))}});var Ds=m(As,[["__scopeId","data-v-a6128342"]]);function Ps(){const e=D(),t=F(),n=_(()=>Pe(te(t.value.relativePath))),s=_(()=>{const c=ce(e.value.themeConfig.sidebar,n.value);return re(c)?Be(c):[]}),a=_(()=>s.value.findIndex(c=>c.link===n.value)),o=_(()=>{if(e.value.themeConfig.nextLinks!==!1&&a.value>-1&&a.value<s.value.length-1)return s.value[a.value+1]}),i=_(()=>{if(e.value.themeConfig.prevLinks!==!1&&a.value>0)return s.value[a.value-1]}),r=_(()=>!!o.value||!!i.value);return{next:o,prev:i,hasLinks:r}}const Bs={},Is={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ms=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Us=[Ms];function Hs(e,t){return u(),h("svg",Is,Us)}var Ns=m(Bs,[["render",Hs]]);const zs={},qs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Fs=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Os=[Fs];function Ws(e,t){return u(),h("svg",qs,Os)}var js=m(zs,[["render",Ws]]);const Vs={key:0,class:"next-and-prev-link"},Gs={class:"container"},Js={class:"prev"},Ks=["href"],Ys={class:"text"},Xs={class:"next"},Qs=["href"],Zs={class:"text"},eo=b({setup(e){const{hasLinks:t,prev:n,next:s}=Ps();return(a,o)=>d(t)?(u(),h("div",Vs,[l("div",Gs,[l("div",Js,[d(n)?(u(),h("a",{key:0,class:"link",href:a.$withBase(d(n).link)},[f(Ns,{class:"icon icon-prev"}),l("span",Ys,L(d(n).text),1)],8,Ks)):x("",!0)]),l("div",Xs,[d(s)?(u(),h("a",{key:0,class:"link",href:a.$withBase(d(s).link)},[l("span",Zs,L(d(s).text),1),f(js,{class:"icon icon-next"})],8,Qs)):x("",!0)])])])):x("",!0)}});var to=m(eo,[["__scopeId","data-v-b7bd651c"]]);const no={class:"page"},so={class:"container hover-scrollbar"},oo={class:"content"},ao=b({setup(e){return(t,n)=>{const s=P("Content");return u(),h("main",no,[l("div",so,[w(t.$slots,"top",{},void 0,!0),l("div",oo,[f(s)]),f(Ds),f(to),w(t.$slots,"bottom",{},void 0,!0)])])}}});var ro=m(ao,[["__scopeId","data-v-f7095a1c"]]);const io={key:0,id:"ads-container"},co=b({setup(e){const t=Qe(()=>import("./Home.e19afe5a.js")),n=()=>null,s=n,a=n,o=n,i=E(),r=Q(),c=D(),p=_(()=>r.value.themeConfig),g=F(),k=_(()=>!!i.data.frontmatter.customLayout),y=_(()=>!!i.data.frontmatter.home),$=_(()=>{const{themeConfig:v}=c.value,{frontmatter:M}=i.data;return M.navbar===!1||v.navbar===!1?!1:r.value.title||v.logo||v.repo||v.nav}),C=q(!1),B=_(()=>{const{frontmatter:v}=i.data;if(v.home||v.sidebar===!1)return!1;const{themeConfig:M}=c.value;return!sn(ce(M.sidebar,i.data.relativePath))}),I=v=>{C.value=typeof v=="boolean"?v:!C.value},Ne=I.bind(null,!1);ae(i,Ne);const ze=_(()=>[{"no-navbar":!$.value,"sidebar-open":C.value,"no-sidebar":!B.value}]);return(v,M)=>{const qe=P("Content"),Fe=P("Debug");return u(),h(z,null,[l("div",{class:N(["theme",d(ze)])},[d($)?(u(),S(Kn,{key:0,onToggle:I},{search:R(()=>[w(v.$slots,"navbar-search",{},()=>[d(p).algolia?(u(),S(d(o),{key:0,options:d(p).algolia},null,8,["options"])):x("",!0)])]),_:3})):x("",!0),f(ps,{open:C.value},{"sidebar-top":R(()=>[w(v.$slots,"sidebar-top")]),"sidebar-bottom":R(()=>[w(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:M[0]||(M[0]=wo=>I(!1))}),d(k)?(u(),S(qe,{key:1})):d(y)?(u(),S(d(t),{key:2},{hero:R(()=>[w(v.$slots,"home-hero")]),features:R(()=>[w(v.$slots,"home-features")]),footer:R(()=>[w(v.$slots,"home-footer")]),_:3})):(u(),S(ro,{key:3},{top:R(()=>[w(v.$slots,"page-top-ads",{},()=>[d(p).carbonAds&&d(p).carbonAds.carbon?(u(),h("div",io,[(u(),S(d(s),{key:"carbon"+d(g).relativePath,code:d(p).carbonAds.carbon,placement:d(p).carbonAds.placement},null,8,["code","placement"]))])):x("",!0)]),w(v.$slots,"page-top")]),bottom:R(()=>[w(v.$slots,"page-bottom"),w(v.$slots,"page-bottom-ads",{},()=>[d(p).carbonAds&&d(p).carbonAds.custom?(u(),S(d(a),{key:"custom"+d(g).relativePath,code:d(p).carbonAds.custom,placement:d(p).carbonAds.placement},null,8,["code","placement"])):x("",!0)])]),_:3}))],2),f(Fe)],64)}}}),lo={class:"theme"},uo=l("h1",null,"404",-1),ho=["href"],po=b({setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function n(){return t[Math.floor(Math.random()*t.length)]}return(s,a)=>(u(),h("div",lo,[uo,l("blockquote",null,L(n()),1),l("a",{href:s.$site.base,"aria-label":"go to home"},"Take me home.",8,ho)]))}}),J={Layout:co,NotFound:po},ee=new Set,He=()=>document.createElement("link"),_o=e=>{const t=He();t.rel="prefetch",t.href=e,document.head.appendChild(t)},fo=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let j;const vo=A&&(j=He())&&j.relList&&j.relList.supports&&j.relList.supports("prefetch")?_o:fo;function mo(){if(!A||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(o=>{o.forEach(i=>{if(i.isIntersecting){const r=i.target;n.unobserve(r);const{pathname:c}=r;if(!ee.has(c)){ee.add(c);const p=Ae(c);vo(p)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(o=>{const{target:i,hostname:r,pathname:c}=o,p=c.match(/\.\w+$/);p&&p[0]!==".html"||i!=="_blank"&&r===location.hostname&&(c!==location.pathname?n.observe(o):ee.add(c))})})};Y(s);const a=E();ae(()=>a.path,s),Re(()=>{n&&n.disconnect()})}const go=J.NotFound||(()=>"404 Not Found"),ko={name:"VitePressApp",setup(){return mo(),()=>H(J.Layout)}};function $o(){const e=bo(),t=xo();t.provide(De,e);const n=D(e.route),s=F(e.route);return A&&jt(e.route,n),Ut(t,V,n,s),Ht(t),J.enhanceApp&&J.enhanceApp({app:t,router:e,siteData:V}),{app:t,router:e}}function xo(){return Ze(ko)}function bo(){let e=A,t;return tt(n=>{let s=Ae(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),A?(e=!1,import(s)):require(s)},go)}if(A){const{app:e,router:t}=$o();t.go().then(()=>{e.mount("#app")})}export{be as N,D as a,$o as createApp,F as u};
