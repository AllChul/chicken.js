define([
	"core",
	"jquery"
], function(CC, jQuery){
	CC.Translate = function(cbTranslateComplete, err){
		if(this.Dictionary === undefined) 
		{
			CC.Error("Translation dicrionary is not loaded yet.", err);
			return;
		}

		jQuery("[chicken='text']").each(function(index, obj){
			
			//Translation key
			var _key = undefined;
			var _translated = undefined;

			//Parsing key on element's text. But it were seasoning, the key based on the 'season' attribute.
			if(jQuery(this).attr('season') !== undefined){
				_key = jQuery(this).attr('season');
			} else {
				_key = jQuery(this).text().trim();
			}

			//Replace element's body to translate
			_translated = CC.Dictionary.data[_key];
			if(_translated !== undefined) jQuery(this).html( _translated );
		});

		//Translation completed
		if(cbTranslateComplete !== undefined && typeof cbTranslateComplete === "function"){
			cbTranslateComplete();
		}
	};
});