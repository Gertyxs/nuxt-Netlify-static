(window.webpackJsonp=window.webpackJsonp||[]).push([[86,10,14,21,42,43,58],{301:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("05d73238",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n(301)},308:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".light-mode #bsa-native .native-box{\n  background-color:#F8FAFC;\n  border-color:#e2e8f0\n}\n.light-mode #bsa-native .native-text{\n  --text-opacity:1;\n  color:#2F495E;\n  color:rgba(47, 73, 94, var(--text-opacity));\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-duration:300ms;\n  transition-timing-function:linear\n}\n.dark-mode #bsa-native .native-box{\n  background-color:#2C3E50;\n  border-color:#1a202c\n}\n.dark-mode #bsa-native .native-text{\n  --text-opacity:1;\n  color:#F5F7FA;\n  color:rgba(245, 247, 250, var(--text-opacity));\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-duration:300ms;\n  transition-timing-function:linear\n}\n#bsa-native .native-box{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-duration:300ms;\n  transition-timing-function:linear;\n  align-items:center;\n  border:1px solid transparent;\n  border-radius:0.25rem;\n  display:flex;\n  margin-bottom:1rem;\n  padding:0.5rem\n}\n#bsa-native a{\n  text-decoration:none\n}\n#bsa-native .native-sponsor{\n  background-color:#00C58E;\n  border-radius:0.25rem;\n  color:#fff;\n  font-size:0.75rem;\n  font-weight:500;\n  margin:0 0.5rem;\n  padding:0.25rem 0.75rem;\n  text-transform:uppercase\n}\n#bsa-native .native-sponsor:hover{\n  background-color:#00E0A1\n}\n#bsa-native .native-text{\n  font-size:1rem;\n  font-weight:400;\n  padding-left:0.5rem\n}",""]),r.locals={},t.exports=r},311:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){this.$refs.carbonadsText&&this.loadScript()},methods:{loadScript:function(){if(window._bsa)return this.scriptLoaded();var script=document.createElement("script");script.setAttribute("type","text/javascript"),this.$refs.carbonadsText.appendChild(script),script.onload=this.scriptLoaded,script.setAttribute("src","//m.servedby-buysellads.com/monetization.js")},scriptLoaded:function(){if(void 0===window._bsa)return console.warn("Could not load Carbon Ads Text");window._bsa.init("custom","CKYD62QW","placement:nuxtjsorg",{target:"#bsa-native",template:'<a class="native-box" href="##statlink##"><div class="native-sponsor">Sponsor</div><div class="native-text"><strong>##company##</strong> — ##description##</div></a>'})}}},o=(n(307),n(3)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"carbonadsText"},[e("div",{attrs:{id:"bsa-native"}})])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);n(56),n(45);var r={props:{docLink:{type:String,required:!1,default:""},contributors:{type:Array,required:!1,default:function(){return[]}}},computed:{baseLink:function(){return"/"+this.$route.params.section},lastPathPart:function(){return this.$route.path.replace(/\/$/,"").split("/")[2]||""}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-4"},[n("div",{staticClass:"pt-3 mt-6 border-t border-light-border dark:border-dark-border"},[t.contributors.length?n("h3",{staticClass:"relative table my-2 text-xl transition-colors duration-300 ease-linear empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[t._v("\n      "+t._s(t.$t("contribute.title"))+"\n    ")]):t._e(),t._v(" "),t.contributors.length?n("div",t._l(t.contributors,(function(e){return n("a",{key:e.login,staticClass:"inline-flex mb-2 mr-2 overflow-hidden transition-colors duration-300 ease-linear border rounded text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary bg-light-surfaceElevated light:hover:bg-gray-300 dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface border-light-border dark:border-dark-border",attrs:{href:"https://github.com/"+e.login,rel:"noopener",target:"_blank"}},[n("img",{staticClass:"h-8",attrs:{alt:e.name,srcset:"https://github.com/"+e.login+".png?size=32 1x, https://github.com/"+e.login+".png?size=64 2x",src:"https://github.com/"+e.login+".png?size=32"}}),t._v(" "),n("span",{staticClass:"inline-block px-2 leading-loose"},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0):t._e(),t._v(" "),t.docLink&&t.$route.params.book?n("p",{staticClass:"pt-1 mb-8 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},[t._v("\n      "+t._s(t.$t("contribute.docs"))+"\n      "),n("a",{staticClass:"text-primary-base hover:underline",attrs:{href:t.docLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("contribute.edit_on_github"))+"\n      ")])]):t.docLink&&t.$route.path.startsWith("/blog")?n("p",{staticClass:"pt-1 mb-8 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},[t._v("\n      "+t._s(t.$t("contribute.blog"))+"\n      "),n("a",{staticClass:"text-primary-base hover:underline",attrs:{href:t.docLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("contribute.edit_on_github"))+"\n      ")])]):t._e(),t._v(" "),n("AdsCarbonText",{key:t.$route.path})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdsCarbonText:n(311).default})},324:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var r={props:{docLink:{type:String,default:""},langFallback:{type:Boolean}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.langFallback?n("div",{staticClass:"p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary"},[t._v("\n  ⚠️ You are looking at the english version of the page. Help us translate it\n  "),n("a",{staticClass:"text-orange-600",attrs:{href:t.docLink,target:"_blank"}},[t._v("here")]),t._v(".\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);n(28),n(56);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},section:{type:String,default:""}},computed:{prevBook:function(){if(this.prev){var t=this.prev.dir.split("/").slice(-1);return t[t.length-1]}},nextBook:function(){if(this.next){var t=this.next.dir.split("/");return t[t.length-1]}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center"},[t.prev?n("NuxtLink",{staticClass:"text-primary-base font-bold hover:underline flex items-center p-2 pl-0",attrs:{"data-cy":"prev",to:t.localePath({name:"docs-2.x-book-slug",params:{book:t.prevBook,slug:t.prev.slug}})}},[n("IconArrowLeft",{staticClass:"w-4 h-4 mr-1"}),t._v(" "),t.prev.menu?[t._v("\n      "+t._s(t.prev.menu)+"\n    ")]:[t._v("\n      "+t._s(t.prev.title)+"\n    ")]],2):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"text-primary-base font-bold hover:underline flex items-center p-2 pr-0",attrs:{"data-cy":"next",to:t.localePath({name:"docs-2.x-book-slug",params:{book:t.nextBook,slug:t.next.slug}})}},[t.next.menu?[t._v("\n      "+t._s(t.next.menu)+"\n    ")]:[t._v("\n      "+t._s(t.next.title)+"\n    ")],t._v(" "),n("IconArrowRight",{staticClass:"w-4 h-4 ml-1"})],2):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(324).default,IconArrowRight:n(325).default})},374:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("28813cf0",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n(374)},414:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,"article h1[data-v-634b087b]{\n  font-weight:500;\n  position:relative;\n  font-size:1.875rem;\n  display:table;\n  margin-bottom:1.5rem\n}",""]),r.locals={},t.exports=r},492:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(17),n(27),{scrollToTop:!0,asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d,path,f,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.$contributors,o=t.params,t.store,l=t.error,c=t.app,d=o.slug||"hello-world",path="/".concat(c.i18n.defaultLocale,"/examples"),e.prev=3,e.next=6,n(path,d).fetch();case 6:f=e.sent,e.next=14;break;case 9:if(e.prev=9,e.t0=e.catch(3),e.t0.response&&404===e.t0.response.status){e.next=13;break}return e.abrupt("return",l({statusCode:500,message:c.i18n.t("common.an_error_occurred")}));case 13:return e.abrupt("return",l({statusCode:404,message:c.i18n.t("common.page_not_found")}));case 14:if(c.i18n.locale===c.i18n.defaultLocale||!["pt","es","zh"].includes(c.i18n.locale)){e.next=26;break}return e.prev=15,path="/".concat(c.i18n.locale,"/examples"),e.next=19,n(path,d).fetch();case 19:f=e.sent,e.next=26;break;case 22:e.prev=22,e.t1=e.catch(15),v=!0,path="/".concat(c.i18n.defaultLocale,"/examples");case 26:return e.next=28,r("/content".concat(path,"/").concat(d));case 28:return m=e.sent,e.abrupt("return",{path:path,showModal:!1,langFallback:v,section:o.section,book:o.book,page:f,prev:null,next:null,contributors:m});case 30:case"end":return e.stop()}}),e,null,[[3,9],[15,22]])})))()},head:function(){return{title:this.page.title,titleTemplate:"%s - NuxtJS",meta:[{hid:"description",name:"description",content:this.page.description},{hid:"og:title",property:"og:title",content:this.page.title},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.page.description}]}},computed:{docLink:function(){return"https://github.com/nuxt/nuxtjs.org/blob/main/content".concat(this.path,"/").concat(this.$route.params.slug,".md")}}}),l=(n(413),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col-reverse -mx-4 lg:mx-0 lg:flex-row"},[n("div",{staticClass:"w-full px-4 py-8 lg:min-h-screen lg:w-4/4 lg:static lg:overflow-visible lg:max-h-full"},[n("LangFallback",{attrs:{"doc-link":t.docLink,"lang-fallback":t.langFallback}}),t._v(" "),n("article",[n("h1",{staticClass:"transition-colors duration-300 ease-linear text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[t._v("\n        "+t._s(t.page.title)+"\n      ")]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),n("AppPrevNextNew",{staticClass:"mt-4",attrs:{prev:t.prev,next:t.next,section:"examples"}}),t._v(" "),n("AppContribute",{attrs:{"doc-link":t.docLink,contributors:t.contributors}})],1)],1)])}),[],!1,null,"634b087b",null);e.default=component.exports;installComponents(component,{LangFallback:n(349).default,AppPrevNextNew:n(350).default,AppContribute:n(322).default})}}]);