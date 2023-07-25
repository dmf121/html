/*__________________________________NAVIGATION__________________________________________________________*/




const burger = document.querySelector('.burger-menu-btn'),
    closeBurger = document.querySelector('.close-menu-btn')
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







    /*___________________________________LAPTOP_________________________________________________________*/



    const content = document.querySelectorAll('.screen-content'),
            switchs = document.querySelectorAll('.lt-circle');
            
    laptop(0)

    switchs.forEach((el, index) => {
        el.onclick = function () {
            laptop(index)
        }
    })

    function laptop (index) {
        for (let el of content) {
            el.classList.add('hidden');
            content[index].classList.remove('hidden')
        }

        for (let el of switchs) {
            el.classList.remove('active')
            switchs[index].classList.add ('active')
        }
    }

/*____________________________________________________________________________________________*/



