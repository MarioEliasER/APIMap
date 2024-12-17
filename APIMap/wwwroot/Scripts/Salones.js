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

    // Método para filtrar solo los salones
    filtrarSalones(ubicaciones) {
        // Filtramos las ubicaciones que incluyen "salón" en el nombre del área
        return ubicaciones.filter(ubicacion => ubicacion.area.toLowerCase().includes('salon'));
    }

    // Método para generar el HTML de cada elemento
    createElementoHTML(ubicacion)
    {
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

    // Método para renderizar los salones en el contenedor
    async renderSalones() {
        this.listaContainer.innerHTML = ''; // Limpiar el contenido actual
        const ubicaciones = await this.fetchUbicaciones();
        const salones = this.filtrarSalones(ubicaciones);
        this.renderSalonesList(salones); // Llamamos a renderSalonesList para manejar la lógica adicional
    }

    // Método para manejar la renderización de los salones y mostrar mensaje si no hay salones disponibles
    renderSalonesList(salones) {
        if (!salones.length) {
            console.log('No hay salones disponibles para mostrar.');
            this.listaContainer.innerHTML = '<p>No hay salones disponibles.</p>';
            return;
        }

        // Si hay salones, renderizamos los elementos
        salones.forEach((salon) => {
            const elementoHTML = this.createElementoHTML(salon);
            this.listaContainer.appendChild(elementoHTML);
        });
    }
}

// Usar la clase para llenar los salones
const ubicacionManager = new UbicacionManager('https://apimap.websitos256.com/api/ubicacion');

// Llenar los datos de los salones al cargar la página
document.addEventListener('DOMContentLoaded', () =>
{
    ubicacionManager.renderSalones();
});
