$(document).ready(function(){

    // setup nav
    $('.nav-page').each(function(){
        console.log(`cleaned ${$(this).data('page')}!`)
        $(this).data('page', $(this).data('page'))
        $(this).removeAttr('data-page')
    })

    // navigate
    $(document).on('click', '.nav-page', function(){
        $('.nav-page.is-active').removeClass('is-active')
        $(this).addClass('is-active')
    })

    // collapse sections
    $(document).on('click', '.menu-header .icon', function(){
        $(this).parents('.menu-list').next('.collapse-me').slideToggle()
        $(this).parents('.menu-header').toggleClass('is-expanded')
    })

    // create sidebar
    // UNUSED FOR NOW
    $.getJSON('./config/sidebar.json', function(data){

    })


})

function grabPage(loc){

}

function loadPage(page){

}

function MdToHtml(md){

    var converter = new showdown.Converter(),
    html      = converter.makeHtml(md);

    return html;
}
