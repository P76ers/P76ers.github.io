"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[6954],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>b});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return n?t.createElement(b,i(i({ref:r},c),{},{components:n})):t.createElement(b,i({ref:r},c))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37542:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var t=n(3905);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={hide_title:!0,sidebar_position:2,sidebar_label:"Array und Variablen",tags:["linguae","php","PHP","Funktionen","Array und Variablen"]},o=void 0,u={unversionedId:"Grundbefehle/Funktionen/arrayVariablen",id:"Grundbefehle/Funktionen/arrayVariablen",title:"arrayVariablen",description:"# Array und Variablen",source:"@site/docs/php/Grundbefehle/Funktionen/arrayVariablen.mdx",sourceDirName:"Grundbefehle/Funktionen",slug:"/Grundbefehle/Funktionen/arrayVariablen",permalink:"/php/Grundbefehle/Funktionen/arrayVariablen",draft:!1,editUrl:"https://p76ers.github.io/docs/php/Grundbefehle/Funktionen/arrayVariablen.mdx",tags:[{label:"linguae",permalink:"/php/tags/linguae"},{label:"php",permalink:"/php/tags/php"},{label:"Funktionen",permalink:"/php/tags/funktionen"},{label:"Array und Variablen",permalink:"/php/tags/array-und-variablen"}],version:"current",lastUpdatedAt:1702145827,formattedLastUpdatedAt:"Dec 9, 2023",sidebarPosition:2,frontMatter:{hide_title:!0,sidebar_position:2,sidebar_label:"Array und Variablen",tags:["linguae","php","PHP","Funktionen","Array und Variablen"]},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/php/Grundbefehle/Funktionen/array"},next:{title:"Datei",permalink:"/php/Grundbefehle/Funktionen/datei"}},c={},d=[{value:"<code>empty()</code>",id:"empty",level:2},{value:"<code>isset()</code>",id:"isset",level:2},{value:"<code>unset()</code>",id:"unset",level:2},{value:"<code>print_r()</code>",id:"print_r",level:2},{value:"<code>var_dump()</code>",id:"var_dump",level:2}],s=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",r)},m=s("CardHeading"),b=s("CardChapter"),y={toc:d},f="wrapper";function k(e){var{components:r}=e,n=i(e,["components"]);return(0,t.kt)(f,l(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},y,n),{components:r,mdxType:"MDXLayout"}),(0,t.kt)(m,{mdxType:"CardHeading"},(0,t.kt)("h1",{id:"array-und-variablen"},"Array und Variablen")),(0,t.kt)("hr",null),(0,t.kt)(b,{mdxType:"CardChapter"},(0,t.kt)("h2",{id:"empty"},(0,t.kt)("inlineCode",{parentName:"h2"},"empty()")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"liefert ",(0,t.kt)("inlineCode",{parentName:"li"},"true"),", wenn Variable nicht definiert, leer oder 0 ist.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'$var = 10;\n\nif (empty($var)) {\n  echo "empty";\n} else {\n  echo "not empty";\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'$var = array(rand(0, 10));\n\nif (empty($var)) {\n  echo "empty";\n} else {\n  echo "not empty";\n}\n'))),(0,t.kt)("br",null),(0,t.kt)(b,{mdxType:"CardChapter"},(0,t.kt)("h2",{id:"isset"},(0,t.kt)("inlineCode",{parentName:"h2"},"isset()")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Pr\xfcfung, ob Variable oder Array vorhanden"),(0,t.kt)("li",{parentName:"ul"},"liefert ",(0,t.kt)("inlineCode",{parentName:"li"},"true"),"/",(0,t.kt)("inlineCode",{parentName:"li"},"false"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'if (isset($_GET["zahl"])) {\n\n  echo ($_GET["zahl"]);\n}\n'))),(0,t.kt)("br",null),(0,t.kt)(b,{mdxType:"CardChapter"},(0,t.kt)("h2",{id:"unset"},(0,t.kt)("inlineCode",{parentName:"h2"},"unset()")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Variable oder Array l\xf6schen / zur\xfccksetzen")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$var = 10;\n\necho $var;\nunset($var);\n// highlight-next-line-error\necho $var;\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$arr = array(rand(0, 10));\n\nprint_r($arr);\nunset($arr);\n// highlight-next-line-error\nprint_r($arr);\n"))),(0,t.kt)("br",null),(0,t.kt)(b,{mdxType:"CardChapter"},(0,t.kt)("h2",{id:"print_r"},(0,t.kt)("inlineCode",{parentName:"h2"},"print_r()")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Ausgabe von Werten"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Variablen"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$var1 = 11;\n\nprint_r($var1);\n"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Array"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-php"},"  $arr1 = array(rand(0, 10));\n\n  print_r($arr1);\n"))))))),(0,t.kt)("br",null),(0,t.kt)(b,{mdxType:"CardChapter"},(0,t.kt)("h2",{id:"var_dump"},(0,t.kt)("inlineCode",{parentName:"h2"},"var_dump()")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Ausgabe Datentyp und Wert",(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-php"},"var_dump($var1);\nvar_dump($var2, $var3);\n"))))),(0,t.kt)("br",null))}k.isMDXComponent=!0}}]);