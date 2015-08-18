# Chicken.js
Chicken.js is internalization library based on javascript. It works on brower side, and translate web pages using translation dictionary. 

# Why Chicken?
Fried chichken is truth and peace. Americans, Europeans, Asians and all are loving the chicken. Someone do not eat pork or some other do not eat shellfish, but everyone eat the chicken. Therefore the chicken is the most resonable icon of internationalization.<br/>
Youtube : https://www.youtube.com/watch?v=MYpSoP2kw00<br/>
Korean script : http://www.inven.co.kr/board/powerbbs.php?come_idx=2097&l=308286

# Install
Chicken.js written in AMD format. And It using jQuery for DOM parser. You can install dependencies easily using 'Bower'. Here is Ubuntu linux example. Other environments are generally simalar. (Install node.js , bower and run bower script.)
```
$ sudo apt-get install nodejs
$ sudo npm install -g bower
$ bower install
```

# Usages
Chicken.js is not released. Unfortunately we have to use development version yet.

### 1. Adding attributes 'chicken' to HTML elements.
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
### 2. Load your translation javascript module using 'require.js'
Insert below script tag in yout html page. The 'data-main' attribute is translator module which is writing next step.
``` html
<!-- Load application translator module -->
<script data-main="js/main" type="text/javascript" src="../bower_components/requirejs/require.js"></script>
```

### 3. Setup require.js envoronments
Setup environments in your translator module(e.g. : ./examples/js/main.js). Set 'baseUrl' to pint to 'chicken.js' source root. And define 'jquery' path for dependencies.
``` javascript
//-- ./examples/js/main.js
requirejs.config({
    "baseUrl": "../sources",
    "paths": {
      "jquery": "../bower_components/jquery/dist/jquery"
    }
});
```

### 4. Write translator module for your application.
Configurate dictionary information. Load and run chicken.js to tralslate your application.
``` javascript
//-- ./examples/js/main.js
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

# Dependencies 

### For use
* require.js ~ 2.x.x
* jquery ~ 2.x.x

### For development
* node.js 
* bower
* require.js ~ 2.x.x
* jquery ~ 2.x.x

# Licence
MIT
