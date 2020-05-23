(function (){
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active");
        } else{
            header.classList.remove("header_active");
        }
    };
}()); 

/* button*/

jQuery(document).ready(function() {
          
    var btn = $('#button');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
        $(this).hide();
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  }); 

  /*menu*/

  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /*smooth scrool*/

  $("[data-scroll").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data("scroll");
    blockOffset = $(blockId).offset().top;
    $("html, body").animate( {
      scrollTop: blockOffset
    }, 500);
  });

  