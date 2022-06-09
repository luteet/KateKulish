
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


const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('._burger, .header__nav, body'),
    burger = document.querySelector('._burger'),
    wrapper = document.querySelector('.wrapper'),
    header = document.querySelector('.header');



let thisTarget, faqSlideCheck = true;
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

let spiritualityGallerySlider = new Swiper('.spirituality-page__gallery-slider', {
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

let spiritualitySlider = new Swiper('.spirituality-page__slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  effect: "fade",
  autoHeight: true,
  thumbs: {
    swiper: spiritualityGallerySlider,
  },
})

let auctionSliderGallery = new Swiper('.auction__painting-slider-gallery', {
  slidesPerView: 3,
  spaceBetween: 20,
  
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

let auctionSliderMain = new Swiper('.auction__painting-slider-main', {
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

window.onload = function() {
  if(paintingSliderMain) paintingSliderMain.update();
  if(spiritualitySlider) spiritualitySlider.update();
  if(auctionSliderMain) auctionSliderMain.update();
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


/*
<div class="timer" data-timer-year="" data-timer-month="" data-timer-day="" data-timer-hour="" data-timer-minute="">
    <span class="timer-days"><span class="timer-days-value"></span></d>
    <span class="timer-hours"><span class="timer-hours-value"></span></span>
    <span class="timer-minutes"><span class="timer-minutes-value"></span></span>
    <span class="timer-seconds"><span class="timer-seconds-value"></span></span>
</div>
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


/* function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
  top: box.top + pageYOffset,
  left: box.left + pageXOffset
  };

}

function scrollPage() {

const offsetCheckJs = document.querySelector('.offset-check-js');
let top = [getCoords(offsetCheckJs).top, false];

header.classList.add('_loaded');

function scrollPageFunc() {
top[0] = getCoords(offsetCheckJs).top;

if(top[0] >= 500 && top[1] == false) {

    top[1] = true;
    header.style.setProperty('--pos', '-100%');

    setTimeout(function() {
        header.classList.add('_active');
        header.style.setProperty('--pos', '0%');
    },200);

} else if(top[0] <= 500 && top[1] == true) {

    top[1] = false;
    header.style.setProperty('--pos', '-100%');

    setTimeout(function() {
        header.style.setProperty('--pos', '0%');
        header.classList.remove('_active');
        
    },200);

}
}

scrollPageFunc();

window.onscroll = scrollPageFunc;

}

scrollPage(); */



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
