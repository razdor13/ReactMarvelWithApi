"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[432],{404:(c,e,t)=>{t.d(e,{c:()=>i});const a=t.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",s=t.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=t(496);const i=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:a,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:s,alt:"Avengers logo"})]})},304:(c,e,t)=>{t.d(e,{c:()=>n});const a=t.p+"static/media/error.42292aa12b6bc303ce99.gif";var s=t(496);const n=()=>(0,s.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},680:(c,e,t)=>{t.r(e),t.d(e,{default:()=>d});var a=t(560),s=t(12),n=t(60),i=t(760),r=t(88),o=t(304),l=t(404),u=t(496);const m=c=>{let{comic:e}=c;const{title:t,description:a,pageCount:n,thumbnail:i,language:r,price:o}=e;return(0,u.jsxs)("div",{className:"single-comic",children:[(0,u.jsx)("img",{src:i,alt:t,className:"single-comic__img"}),(0,u.jsxs)("div",{className:"single-comic__info",children:[(0,u.jsx)("h2",{className:"single-comic__name",children:t}),(0,u.jsx)("p",{className:"single-comic__descr",children:a}),(0,u.jsx)("p",{className:"single-comic__descr",children:n}),(0,u.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),(0,u.jsx)("div",{className:"single-comic__price",children:o})]}),(0,u.jsx)(s.cH,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},d=()=>{const{comicId:c}=(0,a.W4)(),[e,t]=(0,n.useState)(null),{loading:s,error:d,getComic:g,clearError:p}=(0,i.c)();(0,n.useEffect)((()=>{h()}),[c]);const h=()=>{p(),g(c).then(b)},b=c=>{t(c)},f=d?(0,u.jsx)(o.c,{}):null,x=s?(0,u.jsx)(r.c,{}):null,v=s||d||!e?null:(0,u.jsx)(m,{comic:e});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.c,{}),f,x,v]})}},760:(c,e,t)=>{t.d(e,{c:()=>s});var a=t(60);const s=()=>{const{loading:c,request:e,error:t,clearError:s}=(()=>{const[c,e]=(0,a.useState)(!1),[t,s]=(0,a.useState)(null);return{loading:c,request:(0,a.useCallback)((async function(c){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};e(!0);try{const s=await fetch(c,{method:t,body:a,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(c,", status: ").concat(s.status));const i=await s.json();return e(!1),i}catch(i){throw e(!1),s(i.message),i}}),[]),error:t,clearError:(0,a.useCallback)((()=>s(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=f39d2a04760f161b2abf7c8817a46165",r=c=>({id:c.id,name:c.name,description:c.description?"".concat(c.description.slice(0,210),"..."):"There is no description for character",thumbnail:c.thumbnail.path+"."+c.thumbnail.extension,homepage:c.urls[0].url,wiki:c.urls[1].url,comics:c.comics.items}),o=c=>{var e;return{id:c.id,title:c.title,description:c.description||"There is no description",pageCount:c.pageCount?"".concat(c.pageCount," p."):"No information about the number of pages",thumbnail:c.thumbnail.path+"."+c.thumbnail.extension,language:(null===(e=c.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:c.prices[0].price?"".concat(c.prices[0].price,"$"):"not available"}};return{loading:c,error:t,getAllCharacters:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"characters?limit=9&offset=").concat(c,"&").concat(i))).data.results.map(r)},getCharacter:async c=>{const t=await e("".concat(n,"characters/").concat(c,"?").concat(i));return r(t.data.results[0])},clearError:s,getComics:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(i))).data.results.map(o)},getComicsInfo:async c=>{const t=await e("".concat(n,"comics/").concat(c,"?").concat(i));return o(t.data.results[0])},getComic:async c=>{const t=await e("".concat(n,"comics/").concat(c,"?").concat(i));return o(t.data.results[0])}}}}}]);
//# sourceMappingURL=432.b2dfc6a9.chunk.js.map