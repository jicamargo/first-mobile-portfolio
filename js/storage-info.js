// When the user changes the any input field, the data is saved to the local storage.
// When page loads, if there is any data in the local storage the input fields are
// pre-filled with this data.

function saveInfo() {
  const form = document.getElementById('contact-form');
  const infoUser = {
    name: form.elements.full_name.value,
    email: form.elements.email.value,
    msg: form.elements.message.value,
  };
  const userInfoStr = JSON.stringify(infoUser);
  localStorage.setItem('userInfo', userInfoStr);
}

function getInfo() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo) {
    const form = document.getElementById('contact-form');
    form.elements.full_name.value = userInfo.name;
    form.elements.email.value = userInfo.email;
    form.elements.message.value = userInfo.msg;
  }
}

function setEvents() {
  const form = document.getElementById('contact-form');
  form.elements.full_name.addEventListener('change', saveInfo);
  form.elements.email.addEventListener('change', saveInfo);
  form.elements.message.addEventListener('change', saveInfo);
}

/** ***** get user info when page loads ****** */
getInfo();

/** ***** get user info when page loads ****** */
setEvents();
