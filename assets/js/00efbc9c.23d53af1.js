"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Hybrid Kubernetes in production pt. 1",description:"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\n",slug:"hybrid-kubernetes-in-production-part-1",authors:[{name:"Espen Henriksen",title:"Product Owner and Platform Developer",url:"https://espen.dev",image_url:"https://github.com/esphen.png"}],tags:["anthos","kubernetes","hybrid"],image:"img/anthos-1.png",hide_table_of_contents:!1},a=void 0,s={permalink:"/blog/hybrid-kubernetes-in-production-part-1",source:"@site/blog/2023-10-7-anthos-1.md",title:"Hybrid Kubernetes in production pt. 1",description:"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\n",date:"2023-10-07T00:00:00.000Z",formattedDate:"October 7, 2023",tags:[{label:"anthos",permalink:"/blog/tags/anthos"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"hybrid",permalink:"/blog/tags/hybrid"}],readingTime:7.255,hasTruncateMarker:!0,authors:[{name:"Espen Henriksen",title:"Product Owner and Platform Developer",url:"https://espen.dev",image_url:"https://github.com/esphen.png",imageURL:"https://github.com/esphen.png"}],frontMatter:{title:"Hybrid Kubernetes in production pt. 1",description:"One of the biggest challenges that we hear is the challenge of running hybridized K8s workloads. Here we share our experience using Anthos for hybrid cloud\n",slug:"hybrid-kubernetes-in-production-part-1",authors:[{name:"Espen Henriksen",title:"Product Owner and Platform Developer",url:"https://espen.dev",image_url:"https://github.com/esphen.png",imageURL:"https://github.com/esphen.png"}],tags:["anthos","kubernetes","hybrid"],image:"img/anthos-1.png",hide_table_of_contents:!1},nextItem:{title:"SKIP has a tech blog!",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Anthos in Google Cloud",src:n(5124).Z,width:"3618",height:"2994"})),(0,o.kt)("p",null,"Over the years we talked with many other public sector companies about their\nexperiences in running containers in production. One of the biggest challenges\nthat we hear again and again is the challenge of running hybridized workloads,\nor how to have some workloads running on-premise and some in the the cloud in a\ngood way. "),(0,o.kt)("p",null,"In this newsletter-series we will share some of our experiences solving this\nissue by running Anthos on VMWare (or GKE on-prem, if you prefer) tied together\nto the cloud in Kartverket using hybrid mesh. We will also discuss the reasons\nwe went with Anthos and pros and cons we have experienced so far."))}h.isMDXComponent=!0},5124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/anthos-1-7de3d78d58e53af12f241a38a12f68ef.png"}}]);