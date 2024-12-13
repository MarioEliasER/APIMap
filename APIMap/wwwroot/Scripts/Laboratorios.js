class Ubicaciones{
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.listaContainer = document.querySelector('.Lista-Container2');
    }

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

    // Método para filtrar solo los laboratorios
    filtrarLaboratorios(ubicaciones) {
        // Filtramos ubicaciones que incluyen "laboratorio" en el nombre del área
        return ubicaciones.filter(ubicacion => ubicacion.area.toLowerCase().includes('laboratorio'));
    }

    // Método para generar el HTML de cada elemento
    createElementoHTML(ubicacion) {
        const elemento = document.createElement('div');
        elemento.classList.add('elementos');

        elemento.innerHTML = `
            <div class="elemento">
                <img src="/Images/Diseños/${ubicacion.nombre}.jpg" alt="${ubicacion.nombre}" />
                <p>${ubicacion.nombre}</p>
            </div>
          <div class="btn-group">
        <a alt="Editar" class="btn Editar" onClick="verEditar(${ubicacion.id})" data-id="${ubicacion.id}">
            <img class="btn" src="/Images/Diseños/editar.png" alt="Editar">
        </a>
        <a alt="Eliminar" class="btn Eliminar" onClick="verEliminar(${ubicacion.id})" data-id="${ubicacion.id}">
            <img class="btn" src="/Images/Diseños/marca-x.png" alt="Eliminar">
        </a>
    </div>
        `;

        return elemento;
    }

    // Método para renderizar los laboratorios en el contenedor
    async renderLaboratorios() {
        this.listaContainer.innerHTML = ''; // Limpiar el contenido actual

        const ubicaciones = await this.fetchUbicaciones();
        const laboratorios = this.filtrarLaboratorios(ubicaciones);

        this.renderLaboratoriosList(laboratorios);
    }

    // Método para manejar la renderización de los laboratorios y mostrar mensaje si no hay laboratorios disponibles
    renderLaboratoriosList(laboratorios) {
        if (!laboratorios.length) {
            console.log('No hay laboratorios disponibles para mostrar.');
            this.listaContainer.innerHTML = '<p>No hay laboratorios disponibles.</p>';
            return;
        }

        // Si hay laboratorios, renderizamos los elementos
        laboratorios.forEach((laboratorio) => {
            const elementoHTML = this.createElementoHTML(laboratorio);
            this.listaContainer.appendChild(elementoHTML);
        });
    }
}

// Usar la clase para llenar los laboratorios
const ubicacionManager = new Ubicaciones('https://apimap.websitos256.com/api/ubicacion');

// Llenar los datos de los laboratorios al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    ubicacionManager.renderLaboratorios();
});

async function verEditar(id) {

    localStorage.setItem('idLugar', id);
    window.location.replace("Admin/Editar");
}
async function verEliminar(id) {
    localStorage.setItem('idLugar', id);
    window.location.replace("Admin/Editar");
}