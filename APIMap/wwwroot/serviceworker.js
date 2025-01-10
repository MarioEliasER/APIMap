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
    '/images/Diseños/Aceptar.png',
    '/images/Diseños/ALMACEN.jpg',
    '/images/Diseños/AREA DE INGENIERIA DE SISTEMAS COMPUTACIONALES.jpg',
    '/images/Diseños/Areas.png',
    '/images/Diseños/Artes Plasticas.jpg',
    '/images/Diseños/aula.png',
    '/images/Diseños/BIBLIOTECA.jpg',
    '/images/Diseños/CAFETERIA.jpg',
    '/images/Diseños/CAJA.jpg',
    '/images/Diseños/CANCHA DE BASQUETBOL.jpg',
    '/images/Diseños/Cancha de Futbol Rapido.jpg',
    '/images/Diseños/casa.png',
    '/images/Diseños/CASETA.jpg',
    '/images/Diseños/CCA1.jpg',
    '/images/Diseños/CCA3.jpg',
    '/images/Diseños/CCA4.jpg',
    '/images/Diseños/CCA5.jpg',
    '/images/Diseños/CENTRO DE IDIOMAS.jpg',
    '/images/Diseños/CerrarSesion.png',
    '/images/Diseños/CISCO.jpg',
    '/images/Diseños/conferencia.png',
    '/images/Diseños/DEPARTAMENTO DE DESARROLLO ACADEMICO.jpg',
    '/images/Diseños/Departamento de Escolares.jpg',
    '/images/Diseños/DEPARTAMENTO DE FINANZAS.jpg',
    '/images/Diseños/Departamento de Planeacion y Vinculacion.jpg',
    '/images/Diseños/Departamento de TICs.jpg',
    '/images/Diseños/Departamento.png',
    '/images/Diseños/Direccion Academica.jpg',
    '/images/Diseños/DIRECCION DE PLANEACION.jpg',
    '/images/Diseños/DIRECCION GENERAL.jpg',
    '/images/Diseños/Division Academica de Educacion a Distancia y Mixta.jpg',
    '/images/Diseños/Domo.jpg',
    '/images/Diseños/Edificio A.jpg',
    '/images/Diseños/Edificio B.jpg',
    '/images/Diseños/Edificio C.jpg',
    '/images/Diseños/Edificio de Industrial.jpg',
    '/images/Diseños/Edificio de Ing. Electromecanica.jpg',
    '/images/Diseños/Edificio de Ing. Mecatronica.jpg',
    '/images/Diseños/Edificio de Sistemas.jpg',
    '/images/Diseños/Edificio.png',
    '/images/Diseños/Enfermeria.jpg',
    '/images/Diseños/Estacionamiento de Estudiantes.jpg',
    '/images/Diseños/Explanada.jpg',
    '/images/Diseños/Extraescolares.jpg',
    '/images/Diseños/flecha-izquierda.png',
    '/images/Diseños/Help.png',
    '/images/Diseños/JARDIN ETNOBOTANICO.jpg',
    '/images/Diseños/Laboratorio de Geologia.jpg',
    '/images/Diseños/Laboratorio de Quimica.jpg',
    '/images/Diseños/laboratorio.png',
    '/images/Diseños/Logo1.png',
    '/images/Diseños/Logo2.png',
    '/images/Diseños/Logo3.png',
    '/images/Diseños/LogoSistemas.png',
    '/images/Diseños/Mapa1.png',
    '/images/Diseños/MapaV3.png',
    '/images/Diseños/matraz.png',
    '/images/Diseños/menu.png',
    '/images/Diseños/menuInferior.png',
    '/images/Diseños/Mesas de Ping Pong.jpg',
    '/images/Diseños/Oficina de Coordinacion de Sistemas.jpg',
    '/images/Diseños/Oficina de Petrolera.jpg',
    '/images/Diseños/Papeleria.jpg',
    '/images/Diseños/Prefectura.jpg',
    '/images/Diseños/Ruta.png',
    '/images/Diseños/RutaMapa.png',
    '/images/Diseños/Sala Audiovisual.jpg',
    '/images/Diseños/SALA DE JUNTAS.jpg',
    '/images/Diseños/Sala de Maestros de Sistemas.jpg',
    '/images/Diseños/SinImagen.png',
    '/images/Diseños/sin-login.png',
    '/images/Diseños/ubicacion.png',
    '/images/Diseños/Zoom.png',
    '/images/Diseños/A1.jpg',
    '/images/Diseños/A2.jpg',
    '/images/Diseños/A3.jpg',
    '/images/Diseños/A4.jpg',
    '/images/Diseños/A5.jpg',
    '/images/Diseños/A6.jpg',
    '/images/Diseños/A7.jpg',
    '/images/Diseños/A8.jpg',
    '/images/Diseños/B1.jpg',
    '/images/Diseños/B2.jpg',
    '/images/Diseños/B3.jpg',
    '/images/Diseños/B4.jpg',
    '/images/Diseños/B5.jpg',
    '/images/Diseños/B6.jpg',
    '/images/Diseños/C1.jpg',
    '/images/Diseños/C2.jpg',
    '/images/Diseños/C3.jpg',
    '/images/Diseños/C4.jpg',
    '/images/Diseños/C5.jpg',
    '/images/Diseños/C6.jpg',
    '/images/Diseños/C7.jpg',
    '/images/Diseños/boton-agregar.png',
    '/images/Diseños/busqueda.png',

    // Cafeteria
    '/Rutas/cafeteria-almacen.png',
    '/Rutas/cafeteria-audiovisual.png',
    '/Rutas/cafeteria-biblioteca.png',
    '/Rutas/cafeteria-canchadebasquetbol.png',
    '/Rutas/cafeteria-caseta.png',
    '/Rutas/cafeteria-centrodeidiomas.png',
    '/Rutas/cafeteria-departamentodeescolares.png',
    '/Rutas/cafeteria-departamentodefinanzas.png',
    '/Rutas/cafeteria-departamentodeplaneacionyvinculacion.png',
    '/Rutas/cafeteria-direccionacademica.png',
    '/Rutas/cafeteria-direcciongeneral.png',
    '/Rutas/cafeteria-domo.png',
    '/Rutas/cafeteria-edificioa.png',
    '/Rutas/cafeteria-edificiob.png',
    '/Rutas/cafeteria-edificioc.png',
    '/Rutas/cafeteria-edificioing.electromecanicamecatronica.png',
    '/Rutas/cafeteria-edificioing.industrial.png',
    '/Rutas/cafeteria-edificioing.sistemas.png',
    '/Rutas/cafeteria-explanada.png',
    '/Rutas/cafeteria-extraescolares.png',
    '/Rutas/cafeteria-incubadoradeempresas.png',
    '/Rutas/cafeteria-laboratoriodegeologia.png',
    '/Rutas/cafeteria-laboratoriodequimica.png',
    '/Rutas/cafeteria-oficinadepetrolera.png',
    '/Rutas/cafeteria-saladedocentespetrolera.png',
    '/Rutas/cafeteria-saladejuntas.png',

    // Canchadebasquetbol
    '/Rutas/canchadebasquetbol-almacen.png',
    '/Rutas/canchadebasquetbol-audiovisual.png',
    '/Rutas/canchadebasquetbol-biblioteca.png',
    '/Rutas/canchadebasquetbol-cafeteria.png',
    '/Rutas/canchadebasquetbol-caseta.png',
    '/Rutas/canchadebasquetbol-centrodeidiomas.png',
    '/Rutas/canchadebasquetbol-departamentodeescolares.png',
    '/Rutas/canchadebasquetbol-departamentodefinanzas.png',
    '/Rutas/canchadebasquetbol-departamentodeplaneacionyvinculacion.png',
    '/Rutas/canchadebasquetbol-direccionacademica.png',
    '/Rutas/canchadebasquetbol-direcciongeneral.png',
    '/Rutas/canchadebasquetbol-domo.png',
    '/Rutas/canchadebasquetbol-edificioa.png',
    '/Rutas/canchadebasquetbol-edificiob.png',
    '/Rutas/canchadebasquetbol-edifcioc.png',
    '/Rutas/canchadebasquetbol-edificioing.electromecanicamecatronica.png',
    '/Rutas/canchadebasquetbol-edificioing.industrial.png',
    '/Rutas/canchadebasquetbol-explanada.png',
    '/Rutas/canchadebasquetbol-extraescolares.png',
    '/Rutas/canchadebasquetbol-incubadoradeempresas.png',
    '/Rutas/canchadebasquetbol-laboratoriodegeologia.png',
    '/Rutas/canchadebasquetbol-laboratoriodequimica.png',
    '/Rutas/canchadebasquetbol-oficinadepetrolera.png',
    '/Rutas/canchadebasquetbol-saladedocentespetrolera.png',
    '/Rutas/canchadebasquetbol-saladejuntas.png',
    // Caseta
    '/Rutas/caseta-almacen.png',
    '/Rutas/caseta-audiovisual.png',
    '/Rutas/caseta-biblioteca.png',
    '/Rutas/caseta-cafeteria.png',
    '/Rutas/caseta-canchadebasquetbol.png',
    '/Rutas/caseta-centrodeidiomas.png',
    '/Rutas/caseta-departamentodeescolares.png',
    '/Rutas/caseta-departamentodefinanzas.png',
    '/Rutas/caseta-departamentodeplaneacionyvinculacion.png',
    '/Rutas/caseta-direccionacademica.png',
    '/Rutas/caseta-direcciongeneral.png',
    '/Rutas/caseta-domo.png',
    '/Rutas/caseta-edificioa.png',
    '/Rutas/caseta-edificiob.png',
    '/Rutas/caseta-edificioc.png',
    '/Rutas/caseta-edificioing.electromecanicamecatronica.png',
    '/Rutas/caseta-edificioing.industrial.png',
    '/Rutas/caseta-edificioing.sistemas.png',
    '/Rutas/caseta-explanada.png',
    '/Rutas/caseta-extraescolares.png',
    '/Rutas/caseta-incubadoradeempresas.png',
    '/Rutas/caseta-laboratoriodegeologia.png',
    '/Rutas/caseta-laboratoriodequimica.png',
    '/Rutas/caseta-oficinadepetrolera.png',
    '/Rutas/caseta-saladedocentespetrolera.png',
    '/Rutas/caseta-saladejuntas.png',
    // Centrodeidiomas
    '/Rutas/centrodeidiomas-almacen.png',
    '/Rutas/centrodeidiomas-audiovisual.png',
    '/Rutas/centrodeidiomas-biblioteca.png',
    '/Rutas/centrodeidiomas-cafeteria.png',
    '/Rutas/centrodeidiomas-canchadebasquetbol.png',
    '/Rutas/centrodeidiomas-caseta.png',
    '/Rutas/centrodeidiomas-departamentodeescolares.png',
    '/Rutas/centrodeidiomas-departamentodefinanzas.png',
    '/Rutas/centrodeidiomas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/centrodeidiomas-direccionacademica.png',
    '/Rutas/centrodeidiomas-direcciongeneral.png',
    '/Rutas/centrodeidiomas-domo.png',
    '/Rutas/centrodeidiomas-edificioa.png',
    '/Rutas/centrodeidiomas-edificiob.png',
    '/Rutas/centrodeidiomas-edificioc.png',
    '/Rutas/centrodeidiomas-edificioing.electromecanicamecatronica.png',
    '/Rutas/centrodeidiomas-edificioing.industrial.png',
    '/Rutas/centrodeidiomas-edificioing.sistemas.png',
    '/Rutas/centrodeidiomas-explanada.png',
    '/Rutas/centrodeidiomas-departamentodeescolares.png',
    '/Rutas/centrodeidiomas-incubadoradeempresas.png',
    '/Rutas/centrodeidiomas-laboratoriodegeologia.png',
    '/Rutas/centrodeidiomas-laboratoriodequimica.png',
    '/Rutas/centrodeidiomas-oficinadepetrolera.png',
    '/Rutas/centrodeidiomas-saladedocentespetrolera.png',
    '/Rutas/centrodeidiomas-saladejuntas.png',

    // DepartamentoEscolares
    '/Rutas/departamentodeescolares-almacen.png',
    '/Rutas/departamentodeescolares-audiovisual.png',
    '/Rutas/departamentodeescolares-biblioteca.png',
    '/Rutas/departamentodeescolares-cafeteria.png',
    '/Rutas/departamentodeescolares-canchadebasquetbol.png',
    '/Rutas/departamentodeescolares-caseta.png',
    '/Rutas/departamentodeescolares-centrodeidiomas.png',
    '/Rutas/departamentodeescolares-departamentodefinanzas.png',
    '/Rutas/departamentodeescolares-departamentodeplaneacionyvinculacion.png',
    '/Rutas/departamentodeescolares-direccionacademica.png',
    '/Rutas/departamentodeescolares-direcciongeneral.png',
    '/Rutas/departamentodeescolares-domo.png',
    '/Rutas/departamentodeescolares-edificioa.png',
    '/Rutas/departamentodeescolares-edificiob.png',
    '/Rutas/departamentodeescolares-edificioc.png',
    '/Rutas/departamentodeescolares-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/departamentodeescolares-edificioing.industrial.png',
    '/Rutas/departamentodeescolares-explanada.png',
    '/Rutas/departamentodeescolares-extraescolares.png',
    '/Rutas/departamentodeescolares-incubadoradeempresas.png',
    '/Rutas/departamentodeescolares-laboratoriodegeologia.png',
    '/Rutas/departamentodeescolares-laboratoriodequimica.png',
    '/Rutas/departamentodeescolares-oficinadepetrolera.png',
    '/Rutas/departamentodeescolares-saladedocentespetrolera.png',
    '/Rutas/departamentodeescolares-saladejuntas.png',

    // DepartamentodePlaneacionyVinculacion
    '/Rutas/departamentodeplaneacionyvinculacion-canchadebasquetbol.png',
    '/Rutas/departamentodeplaneacionyvinculacion-caseta.png',
    '/Rutas/departamentodeplaneacionyvinculacion-centrodeidiomas.png',
    '/Rutas/departamentodeplaneacionyvinculacion-departamentodeescolares.png',
    '/Rutas/departamentodeplaneacionyvinculacion-departamentodefinanzas.png',
    '/Rutas/departamentodeplaneacionyvinculacion-direccionacademica.png',
    '/Rutas/departamentodeplaneacionyvinculacion-direcciongeneral.png',
    '/Rutas/departamentodeplaneacionyvinculacion-edificioa.png',
    '/Rutas/departamentodeplaneacionyvinculacion-edificiob.png',
    '/Rutas/departamentodeplaneacionyvinculacion-edificioc.png',
    '/Rutas/departamentodeplaneacionyvinculacion-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/departamentodeplaneacionyvinculacion-edificioing.industrial.png',
    '/Rutas/departamentodeplaneacionyvinculacion-edificioing.sistemas.png',
    '/Rutas/departamentodeplaneacionyvinculacion-explanada.png',
    '/Rutas/departamentodeplaneacionyvinculacion-extraescolares.png',
    '/Rutas/departamentodeplaneacionyvinculacion-incubadoradeempresas.png',
    '/Rutas/departamentodeplaneacionyvinculacion-laboratoriodegeologia.png',
    '/Rutas/departamentodeplaneacionyvinculacion-laboratoriodequimica.png',
    '/Rutas/departamentodeplaneacionyvinculacion-oficinadepetrolera.png',
    '/Rutas/departamentodeplaneacionyvinculacion-saladocentespetrolera.png',
    '/Rutas/departamentodeplaneacionyvinculacion-saladejuntas.png',

    // DireccionAcademica
    '/Rutas/direccionacademica-almacen.png',
    '/Rutas/direccionacademica-audiovisual.png',
    '/Rutas/direccionacademica-biblioteca.png',
    '/Rutas/direccionacademica-cafeteria.png',
    '/Rutas/direccionacademica-canchadebasquetbol.png',
    '/Rutas/direccionacademica-caseta.png',
    '/Rutas/direccionacademica-centrodeidiomas.png',
    '/Rutas/direccionacademica-departamentodefinanzas.png',
    '/Rutas/direccionacademica-departamentodeplaneacionyvinculacion.png',
    '/Rutas/direccionacademica-direcciongeneral.png',
    '/Rutas/direccionacademica-domo.png',
    '/Rutas/direccionacademica-edificioa.png',
    '/Rutas/direccionacademica-edificiob.png',
    '/Rutas/direccionacademica-edificioc.png',
    '/Rutas/direccionacademica-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/direccionacademica-edificioing.industrial.png',
    '/Rutas/direccionacademica-edificioing.sistemas.png',
    '/Rutas/direccionacademica-explanada.png',
    '/Rutas/direccionacademica-extraescolares.png',
    '/Rutas/direccionacademica-incubadoradeempresas.png',
    '/Rutas/direccionacademica-laboratoriodegeologia.png',
    '/Rutas/direccionacademica-laboratoriodequimica.png',
    '/Rutas/direccionacademica-oficinadepetrolera.png',
    '/Rutas/direccionacademica-saladedocentespetrolera.png',
    '/Rutas/direccionacademica-saladejuntas.png',

    // DireccionGeneral
    '/Rutas/direcciongeneral-almacen.png',
    '/Rutas/direcciongeneral-audiovisual.png',
    '/Rutas/direcciongeneral-biblioteca.png',
    '/Rutas/direcciongeneral-cafeteria.png',
    '/Rutas/direcciongeneral-canchadebasquetbol.png',
    '/Rutas/direcciongeneral-caseta.png',
    '/Rutas/direcciongeneral-centrodeidiomas.png',
    '/Rutas/direcciongeneral-departamentodeescolares.png',
    '/Rutas/direcciongeneral-departamentodefinanzas.png',
    '/Rutas/direcciongeneral-departamentodeplaneacionyvinculacion.png',
    '/Rutas/direcciongeneral-direccionacademica.png',
    '/Rutas/direcciongeneral-domo.png',
    '/Rutas/direcciongeneral-edificioa.png',
    '/Rutas/direcciongeneral-edificiob.png',
    '/Rutas/direcciongeneral-edificioc.png',
    '/Rutas/direcciongeneral-edificioing.electromecanicamecatronica.png',
    '/Rutas/direcciongeneral-edificioing.industrial.png',
    '/Rutas/direcciongeneral-edificioing.sistemas.png',
    '/Rutas/direcciongeneral-explanada.png',
    '/Rutas/direcciongeneral-extraescolares.png',
    '/Rutas/direcciongeneral-incubadoradeempresas.png',
    '/Rutas/direcciongeneral-laboratoriodegeologia.png',
    '/Rutas/direcciongeneral-laboratoriodequimica.png',
    '/Rutas/direcciongeneral-oficinadepetrolera.png',
    '/Rutas/direcciongeneral-saladedocentespetrolera.png',
    '/Rutas/direcciongeneral-saladejuntas.png',

    // Domo
    '/Rutas/domo-almacen.png',
    '/Rutas/domo-biblioteca.png',
    '/Rutas/domo-cafeteria.png',

    // Edificio Ing. Sistemas
    '/Rutas/edificioing.sistemas-canchadebasquetbol.png',
    '/Rutas/edificioing.sistemas-departamentodeescolares.png',
    '/Rutas/edificioing.sistemas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioing.sistemas-cafeteria.png',

