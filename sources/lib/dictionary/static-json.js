define([
	"jquery",
	"core"
], function(jQuery, CC){
	var _JSONFileDictionaryLoader = function(cbLoadComplete, err){
		var fileURL = CC.Config.repositoryAddress+"/"+CC.Config.language+"-"+CC.Config.locale+"/strings.json";
		jQuery.getJSON(fileURL, function(_data){
			if(_data !== undefined)
			{
				CC.Dictionary = _data;
			} else {
				CC.Dictionary = undefined;
			}

			if(typeof cbLoadComplete === "function"){
				cbLoadComplete(CC.Dictionary);
			}
		});
	};

	return _JSONFileDictionaryLoader;
});