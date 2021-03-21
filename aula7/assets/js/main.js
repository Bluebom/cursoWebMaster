$(function(){
    $('.box1').fadeOut(2000, function(){
        $('.box2').fadeIn(function(){
            console.log('Concluímos nossa animação')
        })
    });
    
})