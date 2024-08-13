"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[9726],{51587:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(85893),s=r(11151);const i={},o="Sjekkliste f\xf8r internett-eksponering",a={id:"generelt/sjekkliste-f\xf8r-internett-eksponering",title:"Sjekkliste f\xf8r internett-eksponering",description:"Denne siden er under utarbeidelse og er et samarbeid mellom utvikling og sikkerhet",source:"@site/docs/04-generelt/03-sjekkliste-f\xf8r-internett-eksponering.md",sourceDirName:"04-generelt",slug:"/generelt/sjekkliste-f\xf8r-internett-eksponering",permalink:"/docs/generelt/sjekkliste-f\xf8r-internett-eksponering",draft:!1,unlisted:!1,editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/04-generelt/03-sjekkliste-f\xf8r-internett-eksponering.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onboarding new product teams onto SKIP",permalink:"/docs/generelt/onboarding-new-teams"},next:{title:"Vedlikehold av applikasjoner",permalink:"/docs/generelt/maintenance-of-apps"}},l={},d=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sjekkliste-f\xf8r-internett-eksponering",children:"Sjekkliste f\xf8r internett-eksponering"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Denne siden er under utarbeidelse og er et samarbeid mellom utvikling og sikkerhet"})}),"\n",(0,t.jsx)(n.p,{children:"For \xe5 eksponere en applikasjon som kj\xf8rer p\xe5 SKIP mot internett m\xe5 man:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Opprette en DNS-record som ikke er under statkart.no-domenet, f.eks. ",(0,t.jsx)(n.code,{children:"applikasjonX.kartverket.no"})," . Det gj\xf8res ved \xe5 opprette en ticket i ",(0,t.jsx)(n.a,{href:"https://kartverket.pureservice.com/",children:"PureService"})," og be om at dette domenet skal peke mot SKIP-lastbalansereren (lb01.kartverket.no)"]}),"\n",(0,t.jsxs)(n.li,{children:["Legge til det nye domenenavnet under ",(0,t.jsx)(n.code,{children:"ingresses"})," i ",(0,t.jsx)(n.a,{href:"https://github.com/kartverket/skiperator?tab=readme-ov-file#application-reference",children:"Skiperator-manifestet"})," eller ",(0,t.jsx)(n.code,{children:"hostname"})," for ",(0,t.jsx)(n.a,{href:"https://github.com/kartverket/skiperator?tab=readme-ov-file#routing-reference",children:"Routing-manifestet"})," , slik at applikasjonen registrerer seg mot ekstern ingress gateway"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"F\xf8r dette kan gj\xf8res m\xe5 man g\xe5 igjennom denne sjekklisten:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Gj\xf8r dere kjent med ",(0,t.jsx)(n.a,{href:"https://kartverket.atlassian.net/wiki/spaces/SIK/pages/599130113/Overordnede+f+ringer",children:"Overordnede f\xf8ringer"})," og spesielt ",(0,t.jsx)(n.a,{href:"https://kartverket.atlassian.net/wiki/spaces/SIK/pages/770113537/Ansvarsfordeling",children:"Ansvarsfordeling"})," fra Sikkerhetsh\xe5ndboka"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Opprett metadata om applikasjonen i henhold til ",(0,t.jsx)(n.a,{href:"https://kartverket.atlassian.net/wiki/spaces/SIK/pages/732397586/Sikkerhet+i+repoet",children:"Sikkerhet i repoet"})," . Dette gj\xf8r at applikasjonen blir knyttet opp i Utviklerportalen (fortsatt under arbeid)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Foranalyse m\xe5 v\xe6re gjennomf\xf8rt(Kommer l\xf8ype for det i ServiceNow)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Det er gjort IP (Innledende Personvernsvurdering) og eventuelt DPIA. Lag en kopi av malen p\xe5 ",(0,t.jsx)(n.a,{href:"https://kartverket.atlassian.net/wiki/spaces/PER/pages/436338719/IP+DPIA+og+ROS-analyse+for+det+som+vurderes+.+IKKE+SKRIV+INN+I+MALEN+men+kopier+sidene.",children:"IP, DPIA og ROS-analyse for [det som vurderes]. IKKE SKRIV INN I MALEN, men kopier sidene."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ROS-analyse gjennomf\xf8rt og godkjent av risikoeier/systemeier"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Codeowners definert i koderepo ",(0,t.jsx)(n.a,{href:"https://kartverket.atlassian.net/wiki/spaces/SIK/pages/561348667/CODEOWNERS",children:"CODEOWNERS"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gjennomf\xf8rt initiell penetrasjonstesting (hvem og hvordan?) eller manuell avsjekk med SKIP rundt konfigurasjon"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["F\xf8lgende headere blir sendt p\xe5 alle kall: ",(0,t.jsx)(n.a,{href:"https://scotthelme.co.uk/hsts-the-missing-link-in-tls/",children:"HTTP Strict Transport Security"})," , ",(0,t.jsx)(n.a,{href:"https://scotthelme.co.uk/content-security-policy-an-introduction/",children:"Content Security Policy"})," , ",(0,t.jsx)(n.a,{href:"https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options",children:"X-Frame-Options"})," , ",(0,t.jsx)(n.a,{href:"https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options",children:"X-Content-Type-Options"})," , ",(0,t.jsx)(n.a,{href:"https://scotthelme.co.uk/a-new-security-header-referrer-policy/",children:"Referrer Policy"})," , ",(0,t.jsx)(n.a,{href:"https://scotthelme.co.uk/goodbye-feature-policy-and-hello-permissions-policy/",children:"Permissions Policy"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["N\xe5r appen er eksponert er sikkerhetsheaders testet med ",(0,t.jsx)(n.a,{href:"https://securityheaders.com/",children:"https://securityheaders.com"})," og ",(0,t.jsx)(n.a,{href:"https://observatory.mozilla.org/",children:"https://observatory.mozilla.org"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Monitorering og varsling er satt opp i Grafana, og vaktlaget er onboardet disse alarmene"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/observability/metrics-with-Grafana",children:"Metrics with Grafana"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/observability/logs-with-Loki",children:"Logs with Loki"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/observability/alerting-with-grafana",children:"Alerting with Grafana"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Denne sjekklisten gjelder eksponering av tjenster som skal v\xe6re tilgjengelig p\xe5 internett, uavhengig av milj\xf8 (dev/test/prod). Hvis man har planer om \xe5 eksponere en applikasjon idevellertestm\xe5 man i tillegg kontakte SKIP for \xe5 sikre at alle sikkerhetskrav overholdes."}),"\n",(0,t.jsx)(n.p,{children:"Navnekonvensjon for eksternt tilgjengelig domenenavn vil i s\xe5 fall v\xe6re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"<applikasjonX>.dev.kartverket.no"}),"\n",(0,t.jsx)(n.li,{children:"<applikasjonX>.test.kartverket.no"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);