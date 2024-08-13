"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[7579],{52776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var o=t(85893),s=t(11151);const i={title:"Hybrid Kubernetes in production pt. 1",description:"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\n",slug:"hybrid-kubernetes-in-production-part-1",authors:[{name:"Eline Henriksen",title:"Product Owner and Platform Developer",url:"https://eliine.dev",image_url:"https://github.com/eliihen.png"}],tags:["anthos","kubernetes","hybrid"],image:"/img/skip.png",hide_table_of_contents:!1},a=void 0,r={permalink:"/blog/hybrid-kubernetes-in-production-part-1",source:"@site/blog/2023-11-7-anthos-1.md",title:"Hybrid Kubernetes in production pt. 1",description:"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\n",date:"2023-11-07T00:00:00.000Z",formattedDate:"November 7, 2023",tags:[{label:"anthos",permalink:"/blog/tags/anthos"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"hybrid",permalink:"/blog/tags/hybrid"}],readingTime:7.235,hasTruncateMarker:!0,authors:[{name:"Eline Henriksen",title:"Product Owner and Platform Developer",url:"https://eliine.dev",image_url:"https://github.com/eliihen.png",imageURL:"https://github.com/eliihen.png"}],frontMatter:{title:"Hybrid Kubernetes in production pt. 1",description:"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\n",slug:"hybrid-kubernetes-in-production-part-1",authors:[{name:"Eline Henriksen",title:"Product Owner and Platform Developer",url:"https://eliine.dev",image_url:"https://github.com/eliihen.png",imageURL:"https://github.com/eliihen.png"}],tags:["anthos","kubernetes","hybrid"],image:"/img/skip.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Hybrid Kubernetes in production pt. 2",permalink:"/blog/hybrid-kubernetes-in-production-part-2"},nextItem:{title:"SKIP has a tech blog!",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},h=[{value:"So why a hybrid cloud?",id:"so-why-a-hybrid-cloud",level:2},{value:"Why we chose Anthos",id:"why-we-chose-anthos",level:2},{value:"What is Anthos anyway?",id:"what-is-anthos-anyway",level:2},{value:"Anthos Service Mesh (ASM)",id:"anthos-service-mesh-asm",level:3},{value:"Anthos Config Managment (ACM)",id:"anthos-config-managment-acm",level:3},{value:"Anthos Connect Gateway",id:"anthos-connect-gateway",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Anthos in Google Cloud",src:t(85568).Z+"",width:"3618",height:"2994"})}),"\n",(0,o.jsx)(n.p,{children:"Over the years we talked with many other public sector companies about their\nexperiences in running containers in production. One of the biggest challenges\nthat we hear again and again is the challenge of running hybridized workloads,\nor how to have some workloads running on-premise and some in the the cloud in a\ngood way."}),"\n",(0,o.jsx)(n.p,{children:"In this newsletter-series we will share some of our experiences solving this\nissue by running Anthos on VMWare (or GKE on-prem, if you prefer) tied together\nto the cloud in Kartverket using hybrid mesh. We will also discuss the reasons\nwe went with Anthos and pros and cons we have experienced so far."}),"\n",(0,o.jsxs)(n.p,{children:["At ",(0,o.jsx)(n.a,{href:"https://www.kartverket.no/en",children:"Kartverket"})," we have an ambition to adopt cloud\nnative technologies. There's thousands of ways to do this, and after trialing a\ncouple of alternative solutions, including running plain Kubernetes and VMWare\nTanzu, we decided to go with Anthos. Anthos is a platform that allows us to run\nKubernetes clusters on-premise and in the cloud, and manage them from a single\npane of glass. We have been running Anthos in production for a while now, at\nleast long enough to be able to share our thoughts."]}),"\n",(0,o.jsx)(n.p,{children:"This newsletter is the first of three part series about Anthos in\nKartverket."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Why we chose Anthos (You are here!)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/blog/hybrid-kubernetes-in-production-part-2",children:"How we run Anthos"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/blog/hybrid-kubernetes-in-production-part-3",children:"Benefits and what we would have done differently"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"so-why-a-hybrid-cloud",children:"So why a hybrid cloud?"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Illustration: Anthos runs on GCP, on-premise, other clouds and Edge",src:t(44017).Z+"",width:"378",height:"235"})}),"\n",(0,o.jsx)(n.p,{children:"Were you to take the time machine back a few years, you would see Kartverket as a\ntraditional enterprise with a lot of knowledge and experience in running\non-premise workloads. This knowledge served us well, but also slightly held us\nback in terms of our imagination. We knew that there had to be a better way,\nbut our enterprise was simply not mature enough to adopt a pure cloud strategy.\nThe fear of the unknown cloud weighed heavily on many people, and therefore few\npeople wanted to take the risk of moving to the cloud."}),"\n",(0,o.jsx)(n.p,{children:"This is something we've worked on for a long time, and still are. After a\nlong time of working with the stakeholders in the organization, we eventually\nbuilt a cloud strategy, which in simple terms stated that we would prefer\nSaaS-products over hosting things ourselves, and that we would gradually move\nour workloads to the cloud."}),"\n",(0,o.jsxs)(n.p,{children:["This cloud strategy however, which cleared up a lot of blockers, came too late\nfor us on ",(0,o.jsx)("abbr",{title:"Statens Kartverk Infrastructure Platform",children:"SKIP"}),". At\nthat point we had already done most of the work on our on-premise platform,\nbuilding on the assumptions the organization held at the time, which was that we\nmet our needs through existing infrastructure and that using public cloud had\ndisqualifying cost and compliance implications. For SKIP it was therefore full\nsteam ahead, building the on-prem part first, then adding the hybrid and cloud\npart later."]}),"\n",(0,o.jsx)(n.p,{children:"It's not like we would have ended up with a pure cloud setup in any case,\nthough. If you're at all familiar with large enterprises, you will know that\nthey are often very complex. This is also true for Kartverket, where we have a\nlot of existing systems that are not easy to move to the cloud. We also have a\nlot of systems that are not suitable for the cloud, mostly because they are\ndesigned to run in a way that would not be cost effective in the cloud. In\naddition we have absolutely massive datasets (petabyte-scale) that would be very\nexpensive to move to the cloud."}),"\n",(0,o.jsx)(n.p,{children:"Because of these limitations, a pure cloud strategy is not considered to be a\ngood fit for us."}),"\n",(0,o.jsx)(n.p,{children:"A hybrid cloud, however, can give us the scalability and flexibility of the\ncloud, while still allowing us to run some of our systems on-prem, with the\nexperience being more or less seamless for the developers."}),"\n",(0,o.jsx)(n.h2,{id:"why-we-chose-anthos",children:"Why we chose Anthos"}),"\n",(0,o.jsx)(n.p,{children:"After some disastrous issues with our previous hybrid cloud PoC (that's a whole\nstory in itself) we decided to to look at what alternatives existed on the\nmarket. We considered various options, but eventually decided to run a PoC on\nAnthos. This was based on a series of conditions at the time, to name a few:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"We had a decent pool of knowledge in GCP compared to AWS and Azure at the time"}),"\n",(0,o.jsx)(n.li,{children:"Some very well established platform teams in the public sector were also using\nGCP, which meant it would be easier to share work and learnings"}),"\n",(0,o.jsx)(n.li,{children:"Anthos and GCP seemed to offer a good developer experience, which for us as a\nplatform team is of paramount importance"}),"\n",(0,o.jsx)(n.li,{children:"A provider like Google is well established in the cloud space (especially\nKubernetes), and would have a fully featured, stable and user friendly product"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"SKIP ran the Anthos PoC over a few months, initially as an on-prem offering only.\nDrawing on the knowledge of internal network and infrastructure engineers, this\ntook us all the way from provisioning clusters and networking, to iterating on\ntools and docs and finally onboarding an internal product team on the platform.\nOnce we felt we had learned what we could from the PoC, we gathered thoughts\nfrom the product team, infrastructure team and of course the SKIP platform team."}),"\n",(0,o.jsx)(n.p,{children:"The results were unanimous. All the participants lauded the GCP user interfaces that\nallowed visibility into running workloads, as well as the new self-service\nfeatures that came with it. Infrastructure engineers complimented the\ninstallation scripts and documentation, which would make it easier to keep the\nclusters up to date."}),"\n",(0,o.jsx)(n.p,{children:"Based on the total package we therefore decided to move ahead with Anthos. To\ninfinity and beyond! \ud83d\ude80"}),"\n",(0,o.jsx)(n.h2,{id:"what-is-anthos-anyway",children:"What is Anthos anyway?"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Anthos logo",src:t(21314).Z+"",width:"2200",height:"917"})}),"\n",(0,o.jsx)(n.p,{children:"Anthos is Google's solution to multicloud. It's a product portfolio where the\nmain product is GKE (Google Kubernetes Engine) on-premise. Using GKE on-prem\nyou can run Kubernetes clusters on-premise and manage them from the same\ncontrol plane in Google Cloud, as if they were proper cloud clusters."}),"\n",(0,o.jsxs)(n.p,{children:["In fact, Anthos is truly multi-cloud. That means you can deploy Anthos\nclusters to GKE and on-prem, but also AWS and Azure. On other cloud platforms\nit uses the provider's Kubernetes distribution like\n",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/aks/",children:"AKS"}),", but you can still manage it\nfrom GKE alongside your other clusters."]}),"\n",(0,o.jsx)(n.p,{children:"In addition to GKE, the toolbox includes:"}),"\n",(0,o.jsx)(n.h3,{id:"anthos-service-mesh-asm",children:"Anthos Service Mesh (ASM)"}),"\n",(0,o.jsxs)(n.p,{children:["A networking solution based on ",(0,o.jsx)(n.a,{href:"http://istio.io",children:"Istio"}),". This is sort of the\nbackbone of the hybrid features of Anthos, as provided you've configured a\nhybrid mesh it allows applications deployed to the cloud to communicate with\non-premise workloads automatically and without manual steps like opening\nfirewalls."]}),"\n",(0,o.jsx)(n.p,{children:"All traffic that flows between microservices on the mesh is also automatically\nencrypted with mTLS."}),"\n",(0,o.jsx)(n.h3,{id:"anthos-config-managment-acm",children:"Anthos Config Managment (ACM)"}),"\n",(0,o.jsx)(n.p,{children:"A way to sync git repos into a running cluster. Think GitOps here. Build a repo\ncontaining all your Kubernetes manifests and sync them into your cluster, making\ncluster maintenance easier."}),"\n",(0,o.jsxs)(n.p,{children:["ACM also includes a policy controller based on ",(0,o.jsx)(n.a,{href:"https://open-policy-agent.github.io/gatekeeper/website/",children:"Open Policy Agent Gatekeeper\n(OPA)"})," which allows\nplatform developers to build guardrails into developers' workflows using\npolicies like ",(0,o.jsx)(n.em,{children:'"don\'t allow containers to run as root"'}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"anthos-connect-gateway",children:"Anthos Connect Gateway"}),"\n",(0,o.jsxs)(n.p,{children:["The connect gateway allows developers to log on to the cluster using ",(0,o.jsx)(n.code,{children:"gcloud"}),"\nand ",(0,o.jsx)(n.code,{children:"kubectl"})," commands, despite the cluster potentially being behind a\nfirewall. From a user experience standpoint this is quite useful, as devs\nwill be logged in to GCP using two factor authentication, and the same strong\nauthentication allows you to access kubernetes on-premise."]}),"\n",(0,o.jsx)(n.p,{children:"Connect Gateway also integrates with GCP groups, enabling RBAC in Kubernetes\nto be assigned to groups instead of manually administered lists of users."}),"\n",(0,o.jsxs)(n.p,{children:["Currently the connect gateway only supports stateless requests, for example\n",(0,o.jsx)(n.code,{children:"kubectl get pods"})," or ",(0,o.jsx)(n.code,{children:"kubectl logs"})," (including ",(0,o.jsx)(n.code,{children:"-f"}),"). It does not support\n",(0,o.jsx)(n.code,{children:"port-forward"}),", ",(0,o.jsx)(n.code,{children:"exec"})," or ",(0,o.jsx)(n.code,{children:"run"}),", which can be a bit annoying."]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"As you can see, the above tools gives us a lot of benefits."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Combined with the power of Google Cloud and\nTerraform, they give us a good combination of flexibility through cloud services"}),"\n",(0,o.jsx)(n.li,{children:"Ease the maintenance by using the tools that Anthos and Terraform supply us"}),"\n",(0,o.jsx)(n.li,{children:"Eases the compliance and modernization burden by allowing a gradual or\npartial migration to cloud, allowing parts to remain on-premise while still\nretaining most of the modern tooling of the cloud"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"That's it for now! \ud83d\ude42 We'll be back with more details on how we run Anthos as\nwell as the pros and cons we've seen so far in the coming weeks. Stay tuned!"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Disclaimer - Google, GKE and Anthos are trademarks of Google LLC and this website is not\nendorsed by or affiliated with Google in any way."})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},85568:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/anthos-1-7de3d78d58e53af12f241a38a12f68ef.png"},21314:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/anthos-2-1a3889bc339c3f2ac97e81d32c482cff.png"},44017:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/anthos-3-c8c56e8241d54a23f269d181b5d7eb57.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);