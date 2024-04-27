import{c as F}from"./zustand-B3K13JpZ.js";import{j as o}from"./react-dnd-D9QuKJuj.js";import{T as U,B,D as J,I as R,d as M,R as O,g as D,C as q,e as G,S as T,f as A}from"./antd-BFWf-pza.js";var Y={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function L(e,t){let r;try{r=e()}catch{return}return{getItem:d=>{var n;const p=g=>g===null?null:JSON.parse(g,t==null?void 0:t.reviver),h=(n=r.getItem(d))!=null?n:null;return h instanceof Promise?h.then(p):p(h)},setItem:(d,n)=>r.setItem(d,JSON.stringify(n,t==null?void 0:t.replacer)),removeItem:d=>r.removeItem(d)}}const z=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(a){return z(a)(r)},catch(a){return this}}}catch(r){return{then(a){return this},catch(a){return z(a)(r)}}}},$=(e,t)=>(r,a,d)=>{let n={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:l=>l,version:0,merge:(l,u)=>({...u,...l}),...t},p=!1;const h=new Set,g=new Set;let c;try{c=n.getStorage()}catch{}if(!c)return e((...l)=>{r(...l)},a,d);const I=z(n.serialize),w=()=>{const l=n.partialize({...a()});let u;const s=I({state:l,version:n.version}).then(m=>c.setItem(n.name,m)).catch(m=>{u=m});if(u)throw u;return s},x=d.setState;d.setState=(l,u)=>{x(l,u),w()};const v=e((...l)=>{r(...l),w()},a,d);let y;const i=()=>{var l;if(!c)return;p=!1,h.forEach(s=>s(a()));const u=((l=n.onRehydrateStorage)==null?void 0:l.call(n,a()))||void 0;return z(c.getItem.bind(c))(n.name).then(s=>{if(s)return n.deserialize(s)}).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==n.version){if(n.migrate)return n.migrate(s.state,s.version)}else return s.state}).then(s=>{var m;return y=n.merge(s,(m=a())!=null?m:v),r(y,!0),w()}).then(()=>{u==null||u(y,void 0),p=!0,g.forEach(s=>s(y))}).catch(s=>{u==null||u(void 0,s)})};return d.persist={setOptions:l=>{n={...n,...l},l.getStorage&&(c=l.getStorage())},clearStorage:()=>{c==null||c.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>i(),hasHydrated:()=>p,onHydrate:l=>(h.add(l),()=>{h.delete(l)}),onFinishHydration:l=>(g.add(l),()=>{g.delete(l)})},i(),y||v},K=(e,t)=>(r,a,d)=>{let n={storage:L(()=>localStorage),partialize:i=>i,version:0,merge:(i,l)=>({...l,...i}),...t},p=!1;const h=new Set,g=new Set;let c=n.storage;if(!c)return e((...i)=>{r(...i)},a,d);const I=()=>{const i=n.partialize({...a()});return c.setItem(n.name,{state:i,version:n.version})},w=d.setState;d.setState=(i,l)=>{w(i,l),I()};const x=e((...i)=>{r(...i),I()},a,d);d.getInitialState=()=>x;let v;const y=()=>{var i,l;if(!c)return;p=!1,h.forEach(s=>{var m;return s((m=a())!=null?m:x)});const u=((l=n.onRehydrateStorage)==null?void 0:l.call(n,(i=a())!=null?i:x))||void 0;return z(c.getItem.bind(c))(n.name).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==n.version){if(n.migrate)return n.migrate(s.state,s.version)}else return s.state}).then(s=>{var m;return v=n.merge(s,(m=a())!=null?m:x),r(v,!0),I()}).then(()=>{u==null||u(v,void 0),v=a(),p=!0,g.forEach(s=>s(v))}).catch(s=>{u==null||u(void 0,s)})};return d.persist={setOptions:i=>{n={...n,...i},i.storage&&(c=i.storage)},clearStorage:()=>{c==null||c.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>y(),hasHydrated:()=>p,onHydrate:i=>(h.add(i),()=>{h.delete(i)}),onFinishHydration:i=>(g.add(i),()=>{g.delete(i)})},n.skipHydration||y(),v||x},W=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?$(e,t):K(e,t),X=W,re=F(X(e=>({form:{title:"",buttonLabel:"提交",description:"",layout:"horizontal"},components:[],addComponent:t=>e(r=>({components:[...r.components,t]})),setComponents:t=>e({components:t}),setForm:t=>e({form:t})}),{name:"components-store",storage:L(()=>localStorage),partialize:e=>({components:e.components,form:e.form})})),N=({label:e,index:t,onDelete:r})=>{const a=()=>{r==null||r(t)};return o.jsx(U,{title:`删除：${e}`,children:o.jsx(B,{danger:!0,type:"primary",block:!0,icon:o.jsx(J,{}),onClick:a,style:{width:32,marginLeft:16}})})},k=(e,t,r)=>{var a;return(a=e.onChange)==null?void 0:a.call(e,t.target.value,r)};var Q=(e=>(e.INPUT="input",e.SELECT="select",e.INPUT_NUMBER="inputNumber",e.RADIO="radio",e.CHECKBOX="checkbox",e.DATE="date",e.SWITCH="switch",e.DATE_RANGE="dateRange",e))(Q||{});const Z=()=>{const e={},t=[];return{register:a=>{t.push(a),e[a.type]=a},components:t,componentMap:e}},b=Z(),E=[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"}],f=e=>({type:"input",label:e}),_=e=>({type:"inputNumber",label:e}),P=(e,t)=>({type:"radio",label:e,options:t}),j=e=>({type:"switch",label:e}),H=()=>({type:"select",label:"选项"}),C=P("尺寸",[{label:"large",value:"large"},{label:"middle",value:"middle"},{label:"small",value:"small"}]),S={name:f("字段名"),message:f("错误信息"),required:j("必填")};b.register({type:"input",label:"输入框",props:{placeholder:"请输入内容",size:"middle",name:"",message:"",required:!0},configs:{...S,placeholder:f("输入框提示"),size:C,maxLength:_("最大长度"),readonly:j("是否只读"),allowClear:j("允许点击清除图标删除内容")},render:e=>o.jsx(R,{...e})});b.register({type:"inputNumber",label:"数字",props:{placeholder:"请输入数字",size:"middle",readOnly:!1,name:"",message:"",required:!0},configs:{...S,placeholder:f("输入框提示"),size:C,max:_("最大值"),min:_("最小值"),readOnly:j("是否只读")},render:e=>o.jsx(M,{style:{width:e.width||220},...e})});b.register({type:"radio",label:"单选框",isAdd:!0,configs:{...S,size:C,direction:P("布局方式",[{label:"纵向",value:"vertical"},{label:"横向",value:"horizontal"}]),options:H()},props:{options:E,size:"middle",direction:"vertical",name:"",message:"",required:!0},render:(e,t={})=>o.jsx(O.Group,{size:e.size,children:o.jsx(D,{direction:e.direction,wrap:!0,children:e.options.map((r,a)=>o.jsx(O,{value:r.value,children:o.jsxs("div",{style:{display:"flex"},children:[o.jsx(R,{onChange:d=>k(t,d,a),placeholder:"请输入",style:{width:125},value:r.label}),o.jsx(N,{label:r.label,index:a,onDelete:t.onDelete})]})},r.value))})})});b.register({type:"checkbox",label:"多选框",isAdd:!0,configs:{...S,direction:P("布局方式",[{label:"纵向",value:"vertical"},{label:"横向",value:"horizontal"}]),options:H()},props:{options:E,direction:"vertical",name:"",message:"",required:!0},render:(e,t={})=>o.jsx(q.Group,{children:o.jsx(D,{direction:e.direction,children:e.options.map((r,a)=>o.jsx(q,{value:r.value,children:o.jsxs("div",{style:{display:"flex"},children:[o.jsx(R,{placeholder:"请输入",value:r.label,onChange:d=>k(t,d,a)}),o.jsx(N,{label:r.label,index:a,onDelete:t.onDelete})]})},r.value))})})});b.register({type:"select",label:"下拉选择",isAdd:!0,configs:{...S,placeholder:f("下拉框提示"),size:C,showSearch:j("是否可搜索"),options:H()},props:{placeholder:"请选择",size:"middle",options:E,name:"",message:"",required:!0},render:(e,t={})=>o.jsxs(o.Fragment,{children:[o.jsx(G,{style:{width:"100%"},...e}),o.jsx(D,{style:{marginTop:16,width:"100%"},direction:"vertical",children:e.options.map((r,a)=>o.jsxs("div",{style:{display:"flex"},children:[o.jsx(R,{style:{width:"100%"},placeholder:"请输入",value:r.label,onChange:d=>k(t,d,a)}),o.jsx(N,{label:r.label,index:a,onDelete:t.onDelete})]},r.value))})]})});b.register({type:"switch",label:"开关",props:{defaultChecked:!1,size:"middle",disabled:!1,name:"",message:"",required:!0},configs:{...S,defaultChecked:j("初始是否选中"),disabled:j("是否禁用"),size:P("尺寸",E.filter((e,t)=>t!==0))},render:e=>o.jsx(T,{...e})});b.register({type:"date",label:"日期",props:{placeholder:"请选择日期",size:"middle",format:"YYYY-MM-DD",name:"",message:"",required:!0},configs:{...S,placeholder:f("日期框提示"),format:f("格式"),size:C},render:e=>o.jsx(A,{style:{width:"100%"},...e})});b.register({type:"dateRange",label:"日期范围",props:{startPlaceholder:"请选择开始时间",endPlaceholder:"请选择结束时间",size:"middle",name:"",message:"",required:!0},configs:{...S,startPlaceholder:f("开始日期框提示"),endPlaceholder:f("开始日期框提示")},render:e=>o.jsx(A.RangePicker,{placeholder:[e.startPlaceholder,e.endPlaceholder],style:{width:"100%"}})});export{Q as C,b as r,re as u};