
var chapters = {
	//
	localStore : "ch-home", 
	//
	lsChapterNum : "",
	//
	lsIndex : "",
	//
	init : function(){
		//
		this.chapterHover();
		//
		this.changeChapter();
		//
		this.chapterFocus();
	},
	chapterHover : function(){
		//
		var img = "";
		//alert(this.localStore);
		//
		$(".hlight").each(function(){
			//
			var chId = $(this).attr("id");
			//
			$(this).hover(function(){
				//
				if(chId === chapters.localStore){
					//
					return false;
				} else {
					//
					img = $(this).find("img")[1];
					$(img).stop().fadeIn(300);
				}

			}, function(){
				//
				if(chId === chapters.localStore){
					//
					return false;
				} else {
					//
					$(img).stop().fadeOut(300);
				}

			});

		});
	},
	changeChapter : function(){
		//
		$(".chapter").each(function(){
			// add event listener : onclick
			$(this).on("click", function(){
				//
				chapters.localStore = $(this).attr("id");

				//
				chapters.lsChapterNum = localStorage["chapterNum"] = $(this).attr("id");
				//
				chapters.lsIndex = localStorage["index"] = $(this).index();
				//alert(chapters.localStore);

				//
				$(".chapter").each(function(){
					//
					var imgs = $(this).find("img");
					//
					$(imgs[1]).css("display", "none");
				});
				//
				var img = $(this).find("img")[1];
				$(img).css("display", "block");


				// pages switching :
				//
				var chapterIndex = $(this).index();
				//alert("chap - " + chapter);
				//
				$(".pages").each(function(){
					//
					$(this).fadeOut(200);
					//
					if($(this).index() === chapterIndex){
							//
						var that = $(this);
						// scoping : $(this) is not 
						// recognized in setTimeout
						setTimeout(function(){
								//
							that.fadeIn(500);
						}, 500);
					}

				});
			});
		});
	},
	//
	chapterFocus : function(){
		//
		$(".chapter").each(function(){
			//
			$(this).on("focus", function(){
				//
				$(this).trigger("click");
			});
		});
	}
}
//
chapters.init();