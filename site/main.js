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

    initSidebar()

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
function initSidebar(){
    $.getJSON('../config/markdown-organizer.json')
    .then(function(data){
        _createSidebar(data)
    })
}

function _createSidebar(data){

    $('.menu-grow').empty()

    let $sidebarRoot = $('.menu-grow')

    for(let count in data.pages){
        let page = data.pages[count]

        // create header and collapsible menu
        let $menuList = $('<div>')
            .addClass('menu-list')

        let $menuHeader = $('<li>')
            .addClass('menu-header')

        let $headerIcon = $(`
            <span class="icon ">
              <i class="fas fa-chevron-right"></i>
            </span>
        `)

        let $name = $('<a>')
            .addClass('name nav-page')
            .html(page.title)

        if(page.page){
            $name.attr('data-href', page.page)
        }

        if(page.pages){
            let pages = page.pages

            let $collapse = $('<div>')
                .addClass('collapse-me')

            for(let count in pages){
                let innerPage = pages[count]

                let $menuList = $('<ul>')
                    .addClass('menu-list')

                let $liWrap = $('<li>')

                let $listLabel = $('<a>')
                    .addClass('list-label')
                    .html(innerPage.title)

                let $ulWrap = $('<ul>')

                if(innerPage.sections){
                    for(let count in innerPage.sections){
                        let section = innerPage.sections[count]
                        console.log(section)

                        let $innerInnerSection = $(`
                            <li class="nav-page"><a>${section.title}</a></li>
                        `)

                        $ulWrap
                            .append($innerInnerSection)
                    }

                }


                $liWrap
                    .append($listLabel)
                    .append($ulWrap)

                $menuList
                    .append($liWrap)

                $collapse
                    .append($menuList)
            }

            $sidebarRoot
                .append($collapse)
        }

        // attach everything so far
        $menuHeader
            .append($headerIcon)
            .append($name)

        $menuList
            .append($menuHeader)



        // create the items below it



        $sidebarRoot
            .append($menuList)
    }
}
