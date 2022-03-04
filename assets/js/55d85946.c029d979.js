"use strict";(self.webpackChunkskip_docs=self.webpackChunkskip_docs||[]).push([[441],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,k=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:8},l="Oppsett og bruk av Vault",p={unversionedId:"getting-started/vault",id:"getting-started/vault",isDocsHomePage:!1,title:"Oppsett og bruk av Vault",description:"Databasepassord m\xe5 ikke sjekkes inn i kode repository. Dette gjelder ikke bare",source:"@site/docs/getting-started/vault.md",sourceDirName:"getting-started",slug:"/getting-started/vault",permalink:"/docs/getting-started/vault",editUrl:"https://github.com/kartverket/skip-docs/edit/main/docs/getting-started/vault.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Oppsett og bruk av Harbor",permalink:"/docs/getting-started/harbor"},next:{title:"Bruk av Helm",permalink:"/docs/getting-started/helm"}},d=[{value:"Legge inn secret",id:"legge-inn-secret",children:[]},{value:"Hente ut secret",id:"hente-ut-secret",children:[]}],u={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"oppsett-og-bruk-av-vault"},"Oppsett og bruk av Vault"),(0,i.kt)("p",null,"Databasepassord m\xe5 ikke sjekkes inn i kode repository. Dette gjelder ikke bare\ndatabasepassord, men det meste som man ikke vil skal v\xe6re allment tilgjengelig.\nSKIP platformen l\xf8ser dette ved \xe5 ta i bruk Hashicorp Vault, et system for\n\xe5 lagre, sikre og kontrollere tilgang til hemmeligheter."),(0,i.kt)("p",null,"For \xe5 f\xe5 dette til \xe5 virke er det en del konfigurasjon som m\xe5 gj\xf8res, og det kan\nv\xe6re det er litt annerledes \xe5 jobbe med i utviklingsmilj\xf8 lokalt i forhold til\nSKIP platformen."),(0,i.kt)("h2",{id:"legge-inn-secret"},"Legge inn secret"),(0,i.kt)("p",null,"Det f\xf8rste skrittet mot \xe5 forvare sikkerhetene trygt er \xe5 sjekke om du har\ntilgang til Vault. G\xe5 til ",(0,i.kt)("a",{parentName:"p",href:"https://vault.statkart.no"},"https://vault.statkart.no")," og fors\xf8k \xe5 logge deg inn."),(0,i.kt)("p",null,"Dersom du kommer inn p\xe5 Vault kan du trykke p\xe5 ",(0,i.kt)("inlineCode",{parentName:"p"},"skip_produksjon"),'\nhemmelighetsmotoren p\xe5 forsiden og s\xe5 blir du presentert med tokenene som din\nbruker har tilgang til. Her kan du lage en hemmelighet ved \xe5 trykke "Create\nsecret" \xf8verst til h\xf8yre. Bruk denne skjermen til \xe5 fylle ut "path" til\nhemmeligheten (bruk mapper for \xe5 organisere, for eksempel\n',(0,i.kt)("inlineCode",{parentName:"p"},"projects/yourproject/db"),") og dataen hemmeligheten skal bruke."),(0,i.kt)("p",null,'For \xe5 senere f\xe5 tilgang til denne dataen er du ogs\xe5 avhengig av \xe5 lage en vault\ntoken. Dette er "passordet" som applikasjonen bruker for \xe5 f\xe5 tilgang til\nhemmelighetene. For \xe5 generere en token, begynn med \xe5 ',(0,i.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/vault/getting-started-install?in=vault/getting-started"},"installere vault\nCLI-et"),".\nDeretter sett f\xf8lgende verdi i din ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.profile")," for \xe5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export VAULT_ADDR=https://vault.statkart.no\n")),(0,i.kt)("p",null,'N\xe5 kan du g\xe5 i web-grensesnittet og klikke p\xe5 menyen \xf8verst til h\xf8yre og velge\n"Copy token". Dette tokenet bruker du for \xe5 logge inn med CLI.'),(0,i.kt)("p",null,"N\xe5 kan du kj\xf8re f\xf8lgende kommando for \xe5 logge inn og generere en token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vault login -method=userpass username=<your username>\n$ vault token create\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Merk")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Dersom du f\xe5r en feilmelding om at sertfikatet ikke er gyldig m\xe5 du legge til\n",(0,i.kt)("inlineCode",{parentName:"p"},"-tls-skip-verify")," p\xe5 alle ",(0,i.kt)("inlineCode",{parentName:"p"},"vault")," CLI-kommandoer eller\n",(0,i.kt)("inlineCode",{parentName:"p"},"export VAULT_SKIP_VERIFY=true")," i din ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.profile"),". Sistnevnte anbefales ikke\nmed mindre du skal kj\xf8re mange kommandoer mot vault."))),(0,i.kt)("p",null,"Ta vare p\xe5 tokenet som ble generert og bruk det n\xe5r du confer opp applikasjonen\ndin."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Obs!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Pass p\xe5 at tokenet ikke blir eksponert noe sted det ikke skal v\xe6re, behandle\ntokenet som et passord."))),(0,i.kt)("h2",{id:"hente-ut-secret"},"Hente ut secret"),(0,i.kt)("p",null,'Det er flere m\xe5ter \xe5 hente ut secrets p\xe5, det de alle har til felles er at de\nbruker applikasjonens "Vault Token" for \xe5 autentisere seg mot Vault. M\xe5ten dette\ngj\xf8res er \xe5 sende det med p\xe5 sp\xf8rringen som en header, noe man kan se p\xe5\neksempelet under som demonstrerer hvordan man kan hente ut secrets med en enkel\nHTTP-sp\xf8rring.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Hente ut secret med HTTP"',title:'"Hente',ut:!0,secret:!0,med:!0,'HTTP"':!0},'$ curl \\\n  --header "X-Vault-Token: ..." \\\n  --request POST \\\n  --data @payload.json \\\n  https://127.0.0.1:8200/v1/secret/config\n')),(0,i.kt)("p",null,"Men \xe5 bruke HTTP-sp\xf8rringer hver gang er ikke like smidig som det kunne v\xe6rt, s\xe5\ndet finnes bedre l\xf8sninger for dette. Eksempelvis finnes det et ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-cloud-vault"},"Spring Cloud\nVault bibliotek"),". Med dette\nbiblioteket kan man bruke ",(0,i.kt)("inlineCode",{parentName:"p"},"@Value"),"-annotasjoner for \xe5 gj\xf8re uthentingen av\nverdier enklere."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'{8,11,21} title="Hente ut secret med Spring Could Vault"',"{8,11,21}":!0,title:'"Hente',ut:!0,secret:!0,med:!0,Spring:!0,Could:!0,'Vault"':!0},'public class VaultDemoOrderServiceApplication  {\n\n  private static final Logger logger = LoggerFactory.getLogger(VaultDemoOrderServiceApplication.class);\n\n  @Autowired\n  private SessionManager sessionManager;\n\n  @Value("${spring.datasource.username}")\n  private String dbUser;\n\n  @Value("${spring.datasource.password}")\n  private String dbPass;\n\n  public static void main(String[] args) {\n    SpringApplication.run(VaultDemoOrderServiceApplication.class, args);\n  }\n\n  @PostConstruct\n  public void initIt() throws Exception {\n    logger.info("Got Vault Token: " + sessionManager.getSessionToken().getToken());\n    logger.info("Got DB User: " + dbUser);\n  }\n}\n')),(0,i.kt)("p",null,"Hashicorp har ogs\xe5 laget en demoapplikasjon hvor man kan se hvordan dette\nfungerer i praksis. ",(0,i.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/vault/eaas-spring-demo"},"Du finner applikasjonen\nher"),"."))}g.isMDXComponent=!0}}]);