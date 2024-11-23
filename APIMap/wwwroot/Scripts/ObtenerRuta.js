async function obtenerRuta() {
    let rutaSelector = document.querySelector('#Ruta');
    let origen = rutaSelector[rutaSelector.selectedIndex].textContent;
    let destinoSelector = document.querySelector('#Destino');
    let destino = destinoSelector[destinoSelector.selectedIndex].textContent;
    ObtenerImagen(origen, destino);
}
let url_local = "https://localhost:44380/";
async function ObtenerImagen(origen, destino) {
    //https://localhost:44380/Rutas/Edificio de sistemas -Biblioteca
    let imagen = document.querySelector(".ImgRuta");
    imagen.src = url_local + 'Rutas/' + origen + '-' + destino + '.png';
}

