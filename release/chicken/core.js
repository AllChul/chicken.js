define(["etc/version"],function(e){var t=function(){};return t.fn=t.prototype={name:"Chicken.js",version:e.ChickenVersion,description:"Chicken.js is internalization library based on javascript.",constructor:t,Config:undefined,Load:undefined,Translate:undefined,Debug:{TranslateList:[],NewTranslations:[]},Error:function(e,t){typeof t=="function"?t(e):console.log("[Error] "+e)}},window.ChickenEvent={},window.ChickenEvent.TranslateComplete=new Event("translate-complated"),new t});