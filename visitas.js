document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.querySelector('#visit-counter span');
    let visits = localStorage.getItem('page_visits');

    if (visits === null) {
        // First visit
        visits = 1;
    } else {
        // Subsequent visits
        visits = parseInt(visits) + 1;
    }

    localStorage.setItem('page_visits', visits);
    counterElement.textContent = visits;
});