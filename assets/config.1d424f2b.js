/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{a as p,o as s,c as r,w as u,m as x,f as n,b as k,e as P,h as g,t as w,F as C,M as I,N as U,I as B,_ as T,O as F}from"./vendor.3f7346f7.js";import{_ as K}from"./index.7c208a42.js";const O=g(" + New Tag "),V={props:{conf:{type:Object,required:!0},ignPats:{type:Array,required:!0}},emits:["update:ignPats"],setup(t,{emit:_}){const f=t,l=p({input:!1,val:""}),m=p();function y(d){ignPats.value=ignPats.value.filter(a=>a!==d)}function v(){l.value.val&&f.ignPats.indexOf(l.value.val)===-1&&_("update:ignPats",[...f.ignPats,l.value.val]),l.value={input:!1,val:""}}function N(){l.value.input=!0,U(()=>m.value.focus())}return(d,a)=>{const o=B,i=T,c=F,b=x;return s(),r(b,{class:"confbar",layout:"inline",model:t.conf},{default:u(()=>[n(i,{label:"idName"},{default:u(()=>[n(o,{value:t.conf.idName,"onUpdate:value":a[0]||(a[0]=e=>t.conf.idName=e)},null,8,["value"])]),_:1}),n(i,{label:"unitName"},{default:u(()=>[n(o,{value:t.conf.unitName,"onUpdate:value":a[1]||(a[1]=e=>t.conf.unitName=e)},null,8,["value"])]),_:1}),n(i,{label:"srcName"},{default:u(()=>[n(o,{value:t.conf.srcName,"onUpdate:value":a[2]||(a[2]=e=>t.conf.srcName=e)},null,8,["value"])]),_:1}),n(i,{label:"tgtName"},{default:u(()=>[n(o,{value:t.conf.tgtName,"onUpdate:value":a[3]||(a[3]=e=>t.conf.tgtName=e)},null,8,["value"])]),_:1}),n(i,{label:"ignorePatterns"},{default:u(()=>[(s(!0),k(C,null,P(t.ignPats,e=>(s(),r(c,{key:e,closable:"",onClose:q=>y(e)},{default:u(()=>[g(w(e),1)]),_:2},1032,["onClose"]))),128)),l.value.input?(s(),r(o,{key:0,ref_key:"inputRef",ref:m,value:l.value.val,"onUpdate:value":a[4]||(a[4]=e=>l.value.val=e),type:"text",size:"small",style:{width:"100px"},onBlur:v,onKeyup:I(v,["enter"])},null,8,["value","onKeyup"])):(s(),r(c,{key:1,style:{background:"#fff","border-style":"dashed"},onClick:N},{default:u(()=>[O]),_:1}))]),_:1})]),_:1},8,["model"])}}};var L=K(V,[["__scopeId","data-v-af8d3830"]]);export{L as default};
