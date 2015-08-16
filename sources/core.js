define([
	"etc/version"
], function(Version){
	var Chicken = function(){
		//Constructor
	};

	Chicken.fn = Chicken.prototype = {
		name : "Chicken.js",
		version : Version.ChickenVersion,
		description : "Chicken.js is internalization library based on javascript.",
		constructor : Chicken,

		Config : undefined,
		Load : undefined,
		Translate : undefined,

		Error : function(message, err){
			if(typeof err == "function") err(message);
			else console.log("[Error] "+message);
		}
	}

	return new Chicken;
});