"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[440],{404:(t,e,a)=>{a.d(e,{c:()=>i});const c=a.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",s=a.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=a(496);const i=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:c,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:s,alt:"Avengers logo"})]})},304:(t,e,a)=>{a.d(e,{c:()=>n});const c=a.p+"static/media/error.42292aa12b6bc303ce99.gif";var s=a(496);const n=()=>(0,s.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error"})},196:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var c=a(12),s=a(760),n=a(60),i=a(88),r=a(304),o=a(496);const l=()=>{const{error:t,loading:e,getComics:a}=(0,s.c)(),[l,u]=(0,n.useState)([]),[m,d]=(0,n.useState)(!1),[h,p]=(0,n.useState)(0),[g,b]=(0,n.useState)(!1);(0,n.useEffect)((()=>{v(h,!0)}),[]);const v=(t,e)=>{d(!e),a(t).then(x)},x=t=>{let e=!1;t.length<8&&(e=!0),u((e=>[...e,...t])),d((t=>!1)),p((t=>t+8)),b((t=>e))};const f=function(t){const e=t.map(((t,e)=>(0,o.jsx)("li",{className:"comics__item",children:(0,o.jsxs)(c.cH,{to:"/comics/".concat(t.id),children:[(0,o.jsx)("img",{src:t.thumbnail,alt:"x-men",className:"comics__item-img"}),(0,o.jsx)("div",{className:"comics__item-name",children:t.name}),(0,o.jsx)("div",{className:"comics__item-price",children:"NOT AVAILABLE"})]})},t.id)));return(0,o.jsx)("ul",{className:"comics__grid",children:e})}(l),j=t?(0,o.jsx)(r.c,{}):null,_=e&&!m?(0,o.jsx)(i.c,{}):null;return(0,o.jsxs)("div",{className:"comics__list",children:[j,_,f,(0,o.jsx)("button",{disabled:m,style:{display:g?"none":"block"},className:"button button__main button__long",onClick:()=>v(h),children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})};var u=a(404);const m=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.c,{}),(0,o.jsx)(l,{})]})},760:(t,e,a)=>{a.d(e,{c:()=>s});var c=a(60);const s=()=>{const{loading:t,request:e,error:a,clearError:s}=(()=>{const[t,e]=(0,c.useState)(!1),[a,s]=(0,c.useState)(null);return{loading:t,request:(0,c.useCallback)((async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};e(!0);try{const s=await fetch(t,{method:a,body:c,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));const i=await s.json();return e(!1),i}catch(i){throw e(!1),s(i.message),i}}),[]),error:a,clearError:(0,c.useCallback)((()=>s(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=f39d2a04760f161b2abf7c8817a46165",r=t=>({id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}),o=t=>{var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:t,error:a,getCharacterByName:async t=>(await e("".concat(n,"characters?name=").concat(t,"&").concat(i))).data.results.map(r),getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"characters?limit=9&offset=").concat(t,"&").concat(i))).data.results.map(r)},getCharacter:async t=>{const a=await e("".concat(n,"characters/").concat(t,"?").concat(i));return r(a.data.results[0])},clearError:s,getComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(i))).data.results.map(o)},getComicsInfo:async t=>{const a=await e("".concat(n,"comics/").concat(t,"?").concat(i));return o(a.data.results[0])},getComic:async t=>{const a=await e("".concat(n,"comics/").concat(t,"?").concat(i));return o(a.data.results[0])}}}}}]);
//# sourceMappingURL=440.f6e4cc6b.chunk.js.map