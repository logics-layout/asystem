$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});

$('table').wrap("<div class='tableWrap'></div>");

var linkTop = $('.linkTop');
linkTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
});

$(window).on({
    load: function () {
        checkFooterHeight();
        fixHeader()
    },
    scroll: function () {
        fixHeader();
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 200){
            linkTop.addClass('active');
        }else{
            linkTop.removeClass('active');
        }

    },
    resize: function () {
        checkFooterHeight();
        var widthDoc = $(document).width();
        if(widthDoc >= 991){
            fixHeader(false);
            window.offsetTopH = offsetTopHeaderBottom();
        }
    }
});

if ($.fn.slick) {
    $('.slider-index-el').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $('.slider-index-dotsBlock-dots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        // variableWidth: true,
    });

    $('.itemList_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: true,
        arrows: false,
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 735,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 483,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    var detaliSliderMain = $('.detali__slider-main');
    var detaliSliderPreviewSlider = $('.detali__slider-preview-slider');

    detaliSliderMain.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        asNavFor: detaliSliderPreviewSlider,
        adaptiveHeight: true,
    });
    detaliSliderPreviewSlider.slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: detaliSliderMain,
        focusOnSelect: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
        ]
    });
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}

if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

function initYmaps() {
    if($('#yamap-contacts')[0]){
        var coords = [52.32594308927015, 104.2421168088913];
        var MapPlaces = new ymaps.Map('yamap-contacts', {
            center: coords,
            zoom: 12,
            controls: ['zoomControl']
        });
        MapPlaces.behaviors.disable('scrollZoom');

        collection = new ymaps.GeoObjectCollection(null,{
            iconLayout: 'default#image',
            iconImageHref: 'placemark.png',
            iconImageSize: [39, 57],
            // iconImageOffset: [-31, -83]
        });

        MapPlaces.geoObjects.add(collection);

        placemark = new ymaps.Placemark(coords);
        collection.add(placemark);
    }else{
        MapPlaces = new ymaps.Map('yamap-objects', {
            center: [52.32594308927020, 104.2421168088913],
            zoom: 10,
            controls: ['zoomControl']
        });
        MapPlaces.behaviors.disable('scrollZoom');

        collection = new ymaps.GeoObjectCollection(null,{
            iconLayout: 'default#image',
            iconImageHref: 'placemark.png',
            iconImageSize: [39, 57],
            // iconImageOffset: [-31, -83]
        });
        MapPlaces.geoObjects.add(collection);

        collection.add(new ymaps.Placemark([52.32594308927015, 104.2421168088913],{}, {
            iconLayout: 'default#image',
            iconImageHref: 'placemark.png',
            iconImageSize: [39, 57],
        }));
        collection.add(new ymaps.Placemark([52.42594408927020, 104.2421168088913],{}, {
            iconLayout: 'default#image',
            iconImageHref: 'placemark2.png',
            iconImageSize: [56, 67],
        }));
        collection.add(new ymaps.Placemark([52.22594408927020, 104.2421168088913],{}, {
            iconLayout: 'default#image',
            iconImageHref: 'placemark3.png',
            iconImageSize: [56, 67],
        }));
        collection.add(new ymaps.Placemark([52.12594408927020, 104.2421168088913],{}, {
            iconLayout: 'default#image',
            iconImageHref: 'placemark4.png',
            iconImageSize: [56, 67],
        }));
        collection.add(new ymaps.Placemark([52.12534408927020, 104.2421168088913],{}, {
            iconLayout: 'default#image',
            iconImageHref: 'placemark5.png',
            iconImageSize: [56, 67],
        }));
    }
}

try{
    ymaps.ready(initYmaps);
}catch (e){}

$('.plan__tabs-nav').find('a').click(function(e) {
    var _this, block, parent, time;
    e.preventDefault();
    _this = $(this);
    block = $(_this.attr('href'));
    time = 300;
    parent = _this.parent();
    if (block[0]) {
        $('.plan__tabs-content-item').not(block).fadeOut(time);
        block.delay(time).fadeIn(300);
        parent.addClass('active');
        return parent.siblings().removeClass('active');
    }
});
