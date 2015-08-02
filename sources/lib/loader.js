define([
	"jquery",
	"core"
], function(jQuery, CC){
	CC.Load = function(pageId, lang, locale, cbLoadComplete, err){
		// Check connection informations
		if(this.Config.serverAddress === undefined) 
		{
			this.Error("Server address is not defined.", err);
			return;
		}
		
		// Check pageId, language code and locale code
		if(lang === undefined || lang.length != 2) 
		{
			this.Error("Language code is wrong. (current language code="+lang+")", err);
			return;
		}
		if(lang === undefined || lang.length != 2) 
		{
			this.Error("Language code is wrong. (current language code="+lang+")", err);
			return;
		}
		if(locale === undefined || locale.length != 2) 
		{
			this.Error("Locale code is wrong. (current language code="+locale+")", err);
			return;
		}

		// [Temp] Return dummy dictionary for test
		// Server communicate module will be written later.
		CC.TranslationDictionary = {
				pageId : pageId,
				lang : lang,
				locale : locale,
				version : "0.0.1", // dictionary version maintained by translation server
				dictionary : {
					// Translation dictionary here
					sample : "This is chicken.js sample text."
				}
			};
		if(typeof cbLoadComplete === "function"){
			cbLoadComplete(CC.TranslationDictionary);
		}
	}
});