// apuntamos al elemento con la clase card
const card =document.querySelector('.card');
// apuntamos al elemento con la clase toggle que es el icono de flecha hacia abajo
const cardtoggle=document.querySelector('.toggle');

// cuanod hacemos click en el icono ejecutaremos la funcion

cardtoggle.onclick=function()
{
    card.classList.toggle('active');
    
}