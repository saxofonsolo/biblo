"use strict";(self.webpackChunk_biblo_docs=self.webpackChunk_biblo_docs||[]).push([[538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:b,groupId:d,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=b??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[x,w]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=d){const e=y[d];null!=e&&e!==x&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==x&&(j(t),w(a),null!=d&&N(d,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},2418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_position:3},s="Getting started",p={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"\ud83d\udcbe Installation",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/biblo/docs/getting-started",draft:!1,editUrl:"https://github.com/larsmunkholm/biblo/tree/main/packages/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Try it out",permalink:"/biblo/docs/try-it-out"},next:{title:"\ud83d\udcc2 The Biblo file",permalink:"/biblo/docs/biblo-files/the-biblo-file"}},u={},c=[{value:"\ud83d\udcbe Installation",id:"-installation",level:2},{value:"\ud83c\udd71\ufe0f Babel",id:"\ud83c\udd71\ufe0f-babel",level:2},{value:"\u24c2\ufe0f Metro",id:"\u24dc\ufe0f-metro",level:2},{value:"\ud83c\udfaf TypeScript",id:"-typescript",level:2}],m={toc:c};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("h2",{id:"-installation"},"\ud83d\udcbe Installation"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This package requires that you use React Native version ",(0,r.kt)("strong",{parentName:"p"},"0.70.0")," or newer."),(0,r.kt)("p",{parentName:"admonition"},"Or if you're using Expo, make sure it's version ",(0,r.kt)("strong",{parentName:"p"},"47.0.0")," or newer.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"\ud83d\udce6 npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @biblo/react-native @biblo/babel-plugin\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"\ud83e\uddf6 Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @biblo/react-native @biblo/babel-plugin\n")))),(0,r.kt)("p",null,"The solution is implemented in JavaScript so no native module linking is required."),(0,r.kt)("h2",{id:"\ud83c\udd71\ufe0f-babel"},"\ud83c\udd71\ufe0f Babel"),(0,r.kt)("p",null,"To enable Biblo to list your examples in the same order you export them, add ",(0,r.kt)("inlineCode",{parentName:"p"},'"@biblo/babel-plugin"')," as a plugin in your ",(0,r.kt)("strong",{parentName:"p"},"babel.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},'module.exports = {\n    plugins: ["@biblo/babel-plugin"],\n};\n')),(0,r.kt)("h2",{id:"\u24dc\ufe0f-metro"},"\u24c2\ufe0f Metro"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're using ",(0,r.kt)("strong",{parentName:"p"},"Expo")," (version 47.0.0 or newer) you can skip this step as they have already enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable_allowRequireContext"))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is supported since ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/releases/tag/v0.72.1"},"version ",(0,r.kt)("strong",{parentName:"a"},"0.72.1")," of Metro"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#0700"},"version ",(0,r.kt)("strong",{parentName:"a"},"0.70.0")," of React Native"))),(0,r.kt)("p",null,"Biblo uses ",(0,r.kt)("inlineCode",{parentName:"p"},"require.context")," to import all files that end in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".biblo.tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".biblo.jsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".biblo.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".biblo.js"))),(0,r.kt)("p",null,"You need to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable_allowRequireContext")," in your ",(0,r.kt)("strong",{parentName:"p"},"metro.config.js")," file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="metro.config.js"',title:'"metro.config.js"'},'const { getDefaultConfig } = require("expo/metro-config");\n\nconst config = getDefaultConfig(__dirname);\n// highlight-next-line\nconfig.transformer.unstable_allowRequireContext = true;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="metro.config.js"',title:'"metro.config.js"'},"module.exports = (async () => {\n    return {\n        transformer: {\n            // highlight-next-line\n            unstable_allowRequireContext: true,\n        },\n    };\n})();\n")),(0,r.kt)("h2",{id:"-typescript"},"\ud83c\udfaf TypeScript"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"require.context")," is still experimental in Metro/React Native, so they haven't added it to their TypeScript declaration."),(0,r.kt)("p",null,"Luckily, you can fix that by placing the following ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," in your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport "@biblo/react-native/lib/interfaces/metroRequire.d";\n\nconst components = bibloImporter(\n    require.context("/", true, /\\.biblo\\.[tj]sx?$/),\n);\n')))}b.isMDXComponent=!0}}]);