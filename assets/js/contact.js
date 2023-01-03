// Get the form element
const form = document.getElementById('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Get the values of the form elements
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Validate the form data
  if (name === '' || email === '' || message === '') {
    // Display an error message if any of the required fields are empty
    alert('Please fill out all required fields');
  } else if (!isValidEmail(email)) {
    // Display an error message if the email address is not in the correct format
    alert('Please enter a valid email address');
  } else {
    alert('Form data is valid');
  }
});

// A helper function to validate the email address
function isValidEmail(email) 