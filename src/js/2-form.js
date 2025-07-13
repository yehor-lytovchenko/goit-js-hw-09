const formEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

function renderPage(e) {
  const { email, message } = getDataFromLocalStorage('feedback-form-state');

  formEl.elements.email.value = email || '';
  formEl.elements.message.value = message || '';
}

function onSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (!email.value.trim() || !message.value.trim()) {
    return alert('Fill please all fields');
  }

  formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  e.currentTarget.reset();
}

function onInput(e) {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();

  formData.email = email;
  formData.message = message;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getDataFromLocalStorage(key) {
  try {
    const lsData = localStorage.getItem(key);
    return lsData === null ? undefined : JSON.parse(lsData);
  } catch (error) {
    console.log('Get state error:', error.message);
  }
}

formEl.addEventListener('submit', onSubmit);

formEl.addEventListener('input', onInput);

document.addEventListener('DOMContentLoaded', renderPage);
