(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{141:function(e,o,n){"use strict";n.r(o),n.d(o,"default",(function(){return P}));var r=n(0),l=n(32),b=n(14),a=n(131),t=n(132),i=n(203),s=n(202),m=n(86),d=n(8),u=n(200),x=n(20);function c(){var e=Object(u.default)();return Object(x.jsxs)(d.default,{style:{padding:15},children:[Object(x.jsx)(d.default,{style:{marginBottom:15},children:Object(x.jsx)(m.default,{title:"Basic viewport",onPress:function(){return e("/demo/basic-viewport")}})}),Object(x.jsx)(d.default,{style:{marginBottom:15},children:Object(x.jsx)(m.default,{title:"React Navigation",onPress:function(){return e("/demo/react-navigation")}})})]})}var p=n(37),v=Object(p.bibloImporter)(n(98));function h(){var e=Object(r.useRef)(null);return Object(x.jsxs)(p.BibloProvider,{components:v,readerOptions:{scrollViewProps:{ref:e},onMount:function(){var o;return null==(o=e.current)?void 0:o.scrollTo({x:0,y:0,animated:!1})}},children:[Object(x.jsx)(d.default,{style:{backgroundColor:"white",height:"50%"},children:Object(x.jsx)(p.BibloIndex,{})}),Object(x.jsx)(d.default,{style:{height:"50%",backgroundColor:"white",borderTopWidth:1,borderTopColor:"#000"},children:Object(x.jsx)(p.BibloReader,{})})]})}var j=n(125),k=n(25),w=function(){var e=Object(k.useRoute)().params;return null!=e&&e.file?Object(x.jsx)(p.BibloReader,{file:e.file}):null},_=Object(p.bibloImporter)(n(98)),f=Object(s.default)();function g(){var e=Object(k.useNavigation)().navigate;return Object(x.jsx)(p.BibloProvider,{components:_,addons:[j.default],onSelectFile:function(o){e({name:"reader",params:{file:o}})},children:Object(x.jsxs)(f.Navigator,{children:[Object(x.jsx)(f.Screen,{name:"index",component:p.BibloIndex,options:{title:"React Navigation"}}),Object(x.jsx)(f.Screen,{name:"reader",component:w,options:{title:"Biblo file"}})]})})}var y=Object(s.default)();function P(){return Object(x.jsx)(a.default,{style:{flex:1,maxHeight:l.default.get("window").height,paddingTop:"android"===b.default.OS?t.default.currentHeight:0,backgroundColor:"white"},children:Object(x.jsx)(i.default,{linking:{prefixes:[],config:{screens:{Home:"/demo",BasicViewport:"/demo/basic-viewport",ReactNavigation:"/demo/react-navigation"}}},children:Object(x.jsxs)(y.Navigator,{children:[Object(x.jsx)(y.Screen,{name:"Home",component:c}),Object(x.jsx)(y.Screen,{name:"BasicViewport",options:{title:"Basic viewport"},component:h}),Object(x.jsx)(y.Screen,{name:"ReactNavigation",options:{headerShown:!1},component:g})]})})})}},152:function(e,o,n){e.exports=n(193)},185:function(e,o){throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /home/runner/work/biblo/biblo/example/src/components/atoms/Button/Button.biblo.tsx: Cannot set properties of undefined (setting 'kind')\n    at transformBlockScopedVariable (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:122:41)\n    at PluginPass.VariableDeclaration (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:81:9)\n    at newFn (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/visitors.js:159:21)\n    at NodePath._call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:46:20)\n    at NodePath.call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:36:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:84:31)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:90:52)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at traverse (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/index.js:50:34)\n    at transformFile (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:83:29)\n    at transformFile.next (<anonymous>)\n    at run (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:24:12)\n    at run.next (<anonymous>)\n    at transform (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:261:32)\n    at /home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:223:11)")},186:function(e,o){throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /home/runner/work/biblo/biblo/example/src/components/atoms/Paragraph/Paragraph.biblo.tsx: Cannot set properties of undefined (setting 'kind')\n    at transformBlockScopedVariable (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:122:41)\n    at PluginPass.VariableDeclaration (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:81:9)\n    at newFn (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/visitors.js:159:21)\n    at NodePath._call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:46:20)\n    at NodePath.call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:36:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:84:31)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:90:52)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at traverse (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/index.js:50:34)\n    at transformFile (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:83:29)\n    at transformFile.next (<anonymous>)\n    at run (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:24:12)\n    at run.next (<anonymous>)\n    at transform (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:261:32)\n    at /home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:223:11)")},187:function(e,o){throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /home/runner/work/biblo/biblo/example/src/components/atoms/Separator/Separator.biblo.tsx: Cannot set properties of undefined (setting 'kind')\n    at transformBlockScopedVariable (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:122:41)\n    at PluginPass.VariableDeclaration (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:81:9)\n    at newFn (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/visitors.js:159:21)\n    at NodePath._call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:46:20)\n    at NodePath.call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:36:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:84:31)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:90:52)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at traverse (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/index.js:50:34)\n    at transformFile (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:83:29)\n    at transformFile.next (<anonymous>)\n    at run (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:24:12)\n    at run.next (<anonymous>)\n    at transform (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:261:32)\n    at /home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:223:11)")},188:function(e,o){throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /home/runner/work/biblo/biblo/example/src/components/atoms/Skeleton/Skeleton.biblo.tsx: Cannot set properties of undefined (setting 'kind')\n    at transformBlockScopedVariable (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:122:41)\n    at PluginPass.VariableDeclaration (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:81:9)\n    at newFn (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/visitors.js:159:21)\n    at NodePath._call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:46:20)\n    at NodePath.call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:36:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:84:31)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:90:52)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at traverse (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/index.js:50:34)\n    at transformFile (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:83:29)\n    at transformFile.next (<anonymous>)\n    at run (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:24:12)\n    at run.next (<anonymous>)\n    at transform (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:261:32)\n    at /home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:223:11)")},189:function(e,o){throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /home/runner/work/biblo/biblo/example/src/components/atoms/SkeletonParagraph/SkeletonParagraph.biblo.tsx: Cannot set properties of undefined (setting 'kind')\n    at transformBlockScopedVariable (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:122:41)\n    at PluginPass.VariableDeclaration (/home/runner/work/biblo/biblo/example/node_modules/@babel/plugin-transform-block-scoping/lib/index.js:81:9)\n    at newFn (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/visitors.js:159:21)\n    at NodePath._call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:46:20)\n    at NodePath.call (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:36:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:84:31)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at NodePath.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/path/context.js:90:52)\n    at TraversalContext.visitQueue (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:96:16)\n    at TraversalContext.visitSingle (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:72:19)\n    at TraversalContext.visit (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/context.js:121:19)\n    at traverseNode (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/traverse-node.js:18:17)\n    at traverse (/home/runner/work/biblo/biblo/example/node_modules/@babel/traverse/lib/index.js:50:34)\n    at transformFile (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:83:29)\n    at transformFile.next (<anonymous>)\n    at run (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transformation/index.js:24:12)\n    at run.next (<anonymous>)\n    at transform (/home/runner/work/biblo/biblo/example/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:261:32)\n    at /home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/runner/work/biblo/biblo/example/node_modules/gensync/index.js:223:11)")},98:function(e,o,n){var r={"./components/atoms/Button/Button.biblo.tsx":185,"./components/atoms/Paragraph/Paragraph.biblo.tsx":186,"./components/atoms/Separator/Separator.biblo.tsx":187,"./components/atoms/Skeleton/Skeleton.biblo.tsx":188,"./components/atoms/SkeletonParagraph/SkeletonParagraph.biblo.tsx":189};function l(e){var o=b(e);return n(o)}function b(e){if(!n.o(r,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=b,e.exports=l,l.id=98}},[[152,1,2]]]);
//# sourceMappingURL=app.45a7b3fc.chunk.js.map