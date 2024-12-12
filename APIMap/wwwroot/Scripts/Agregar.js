//NAVEGACION
let Home = document.getElementById('Inicio').addEventListener("click", function () {
	window.location.replace("Index");
});
let acept = document.getElementById('aceptar').addEventListener("click", function () {
	window.location.replace("Index");
});
let cancel = document.getElementById('cancelar').addEventListener("click", function () {
	window.location.replace("Index");
});
document.getElementById('imagen').addEventListener('change', function (event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			document.getElementById('imagen-preview').src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
});
let Salir = document.getElementById('Salir').addEventListener("click", function () {
	window.location.replace("/Index");
});

    async function fetchAreas() {
	    try {
		    const response = await fetch('https://apimap.websitos256.com/api/ubicacion');
		    if (!response.ok) {
			    throw new Error('Error al obtener datos de la API');
		    }
		    else {
			    console.log("accedio");
		    }

		    const data = await response.json();

		    // Filtrar las áreas únicas
		    const uniqueAreas = [...new Set(data.map(item => item.area))];

		    console.log('Áreas disponibles:', uniqueAreas);

		    // Agregar las áreas al select
		    const areaSelect = document.getElementById('area');
		    uniqueAreas.forEach(area => {
			    const option = document.createElement('option');
			    option.value = area.toLowerCase(); // Convertir a minúsculas para consistencia
			    option.textContent = area;
			    areaSelect.appendChild(option);
		    });
	    } catch (error) {
		    console.error('Error:', error);
	    }
    }
    document.getElementById('aceptar').addEventListener('click', async function (event) {
        event.preventDefault(); // Evita la recarga de la página
        console.log("Evento 'click' capturado en el botón Aceptar");

        const formData = new FormData();

        // Agregar los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const area = document.getElementById('area').value;
        const descripcion = document.getElementById('descripcion').value;

        console.log("Nombre:", nombre);
        console.log("Área seleccionada:", area);
        console.log("Descripción:", descripcion);

        formData.append('nombre', nombre);
        formData.append('area', area);
        formData.append('descripcion', descripcion);

        // Agregar la imagen si existe
        const imagen = document.getElementById('imagen').files[0];
        if (imagen) {
            formData.append('imagen', imagen);
            console.log("Imagen seleccionada:", imagen.name);
        } else {
            console.log("No se seleccionó ninguna imagen");
        }

        console.log("FormData creado con éxito:", formData);

        try {
            console.log("Iniciando petición POST a la API...");
            const response = await fetch('https://apimap.websitos256.com/api/ubicacion', {
                method: 'POST',
                body: formData
            });

            console.log("Petición completada. Verificando estado...");
            if (!response.ok) {
                console.error("Error en la respuesta de la API:", response.statusText);
                throw new Error(`Error en la petición: ${response.statusText}`);
            }

            const result = await response.json();
            console.log("Respuesta de la API recibida:", result);

            alert('Registro agregado exitosamente');
            console.log("Redirigiendo al usuario a la página principal...");
            window.location.replace("Index"); // Cambia esto según tu lógica de navegación
        } catch (error) {
            console.error("Error al realizar el POST:", error);
            alert('Hubo un error al guardar los datos');
        }
    });
//METODO PARA ACEPTAR LA IMAGEN Y QUE NO SE DETENGA LA DEPURACION
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el input de tipo archivo
    const inputImagen = document.getElementById('imagen');
    const imagenPreview = document.getElementById('imagen-preview');

    // Escuchamos el evento de cambio
    inputImagen.addEventListener('change', function (event) {
        console.log('Evento change disparado para el input de imagen');

        // Obtener el archivo seleccionado
        const imagen = event.target.files[0];

        if (imagen) {
            console.log('Archivo seleccionado:', imagen);

            // Validar el tipo de archivo
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(imagen.type)) {
                console.error('Formato de imagen no soportado:', imagen.type);
                alert('Por favor, selecciona una imagen válida (JPG, PNG, GIF)');
                return;
            }

            // Cargar una vista previa de la imagen seleccionada
            const reader = new FileReader();
            reader.onload = function (e) {
                console.log('Generando vista previa...');
                imagenPreview.src = e.target.result; // Actualiza la imagen del elemento <img>
            };
            reader.readAsDataURL(imagen); // Leer el archivo como URL base64
        } else {
            console.log('No se seleccionó ningún archivo');
            imagenPreview.src = '~/Images/Diseños/SinImagen.png'; // Restablecer a la imagen por defecto
        }
    });
});

// Llamar la función al cargar la página
document.addEventListener('DOMContentLoaded', fetchAreas);