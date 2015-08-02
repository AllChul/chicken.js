define([
	"core",
	"jquery"
], function(CC, jQuery){
	CC.Translate = function(err){
		if(this.TranslationDictionary === null) 
		{
			CC.Error("Translation dicrionary is not loaded yet.", err);
			return;
		}

		// Translation Code Here
		console.log("load translator");
	};
});