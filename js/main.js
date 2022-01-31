$(function(){
        $('.pop__linked').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        $('.gallery__slider').slick({
            prevArrow:'<img class="slider__arrow left" src="../images/Arl.svg">',
            nextArrow:'<img class="slider__arrow right" src="../images/Arr.svg">',

        });
        $('.gallery__item-inner').magnificPopup({
            delegate:'a',
            type:'image',
            tLoading:'Loading image #%curr%...',
            mainClass:'mfp-img-mobile',
            gallery:{
                enabled:true,
                navigateByImgClick:true,
                preload:[0,1]
            },
        });
        $('.menu__btn').on('click',function(){
            $('.menu__list').toggleClass('active');
          
        })

});