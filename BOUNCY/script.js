

/*__________________________________NAVIGATION__________________________________________________________*/

const burger = document.querySelector('.burger-menu-btn'),
        hMenu = document.querySelector('.hidden-menu'),
        header = document.querySelector('header');

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('burger') ) {
            hMenu.classList.toggle('hidden');
        } else if (!event.target.classList.contains('hidden-menu') && !hMenu.classList.contains('hidden')) {
            hMenu.classList.add('hidden');
        } 
    })

    window.addEventListener('resize', () => {
        if (header.offsetWidth > 933 && !hMenu.classList.contains('hidden') ) {
            hMenu.classList.add('hidden');
          } 
    })

/*____________________________________________________________________________________________*/



/*___________________________________TABS_________________________________________________________*/

function tabs(contents, switcher, active_switcher) {
    const content = document.querySelectorAll(contents),
            switchs = document.querySelectorAll(switcher);

    show(0)
   
    switchs.forEach((el, index) => {
        el.onclick = function () {
        show(index)
        }
    })

    function show (index) {
        for (let el of content) {
            el.classList.add('hidden');
            content[index].classList.remove('hidden');
        }

        for (let el of switchs) {
            el.classList.remove(active_switcher);
            switchs[index].classList.add(active_switcher);
        }
    }
}

/*____________________________________________________________________________________________*/

tabs('.about_text', '.about-btn', 'green-btn');   

tabs('.services_tab', '.service-btn', 'green-btn');

tabs('.team-card', '.team-switcher', 'green-btn');

tabs('.tes-card', '.tes-switcher', 'green-btn');

tabs('.news-card', '.news-switcher', 'news-switcher-active');

/*________________________________DIAGRAMS____________________________________________________________*/

function diagrams() {
    const percents = document.querySelectorAll('.sd_inner'),
            outters = document.querySelectorAll('.sd_outter'),
            values = [];

    percents.forEach(value => {
        values.push(+(value.textContent.slice(0, -1)));
      });
      

      for (let i=0; i<values.length; i++) {
        outters[i].style.background = `conic-gradient(#0f6754 0deg ${360 - 360*(values[i]/100)}deg, #19bd9a 0deg ${360*(values[i]/100)}deg`;
      }
}

diagrams();

/*____________________________________________________________________________________________*/



/*_______________________________________GALERY_____________________________________________________*/

const categories = document.querySelectorAll('.galery-category'),
      galery = document.querySelector('.portfolio_galery'),
      images = document.querySelectorAll('.image');

showTab ('all');
selectedCategory('all');

for (let category of categories) {
    category.onclick = function () {
        showTab (this.dataset.filter);
        selectedCategory(this.dataset.filter);
    }
}

function showTab (cat) {
    for (let image of images) {
        if (cat === 'all' && galery.offsetWidth === 1100) {
            image.classList.add('image-active');
            galery.style.display = 'grid';
        }
        else if (image.classList.contains(cat) && cat != 'all') {
            galery.style.display = 'flex';
            galery.style.flexWrap = 'wrap';
            image.classList.add('image-active');
        } else {image.classList.remove('image-active');}

        if (cat === 'all' && galery.offsetWidth < 1100) {
                 image.classList.add('image-active');
                 galery.style.display = 'flex';
        }

    window.addEventListener('resize', () => {
        if (galery.offsetWidth < 1042) {
            galery.style.display = 'flex';
            galery.style.justifyContent = 'center';
        } 
        if (cat === 'all' && galery.offsetWidth > 1042) {galery.style.display = 'grid';}
        else {galery.style.display = 'flex';}
    })
}
}

function selectedCategory (cat) {
    for (let category of categories) {
        if (category.dataset.filter == cat) {
            category.classList.add('galery-category-active');
        } else {category.classList.remove('galery-category-active');}
    }
}

/*____________________________________________________________________________________________*/



/*____________________________________GALERY_MODAL________________________________________________________*/

const galeryImages = document.querySelectorAll('.image img'),
        expands = document.querySelectorAll('.expand-btn'),
        galeryModal = document.querySelector('.galery_modal'),
        galeryModalContent = document.querySelector('.galery_modal-content'),
        galeryModalClose = document.querySelector('.galery_modal-close'),
        overlay = document.querySelector('.overlay');

for (let i = 0; i < galeryImages.length; i++) {
    expands[i].addEventListener('click', () => {
        galeryModal.style.display = 'block';
        galeryModalContent.src = galeryImages[i].src;
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
    })
}

overlay.addEventListener('click', () => {
    galeryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    overlay.style.display = 'none';
});

galeryModalClose.addEventListener('click', () => {
    galeryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    overlay.style.display = 'none';
});

/*____________________________________________________________________________________________*/






/*_____________________________________SCALES_______________________________________________________*/

function scales() {
    const percents = document.querySelectorAll('.scale-percentage'),
            inners = document.querySelectorAll('.scale-inner'),
            values = [];

    percents.forEach(value => {
        values.push(+(value.textContent.slice(0, -1)));
    });
      
    for (let i=0; i<values.length; i++) {
        inners[i].style.width = `${values[i]}%`;
    }

}

scales();

/*____________________________________________________________________________________________*/



      
/*___________________________________NEWS_________________________________________________________*/

const newsTabs = document.querySelectorAll('.news-card');

newsTabs.forEach(tab => {

    const news = tab.querySelector('.news-text'),
        readMore = tab.querySelector('.news-readmore');

    readMore.addEventListener('click', function() {
        news.classList.toggle('news-expanded');
        if (news.classList.contains('news-expanded')) {
        readMore.innerHTML = '- Read less';
        } else {
        readMore.innerHTML = '+ Read more';
        }
    })
})







