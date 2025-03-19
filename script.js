const emailInput = document.getElementById('emailInput')
const errorMessage = document.getElementById('errorMessage')
const submitBtn = document.getElementById('submitBtn')
const errorIcon = document.getElementById('errorIcon')


function validateEmail() {
  const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (emailInput.value == '') {
    emailInput.classList.remove('incorrect')
    errorMessage.classList.remove('show')
    errorIcon.classList.remove('showIcon')
  }
  else if (!emailInput.value.match(emailRegex)) {
    emailInput.classList.add('incorrect')
    errorMessage.classList.add('show')
    errorIcon.classList.add('showIcon')
  }
  else {
    emailInput.classList.remove('incorrect')
    errorMessage.classList.remove('show')
    errorIcon.classList.remove('showIcon')
  }
}


emailInput.addEventListener('blur', () => {
  if (emailInput.value == '') {
    emailInput.classList.remove('incorrect')
    errorMessage.classList.remove('show')
    errorIcon.classList.remove('showIcon')
  }
})



submitBtn.addEventListener('click', () => {

  if (!emailInput.value == '') {
    emailInput.value = ''
  }
  else {
    emailInput.focus();
    emailInput.classList.add('incorrect')
    errorMessage.classList.add('show')
    errorIcon.classList.add('showIcon')
  }
})



emailInput.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    if (!emailInput.value == '') {
      emailInput.value = ''
    }
    else {
      emailInput.focus();
      emailInput.classList.add('incorrect')
      errorMessage.classList.add('show')
      errorIcon.classList.add('showIcon')
    }
  }
})