// EdificioA
'/Rutas/edificioa-almacen.png',
    '/Rutas/edificioa-audiovisual.png',
    '/Rutas/edificioa-biblioteca.png',
    '/Rutas/edificioa-cafeteria.png',
    '/Rutas/edificioa-canchadebasquetbol.png',
    '/Rutas/edificioa-caseta.png',
    '/Rutas/edificioa-centrodeidiomas.png',
    '/Rutas/edificioing.sistemas-cafeteria.png',
    '/Rutas/edificioa-departamentodefinanzas.png',
    '/Rutas/edificioa-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioa-direccionacademica.png',
    '/Rutas/edificioa-direcciongeneral.png',
    '/Rutas/edificioa-domo.png',
    '/Rutas/edificioa-edificiob.png',
    '/Rutas/edificioa-edificioc.png',
    '/Rutas/edificioa-edificioing.electromecanicamecatronica.png',
    '/Rutas/edificioa-edificioing.industrial.png',
    '/Rutas/edificioa-edificioing.sistemas.png',
    '/Rutas/edificioa-explanada.png',
    '/Rutas/edificioa-extraescolares.png',
    '/Rutas/edificioa-incubadoradeempresas.png',
    '/Rutas/edificioa-laboratoriodegeologia.png',
    '/Rutas/edificioa-laboratoriodequimica.png',
    '/Rutas/edificioa-saladedocentespetrolera.png',
    '/Rutas/edificioa-saladejuntas.png',

    // EdificioB
    '/Rutas/edificiob-almacen.png',
    '/Rutas/edificiob-audiovisual.png',
    '/Rutas/edificiob-biblioteca.png',
    '/Rutas/edificiob-cafeteria.png',
    '/Rutas/edificiob-canchadebasquetbol.png',
    '/Rutas/edificiob-caseta.png',
    '/Rutas/edificiob-centrodeidiomas.png',
    '/Rutas/edificiob-departamentodeescolares.png',
    '/Rutas/edificiob-departamentodefinanzas.png',
    '/Rutas/edificiob-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificiob-direccionacademica.png',
    '/Rutas/edificiob-direcciongeneral.png',
    '/Rutas/edificiob-domo.png',
    '/Rutas/edificiob-edificioa.png',
    '/Rutas/edificiob-edificioc.png',
    '/Rutas/edificiob-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/edificiob-edificioing.industrial.png',
    '/Rutas/edificiob-edificioing.sistemas.png',
    '/Rutas/edificiob-explanada.png',
    '/Rutas/edificiob-extraescolares.png',
    '/Rutas/edificiob-incubadoradeempresas.png',
    '/Rutas/edificiob-laboratoriodegeologia.png',
    '/Rutas/edificiob-laboratoriodequimica.png',
    '/Rutas/edificiob-oficinadepetrolera.png',
    '/Rutas/edificiob-saladedocentespetrolera.png',
    '/Rutas/edificiob-saladejuntas.png',
    '/Rutas/edificiob-laboratoriodequimica.png',
    '/Rutas/edificiob-oficinadepetrolera.png',
    '/Rutas/edificiob-saladedocentespetrolera.png',
    '/Rutas/edificiob-saladejuntas.png',


    '/Rutas/edificioc-almacen.png',
    '/Rutas/edificioc-audiovisual.png',
    '/Rutas/edificioc-biblioteca.png',
    '/Rutas/edificioc-cafeteria.png',
    '/Rutas/edificioc-caseta.png',
    '/Rutas/edificioc-centrodeidiomas.png',
    '/Rutas/edificioc-departamentodeescolares.png',
    '/Rutas/edificioc-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioc-direccionacademica.png',
    '/Rutas/edificioc-direcciongeneral.png',
    '/Rutas/edificioc-domo.png',
    '/Rutas/edificioc-edificioa.png',
    '/Rutas/edificioc-edificiob.png',
    '/Rutas/edificioc-extraescolares.png',
    '/Rutas/edificioc-incubadoradeempresas.png',
    '/Rutas/edificioc-laboratoriodegeologia.png',
    '/Rutas/edificioc-laboratoriodequimica.png',
    '/Rutas/edificioc-oficinadepetrolera.png',
    '/Rutas/edificioc-saladedocentespetrolera.png',
    '/Rutas/edificioc-saladejuntas.png',


    '/Rutas/edificiodeing.industria-edificiodeing.sistemas.png',
    '/Rutas/edificioing.industrial-laboratoriodegeologia.png',
    '/Rutas/edificioing.industrial-laboratoriodequimica.png',
    '/Rutas/edificioing.industrial-saladejuntas.png',
    '/Rutas/edificioing.electromecanicamecatronica-almacen.png',
    '/Rutas/edificioing.electromecanicamecatronica-audiovisual.png',
    '/Rutas/edificioing.electromecanicamecatronica-biblioteca.png',
    '/Rutas/edificioing.electromecanicamecatronica-cafeteria.png',
    '/Rutas/edificioing.electromecanicamecatronica-canchadebasquetbol.png',
    '/Rutas/edificioing.electromecanicamecatronica-caseta.png',
    '/Rutas/edificioing.electromecanicamecatronica-centrodeidiomas.png',
    '/Rutas/edificioing.electromecanicamecatronica-departamentodeescolares.png',
    '/Rutas/edificioing.electromecanicamecatronica-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioing.electromecanicamecatronica-direccionacademica.png',
    '/Rutas/edificioing.electromecanicamecatronica-direcciongeneral.png',
    '/Rutas/edificioing.electromecanicamecatronica-domo.png',
    '/Rutas/edificioing.electromecanicamecatronica-edificioa.png',
    '/Rutas/edificioing.electromecanicamecatronica-edificiob.png',
    '/Rutas/edificioing.electromecanicamecatronica-edificioc.png',
    '/Rutas/edificioing.electromecanicamecatronica-edificioing.industrial.png',
    '/Rutas/edificioing.electromecanicamecatronica-explanada.png',
    '/Rutas/edificioing.electromecanicamecatronica-edificioing.sistemas.png',
    '/Rutas/edificioing.electromecanicamecatronica-extraescolares.png',
    '/Rutas/edificioing.electromecanicamecatronica-incubadoradeempresas.png',
    '/Rutas/edificioing.electromecanicamecatronica-laboratoriodegeologia.png',
    '/Rutas/edificioing.electromecanicamecatronica-laboratoriodequimica.png',
    '/Rutas/edificioing.electromecanicamecatronica-oficinadepetrolera.png',
    '/Rutas/edificioing.electromecanicamecatronica-saladedocentespetrolera.png',
    '/Rutas/edificioing.electromecanicamecatronica-saladejuntas.png',


    '/Rutas/edificioing.industrial-almacen.png',
    '/Rutas/edificioing.industrial-audiovisual.png',
    '/Rutas/edificioing.industrial-biblioteca.png',
    '/Rutas/edificioing.industrial-cafeteria.png',
    '/Rutas/edificioing.industrial-canchadebasquetbol.png',
    '/Rutas/edificioing.industrial-caseta.png',
    '/Rutas/edificioing.industrial-centrodeidiomas.png',
    '/Rutas/edificioing.industrial-departamentodeescolares.png',
    '/Rutas/edificioing.industrial-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioing.industrial-direccionacademica.png',
    '/Rutas/edificioing.industrial-domo.png',
    '/Rutas/edificioing.industrial-edificioa.png',
    '/Rutas/edificioing.industrial-edificiob.png',
    '/Rutas/edificioing.industrial-explanada.png',
    '/Rutas/edificioing.industrial-extraescolares.png',
    '/Rutas/edificioing.industrial-incubadoradeempresas.png',
    '/Rutas/edificioing.industrial-laboratoriodegeologia.png',
    '/Rutas/edificioing.industrial-laboratoriodequimica.png',
    '/Rutas/edificioing.industrial-oficinadepetrolera.png',
    '/Rutas/edificioing.industrial-saladedocentespetrolera.png',
    '/Rutas/edificioing.industrial-saladejuntas.png',

    '/Rutas/edificioing.sistemas-almacen.png',
    '/Rutas/edificioing.sistemas-audiovisual.png',
    '/Rutas/edificioing.sistemas-cafeteria.png',
    '/Rutas/edificioing.sistemas-canchadebasquetbol.png',
    '/Rutas/edificioing.sistemas-caseta.png',
    '/Rutas/edificioing.sistemas-centrodeidiomas.png',
    '/Rutas/edificioing.sistemas-departamentodeescolares.png',
    '/Rutas/edificioing.sistemas-departamentodefinanzas.png',
    '/Rutas/edificioing.sistemas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioing.sistemas-direccionacademica.png',
    '/Rutas/edificioing.sistemas-direcciongeneral.png',
    '/Rutas/edificioing.sistemas-domo.png',
    '/Rutas/edificioing.sistemas-edificioa.png',
    '/Rutas/edificioing.sistemas-edificiob.png',
    '/Rutas/edificioing.sistemas-edificioing.electromecanicamecatronica.png',
    '/Rutas/edificioing.sistemas-incubadoradeempresas.png',
    '/Rutas/edificioing.sistemas-edificioing.industrial.png',
    '/Rutas/edificioing.sistemas-laboratoriodegeologia.png',
    '/Rutas/edificioing.sistemas-laboratoriodequimica.png',
    '/Rutas/edificioing.sistemas-explanada.png',

    '/Rutas/extraescolares-almacen.png',
    '/Rutas/extraescolares-biblioteca.png',
    '/Rutas/extraescolares-cafeteria.png',
    '/Rutas/extraescolares-cafeteria.png',
    '/Rutas/extraescolares-caseta.png',
    '/Rutas/extraescolares-centrodeidiomas.png',
    '/Rutas/extraescolares-departamentodeescolares.png',
    '/Rutas/extraescolares-departamentodefinanzas.png',
    '/Rutas/extraescolares-departamentodeplaneacionyvinculacion.png',
    '/Rutas/extraescolares-direccionacademica.png',
    '/Rutas/extraescolares-direcciongeneral.png',
    '/Rutas/extraescolares-domo.png',
    '/Rutas/extraescolares-edificioa.png',
    '/Rutas/extraescolares-edificiob.png',
    '/Rutas/extraescolares-edificioc.png',
    '/Rutas/extraescolares-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/extraescolares-edificioing.industrial.png',
    '/Rutas/extraescolares-edificioing.sistemas.png',
    '/Rutas/extraescolares-explanada.png',
    '/Rutas/extraescolares-incubadoradeempresas.png',
    '/Rutas/extraescolares-laboratoriodegeologia.png',
    '/Rutas/extraescolares-laboratoriodequimica.png',
    '/Rutas/extraescolares-oficinadepetrolera.png',
    '/Rutas/extraescolares-saladedocentespetrolera.png',
    '/Rutas/extraescolares-saladejuntas.png',

    '/Rutas/incubadoradeempresas-laboratoriodegeologia.png',
    '/Rutas/incubadoradeempresas-almacen.png',
    '/Rutas/incubadoradeempresas-biblioteca.png',
    '/Rutas/incubadoradeempresas-cafeteria.png',
    '/Rutas/incubadoradeempresas-canchadebasquetbol.png',
    '/Rutas/incubadoradeempresas-caseta.png',
    '/Rutas/incubadoradeempresas-centrodeidiomas.png',
    '/Rutas/incubadoradeempresas-departamentodeescolares.png',
    '/Rutas/incubadoradeempresas-departamentodefinanzas.png',
    '/Rutas/incubadoradeempresas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/incubadoradeempresas-direccionacademica.png',
    '/Rutas/incubadoradeempresas-direcciongeneral.png',
    '/Rutas/incubadoradeempresas-domo.png',
    '/Rutas/incubadoradeempresas-edificioa.png',
    '/Rutas/incubadoradeempresas-edificiob.png',
    '/Rutas/incubadoradeempresas-edificioc.png',
    '/Rutas/incubadoradeempresas-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/incubadoradeempresas-edificioing.industrial.png',
    '/Rutas/incubadoradeempresas-edificioing.sistemas.png',
    '/Rutas/incubadoradeempresas-explanada.png',
    '/Rutas/incubadoradeempresas-extraescolares.png',
    '/Rutas/incubadoradeempresas-laboratoriodegeologia.png',
    '/Rutas/incubadoradeempresas-laboratoriodequimica.png',
    '/Rutas/incubadoradeempresas-oficinadepetrolera.png',
    '/Rutas/incubadoradeempresas-saladedocentespetrolera.png',
    '/Rutas/incubadoradeempresas-saladejuntas.png', 'Rutas/laboratoriodequimica-biblioteca.png',

    '/Rutas/laboratoriodequimica-cafeteria.png',
    '/Rutas/laboratoriodequimica-canchaDebasquetbol.png',
    '/Rutas/laboratoriodequimica-caseta.png',
    '/Rutas/laboratoriodequimica-centrodeidiomas.png',
    '/Rutas/laboratoriodequimica-departamentodeescolares.png',
    '/Rutas/laboratoriodequimica-departamentodefinanzas.png',
    '/Rutas/laboratoriodequimica-departamentodeplaneacionyvinculacion.png',
    '/Rutas/laboratoriodequimica-direccionacademica.png',
    '/Rutas/laboratoriodequimica-direcciongeneral.png',
    '/Rutas/laboratoriodequimica-domo.png',
    '/Rutas/laboratoriodequimica-edificiob.png',
    '/Rutas/laboratoriodequimica-edificioc.png',
    '/Rutas/laboratoriodequimica-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/laboratoriodequimica-edificioing.sistemas.png',
    '/Rutas/laboratoriodequimica-edificioing.industrial.png',
    '/Rutas/laboratoriodequimica-explanada.png',
    '/Rutas/laboratoriodequimica-extraescolares.png',
    '/Rutas/laboratoriodequimica-incubadoradeempresas.png',
    '/Rutas/laboratoriodequimica-oficinadepetrolera.png',
    '/Rutas/laboratoriodequimica-saladejuntas.png',
    '/Rutas/oficinadepetrolera-almacen.png',
    '/Rutas/oficinadepetrolera-biblioteca.png',
    '/Rutas/oficinadepetrolera-cafeteria.png',

];

