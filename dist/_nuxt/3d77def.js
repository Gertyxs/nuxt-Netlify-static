(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{306:function(t,n,e){e(5),e(4),e(6),e(8),e(9);var r=e(25),o=e(26);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}t.exports={functional:!0,render:function(t,n){var e=n._c,data=(n._v,n.data),l=n.children,d=void 0===l?[]:l,f=data.class,h=data.staticClass,style=data.style,x=data.staticStyle,k=data.attrs,m=void 0===k?{}:k,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return e("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){r(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({class:[f,h],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},m)},y),d.concat([e("line",{attrs:{x1:"8",x2:"21",y1:"6",y2:"6"}}),e("line",{attrs:{x1:"8",x2:"21",y1:"12",y2:"12"}}),e("line",{attrs:{x1:"8",x2:"21",y1:"18",y2:"18"}}),e("line",{attrs:{x1:"3",x2:"3",y1:"6",y2:"6"}}),e("line",{attrs:{x1:"3",x2:"3",y1:"12",y2:"12"}}),e("line",{attrs:{x1:"3",x2:"3",y1:"18",y2:"18"}})]))}}},318:function(t,n,e){var content=e(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("232f8492",content,!0,{sourceMap:!1})},331:function(t,n,e){"use strict";e(318)},332:function(t,n,e){var r=e(36)((function(i){return i[1]}));r.push([t.i,".header_mobile_aside[data-v-b7280694]{\n  bottom:4rem;\n  top:4rem;\n  transform:translateX(calc(-100% - 1px));\n  transition-duration:.35s;\n  transition-property:transform;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.6, 1)\n}\n@media (min-width: 1024px){\n.header_mobile_aside[data-v-b7280694]{\n    top:6rem\n}\n}\n.header_mobile_aside--open[data-v-b7280694]{\n  transform:translateX(0);\n  transition-delay:0s\n}\n.header_mobile_aside--open .header_mobile_aside_group[data-v-b7280694]{\n  transform:translateX(0)\n}\n.content-wrapper[data-v-b7280694]{\n  margin-left:auto;\n  padding-left:1rem\n}\n@media (min-width: 640px){\n.content-wrapper[data-v-b7280694]{\n    max-width:calc(640px/2)\n}\n}\n@media (min-width: 768px){\n.content-wrapper[data-v-b7280694]{\n    max-width:calc(768px/2)\n}\n}\nbutton[data-v-b7280694]{\n  outline:none\n}\n.bookmark-button[data-v-b7280694]{\n  border-radius:0 9999px 9999px 0;\n  right:0;\n  transform:translateX(100%)\n}\n.bookmark-button[data-v-b7280694],.inner-button[data-v-b7280694]{\n  box-shadow:4px 2px 4px rgba(0,0,0,.101562);\n  top:1rem\n}\n.inner-button[data-v-b7280694]{\n  border-radius:100%;\n  right:1rem\n}",""]),r.locals={},t.exports=r},347:function(t,n,e){"use strict";e.r(n);e(28),e(5);var r=e(304),o=e.n(r),c=e(306),l=e.n(c),d=e(140),f=e.n(d),h={components:{ListIcon:l.a,TimesIcon:f.a},props:{links:{type:Object,default:function(){}},section:{type:String,required:!0}},data:function(){return{show:!1}},computed:{path:function(){return"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},sortedLinks:function(){var t=this,n={};return o()(Object.keys(this.links),(function(link){return Object.keys(t.$i18n.t("content.".concat(t.section))).indexOf(link)})).forEach((function(e){n[e]=t.links[e]})),n}},methods:{toLink:function(link){return this.localePath({name:this.section+"-slug",params:{slug:link.slug}})},clickOutsideHandler:function(){this.show&&(this.show=!1)}}},x=(e(331),e(3)),component=Object(x.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutsideHandler,expression:"clickOutsideHandler"}],staticClass:"fixed left-0 z-20 block w-full header_mobile_aside shadow-nuxt lg:hidden sm:w-1/2",class:{"header_mobile_aside--open":t.show}},[e("div",{staticClass:"h-full mx-auto transition-colors duration-300 ease-linear light:bg-light-surface dark:bg-dark-surface"},[e("div",{staticClass:"relative h-full content-wrapper"},[e("div",{staticClass:"h-full pt-4 overflow-y-auto"},t._l(t.sortedLinks,(function(n,r){return e("transition-group",{key:r,staticClass:"header_mobile_aside_group",attrs:{tag:"div",name:"list"}},[e("h3",{key:"title-"+r,staticClass:"pb-2 text-gray-500 uppercase"},[t._v("\n            "+t._s(t.$t("content."+t.section+"."+r))+"\n          ")]),t._v(" "),e("ul",{key:"list-"+r,staticClass:"pb-6"},t._l(n,(function(link,n){return e("li",{key:n,staticClass:"py-2"},[e("NuxtLink",{staticClass:"block transition-colors duration-300 ease-linear dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen",attrs:{"active-class":"",exact:"","exact-active-class":"text-nuxt-lightgreen",to:t.toLink(link)},nativeOn:{click:function(n){t.show=!1}}},[t._v("\n                "+t._s(link.title)+"\n              ")])],1)})),0)])})),1),t._v(" "),e("button",{staticClass:"absolute flex items-center justify-center w-10 h-10 transition-colors duration-300 ease-linear bg-gray-200 inner-button sm:hidden text-nuxt-gray dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary",on:{click:function(n){t.show=!1}}},[e("TimesIcon",{staticClass:"block h-5 transition-colors duration-300 ease-linear fill-current"})],1)]),t._v(" "),e("button",{staticClass:"absolute flex items-center justify-center w-10 h-10 transition-colors duration-300 ease-linear bg-gray-200 bookmark-button text-nuxt-gray dark:bg-dark-surface dark:text-dark-onSurfaceSecondary",on:{click:function(n){t.show=!t.show}}},[t.show?e("TimesIcon",{staticClass:"block h-5 transition-colors duration-300 ease-linear fill-current"}):e("ListIcon",{staticClass:"block transition-colors duration-300 ease-linear stroke-current text-nuxt-gray dark:text-dark-onSurfaceSecondary"})],1)])])}),[],!1,null,"b7280694",null);n.default=component.exports}}]);