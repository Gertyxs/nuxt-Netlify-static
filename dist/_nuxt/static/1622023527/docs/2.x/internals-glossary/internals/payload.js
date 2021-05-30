__NUXT_JSONP__("/docs/2.x/internals-glossary/internals", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu){return {data:[{links:{"components-glossary":[{slug:"pages-fetch",title:"The Fetch Hook",menu:"Fetch Hook",category:v,position:u},{slug:"pages-head",title:"The head Method",menu:"Head Method",category:v,position:u},{slug:"pages-key",title:"The key Property",menu:"Key Property",category:v,position:u},{slug:"pages-layout",title:"The layout Property",menu:"Layout Property",category:v,position:u},{slug:"pages-loading",title:aC,menu:"Loading Property",category:v,position:u},{slug:"pages-middleware",title:"The middleware Property",menu:"Middleware Property",category:v,position:u},{slug:"pages-transition",title:"The page `transition` Property",menu:"Transition Property",category:v,position:u},{slug:"pages-scrolltotop",title:"The scrollToTop Property",menu:"scrollToTop Property",category:v,position:u},{slug:"pages-validate",title:"The validate Method",menu:"Validate Method",category:v,position:u},{slug:"pages-watchquery",title:"The watchQuery Property",menu:"WatchQuery Property",category:v,position:u}],"configuration-glossary":[{slug:"configuration-alias",title:"The alias Property",menu:"alias",category:g,position:u},{slug:"configuration-build",title:"The build Property",menu:aq,category:g,position:P},{slug:"configuration-builddir",title:"The buildDir Property",menu:"buildDir",category:g,position:B},{slug:"configuration-cli",title:"The cli Property",menu:"cli",category:g,position:w},{slug:"configuration-css",title:"The css Property",menu:"css",category:g,position:Q},{slug:"configuration-components",title:"The components Property",menu:ar,category:g,position:X},{slug:"configuration-dev",title:"The dev Property",menu:"dev",category:g,position:ab},{slug:"configuration-dir",title:"The dir Property",menu:"dir",category:g,position:ac},{slug:"configuration-env",title:"The env Property",menu:"env",category:g,position:ad},{slug:"configuration-extend-plugins",title:"The extendPlugins Property",menu:"extendPlugins",category:g,position:ae},{slug:"configuration-generate",title:"The generate Property",menu:"generate",category:g,position:af},{slug:"configuration-global-name",title:"The globalName Property",menu:"globalName",category:g,position:as},{slug:"configuration-head",title:"The head Property",menu:"head",category:g,position:ag},{slug:"configuration-hooks",title:"The hooks Property",menu:"hooks",category:g,position:aD},{slug:"configuration-ignore",title:"The ignore Property",menu:"ignore",category:g,position:aE},{slug:"configuration-loading",title:aC,menu:aF,category:g,position:15},{slug:"configuration-loading-indicator",title:"The loading indicator Property",menu:"loadingIndicator",category:g,position:16},{slug:"configuration-mode",title:"The mode Property",menu:"mode",category:g,position:17},{slug:"configuration-modern",title:"The modern Property",menu:"modern",category:g,position:18},{slug:"configuration-modules",title:"The modules Property",menu:at,category:g,position:19},{slug:"configuration-modulesdir",title:"The modulesDir Property",menu:"modulesDir",category:g,position:20},{slug:"configuration-plugins",title:"API: The plugins Property",menu:au,category:g,position:21},{slug:"configuration-render",title:"The render Property",menu:aG,category:g,position:22},{slug:"configuration-rootdir",title:"The rootDir Property",menu:"rootDir",category:g,position:23},{slug:"configuration-router",title:"The router Property",menu:"router",category:g,position:24},{slug:"configuration-runtime-config",title:"RuntimeConfig properties",menu:"runtimeConfig",category:g,position:25},{slug:"configuration-server",title:"The server Property",menu:"server",category:g,position:26},{slug:"configuration-servermiddleware",title:"The serverMiddleware Property",menu:"serverMiddleware",category:g,position:27},{slug:"configuration-srcdir",title:"The srcDir Property",menu:"srcDir",category:g,position:28},{slug:"configuration-ssr",title:"The ssr Property",menu:"ssr",category:g,position:28.1},{slug:"configuration-target",title:"The target Property",menu:"target",category:g,position:29},{slug:"configuration-telemetry",title:"telemetry Property",menu:"telemetry",category:g,position:30},{slug:"configuration-transition",title:"transition Properties",menu:"transition",category:g,position:31},{slug:"configuration-vue-config",title:"The vue.config Property",menu:"vue.config",category:g,position:32},{slug:"configuration-watch",title:"The watch Property",menu:"watch",category:g,position:33},{slug:"configuration-watchers",title:"The watchers Property",menu:"watchers",category:g,position:34}],"get-started":[{slug:"installation",title:"Installation",position:P,category:R},{slug:"routing",title:"Routing",position:B,category:R},{slug:k,title:"Directory Structure",position:w,category:R},{slug:"commands",title:"Commands and Deployment",position:Q,category:R},{slug:"conclusion",title:"Conclusion",position:X,category:R},{slug:"upgrading",title:"Upgrading",position:ab,category:R}],"directory-structure":[{slug:n,title:"Nuxt build directory",menuTitle:".nuxt",position:P,category:k},{slug:aH,title:"Assets directory",menuTitle:aH,position:B,category:k},{slug:ar,title:"Components directory",menuTitle:ar,position:w,category:k},{slug:aI,title:"Content directory",menuTitle:aI,position:Q,category:k},{slug:aJ,title:"Dist directory",menuTitle:aJ,position:X,category:k},{slug:aK,title:"Layouts directory",menuTitle:aK,position:ac,category:k},{slug:aL,title:"Middleware directory",menuTitle:aL,position:ad,category:k},{slug:at,title:"Modules directory",menuTitle:at,position:ae,category:k},{slug:aM,title:"Pages directory",menuTitle:aM,position:af,category:k},{slug:au,title:"Plugins directory",menuTitle:au,position:as,category:k},{slug:aN,title:"Static directory",menuTitle:aN,position:ag,category:k},{slug:aO,title:"Store directory",menuTitle:aO,position:aD,category:k},{slug:"nuxt-config",title:"Nuxt configuration file",menuTitle:"nuxt.config",position:aE,category:k}],features:[{slug:"rendering-modes",title:"Rendering",position:P,category:x},{slug:"deployment-targets",title:"Deployment Targets",position:B,category:x},{slug:"file-system-routing",title:"File System Routing",position:w,category:x},{slug:"data-fetching",title:"Data Fetching",position:Q,category:x},{slug:"meta-tags-seo",title:"Meta Tags and SEO",position:ab,category:x},{slug:"configuration",title:"Configuration",position:ac,category:x},{slug:aF,title:"Loading",position:ad,category:x},{slug:"nuxt-components",title:"Nuxt Components",position:ae,category:x},{slug:"transitions",title:"Transitions",position:af,category:x},{slug:"live-preview",title:"Preview Mode",category:x,position:ag}],"internals-glossary":[{slug:"context",title:aP,menu:aP,category:l,position:P},{slug:aQ,title:aR,category:l,position:B},{slug:aS,title:aT,menu:aU,category:l,position:w},{slug:aV,title:aW,menu:aX,category:l,position:Q},{slug:"internals-renderer",title:"The Renderer Class",menu:av,category:l,position:X},{slug:"internals-module-container",title:"The ModuleContainer Class",menu:"Module Container",category:l,position:ab},{slug:"internals-builder",title:"The Builder Class",menu:ah,category:l,position:ac},{slug:"internals-generator",title:"The Generator Class",menu:aw,category:l,position:ad},{slug:n,title:"Using Nuxt.js Programmatically",menu:"Using Nuxt Programmatically",category:l,position:ae},{slug:"nuxt-render",title:"nuxt.render(req, res)",menu:aG,category:l,position:af},{slug:"nuxt-render-route",title:"nuxt.renderRoute(route, context)",menu:"renderRoute",category:l,position:as},{slug:"nuxt-render-and-get-window",title:"nuxt.renderAndGetWindow(url, options)",menu:"renderAndGetWindow",category:l,position:ag}],concepts:[{slug:"views",title:"Views",position:P,category:Y},{slug:"context-helpers",title:"Context and Helpers",position:B,category:Y},{slug:"server-side-rendering",title:"Server Side Rendering",position:w,category:Y},{slug:"static-site-generation",title:"Static Site Generation",position:Q,category:Y},{slug:"nuxt-lifecycle",title:"Nuxt Lifecycle",position:X,category:Y}],deployment:[{slug:"deploying-to-21yunbox",title:"Deploy Nuxt on 21YunBox",menu:"21YunBox",target:C,category:h,position:100},{slug:"deployment-amazon-web-services",title:"Deploy Nuxt on Amazon Web Services",menu:"Amazon Web Services",target:C,category:h,position:101},{slug:"deployment-azure-portal",title:"Deploy Nuxt on Azure Portal",menu:"Azure Portal",target:D,category:h,position:102},{slug:"deployment-azure-static-web-apps",title:"Deploy on Azure Static Web Apps",menu:"Azure Static Web Apps",target:C,category:h,position:103},{slug:"bip-deployment",title:"Deploy Nuxt with Bip",menu:"Bip",target:C,category:h,position:104},{slug:"cleavr-deployment",title:"Deploy Nuxt with Cleavr",menu:"Cleavr",target:S,category:h,position:104.1},{slug:"deploying-to-do-app-platform",title:"Deploy Nuxt on DigitalOcean App Platform",menu:"DO App Platform",target:S,category:h,position:104.2},{slug:"dokku-deployment",title:"Deploy Nuxt on Dokku",menu:"Dokku",target:D,category:h,position:105},{slug:"github-pages",title:"Deploy Nuxt on GitHub Pages",menu:"GitHub",target:C,category:h,position:106},{slug:"appengine-deployment",title:"Deploy Nuxt on Google App Engine",menu:"Google App Engine",target:D,category:h,position:107},{slug:"deployment-cloud-run",title:"Deploy Nuxt on Google Cloud Run",menu:"Google Cloud Run",target:D,category:h,position:108},{slug:"heroku-deployment",title:"Deploy Nuxt on Heroku",menu:"Heroku",target:D,category:h,position:109},{slug:"hostman-deployment",title:"Deploy Nuxt on Hostman",menu:"Hostman",target:C,category:h,position:110},{slug:"deployment-koyeb",title:"Deploy Nuxt on Koyeb Serverless Platform",menu:"Koyeb",target:D,category:h,position:110.1},{slug:"deploy-on-moovweb",title:"Deploy Nuxt on Layer0",menu:"Layer0",target:D,category:h,position:110.2},{slug:"netlify-deployment",title:"Deploy Nuxt on Netlify",menu:"Netlify",target:C,category:h,position:112},{slug:"nginx-proxy",title:"Using NGINX as a reverse proxy",menu:"NGINX",target:S,category:h,position:113},{slug:"deployment-platformsh",title:"Deploy Nuxt on Platform.sh",menu:"Platform.sh",target:S,category:h,position:113.5},{slug:"deployment-pm2",title:"Deploy Nuxt using PM2",menu:"PM2",target:D,category:h,position:114},{slug:"deployment-qovery",title:"Deploy Nuxt on Qovery",menu:"Qovery",target:S,category:h,position:115},{slug:"surge-deployment",title:"Deploy Nuxt with Surge",menu:"Surge",target:C,category:h,position:116},{slug:"vercel-deployment",title:"Deploy Nuxt with Vercel",menu:"Vercel",target:S,category:h,position:117},{slug:"deployment-cloudflare",title:"Deploy Nuxt on Cloudflare",menu:"Cloudflare",category:h,position:118}]}},{path:ai,showModal:false,langFallback:aY,section:aY,book:l,page:{slug:aS,description:"Better understand Nuxt internals",title:aT,menu:aU,category:l,position:w,toc:[{id:aZ,depth:w,text:a_},{id:aq,depth:w,text:a$},{id:ba,depth:w,text:bb},{id:bc,depth:B,text:bd},{id:be,depth:B,text:bf}],body:{type:"root",children:[{type:b,tag:z,props:{},children:[{type:a,value:"Nuxt.js has a fully modular architecture which allows developers extending any part of Nuxt Core using a flexible API."}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"Please see "},{type:b,tag:T,props:{to:"\u002Fdocs\u002F2.x\u002Fdirectory-structure\u002Fmodules"},children:[{type:a,value:"Modules Guide"}]},{type:a,value:" for more detailed information if interested developing your own module."}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"This section helps getting familiar to Nuxt internals and can be used as a reference to understand it better while writing your own modules."}]},{type:a,value:e},{type:b,tag:ax,props:{id:aZ},children:[{type:b,tag:j,props:{href:"#core",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:a_}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"These classes are the heart of Nuxt and should exist on both runtime and build time."}]},{type:a,value:e},{type:b,tag:E,props:{id:n},children:[{type:b,tag:j,props:{href:"#nuxt",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ay}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:b,tag:T,props:{to:"\u002Fdocs\u002F2.x\u002Finternals-glossary\u002Finternals-nuxt"},children:[{type:b,tag:m,props:{},children:[{type:a,value:ay}]},{type:a,value:Z}]}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fcore\u002Fsrc\u002Fnuxt.js",rel:[H,I,J],target:K},children:[{type:a,value:"core\u002Fnuxt.js"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{id:"renderer"},children:[{type:b,tag:j,props:{href:"#renderer",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:av}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:b,tag:T,props:{to:"\u002Fdocs\u002F2.x\u002Finternals-glossary\u002Finternals-renderer"},children:[{type:b,tag:m,props:{},children:[{type:a,value:av}]},{type:a,value:Z}]}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fvue-renderer\u002Fsrc\u002Frenderer.js",rel:[H,I,J],target:K},children:[{type:a,value:"vue-renderer\u002Frenderer.js"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{id:"modulecontainer"},children:[{type:b,tag:j,props:{href:"#modulecontainer",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:bg}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:b,tag:T,props:{to:"\u002Fdocs\u002F2.x\u002Finternals-glossary\u002Finternals-module-container"},children:[{type:b,tag:m,props:{},children:[{type:a,value:bg}]},{type:a,value:Z}]}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fcore\u002Fsrc\u002Fmodule.js",rel:[H,I,J],target:K},children:[{type:a,value:"core\u002Fmodule.js"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:ax,props:{id:aq},children:[{type:b,tag:j,props:{href:"#build",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:a$}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"These classes are only needed for build or dev mode."}]},{type:a,value:e},{type:b,tag:E,props:{id:"builder"},children:[{type:b,tag:j,props:{href:"#builder",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ah}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:b,tag:T,props:{to:"\u002Fdocs\u002F2.x\u002Finternals-glossary\u002Finternals-builder"},children:[{type:b,tag:m,props:{},children:[{type:a,value:ah}]},{type:a,value:Z}]}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fbuilder\u002Fsrc\u002Fbuilder.js",rel:[H,I,J],target:K},children:[{type:a,value:"builder\u002Fbuilder.js"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{id:"generator"},children:[{type:b,tag:j,props:{href:"#generator",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aw}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:b,tag:T,props:{to:"\u002Fdocs\u002F2.x\u002Finternals-glossary\u002Finternals-generator"},children:[{type:b,tag:m,props:{},children:[{type:a,value:aw}]},{type:a,value:Z}]}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fgenerator\u002Fsrc\u002Fgenerator.js",rel:[H,I,J],target:K},children:[{type:a,value:"generator\u002Fgenerator.js"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:ax,props:{id:ba},children:[{type:b,tag:j,props:{href:"#common",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:bb}]},{type:a,value:e},{type:b,tag:E,props:{id:"utils"},children:[{type:b,tag:j,props:{href:"#utils",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:bh}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Futils\u002Fsrc",rel:[H,I,J],target:K},children:[{type:a,value:"utils\u002Fsrc"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{id:U},children:[{type:b,tag:j,props:{href:"#options",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Options"}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:G},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fconfig\u002Fsrc\u002Foptions.js",rel:[H,I,J],target:K},children:[{type:a,value:"config\u002Foptions.js"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:bi,props:{id:bc},children:[{type:b,tag:j,props:{href:"#packaging--usage",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:bd}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"Nuxt exports all classes by default. To import them:"}]},{type:a,value:e},{type:b,tag:aj,props:{className:[ak]},children:[{type:b,tag:al,props:{className:[am,an]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,t,bj]},children:[{type:a,value:"import"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:bh}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t,bj]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:"'nuxt'"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:bi,props:{id:be},children:[{type:b,tag:j,props:{href:"#common-patterns",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:bf}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"All Nuxt classes have a reference to "},{type:b,tag:m,props:{},children:[{type:a,value:n}]},{type:a,value:" instance and options, this way we always have a consistent API across classes to access "},{type:b,tag:m,props:{},children:[{type:a,value:U}]},{type:a,value:" and "},{type:b,tag:m,props:{},children:[{type:a,value:n}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:aj,props:{className:[ak]},children:[{type:b,tag:al,props:{className:[am,an]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bk}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,bl]},children:[{type:a,value:"SomeClass"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,aB]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bn}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ap}]},{type:a,value:bo},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:U}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ap}]},{type:a,value:bp},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:U}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:"someFunction"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,bq]},children:[{type:a,value:"\u002F\u002F We have access to `this.nuxt` and `this.options`"}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"Classes are "},{type:b,tag:"em",props:{},children:[{type:a,value:"pluggable"}]},{type:a,value:" so they should register a plugin on main "},{type:b,tag:m,props:{},children:[{type:a,value:n}]},{type:a,value:" container to register more hooks."}]},{type:a,value:e},{type:b,tag:aj,props:{className:[ak]},children:[{type:b,tag:al,props:{className:[am,an]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bk}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,bl]},children:[{type:a,value:"FooClass"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,aB]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bn}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ap}]},{type:a,value:bo},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:U}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ap}]},{type:a,value:bp},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:U}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,br,_,A]},children:[{type:a,value:"callHook"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:bs}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:"So we can hook into "},{type:b,tag:m,props:{},children:[{type:a,value:bt}]},{type:a,value:" module like this:"}]},{type:a,value:e},{type:b,tag:aj,props:{className:[ak]},children:[{type:b,tag:al,props:{className:[am,an]},children:[{type:b,tag:m,props:{},children:[{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,br,_,A]},children:[{type:a,value:"hook"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:bs}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aB]},children:[{type:a,value:bt}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"arrow",aa]},children:[{type:a,value:"=\u003E"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,bq]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:e}]}]}]}]},dir:ai,path:"\u002Fen\u002Fguides\u002Finternals-glossary\u002Finternals",extension:".md",createdAt:bu,updatedAt:bu,readingTime:{text:"2 min read",minutes:1.355,time:81300,words:271}},prev:{slug:aQ,title:aR,dir:ai},next:{slug:aV,title:aW,menu:aX,dir:ai},contributors:[]}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","configuration-glossary","deployment"," ","a","directory-structure","internals-glossary","code","nuxt","true",-1,"icon","icon-link","li","keyword",0,"components-glossary",3,"features",".","p","property-access",2,"Static","Server","h4","ul","Source: ","nofollow","noopener","noreferrer","_blank","{","}","(",")",1,4,"get-started","Static & Server","nuxt-link","options","\n  ","this",5,"concepts"," Class","function","\n    ","operator",6,7,8,9,10,12,"Builder","\u002Fen\u002Fguides\u002Finternals-glossary","div","nuxt-content-highlight","pre","language-js","line-numbers",",","=","build","components",11,"modules","plugins","Renderer","Generator","h3","Nuxt","maybe-class-name","string","parameter","The loading Property",13,14,"loading","render","assets","content","dist","layouts","middleware","pages","static","store","The Context","$nuxt","$nuxt: The Nuxt.js helper","internals","Nuxt Modules Intro","Nuxt Modules","internals-nuxt","The Nuxt Class","Nuxt Class",void 0,"core","Core","Build","common","Common","packaging--usage","Packaging & Usage","common-patterns","Common patterns","ModuleContainer","Utils","h2","module","class","class-name","constructor","super"," nuxt\n    "," nuxt","comment","method","'foo'","foo","2021-05-26T09:10:16.000Z")));