// controls-exit
//controls-right-switch 
//controls-left-switch

var galleries = {
	//
	init : function(){
		//
		this.exit();
		//
		this.switching();
	},
	exit : function(){
		//
		$("#controls-exit").on("click", function(){
			//
			$("#story-container").fadeOut(1500, function(){
				//
				$("#story-img-container").empty();
			})
		});
	},
	switching : function(){
		//
		$(".switches").on("click", function(){
			//
			alert("ok");
		})
	}
}

galleries.init();