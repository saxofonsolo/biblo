"use strict";(self.webpackChunk_biblo_docs=self.webpackChunk_biblo_docs||[]).push([[704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:b,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[x,O]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=b){const e=y[b];null!=e&&e!==x&&v.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==x&&(w(t),O(r),null!=b&&N(b,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:P,onClick:E},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},7394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_position:1},s="\ud83d\udd24 Simple markup",p={unversionedId:"addons/simple-markup",id:"addons/simple-markup",title:"\ud83d\udd24 Simple markup",description:"Biblo addon for parsing simple markup.",source:"@site/docs/addons/simple-markup.mdx",sourceDirName:"addons",slug:"/addons/simple-markup",permalink:"/docs/addons/simple-markup",draft:!1,editUrl:"https://github.com/saxofonsolo/biblo/tree/main/packages/docs/docs/addons/simple-markup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Biblo file extension",permalink:"/docs/customization/biblo-file-extension"}},u={},d=[{value:"Bold text",id:"bold-text",level:4},{value:"Italic text",id:"italic-text",level:4},{value:"Strike through text",id:"strike-through-text",level:4},{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Options",id:"options",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-simple-markup"},"\ud83d\udd24 Simple markup"),(0,a.kt)("p",null,"Biblo addon for parsing simple markup."),(0,a.kt)("h4",{id:"bold-text"},"Bold text"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"Lorem **bold** ipsum"')," \u27a1\ufe0f Lorem ",(0,a.kt)("strong",{parentName:"p"},"bold")," ipsum"),(0,a.kt)("h4",{id:"italic-text"},"Italic text"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"Lorem _italic_ ipsum"')," \u27a1\ufe0f Lorem ",(0,a.kt)("em",{parentName:"p"},"italic")," ipsum"),(0,a.kt)("h4",{id:"strike-through-text"},"Strike through text"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"Lorem ~~strike through~~ ipsum"')," \u27a1\ufe0f Lorem ",(0,a.kt)("del",{parentName:"p"},"strike through")," ipsum"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",label:"\ud83d\udce6 npm",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @biblo/addon-simple-markup\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"\ud83e\uddf6 Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @biblo/addon-simple-markup\n")))),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"Import the addon and add it to ",(0,a.kt)("inlineCode",{parentName:"p"},"BibloProvider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{7-8,17-18}","{7-8,17-18}":!0},'import React from "react";\nimport {\n    bibloImporter,\n    BibloProvider,\n} from "@biblo/react-native";\n\n// Import the addon\nimport BibloAddonSimpleMarkup from "@biblo/addon-simple-markup";\n\nconst components = bibloImporter(\n    require.context("/", true, /\\.biblo\\.[tj]sx?$/),\n);\n\nexport default function App() {\n    return (\n        <BibloProvider\n            // Apply the addon\n            addons={[BibloAddonSimpleMarkup]}\n            components={components}\n        >\n            ...\n        </BibloProvider>\n    );\n}\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"The default markup is set with"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**")," for ",(0,a.kt)("strong",{parentName:"li"},"bold")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_")," for ",(0,a.kt)("em",{parentName:"li"},"italic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~~")," for ",(0,a.kt)("del",{parentName:"li"},"strike through"))),(0,a.kt)("p",null,"This can be changed by passing an object to ",(0,a.kt)("inlineCode",{parentName:"p"},"BibloAddonSimpleMarkup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3-7}","{3-7}":!0},'<BibloProvider\n    addons={[\n        BibloAddonSimpleMarkup({\n            bold: "*",\n            italic: "__",\n            strikeThrough: "--",\n        }),\n    ]}\n    components={components}\n>\n    ...\n</BibloProvider>\n')))}c.isMDXComponent=!0}}]);