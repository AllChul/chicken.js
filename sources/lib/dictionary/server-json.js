define([
	"jquery",
	"core"
], function(jQuery, CC){
	var _JSONServerDictionaryLoader = function(cbLoadComplete, err){
		jQuery.ajax({
			url : CC.Config.repositoryAddress,
			dataType : "jsonp",
			jsonp : "callback",
			data : {
				pageid : "example",
				locale : CC.Config.locale,
				language :  CC.Config.language,
				version : 1
			},
			success : function(result){
				if(result !== undefined && result.success == "true")
				{
					// Success to retrieve dictionary
					CC.Dictionary = result;
				}
				else
				{
					// Fail to retrieve dictionary
					CC.Dictionary = undefined;
					if(typeof err === "function")
					{
						err(result.message);
					}
				}

				if(typeof cbLoadComplete === "function"){
					cbLoadComplete(CC.Dictionary);
				}
			}
		});
	};

	return _JSONServerDictionaryLoader;
});