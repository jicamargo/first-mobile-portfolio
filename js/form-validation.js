function showErrorMsg(inputElem, message) {
  const msg = inputElem.parentNode.querySelector('lblErrorMsg');
  if (message.trim() === '') {
    message = "Sending your message..." ;
    msg.style.color = "green" ;
  }

  msg.innerText = message;
}

function IsEmpty(inputElem) {
  return (inputElem.value.trim() === '');
}

function invalidEmail(inputElem) {
  // validate email format
  inputElem.value = inputElem.value.toLowerCase();

  const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = inputElem.value.trim();
  return !(emailRegex.test(email));
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let errMsg = '';

  if (IsEmpty(form.elements.full_name)) {
    errMsg += 'name, ';
    form.elements.full_name.focus();
  }
  if (IsEmpty(form.elements.email)) {
    if (errMsg.trim() === '') {
      form.elements.email.focus();
    }
    errMsg += 'email, ';
  } else if (invalidEmail(form.elements.email)) {
    if (errMsg.trim() === '') {
      form.elements.email.focus();
    }
    errMsg += 'valid email, ';
  }
  if (IsEmpty(form.elements.message)) {
    if (errMsg.trim() === '') {
      form.elements.message.focus();
    }
    errMsg += 'message, ';
  }

  if (errMsg.trim() === '') {
    showErrorMsg(form.elements.btnsubmit, '');
    form.submit();
  } else {
    errMsg = `Please enter your ${errMsg.slice(0, -2)}.`;
    showErrorMsg(form.elements.btnsubmit, errMsg);
  }
});
