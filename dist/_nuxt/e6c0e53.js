(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{301:function(n,t,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(37).default)("05d73238",content,!0,{sourceMap:!1})},307:function(n,t,o){"use strict";o(301)},308:function(n,t,o){var r=o(36)((function(i){return i[1]}));r.push([n.i,".light-mode #bsa-native .native-box{\n  background-color:#F8FAFC;\n  border-color:#e2e8f0\n}\n.light-mode #bsa-native .native-text{\n  --text-opacity:1;\n  color:#2F495E;\n  color:rgba(47, 73, 94, var(--text-opacity));\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-duration:300ms;\n  transition-timing-function:linear\n}\n.dark-mode #bsa-native .native-box{\n  background-color:#2C3E50;\n  border-color:#1a202c\n}\n.dark-mode #bsa-native .native-text{\n  --text-opacity:1;\n  color:#F5F7FA;\n  color:rgba(245, 247, 250, var(--text-opacity));\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-duration:300ms;\n  transition-timing-function:linear\n}\n#bsa-native .native-box{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-duration:300ms;\n  transition-timing-function:linear;\n  align-items:center;\n  border:1px solid transparent;\n  border-radius:0.25rem;\n  display:flex;\n  margin-bottom:1rem;\n  padding:0.5rem\n}\n#bsa-native a{\n  text-decoration:none\n}\n#bsa-native .native-sponsor{\n  background-color:#00C58E;\n  border-radius:0.25rem;\n  color:#fff;\n  font-size:0.75rem;\n  font-weight:500;\n  margin:0 0.5rem;\n  padding:0.25rem 0.75rem;\n  text-transform:uppercase\n}\n#bsa-native .native-sponsor:hover{\n  background-color:#00E0A1\n}\n#bsa-native .native-text{\n  font-size:1rem;\n  font-weight:400;\n  padding-left:0.5rem\n}",""]),r.locals={},n.exports=r},311:function(n,t,o){"use strict";o.r(t);var r={mounted:function(){this.$refs.carbonadsText&&this.loadScript()},methods:{loadScript:function(){if(window._bsa)return this.scriptLoaded();var script=document.createElement("script");script.setAttribute("type","text/javascript"),this.$refs.carbonadsText.appendChild(script),script.onload=this.scriptLoaded,script.setAttribute("src","//m.servedby-buysellads.com/monetization.js")},scriptLoaded:function(){if(void 0===window._bsa)return console.warn("Could not load Carbon Ads Text");window._bsa.init("custom","CKYD62QW","placement:nuxtjsorg",{target:"#bsa-native",template:'<a class="native-box" href="##statlink##"><div class="native-sponsor">Sponsor</div><div class="native-text"><strong>##company##</strong> — ##description##</div></a>'})}}},e=(o(307),o(3)),component=Object(e.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"carbonadsText"},[t("div",{attrs:{id:"bsa-native"}})])}),[],!1,null,null,null);t.default=component.exports}}]);