import { showError } from './app.js';

const cliente = {
    name: '',
    email: '',
    interests: []
}

const formRegister = document.querySelector('.register-form');

formRegister.addEventListener('submit', validUsers);

function validUsers(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    if(name.trim() === '' || email === '' || !validEmail(email)) {
        showError('Invalid fields', formRegister);
        return;
    }

    cliente.name = name;
    cliente.email = email;

    localStorage.setItem( 'cliente', JSON.stringify(cliente) );

    window.location.href = 'interests.html';
    formRegister.reset();
}

function validEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        
    return regex.test(email);
}
