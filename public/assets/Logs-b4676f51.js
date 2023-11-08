import{u as q}from"./ArrayPagination-e283c136.js";import{s as H,au as K,u as X,av as t,ac as Y,B as S,p as Z,C as v,x as J,q as d,Y as b,E as Q,X as c,M as F,as as ee,at as te,_ as le}from"./index-952c55ec.js";import"./faker-e2f6ff92.js";import{d as ae}from"./dayjs.min-b02eded3.js";import{d as se,_ as oe,e as f,c as y,L as ne,I as ue,$ as i,a2 as I,j as e,a1 as a,a7 as x,Z as m,u as n,a0 as _,B as O,a4 as V,F as $,a3 as ie,a5 as re,V as C}from"./vue-cd4a4a73.js";import"./vuetify-102fadec.js";const de={class:"pa-3"},me={style:{"font-size":"1.6em !important"},class:"subtitle-1 ml-2"},pe={class:"d-flex justify-end"},ce=se({__name:"Logs",setup(ge){const w=oe(),{t:p}=H(),L=K(),E=X(),M=f([{title:p("logs.filters.sortBy.id"),value:"id"},{title:p("logs.filters.sortBy.type"),value:"type"},{title:p("logs.filters.sortBy.message"),value:"message"},{title:p("logs.filters.sortBy.timestamp"),value:"timestamp"}]),h=f([{title:t[t.NORMAL],value:t.NORMAL},{title:t[t.INFO],value:t.INFO},{title:t[t.WARNING],value:t.WARNING},{title:t[t.CRITICAL],value:t.CRITICAL}]),u=f([t.NORMAL,t.INFO,t.WARNING,t.CRITICAL]),N=f(["id"]),U=y(()=>L.logs),B=y(()=>U.value.filter(l=>u.value.includes(l.type))),T=y(()=>u.value.length>0),k=y(()=>u.value.length===h.value.length),{paginatedResults:j,currentPage:r,pageCount:g}=q(B,30),R=()=>{w.push({name:"dashboard"})},G=l=>`logtype-${t[l?.type]?.toLowerCase()}`,P=l=>t[l.type],W=l=>ae(l.timestamp*1e3).format(E.dateFormat),z=()=>{k.value?u.value=[]:u.value=h.value.map(l=>l.value)},A=l=>{l.key==="Escape"&&R()};return ne(()=>{document.addEventListener("keydown",A),Y(()=>L.fetchLogs(),15e3),L.fetchLogs(-1)}),ue(()=>{document.removeEventListener("keydown",A)}),(l,o)=>(i(),I("div",de,[e(S,{"no-gutters":"",align:"center",justify:"center"},{default:a(()=>[e(v,null,{default:a(()=>[x("h1",me,m(n(p)("logs.title")),1)]),_:1}),e(v,null,{default:a(()=>[x("div",pe,[e(J,{icon:"mdi-close",variant:"plain",onClick:R})])]),_:1})]),_:1}),e(Z,null,{default:a(()=>[e(d,null,{default:a(()=>[e(S,null,{default:a(()=>[e(v,{cols:"6"},{default:a(()=>[e(b,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=s=>u.value=s),items:h.value,label:l.$t("logs.filters.type"),"hide-details":"",multiple:"",chips:""},{"prepend-item":a(()=>[e(d,{title:l.$t("common.selectAll"),onClick:z},{prepend:a(()=>[e(Q,{indeterminate:T.value&&!k.value,"model-value":T.value},null,8,["indeterminate","model-value"])]),_:1},8,["title"]),e(c)]),_:1},8,["modelValue","items","label"])]),_:1}),e(v,{cols:"6"},{default:a(()=>[e(b,{modelValue:N.value,"onUpdate:modelValue":o[1]||(o[1]=s=>N.value=s),items:M.value,label:l.$t("logs.filters.sortBy.label"),"hide-details":"",multiple:"",chips:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})]),_:1}),e(c,{class:"my-3",thickness:"5"}),n(g)>1?(i(),_(d,{key:0},{default:a(()=>[e(F,{modelValue:n(r),"onUpdate:modelValue":o[2]||(o[2]=s=>O(r)?r.value=s:null),length:n(g),"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue","length"])]),_:1})):V("",!0),e(c),(i(!0),I($,null,ie(n(j),(s,D)=>(i(),I($,null,[D>0?(i(),_(c,{key:0})):V("",!0),e(d,{class:re(G(s))},{default:a(()=>[e(ee,null,{default:a(()=>[C(m(s.id)+") "+m(s.message),1)]),_:2},1024),e(te,null,{default:a(()=>[C(m(P(s))+" | "+m(W(s)),1)]),_:2},1024)]),_:2},1032,["class"])],64))),256)),B.value.length===0?(i(),_(d,{key:1},{default:a(()=>[C(m(l.$t("logs.emptyLogList")),1)]),_:1})):V("",!0),e(c),n(g)>1?(i(),_(d,{key:2},{default:a(()=>[e(F,{modelValue:n(r),"onUpdate:modelValue":o[3]||(o[3]=s=>O(r)?r.value=s:null),length:n(g),"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue","length"])]),_:1})):V("",!0)]),_:1})]))}});const he=le(ce,[["__scopeId","data-v-569a7d95"]]);export{he as default};
