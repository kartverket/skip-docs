"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[4235],{45671:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(85893),s=t(11151);const i={},a="URLer og sertifikat for tjenester p\xe5 SKIP",l={id:"kubernetes/urler-og-sertifikat-for-tjenester-p\xe5-skip",title:"URLer og sertifikat for tjenester p\xe5 SKIP",description:"For \xe5 bruke sertifikat p\xe5 tjenester man skal eksponere utenfor kubernetes-clusteret anbefaler vi \xe5 bruke Skiperator. Skiperator h\xe5ndterer utstedelse og fornying av sertfikater ved hjelp av cert-manager. Vi har valgt \xe5 bruke cert-manager og ACME for sertifikater i SKIP. Implementasjonen v\xe5r bruker ACME protokollen og http-01 challenge for \xe5 bevise at vi er eier av domenet vi skal utstede cert til. Vi utsteder sertifikater automatisk i b\xe5de dev og prod med Let\u2019s encrypt.",source:"@site/docs/06-kubernetes/07-urler-og-sertifikat-for-tjenester-p\xe5-skip.md",sourceDirName:"06-kubernetes",slug:"/kubernetes/urler-og-sertifikat-for-tjenester-p\xe5-skip",permalink:"/docs/kubernetes/urler-og-sertifikat-for-tjenester-p\xe5-skip",draft:!1,unlisted:!1,editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/06-kubernetes/07-urler-og-sertifikat-for-tjenester-p\xe5-skip.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Helsesjekker i Kubernetes",permalink:"/docs/kubernetes/helsesjekker-i-kubernetes"},next:{title:"Certificates outside ACME",permalink:"/docs/kubernetes/certificates-outside-acme"}},o={},d=[{value:"Interne tjenester",id:"interne-tjenester",level:2},{value:"kartverket-intern.cloud",id:"kartverket-interncloud",level:3},{value:"Vanity URL-er",id:"vanity-url-er",level:3},{value:"Cluster-intern",id:"cluster-intern",level:3},{value:"Mesh-intern",id:"mesh-intern",level:3},{value:"Tjenester eksponert p\xe5 internett",id:"tjenester-eksponert-p\xe5-internett",level:2},{value:"kartverket.cloud",id:"kartverketcloud",level:3},{value:"Vanity URL-er",id:"vanity-url-er-1",level:3},{value:"HTTPS by default",id:"https-by-default",level:2}];function k(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"urler-og-sertifikat-for-tjenester-p\xe5-skip",children:"URLer og sertifikat for tjenester p\xe5 SKIP"}),"\n",(0,n.jsxs)(r.p,{children:["For \xe5 bruke sertifikat p\xe5 tjenester man skal eksponere utenfor kubernetes-clusteret anbefaler vi \xe5 bruke Skiperator. Skiperator h\xe5ndterer utstedelse og fornying av sertfikater ved hjelp av ",(0,n.jsx)(r.a,{href:"https://cert-manager.io/",children:"cert-manager."})," ",(0,n.jsx)(r.a,{href:"/docs/kubernetes/bruk-av-acme-og-certmanager",children:"Vi har valgt \xe5 bruke cert-manager og ACME for sertifikater i SKIP."})," Implementasjonen v\xe5r bruker ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment",children:"ACME protokollen"})," og ",(0,n.jsx)(r.a,{href:"https://letsencrypt.org/docs/challenge-types/#http-01-challenge",children:"http-01 challenge"})," for \xe5 bevise at vi er eier av domenet vi skal utstede cert til. Vi utsteder sertifikater automatisk i b\xe5de dev og prod med ",(0,n.jsx)(r.a,{href:"https://letsencrypt.org/",children:"Let\u2019s encrypt"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment",children:(0,n.jsx)(r.img,{alt:"ACME",src:t(43550).Z+"",width:"640",height:"240"})})}),"\n",(0,n.jsx)(r.p,{children:"Under kommer vi til \xe5 skille p\xe5 internt- og eksternt eksponerte tjenester i f\xf8lgende kategorier:"}),"\n",(0,n.jsx)(r.h2,{id:"interne-tjenester",children:"Interne tjenester"}),"\n",(0,n.jsx)(r.h3,{id:"kartverket-interncloud",children:"kartverket-intern.cloud"}),"\n",(0,n.jsx)(r.p,{children:"Dersom du har en tjeneste som kun skal v\xe6re tilgjengelig for folk p\xe5 kartverkets nettverk og VPN og ikke p\xe5 internett for allmennheten har man flere forskjellige alternativer. Avhengig av bruksomr\xe5de og hva slags URL man \xf8nsker seg fungerer dette litt forskjellig, og beskrives i paragrafene under."}),"\n",(0,n.jsx)(r.p,{children:"For tjenester som skal n\xe5s p\xe5 et domene under kartverket-intern.cloud h\xe5ndteres alt automatisk, inkludert utstedelse og fornying av sertfikater. Det ligger et wildcard record i DNS som h\xe5ndterer innkommende trafikk, og bruker cluster-leddet i URL-en p\xe5 Load Balanceren til \xe5 rute denne inn til riktig cluster. Deretter rutes denne til applikasjonen din basert p\xe5 URL-konfigurasjonen din i Skiperator."}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Eksempel: minapp.atkv3-prod.kartverket-intern.cloud"})}),"\n",(0,n.jsx)(r.h3,{id:"vanity-url-er",children:"Vanity URL-er"}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["Akkurat n\xe5 st\xf8ttes kun kartverket-intern.cloud URL-er pga. en begrensning i utstedelse av sertfikater ( ",(0,n.jsx)(r.a,{href:"https://kartverket.atlassian.net/browse/SKIP-1459",children:"SKIP-1459"})," ) og en begrensning i lastbalanserer p\xe5 atkv3-dev cluster ( ",(0,n.jsx)(r.a,{href:"https://kartverket.atlassian.net/browse/SKIP-1458",children:"SKIP-1458"})," ). Dette skal utbedres."]})}),"\n",(0,n.jsxs)(r.p,{children:["Dersom du \xf8nsker et annet hostname enn ",(0,n.jsx)(r.code,{children:"app.<cluster>.kartverket-intern.cloud"})," er dette mulig, men krever noe mer setup. Den nye URL-en m\xe5 registreres i DNS og skiperator-applikasjonen din m\xe5 settes opp til \xe5 lytte p\xe5 denne. Utstedelse og fornying av sertfikater vil fremdeles h\xe5ndteres automatisk av Skiperator."]}),"\n",(0,n.jsxs)(r.p,{children:["For \xe5 sette opp DNS m\xe5 du gj\xf8re f\xf8lgende: F\xf8rst bestem hvilke URL du vil ha, deretter sett opp et CNAME for denne URL-en til ",(0,n.jsx)(r.code,{children:"<cluster>.kartverket-intern.cloud"})," . Dersom du \xf8nsker et CNAME som ligger under kartverket-intern.cloud (for eksempel minapp.kartverket-intern.cloud) kan dette gj\xf8res av SKIP, for alle andre domener ta kontakt med eier av domenet via bestilling i pureservice. N\xe5r dette er gjort vil alle sp\xf8rringer som g\xe5r mot URL-en du har bestemt ende opp host lastbalansereren foran clusteret, og sendes videre inn til Kubernetes."]}),"\n",(0,n.jsxs)(r.p,{children:["Neste steg er at Kubernetes sender sp\xf8rringen videre til din applikasjon. Da m\xe5 du registere URL-en i Skiperator som vanlig under ",(0,n.jsx)(r.code,{children:"ingresses"})," ."]}),"\n",(0,n.jsx)(r.h3,{id:"cluster-intern",children:"Cluster-intern"}),"\n",(0,n.jsx)(r.p,{children:"Alle applikasjoner som kj\xf8rer p\xe5 SKIP har en kubernetes Service tilknyttet seg. Med denne servicen kan man sende sp\xf8rringer direkte til applikasjonen uten \xe5 sende trafikken ut av clusteret."}),"\n",(0,n.jsx)(r.p,{children:"Merk at man her bruker http og ikke https. Trafikken vil allikevel krypteres av service meshet s\xe5 trafikken vil g\xe5 over https mellom tjenestene, men fra ditt perspektiv skal du bruke http og trenger ikke tenke p\xe5 sertfikater."}),"\n",(0,n.jsx)(r.p,{children:"For \xe5 sende en sp\xf8rring p\xe5 denne m\xe5ten bruker du en URL i f\xf8lgende format:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"http://<appnavn>.<namespacenavn>:port\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Merk at \xe5 snakke med en annen tjeneste p\xe5 denne m\xe5ten krever at du har \xe5pnet opp for at trafikk kan flyte mellom disse tjenestene. I utgangspunktet blir all trafikk blokkert av sikkerhetshensyn. \xc5 \xe5pne opp gj\xf8res ved \xe5 spesifisere ",(0,n.jsx)(r.code,{children:"spec.accessPolicy.outbound.rules"})," i applikasjonen som skal sende sp\xf8rringen og ",(0,n.jsx)(r.code,{children:"spec.accessPolicy.inbound.rules"})," i applikasjonen som skal motta sp\xf8rringene."]}),"\n",(0,n.jsx)(r.p,{children:"Dersom du har samme tjeneste i sky og \xf8nsker \xe5 presisere at du skal g\xe5 mot samme cluster m\xe5 man legge p\xe5 dette i URL. Hvis ikke blir den \u201cround robined\u201d mellom remote og lokal. Eksempel:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"http://<appnavn>.<namespacenavn>.svc.cluster.local:port\n"})}),"\n",(0,n.jsx)(r.h3,{id:"mesh-intern",children:"Mesh-intern"}),"\n",(0,n.jsx)(r.p,{children:"Dersom du har behov for \xe5 sende en sp\xf8rring til en annen applikasjon som ikke ligger p\xe5 samme cluster, men er en del av samme service mesh (for eksempel fra atkv3-prod til atgcp1-prod) s\xe5 kan dette rutes p\xe5 nesten samme m\xe5te som cluster-intern trafikk."}),"\n",(0,n.jsx)(r.p,{children:"Merk at man her bruker http og ikke https. Trafikken vil allikevel krypteres av service meshet s\xe5 trafikken vil g\xe5 over https mellom tjenestene, men fra ditt perspektiv skal du bruke http og trenger ikke tenke p\xe5 sertfikater."}),"\n",(0,n.jsx)(r.p,{children:"For \xe5 sende trafikk til et annet cluster over service meshet sender du en sp\xf8rring i f\xf8lgende format:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"http://<appnavn>.<namespacenavn>.svc.cluster.<cluster>:port\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"TODO: Hvordan blir networkpolicies for Skiperator apper p\xe5 mesh?"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"tjenester-eksponert-p\xe5-internett",children:"Tjenester eksponert p\xe5 internett"}),"\n",(0,n.jsx)(r.p,{children:"Det er to alternativer for \xe5 eksponere ting p\xe5 internett. Bruk kartverket.cloud eller en penere \u201cvanity URL\u201d."}),"\n",(0,n.jsx)(r.p,{children:"Merk at skiperator-tjenester som eksponeres p\xe5 andre domenenavn enn subdomener av kartverket-intern.cloud vil automatisk bli \xe5pnet for trafikk fra internett, men vil ikke v\xe6re tilgjengelig f\xf8r DNS konfigureres."}),"\n",(0,n.jsx)(r.h3,{id:"kartverketcloud",children:"kartverket.cloud"}),"\n",(0,n.jsx)(r.p,{children:"For tjenester som skal n\xe5s p\xe5 et domene under kartverket.cloud h\xe5ndteres alt automatisk, inkludert utstedelse og fornying av sertfikater. Det ligger et wildcard record i DNS som h\xe5ndterer innkommende trafikk, og bruker cluster-leddet i URL-en p\xe5 Load Balanceren til \xe5 rute denne inn til riktig cluster. Deretter rutes denne til applikasjonen din basert p\xe5 URL-konfigurasjonen din i Skiperator."}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Eksempel: minapp.atkv3-prod.kartverket.cloud"})}),"\n",(0,n.jsx)(r.h3,{id:"vanity-url-er-1",children:"Vanity URL-er"}),"\n",(0,n.jsxs)(r.p,{children:["Dersom du \xf8nsker et annet hostname enn ",(0,n.jsx)(r.code,{children:"app.<cluster>.kartverket.cloud"})," er dette mulig, men krever noe mer setup. Den nye URL-en m\xe5 registreres i DNS og skiperator-applikasjonen din m\xe5 settes opp til \xe5 lytte p\xe5 denne. Utstedelse og fornying av sertfikater vil fremdeles h\xe5ndteres automatisk av Skiperator."]}),"\n",(0,n.jsxs)(r.p,{children:["For \xe5 sette opp DNS m\xe5 du gj\xf8re f\xf8lgende: F\xf8rst bestem hvilke URL du vil ha, deretter sett opp et CNAME for denne URL-en til ",(0,n.jsx)(r.code,{children:"<cluster>.kartverket.cloud"})," . Dersom du \xf8nsker et CNAME som ligger under kartverket.cloud (for eksempel minapp.kartverket.cloud) kan dette gj\xf8res av SKIP, for alle andre domener ta kontakt med eier av domenet via bestilling i pureservice. N\xe5r dette er gjort vil alle sp\xf8rringer som g\xe5r mot URL-en du har bestemt ende opp host lastbalansereren foran clusteret, og sendes videre inn til Kubernetes."]}),"\n",(0,n.jsxs)(r.p,{children:["Neste steg er at Kubernetes sender sp\xf8rringen videre til din applikasjon. Da m\xe5 du registere URL-en i Skiperator som vanlig under ",(0,n.jsx)(r.code,{children:"ingresses"})," ."]}),"\n",(0,n.jsxs)(r.p,{children:["Dersom du \xf8nsker \xe5 ha en URL p\xe5 toppniv\xe5 (",(0,n.jsx)(r.a,{href:"http://annentjeneste.no/",children:"annentjeneste.no"}),") er ikke CNAME st\xf8ttet i DNS. Her m\xe5 man bruke an A record, og her kan man i s\xe5 fall f\xe5 IP-adresser med \xe5 gj\xf8re et DNS-oppslag p\xe5 ",(0,n.jsx)(r.code,{children:"<cluster>.kartverket.cloud"})," ."]}),"\n",(0,n.jsx)(r.h2,{id:"https-by-default",children:"HTTPS by default"}),"\n",(0,n.jsx)(r.p,{children:"N\xe5r man eksponerer en applikasjon f\xe5r man ogs\xe5 HTTPS automatisk satt opp og eksponert. I dette tilfellet kan man fort sp\xf8rre seg om man burde redirecte HTTP til HTTPS for at alle brukerene skal nyte godt av dette, og svaret p\xe5 det er i nesten alle tilfeller ja."}),"\n",(0,n.jsxs)(r.p,{children:["For \xe5 sette opp en slik redirect er det enkleste \xe5 f\xe5 applikasjonen som serverer ressurser til klienten (nettleseren) \xe5 sende en ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"})," header (HSTS). N\xe5r en nettleser laster en nettside og oppdager en HSTS header vil den legge denne nettsiden i sin interne cache med et flagg som sier at denne nettsiden alltid skal lastes med HTTPS. Lengden p\xe5 denne cachen kan settes i flagget, og i de fleste tilfeller vil denne settes ganske h\xf8yt."]}),"\n",(0,n.jsx)(r.p,{children:"Den eneste tiden hvor dette kan bli problematisk er om det plutselig skjer en endring som gj\xf8r at nettsiden ikke lenger serveres p\xe5 HTTPS. For \xe5 forhindre downgrade attacks vil nettleseren serveres en feilmelding om at nettsiden kun kan \xe5pnes p\xe5 HTTPS og det vil ikke v\xe6re mulig \xe5 g\xe5 forbi denne for \xe5 n\xe5 HTTP-siden. Men i de aller fleste tilfeller er ikke dette noe \xe5 bekymre seg over."})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},43550:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/acme-8495f1c893022eea503b28a593fbcbea.png"},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>a});var n=t(67294);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);