document.addEventListener('DOMContentLoaded', () => {
    const bouquet = document.getElementById('bouquet');
    const beeContainer = document.getElementById('bee-container');

    bouquet.addEventListener('click', (event) => {
        // Creamos 3 abejas por cada clic para un efecto más bonito
        for (let i = 0; i < 3; i++) {
            createBee(event.clientX, event.clientY);
        }
    });

    function createBee(startX, startY) {
        const bee = document.createElement('div');
        bee.classList.add('bee');

        // Posición inicial de la abeja (donde se hizo clic)
        bee.style.left = `${startX}px`;
        bee.style.top = `${startY}px`;

        // Calculamos un destino final aleatorio en la pantalla
        const endX = (Math.random() - 0.5) * window.innerWidth;
        const endY = (Math.random() - 0.5) * window.innerHeight;
        
        // Asignamos las variables CSS para la animación
        bee.style.setProperty('--end-x', `${endX}px`);
        bee.style.setProperty('--end-y', `${endY}px`);
        
        beeContainer.appendChild(bee);

        // La abeja se autodestruye después de que termina su animación
        // La animación dura 4 segundos (4000ms)
        setTimeout(() => {
            bee.remove();
        }, 4000);
    }
});
