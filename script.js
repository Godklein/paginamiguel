// Script para registro y login
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Función para registrar usuario
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (name === '' || email === '' || password === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Aquí puedes agregar la lógica para registrar al usuario
    console.log(`Registro exitoso: ${name} ${email} ${password}`);
});

// Función para iniciar sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (email === '' || password === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Aquí puedes agregar la lógica para iniciar sesión
    console.log(`Inicio de sesión exitoso: ${email} ${password}`);
});

// Función para mostrar productos
const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' },
];

const productsSection = document.getElementById('products');
products.forEach((product) => {
    const productHTML = `
        <li>
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
        </li>
    `;
    productsSection.innerHTML += productHTML;
});
