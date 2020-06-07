

document.addEventListener('DOMContentLoaded', () => {

    // Obtener la imagen
    const imagenHero = document.querySelector('.hero');

    // Inicializar las variables
    let i = 0;
    let tiempo = 0;

    // Arreglo con imagenes de fundo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval( () => {
        imagenHero.style.backgroundPositionY = '-'+tiempo+'px';

        if(tiempo > 40) {
            tiempo = 0;

            imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";

            if (i === imagenes.length - 1) {
                i = 0;
            } else {
                i++
            }
            imagenes[i];
        }
        tiempo++
    }, 100);


    
    // Boton flotante en el footer
    const btnFlotante = document.querySelector('.btn-flotante'); 
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();

        // Previnimos default, pero ejecutamos el siguinte código

        const footer = document.querySelector('#footer');

        if(footer.classList.contains('activo')) {
            // Se contém executa esse código
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';            
        } else {
            // Se não o contém ececuta esse código
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }
    });
});