async function verDetalles(id)
{
	localStorage.setItem('laboratorioId', id);
	window.location.replace('/Detalles');
}
class Edificios {
	constructor(apiUrl) {
		this.apiUrl = apiUrl;
		this.scrollContainer = document.querySelector('.scroll-container'); // Contenedor donde se añadirán los elementos
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

	// Método para seleccionar elementos aleatorios
	seleccionarAleatorios(ubicaciones, cantidad) {
		const aleatorios = [];
		const copia = [...ubicaciones];
		for (let i = 0; i < cantidad && copia.length > 0; i++) {
			const indiceAleatorio = Math.floor(Math.random() * copia.length);
			aleatorios.push(copia.splice(indiceAleatorio, 1)[0]);
		}
		return aleatorios;
	}
	
	// Método para generar el HTML de cada elemento
	createElementoHTML(ubicacion) {
		const elemento = document.createElement('div');
		elemento.classList.add('description');
		elemento.innerHTML = `
					<a class="Detalles" id=${ubicacion.id}>
						<img class="place-icon" src="Images/Diseños/${ubicacion.nombre || '~/Images/Diseños/Logo1.png'}.jpg" alt="icon" />
						<div class="Title">
							<h2>${ubicacion.nombre || 'Nombre desconocido'}</h2>
						</div>
					</a>
				`;
		elemento.onclick = () => verDetalles(ubicacion.id);
		
		return elemento;
	}

	// Método para renderizar ubicaciones aleatorias
	async renderUbicacionesAleatorias(cantidad)
	{
		this.scrollContainer.innerHTML = ''; // Limpiar el contenido actual

		const ubicaciones = await this.fetchUbicaciones();
		if (!ubicaciones.length) {
			console.log('No hay ubicaciones disponibles.');
			this.scrollContainer.innerHTML = '<p>No hay ubicaciones disponibles.</p>';
			return;
		}

		// Seleccionar ubicaciones aleatorias
		const ubicacionesAleatorias = this.seleccionarAleatorios(ubicaciones, cantidad);

		// Renderizar las ubicaciones aleatorias
		ubicacionesAleatorias.forEach((ubicacion) => {
			const elementoHTML = this.createElementoHTML(ubicacion);
			this.scrollContainer.appendChild(elementoHTML);
		});
	}
}

// Crear una instancia de la clase con la URL de la API
const edificios = new Edificios('https://apimap.websitos256.com/api/ubicacion');

// Llenar datos al cargar la página
document.addEventListener('DOMContentLoaded', async() =>
{
	// Llenar con 5 ubicaciones aleatorias
	edificios.renderUbicacionesAleatorias(5);
});
async function filtro() {
	let busqueda = document.querySelector('.search2').value;
	let usuarios = ListaUsuarios.filter(x =>
		x.rfc.toLowerCase().includes(busqueda.toLowerCase()) ||
		x.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
		x.proveedor.toLowerCase().includes(busqueda.toLowerCase())
	)
	rellenarUsuarios(usuarios);
}

window.onload = () =>
{
	localStorage.clear();
}
window.onload();