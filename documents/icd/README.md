# Interface Control Document

The specfication of loading translation dictionary.<br/>
It includs how to setup local dictionary, and how to communicate with dictionary servers.<br/>

# Local file dictionary
Local file dictionary means translation dictionaries located in your appplication directory.<br/>
The dictionary data is stored in JSON format. And all dictionary items are accessable without any restrictions. 

## Directory structure
Translation dictionary files must be stored in designated location. These dictionary files are named 'strings.json and locate in sub-directoried witch named 'language-locale' format.<br/>
Here is a examples of the directory structure for local file dictionsries. '%i18n_root%'' is dictionary root which you determined.
```
%i18n_root%\
    +-- en-us
    |    +-- strings.json
    +-- ja-jp
    |    +-- strings.json
    +-- ko-kr
         +-- strings.json
```

# Dictionary file format
The local file dictionary file have informations of all pages. <br/>
It must include version number, and add dictionary with page names.<br/>
Each page have their own dictionary which composed with key-value pairs.
``` javascript
{
	"version" : "x.x.x" ,
	"%page_name1%" : {
	    "%key1%" : "%translation1%",
	    "%key2%" : "%translation2%",
	    "%key3%" : "%translation3%",
	    "%key4%" : "%translation4%"
	    // more on ...
    },
    "%page_name2%" : {
        // same format with %page_name1%
    }
}
```
