  
  // =-=-=-=-=-=-=-=-=-=-=-=- <popup> -=-=-=-=-=-=-=-=-=-=-=-=
  
  let popupCheck = true, popupCheckClose = true;
  function popup(arg) {
  
  if (popupCheck) {
      popupCheck = false;
  
      let popup, popupClose,
  
          body = document.querySelector('body'),
          html = document.querySelector('html'),
          wrapper = document.querySelector('.wrapper'),
          header = arg.header,
          duration = (arg.duration) ? arg.duration : 200,
          id = arg.id;
  
      try {
  
          popup = document.querySelector(id);
          popupClose = popup.querySelectorAll('._popup-close');
  
      } catch {
          return false;
      }
  
      function removeFunc(popup, removeClass) {
  
          if (popupCheckClose) {
              popupCheckClose = false;
  
              popup.classList.remove('_active');
              if(wrapper) wrapper.classList.remove('_blur');
  
              setTimeout(() => {
                  popupCheckClose = true;
              }, duration)
  
              if (removeClass) {
                  if (header) header.classList.remove('_popup-active');
  
                  setTimeout(function () {
  
                      body.classList.remove('_popup-active');
                      html.style.setProperty('--popup-padding', '0px');
  
                  }, duration)
              }
          }
      }
  
      body.classList.remove('_popup-active');
      html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
      body.classList.add('_popup-active');
      
  
      popup.classList.add('_active');
      if (header) header.classList.add('_popup-active');
      if (wrapper) wrapper.classList.add('_blur');
  
  
      setTimeout(function () {
        popup.classList.add('_active');
      }, duration);
  
  
      popupClose.forEach(element => {
          element.addEventListener('click', function () {
              if (document.querySelectorAll('._popup._active').length <= 1) {
                  removeFunc(popup, true);
              } else {
                  removeFunc(popup, false);
              }
              setTimeout(function () {
                  return false;
              }, duration)
          });
      })
  
  
      setTimeout(() => {
          popupCheck = true;
      }, duration);
  
  }
  
  }
  
  // =-=-=-=-=-=-=-=-=-=-=-=- </popup> -=-=-=-=-=-=-=-=-=-=-=-=

