# Visit the World

Sitio turístico estático creado con HTML, CSS y JavaScript, listo para publicarse en GitHub Pages.

## Archivos
- `index.html`: estructura y contenido.
- `styles.css`: diseño adaptable y estilos.
- `script.js`: filtros, menú desplegable, favoritos, carrusel y formulario de demostración.

## Probar localmente
Abre `index.html` en tu navegador. También puedes usar la extensión Live Server de Visual Studio Code.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `visit-the-world`.
2. Descomprime este proyecto y sube `index.html`, `styles.css`, `script.js` y este README a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
6. Espera a que GitHub genere la dirección pública que aparecerá en esa misma sección.

## Personalización
- Cambia textos e imágenes desde `index.html`.
- Ajusta colores al inicio de `styles.css` en `:root`.
- Edita destinos y filtros desde las tarjetas de `index.html` (atributos `data-category` y `data-style`).

## Importante
Las fotografías y las fuentes tipográficas se cargan desde servicios externos (Unsplash y Google Fonts), por lo que requieren conexión a internet. El formulario incluido es demostrativo: valida los campos y muestra un mensaje en el navegador, pero no envía ni almacena datos. Para recibir mensajes reales necesitarás conectarlo a un servicio de formularios o backend.
