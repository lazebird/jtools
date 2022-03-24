import{r as p,o as l,c as u,a as j,u as w,b as d,d as _,F as x,e as L,f as R,w as m,p as A,g as O,h as I,t as V,n as k,i as P,j as v,K as T,k as D,l as H,m as z,A as C}from"./vendor.e64d6464.js";const $=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}};$();var N=(e,s)=>{const r=e.__vccOpts||e;for(const[o,t]of s)r[o]=t;return r};const S={setup(e){var s,r;return document.title=(r=(s={name:"@lazebird/jtools",version:"0.2.2",keywords:["vue","vue3","vite","xliff","xml","i18n","solitaire","openAPI"],author:"lazebird",license:"MIT",bugs:{url:"https://github.com/lazebird/jtools/issues"},homepage:"https://github.com/lazebird/jtools",files:["dist"],main:"./dist/jtools.umd.js",module:"./dist/jtools.es.js",exports:{".":{import:"./dist/jtools.es.js",require:"./dist/jtools.umd.js"}},private:!1,scripts:{dev:"vite",build:"vue-tsc --noEmit && vite build",demo:"vue-tsc --noEmit && vite build --mode demo",preview:"vite preview","lint:eslint":'eslint --cache --max-warnings 0  "{src,mock}/**/*.{vue,ts,tsx}" --fix',"lint:prettier":'prettier --write  "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',"lint:stylelint":'stylelint --cache --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',"lint:lint-staged":"lint-staged -c ./.husky/lintstagedrc.js"},dependencies:{"@ant-design/icons-vue":"^6.1.0","@zip.js/zip.js":"^2.4.7","ant-design-vue":"3.1.0-rc.2",less:"^4.1.2",vue:"^3.2.31","vue-router":"^4.0.14"},devDependencies:{"@types/node":"^17.0.18","@typescript-eslint/eslint-plugin":"^5.12.0","@typescript-eslint/parser":"^5.12.0","@vitejs/plugin-vue":"^2.2.0","@vue/compiler-sfc":"^3.2.31","cz-conventional-changelog":"3.3.0",eslint:"^8.9.0","eslint-define-config":"^1.2.5","eslint-plugin-vue":"^8.4.1",husky:"^7.0.4",typescript:"^4.5.5","unplugin-vue-components":"^0.17.18",vite:"^2.8.3","vue-eslint-parser":"^8.2.0","vue-tsc":"^0.29.8"},config:{commitizen:{path:"./node_modules/cz-conventional-changelog"}}})==null?void 0:s.name)!=null?r:"Hello World!",(o,t)=>{const i=p("RouterView");return l(),u(i)}}};const B=e=>(A("data-v-0dd7aa06"),e=e(),O(),e),q={class:"nav"},F=B(()=>_("label",null,"Navigator:",-1)),K={class:"body"},W={setup(e){const s=j(E.getRoutes().filter(o=>o.path!=="/")),r=w();return(o,t)=>{const i=p("RouterLink"),n=p("RouterView");return l(),d("div",null,[_("div",q,[F,(l(!0),d(x,null,L(s.value,c=>(l(),u(i,{to:c.path,class:k(["item",c.path===P(r).path?"active":""])},{default:m(()=>[I(V(c.name),1)]),_:2},1032,["to","class"]))),256))]),_("div",K,[R(n,null,{default:m(({Component:c})=>[o.$route.meta.keepAlive!==!1?(l(),u(T,{key:0},[(l(),u(v(c)))],1024)):(l(),u(v(c),{key:1}))]),_:1})])])}}};var M=N(W,[["__scopeId","data-v-0dd7aa06"]]);const U="modulepreload",f={},Y="./",a=function(s,r){return!r||r.length===0?s():Promise.all(r.map(o=>{if(o=`${Y}${o}`,o in f)return;f[o]=!0;const t=o.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":U,t||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),t)return new Promise((c,b)=>{n.addEventListener("load",c),n.addEventListener("error",b)})})).then(()=>s())},h={"../views/about.vue":()=>a(()=>import("./about.57e0d919.js"),["assets/about.57e0d919.js","assets/about.17400b6b.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/i18nHelper.vue":()=>a(()=>import("./i18nHelper.81ad8fca.js"),["assets/i18nHelper.81ad8fca.js","assets/index.6783d211.css","assets/index.a18cc309.css","assets/index.65ae14b2.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css","assets/strUtils.1410245a.js","assets/strUtils.9a14f1de.css"]),"../views/setting.vue":()=>a(()=>import("./setting.db8e1131.js"),["assets/setting.db8e1131.js","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/solitaireCount/count.vue":()=>a(()=>import("./count.f03350eb.js"),["assets/count.f03350eb.js","assets/count.92d280a4.css","assets/index.a7882d28.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/solitaireCount/index.vue":()=>a(()=>import("./index.2e423942.js"),["assets/index.2e423942.js","assets/index.98e0cda6.css","assets/index.a18cc309.css","assets/index.a7882d28.css","assets/index.bf7128e9.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css","assets/layout.3004251f.js","assets/layout.c0ac7169.css","assets/count.f03350eb.js","assets/count.92d280a4.css","assets/stat.9f6214bc.js","assets/stat.8ba3a29e.css"]),"../views/solitaireCount/layout.vue":()=>a(()=>import("./layout.3004251f.js"),["assets/layout.3004251f.js","assets/layout.c0ac7169.css","assets/index.a7882d28.css","assets/index.bf7128e9.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/solitaireCount/stat.vue":()=>a(()=>import("./stat.9f6214bc.js"),["assets/stat.9f6214bc.js","assets/stat.8ba3a29e.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/uriHelper/config.vue":()=>a(()=>import("./config.98a0b576.js"),["assets/config.98a0b576.js","assets/config.59d405e2.css","assets/index.6783d211.css","assets/index.a18cc309.css","assets/index.65ae14b2.css","assets/index.a7882d28.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/uriHelper/index.vue":()=>a(()=>import("./index.ba1e3227.js"),["assets/index.ba1e3227.js","assets/index.6783d211.css","assets/index.a18cc309.css","assets/index.65ae14b2.css","assets/index.a7882d28.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css","assets/strUtils.1410245a.js","assets/strUtils.9a14f1de.css","assets/config.98a0b576.js","assets/config.59d405e2.css","assets/path.215fc192.js"]),"../views/xliffHelper/action.vue":()=>a(()=>import("./action.86b8e3d5.js"),["assets/action.86b8e3d5.js","assets/action.48036dc7.css","assets/index.6783d211.css","assets/index.a18cc309.css","assets/index.65ae14b2.css","assets/index.a7882d28.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/xliffHelper/config.vue":()=>a(()=>import("./config.ed0d8da5.js"),["assets/config.ed0d8da5.js","assets/config.0ca486e4.css","assets/index.6783d211.css","assets/index.a18cc309.css","assets/index.65ae14b2.css","assets/index.a7882d28.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"]),"../views/xliffHelper/index.vue":()=>a(()=>import("./index.3b053943.js"),["assets/index.3b053943.js","assets/index.6783d211.css","assets/index.a18cc309.css","assets/index.65ae14b2.css","assets/index.a7882d28.css","assets/index.bf7128e9.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css","assets/strUtils.1410245a.js","assets/strUtils.9a14f1de.css","assets/action.86b8e3d5.js","assets/action.48036dc7.css","assets/config.ed0d8da5.js","assets/config.0ca486e4.css","assets/table.573ad7c0.js","assets/table.75875308.css","assets/path.215fc192.js"]),"../views/xliffHelper/table.vue":()=>a(()=>import("./table.573ad7c0.js"),["assets/table.573ad7c0.js","assets/table.75875308.css","assets/index.bf7128e9.css","assets/index.65ae14b2.css","assets/index.a7882d28.css","assets/vendor.e64d6464.js","assets/vendor.47c06cde.css"])},G=e=>e.match(/\/views\/[^\/]+\.vue/)||e.match(/index\.vue/),J=e=>e.replace(/.*\/views\//,"/").replace(/\/index\.vue/,"").replace(/\.vue/,""),Q=e=>e.replace(/.*\//,""),y=[];for(const e in h){if(!G(e))continue;const s=J(e),r=Q(s);y.push({path:s,name:r,component:h[e]})}const X=[],Z={setting:100,about:90},g=e=>{var s;return(s=Z[e])!=null?s:50},ee=(e,s)=>g(e.name)-g(s.name),te=[{path:"/",name:"Home",component:M,redirect:"/about",children:[...X,...y].sort(ee)}],E=D({history:H(),routes:te});z(S).use(C).use(E).mount("#app");export{N as _};
