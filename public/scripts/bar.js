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
