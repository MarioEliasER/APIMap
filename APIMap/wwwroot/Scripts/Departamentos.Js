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

    // Método para filtrar solo los departamentos
    filtrarDepartamentos(ubicaciones) {
        // Filtramos las ubicaciones que incluyen "departamento" en el nombre del área
        return ubicaciones.filter(ubicacion => ubicacion.area.toLowerCase().includes('departamento'));
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

    // Método para renderizar los departamentos en el contenedor
    async renderDepartamentos() {
        this.listaContainer.innerHTML = ''; // Limpiar el contenido actual

        const ubicaciones = await this.fetchUbicaciones();
        const departamentos = this.filtrarDepartamentos(ubicaciones);

        this.renderDepartamentosList(departamentos); // Llamamos a renderDepartamentosList para manejar la lógica adicional
    }

    // Método para manejar la renderización de los departamentos y mostrar mensaje si no hay departamentos disponibles
    renderDepartamentosList(departamentos) {
        if (!departamentos.length) {
            console.log('No hay departamentos disponibles para mostrar.');
            this.listaContainer.innerHTML = '<p>No hay departamentos disponibles.</p>';
            return;
        }

        // Si hay departamentos, renderizamos los elementos
        departamentos.forEach((departamento) => {
            const elementoHTML = this.createElementoHTML(departamento);
            this.listaContainer.appendChild(elementoHTML);
        });
    }
}

// Usar la clase para llenar los departamentos
const ubicacionManager = new UbicacionManager('https://apimap.websitos256.com/api/ubicacion');

// Llenar los datos de los departamentos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    ubicacionManager.renderDepartamentos();
});
