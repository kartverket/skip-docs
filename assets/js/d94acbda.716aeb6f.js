"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[7021],{55811:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"gcp/kostnadsoversikt-og-alarmer","title":"Kostnadsoversikt og alarmer","description":"Kostnadsoversikt","source":"@site/docs/05-gcp/04-kostnadsoversikt-og-alarmer.md","sourceDirName":"05-gcp","slug":"/gcp/kostnadsoversikt-og-alarmer","permalink":"/docs/gcp/kostnadsoversikt-og-alarmer","draft":false,"unlisted":false,"editUrl":"https://github.com/kartverket/skip-docs/edit/main/docs/05-gcp/04-kostnadsoversikt-og-alarmer.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Oppsett og bruk av Google Secret Manager","permalink":"/docs/gcp/oppsett-og-bruk-av-secret-manager"},"next":{"title":"\u2699\ufe0f Kubernetes","permalink":"/docs/kubernetes/"}}');var n=t(74848),a=t(28453);const o={},l="Kostnadsoversikt og alarmer",d={},i=[{value:"Kostnadsoversikt",id:"kostnadsoversikt",level:2},{value:"Alarmer",id:"alarmer",level:2},{value:"Hvordan sette opp et budsjett",id:"hvordan-sette-opp-et-budsjett",level:3},{value:"Slack",id:"slack",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"kostnadsoversikt-og-alarmer",children:"Kostnadsoversikt og alarmer"})}),"\n",(0,n.jsx)(s.h2,{id:"kostnadsoversikt",children:"Kostnadsoversikt"}),"\n",(0,n.jsx)(s.p,{children:"SKIP har laget et Grafana dashboard som kan brukes til \xe5 holde en l\xf8pende oversikt over kostnader.\nDashboardet viser kostnader fordelt p\xe5 prosjekter og tjenester, og gir en oversikt gruppert p\xe5 divisjoner eller teams."}),"\n",(0,n.jsxs)(s.p,{children:["Dashboardet kan man finne ",(0,n.jsx)(s.a,{href:"https://monitoring.kartverket.cloud/d/ee3q31rt3uosgd/gcp-cost?orgId=1&from=now-7d&to=now&timezone=browser&var-division=eiendom&var-team=$__all",children:"her"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Merk:"})," GCP Cost dashboardet vil vise sm\xe5 forskjeller fra GCP Budgets, dette skyldes start tiden p\xe5 intervallet.",(0,n.jsx)(s.br,{}),"\n","Dataen i dashboardet kan ogs\xe5 oppdatere seg litt tregere. Se p\xe5 dashboardet som en pekepinn, mens GCP Budgets er fasiten."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"alarmer",children:"Alarmer"}),"\n",(0,n.jsx)(s.p,{children:"For \xe5 unng\xe5 overraskelser i form av h\xf8ye kostnader, er det viktig \xe5 sette opp alarmer. Alarmer kan settes opp for \xe5 varsle om kostnader som overstiger en viss grense, eller for \xe5 varsle om kostnader som \xf8ker raskt."}),"\n",(0,n.jsxs)(s.p,{children:["Vi anbefaler p\xe5 det sterkeste at alarmer blir satt n\xe5r dere tar i bruk tjenester i Google Cloud.\nDette kan gj\xf8res i ",(0,n.jsx)(s.a,{href:"https://github.com/kartverket/cost-alerts",children:"cost-alerts"})," repoet p\xe5 Github."]}),"\n",(0,n.jsx)(s.p,{children:"Kostnadsalarmer i GCP heter 'budgets', s\xe5 herfra referes kostnadsalarmer som budsjett."}),"\n",(0,n.jsx)(s.h3,{id:"hvordan-sette-opp-et-budsjett",children:"Hvordan sette opp et budsjett"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/kartverket/cost-alerts",children:"cost-alerts"})," fungerer p\xe5 mange m\xe5ter likt som ",(0,n.jsx)(s.a,{href:"https://github.com/kartverket/grafana-alerts",children:"grafana-alerts"})," repoet.\nDersom dere skal opprette deres f\xf8rste budsjett, s\xe5 opprett en PR mot cost-alerts repoet hvor dere gj\xf8r f\xf8lgende:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Opprett en fil med navnet p\xe5 teamet i ",(0,n.jsx)(s.code,{children:"teams"})," mappen, f.eks ",(0,n.jsx)(s.code,{children:"teams/mitt-team.tf"})]}),"\n",(0,n.jsxs)(s.li,{children:["Legg til en linje i ",(0,n.jsx)(s.code,{children:"CODEOWNERS"}),"-filen, med f\xf8lgende format: ",(0,n.jsx)(s.code,{children:"teams/mitt-team.tf @kartverket/mitt-team"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["I ",(0,n.jsx)(s.code,{children:"teams/mitt-team.tf"}),"-filen s\xe5 kan man opprette et budsjett slik:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",children:'module "mitt_team_gcp_budget" {\n  source = "./modules/gcp-budget"\n  budgets = [\n    {\n      name          = "produkt"\n      project_ids   = ["project-dev-1", "project-prod-2"]\n      budget_amount = 500                      \n      alert_exceeded_threshold = [0.75, 1.0] \n      alert_forecast_threshold = [1.0]         \n    }\n  ]\n  slack_channel_name           = "#your-teams-slack-channel"\n  email_address                = "alerts@example.com"\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Forklaringer p\xe5 variabler:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"name"}),": Navnet p\xe5 budsjettet, dere velger selv"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"project_ids"}),": Prosjektene som budsjettet skal gjelde for. En prosjekt ID finner dere p\xe5 'forsiden' til prosjektet p\xe5 ",(0,n.jsx)(s.a,{href:"https://console.cloud.google.com",children:"GCP"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"budget_amount"}),": Bel\xf8pet som budsjettet skal varsle om. Dette er i EURO."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"alert_exceeded_threshold"}),": Dette er en liste med tall som sier hvor mye av budsjettet som skal overskrides f\xf8r det varsles. Tallene er i desimalformat av prosent, alts\xe5 0.75 = 75%. Valgfritt, standard er 0.75 og 1.0."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"alert_forecast_threshold"}),": Samme som over, men her varsles det om forventet bruk. Valgfritt, standard er 1.0."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"slack_channel_name"}),": Navnet p\xe5 slack-kanalen som varsler skal sendes til, husk \xe5 inkluder # foran navnet."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"email_address"}),": E-postadressen som varsler skal sendes til."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"README i cost-alerts repoet inneholder mer utfyllende informasjon om bruk av modulen."}),"\n",(0,n.jsx)(s.h3,{id:"slack",children:"Slack"}),"\n",(0,n.jsxs)(s.p,{children:["Dersom dere har lagt inn at det skal varsles til slack, s\xe5 m\xe5 dere invitere ",(0,n.jsx)(s.code,{children:"SKIP Slack Bot"})," til kanalen det skal varsles til."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["G\xe5 til slack kanalen og trykk p\xe5 medlemslisten oppe til h\xf8yre i vinduet\n",(0,n.jsx)(s.img,{alt:"bilde som viser \xf8vre delen av en slack kanal",src:t(41571).A+"",width:"1311",height:"97"})]}),"\n",(0,n.jsxs)(s.li,{children:["Trykk p\xe5 ",(0,n.jsx)(s.code,{children:"Integrations"})," i menyen som kommer opp, velg deretter ",(0,n.jsx)(s.code,{children:"Add an App"}),"\n",(0,n.jsx)(s.img,{alt:"bilde som viser en popup meny av hvor man legger til medlemmer og apps",src:t(56296).A+"",width:"665",height:"583"})]}),"\n",(0,n.jsxs)(s.li,{children:["S\xf8k etter ",(0,n.jsx)(s.code,{children:"SKIP Slack Bot"})," og trykk p\xe5 ",(0,n.jsx)(s.code,{children:"Add"}),"\n",(0,n.jsx)(s.img,{alt:"bilde som viser en side der man kan s\xf8ke etter apps",src:t(54161).A+"",width:"796",height:"285"})]}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},41571:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/slackbot-step1-3464025ec8335faea217262c84f87549.png"},56296:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/slackbot-step2-5fd2a40a986c77fb31a8d4791d350263.png"},54161:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/slackbot-step3-1cde67aa86a43d2acc91e7b0545e2c92.png"},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var r=t(96540);const n={},a=r.createContext(n);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);