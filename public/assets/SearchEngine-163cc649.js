import{G as ue,e as P,d as ee,ab as ae,$ as T,a0 as D,a1 as l,j as e,a7 as I,Z as k,m as ce,V as q,u as _,Y as le,B as de,_ as fe,a9 as ge,c as O,L as me,q as ve,a2 as Q,F as he,a3 as pe,ai as ye}from"./vue-cd4a4a73.js";import{ax as Se,ay as Ve,R as C,r as ke,s as te,k as H,i as we,n as U,x as S,y as Y,j as G,t as be,v as F,w as J,E as Ee,m as Pe,F as _e,aq as Ce,u as xe,ar as qe,B as N,p as Te,C as x,a8 as $e,an as Ie,ao as Me,q as X,Y as Z,X as Ne,az as De}from"./index-952c55ec.js";import"./faker-e2f6ff92.js";import"./vuetify-102fadec.js";let W,L,z=0,j=0;function Ue(o,w,n){let i=w&&n||0;const s=w||new Array(16);o=o||{};let c=o.node||W,m=o.clockseq!==void 0?o.clockseq:L;if(c==null||m==null){const a=o.random||(o.rng||Se)();c==null&&(c=W=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),m==null&&(m=L=(a[6]<<8|a[7])&16383)}let h=o.msecs!==void 0?o.msecs:Date.now(),y=o.nsecs!==void 0?o.nsecs:j+1;const p=h-z+(y-j)/1e4;if(p<0&&o.clockseq===void 0&&(m=m+1&16383),(p<0||h>z)&&o.nsecs===void 0&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");z=h,j=y,L=m,h+=122192928e5;const r=((h&268435455)*1e4+y)%4294967296;s[i++]=r>>>24&255,s[i++]=r>>>16&255,s[i++]=r>>>8&255,s[i++]=r&255;const b=h/4294967296*1e4&268435455;s[i++]=b>>>8&255,s[i++]=b&255,s[i++]=b>>>24&15|16,s[i++]=b>>>16&255,s[i++]=m>>>8|128,s[i++]=m&255;for(let a=0;a<6;++a)s[i+a]=c[a];return w||Ve(s)}const ne=ue("searchEngine",()=>{const o=P([]),w=P([]);function n(){o.value.push({uniqueId:Ue(),id:0,query:"",itemsPerPage:10,filters:{title:"",category:"all",plugin:"enabled"},results:[],timer:null})}function i(a){o.value=o.value.filter(E=>E.uniqueId!==a)}async function s(a){const E=await C.startSearch(a.query,a.filters.category,[a.filters.plugin]);a.id=E.id,a.results=[]}async function c(a){const E=await C.getSearchResults(a.id,a.results.length);return a.results.push(...E.results),E.status}async function m(a){a.id&&a.id!==0&&await C.stopSearch(a.id),a.id=0}async function h(){w.value=await C.getSearchPlugins()}async function y(a){await C.installSearchPlugin([a])}async function p(a){await C.uninstallSearchPlugin([a])}async function r(a){await C.enableSearchPlugin([a.name],!a.enabled)}async function b(){await C.updateSearchPlugins()}return{searchData:o,searchPlugins:w,createNewTab:n,deleteTab:i,runNewSearch:s,refreshResults:c,stopSearch:m,fetchSearchPlugins:h,installSearchPlugin:y,uninstallSearchPlugin:p,toggleSearchPlugin:r,updatePlugins:b}},{persist:{enabled:!0,strategies:[{storage:sessionStorage,key:"vuetorrent_searchEngine"}]}}),Be=["href","title"],Re=ee({__name:"PluginManagerDialog",props:{guid:{}},setup(o){const w=o,{isOpened:n}=ke(w.guid),{t:i}=te(),s=ne(),c=[{title:i("dialogs.pluginManager.headers.enabled"),key:"enabled",sortable:!1},{title:i("dialogs.pluginManager.headers.name"),key:"fullName"},{title:i("dialogs.pluginManager.headers.version"),key:"version"},{title:i("dialogs.pluginManager.headers.url"),key:"url"},{title:i("dialogs.pluginManager.headers.actions"),key:"actions"}],m=P(!1),h=P(!1),y=P(!1),p=P(!1),r=P("");async function b(v){await s.toggleSearchPlugin(v),await s.fetchSearchPlugins()}async function a(){h.value=!0,await s.updatePlugins().then(()=>new Promise(v=>setTimeout(v,2e3))),await s.fetchSearchPlugins(),h.value=!1}async function E(){M(),m.value=!0,await s.installSearchPlugin(r.value),r.value="",setTimeout(()=>{s.fetchSearchPlugins().then(()=>{m.value=!1})},1e3)}async function B(v){m.value=!0,await s.uninstallSearchPlugin(v.name),await s.fetchSearchPlugins(),m.value=!1}const d=()=>{n.value=!1};function M(){y.value=!1}return(v,V)=>{const R=ae("v-data-table");return T(),D(Y,{modelValue:_(n),"onUpdate:modelValue":V[4]||(V[4]=u=>de(n)?n.value=u:null)},{default:l(()=>[e(H,null,{default:l(()=>[e(we,{class:"d-flex"},{default:l(()=>[I("div",null,k(v.$t("dialogs.pluginManager.title")),1),e(U),e(S,{text:v.$t("dialogs.pluginManager.update"),color:"accent",class:"mr-2",loading:h.value,onClick:a},null,8,["text","loading"]),e(Y,{modelValue:y.value,"onUpdate:modelValue":V[3]||(V[3]=u=>y.value=u)},{activator:l(({props:u})=>[e(S,ce(u,{color:"primary"}),{default:l(()=>[q(k(v.$t("dialogs.pluginManager.install.activator")),1)]),_:2},1040)]),default:l(()=>[e(H,{title:v.$t("dialogs.pluginManager.install.title")},{default:l(()=>[e(G,null,{default:l(()=>[e(_(be),{modelValue:p.value,"onUpdate:modelValue":V[1]||(V[1]=u=>p.value=u),onSubmit:V[2]||(V[2]=le(()=>{},["prevent"]))},{default:l(()=>[e(F,{modelValue:r.value,"onUpdate:modelValue":V[0]||(V[0]=u=>r.value=u),autofocus:"",label:v.$t("dialogs.pluginManager.install.label")},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),e(J,null,{default:l(()=>[e(U),e(S,{color:"error",onClick:M},{default:l(()=>[q(k(v.$t("common.cancel")),1)]),_:1}),e(S,{color:"accent",onClick:E},{default:l(()=>[q(k(v.$t("common.ok")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),e(G,null,{default:l(()=>[e(R,{headers:c,"items-per-page":"-1",items:_(s).searchPlugins,"sort-by":[{key:"fullName",order:"asc"}],loading:m.value},{"item.enabled":l(({item:u})=>[e(Ee,{"model-value":u.enabled,onClick:$=>b(u)},null,8,["model-value","onClick"])]),"item.url":l(({item:u})=>[I("a",{href:u.url,title:u.name},k(u.url),9,Be)]),"item.actions":l(({item:u})=>[e(Pe,{color:"red",icon:"mdi-delete",onClick:$=>B(u)},null,8,["onClick"])]),tfoot:l(()=>[]),_:1},8,["items","loading"])]),_:1}),e(J,null,{default:l(()=>[e(U),e(S,{color:"accent",onClick:d},{default:l(()=>[q(k(v.$t("common.close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Le={class:"pa-3"},ze={style:{"font-size":"1.6em !important"},class:"subtitle-1 ml-2"},je={class:"d-flex justify-end"},He=ee({__name:"SearchEngine",setup(o){const w=fe(),{t:n}=te(),i=_e(),s=Ce(),c=ne(),m=xe(),h=P(),y=P(!1),p=P(0),{searchData:r}=ge(c),b=[{title:n("searchEngine.headers.fileName"),key:"fileName"},{title:n("searchEngine.headers.fileSize"),key:"fileSize"},{title:n("searchEngine.headers.nbSeeders"),key:"nbSeeders"},{title:n("searchEngine.headers.nbLeechers"),key:"nbLeechers"},{title:n("searchEngine.headers.siteUrl"),key:"siteUrl"},{title:"",key:"actions",sortable:!1}],a=[{title:n("searchEngine.filters.category.movies"),value:"movies"},{title:n("searchEngine.filters.category.tv"),value:"tv"},{title:n("searchEngine.filters.category.music"),value:"music"},{title:n("searchEngine.filters.category.games"),value:"games"},{title:n("searchEngine.filters.category.anime"),value:"anime"},{title:n("searchEngine.filters.category.software"),value:"software"},{title:n("searchEngine.filters.category.pictures"),value:"pictures"},{title:n("searchEngine.filters.category.books"),value:"books"}];a.sort((t,f)=>t.title.localeCompare(f.title));const E=[{title:n("searchEngine.filters.category.all"),value:"all"},...a],B=O(()=>{const t=[{title:n("searchEngine.filters.plugins.all"),value:"all"},{title:n("searchEngine.filters.plugins.enabled"),value:"enabled"}];return c.searchPlugins.filter(f=>f.enabled).forEach(f=>{t.push({title:f.name,value:f.name})}),t}),d=O(()=>r.value[p.value]??{}),{results:M}=qe(()=>d.value.results,()=>d.value.filters?.title,t=>t.fileName);function v(){c.createNewTab(),p.value=r.value.length-1,h.value?.focus()}function V(){r.value.length!==1&&(c.deleteTab(d.value.uniqueId),p.value=Math.min(p.value,r.value.length-1))}function R(t){s.pushTorrentToQueue(t.fileUrl)}async function u(){await c.runNewSearch(d.value),d.value.timer=setInterval(()=>ie(d.value),1e3)}async function $(t){await c.stopSearch(t),t.timer&&clearInterval(t.timer)}function se(){r.value.forEach($)}async function ie(t){await c.refreshResults(t)==="Stopped"&&await $(t)}const A=()=>{w.push({name:"dashboard"})};function re(){i.createDialog(Re)}function K(t){if(i.hasActiveDialog||y.value)return!1;t.key==="Escape"&&A()}return me(async()=>{document.addEventListener("keydown",K),r.value.length===0?c.createNewTab():r.value.forEach(t=>{t.id&&t.id!==0&&(t.timer=setInterval(()=>c.refreshResults(t),1e3))}),await c.fetchSearchPlugins()}),ve(()=>{document.removeEventListener("keydown",K),r.value.forEach(t=>{t.timer&&clearInterval(t.timer)})}),(t,f)=>{const oe=ae("v-data-table");return T(),Q("div",Le,[e(N,{"no-gutters":"",align:"center",justify:"center"},{default:l(()=>[e(x,null,{default:l(()=>[I("h1",ze,k(_(n)("searchEngine.title")),1)]),_:1}),e(x,null,{default:l(()=>[I("div",je,[e(S,{icon:"mdi-stop",variant:"plain",color:"error",onClick:se}),e(S,{icon:"mdi-toy-brick",variant:"plain",color:"primary",onClick:re}),e(S,{icon:"mdi-close",variant:"plain",onClick:A})])]),_:1})]),_:1}),e(N,{class:"ma-0 pa-0"},{default:l(()=>[e($e,{class:"d-flex align-center justify-center ma-0 pa-0 bg-primary",fluid:""},{default:l(()=>[e(Ie,{modelValue:p.value,"onUpdate:modelValue":f[0]||(f[0]=g=>p.value=g),class:"overflow-auto","bg-color":"primary","show-arrows":""},{default:l(()=>[(T(!0),Q(he,null,pe(_(r),g=>(T(),D(Me,{key:g.uniqueId},{default:l(()=>[I("h4",null,k(!g.query||g.query.length===0?t.$t("searchEngine.tabHeaderEmpty"):g.query),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),e(U),e(S,{icon:"mdi-plus-circle-outline",variant:"plain",color:"accent",onClick:v}),e(S,{icon:"mdi-minus-circle-outline",variant:"plain",color:"error",disabled:_(r).length===1,onClick:V},null,8,["disabled"])]),_:1})]),_:1}),e(Te,null,{default:l(()=>[e(X,null,{default:l(()=>[e(N,{class:"mt-1"},{default:l(()=>[e(x,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:d.value.query,"onUpdate:modelValue":f[1]||(f[1]=g=>d.value.query=g),ref_key:"queryInput",ref:h,autofocus:"",density:"compact","hide-details":"",clearable:"",label:t.$t("searchEngine.query"),onKeydown:ye(le(u,["prevent"]),["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1}),e(x,{cols:"6",sm:"5",md:"2"},{default:l(()=>[e(Z,{modelValue:d.value.filters.category,"onUpdate:modelValue":f[2]||(f[2]=g=>d.value.filters.category=g),height:"1",variant:"outlined",density:"compact","hide-details":"",items:E,label:t.$t("searchEngine.filters.category.label")},null,8,["modelValue","label"])]),_:1}),e(x,{cols:"6",sm:"5",md:"2"},{default:l(()=>[e(Z,{modelValue:d.value.filters.plugin,"onUpdate:modelValue":f[3]||(f[3]=g=>d.value.filters.plugin=g),flat:"",density:"compact","hide-details":"",variant:"outlined",items:B.value,label:t.$t("searchEngine.filters.plugins.label")},null,8,["modelValue","items","label"])]),_:1}),e(x,{cols:"12",sm:"2",class:"d-flex align-center justify-center"},{default:l(()=>[d.value.id===0?(T(),D(S,{key:0,color:"accent",flat:"",class:"mx-auto px-4",onClick:u},{default:l(()=>[q(k(t.$t("searchEngine.runSearch")),1)]),_:1})):(T(),D(S,{key:1,color:"warning",flat:"",class:"mx-auto px-4",onClick:f[4]||(f[4]=g=>$(d.value))},{default:l(()=>[q(k(t.$t("searchEngine.stopSearch")),1)]),_:1}))]),_:1})]),_:1})]),_:1}),e(Ne,{class:"my-3"}),e(X,null,{default:l(()=>[e(oe,{headers:b,items:_(M),"footer-props":{itemsPerPageOptions:[10,25,50,100,-1]},"items-per-page":d.value.itemsPerPage},{top:l(()=>[e(N,null,{default:l(()=>[e(x,{cols:"12"},{default:l(()=>[e(F,{modelValue:d.value.filters.title,"onUpdate:modelValue":f[5]||(f[5]=g=>d.value.filters.title=g),density:"compact","hide-details":"",label:t.$t("searchEngine.filters.title.label")},null,8,["modelValue","label"])]),_:1})]),_:1})]),"item.fileSize":l(({item:g})=>[q(k(_(De)(g.fileSize,_(m).useBinarySize)),1)]),"item.actions":l(({item:g})=>[e(S,{icon:"mdi-download",variant:"flat",density:"compact",onClick:Fe=>R(g)},null,8,["onClick"])]),_:1},8,["items","items-per-page"])]),_:1})]),_:1})])}}});export{He as default};
