import{g as c,d as r,c as o,a3 as t,a4 as d,au as i,a5 as l,m}from"./vue-7zd71vkt.js";import{j as u,h as f}from"./index-AgNZTcBi.js";const I=c({__name:"PasswordField",props:{hideIcon:{type:Boolean},prependIcon:{}},setup(h){const e=r(!1);function a(){e.value=!e.value}const p=o(()=>e.value?"text":"password"),s=o(()=>e.value?"mdi-eye":"mdi-eye-off");return(n,v)=>(t(),d(f,{name:"password",type:p.value,"append-inner-icon":n.hideIcon?"":s.value,"onClick:appendInner":a},i({_:2},[n.prependIcon?{name:"prepend",fn:l(()=>[m(u,{color:"accent",icon:n.prependIcon},null,8,["icon"])]),key:"0"}:void 0]),1032,["type","append-inner-icon"]))}});export{I as _};
