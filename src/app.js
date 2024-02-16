export function showError(message, element) {

    const exist = document.querySelector('.error');

    if(exist) return;

    const div = document.createElement('div');
    div.classList.add('error');

    const span = document.createElement('span');
    span.textContent =message;

    div.appendChild(span);

    const container = document.querySelector('.container');
    
    container.insertBefore(div, element);

    setTimeout( () => {
        div.remove();
    }, 3000 );
}

export function showSuccess(message, element) {
    const exist = document.querySelector('.success');

    if(exist) return;

    const div = document.createElement('div');
    div.classList.add('success');

    const span = document.createElement('span');
    span.textContent =message;

    div.appendChild(span);

    const container = document.querySelector('.container');
    
    container.insertBefore(div, element);

    setTimeout( () => {
        div.remove();
    }, 3000 );
}