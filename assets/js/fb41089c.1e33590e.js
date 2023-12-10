"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[9834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(a),k=r,h=d["".concat(m,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(h,p(p({ref:t},u),{},{components:a})):n.createElement(h,p({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},47872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={hide_title:!0,sidebar_position:6,sidebar_label:"Datum & Uhrzeit",tags:["linguae","php","PHP","Funktionen","Datentyp","Datum","Uhrzeit"]},m=void 0,o={unversionedId:"Grundbefehle/Funktionen/datum",id:"Grundbefehle/Funktionen/datum",title:"datum",description:"# Datum & Uhrzeit",source:"@site/docs/php/Grundbefehle/Funktionen/datum.mdx",sourceDirName:"Grundbefehle/Funktionen",slug:"/Grundbefehle/Funktionen/datum",permalink:"/php/Grundbefehle/Funktionen/datum",draft:!1,editUrl:"https://p76ers.github.io/docs/php/Grundbefehle/Funktionen/datum.mdx",tags:[{label:"linguae",permalink:"/php/tags/linguae"},{label:"php",permalink:"/php/tags/php"},{label:"Funktionen",permalink:"/php/tags/funktionen"},{label:"Datentyp",permalink:"/php/tags/datentyp"},{label:"Datum",permalink:"/php/tags/datum"},{label:"Uhrzeit",permalink:"/php/tags/uhrzeit"}],version:"current",lastUpdatedAt:1702232675,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:6,frontMatter:{hide_title:!0,sidebar_position:6,sidebar_label:"Datum & Uhrzeit",tags:["linguae","php","PHP","Funktionen","Datentyp","Datum","Uhrzeit"]},sidebar:"tutorialSidebar",previous:{title:"Datentyp",permalink:"/php/Grundbefehle/Funktionen/datentyp"},next:{title:"Function",permalink:"/php/Grundbefehle/Funktionen/function"}},u={},d=[{value:"<code>checkdate()</code>",id:"checkdate",level:2},{value:"<code>date()</code>",id:"date",level:2},{value:"Datum",id:"datum",level:3},{value:"Tag",id:"tag",level:4},{value:"Monat",id:"monat",level:4},{value:"Jahr",id:"jahr",level:4},{value:"Uhrzeit",id:"uhrzeit",level:3},{value:"Stunde",id:"stunde",level:4},{value:"Minuten",id:"minuten",level:4},{value:"Sekunden",id:"sekunden",level:4},{value:"Timestamp",id:"timestamp",level:3},{value:"<code>mktime()</code>",id:"mktime",level:4},{value:"<code>strtotime()</code>",id:"strtotime",level:4},{value:"<code>time()</code>",id:"time",level:4}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},k=c("CardHeading"),h=c("CardChapter"),s={toc:d},N="wrapper";function g(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(N,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},s,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)(k,{mdxType:"CardHeading"},(0,n.kt)("h1",{id:"datum--uhrzeit"},"Datum & Uhrzeit")),(0,n.kt)("hr",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h2",{id:"checkdate"},(0,n.kt)("inlineCode",{parentName:"h2"},"checkdate()")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"checkdate(month, day, year)"))),(0,n.kt)("p",null,"Datums\xfcberpr\xfcfung"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},'var_dump(checkdate(2, 29, 2003));\n// -> bool(false)\necho "<br>";\nvar_dump(checkdate(2, 29, 2004));\n// -> bool(true)\n'))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h2",{id:"date"},(0,n.kt)("inlineCode",{parentName:"h2"},"date()")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"date(format,timestamp)"))),(0,n.kt)("p",null,"optional(",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trennzeichen f\xfcr Date definieren",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},"echo date('d.M.Y') . \"<br>\";\n// -> 09.Dec.2023\necho date('d/M/Y') . \"<br>\";\n// -> 09/Dec/2023\necho date('d M Y') . \"<br>\";\n// -> 09 Dec 2023\n"))),(0,n.kt)("li",{parentName:"ul"},"Datum mit ",(0,n.kt)("inlineCode",{parentName:"li"},"mktime()")," formatieren",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},"echo date('d.M.Y', mktime(0, 0, 0, 12, 32, 2019));\n// -> 01.Jan.2020\n"))),(0,n.kt)("li",{parentName:"ul"},"Datum mit ",(0,n.kt)("inlineCode",{parentName:"li"},"strtotime()")," formatieren",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},"echo date('d.m.Y', strtotime(\"22 December 2001\"));\n// -> 22.12.2001\n"))))),(0,n.kt)("br",null),(0,n.kt)(k,{mdxType:"CardHeading"},(0,n.kt)("h3",{id:"datum"},"Datum")),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"tag"},"Tag"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Als Zahl ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mit f\xfchrender Nummer",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("d");\n// z.B. -> 01\n'))),(0,n.kt)("li",{parentName:"ul"},"ohne f\xfchrende Nummer",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("j");\n// z.B. -> 1\n'))))),(0,n.kt)("li",{parentName:"ul"},"Als Text",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"abgek\xfcrzt 3 Buchstaben in Englisch",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("D");\n// z.B. -> Sat \n// Saturday\n'))),(0,n.kt)("li",{parentName:"ul"},"ausgeschriebener Wochentag in Englisch ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'// kleines L\necho date("l");\n// -> Saturday\n'))))),(0,n.kt)("li",{parentName:"ul"},"Wochentag, als Zahl von 0 (So.) bis 6 (Sa.)",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'  echo date("w");\n  // z.B. Samstag\n  // -> 6\n'))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"monat"},"Monat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Als Zahl",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mit f\xfchrender Null",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'  echo date("m");\n  // z.B. -> 01\n'))),(0,n.kt)("li",{parentName:"ul"},"ohne f\xfchrende Nummer",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("n");\n// z.B. -> 1\n'))))),(0,n.kt)("li",{parentName:"ul"},"Als Text ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"abgek\xfcrzt 3 Buchstaben in Englisch",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("M");\n// z.B. -> Dec\n// December\n'))),(0,n.kt)("li",{parentName:"ul"},"ausgeschriebener Monat in Englisch ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'  echo date("F");\n  // -> December\n'))))),(0,n.kt)("li",{parentName:"ul"},"Anzahl der Tage des Monats",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("t");\n// z.B. December\n// -> 31\n'))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"jahr"},"Jahr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jahr als zweistellige Zahl"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("y");\n// z.B. -> 23\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jahr als vierstellige Zahl"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("Y");\n// z.B. -> 2023\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tag des Jahres"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("z");\n// z.B. 09.12.2023\n// -> 342\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wochennummer des Jahres"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("W");\n// z.B. Kalenderwoche\n// -> 49\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Schaltjahr"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("L");\n// 1 = Schaltjahr \n// 0 = kein Schaltjahr\n'))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h3",{id:"uhrzeit"},"Uhrzeit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sommerzeit (gro\xdfes i)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("I");\n// 0 = Winterzeit\n// 1 = Sommerzeit\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Offset der Zeitzone gegen\xfcber GMT (London) in Sekunden"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'  echo date("Z");\n  // -> 3600\n'))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"stunde"},"Stunde"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Im 12h Format"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mit f\xfchrender 0",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("h");\n// z.B.\n// -> 04\n'))),(0,n.kt)("li",{parentName:"ul"},"ohne f\xfchrende 0",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("g");\n// z.B.\n// -> 4\n'))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Im 24h Format"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"mit f\xfchrender 0"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("H");\n// z.B.\n// -> 16\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ohne f\xfchrende 0"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'  echo date("G");\n  // z.B. 9 Uhr \n  // -> 9\n'))))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"minuten"},"Minuten"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mit f\xfchrender 0",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("i");\n// z.B. 9 \n// -> 09\n'))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"sekunden"},"Sekunden"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mit f\xfchrender Null",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'  echo date("s");\n  // z.B. 9 \n  // -> 09\n'))),(0,n.kt)("li",{parentName:"ul"},"Sekunden seit Beginn der UNIX-Epoche (1.1.1970)",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo date("U");\n// z.B. 09.12.2003 16:49\n// -> 1702136936\n'))))),(0,n.kt)("br",null),(0,n.kt)(k,{mdxType:"CardHeading"},(0,n.kt)("h3",{id:"timestamp"},"Timestamp")),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"mktime"},(0,n.kt)("inlineCode",{parentName:"h4"},"mktime()")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"mktime(hour, minute, second, month, day, year, is_dst)"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"is_dst")," Angabe, ob Werte in Sommerzeitformat vorliegen")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"echo mktime(0, 0, 0, 12, 32, 2019);\n// 1577833200\n"))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"strtotime"},(0,n.kt)("inlineCode",{parentName:"h4"},"strtotime()")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Umwandlung Datum / Uhrzeit zu UNIX-Timestamp "),(0,n.kt)("li",{parentName:"ul"},"Ausgabe in Sekunden",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},'echo (strtotime("now") . "<br>");\necho (strtotime("3 October 2005") . "<br>");\necho (strtotime("+5 hours") . "<br>");\necho (strtotime("+1 week") . "<br>");\necho (strtotime("+1 week 3 days 7 hours 5 seconds") . "<br>");\necho (strtotime("next Monday") . "<br>");\necho (strtotime("last Sunday") . "<br>");\necho strtotime("22 December 2001");\n'))))),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"CardChapter"},(0,n.kt)("h4",{id:"time"},(0,n.kt)("inlineCode",{parentName:"h4"},"time()")),(0,n.kt)("p",null,"  Aktueller Zeitstempel in Sekunden (01.01.1970 um 00:00:00 Uhr)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"echo time();\n// z.B. 09.12.2003 16:49\n// -> 1702136936\n"))),(0,n.kt)("br",null))}g.isMDXComponent=!0}}]);