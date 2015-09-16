// Hello.
//
// This is The Scripts used for deltacross Kyoto officail website.
//
//

function main() {
/* ready */
(function () {
   'use strict';

   /* ==============================================
    Top View Responsive
    =============================================== */ 
    var hsize = $(window).height();
    $("#tf-home .overlay").css("height", hsize + "px");

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
           // $('.navbar-brand').fadeOut("slow");
        } else {
            $('.navbar-default').removeClass('on');
           // $('.navbar-brand').fadeIn("slow");
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
          autoPlay: 3000,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#space-slide").owlCarousel({
  	 
  	      navigation : true, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      singleItem : true,
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    scroll animation
    ======================================*/
    new WOW().init();

    /*====================================
    google maps
    ======================================*/

    var LATITUDE = 35.027774;     // 緯度
    var LONGITUDE = 135.769667;     // 経度
    var $map = document.getElementById('map');

    // Googleマップの表示
    var map = new google.maps.Map($map,{
        center: new google.maps.LatLng(LATITUDE,LONGITUDE), // 地図の中心点
        mapTypeId: google.maps.MapTypeId.ROADMAP,           // 地図の表示タイプ
        zoom: 16                                            // 地図のズームレベル
    });

    // カスタムマップタイプを設定
    var myStyledMapType = new google.maps.StyledMapType(
        [
            {
                "stylers": [
                    {"hue": "#ff1a00"},
                    {"invert_lightness": true},
                    {"saturation": -100},
                    {"lightness": 33},
                    {"gamma": 0.5}
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {"color": "#2D333C"}
                ]
            }
        ]
    );
    // カスタムマップタイプの登録
    map.mapTypes.set('myMapType', myStyledMapType);
    map.setMapTypeId('myMapType');

    // Googleマップにマーカーを設置
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(LATITUDE,LONGITUDE),   // マーカーを立てる位置
        map: map    // マーカーを表示させるGoogleマップオブジェクトを指定
    });

    // 情報ウィンドウを生成する
    var template = document.getElementById('infoWindowTemplate');
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(template.innerText);
    // マーカーをクリックで情報ウィンドウを表示を表示させる
    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.open(map, marker);
    });

    /*====================================
    twitter
    ======================================*/

    /*====================================
    Top View Responsive(resize)
    ======================================*/
    $(window).resize(function(){
      var hsize = $(window).height();
      $("#tf-home .overlay").css("height", hsize + "px");
    });
    

}());


}
main();