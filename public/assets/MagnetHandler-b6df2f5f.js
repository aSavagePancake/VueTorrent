import{au as r,v as s,aR as n}from"./index-cdf434c1.js";import{g as u,aa as i,$ as m,M as p}from"./vue-f2a09b7f.js";import"./faker-c43f92d4.js";import"./vuetify-84dffa63.js";const l=u({__name:"MagnetHandler",setup(d){const o=i(),a=m();return p(async()=>{const e=decodeURIComponent(o.params.url);if(e.startsWith("magnet:")){const t=r();t.isFirstInit=!1,t.pushTorrentToQueue(e),s().createDialog(n,{})}await a.push({name:"dashboard"})}),()=>{}}});export{l as default};