async function obtenerRuta() {
    let rutaSelector = document.querySelector('#Ruta');
    let origen = rutaSelector[rutaSelector.selectedIndex].textContent.trim();
    let destinoSelector = document.querySelector('#Destino');
    let destino = destinoSelector[destinoSelector.selectedIndex].textContent.trim();
    ObtenerImagen(origen, destino);
}

let url_local = "https://localhost:44380/";

function limpiarNombre(texto) {
    return texto
        .toLowerCase()             // Convierte a minúsculas
        .replace(/\s+/g, '')       // Elimina todos los espacios
        .replace(/[^\w.-]/g, '');  // Elimina caracteres especiales excepto guiones y puntos
}

async function ObtenerImagen(origen, destino) {
    let imagen = document.querySelector(".ImgRuta");

    // Limpia los nombres de origen y destino
    let origenLimpio = limpiarNombre(origen);
    let destinoLimpio = limpiarNombre(destino);

    // Genera la URL limpia
    let url = `${url_local}Rutas/${origenLimpio}-${destinoLimpio}.png`;

    console.log("URL generada:", url); // Log para depuración
    imagen.src = url;
}

//async function obtenerRuta() {
//    let rutaSelector = document.querySelector('#Ruta');
//    let origen = rutaSelector[rutaSelector.selectedIndex].textContent;
//    let destinoSelector = document.querySelector('#Destino');
//    let destino = destinoSelector[destinoSelector.selectedIndex].textContent;
//    ObtenerImagen(origen, destino);
//}
//let url_local = "https://localhost:44380/";
//async function ObtenerImagen(origen, destino) {
//    //https://localhost:44380/Rutas/Edificio de sistemas -Biblioteca
//    let imagen = document.querySelector(".ImgRuta");
//    imagen.src = url_local + 'Rutas/' + origen + '-' + destino + '.png';
//}

