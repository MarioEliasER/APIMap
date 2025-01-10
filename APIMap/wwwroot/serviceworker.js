
// service-worker.js
const cacheName = "ubicatecCache-v1";
const urlsToCache = [
    "/", // Página principal
    "/index",
    "/mapacompleto",
    "/vistainicio",
    "/ayuda",
    "/generarruta",
    "/detalles",
    "/manifest.json",
    "/serviceworker.js",
    "/Css/StyleLogin.css",
    "/Css/Styles.css",
    "/Css/StylesAdmin.css",

    // Íconos
    "/Images/Icono/Icono128.png",
    "/Images/Icono/Icono48.png",
    "/Images/Icono/Icono96.png",
    "/Images/Icono/Icono144.png",
    "/Images/Icono/Icono192.png",
    "/Images/Icono/Icono72.png",
    "/Images/Icono/Icono512.png",

    // Scripts
    "/Scripts/Areas.js",
    "/Scripts/Departamentos.js",
    "/Scripts/Edificios.js",
    "/Scripts/Laboratorios.js",
    "/Scripts/Salones.js",
    "/Scripts/detalles.js",
    "/Scripts/Editar.js",
    "/Scripts/Eliminar.js",
    "/Scripts/Main.js",
    "/Scripts/Agregar.js",
    "/Scripts/globalAdmin.js",
    "/Scripts/ObtenerRuta.js",
    "/Scripts/Usuario/global.js",
    "/Scripts/Scroll.js",

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
    '/Images/Diseños/Aceptar.png',
    '/Images/Diseños/ALMACEN.jpg',
    '/Images/Diseños/AREA DE INGENIERIA DE SISTEMAS COMPUTACIONALES.jpg',
    '/Images/Diseños/Areas.png',
    '/Images/Diseños/Artes Plasticas.jpg',
    '/Images/Diseños/aula.png',
    '/Images/Diseños/BIBLIOTECA.jpg',
    '/Images/Diseños/CAFETERIA.jpg',
    '/Images/Diseños/CAJA.jpg',
    '/Images/Diseños/CANCHA DE BASQUETBOL.jpg',
    '/Images/Diseños/Cancha de Futbol Rapido.jpg',
    '/Images/Diseños/casa.png',
    '/Images/Diseños/CASETA.jpg',
    '/Images/Diseños/CCA1.jpg',
    '/Images/Diseños/CCA3.jpg',
    '/Images/Diseños/CCA4.jpg',
    '/Images/Diseños/CCA5.jpg',
    '/Images/Diseños/CCA6.jpg',
    '/Images/Diseños/CENTRO DE IDIOMAS.jpg',
    '/Images/Diseños/CerrarSesion.png',
    '/Images/Diseños/CISCO.jpg',
    '/Images/Diseños/conferencia.png',
    '/Images/Diseños/DEPARTAMENTO DE DESARROLLO ACADEMICO.jpg',
    '/Images/Diseños/Departamento de Escolares.jpg',
    '/Images/Diseños/DEPARTAMENTO DE FINANZAS.jpg',
    '/Images/Diseños/Departamento de Planeacion y Vinculacion.jpg',
    '/Images/Diseños/Departamento de TICs.jpg',
    '/Images/Diseños/Departamento.png',
    '/Images/Diseños/Direccion Academica.jpg',
    '/Images/Diseños/DIRECCION DE PLANEACION.jpg',
    '/Images/Diseños/DIRECCION GENERAL.jpg',
    '/Images/Diseños/Division Academica de Educacion a Distancia y Mixta.jpg',
    '/Images/Diseños/Domo.jpg',
    '/Images/Diseños/Edificio A.jpg',
    '/Images/Diseños/Edificio B.jpg',
    '/Images/Diseños/Edificio C.jpg',
    '/Images/Diseños/Edificio de Industrial.jpg',
    '/Images/Diseños/Edificio de Ing. Electromecanica.jpg',
    '/Images/Diseños/Edificio de Ing. Mecatronica.jpg',
    '/Images/Diseños/Edificio de Sistemas.jpg',
    '/Images/Diseños/Edificio.png',
    '/Images/Diseños/Enfermeria.jpg',
    '/Images/Diseños/Estacionamiento de Estudiantes.jpg',
    '/Images/Diseños/Explanada.jpg',
    '/Images/Diseños/Extraescolares.jpg',
    '/Images/Diseños/flecha-izquierda.png',
    '/Images/Diseños/Help.png',
    '/Images/Diseños/JARDIN ETNOBOTANICO.jpg',
    '/Images/Diseños/Laboratorio de Geologia.jpg',
    '/Images/Diseños/Laboratorio de Quimica.jpg',
    '/Images/Diseños/laboratorio.png',
    '/Images/Diseños/Logo1.png',
    '/Images/Diseños/Logo2.png',
    '/Images/Diseños/Logo3.png',
    '/Images/Diseños/LogoSistemas.png',
    '/Images/Diseños/Mapa1.png',
    '/Images/Diseños/MapaV3.png',
    '/Images/Diseños/matraz.png',
    '/Images/Diseños/menu.png',
    '/Images/Diseños/menuInferior.png',
    '/Images/Diseños/Mesas de Ping Pong.jpg',
    '/Images/Diseños/Oficina de Coordinacion de Sistemas.jpg',
    '/Images/Diseños/Oficina de Petrolera.jpg',
    '/Images/Diseños/Papeleria.jpg',
    '/Images/Diseños/Prefectura.jpg',
    '/Images/Diseños/Ruta.jpg',
    '/Images/Diseños/RutaMapa.png',
    '/Images/Diseños/Sala Audiovisual.jpg',
    '/Images/Diseños/SALA DE JUNTAS.jpg',
    '/Images/Diseños/Sala de Maestros de Sistemas.jpg',
    '/Images/Diseños/SinImagen.png',
    '/Images/Diseños/sin-login.png',
    '/Images/Diseños/ubicacion.png',
    '/Images/Diseños/Zoom.png',
    '/Images/Diseños/A1.jpg',
    '/Images/Diseños/A2.jpg',
    '/Images/Diseños/A3.jpg',
    '/Images/Diseños/A4.jpg',
    '/Images/Diseños/A5.jpg',
    '/Images/Diseños/A6.jpg',
    '/Images/Diseños/A7.jpg',
    '/Images/Diseños/A8.jpg',
    '/Images/Diseños/B1.jpg',
    '/Images/Diseños/B2.jpg',
    '/Images/Diseños/B3.jpg',
    '/Images/Diseños/B4.jpg',
    '/Images/Diseños/B5.jpg',
    '/Images/Diseños/B6.jpg',
    '/Images/Diseños/C1.jpg',
    '/Images/Diseños/C2.jpg',
    '/Images/Diseños/C3.jpg',
    '/Images/Diseños/C4.jpg',
    '/Images/Diseños/C5.jpg',
    '/Images/Diseños/C6.jpg',
    '/Images/Diseños/C7.jpg',
    '/Images/Diseños/boton-agregar.png',
    '/Images/Diseños/busqueda.png',


    //Almacen
    '/Rutas/almacen-audiovisual.png',
    '/Rutas/almacen-biblioteca.png',
    '/Rutas/almacen-cafeteria.png',
    '/Rutas/almacen-canchadebasquetbol.png',
    '/Rutas/almacen-caseta.png',
    '/Rutas/almacen-centrodeidiomas.png',
    '/Rutas/almacen-departamentodeescolares.png',
    '/Rutas/almacen-departamentodefinanzas.png',
    '/Rutas/almacen-departamentodeplaneacionyvinculacion.png',
    '/Rutas/almacen-direccionacademica.png',
    '/Rutas/almacen-direcciongeneral.png',
    '/Rutas/almacen-domo.png',
    '/Rutas/almacen-edificioa.png',
    '/Rutas/almacen-edificiob.png',
    '/Rutas/almacen-edificioc.png',
    '/Rutas/almacen-edificioing.electromecanicamecatronica.png',
    '/Rutas/almacen-edificioing.industrial.png',
    '/Rutas/almacen-edificioing.sistemas.png',
    '/Rutas/almacen-explanada.png',
    '/Rutas/almacen-extraescolares.png',
    '/Rutas/almacen-incubadoradeempresas.png',
    '/Rutas/almacen-laboratoriodegeologia.png',
    '/Rutas/almacen-laboratoriodequimica.png',
    '/Rutas/almacen-saladedocentespetrolera.png',
    '/Rutas/almacen-oficinadepetrolera.png',
    '/Rutas/almacen-saladejuntas.png',

    //Audiovisual
    '/Rutas/audiovisual-almacen.png',
    '/Rutas/audiovisual-biblioteca.png',
    '/Rutas/audiovisual-cafeteria.png',
    '/Rutas/audiovisual-canchadebasquetbol.png',
    '/Rutas/audiovisual-caseta.png',
    '/Rutas/audiovisual-centrodeidiomas.png',
    '/Rutas/audiovisual-departamentodeescolares.png',
    '/Rutas/audiovisual-departamentodefinanzas.png',
    '/Rutas/audiovisual-departamentodeplaneacionyvinculacion.png',
    '/Rutas/audiovisual-direccionacademica.png',
    '/Rutas/audiovisual-direcciongeneral.png',
    '/Rutas/audiovisual-domo.png',
    '/Rutas/audiovisual-edificioa.png',
    '/Rutas/audiovisual-edificiob.png',
    '/Rutas/audiovisual-edificioc.png',
    '/Rutas/audiovisual-edificioing.electromecanicamecatronica.png',
    '/Rutas/audiovisual-edificioing.industrial.png',
    '/Rutas/audiovisual-edificioing.sistemas.png',
    '/Rutas/audiovisual-explanada.png',
    '/Rutas/audiovisual-extraescolares.png',
    '/Rutas/audiovisual-incubadoradeempresas.png',
    '/Rutas/audiovisual-laboratoriodegeologia.png',
    '/Rutas/audiovisual-laboratoriodequimica.png',
    '/Rutas/audiovisual-saladedocentespetrolera.png',
    '/Rutas/audiovisual-oficinadepetrolera.png',
    '/Rutas/audiovisual-saladejuntas.png',

    //biblioteca
    '/Rutas/biblioteca-almacen.png',
    '/Rutas/biblioteca-audiovisual.png',
    '/Rutas/biblioteca-cafeteria.png',
    '/Rutas/biblioteca-canchadebasquetbol.png',
    '/Rutas/biblioteca-caseta.png',
    '/Rutas/biblioteca-centrodeidiomas.png',
    '/Rutas/biblioteca-departamentodeescolares.png',
    '/Rutas/biblioteca-departamentodefinanzas.png',
    '/Rutas/biblioteca-departamentodeplaneacionyvinculacion.png',
    '/Rutas/biblioteca-direccionacademica.png',
    '/Rutas/biblioteca-direcciongeneral.png',
    '/Rutas/biblioteca-domo.png',
    '/Rutas/biblioteca-edificioa.png',
    '/Rutas/biblioteca-edificiob.png',
    '/Rutas/biblioteca-edificioc.png',
    '/Rutas/biblioteca-edificioing.electromecanicamecatronica.png',
    '/Rutas/biblioteca-edificioing.industrial.png',
    '/Rutas/biblioteca-edificioing.sistemas.png',
    '/Rutas/biblioteca-explanada.png',
    '/Rutas/biblioteca-extraescolares.png',
    '/Rutas/biblioteca-incubadoradeempresas.png',
    '/Rutas/biblioteca-laboratoriodegeologia.png',
    '/Rutas/biblioteca-laboratoriodequimica.png',
    '/Rutas/biblioteca-saladedocentespetrolera.png',
    '/Rutas/biblioteca-oficinadepetrolera.png',
    '/Rutas/biblioteca-saladejuntas.png',


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

    //dep. finanzas
    '/Rutas/departamentodefinanzas-almacen.png',
    '/Rutas/departamentodefinanzas-audiovisual.png',
    '/Rutas/departamentodefinanzas-biblioteca.png',
    '/Rutas/departamentodefinanzas-cafeteria.png',
    '/Rutas/departamentodefinanzas-canchadebasquetbol.png',
    '/Rutas/departamentodefinanzas-caseta.png',
    '/Rutas/departamentodefinanzas-departamentodeescolares.png',
    '/Rutas/departamentodefinanzas-centrodeidiomas.png',
    '/Rutas/departamentodefinanzas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/departamentodefinanzas-direccionacademica.png',
    '/Rutas/departamentodefinanzas-direcciongeneral.png',
    '/Rutas/departamentodefinanzas-domo.png',
    '/Rutas/departamentodefinanzas-edificioa.png',
    '/Rutas/departamentodefinanzas-edificiob.png',
    '/Rutas/departamentodefinanzas-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/departamentodefinanzas-edificioing.sistemas.png',
    '/Rutas/departamentodefinanzas-explanada.png',
    '/Rutas/departamentodefinanzas-extraescolares.png',
    '/Rutas/departamentodefinanzas-incubadoradeempresas.png',
    '/Rutas/departamentodefinanzas-laboratoriodegeologia.png',
    '/Rutas/departamentodefinanzas-laboratoriodequimica.png',
    '/Rutas/departamentodefinanzas-oficinadepetrolera.png',
    '/Rutas/departamentodefinanzas-saladedocentespetrolera.png',
    '/Rutas/departamentodefinanzas-saladejuntas.png',


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
    '/Rutas/domo-audiovisual.png',
    '/Rutas/domo-canchadebasquetbol.png',
    '/Rutas/domo-caseta.png',
    '/Rutas/domo-centrodeidiomas.png',
    '/Rutas/domo-departamentodeescolares.png',
    '/Rutas/domo-departamentodefinanzas.png',
    '/Rutas/domo-departamentodeplaneacionyvinculacion.png',
    '/Rutas/domo-direccionacademica.png',
    '/Rutas/domo-direcciongeneral.png',
    '/Rutas/domo-edificioa.png',
    '/Rutas/domo-edificiob.png',
    '/Rutas/domo-edificioc.png',
    '/Rutas/domo-edificioing.electromecanicamecatronica.png',
    '/Rutas/domo-edificioing.industrial.png',
    '/Rutas/domo-edificioing.sistemas.png',
    '/Rutas/domo-explanada.png',
    '/Rutas/domo-extraescolares.png',
    '/Rutas/domo-incubadoradeempresas.png',
    '/Rutas/domo-laboratoriodegeologia.png',
    '/Rutas/domo-laboratoriodequimica.png',
    '/Rutas/domo-oficinadepetrolera.png',
    '/Rutas/domo-saladedocentespetrolera.png',
    '/Rutas/domo-saladejuntas.png',

    // Edificio Ing. Sistemas
    '/Rutas/edificioing.sistemas-canchadebasquetbol.png',
    '/Rutas/edificioing.sistemas-departamentodeescolares.png',
    '/Rutas/edificioing.sistemas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/edificioing.sistemas-cafeteria.png',
    '/Rutas/edificioing.sistemas-Biblioteca.png',
    '/Rutas/edificioing.sistemas-almacen.png',
    '/Rutas/edificioing.sistemas-audiovisual.png',
    '/Rutas/edificioing.sistemas-caseta.png',
    '/Rutas/edificioing.sistemas-centrodeidiomas.png',
    '/Rutas/edificioing.sistemas-departamentodefinanzas.png',
    '/Rutas/edificioing.sistemas-direccionacademica.png',
    '/Rutas/edificioing.sistemas-direcciongeneral.png',
    '/Rutas/edificioing.sistemas-domo.png',
    '/Rutas/edificioing.sistemas-edificioa.png',
    '/Rutas/edificioing.sistemas-edificiob.png',
    '/Rutas/edificioing.sistemas-edificioc.png',
    '/Rutas/edificioing.sistemas-extraescolares.png',
    '/Rutas/edificioing.sistemas-edificioing.electromecanicamecatronica.png',
    '/Rutas/edificioing.sistemas-incubadoradeempresas.png',
    '/Rutas/edificioing.sistemas-edificioing.industrial.png',
    '/Rutas/edificioing.sistemas-laboratoriodegeologia.png',
    '/Rutas/edificioing.sistemas-laboratoriodequimica.png',
    '/Rutas/edificioing.sistemas-oficinadepetrolera.png',
    '/Rutas/edificioing.sistemas-saladedocentespetrolera.png',
    '/Rutas/edificioing.sistemas-saladejuntas.png',
    '/Rutas/edificioing.sistemas-explanada.png',

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

    //Edificio  C
    '/Rutas/edificioc-almacen.png',
    '/Rutas/edificioc-audiovisual.png',
    '/Rutas/edificioc-biblioteca.png',
    '/Rutas/edificioc-cafeteria.png',
    '/Rutas/edificioc-caseta.png',
    '/Rutas/edificioc-centrodeidiomas.png',
    '/Rutas/edificioc-canchadebasquetbol.png',
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

    //Industrial
    '/Rutas/edificioing.industrial-edificiodeing.sistemas.png',
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

    //electromecanica mcatronica
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


  

    //explanada
    '/Rutas/explanada-almacen.png',
    '/Rutas/explanada-biblioteca.png',
    '/Rutas/explanada-cafeteria.png',
    '/Rutas/explanada-canchadebasquetbol.png',
    '/Rutas/explanada-caseta.png',
    '/Rutas/explanada-centrodeidiomas.png',
    '/Rutas/explanada-departamentodeescolares.png',
    '/Rutas/explanada-departamentodefinanzas.png',
    '/Rutas/explanada-departamentodeplaneacionyvinculacion.png',
    '/Rutas/explanada-direccionacademica.png',
    '/Rutas/explanada-direcciongeneral.png',
    '/Rutas/explanada-domo.png',
    '/Rutas/explanada-edificioa.png',
    '/Rutas/explanada-edificiob.png',
    '/Rutas/explanada-edificioc.png',
    '/Rutas/explanada-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/explanada-edificioing.industrial.png',
    '/Rutas/explanada-edificioing.sistemas.png',
    '/Rutas/explanada-extraescolares.png',
    '/Rutas/explanada-incubadoradeempresas.png',
    '/Rutas/explanada-laboratoriodegeologia.png',
    '/Rutas/explanada-laboratoriodequimica.png',
    '/Rutas/explanada-oficinadepetrolera.png',
    '/Rutas/explanada-saladedocentespetrolera.png',
    '/Rutas/explanada-saladejuntas.png',

    //extraescolares
    '/Rutas/extraescolares-almacen.png',
    '/Rutas/extraescolares-biblioteca.png',
    '/Rutas/extraescolares-cafeteria.png',
    '/Rutas/extraescolares-canchadebasquetbol.png',
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

    //incubadora de empresas
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

    //lab. geologia
    '/Rutas/laboratoriodegeologia-almacen.png',
    '/Rutas/laboratoriodegeologia-biblioteca.png',
    '/Rutas/laboratoriodegeologia-cafeteria.png',
    '/Rutas/laboratoriodegeologia-canchaDebasquetbol.png',
    '/Rutas/laboratoriodegeologia-caseta.png',
    '/Rutas/laboratoriodegeologia-centrodeidiomas.png',
    '/Rutas/laboratoriodegeologia-departamentodeescolares.png',
    '/Rutas/laboratoriodegeologia-departamentodefinanzas.png',
    '/Rutas/laboratoriodegeologia-departamentodeplaneacionyvinculacion.png',
    '/Rutas/laboratoriodegeologia-direccionacademica.png',
    '/Rutas/laboratoriodegeologia-direcciongeneral.png',
    '/Rutas/laboratoriodegeologia-domo.png',
    '/Rutas/laboratoriodegeologia-edificioa.png',
    '/Rutas/laboratoriodegeologia-edificiob.png',
    '/Rutas/laboratoriodegeologia-edificioc.png',
    '/Rutas/laboratoriodegeologia-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/laboratoriodegeologia-edificioing.industrial.png',
    '/Rutas/laboratoriodegeologia-explanada.png',
    '/Rutas/laboratoriodegeologia-extraescolares.png',
    '/Rutas/laboratoriodegeologia-incubadoradeempresas.png',
    '/Rutas/laboratoriodegeologia-oficinadepetrolera.png',
    '/Rutas/laboratoriodegeologia-saladejuntas.png',
    '/Rutas/laboratoriodegeologia-saladedocentespetrolera.png',

    //lab quimica
    '/Rutas/laboratoriodequimica-almacen.png',
    '/Rutas/laboratoriodequimica-biblioteca.png',
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
    '/Rutas/laboratoriodequimica-edificioa.png',
    '/Rutas/laboratoriodequimica-edificiob.png',
    '/Rutas/laboratoriodequimica-edificioc.png',
    '/Rutas/laboratoriodequimica-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/laboratoriodequimica-edificioing.sistemas.png',
    '/Rutas/laboratoriodequimica-edificioing.industrial.png',
    '/Rutas/laboratoriodequimica-explanada.png',
    '/Rutas/laboratoriodequimica-extraescolares.png',
    '/Rutas/laboratoriodequimica-incubadoradeempresas.png',
    '/Rutas/laboratoriodequimica-oficinadepetrolera.png',
    '/Rutas/laboratoriodequimica-saladedocentespetrolera.png',
    '/Rutas/laboratoriodequimica-saladejuntas.png',

    //ofi petrolera
    '/Rutas/oficinadepetrolera-almacen.png',
    '/Rutas/oficinadepetrolera-biblioteca.png',
    '/Rutas/oficinadepetrolera-cafeteria.png',
    '/Rutas/oficinadepetrolera-canchadebasquetbol.png',
    '/Rutas/oficinadepetrolera-caseta.png',
    '/Rutas/oficinadepetrolera-centrodeidiomas.png',
     '/Rutas/oficinadepetrolera-departamentodeescolares.png',
    '/Rutas/oficinadepetrolera-departamentodefinanzas',
    '/Rutas/oficinadepetrolera-departamentodeplaneacionyvinculacion.png',
    '/Rutas/oficinadepetrolera-direccionacademica.png',
    '/Rutas/oficinadepetrolera-direcciongeneral.png',
    '/Rutas/oficinadepetrolera-domo.png',
    '/Rutas/oficinadepetrolera-edificiob.png',
    '/Rutas/oficinadepetrolera-direcciongeneral.png',
    '/Rutas/oficinadepetrolera-edificioc.png',
    '/Rutas/oficinadepetrolera-edificioing.industrial.png',
    '/Rutas/oficinadepetrolera-edificioing.sistemas.png',
    '/Rutas/oficinadepetrolera-explanada.png',
    '/Rutas/oficinadepetrolera-extraescolares.png',
    '/Rutas/oficinadepetrolera-incubadoradeempresas.png',
    '/Rutas/oficinadepetrolera-laboratoriodegeologia.png',
    '/Rutas/oficinadepetrolera-laboratoriodequimica.png',
    '/Rutas/oficinadepetrolera-saladedocentespetrolera.png',
    '/Rutas/oficinadepetrolera-saladejuntas.png',

    //sala docentes
    '/Rutas/saladedocentespetrolera-almacen.png',
    '/Rutas/saladedocentespetrolera-biblioteca.png',
    '/Rutas/saladedocentespetrolera-cafeteria.png',
    '/Rutas/saladedocentespetrolera-canchadebasquetbol.png',
    '/Rutas/saladedocentespetrolera-caseta.png',
    '/Rutas/saladedocentespetrolera-centrodeidiomas.png',
    '/Rutas/saladedocentespetrolera-departamentodeescolares.png',
    '/Rutas/saladedocentespetrolera-departamentodefinanzas',
    '/Rutas/saladedocentespetrolera-departamentodeplaneacionyvinculacion.png',
    '/Rutas/saladedocentespetrolera-direccionacademica.png',
    '/Rutas/saladedocentespetrolera-direcciongeneral.png',
    '/Rutas/saladedocentespetrolera-domo.png',
    '/Rutas/saladedocentespetrolera-edificioa.png',
    '/Rutas/saladedocentespetrolera-edificiob.png',
    '/Rutas/saladedocentespetrolera-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/saladedocentespetrolera-edificioc.png',
    '/Rutas/saladedocentespetrolera-edificioing.industrial.png',
    '/Rutas/saladedocentespetrolera-edificioing.sistemas.png',
    '/Rutas/saladedocentespetrolera-explanada.png',
    '/Rutas/saladedocentespetrolera-extraescolares.png',
    '/Rutas/saladedocentespetrolera-incubadoradeempresas.png',
    '/Rutas/saladedocentespetrolera-laboratoriodegeologia.png',
    '/Rutas/saladedocentespetrolera-laboratoriodequimica.png',
    '/Rutas/saladedocentespetrolera-oficinadepetrolera.png',
    '/Rutas/saladedocentespetrolera-saladejuntas.png',

    //sala juntas
    '/Rutas/saladejuntas-almacen.png',
    '/Rutas/saladejuntas-biblioteca.png',
    '/Rutas/saladejuntas-cafeteria.png',
    '/Rutas/saladejuntas-canchadebasquetbol.png',
    '/Rutas/saladejuntas-caseta.png',
    '/Rutas/saladejuntas-centrodeidiomas.png',
    '/Rutas/saladejuntas-departamentodeescolares.png',
    '/Rutas/saladejuntas-departamentodefinanzas',
    '/Rutas/saladejuntas-departamentodeplaneacionyvinculacion.png',
    '/Rutas/saladejuntas-direccionacademica.png',
    '/Rutas/saladejuntas-direcciongeneral.png',
    '/Rutas/saladejuntas-domo.png',
    '/Rutas/saladejuntas-edificioa.png',
    '/Rutas/saladejuntas-edificiob.png',
    '/Rutas/saladejuntas-edificiodeing.electromecanicamecatronica.png',
    '/Rutas/saladejuntas-edificioc.png',
    '/Rutas/saladejuntas-edificioing.industrial.png',
    '/Rutas/saladejuntas-edificioing.sistemas.png',
    '/Rutas/saladejuntas-explanada.png',
    '/Rutas/saladejuntas-extraescolares.png',
    '/Rutas/saladejuntas-incubadoradeempresas.png',
    '/Rutas/saladejuntas-laboratoriodegeologia.png',
    '/Rutas/saladejuntas-laboratoriodequimica.png',
    '/Rutas/saladejuntas-oficinadepetrolera.png',
    '/Rutas/saladejuntas-saladedocentespetrolera.png',


];

 //Instalación: Cachear recursos
//self.addEventListener("install", (event) => {
//    event.waitUntil(
//        caches.open(cacheName).then((cache) => {
//            return cache.addAll(urlsToCache);
//        }).catch((error) => {
//            console.error("Error al cachear recursos durante la instalación:", error);
//        })
//    );
//});


// //Activación: Limpiar cachés antiguas
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




//// Fetch: Interceptar peticiones y usar caché primero
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
//                    return caches.match("/Images/Icono/Icono128.png"); // Imagen de reserva
//                }
//                return new Response("Contenido no disponible sin conexión", { status: 503 });
//            });
//        })
//    );
//});


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
                        return caches.match("/Images/Icono/Icono128.png"); // Imagen de reserva
                    }
                    return new Response("Recurso no disponible sin conexión.", {
                        status: 503,
                        statusText: "Servicio no disponible",
                    });
                });
        })
    );
});





