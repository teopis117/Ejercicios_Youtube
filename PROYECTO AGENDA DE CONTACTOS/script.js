const nombre=document.querySelector('.nombre');
const numero=document.querySelector('.numero');
const direccion=document.querySelector('.direccion');
const btnAgregarTarea=document.querySelector('.btn-agregar-tarea');
const formulario=document.querySelector('#formulario');
const listadoTareas=document.querySelector('.listado-tareas');
const divTareas=document.querySelector('#tarea');
// variable para el localStorage
const db=window.localStorage;

btnAgregarTarea.onclick=(e)=>
{
    let contacto={
        nombre:nombre.value,
        numero:numero.value,
        direccion:direccion.value,
        id:Math.random(1,100),
    }
    
    console.log(contacto);
    e.preventDefault();
    guardarContacto(db,contacto);
    cargarContactos(db);
   
};



function guardarContacto(db,contacto)
{
// db=localStorage setItem=nos sirve para guardar el elemento JSON.stringify=nos sirve para convertirlo en string

// lo pasamos de objeto a cadena
// recordemos que localStorage solo puede leer elementos en forma de cadena
                        // clave del dato,nombre del dato
db.setItem(contacto.id,JSON.stringify(contacto));
formulario.reset();

}


function cargarContactos(db,)
{
let claves=Object.keys(db);
for(clave of claves)
{
    // para obtener la informacion necesitamos parsear el string al objeto
    let contacto=JSON.parse(db.getItem(clave));
    
    crearHtml(contacto,db);
}
}



function crearHtml(contacto,db)
{
    let divContacto=document.createElement('div');
    let nombreContacto=document.createElement('h3');
    let numeroContacto=document.createElement('p');
    let direccionContacto=document.createElement('p');
    let iconoBorrar=document.createElement('span');


    nombreContacto.innerHTML=contacto.nombre;
    numeroContacto.innerHTML=contacto.numero;
    direccionContacto.innerHTML=contacto.direccion;
    iconoBorrar.innerHTML='delete_forever';

    divContacto.classList.add('listado-tareas');
    iconoBorrar.classList.add('material-icons','icono');


    iconoBorrar.onclick=()=>
    {
        db.removeItem(contacto.id);
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    divTareas.appendChild(divContacto);


}