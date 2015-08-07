requirejs.config({
    "baseUrl": "../sources",
    "paths": {
      "jquery": "../bower_components/jquery/dist/jquery",
    }
});

requirejs([
	"chicken"
],function (CC) {
    // Retrieve Chicken.js library information.
    console.log("Name : "+CC.name);
    console.log("Version : "+CC.version);
    console.log("Description : "+CC.description);

    // Configuration
    CC.SetServerAddress("http://localhost/i18n");

    // Load translation dictionary
    CC.Load(
    	"example", "ko", "kr", 
    	function(data, err){
            console.log("Loaded data : "+JSON.stringify(data));
        },
    	undefined );

    // Run translate
    CC.Translate();
});