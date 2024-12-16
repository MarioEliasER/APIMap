// Función para cargar los detalles de un laboratorio
async function cargarDetallesLaboratorio() {
    try {
        // Obtener el ID del laboratorio desde localStorage
        const laboratorioId = localStorage.getItem('laboratorioId');
        console.log(laboratorioId);

        if (!laboratorioId) {
            throw new Error('No se encontró el ID del laboratorio en localStorage.');
        }

        // Haciendo la solicitud fetch para obtener el laboratorio específico
        const response = await fetch(`https://apimap.websitos256.com/api/ubicacion/${laboratorioId}`);

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al cargar los detalles del laboratorio: ${response.statusText}`);
        }

        // Convertir la respuesta a JSON
        const laboratorio = await response.json();

        // Verificar los datos del laboratorio
        console.log('Detalles del laboratorio:', laboratorio);

        // Mostrar los datos en la vista
        const contenedorDetalles = document.querySelector('.detalleLaboratorio');

        const rutaImagen = `/Images/Diseños/${laboratorio.nombre}.jpg`;

        contenedorDetalles.innerHTML = `
            <img src="${rutaImagen}" alt="${laboratorio.nombre}" />
            <p><strong>Nombre:</strong> ${laboratorio.nombre}</p>
            <p><strong>Área:</strong> ${laboratorio.area}</p>
            <p><strong>Descripción:</strong> ${laboratorio.descripcion}</p>
        `;

    } catch (error) {
        // Mostrar cualquier error en la consola
        console.error('Error:', error);
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarDetallesLaboratorio);
