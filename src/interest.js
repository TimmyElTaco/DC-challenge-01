import { showError } from './app.js';

const cliente = JSON.parse(localStorage.getItem('cliente'));

const formInterest = document.querySelector('.interest-form');

formInterest.addEventListener('submit', validInterest);

function validInterest(e) {
    e.preventDefault();

    const interests = [...document.querySelectorAll('input[type="checkbox"]')];

    if( !interests.some( interest => interest.checked ) ) {
        showError('Select a topic', formInterest);
        return;
    }

    interests.forEach( interest => {
        if(interest.checked) {
            cliente.interests.push(interest.value);
        }
    } );

    localStorage.setItem('cliente', JSON.stringify(cliente));
    
    window.location.href = 'summary.html';
}