/*__________________________________NAVIGATION__________________________________________________________*/

const   hMenu = document.querySelector('.hidden-menu'),
        header = document.querySelector('header');

function showHiddenMenu() {
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('burger')) {
            hMenu.classList.remove('hidden');
        } else if (!event.target.classList.contains('hidden-menu') && !hMenu.classList.contains('hidden')) {
            hMenu.classList.add('hidden');
        } 
    })
}

showHiddenMenu();

window.addEventListener('resize', () => {
    if (header.offsetWidth <= 987) {
        vMenu.style.display = 'none';
        burgerBtn.style.display = 'flex';
        reserveBtn.style.display = 'none'
        showHiddenMenu();
    } else {
        vMenu.style.display = 'flex';
        reserveBtn.style.display = 'flex';
        burgerBtn.style.display = 'none';
    }
})

    

/*____________________________________________________________________________________________*/



/*________________________________SEARCH_FIELD____________________________________________________________*/


const search = document.querySelector('.nav-search'),
    searchField = document.querySelector('.nav-search-field input'),
    vMenu = document.querySelector('.visible-menu'),
    burgerBtn = document.querySelector('.burger-menu-btn'),
    reserveBtn = document.querySelector('.nav-reserve');

let screenWidth = window.innerWidth;

    window.addEventListener('click', (event) => {
        
        if (event.target.classList.contains('search-btn')) {
            if (header.offsetWidth <= 1169) {
                searchField.classList.add('search-active');
                searchField.style.width = '100%';
                vMenu.style.display = 'none';
                reserveBtn.style.display = 'none';
                burgerBtn.style.display = 'flex';
                showHiddenMenu();
            } else {
                searchField.classList.add('search-active');
                searchField.style.width = '200px';
            }
        } 
        
        else if (!event.target.classList.contains('search-active') && searchField.classList.contains('search-active')) {
            searchField.classList.remove('search-active');
            searchField.style.width = '0px';
        }
    })

/*____________________________________________________________________________________________*/




/*_______________________________AGENCY_____________________________________________________________*/


const agencyNext = document.querySelector('.agency-next'),
      agencyPrev = document.querySelector('.agency-prev'),
      agencyCards = document.querySelectorAll('.agency-card');

let agencyIndex = 0;

mainCards();

function mainCards() {
    if (window.innerWidth < 1865) {
        agencyNext.classList.remove('hidden');
        agencyPrev.classList.remove('hidden');
        showCard(0);

        agencyNext.addEventListener('click', () => {
            agencyIndex++;
            if (agencyIndex > agencyCards.length-1) {
              agencyIndex = 0;
            }
            showCard(agencyIndex);
          })
          
        agencyPrev.addEventListener('click', () => {
            agencyIndex--;
            if (agencyIndex < 0) {
              agencyIndex = agencyCards.length-1;
            }
            showCard(agencyIndex);
          })

    } else {
        agencyNext.classList.add('hidden');
        agencyPrev.classList.add('hidden');
        showCardCancel();
    }
}


function showCard (agencyIndex) {
  agencyCards.forEach(el => {
    el.classList.add('hidden')
  })
  agencyCards[agencyIndex].classList.remove('hidden')
}

function showCardCancel() {
    agencyCards.forEach(el => {
        el.classList.remove('hidden')
    })
}











/*__________________________________SLIDER__________________________________________________________*/



