"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[2155],{55947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"github-actions/tilgang-til-on-prem-infrastruktur-fra-github-actions","title":"Tilgang til on-prem infrastruktur fra GitHub Actions","description":"Bakgrunn","source":"@site/docs/08-github-actions/tilgang-til-on-prem-infrastruktur-fra-github-actions.md","sourceDirName":"08-github-actions","slug":"/github-actions/tilgang-til-on-prem-infrastruktur-fra-github-actions","permalink":"/docs/github-actions/tilgang-til-on-prem-infrastruktur-fra-github-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/kartverket/skip-docs/edit/main/docs/08-github-actions/tilgang-til-on-prem-infrastruktur-fra-github-actions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sikkerhetsscanning med Pharos","permalink":"/docs/github-actions/pharos"},"next":{"title":"Tilgang til repoer med tokens fra GitHub Actions","permalink":"/docs/github-actions/tilgang-til-repoer-med-tokens-fra-github-actions"}}');var i=n(74848),a=n(28453);const s={},o="Tilgang til on-prem infrastruktur fra GitHub Actions",l={},c=[{value:"Bakgrunn",id:"bakgrunn",level:2},{value:"Komme i gang",id:"komme-i-gang",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"tilgang-til-on-prem-infrastruktur-fra-github-actions",children:"Tilgang til on-prem infrastruktur fra GitHub Actions"})}),"\n",(0,i.jsx)(t.h2,{id:"bakgrunn",children:"Bakgrunn"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Tailscale i denne konteksten er ment som et hjelpemiddel for \xe5 migrere pakker ut til et ekstern pakkeregister, og som et verkt\xf8y for \xe5 bli kvitt interne avhengigheter. Anbefales ikke for allmenn bruk."})}),"\n",(0,i.jsx)(t.p,{children:"For \xe5 underst\xf8tte produktteamene med \xe5 migrere bort fra intern kode- og artifakthosting, samt avhengigheter p\xe5 interne databaser har SKIP introdusert Tailscale."}),"\n",(0,i.jsxs)(t.p,{children:["Tailscale er en mesh-basert peer-to-peer VPN-l\xf8sning, som du kan lese mer om i deres ",(0,i.jsx)(t.a,{href:"https://tailscale.com/blog/how-tailscale-works/",children:"egen dokumentasjon"})," ."]}),"\n",(0,i.jsx)(t.h2,{id:"komme-i-gang",children:"Komme i gang"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Kontakt en ",(0,i.jsx)(t.a,{href:"https://github.com/orgs/kartverket/people?query=role%3Aowner",children:"GitHub-administrator"})," for \xe5 be om tilgang for ditt repository"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Hei $NAVN! Teamet mitt trenger tilgang til \xe5 benytte Tailscale p\xe5 repoet ",(0,i.jsx)(t.a,{href:"https://github.com/kartverket/mittRepo",children:"https://github.com/kartverket/mittRepo"})," . Jeg trenger at du granter organisasjonshemmelighetene ",(0,i.jsx)(t.code,{children:"TS_OAUTH_CLIENT_ID"})," og ",(0,i.jsx)(t.code,{children:"TS_OAUTH_SECRET"})," (+ tilsvarende for Dependabot org-wide) p\xe5 repoet, s\xe5 klarer vi resten selv."]}),"\n",(0,i.jsx)(t.p,{children:"P\xe5 forh\xe5nd takk \ud83d\ude4c"}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Etter du har f\xe5tt tilgang til hemmelighetene, legg til f\xf8lgende i din GitHub workflow"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"- name: Tailscale\n  uses: tailscale/github-action@v2\n  with:\n    oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}\n    oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}\n    tags: tag:github-runner\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Du kan n\xe5 benytte deg av utvalgte interne tjenester. Lykke til!"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Vil du vite hvilke tjenester du f\xe5r tilgang til eller behov for flere tjenester\nenn dagens utvalg? Ta kontakt med ",(0,i.jsx)(t.a,{href:"https://kartverketgroup.slack.com/archives/C028ZEED280",children:"SKIP p\xe5 Slack"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);