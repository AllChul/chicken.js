// Chicken.js Library Init
requirejs.config({
    "baseUrl": "lib/chicken",
    "paths": {
      "jquery": "lib/jquery/dist/jquery"
    }
});

// Translation example codes using Chicken.js
requirejs([
	"chicken",
    //"dev/dev-console"
],function (CC) {

    // Configulations
    CC.Config({
        // Repository Setup
        repositoryType : "static-json",
        repositoryAddress : "./i18n",
        // Dictionary Setup
        pageId : "example",
        language: "ko",
        locale: "kr"
    });

    // Load translation dictionary and run translate
    CC.Load(function(data, err){
        // Dictionary load complete
        console.log("Dictionary data loaded.");
        
        // Run translate
        CC.Translate(function(result, err){
            // Translate complete
            console.log("Translation completed.");
        });
    });    
});