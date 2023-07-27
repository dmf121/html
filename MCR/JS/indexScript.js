function carousel (innerDiv, card, nextBtn, prevBtn) {
    

    const   Inner = document.querySelector(innerDiv),
            Cards = document.querySelectorAll(card),
            Gap = parseInt(getComputedStyle(Inner).getPropertyValue("gap"));
    
    const   Next = document.querySelector(nextBtn),
            Prev = document.querySelector(prevBtn);
    
    let Offset = 0,
        MaxOffset = 0;

  


    addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < Cards.length-2; i++) {
            MaxOffset += Math.ceil(parseFloat(getComputedStyle(Cards[i]).getPropertyValue("width")));
        }
    });


    Next.addEventListener('click', () => {
        if (Offset<MaxOffset) {
            Offset += 317+Gap;
        } else {
            Offset = 0;
        }
        Inner.style.transform = `translateX(${-Offset}px)`;
    })
    
    Prev.addEventListener('click', () => {
        if (Offset < 1) {
            
            Offset = MaxOffset;
        } else {
            Offset -= 317+Gap;
        }
        Inner.style.transform = `translateX(${-Offset}px)`;
    })
    
    
}

carousel('.galery-inner', '.galery-item', '.galery-next', '.galery-prev');






// const   modalItem = document.querySelectorAll('.carousel-item'),
//         slideTitle = document.querySelectorAll('.slide-title'),
//         slideDescription = document.querySelectorAll('.slide-description'),
//         image = document.querySelectorAll('#image');
//     let modalTitle = document.querySelector('.modal-slide-title'),
//         modalDescription = document.querySelector('.modal-slide-description');

//     const   next = document.querySelector('.carousel-control-next'),
//             prev = document.querySelector('.carousel-control-prev'),
//             closeBtn = document.querySelector('.btn-close')
//     let isButtonDisabled = false;

    
// let index = 0;
  
// image.forEach(item => {
//     item.addEventListener('click', (event) => {
//         let index1 = event.target.getAttribute("data-index");
//          index = event.target.getAttribute("data-index");
//       modalItem.forEach(item => item.classList.remove('active'));
//       modalItem[index1-1].classList.add('active');
//       modalTitle.innerText = slideTitle[index1-1].innerText;
//       modalDescription.innerText = slideDescription[index-1].innerText;
//     })
// })
//       next.addEventListener('click', () => {
        
//         console.log(index)
//         if (!isButtonDisabled) {
//             isButtonDisabled = true;
//             next.disabled = true;
        
//             if (index === slideTitle.length) {
//                 index = 1;
//             } else {
//                 index ++;
//             }
//             modalTitle.innerText = slideTitle[index-1].innerText;
//             modalDescription.innerText = slideDescription[index-1].innerText;
//             setTimeout(() => {
//               next.disabled = false;
//               isButtonDisabled = false;
//             }, 600); 
//           }
//       })

//       prev.addEventListener('click', () => {
       
       
//         if (!isButtonDisabled) {
//             isButtonDisabled = true;
//             prev.disabled = true;
        
//             if (index < 2) {
//                 index = slideTitle.length;
//             } else {
//                 index --;
//             }
//             modalTitle.innerText = slideTitle[index-1].innerText;
//             modalDescription.innerText = slideDescription[index-1].innerText;
//             setTimeout(() => {
//               prev.disabled = false;
//               isButtonDisabled = false;
//             }, 600); 
//           }
//       })


  




  