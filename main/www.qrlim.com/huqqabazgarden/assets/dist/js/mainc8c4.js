window.addEventListener("load", function() {
  let lazy = document.getElementsByClassName("medium-img");
  for (let n = 0, len = lazy.length; n < len; n++) {
    lazy[n].children[0].setAttribute("src", lazy[n].getAttribute("data-src"));
    lazy[n].children[0].addEventListener("load", function(e) {
      e.target.classList.add("no-blur");
    });
  }
});
$(window).on("load",function(){
  setTimeout(function() {
      $(".preloader").fadeOut(250);
  }, 500);
});
function owlcarousel(){
  $(".owl-carousel").each(function(){
    var t=$(this);
    t.owlCarousel({
      items:t.data("items"),
      lazyLoad:!0,
      autoplayHoverPause:!0,
      autoplaySpeed:5e3,
      slideBy:t.data("slideby"),
      center:t.data("center"),
      loop:!0,
      margin:t.data("margin"),
      dots:t.data("dots"),
      nav:t.data("nav"),
      autoplay:t.data("autoplay"),
      autoplayTimeout:t.data("autoplay-timeout"),
      navText:['<span class="fas fa-long-arrow-alt-left"><span>','<span class="fas fa-long-arrow-alt-right"></span>'],
      responsive:{
        0:{items:t.data("xs-items")?t.data("xs-items"):1},
        576:{items:t.data("sm-items")},
        768:{items:t.data("md-items")},
        1024:{items:t.data("lg-items")},
        1200:{items:t.data("items")}
      }
    })
  })
}
function fancyBox() {
    $("a#fancy").each(function() {
        var t = $(this);
        console.log(t);
            t.fancybox({
                'titlePosition'     : 'inside',
                closeBtn            : (t.attr("data-closeBtn") === 'true'),
                closeClick          : (t.attr("data-closeClick") === 'true'),
                helpers             : { 
                                        overlay : {closeClick: (t.attr("data-overlay-closeClick") === 'true')} 
                },
                keys : {
                    // prevents closing when press ESC button
                    close  : null
                },
                'transitionIn'      : 'none',
                'transitionOut'     : 'none'
            });            

    })
}
$(document).ready(function() {
  owlcarousel();
  fancyBox();
/* Mobile Menu */
 /*** 
  * Run this code when the #toggle-menu link has been tapped
  * or clicked
  */
  $( '.kvkk_cookie_policy span.close' ).on('click', function(e) {
    
    var Param =  { };
    ajaxService('kvkk/confirmPolicy',Param,function(result)
    {
        if (result['success']) {

          $(".kvkk_cookie_policy").fadeOut(250);
        }
    },true,false)
  });

  $( '#toggle-menu' ).on( 'touchstart click', function(e) {
    e.preventDefault();
    $("#toggle-menu #nav-icon1").toggleClass('open');
    var $body = $('body'),
        $page = $('#page'),
        $menu = $('#menu'),
 
        /* Cross browser support for CSS "transition end" event */
        transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
 
    /* When the toggle menu link is clicked, animation starts */
    $body.addClass('animating');
 
    /***
     * Determine the direction of the animation and
     * add the correct direction class depending
     * on whether the menu was already visible.
    */
    if ( $body.hasClass( 'menu-visible' ) ) {
      $body.addClass( 'left' );
    } else {
      $body.addClass( 'right' );
    }
  
    /***
     * When the animation (technically a CSS transition)
     * has finished, remove all animating classes and
     * either add or remove the "menu-visible" class 
     * depending whether it was visible or not previously.
    */
    $page.on( transitionEnd, function() {
      $body
      .removeClass( 'animating left right' )
      .toggleClass( 'menu-visible' );
      $page.off( transitionEnd );
    });
  });
  $('ul#menu li.have_sub>a').on( 'click', function(e) {
    
    var element = $(this).parent();

    element.find('ul').slideToggle(250);
    
    element.toggleClass('active');

  });
  $('.header_top ul>li.multi>a').on('click', function(e) {
    
    var element = $(this).parent();
    
    element.toggleClass('active');
    
    element.find('ul').fadeToggle(250);
    
  });
  $('.userMessage').on('click', 'span.close', function(event) {
      $('.userMessage').removeClass('show');   
  });
});
/* Mobile Menu */

