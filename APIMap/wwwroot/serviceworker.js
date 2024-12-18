// service-worker.js
let cacheName = "ubicatecCache";
let urls = [
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
self.addEventListener("fetch", (event) => {
    if (event.request.url.includes("/api/Login")) {
        event.respondWith(
            (async () => {
                try {
                    const networkResponse = await fetch(event.request);
                    if (networkResponse.ok) {
                        const clonedResponse = networkResponse.clone();
                        const data = await clonedResponse.json();
                        // Opcionalmente, guardar datos en caché o realizar operaciones.
                        return networkResponse;
                    } else {
                        return new Response("Credenciales incorrectas", { status: 401 });
                    }
                } catch (err) {
                    console.warn("No se pudo conectar al servidor.");
                    return new Response(
                        JSON.stringify({ error: "No se pudo conectar al servidor." }),
                        { status: 503, headers: { "Content-Type": "application/json" } }
                    );
                }
            })()
        );
    }
});

self.addEventListener("fetch", (event) => {
    // Si la URL es la de la API de login o cualquier otra API que necesite autenticación
    if (event.request.url.includes("/api/")) {
        event.respondWith(
            (async () => {
                try {
                    // Obtener el token de localStorage
                    const token = await self.clients.matchAll().then(clients => clients[0]?.postMessage('getToken'));

                    // Clonar la petición para agregar el token
                    const modifiedRequest = new Request(event.request, {
                        headers: new Headers({
                            ...event.request.headers,
                            "Authorization": `Bearer ${token}`  // Agregar el token al encabezado de la solicitud
                        })
                    });

                    const networkResponse = await fetch(modifiedRequest);
                    if (networkResponse.ok) {
                        const clonedResponse = networkResponse.clone();
                        const data = await clonedResponse.json();
                        return networkResponse;
                    } else {
                        return new Response("Credenciales incorrectas", { status: 401 });
                    }
                } catch (err) {
                    console.warn("No se pudo conectar al servidor.");
                    return new Response(
                        JSON.stringify({ error: "No se pudo conectar al servidor." }),
                        { status: 503, headers: { "Content-Type": "application/json" } }
                    );
                }
            })()
        );
    }
});

self.addEventListener('message', (event) => {
    if (event.data === 'getToken') {
        // El servicio worker recibe el mensaje y responde con el token
        event.source.postMessage(localStorage.getItem('token'));
    }
});


// Instalación: cachear recursos
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            //mostrar las url de los recursos faltantes y agregar los demas
            for (let url of urls) {
                try {
                    cache.add(url);
                }
                catch (err) {
                    console.log(url + " no agregado");
                }
            }
        })
    );
});
// Activación: limpiar cachés antiguas
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {

                    if (key !== cacheName) {
                        console.log("Eliminando caché antigua:", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});
// Fetch: Interceptar peticiones y actualizar la caché si hay internet
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Si la solicitud está en la caché, devolverla
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Si la solicitud es POST, no cachearla
                if (event.request.method === 'POST') {
                    return fetch(event.request, { mode: 'cors', cache: "reload" })
                        .catch(() => {
                            console.warn("Fallo en la red, recurso no disponible:", event.request.url);
                            return caches.match("/offline.html");
                        });
                }

                // Si la solicitud no está en la caché y no es POST, intentar obtenerla de la red
                return fetch(event.request, { mode: 'cors', cache: "reload" })
                    .then((networkResponse) => {
                        // Guarda en la caché solo si la respuesta es exitosa y no es una solicitud POST
                        if (networkResponse.ok) {
                            return caches.open(cacheName).then((cache) => {
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        console.warn("Fallo en la red, recurso no disponible:", event.request.url);
                        return caches.match("/offline.html");
                    });
            })
    );
});


//async function precache() {
//    let cache = await caches.open(cacheName);
//    for (const url of urls) {
//        try {
//            await cache.add(url);
//            console.log(`Cached: ${url}`);
//        } catch (error) {
//            console.log(`Error caching ${url}:`, error.message || error);
//        }
//    }
//}

//self.addEventListener("install", function (e) {
//    //Precache
//    e.waitUntil(precache());
//});

//self.addEventListener('fetch', event =>
//{
//    if (event.request.method === "GET")
//    {
//        event.respondWith(cacheFirst(event.request))
//    }
//    else {
//        event.respondWith(networkFirst(event.request))
//    }
//});

//async function cacheFirst(req) {
//    try {
//        let cache = await caches.open(cacheName);
//        let response = await cache.match(req);
//        if (response) {
//            return response;
//        } else {
//            let respuesta = await fetch(req);
//            if (respuesta && respuesta.ok) { // Verificar si la respuesta es válida
//                // Verificar si el esquema de la URL es compatible con la API de Cache Storage
//                if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
//                    cache.put(req, respuesta.clone());
//                }
//            }
//            return respuesta;
//        }
//    } catch (x) {
//        return new Response("Error fetching the resource: " + req.url, { status: 500 });
//    }
//}

//async function networkFirst(req) {
//    let cache = await caches.open(cacheName);
//    try {
//        let respuesta = await fetch(req);
//        if (respuesta.ok) {
//            // Verificar si el método de la solicitud es GET antes de intentar almacenarlo en caché
//            if (req.method === 'GET') {
//                cache.put(req, respuesta.clone());
//            }
//        }
//        return respuesta;
//    } catch (x) {
//        let response = await cache.match(req);
//        if (response) {
//            return response;
//        } else {
//            console.log(x);
//            return new Response("Recurso no disponible en caché ni en la red", { status: 503 });
//        }
//    }
//}
