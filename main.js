$(document).ready(function(){

    $('.nav-page').each(function(){
        console.log(`cleaned ${$(this).data('page')}!`)
        $(this).data('page', $(this).data('page'))
        $(this).removeAttr('data-page')
    })

    $(document).on('click', '.nav-page', function(){
        console.log($(this).data('page'))
    })
})

function grabPage(loc){
    
}

function loadPage(page){

}
