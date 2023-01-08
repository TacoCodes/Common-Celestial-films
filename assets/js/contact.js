/* The form element is retrieved from the DOM using document.getElementById 'form' */
  // Get the form element
  const form = document.getElementById('form');

/* A submit event listener is added to the form element, which prevents the default form submission behavior and stores the form data in local storage. */
// Add a submit event listener to the form
  form.addEventListener('submit', function(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Get the values of the form elements
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

/* stored form data is logged to the console. */
  // Store form data in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);
  alert('Form data is stored in local storage');

  // Display stored data in console
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('email'));
  console.log(localStorage.getItem('message'));

  // Display all stored data in console
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
});

/*https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://javascript.info/localstorage */