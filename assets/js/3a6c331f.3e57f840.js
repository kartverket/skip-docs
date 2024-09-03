"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[3165],{41484:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(85893),a=n(11151);const s={},i="Bruk av Terraform",o={id:"github-actions/bruk-av-terraform",title:"Bruk av Terraform",description:"For nye applikasjoner anbefaler vi \xe5 bruke Argo CD til utrulling av containere til Kubernetes",source:"@site/docs/08-github-actions/bruk-av-terraform.md",sourceDirName:"08-github-actions",slug:"/github-actions/bruk-av-terraform",permalink:"/docs/github-actions/bruk-av-terraform",draft:!1,unlisted:!1,editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/08-github-actions/bruk-av-terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Autentisering med Workload Identity Federation",permalink:"/docs/github-actions/autentisering-med-workload-identity-federation"},next:{title:"Kubectl fra GitHub Actions",permalink:"/docs/github-actions/kubectl-fra-github"}},l={},d=[{value:"Deploye applikasjoner med Terraform",id:"deploye-applikasjoner-med-terraform",level:2},{value:"Hente hemmeligheter med Vault",id:"hente-hemmeligheter-med-vault",level:2},{value:"Lagre passord til Vault",id:"lagre-passord-til-vault",level:2},{value:"Lagring av state",id:"lagring-av-state",level:2},{value:"Kj\xf8re Terraform i GitHub Actions",id:"kj\xf8re-terraform-i-github-actions",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"bruk-av-terraform",children:"Bruk av Terraform"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["For nye applikasjoner anbefaler vi \xe5 bruke ",(0,t.jsx)(r.a,{href:"/docs/argo-cd/",children:"Argo CD"})," til utrulling av containere til Kubernetes"]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-hcl",children:'provider "vault" {\n  address         = var.vault_addr\n  skip_tls_verify = var.vault_skip_verify\n}\n\nprovider "kubernetes" {\n  config_path = "~/.kube/config"\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Det som gj\xf8r Terraform s\xe5 fleksibelt er dens mange providere som fungerer som interface/API mot den tjenesten den \xf8nsker \xe5 styre. I eksemplet over er noen av v\xe5re mest brukte s\xe5 langt. Vi bruker ",(0,t.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/vault/latest/docs",children:"Vault"})," provideren for \xe5 kommunisere mot Vault sitt API og til slutt ",(0,t.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs",children:"Kubernetes"})," provideren som gir deg mulighet til \xe5 lage alle standard kubernetes ressurser med Terraform syntax."]}),"\n",(0,t.jsx)(r.p,{children:"Legg merke til at mange av providerene ser etter milj\xf8variabler med spesifikke navn, i den offentlige dokumentasjonen for provideren kan man finne ut hvilke navn den bruker. Hvis man setter riktige milj\xf8variabler s\xe5 slipper man \xe5 ha disse i koden, som samtidig gj\xf8r det lettere \xe5 deployere til flere milj\xf8er."}),"\n",(0,t.jsx)(r.h2,{id:"deploye-applikasjoner-med-terraform",children:"Deploye applikasjoner med Terraform"}),"\n",(0,t.jsxs)(r.p,{children:["P\xe5 SKIP har vi laget en enkel m\xe5te \xe5 deploye applikasjoner ved hjelp av ",(0,t.jsx)(r.a,{href:"https://github.com/kartverket/skiperator-poc",children:"Skiperator"})," . Dette er en operator som setter opp alt av nettverking, sikkerhetsmekanismer, autoskalering, liveness- og readiness probes for deg s\xe5 lenge man fyller ut en kort config-fil kalt en Application Custom Resource (CR). Man finner dokumentasjonen for hvorden denne Application CR-en ser ut p\xe5 skiperator sin GitHub-side, og man kan se et eksempel p\xe5 dette i Terraform-syntaks under."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-hcl",children:'resource "kubernetes_manifest" "frontend_application" {\n  manifest = {\n    apiVersion = "skiperator.kartverket.no/v1alpha1"\n    kind       = "Application"\n    metadata = {\n      name      = local.app_name\n      namespace = local.namespace\n    }\n    spec = {\n      image = "ghcr.io/kartverket/${local.app_name}:${var.image_version}"\n      port  = 8080\n      ingresses = [\n        var.gateway_host\n      ]\n      replicas = {\n        cpuThresholdPercentage = 80\n        max                    = 5\n        min                    = 3\n      }\n      env = [\n        {\n          name  = "BACKEND_URL"\n          value = var.backend-url\n        },\n      ]\n      liveness = {\n        path = "/"\n        port = 8080\n      }\n      readiness = {\n        path = "/"\n        port = 8080\n      }\n      resources = {\n        limits = {\n          cpu    = "1000m"\n          memory = "1Gi"\n        }\n        requests = {\n          cpu    = "100m"\n          memory = "100M"\n        }\n      }\n      accessPolicy = {\n        outbound = {\n          rules = [\n            {\n              application = "backend"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"hente-hemmeligheter-med-vault",children:"Hente hemmeligheter med Vault"}),"\n",(0,t.jsxs)(r.p,{children:["Hvis man trenger \xe5 bruke hemmeligheter deploy-time, for eksempel for \xe5 deploye sertfikater eller passord til Kubernetes som secrets, s\xe5 m\xe5 man hente ut disse med ",(0,t.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/vault/latest/docs/data-sources/generic_secret",children:"vault_generic_secret"})," . Eksempelet under gj\xf8r dette for \xe5 generere en docker pull secret som lar en pulle fra ",(0,t.jsx)(r.a,{href:"http://ghcr.io/",children:"ghcr.io"})," . Innholdet i hemmeligheten blir generert av en JSON template-fil som ikke er en del av eksempelet."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-hcl",children:'data "vault_generic_secret" "github_token_ghcr_read" {\n  path = "dsa/github_token_ghcr_read"\n}\n\ndata "template_file" "docker_config_script" {\n  template = file("${path.module}/config.json")\n  vars = {\n    docker-server = data.vault_generic_secret.github_token_ghcr_read.data["server"]\n    auth          = base64encode("${data.vault_generic_secret.github_token_ghcr_read.data["username"]}:${data.vault_generic_secret.github_token_ghcr_read.data["token"]}")\n  }\n}\n\nresource "kubernetes_secret" "github-auth" {\n  metadata {\n    name      = "github-auth"\n    namespace = local.namespace\n  }\n  data = {\n    ".dockerconfigjson" = data.template_file.docker_config_script.rendered\n  }\n  type = "kubernetes.io/dockerconfigjson"\n}\n\n'})}),"\n",(0,t.jsx)(r.h2,{id:"lagre-passord-til-vault",children:"Lagre passord til Vault"}),"\n",(0,t.jsx)(r.p,{children:"Noen ganger \xf8nsker man \xe5 skrive til vault, for eksempel n\xe5r man genrerer passord. Eksempelet under gj\xf8r dette."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-hcl",children:'resource "random_password" "generated-password" {\n  length  = 29\n  special = true\n  lower   = true\n  upper   = true\n  number  = true\n}\n\nresource "vault_generic_secret" "password-for-vault-storage" {\n  path = "skip/skipet"\n\n  data_json = <<EOT\n{\n  "username":   "${skip-bruker}",\n  "password":   "${random_password.generated-password.result}",\n  "connection_string": "jdbc:postgresql://${kubernetes_service.skip-db-service.metadata.0.name}:${local.skip-db-port}/${local.skip-db-database-name}"\n}\nEOT\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"lagring-av-state",children:"Lagring av state"}),"\n",(0,t.jsx)(r.p,{children:"Terraform bruker state for \xe5 kontrollere og sammenlikne den n\xe5v\xe6rende konfigurasjonen mot det som kj\xf8rer, staten m\xe5 lagres lokalt eller ekstern. P\xe5 SKIP bruker vi Google Cloud Storage til \xe5 lagre state, og oppsettet for dette kan man se under."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-hcl",children:'terraform {\n  backend "gcs" {\n    bucket = "terraform_state_foobar_1e8e"\n    prefix = "foobar-frontend"\n  }\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"For at backenden over skal kunne n\xe5 denne bucketen m\xe5 service-kontoen den kj\xf8rer som v\xe6re autentisert mot Google Cloud med riktige tilganger. Dette gj\xf8res i byggel\xf8ypa f\xf8r Terraform blir kj\xf8rt, se avsnittet under for hvordan man autentiserer med Google Cloud som en del av Github Actionen."}),"\n",(0,t.jsx)(r.h2,{id:"kj\xf8re-terraform-i-github-actions",children:"Kj\xf8re Terraform i GitHub Actions"}),"\n",(0,t.jsxs)(r.p,{children:["Se ",(0,t.jsx)(r.a,{href:"https://github.com/kartverket/github-workflows",children:"https://github.com/kartverket/github-workflows"})," for hvordan man bruker Terraform som en del av GitHub Actions."]})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>i});var t=n(67294);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);