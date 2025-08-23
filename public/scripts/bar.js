// Desplazar barra al medio cuando la pagina recarga

window.onload = function () {
    const scrollContainer = document.getElementById('scrollContainer');
    const secondCard = scrollContainer.querySelector('.card:nth-child(2)');
    
    if (secondCard) {
        // Calcular el desplazamiento necesario para centrar la segunda card
        const offset = secondCard.offsetLeft - (scrollContainer.clientWidth / 2) + (secondCard.clientWidth / 2);
        scrollContainer.scrollLeft = offset;
    }
};

function getGreeting(){
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 6 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Night';
    }
    document.getElementById('greeting').textContent = greeting;    
}

getGreeting();