function carousel (outter, inner, card, nextBtn, prevBtn) {
    

const provideOutter = document.querySelector(outter),
        provideInner = document.querySelector(inner),
        provideCards = document.querySelectorAll(card),
        provideCard = document.querySelector(card),
        provideGap = parseInt(getComputedStyle(provideInner).getPropertyValue("gap"));

const provideNext = document.querySelector(nextBtn),
        providePrev = document.querySelector(prevBtn);

let provideOffset = 0,
    provideCardWidth,
    provideOutterWidth,
    provideMaxOffset;

    provideOutterSize();

function provideOutterSize() {
    provideCardWidth = Math.ceil(parseFloat(getComputedStyle(provideCard).getPropertyValue("width")));
    if (window.innerWidth < 870) {
        provideOutterWidth = provideCardWidth;
        provideMaxOffset = provideCardWidth*(provideCards.length-1) + provideGap*(provideCards.length-1);
    } else if (window.innerWidth > 870 && window.innerWidth < 1225) {
        provideOutterWidth = provideCardWidth*2 + provideGap;
        provideMaxOffset = provideCardWidth*(provideCards.length-2) + provideGap*(provideCards.length-2);
    }
    else {
        provideOutterWidth = (provideCardWidth*3)+(provideGap*2);
        provideMaxOffset = provideCardWidth*(provideCards.length-3) + provideGap*(provideCards.length-3);
    }
    provideOutter.style.width = provideOutterWidth+'px';
}

window.addEventListener('resize', () => {
    provideOutterSize();
})



provideNext.addEventListener('click', () => {
    if (provideOffset<provideMaxOffset) {
        provideOffset += provideCardWidth+provideGap;
    } else {
        provideOffset = 0;
    }
    provideInner.style.transform = `translateX(${-provideOffset}px)`;
})

providePrev.addEventListener('click', () => {
    if (provideOffset === 0) {
        provideOffset = provideMaxOffset;
    } else {
        provideOffset -= provideCardWidth+provideGap;
    }
    provideInner.style.transform = `translateX(${-provideOffset}px)`;
})


}

/*____________________________________________________________________________________________*/

window.addEventListener('resize', () => {
    mainCards();
    feedBacks();
})

carousel('.provide_cards-outter', '.provide_cards-inner', '.provide-card', '.provide-next', '.provide-prev');

carousel('.tour-outter', '.tour-inner', '.tour-card', '.tour-next', '.tour-prev');


/*____________________________________________________________________________________________*/


const   feedbackModal = document.querySelector('.feedback_modal'),
        videoTour = document.querySelector('.feedback_video'),
        feedbackModalClose = document.querySelector('.feedback_modal-close'),
        overlay = document.querySelector('.overlay');

        


    videoTour.addEventListener('click', () => {
        feedbackModal.innerHTML = '<iframe  src="https://www.youtube.com/embed/bVcczHqt5V0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        feedbackModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
    })


overlay.addEventListener('click', () => {
    feedbackModal.innerHTML = '';
    feedbackModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    overlay.style.display = 'none';
});

feedbackModalClose.addEventListener('click', () => {
    feedbackModal.innerHTML = '';
    feedbackModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    overlay.style.display = 'none';
});




/*____________________________________________________________________________________________*/







/*_____________________________FEEDBACK_______________________________________________________________*/


function feedBacks() {
    const nextBtn = document.querySelector('.feedback-btn-next'),
        prevBtn = document.querySelector('.feedback-btn-prev'),
        card = document.querySelectorAll('.feedback-card-img'),
        text = document.querySelectorAll('.feedback-card-content');


    let i = 0;

    showNext(0);

    function showNext (index) {
        card.forEach(item => {
            item.classList.remove('feedback-card-right');
            item.classList.remove('feedback-card-middle');
            item.classList.remove('feedback-card-left');
            item.classList.add('hidden');
        })

        text.forEach(item => {
            item.classList.add('hidden');
        })
        
        if (window.innerWidth > 660) {
            if (index === 0 ) {
                card[index].classList.add('feedback-card-middle');
                card[index+1].classList.add('feedback-card-right');
                card[card.length-1].classList.add('feedback-card-left');

                card[index].classList.remove('hidden');
                card[index+1].classList.remove('hidden');
                card[card.length-1].classList.remove('hidden');

                text[index].classList.remove('hidden');
            } else if (index === card.length-1) {
                card[index].classList.add('feedback-card-middle');
                card[0].classList.add('feedback-card-right');
                card[index-1].classList.add('feedback-card-left');

                card[index].classList.remove('hidden');
                card[0].classList.remove('hidden');
                card[index-1].classList.remove('hidden');

                text[index].classList.remove('hidden');
            } else {
                card[index].classList.add('feedback-card-middle');
                card[index+1].classList.add('feedback-card-right');
                card[index-1].classList.add('feedback-card-left');

                card[index].classList.remove('hidden');
                card[index+1].classList.remove('hidden');
                card[index-1].classList.remove('hidden');

                text[index].classList.remove('hidden');
            }
        } else {
                card[index].classList.add('feedback-card-middle');
                card[index].classList.remove('hidden');
                text[index].classList.remove('hidden');
        }
    }

    nextBtn.addEventListener('click', () => {
        if (i > card.length-2) {
            i = 0;
        } else {
            i++;
        }
        showNext(i);
    })

    prevBtn.addEventListener('click', ()=> {
        if (i === 0) {
            i = card.length-1;
        } else {
            i--;
        }
        showNext(i);
    })
}

