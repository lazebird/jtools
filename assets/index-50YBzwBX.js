import inputVue from"./input-DI9JmvbG.js";import codeVue from"./code-B9py2nN-.js";import outputVue from"./output-DnLKipJJ.js";import{e as ref,q as computed,c as createElementBlock,d as createVNode,a as createBaseVNode,o as openBlock}from"./index-tgEJWkjb.js";const _hoisted_1={style:{margin:"20px"}},_sfc_main={__name:"index",setup(__props){const input=ref({name:"Input",content:""}),options=[{name:"prettier",value:"(n) => { const o = JSON.parse(n); return JSON.stringify(o, null, 4); }"},{name:"po2csv",value:`
        (str) => {
          const lines = str.replace('\\r', '').split('\\n').filter(l=>l.length);
          if (lines.length & 1) return "length error: "+ lines.length;
          const chunks = [];
          for (var i = 0, len = lines.length; i < len; i += 2) chunks.push(lines.slice(i, i+2));
          const obj = {};
          for (var [id, str] of chunks) obj[id.replace('msgid', '').trim()] = str.replace('msgstr', '').trim();
          var result = '';
          for (const k of Object.keys(obj).sort()) result += k + ',' + obj[k] + '\\r\\n';
          return result;
        }
      `},{name:"csv2po",value:`
        (str) => {
          const lines = str.replace('\\r', '').split('\\n').filter(l=>l.length);
          const chunks = lines.map(l=>l.split(','));
          const obj = {};
          for (var [id, str] of chunks) obj[id.trim()] = str.trim();
          var result = '';
          for (const k of Object.keys(obj).sort()) result += 'msgid ' + k + '\\r\\n' + 'msgstr ' + obj[k] + '\\r\\n\\r\\n';
          return result;
        }
        `}],code=ref({name:"Code",options,content:options[0].value}),output=computed(()=>{try{const parser=eval(code.value.content);return typeof parser=="function"?{content:parser(input.value.content)}:{content:"code is not a valid function!",class:"error"}}catch(r){return{content:r.toString(),class:"error"}}});return(r,e)=>(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(inputVue,{data:input.value,"onUpdate:data":e[0]||(e[0]=t=>input.value=t)},null,8,["data"]),e[2]||(e[2]=createBaseVNode("br",null,null,-1)),createVNode(codeVue,{data:code.value,"onUpdate:data":e[1]||(e[1]=t=>code.value=t)},null,8,["data"]),e[3]||(e[3]=createBaseVNode("br",null,null,-1)),createVNode(outputVue,{data:output.value},null,8,["data"])]))}};export{_sfc_main as default};
