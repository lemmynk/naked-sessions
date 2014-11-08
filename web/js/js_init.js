//alert("Hello");


var pre = {
	//
	init : function(){
		//
		if(location.search === "?sadrzaj"){
			//
			//alert(localStorage.chapterNum + " - " + localStorage.index);
			//alert(location.search);
			//
			$(".pages").each(function(){
				//
				$(this).css("display", "none");
				//alert($(this).index());
				//
				//alert(localStorage.index); // undefined
				//alert(localStorage.index == undefined); // undefined
				//
				if(localStorage.index == undefined){
					//
					localStorage.index = "0";
				}
				//
				if($(this).index() == localStorage.index){
					//
					//alert($(this).index());
					$(this).css("display", "block");
				}
			});	
			//
			$(".chapter").each(function(){
				//
				var imgs = $(this).find("img");
				//
				$(imgs[1]).css("display", "none");
				//alert($(this).index());
				//
				if(localStorage.chapterNum == undefined){
					//
					localStorage.chapterNum = "ch-home";
				}
				//
				if($(this).attr("id") == localStorage.chapterNum){
					//
					chapters.localStore = $(this).attr("id");
					//alert($(this).index());
					$(imgs[1]).css("display", "block");
				}
			});	
		} else {
			//
			//alert(location.search);
		}
		//
		return{
			//
			showBody : function(){
				//
					//
				setTimeout(function(){
						//
						//alert('ok');
						$('#body-php').fadeIn(1500,function(){
							//
							//thumbAnimation.start();
						});
					}, 500);
			}	
		}
	}// end init
	//

}//end pre
//
$(document).ready(function(){
	//
	pre.init().showBody();

	//alert(location.search === ""); //true
	if(location.search === "?home" || location.search === ""){
		//
		localStorage.clear();
	}


});//end ready