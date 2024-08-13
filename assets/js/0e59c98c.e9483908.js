"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[7455],{65349:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(85893),r=t(11151);const s={},o="ArgoCD Notifications",a={id:"argo-cd/argocd-notifications",title:"ArgoCD Notifications",description:"ArgoCD har st\xf8tte for \xe5 sende notifikasjoner basert p\xe5 forh\xe5ndsdefinerte triggers gjennom en rekke kanaler, deriblant Slack og Github. Eksempelvis kan dette v\xe6re triggers basert p\xe5 at synkroniseringen av en applikasjon feilet, eller at en applikasjon har blitt liggende i OutOfSync over et visst tidsrom.",source:"@site/docs/09-argo-cd/06-argocd-notifications.md",sourceDirName:"09-argo-cd",slug:"/argo-cd/argocd-notifications",permalink:"/docs/argo-cd/argocd-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/09-argo-cd/06-argocd-notifications.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Provisjonere infrastruktur med Crossplane",permalink:"/docs/argo-cd/provisjonere-infrastruktur-med-crossplane"},next:{title:"Configuring apps repositories with config.json",permalink:"/docs/argo-cd/configuring-apps-repositories-with-configjson"}},d={},c=[{value:"Slack",id:"slack",level:3},{value:"Github",id:"github",level:3},{value:"Standardnotifikasjoner",id:"standardnotifikasjoner",level:3},{value:"Ekstra triggers",id:"ekstra-triggers",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"argocd-notifications",children:"ArgoCD Notifications"}),"\n",(0,n.jsx)(i.p,{children:"ArgoCD har st\xf8tte for \xe5 sende notifikasjoner basert p\xe5 forh\xe5ndsdefinerte triggers gjennom en rekke kanaler, deriblant Slack og Github. Eksempelvis kan dette v\xe6re triggers basert p\xe5 at synkroniseringen av en applikasjon feilet, eller at en applikasjon har blitt liggende i OutOfSync over et visst tidsrom."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://argocd-notifications.readthedocs.io/en/stable/",children:"ArgoCD Notifications er dokumentert her"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"V\xe5r ArgoCD installasjon kommer med en rekke triggers og templates for utseende forh\xe5ndsinstallert."}),"\n",(0,n.jsxs)(i.p,{children:["Se ",(0,n.jsx)(i.a,{href:"https://github.com/kartverket/skip-apps/blob/main/bases/argocd/patches/argocd-notifications-templates.yml",children:"https://github.com/kartverket/skip-apps/blob/main/bases/argocd/patches/argocd-notifications-templates.yml"})," for hvilke triggers som er tilgjengelig."]}),"\n",(0,n.jsx)(i.h3,{id:"slack",children:"Slack"}),"\n",(0,n.jsx)(i.p,{children:"For Slack er det satt opp en notifikasjonskanal for hvert team p\xe5 m\xf8nster <teamnavn>-argocd-alerts, f.eks. #nrl-argocd-alerts. Disse kanalene er videre satt opp med integration mot Slack-appen \u201cArgoCD Notifications\u201d som tar imot meldinger fra ArgoCD og dytter de inn i korrekt kanal."}),"\n",(0,n.jsx)(i.p,{children:"(NB: Hvis du ikke finner en slik kanal for teamet ditt, kontakt en administrator for Kartverkets Slack og be om \xe5 f\xe5 opprettet en kanal med korrekt navnem\xf8nster og integrasjon mot \u201cArgoCD Notifications\u201d)."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Fig 1. Eksempel p\xe5 Slack-notifikasjon",src:t(4288).Z+"",width:"589",height:"213"})}),"\n",(0,n.jsx)(i.h3,{id:"github",children:"Github"}),"\n",(0,n.jsx)(i.p,{children:"For Github er det satt opp en app kalt \u201cKV ArgoCD Notifications\u201d som har mulighet til \xe5 skrive til Github workflow statuser til de forskjellige apps-repoene. Kontakt en av Kartverkets Github-administratorer dersom flere apps-repoer skal legges til her."}),"\n",(0,n.jsxs)(i.p,{children:["Eksempler p\xe5 notifikasjoner:\n",(0,n.jsx)(i.img,{alt:"Fig. 2 Et lite gr\xf8nt \u201ccheckmark\u201d indikerer at utrulling til ArgoCD har g\xe5tt bra",src:t(80177).Z+"",width:"911",height:"122"}),"\n",(0,n.jsx)(i.img,{alt:"Fig.3 \u2026 og klikker man p\xe5 det f\xe5r man opp en liten detaljvisning med linker til ArgoCD",src:t(47635).Z+"",width:"911",height:"214"})]}),"\n",(0,n.jsx)(i.h3,{id:"standardnotifikasjoner",children:"Standardnotifikasjoner"}),"\n",(0,n.jsx)(i.p,{children:"F\xf8lgende triggers er lagt til som standard for alle apps-repoer:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:(0,n.jsx)(i.strong,{children:"Trigger"})}),(0,n.jsx)(i.th,{children:(0,n.jsx)(i.strong,{children:"Kommunikasjonskanal"})}),(0,n.jsx)(i.th,{children:(0,n.jsx)(i.strong,{children:"N\xe5r trigges denne?"})})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-sync-failed.slack"})}),(0,n.jsx)(i.td,{children:"Slack"}),(0,n.jsx)(i.td,{children:"Synkronisering av applikasjon feilet"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-sync-failed.github"})}),(0,n.jsx)(i.td,{children:"Github"}),(0,n.jsx)(i.td,{children:"Synkronisering av applikasjon feilet"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-sync-succeeded.github"})}),(0,n.jsx)(i.td,{children:"Github"}),(0,n.jsx)(i.td,{children:"Synkronisering av applikasjon gikk bra"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-sync-running.github"})}),(0,n.jsx)(i.td,{children:"Github"}),(0,n.jsx)(i.td,{children:"Synkronisering av applikasjon kj\xf8rer"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-health-degraded.github"})}),(0,n.jsx)(i.td,{children:"Github"}),(0,n.jsx)(i.td,{children:"Helsesjekk av applikasjonen returnerer et \u201cdegraded\u201d-resultat"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-sync-status-unknown.github"})}),(0,n.jsx)(i.td,{children:"Github"}),(0,n.jsx)(i.td,{children:"Ukjent synkroniseringsstatus"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-deployed.github"})}),(0,n.jsx)(i.td,{children:"Github"}),(0,n.jsx)(i.td,{children:"Ny versjon av applikasjonen deployet til milj\xf8"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-outofsync-one-day.slack"})}),(0,n.jsx)(i.td,{children:"Slack"}),(0,n.jsx)(i.td,{children:"Applikasjonen har status OutOfSync i minst en dag (det har blitt sjekket inn endringer i apps-repoet som ikke har blitt deployet)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"notifications.argoproj.io/subscribe.on-outofsync-one-week.slack"})}),(0,n.jsx)(i.td,{children:"Slack"}),(0,n.jsx)(i.td,{children:"Applikasjonen har status OutOfSync i minst en uke (det har blitt sjekket inn endringer i apps-repoet som ikke har blitt deployet)"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"ekstra-triggers",children:"Ekstra triggers"}),"\n",(0,n.jsxs)(i.p,{children:["I tillegg er det mulig \xe5 spesifisere andre triggers (s\xe5 lenge disse er lagt inn i ArgoCD) per team i objektet triggerSubscriptions i ",(0,n.jsx)(i.a,{href:"https://github.com/kartverket/skip-apps/blob/main/lib/argocd/argocd.libsonnet",children:"https://github.com/kartverket/skip-apps/blob/main/lib/argocd/argocd.libsonnet"})," ."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Husk \xe5 spesifisere om det er slack eller github notifikasjon man \xf8nsker ved \xe5 legge til suffikset .slack eller .github p\xe5 slutten av trigger, og husk \xe5 spesifisere kanalnavn ved bruk av slack notifikasjon"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"{\n    name: 'teamnavn',\n    oidcGroup: 'aabbbcc-123-321-ccbbbaa',\n    allowlistedPrefixes: [{ name: 'teamnavn' }],\n    triggerSubscriptions: {\n      'notifications.argoproj.io/subscribe.on-sync-succeeded.slack': 'navn-paa-slack-kanal',\n      'notifications.argoproj.io/subscribe.eksempel-trigger.github': '', # denne er blank siden det ikke er en kanal \xe5 sende til p\xe5 github\n    }\n},\n"})})]})}function g(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},80177:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/594280578-739de65c1bcf3e3154e15cc64b79ec51.png"},47635:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/594542693-719e56c5ea8f3ec9b11ec258a443f677.png"},4288:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/595165215-2edab52f6cec9ca119644ca105c9f398.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>o});var n=t(67294);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);