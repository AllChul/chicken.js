// Chicken.js Library Init
requirejs.config({
    "baseUrl": "../sources",
    "paths": {
      "jquery": "../bower_components/jquery/dist/jquery"
    }
});

// Translation example codes using Chicken.js
requirejs([
	"chicken"
],function (CC) {

    // Configulations
    CC.Config({
        // Repository Setup
        repositoryType : "file",
        repositoryAddress : "./i18n/",
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