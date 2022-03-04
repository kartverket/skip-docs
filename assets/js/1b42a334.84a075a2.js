"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[864],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3641:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:6},s="Login og tilgang til cluster milj\xf8er",l={unversionedId:"getting-started/login-and-access-to-cluster",id:"getting-started/login-and-access-to-cluster",isDocsHomePage:!1,title:"Login og tilgang til cluster milj\xf8er",description:"`bash",source:"@site/docs/getting-started/login-and-access-to-cluster.md",sourceDirName:"getting-started",slug:"/getting-started/login-and-access-to-cluster",permalink:"/skip-docs/docs/getting-started/login-and-access-to-cluster",editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/getting-started/login-and-access-to-cluster.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Kubernetes manifestfiler",permalink:"/skip-docs/docs/getting-started/kubernetes-manifests"},next:{title:"Oppsett og bruk av Harbor",permalink:"/skip-docs/docs/getting-started/harbor"}},u=[],p={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"login-og-tilgang-til-cluster-milj\xf8er"},"Login og tilgang til cluster milj\xf8er"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl vsphere login --server=<ip/domene> -u <brukernavn> --tanzu-kubernetes-cluster-namespace <namespace> --tanzu-kubernetes-cluster-name <cluster>\n")),(0,i.kt)("p",null,"NB! Du vil f\xe5 beskjed om at du kan bytte context vha. ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config use-context\ncontextname"),", men det vil resultere i context bytte uten autorisering for\nclusteret. Dvs. du vil ikke ha de rette tilgangene uten \xe5 logge inn p\xe5 nytt ved\n\xe5 spesifisere hvilket cluster du logger inn p\xe5."))}g.isMDXComponent=!0}}]);