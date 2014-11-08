
var menu = {
	//
	folder : "/wwweb/03.naked_sessions/",
	//folder : "",
	//
	locationPath : "" + location.pathname + "" + location.search + "",
	//
	init : function(){
		//
		this.menuTab();
		//
		this.menuHover();
	},
	//
	menuHover : function(){
		//
		var img = "";
		//
		$(".menu").each(function(){
			//
			$(this).hover(function(){
	
				img = $(this).find("img")[1];
				//
				$(img).stop().fadeIn(500);

			}, function(){
				//
				$(img).stop().fadeOut(500);
			});
		});
	},
	//
	menuTab : function(){
		//
		$(".header-links a").each(function(){
			//
			var path = menu.folder + $(this).attr("href");
			//
			//alert(menu.locationPath);
			if(menu.locationPath === menu.folder){
				// home page url bug
				menu.locationPath += "index.php?home";
			}
			//
			if(path === menu.locationPath){
				//
				//alert("ok");
				$(this).prev().css("display", "block");
				//
				$(this).parent().removeClass("menu");
				//
				$(".menu").each(function(){
					//
					var dontDispley = $(this).find("img")[1];
					//
					$(dontDispley).css("display", "none");
				});
			}
				
		});
	}
}
//
menu.init();