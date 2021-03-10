$(function() {
    let timer;
    
    $(window).scroll(function(){
        console.log('olá mundo')
    })

    $(window).resize(function(){
        // Evento de quando redimensionamos a tela.
        clearTimeout(timer);

        timer = setTimeout(function(){
            location.href = 'http://localhost:5500/aula2/public/';
        }, 1500)
    })
    
    $('a').click(function(e){
        e.preventDefault();
    })

    var el = $('div.box');
    el.css('background-color', 'black');
    function teste(){
        el.css('color', 'tomato')
    }
    teste();
})