let id = localStorage.getItem('idLugar');
const nombre = document.getElementById('nombre');
const area = document.getElementById('area');
const descripcion = document.getElementById('descripcion');
const imagen = document.getElementsByClassName('form-group')[3].querySelector('img');
async function obtenerArea()
{
    const response = await fetch('https://apimap.websitos256.com/api/ubicacion');
    datos = await response.clone().json();

    let area = datos.filter(x => x.id == id)[0];
    nombre.value = area.nombre;
    const data = await response.json();

    // Filtrar las áreas únicas
    const uniqueAreas = [...new Set(data.map(item => item.area))];
    const areaSelect = document.getElementById('area');
    uniqueAreas.forEach(areaoption => {
        const option = document.createElement('option');
        option.value = areaoption.toLowerCase();
        option.textContent = areaoption;
        areaSelect.appendChild(option);
        if (area.area.toLowerCase() == option.value.toLowerCase())
        {
            areaSelect.selectedIndex = option.index;
        }
    });

    descripcion.textContent = area.descripcion;
    imagen.src = "/Images/Diseños/" + area.nombre + ".jpg";
}   

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
            option.value = area.toLowerCase();
            option.textContent = area;
            areaSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}


document.querySelector('#Aceptar.btn.aceptar').addEventListener('click', async function (event) {
    event.preventDefault(); // Evita la recarga de la página
    console.log("Evento 'click' capturado en el botón Editar");

    const formData = new FormData();

    // Agregar los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const area = document.getElementById('area').value;
    const descripcion = document.getElementById('descripcion').value;
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
    try {
        console.log("Iniciando petición POST a la API...");
        const response = await fetch('https://apimap.websitos256.com/api/ubicacion', {
            method: 'PUT',
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
        window.location.replace("Index");
    } catch (error) {
        console.error("Error al realizar el POST:", error);
        alert('Hubo un error al guardar los datos');
    }
});
//let cancel = document.getElementById('Cancelar').addEventListener("click", function () {
//    window.location.replace("Index");
//});
obtenerArea();