// Instalación: Cachear recursos
//self.addEventListener("install", (event) => {
//    event.waitUntil(
//        caches.open(cacheName).then((cache) => {
//            return cache.addAll(urlsToCache);
//        }).catch((error) => {
//            console.error("Error al cachear recursos durante la instalación:", error);
//        })
//    );
//});


// Activación: Limpiar cachés antiguas
//self.addEventListener("activate", (event) => {
//    event.waitUntil(
//        caches.keys().then((cacheNames) => {
//            return Promise.all(
//                cacheNames.map((cache) => {
//                    if (cache !== cacheName) {
//                        console.log("Eliminando caché antigua:", cache);
//                        return caches.delete(cache);
//                    }
//                })
//            );
//        })
//    );
//});




// Fetch: Interceptar peticiones y usar caché primero
//self.addEventListener("fetch", (event) => {
//    event.respondWith(
//        caches.match(event.request).then((cachedResponse) => {
//            if (cachedResponse) {
//                return cachedResponse; // Si está en la caché, devolverlo
//            }

//            // Intentar obtener el recurso de la red y cachearlo
//            return fetch(event.request).then((networkResponse) => {
//                if (networkResponse && networkResponse.ok) {
//                    return caches.open(cacheName).then((cache) => {
//                        cache.put(event.request, networkResponse.clone());
//                        return networkResponse;
//                    });
//                }
//                return networkResponse;
//            }).catch(() => {
//                // En caso de fallo, mostrar un recurso de reserva (si aplica)
//                if (event.request.destination === "image") {
//                    return caches.match("/images/icono/icono128.png"); // Imagen de reserva
//                }
//                return new Response("Contenido no disponible sin conexión", { status: 503 });
//            });
//        })
//    );


