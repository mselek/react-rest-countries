(this.webpackJsonpcountry=this.webpackJsonpcountry||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(23),i=c.n(a),r=c(8),j=c(2),l=c(0),o=function(){return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)("img",{src:"./img/logo192.png",alt:"logo"}),Object(l.jsx)(r.b,{exact:!0,to:"/",activeClassName:"nav-active",children:"Accueil"}),Object(l.jsx)(r.b,{exact:!0,to:"/about",activeClassName:"nav-active",children:"\xc0 Propos"})]})},u=function(){return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)(o,{}),Object(l.jsx)("h1",{children:"\xc0 Propos"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Initiation \xe0 React. Site qui utilise une API pour afficher tout les pays du monde (250), ainsi que des informations sur chaques pays: nom du pays, capitale, population."}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Information sur l'",Object(l.jsx)("a",{href:"https://restcountries.com/",target:"_blank",rel:"noopener noreferrer",children:"API"})]})]})},b=c(6),d=c(26),O=c.n(d),h=function(e){var t,c=e.country;return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("img",{src:c.flags.png,title:c.name,alt:"flag"}),Object(l.jsx)("div",{className:"data-container",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"material-icons",children:"public"}),c.name]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"material-icons",children:"location_on"}),c.capital]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"material-icons",children:"people"}),(t=c.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))]})]})})]})},x=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(b.a)(a,2),r=i[0],j=i[1],o=Object(n.useState)(!0),u=Object(b.a)(o,2),d=u[0],x=u[1],p=Object(n.useState)(40),m=Object(b.a)(p,2),f=m[0],g=m[1],v=Object(n.useState)(""),N=Object(b.a)(v,2),y=N[0],S=N[1];return Object(n.useEffect)((function(){d&&(O.a.get("https://restcountries.com/v2/all?fields=name,population,region,capital,flags").then((function(e){return s(e.data)})),x(!1));!function(){var e=Object.keys(c).map((function(e){return c[e]})).sort((function(e,t){return t.population-e.population}));e.length=f,j(e)}()}),[c,f,d]),Object(l.jsxs)("div",{className:"countries",children:[Object(l.jsxs)("div",{className:"sort-container",children:[Object(l.jsxs)("label",{children:[f,"\xa0\xa0"]}),Object(l.jsx)("input",{type:"range",min:"1",max:"250",value:f,onChange:function(e){return g(e.target.value)}}),Object(l.jsx)("ul",{children:["Africa","America","Asia","Europe","Oceania"].map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",value:e,id:e,checked:e===y,onChange:function(e){return S(e.target.value)}}),Object(l.jsx)("label",{htmlFor:e,children:e})]},e)}))}),Object(l.jsx)("div",{className:"cancel",children:y&&Object(l.jsx)("h5",{onClick:function(){return S("")},children:"X"})})]}),Object(l.jsx)("ul",{className:"coutries-list",children:r.filter((function(e){return e.region.includes(y)})).map((function(e){return Object(l.jsx)(h,{country:e},e.name)}))})]})},p=function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(o,{}),Object(l.jsx)("h1",{children:"Liste des Pays"}),Object(l.jsx)(x,{})]})},m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)("h1",{children:"Erreur"}),Object(l.jsx)("p",{children:"404 : La page demand\xe9e n'existe pas !"})]})},f=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(j.a,{path:"/about",exact:!0,component:u}),Object(l.jsx)(j.a,{component:m})]})})};c(58);i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.a37ef243.chunk.js.map