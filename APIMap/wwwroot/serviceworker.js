//Borre las versiones anteriores del cache, utilice CacheFirst para que no depende unicamente de la red
//hay que ver que recursos estaticos falta agregar en el array de UrlsToCache
// service-worker.js
const cacheName = "ubicatecCache-v1";
const urlsToCache = [
    "/", // Página principal
    "/index",
    "/mapacompleto",
    "/vistainicio",
    "/ayuda",
    "/generarruta",
    "/manifest.json",
    "/serviceworker.js",
    "/Css/StyleLogin.css",
    "/Css/Styles.css",
    "/Css/StylesAdmin.css",

    // Íconos
    "/images/icono/icono128.png",
    "/images/icono/icono48.png",
    "/images/icono/icono96.png",
    "/images/icono/icono144.png",
    "/images/icono/icono192.png",
    "/images/icono/icono72.png",
    "/images/icono/icono512.png",

    // Scripts
    "/scripts/usuario/areas.js",
    "/scripts/usuario/departamentos.js",
    "/scripts/usuario/edificios.js",
    "/scripts/usuario/laboratorios.js",
    "/scripts/usuario/salones.js",

    // Recursos estáticos adicionales (vistas)
    "/AboutUs",
    "/Areas",
    "/Ayuda",
    "/Departamentos",
    "/Detalles",
    "/Edificios",
    "/GenerarRuta",
    "/Index",
    "/Laboratorios",
    "/Login",
    "/MapaCompleto",
    "/PrimeraVistaAdmin",
    "/Salones",
    "/VistaInicio",

    // Vistas en la carpeta Admin
    "/Admin/Agregar",
    "/Admin/Areas",
    "/Admin/Departamentos",
    "/Admin/Edificios",
    "/Admin/Editar",
    "/Admin/Eliminar",
    "/Admin/Index",
    "/Admin/Laboratorios",
    "/Admin/Salones",


    // Imágenes de la carpeta wwwroot/images
    "/images/Diseños/A1.jpg",
    "/images/Diseños/A2.jpg",
    "/images/Diseños/A3.jpg",
    "/images/Diseños/A4.jpg",
    "/images/Diseños/A5.jpg",
    "/images/Diseños/A6.jpg",
    "/images/Diseños/A7.jpg",
    "/images/Diseños/A8.jpg",
    "/images/Aceptar.png",
    "/images/ALMACEN.jpg",
    "/images/AREA DE INGENIERIA DE SISTEMAS COMPUTACIONALES.jpg",
    "/images/Areas.png",
    "/images/Artes Plasticas.jpg",
    "/images/aula.png",
    "/images/B1.jpg",
    "/images/B2.jpg",
    "/images/B3.jpg",
    "/images/B4.jpg",
    "/images/B5.jpg",
    "/images/B6.jpg",
    "/images/BIBLIOTECA.jpg",
    "/images/boton-agregar.png",
    "/images/busqueda.png",
    "/images/C1.jpg",
    "/images/C2.jpg",
    "/images/C3.jpg",
    "/images/C4.jpg",
    "/images/C5.jpg",
    "/images/C6.jpg",
    "/images/C7.jpg",
    "/images/CAFETERIA.jpg",
    "/images/CAJA.jpg",
    "/images/CANCHA DE BASQUETBOL.jpg",
    "/images/Cancha de Futbol Rapido.jpg",
    "/images/casa.png",
    "/images/CASETA.jpg",
    "/images/CCA1.jpg",
    "/images/CCA3.jpg",
    "/images/CCA4.jpg",
    "/images/CCA5.jpg",
    "/images/CENTRO DE IDIOMAS.jpg",
    "/images/CerrarSesion.png",
    "/images/CISCO.jpg",
    "/images/conferencia.png",
    "/images/DEPARTAMENTO DE DESARROLLO ACADEMICO.jpg",
    "/images/Departamento de Escolares.jpg",
    "/images/DEPARTAMENTO DE FINANZAS.jpg",
    "/images/Departamento de Planeacion y Vinculacion.jpg",
    "/images/Departamento de TICs.jpg",
    "/images/Departamento.png",
    "/images/Direccion Academica.jpg",
    "/images/DIRECCION DE PLANEACION.jpg",
    "/images/DIRECCION GENERAL.jpg",
    "/images/Division Academica de Educacion a Distancia y Mixta.jpg",
    "/images/Domo.jpg",
    "/images/Edificio A.jpg",
    "/images/Edificio B.jpg",
    "/images/Edificio C.jpg",
    "/images/Edificio de Industrial.jpg",
    "/images/Edificio de Ing. Electromecanica.jpg",
    "/images/Edificio de Ing. Mecatronica.jpg",
    "/images/Edificio de Sistemas.jpg",
    "/images/Edificio.png",
    "/images/Enfermeria.jpg",
    "/images/Estacionamiento de Estudiantes.jpg",
    "/images/Explanada.jpg",
    "/images/Extrascolares.jpg",
    "/images/flecha-izquierda.png",
    "/images/Help.png",
    "/images/JARDIN ETNOBOTANICO.jpg",
    "/images/Laboratorio de Geologia.jpg",
    "/images/Laboratorio de Quimica.jpg",
    "/images/laboratorio.png",
    "/images/Logo1.png",
    "/images/Logo2.png",
    "/images/Logo3.png",
    "/images/LogoSistemas.png",
    "/images/Mapa1.png",
    "/images/MapaV3.png",
    "/images/matraz.png",
    "/images/menu.png",
    "/images/menuInferior.png",
    "/images/Mesas de Ping Pong.jpg",
    "/images/Oficina de Coordinacion de Sistemas.jpg",
    "/images/Oficina de Petrolera.jpg",
    "/images/Papeleria.jpg",
    "/images/Prefectura.jpg",
    "/images/Ruta.png",
    "/images/RutaMapa.png",
    "/images/Sala Audiovisual.jpg",
    "/images/SALA DE JUNTAS.jpg",
    "/images/Sala de Maestros de Sistemas.jpg",
    "/images/SinImagen.png",
    "/images/sin-login.png",
    "/images/ubicacion.png",
    "/images/Zoom.png",
];

// Instalación: Cachear recursos
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(urlsToCache);
        }).catch((error) => {
            console.error("Error al cachear recursos durante la instalación:", error);
        })
    );
});

// Activación: Limpiar cachés antiguas
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        console.log("Eliminando caché antigua:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch: Interceptar peticiones y usar caché primero
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // Si está en la caché, devolverlo
            }

            // Intentar obtener el recurso de la red y cachearlo
            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.ok) {
                    return caches.open(cacheName).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }
                return networkResponse;
            }).catch(() => {
                // En caso de fallo, mostrar un recurso de reserva (si aplica)
                if (event.request.destination === "image") {
                    return caches.match("/images/icono/icono128.png"); // Imagen de reserva
                }
                return new Response("Contenido no disponible sin conexión", { status: 503 });
            });
        })
    );
});
