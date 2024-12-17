
const template = document.querySelector('template');
const lista = document.querySelector('.Lista-Container2');
let elementos;
async function verEditar(id) {
    console.log(id);
    localStorage.setItem('idLugar', id);
    window.location.replace("Editar");
}
async function verEliminar(id) {
    localStorage.setItem('idLugar', id);
    window.location.replace("Eliminar");
}
class Ubicaciones {
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
    async generarElementos(data) {

        console.log(data);
        if (lista.firstElementChild == undefined) {
            elementos = document.createElement('div');
            elementos.className = "elementos";
            elementos.style.display = "flex";
            elementos.style.flexDirection = "column";
            elementos.style.alignSelf = "center";
            elementos.style.margin = "0px 20px 30px";
            elementos.style.height = "100%";
            lista.appendChild(elementos);
        }
        console.log(template);
        for (var i = 0; i < data.length; i++) {
            let clone = template.content.querySelector('.elemento').cloneNode(true)
            console.log(clone);
            clone.style.width = "100";
            clone.style.height = "200";

            //Imagen
            let imagen = clone.querySelector('img');
            imagen.src = "/Images/Diseños/" + data[i].nombre + ".jpg";


            //Nombre
            clone.querySelector('.elemento p').textContent = data[i].nombre;
            //Botones
            let btngroup = document.createElement('div');
            btngroup.style.className = "btn-group";
            let btnEditar = document.createElement('a');
            let id = data[i].id;
            btnEditar.onclick = async () => verEliminar(id);
            btnEditar.style.width = 40;
            btnEditar.style.height = 40;
            btngroup.appendChild(btnEditar);

            let btnEliminar = document.createElement('a');
            btnEliminar.onclick = () => verEditar(id);
            btngroup.appendChild(btnEliminar);

            let imagenEditar = document.createElement('img');
            imagenEditar.style.width = 50;
            imagenEditar.style.height = 50;
            imagenEditar.src = '/Images/Diseños/marca-x.png';
            btnEditar.appendChild(imagenEditar);

            let imagenEliminar = document.createElement('img');
            imagenEliminar.src = '/Images/Diseños/editar.png';
            btnEliminar.appendChild(imagenEliminar);


            imagenEliminar.onclick = () => verEliminar(id);
            imagenEditar.onclick = () => verEditar(id);

            clone.appendChild(btngroup);
            elementos.appendChild(clone);

        }
    }
    // Método para filtrar solo los laboratorios
    filtrarLaboratorios(ubicaciones) {
        // Filtramos ubicaciones que incluyen "laboratorio" en el nombre del área
        return ubicaciones.filter(ubicacion => ubicacion.area.toLowerCase().includes('laboratorio'));
    }

  
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

        this.generarElementos(laboratorios);
        
    }
}

const ubicacionManager = new Ubicaciones('https://apimap.websitos256.com/api/ubicacion');

document.addEventListener('DOMContentLoaded', () => {
    ubicacionManager.renderLaboratorios();
});