class Areas {
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

    // Método para filtrar solo las Áreas Comunes
    filtrarAreasComunes(ubicaciones) {
        // Filtramos las ubicaciones que incluyen "común" en el nombre del área
        return ubicaciones.filter(ubicacion => ubicacion.area.toLowerCase().includes('común'));
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
                <a class="btn, Editar"><img class="btn" src="/Images/Diseños/editar.png"></a>
                <a class="btn, Eliminar"><img class="btn" src="/Images/Diseños/marca-x.png"></a>
            </div>
        `;

        return elemento;
    }

    // Método para renderizar las Áreas Comunes en el contenedor
    async renderAreasComunes() {
        this.listaContainer.innerHTML = ''; // Limpiar el contenido actual

        const ubicaciones = await this.fetchUbicaciones();
        const areasComunes = this.filtrarAreasComunes(ubicaciones);

        this.renderAreas(areasComunes); // Llamamos a renderAreas para manejar la lógica adicional
    }

    // Método para manejar la renderización de las áreas y mostrar mensaje si no hay áreas disponibles
    renderAreas(areas) {
        if (!areas.length) {
            console.log('No hay áreas comunes disponibles para mostrar.');
            this.listaContainer.innerHTML = '<p>No hay áreas comunes disponibles.</p>';
            return;
        }

        // Si hay áreas comunes, renderizamos los elementos
        areas.forEach((areaComuna) => {
            const elementoHTML = this.createElementoHTML(areaComuna);
            this.listaContainer.appendChild(elementoHTML);
        });
    }
}

// Usar la clase para llenar las Áreas Comunes
const areas = new Areas('https://apimap.websitos256.com/api/ubicacion');

// Llenar los datos de las Áreas Comunes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    ubicacionManager.renderAreasComunes();
});

document.addEventListener('DOMContentLoaded', function () {
    // Asignar el evento a los enlaces de editar
    document.querySelectorAll('.Editar').forEach(function (editarButton) {
        editarButton.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la acción predeterminada del enlace
            window.location.replace('Editar'); // Redirige a la página de edición
        });
    });

    // Asignar el evento a los enlaces de eliminar
    document.querySelectorAll('.Eliminar').forEach(function (eliminarButton) {
        eliminarButton.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la acción predeterminada del enlace
            window.location.replace('Eliminar'); // Redirige a la página de eliminación
        });
    });
});
