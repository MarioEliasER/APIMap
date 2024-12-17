async function verEditar(id) {
    localStorage.setItem('idLugar', id);
    window.location.replace("/Admin/Editar");
}
async function verEliminar(id) {
    localStorage.setItem('idLugar', id);
    window.location.replace("/Admin/Eliminar");
}
// Función para obtener los datos de la API y llenarlos en la vista
async function cargarObjetos(Tipo) {
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
        // Filtrar los objetos según el tipo especificado (por ejemplo, "Edificio")
        const objetos = data.filter(salon => salon.area === Tipo);
        console.log(Tipo + 's filtrados:', objetos);

        // Obtener el contenedor donde se mostrarán los elementos
        const contenedorObjetos = document.querySelector('.ListaElementos');
        console.log('Contenedor de objetos encontrado:', contenedorObjetos);
        // Limpiar el contenido previo
        contenedorObjetos.innerHTML = '';
        // Recorrer los objetos filtrados y mostrar sus detalles
        objetos.forEach(objeto => {
            console.log('Procesando objeto:', objeto);
            const divObjeto = document.createElement('div');
            divObjeto.classList.add('elementos');
            // Suponiendo que la imagen del objeto tiene el mismo nombre que el objeto
            const rutaImagen = `/Images/Diseños/${objeto.nombre}.jpg`; // Ajusta según el formato necesario

            localStorage.setItem('objetoId', objeto.id);
            divObjeto.innerHTML = `
                    <div class="elemento">
                        <img src="${rutaImagen}" alt="${objeto.nombre}" />
                        <p>${objeto.nombre}</p>
                    </div>
                    <div class="btn-group">
                        <a id="editar" class="btn">
            
                            <img class="btn" alt="Editar" src= "/Images/Diseños/editar.png";/>
                        </a>
                        <a id="eliminar" class="btn">
                            <img class="btn" alt="Eliminar" src= "/Images/Diseños/marca-x.png";/>
                        </a>
                    </div>
            `;

            divObjeto.querySelector('#editar').onclick = () => verEditar(objeto.id);
            divObjeto.querySelector('#eliminar').onclick = () => verEliminar(objeto.id);
            // Agregar el div al contenedor de objetos
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