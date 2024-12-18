"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[9193],{53880:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=o(74848),a=o(28453);const i={},n="Logs with Loki",r={id:"observability/logs-with-Loki",title:"Logs with Loki",description:"SKIP\u2019s LGTM stack is set up to automatically collect logs from all applications running in our Kubernetes clusters. There is nothing in particular you as a developer need to configure or set in order to achieve this, apart from ensuring that your application logs to stdout . These are picked up by the Grafana Agent through the PodLogs custom resource, which specifies which namespaces to collect logs for (all of them in this case) and a set of relabeling rules to ensure that we have a common set of labels for use in searching, dashboards and alerting.",source:"@site/docs/10-observability/05-logs-with-Loki.md",sourceDirName:"10-observability",slug:"/observability/logs-with-Loki",permalink:"/docs/observability/logs-with-Loki",draft:!1,unlisted:!1,editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/10-observability/05-logs-with-Loki.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alerting with Grafana",permalink:"/docs/observability/alerting-with-grafana"},next:{title:"Recording and alerting rules",permalink:"/docs/observability/recording-and-alerting-rules"}},l={},c=[];function h(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"logs-with-loki",children:"Logs with Loki"}),"\n",(0,s.jsxs)(t.p,{children:["SKIP\u2019s LGTM stack is set up to automatically collect logs from all applications running in our Kubernetes clusters. There is nothing in particular you as a developer need to configure or set in order to achieve this, apart from ensuring that your application logs to ",(0,s.jsx)(t.code,{children:"stdout"})," . These are picked up by the Grafana Agent through the ",(0,s.jsx)(t.code,{children:"PodLogs"})," custom resource, which specifies which namespaces to collect logs for (all of them in this case) and a set of relabeling rules to ensure that we have a common set of labels for use in searching, dashboards and alerting."]}),"\n",(0,s.jsx)(t.p,{children:"Logs are collected and stored in Loki, which is backed by an on-premise S3-compatible Scality storage bucket system, one for each cluster. Each Loki instance is defined as a data source in Grafana, which provides the tools for search queries, dashboards and alerting."}),"\n",(0,s.jsxs)(t.p,{children:["For an overview of the Explore section as it pertains to Loki, see ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/explore/logs-integration/",children:"https://grafana.com/docs/grafana/latest/explore/logs-integration/"})," . This and other pages outline the features and how to use it efficiently in relatively good detail, so we shall not attempt to reproduce such a guide here, only to point out a few things as they apply to our own setup."]}),"\n",(0,s.jsxs)(t.p,{children:["By necessity, the default label set is rather limited compared to what some of you might wish. This is because a large selection of labels can be extremely detrimental to performance - see ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/loki/latest/get-started/labels/bp-labels/",children:"https://grafana.com/docs/loki/latest/get-started/labels/bp-labels/"})," for an explanation."]}),"\n",(0,s.jsx)(t.p,{children:"Hence, it is recommended to use filter expressions instead. You can filter on log lines containing/not containing a given text, regex expression and a host of other possibilities."}),"\n",(0,s.jsx)(t.p,{children:"The search function is also equipped with a JSON parser which makes it easier to filter on the fields you want."}),"\n",(0,s.jsx)(t.p,{children:"You can choose between two modes of searching: typing a query manually, or building a query through Grafana\u2019s graphical query builder. As long as the query you have built or typed is valid, you can seamlessly switch between the two modes."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Example: Using JSON parser to extract fields and filtering on method \u201cPOST\u201d",src:o(64691).A+"",width:"1647",height:"339"}),"\nAbove: Using JSON parser to extract fields and filtering on method \u201cPOST\u201d"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},64691:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/loki_example-7f11beee6e1e6ae6a5dc9c1ad0ed245f.png"},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>r});var s=o(96540);const a={},i=s.createContext(a);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);