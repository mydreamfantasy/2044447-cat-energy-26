const errorName = document.querySelector('.form-field__field-text--name');
const errorWeight = document.querySelector('.form-field__field-text--weight');
const errorEmail = document.querySelector('.form-email-phone__field-text--email');
const errorPhone = document.querySelector('.form-email-phone__field-text--phone');
let patternName = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
let patternNumber = /^\d+$/;
let patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let patternPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

errorName.addEventListener("keyup", function() {
  if (errorName.value.match(patternName)) {
      errorName.classList.remove('form-field__field-text--error');
  }
  else {
      errorName.classList.add('form-field__field-text--error');
  }
})

errorWeight.addEventListener("keyup", function() {
  if (errorWeight.value.match(patternNumber)) {
      errorWeight.classList.remove('form-field__field-text--error');
  }
  else {
      errorWeight.classList.add('form-field__field-text--error');
  }
})

errorEmail.addEventListener("keyup", function() {
  if (errorEmail.value.match(patternEmail)) {
      errorEmail.classList.remove('form-email-phone__field-text--error-email');
  }
  else {
      errorEmail.classList.add('form-email-phone__field-text--error-email');
  }
})

errorPhone.addEventListener("keyup", function() {
  if (errorPhone.value.match(patternPhone)) {
      errorPhone.classList.remove('form-email-phone__field-text--error-phone');
  }
  else {
    errorPhone.classList.add('form-email-phone__field-text--error-phone');
  }
})
