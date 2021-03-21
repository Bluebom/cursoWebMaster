$(function(){
    $('body').append('<a href="#">Opção</a>').css('background-color', 'white')
    $('a').click(function(a){
        a.preventDefault()
        $('.text').css('display', 'inline-block')
    })

    const func = function(){
        $('input[type=text').eq($(this).index()).css('background', 'green');
    }

    $('input[type=text').keyup(func());
    
})