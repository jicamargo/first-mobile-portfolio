// show a message with a type of the inputElem
function showMessage(inputElem, message, type) {
  const msg = inputElem.parentNode.querySelector('lblErrorMsg');
  msg.innerText = message;
  // update the class for the inputElem
  // inputElem.className = type ? 'success' : 'error';
  return type;
}

function showError(inputElem, message) {
  return showMessage(inputElem, message, false);
}

function showSuccess(inputElem) {
  return showMessage(inputElem, '', true);
}

function VerifyNotEmpty(inputElem, FieldIsEmptyMsg) {
  if (inputElem.value.trim() === '') {
    return showError(inputElem, FieldIsEmptyMsg);
  }
  return showSuccess(inputElem);
}

function validateEmail(inputElem, FieldIsEmptyMsg, invalidMsg) {
  inputElem.value = inputElem.value.toLowerCase();

  // check if the value is not empty
  if (!VerifyNotEmpty(inputElem, FieldIsEmptyMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^(([^<>()\[]\\.,;:\s@"]+(\.[^<>()\[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = inputElem.value.trim();
  if (!emailRegex.test(email)) {
    return showError(inputElem, invalidMsg);
  }
  return true;
}

const form = document.getElementById('contact-form');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';
const MSG_REQUIRED = 'Please enter your message';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // validate fields
  const nameValid = VerifyNotEmpty(form.elements.full_name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  const msgValid = VerifyNotEmpty(form.elements.message, MSG_REQUIRED);

  // if valid, submit the form.
  if (nameValid && emailValid && msgValid) {
    form.submit();
  }
});
