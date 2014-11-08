//alert("rok");

var formTabs = {
	//
	init : function(){
		//
		this.switching();
	},
	//
	switching : function(){
		//
		$(".form-tabs").each(function(){
			//
			$(this).on("click", function(){
				//
				var tabIndex = $(this).index();
				//alert(tabIndex);
				$(".form-tabs").each(function(){
					//
					$(this).css("background-color", "transparent");
					//
					if($(this).index() === tabIndex){
						//
						$(this).css("background-color", "#eee");
					}
				});

				// form-pages switching :
				$(".form-pages").each(function(){
					//
					$(this).fadeOut(500);
					//
					if($(this).index() === tabIndex){
						//
						$(this).fadeIn(500);
					}
				});
			});
		});
	}
}

//
formTabs.init();



//------------------------------------------------------------------------


var formFix = {
	//
	init : function(){
		//
		this.submitFix();
		//this.addAutofocus();
		this.fixSex();
		this.fixSexFocus();
	},
	//
	submitFix : function(){
		//
		$(".submiting").each(function(){
			//	
			//$(this).on("focus", function(){
				//
				$(this).on("keydown", function(e){
					//
					//alert(e.keyCode); // enter - 13
					if(e.keyCode == 13){
						//
						$(this).trigger("click");	
					}
				});
			//});
		});
	},
	//
	addAutofocus : function(){
		//
		//
		//
	},
	fixSex : function(){
		//
		$(".sex-check img:first-child").on("click", function(){
			//
			//alert("img");
			$(".sex-check img").each(function(){
				//
				if($(this).hasClass("img-added")){
					//
					$(this).remove();
				}
				//$(this)[1].remove();
				$(this).parent().attr("data-sex", "");
			});
			//
			if($(this).parent().attr("id") === "female"){
				//
				//alert("f");
				$(this).parent().append("<img class='img-added' src='css/form_female_red.png'/>");
				$(this).parent().attr("data-sex", "sex");

			}else{
				//
				//alert("m");
				$(this).parent().append("<img class='img-added' src='css/form_male_blue.png'/>");
				$(this).parent().attr("data-sex", "sex");
			}
		});
	},
	//
	fixSexFocus : function(){
		//
		$(".sex-check img:first-child").each(function(){
			//
			$(this).on("focus", function(){
				//
				$(this).trigger("click");
				//
				$(this).on("keydown", function(e){
					//
					//alert(e.keyCode); // enter - 13
					if($(this).parent().attr("id") === "male"){
						//
						if(e.keyCode == 9){
						//
						//alert($(this).parent().prev().attr("id"));
						//return true;
						//$(this).parent().prev().focus();
						//e.preventDefault;	
						}
					}
					//if($(this).parent().attr("id") === "female"){
						//
						//
						//alert(e.keyCode);
						//return false;
						if(e.keyCode == 13){
							//
							$(this).parent().parent().next().focus();	
						}
					//}

				});
			});
		});
	}
	//
}
//
formFix.init();