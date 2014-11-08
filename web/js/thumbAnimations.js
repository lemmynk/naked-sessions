//alert('lol');

var thumbAnimation = {
	//
	start : function(){
		//
		var thumbs = $('.thumbs');
		//alert(thumbs.length);
		//alert($(thumbs[0]).attr('data-story'));
		//
		for(var i = 0; i < thumbs.length; i++){
			//
			var f = $(thumbs[i]).attr('data-story');
			//
			this[f]($(thumbs[i]));			
		}
	},
	//
	story01 : function(elem){
		//
		//alert('st01');
		//
		$(elem).prepend("<div/>");
	},
	//
	story03 : function(){
		//
		//alert('st03');
	}
}