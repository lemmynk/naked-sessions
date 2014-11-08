
var colorRibbon = {
	//
	upperRow : $("#above div"),
	//
	lowerRow : $("#bellow div"),
	//
	colorArray : [],
	//
	colorObj : {
		"paletorquoise" : "#afeeee",
		"mocassin" : "#ffe4b5",
		"lightsalmon" : "#ffa07a",
		"palegreen" : "#98fb98",
		"thistle" : "#d8bfd8",
		"navajowhite" : "#ffdead",
		"skyblue" : "#87ceeb",
		"khaki" : "#f0e68c",
		"mediumaquamarine" : "#66cdaa",
		"mistyrose" : "#ffe4e1"				
	},
	//
	init : function(){
		//
		this.makeColorArray();
		//
		//alert(arr);
		var arrShuffled_1 = this.shuffleArray(this.colorArray);
		var arrShuffled_2 = this.shuffleArray(this.colorArray);
		//
		//alert(arrShuffled_2);
		for(var i = 0; i <= arrShuffled_1.length; i++){
			//
			$(this.upperRow[i]).css("background-color", arrShuffled_1[i]);
		}
		//
		for(var j = 0; j <= arrShuffled_2.length; j++){
			//
			$(this.lowerRow[j]).css("background-color", arrShuffled_2[j]);
		}
		//
		return {
			//
			changeColors : function(){
				//alert("ok");
				//
				//fading();
				//
				//setTimeout(fading,0);
				setInterval(fading,4000);
				//
				function fading(){
					//
					var arrShuffled_1 = colorRibbon.shuffleArray(colorRibbon.colorArray);
					var arrShuffled_2 = colorRibbon.shuffleArray(colorRibbon.colorArray);
					//
					$("#above").fadeIn(2000, function(){
						//
						for(var i = 0; i <= arrShuffled_1.length; i++){
							//
							$(colorRibbon.lowerRow[i]).css("background-color", arrShuffled_1[i]);
						}
						$(this).fadeOut(2000, function(){
							//

							for(var i = 0; i <= arrShuffled_2.length; i++){
								//
								$(colorRibbon.upperRow[i]).css("background-color", arrShuffled_2[i]);
								//
								//fading();
							}								
						});
					});
				}
			}
		}

	},		
	//
	makeColorArray : function(){
		//
		for(var value in this.colorObj){
			//
			this.colorArray.push(this.colorObj[value]);
		}
	},
	//
	shuffleArray : function(array){
		/**
		 * Randomize array element order in-place.
		 * Using Fisher-Yates shuffle algorithm.
		 */
	    for(var i = array.length - 1; i > 0; i--) {
	    	//
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    //
	    return array;
	}

}// end colorRibbon


// init ::
colorRibbon.init().changeColors();