Veterinaria La Mary

Trabajo Final Integrador
-Asignatura: Introducción al Desarrollo Web
-Carrera: Tecnicatura Universitaria en Desarrollo Web
-Institución: Facultad de Ciencias de la Administración – UNER
-Año: 2026 – 2do cuatrimestre

Integrantes
-Barreto, Juan Agustin
-Romiti, Juan Bautista
-Di Braida, Facundo
-Matías

Descripción del proyecto
Veterinaria La Mary es una aplicación web desarrollada para una clínica veterinaria con el objetivo de facilitar la gestión de la atención de mascotas y brindar información sobre el establecimiento y sus profesionales.

El proyecto será desarrollado progresivamente a lo largo del Trabajo Final Integrador, incorporando los conocimientos adquiridos durante el cursado de la asignatura.

Primera entrega
En esta primera etapa se desarrolló la estructura inicial del sitio web utilizando HTML y CSS.
El proyecto cuenta con las siguientes páginas:

Sitio público
Inicio / Portada: presentación de Veterinaria La Mary y listado de profesionales disponibles.
Información Institucional: información general sobre la veterinaria.
Contacto: información y medios de contacto del establecimiento.

Panel de administración
También se estableció la estructura inicial del área administrativa, que será desarrollada progresivamente durante las siguientes entregas:

Gestión de Veterinarios.
Gestión de Mascotas.
Gestión de Turnos.
Gestión de Historias Clínicas.

Tecnologías utilizadas:
Para esta primera entrega se utilizaron:
-HTML
-CSS
-Vite

Durante las próximas etapas se incorporarán:
Bootstrap
JavaScript
DOM
LocalStorage
Fetch API
Async/Await
Promesas
API REST

Estructura del proyecto
veterinaria-la-mary/
│
├── index.html
├── institucional.html
├── contacto.html
│
├── css/
    ├── styles.css
├── README.md
│
└── admin/
    ├── dashboard.html
    ├── veterinarios.html
    ├── mascotas.html
    ├── turnos.html
    └── historia-clinica.html

Instalación y ejecución
Para ejecutar el proyecto localmente es necesario tener instalado Node.js.

Clonar el repositorio:
git clone URL_DEL_REPOSITORIO

Ingresar a la carpeta del proyecto:
cd veterinaria-la-mary

Instalar las dependencias:
npm install

Iniciar el servidor de desarrollo de Vite:
npx vite

Luego abrir en el navegador la dirección indicada por Vite, normalmente:
http://localhost:5173/

Navegación
El sitio utiliza enlaces mediante rutas relativas para permitir la navegación entre las diferentes páginas.
El menú de navegación se encuentra presente en las páginas correspondientes y permite acceder a las distintas secciones del sitio.