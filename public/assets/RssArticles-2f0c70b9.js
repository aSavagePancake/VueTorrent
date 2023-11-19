import{e as z,$ as K,K as Y,b as q,r as W,c as X,M as Z,x as G,I as J,a1 as i,a5 as v,k as e,a3 as l,aa as r,Y as u,u as a,a2 as y,B as L,a7 as m,F as S,a6 as O,a4 as ee,W as C,X as x}from"./vue-15fc29be.js";import{u as te}from"./ArrayPagination-ee930d47.js";import{ap as le,F as se,ac as ae,aq as ne,B as D,o as $,C as h,w as f,p,t as oe,Y as ie,m as B,M as N,Z as re,ar as ue,as as de,x as ce,j as me,h as fe,a8 as pe,a9 as _e,i as ve,_ as Ve}from"./index-27160b5f.js";import"./faker-c43f92d4.js";import{d as ke}from"./index-1edd5138.js";import"./vuetify-47497518.js";const ge={class:"pa-3"},ye={class:"subtitle-1 ml-2",style:{"font-size":"1.6em !important"}},he={class:"d-flex justify-end"},Ae={class:"d-flex flex-row align-center justify-center"},Ce={class:"d-flex"},xe={key:0},we={key:1},be={class:"d-flex flex-column"},Re=["innerHTML"],Te=z({__name:"RssArticles",setup(Le){const F=K(),{t:V}=Y(),M=le(),U=se(),o=ae(),_=q(!1),k=W({title:"",content:""}),A=X({get:()=>o.filters.title,set:ke(t=>{o.filters.title=t??""},300)}),g=ne(()=>o.articles.sort((t,n)=>Number(n.parsedDate)-Number(t.parsedDate)),()=>A.value,t=>t.title),{paginatedResults:I,currentPage:c,pageCount:w}=te(g.results,15);function j(t){window.open(t,"_blank","noreferrer")}function E(t){t.description&&(k.title=t.title,k.content=t.description,_.value=!0)}function H(t){M.pushTorrentToQueue(t.torrentURL)}async function b(t){await o.markArticleAsRead(t.id)}async function P(){await o.markAllAsRead()}function R(){F.push({name:"dashboard"})}function T(t){if(U.hasActiveDialog||_.value)return!1;t.key==="Escape"&&R()}return Z(async()=>{await o.fetchFeeds()}),G(()=>{document.addEventListener("keydown",T)}),J(()=>{document.removeEventListener("keydown",T)}),(t,n)=>(i(),v("div",ge,[e(D,{align:"center",justify:"center","no-gutters":""},{default:l(()=>[e(h,null,{default:l(()=>[r("h1",ye,u(a(V)("rssArticles.title")),1)]),_:1}),e(h,null,{default:l(()=>[r("div",he,[e(f,{icon:"mdi-close",variant:"plain",onClick:R})])]),_:1})]),_:1}),e($,null,{default:l(()=>[e(p,null,{default:l(()=>[e(D,null,{default:l(()=>[e(h,{cols:"12"},{default:l(()=>[e(oe,{modelValue:A.value,"onUpdate:modelValue":n[0]||(n[0]=s=>A.value=s),label:t.$t("rssArticles.filters.title"),clearable:"","hide-details":""},null,8,["modelValue","label"])]),_:1}),e(h,{cols:"12"},{default:l(()=>[r("div",Ae,[e(ie,{modelValue:a(o).filters.unread,"onUpdate:modelValue":n[1]||(n[1]=s=>a(o).filters.unread=s),label:t.$t("rssArticles.filters.unread"),"hide-details":""},null,8,["modelValue","label"]),e(B),e(f,{text:t.$t("rssArticles.markAllAsRead"),color:"primary",onClick:P},null,8,["text"])])]),_:1})]),_:1})]),_:1}),a(g).results.value.length?(i(),y(p,{key:0},{default:l(()=>[e(N,{modelValue:a(c),"onUpdate:modelValue":n[2]||(n[2]=s=>L(c)?c.value=s:null),length:a(w),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):m("",!0),e(p,null,{default:l(()=>[e($,null,{default:l(()=>[(i(!0),v(S,null,O(a(I),(s,Q)=>(i(),v(S,null,[Q>0?(i(),y(re,{key:0,color:"white"})):m("",!0),e(p,{class:ee({"rss-read":s.isRead}),onClick:d=>E(s),onContextmenu:d=>b(s)},{default:l(()=>[r("div",Ce,[r("div",null,[e(ue,{class:"wrap-anywhere",style:{"white-space":"unset"}},{default:l(()=>[C(u(s.title),1)]),_:2},1024),e(de,{class:"d-block"},{default:l(()=>[r("div",null,u(s.parsedDate.toLocaleString()),1),r("div",null,u(a(V)("rssArticles.item.feedName",{name:a(o).getFeedNames(s.id).join(" | ")})),1),s.author?(i(),v("div",xe,u(a(V)("rssArticles.item.author",{author:s.author})),1)):m("",!0),s.category?(i(),v("div",we,u(a(V)("rssArticles.item.category",{category:s.category})),1)):m("",!0)]),_:2},1024)]),e(B),r("div",be,[e(f,{icon:"mdi-open-in-new",variant:"text",onClick:x(d=>j(s.link),["stop"])},null,8,["onClick"]),e(f,{color:"accent",icon:"mdi-check",variant:"text",onClick:x(d=>b(s),["stop"])},null,8,["onClick"]),e(f,{icon:"mdi-download",variant:"text",onClick:x(d=>H(s),["stop"])},null,8,["onClick"])])]),e(ce,{modelValue:_.value,"onUpdate:modelValue":n[4]||(n[4]=d=>_.value=d)},{default:l(()=>[e(me,null,{default:l(()=>[e(fe,null,{default:l(()=>[e(pe,{color:"transparent"},{default:l(()=>[e(_e,null,{default:l(()=>[C(u(k.title),1)]),_:1}),e(f,{icon:"mdi-close",onClick:n[3]||(n[3]=d=>_.value=!1)})]),_:1})]),_:1}),e(ve,null,{default:l(()=>[r("div",{class:"description-container",innerHTML:k.content},null,8,Re)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:2},1032,["class","onClick","onContextmenu"])],64))),256)),a(g).results.value.length===0?(i(),y(p,{key:0},{default:l(()=>[C(u(t.$t("common.emptyList")),1)]),_:1})):m("",!0)]),_:1})]),_:1}),a(g).results.value.length?(i(),y(p,{key:1},{default:l(()=>[e(N,{modelValue:a(c),"onUpdate:modelValue":n[5]||(n[5]=s=>L(c)?c.value=s:null),length:a(w),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):m("",!0)]),_:1})]))}});const Me=Ve(Te,[["__scopeId","data-v-30d5e97a"]]);export{Me as default};
