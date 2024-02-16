import { showSuccess } from "./app.js";

const user = document.querySelector('#name span');
const email = document.querySelector('#email span');
const list = document.querySelector('.summary-list');

const submitBtn = document.querySelector('.submit-button');

document.addEventListener('DOMContentLoaded', () => {
    const cliente = JSON.parse(localStorage.getItem('cliente'))

    getInfo(cliente); 
});

submitBtn.addEventListener('click', () => {
    const element = document.querySelector('.summary-user');
    showSuccess('✅ Success', element);
});


function getInfo(cliente) {
    user.textContent = cliente.name;
    email.textContent = cliente.email;

    cliente.interests.forEach(interest => {
        const li = document.createElement('li');

        li.textContent = interest;

        list.appendChild(li);
    });

    localStorage.clear();
}