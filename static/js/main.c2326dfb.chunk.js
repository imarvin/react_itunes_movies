(this.webpackJsonpreact_itunes_movies=this.webpackJsonpreact_itunes_movies||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),u=(a(10),a(1)),o=Object(n.createContext)(),s=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(o.Provider,{value:{favs:c,setFavs:l}},e.children)},i=a(2),m=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),v=s[0],f=s[1],d="https://itunes.apple.com/search?entity=movie&attribute=movieTerm&limit=10&term=".concat(c);return Object(n.useEffect)((function(){fetch(d,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){f(Object(i.a)(e.results))})).catch((function(e){console.log(">> get error,",e.message)}))}),[d]),r.a.createElement(m.Provider,{value:{term:c,results:v,setTerm:l,setResults:f}},e.children)},f=function(){var e=Object(n.useContext)(m),t=e.setTerm,a=e.setResults,c=Object(n.useState)(""),l=Object(u.a)(c,2),o=l[0],s=l[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a([]),t(o)}},r.a.createElement("input",{type:"text",value:o,onChange:function(e){e.preventDefault(),s(e.target.value)},placeholder:"Search for movies"}),r.a.createElement("button",{className:"button",type:"submit"},"Search"))},d=function(e){return r.a.createElement("header",{className:"search__header"},r.a.createElement("h1",null,"iTunes Movie Search"),r.a.createElement("nav",null),r.a.createElement(f,null))},h=function(e){var t=e.fav,a=e.movie,n=e.index,c=e.buttonFunction;return r.a.createElement("li",{className:"search__item","data-id":a.trackId},a.trackName,t?r.a.createElement("button",{className:"button",onClick:function(e){return c(n)},"data-fav":!0},"UnFav"):r.a.createElement("button",{className:"button",onClick:function(e){return c(e,a)},"data-fav":!1},"Fav"))},b=function(){var e=Object(n.useContext)(o),t=e.favs,a=e.setFavs,c=function(e){var n=t;n.splice(e,1),a(Object(i.a)(n))};return r.a.createElement("div",{className:"search__list favs"},r.a.createElement("h2",null,"Favs:"),r.a.createElement("ul",null,t&&t.map((function(e){return r.a.createElement(h,{key:e.trackId,fav:!0,movie:e,buttonFunction:c})}))))},E=function(){var e=Object(n.useContext)(m).results,t=Object(n.useContext)(o),a=t.favs,c=t.setFavs,l=function(e,t){"false"===e.target.dataset.fav&&(c([].concat(Object(i.a)(a),[{trackId:t.trackId,trackName:t.trackName}])),e.target.dataset.fav=!0)};return r.a.createElement("div",{className:"search__list results"},r.a.createElement("h2",null,"Search results:"),r.a.createElement("ul",null,e&&e.map((function(e,t){var n=!!a.find((function(t){return t.trackId===e.trackId}));return r.a.createElement(h,{key:e.trackId,fav:n,index:t,movie:e,buttonFunction:l})}))))};a(11);var p=function(){return r.a.createElement("div",{className:"search"},r.a.createElement(v,null,r.a.createElement(d,null),r.a.createElement(s,null,r.a.createElement("main",null,r.a.createElement(E,null),r.a.createElement(b,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.c2326dfb.chunk.js.map