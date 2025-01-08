"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[9157],{78540:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"argo-cd/komme-i-gang-med-argocd","title":"Komme i gang med Argo CD","description":"S\xe5 du \xf8nsker \xe5 komme i gang med \xe5 deploye til SKIP. Det er bra! Vi bruker et par teknologier for \xe5 gj\xf8re det enklest mulig \xe5 deploye koden sin til plattformen, og disse er:","source":"@site/docs/09-argo-cd/01-komme-i-gang-med-argocd.md","sourceDirName":"09-argo-cd","slug":"/argo-cd/komme-i-gang-med-argocd","permalink":"/docs/argo-cd/komme-i-gang-med-argocd","draft":false,"unlisted":false,"editUrl":"https://github.com/kartverket/skip-docs/edit/main/docs/09-argo-cd/01-komme-i-gang-med-argocd.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\ude80 Argo CD","permalink":"/docs/argo-cd/"},"next":{"title":"Hva er et apps-repo","permalink":"/docs/argo-cd/hva-er-et-apps-repo"}}');var i=n(74848),t=n(28453);const a={},l="Komme i gang med Argo CD",o={},d=[{value:"Sjekkliste",id:"sjekkliste",level:2}];function c(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"komme-i-gang-med-argo-cd",children:"Komme i gang med Argo CD"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(57585).A+"",width:"1000",height:"571"})}),"\n",(0,i.jsx)(r.p,{children:"S\xe5 du \xf8nsker \xe5 komme i gang med \xe5 deploye til SKIP. Det er bra! Vi bruker et par teknologier for \xe5 gj\xf8re det enklest mulig \xe5 deploye koden sin til plattformen, og disse er:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/github/tilgang-til-github",children:"GitHub"})," \u2013 Kodelagring"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/github-actions/",children:"GitHub Actions"})," \u2013 Bygging av artefakter og containere"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/argo-cd/",children:"Argo CD"})," \u2013 Deploye til SKIP"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/argo-cd/hente-hemmeligheter-fra-hemmelighetsvelv",children:"External Secrets"})," \u2013 Synkronisere hemmeligheter til Kubernetes"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/argo-cd/provisjonere-infrastruktur-med-crossplane",children:"Crossplane"})," \u2013 Provisjonere infrastruktur"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://github.com/kartverket/skiperator",children:"Skiperator"})," \u2013 Beskrive en applikasjon i et manifest"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Her skal vi beskrive hvordan du kommer i gang med \xe5 synke ut applikasjonene dine til clusteret ved hjelp av Argo CD. For beskrivelser av hvordan man kommer i gang med det andre teknologiene se lenkene over."}),"\n",(0,i.jsx)(r.h2,{id:"sjekkliste",children:"Sjekkliste"}),"\n",(0,i.jsx)(r.p,{children:"For \xe5 starte med Argo CD m\xe5 du gj\xf8re f\xf8lgende:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["S\xf8rg for at teamet ditt oppfyller ",(0,i.jsx)(r.a,{href:"https://kartverket.atlassian.net/wiki/spaces/DT/pages/497614849/Hva+skal+til+for+bruke+Plattformen",children:"Hva skal til for \xe5 bruke Kompass?"})]}),"\n",(0,i.jsxs)(r.li,{children:["Produktteamet deres m\xe5 ha en team-gruppe i Azure AD","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Samle en liste med alle teammedlemmer"}),"\n",(0,i.jsx)(r.li,{children:"Velg to av teammedlemmene som skal ha h\xf8yere tilganger, for eksempel tech lead og team lead"}),"\n",(0,i.jsx)(r.li,{children:"Send denne listen til produkteier SKIP som bestiller opprettelse av CLOUD_SK_TEAM-gruppe"}),"\n",(0,i.jsxs)(r.li,{children:["Pass p\xe5 at team-gruppen legges inn i ",(0,i.jsx)(r.a,{href:"https://portal.azure.com/#view/Microsoft_AAD_IAM/ManagedAppMenuBlade/~/Overview/objectId/d1f40d68-5df9-491d-826f-86f2f74c0763/appId/2a5ecbb5-6fd3-4488-976f-03a073af2568/preferredSingleSignOnMode/saml/servicePrincipalType/Application",children:"Enterprise Applicationen"})," til ArgoCD for alle relevante milj\xf8"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Det m\xe5 settes opp et apps-repo","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Les ",(0,i.jsx)(r.a,{href:"/docs/argo-cd/hva-er-et-apps-repo",children:"Hva er et apps-repo"})," for \xe5 forst\xe5 hvordan apps-repoer fungerer"]}),"\n",(0,i.jsxs)(r.li,{children:["Repoet opprettes fra ",(0,i.jsx)(r.a,{href:"https://github.com/kartverket/apps-template",children:"apps-template malen"})]}),"\n",(0,i.jsx)(r.li,{children:"GitHub teamet deres m\xe5 gis tilgang til apps-repoet som admin"}),"\n",(0,i.jsxs)(r.li,{children:["SKIP m\xe5 gi Argo CD-appen p\xe5 GitHub tilgang slik at Argo kan pulle apps-repoet, dette gj\xf8res gjennom ",(0,i.jsx)(r.a,{href:"https://github.com/kartverket/github-iac",children:"Github IAC"})," repoet"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Det bestemmes et \u201cprefiks\u201d som dere deployer til","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Vanligvis er dette navnet p\xe5 applikasjonen som skal deploye til SKIP"}),"\n",(0,i.jsx)(r.li,{children:"Dere kan administrere alle Kubernetes namespacer som starter med dette prefikset"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["SKIP m\xe5 konfigurere Argo til \xe5 lese og synkronisere fra apps-repoet","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["SKIP gj\xf8r en endring i ",(0,i.jsx)(r.a,{href:"https://github.com/kartverket/skip-apps/blob/main/lib/argocd/argocd.libsonnet",children:"skip-apps repoet"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["N\xe5 skal du kunne logge inn p\xe5 Argo CD og se applikasjonen din! \ud83d\ude80","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Du finner lenker til Argo p\xe5 ",(0,i.jsx)(r.a,{href:"/docs/argo-cd/",children:"Argo CD"})]}),"\n",(0,i.jsxs)(r.li,{children:["Videre dokumentasjon finnes p\xe5 ",(0,i.jsx)(r.a,{href:"/docs/argo-cd/hvordan-bruke-argocd",children:"Hvordan bruke Argo CD"})]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},57585:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/554043034-b91fb686a46dfab668c27d11f7a60fd3.png"},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var s=n(96540);const i={},t=s.createContext(i);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);