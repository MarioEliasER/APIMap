class UbicacionManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.listaContainer = document.querySelector('.Lista-Container2'); // Asegúrate de tener el contenedor correcto
    }

    // Método para obtener los datos de la API
    async fetchUbicaciones() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Error al obtener datos de la API');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al obtener ubicaciones:', error);
            return [];
        }
    }

    // Método para filtrar solo los edificios
    filtrarEdificios(ubicaciones) {
        // Filtramos las ubicaciones que incluyen "edificio" en el nombre del área
        return ubicaciones.filter(ubicacion => ubicacion.area.toLowerCase().includes('edificio'));
    }

    // Método para generar el HTML de cada elemento
    createElementoHTML(ubicacion) {
        const elemento = document.createElement('div');
        elemento.classList.add('elementos');

        elemento.innerHTML = `
            <div class="elemento">
                <img src="${ubicacion.imagen}" alt="${ubicacion.nombre}" />
                <p>${ubicacion.nombre}</p>
            </div>
            <div class="btn-group">
                <a id="Editar" class="btn"><img class="btn" src="/Images/Diseños/editar.png"></a>
                <a id="Eliminar" class="btn"><img class="btn" src="/Images/Diseños/marca-x.png"></a>
            </div>
        `;

        return elemento;
    }

    // Método para renderizar los edificios en el contenedor
    async renderEdificios() {
        this.listaContainer.innerHTML = ''; // Limpiar el contenido actual

        const ubicaciones = await this.fetchUbicaciones();
        const edificios = this.filtrarEdificios(ubicaciones);

        this.renderEdificiosList(edificios); // Llamamos a renderEdificiosList para manejar la lógica adicional
    }

    // Método para manejar la renderización de los edificios y mostrar mensaje si no hay edificios disponibles
    renderEdificiosList(edificios) {
        if (!edificios.length) {
            console.log('No hay edificios disponibles para mostrar.');
            this.listaContainer.innerHTML = '<p>No hay edificios disponibles.</p>';
            return;
        }

        // Si hay edificios, renderizamos los elementos
        edificios.forEach((edificio) => {
            const elementoHTML = this.createElementoHTML(edificio);
            this.listaContainer.appendChild(elementoHTML);
        });
    }
}

// Usar la clase para llenar los edificios
const ubicacionManager = new UbicacionManager('https://apimap.websitos256.com/api/ubicacion');

// Llenar los datos de los edificios al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    ubicacionManager.renderEdificios();
});
