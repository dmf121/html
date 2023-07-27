


const inputs = document.querySelectorAll('input'),
        submit = document.querySelector('.submitBtn'),
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
    const inputs = document.querySelectorAll('input');
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