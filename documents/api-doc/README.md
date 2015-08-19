# API Reference
This is API references of Chicken.js.

# 1. Getting Started

### 1.1 Adding attributes 'chicken' to HTML elements.
Adding attributes 'chicken' for translating text. If there has so long sentences or HTML elements, you can use 'senson' attribute to set customised translation key.<br/>
The 'chicken' attribute interprets the kinds of elements', and the 'season' is used for translation subkey to translate and managing translation process.
``` html
<!-- Adding attributes 'chicken' to translste text-->
<h1 class="title" chicken="text">Application Example</h1>
<!-- If there has so long sentences or HTML elements, you can use 'senson' attribute -->
<div class="description" chicken="text" season="introduction">
Chicken.js is internalization library based on javascript. 
It works on brower side, and translate web pages using translation dictionary.
</div>
```

### 1.2 Load your translation javascript module using 'require.js'
Insert below script tag in yout html page. The 'data-main' attribute is translator module which is writing next step.
``` html
<!-- Load application translator module -->
<script data-main="js/main" type="text/javascript" src="../bower_components/requirejs/require.js"></script>
```

### 1.3 Write main application.
Write main application javascript module with AMD format.
``` javascript
//-- /examples/js/main.js
requirejs.config({
    "baseUrl": "../sources",
    "paths": {
      "jquery": "../bower_components/jquery/dist/jquery"
    }
});

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
        // Dictionary load complete. Run translate.
        CC.Translate(function(result, err){
            // Translate complete
            console.log("Translation completed.");
        });
    });    
});
```

# 2. Setup

### 2.1 Module dependencies
Chicken.js depends on jquery. And it is refered as 'jquery'. <br/>
Therefore if you want to use chicken.js, please define 'jquery' module in your require.js configuration.
``` javascript
//-- ./examples/js/main.js
requirejs.config({
    "baseUrl": "../sources",
    "paths": {
      "jquery": "../bower_components/jquery/dist/jquery"
    }
});
```

### 2.2 Configurations
It need to load translation dictionary before translating. <br/>
You can use ```Config``` function to setup environment settings.<br/>

####Configuration Parameter
Parameter         | Description
------------------|----------------------------------------------
repositoryType    | Repository type. Currently, chicken.js only supports local file dictionary. 
repositoryAddress | Location of the repository. It can be file address, web URL or any accessable locatio using web browsers.
pageId            | Unique page ID. It will be using in group names of tranalations in the page.
language          | Language code within 2 characters. [See ISO 639-1 Code](https://www.loc.gov/standards/iso639-2/php/code_list.php) 
locale            | Country code within 2 characters. [See ISO 1366-1 Alpha-2](https://www.iso.org/obp/ui/#search/code/) 

####Configuration Example
``` javascript
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
});
```

# 3. Load Dictionary
Load translation dictionary data into Chicken.js's dictionary cache.
``` javascript
requirejs([
	"chicken"
],function (CC) {
    // Load translation dictionary 
    CC.Load(function(data, err){
        // TODO : write code after loading dictionary completed.
    });    
});
```

# 4. Translation
Do translate. You have to load translation dictionary before calling ```Translate``` function.
``` javascript
requirejs([
	"chicken"
],function (CC) {
    CC.Translate(function(result, err){
	    // Translate complete
	    console.log("Translation completed.");
	});   
});
```