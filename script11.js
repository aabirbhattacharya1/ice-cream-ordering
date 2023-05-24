

// Registration Page Form Validation
const registrationForm = document.getElementById('registration-form');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  // Get form input values
  const username = document.getElementById('username').value;
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const email = document.getElementById('email').value;
  const favoriteFlavor = document.getElementById('favorite-flavor').value;
  
  // Perform form validation
  const errors = [];
  
  if (username === '') {
    errors.push('Username is required.');
  }
  
  if (password === '') {
    errors.push('Password is required.');
  } else if (password.length < 9) {
    errors.push('Password must be at least 9 characters long.');
  } else if (!isStrongPassword(password)) {
    errors.push('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
  }
  
  // Display validation errors or submit the form
  const errorList = document.getElementById('error-list');
  
  
    if (errors.length > 0) {
        // Display validation errors
        while (errorList.firstChild) {
          errorList.removeChild(errorList.firstChild);
        }
    errors.forEach((error) => {
      const li = document.createElement('li');
      li.textContent = error;
      errorList.appendChild(li);
    });
  } else {
    // Submit the form
    registrationForm.submit();
  }
});

// Helper function to check if a password is strong
function isStrongPassword(password) {
  // Regular expression for strong password
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
  return strongRegex.test(password);
}
