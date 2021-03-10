// $(function(){
//     alert('Olá Mundo')
// });
// $(window).on('load', function(){
//     alert('Olá Mundo!')
// })
$(function () {
    setTimeout(function () {
        $('#teste').css('background-color', 'tomato')
    }, 2000)

    $('.artigo1').click(function () {
        $('.artigo2').css('background-color', 'purple');

    });

    function validarClickHover(){
        $('.artigo1').hover(function () {
            $('.artigo2').css('background-color', 'red');
        }, function () {
            $('.artigo2').css('background-color', 'green');
        })
    
        
    }
    
    function validarForm(){
        $('textarea').focus(function(){
            console.log('Estou dentro do textarea');
        }).blur(function(){
            console.log('Estou fora do textarea!')
        })

        $('select').change(function(){
            console.log('Meu select foi alterado!')
        })
    }

    validarForm()
    validarClickHover()
});
