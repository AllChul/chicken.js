define([
	"core",
	"jquery"
], function(CC, jQuery){
	CC.Translate = function(err){
		if(this.TranslationDictionary === undefined) 
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
			_translated = CC.TranslationDictionary.dictionary[_key];
			if(_translated !== undefined) jQuery(this).html( _translated );
		});
	};
});