(this.webpackJsonpreact_itunes_movies=this.webpackJsonpreact_itunes_movies||[]).push([[0],{21:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),s=a(8),o=a.n(s),u=(a(36),a(2)),i=Object(n.createContext)(),m=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),m=o[0],d=o[1];return r.a.createElement(i.Provider,{value:{favs:c,setFavs:l,isModalOpen:m,setModalOpen:d}},e.children)},d=a(1),v=Object(n.createContext)(),f=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),i=o[0],m=o[1],f="https://itunes.apple.com/search?entity=movie&attribute=movieTerm&limit=10&term=".concat(c);return Object(n.useEffect)((function(){fetch(f).then((function(e){return e.json()})).then((function(e){m(Object(d.a)(e.results)),console.log(">> data fetched",e.results)})).catch((function(e){console.log(">> get error,",e.message)}))}),[f]),r.a.createElement(v.Provider,{value:{term:c,results:i,setTerm:l,setResults:m}},e.children)},h=a(15),b=a.n(h),E=function(){var e=Object(n.useContext)(v),t=e.setTerm,a=e.setResults,c=Object(n.useState)(""),l=Object(u.a)(c,2),s=l[0],o=l[1];return r.a.createElement("form",{className:"header__form col",onSubmit:function(e){e.preventDefault(),a([]),t(s)}},r.a.createElement("label",{className:"header__form-wrapper"},r.a.createElement(b.a,{className:"header__svg-search"}),r.a.createElement("input",{className:"header__input",type:"text",value:s,onChange:function(e){e.preventDefault(),o(e.target.value)},placeholder:"Search for movies"}),r.a.createElement("button",{className:"header__button",type:"submit"},"Search")))},_=a(17),p=a.n(_),g=a(9),O=a.n(g),j=function(e){var t=Object(n.useContext)(i),a=t.favs,c=t.setModalOpen;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__menu col"},r.a.createElement(p.a,{className:"header__svg-menu"})),r.a.createElement(E,null),r.a.createElement("div",{className:"header__favs col"},r.a.createElement("button",{className:"header__button-fav svg-wrapper",onClick:function(){return c(!0)}},r.a.createElement(O.a,{className:"header__svg-fav"}),a.length)))},N=function(e){var t=e.fav,a=e.movie,n=e.index,c=e.buttonFunction;return r.a.createElement("li",{className:"search__item","data-id":a.trackId},r.a.createElement("button",{className:"search__item-button svg-wrapper",onClick:c,"data-fav":t,"data-index":n,"data-id":a.trackId},r.a.createElement(O.a,{className:"search__item-button-fav"})),r.a.createElement("img",{className:"search__item-thumbnail",src:a.artworkUrl100,alt:a.trackCensoredName}),r.a.createElement("div",{className:"search__item-title"},a.trackName))},k=a(18),x=a.n(k),C=function(){var e=Object(n.useContext)(i),t=e.favs,a=e.setFavs,c=e.isModalOpen,l=e.setModalOpen,s=Object(n.useContext)(v),u=s.results,m=s.setResults,f=function(e,n){e.preventDefault();var r=e.target.dataset.id,c=t.filter((function(e){return e.trackId.toString()!==r}));a(Object(d.a)(c))};Object(n.useEffect)((function(){m(Object(d.a)(u))}),[]);var h=function(){l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{isOpen:c,onRequestClose:h,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.16)",zIndex:1e4},content:{backgroundColor:"#292929",border:"0",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",minHeight:"75%",minWidth:"75%",maxHeight:"75%",maxWidth:"75%",transform:"translate(-50%, -50%)",transition:"all 0.7s"}},shouldFocusAfterRender:!0,contentLabel:"Favorite Movies"},r.a.createElement("button",{className:"modal__button-close svg-wrapper",onClick:h},r.a.createElement(x.a,{className:"modal__button-svg"})),r.a.createElement("div",{className:"search__list favs"},r.a.createElement("h2",null,"Favorites:"),r.a.createElement("ul",null,t&&t.map((function(e){return r.a.createElement(N,{key:e.trackId,fav:!0,movie:e,buttonFunction:f})}))))),r.a.createElement("div",{id:"React_MODAL"}))},w=a(19),F=function(){var e=Object(n.useContext)(v).results,t=Object(n.useContext)(i),a=t.favs,c=t.setFavs,l=function(t){t.preventDefault();var n=t.target.dataset,r=n.fav,l=n.index,s=n.id;if("false"===r)c([].concat(Object(d.a)(a),[Object(w.a)({},e[l])])),t.target.dataset.fav=!0;else{var o=a.filter((function(e){return e.trackId.toString()!==s}));c(Object(d.a)(o)),t.target.dataset.fav=!1}};return r.a.createElement("div",{className:"search__list results"},e.length<0&&r.a.createElement("h2",null,"Welcome.  Please use the search tool above."),r.a.createElement("ul",null,e&&e.map((function(e,t){var n=!!a.find((function(t){return t.trackId===e.trackId}));return r.a.createElement(N,{key:e.trackId,fav:n,index:t,movie:e,buttonFunction:l})}))))};a(40);var I=function(){return r.a.createElement("div",{className:"search"},r.a.createElement(f,null,r.a.createElement(m,null,r.a.createElement(j,null),r.a.createElement("main",null,r.a.createElement(F,null),r.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),o.a.setAppElement("#".concat("React_MODAL")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.740b64e4.chunk.js.map