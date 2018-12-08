$(document).ready(function() {

  // setup nav
  $('.nav-page').each(function() {
    console.log(`cleaned ${$(this).data('page')}!`)
    $(this).data('page', $(this).data('page'))
    $(this).removeAttr('data-page')
  })

  // navigate
  $(document).on('click', '.nav-page', function() {
    $('.nav-page.is-active').removeClass('is-active')
    $(this).addClass('is-active')

    loadPage($(this).attr('data-href'))
  })

  // collapse sections
  $(document).on('click', '.menu-header .icon', function() {
    $(this).parents('.menu-list').next('.collapse-me').slideToggle()
    $(this).parents('.menu-header').toggleClass('is-expanded')
  })

  initSidebar()

})

function loadPage(page) {
  $.ajax(`../${page}.md`)
    .then(function(data){
      const html = MdToHtml(data);
      $content = $(".content");
      $content.fadeOut("fast", function() {
        $content.html($(html)).fadeIn();

        // implement modal for images
        for (let img of $("img")) {
          $img = $(img);
          const src = $img.attr("src");
          const id = src.replace(/\W/g, "");
          $img
            .attr("id", `${src}-img`)
            .addClass("image");
          // setup listener
          $img.click(function() {
            $(`#${id}-modal`).addClass("is-active");
          });
          // setup modal
          $(".main").append(
            $(`
              <div class="modal" id="${id}-modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <img src="${src}" class="image">
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
              </div>
            `)
          );
          $(".modal-close, .modal-background").click(function() {
            $(".modal").removeClass("is-active");
          });
        }
      });
    })
}

function MdToHtml(md) {
  var converter = new showdown.Converter(),
    html = converter.makeHtml(md);

  return html;
}

function initSidebar() {
  $.getJSON('../config/markdown-organizer.json')
    .then(function(data) {
      _createSidebar(data)
    })
}

function _createSidebar(data) {

  $('.menu-grow').empty()

  let $sidebarRoot = $('.menu-grow')

  for (let page of data.pages) {

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

    if (page.url) {
      const url = page.slug ? `${page.slug}/` : ''
      $name.attr('data-href', `${url}${page.url}`)
    }

    let $collapse;

    if (page.pages) {
      let pages = page.pages

      $collapse = $('<div>')
        .addClass('collapse-me')

      for (let innerPage of pages) {

        let $menuList = $('<ul>')
          .addClass('menu-list')

        let $liWrap = $('<li>')

        let $listLabel = $('<a>')
          .html(innerPage.title)

        let $ulWrap = $('<ul>')

        if (innerPage.sections) {
          for (let section of innerPage.sections) {

            $listLabel
              .addClass('list-label')

            let $innerInnerSection = $(`
              <li class="nav-page" data-href="${page.slug}/${section.page}">
                  <a>
                    ${section.title}
                  </a>
              </li>
            `)

            $ulWrap
              .append($innerInnerSection)
          }

        } else if(innerPage.page) {
          $listLabel
            .addClass('nav-page')
            .attr('data-href', `${page.slug}/${innerPage.page}`)
        }

        $liWrap
          .append($listLabel)
          .append($ulWrap)

        $menuList
          .append($liWrap)

        $collapse
          .append($menuList)
      }
    }

    // attach everything so far
    $menuHeader
      .append($headerIcon)
      .append($name)

    $menuList
      .append($menuHeader)

    $sidebarRoot
      .append($menuList)

    if (page.pages) {
      $sidebarRoot
        .append($collapse)
    }
  }
}
