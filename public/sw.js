if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const c=s=>i(s,r),o={module:{uri:r},exports:a,require:c};e[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(l(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddModal.0eed21fa.js",revision:null},{url:"assets/AddModal.4a803c14.css",revision:null},{url:"assets/ChangeLocationModal.d55b00b2.js",revision:null},{url:"assets/ConfirmDeleteModal.fd28e25b.js",revision:null},{url:"assets/CreateCategoryDialog.9c3d084c.js",revision:null},{url:"assets/CreateTagDialog.27d6d525.js",revision:null},{url:"assets/Dashboard.b495c8fc.js",revision:null},{url:"assets/Dashboard.defc342a.css",revision:null},{url:"assets/FeedForm.94b3a1ed.js",revision:null},{url:"assets/index.12e5dbd2.css",revision:null},{url:"assets/index.3725ae8b.js",revision:null},{url:"assets/index.bc048213.css",revision:null},{url:"assets/Login.300ef8e7.js",revision:null},{url:"assets/MagnetHandler.41dc08c3.js",revision:null},{url:"assets/PluginManager.2be2fe12.js",revision:null},{url:"assets/RenameModal.6fa680bd.js",revision:null},{url:"assets/RssArticles.10ff4912.css",revision:null},{url:"assets/RssArticles.edeab0b2.js",revision:null},{url:"assets/RuleForm.f56b0628.js",revision:null},{url:"assets/SearchModal.52ea4aac.js",revision:null},{url:"assets/SearchModal.65d2ef8b.css",revision:null},{url:"assets/Settings.95ebdf55.css",revision:null},{url:"assets/Settings.f61d98e8.js",revision:null},{url:"assets/ShareLimitInput.a358f134.js",revision:null},{url:"assets/ShareLimitModal.36dbcfca.js",revision:null},{url:"assets/ShareLimitModal.a6ce7612.css",revision:null},{url:"assets/SpeedLimitModal.e49beb5d.js",revision:null},{url:"assets/TorrentDetail.88345409.css",revision:null},{url:"assets/TorrentDetail.a015ef1e.js",revision:null},{url:"assets/VCheckbox.9020f9ce.css",revision:null},{url:"assets/VCheckbox.e5201f9c.js",revision:null},{url:"assets/VContainer.c1c4a2cc.js",revision:null},{url:"assets/VDataTable.16cc5cf7.js",revision:null},{url:"assets/VDataTable.d676ab1c.css",revision:null},{url:"assets/VDialog.1c2aa677.css",revision:null},{url:"assets/VDialog.512ca4b6.js",revision:null},{url:"assets/VForm.06dfbb8c.js",revision:null},{url:"assets/VSwitch.86556a47.js",revision:null},{url:"assets/VSwitch.88ecae5e.css",revision:null},{url:"assets/VTabItem.6d2ee3b7.css",revision:null},{url:"assets/VTabItem.e1cc33ec.js",revision:null},{url:"assets/VTextarea.c5c43abc.js",revision:null},{url:"assets/VTextarea.eb1b260f.css",revision:null},{url:"assets/vue.ea0348c7.js",revision:null},{url:"favicon.ico",revision:"33590c4e1f08d767c3290b96f00a91ee"},{url:"icons/android-chrome-192x192.png",revision:"d0419aec44c074ae022a0052821a545d"},{url:"icons/android-chrome-512x512.png",revision:"5e8e59e9954cf4c49d252fdd6e2c1fc1"},{url:"icons/android-chrome-maskable-192x192.png",revision:"577770f3910bcea8b215d408285c283f"},{url:"icons/android-chrome-maskable-512x512.png",revision:"a5c84260cf16b4562102ddf5069d4832"},{url:"icons/apple-touch-icon.png",revision:"998f96b230c37650d3a21c59e90dcc15"},{url:"icons/favicon-16x16.png",revision:"818e575cb13df1e1d852c21e22c93556"},{url:"icons/favicon-32x32.png",revision:"728c786ff66b557a25a8941300acfd43"},{url:"icons/msapplication-icon-144x144.png",revision:"90c0ad433d634194c32b4b0e05103cd3"},{url:"icons/safari-pinned-tab.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"img/icons/favicon.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"index.html",revision:"35295e68b0381c74152de26e9b780c68"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"33590c4e1f08d767c3290b96f00a91ee"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icons/android-chrome-192x192.png",revision:"d0419aec44c074ae022a0052821a545d"},{url:"./icons/android-chrome-512x512.png",revision:"5e8e59e9954cf4c49d252fdd6e2c1fc1"},{url:"./icons/android-chrome-maskable-192x192.png",revision:"577770f3910bcea8b215d408285c283f"},{url:"./icons/android-chrome-maskable-512x512.png",revision:"a5c84260cf16b4562102ddf5069d4832"},{url:"./icons/apple-touch-icon.png",revision:"998f96b230c37650d3a21c59e90dcc15"},{url:"./icons/safari-pinned-tab.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"./icons/msapplication-icon-144x144.png",revision:"90c0ad433d634194c32b4b0e05103cd3"},{url:"manifest.webmanifest",revision:"e78d796e50baff390ac5cbb3b0091620"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));