(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{104:function(t,e,r){var n={"./components/atoms/Button/Button.biblo.tsx":197,"./components/atoms/Paragraph/Paragraph.biblo.tsx":191,"./components/atoms/Separator/Separator.biblo.tsx":198,"./components/atoms/Skeleton/Skeleton.biblo.tsx":192,"./components/atoms/SkeletonParagraph/SkeletonParagraph.biblo.tsx":199};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id=104},148:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return S}));var n=r(0),i=r(33),o=r(15),a=r(138),c=r(139),u=r(209),s=r(208),l=r(91),d=r(7),p=r(206),f=r(9);function g(){var t=Object(p.default)();return Object(f.jsxs)(d.default,{style:{padding:15},children:[Object(f.jsx)(d.default,{style:{marginBottom:15},children:Object(f.jsx)(l.default,{title:"Basic viewport",onPress:function(){return t("/demo/basic-viewport")}})}),Object(f.jsx)(d.default,{style:{marginBottom:15},children:Object(f.jsx)(l.default,{title:"React Navigation",onPress:function(){return t("/demo/react-navigation")}})})]})}var b=r(38),h=Object(b.bibloImporter)(r(104));function O(){var t=Object(n.useRef)(null);return Object(f.jsxs)(b.BibloProvider,{components:h,readerOptions:{scrollViewProps:{ref:t},onMount:function(){var e;return null==(e=t.current)?void 0:e.scrollTo({x:0,y:0,animated:!1})}},children:[Object(f.jsx)(d.default,{style:{backgroundColor:"white",height:"50%"},children:Object(f.jsx)(b.BibloIndex,{})}),Object(f.jsx)(d.default,{style:{height:"50%",backgroundColor:"white",borderTopWidth:1,borderTopColor:"#000"},children:Object(f.jsx)(b.BibloReader,{})})]})}var j=r(132),m=r(25),v=function(){var t=Object(m.useRoute)().params;return null!=t&&t.file?Object(f.jsx)(b.BibloReader,{file:t.file}):null},y=Object(b.bibloImporter)(r(104)),P=Object(s.default)();function w(){var t=Object(m.useNavigation)().navigate;return Object(f.jsx)(b.BibloProvider,{components:y,addons:[j.default],onSelectFile:function(e){t({name:"reader",params:{file:e}})},children:Object(f.jsxs)(P.Navigator,{children:[Object(f.jsx)(P.Screen,{name:"index",component:b.BibloIndex,options:{title:"React Navigation"}}),Object(f.jsx)(P.Screen,{name:"reader",component:v,options:{title:"Biblo file"}})]})})}var x=Object(s.default)();function S(){return Object(f.jsx)(a.default,{style:{flex:1,maxHeight:i.default.get("window").height,paddingTop:"android"===o.default.OS?c.default.currentHeight:0,backgroundColor:"white"},children:Object(f.jsx)(u.default,{linking:{prefixes:[],config:{screens:{Home:"/demo",BasicViewport:"/demo/basic-viewport",ReactNavigation:"/demo/react-navigation"}}},children:Object(f.jsxs)(x.Navigator,{children:[Object(f.jsx)(x.Screen,{name:"Home",component:g}),Object(f.jsx)(x.Screen,{name:"BasicViewport",options:{title:"Basic viewport"},component:O}),Object(f.jsx)(x.Screen,{name:"ReactNavigation",options:{headerShown:!1},component:w})]})})})}},158:function(t,e,r){t.exports=r(196)},191:function(t,e,r){"use strict";r.r(e),r.d(e,"Default",(function(){return l})),r.d(e,"Italic",(function(){return d})),r.d(e,"Tiny",(function(){return p})),r.d(e,"Small",(function(){return f})),r.d(e,"Large",(function(){return g})),r.d(e,"Larger",(function(){return b})),r.d(e,"ExtraLarge",(function(){return h})),r.d(e,"Bold",(function(){return O})),r.d(e,"WithOpacity",(function(){return j})),r.d(e,"Colored",(function(){return m})),r.d(e,"Centered",(function(){return v})),r.d(e,"LineHeight125",(function(){return y})),r.d(e,"LineHeight1",(function(){return P})),r.d(e,"LineHeight15",(function(){return w})),r.d(e,"LineHeight2",(function(){return x})),r.d(e,"__namedExportsOrder",(function(){return S}));var n=r(4),i=r.n(n),o=(r(0),r(28)),a=r(9);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var u="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolores id impedit ipsam laboriosam necessitatibus praesentium reiciendis sunt veniam veritatis voluptas voluptatum. Ipsam nesciunt ratione velit! Delectus dolorem est repudiandae.";e.default={title:"Paragraph",subtitle:"For _text nodes_",description:"Use ~~that~~ this for **texts** of all sizes, weights and colors.\n\n\u2022 Paragraphs\n\u2022 Headlines\n\u2022 Comments\n\u2022 and so on...",tags:["typography","text"],props:{children:"Lorem ipsum dolor sit amet."}};var s=function(t){return Object(a.jsx)(o.Paragraph,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t))},l=s.bind({}),d=s.bind({});d.props={italic:!0};var p=s.bind({});p.description="Very small text. Use with caution.",p.props={size:o.ParagraphSize.Tiny};var f=s.bind({});f.props={size:o.ParagraphSize.Small};var g=s.bind({});g.props={size:o.ParagraphSize.Large};var b=s.bind({});b.props={size:o.ParagraphSize.Larger};var h=s.bind({});h.props={size:o.ParagraphSize.ExtraLarge};var O=s.bind({});O.props={weight:o.ParagraphWeight.Bold};var j=s.bind({});j.props={opacity:.333};var m=s.bind({});m.props={color:"red"};var v=s.bind({});v.props={center:!0};var y=s.bind({});y.title="Line height 1.25",y.description="This is the default line height.",y.props={children:u};var P=s.bind({});P.title="Line height 1",P.props={children:u,lineHeight:1};var w=s.bind({});w.title="Line height 1.5",w.description="Use this for longer texts",w.props={children:u,lineHeight:1.5};var x=s.bind({});x.title="Line height 2",x.props={children:u,lineHeight:2};var S=["Default","Italic","Tiny","Small","Large","Larger","ExtraLarge","Bold","WithOpacity","Colored","Centered","LineHeight125","LineHeight1","LineHeight15","LineHeight2"]},192:function(t,e,r){"use strict";r.r(e),r.d(e,"Default",(function(){return l})),r.d(e,"Colored",(function(){return d})),r.d(e,"WithoutOpacity",(function(){return p})),r.d(e,"WithCustomOpacity",(function(){return f})),r.d(e,"WithCustomRadius",(function(){return g})),r.d(e,"__namedExportsOrder",(function(){return b}));var n=r(4),i=r.n(n),o=(r(0),r(64)),a=r(9);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default={title:"Skeleton",tags:["indicator"],props:{width:200,height:100}};var s=function(t){return Object(a.jsx)(o.Skeleton,u({},t))},l=s.bind({}),d=function(t){return Object(a.jsx)(o.Skeleton,u(u({},t),{},{color:"red"}))},p=s.bind({});p.props={opacity:1};var f=s.bind({});f.props={opacity:.5};var g=s.bind({});g.props={radius:50};var b=["Default","Colored","WithoutOpacity","WithCustomOpacity","WithCustomRadius"]},197:function(t,e,r){"use strict";r.r(e),r.d(e,"Default",(function(){return v})),r.d(e,"WithCustomDimensions",(function(){return y})),r.d(e,"Colored",(function(){return P})),r.d(e,"WithRadius",(function(){return w})),r.d(e,"WithRadiusLeft",(function(){return x})),r.d(e,"WithRadiusRight",(function(){return S})),r.d(e,"__namedExportsOrder",(function(){return L}));var n=r(4),i=r.n(n),o=(r(0),r(131)),a=r(77),c=r(19),u=r.n(c),s=r(81),l=r(7),d=r(28),p=r(9),f=["text","onPress","textColor","backgroundColor","width","height","radius","radiusLeft","radiusRight","style"];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){var e=t.text,r=t.onPress,n=t.textColor,i=t.backgroundColor,o=t.width,c=t.height,g=void 0===c?40:c,h=t.radius,O=t.radiusLeft,j=t.radiusRight,m=t.style,v=u()(t,f),y=Object(a.default)(),P=n||("light"===y?"#fff":"#000"),w=i||("light"===y?"#333":"#ddd");return Object(p.jsx)(s.default,b(b({accessibilityRole:"button",onPress:r,style:{position:"relative",overflow:"hidden",borderTopLeftRadius:O,borderBottomLeftRadius:O,borderTopRightRadius:j,borderBottomRightRadius:j,borderRadius:h,width:o,height:g,backgroundColor:w}},v),{},{children:Object(p.jsx)(l.default,{pointerEvents:"none",style:[{width:o,height:g,alignItems:"center",justifyContent:"center"},m],children:Object(p.jsx)(d.Paragraph,{color:P,children:e})})}))};function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default={title:"Button",tags:["interactive","button"],props:{text:"Press me",onPress:function(){return o.default.alert("Bonk!","You pressed the button.")}}};var m=function(t){return Object(p.jsx)(h,j({},t))},v=m.bind({});v.props={width:void 0,height:void 0};var y=m.bind({});y.props={width:150,height:60};var P=function(t){var e=Object(a.default)(),r="light"===e?"maroon":"pink",n="light"===e?"pink":"maroon";return Object(p.jsx)(h,j(j({},t),{},{backgroundColor:r,textColor:n}))},w=m.bind({});w.title="With round corners",w.props={radius:10};var x=m.bind({});x.title="With round corners left",x.props={radiusLeft:10};var S=m.bind({});S.title="With round corners right",S.props={radiusRight:10};var L=["Default","WithCustomDimensions","Colored","WithRadius","WithRadiusLeft","WithRadiusRight"]},198:function(t,e,r){"use strict";r.r(e),r.d(e,"Default",(function(){return l})),r.d(e,"MarginVertical",(function(){return d})),r.d(e,"MarginTop",(function(){return p})),r.d(e,"MarginBottom",(function(){return f})),r.d(e,"NoMarginHorizontal",(function(){return g})),r.d(e,"__namedExportsOrder",(function(){return b}));var n=r(4),i=r.n(n),o=(r(0),r(7)),a=r(9),c=function(t){var e=t.marginTop,r=t.marginBottom,n=t.marginVertical,i=t.noMarginHorizontal;return Object(a.jsx)(o.default,{style:{marginVertical:n?15:void 0,marginTop:e?15:void 0,marginBottom:r?15:void 0,marginHorizontal:i?void 0:15,overflow:"hidden"},children:Object(a.jsx)(o.default,{style:{marginTop:-1,borderWidth:1,borderColor:"#ccc",borderStyle:"dashed"}})})};function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.default={title:"Separator",description:"Be aware that the separator in all these examples is placed in a box with padding in top and bottom.",tags:["graphics"],wrapperStyle:{marginHorizontal:0,paddingVertical:10,justifyContent:"center",backgroundColor:"#efefef"}};var s=function(t){return Object(a.jsx)(c,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t))},l=s.bind({}),d=s.bind({});d.props={marginVertical:!0};var p=s.bind({});p.props={marginTop:!0};var f=s.bind({});f.props={marginTop:!0};var g=s.bind({});g.props={noMarginHorizontal:!0};var b=["Default","MarginVertical","MarginTop","MarginBottom","NoMarginHorizontal"]},199:function(t,e,r){"use strict";r.r(e),r.d(e,"Default",(function(){return h})),r.d(e,"MultipleLines",(function(){return O})),r.d(e,"Colored",(function(){return j})),r.d(e,"WithoutOpacity",(function(){return m})),r.d(e,"WithCustomOpacity",(function(){return v})),r.d(e,"Tiny",(function(){return y})),r.d(e,"Small",(function(){return P})),r.d(e,"Large",(function(){return w})),r.d(e,"Larger",(function(){return x})),r.d(e,"ExtraLarge",(function(){return S})),r.d(e,"LineHeight1",(function(){return L})),r.d(e,"LineHeight15",(function(){return D})),r.d(e,"LineHeight2",(function(){return C})),r.d(e,"__namedExportsOrder",(function(){return H}));var n=r(4),i=r.n(n),o=r(0),a=r.n(o),c=r(7),u=r(28),s=r(64),l=r(63),d=r(9),p=a.a.memo((function(t){var e=t.lines,r=void 0===e?1:e,n=t.size,i=void 0===n?u.ParagraphSize.Medium:n,a=t.lineHeight,p=void 0===a?1.25:a,f=t.color,g=t.marginBottom,b=t.width,h=t.opacity,O=void 0===h?.15:h,j=Object(o.useMemo)((function(){var t=l.SIZES[i]-(1===p?4:0),e=(t*p-t)/2+(1===p?2:0);return new Array(Math.max(1,r)).fill("").map((function(r,n){return Object(d.jsx)(s.Skeleton,{width:b||(n%2===0?"85%":"65%"),height:t,marginVertical:e,color:f,opacity:O},"line-"+n)}))}),[r,i,b,f,p,O]);return Object(d.jsx)(c.default,{style:{marginBottom:g},children:j})}));function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}p.displayName="SkeletonParagraph";e.default={title:"SkeletonParagraph",tags:["indicator","typography"],props:{lines:4}};var b=function(t){return Object(d.jsx)(p,g({},t))},h=b.bind({});h.props={lines:1};var O=b.bind({}),j=function(t){return Object(d.jsx)(p,g(g({},t),{},{color:"red"}))},m=b.bind({});m.props={opacity:1};var v=b.bind({});v.props={opacity:.5};var y=b.bind({});y.props={size:u.ParagraphSize.Tiny};var P=b.bind({});P.props={size:u.ParagraphSize.Small};var w=b.bind({});w.props={size:u.ParagraphSize.Large};var x=b.bind({});x.props={size:u.ParagraphSize.Larger};var S=b.bind({});S.props={size:u.ParagraphSize.ExtraLarge};var L=b.bind({});L.title="Line height 1",L.props={lineHeight:1};var D=b.bind({});D.title="Line height 1.5",D.props={lineHeight:1.5};var C=b.bind({});C.title="Line height 2",C.props={lineHeight:2};var H=["Default","MultipleLines","Colored","WithoutOpacity","WithCustomOpacity","Tiny","Small","Large","Larger","ExtraLarge","LineHeight1","LineHeight15","LineHeight2"]},28:function(t,e,r){"use strict";r.r(e),r.d(e,"ParagraphSize",(function(){return n})),r.d(e,"ParagraphWeight",(function(){return i})),r.d(e,"Paragraph",(function(){return b}));var n,i,o=r(4),a=r.n(o),c=r(19),u=r.n(c),s=(r(0),r(47)),l=r(63),d=r(9),p=["size","lineHeight","weight","italic","color","marginTop","marginBottom","opacity","center","children"];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}!function(t){t.Tiny="tiny",t.Small="small",t.Medium="medium",t.Large="large",t.Larger="larger",t.ExtraLarge="extraLarge"}(n||(n={})),function(t){t.Regular="Regular",t.Bold="Bold"}(i||(i={}));var b=function(t){var e=t.size,r=void 0===e?n.Medium:e,o=t.lineHeight,a=void 0===o?1.25:o,c=t.weight,f=void 0===c?i.Regular:c,b=t.italic,h=t.color,O=t.marginTop,j=t.marginBottom,m=t.opacity,v=t.center,y=t.children,P=u()(t,p),w=h||"#000",x=l.SIZES[r],S="auto"===a?void 0:l.SIZES[r]*a;return Object(d.jsx)(s.default,g(g({},P),{},{style:{color:w,fontSize:x,fontWeight:f===i.Bold?"bold":void 0,fontStyle:b?"italic":void 0,lineHeight:S,opacity:m,marginTop:O,marginBottom:j,textAlign:v?"center":void 0},children:y}))}},63:function(t,e,r){"use strict";r.r(e),r.d(e,"SIZES",(function(){return n}));var n={tiny:10,small:13,medium:15,large:17,larger:20,extraLarge:26}},64:function(t,e,r){"use strict";r.r(e),r.d(e,"Skeleton",(function(){return c}));var n=r(0),i=r.n(n),o=r(7),a=r(9),c=i.a.memo((function(t){var e=t.width,r=t.height,n=t.color,i=t.opacity,c=void 0===i?.1:i,u=t.radius,s=t.margin,l=t.marginHorizontal,d=t.marginVertical;return Object(a.jsx)(o.default,{style:{width:e,height:r,margin:s,marginHorizontal:l,marginVertical:d,opacity:c,borderRadius:u||5,overflow:"hidden",backgroundColor:n||"#000"}})}));c.displayName="Skeleton"}},[[158,1,2]]]);
//# sourceMappingURL=app.b52cd14a.chunk.js.map