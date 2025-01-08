"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[8365],{60613:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"gcp/oppsett-og-bruk-av-secret-manager","title":"Oppsett og bruk av Google Secret Manager","description":"Google Secret Manager (GSM) er et system for \xe5 sikkert lagre n\xf8kler, passord, sertfikater og andre sensitive data i GCP. GSM er det foretrukne stedet \xe5 lagre hemmeligheter p\xe5 SKIP og Vault vil p\xe5 sikt fases ut til fordel for dette.","source":"@site/docs/05-gcp/03-oppsett-og-bruk-av-secret-manager.md","sourceDirName":"05-gcp","slug":"/gcp/oppsett-og-bruk-av-secret-manager","permalink":"/docs/gcp/oppsett-og-bruk-av-secret-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/kartverket/skip-docs/edit/main/docs/05-gcp/03-oppsett-og-bruk-av-secret-manager.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Dynamisk tilgangskontroll (JIT)","permalink":"/docs/gcp/jit"},"next":{"title":"\u2699\ufe0f Kubernetes","permalink":"/docs/kubernetes/"}}');var s=t(74848),i=t(28453);const a={},l="Oppsett og bruk av Google Secret Manager",o={},g=[{value:"Hvordan komme i gang?",id:"hvordan-komme-i-gang",level:2},{value:"Hvordan opprette Secret",id:"hvordan-opprette-secret",level:3},{value:"Tilgangsstyring",id:"tilgangsstyring",level:3}];function d(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"oppsett-og-bruk-av-google-secret-manager",children:"Oppsett og bruk av Google Secret Manager"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(67993).A+"",width:"1688",height:"818"})}),"\n",(0,s.jsx)(r.p,{children:"Google Secret Manager (GSM) er et system for \xe5 sikkert lagre n\xf8kler, passord, sertfikater og andre sensitive data i GCP. GSM er det foretrukne stedet \xe5 lagre hemmeligheter p\xe5 SKIP og Vault vil p\xe5 sikt fases ut til fordel for dette."}),"\n",(0,s.jsx)(r.p,{children:"Det er mange fordeler med GSM:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Tilgangsstyring er enkelt satt opp ved hjelp av GCP IAM"}),"\n",(0,s.jsx)(r.li,{children:"All aksessering av hemmelighetene blir logget og kan etterg\xe5s"}),"\n",(0,s.jsx)(r.li,{children:"Hemmelighetene blir kryptert i transit og at rest"}),"\n",(0,s.jsx)(r.li,{children:"Veldig stabilt og fullt driftet av GCP"}),"\n",(0,s.jsx)(r.li,{children:"Praktisk talt gratis"}),"\n",(0,s.jsxs)(r.li,{children:["Kan administreres med ",(0,s.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/secret_manager_secret",children:"Terraform"})]}),"\n",(0,s.jsxs)(r.li,{children:["Man kan bruke GitHub cloud runners som f\xf8rer til raskere bygg med mer ",(0,s.jsx)(r.a,{href:"https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md",children:"pre-installed sofware"})]}),"\n",(0,s.jsxs)(r.li,{children:["Tilgjengelig fra Kubernetes via ",(0,s.jsx)(r.a,{href:"../argo-cd/hente_hemmeligheter_fra_hemmelighetshvelv",children:"Hente hemmeligheter fra hemmelighetshvelv"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"hvordan-komme-i-gang",children:"Hvordan komme i gang?"}),"\n",(0,s.jsx)(r.p,{children:"GSM fungerer ganske likt Vault. Vault har noe mer funksjonalitet for avansert bruk, men vi bruker for det meste som et KV secret store. For \xe5 bruke GSM m\xe5 det opprettes en secret, og denne secreten m\xe5 tilgangsstyres."}),"\n",(0,s.jsx)(r.h3,{id:"hvordan-opprette-secret",children:"Hvordan opprette Secret"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(37129).A+"",width:"752",height:"620"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Velg ",(0,s.jsx)(r.strong,{children:"Security"})," under navigasjonsmenyen (de tre strekene ved Google Cloud i h\xf8yre hj\xf8rne)."]}),"\n",(0,s.jsxs)(r.li,{children:["Velg ",(0,s.jsx)(r.strong,{children:"Secret Manager"})," i venstre kolonne."]}),"\n",(0,s.jsx)(r.li,{children:"Hvis API\u2019et ikke er skrudd p\xe5, skru p\xe5 API\u2019et ved \xe5 trykke \u201cEnable\u201d"}),"\n",(0,s.jsxs)(r.li,{children:["Trykk p\xe5 ",(0,s.jsx)(r.strong,{children:"+"})," ",(0,s.jsx)(r.strong,{children:"CREATE SECRET"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(90543).A+"",width:"574",height:"871"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Name"}),", og ",(0,s.jsx)(r.strong,{children:"Value"})," kan tenkes p\xe5 som et Key/Value par. Resten av valgene trenger man ikke gj\xf8re noe med med mindre man har spesielle behov. Noen felter man kan merke seg er:"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Replication Policy:"})," Dette er hvor hemmeligheten lagres. Det kan v\xe6re en fordel \xe5 lagre hemmeligheter i flere datacenter for redundans, vi har vanligvis holdt oss i europe-north1."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Encryption:"})," Om det er spesielle behov for \xe5 administrere krypteringsn\xf8kkel selv er det ogs\xe5 en mulighet. Dette m\xe5 produktteamene ta ansvar for selv. SKIP teamet administrerer ikke krypteringsn\xf8kler."]}),"\n",(0,s.jsx)(r.h3,{id:"tilgangsstyring",children:"Tilgangsstyring"}),"\n",(0,s.jsxs)(r.p,{children:["N\xe5r en secret er opprettet, kan man klikke seg inn p\xe5 den, og velge ",(0,s.jsx)(r.strong,{children:"PERMISSIONS"})," fanen. Man f\xe5r da opp hvem som har tilgang til denne secreten, og hvilke rettigheter de har."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(80252).A+"",width:"1240",height:"633"})}),"\n",(0,s.jsxs)(r.p,{children:["I de fleste tilfeller vil man bruke External Secret til \xe5 hente ut disse hemmelighetene. Det kan gj\xf8res ved \xe5 opprette ExternalSecrets-ressurser i Kubernetes som henter ned hemmeligheten til en Kubernetes Secret. Det st\xe5r mer om dette inkludert tilgangsstyring p\xe5 ",(0,s.jsx)(r.a,{href:"/docs/argo-cd/hente-hemmeligheter-fra-hemmelighetsvelv",children:"Hente hemmeligheter fra hemmelighetshvelv"})," ."]})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},67993:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/433946691-f960275c0fad274a75f770428c7f5e3d.png"},90543:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/434274364-863044336e87775dcb5ad6231ffe8baf.png"},37129:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/435191811-5d8fbdb0c0d4130273eb92a58212fc8e.png"},80252:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/435257350-36661e21664bd8c49b8c6a5039c1db4b.png"},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);