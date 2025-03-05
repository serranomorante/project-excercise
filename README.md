# README

Ejercicio de programación. Desarrollar un formulario para la solicitud de un préstamo.

> Estás viendo la versión **jsdoc** del proyecto. Con esta versión intento demostrar que **no es necesario** escribir código en typescript para contar con un tipado fuerte en nuestro proyecto. Lo hemos conseguido usando javascript + comentarios de "jsdoc" sin añadir ninguna dependencia nueva.\
> Al ejecutar `npm run dev` en ambas versiones ([typescript](https://github.com/serranomorante/project-excercise/tree/main) vs [jsdoc](https://github.com/serranomorante/project-excercise/tree/jsdoc)), la versión de jsdoc siempre fue más rápida `~1406ms` mientras que la versión en typescript llegó a tomar hasta `~1600ms`. Eliminar el step de compilación que typescript requiere, nos ahorra alrededor de 1s!! en un proyecto tan pequeño como este.

## Características principales

- Dependencias mínimas: sólo `react`, `next.js` y `vanilla-extract`
- Sistema de diseño propio (ver la carpeta `design-system`)
- Performance gracias a los estilos precompilados (zero-runtime)
- Aplica patrones de diseño como service/repository pattern
- Gran parte de la ejecución ocurre en el lado del servidor y no en el navegador
- Diseño responsive

## URLs de interés

- [URL a la aplicación](https://excercise.serranomorante.com/loans?id=1)
- [URL al código fuente](https://github.com/serranomorante/project-excercise)

## Cómo levantar en local

Crear un archivo `.env.local` en el root del proyecto con el siguiente contenido:

```gitconfig
NEXT_PUBLIC_LOANS_SERVICE_API_ENV=<url de la api> (sin barra / final)
NEXT_PUBLIC_LOANS_SERVICE_KEY_ENV=Development
NEXT_PUBLIC_TERMS_AND_CONDITIONS_URL_ENV=<url de los términos y condiciones>
```

Abrir una consola de comandos y ejecutar lo siguiente:

```bash
npm install
npm run dev
```

Dirigirse a la siguiente url local para probar: [localhost](http://localhost:3000/loans?id=1)

## La estructura de carpetas

Estructura de carpetas escalable a grandes proyectos

```bash
src
├── app # Contiene las rutas de la aplicación
│   ├── layout.tsx
│   ├── loans
│   └── not-found.tsx
├── common # Contiene funciones generales como utils, interfaces, etc
│   ├── configuration
│   ├── index.ts
│   ├── interfaces
│   └── utils
├── components # Contiene los componentes de react de la aplicación
│   ├── client
│   └── server
├── core # Contiene toda la lógica de negocio
│   ├── index.ts
│   ├── loans # módulo de préstamos
│   └── user # módulo de usuario
└── design-system # Contiene el sistema de diseño de la aplicación
    ├── atoms
    ├── buttons
    ├── info
    ├── inputs
    ├── layout
    └── modals
```

## Más detalles sobre la solución

### Dependencias mínimas

No depender de muchos paquetes externos asegura mayor control de tu aplicativo y da la confianza de que una actualización no va a romper tu sistema.

### Sistema de diseño

Asegura la homogeneidad de la herramienta a través de todos sus módulos y secciones, además de brindar una imagen de marca a la empresa.

Asegura la escalabilidad de la herramienta ya que se pueden integrar más apps que podrás reutilizar los mismos componentes como `Buttons`, `Inputs` y demás.

### Performance

Asegura que los estilos no añaden carga de procesamiento extra durante la ejecución de la herramienta como sí sucede si se usasen librerías del tipo `CSS-in-JS`

Gran parte de la implementación la hicimos en el lado del servidor lo que mejora el SEO y el performance de la herrmienta ya que el navegador no tiene que ejecutar javascript.

### Patrones de diseño

El acceso a la data es responsabilidad de la capa **repositorio** (ver carpeta `core/loans/*.repository` o `core/user/*.repository`). Entre tanto, la capa de servicio es la única que tiene permitido comunicarse con la capa repositorio. Por lo tanto, nuestro código de implementación sólo se comunica con la capa de servicios y nunca con el repositorio directamente.

Esto asegura no sólo las buenas prácticas sino también la escalabilidad y el mantenimiento del sistema al desacoplar estas capas.

## Sacrificios

Aspectos que intencionalmente fueron dejados de lado para apresurar el desarrollo:

- Internacionalización
- Application theme
- Componentes de autocompletado como selectores o pickers
- ESLint
