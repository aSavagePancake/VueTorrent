import{ak as r,E as s,aI as n}from"./index-3d292dc4.js";import{d as i,a7 as u,$ as m,L as p}from"./vue-41465b3a.js";import"./faker-dcfab09f.js";import"./vuetify-7c124399.js";const g=i({__name:"MagnetHandler",setup(c){const o=u(),t=m();return p(async()=>{const a=decodeURIComponent(o.params.url);if(a.startsWith("magnet:")){const e=r();e.isAddTorrentDialogFirstInit=!1,e.pushTorrentToQueue(a),s().createDialog(n,{})}await t.push({name:"dashboard"})}),()=>{}}});export{g as default};
