// service-worker.js

let urls = [
    "/",
    "/index",
    "/mapacompleto",
    "/vistainicio",
    "/generarruta",
    "/manifest.json",
    "/serviceworker.js",
    "/css/stylelogin.css",
    "/css/stylemapa.css",
    "/css/styles.css",
    "/css/stylesadmin.css",
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
    "/scripts/usuario/salones.js"
];

let cacheName = "ubicatecCachev3";

async function precache() {
    let cache = await caches.open(cacheName);
    for (const url of urls) {
        try {
            await cache.add(url);
            console.log(`Cached: ${url}`);
        } catch (error) {
            console.log(`Error caching ${url}:`, error.message || error);
        }
    }
}

self.addEventListener("install", function (e) {
    //Precache
    e.waitUntil(precache());
});

self.addEventListener('fetch', event => {
    if (event.request.method === "GET") {
        event.respondWith(cacheFirst(event.request))
    }
    else {
        event.respondWith(networkFirst(event.request))
    }
});

async function cacheFirst(req) {
    try {
        let cache = await caches.open(cacheName);
        let response = await cache.match(req);
        if (response) {
            return response;
        } else {
            let respuesta = await fetch(req);
            if (respuesta && respuesta.ok) { // Verificar si la respuesta es válida
                // Verificar si el esquema de la URL es compatible con la API de Cache Storage
                if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
                    cache.put(req, respuesta.clone());
                }
            }
            return respuesta;
        }
    } catch (x) {
        return new Response("Error fetching the resource: " + req.url, { status: 500 });
    }
}

async function networkFirst(req) {
    let cache = await caches.open(cacheName);
    try {
        let respuesta = await fetch(req);
        if (respuesta.ok) {
            // Verificar si el método de la solicitud es GET antes de intentar almacenarlo en caché
            if (req.method === 'GET') {
                cache.put(req, respuesta.clone());
            }
        }
        return respuesta;
    } catch (x) {
        let response = await cache.match(req);
        if (response) {
            return response;
        } else {
            console.log(x);
            return new Response("Recurso no disponible en caché ni en la red", { status: 503 });
        }
    }
}