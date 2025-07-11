const formEl = document.querySelector('.feedback-form');

function onSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (!email.value.trim() || !message.value.trim()) {
    return alert('Fill please all fields');
  }

  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  const normalizedData = JSON.stringify(formData);

  localStorage.setItem('feedback-form-state', normalizedData);

  console.log(JSON.parse(normalizedData));

  e.currentTarget.reset();
}

formEl.addEventListener('submit', onSubmit);