/* Menu clicked */
function get_og_meta_tag_value(property) {
    return $(document).find('meta[property="'+property+'"]').attr("content")
}
function share_fb(url="") {
    if(url==""){url = window. location. href;}
  window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'facebook-share-dialog',"width=626, height=436");
}
function share_tw(url="") {
    if(url==""){url = window. location. href;}
  window.open('https://twitter.com/share?url='+url,'twitter-share-dialog',"width=626, height=436");
}
function share_pt(url="") {
    if(url==""){url = window. location. href;}
  window.open('http://pinterest.com/pin/create/button/?url='+url+'&media='+get_og_meta_tag_value("og:image")+'&description='+get_og_meta_tag_value("og:description"),'pinterest-share-dialog',"width=626, height=436");
}
function share_ln(url="") {
    if(url==""){url = window. location. href;}
  window.open('https://www.linkedin.com/shareArticle?mini=true&url='+url+'&title='+get_og_meta_tag_value("og:title")+'&summary='+get_og_meta_tag_value("og:description")+'&source='+window.location.href,'linkedin-share-dialog',"width=626, height=436");
}
  function getTokenInputName() {
    return "csrf_HUQQAWEBMENU_token";
  }
  function getCookieTokenName() {
      return "csrf_HUQQAWEBMENU_cookie_token";
  }
  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.a);
          }
      }
      return "";
  }
  function changeCsrfToken()
  {
      var token_input_name=getTokenInputName();

      var cookie_token_name=getCookieTokenName();//"csrf_bilgepuan_cookie_token_name";

      $('input[name="'+token_input_name+'"]').val(getCookie(cookie_token_name));
  }
  function ajaxForm(form,ajaxURL,postParam,callback = false) { 
      
      var response={};

      var submit_button=form.find('button[type="submit"]');

      var submit_button_html=submit_button.html();

      $.ajax({
          url: ajaxURL,
          data: postParam,
          dataType: 'json',
          contentType: false,       // The content type used when sending data to the server.
          cache: false,             // To unable request pages to be cached
          processData:false,  
          type: 'POST',
          beforeSend: function() {  
              
              submit_button.attr("disabled","disabled");
              
              submit_button.prepend('<i class="fa fa-circle-o-notch fa-spin"></i> ');

          },
          complete: function() {
              
              submit_button.html(submit_button_html);

              submit_button.removeAttr('disabled');
          },
          success: function(response) { 
              if (response.status) {
                  if(callback)callback(response);
              }
              else
              {
                  changeCsrfToken();
                  if(callback)callback(response);
              }
          },
          error: function(xhr, ajaxOptions, thrownError) {

              changeCsrfToken();
              response.status=0;
              response.status_message="A technical error occurred while sending the request.";
              if(callback)callback(response);
          }
      });
  }
  function ajaxService(ajaxUrl, Param, callback=false, async_type=true,show_preloader=true) {

      Param[getTokenInputName()]=getCookie(getCookieTokenName());
      
      var response={};

      $.ajax({
          url: ajaxUrl,
          data: Param,
          dataType: 'json',
          async:async_type,
          type: 'POST',
          beforeSend: function() {  
            if (show_preloader)
              $(".preloader").fadeIn();

          },
          complete: function() {
            if (show_preloader)
              $(".preloader").fadeOut();
          },
          success: function(response) {
              changeCsrfToken();

              if(callback)
                  callback(response);
          },
          error: function(xhr, ajaxOptions, thrownError) {
              changeCsrfToken();
              response.status=0;
              response.status_message="A technical error occurred while sending the request.";
              if(callback)callback(response);
          }
      });
  }
  function addMessagePage(message,type) {

      $('.userMessage .container p').html("");

      if (type=='success') {

          message = '<i class="fa fa-check"></i> '+message;

          $('.userMessage').removeClass('error');

          $('.userMessage').addClass('success');
      }
      if (type=='error') {

          message = '<i class="fa fa-close"></i> '+message;

          $('.userMessage').removeClass('success');

          $('.userMessage').addClass('error');

          
      }

      $('.userMessage .container p').append(message);

      $('.userMessage').addClass('show');

      setTimeout(function() {
          $('.userMessage').removeClass('show');
      }, 7000);
  }