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
		var _dictionarySample = {
			"ko-kr" : {
				"Application Example" : "애플리케이션 예제",
				"introduction" : "Chicken.js는 자바스크립트 기반의 다국어지원 라이브러리 입니다. 이 라이브러리는 웹 브라우저 위에서 동작하며, 번역사전을 이용하여 웹페이지를 번역할 수 있습니다.",
				"Why Chicken?" : "치킨이라 부르는 이유",
				"desc_whychicken" : "치킨은 평화이지 진리입니다. 미국인, 유럽인, 아시아인을 비롯한 모든 사람들이 치킨을 좋아합니다. 어떤 이는 돼지고기를 먹지 않고, 또 다른 어떤이는 조개를 먹지 않지만, 오직 치킨은 모두가 좋아합니다. 따라서 이 치킨은 모두를 아우를 수 있는 국제화의 표상이라 할 수 있습니다.<br/> 유투브 : <a href=\"https://www.youtube.com/watch?v=MYpSoP2kw00\">https://www.youtube.com/watch?v=MYpSoP2kw00</a><br/>한국어 자막캡처 : <a href=\"http://www.inven.co.kr/board/powerbbs.php?come_idx=2097&l=308286\">http://www.inven.co.kr/board/powerbbs.php?come_idx=2097&l=308286</a>"
			}
		}

		var _dictionary = _dictionarySample[lang+"-"+locale];
		if(_dictionary !== undefined)
		{
			CC.TranslationDictionary = {
				pageId : pageId,
				lang : lang,
				locale : locale,
				version : "0.0.1", // dictionary version maintained by translation server
				dictionary : _dictionary // Translation dictionary here
			};
		} else {
			CC.TranslationDictionary = undefined;
		}

		if(typeof cbLoadComplete === "function"){
			cbLoadComplete(CC.TranslationDictionary);
		}
	}
});