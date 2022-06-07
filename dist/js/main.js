
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('._burger, .header__nav, body'),
    burger = document.querySelector('._burger'),
    wrapper = document.querySelector('.wrapper'),
    header = document.querySelector('.header');



let thisTarget;
body.addEventListener('click', function (event) {

    thisTarget = event.target;

    // Меню в шапке
    if (thisTarget.closest('._burger')) {
        menu.forEach(elem => {
            elem.classList.toggle('_active')
        })
    }



    if (thisTarget.closest('._nav-close')) {
      menu.forEach(elem => {
          elem.classList.remove('_active')
      })
    }



    let likeBtn = thisTarget.closest('._like-btn');
    if(likeBtn) {
      event.preventDefault();

      let icon = likeBtn.querySelector('._like-btn-icon._icon-love');
      if(icon) {
        icon.classList.remove('_icon-love');
        icon.classList.add('_icon-love-active');

        likeBtn.classList.toggle('_liked');
      } else {
        icon = likeBtn.querySelector('._like-btn-icon._icon-love-active');
        icon.classList.remove('_icon-love-active');
        icon.classList.add('_icon-love');

        likeBtn.classList.toggle('_liked');
      }
      


    }


})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let gallerySlider = new Swiper('.gallery__slider', {
  
    spaceBetween: 10,
    slidesPerView: "auto",
    centeredSlides: true,

    loop: true,
    loopedSlides: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 15
      }
    }

}); 

let nftMarketplaceSlider = new Swiper('.nft-marketplace__slider', {
    
  spaceBetween: 30,
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    700: {
      spaceBetween: 30,
      slidesPerView: 4
    },
    1250: {
      spaceBetween: 30,
      slidesPerView: 5
    },
    1550: {
      spaceBetween: 30,
      slidesPerView: 6
    }
  }

});

let nftMarketplaceSliderNavigation = document.querySelector('.nft-marketplace__navigation');

if(!document.querySelector('.nft-marketplace__item') && nftMarketplaceSliderNavigation) {
  nftMarketplaceSliderNavigation.classList.add('_disabled');
}

let exhibitionsSlider = new Swiper('.exhibitions__slider', {
    
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    500: {
      spaceBetween: 20,
      slidesPerView: 2
    },
    1150: {
      spaceBetween: 21,
      slidesPerView: 3
    }
  }

});




let paintingSliderGallery = new Swiper('.painting__picture-slider-gallery', {
  slidesPerView: 3,
  spaceBetween: 20,
  
  breakpoints: {
    768: {
      direction: "vertical",
      slidesPerView: 4,
      spaceBetween: 0,
    }
  }
  
});




let paintingSliderMain = new Swiper('.painting__picture-slider-main', {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next#painting-arrow-next',
    prevEl: '.swiper-button-prev#painting-arrow-prev',
},
  pagination: {
    el: '.swiper-pagination#painting-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: paintingSliderGallery,
  }
});

let relatedPaintingsSlider = new Swiper('.related-paintings__slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
      nextEl: '.swiper-button-next#related-paintings-arrow-next',
      prevEl: '.swiper-button-prev#related-paintings-arrow-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1250: {
      slidesPerView: 4
    }
  }
})

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/


let resizeCheck = {}, windowSize;

function resizeCheckFunc(size, minWidth, maxWidth) {
  if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
    resizeCheck[String(size)] = false;
    maxWidth(); // < size
  }

  if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
    resizeCheck[String(size)] = true;
    minWidth(); // > size
  }
}



/* function resize() {

  windowSize = window.innerWidth;

  wrapper.style.setProperty('--header-height', header.offsetHeight + 'px');

  resizeCheckFunc(992,
    function () {  // screen > 992px

      

    },
    function () {  // screen < 992px

      

  });
}

resize();

window.onresize = resize; */
