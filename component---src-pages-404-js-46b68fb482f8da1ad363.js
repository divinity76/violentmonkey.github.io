"use strict";(self.webpackChunkviolentmonkey_github_io=self.webpackChunkviolentmonkey_github_io||[]).push([[125],{8931:function(e,t,n){n.d(t,{A:function(){return r}});let a=!1;try{const e=Object.defineProperty({},"passive",{get(){a=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(c){}const l=!!a&&{passive:!0};function r(e){return window.addEventListener("scroll",e,l),()=>window.removeEventListener("scroll",e,l)}},9144:function(e,t,n){n.d(t,{p:function(){return c}});var a=n(9474),l=n(8136),r=n(1713);function c(){const{site:{siteMetadata:{title:e,subtitle:t}}}=(0,l.useStaticQuery)("3202921338");return a.createElement(a.Fragment,null,a.createElement("title",null,e),a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"google-site-verification",content:"OKMYmcVuMfm9H_UjfNXPzRb2c0QoBtmZ7v1KwHNXnRQ"}),a.createElement("link",{rel:"shortcut icon",type:"image/png",href:r.A}))}},301:function(e,t,n){n.d(t,{A:function(){return x}});var a=n(8595),l=n(9474),r=(n(3763),n(993),n(1622),n(5376),n(8136));const c=(o=function(e){const{allMdx:{nodes:t}}=(0,r.useStaticQuery)("1116475411"),n=(0,l.useMemo)((()=>(null==e?void 0:e.match)&&(null==t?void 0:t.filter((t=>{var n;return(null===(n=t.frontmatter.sidebar)||void 0===n?void 0:n.match)===e.match})).sort(((e,t)=>e.frontmatter.sidebar.order-t.frontmatter.sidebar.order)))),[e,t]),[a,c]=(0,l.useState)(!1);return{matchedNodes:n,show:a,setShow:c,toggle:()=>{c(!a)}}},i=l.createContext(null),{Provider:function(e){var t=o(e.initialState);return l.createElement(i.Provider,{value:t},e.children)},useContainer:function(){var e=l.useContext(i);if(null===e)throw new Error("Component must be wrapped with <Container.Provider>");return e}});var o,i,s=n(4432),m=(n(6851),n(2445),n(8931));function u(){const e=(0,l.useRef)();return(0,l.useEffect)((()=>(0,m.A)((()=>{const t=document.documentElement,n=(document.body.scrollTop||t.scrollTop)/(t.scrollHeight-t.clientHeight),a=Math.min(1,n);e.current.style.transform=`scaleX(${a})`})))),l.createElement("div",{className:"w-full h-px"},l.createElement("div",{className:"w-full h-full origin-left bg-yellow-500 scale-x-0",ref:e}))}function d(){const[e,t]=(0,l.useState)(null);return e?l.createElement("div",{className:"bg-orange-200 px-4 text-sm flex","data-ga-category":"banner"},l.createElement("div",{className:"flex-1",dangerouslySetInnerHTML:{__html:e}}),l.createElement("div",{onClick:()=>{t(null)},className:"cursor-pointer text-gray-600","data-ga-label":"hide"},"✗")):null}function f(e){const{matchedNodes:t,toggle:n}=c.useContainer(),{data:a}=e,o=a.allMdx.nodes.reduce(((e,t)=>(t.frontmatter.redirect_from.forEach((n=>{e[n]=`/${t.fields.slug}`})),e)),{});return l.createElement("header",{className:"sticky top-0 left-0 right-0 bg-white z-10"},l.createElement("nav",null,l.createElement(r.Link,{to:"/",className:"nav-icon sm:hidden"},l.createElement("svg",{viewBox:"0 0 24 24"},l.createElement("path",{d:"M12 0l-12 12h4v12h5v-8h6v8h5v-12h4z"}))),t&&l.createElement("a",{className:"nav-icon lg:hidden",onClick:e=>{e.stopPropagation(),n()}},l.createElement("svg",{viewBox:"0 0 24 24"},l.createElement("path",{d:"M0 2h24v4h-24zM0 10h24v4h-24zM0 18h24v4h-24z"}))),l.createElement(r.Link,{to:"/",className:"brand hidden sm:block"},"Violentmonkey"),l.createElement("span",{className:"flex-1"}),l.createElement("div",{className:"overflow-auto min-w-0 flex whitespace-no-wrap"},a.site.siteMetadata.menu.map((e=>l.createElement(r.Link,{className:"nav-item",key:e.path,to:o[e.path]||e.path,activeClassName:"active",partiallyActive:!0},e.label))))),l.createElement(u,null))}var h=e=>l.createElement(r.StaticQuery,{query:"1700780748",render:t=>l.createElement(l.Fragment,null,l.createElement(d,null),l.createElement(f,(0,s.A)({},e,{data:t})))});function v(e){const{data:{site:{siteMetadata:{copyright:t,footer:n}}}}=e;return l.createElement("footer",{className:"flex mt-10 p-6 pb-16 border-t border-gray-400 lg:pb-6"},l.createElement("div",null,"Violentmonkey ",t),n.map((e=>l.createElement(r.Link,{className:"mx-2",key:e.path,to:e.path},e.label))))}var p=e=>l.createElement(r.StaticQuery,{query:"2344890832",render:t=>l.createElement(v,(0,s.A)({},e,{data:t}))});function E(){const{matchedNodes:e,setShow:t}=c.useContainer();return(0,l.useEffect)((()=>{if(e){const e=()=>{t(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}}),[e,t]),e?l.createElement("aside",{className:"sidebar"},l.createElement("ul",null,e.map(((e,t)=>l.createElement("li",{key:t},l.createElement(r.Link,{to:`/${e.fields.slug}`,activeClassName:"active"},e.frontmatter.title)))))):null}function g(){const[e,t]=(0,l.useState)(!1);return e?l.createElement("div",{className:"fixed bottom-0 right-0 w-full h-full flex flex-col items-end z-10 max-w-[320px] max-h-[450px]"},l.createElement("div",{className:"p-2 cursor-pointer",onClick:()=>t(!1)},l.createElement("svg",{viewBox:"0 0 12 12",className:"w-4 h-4"},l.createElement("path",{d:"M0 1L11 12L12 11L1 0zM11 0L0 11L1 12L12 1z",stroke:"none",fill:"currentColor"}))),l.createElement("iframe",{className:"flex-1 w-full",src:"https://discord.com/widget?id=995346102003965952&theme=dark",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})):l.createElement("a",{className:"fixed bottom-0 right-8 px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white rounded-t-lg uppercase cursor-pointer",onClick:()=>t(!0)},"Open Chat")}const w=["sidebar"];function b(e){const{location:{pathname:t},children:n}=e,{show:a}=c.useContainer();return"/offline-plugin-app-shell-fallback/"===t?null:l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement("div",{className:"relative flex z-0 "+(a?"sidebar-open":"")},l.createElement(E,null),n),l.createElement(p,null),l.createElement(g,null))}var x=e=>{let{sidebar:t}=e,n=(0,a.A)(e,w);return l.createElement(c.Provider,{initialState:t},l.createElement(b,n))}},768:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r.p},default:function(){return c}});var a=n(9474),l=n(301),r=n(9144);function c({location:e}){return a.createElement(l.A,{location:e},a.createElement("main",null,a.createElement("h1",null,"Not Found"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},1713:function(e,t,n){t.A=n.p+"static/vm-6437e4e5a400c6eff1c23ead4d549b0a.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-46b68fb482f8da1ad363.js.map