define([
	"jquery",
	"version"
], function($, Version){
	var Chicken = function(){
		//Constructor
	};

	Chicken.fn = Chicken.prototype = {
		name : "Chicken.js",
		version : Version.ChickenVersion,
		description : "Chicken.js is internalization library based on javascript.",
		constructor : Chicken,

		Translate : function(key, subkey, description) { return $(key).text(); }
	}

	return new Chicken;
});