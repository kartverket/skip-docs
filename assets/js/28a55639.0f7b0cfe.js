"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[9258],{92646:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(74848),s=r(28453);const i={},a="Helsesjekker i Kubernetes",o={id:"kubernetes/helsesjekker-i-kubernetes",title:"Helsesjekker i Kubernetes",description:"Bakgrunn",source:"@site/docs/06-kubernetes/06-helsesjekker-i-kubernetes.md",sourceDirName:"06-kubernetes",slug:"/kubernetes/helsesjekker-i-kubernetes",permalink:"/docs/kubernetes/helsesjekker-i-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/06-kubernetes/06-helsesjekker-i-kubernetes.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Autentisering mot GCP fra applikasjon",permalink:"/docs/kubernetes/autentisering-mot-gcp-fra-applikasjon"},next:{title:"URLer og sertifikat for tjenester p\xe5 SKIP",permalink:"/docs/kubernetes/urler-og-sertifikat-for-tjenester-p\xe5-skip"}},d={},l=[{value:"Bakgrunn",id:"bakgrunn",level:2},{value:"Skiperator",id:"skiperator",level:2},{value:"Sikkerhetshensyn",id:"sikkerhetshensyn",level:2},{value:"Unders\xf8ke hva som eksponeres som standard",id:"unders\xf8ke-hva-som-eksponeres-som-standard",level:3},{value:"Eksponer endepunktene p\xe5 dedikert port uten service",id:"eksponer-endepunktene-p\xe5-dedikert-port-uten-service",level:3},{value:"Eksponer endepunktene p\xe5 dedikert port med service",id:"eksponer-endepunktene-p\xe5-dedikert-port-med-service",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"helsesjekker-i-kubernetes",children:"Helsesjekker i Kubernetes"}),"\n",(0,t.jsx)(n.h2,{id:"bakgrunn",children:"Bakgrunn"}),"\n",(0,t.jsx)(n.p,{children:"Helsesjekker i kubernetes er en veldig viktig del av mikrotjeneste-arkitekturen, og det er derfor lurt \xe5 sette seg litt inn i hensikten og funksjonen til de ulike helse-endepunktene man kan konfigurere. Det finnes mange m\xe5ter \xe5 konfigurere disse p\xe5, alt i fra helt egenlagde endepunkter til ferdige rammeverk som eksponerer dette automatisk."}),"\n",(0,t.jsx)(n.p,{children:"I hovedsak finnes det tre typer prober som kubernetes opererer med:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Liveness probe"})," - Sjekker om containeren kj\xf8rer og fungerer, hvis ikke s\xe5 restarter kubernetes containeren"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(58704).A+"",width:"600",height:"512"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Readiness probe"})," - Brukes for \xe5 bestemme om en pod en klar for \xe5 ta i mot trafikk. En pod er klar n\xe5r alle containere i poden er klare."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(4044).A+"",width:"600",height:"512"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Startup probe"})," - Hvis denne er konfigurert s\xe5 avventer kubernetes med liveness og readiness til dette endepunktet svarer. Dette kan brukes for \xe5 gi trege containere noe mer tid til \xe5 starte opp."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Det finnes flere m\xe5ter \xe5 sette opp helsesjekker p\xe5, som f.eks. kommandoer, HTTP-requests, TCP-requests og gRPC-requests. Den aller vanligste m\xe5ten er \xe5 konfigurere et endepunkt (f.eks /health, /liveness) i applikasjonen som svarer p\xe5 HTTP-requests, og spesifisere dette som en del av pod-spesifikasjonen."}),"\n",(0,t.jsxs)(n.p,{children:["Litt mer om helsesjekker generelt: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",children:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"})]}),"\n",(0,t.jsxs)(n.p,{children:["Det er viktig \xe5 merke seg at man ikkem\xe5benytte seg av alle disse helsesjekkene, men man b\xf8r ta et bevisst valg om det er hensiktsmessig eller ikke. Sjekk den lenken her for \xe5 en oversikt over hva man b\xf8r gj\xf8re: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#when-should-you-use-a-liveness-probe",children:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#when-should-you-use-a-liveness-probe"})]}),"\n",(0,t.jsx)(n.h2,{id:"skiperator",children:"Skiperator"}),"\n",(0,t.jsxs)(n.p,{children:["De aller fleste som har applikasjoner p\xe5 SKIP benytter Skiperator for \xe5 forenkle oppsettet rundt applikasjonen. I Skiperator-manifestet kan man konfigurere helsesjekker p\xe5 samme m\xe5te man ville gjort for en vanilla-pod i kubernetes. Detaljer rundt dette st\xe5r i ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/kartverket/skiperator@v1.0.0/api/v1alpha1#ApplicationSpec",children:"dokumentasjonen for Skiperator"})," . Se under ",(0,t.jsx)(n.code,{children:"ApplicationSpec"})," og ",(0,t.jsx)(n.code,{children:"Liveness"})," / ",(0,t.jsx)(n.code,{children:"Readiness"})," / ",(0,t.jsx)(n.code,{children:"Startup"})," ."]}),"\n",(0,t.jsx)(n.h2,{id:"sikkerhetshensyn",children:"Sikkerhetshensyn"}),"\n",(0,t.jsx)(n.p,{children:"Det er noen fallgruver \xe5 v\xe6re klar over, s\xe5 denne siden skal pr\xf8ve \xe5 gi en oversikt over hvordan man typisk b\xf8r konfigurere dette p\xe5 en sikker og god m\xe5te."}),"\n",(0,t.jsx)(n.p,{children:"Hvis man ikke konfigurerer applikasjonen sin riktig kan man i verste fall ende opp med \xe5 eksponere de samme endepunktene som kubernetes bruker internt ut p\xe5 internett. Et enkelt /health endepunkt som svarer med HTTP 200 OK, gj\xf8r ikke s\xe5 stor skade. Et feilkonfigurert management-endepunkt derimot kan eksponere interne milj\xf8variabler, debug-info og minnedump."}),"\n",(0,t.jsx)(n.p,{children:"Ta en titt p\xe5 f\xf8lgende flytskjema f\xf8r du g\xe5r videre, og g\xe5 til det punktet som gjelder deg"}),"\n",(0,t.jsx)(n.h3,{id:"unders\xf8ke-hva-som-eksponeres-som-standard",children:"Unders\xf8ke hva som eksponeres som standard"}),"\n",(0,t.jsxs)(n.p,{children:["En veldig vanlig m\xe5te \xe5 l\xf8se helsejsekker p\xe5 n\xe5r man bruker Spring Boot er \xe5 benytte seg av sub-prosjektet ",(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#actuator",children:"Spring Boot Actuator"})," ."]}),"\n",(0,t.jsx)(n.p,{children:"For \xe5 ta det i bruk trenger man bare \xe5 legge til f\xf8lgende for Maven-prosjekt (pom.xml)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Eller dette hvis man bruker Gradle (build.gradle)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-actuator'\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Rammeverket setter automatisk opp endepunktet ",(0,t.jsx)(n.code,{children:"/actuator/health"})," som en trygg default (gjelder versjon 2 og h\xf8yere av Spring Boot). N\xe5r man starter opp en Spring-applikasjon i kubernetes vil Spring Boot Actuator ogs\xe5 automatisk tilgjengeliggj\xf8re ",(0,t.jsx)(n.code,{children:"/actuator/health/liveness"})," og ",(0,t.jsx)(n.code,{children:"/actuator/health/readiness"})," som man benytte for helsesjekker. For \xe5 teste disse manuelt kan du legge til ",(0,t.jsx)(n.code,{children:"management.endpoint.health.probes.enabled=true"})," i ",(0,t.jsx)(n.code,{children:"application.properties"})," ."]}),"\n",(0,t.jsx)(n.p,{children:"Disse endepunktene kan du s\xe5 bruke i Skiperator-manifestet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"apiVersion: skiperator.kartverket.no/v1alpha1\nkind: Application\nmetadata:\n    name: some-backend\n    namespace: yournamespace\nspec:\n    # \xd8vrig konfigurasjon\n    liveness:\n        path: /actuator/health/liveness\n        port: 8080\n        failureThreshold: 3\n        timeout: 1\n        initialDelay: 3\n    readiness:\n        path: /actuator/health/readiness\n        port: 8080\n        failureThreshold: 3\n        timeout: 1\n        initialDelay: 5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Det er viktig \xe5 merke seg f\xf8lgende notat:\n",(0,t.jsx)(n.img,{src:r(15923).A+"",width:"976",height:"249"})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Konfigurasjon som ",(0,t.jsx)(n.code,{children:"management.endpoints.web.exposure.include=*"})," frar\xe5des ettersom det eksponerer alle endepunkt som er skrudd p\xe5. I s\xe5 fall m\xe5 man passe p\xe5 \xe5 sette ",(0,t.jsx)(n.code,{children:"management.endpoints.enabled-by-default=false"})," og manuelt skru p\xe5 de man \xf8nsker \xe5 bruke."]})}),"\n",(0,t.jsxs)(n.p,{children:["\xd8nsker man \xe5 eksponere ytterligere ",(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#actuator.endpoints",children:"endepunkt"})," , som f.eks. \xe5 eksponere ",(0,t.jsx)(n.code,{children:"/info"})," for \xe5 presentere informasjon om bygget eller lignende er det tryggere \xe5 eksplisitt man gj\xf8re det p\xe5 denne m\xe5ten i ",(0,t.jsx)(n.code,{children:"application.properties"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"management.endpoint.info.enabled=true\nmanagement.endpoint.health.enabled=true\nmanagement.endpoints.web.exposure.include=health,info\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Savner du ditt rammeverk? Legg det til da vel ",(0,t.jsx)(n.img,{src:r(91073).A+"",width:"16",height:"16"})]})}),"\n",(0,t.jsx)(n.h3,{id:"eksponer-endepunktene-p\xe5-dedikert-port-uten-service",children:"Eksponer endepunktene p\xe5 dedikert port uten service"}),"\n",(0,t.jsx)(n.p,{children:"Her vil det variere litt hvordan man g\xe5r frem avhengig av om man bruker et rammeverk eller ikke, siden prosessen i containeren m\xe5 lytte p\xe5 ekstra port."}),"\n",(0,t.jsx)(n.p,{children:"F\xf8rst m\xe5 man velge seg en port, f.eks. 8081, og s\xe5 eksponere denne i Dockerfile. I dette eksempelet vil 8080 v\xe6re applikasjonsporten, og 8081 management/helseporten."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"EXPOSE 8080 8081\n"})}),"\n",(0,t.jsx)(n.p,{children:"Deretter m\xe5 man konfigurere management-porten i application.properties p\xe5 f\xf8lgende m\xe5te:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"management.server.port=8081\nmanagement.endpoint.info.enabled=true\nmanagement.endpoint.health.enabled=true\nmanagement.endpoints.web.exposure.include=health,info\n"})}),"\n",(0,t.jsx)(n.p,{children:"Skiperator-manifestet vil v\xe6re helt likt, men man insturerer kubernetes til \xe5 gj\xf8re helsesjekkene p\xe5 en annen port."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"apiVersion: skiperator.kartverket.no/v1alpha1\nkind: Application\nmetadata:\n    name: some-backend\n    namespace: yournamespace\nspec:\n    port: 8080\n    # \xd8vrig konfigurasjon\n    liveness:\n        path: /actuator/health/liveness\n        port: 8081\n        failureThreshold: 3\n        timeout: 1\n        initialDelay: 3\n    readiness:\n        path: /actuator/health/readiness\n        port: 8081\n        failureThreshold: 3\n        timeout: 1\n        initialDelay: 5\n"})}),"\n",(0,t.jsx)(n.h3,{id:"eksponer-endepunktene-p\xe5-dedikert-port-med-service",children:"Eksponer endepunktene p\xe5 dedikert port med service"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For \xf8yeblikket kan man ikke spesifisere hvilken port man skal tillate trafikk til via skiperator sin accessPolicy"})}),"\n",(0,t.jsx)(n.p,{children:"Hvis man har behov for at en annen applikasjon skal kunne n\xe5 endepunktet p\xe5 en annen port m\xe5 man gj\xf8re ytterligere konfigurasjon. Man b\xf8r ta en ekstra vurdering p\xe5 om det er hensiktmessig \xe5 eksponere denne typen informasjon via actuator-endepunkter."}),"\n",(0,t.jsx)(n.p,{children:"Sett opp konfigurasjonen p\xe5 samme m\xe5te som punktet over, men manifestet vil n\xe5 inkludere spesifikasjon for ekstra porter og tilgangssstyring."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"apiVersion: skiperator.kartverket.no/v1alpha1\nkind: Application\nmetadata:\n    name: some-backend\n    namespace: yournamespace\nspec:\n    port: 8080\n    additionalPorts:\n      - name: actuator\n        port: 8081\n        protocol: TCP\n    # .. \xf8vrig konfigurasjon\n    liveness:\n        path: /actuator/health/liveness\n        port: 8081\n        failureThreshold: 3\n        timeout: 1\n        initialDelay: 3\n    readiness:\n        path: /actuator/health/readiness\n        port: 8081\n        failureThreshold: 3\n        timeout: 1\n        initialDelay: 5\n    accessPolicy:\n      inbound:\n        rules:\n          - application: some-frontend\n            port: 8081 # Ikke mulig akkurat n\xe5\n"})})]})}function k(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},58704:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/560627776-10861b7d97dc8ff6ef7509796ee5930c.gif"},4044:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/560627783-e77f2e48c851b7f60f9ad0e8deaf10f2.gif"},15923:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/563642594-caedf8cb6b905323cb7c808c19e219fe.png"},91073:(e,n,r)=>{r.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAKfwAACn8AG1cEgFAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACNElEQVQ4EY1TTY9MURA9dV/3vCZh0JJJzCxELNg1C2Jhg4iQFktrEsO/mH/BLFhb+oogTCIWE9+9QyKGZJpMaGYiae/N63fLqXpamghucm9uquqc+hbwqM4EkZno/86JPYh6itKDVGyFQhBkge8cJFyU1pVHoxgZgtUMn7fPoxam0UiAbyVQOCdQD8AayjLKBpjFrqvnREhvjis2gjvH72B87JD2ckOVNCACRPqJdEA0EmmmASurd9G6dthIKgPz7OAsl5qIpEmdxkOwMQSTmU57WW62Hi0VopZz0Ieaxyh1kd6nTF68+YJ9rQkkVYAoo2K+s4Sd2zaiubmhWqhKGgKi7A3UnvacGTb55PaDd9h/5jFeLSyD9fBrf5OZzmz4lI5hsQOzP+AFq3Km7j+O2VqR2SmJT9oDUiYsEpgjer0Mf02h2YAO2DKLQzAQfdou2Oua+XWSxOh4hy00hR1rZalQXgebjARMQd66EiyJsbJgJLS6m0l17G8y6n6Ao2OIDVTM2ZB4n1m0Dx/7uD+/iH6/oL06n/1NZjorrNvaYEHu/dpGxhNLlcs3X+PGrZeYmhr3CLqLKzh2ZAdOHt2OkHB4I3620ePUZ+0L2JBO6+c8l4AxhCDd91/RXaJHnsmJtZjcso4pMKaIVdmUpljOZ2X39bMVge3ByCgzz5I5Jky4mkaDFYxN/zDK1TKxEpxtZ7UJW1+vUxI0H8Cu/U3m00fPwz0YWSZu1b/WmQVjZy79vs7fAdlwN9BZNtNNAAAAAElFTkSuQmCC"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);