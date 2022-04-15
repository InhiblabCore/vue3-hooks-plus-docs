import{x as F,d as x,o as D,c as i,l as A,u as y,b as m,B as R,F as f,G as B,p as v,_ as w,w as H,L as S,f as h}from"./plugin-vue_export-helper.cdf78444.js";import"./index.f9ad88a6.js";import{u as _}from"./index.4d14add5.js";import{g as b}from"./domTarget.cdc2e30a.js";import{u as L}from"./useEffectWithTarget.065a194d.js";import"./index.ccf7621c.js";import"./isBrowser.2609af58.js";const q=(r,C,s={})=>{const o=F(s);L(()=>{const n=b(C);if(!(n!=null&&n.addEventListener))return;const c=p=>{var E,u,k;(u=(E=o.value).onDragStart)==null||u.call(E,p),(k=p.dataTransfer)==null||k.setData("custom",JSON.stringify(r))},l=p=>{var E,u;(u=(E=o.value).onDragEnd)==null||u.call(E,p)};return n.setAttribute("draggable",`${(s==null?void 0:s.draggable)!==void 0?s==null?void 0:s.draggable:!0}`),n.addEventListener("dragstart",c),n.addEventListener("dragend",l),()=>{n.removeEventListener("dragstart",c),n.removeEventListener("dragend",l)}},[],C)},I=(r,C={})=>{const s=F(C),o=F();L(()=>{const n=b(r);if(!(n!=null&&n.addEventListener))return;const c=(a,t)=>{const e=a.getData("text/uri-list"),d=a.getData("custom");if(d&&s.value.onDom){let g=d;try{g=JSON.parse(d)}catch{g=d}s.value.onDom(g,t);return}if(e&&s.value.onUri){s.value.onUri(e,t);return}if(a.files&&a.files.length&&s.value.onFiles){s.value.onFiles(Array.from(a.files),t);return}a.items&&a.items.length&&s.value.onText&&a.items[0].getAsString(g=>{s.value.onText(g,t)})},l=a=>{var t,e;a.preventDefault(),a.stopPropagation(),o.value=a.target,(e=(t=s.value).onDragEnter)==null||e.call(t,a)},p=a=>{var t,e;a.preventDefault(),(e=(t=s.value).onDragOver)==null||e.call(t,a)},E=a=>{var t,e;a.target===o.value&&((e=(t=s.value).onDragLeave)==null||e.call(t,a))},u=a=>{var t,e;a.preventDefault(),c(a.dataTransfer,a),(e=(t=s.value).onDrop)==null||e.call(t,a)},k=a=>{var t,e;c(a.clipboardData,a),(e=(t=s.value).onPaste)==null||e.call(t,a)};return n.addEventListener("dragenter",l),n.addEventListener("dragover",p),n.addEventListener("dragleave",E),n.addEventListener("drop",u),n.addEventListener("paste",k),()=>{n.removeEventListener("dragenter",l),n.removeEventListener("dragover",p),n.removeEventListener("dragleave",E),n.removeEventListener("drop",u),n.removeEventListener("paste",k)}},[],r)},$=x({props:{data:null},setup(r){const C=r,[s,{set:o}]=_(!1),n=F(null);return q(C.data,n,{onDragStart:()=>{o(!0)},onDragEnd:()=>{o(!1)}}),(c,l)=>(D(),i("div",{ref_key:"dragRef",ref:n,style:{border:"1px solid #e8e8e8",padding:"16px",width:"100px","text-align":"center","margin-right":"16px"}},A(y(s)?"dragging":`box-${r.data}`),513))}}),P={style:{display:"flex","margin-top":"8px"}},N=x({setup(r){const C=F(null),s=F([]),[o,{set:n}]=_(!1);return I(C,{onDom:(c,l)=>{s.value.push(`custom: ${c} dropped`),n(!1)},onDragEnter:()=>n(!0),onDragLeave:()=>n(!1)}),(c,l)=>(D(),i("div",null,[m("div",{ref_key:"dropRef",ref:C,style:{border:"1px dashed #e8e8e8",padding:"16px","text-align":"center","max-height":"400px","overflow-y":"scroll"}},[R(A(y(o)?"release here":"drop here")+" ",1),(D(!0),i(f,null,B(s.value,(p,E)=>(D(),i("p",{key:E},A(p),1))),128))],512),m("div",P,[(D(),i(f,null,B(["1","2","3","4","5"],(p,E)=>v($,{key:p,data:p},null,8,["data"])),64))])]))}}),T={components:{demo3:N}},Q='{"title":"useHover","description":"","frontmatter":{"map":{"path":"/useDrop","realPath":"src/useDrop/index.md"}},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"useDrop/index.md","lastUpdated":1650005723952}',V=S('<h1 id="usehover"><a class="header-anchor" href="#usehover" aria-hidden="true">#</a> useHover</h1><p>\u5904\u7406\u5143\u7D20\u62D6\u62FD\u7684 Hook\u3002</p><blockquote><p>useDrop \u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u6765\u63A5\u6536\u6587\u4EF6\u3001\u6587\u5B57\u548C\u7F51\u5740\u7684\u62D6\u62FD\u3002</p><p>useDrag \u5141\u8BB8\u4E00\u4E2A DOM \u8282\u70B9\u88AB\u62D6\u62FD\uFF0C\u9700\u8981\u914D\u5408 useDrop \u4F7F\u7528\u3002</p><p>\u5411\u8282\u70B9\u5185\u89E6\u53D1\u7C98\u8D34\u52A8\u4F5C\u4E5F\u4F1A\u88AB\u89C6\u4E3A\u62D6\u62FD\u3002</p></blockquote><h2 id="\u4EE3\u7801\u6F14\u793A"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h2><h3 id="\u57FA\u7840\u7528\u6CD5"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h3>',5);function O(r,C,s,o,n,c){const l=h("demo3"),p=h("demo");return D(),i("div",null,[V,m("p",null,[v(p,{src:"./demo/demo.vue",language:"vue",title:"\u57FA\u672C\u7528\u6CD5",desc:"\u62D6\u62FD\u533A\u57DF\u53EF\u4EE5\u63A5\u53D7\u6587\u4EF6\uFF0C\u94FE\u63A5\uFF0C\u6587\u5B57\uFF0C\u548C\u4E0B\u65B9\u7684 box \u8282\u70B9\u3002",componentName:"demo3",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%20DragDemo.vue%0A%26lt%3Btemplate%3E%0A%09%26lt%3Bdiv%0A%09%09ref%3D%22dragRef%22%0A%09%09style%3D%22border%3A1px%20solid%20%23e8e8e8%3B%20padding%3A%2016px%3B%20width%3A%20100px%3B%20text-align%3A%20center%3B%20margin-right%3A%2016px%3B%22%0A%09%3E%0A%09%09%7B%7B%20dragging%20%3F%20'dragging'%20%3A%20%60box-%24%7Bdata%7D%60%20%7D%7D%0A%09%26lt%3B%2Fdiv%3E%0A%26lt%3B%2Ftemplate%3E%0A%0A%26lt%3Bscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%20%0Aimport%20%7B%20useDrag%2C%20useBoolean%20%7D%20from%20'vue3-hooks-plus'%0A%0Aconst%20props%20%3D%20defineProps%26lt%3B%7B%0A%09data%3F%3A%20string%0A%7D%3E()%0Aconst%20%5Bdragging%2C%20%7B%20set%3A%20setDragging%20%7D%5D%20%3D%20useBoolean(false)%0Aconst%20dragRef%20%3D%20ref(null)%0A%0AuseDrag(props.data%2C%20dragRef%2C%20%7B%0A%09onDragStart%3A%20()%20%3D%3E%20%7B%0A%09%09setDragging(true)%0A%09%7D%2C%0A%09onDragEnd%3A%20()%20%3D%3E%20%7B%0A%09%09setDragging(false)%0A%09%7D%2C%0A%7D)%0A%26lt%3B%2Fscript%3E%0A%0A%20--%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20attr-name%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdropRef%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%20border%3A%201px%20dashed%20%23e8e8e8%20%3B%20padding%3A%2016px%3B%20text-align%3A%20center%3Bmax-height%3A%20400px%3Boverflow-y%3A%20scroll%3B%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%09%7B%7B%20isHovering%20%3F%20'release%20here'%20%3A%20'drop%20here'%20%7D%7D%0A%0A%09%09%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(item%2C%20index)%20in%20list%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eindex%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20item%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Edisplay%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20flex%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20property%22%3Emargin-top%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%208px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edrag-demo%3C%2Fspan%3E%0A%09%09%09%09%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(item%2C%20index)%20in%20%5B%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E2%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E3%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E4%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E5%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%09%09%3Cspan%20class%3D%22token%20attr-name%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%09%09%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%09%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useBoolean%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20useDrop%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue3-hooks-plus'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20DragDemo%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2FDragDemo.vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20dropRef%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20list%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3EisHovering%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20setIsHovering%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseBoolean%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20function%22%3EuseDrop%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EdropRef%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonDom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Econtent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20e%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09list%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Epush%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Ecustom%3A%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%20dropped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20function%22%3EsetIsHovering%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonDragEnter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EsetIsHovering%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonDragLeave%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EsetIsHovering%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eless%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3C!--%20%20DragDemo.vue%0A%3Ctemplate%3E%0A%09%3Cdiv%0A%09%09ref%3D%22dragRef%22%0A%09%09style%3D%22border%3A1px%20solid%20%23e8e8e8%3B%20padding%3A%2016px%3B%20width%3A%20100px%3B%20text-align%3A%20center%3B%20margin-right%3A%2016px%3B%22%0A%09%3E%0A%09%09%7B%7B%20dragging%20%3F%20'dragging'%20%3A%20%60box-%24%7Bdata%7D%60%20%7D%7D%0A%09%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%20%0Aimport%20%7B%20useDrag%2C%20useBoolean%20%7D%20from%20'vue3-hooks-plus'%0A%0Aconst%20props%20%3D%20defineProps%3C%7B%0A%09data%3F%3A%20string%0A%7D%3E()%0Aconst%20%5Bdragging%2C%20%7B%20set%3A%20setDragging%20%7D%5D%20%3D%20useBoolean(false)%0Aconst%20dragRef%20%3D%20ref(null)%0A%0AuseDrag(props.data%2C%20dragRef%2C%20%7B%0A%09onDragStart%3A%20()%20%3D%3E%20%7B%0A%09%09setDragging(true)%0A%09%7D%2C%0A%09onDragEnd%3A%20()%20%3D%3E%20%7B%0A%09%09setDragging(false)%0A%09%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A%0A%20--%3E%0A%0A%3Ctemplate%3E%0A%09%3Cdiv%3E%0A%09%09%3Cdiv%0A%09%09%09ref%3D%22dropRef%22%0A%09%09%09style%3D%22%20border%3A%201px%20dashed%20%23e8e8e8%20%3B%20padding%3A%2016px%3B%20text-align%3A%20center%3Bmax-height%3A%20400px%3Boverflow-y%3A%20scroll%3B%22%0A%09%09%3E%0A%09%09%09%7B%7B%20isHovering%20%3F%20'release%20here'%20%3A%20'drop%20here'%20%7D%7D%0A%0A%09%09%09%3Cp%20v-for%3D%22(item%2C%20index)%20in%20list%22%20%3Akey%3D%22index%22%3E%7B%7B%20item%20%7D%7D%3C%2Fp%3E%0A%09%09%3C%2Fdiv%3E%0A%09%09%3Cdiv%20style%3D%22display%3A%20flex%3B%20margin-top%3A%208px%22%3E%0A%09%09%09%3Cdrag-demo%0A%09%09%09%09v-for%3D%22(item%2C%20index)%20in%20%5B'1'%2C%20'2'%2C%20'3'%2C%20'4'%2C%20'5'%5D%22%0A%09%09%09%09%3Akey%3D%22item%22%0A%09%09%09%09%3Adata%3D%22item%22%0A%09%09%09%2F%3E%0A%09%09%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useBoolean%2C%20useDrop%20%7D%20from%20'vue3-hooks-plus'%0Aimport%20DragDemo%20from%20'.%2FDragDemo.vue'%0A%0Aconst%20dropRef%20%3D%20ref(null)%0Aconst%20list%20%3D%20ref(%5B%5D)%0Aconst%20%5BisHovering%2C%20%7B%20set%3A%20setIsHovering%20%7D%5D%20%3D%20useBoolean(false)%0A%0AuseDrop(dropRef%2C%20%7B%0A%09onDom%3A%20(content%3A%20string%2C%20e)%20%3D%3E%20%7B%0A%09%09list.value.push(%60custom%3A%20%24%7Bcontent%7D%20dropped%60)%0A%09%09setIsHovering(false)%0A%09%7D%2C%0A%09onDragEnter%3A%20()%20%3D%3E%20setIsHovering(true)%2C%0A%09onDragLeave%3A%20()%20%3D%3E%20setIsHovering(false)%2C%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A"},{default:H(()=>[v(l)]),_:1})])])}var X=w(T,[["render",O]]);export{Q as __pageData,X as default};
