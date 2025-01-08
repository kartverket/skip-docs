"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[6652],{38926:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"lagring/databaser","title":"Databaser","description":"Som bruker av SKIP har du et par alternativ n\xe5r det kommer til databaser. Det f\xf8rste alternativet er \xe5 bruke databaser som er administrert av DBA-ene p\xe5 Kartverket og lever p\xe5 lokal infrastruktur. Det er ogs\xe5 mulig \xe5 bruke databaser i sky i Google Cloud.","source":"@site/docs/11-lagring/01-databaser.md","sourceDirName":"11-lagring","slug":"/lagring/databaser","permalink":"/docs/lagring/databaser","draft":false,"unlisted":false,"editUrl":"https://github.com/kartverket/skip-docs/edit/main/docs/11-lagring/01-databaser.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcbe Lagring","permalink":"/docs/lagring/"},"next":{"title":"Objektlagring med Scality S3","permalink":"/docs/lagring/objektlagring-scality-s3"}}');var n=r(74848),s=r(28453);const i={},o="Databaser",l={},d=[{value:"Lokal Postgres",id:"lokal-postgres",level:2},{value:"Database i sky",id:"database-i-sky",level:2}];function c(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"databaser",children:"Databaser"})}),"\n",(0,n.jsx)(a.p,{children:"Som bruker av SKIP har du et par alternativ n\xe5r det kommer til databaser. Det f\xf8rste alternativet er \xe5 bruke databaser som er administrert av DBA-ene p\xe5 Kartverket og lever p\xe5 lokal infrastruktur. Det er ogs\xe5 mulig \xe5 bruke databaser i sky i Google Cloud."}),"\n",(0,n.jsx)(a.h2,{id:"lokal-postgres",children:"Lokal Postgres"}),"\n",(0,n.jsx)(a.p,{children:"Dersom man \xf8nsker en lokal postgres tar man kontakt med DBA-ene for \xe5 bestille opp en server. Da vil man f\xe5 en Postgres-database og en administratorbruker som man kan bruke til \xe5 opprette tabeller."}),"\n",(0,n.jsx)(a.p,{children:"For \xe5 bestille dette sender man ticket gjennom service desken med hvor mye lagring man trenger og circa hvor mye CPU-kraft man trenger."}),"\n",(0,n.jsx)(a.p,{children:"N\xe5r man har f\xe5tt en database s\xe5 er det to ting man m\xe5 gj\xf8re f\xf8r man kan ta den i bruk fra en applikasjon p\xe5 SKIP:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Bestill brannmurs\xe5pning for databasen ved \xe5 opprette en sak i ServiceNow. F.eks.\nJeg \xf8nsker \xe5 bestille en brannmurs\xe5pning for en database som skal aksesseres fra SKIP. Det er clusteret \u201catkv1-dev\u201d som trenger \xe5 n\xe5 \u201cXXXX.statkart.no\u201d p\xe5 TCP port XXXX."}),"\n",(0,n.jsx)(a.li,{children:"Sett opp tilgang til databasen i Kubernetes. I Skiperator gj\xf8res dette ved hjelp av external accessPolicies. Her m\xe5 applikasjonen definere at den skal kunne snakke med den eksterne serveren som databasen lever p\xe5."}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:'accessPolicy:\n  outbound:\n    external:\n    - host: XXXX.statkart.no\n      ip: "XXX.XXX.XXX.XXX"\n      ports:\n        name: db\n        port: 5432\n        protocol: TCP\n'})}),"\n",(0,n.jsx)(a.h2,{id:"database-i-sky",children:"Database i sky"}),"\n",(0,n.jsx)(a.p,{children:"Det er mulig \xe5 bruke database i GCP, men her gjenst\xe5r det noe utforsking f\xf8r vi har en god l\xf8ype for produktteamene. Ta kontakt med SKIP s\xe5 tar vi en dialog rundt database i sky."})]})}function k(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>o});var t=r(96540);const n={},s=t.createContext(n);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);