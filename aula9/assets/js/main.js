$(function(){
    verificarCliqueMenu();

    function verificarCliqueMenu(){
        $('a').click(function(){
            const href = $(this).attr('href');
            $.ajax({
                'url': href,
                'success': function(data){
                    $(data).appendTo('#container').fadeIn()
                }
            })
            return false;
        })
    
    }
})