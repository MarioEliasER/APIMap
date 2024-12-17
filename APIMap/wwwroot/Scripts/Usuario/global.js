// Función para obtener los datos de la API y llenarlos en la vista
async function cargarObjetos(Tipo)
{
    try {
        // Haciendo la solicitud fetch a la API
        console.log('Iniciando solicitud fetch...');
        const response = await fetch('https://apimap.websitos256.com/api/ubicacion');

        // Verificamos si la respuesta fue exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }

        // Convertir la respuesta a formato JSON
        console.log('Respuesta recibida, convirtiendo a JSON...');
        const data = await response.json();

        // Mostrar los datos recibidos
        console.log('Datos recibidos de la API:', data);

        // Filtrar los salones
        const objetos = data.filter(salon => salon.area === Tipo);
        console.log(Tipo +'s filtrados:', objetos);
        // Mostrar los salones filtrados
        // Verificar si se encontraron salones
        if (objetos.length === 0) {
            console.log('No se encontraron ' + Tipo + 's con el área '+ Tipo);
        }

        // Obtener el contenedor donde se mostrarán los detalles del salón
        const contenedorObjetos = document.querySelector('.ListaElementos');
        console.log('Contenedor de Edificios encontrado:', contenedorObjetos);

        // Limpiar el contenido previo
        contenedorObjetos.innerHTML = '';

        // Recorrer los salones filtrados y mostrar sus detalles
        objetos.forEach(objeto => {
            console.log('Procesando Edificio:', objeto);

            const divObjeto = document.createElement('div');
            divObjeto.classList.add('elementos');

            // Suponiendo que el nombre de la imagen sea el mismo que el nombre del salón
            const rutaImagen = `/Images/Diseños/${objeto.nombre}.jpg`; // Ajusta el formato según sea necesario

            divObjeto.innerHTML = `
                <img src="${rutaImagen}" alt="${objeto.nombre}" />
                <p><strong></strong> ${objeto.nombre}</p>
            `;

            // Agregar evento de clic para redirigir a la página de detalles
            divObjeto.addEventListener('click', () => {
                console.log(`Guardando el ID del salón en localStorage: ${objeto.id}`);
                // Guardar el ID del salón en localStorage
                localStorage.setItem('laboratorioId', objeto.id);
                // Redirigir a la vista de detalles
                console.log('Redirigiendo a la página de detalles...');
                window.location.href = 'detalles';
            });

            // Agregar el div al contenedor de detalles
            contenedorObjetos.appendChild(divObjeto);
        });

    } catch (error) {
        // Si ocurre un error, lo mostramos en consola
        console.error('Error:', error);
    }
}

window.onload = () => {
    localStorage.clear();
}
window.onload();