let slideUp = (target, duration=500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout( () => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

let slideDown = (target, duration=500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout( () => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}


function basketPriceCount() {
  let pricesWrapper = document.querySelectorAll('._basket-price-wrapper');

  pricesWrapper.forEach(thisPriceWrapper => {
    let priceList = thisPriceWrapper.querySelectorAll('._basket-price'),
        priceTotal = thisPriceWrapper.querySelector('._basket-price-total'),
        priceResult = 0;

    for(let index = 0; index < priceList.length; index++) {
      priceResult += Number(priceList[index].dataset.price);
    }

    priceTotal.textContent = priceTotal.dataset.currency + priceResult;

  });

}

basketPriceCount();

let magicGrid;
if(document.querySelector('.painting-product__list')) {
  magicGrid = new MagicGrid({
    container: ".painting-product__list",
    animate: true,
    gutter: 15,
    static: true,
    useMin: true
  });

  magicGrid.listen();

  if(magicGrid.container) {
    setTimeout(() => {
      magicGrid.container.classList.add('_init');
    },200)
  }

  
}




const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('._burger, .header__nav, body'),
    burger = document.querySelector('._burger'),
    wrapper = document.querySelector('.wrapper'),
    header = document.querySelector('.header');



let thisTarget, faqSlideCheck = true,
removeProductCheck = true;
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

      likeBtn.classList.toggle('_active');

      /* let icon = likeBtn.querySelector('._like-btn-icon._icon-love');
      if(icon) {
        icon.classList.remove('_icon-love');
        icon.classList.add('_icon-love-active');

        likeBtn.classList.toggle('_active');
      } else {
        icon = likeBtn.querySelector('._like-btn-icon._icon-love-active');
        icon.classList.remove('_icon-love-active');
        icon.classList.add('_icon-love');

        
      } */
      


    }



    let faqItemHeader = thisTarget.closest('._faq-item-header');
    if(faqItemHeader && faqSlideCheck) {
      faqSlideCheck = false;
      let thisFaqCheck = true;

      let faqItem = faqItemHeader.closest('._faq-item'),
          wrapper = faqItem.closest('._faq-wrapper'),
          activeFaq = wrapper.querySelectorAll('._faq-item._active'),
          faqItemContent = faqItem.querySelector('._faq-item-content');

      if(activeFaq.length) {
        if(faqItem.classList.contains('_active')) {
          thisFaqCheck = false;
        }
        activeFaq.forEach(thisActiveFaq => {
          slideUp(thisActiveFaq.querySelector('._faq-item-content'));
          
          setTimeout(() => {
            thisActiveFaq.classList.remove('_active');  
          },500)
        })

      }

      if(thisFaqCheck) {
        slideDown(faqItemContent);
        faqItem.classList.add('_active');
      }
      
      

      setTimeout(() => {
        faqSlideCheck = true;
      },500)


    }
    

    
    let typeListBtn = thisTarget.closest('._type-list-btn');
    if(typeListBtn) {
      let typeList = document.querySelector('._type-list'),
          typeBtnsList = document.querySelectorAll('._type-list-btn'),
          typeBtn = (typeListBtn.classList.contains('_add-type')) ? true : false;

      if(typeBtn) {
        typeList.classList.add('_column-list');
        typeBtnsList.forEach(thisBtn => {
          thisBtn.classList.remove('_active');
        })
        typeListBtn.classList.add('_active');

        localStorage.setItem('Kate-Kulish-auction-list-type', 'column');
      } else {
        typeList.classList.remove('_column-list');
        typeBtnsList.forEach(thisBtn => {
          thisBtn.classList.remove('_active');
        })
        typeListBtn.classList.add('_active');

        localStorage.setItem('Kate-Kulish-auction-list-type', 'row')
      }

    }



    let auctionMoreLink = thisTarget.closest('.auction__bid-table--more-link');
    if(auctionMoreLink) {
      event.preventDefault();
      
      let table = auctionMoreLink.parentNode.querySelector('.auction__bid-table');

      table.classList.add('_all');
      auctionMoreLink.classList.add('_hidden');

    }



    let removeProductBtn = thisTarget.closest('._remove-product-btn');
    if(removeProductBtn && removeProductCheck) {
      removeProductCheck = false;
      let removeProduct = removeProductBtn.closest('._remove-product');

      removeProduct.classList.add('_removing');
      setTimeout(() => {
        removeProduct.remove();
        removeProductCheck = true;
        basketPriceCount();
        
        let parent = document.querySelector('.painting-product'),
            products = parent.querySelectorAll('.painting-product__item');

        if(!products.length) {
          parent.classList.add('_none');
        } else {
          magicGrid.positionItems();
        }

      },500)
    }



    if(thisTarget.closest('_disabled')) {
      event.preventDefault();
    }



    let btnPopup = thisTarget.closest('._open-popup');
    if(btnPopup) {
      event.preventDefault();
    
      popup({
        id: btnPopup.getAttribute('href')
      });
    
    }

})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let gallerySlider
if(document.querySelector('.gallery__slider')) {
  gallerySlider = new Swiper('.gallery__slider', {
  
    spaceBetween: 10,
    slidesPerView: "auto",
    centeredSlides: true,
  
    watchSlidesProgress: true,
  
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
}

let nftMarketplaceSlider
if(document.querySelector('.nft-marketplace__slider')) {
  nftMarketplaceSlider = new Swiper('.nft-marketplace__slider', {
    
    spaceBetween: 30,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    watchSlidesProgress: true,

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
}

let nftMarketplaceSliderNavigation = document.querySelector('.nft-marketplace__navigation');

if(!document.querySelector('.nft-marketplace__item') && nftMarketplaceSliderNavigation) {
  nftMarketplaceSliderNavigation.classList.add('_disabled');
}

let exhibitionsSlider
if(document.querySelector('.exhibitions__slider')) {
  exhibitionsSlider = new Swiper('.exhibitions__slider', {
    
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
}

let paintingSliderGallery
if(document.querySelector('.painting__picture-slider-gallery')) {
  paintingSliderGallery = new Swiper('.painting__picture-slider-gallery', {
    slidesPerView: 3,
    spaceBetween: 20,
  
    on: {
      init: function () {
        document.querySelector('.painting__picture-slider-gallery').classList.add('_init');
      },
    },
    
    breakpoints: {
      768: {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 0,
      }
    }
    
  });  
}

let paintingSliderMain
if(document.querySelector('.painting__picture-slider-main')) {
  paintingSliderMain = new Swiper('.painting__picture-slider-main', {
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
}

let relatedPaintingsSlider
if(document.querySelector('.related-paintings__slider')) {
  relatedPaintingsSlider = new Swiper('.related-paintings__slider', {
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
}

let spiritualityGallerySlider
if(document.querySelector('.spirituality-page__gallery-slider')) {
  spiritualityGallerySlider = new Swiper('.spirituality-page__gallery-slider', {
    spaceBetween: 9,
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next#spirituality-arrow-next',
      prevEl: '.swiper-button-prev#spirituality-arrow-prev',
  },
    pagination: {
      el: '.swiper-pagination#spirituality-pagination',
      clickable: true,
    },
    
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 8,
        spaceBetween: 12,
      }
    }
  })  
}

let spiritualitySlider
if(document.querySelector('.spirituality-page__slider')) {
  spiritualitySlider = new Swiper('.spirituality-page__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    effect: "fade",
    autoHeight: true,
    thumbs: {
      swiper: spiritualityGallerySlider,
    },
  })  
}

let auctionSliderGallery
if(document.querySelector('.auction__painting-slider-gallery')) {
  auctionSliderGallery = new Swiper('.auction__painting-slider-gallery', {
    slidesPerView: 3,
    spaceBetween: 20,
  
    on: {
      init: function () {
        document.querySelector('.auction__painting-slider-gallery').classList.add('_init');
      },
    },
    
    breakpoints: {
      768: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 0,
      },
      992: {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 0,
      }
    }
    
  });  
}

let auctionSliderMain;
if(document.querySelector('.auction__painting-slider-main')) {
  auctionSliderMain = new Swiper('.auction__painting-slider-main', {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next#auction-painting-arrow-next',
      prevEl: '.swiper-button-prev#auction-painting-arrow-prev',
  },
    pagination: {
      el: '.swiper-pagination#auction-painting-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: auctionSliderGallery,
    }
  });  
}

window.onload = function() {
  if(paintingSliderMain) paintingSliderMain.update();
  if(spiritualitySlider) spiritualitySlider.update();
  if(auctionSliderMain) auctionSliderMain.update();

  if(magicGrid && document.querySelector('.painting-product__item')) {
    magicGrid.positionItems();
  }
}


// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/


function timer() {
  const timerElems = document.querySelectorAll('.timer');

  let deadline;

  timerElems.forEach(thisTimerElem => {

    deadline = new Date(

      thisTimerElem.dataset.timerYear,
      Number(thisTimerElem.dataset.timerMonth - 1),
      thisTimerElem.dataset.timerDay,
      thisTimerElem.dataset.timerHour,
      Number(thisTimerElem.dataset.timerMinute) + 1);

    const day = thisTimerElem.querySelector('.timer-days-value'),
      hour = thisTimerElem.querySelector('.timer-hours-value'),
      minute = thisTimerElem.querySelector('.timer-minutes-value'),
      second = thisTimerElem.querySelector('.timer-seconds-value');

    const diff = deadline - new Date(),
      days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0,
      hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0,
      minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0,
      seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      if(day) day.textContent = days.toString();
      hour.textContent = hours.toString();
      minute.textContent = minutes.toString();
      second.textContent = seconds.toString();

  });
}

if(document.querySelectorAll('.timer').length) {
  setInterval(() => {
    timer();
  },1000)
}


function headerScroll(arg) {

  function getCoords(elem) {
      var box = elem.getBoundingClientRect();
  
      return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
      };
  
  }

  let header = document.querySelector('.header'),

      hToDown = 150,
      hToUp = 50,

      headerPos = getCoords(header),

      hPosToDown, hPosToUp, hCheck = [true, true], hPosCheck = false,
      hTopCheck = false, scrolled = [0, 0], checkScrolled = '';


function headerScrollFunc() {
  
  scrolled[0] = headerPos.top
  headerPos = getCoords(header);
  scrolled[1] = headerPos.top
  
      if (!hPosCheck) {

          hPosCheck = true;

          hPosToDown = headerPos.top + hToDown;
          hPosToUp = headerPos.top - hToUp;

      }

      if (scrolled[0] > scrolled[1]) {
        
          checkScrolled = 'up';
        
        } else if (scrolled[0] < scrolled[1]) {
          
          checkScrolled = 'down';
          
        }

        if (!hTopCheck && headerPos.top > 0) {
          hTopCheck = true;
      
          header.classList.remove('_top');
        } else if (headerPos.top == 0) {
          hTopCheck = false;
          header.classList.add('_top');
        }
      
      
        if (checkScrolled == 'down') hPosToUp = headerPos.top - hToUp;
        if (checkScrolled == 'up') hPosToDown = headerPos.top + hToDown;
      
      
        if (hPosToUp >= headerPos.top && hCheck[0]) {
          hCheck[0] = false; hCheck[1] = true;
      
          header.classList.remove('_hide'); // SHOW HEADER
        }
      
        if (hPosToDown <= headerPos.top && hCheck[1]) {
          hCheck[1] = false; hCheck[0] = true;
      
          header.classList.add('_hide'); // HIDE HEADER
        }

}

headerScrollFunc();

window.onscroll = headerScrollFunc;

}


headerScroll();


