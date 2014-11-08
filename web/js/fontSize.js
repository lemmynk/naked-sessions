//
var fontsize = {
    //
    textboxes : [],
    //
    fontarray : [],
    //
    basewidth : 1000,
    //
    fireonce : false,
    //
    init : function(){
        // 
        var textboxes = $('.textbox');
        //
        this.textboxes = textboxes;
        //
        $(textboxes).each(function(){
            //
            fontsize.fontarray.push($(this).css('font-size'));
        });
        //
        this.resize();
        // 
        window.addEventListener('resize', fontsize.resize2, false);
        //
    },
    //
    resize : function(){
        //
        var ww = window.innerWidth;
        //
        var ratio;
        //
        if(ww >= this.basewidth){
            //
            ratio = ww / this.basewidth;
            //
            fontsize.boxes(ratio, 0);
            
        }else if(ww <= this.basewidth){
            //
            ratio = this.basewidth / ww;
            //
            fontsize.boxes(0, ratio);
        }
    },
    //
    resize2 : function(){
        //resize fires twice - solution : 
        if(fontsize.fireonce !== false){
            //
            clearTimeout(fontsize.fireonce);
        }
        //
        fontsize.fireonce = setTimeout(function(){
            //
            fontsize.resize(); 

        }, 20);
    },
    //
    boxes : function(){
        //
        var args = arguments;
        //
        fontsize.textboxes.each(function(i){
            //
            //var oldsize = $(this).css('font-size'); // values are reflecting dom change
            var oldsize = fontsize.fontarray[i]; // constant values
            //
            var newsize;
            //
            if(args[0] !== 0){
                //
                newsize = (parseFloat(oldsize) * args[0]).toFixed(2);
                //
            }else if(args[0] === 0){
                //
                newsize = (parseFloat(oldsize) / args[1]).toFixed(2);
                //
            }
            //
            var newfont = newsize + 'px';
            //
            $(this).css('font-size', newfont);
        });
    }
}
//
fontsize.init();