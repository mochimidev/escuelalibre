# Escuela Libre Infancia Invaluable

Sitio web institucional y landing page para presentar el proyecto educativo de la Escuela Libre Infancia Invaluable, con foco en pedagogías activas, vínculo con la naturaleza y comunicación clara para familias interesadas.

## Resumen

Este repositorio reúne la web pública del proyecto y la configuración asociada para Firebase. La propuesta busca mostrar de forma ordenada qué hace la escuela, cómo trabaja, cuáles son sus actividades clave y cómo contactar al equipo.

## Qué incluye el proyecto

- Landing page responsive con navegación por secciones.
- Bloques de contenido sobre proyecto, pedagogía, metodología, validación y contacto.
- Sección destacada para actividades clave del proyecto.
- Galería visual y recursos gráficos del espacio educativo.
- Configuración de Firebase para hosting y reglas de Firestore.

## Enfoque del proyecto

- Educación en contacto con la tierra y el entorno rural.
- Aprendizaje basado en proyectos.
- Enfoque Waldorf y otras metodologías activas.
- Desarrollo de autonomía, respeto y convivencia.
- Actividades prácticas como huerto, arte, lectura, ciencia y juegos cooperativos.

## Stack tecnológico

- HTML5 semántico.
- CSS3 con diseño responsive.
- JavaScript para interacción de la página.
- Firebase para hosting y configuración del proyecto.
- Recursos visuales locales optimizados para la web.

## Estructura del repositorio

```text
escuelalibre/
├── README.md
├── firestore.indexes.json
├── firestore.rules
├── public/
└── web-app/
	├── firebase.json
	├── firestore.indexes.json
	├── firestore.rules
	├── dataconnect/
	│   ├── dataconnect.yaml
	│   ├── example/
	│   │   └── connector.yaml
	│   └── schema/
	│       └── schema.gql
	└── public/
		├── index.html
		├── 404.html
		├── css/
		│   └── style.css
		├── js/
		│   └── script.js
		├── Iconos/
		├── Logos/
		└── png/
```

## Secciones principales del sitio

- Inicio
- Proyecto
- Qué Hacemos
- Actividades Clave
- Pedagogía
- Metodología y Bioaula
- Validación de Estudios
- Admisión y Contacto

## Identidad visual

La interfaz utiliza una estética cálida y natural, pensada para transmitir cercanía y confianza.

- Fondo claro con gradientes suaves.
- Paleta pastel inspirada en naturaleza, infancia y bienestar.
- Tarjetas con sombra ligera y bordes redondeados.
- Tipografía amigable y de lectura fluida.

## Cómo ejecutar el proyecto

Este sitio es estático, por lo que puedes abrir `web-app/public/index.html` directamente en el navegador o servirlo desde un hosting estático.

Si trabajas con Firebase, la carpeta principal del proyecto es `web-app/`.

## Despliegue

- El hosting está configurado en `web-app/firebase.json`.
- El contenido público se sirve desde `web-app/public`.
- Las reglas e índices de Firestore están definidos en los archivos del proyecto.

## Resultado esperado

- Una presencia digital clara para el proyecto educativo.
- Mejor comunicación con familias y comunidad.
- Presentación ordenada de la propuesta pedagógica y sus actividades.

## Notas

- El contenido visual depende de las imágenes locales incluidas en `web-app/public`.
- Si cambias rutas de recursos, revisa también los enlaces del HTML.
