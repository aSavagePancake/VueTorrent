if(!self.define){let s,e={};const o=(o,l)=>(o=new URL(o+".js",l).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let i={};const a=s=>o(s,n),t={module:{uri:n},exports:i,require:a};e[n]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(r(...s),i)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/ArrayPagination-09c031d0.js",revision:null},{url:"assets/Dashboard-2246f80f.js",revision:null},{url:"assets/Dashboard-cbc61bd8.css",revision:null},{url:"assets/dayjs.min-26db5b34.js",revision:null},{url:"assets/faker-c43f92d4.js",revision:null},{url:"assets/index-1edd5138.js",revision:null},{url:"assets/index-47f174c4.css",revision:null},{url:"assets/index-a6bbc4ef.js",revision:null},{url:"assets/Login-06144232.js",revision:null},{url:"assets/Logs-a7295fa9.css",revision:null},{url:"assets/Logs-f7fdd9dd.js",revision:null},{url:"assets/MagnetHandler-40449cb7.js",revision:null},{url:"assets/materialdesignicons-webfont-28c8f97f.woff",revision:null},{url:"assets/materialdesignicons-webfont-31010194.woff2",revision:null},{url:"assets/MoveTorrentDialog.vue_vue_type_script_setup_true_lang-e6bf7022.js",revision:null},{url:"assets/PasswordField.vue_vue_type_script_setup_true_lang-fa86b82d.js",revision:null},{url:"assets/roboto-cyrillic-400-normal-495d38d4.woff2",revision:null},{url:"assets/roboto-cyrillic-400-normal-adba67d2.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-0a32035a.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",revision:null},{url:"assets/roboto-greek-400-normal-076b9dc1.woff",revision:null},{url:"assets/roboto-greek-400-normal-daf51ab5.woff2",revision:null},{url:"assets/roboto-latin-400-normal-a9fdbefa.woff",revision:null},{url:"assets/roboto-latin-400-normal-f6734f81.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-3c23eb02.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-c2b94086.woff",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-8c367f2f.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-f32fcdb5.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-ae7d87eb.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-eef02d41.woff2",revision:null},{url:"assets/roboto-mono-greek-400-normal-3355834d.woff",revision:null},{url:"assets/roboto-mono-greek-400-normal-53a8927b.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-7295944e.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-d5d7d67f.woff",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-20f2c9c1.woff",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-820adbd1.woff2",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-9a7a0360.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-77b24796.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-d2390f1a.woff",revision:null},{url:"assets/RssArticles-0b43bdc3.js",revision:null},{url:"assets/RssArticles-6c81b465.css",revision:null},{url:"assets/SearchEngine-ccf00084.js",revision:null},{url:"assets/Settings-5b2b6e30.css",revision:null},{url:"assets/Settings-5f0d2aee.js",revision:null},{url:"assets/TorrentDetail-43be3e08.css",revision:null},{url:"assets/TorrentDetail-56033831.js",revision:null},{url:"assets/torrents-f1a47456.js",revision:null},{url:"assets/vue-15fc29be.js",revision:null},{url:"assets/vuetify-47497518.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"1e758186502e225b415dc50c011084ee"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
