import{u as it,n as oe,l as ae,f as _e,g as ce,h as Xe,i as ke,j as Te,a as te,k as I,m as be,y as ye,J as X,D as Ve,c as J,d as W,aA as Be,V as le,b as st,aM as ut,v as ze,ak as Je,al as dt,r as C,e as Oe,aE as ct,aF as Q,aH as Z,q as P,a4 as pe,K as ee,aB as Ne,z as de,_ as Se,A as mt,B as ft,T as vt,aN as pt,aO as _t,aP as gt,aQ as ht,aR as yt,a5 as Pe,aS as wt,aT as Ie,ah as Qe,a9 as Ze,aU as Ge,a2 as He,au as Dt,C as $t,av as kt,aw as se,ax as ue}from"./index-PcYU8R7M.js";import{d as V,a as Tt,J as bt,g as K,K as ne,r as Ue,N as Ce,A as ge,a2 as d,a3 as O,a4 as t,u as o,Z as l,W as y,m as e,Y as Ae,a9 as L,ao as et,D as Vt,ab as c,n as he,a7 as $,a8 as R,F as z,ae as Nt,a0 as Ot,c as E,w as me,x as xe,a5 as Ke,au as St,I as Re,a1 as je,a6 as Le,aa as Ct,$ as At,q as Ft}from"./vue-XHfgLFXq.js";import{_ as It}from"./dayjs-_mcw-5ND.js";import{d as qe}from"./dayjs.min-bb5lKVNH.js";import{ap as Pt}from"./vuetify-9K5dQHv0.js";var M=(f=>(f[f.DISABLED=-1]="DISABLED",f[f.DO_NOT_DOWNLOAD=0]="DO_NOT_DOWNLOAD",f[f.NORMAL=1]="NORMAL",f[f.HIGH=6]="HIGH",f[f.MAXIMAL=7]="MAXIMAL",f))(M||{}),$e=(f=>(f[f.MISSING=0]="MISSING",f[f.DOWNLOADING=1]="DOWNLOADING",f[f.DOWNLOADED=2]="DOWNLOADED",f))($e||{}),Y=(f=>(f[f.DISABLED=0]="DISABLED",f[f.NOT_YET_CONTACTED=1]="NOT_YET_CONTACTED",f[f.WORKING=2]="WORKING",f[f.UPDATING=3]="UPDATING",f[f.NOT_WORKING=4]="NOT_WORKING",f))(Y||{});const Lt={pdf:"mdi-file-pdf-box",png:"mdi-file-image",jpg:"mdi-file-image",jpeg:"mdi-file-image",tiff:"mdi-file-image",doc:"mdi-file-document",docx:"mdi-file-document",txt:"mdi-file-document",nfo:"mdi-information-variant-box",mp3:"mdi-music",wav:"mdi-music",flac:"mdi-music",avi:"mdi-movie",mp4:"mdi-movie",mkv:"mdi-movie",mov:"mdi-movie",wmv:"mdi-movie",srt:"mdi-subtitles",idx:"mdi-subtitles",sub:"mdi-subtitles",rar:"mdi-folder-zip",zip:"mdi-folder-zip",gz:"mdi-folder-zip","7z":"mdi-folder-zip",exe:"mdi-application",msi:"mdi-application",dmg:"mdi-application",deb:"mdi-application",iso:"mdi-application",jar:"mdi-application"};function Bt(f){const a=f.split(".").pop()?.toLowerCase()||"";return Lt[a]||"mdi-file"}function Ye(){return{type:"root",name:"",fullName:"",id:"",children:[]}}function zt(f){const a=V(Ye());return Tt(()=>{const s=Ye(),r=bt(f)??[];for(const m of r){let w=s;m.name.replace("\\","/").split("/").reduce((_,u)=>{const i=_===""?u:_+"/"+u;if(m.name.replace("\\","/").split("/").pop()===u){const b={type:"file",name:u,fullName:i,id:m.index,availability:m.availability,index:m.index,is_seed:m.is_seed,priority:m.priority,progress:m.progress,size:m.size};w.children.push(b)}else{const b=w.children.find(T=>T.name===u);if(b)w=b;else{const T={type:"folder",name:u,fullName:i,id:i,children:[]};w.children.push(T),w=T}}return i},"")}a.value=s}),{tree:a}}const tt=K({__name:"MoveTorrentFileDialog",props:{guid:{},hash:{},isFolder:{type:Boolean},oldName:{}},setup(f){const a=f,{isOpened:s}=it(a.guid),{t:r}=ne(),m=oe(),w=V(),_=V(),u=V(!1),i=Ue({newName:""}),b=[h=>!!h||r("dialogs.moveTorrent.required")];async function T(){await w.value?.validate(),u.value&&(a.isFolder?await m.renameTorrentFolder(a.hash,a.oldName,i.newName):await m.renameTorrentFile(a.hash,a.oldName,i.newName),F())}const F=()=>{s.value=!1};return Ce(()=>{if(i.newName=a.oldName,a.isFolder)ge(()=>_.value?.select());else{const h=i.newName.lastIndexOf("/"),N=i.newName.lastIndexOf(".");ge(()=>{_.value?.setSelectionRange(h+1,N==-1?i.newName.length:N)})}}),(h,N)=>(d(),O(be,{modelValue:o(s),"onUpdate:modelValue":N[3]||(N[3]=A=>Vt(s)?s.value=A:null)},{default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[y(l(o(r)("dialogs.moveTorrentFile.title",1+Number(h.isFolder))),1)]),_:1}),e(ce,null,{default:t(()=>[e(o(Xe),{modelValue:u.value,"onUpdate:modelValue":N[1]||(N[1]=A=>u.value=A),ref_key:"form",ref:w,onSubmit:N[2]||(N[2]=Ae(()=>{},["prevent"]))},{default:t(()=>[h.oldName?(d(),O(ke,{key:0,"model-value":h.oldName,disabled:"",label:h.$t("dialogs.moveTorrentFile.oldName")},null,8,["model-value","label"])):L("",!0),e(ke,{modelValue:i.newName,"onUpdate:modelValue":N[0]||(N[0]=A=>i.newName=A),ref_key:"input",ref:_,rules:b,autofocus:"",label:h.$t("dialogs.moveTorrent.newPath"),onKeydown:et(T,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",onClick:F},{default:t(()=>[y(l(h.$t("common.cancel")),1)]),_:1}),e(I,{color:"accent",disabled:!u.value,onClick:T},{default:t(()=>[y(l(h.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Ut={class:"mr-2"},xt={class:"mr-2"},Rt={class:"mr-4"},Et={class:"ml-2"},Mt=K({__name:"FileNode",props:{node:{}},emits:["renameFile","setFilePriority"],setup(f){const{t:a}=ne(),s=ye(),r=[{name:a("constants.file_priority.max"),icon:"mdi-priority-high",value:M.MAXIMAL},{name:a("constants.file_priority.high"),icon:"mdi-arrow-up",value:M.HIGH},{name:a("constants.file_priority.normal"),icon:"mdi-arrow-down",value:M.NORMAL},{name:a("constants.file_priority.unwanted"),icon:"mdi-priority-low",value:M.DO_NOT_DOWNLOAD}];function m(w){return r.find(_=>_.value===w.priority)?.name||""}return(w,_)=>(d(),O(W,{title:w.node.name,value:w.node.index,"prepend-icon":o(Bt)(w.node.name)},{append:t(()=>[c("span",Ut,"[ "+l(o(X)(w.node.size,o(s).useBinarySize))+" ]",1),c("span",xt,l(o(Ve)(w.node.progress)),1),c("span",Rt,"[ "+l(m(w.node))+" ]",1),e(st,{"open-on-hover":"","open-on-click":"","open-delay":"0","close-delay":"0"},{activator:t(({props:u})=>[e(I,he(u,{class:"mr-2",color:"accent",size:"x-small",icon:"mdi-trending-up"}),null,16)]),default:t(()=>[e(J,null,{default:t(()=>[(d(),$(z,null,R(r,u=>e(W,{onClick:i=>w.$emit("setFilePriority",w.node,u.value)},{default:t(()=>[e(Be,null,{default:t(()=>[e(le,null,{default:t(()=>[y(l(u.icon),1)]),_:2},1024),c("span",Et,l(u.name),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1}),e(I,{color:"accent",size:"x-small",icon:"mdi-pencil",onClick:_[0]||(_[0]=Ae(u=>w.$emit("renameFile",w.node),["stop"]))})]),_:1},8,["title","value","prepend-icon"]))}}),Wt={class:"mr-2"},Gt=K({__name:"FolderNode",props:{node:{}},emits:["renameFolder","renameFile","setFilePriority"],setup(f){const{t:a}=ne();function s(r){let m=0,w=0;for(const u of r.children)u.type==="file"?m++:u.type==="folder"&&w++;const _=[];return m>0&&_.push(a("torrentDetail.content.fileInfo",m)),w>0&&_.push(a("torrentDetail.content.folderInfo",w)),_.join(", ")}return(r,m)=>{const w=Nt("FolderNode",!0);return d(),O(ut,{value:r.node.type==="root"?"(root)":r.node.fullName},{activator:t(({props:_})=>[e(W,he(_,{"prepend-icon":r.node.type==="root"?"mdi-file-tree":"mdi-folder",title:r.node.type==="root"?r.$t("torrentDetail.content.rootNode"):r.node.name,value:r.node.type==="root"?"(root)":r.node.fullName}),{append:t(({isActive:u})=>[c("span",Wt,l(s(r.node)),1),r.node.type==="folder"?(d(),O(I,{key:0,color:"accent",size:"x-small",icon:"mdi-pencil",onClick:m[0]||(m[0]=Ae(i=>r.$emit("renameFolder",r.node),["stop"]))})):L("",!0),e(le,{icon:u?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:2},1040,["prepend-icon","title","value"])]),default:t(()=>[(d(!0),$(z,null,R(r.node.children,_=>(d(),$(z,null,[_.type==="folder"?(d(),O(w,{key:0,node:_,onRenameFolder:m[1]||(m[1]=u=>r.$emit("renameFolder",u)),onRenameFile:m[2]||(m[2]=u=>r.$emit("renameFile",u)),onSetFilePriority:m[3]||(m[3]=(u,i)=>r.$emit("setFilePriority",u,i))},null,8,["node"])):L("",!0),_.type==="file"?(d(),O(Mt,{key:1,node:_,onRenameFile:m[4]||(m[4]=u=>r.$emit("renameFile",u)),onSetFilePriority:m[5]||(m[5]=(u,i)=>r.$emit("setFilePriority",u,i))},null,8,["node"])):L("",!0)],64))),256))]),_:1},8,["value"])}}}),Ht=K({__name:"RootNode",props:{root:{}},emits:["renameFolder","renameFile","setFilePriority"],setup(f){return(a,s)=>(d(),O(J,{density:"compact","select-strategy":"classic"},{default:t(()=>[e(Gt,{node:a.root,onRenameFolder:s[0]||(s[0]=r=>a.$emit("renameFolder",r)),onRenameFile:s[1]||(s[1]=r=>a.$emit("renameFile",r)),onSetFilePriority:s[2]||(s[2]=(r,m)=>a.$emit("setFilePriority",r,m))},null,8,["node"])]),_:1}))}}),Kt=K({__name:"Content",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,s=ze(),r=oe(),{fileContentInterval:m}=Ot(ye()),{pause:w,resume:_}=Je(g,m,{immediate:!1,immediateCallback:!0}),u=V(!1),i=V(!1),b=V([]),{tree:T}=zt(b),F=V(["(root)"]),h=V(""),N=Ue({hash:"",isFolder:!1,oldName:""}),A=E({get:()=>b.value.filter(v=>v.priority!==M.DO_NOT_DOWNLOAD).map(v=>v.index),async set(v){const x=b.value.filter(D=>D.priority!==M.DO_NOT_DOWNLOAD).map(D=>D.index),G=x.filter(D=>!v.includes(D)).map(D=>b.value.find(S=>S.index===D)).filter(D=>D&&D.priority!==M.DO_NOT_DOWNLOAD).map(D=>D.index),k=v.filter(D=>!x.includes(D)).map(D=>b.value.find(S=>S.index===D)).filter(D=>D&&D.priority===M.DO_NOT_DOWNLOAD).map(D=>D.index);G.length&&await r.setTorrentFilePriority(a.torrent.hash,G,M.DO_NOT_DOWNLOAD),k.length&&await r.setTorrentFilePriority(a.torrent.hash,k,M.NORMAL),await g()}});async function B(v){N.hash=a.torrent.hash,N.isFolder=v.type==="folder",N.oldName=v.fullName,h.value=s.createDialog(tt,N)}async function p(v,x){await r.setTorrentFilePriority(a.torrent.hash,[v.index],x),await g()}async function g(){u.value||(u.value=!0,i.value=!0,await ge(),b.value=await r.fetchFiles(a.torrent.hash),i.value=!1,u.value=!1,await ge())}return me(()=>a.isActive,v=>{v?(_(),g()):w()}),me(()=>s.isDialogOpened(h.value),v=>{v||g()}),xe(()=>{_()}),(v,x)=>(d(),O(ae,{loading:i.value,flat:""},{default:t(()=>[e(Ht,{opened:F.value,"onUpdate:opened":x[0]||(x[0]=G=>F.value=G),selected:A.value,"onUpdate:selected":x[1]||(x[1]=G=>A.value=G),root:o(T),onRenameFolder:B,onRenameFile:B,onSetFilePriority:p},null,8,["opened","selected","root"])]),_:1},8,["loading"]))}}),jt={class:"pl-4"},qt={class:"pr-4"},q=K({__name:"InfoBase",props:{compact:{type:Boolean}},setup(f){return(a,s)=>(d(),O(C,{cols:"12",sm:"6",lg:"3"},{default:t(()=>[e(dt,{rounded:"xl",class:"d-flex align-center py-2 border"},{default:t(()=>[c("div",jt,[Ke(a.$slots,"title")]),e(te),c("div",qt,[Ke(a.$slots,"text")])]),_:3})]),_:3}))}}),Yt={key:0,class:"d-flex gap"},Xt=K({__name:"Info",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,s=oe(),r=Oe(),m=ye(),w=E({get:()=>a.torrent.auto_tmm,set:p=>s.toggleAutoTmm([a.torrent.hash],p)}),_=E({get:()=>a.torrent.f_l_piece_prio,set:()=>s.toggleFLPiecePrio([a.torrent.hash])}),u=E({get:()=>a.torrent.forced,set:p=>{p?r.forceResumeTorrents([a.torrent.hash]):r.resumeTorrents([a.torrent.hash])}}),i=E({get:()=>a.torrent.seq_dl,set:()=>s.toggleSeqDl([a.torrent.hash])}),b=E({get:()=>a.torrent.super_seeding,set:p=>s.setSuperSeeding([a.torrent.hash],p)}),T=[{title:"added_on",text:"added_on"},{title:"completed_on",text:"completed_on"},{title:"last_activity",text:"last_activity"},{title:"seen_complete",text:"seen_complete"}],F=[{title:"ratio_time_limit",text:"ratio_time_limit"},{title:"seeding_time",text:"seeding_time"},{title:"time_active",text:"time_active"}],h=[{title:"downloaded",text:"downloaded"},{title:"downloaded_session",text:"downloaded_session"},{title:"uploaded",text:"uploaded"},{title:"uploaded_session",text:"uploaded_session"},{title:"size",text:"size"},{title:"total_size",text:"total_size"},{title:"amount_left",text:"amount_left"},{title:"global_volume",text:"globalVolume"}],N=[{title:"download_limit",text:"dl_limit"},{title:"download_speed",text:"dlspeed"},{title:"upload_limit",text:"up_limit"},{title:"upload_speed",text:"upspeed"},{title:"avg_download_speed",text:"avgDownloadSpeed"},{title:"avg_upload_speed",text:"avgUploadSpeed"},{title:"global_speed",text:"globalSpeed"}],A=[{title:"available_peers",text:"available_peers"},{title:"available_seeds",text:"available_seeds"},{title:"num_leechs",text:"num_leechs"},{title:"num_seeds",text:"num_seeds"},{title:"ratio",text:"ratio"},{title:"ratio_limit",text:"ratio_limit"},{title:"availability",text:"availability"},{title:"eta",text:"eta"},{title:"category",text:"category"},{title:"state",text:"stateString"},{title:"trackers_count",text:"trackers_count"},{title:"priority",text:"priority"}],B=[{title:"content_path",text:"content_path"},{title:"download_path",text:"download_path"},{title:"hash",text:"hash"},{title:"infohash_v1",text:"infohash_v1"},{title:"infohash_v2",text:"infohash_v2"},{title:"magnet",text:"magnet"},{title:"name",text:"name"},{title:"save_path",text:"savePath"},{title:"tracker",text:"tracker"}];return(p,g)=>(d(),O(J,null,{default:t(()=>[e(W,null,{default:t(()=>[e(ct,null,{default:t(()=>[e(Q,{title:p.$t("torrentDetail.info.datetime_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(d(),$(z,null,R(T,v=>e(q,null,St({title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),_:2},[p.torrent[v.text]>0?{name:"text",fn:t(()=>[y(l(o(qe)(p.torrent[v.text]*1e3).format(o(m).dateFormat??"DD/MM/YYYY, HH:mm:ss")),1)]),key:"0"}:{name:"text",fn:t(()=>[y(l(p.$t("common.NA")),1)]),key:"1"}]),1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.duration_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(d(),$(z,null,R(F,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(o(qe).duration(p.torrent[v.text],"s").humanize()),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.boolean_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[e(q,null,{title:t(()=>[e(pe,{modelValue:w.value,"onUpdate:modelValue":g[0]||(g[0]=v=>w.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.auto_tmm")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:_.value,"onUpdate:modelValue":g[1]||(g[1]=v=>_.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.f_l_piece_prio")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:u.value,"onUpdate:modelValue":g[2]||(g[2]=v=>u.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.forced")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:i.value,"onUpdate:modelValue":g[3]||(g[3]=v=>i.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.seq_dl")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:b.value,"onUpdate:modelValue":g[4]||(g[4]=v=>b.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.super_seeding")},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.data_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(d(),$(z,null,R(h,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(o(X)(p.torrent[v.text],o(m).useBinarySize)),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.speed_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(d(),$(z,null,R(N,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(o(ee)(p.torrent[v.text],o(m).useBitSpeed)),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.text_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(d(),$(z,null,R(A,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(p.torrent[v.text]),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.long_text_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(J,null,{default:t(()=>[(d(),$(z,null,R(B,v=>e(W,{title:p.$t(`torrent.properties.${v.title}`)},{default:t(()=>[e(Ne,null,{default:t(()=>[y(l(p.torrent[v.text]),1)]),_:2},1024)]),_:2},1032,["title"])),64)),e(W,{title:p.$t("torrent.properties.tags")},{default:t(()=>[p.torrent.tags?.length?(d(),$("div",Yt,[(d(!0),$(z,null,R(p.torrent.tags,v=>(d(),O(de,{variant:"flat",color:"tag"},{default:t(()=>[y(l(v),1)]),_:2},1024))),256))])):(d(),O(Ne,{key:1},{default:t(()=>[y(l(p.$t("torrent.properties.empty_tags")),1)]),_:1}))]),_:1},8,["title"])]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})]),_:1})]),_:1}))}}),Jt=Se(Xt,[["__scopeId","data-v-bb1329d2"]]),Qt=["href"],Zt={key:1},el={class:"my-1"},tl={class:"mr-2"},ll={key:0},al={key:2},ol={key:0},nl={key:1},rl={key:2},il={key:3},sl={key:4},ul={key:0},dl=K({__name:"Overview",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,{t:s}=ne(),r=Pt(),m=ze(),w=oe(),_=Oe(),u=ye(),i=V(),b=V(""),T=V(0),F=V([]),h=V(0),N=V(0),A=V(""),B=V(0),p=V(0),g=V(0),v=V(0),x=E(()=>`torrent-${a.torrent.state}`),G=E(()=>`${parseInt(mt(B.value,!0))} ${ft(B.value,!0)}`),k=E(()=>a.torrent.state===vt.META_DL),D=E(()=>!k.value&&g.value>0&&g.value<u.canvasRenderThreshold),S=E(()=>D.value&&g.value<u.canvasRefreshThreshold);async function we(){const n=await _.getTorrentProperties(a.torrent.hash);b.value=n.comment,T.value=n.dl_speed_avg,g.value=n.pieces_num,p.value=n.pieces_have,B.value=n.piece_size,v.value=n.up_speed_avg}async function j(){F.value=await w.fetchFiles(a.torrent.hash),N.value=F.value.length;const n=F.value.filter(H=>H.priority!==M.DO_NOT_DOWNLOAD);h.value=n.length,h.value===1&&(A.value=n[0].name)}async function Ee(){if(!i.value)return;const n=await w.fetchPieceState(a.torrent.hash);i.value.width=n.length||-1;const H=i.value.getContext("2d");H.clearRect(0,0,i.value.width,i.value.height);let U="",re=1;for(let ie=0;ie<n.length;++ie){const Fe=n[ie];let fe="";if(Fe===$e.DOWNLOADING)fe=r.current.value.colors["torrent-downloading"];else if(Fe===$e.DOWNLOADED)fe=r.current.value.colors["torrent-pausedUP"];else if(Fe===$e.MISSING){const nt=F.value.filter(ve=>ve.priority!==M.DO_NOT_DOWNLOAD).map(ve=>ve.piece_range);for(const[ve,rt]of nt)if(ie>ve&&ie<rt){fe=r.current.value.colors["torrent-pausedDL"];break}}if(fe===U){++re;continue}U!==""&&(H.fillStyle=U,H.fillRect(ie-re,0,re,i.value.height)),re=1,U=fe}U!==""&&(H.fillStyle=U,H.fillRect(n.length-re,0,re,i.value.height))}async function lt(){try{await navigator.clipboard.writeText(a.torrent.hash)}catch{je.error(s("toast.copy.error"));return}je.success(s("toast.copy.success"))}function De(n){m.createDialog(It,{hashes:[a.torrent.hash],mode:n})}function Me(){m.createDialog(tt,{hash:a.torrent.hash,isFolder:!1,oldName:A.value})}const{resume:at,pause:ot}=Je(async()=>{await j(),S.value&&await Ee()},u.fileContentInterval,{immediate:!0,immediateCallback:!0});me(()=>a.isActive,n=>{n?at():ot()}),me(()=>a.torrent,async()=>{await we()});function We(n){if(m.hasActiveDialog)return!1;if(n.key==="d")return n.preventDefault(),De("dl"),!0;if(n.key==="s")return n.preventDefault(),De("save"),!0;if(n.key==="f"&&h.value===1)return n.preventDefault(),Me(),!0}return xe(()=>{document.addEventListener("keydown",We)}),Re(()=>{document.removeEventListener("keydown",We)}),(n,H)=>n.torrent?(d(),O(ae,{key:0},{default:t(()=>[e(_e,{class:"text-wrap"},{default:t(()=>[y(l(n.torrent.name),1)]),_:1}),e(gt,null,{default:t(()=>[c("div",null,[(d(!0),$(z,null,R(o(_t)(b.value),U=>(d(),$("span",null,[o(pt)(U)?(d(),$("a",{key:0,target:"_blank",href:U},l(U),9,Qt)):(d(),$("span",Zt,l(U),1))]))),256))]),c("div",el,[c("span",tl,l(n.torrent.hash),1),e(I,{variant:"outlined",rounded:"",onClick:lt},{default:t(()=>[y(l(n.$t("torrentDetail.overview.copy_hash")),1)]),_:1})])]),_:1}),e(ce,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12",md:"6"},{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"4"},{default:t(()=>[e(ht,{color:x.value,indeterminate:k.value,size:100,"model-value":n.torrent?.progress*100||0,width:15},{default:t(()=>[k.value?(d(),$("span",ll,l(n.$t("torrentDetail.overview.fetchingMetadata")),1)):n.torrent.progress===1?(d(),O(le,{key:1,icon:"mdi-check",size:"x-large"})):(d(),$("span",al,l(o(Ve)(n.torrent.progress)),1))]),_:1},8,["color","indeterminate","model-value"])]),_:1}),e(C,{cols:"8",class:"d-flex flex-column align-center justify-center"},{default:t(()=>[k.value?(d(),$("div",ol,[c("span",null,l(n.$t("torrentDetail.overview.waitingForMetadata")),1)])):D.value?(d(),$("div",nl,[c("canvas",{ref_key:"canvas",ref:i,width:"0",height:"10"},null,512)])):L("",!0),!k.value&&!D.value?(d(),$("div",rl,[c("span",null,l(n.$t("torrentDetail.overview.canvasRenderDisabled")),1)])):!k.value&&!S.value?(d(),$("div",il,[c("span",null,l(n.$t("torrentDetail.overview.canvasRefreshDisabled")),1)])):L("",!0),g.value>0?(d(),$("div",sl,[c("span",null,l(o(s)("torrentDetail.overview.pieceCount",{owned:p.value,total:g.value,pieceSize:G.value})),1)])):L("",!0),c("div",null,[e(le,{icon:"mdi-arrow-down"}),y(" "+l(o(ee)(n.torrent.dlspeed,o(u).useBitSpeed))+" ",1),e(le,{icon:"mdi-arrow-up"}),y(" "+l(o(ee)(n.torrent.upspeed,o(u).useBitSpeed)),1)])]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.download_path"))+":",1),c("div",null,l(n.torrent.download_path),1),e(I,{icon:"mdi-pencil",color:"accent",size:"x-small",onClick:H[0]||(H[0]=U=>De("dl"))})]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.fileCount"))+":",1),c("div",null,l(h.value)+" / "+l(N.value),1),h.value===1?(d(),$("div",ul,l(A.value),1)):L("",!0),h.value===1?(d(),O(I,{key:1,icon:"mdi-pencil",color:"accent",size:"x-small",onClick:Me})):L("",!0)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.save_path"))+":",1),c("div",null,l(n.torrent.savePath),1),e(I,{icon:"mdi-pencil",color:"accent",size:"x-small",onClick:H[1]||(H[1]=U=>De("save"))})]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.content_path"))+":",1),c("div",null,l(n.torrent.content_path),1)]),_:1})]),_:1})]),_:1}),e(C,{cols:"12",md:"6"},{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.state"))+":",1),e(de,{variant:"flat",color:x.value},{default:t(()=>[y(l(n.$t(`torrent.state.${n.torrent.state}`)),1)]),_:1},8,["color"])]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.category"))+":",1),e(de,{variant:"flat",color:"category"},{default:t(()=>[y(l(n.torrent.category.length?n.torrent.category:n.$t("navbar.side.filters.uncategorized")),1)]),_:1})]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.tracker"))+":",1),e(de,{variant:"flat",color:"tracker"},{default:t(()=>[y(l(n.torrent.tracker?o(yt)(n.torrent.tracker):n.$t("navbar.side.filters.untracked")),1)]),_:1})]),_:1}),e(C,{cols:"6",class:"d-flex flex-wrap chipgap"},{default:t(()=>[c("div",null,l(n.$t("torrent.properties.tags"))+":",1),n.torrent.tags?(d(!0),$(z,{key:0},R(n.torrent.tags,U=>(d(),O(de,{key:U,variant:"flat",color:"tag"},{default:t(()=>[y(l(U),1)]),_:2},1024))),128)):L("",!0),!n.torrent.tags||n.torrent.tags.length===0?(d(),O(de,{key:1,variant:"flat",color:"tag"},{default:t(()=>[y(l(n.$t("navbar.side.filters.untagged")),1)]),_:1})):L("",!0)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.selectedFileSize"))+":",1),c("div",null,l(o(X)(n.torrent.size,o(u).useBinarySize))+" / "+l(o(X)(n.torrent.total_size,o(u).useBinarySize)),1)]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.ratio"))+":",1),c("div",null,l(n.torrent.ratio),1)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.downloaded"))+":",1),c("div",null,l(o(X)(n.torrent.downloaded,o(u).useBinarySize)),1)]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.uploaded"))+":",1),c("div",null,l(o(X)(n.torrent.uploaded,o(u).useBinarySize)),1)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.dlSpeedAverage"))+":",1),c("div",null,l(o(ee)(T.value,o(u).useBitSpeed)),1)]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(n.$t("torrentDetail.overview.upSpeedAverage"))+":",1),c("div",null,l(o(ee)(v.value,o(u).useBitSpeed)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):L("",!0)}}),cl=Se(dl,[["__scopeId","data-v-a676963e"]]),ml={class:"d-flex"},fl={key:0},vl=["alt","src","title"],pl=["title"],_l={class:"text-subtitle-2 text-grey"},gl=["title"],hl={class:"d-flex flex-column"},yl={class:"text-h5"},wl=K({__name:"Peers",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,{t:s}=ne(),r=oe(),m=ye(),w=V(!1),_=V([]),u=V(""),i=V(null),b=V(!1);async function T(){w.value=!0,_.value=Object.entries((await r.getTorrentPeers(a.torrent.hash)).peers).map(([B,p])=>({...p,host:B})),w.value=!1}async function F(){u.value.length&&(await r.addTorrentPeers(a.torrent.hash,u.value.split(`
`)),await T(),h())}function h(){b.value=!1,u.value=""}async function N(B){await r.banPeers([B.host]),await T()}async function A(B){B??a.isActive?(await T(),i.value=setInterval(T,5e3)):(clearInterval(i.value),i.value=null)}return Ce(A),Re(()=>A(!1)),me(()=>a.isActive,A),(B,p)=>(d(),O(J,null,{default:t(()=>[(d(!0),$(z,null,R(_.value,(g,v)=>(d(),$(z,null,[v>0?(d(),O(Pe,{key:0,color:"white"})):L("",!0),e(W,null,{default:t(()=>[c("div",ml,[c("div",null,[e(Be,{class:"overflow-visible"},{default:t(()=>[g.country_code?(d(),$("span",fl,[o(wt)?(d(),$("img",{key:0,alt:o(Ie)(g.country_code).char,src:o(Ie)(g.country_code).url,title:g.country,style:{"max-width":"32px"}},null,8,vl)):(d(),$("span",{key:1,title:g.country},l(o(Ie)(g.country_code).char),9,pl))])):L("",!0),c("span",null,l(g.ip),1),c("span",_l," :"+l(g.port),1)]),_:2},1024),e(Ne,{class:"d-block"},{default:t(()=>[c("div",null,[y(" Flags: "),c("span",{class:"cursor-help",title:g.flags_desc},l(g.flags),9,gl)]),c("div",null,"Progress: "+l(o(Ve)(g.progress)),1),c("div",null,[e(le,{icon:"mdi-arrow-down",color:"download"}),y(" "+l(o(ee)(g.dl_speed,o(m).useBitSpeed))+" ",1),e(le,{icon:"mdi-arrow-up",color:"upload"}),y(" "+l(o(ee)(g.up_speed,o(m).useBitSpeed)),1)]),c("div",null,l(o(X)(g.downloaded,o(m).useBinarySize))+" | "+l(o(X)(g.uploaded,o(m).useBinarySize)),1),c("div",null,"Relevance: "+l(o(Ve)(g.relevance)),1)]),_:2},1024)]),e(te),c("div",hl,[e(I,{color:"red",icon:"mdi-cancel",variant:"text",onClick:x=>N(g)},null,8,["onClick"])])])]),_:2},1024)],64))),256)),_.value.length===0?(d(),O(W,{key:0},{default:t(()=>[y(l(B.$t("torrentDetail.peers.emptyList")),1)]),_:1})):L("",!0),e(W,null,{default:t(()=>[c("div",{class:Le(["d-flex gap py-5",B.$vuetify.display.mobile?"flex-column":"justify-space-evenly"])},[e(be,{modelValue:b.value,"onUpdate:modelValue":p[1]||(p[1]=g=>b.value=g),"max-width":"750px"},{activator:t(({props:g})=>[e(I,he(g,{variant:"flat",text:o(s)("torrentDetail.peers.addPeers.title"),color:"accent"}),null,16,["text"])]),default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[c("span",yl,l(o(s)("torrentDetail.peers.addPeers.title")),1)]),_:1}),e(ce,null,{default:t(()=>[e(Qe,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[e(Ze,{modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=g=>u.value=g),label:o(s)("torrentDetail.peers.addPeers.newPeers"),placeholder:o(s)("torrentDetail.peers.addPeers.newPeersPlaceholder"),hint:o(s)("torrentDetail.peers.addPeers.newPeersHint")},null,8,["modelValue","label","placeholder","hint"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",onClick:h},{default:t(()=>[y(l(o(s)("common.cancel")),1)]),_:1}),e(I,{color:"accent",onClick:F},{default:t(()=>[y(l(o(s)("common.ok")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],2)]),_:1})]),_:1}))}}),Dl=Se(wl,[["__scopeId","data-v-4f9dc7e6"]]),$l=K({__name:"TagsAndCategories",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,s=oe(),r=Oe(),m=E(()=>s.categories.map(i=>i.name).indexOf(a.torrent.category)),w=E(()=>s.tags.filter(i=>a.torrent.tags?.includes(i)));async function _(i){a.torrent.category===i?await r.setTorrentCategory([a.torrent.hash],""):await r.setTorrentCategory([a.torrent.hash],i)}async function u(i){a.torrent.tags?.includes(i)?await r.removeTorrentTags([a.torrent.hash],[i]):await r.addTorrentTags([a.torrent.hash],[i])}return Ce(async()=>{await s.fetchCategories(),await s.fetchTags()}),(i,b)=>(d(),O(ae,null,{default:t(()=>[e(ce,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12",md:"6"},{default:t(()=>[e(Ge,{"model-value":w.value,multiple:""},{default:t(()=>[e(J,null,{default:t(()=>[e(He,null,{default:t(()=>[y(l(i.$t("torrentDetail.tagsAndCategories.tags")),1)]),_:1}),(d(!0),$(z,null,R(o(s).tags,T=>(d(),O(W,{title:T,variant:i.torrent.tags?.includes(T)?"tonal":void 0,"base-color":i.torrent.tags?.includes(T)?"accent":void 0,onClick:F=>u(T)},null,8,["title","variant","base-color","onClick"]))),256))]),_:1})]),_:1},8,["model-value"])]),_:1}),e(C,{cols:"12",md:"6"},{default:t(()=>[e(Ge,{"model-value":m.value},{default:t(()=>[e(J,null,{default:t(()=>[e(He,null,{default:t(()=>[y(l(i.$t("torrentDetail.tagsAndCategories.categories")),1)]),_:1}),(d(!0),$(z,null,R(o(s).categories,T=>(d(),O(W,{title:T.name,variant:T.name===a.torrent.category?"tonal":void 0,"base-color":T.name===a.torrent.category?"accent":void 0,onClick:F=>_(T.name)},null,8,["title","variant","base-color","onClick"]))),256))]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),kl={class:"d-flex"},Tl={key:0},bl={key:1},Vl={key:2},Nl={key:3},Ol={key:0,class:"d-flex flex-column"},Sl={class:"text-h5"},Cl={class:"text-h5"},Al=K({__name:"Trackers",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,{t:s}=ne(),r=oe();function m(k){switch(k){case Y.DISABLED:return s("constants.trackerStatus.disabled");case Y.NOT_YET_CONTACTED:return s("constants.trackerStatus.not_yet_contacted");case Y.WORKING:return s("constants.trackerStatus.working");case Y.UPDATING:return s("constants.trackerStatus.updating");case Y.NOT_WORKING:return s("constants.trackerStatus.not_working");default:return""}}function w(k){return typeof k=="number"?k===-1?"N/A":k.valueOf():!k||k.num_peers===-1||k?.num_seeds===-1||k?.num_leeches===-1?"N/A":s("torrentDetail.trackers.peersValue",{peers:k.num_peers,seeds:k.num_seeds,leeches:k.num_leeches})}const _=V(!1),u=V([]),i=V(""),b=V(null),T=V(!1),F=[k=>!!k||s("torrentDetail.trackers.editTracker.newUrlRequired")],h=Ue({isVisible:!1,isFormValid:!1,oldUrl:"",newUrl:""});function N(k){h.isVisible=!0,h.oldUrl=k.url,h.newUrl=k.url,ge(()=>{document.getElementById("input")?.select()})}async function A(){_.value=!0,u.value=(await r.getTorrentTrackers(a.torrent.hash)).map(k=>({...k,isSelectable:k.tier!==-1})),_.value=!1}async function B(){i.value.length&&(await r.addTorrentTrackers(a.torrent.hash,i.value),await A(),p())}function p(){T.value=!1,i.value=""}async function g(){h.isFormValid&&(await r.editTorrentTracker(a.torrent.hash,h.oldUrl,h.newUrl),h.isVisible=!1,await A())}async function v(k){await r.removeTorrentTrackers(a.torrent.hash,[k.url]),await A()}async function x(){await r.reannounceTorrents([a.torrent.hash])}async function G(k){k??a.isActive?(await A(),b.value=setInterval(A,5e3)):(clearInterval(b.value),b.value=null)}return Ce(G),Re(()=>G(!1)),me(()=>a.isActive,G),(k,D)=>(d(),O(J,null,{default:t(()=>[(d(!0),$(z,null,R(u.value,(S,we)=>(d(),$(z,null,[we===3?(d(),O(Pe,{key:0,color:"white",thickness:"5"})):we>0?(d(),O(Pe,{key:1,class:"mx-5",color:"white"})):L("",!0),e(W,null,{default:t(()=>[c("div",kl,[c("div",{class:Le(`tracker-${o(Y)[S.status].toLowerCase()}`)},[e(Be,{class:"text-break text-wrap"},{default:t(()=>[y(l(S.url),1)]),_:2},1024),e(Ne,{class:"d-block"},{default:t(()=>[S.msg?(d(),$("div",Tl,l(S.msg),1)):(d(),$("div",bl,l(m(S.status)),1)),S.tier>=0?(d(),$("div",Vl,l(o(s)("torrentDetail.trackers.tier",S.tier)),1)):L("",!0),S.status!==o(Y).NOT_WORKING?(d(),$("div",Nl,[c("div",null,l(w(S)),1),c("div",null,"Downloads: "+l(w(S.num_downloaded)),1)])):L("",!0)]),_:2},1024)],2),e(te),S.tier>=0?(d(),$("div",Ol,[e(be,{modelValue:h.isVisible,"onUpdate:modelValue":D[4]||(D[4]=j=>h.isVisible=j),"max-width":"750px"},{activator:t(({props:j})=>[e(I,he(j,{icon:"mdi-pencil",variant:"text",onClick:Ee=>N(S)}),null,16,["onClick"])]),default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[c("span",Sl,l(o(s)("torrentDetail.trackers.editTracker.title")),1)]),_:1}),e(ce,null,{default:t(()=>[e(o(Xe),{modelValue:h.isFormValid,"onUpdate:modelValue":D[1]||(D[1]=j=>h.isFormValid=j),onSubmit:D[2]||(D[2]=Ae(()=>{},["prevent"]))},{default:t(()=>[e(o(ke),{"model-value":h.oldUrl,disabled:"",label:k.$t("torrentDetail.trackers.editTracker.oldUrl")},null,8,["model-value","label"]),e(o(ke),{modelValue:h.newUrl,"onUpdate:modelValue":D[0]||(D[0]=j=>h.newUrl=j),id:"input",rules:F,label:k.$t("torrentDetail.trackers.editTracker.newUrl"),autofocus:"",onKeydown:et(g,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",disabled:!h.isFormValid,onClick:D[3]||(D[3]=j=>h.isVisible=!1)},{default:t(()=>[y(l(o(s)("common.cancel")),1)]),_:1},8,["disabled"]),e(I,{color:"accent",onClick:g},{default:t(()=>[y(l(o(s)("common.ok")),1)]),_:1})]),_:1})]),_:1})]),_:2},1032,["modelValue"]),e(I,{color:"red",icon:"mdi-delete",variant:"text",onClick:j=>v(S)},null,8,["onClick"])])):L("",!0)])]),_:2},1024)],64))),256)),e(W,null,{default:t(()=>[c("div",{class:Le(["d-flex gap py-5",k.$vuetify.display.mobile?"flex-column":"justify-space-evenly"])},[e(be,{modelValue:T.value,"onUpdate:modelValue":D[6]||(D[6]=S=>T.value=S),"max-width":"750px"},{activator:t(({props:S})=>[e(I,he(S,{variant:"flat",text:o(s)("torrentDetail.trackers.addTrackers.title"),color:"accent"}),null,16,["text"])]),default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[c("span",Cl,l(o(s)("torrentDetail.trackers.addTrackers.title")),1)]),_:1}),e(ce,null,{default:t(()=>[e(Qe,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[e(Ze,{modelValue:i.value,"onUpdate:modelValue":D[5]||(D[5]=S=>i.value=S),label:o(s)("torrentDetail.trackers.addTrackers.newTrackers"),hint:o(s)("torrentDetail.trackers.addTrackers.newTrackersHint")},null,8,["modelValue","label","hint"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",onClick:p},{default:t(()=>[y(l(o(s)("common.cancel")),1)]),_:1}),e(I,{color:"accent",onClick:B},{default:t(()=>[y(l(o(s)("common.ok")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(I,{variant:"flat",disabled:u.value.length===3,text:o(s)("torrentDetail.trackers.reannounce"),color:"primary",onClick:x},null,8,["disabled","text"])],2)]),_:1})]),_:1}))}}),Fl=Se(Al,[["__scopeId","data-v-ed947913"]]),Il={class:"pa-3 text-select"},Pl={style:{"font-size":"1.6em !important"},class:"subtitle-1 ml-2"},Ll={class:"d-flex justify-end"},El=K({__name:"TorrentDetail",setup(f){const a=Ct(),s=At(),{t:r}=ne(),m=ze(),w=Oe(),_=V("overview"),u=E(()=>a.params.hash),i=E(()=>w.getTorrentByHash(u.value)),b=()=>{s.push({name:"dashboard"})};function T(F){if(m.hasActiveDialog)return!1;if(F.key==="Delete")return m.createDialog($t,{hashes:[u.value]}),F.preventDefault(),!0;F.key==="Escape"&&b()}return xe(()=>{document.addEventListener("keydown",T)}),Ft(()=>{document.removeEventListener("keydown",T)}),(F,h)=>(d(),$("div",Il,[e(P,{"no-gutters":"",align:"center",justify:"center"},{default:t(()=>[e(C,null,{default:t(()=>[c("h1",Pl,l(o(r)("torrentDetail.title")),1)]),_:1}),e(C,null,{default:t(()=>[c("div",Ll,[e(I,{icon:"mdi-close",variant:"plain",onClick:b})])]),_:1})]),_:1}),e(P,{class:"ma-0 pa-0"},{default:t(()=>[e(kt,{modelValue:_.value,"onUpdate:modelValue":h[0]||(h[0]=N=>_.value=N),"bg-color":"primary",grow:"","show-arrows":""},{default:t(()=>[e(se,{value:"overview"},{default:t(()=>[y(l(o(r)("torrentDetail.tabs.overview")),1)]),_:1}),e(se,{value:"info"},{default:t(()=>[y(l(o(r)("torrentDetail.tabs.info")),1)]),_:1}),e(se,{value:"trackers"},{default:t(()=>[y(l(o(r)("torrentDetail.tabs.trackers")),1)]),_:1}),e(se,{value:"peers"},{default:t(()=>[y(l(o(r)("torrentDetail.tabs.peers")),1)]),_:1}),e(se,{value:"content"},{default:t(()=>[y(l(o(r)("torrentDetail.tabs.content")),1)]),_:1}),e(se,{value:"tagsAndCategories"},{default:t(()=>[y(l(o(r)("torrentDetail.tabs.tagsAndCategories")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),i.value?(d(),O(Dt,{key:0,modelValue:_.value,"onUpdate:modelValue":h[1]||(h[1]=N=>_.value=N),touch:!1},{default:t(()=>[e(ue,{value:"overview"},{default:t(()=>[e(cl,{torrent:i.value,"is-active":_.value==="overview"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"info"},{default:t(()=>[e(Jt,{torrent:i.value,"is-active":_.value==="info"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"trackers"},{default:t(()=>[e(Fl,{torrent:i.value,"is-active":_.value==="trackers"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"peers"},{default:t(()=>[e(Dl,{torrent:i.value,"is-active":_.value==="peers"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"content"},{default:t(()=>[e(Kt,{torrent:i.value,"is-active":_.value==="content"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"tagsAndCategories"},{default:t(()=>[e($l,{torrent:i.value,"is-active":_.value==="tagsAndCategories"},null,8,["torrent","is-active"])]),_:1})]),_:1},8,["modelValue"])):L("",!0)]))}});export{El as default};
