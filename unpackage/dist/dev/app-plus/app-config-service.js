
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/discover/discover","pages/my/my","pages/classify/classify","pages/simple/simple","pages/login/login","pages/register/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#0a7bc5","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/discover/discover","iconPath":"static/tabbar/discover.png","selectedIconPath":"static/tabbar/discover-active.png","text":"发现"},{"pagePath":"pages/classify/classify","iconPath":"static/tabbar/classify.png","selectedIconPath":"static/tabbar/classify-active.png","text":"分类"},{"pagePath":"pages/my/my","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-active.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"video","compilerVersion":"2.9.3","entryPagePath":"pages/discover/discover","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/discover/discover","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现","enablePullDownRefresh":false,"titleNView":{"searchInput":{"backgroundColor":"#fff","borderRadius":"15px","placeholder":"输入搜索内容","disabled":true,"align":"left"},"buttons":[{"disabled":true,"text":"分类","width":"44px","fontSize":"16px"}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/classify/classify","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false,"titleNView":{"backgroundColor":"#fff","searchInput":{"backgroundColor":"#f0f0f0","borderRadius":"15px","placeholder":"输入搜索内容","disabled":true,"align":"left"}}}},{"path":"/pages/simple/simple","meta":{},"window":{"navigationBarTitleText":"发布作品","enablePullDownRefresh":false,"titleNView":{"backgroundColor":"#FFFFFF"}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"backgroundColor":"#FFFFFF"}}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"backgroundColor":"#FFFFFF"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
