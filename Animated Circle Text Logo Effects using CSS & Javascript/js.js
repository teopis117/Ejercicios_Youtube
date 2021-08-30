// seleccionamos al elemento que tenga como clase .texto
const texto=document.querySelector('.texto');
texto.innerHTML = texto.innerText.split("").map(
(char, i)=>
    // si agrego {} el programa no me corre jajaj que loco

    // no sabia que podiamos aplicar de esta manera las varibles como un tipo for 
    `<span style="transform:rotate(${i*6.1}deg)">${char}</span>`


).join("")