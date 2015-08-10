define([
	"jquery",
	"core"
], function(jQuery, CC){

	// Load translation dictionary
	// @param : pageId, lang, locale, cbLoadComplete, err
	CC.Load = function(cbLoadComplete, err){
		// Check connection informations
		if(CC.Config.repositoryType === undefined || CC.Config.repositoryAddress === undefined) 
		{
			this.Error("Repository information is wrong.", err);
			return;
		}
		
		// Check pageId, language code and locale code
		if(CC.Config.pageId === undefined) 
		{
			this.Error("Page ID is wrong. (current Page ID="+CC.Config.pageId+")", err);
			return;
		}
		if(CC.Config.language === undefined || CC.Config.language.length != 2) 
		{
			this.Error("Language code is wrong. (current language code="+CC.Config.language+")", err);
			return;
		}
		if(CC.Config.locale === undefined || CC.Config.locale.length != 2) 
		{
			this.Error("Locale code is wrong. (current locale code="+CC.Config.locale+")", err);
			return;
		}

		switch(CC.Config.repositoryType)
		{
			case "file":
				CC._LoadFileDictionary(cbLoadComplete, err);
				break;
			default:
				this.Error("Repository type '"+CC.Config.repositoryType+"' is not supported ", err);
		}
	}

	// Load dictionary from json file
	CC._LoadFileDictionary = function(cbLoadComplete, err){
		var fileURL = CC.Config.repositoryAddress+"/"+CC.Config.language+"-"+CC.Config.locale+"/strings.json";
		jQuery.getJSON(fileURL, function(_data){
			if(_data !== undefined)
			{
				CC.Dictionary = {
					pageId : CC.Config.pageId,
					lang : CC.Config.language,
					locale : CC.Config.locale,
					version : _data["version"], // dictionary version maintained by translation server
					data : _data[CC.Config.pageId] // Translation dictionary here
				};
			} else {
				CC.Dictionary = undefined;
			}

			if(typeof cbLoadComplete === "function"){
				cbLoadComplete(CC.Dictionary);
			}
		});
	};
});