// Instalación: Cachea todos los recursos especificados 22
//self.addEventListener("install", (event) => {
//    event.waitUntil(
//        caches.open(cacheName).then((cache) => {
//            return cache.addAll(urlsToCache.map((url) => {
//                return fetch(url).then((response) => {
//                    if (!response.ok) {
//                        throw new Error(`Request for ${url} failed with status ${response.status}`);
//                    }
//                    return cache.put(url, response);
//                });
//            }));
//        }).catch((error) => {
//            console.error("Error al cachear recursos durante la instalación:", error);
//        })
//    );
//});


self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return Promise.all(
                urlsToCache.map((url) => {
                    return fetch(url)
                        .then((response) => {
                            if (!response.ok) {
                                console.warn(`No se pudo cachear: ${url}`);
                                return;
                            }
                            return cache.put(url, response);
                        })
                        .catch((err) => {
                            console.warn(`Error al intentar cachear: ${url}`, err);
                        });
                })
            );
        }).catch((error) => {
            console.error("Error al abrir caché:", error);
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
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Si el recurso está en la caché, devuélvelo
                return cachedResponse;
            }

            // Si no está en la caché, intenta obtenerlo de la red
            return fetch(event.request)
                .then((networkResponse) => {
                    // Si la respuesta de red es válida, cachearla para el futuro
                    if (networkResponse && networkResponse.status === 200) {
                        return caches.open(cacheName).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    }
                    return networkResponse; // Devuelve la respuesta de red
                })
                .catch(() => {
                    // Manejo en caso de que no haya conexión y no esté en la caché
                    if (event.request.destination === "image") {
                        return caches.match("/images/icono/icono128.png"); // Imagen de reserva
                    }
                    return new Response("Recurso no disponible sin conexión.", {
                        status: 503,
                        statusText: "Servicio no disponible",
                    });
                });
        })
    );
});





