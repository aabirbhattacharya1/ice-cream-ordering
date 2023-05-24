
  const orderForm = document.getElementById('order-form');

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const flavor = document.getElementById('flavor').value;
    const size = document.querySelector('input[name="size"]:checked');
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');

    // Display the order details
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Flavor:', flavor);
    console.log('Size:', size.value);
    console.log('Toppings:');
    toppings.forEach(topping => {
      console.log('- ' + topping.value);
    });
  });

