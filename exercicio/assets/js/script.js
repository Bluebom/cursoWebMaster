$(function () {
    const body = $('body');
    const btn = $('.btn')
    const bg = $('.bg')
    abrirJanela()
    fecharJanela()
    function abrirJanela() {
        btn.click(function (e) {
            e.stopPropagation()
            bg.fadeIn()
        })
    }
    function fecharJanela() {
        $('.close').click(function () {
            bg.fadeOut()
        })
    }
    
    $("form#form1").submit(function (e) {
        const nome = $('input[name=nome]').val();
        const telefone = $('input[name=phone]').val();
        const email = $('input[type=email]').val();
        // style functions
        const err = function (el) {
            e.preventDefault();
            el.css('border', '.12rem solid red')
            el.data('invalido', 'true')
        }
        
        // if statements
        if(verificarNome(nome) == false) err($('input[name=nome]'))
        else if(verificarNumero(telefone) == false) err($('input[name=phone]'))
        else if(verificarEmail(email) == false) err($('input[type=email]'))
        else alert('Form enviado com sucesso!')        

        // verify functions
        function verificarNome(nome) {
            const amount = nome.split(' ');

            if(nome === '') return false;
            if (amount.length >= 2) {
                for (let i = 0; i < amount.length; i++) {
                    if (String(amount[0]).match(/^[A-Z]{1}[a-z]{1,}$/)) {}
                    else return false;
                }
            } else return false;
        }

        function verificarNumero(number){
            if(number === '') return false;
            if(number.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null) return false
        }

        function verificarEmail(email){
            if(email === "") return false;
        if(email.match(/^[a-z0-9-_]{1,}@[a-z]{1,}$/) == null) return null
        }

    })
})