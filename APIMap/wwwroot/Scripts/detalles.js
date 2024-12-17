async function cargarDetallesElemento() {
    try {
        console.log('Iniciando la carga de detalles del elemento...');

        // Recuperar el ID desde localStorage
        const elementoId = localStorage.getItem('elementoId');
        console.log('ID recuperado de localStorage:', elementoId);

        if (!elementoId) {
            throw new Error('No se encontró el ID del elemento en localStorage.');
        }

        // Realizar la solicitud fetch con el ID recuperado
        const urlApi = `https://apimap.websitos256.com/api/ubicacion/${elementoId}`;
        const response = await fetch(urlApi);

        if (!response.ok) {
            throw new Error(`Error al cargar los detalles: ${response.statusText}`);
        }

        // Convertir la respuesta a JSON
        const elemento = await response.json();
        console.log('Detalles del elemento:', elemento);

        // Asignar los datos obtenidos a los elementos HTML
        const imgElemento = document.querySelector('.ImgElemento');
        const infoTitulo = document.querySelector('.Info h4');
        const infoDescripcion = document.querySelector('.Info p');

        imgElemento.src = `/Images/Diseños/${elemento.nombre}.jpg`;  // Aquí puedes ajustar la lógica según la API
        imgElemento.alt = elemento.nombre;
        infoTitulo.textContent = elemento.nombre;
        infoDescripcion.textContent = elemento.descripcion;

    } catch (error) {
        console.error('Error:', error.message);
        const infoDescripcion = document.querySelector('.Info p');
        if (infoDescripcion) {
            infoDescripcion.textContent = 'Error al cargar los detalles. Inténtalo de nuevo.';
            infoDescripcion.style.color = 'red';
        }
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarDetallesElemento);

//// Función para cargar los detalles de un laboratorio
//async function cargarDetallesLaboratorio() {
//    try {
//        console.log('Iniciando la carga de detalles del laboratorio...');

//        // 1. Recuperar el ID del laboratorio desde localStorage
//        const laboratorioId = localStorage.getItem('laboratorioId');
//        console.log('ID recuperado de localStorage:', laboratorioId);

//        if (!laboratorioId) {
//            throw new Error('No se encontró el ID del laboratorio en localStorage.');
//        }

//        // 2. Realizar la solicitud fetch para obtener el laboratorio específico
//        const urlApi = `https://apimap.websitos256.com/api/ubicacion/${laboratorioId}`;
//        console.log('URL de la API:', urlApi);

//        const response = await fetch(urlApi);

//        // 3. Verificar
//        if (!response.ok) {
//            throw new Error(`Error al cargar los detalles del laboratorio: ${response.statusText}`);
//        }

//        // 4. Convertir la respuesta a JSON
//        const laboratorio = await response.json();
//        console.log('Datos del laboratorio obtenidos de la API:', laboratorio);

//        // 5. Obtener los elementos HTML donde se mostrarán los datos
//        const imgAula = document.querySelector('.ImgAula');
//        const infoTitulo = document.querySelector('.Info h4');
//        const infoDescripcion = document.querySelector('.Info p');

//        if (!imgAula || !infoTitulo || !infoDescripcion) {
//            throw new Error('No se encontraron los elementos en el DOM.');
//        }

//        // 6. Construir la ruta de la imagen
//        const rutaImagen = `/Images/Diseños/${laboratorio.nombre}.jpg`;
//        console.log('Ruta de la imagen generada:', rutaImagen);

//        // 7. Asignar los datos obtenidos a los elementos HTML
//        imgAula.src = rutaImagen;
//        imgAula.alt = laboratorio.nombre;
//        infoTitulo.textContent = laboratorio.nombre;
//        infoDescripcion.textContent = laboratorio.descripcion;

//        console.log('Detalles del laboratorio cargados correctamente.');

//    } catch (error) {
//        // 8. Capturar y mostrar cualquier error
//        console.error('Error en cargarDetallesLaboratorio:', error.message);

//        // Mostrar mensaje de error en la vista si es necesario
//        const infoDescripcion = document.querySelector('.Info p');
//        if (infoDescripcion) {
//            infoDescripcion.textContent = 'Error al cargar los detalles. Inténtalo de nuevo.';
//            infoDescripcion.style.color = 'red';
//        }
//    }
//}

//// Llamar a la función al cargar la página
//document.addEventListener('DOMContentLoaded', cargarDetallesLaboratorio);




