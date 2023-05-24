// JavaScript code

// Get references to the HTML elements
const registrationForm = document.getElementById('registration-form');
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

// Event listener for registration form submission
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  
  // Perform validation and registration process
  if (firstName && lastName && email) {
    // Registration successful
    showSuccessMessage('Registration successful! You can now place your orders.');
    registrationForm.reset(); // Clear form inputs
    orderForm.style.display = 'block'; // Display the order form
  } else {
    // Display error message if any field is missing
    showErrorMessage('Please fill in all the required fields.');
  }
});

// Event listener for order form submission
orderForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const selectedFlavors = document.querySelectorAll('input[name="flavor"]:checked');
  const quantities = document.querySelectorAll('.quantity');
  
  // Perform validation and order placement process
  if (selectedFlavors.length > 0 && quantities.length > 0) {
    // Order placement successful
    showSuccessMessage('Order placed successfully! We will prepare your delicious ice cream.');
    orderForm.reset(); // Clear form inputs
  } else {
    // Display error message if no flavors or quantities selected
    showErrorMessage('Please select at least one flavor and specify the quantity.');
  }
});

// Function to display success message
function showSuccessMessage(message) {
  successMessage.classList.remove('error');
  successMessage.textContent = message;
  successMessage.style.display = 'block';
}

// Function to display error message
function showErrorMessage(message) {
  successMessage.classList.add('error');
  successMessage.textContent = message;
  successMessage.style.display = 'block';
}
