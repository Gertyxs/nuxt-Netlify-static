(window.webpackJsonp=window.webpackJsonp||[]).push([[84,8,9,12,13,17,62,63,66,68],{297:function(t,n,e){var content=e(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("097e511d",content,!0,{sourceMap:!1})},298:function(t,n,e){"use strict";e.r(n);var r={props:{to:{type:[String,Object],default:null},href:{type:String,default:""},variant:{type:String,default:"primary"}}},o=(e(299),e(3)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.to?e("NuxtLink",{staticClass:"no-underline inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md",class:t.variant,attrs:{to:t.to}},[t.$slots.icon?e("div",{staticClass:"inline-block fill-current stroke-current mr-1"},[t._t("icon")],2):t._e(),t._v(" "),t._t("default")],2):e("a",{staticClass:"no-underline inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md",class:t.variant,attrs:{href:t.href,target:"_blank",rel:"noopener"}},[t.$slots.icon?e("div",{staticClass:"inline-block fill-current stroke-current mr-1"},[t._t("icon")],2):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"deda5324",null);n.default=component.exports},299:function(t,n,e){"use strict";e(297)},300:function(t,n,e){var r=e(36)((function(i){return i[1]}));r.push([t.i,".primary[data-v-deda5324]{\n  --bg-opacity:1;\n  background-color:#00C58E;\n  background-color:rgba(0, 197, 142, var(--bg-opacity));\n  --text-opacity:1;\n  color:#fff;\n  color:rgba(255, 255, 255, var(--text-opacity))\n}\n.primary[data-v-deda5324]:hover{\n  --bg-opacity:1;\n  background-color:#00E0A1;\n  background-color:rgba(0, 224, 161, var(--bg-opacity))\n}\n.secondary[data-v-deda5324]{\n  --bg-opacity:1;\n  background-color:#edf2f7;\n  background-color:rgba(237, 242, 247, var(--bg-opacity));\n  --text-opacity:1;\n  color:#2F495E;\n  color:rgba(47, 73, 94, var(--text-opacity))\n}\n.secondary[data-v-deda5324]:hover{\n  --bg-opacity:1;\n  background-color:#e2e8f0;\n  background-color:rgba(226, 232, 240, var(--bg-opacity))\n}",""]),r.locals={},t.exports=r},303:function(t,n,e){var content=e(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("37a8bf9e",content,!0,{sourceMap:!1})},306:function(t,n,e){e(5),e(4),e(6),e(8),e(9);var r=e(25),o=e(26);function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}t.exports={functional:!0,render:function(t,n){var e=n._c,data=(n._v,n.data),c=n.children,d=void 0===c?[]:c,f=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,v=void 0===x?{}:x,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return e("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){r(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({class:[f,m],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},v)},y),d.concat([e("line",{attrs:{x1:"8",x2:"21",y1:"6",y2:"6"}}),e("line",{attrs:{x1:"8",x2:"21",y1:"12",y2:"12"}}),e("line",{attrs:{x1:"8",x2:"21",y1:"18",y2:"18"}}),e("line",{attrs:{x1:"3",x2:"3",y1:"6",y2:"6"}}),e("line",{attrs:{x1:"3",x2:"3",y1:"12",y2:"12"}}),e("line",{attrs:{x1:"3",x2:"3",y1:"18",y2:"18"}})]))}}},310:function(t,n,e){var content=e(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("527ea16a",content,!0,{sourceMap:!1})},314:function(t,n,e){"use strict";e(303)},315:function(t,n,e){var r=e(36)((function(i){return i[1]}));r.push([t.i,".dark-mode .Carbon{\n  background-color:#2C3E50\n}\n.dark-mode .Carbon .carbon-text{\n  color:#F5F7FA\n}\n.dark-mode .Carbon .carbon-text:hover{\n  color:#B8C2CC\n}\n.light-mode .Carbon{\n  background-color:#edf2f7\n}\n.light-mode .Carbon .carbon-text{\n  --text-opacity:1;\n  color:#718096;\n  color:rgba(113, 128, 150, var(--text-opacity))\n}\n.light-mode .Carbon .carbon-text:hover{\n  --text-opacity:1;\n  color:#2d3748;\n  color:rgba(45, 55, 72, var(--text-opacity))\n}\n.Carbon{\n  padding:1rem;\n  display:flex;\n  flex-direction:column;\n  margin-top:1rem;\n  max-width:100%\n}\n@media (min-width: 640px){\n.Carbon{\n    max-width:20rem\n}\n}\n@media (min-width: 1024px){\n.Carbon{\n    margin-top:0;\n    max-width:160px\n}\n}\n.Carbon #carbonads span{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between\n}\n.Carbon #carbonads span .carbon-wrap{\n  display:flex;\n  flex-direction:column;\n  flex:1\n}\n@media(min-width:320px){\n.Carbon #carbonads span .carbon-wrap{\n    flex-direction:row\n}\n}\n@media (min-width: 1024px){\n.Carbon #carbonads span .carbon-wrap{\n    flex-direction:column\n}\n}\n.Carbon #carbonads span .carbon-wrap .carbon-img{\n  display:flex;\n  align-items:flex-start;\n  justify-content:center;\n  margin-bottom:1rem\n}\n@media(min-width:320px){\n.Carbon #carbonads span .carbon-wrap .carbon-img{\n    margin-bottom:0\n}\n}\n@media (min-width: 1024px){\n.Carbon #carbonads span .carbon-wrap .carbon-img{\n    margin-bottom:1rem\n}\n}\n.Carbon #carbonads span .carbon-wrap .carbon-text{\n  flex:1 1 0%;\n  font-size:0.875rem;\n  width:100%;\n  margin:0;\n  text-align:left;\n  display:block;\n  line-height:1.625\n}\n.Carbon #carbonads span .carbon-wrap .carbon-text:hover{\n  text-decoration:none\n}\n@media(min-width:320px){\n.Carbon #carbonads span .carbon-wrap .carbon-text{\n    margin-left:1rem\n}\n}\n@media (min-width: 1024px){\n.Carbon #carbonads span .carbon-wrap .carbon-text{\n    margin-left:0\n}\n}\n.Carbon img{\n  width:100%\n}\n.Carbon .carbon-poweredby{\n  margin-left:0.5rem;\n  font-size:0.75rem;\n  text-align:right;\n  --text-opacity:1;\n  color:#cbd5e0;\n  color:rgba(203, 213, 224, var(--text-opacity));\n  display:block;\n  padding-top:0.5rem\n}\n.Carbon .carbon-poweredby:hover{\n  text-decoration:none;\n  --text-opacity:1;\n  color:#a0aec0;\n  color:rgba(160, 174, 192, var(--text-opacity))\n}",""]),r.locals={},t.exports=r},316:function(t,n,e){e(5),e(4),e(6),e(8),e(9);var r=e(25),o=e(26);function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}t.exports={functional:!0,render:function(t,n){var e=n._c,data=(n._v,n.data),c=n.children,d=void 0===c?[]:c,f=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,v=void 0===x?{}:x,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return e("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){r(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({class:["feather feather-chevron-down",f,m],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},v)},y),d.concat([e("polyline",{attrs:{points:"6 9 12 15 18 9"}})]))}}},317:function(t,n,e){e(5),e(4),e(6),e(8),e(9);var r=e(25),o=e(26);function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}t.exports={functional:!0,render:function(t,n){var e=n._c,data=(n._v,n.data),c=n.children,d=void 0===c?[]:c,f=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,v=void 0===x?{}:x,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return e("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){r(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({class:["feather feather-chevron-right",f,m],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},v)},y),d.concat([e("polyline",{attrs:{points:"9 18 15 12 9 6"}})]))}}},319:function(t,n,e){var content=e(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("23ab3f98",content,!0,{sourceMap:!1})},323:function(t,n,e){"use strict";e.r(n);var r={mounted:function(){if(this.$refs.carbonads){var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("src","//cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg"),script.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(script)}}},o=(e(314),e(3)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"carbonads",staticClass:"Carbon"})}),[],!1,null,null,null);n.default=component.exports},326:function(t,n,e){"use strict";e(310)},327:function(t,n,e){var r=e(36)((function(i){return i[1]}));r.push([t.i,".affix{\n  height:calc(100vh - 6rem);\n  top:6rem\n}",""]),r.locals={},t.exports=r},328:function(t,n,e){"use strict";e.r(n);var r={},o=(e(326),e(3)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n    lg:inset-0\n    z-90\n    lg:-mb-0\n    lg:static\n    lg:h-auto\n    lg:overflow-y-visible\n    lg:pt-0\n    lg:w-1/4\n    lg:block\n  "},[e("div",{staticClass:"\n      lg:overflow-y-auto\n      lg:scrolling-touch\n      lg:h-auto\n      lg:block\n      lg:sticky\n      lg:top-24\n    "},[e("div",{staticClass:"\n        flex flex-col\n        px-4\n        pt-8\n        justify-start\n        xl:overflow-y-auto\n        overflow-x-hidden\n        lg:pr-0\n        lg:pl-8\n        sticky?lg:max-h-(screen-24)\n      "},[t._t("default")],2)])])}),[],!1,null,null,null);n.default=component.exports},329:function(t,n,e){"use strict";e.r(n);var r=e(3),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.$store.state.adBlocked?e("AdsFallback"):e("AdsCarbon",{key:t.$route.params.slug})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AdsFallback:e(351).default,AdsCarbon:e(323).default})},330:function(t,n,e){"use strict";e.r(n);var r=e(3),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",{staticClass:"text-ss align-middle ml-2 px-1 py-0 rounded-sm lowercase self-center"},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},337:function(t,n,e){"use strict";e(319)},338:function(t,n,e){var r=e(36)((function(i){return i[1]}));r.push([t.i,".header_mobile_aside[data-v-222d556f]{\n  bottom:4rem;\n  top:4rem;\n  transform:translateX(calc(-100% - 1px));\n  transition-duration:.35s;\n  transition-property:transform;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.6, 1)\n}\n@media (min-width: 1024px){\n.header_mobile_aside[data-v-222d556f]{\n    top:6rem\n}\n}\n.header_mobile_aside--open[data-v-222d556f]{\n  transform:translateX(0);\n  transition-delay:0s\n}\n.header_mobile_aside--open .header_mobile_aside_group[data-v-222d556f]{\n  transform:translateX(0)\n}\n.content-wrapper[data-v-222d556f]{\n  margin-left:auto;\n  padding-left:1rem\n}\n@media (min-width: 640px){\n.content-wrapper[data-v-222d556f]{\n    max-width:calc(640px/2)\n}\n}\n@media (min-width: 768px){\n.content-wrapper[data-v-222d556f]{\n    max-width:calc(768px/2)\n}\n}\nbutton[data-v-222d556f]{\n  outline:none\n}\n.bookmark-button[data-v-222d556f]{\n  border-radius:0 9999px 9999px 0;\n  right:0;\n  transform:translateX(100%)\n}\n.bookmark-button[data-v-222d556f],.inner-button[data-v-222d556f]{\n  box-shadow:4px 2px 4px rgba(0,0,0,.101562);\n  top:1rem\n}\n.inner-button[data-v-222d556f]{\n  border-radius:100%;\n  right:1rem\n}",""]),r.locals={},t.exports=r},352:function(t,n,e){"use strict";e.r(n);e(5);var r=e(304),o=e.n(r),l=e(306),c=e.n(l),d=e(140),f=e.n(d),m=e(316),h=e.n(m),x=e(317),v=e.n(x),y={components:{ListIcon:c.a,TimesIcon:f.a,ChevronDownIcon:h.a,ChevronRightIcon:v.a},props:{links:{type:Object,default:function(){}}},data:function(){return{show:!1}},computed:{sortedLinks:function(){var t=this,n={};return o()(Object.keys(this.links),(function(link){return Object.keys(t.$i18n.t("content.guides")).indexOf(link)})).forEach((function(e){n[e]=t.links[e]})),n}},methods:{clickOutsideHandler:function(){this.show&&(this.show=!1)},toLink:function(t,link){return this.localePath({name:"docs-2.x-book-slug",params:{book:t,slug:link.slug}})}}},k=(e(337),e(3)),component=Object(k.a)(y,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutsideHandler,expression:"clickOutsideHandler"}],staticClass:"fixed left-0 z-20 block w-full header_mobile_aside shadow-nuxt lg:hidden sm:w-1/2",class:{"header_mobile_aside--open":t.show}},[e("div",{staticClass:"h-full mx-auto transition-colors duration-300 ease-linear light:bg-light-surface dark:bg-dark-surface"},[e("div",{staticClass:"relative h-full content-wrapper"},[e("div",{staticClass:"h-full pt-4 overflow-y-auto"},t._l(t.sortedLinks,(function(n,r){return e("transition-group",{key:r,staticClass:"header_mobile_aside_group",attrs:{tag:"div",name:"list"}},[e(t.$route.params.book===r?"h3":"nuxt-link",{key:"title-"+r,tag:"component",staticClass:"flex items-center pb-2 text-gray-600 uppercase",class:{"hover:text-nuxt-lightgreen mb-4 block":t.$route.params.book!==r,"font-bold":t.$route.params.book===r},attrs:{to:{name:"docs-2.x-book-slug",params:{book:r,slug:n[0].slug}}}},[t.$route.params.book===r?e("ChevronDownIcon",{staticClass:"w-4 h-4 mr-2"}):e("ChevronRightIcon",{staticClass:"w-4 h-4 mr-2"}),t._v(" "),e("span",[t._v(t._s(t.$t("content.guides."+r)))])],1),t._v(" "),t.$route.params.book===r?e("ul",{key:"list-"+r,staticClass:"pb-6"},t._l(n,(function(link,n){return e("li",{key:n,staticClass:"py-2"},[e("NuxtLink",{staticClass:"block transition-colors duration-300 ease-linear dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen",attrs:{"exact-active-class":"text-nuxt-lightgreen",to:t.toLink(r,link)},nativeOn:{click:function(n){t.show=!1}}},[t._v("\n                "+t._s(link.title)+"\n              ")])],1)})),0):t._e()],1)})),1),t._v(" "),e("button",{staticClass:"absolute flex items-center justify-center w-10 h-10 transition-colors duration-300 ease-linear bg-gray-200 inner-button sm:hidden text-nuxt-gray dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary",on:{click:function(n){t.show=!1}}},[e("TimesIcon",{staticClass:"block h-5 transition-colors duration-300 ease-linear fill-current"})],1)]),t._v(" "),e("button",{staticClass:"absolute flex items-center justify-center w-10 h-10 transition-colors duration-300 ease-linear bg-gray-200 bookmark-button text-nuxt-gray dark:bg-dark-surface dark:text-dark-onSurfaceSecondary",on:{click:function(n){t.show=!t.show}}},[t.show?e("TimesIcon",{staticClass:"block h-5 transition-colors duration-300 ease-linear fill-current"}):e("ListIcon",{staticClass:"block transition-colors duration-300 ease-linear stroke-current text-nuxt-gray dark:text-dark-onSurfaceSecondary"})],1)])])}),[],!1,null,"222d556f",null);n.default=component.exports},353:function(t,n,e){"use strict";e.r(n);e(5);var r=e(304),o=e.n(r),l=e(316),c=e.n(l),d=e(317),f=e.n(d),m={components:{ChevronDownIcon:c.a,ChevronRightIcon:f.a},props:{links:{type:Object,default:function(){}}},data:function(){return{current:0,setInter:null,showNav:!1}},computed:{sortedLinks:function(){var t=this,n={};return o()(Object.keys(this.links),(function(link){return Object.keys(t.$i18n.t("content.guides")).indexOf(link)})).forEach((function(e){n[e]=t.links[e]})),n}},methods:{toLink:function(t,link){return this.localePath({name:"docs-2.x-book-slug",params:{book:t,slug:link.slug}})}}},h=e(3),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",{staticClass:"\n    block\n    mt-8\n    -mx-4\n    bg-gray-100\n    opacity-transition\n    lg:bg-transparent\n    lg:mt-0\n    lg:mx-0\n    lg:inset-0\n    z-90\n    lg:mb-0\n    lg:static\n    lg:h-auto\n    lg:overflow-y-visible\n    lg:pt-0\n    lg:w-1/4\n    lg:block\n  "},[e("div",{staticClass:"\n      h-full\n      overflow-y-auto\n      scrolling-touch\n      text-center\n      lg:text-left\n      lg:h-auto\n      lg:block\n      lg:relative\n      lg:sticky\n      lg:top-24\n    "},[e("nav",{staticClass:"\n        pt-8\n        lg:overflow-y-auto\n        lg:block\n        lg:pl-0\n        lg:pr-8\n        sticky?lg:max-h-(screen-24)\n      ",class:{hidden:!t.showNav}},[t._l(t.sortedLinks,(function(n,r){return e("div",{key:"links-"+r},[e(t.$route.params.book===r?"h3":"nuxt-link",{key:"title-"+r,tag:"component",staticClass:"\n            flex\n            items-center\n            pb-2\n            font-medium\n            uppercase\n            transition-colors\n            duration-300\n            ease-linear\n            text-light-onSurfaceSecondary\n            dark:text-dark-onSurfaceSecondary\n          ",class:{"hover:text-nuxt-lightgreen mb-4 block":t.$route.params.book!==r,"font-bold":t.$route.params.book===r},attrs:{to:{name:"docs-2.x-book-slug",params:{book:r,slug:n[0].slug}}}},[t.$route.params.book===r?e("ChevronDownIcon",{staticClass:"w-4 h-4 mr-2"}):e("ChevronRightIcon",{staticClass:"w-4 h-4 mr-2"}),t._v(" "),e("span",[t._v(t._s(t.$t("content.guides."+r)))])],1),t._v(" "),t.$route.params.book===r?e("ul",{staticClass:"pb-8 pl-2"},t._l(n,(function(link,n){return e("li",{key:n,staticClass:"\n              text-light-onSurfacePrimary\n              dark:text-dark-onSurfacePrimary\n            "},[e("NuxtLink",{staticClass:"\n                flex\n                justify-between\n                p-2\n                pl-4\n                transition-colors\n                duration-300\n                ease-linear\n                rounded\n                hover:text-nuxt-lightgreen\n                dark:hover:text-nuxt-lightgreen\n              ",attrs:{"exact-active-class":"bg-green-100 text-nuxt-lightgreen dark:bg-green-800 dark:text-white",to:t.toLink(r,link)}},[link.menu?[t._v("\n                "+t._s(link.menu)+"\n                "),"Static"===link.target?e("AppLabel",{staticClass:"text-green-500 dark:text-green-300"},[t._v("\n                  "+t._s(link.target)+"\n                ")]):t._e(),t._v(" "),"Server"===link.target?e("AppLabel",{staticClass:"text-blue-500 dark:text-blue-300"},[t._v("\n                  "+t._s(link.target)+"\n                ")]):t._e(),t._v(" "),"Static & Server"===link.target?e("AppLabel",{staticClass:"\n                    px-1\n                    py-0\n                    ml-2\n                    text-purple-500\n                    lowercase\n                    align-middle\n                    rounded-sm\n                    dark:text-purple-300\n                    text-ss\n                  "},[t._v("\n                  "+t._s(link.target)+"\n                ")]):t._e()]:[t._v("\n                "+t._s(link.menuTitle||link.title)+"\n              ")]],2)],1)})),0):t._e()],1)})),t._v(" "),e("p",{staticClass:"pb-6 font-bold uppercase"},[e("NuxtLink",{staticClass:"\n            block\n            p-2\n            text-sm\n            bg-gray-100\n            border\n            rounded\n            dark:bg-dark-surface\n            dark:border-gray-900\n            text-light-onSurfaceSecondary\n            dark:text-dark-onSurfaceSecondary\n          ",attrs:{to:"/docs/release-notes","active-class":"","exact-active-class":""}},[t._v("\n          "+t._s(t.$t("common.version"))+"\n          "),e("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$config.nuxtVersion))])])],1)],2)])])}),[],!1,null,"cca980e4",null);n.default=component.exports;installComponents(component,{AppLabel:e(330).default})},354:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{sponsors:[{name:"Strapi",url:"https://strapi.io/?ref=nuxt",img:"strapi-logo.svg",class:"w-32"},{name:"Ship Shape",url:"https://shipshape.io/?ref=nuxt",img:"shipshape-logo.svg",class:"w-32"},{name:"Swell",url:"https://swell.is/",img:"swell-logo.svg",class:"h-8"},{name:"Google Chrome",img:"google-chrome.svg",url:"https://www.google.com/chrome/?ref=nuxt",class:"w-32"}]}}},o=e(3),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",{staticClass:"\n      pb-3\n      text-sm\n      font-bold\n      tracking-wide\n      text-gray-500\n      uppercase\n      border-b border-dashed\n      lg:mb-2\n      dark:text-gray-600\n      lg:text-xs\n    "},[t._v("\n    Partners\n  ")]),t._v(" "),t._l(t.sponsors,(function(n){return e("a",{key:n.name,staticClass:"\n      block\n      py-2\n      border-b border-dashed\n      opacity-75\n      hover:opacity-100\n      lg:inline-block\n      lg:w-full\n    ",attrs:{href:n.url,rel:"noopener sponsored",target:"_blank"}},[e("img",{class:n.class,attrs:{src:"/img/sponsors/"+t.$colorMode.value+"/"+n.img,alt:n.name}})])})),t._v(" "),e("AppButton",{staticClass:"justify-center mt-2 mb-8",attrs:{to:t.localePath({name:"sponsor-nuxtjs"})}},[t._v("\n    Support Us\n  ")])],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AppButton:e(298).default})},380:function(t,n,e){var content=e(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("d37f71b4",content,!0,{sourceMap:!1})},395:function(t,n,e){"use strict";e.r(n);var r=e(2),o=(e(17),["January","February","March","April","May","June","July","August","September","October","November","December"]),l={filters:{dateFormat:function(t){var s=(t=new Date(t)).getDate()+" "+o[t.getMonth()];return t.getFullYear()<(new Date).getFullYear()&&(s+=" "+t.getFullYear()),s}},data:function(){return{releases:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("/_releases");case 2:t.releases=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},c=e(3),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.releases,(function(n){return e("div",{key:n.name},[e("div",{staticClass:"group flex items-center justify-between"},[e("h2",{attrs:{id:n.name}},[t._v("\n        "+t._s(n.name)+"\n      ")]),t._v(" "),e("span",{staticClass:"text-gray-500 group-hover:text-gray-600"},[t._v("\n        Released on\n        "),e("time",{attrs:{datetime:n.date,title:new Date(n.date).toString()}},[t._v("\n          "+t._s(t._f("dateFormat")(n.date))+"\n        ")])])]),t._v(" "),e("nuxt-content",{attrs:{document:n}})],1)})),0)}),[],!1,null,null,null);n.default=component.exports},438:function(t,n,e){"use strict";e(380)},439:function(t,n,e){var r=e(36)((function(i){return i[1]}));r.push([t.i,"article h1[data-v-4ec5957b]{\n  font-weight:500;\n  position:relative;\n  font-size:1.875rem;\n  display:table;\n  margin-bottom:1rem\n}",""]),r.locals={},t.exports=r},502:function(t,n,e){"use strict";e.r(n);var r=e(2),o=(e(17),e(27),e(344)),l=e.n(o),c={scrollToTop:!0,asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,t.params,t.store,t.error,r=t.app,o=[],n.prev=2,c=["pt","es","ja","id","fr"].includes(r.i18n.locale)?r.i18n.locale:r.i18n.defaultLocale,n.next=6,e(c,"guides",{deep:!0}).only(["slug","title","menu","category","position"]).sortBy("position").sortBy("title").sortBy("menu").where({position:{$gte:0}}).fetch();case 6:o=n.sent,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(2);case 11:return n.abrupt("return",{page:{title:"Release Notes",description:"Nuxt.js release notes."},links:l()(o,"category")});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},head:function(){return{title:this.page.title,titleTemplate:"%s - NuxtJS",meta:[{hid:"description",name:"description",content:this.page.description},{hid:"og:title",property:"og:title",content:this.page.title},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.page.description}]}},computed:{docLink:function(){return"https://github.com/nuxt/nuxtjs.org/blob/main/content".concat(this.path,".md")},codeSandBox:function(){return"https://codesandbox.io"},codeSandBoxLink:function(){return this.page.github?"".concat(this.codeSandBox,"/embed/github/nuxt/nuxt.js/tree/dev/examples/").concat(this.page.github,"?autoresize=1&view=editor"):""},liveEditLink:function(){return"".concat(this.codeSandBox,"/s/github/nuxt/nuxt.js/tree/dev/examples/").concat(this.page.github,"?from-embed")},downloadLink:function(){return"https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/dev/examples/"+this.page.github}}},d=(e(438),e(3)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"shadow-nuxt"},[e("div",{staticClass:"container px-4 pb-12 mx-auto lg:flex"},[e("TheMobileAsideNavNewDocs",{attrs:{links:t.links}}),t._v(" "),e("TheAsideNavNewDocs",{staticClass:"hidden lg:block",attrs:{links:t.links}}),t._v(" "),e("div",{staticClass:"\n        w-full\n        min-h-screen\n        lg:static\n        lg:max-h-full\n        lg:overflow-visible\n        lg:w-3/4\n      "},[e("div",{staticClass:"flex flex-col-reverse -mx-4 lg:mx-0 lg:flex-row"},[e("div",{staticClass:"\n            w-full\n            px-4\n            py-8\n            lg:static\n            lg:overflow-visible\n            lg:max-h-full\n            lg:w-3/4\n          "},[e("article",[e("h1",{staticClass:"\n                transition-colors\n                duration-300\n                ease-linear\n                text-light-onSurfacePrimary\n                dark:text-dark-onSurfacePrimary\n              "},[t._v("\n              "+t._s(t.page.title)+"\n            ")]),t._v(" "),e("div",{staticClass:"nuxt-content"},[e("ReleaseNotes")],1)])]),t._v(" "),e("AffixBlock",[e("SponsorsBlock"),t._v(" "),e("AdsBlock")],1)],1)])],1)])}),[],!1,null,"4ec5957b",null);n.default=component.exports;installComponents(component,{TheMobileAsideNavNewDocs:e(352).default,TheAsideNavNewDocs:e(353).default,ReleaseNotes:e(395).default,SponsorsBlock:e(354).default,AdsBlock:e(329).default,AffixBlock:e(328).default})}}]);