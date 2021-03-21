$(function(){
    $('.form_contato').submit(function(def){
        const container = $('.container')
        let content = `Nome: ${$('input[type=text').val()}
        <hr>E-mail: ${$('input[type=number]').val()}`

        container.html(content)
        def.preventDefault()

    })
})