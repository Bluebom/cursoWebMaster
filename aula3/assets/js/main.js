$(function(){
    let el = $('.box')

    let text = 'olá mundo!';

    el.html(`<div class = "teste">${text}</div>`);
    el.html(el.html() + `<h1 class="texto1">Meu texto via JavaScript!</h1>`);
    console.log(el.html())
    $('input[type=text]').val("olá!")
})