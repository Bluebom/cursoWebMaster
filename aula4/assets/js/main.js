$(function() {
    $('.box').eq(1).append('<h3>Meu elemento adicionado dinamicamente.</h3>')
    let el = $('<h2> Meu conteúdo</h2>').appendTo($('.box'))
    el.css('color', 'red');
    $('.box').prepend('<h3>Meu conteúdo</h3>').css('color', 'blue')
    let t = '<p>Meu conteúdo após a div box</p>'
    $('.box').css('background-color', 'red')
    $('.box').after(t)
    $('.box').before(t)
})