window.addEventListener('translate-complated', function (e) { 

	// Container for developers menu
	var drawerStyleContainer = document.createElement("style");
	drawerStyleContainer.innerHTML = ".drawer {bottom: 0px;height: 600px;overflow: hidden;position: absolute;width: 100%; z-index: 5; /* make this what you need to */ }  .drawer > header { background: #000000; /* add image if you want */ color: #ffffff; display: block; height: 25px; line-height: 25px; margin: auto; overflow: hidden; padding: 5px; text-align: center; width: 150px;  /* Radius round corners - change radius or delete if need be */ -moz-border-radius-topleft: 25px 40px; -moz-border-radius-topright: 25px 40px; border-top-left-radius: 25px 40px; border-top-right-radius: 25px 40px; }  .drawer-content { background: url(../sources/images/bg.png); border-collapse: collapse; border-top: 5px solid #000000; height: 570px; width: 100%; }  .clickme {   cursor: pointer; }  .drawer-items { margin: auto; width: 95%; } ";
	document.body.appendChild(drawerStyleContainer); 

	var drawer = document.createElement("section");
	drawer.className = "drawer";
	drawer.innerHTML = '<!-- <div> -->   <header class="clickme">For Developers</header>  <!-- </div> -->  <div class="drawer-content">   <div class="drawer-items">   content here    </div>   </div>'
	document.body.appendChild(drawer); 

	// developer menu tabs
	var tappedStyleContainer = document.createElement("style");
	tappedStyleContainer.innerHTML = "#tabbed_box_1 { 	margin: 0px auto 0px auto; 	width:100%px; } .tabbed_box h4 { 	font-family:Arial, Helvetica, sans-serif; 	font-size:23px; 	color:#ffffff; 	letter-spacing:-1px; 	margin-bottom:10px; } .tabbed_box h4 small { 	color:#e3e9ec; 	font-weight:normal; 	font-size:9px; 	font-family:Verdana, Arial, Helvetica, sans-serif; 	text-transform:uppercase; 	position:relative; 	top:-4px; 	left:6px; 	letter-spacing:0px; } .tabbed_area { 	border:1px solid #494e52; 	background-color:#636d76; 	padding:8px;	 }  ul.tabs { 	margin:0px; padding:0px; 	margin-top:5px; 	margin-bottom:6px; } ul.tabs li { 	list-style:none; 	display:inline; } ul.tabs li a { 	background-color:#464c54; 	color:#ffebb5; 	padding:8px 14px 8px 14px; 	text-decoration:none; 	font-size:9px; 	font-family:Verdana, Arial, Helvetica, sans-serif; 	font-weight:bold; 	text-transform:uppercase; 	border:1px solid #464c54; 	background-image:url(../sources/images/tab_off.jpg); 	background-repeat:repeat-x;	  	background-position:bottom; } ul.tabs li a:hover { 	background-color:#2f343a; 	border-color:#2f343a; } ul.tabs li a.active { 	background-color:#ffffff; 	color:#282e32; 	border:1px solid #464c54;  	border-bottom: 1px solid #ffffff; 	background-image:url(../sources/images/tab_on.jpg); 	background-repeat:repeat-x; 	background-position:top;	 } .tab_content { 	height : 100%; 	background-color:#ffffff; 	padding:10px; 	border:1px solid #464c54; 	 	font-family:Arial, Helvetica, sans-serif; 	background-image:url(../sources/images/content_bottom.jpg); 	background-repeat:repeat-x;	  	background-position:bottom;		 } #content_2, #content_3 { display:none; }  .bottom_tab_content{ 	height : 40px; 	text-align:right; 	padding-top : 5px; 	padding-right : 20px; 	padding-left : auto; }  .bottom_tab_content button{ 	height : 35px; 	padding : 5px; 	padding-left : 30px; 	padding-right : 30px; }  .header_tab_content{ 	height : 30px; 	padding-top : 5px; 	border-bottom:1px solid #d6dde0; }  .trans_key{ 	display: inline-block; 	width : 20%; 	text-align:center; 	vertical-align: middle;  }  .trans_kind{ 	width : 15%; 	text-align:center; 	display: inline-block; 	vertical-align: middle;  }  .trans_text{ 	width : 50%; 	text-align:center; 	display: inline-block; 	vertical-align: middle;  }  .trans_status{ 	width : 10%; 	text-align:center; 	display: inline-block; 	vertical-align: middle;  }  .trans_new_key{ 	display: inline-block; 	width : 15%; 	text-align:center; 	vertical-align: middle;  }  .trans_new_kind{ 	width : 5%; 	text-align:center; 	display: inline-block; 	vertical-align: middle;  }  .trans_new_text{ 	width : 30%; 	text-align:center; 	display: inline-block; 	vertical-align: middle;  }  .trans_new_desc{ 	width : 25%; 	text-align:center; 	display: inline-block; 	vertical-align: middle;  }  .trans_new_length{ 	width : 10%; 	text-align:right; 	display: inline-block; 	vertical-align: middle;  }  .trans_new_status{ 	width : 9%; 	text-align:right; 	display: inline-block; 	vertical-align: middle;  }  .tab_content ul { 	height : 420px; 	overflow-y:scroll;  	margin:0px; 	padding:0px 20px 0px 20px; }  #content_2 ul { 	height : 400px; }  .tab_content ul li { 	list-style:none; 	border-bottom:1px solid #d6dde0; 	padding-top:15px; 	padding-bottom:15px; 	font-size:13px; } .tab_content ul li:last-child { 	border-bottom:none; } .tab_content ul li a { 	text-decoration:none; 	color:#3e4346; } .tab_content ul li a small { 	color:#8b959c; 	font-size:9px; 	text-transform:uppercase; 	font-family:Verdana, Arial, Helvetica, sans-serif; 	position:relative; 	left:4px; 	top:0px; } .tab_content ul li a:hover { 	color:#a59c83; } .tab_content ul li a:hover small { 	color:#baae8e; }";
	document.body.appendChild(tappedStyleContainer); 

	$(".drawer-items")[0].innerHTML = '<div id="tabbed_box_1" class="tabbed_box">     <div class="tabbed_area">          	         <ul class="tabs">             <li><a href="#" title="content_1" class="tab active">번역결과보기</a></li>             <li><a href="#" title="content_2" class="tab">신규번역등록</a></li>             <li><a href="#" title="content_3" class="tab">번역사전정보</a></li>         </ul>                  <div id="content_1" class="tab_content">             <div class="header_tab_content">                 <span class="trans_key">Chicken</span>                 <span class="trans_kind">Season</span>                 <span class="trans_text">Script</span>                 <span class="trans_status">Status</span>             </div>         	<ul id="translatedList"> 			</ul>         </div>         <div id="content_2" class="tab_content">             <div class="header_tab_content">                 <span class="trans_new_key">Chicken</span>                 <span class="trans_new_kind">Season</span>                 <span class="trans_new_text">Script</span>                 <span class="trans_new_desc">Description</span>                 <span class="trans_new_length">Max Length</span>                 <span class="trans_new_status">Status</span>             </div>         	<ul id="newTranslate"> 			</ul>             <div class="bottom_tab_content">                 <button id="btnRequestTrans"> 번역 요청 </button>             </div>         </div>         <div id="content_3" class="tab_content">         	<ul id="about_chickenjs">             	<li><a href="#">about 1</a></li> 			</ul>         </div>          </div>  </div>';

	// Tab container
	$('.drawer').each(function(inx, obj){
		var _Header = $( $( obj ).children("header")[0]);
		$(obj).height( _Header.height() + 15);

		_Header.click(function(){
			if( $($('.drawer')[0]).height() <= (_Header.height()+20) )
			{
				$($('.drawer')[0]).height( _Header.height() + 5 + $( $( obj ).children(".drawer-content")[0] ).height() );
			}
			else
			{
				$($('.drawer')[0]).height(_Header.height() + 15);
			}
		});
	});

	// Tab event
	$("a.tab").click(function () {
		// switch all tabs off
		$(".active").removeClass("active");
		
		// switch this tab on
		$(this).addClass("active");
		
		// slide all content up
		$(".tab_content").slideUp();
		
		// slide this content up
		var content_show = $(this).attr("title");
		$("#"+content_show).slideDown();
	});

	// Translated List
	var translated = "";
	for(var inx = 0 ; inx < window.Chicken.Debug.TranslateList.length ; inx++){
		var transItem = window.Chicken.Debug.TranslateList[inx];
		translated += '<li><a href="#"><span class="trans_key">'
			+transItem.chicken
			+'</span><span class="trans_kind">'
			+transItem.season
			+'</span><span class="trans_text">'
			+transItem.trans_value.replace(/</g,'&lt;').replace(/>/g,'&gt;')
			+'</span><span class="trans_status">OK</span></a></li>';
	}	

	// New Translation List
	var newTrans = "";
	for(var inx = 0 ; inx < window.Chicken.Debug.NewTranslations.length ; inx++){
		var transItem = window.Chicken.Debug.NewTranslations[inx];
		translated += '<li><a href="#"><span class="trans_key">'
			+transItem.chicken
			+'</span><span class="trans_kind">'
			+transItem.season
			+'</span><span class="trans_text">'
			+transItem.trans_value.replace(/</g,'&lt;').replace(/>/g,'&gt;')
			+'</span><span class="trans_status">New</span></a></li>';
		newTrans += '<li><a href="#"><span class="trans_new_key">'
			+transItem.chicken
			+'</span><span class="trans_new_kind">'
			+transItem.season
			+'</span><span class="trans_new_text">'
			+transItem.trans_value.replace(/</g,'&lt;').replace(/>/g,'&gt;')
			+'</span><span class="trans_new_desc"><input name="desc" type="text" size="50"/></span>'
			+'<span class="trans_new_length"><input name="maxlength" type="text" size="5"/></span>'
			+'<span class="trans_new_status">New</span></a></li>';
	}

	// About Chicken.js
	var aboutChickenjs = '<li><a href="#">PageId : '+(window.Chicken.Dictionary===undefined?"None":window.Chicken.Dictionary.pageid)+'</a></li>'
			+'<li><a href="#">Loaded Dictionary : '+(window.Chicken.Dictionary===undefined?"None":(window.Chicken.Dictionary.language+"-"+window.Chicken.Config.locale))+'</a></li>'
			+'<li><a href="#">Dictionary Version : v.'+(window.Chicken.Dictionary===undefined?"None":window.Chicken.Dictionary.version)+'</a></li>'
			+'<li><a href="#">Dictionary Size : '+(window.Chicken.Dictionary===undefined?"None":window.Chicken.Dictionary.data.length)+'</a></li>';

	// Render List
	$("#translatedList")[0].innerHTML = translated;
	$("#newTranslate")[0].innerHTML = newTrans;
	$("#about_chickenjs")[0].innerHTML = aboutChickenjs;

	// request new translation
	$("#btnRequestTrans").click(function(){
		$("#newTranslate").children("li").each(function(inx, obj){
			var newItem = {
				pageid : window.Chicken.Config.pageId, 
				version : window.Chicken.Dictionary.version, 
				locale : window.Chicken.Config.locale, 
				language: window.Chicken.Config.language,
				chicken : $(obj.firstChild).children(".trans_new_key")[0].innerHTML, 
				season : $(obj.firstChild).children(".trans_new_kind")[0].innerHTML,
				description : $(obj.firstChild).children(".trans_new_desc").children("input")[0].value, 
				length : $(obj.firstChild).children(".trans_new_length").children("input")[0].value, 
				origin_value : $(obj.firstChild).children(".trans_new_text")[0].innerHTML, 
				transe_value : ""
			};

			$.ajax({
				url : "http://192.168.0.23:3000/api/transRequest",
				dataType : "jsonp",
				jsonp : "callback",
				data : newItem,
				success : function(result){
					$(obj.firstChild).children(".trans_new_status")[0].innerHTML = "OK",
					console.log(result);
				}
			});
		});		
	});

 }, false);