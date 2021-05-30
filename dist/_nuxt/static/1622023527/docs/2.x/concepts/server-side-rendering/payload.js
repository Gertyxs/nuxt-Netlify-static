__NUXT_JSONP__("/docs/2.x/concepts/server-side-rendering", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI){return {data:[{links:{"components-glossary":[{slug:"pages-fetch",title:"The Fetch Hook",menu:"Fetch Hook",category:v,position:u},{slug:"pages-head",title:"The head Method",menu:"Head Method",category:v,position:u},{slug:"pages-key",title:"The key Property",menu:"Key Property",category:v,position:u},{slug:"pages-layout",title:"The layout Property",menu:"Layout Property",category:v,position:u},{slug:"pages-loading",title:au,menu:"Loading Property",category:v,position:u},{slug:"pages-middleware",title:"The middleware Property",menu:"Middleware Property",category:v,position:u},{slug:"pages-transition",title:"The page `transition` Property",menu:"Transition Property",category:v,position:u},{slug:"pages-scrolltotop",title:"The scrollToTop Property",menu:"scrollToTop Property",category:v,position:u},{slug:"pages-validate",title:"The validate Method",menu:"Validate Method",category:v,position:u},{slug:"pages-watchquery",title:"The watchQuery Property",menu:"WatchQuery Property",category:v,position:u}],"configuration-glossary":[{slug:"configuration-alias",title:"The alias Property",menu:"alias",category:g,position:u},{slug:"configuration-build",title:"The build Property",menu:"build",category:g,position:F},{slug:"configuration-builddir",title:"The buildDir Property",menu:"buildDir",category:g,position:m},{slug:"configuration-cli",title:"The cli Property",menu:"cli",category:g,position:o},{slug:"configuration-css",title:"The css Property",menu:"css",category:g,position:G},{slug:"configuration-components",title:"The components Property",menu:ah,category:g,position:R},{slug:"configuration-dev",title:"The dev Property",menu:"dev",category:g,position:W},{slug:"configuration-dir",title:"The dir Property",menu:"dir",category:g,position:X},{slug:"configuration-env",title:"The env Property",menu:"env",category:g,position:Y},{slug:"configuration-extend-plugins",title:"The extendPlugins Property",menu:"extendPlugins",category:g,position:Z},{slug:"configuration-generate",title:"The generate Property",menu:"generate",category:g,position:_},{slug:"configuration-global-name",title:"The globalName Property",menu:"globalName",category:g,position:ai},{slug:"configuration-head",title:"The head Property",menu:"head",category:g,position:$},{slug:"configuration-hooks",title:"The hooks Property",menu:"hooks",category:g,position:av},{slug:"configuration-ignore",title:"The ignore Property",menu:"ignore",category:g,position:aw},{slug:"configuration-loading",title:au,menu:ax,category:g,position:15},{slug:"configuration-loading-indicator",title:"The loading indicator Property",menu:"loadingIndicator",category:g,position:16},{slug:"configuration-mode",title:"The mode Property",menu:"mode",category:g,position:17},{slug:"configuration-modern",title:"The modern Property",menu:"modern",category:g,position:18},{slug:"configuration-modules",title:"The modules Property",menu:aj,category:g,position:19},{slug:"configuration-modulesdir",title:"The modulesDir Property",menu:"modulesDir",category:g,position:20},{slug:"configuration-plugins",title:"API: The plugins Property",menu:ak,category:g,position:21},{slug:"configuration-render",title:"The render Property",menu:ay,category:g,position:22},{slug:"configuration-rootdir",title:"The rootDir Property",menu:"rootDir",category:g,position:23},{slug:"configuration-router",title:"The router Property",menu:"router",category:g,position:24},{slug:"configuration-runtime-config",title:"RuntimeConfig properties",menu:"runtimeConfig",category:g,position:25},{slug:"configuration-server",title:"The server Property",menu:"server",category:g,position:26},{slug:"configuration-servermiddleware",title:"The serverMiddleware Property",menu:"serverMiddleware",category:g,position:27},{slug:"configuration-srcdir",title:"The srcDir Property",menu:"srcDir",category:g,position:28},{slug:"configuration-ssr",title:"The ssr Property",menu:"ssr",category:g,position:28.1},{slug:"configuration-target",title:"The target Property",menu:"target",category:g,position:29},{slug:"configuration-telemetry",title:"telemetry Property",menu:"telemetry",category:g,position:30},{slug:"configuration-transition",title:"transition Properties",menu:"transition",category:g,position:31},{slug:"configuration-vue-config",title:"The vue.config Property",menu:"vue.config",category:g,position:32},{slug:"configuration-watch",title:"The watch Property",menu:"watch",category:g,position:33},{slug:"configuration-watchers",title:"The watchers Property",menu:"watchers",category:g,position:34}],"get-started":[{slug:"installation",title:"Installation",position:F,category:H},{slug:"routing",title:"Routing",position:m,category:H},{slug:l,title:"Directory Structure",position:o,category:H},{slug:"commands",title:"Commands and Deployment",position:G,category:H},{slug:"conclusion",title:"Conclusion",position:R,category:H},{slug:"upgrading",title:"Upgrading",position:W,category:H}],"directory-structure":[{slug:az,title:"Nuxt build directory",menuTitle:".nuxt",position:F,category:l},{slug:aA,title:"Assets directory",menuTitle:aA,position:m,category:l},{slug:ah,title:"Components directory",menuTitle:ah,position:o,category:l},{slug:al,title:"Content directory",menuTitle:al,position:G,category:l},{slug:aB,title:"Dist directory",menuTitle:aB,position:R,category:l},{slug:aC,title:"Layouts directory",menuTitle:aC,position:X,category:l},{slug:aD,title:"Middleware directory",menuTitle:aD,position:Y,category:l},{slug:aj,title:"Modules directory",menuTitle:aj,position:Z,category:l},{slug:aE,title:"Pages directory",menuTitle:aE,position:_,category:l},{slug:ak,title:"Plugins directory",menuTitle:ak,position:ai,category:l},{slug:aF,title:"Static directory",menuTitle:aF,position:$,category:l},{slug:aG,title:"Store directory",menuTitle:aG,position:av,category:l},{slug:"nuxt-config",title:"Nuxt configuration file",menuTitle:"nuxt.config",position:aw,category:l}],features:[{slug:"rendering-modes",title:"Rendering",position:F,category:w},{slug:"deployment-targets",title:"Deployment Targets",position:m,category:w},{slug:"file-system-routing",title:"File System Routing",position:o,category:w},{slug:"data-fetching",title:"Data Fetching",position:G,category:w},{slug:"meta-tags-seo",title:"Meta Tags and SEO",position:W,category:w},{slug:"configuration",title:"Configuration",position:X,category:w},{slug:ax,title:"Loading",position:Y,category:w},{slug:"nuxt-components",title:"Nuxt Components",position:Z,category:w},{slug:"transitions",title:"Transitions",position:_,category:w},{slug:"live-preview",title:"Preview Mode",category:w,position:$}],"internals-glossary":[{slug:"context",title:aH,menu:aH,category:p,position:F},{slug:"$nuxt",title:"$nuxt: The Nuxt.js helper",category:p,position:m},{slug:"internals",title:"Nuxt Modules Intro",menu:"Nuxt Modules",category:p,position:o},{slug:"internals-nuxt",title:"The Nuxt Class",menu:"Nuxt Class",category:p,position:G},{slug:"internals-renderer",title:"The Renderer Class",menu:"Renderer",category:p,position:R},{slug:"internals-module-container",title:"The ModuleContainer Class",menu:"Module Container",category:p,position:W},{slug:"internals-builder",title:"The Builder Class",menu:"Builder",category:p,position:X},{slug:"internals-generator",title:"The Generator Class",menu:"Generator",category:p,position:Y},{slug:az,title:"Using Nuxt.js Programmatically",menu:"Using Nuxt Programmatically",category:p,position:Z},{slug:"nuxt-render",title:"nuxt.render(req, res)",menu:ay,category:p,position:_},{slug:"nuxt-render-route",title:"nuxt.renderRoute(route, context)",menu:"renderRoute",category:p,position:ai},{slug:"nuxt-render-and-get-window",title:"nuxt.renderAndGetWindow(url, options)",menu:"renderAndGetWindow",category:p,position:$}],concepts:[{slug:"views",title:"Views",position:F,category:D},{slug:aI,title:aJ,position:m,category:D},{slug:aK,title:aL,position:o,category:D},{slug:aM,title:aN,position:G,category:D},{slug:"nuxt-lifecycle",title:"Nuxt Lifecycle",position:R,category:D}],deployment:[{slug:"deploying-to-21yunbox",title:"Deploy Nuxt on 21YunBox",menu:"21YunBox",target:A,category:h,position:100},{slug:"deployment-amazon-web-services",title:"Deploy Nuxt on Amazon Web Services",menu:"Amazon Web Services",target:A,category:h,position:101},{slug:"deployment-azure-portal",title:"Deploy Nuxt on Azure Portal",menu:"Azure Portal",target:B,category:h,position:102},{slug:"deployment-azure-static-web-apps",title:"Deploy on Azure Static Web Apps",menu:"Azure Static Web Apps",target:A,category:h,position:103},{slug:"bip-deployment",title:"Deploy Nuxt with Bip",menu:"Bip",target:A,category:h,position:104},{slug:"cleavr-deployment",title:"Deploy Nuxt with Cleavr",menu:"Cleavr",target:I,category:h,position:104.1},{slug:"deploying-to-do-app-platform",title:"Deploy Nuxt on DigitalOcean App Platform",menu:"DO App Platform",target:I,category:h,position:104.2},{slug:"dokku-deployment",title:"Deploy Nuxt on Dokku",menu:"Dokku",target:B,category:h,position:105},{slug:"github-pages",title:"Deploy Nuxt on GitHub Pages",menu:"GitHub",target:A,category:h,position:106},{slug:"appengine-deployment",title:"Deploy Nuxt on Google App Engine",menu:"Google App Engine",target:B,category:h,position:107},{slug:"deployment-cloud-run",title:"Deploy Nuxt on Google Cloud Run",menu:"Google Cloud Run",target:B,category:h,position:108},{slug:"heroku-deployment",title:"Deploy Nuxt on Heroku",menu:"Heroku",target:B,category:h,position:109},{slug:"hostman-deployment",title:"Deploy Nuxt on Hostman",menu:"Hostman",target:A,category:h,position:110},{slug:"deployment-koyeb",title:"Deploy Nuxt on Koyeb Serverless Platform",menu:"Koyeb",target:B,category:h,position:110.1},{slug:"deploy-on-moovweb",title:"Deploy Nuxt on Layer0",menu:"Layer0",target:B,category:h,position:110.2},{slug:"netlify-deployment",title:"Deploy Nuxt on Netlify",menu:"Netlify",target:A,category:h,position:112},{slug:"nginx-proxy",title:"Using NGINX as a reverse proxy",menu:"NGINX",target:I,category:h,position:113},{slug:"deployment-platformsh",title:"Deploy Nuxt on Platform.sh",menu:"Platform.sh",target:I,category:h,position:113.5},{slug:"deployment-pm2",title:"Deploy Nuxt using PM2",menu:"PM2",target:B,category:h,position:114},{slug:"deployment-qovery",title:"Deploy Nuxt on Qovery",menu:"Qovery",target:I,category:h,position:115},{slug:"surge-deployment",title:"Deploy Nuxt with Surge",menu:"Surge",target:A,category:h,position:116},{slug:"vercel-deployment",title:"Deploy Nuxt with Vercel",menu:"Vercel",target:I,category:h,position:117},{slug:"deployment-cloudflare",title:"Deploy Nuxt on Cloudflare",menu:"Cloudflare",category:h,position:118}]}},{path:aa,showModal:am,langFallback:aO,section:aO,book:D,page:{slug:aK,description:"Server-side rendering (SSR), is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser.",title:aL,position:o,category:D,questions:[{question:"What kinda of server do you need for Server Side Rendering?",answers:["PHP server","JavaScript server",aP],correctAnswer:aP},{question:"What do you use to extend and control the server?",answers:["Middleware",aQ,"It is not possible to control the server"],correctAnswer:aQ},{question:"You can host a server side rendered application on a serverless hosting provider",answers:[true,am],correctAnswer:am},{question:"Do we have access to  document on the server-side?",answers:["yes, it is always available",aR],correctAnswer:aR},{question:"When does your page become interactive?",answers:["When the browser receives the rendered HTML from the server",aS,"When a browser sends the initial request"],correctAnswer:aS},{question:"Navigating between pages using \u003CNuxtLink\u003E is done",answers:[aT,"Server side"],correctAnswer:aT},{question:"What are the correct steps?",answers:[aU,"server → browser, browser → server, server → server","browser → server, server → browser, browser → server"],correctAnswer:aU}],toc:[{id:aV,depth:m,text:aW},{id:aX,depth:m,text:aY},{id:aZ,depth:m,text:a_},{id:a$,depth:m,text:ba},{id:bb,depth:o,text:bc},{id:bd,depth:o,text:be},{id:bf,depth:o,text:bg},{id:bh,depth:m,text:bi},{id:bj,depth:o,text:bk},{id:bl,depth:o,text:bm},{id:bn,depth:m,text:bo},{id:bp,depth:m,text:bq}],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:a,value:"Server-side rendering (SSR), is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser. Server-side sends a fully rendered page to the client; the client's JavaScript bundle takes over which then allows the Vue.js app to "},{type:b,tag:k,props:{href:"https:\u002F\u002Fssr.vuejs.org\u002Fguide\u002Fhydration.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"hydrate"}]},{type:a,value:J}]},{type:a,value:f},{type:b,tag:E,props:{id:aV},children:[{type:b,tag:k,props:{href:"#nodejs-server-required",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:aW}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"A JavaScript environment is required to render your web page."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"A Node.js server needs to be configured to execute your Vue.js application."}]},{type:a,value:f},{type:b,tag:E,props:{id:aX},children:[{type:b,tag:k,props:{href:"#extend-and-control-the-server",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:aY}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"You can extend the server with serverMiddleware and control routes with middleware."}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:c,props:{className:[br]},children:[{type:a,value:"server-middleware\u002Flogger.js"}]},{type:b,tag:M,props:{className:[N,ab]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,O,ac]},children:[{type:a,value:bs}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,O,ac]},children:[{type:a,value:bt}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:C}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bu}]},{type:a,value:" res"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bu}]},{type:a,value:" next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,bv,"class-name"]},children:[{type:a,value:bv}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,ao,C,T]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"url"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:c,props:{className:[br]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:M,props:{className:[N,ab]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,O,ac]},children:[{type:a,value:bs}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,O,ac]},children:[{type:a,value:bt}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"\n  serverMiddleware"},{type:b,tag:c,props:{className:[d,"operator"]},children:[{type:a,value:":"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:"'~\u002Fserver-middleware\u002Flogger'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:bw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"If your server middleware consists of a list of functions mapped to paths:"}]},{type:a,value:f},{type:b,tag:E,props:{id:aZ},children:[{type:b,tag:k,props:{href:"#server-vs-browser-environments",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:a_}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Because you are in a Node.js environment you have access to Node.js objects such as "},{type:b,tag:i,props:{},children:[{type:a,value:an}]},{type:a,value:" and "},{type:b,tag:i,props:{},children:[{type:a,value:"res"}]},{type:a,value:". You do not have access to the "},{type:b,tag:i,props:{},children:[{type:a,value:ae}]},{type:a,value:af},{type:b,tag:i,props:{},children:[{type:a,value:bx}]},{type:a,value:" objects as they belong to the browser environment. You can however use "},{type:b,tag:i,props:{},children:[{type:a,value:ae}]},{type:a,value:af},{type:b,tag:i,props:{},children:[{type:a,value:bx}]},{type:a,value:" by using the "},{type:b,tag:i,props:{},children:[{type:a,value:by}]},{type:a,value:af},{type:b,tag:i,props:{},children:[{type:a,value:bz}]},{type:a,value:" hooks."}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,ab]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:by}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,bA,bB]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,ao,C,T]},children:[{type:a,value:bC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:bD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bE}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:bz}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,bA,bB]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,ao,C,T]},children:[{type:a,value:bC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:bD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bE}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:E,props:{id:a$},children:[{type:b,tag:k,props:{href:"#server-side-rendering-steps-with-nuxtjs",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ba}]},{type:a,value:f},{type:b,tag:V,props:{id:bb},children:[{type:b,tag:k,props:{href:"#step-1-browser-to-server",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bc}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"When a browser sends the initial request, it will hit the Node.js internal server. Nuxt.js will generate the HTML and send it back to the browser with results from executed functions, e.g. "},{type:b,tag:i,props:{},children:[{type:a,value:"asyncData"}]},{type:a,value:", "},{type:b,tag:i,props:{},children:[{type:a,value:"nuxtServerInit"}]},{type:a,value:af},{type:b,tag:i,props:{},children:[{type:a,value:"fetch"}]},{type:a,value:". Hooks functions are executed as well."}]},{type:a,value:f},{type:b,tag:V,props:{id:bd},children:[{type:b,tag:k,props:{href:"#step-2-server-to-browser",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:be}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"The browser receives the rendered page from the server with the generated HTML. The content is displayed and the Vue.js hydration kicks in, making it reactive. After this process, the page is interactive."}]},{type:a,value:f},{type:b,tag:V,props:{id:bf},children:[{type:b,tag:k,props:{href:"#step-3-browser-to-browser",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bg}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Navigating between pages with "},{type:b,tag:"nuxt-link",props:{to:"\u002Fdocs\u002F2.x\u002Ffeatures\u002Fnuxt-components#the-nuxtlink-component"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u003CNuxtLink\u003E"}]}]},{type:a,value:" is done on the client side so you don't hit the server again unless you hard refresh the browser."}]},{type:a,value:f},{type:b,tag:E,props:{id:bh},children:[{type:b,tag:k,props:{href:"#caveats",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bi}]},{type:a,value:f},{type:b,tag:V,props:{id:bj},children:[{type:b,tag:k,props:{href:"#window-or-document-undefined",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bk}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"This is due to the server-side rendering. If you need to specify that you want to import a resource only on the client-side, you need to use the "},{type:b,tag:i,props:{},children:[{type:a,value:"process.client"}]},{type:a,value:" variable."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"For example, in your "},{type:b,tag:i,props:{},children:[{type:a,value:".vue"}]},{type:a,value:" file:"}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,ab]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,O,"control-flow"]},children:[{type:a,value:"if"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:"process"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"client"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:"'external_library'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:V,props:{id:bl},children:[{type:b,tag:k,props:{href:"#ios-and-phone-numbers",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bm}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Some mobile Safari versions will automatically transform phone numbers into links. This will trigger a "},{type:b,tag:i,props:{},children:[{type:a,value:"NodeMismatch"}]},{type:a,value:" warning as the SSR content doesn't match the website content anymore. This can make your app unusable on these Safari versions."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"If you include telephone numbers in your Nuxt page, you have two options."}]},{type:a,value:f},{type:b,tag:E,props:{id:bn},children:[{type:b,tag:k,props:{href:"#use-a-meta-tag-to-stop-the-transformation",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bo}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,bF]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ap}]},{type:a,value:"meta"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,ar]},children:[{type:b,tag:c,props:{className:[d,e,as]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:"format-detection"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,ar]},children:[{type:b,tag:c,props:{className:[d,e,as]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:"telephone=no"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:E,props:{id:bp},children:[{type:b,tag:k,props:{href:"#wrap-your-phone-numbers-in-links",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:bq}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,bF]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u003C!-- Example phone number: +7 (982) 536-50-77 --\u003E"}]},{type:a,value:bw},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ap}]},{type:a,value:bG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ap}]},{type:a,value:k}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:"href"}]},{type:b,tag:c,props:{className:[d,ar]},children:[{type:b,tag:c,props:{className:[d,e,as]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:"tel: +7 (982) 536-50-77"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:a,value:"+7 (982) 536-50-77"},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bH}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bH}]},{type:a,value:bG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"quiz",props:{":questions":"questions"},children:[{type:a,value:f}]}]},dir:aa,path:"\u002Fen\u002Fguides\u002Fconcepts\u002Fserver-side-rendering",extension:".md",createdAt:bI,updatedAt:bI,readingTime:{text:"3 min read",minutes:2.315,time:138900,words:463}},prev:{slug:aI,title:aJ,dir:aa},next:{slug:aM,title:aN,dir:aa},contributors:[]}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","configuration-glossary","deployment","code"," ","a","directory-structure",2,"p",3,"internals-glossary","true",-1,"icon","icon-link",0,"components-glossary","features","tag","(",")","Static","Server","function","concepts","h2",1,4,"get-started","Static & Server",".","div","nuxt-content-highlight","pre","line-numbers","keyword","\n  ","\"",5,"{","property-access","}","h3",6,7,8,9,10,12,"\u002Fen\u002Fguides\u002Fconcepts","language-js","module","string","window"," or ","\u003E","components",11,"modules","plugins","content",false,"req","method","\u003C","attr-name","attr-value","attr-equals","=","The loading Property",13,14,"loading","render","nuxt","assets","dist","layouts","middleware","pages","static","store","The Context","context-helpers","Context and Helpers","server-side-rendering","Server Side Rendering","static-site-generation","Static Site Generation",void 0,"Node.js server","ServerMiddleware","No, The object belongs to the browser and is not available on the server","When the Vue.js hydration kicks in","Client side","browser → server, server → browser, browser → browser","nodejs-server-required","Node.js server required","extend-and-control-the-server","Extend and control the server","server-vs-browser-environments","Server vs Browser environments","server-side-rendering-steps-with-nuxtjs","Server-side rendering steps with Nuxt.js","step-1-browser-to-server","Step 1: Browser to Server","step-2-server-to-browser","Step 2: Server to Browser","step-3-browser-to-browser","Step 3: Browser to Browser","caveats","Caveats","window-or-document-undefined","window or document undefined","ios-and-phone-numbers","iOS and phone numbers","use-a-meta-tag-to-stop-the-transformation","Use a meta tag to stop the transformation","wrap-your-phone-numbers-in-links","Wrap your phone numbers in links","filename","export","default",",","console","\n\n","document","beforeMount","mounted","dom","variable","alert","'hello'",";","language-html","template","\u003C\u002F","2021-05-26T09:10:16.000Z")));