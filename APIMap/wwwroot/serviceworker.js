//Borre las versiones anteriores del cache, utilice CacheFirst para que no depende unicamente de la red
//hay que ver que recursos estaticos falta agregar en el array de UrlsToCache
// service-worker.js
const cacheName = "ubicatecCache-v1";
const urlsToCache = [
    "/",
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
    "/images/icono/icono128.png",
    "/images/icono/icono48.png",
    "/images/icono/icono96.png",
    "/images/icono/icono144.png",
    "/images/icono/icono192.png",
    "/images/icono/icono72.png",
    "/images/icono/icono512.png",
    "/scripts/usuario/areas.js",
    "/scripts/usuario/departamentos.js",
    "/scripts/usuario/edificios.js",
    "/scripts/usuario/laboratorios.js",
    "/scripts/usuario/salones.js",
    
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
