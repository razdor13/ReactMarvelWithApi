"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[532],{304:(e,a,s)=>{s.d(a,{c:()=>n});const c=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var t=s(496);const n=()=>(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error"})},472:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var c=s(60),t=s(760),n=s(88),r=s(304);const i=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var l=s(496);const o=e=>{let{char:a}=e;const{name:s,description:c,thumbnail:t,homepage:n,wiki:r}=a,i=(null===t||void 0===t?void 0:t.includes("image_not_available"))?{objectFit:"contain"}:null;return(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{style:i,src:t,alt:"Random character",className:"randomchar__img"}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:c}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:r,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,a]=(0,c.useState)({}),{loading:s,error:d,getCharacter:h,clearError:m}=(0,t.c)();(0,c.useEffect)((()=>{_()}),[]);const u=e=>{a(e)},_=()=>{m();const a=Math.floor(400*Math.random())+1011e3;h(a).then(u),console.log(e)},j=d?(0,l.jsx)(r.c,{}):null,x=s?(0,l.jsx)(n.c,{}):null,p=s||d?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[j,x,p,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:_,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=e=>{const[a,s]=(0,c.useState)([]),[i,o]=(0,c.useState)(!1),[d,h]=(0,c.useState)(210),[m,u]=(0,c.useState)(!1),{loading:_,error:j,getAllCharacters:x}=(0,t.c)();(0,c.useEffect)((()=>{p(d,!0)}),[]);const p=(e,a)=>{o(!a),x(e).then(b)},b=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),o((e=>!1)),h((e=>e+9)),u((e=>a))},g=(0,c.useRef)([]),v=e=>{g.current.forEach((e=>e.classList.remove("char__item_selected"))),g.current[e].classList.add("char__item_selected")};const f=function(a){const s=a.map(((a,s)=>{const c=a.thumbnail.includes("image_not_available")?{objectFit:"fill"}:null;return(0,l.jsxs)("li",{ref:e=>g.current[s]=e,className:"char__item",onClick:()=>{e.onCharSelected(a.id),v(s)},tabIndex:0,onKeyPress:c=>{c.preventDefault()," "!==c.key&&"Enter"!==c.key||(e.onCharSelected(a.id),v(s))},children:[(0,l.jsx)("img",{src:a.thumbnail,alt:a.name,style:c}),(0,l.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:s})}(a),N=j?(0,l.jsx)(r.c,{}):null,k=_&&!i?(0,l.jsx)(n.c,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[N,k,f,(0,l.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:m?"none":"block"},onClick:()=>p(d),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},m=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]}),u=e=>{let{char:a}=e;const{name:s,description:c,thumbnail:t,homepage:n,wiki:r,comics:i}=a,o=t.includes("image_not_available")?{objectFit:"fill"}:null;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:t,alt:s,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:r,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:c}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with character",i.map(((e,a)=>{if(!(a>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},_=e=>{const[a,s]=(0,c.useState)(null),{error:i,loading:o,getCharacter:d,clearError:h}=(0,t.c)();(0,c.useEffect)((()=>{_()}),[]),(0,c.useEffect)((()=>{_()}),[e.charId]);const _=()=>{const{charId:a}=e;a&&(h(),d(a).then(j))},j=e=>{s(e)},x=a||o||i?null:(0,l.jsx)(m,{}),p=i?(0,l.jsx)(r.c,{}):null,b=o?(0,l.jsx)(n.c,{}):null,g=o||i||!a?null:(0,l.jsx)(u,{char:a});return(0,l.jsxs)("div",{className:"char__info",children:[x,p,b,g]})};class j extends c.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(r.c,{}):this.props.children}}const x=j,p=s.p+"static/media/vision.067d4ae1936d64a577ce.png",b=()=>{const[e,a]=(0,c.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(x,{children:(0,l.jsx)(h,{onCharSelected:e=>{a(e)}})}),(0,l.jsx)(x,{children:(0,l.jsx)(_,{charId:e})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:p,alt:"vision"})]})}},760:(e,a,s)=>{s.d(a,{c:()=>t});var c=s(60);const t=()=>{const{loading:e,request:a,error:s,clearError:t}=(()=>{const[e,a]=(0,c.useState)(!1),[s,t]=(0,c.useState)(null);return{loading:e,request:(0,c.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const t=await fetch(e,{method:s,body:c,headers:n});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));const r=await t.json();return a(!1),r}catch(r){throw a(!1),t(r.message),r}}),[]),error:s,clearError:(0,c.useCallback)((()=>t(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=f39d2a04760f161b2abf7c8817a46165",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:s,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(r))).data.results.map(i)},getCharacter:async e=>{const s=await a("".concat(n,"characters/").concat(e,"?").concat(r));return i(s.data.results[0])},clearError:t,getComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await a("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(r))).data.results.map(l)},getComicsInfo:async e=>{const s=await a("".concat(n,"comics/").concat(e,"?").concat(r));return l(s.data.results[0])},getComic:async e=>{const s=await a("".concat(n,"comics/").concat(e,"?").concat(r));return l(s.data.results[0])}}}}}]);
//# sourceMappingURL=532.25df7e9e.chunk.js.map