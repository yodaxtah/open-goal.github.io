"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[129],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(n),c=r,m=f["".concat(s,".").concat(c)]||f[c]||h[c]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s=void 0,d={unversionedId:"port-info/drawable_and_tfrag",id:"port-info/drawable_and_tfrag",title:"drawable_and_tfrag",description:"Drawable Trees",source:"@site/documentation/port-info/drawable_and_tfrag.md",sourceDirName:"port-info",slug:"/port-info/drawable_and_tfrag",permalink:"/docs/port-info/drawable_and_tfrag",draft:!1,editUrl:"https://github.com/open-goal/open-goal.github.io/tree/master/documentation/port-info/drawable_and_tfrag.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Graphics",permalink:"/docs/port-info/graphics"},next:{title:"Basic Process for Drawing",permalink:"/docs/port-info/tfrag"}},p={},h=[{value:"Drawable Trees",id:"drawable-trees",level:2},{value:"Tfrag renderers",id:"tfrag-renderers",level:2},{value:"Tfrag data",id:"tfrag-data",level:2}],f={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"drawable-trees"},"Drawable Trees"),(0,i.kt)("p",null,"At the highest level is the level file itself, which is a ",(0,i.kt)("inlineCode",{parentName:"p"},"bsp-header"),".  It contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-array"),", which contains a small number of ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree"),"s. (~1 to 15?)."),(0,i.kt)("p",null,"Each of these ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree"),"s is a different kind, distinguished by its type. Different types of trees go to different renderers. For example, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-lowres-tfrag"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-instance-tie"),", and even a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-actor"),".  It is possible to have multiple trees of the same type, as some trees seem to have a maximum size - for example a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-instance-tie")," can have only 43 different prototypes, so it is common to see a few of these.  These trees are the thing passed to the appropriate renderers. All the trees for all the levels get put in the ",(0,i.kt)("inlineCode",{parentName:"p"},"background-work")," structure, which is then read by the renderers."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-tfrag"),' contains all the "normal" tfrag data.  There are other trees like ',(0,i.kt)("inlineCode",{parentName:"p"},"trans"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dirt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lowres"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"lowres-trans"),", which are only present if the level actually has this type of geometry.  As far as I can tell, the special ones follow the same format, but I haven't checked this in detail."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-tfrag")," contains a small number (1 to 6?) of ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array"),".   They all refer to the same set of ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),"s (the actual things to draw), but have a different tree structure."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node"),"s.  Each ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node")," contains between 0 and 8 children. The children are represented by a pointer to an inline array of children.  The children can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node"),"s or ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),"s.  All the children are always the same type."),(0,i.kt)("p",null,"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-tree-tfrag")," is the full tree structure. It starts with some number of children that is smaller than 8.  And from there on, all children are ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node")," (always 8 or fewer children) or a ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment")," directly. So this is the deepest possible tree. I believe the max depth seen is 6?"),(0,i.kt)("p",null,"The next ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," starts with a list of all nodes at with a depth of 1 from one of the top-level nodes of the first.  So this has at most 64 entries.  Like the previous tree, all the children from here on have 8 or fewer children."),(0,i.kt)("p",null,"This pattern continues. The n-th ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array"),' is a list of all nodes at depth n in the "real" tree.'),(0,i.kt)("p",null,"There are two tricks to this:\nFirst, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node"),"s, the type is actually ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array-node"),".  Unlike a ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node"),", which can only contain 8 children, a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," can contain a huge number of children.  The final ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," is a list of a all children at the final depth, so it's always an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),". In this case, the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array-tfrag"),", and it's just a giant list of all the ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),"s in the level."),(0,i.kt)("p",null,"The second trick is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"draw-node"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),"s are stored only once, even if they appear in multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable-inline-array"),'s.  They used the weird "node = length + pointer to inline array of children" format and sorted nodes by depth to enable this.  '),(0,i.kt)("h2",{id:"tfrag-renderers"},"Tfrag renderers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tfrag-methods.gc")," file has the methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"drawable"),' that call the actual "draw" implementations in ',(0,i.kt)("inlineCode",{parentName:"p"},"tfrag.gc"),'.  There is a near and "normal" version of the renderer. So far, it seems like trans/low-res, ice, dirt, etc don\'t have separate rendering code (or are part of the main ',(0,i.kt)("inlineCode",{parentName:"p"},"tfrag")," program)."),(0,i.kt)("p",null,"It looks possible for ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),"s to be drawn using the generic renderer, but so far I can't find the code where this happens."),(0,i.kt)("h2",{id:"tfrag-data"},"Tfrag data"),(0,i.kt)("p",null,"Tfrag also uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"adgif-shader")," idea. I believe the shaders are per-",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment")," (though some may share, or there may be tricks to avoid resending the shader if consecutive ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),"s use the same settings)."),(0,i.kt)("p",null,"I don't know if the ",(0,i.kt)("inlineCode",{parentName:"p"},"adgif-shader")," is always 5 quadwords, like for sprite.  It seems possible to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"adgif-shader")," just to set up texturing, but also have some other stuff.  I believe that we currently log in these shaders and link to textures, so we can probably learn something from inspecting these."),(0,i.kt)("p",null,"There are 4 sets of data in ",(0,i.kt)("inlineCode",{parentName:"p"},"tfragment"),": base, common, level0, level1.  Each has its own DMA transfer (consisting of a address to data, plus a length).  The details of which goes where is not clear yet.  I ",(0,i.kt)("em",{parentName:"p"},"think")," that sometimes not all 4 are valid. There are only 3 start addresses stored, and the three DMA chains may be the same, or overlap."),(0,i.kt)("p",null,"The DMA data itself seems to only be loading data.  It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"unpack")," (V4-16, V4-32, V3-32, V4-8) and ",(0,i.kt)("inlineCode",{parentName:"p"},"STROW"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STMOD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STCYCL")," to set up fancy unpacking tricks.  No other VIFcodes have been found in any level."),(0,i.kt)("p",null,"Additionally, there are some color palettes that use the time-of-day system."))}c.isMDXComponent=!0}}]);