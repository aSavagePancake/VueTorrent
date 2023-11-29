import{g as v,K as b,$ as h,a9 as q,r as x,d as C,x as S,a as k,a1 as K,a2 as A,a3 as s,m as e,W as c,Z as p,u as l,Y as f,an as _,a8 as y}from"./vue-64a3430d.js";import{_ as T}from"./PasswordField.vue_vue_type_script_setup_true_lang-db86cbb2.js";import{aQ as B,aR as F,h as R,aJ as U,i as I,s as L,t as M,l as N,v as O,w as $,j}from"./index-e0d88e3b.js";import"./faker-c43f92d4.js";import"./vuetify-ba474ef2.js";const Z=v({__name:"Login",setup(D){const{t:a}=b(),w=h(),o=q(),u=B(),r=x({username:"",password:""}),m=C(!1),V={username:[d=>!!d||a("login.rules.username_required")],password:[d=>!!d||a("login.rules.password_required")]},i=async()=>{m.value&&(await u.login(r.username,r.password),u.isAuthenticated?(y.success(a("login.success")),g()):y.error(a("login.error")))},g=()=>{o.query.redirect?w.push(o.query.redirect):w.push({name:"dashboard"})};return S(async()=>{o.query.username&&o.query.password&&await u.login(o.query.username,o.query.password)}),k(()=>{u.isAuthenticated&&g()}),(d,t)=>(K(),A(F,{class:"mt-16"},{default:s(()=>[e(j,{class:"mx-auto",rounded:"lg","min-width":"250"},{default:s(()=>[e(R,null,{default:s(()=>[c(p(l(a)("login.title")),1)]),_:1}),e(U,null,{default:s(()=>[c(p(l(a)("login.subtitle")),1)]),_:1}),e(I,null,{default:s(()=>[e(L,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=n=>m.value=n),onSubmit:f(i,["prevent"])},{default:s(()=>[e(M,{modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=n=>r.username=n),label:l(a)("login.username"),autofocus:"",rules:V.username,onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},{prepend:s(()=>[e(N,{color:"accent",icon:"mdi-account"})]),_:1},8,["modelValue","label","rules","onKeydown"]),e(T,{modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=n=>r.password=n),label:l(a)("login.password"),rules:V.password,"prepend-icon":"mdi-lock",onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},null,8,["modelValue","label","rules","onKeydown"])]),_:1},8,["modelValue","onSubmit"])]),_:1}),e(O,null,{default:s(()=>[e($,{variant:"elevated",block:"",color:"accent",onClick:i},{default:s(()=>[c(p(l(a)("login.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Z as default};