/*____________________________________________________________________________________________*/

feedBacks();



/*__________________________BLOG__________________________________________________________________*/

function blog () {
    const cardsContainer = document.querySelector('.blog_cards'),
        seeBtn = document.querySelector('.blog-btn');

    seeBtn.addEventListener('click', () => {
        event.preventDefault;
        cardsContainer.classList.toggle('blog_cards-expanded');
        if (cardsContainer.classList.contains('blog_cards-expanded')) {
            seeBtn.innerHTML = '<a href="#blog">See Less</a>';
            
        } else {
            seeBtn.innerHTML = 'See All';
        }
    })
}

/*____________________________________________________________________________________________*/

blog();



/*____________________________________________________________________________________________*/



/*_____________________________BOOKING_MODAL_______________________________________________________________*/








function modalMultiple (modalWindow, modalTrigger) {
    const modal = document.querySelector(modalWindow), // '.booking_modal'
        trigger = document.querySelectorAll(modalTrigger), // '.booking-trigger'
        feedbackModalClose = document.querySelector('.feedback_modal-close'),
        overlay = document.querySelector('.overlay'),
        submitBtn = document.querySelector('.booking-submit-button');


    const firstPage = document.querySelector('.booking_modal-firstpage'),
            secondPage = document.querySelector('.booking_modal-secondpage');


    const cardImage = document.querySelectorAll('.tour-card-image'),
            cardTitle = document.querySelectorAll('.tour-card-title'),
            cardPrice = document.querySelectorAll('.tour-price');

    const modalImage = document.querySelector('.booking-image'),
        modalTitle = document.querySelector('.booking-title'),
        modalSecondTitle = document.querySelector('.booking-2-title'),
        modalPrice = document.querySelector('.booking-price');
    
    for (let i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
            overlay.style.pointerEvents = 'auto';

            modalImage.src = cardImage[i].src;
            modalTitle.innerText = cardTitle[i].innerText;
            modalSecondTitle.innerText = cardTitle[i].innerText;
            modalPrice.innerText = cardPrice[i].innerText;
        })
    }

    


    overlay.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        overlay.style.display = 'none';
        firstPage.classList.remove('hidden');
        secondPage.classList.add('hidden');
    });

    feedbackModalClose.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        overlay.style.display = 'none';
        firstPage.classList.remove('hidden');
        secondPage.classList.add('hidden');
    });

    submitBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        overlay.style.display = 'none';
        firstPage.classList.remove('hidden');
        secondPage.classList.add('hidden');
    })



    function bookingModal () {
        const next = document.querySelector('.booking-next'),
            back = document.querySelector('.booking-back');
            
    
            next.addEventListener('click', ()=> {
                firstPage.classList.add('hidden');
                secondPage.classList.remove('hidden');
            });
            
            back.addEventListener('click', ()=> {
                firstPage.classList.remove('hidden');
                secondPage.classList.add('hidden');
            }) 
    }
    
    bookingModal();
}



modalMultiple ('.booking_modal', '.booking-trigger');





/*__________________________________CONTACT__________________________________________________________*/



const inputs = document.querySelectorAll('.contact-inputs'),
        submit = document.querySelector('.contact-submit'),
        modal = document.querySelector('.modal')


submit.addEventListener('click', (event) =>{
    event.preventDefault();
    inputs.forEach(input => {
        if (input.value === '') {
            input.style.boxShadow = 'red 1px 1px 8px';
            
        } else {
            input.style.boxShadow = 'none'
            input.value = ''
            submit.dataset.bsToggle=""
        }
    })})



function checkInputs() {
    const inputs = document.querySelectorAll('.contact-inputs');
    let hasEmptyInput = false;
  
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        hasEmptyInput = true;
        return;
      }
    });
  
    if (!hasEmptyInput) {
      submit.dataset.bsToggle="modal"
    } 
  }
  inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
  });
  
  checkInputs();

/*____________________________________________________________________________________________*/