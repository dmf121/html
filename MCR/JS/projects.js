const   modalItem = document.querySelectorAll('.carousel-item'),
        slideTitle = document.querySelectorAll('.slide-title'),
        slideDescription = document.querySelectorAll('.slide-description'),
        image = document.querySelectorAll('#image');
    let modalTitle = document.querySelector('.modal-slide-title'),
        modalDescription = document.querySelector('.modal-slide-description');

    const   next = document.querySelector('.carousel-control-next'),
            prev = document.querySelector('.carousel-control-prev'),
            closeBtn = document.querySelector('.btn-close')
        let isButtonDisabled = false;

    
let index = 0;
  
image.forEach(item => {
    item.addEventListener('click', (event) => {
        let index1 = event.target.getAttribute("data-index");
         index = event.target.getAttribute("data-index");
      modalItem.forEach(item => item.classList.remove('active'));
      modalItem[index1-1].classList.add('active');
      modalTitle.innerText = slideTitle[index1-1].innerText;
      modalDescription.innerText = slideDescription[index-1].innerText;
    })
})
      next.addEventListener('click', () => {
        
        if (!isButtonDisabled) {
            isButtonDisabled = true;
            next.disabled = true;
        
            if (index === slideTitle.length) {
                index = 1;
            } else {
                index ++;
            }
            modalTitle.innerText = slideTitle[index-1].innerText;
            modalDescription.innerText = slideDescription[index-1].innerText;
            setTimeout(() => {
              next.disabled = false;
              isButtonDisabled = false;
            }, 600); 
          }
      })

      prev.addEventListener('click', () => {
       
       
        if (!isButtonDisabled) {
            isButtonDisabled = true;
            prev.disabled = true;
        
            if (index < 2) {
                index = slideTitle.length;
            } else {
                index --;
            }
            modalTitle.innerText = slideTitle[index-1].innerText;
            modalDescription.innerText = slideDescription[index-1].innerText;
            setTimeout(() => {
              prev.disabled = false;
              isButtonDisabled = false;
            }, 600); 
          }
      })


  

