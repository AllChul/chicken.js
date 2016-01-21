define([
	"core",
	"jquery"
], function(CC, jQuery){
	var _Translate = function(cbTranslateComplete, err){
		if(this.Dictionary === undefined) 
		{
			CC.Error("Translation dicrionary is not loaded yet.", err);
			return;
		}

		CC.Debug.TranslateList = [];
		CC.Debug.NewTranslations = [];

		jQuery("[chicken]").each(function(index, translateObj){

			var translateData = undefined;

			// Translate Text
			if(jQuery(this).attr('season').search("text") >= 0){
				// Search translation text
				translateData = jQuery.grep(CC.Dictionary.data, function(dictionaryData){
					return (
						dictionaryData.chicken === jQuery(translateObj).attr("chicken") 
						&& dictionaryData.season === "text"
					);
				});
			} 
			// Another translation logic here
			else
			{

			}

			//Replace element's body to translate
			if(translateData !== undefined && translateData.length > 0 && translateData[0].trans_value !== "" && translateData[0].trans_value !== undefined)
			{
				jQuery(this).html( translateData[0].trans_value );
				CC.Debug.TranslateList.push(translateData[0]);
			}
			else
			{
				CC.Debug.NewTranslations.push({
					"chicken" : jQuery(this).attr("chicken") , 
					"season" : jQuery(this).attr("season"), 
					"trans_value" : this.innerHTML
				});
			}
			
		});

		//Translation completed
		if(cbTranslateComplete !== undefined && typeof cbTranslateComplete === "function"){
			cbTranslateComplete();
		}

		window.dispatchEvent(window.ChickenEvent.TranslateComplete);
	};
	
	return _Translate;
});