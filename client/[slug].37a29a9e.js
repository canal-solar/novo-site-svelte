import{S as r,i as t,s,r as e,u as n,v as a,p as u,q as o,w as l}from"./client.30dfdd03.js";import{A as i}from"./Article.71902e74.js";function c(r){let t;const s=new i({props:{url:r[0]}});return{c(){e(s.$$.fragment)},l(r){n(s.$$.fragment,r)},m(r,e){a(s,r,e),t=!0},p(r,[t]){const e={};1&t&&(e.url=r[0]),s.$set(e)},i(r){t||(u(s.$$.fragment,r),t=!0)},o(r){o(s.$$.fragment,r),t=!1},d(r){l(s,r)}}}async function p(r){const{slug:t}=r.params;return{url:`/index.php/video/item/${t}`}}function f(r,t,s){let{url:e}=t;return r.$set=(r=>{"url"in r&&s(0,e=r.url)}),[e]}export default class extends r{constructor(r){super(),t(this,r,f,c,s,{url:0})}}export{p as preload};