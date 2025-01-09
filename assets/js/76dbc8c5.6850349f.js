"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[8755],{82957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"github-actions/kubectl-fra-github","title":"Kubectl fra GitHub Actions","description":"Det kan v\xe6re nyttig \xe5 kunne kj\xf8re kubectl fra Github Actions n\xe5r for eksempel man \xf8nsker \xe5 restarte et deployment eller kj\xf8re en jobb on demand.","source":"@site/docs/08-github-actions/kubectl-fra-github.md","sourceDirName":"08-github-actions","slug":"/github-actions/kubectl-fra-github","permalink":"/docs/github-actions/kubectl-fra-github","draft":false,"unlisted":false,"editUrl":"https://github.com/kartverket/skip-docs/edit/main/docs/08-github-actions/kubectl-fra-github.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Transitive avhengigheter i Dependency Graph med Gradle","permalink":"/docs/github-actions/gradle-dependency-graph"},"next":{"title":"Sikkerhetsscanning med Pharos","permalink":"/docs/github-actions/pharos"}}');var i=t(74848),s=t(28453);const o={},l="Kubectl fra GitHub Actions",c={},a=[{value:"Oppsett",id:"oppsett",level:2},{value:"1. Legg til ekstra permissions til deploy service accounten",id:"1-legg-til-ekstra-permissions-til-deploy-service-accounten",level:3},{value:"2. Legg til role og rolebinding i ditt apps-repo",id:"2-legg-til-role-og-rolebinding-i-ditt-apps-repo",level:3},{value:"3. Legg til GitHub workflow",id:"3-legg-til-github-workflow",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"kubectl-fra-github-actions",children:"Kubectl fra GitHub Actions"})}),"\n",(0,i.jsx)(n.p,{children:"Det kan v\xe6re nyttig \xe5 kunne kj\xf8re kubectl fra Github Actions n\xe5r for eksempel man \xf8nsker \xe5 restarte et deployment eller kj\xf8re en jobb on demand."}),"\n",(0,i.jsxs)(n.p,{children:["Vi har laget en GitHub Workflow som gj\xf8r det enkelt \xe5 kj\xf8re kubectl kommandoer fra GitHub Actions, denne heter ",(0,i.jsx)(n.code,{children:"run-kubectl"})," og den kan du finne ",(0,i.jsx)(n.a,{href:"https://github.com/kartverket/github-workflows/blob/main/.github/workflows/run-kubectl.yaml",children:"her"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"oppsett",children:"Oppsett"}),"\n",(0,i.jsxs)(n.p,{children:["F\xf8r du kan bruke denne actionen m\xe5 du gj\xf8re noen endringer i ",(0,i.jsx)(n.a,{href:"https://github.com/kartverket/gcp-service-accounts/",children:(0,i.jsx)(n.code,{children:"gcp-service-accounts"})})," og i ditt teams apps-repo."]}),"\n",(0,i.jsx)(n.h3,{id:"1-legg-til-ekstra-permissions-til-deploy-service-accounten",children:"1. Legg til ekstra permissions til deploy service accounten"}),"\n",(0,i.jsxs)(n.p,{children:["run-kubectl tar i bruk Workload Identity Federation som du kan lese mer om ",(0,i.jsx)(n.a,{href:"https://skip.kartverket.no/docs/github-actions/autentisering-med-workload-identity-federation",children:"her"}),",\nmen den krever ogs\xe5 ekstra tilganger for \xe5 kunne koble til clusteret.\nI ",(0,i.jsx)(n.code,{children:"gcp-service-accounts"})," har du sannsynligvis definert opp ditt gcp project for \xe5 kunne bruke det i GitHub Actions,\nog dermed f\xe5tt laget en deploy service account og et workload identity pool.\nDa m\xe5 du bare legge til en ekstra rolle i modul-definisjonen slik:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",children:'module "utviklerportal" {\n  source    = "./project_team"\n  team_name = "utviklerportal"\n  repositories = [\n    "kartverket/kartverket.dev",\n  ]\n  env                   = var.env\n  project_id            = var.utviklerportal_project_id\n  kubernetes_project_id = var.kubernetes_project_id\n  extra_kubernetes_sa_roles = [        \n    "roles/container.clusterViewer",  # <--- Legg til denne linjen i extra_kubernetes_sa_roles\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"N\xe5 skal deploy kontoen kunne koble seg til clusteret."}),"\n",(0,i.jsx)(n.h3,{id:"2-legg-til-role-og-rolebinding-i-ditt-apps-repo",children:"2. Legg til role og rolebinding i ditt apps-repo"}),"\n",(0,i.jsx)(n.p,{children:"For at man skal kunne f.eks restarte et deployment, s\xe5 m\xe5 vi legge til en kubernetes rbac rolle som gir kontoen tilgang til dette."}),"\n",(0,i.jsx)(n.p,{children:"I apps repoet, legg til:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: deployment-restart-role\nrules:\n  - apiGroups: ["apps"]\n    resources: ["deployments"]\n    verbs: ["get", "patch"]\n\n---\n\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: deploy-sa-rolebinding\nsubjects:\n  - kind: User\n    name: your-project-deploy@your-project-id.iam.gserviceaccount.com\nroleRef:\n  kind: Role\n  name: deployment-restart-role\n  apiGroup: rbac.authorization.k8s.io\n'})}),"\n",(0,i.jsxs)(n.p,{children:["navn p\xe5 service accounten er ",(0,i.jsx)(n.code,{children:'"modulnavn"-deploy'}),", hvor modulnavn finnes i ",(0,i.jsx)(n.code,{children:"gcp-service-accounts"}),".\ndu kan ogs\xe5 finne den med ",(0,i.jsx)(n.code,{children:"gcloud config set project <projectid> && gcloud iam service-accounts list | grep deploy"})]}),"\n",(0,i.jsx)(n.h3,{id:"3-legg-til-github-workflow",children:"3. Legg til GitHub workflow"}),"\n",(0,i.jsxs)(n.p,{children:["N\xe5 skal alt v\xe6re konfigurert og du kan legge til en GitHub workflow som kj\xf8rer ",(0,i.jsx)(n.code,{children:"run-kubectl"})," workflow."]}),"\n",(0,i.jsx)(n.p,{children:"eksempel:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name: Get pods\non: push\n\njobs:\n  sandbox:\n    name: get pods\n    uses: kartverket/github-workflows/.github/workflows/run-kubectl.yaml@v4.2.2\n    with:\n      cluster_name: atgcp1-sandbox\n      service_account: test-deploy@test-sandbox-5cx6.iam.gserviceaccount.com\n      kubernetes_project_id: kube-sandbox-6e32\n      project_number: 833464945837\n      namespace: default\n      commands: |\n          get pods  \n          get pods -l app=nginx\n"})}),"\n",(0,i.jsx)(n.p,{children:"Forklaring:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cluster_name"}),": navnet p\xe5 clusteret du vil koble til, dette kan du finne med ",(0,i.jsx)(n.code,{children:"gcloud container fleet memberships list"}),". mer ",(0,i.jsx)(n.a,{href:"https://skip.kartverket.no/docs/kubernetes/logge-inn-p%C3%A5-cluster",children:"her"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"service_account"}),": navnet p\xe5 service accounten som skal brukes. denne blir opprettet i gcp-service-accounts, og slutter p\xe5 ",(0,i.jsx)(n.code,{children:"-deploy"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kubernetes_project_id"}),": id til prosjektet som clusteret ligger i, finnes med ",(0,i.jsx)(n.code,{children:"gcloud projects list | grep kubernetes"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"project_number"}),": nummeret til prosjektet som service accounten ligger i, dette er produkt prosjektet, finnes med ",(0,i.jsx)(n.code,{children:"gcloud projects list | grep produkt"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"commands"}),": kubectl kommandoene du vil kj\xf8re, uten kubectl foran. husk \xe5 bruk multiline string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"namespace"}),": namespace du vil kj\xf8re kommandoen i"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kubectl_version"}),": versjonen av kubectl du vil bruke, default er latest stable. format: v1.30.0"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);