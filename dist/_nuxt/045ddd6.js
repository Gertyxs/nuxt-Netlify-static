(window.webpackJsonp=window.webpackJsonp||[]).push([[66,17],{316:function(t,e,n){n(5),n(4),n(6),n(8),n(9);var r=n(25),o=n(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),c=e.children,d=void 0===c?[]:c,f=data.class,v=data.staticClass,style=data.style,k=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,x=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-chevron-down",f,v],style:[style,k],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},y)},x),d.concat([n("polyline",{attrs:{points:"6 9 12 15 18 9"}})]))}}},317:function(t,e,n){n(5),n(4),n(6),n(8),n(9);var r=n(25),o=n(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),c=e.children,d=void 0===c?[]:c,f=data.class,v=data.staticClass,style=data.style,k=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,x=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-chevron-right",f,v],style:[style,k],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},y)},x),d.concat([n("polyline",{attrs:{points:"9 18 15 12 9 6"}})]))}}},330:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-ss align-middle ml-2 px-1 py-0 rounded-sm lowercase self-center"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);n(5);var r=n(304),o=n.n(r),l=n(316),c=n.n(l),d=n(317),f=n.n(d),v={components:{ChevronDownIcon:c.a,ChevronRightIcon:f.a},props:{links:{type:Object,default:function(){}}},data:function(){return{current:0,setInter:null,showNav:!1}},computed:{sortedLinks:function(){var t=this,e={};return o()(Object.keys(this.links),(function(link){return Object.keys(t.$i18n.t("content.guides")).indexOf(link)})).forEach((function(n){e[n]=t.links[n]})),e}},methods:{toLink:function(t,link){return this.localePath({name:"docs-2.x-book-slug",params:{book:t,slug:link.slug}})}}},k=n(3),component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"\n    block\n    mt-8\n    -mx-4\n    bg-gray-100\n    opacity-transition\n    lg:bg-transparent\n    lg:mt-0\n    lg:mx-0\n    lg:inset-0\n    z-90\n    lg:mb-0\n    lg:static\n    lg:h-auto\n    lg:overflow-y-visible\n    lg:pt-0\n    lg:w-1/4\n    lg:block\n  "},[n("div",{staticClass:"\n      h-full\n      overflow-y-auto\n      scrolling-touch\n      text-center\n      lg:text-left\n      lg:h-auto\n      lg:block\n      lg:relative\n      lg:sticky\n      lg:top-24\n    "},[n("nav",{staticClass:"\n        pt-8\n        lg:overflow-y-auto\n        lg:block\n        lg:pl-0\n        lg:pr-8\n        sticky?lg:max-h-(screen-24)\n      ",class:{hidden:!t.showNav}},[t._l(t.sortedLinks,(function(e,r){return n("div",{key:"links-"+r},[n(t.$route.params.book===r?"h3":"nuxt-link",{key:"title-"+r,tag:"component",staticClass:"\n            flex\n            items-center\n            pb-2\n            font-medium\n            uppercase\n            transition-colors\n            duration-300\n            ease-linear\n            text-light-onSurfaceSecondary\n            dark:text-dark-onSurfaceSecondary\n          ",class:{"hover:text-nuxt-lightgreen mb-4 block":t.$route.params.book!==r,"font-bold":t.$route.params.book===r},attrs:{to:{name:"docs-2.x-book-slug",params:{book:r,slug:e[0].slug}}}},[t.$route.params.book===r?n("ChevronDownIcon",{staticClass:"w-4 h-4 mr-2"}):n("ChevronRightIcon",{staticClass:"w-4 h-4 mr-2"}),t._v(" "),n("span",[t._v(t._s(t.$t("content.guides."+r)))])],1),t._v(" "),t.$route.params.book===r?n("ul",{staticClass:"pb-8 pl-2"},t._l(e,(function(link,e){return n("li",{key:e,staticClass:"\n              text-light-onSurfacePrimary\n              dark:text-dark-onSurfacePrimary\n            "},[n("NuxtLink",{staticClass:"\n                flex\n                justify-between\n                p-2\n                pl-4\n                transition-colors\n                duration-300\n                ease-linear\n                rounded\n                hover:text-nuxt-lightgreen\n                dark:hover:text-nuxt-lightgreen\n              ",attrs:{"exact-active-class":"bg-green-100 text-nuxt-lightgreen dark:bg-green-800 dark:text-white",to:t.toLink(r,link)}},[link.menu?[t._v("\n                "+t._s(link.menu)+"\n                "),"Static"===link.target?n("AppLabel",{staticClass:"text-green-500 dark:text-green-300"},[t._v("\n                  "+t._s(link.target)+"\n                ")]):t._e(),t._v(" "),"Server"===link.target?n("AppLabel",{staticClass:"text-blue-500 dark:text-blue-300"},[t._v("\n                  "+t._s(link.target)+"\n                ")]):t._e(),t._v(" "),"Static & Server"===link.target?n("AppLabel",{staticClass:"\n                    px-1\n                    py-0\n                    ml-2\n                    text-purple-500\n                    lowercase\n                    align-middle\n                    rounded-sm\n                    dark:text-purple-300\n                    text-ss\n                  "},[t._v("\n                  "+t._s(link.target)+"\n                ")]):t._e()]:[t._v("\n                "+t._s(link.menuTitle||link.title)+"\n              ")]],2)],1)})),0):t._e()],1)})),t._v(" "),n("p",{staticClass:"pb-6 font-bold uppercase"},[n("NuxtLink",{staticClass:"\n            block\n            p-2\n            text-sm\n            bg-gray-100\n            border\n            rounded\n            dark:bg-dark-surface\n            dark:border-gray-900\n            text-light-onSurfaceSecondary\n            dark:text-dark-onSurfaceSecondary\n          ",attrs:{to:"/docs/release-notes","active-class":"","exact-active-class":""}},[t._v("\n          "+t._s(t.$t("common.version"))+"\n          "),n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$config.nuxtVersion))])])],1)],2)])])}),[],!1,null,"cca980e4",null);e.default=component.exports;installComponents(component,{AppLabel:n(330).default})}}]);