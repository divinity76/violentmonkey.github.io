"use strict";(self.webpackChunkviolentmonkey_github_io=self.webpackChunkviolentmonkey_github_io||[]).push([[147],{1307:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}n.d(t,{RP:function(){return i}});var l=n(9474);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){var a,l,c;a=e,l=t,c=n[t],(l=r(l))in a?Object.defineProperty(a,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[l]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const o=l.createContext({});function i(e){const t=l.useContext(o);return l.useMemo((()=>"function"==typeof e?e(t):s(s({},t),e)),[t,e])}},4397:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.p},default:function(){return u}});var a=n(1307),r=n(9474);function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",span:"span",ul:"ul",li:"li",pre:"pre",code:"code"},(0,a.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Assuming you already know what a ",r.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Userscript",target:"_blank",rel:"nofollow noopener noreferrer"},"userscript")," is, we will talk about how to create your own userscript here."),"\n",r.createElement(t.p,null,"With the help of a userscript manager, such as Violentmonkey, you can easily create your own script."),"\n",r.createElement(t.h2,{id:"create-a-userscript-for-the-active-tab",style:{position:"relative"}},r.createElement(t.a,{href:"#create-a-userscript-for-the-active-tab","aria-label":"create a userscript for the active tab permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Create a userscript for the active tab"),"\n",r.createElement(t.p,null,"First make sure you have ",r.createElement(t.a,{href:"/get-it/"},"Violentmonkey")," installed."),"\n",r.createElement(t.p,null,"Then you'll find a monkey icon on the toolbar of your browser."),"\n",r.createElement(t.p,null,"Click on the toolbar icon, and then click on the Plus icon to create a new script for the site of the active tab."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 333px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 49.69325153374233%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR42qVSy27TUBD1J9CIOg3149pO/MrDJLFjO7ZDiEARFIGoA0hsAAlUEgJV0wYS2LBhwxewY82aP+AH+KTD3Eu7QiwQi6OZuZp7zrwky6rjf2CYFgzDhKox6LoByXE92LYNu+Gg0bD/CbbtoNlsoR30cWMyQV5kkPb3FTBSYaTClcxzReMv8cUbY4YgHaZDNJw6Xh/exZvpM0iH5QxXqjLqpimSdE2n0hkYQdOZ8C0i4CQXVlFUIragqRoV0kB2+zmS6RJPHy4hbdZn+PrqDk4fTeG1AoyKAimpDuIBsixHFA2IxBQwDIPmZqEsS9HurLyP2eMXePDhB8qPP/H20xdIq5MTPLmV42A8hFW30ev10G530Gq1EQRXEXQCUTkHJ+WEcZyIdpM4xrC4iXvH33Bw/B2r958hna3XuCzX4PlteJ4P13GFuvBpYQ7FnJzHvEJFUSDLMmq1GnZ3ZfKrtGENl3YqmM/nVOHqFD4lj8dj9PuhaDMMI4qvk5+dv2WiKsYYRqMRrlFuJwiQJAnCKMSENrxTqeDo6CWk7XaLvb0qfN+nTzEGg4jmFhFRH91uV/i8de7zHH4VfCmqqgrLwcfB4+WSlvJusyHCGt1TE3meE34vJU1TgaIYCdIwDIV1XfcP8L/8GhaLBX4B0807aeBXBN0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="easy 1"\n        title=""\n        src="/static/80726b39919f5a205b7af42b156d5bc9/24c7e/easy-1.png"\n        srcset="/static/80726b39919f5a205b7af42b156d5bc9/222b7/easy-1.png 163w,\n/static/80726b39919f5a205b7af42b156d5bc9/ff46a/easy-1.png 325w,\n/static/80726b39919f5a205b7af42b156d5bc9/24c7e/easy-1.png 333w"\n        sizes="(max-width: 333px) 100vw, 333px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",r.createElement(t.h2,{id:"what-makes-up-a-userscript",style:{position:"relative"}},r.createElement(t.a,{href:"#what-makes-up-a-userscript","aria-label":"what makes up a userscript permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"What makes up a userscript"),"\n",r.createElement(t.p,null,"A userscript consists of two parts: the metadata and your program."),"\n",r.createElement(t.p,null,"The metadata declares the basic information of a script:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"descriptive fields, like name, description, author, etc.;"),"\n",r.createElement(t.li,null,"APIs and permissions, like in which URLs the script is allowed to run;"),"\n"),"\n",r.createElement(t.p,null,"For more details, see ",r.createElement(t.a,{href:"/api/metadata-block/"},"Metadata Block")," and ",r.createElement(t.a,{href:"/api/gm/"},"GM functions"),"."),"\n",r.createElement(t.pre,{className:"language-js"},r.createElement(t.code,{className:"language-js code-highlight"},r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// ==UserScript=="),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @name        New script"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @namespace   Violentmonkey Scripts"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @match       *://*/*"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @grant       none"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @version     1.0"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @author      -"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// @description 3/8/2020, 8:42:28 PM"),"\n"),r.createElement(t.span,{className:"code-line"},r.createElement(t.span,{className:"token comment"},"// ==/UserScript=="),"\n"))),"\n",r.createElement(t.p,null,"The rest part of the code runs in target webpages as usual JavaScript assets."),"\n",r.createElement(t.h2,{id:"userscript-code",style:{position:"relative"}},r.createElement(t.a,{href:"#userscript-code","aria-label":"userscript code permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Userscript code"),"\n",r.createElement(t.p,null,"Please note that the code executes directly in the browser, so the syntax in this script must be supported by the browser natively."),"\n",r.createElement(t.p,null,"For example, ESNext features that are not supported by the browser will fail as ",r.createElement(t.code,null,"SyntaxError"),"."),"\n",r.createElement(t.p,null,"Modern browsers like Chrome, Firefox, Edge support most of ES 6 features, so it is safe to use most of them if you are not targetting last century users."),"\n",r.createElement(t.p,null,"However there are exceptions. For example ES modules won't work in userscripts because they are supposed to inject into webpage as single-file scripts."),"\n",r.createElement(t.p,null,"If you want to write userscripts with some awesome features that are not supported by browsers yet or won't be supported, such as ES modules, CSS modules, please check out ",r.createElement(t.a,{href:"../using-modern-syntax/"},"How to use modern syntax in a userscript"),"."))}var c=function(e={}){const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},s=n(2349),o=n(301),i=n(9144);function m({location:e,data:t,children:n}){const{mdx:a}=t,l=(0,r.useRef)(),{pathname:c}=e,i="/"===c;return r.createElement(o.A,{location:e,sidebar:a.frontmatter.sidebar},r.createElement("main",{className:"flex-1 has-toc"},!i&&r.createElement("section",{className:"mb-10 pt-1"},r.createElement("h1",null,a.frontmatter.title)),r.createElement("section",{className:"items-start with-toc"},!i&&r.createElement(s.A,{data:a.tableOfContents,articleRef:l}),r.createElement("article",{className:"flex-1 min-w-0 mr-4",ref:l},n)),r.createElement("section",null,r.createElement("hr"),a.fields.slug.startsWith("posts/")&&r.createElement("div",{className:"mb-6"},r.createElement("em",null,"Published at ",a.frontmatter.date)))))}function u(e){return r.createElement(m,e,r.createElement(c,e))}},8931:function(e,t,n){n.d(t,{A:function(){return l}});let a=!1;try{const e=Object.defineProperty({},"passive",{get(){a=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(c){}const r=!!a&&{passive:!0};function l(e){return window.addEventListener("scroll",e,r),()=>window.removeEventListener("scroll",e,r)}},9144:function(e,t,n){n.d(t,{p:function(){return c}});var a=n(9474),r=n(8136),l=n(1713);function c(){const{site:{siteMetadata:{title:e,subtitle:t}}}=(0,r.useStaticQuery)("3202921338");return a.createElement(a.Fragment,null,a.createElement("title",null,e),a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"google-site-verification",content:"OKMYmcVuMfm9H_UjfNXPzRb2c0QoBtmZ7v1KwHNXnRQ"}),a.createElement("link",{rel:"shortcut icon",type:"image/png",href:l.A}))}},301:function(e,t,n){n.d(t,{A:function(){return w}});var a=n(8595),r=n(9474),l=(n(3763),n(993),n(1622),n(5376),n(8136));const c=(s=function(e){const{allMdx:{nodes:t}}=(0,l.useStaticQuery)("1116475411"),n=(0,r.useMemo)((()=>(null==e?void 0:e.match)&&(null==t?void 0:t.filter((t=>{var n;return(null===(n=t.frontmatter.sidebar)||void 0===n?void 0:n.match)===e.match})).sort(((e,t)=>e.frontmatter.sidebar.order-t.frontmatter.sidebar.order)))),[e,t]),[a,c]=(0,r.useState)(!1);return{matchedNodes:n,show:a,setShow:c,toggle:()=>{c(!a)}}},o=r.createContext(null),{Provider:function(e){var t=s(e.initialState);return r.createElement(o.Provider,{value:t},e.children)},useContainer:function(){var e=r.useContext(o);if(null===e)throw new Error("Component must be wrapped with <Container.Provider>");return e}});var s,o,i=n(4432),m=(n(6851),n(2445),n(8931));function u(){const e=(0,r.useRef)();return(0,r.useEffect)((()=>(0,m.A)((()=>{const t=document.documentElement,n=(document.body.scrollTop||t.scrollTop)/(t.scrollHeight-t.clientHeight),a=Math.min(1,n);e.current.style.transform=`scaleX(${a})`})))),r.createElement("div",{className:"w-full h-px"},r.createElement("div",{className:"w-full h-full origin-left bg-yellow-500 scale-x-0",ref:e}))}function p(){const[e,t]=(0,r.useState)(null);return e?r.createElement("div",{className:"bg-orange-200 px-4 text-sm flex","data-ga-category":"banner"},r.createElement("div",{className:"flex-1",dangerouslySetInnerHTML:{__html:e}}),r.createElement("div",{onClick:()=>{t(null)},className:"cursor-pointer text-gray-600","data-ga-label":"hide"},"✗")):null}function d(e){const{matchedNodes:t,toggle:n}=c.useContainer(),{data:a}=e,s=a.allMdx.nodes.reduce(((e,t)=>(t.frontmatter.redirect_from.forEach((n=>{e[n]=`/${t.fields.slug}`})),e)),{});return r.createElement("header",{className:"sticky top-0 left-0 right-0 bg-white z-10"},r.createElement("nav",null,r.createElement(l.Link,{to:"/",className:"nav-icon sm:hidden"},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M12 0l-12 12h4v12h5v-8h6v8h5v-12h4z"}))),t&&r.createElement("a",{className:"nav-icon lg:hidden",onClick:e=>{e.stopPropagation(),n()}},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M0 2h24v4h-24zM0 10h24v4h-24zM0 18h24v4h-24z"}))),r.createElement(l.Link,{to:"/",className:"brand hidden sm:block"},"Violentmonkey"),r.createElement("span",{className:"flex-1"}),r.createElement("div",{className:"overflow-auto min-w-0 flex whitespace-no-wrap"},a.site.siteMetadata.menu.map((e=>r.createElement(l.Link,{className:"nav-item",key:e.path,to:s[e.path]||e.path,activeClassName:"active",partiallyActive:!0},e.label))))),r.createElement(u,null))}var f=e=>r.createElement(l.StaticQuery,{query:"1700780748",render:t=>r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(d,(0,i.A)({},e,{data:t})))});function h(e){const{data:{site:{siteMetadata:{copyright:t,footer:n}}}}=e;return r.createElement("footer",{className:"flex mt-10 p-6 pb-16 border-t border-gray-400 lg:pb-6"},r.createElement("div",null,"Violentmonkey ",t),n.map((e=>r.createElement(l.Link,{className:"mx-2",key:e.path,to:e.path},e.label))))}var E=e=>r.createElement(l.StaticQuery,{query:"2344890832",render:t=>r.createElement(h,(0,i.A)({},e,{data:t}))});function b(){const{matchedNodes:e,setShow:t}=c.useContainer();return(0,r.useEffect)((()=>{if(e){const e=()=>{t(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}}),[e,t]),e?r.createElement("aside",{className:"sidebar"},r.createElement("ul",null,e.map(((e,t)=>r.createElement("li",{key:t},r.createElement(l.Link,{to:`/${e.fields.slug}`,activeClassName:"active"},e.frontmatter.title)))))):null}function v(){const[e,t]=(0,r.useState)(!1);return e?r.createElement("div",{className:"fixed bottom-0 right-0 w-full h-full flex flex-col items-end z-10 max-w-[320px] max-h-[450px]"},r.createElement("div",{className:"p-2 cursor-pointer",onClick:()=>t(!1)},r.createElement("svg",{viewBox:"0 0 12 12",className:"w-4 h-4"},r.createElement("path",{d:"M0 1L11 12L12 11L1 0zM11 0L0 11L1 12L12 1z",stroke:"none",fill:"currentColor"}))),r.createElement("iframe",{className:"flex-1 w-full",src:"https://discord.com/widget?id=995346102003965952&theme=dark",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})):r.createElement("a",{className:"fixed bottom-0 right-8 px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white rounded-t-lg uppercase cursor-pointer",onClick:()=>t(!0)},"Open Chat")}const g=["sidebar"];function y(e){const{location:{pathname:t},children:n}=e,{show:a}=c.useContainer();return"/offline-plugin-app-shell-fallback/"===t?null:r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement("div",{className:"relative flex z-0 "+(a?"sidebar-open":"")},r.createElement(b,null),n),r.createElement(E,null),r.createElement(v,null))}var w=e=>{let{sidebar:t}=e,n=(0,a.A)(e,g);return r.createElement(c.Provider,{initialState:t},r.createElement(y,n))}},2349:function(e,t,n){n.d(t,{A:function(){return s}});n(116),n(2445);var a=n(9474),r=n(8136),l=n(8931);function c({items:e}){return a.createElement("ul",null,e.map(((e,t)=>{const n=e.url.indexOf("#"),l=n<0?"#":e.url.slice(n);return a.createElement("li",{key:t},a.createElement(r.Link,{to:l},e.title),e.items&&a.createElement(c,{items:e.items}))})))}function s(e){const{className:t,data:n,articleRef:r}=e,s=(0,a.useRef)(),o=(0,a.useRef)();return(0,a.useEffect)((()=>{if(!n)return;const e=Array.from(s.current.querySelectorAll("a"));e.forEach((e=>{const t=decodeURIComponent(e.href.split("#")[1]||"");if(e.dataset.id=t,r.current){const n=r.current.querySelector(`#${CSS.escape(t)}`);n&&(e.textContent=n.textContent.trim())}}));return(0,l.A)((()=>{if(!r.current||!s.current)return;const{scrollTop:t}=document.body,n=e.map((e=>{const{id:n}=e.dataset,a=r.current.querySelector(`#${CSS.escape(n)}`);return a&&{id:n,a:e,offset:a.getBoundingClientRect().top-t-70}})).filter(Boolean),{a:a}=n.find(((e,t)=>{const a=n[t+1];return a&&a.offset>0}))||{};o.current&&(o.current.className=""),a&&(a.className="active"),o.current=a}))})),a.createElement("section",{className:`toc ${t||""}`,ref:s},(null==n?void 0:n.items)&&a.createElement(a.Fragment,null,a.createElement("h2",null,"Table of Contents"),a.createElement(c,{items:n.items})))}},1713:function(e,t,n){t.A=n.p+"static/vm-6437e4e5a400c6eff1c23ead4d549b0a.png"}}]);
//# sourceMappingURL=component---src-templates-post-index-js-content-file-path-content-guide-creating-a-userscript-index-md-843b89f58ed3a115133a.js.map