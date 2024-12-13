
let id = localStorage.getItem('idLugar');
let lblNombre = document.querySelector('.Eliminar label');
let imagen = document.querySelector('.imagenEliminar');
async function obtenerLugar()
{
    let response = await fetch('https://apimap.websitos256.com/api/ubicacion');
    let result = await response.json();
    let lugar = result.filter(x => x.id == id)

    return lugar;
}
async function mostrarUbicacion()
{
    let lugar = await obtenerLugar();

    lblNombre.textContent = lugar[0].nombre;
    imagen.src = "/Images/Diseños/" + lugar[0].nombre + ".jpg";

}
mostrarUbicacion();