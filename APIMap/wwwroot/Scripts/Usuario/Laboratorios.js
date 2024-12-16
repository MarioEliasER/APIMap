//  https://apimap.websitos256.com/api/ubicacion

// Función para obtener los datos de la API y llenarlos en la vista
async function cargarLaboratorios() {
    try {
        // Haciendo la solicitud fetch a la API
        const response = await fetch('https://apimap.websitos256.com/api/ubicacion');

        // Verificamos si la respuesta fue exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }

        // Convertir la respuesta a formato JSON
        const data = await response.json();

        // Filtrar los laboratorios
        const laboratorios = data.filter(laboratorio => laboratorio.area === 'Laboratorios');

        // Verificar los laboratorios filtrados
        console.log('Laboratorios filtrados:', laboratorios);

        // Obtener el contenedor donde se mostrarán los detalles del laboratorio
        const contenedorLaboratorios = document.querySelector('.detalleLaboratorio');

        // Limpiar el contenido previo
        contenedorLaboratorios.innerHTML = '';

        // Recorrer los laboratorios filtrados y mostrar sus detalles
        laboratorios.forEach(laboratorio => {
            const divLaboratorio = document.createElement('div');
            divLaboratorio.classList.add('elementos');

            // Suponiendo que el nombre de la imagen sea el mismo que el nombre del laboratorio
            const rutaImagen = `/Images/Diseños/${laboratorio.nombre}.jpg`; // Ajusta el formato según sea necesario

            divLaboratorio.innerHTML = `
                <img src="${rutaImagen}" alt="${laboratorio.nombre}" />
                <p><strong>Nombre:</strong> ${laboratorio.nombre}</p>
            `;

            // Agregar evento de clic para redirigir a la página de detalles
            divLaboratorio.addEventListener('click', () => {
                // Guardar el ID del laboratorio en localStorage
                localStorage.setItem('laboratorioId', laboratorio.id);

                // Redirigir a la vista de detalles
                window.location.href = 'detalles';
            });

            // Agregar el div al contenedor de detalles
            contenedorLaboratorios.appendChild(divLaboratorio);
        });

    } catch (error) {
        // Si ocurre un error, lo mostramos en consola
        console.error('Error:', error);
    }
}

// Llamar a la función para cargar los laboratorios al cargar la página
document.addEventListener('DOMContentLoaded', cargarLaboratorios);
