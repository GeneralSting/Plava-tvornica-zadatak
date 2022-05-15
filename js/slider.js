$('#btnPrev').on('click', function(){
    $($('#slider-first-row div:last')).fadeOut();        
    $($('#slider-second-row div:last')).fadeOut();        
    setTimeout( () => {
        $($('#slider-first-row div:last').prependTo($('#slider-first-row div:last').parent())).fadeIn();        
        $($('#slider-second-row div:last').prependTo($('#slider-second-row div:last').parent())).fadeIn();   

    }, 300)
});

$('#btnNext').on('click', function(){
    $($('#slider-first-row div:first')).fadeOut();        
    $($('#slider-second-row div:first')).fadeOut();        
    setTimeout( () => {
        $($('#slider-first-row div:first').appendTo($('#slider-first-row div:first').parent())).fadeIn();        
        $($('#slider-second-row div:first').appendTo($('#slider-second-row div:first').parent())).fadeIn();   

    }, 300)
});
