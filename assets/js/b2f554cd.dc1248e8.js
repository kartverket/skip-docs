"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"hybrid-kubernetes-in-production-part-1","metadata":{"permalink":"/blog/hybrid-kubernetes-in-production-part-1","source":"@site/blog/2023-10-7-anthos-1.md","title":"Hybrid Kubernetes in production pt. 1","description":"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\\n","date":"2023-10-07T00:00:00.000Z","formattedDate":"October 7, 2023","tags":[{"label":"anthos","permalink":"/blog/tags/anthos"},{"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"label":"hybrid","permalink":"/blog/tags/hybrid"}],"readingTime":7.255,"hasTruncateMarker":true,"authors":[{"name":"Espen Henriksen","title":"Product Owner and Platform Developer","url":"https://espen.dev","image_url":"https://github.com/esphen.png","imageURL":"https://github.com/esphen.png"}],"frontMatter":{"title":"Hybrid Kubernetes in production pt. 1","description":"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\\n","slug":"hybrid-kubernetes-in-production-part-1","authors":[{"name":"Espen Henriksen","title":"Product Owner and Platform Developer","url":"https://espen.dev","image_url":"https://github.com/esphen.png","imageURL":"https://github.com/esphen.png"}],"tags":["anthos","kubernetes","hybrid"],"image":"img/anthos-1.png","hide_table_of_contents":false},"nextItem":{"title":"SKIP has a tech blog!","permalink":"/blog/welcome"}},"content":"![Anthos in Google Cloud](img/anthos-1.png)\\n\\nOver the years we talked with many other public sector companies about their\\nexperiences in running containers in production. One of the biggest challenges\\nthat we hear again and again is the challenge of running hybridized workloads,\\nor how to have some workloads running on-premise and some in the the cloud in a\\ngood way. \\n\\nIn this newsletter-series we will share some of our experiences solving this\\nissue by running Anthos on VMWare (or GKE on-prem, if you prefer) tied together\\nto the cloud in Kartverket using hybrid mesh. We will also discuss the reasons\\nwe went with Anthos and pros and cons we have experienced so far.\\n\\n\x3c!--truncate--\x3e\\n\\nAt [Kartverket](https://www.kartverket.no/en) we have an ambition to adopt cloud\\nnative technologies. There\'s thousands of ways to do this, and after trialing a\\ncouple of alternative solutions, including running plain Kubernetes and VMWare\\nTanzu, we decided to go with Anthos. Anthos is a platform that allows us to run\\nKubernetes clusters on-premise and in the cloud, and manage them from a single\\npane of glass. We have been running Anthos in production for a while now, at\\nleast long enough to be able to share our thoughts.\\n\\nThis newsletter is the first of three part series about Anthos in\\nKartverket.\\n\\n1. Why we chose Anthos (You are here!)\\n2. How we run Anthos (Coming soon)\\n3. Benefits and what we would have done differently (Coming soon)\\n\\n## So why a hybrid cloud?\\n\\n![Illustration: Anthos runs on GCP, on-premise, other clouds and Edge](img/anthos-3.png)\\n\\nWere you to take the time machine back a few years, you would see Kartverket as a\\ntraditional enterprise with a lot of knowledge and experience in running\\non-premise workloads. This knowledge served us well, but also slightly held us\\nback in terms of our imagination. We knew that there had to be a better way,\\nbut our enterprise was simply not mature enough to adopt a pure cloud strategy.\\nThe fear of the unknown cloud weighed heavily on many people, and therefore few\\npeople wanted to take the risk of moving to the cloud.\\n\\nThis is something we\'ve worked on for a long time, and still are. After a\\nlong time of working with the stakeholders in the organization, we eventually\\nbuilt a cloud strategy, which in simple terms stated that we would prefer \\nSaaS-products over hosting things ourselves, and that we would gradually move\\nour workloads to the cloud. \\n\\nThis cloud strategy however, which cleared up a lot of blockers, came too late\\nfor us on <abbr title=\\"Statens Kartverk Infrastructure Platform\\">SKIP</abbr>. At\\nthat point we had already done most of the work on our on-premise platform,\\nbuilding on the assumptions the organization held at the time, which was that we\\nmet our needs through existing infrastructure and that using public cloud had\\ndisqualifying cost and compliance implications. For SKIP it was therefore full\\nsteam ahead, building the on-prem part first, then adding the hybrid and cloud\\npart later.\\n\\nIt\'s not like we would have ended up with a pure cloud setup in any case,\\nthough. If you\'re at all familiar with large enterprises, you will know that\\nthey are often very complex. This is also true for Kartverket, where we have a\\nlot of existing systems that are not easy to move to the cloud. We also have a\\nlot of systems that are not suitable for the cloud, mostly because they are\\ndesigned to run in a way that would not be cost effective in the cloud. In\\naddition we have absolutely massive datasets (petabyte-scale) that would be very\\nexpensive to move to the cloud.\\n\\nBecause of these limitations, a pure cloud strategy is not considered to be a\\ngood fit for us.\\n\\nA hybrid cloud, however, can give us the scalability and flexibility of the\\ncloud, while still allowing us to run some of our systems on-prem, with the\\nexperience being more or less seamless for the developers.\\n\\n## Why we chose Anthos\\n\\nAfter some disastrous issues with our previous hybrid cloud PoC (that\'s a whole\\nstory in itself) we decided to to look at what alternatives existed on the\\nmarket. We considered various options, but eventually decided to run a PoC on\\nAnthos. This was based on a series of conditions at the time, to name a few:\\n\\n- We had a decent pool of knowledge in GCP compared to AWS and Azure at the time\\n- Some very well established platform teams in the public sector were also using\\n  GCP, which meant it would be easier to share work and learnings\\n- Anthos and GCP seemed to offer a good developer experience, which for us as a\\n  platform team is of paramount importance\\n- A provider like Google is well established in the cloud space (especially\\n  Kubernetes), and would have a fully featured, stable and user friendly product\\n\\nSKIP ran the Anthos PoC over a few months, initially as an on-prem offering only.\\nDrawing on the knowledge of internal network and infrastructure engineers, this\\ntook us all the way from provisioning clusters and networking, to iterating on\\ntools and docs and finally onboarding an internal product team on the platform.\\nOnce we felt we had learned what we could from the PoC, we gathered thoughts\\nfrom the product team, infrastructure team and of course the SKIP platform team.\\n\\nThe results were unanimous. All the participants lauded the GCP user interfaces that\\nallowed visibility into running workloads, as well as the new self-service\\nfeatures that came with it. Infrastructure engineers complimented the\\ninstallation scripts and documentation, which would make it easier to keep the\\nclusters up to date.\\n\\nBased on the total package we therefore decided to move ahead with Anthos. To\\ninfinity and beyond! \ud83d\ude80\\n\\n## What is Anthos anyway?\\n\\n![Anthos logo](img/anthos-2.png)\\n\\nAnthos is Google\'s solution to multicloud. It\'s a product portfolio where the\\nmain product is GKE (Google Kubernetes Engine) on-premise. Using GKE on-prem\\nyou can run Kubernetes clusters on-premise and manage them from the same\\ncontrol plane in Google Cloud, as if they were proper cloud clusters.\\n\\nIn fact, Anthos is truly multi-cloud. That means you can deploy Anthos\\nclusters to GKE and on-prem, but also AWS and Azure. On other cloud platforms\\nit uses the provider\'s Kubernetes distribution like\\n[AKS](https://learn.microsoft.com/en-us/azure/aks/), but you can still manage it\\nfrom GKE alongside your other clusters.\\n\\nIn addition to GKE, the toolbox includes:\\n\\n### Anthos Service Mesh (ASM)\\n\\nA networking solution based on [Istio](http://istio.io). This is sort of the\\nbackbone of the hybrid features of Anthos, as provided you\'ve configured a\\nhybrid mesh it allows applications deployed to the cloud to communicate with\\non-premise workloads automatically and without manual steps like opening\\nfirewalls. \\n\\nAll traffic that flows between microservices on the mesh is also automatically \\nencrypted with mTLS.\\n\\n### Anthos Config Managment (ACM)\\n\\nA way to sync git repos into a running cluster. Think GitOps here. Build a repo\\ncontaining all your Kubernetes manifests and sync them into your cluster, making\\ncluster maintenance easier.\\n\\nACM also includes a policy controller based on [Open Policy Agent Gatekeeper\\n(OPA)](https://open-policy-agent.github.io/gatekeeper/website/) which allows\\nplatform developers to build guardrails into developers\' workflows using\\npolicies like _\\"don\'t allow containers to run as root\\"_.\\n\\n### Anthos Connect Gateway\\n\\nThe connect gateway allows developers to log on to the cluster using `gcloud`\\nand `kubectl` commands, despite the cluster potentially being behind a\\nfirewall. From a user experience standpoint this is quite useful, as devs\\nwill be logged in to GCP using two factor authentication, and the same strong\\nauthentication allows you to access kubernetes on-premise.\\n\\nConnect Gateway also integrates with GCP groups, enabling RBAC in Kubernetes\\nto be assigned to groups instead of manually administered lists of users.\\n\\nCurrently the connect gateway only supports stateless requests, for example\\n`kubectl get pods` or `kubectl logs` (including `-f`). It does not support\\n`port-forward`, `exec` or `run`, which can be a bit annoying.\\n\\n## Summary\\n\\nAs you can see, the above tools gives us a lot of benefits.\\n\\n- Combined with the power of Google Cloud and\\nTerraform, they give us a good combination of flexibility through cloud services\\n- Ease the maintenance by using the tools that Anthos and Terraform supply us\\n- Eases the compliance and modernization burden by allowing a gradual or\\npartial migration to cloud, allowing parts to remain on-premise while still\\nretaining most of the modern tooling of the cloud\\n\\nThat\'s it for now! \ud83d\ude42 We\'ll be back with more details on how we run Anthos as\\nwell as the pros and cons we\'ve seen so far in the coming weeks. Stay tuned!\\n\\n_Disclaimer - Google, GKE and Anthos are trademarks of Google LLC and this website is not\\nendorsed by or affiliated with Google in any way._"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2023-10-6-welcome.md","title":"SKIP has a tech blog!","description":"SKIP is starting a tech blog! \ud83d\ude80\\n","date":"2023-10-06T00:00:00.000Z","formattedDate":"October 6, 2023","tags":[],"readingTime":0.795,"hasTruncateMarker":true,"authors":[{"name":"Espen Henriksen","title":"Product Owner and Platform Developer","url":"https://espen.dev","image_url":"https://github.com/esphen.png","imageURL":"https://github.com/esphen.png"}],"frontMatter":{"title":"SKIP has a tech blog!","description":"SKIP is starting a tech blog! \ud83d\ude80\\n","slug":"welcome","authors":[{"name":"Espen Henriksen","title":"Product Owner and Platform Developer","url":"https://espen.dev","image_url":"https://github.com/esphen.png","imageURL":"https://github.com/esphen.png"}],"tags":[],"image":"img/anthos-1.png","hide_table_of_contents":false},"prevItem":{"title":"Hybrid Kubernetes in production pt. 1","permalink":"/blog/hybrid-kubernetes-in-production-part-1"}},"content":"![Anthos in Google Cloud](../static/img/skip.png)\\n\\nSKIP is starting a tech blog! \ud83d\ude80\\n\\nOr call it a newsletter if you\'re tired of blogs \ud83e\udd2a\\n\\nOur first entry is already out, and it\'s about [why we chose\\nAnthos](/blog/2023-10-7-anthos-1.md) for hybrid cloud. We\'re working on more\\nentries into that series and other exciting topics, so stay tuned!\\n\\n\x3c!--truncate--\x3e\\n\\n# Huh? SKIP?\\n\\nSKIP is Statens Kartverks Infrastruktur Plattform, or in English, the\\nInfrastructure Platform of the Norwegian Mapping Authority.\\n\\nWe\'re the platform team at [Kartverket](https://kartverket.no). We tame\\nKubernetes and the Cloud. With SKIP, developers in Kartverket are empowered to\\nrun, not walk, using a comprehensive toolbox of modern cloud technology. Using\\nSKIP, developers can deploy applications to Kubernetes in a matter of minutes,\\nwhile still being able to use the tools they know and love.\\n\\n# Like what you see?\\n\\nWe\'re a small team, but we\'re growing fast. We\'re also hiring, so if you\'re\\ninterested in working with us, check out our [open\\npositions](https://www.kartverket.no/om-kartverket/jobb-i-kartverket)."}]}')}}]);