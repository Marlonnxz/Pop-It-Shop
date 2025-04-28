document.addEventListener('DOMContentLoaded', function() {
    
    const botonHamburguesa = document.querySelector('.cabecera__hamburguesa');
    const menu = document.querySelector('.cabecera__menu');
    
    botonHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('activo');
    });
    
  
    const enlacesMenu = document.querySelectorAll('.cabecera__menu-enlace');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function() {
            menu.classList.remove('activo');
        });
    });
    
    
});




