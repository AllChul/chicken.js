requirejs.config({
    "baseUrl": "../sources",
    "paths": {
      "jquery": "../bower_components/jquery/dist/jquery",
    }
});

requirejs([
	"chicken"
],function (CC) {
    console.log("Name : "+CC.name);
    console.log("Version : "+CC.version);
    console.log("Description : "+CC.description);
    console.log("Sample Text : "+CC.Translate("#sample"));
});