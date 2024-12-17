// Función para cargar los detalles de un laboratorio
async function cargarDetallesLaboratorio() {
    try {
        console.log('Iniciando la carga de detalles del laboratorio...');

        // 1. Recuperar el ID del laboratorio desde localStorage
        const laboratorioId = localStorage.getItem('laboratorioId');
        console.log('ID recuperado de localStorage:', laboratorioId);

        if (!laboratorioId) {
            throw new Error('No se encontró el ID del laboratorio en localStorage.');
        }

        // 2. Realizar la solicitud fetch para obtener el laboratorio específico
        const urlApi = `https://apimap.websitos256.com/api/ubicacion/${laboratorioId}`;
        console.log('URL de la API:', urlApi);

        const response = await fetch(urlApi);

        // 3. Verificar
        if (!response.ok) {
            throw new Error(`Error al cargar los detalles del laboratorio: ${response.statusText}`);
        }

        // 4. Convertir la respuesta a JSON
        const laboratorio = await response.json();
        console.log('Datos del laboratorio obtenidos de la API:', laboratorio);

        // 5. Obtener los elementos HTML donde se mostrarán los datos
        const imgAula = document.querySelector('.ImgAula');
        const infoTitulo = document.querySelector('.Info h4');
        const infoDescripcion = document.querySelector('.Info p');

        if (!imgAula || !infoTitulo || !infoDescripcion) {
            throw new Error('No se encontraron los elementos en el DOM.');
        }

        // 6. Construir la ruta de la imagen
        const rutaImagen = `/Images/Diseños/${laboratorio.nombre}.jpg`;
        console.log('Ruta de la imagen generada:', rutaImagen);

        // 7. Asignar los datos obtenidos a los elementos HTML
        imgAula.src = rutaImagen;
        imgAula.alt = laboratorio.nombre;
        infoTitulo.textContent = laboratorio.nombre;
        infoDescripcion.textContent = laboratorio.descripcion;

        console.log('Detalles del laboratorio cargados correctamente.');

    } catch (error) {
        // 8. Capturar y mostrar cualquier error
        console.error('Error en cargarDetallesLaboratorio:', error.message);

        // Mostrar mensaje de error en la vista si es necesario
        const infoDescripcion = document.querySelector('.Info p');
        if (infoDescripcion) {
            infoDescripcion.textContent = 'Error al cargar los detalles. Inténtalo de nuevo.';
            infoDescripcion.style.color = 'red';
        }
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarDetallesLaboratorio);



//// Función para cargar los detalles de un laboratorio
//async function cargarDetallesLaboratorio() {
//    try {
//        // Obtener el ID del laboratorio desde localStorage
//        const laboratorioId = localStorage.getItem('laboratorioId');
//        console.log(laboratorioId);

//        if (!laboratorioId) {
//            throw new Error('No se encontró el ID del laboratorio en localStorage.');
//        }

//        // Haciendo la solicitud fetch para obtener el laboratorio específico
//        const response = await fetch(`https://apimap.websitos256.com/api/ubicacion/${laboratorioId}`);

//        // Verificar si la respuesta fue exitosa
//        if (!response.ok) {
//            throw new Error(`Error al cargar los detalles del laboratorio: ${response.statusText}`);
//        }

//        // Convertir la respuesta a JSON
//        const laboratorio = await response.json();

//        // Verificar los datos del laboratorio
//        console.log('Detalles del laboratorio:', laboratorio);

//        // Mostrar los datos en la vista
//        const contenedorDetalles = document.querySelector('.detalleLaboratorio');

//        const rutaImagen = `/Images/Diseños/${laboratorio.nombre}.jpg`;

//        contenedorDetalles.innerHTML = `
//            <img src="${rutaImagen}" alt="${laboratorio.nombre}" />
//            <p><strong>Nombre:</strong> ${laboratorio.nombre}</p>
//            <p><strong>Área:</strong> ${laboratorio.area}</p>
//            <p><strong>Descripción:</strong> ${laboratorio.descripcion}</p>
//        `;

//    } catch (error) {
//        // Mostrar cualquier error en la consola
//      /*  console.error('Error:', error);*/
//    }
//}

//// Llamar a la función al cargar la página
//document.addEventListener('DOMContentLoaded', cargarDetallesLaboratorio);
