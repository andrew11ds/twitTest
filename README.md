# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Para ejecutar el programa, en el directorio del proyecto hay que correr:
$ yarn start  
Correrá la app en el modo desarrollador

Abra http://localhost:3000 
para verlo en su navegador 

# Input Accesibility 
Bootstrap
El apoyo en accesibilidad de cualquier proyecto con bootstrap depende en gran medida del estilo del autor. En nuestro proyecto hicimos el uso de esta herramienta para el manejo de TextFields. La ventaja que nos dió apoyarnos en bootstrap, es que el estilo y despliegue puede ser aplicado a un amplio rango de estructuras, dentro de las cuales se pueden aplicar propiedades de accesibilidad, como las utilizadas en el mismo. 

# Iluminación de text field
En nuestro proyecto se enfocó un tema clave de accesibilidad con la colaboración de Bootstrap que corresponde a la iluminación de Text Fields al poner el mouse sobre un label, esto facilitando la accesibilidad a los componentes de forma visual y rápida, aprovechando las ventajas que tiene Bootstrap para ello.

# Etiquetando botones
El label de un elemento <button> se estableció dentro del elemento y puede incluir mark up. Esto permite incluir sugerencias de accesibilidad más avanzadas. Cuando se usa el elemento <input> para crear botones, la etiqueta se establece en el atributo de valor del elemento.

# Lighthouse:
Lighthouse es una herramienta automatizada open-source, que busca mejorar la calidad de las páginas web. Puede correrla contra cualquier página web, sea pública o requiera autenticación. Cuenta con auditorías de performance, accesibilidad, progressive web apps, SEO y más.

Puede ejecutar Lighthouse en Chrome Devtools, desde la línea de comandos, o como un módulo de Node. Simplemente dándole a Lighthouse una URL a auditar, correrá una serie de auditorías contra la página y luego generará un reporte sobre cuan buena fue la página. Desde allí, usa las auditorías que han fallado como indicadores sobre cómo improvisar la página. Cada auditoría tiene un doc de referencia explicando por qué la auditoría es importante, así como cómo arreglarla.

# Imagen de nuestro análisis 
https://ibb.co/9pCtrJf

Review:
94% Rendimiento (Perfomance):  Algunas de las caracteristicas de nuestra App que nos llevaron a obtener un porcentaje de rendimiento superior en temas de first contentful paint, first meaningful paint, speed index, time to interactive, first CPU idle, estimated input latency:

1- Preload key requests: Cuando los navegadores recuperan recursos, lo hacen a medida que encuentran referencias a ellos dentro del documento y sus subrecursos. Esto puede ser subóptimo a veces, porque algunos recursos críticos se descubren bastante tarde en el proceso de carga de la página. Afortunadamente, rel = preload nos brindó la capacidad de indicar a los navegadores compatibles qué recursos deben obtenerse lo antes posible. La nueva auditoría de solicitudes de claves de precarga permite saber qué recursos podrían beneficiarse de que rel = preload se carguen antes.
2- El tiempo de arranque de JavaScript no es alto: Cuando se carga demasiado JavaScript, la página puede dejar de responder a medida que el navegador la analiza, compila y ejecuta. Los scripts y anuncios de terceros son una fuente particular de actividad de script excesiva que puede atascar incluso dispositivos potentes. La nueva auditoría de JavaScript Boot-up Time is High revela cuánto tiempo de CPU consume cada secuencia de comandos en una página, junto con su URL.
3- Evitamos redireccionamientos de página: A veces, cuando un navegador solicita una URL, el servidor puede responder con un código de estado de nivel 300. Esto hace que el navegador redirija a otra URL. Si bien los redireccionamientos son necesarios para fines de SEO y conveniencia, agregan latencia a las solicitudes. Esto es especialmente cierto si redirigen a otros orígenes, lo que puede generar tiempo adicional de búsqueda de DNS y conexión / negociación TLS.
4- JavaScript no utilizado
El código muerto puede ser un problema grave en aplicaciones con mucho JavaScript. Si bien no presenta costos de ejecución, ya que nunca se invoca, tiene otros efectos indeseables. El navegador todavía descarga, analiza y compila el código muerto. Esto afecta el rendimiento de carga y el tiempo de inicio de JavaScript. Al igual que en el panel de cobertura de DevTools, la auditoría de JavaScript no utilizado revela JavaScript descargado por la página actual, pero nunca se utiliza.
5- Utiliza una política de caché ineficaz en Assets estáticos
Si bien muchos de los consejos de rendimiento tienden a centrarse en aumentar la velocidad de un sitio web para los usuarios nuevos, también es importante utilizar el almacenamiento en caché para mejorar el rendimiento de carga para los usuarios que regresan. La auditoría Utiliza una política de caché ineficiente en activos estáticos inspecciona los encabezados de almacenamiento en caché para los recursos de red y le notifica si las políticas de caché para los recursos estáticos son deficientes.
6-Todo el texto permanece visible durante las cargas de fuentes web
Cuando cargamos fuentes web para páginas, los navegadores suelen mostrar texto invisible hasta que se carga la fuente. Este fenómeno, conocido como Flash of Invisible Text (FOIT), puede ser preferible desde el punto de vista del diseño, pero en realidad es un problema. El texto cuya representación está bloqueada no se puede leer hasta que se muestre y se vuelva visible. En conexiones de alta latencia y / o gran ancho de banda, esto significa que falta una parte fundamental de su experiencia de usuario.
7- CSS y JavaScript minificados
La minificación ha sido una técnica sugerida que reduce significativamente el tamaño de los recursos basados en texto, lo que a su vez es bueno para el rendimiento de carga. 

73% de Accesibilidad (Accesibility): En el ámbito de la accesibilidad, Lighthouse comprueba si la página o la aplicación es fácil de usar para personas con limitaciones físicas. De forma más concreta, se comprueba si los elementos importantes, como los botones y los enlaces, se describen de forma clara o si las imágenes y los gráficos disponen de una función “Voice over” para que las personas con discapacidad visual también puedan captar los contenidos a través de la emisión de voz. La accesibilidad de nuestra App obtuvo un rendimiento decente debido a la utilización de: 

1- Métodos de accesibilidad desarrollados para Bootstrap, como TextField lighting al posarse sobre un label, lo cual incrementa la velocidad de los desarrolladores.
2- Uso de etiquetas para el nombramiento de componentes.
3- Button labelling markup para identificación de componente y su respectivo id

¿Qué nos hizo falta para llegar al nivel superior de accesibilidad?
-Mejorar el contraste de CSS: Un factor clave en el análisis de rendimiento de nuestra aplicación, es el factor contraste proporcionado por CSS. Para nuestro caso los CSS implementados aunque son relativamente eficientes, no cumplen con el más alto estandar de calidad requerido por LightHouse.

93% Mejores practicas (best practices): Nivel superior en el área de mejores prácticas, Lighthouse analizó, sobre todo, los aspectos de seguridad de la página web o la PWA. Aquí, la herramienta comprobó si fueron usadas tecnologías de codificación como TLS, si los recursos integrados de la página web provienen de fuentes seguras o si las bibliotecas JavaScript se pueden catalogar como seguras. Google Lighthouse también analiza si las bases de datos son seguras (si las hay) y destaca las órdenes no seguras o el uso de API anticuadas. 

92% SEO (Search Engine Optimization): Nivel superior en optimización en motores de búsqueda. Google Lighthouse analizó, mediante distintas pruebas, el nivel de visibilidad de la aplicación o la página web en diferentes buscadores. No obstante, las pruebas de Lighthouse son limitadas de momento.

Conclusión: Según el análisis realizado por LightHouse, la aplicación cumple con altos estandares de optimización y desarrollo frontend; con potenciales opciones de mejora para aspectos de manejo de contrastes y SEO. 

# ¿Cómo hacer un deploy en Firebase?
Primero hay que configurar o actualizar Firebase CLI según el sistema operativo

# macOS o Linux:
Puedes instalar Firebase CLI para macOS o Linux con una de las siguientes opciones:

-Secuencia de comandos de instalación automática: Ejecuta un solo comando que detecta automáticamente tu sistema operativo, descarga la versión más reciente de la CLI y habilita el comando firebase disponible de manera global.	
Ejecuta el siguiente comando de curl:
$ curl -sL https://firebase.tools | bash

Esta secuencia de comandos detecta automáticamente tu sistema operativo, descarga la versión más reciente de Firebase CLI y habilita el comando firebase disponible de manera global.

-Objeto binario independiente:	Descarga el objeto binario independiente de la CLI. Luego, puedes configurar y ejecutar el objeto binario a fin de adaptarlo a tu flujo de trabajo.	
Descarga el objeto binario de Firebase CLI para tu SO: macOS | Linux
Configura el comando firebase disponible de manera global (opcional).
Ejecuta chmod +x ./firebase_tools para que el objeto binario sea ejecutable.
Agrega la ruta de acceso del objeto binario a tu variable de entorno PATH.

-npm: Usa npm (Node Package Manager) para instalar la CLI y habilitar el comando firebase disponible de manera global. 
Puedes usar npm (Node Package Manager) para instalar Firebase CLI mediante estos pasos:

Instala Node.js con nvm (Node Version Manager).
Cuando lo hagas, se instalarán automáticamente las herramientas de comando de npm.
Nota: Firebase CLI requiere Node.js 10.13.0 o versiones posteriores. Algunas funciones de Firebase pueden requerir versiones específicas de Node.js, así que verifica la página de primeros pasos de cada producto para conocer sus requisitos específicos de Node.js.
Ejecuta el siguiente comando para instalar Firebase CLI con npm:
$ npm install -g firebase-tools
Esto habilita el comando firebase disponible de manera global.
Nota: Si el comando npm install -g firebase-tools falla, es posible que debas cambiar los permisos de npm.

Accede a Firebase CLI y pruébala
Debes autenticarte después de instalar la CLI. Para confirmar la autenticación, puedes enumerar tus proyectos de Firebase.
Accede a Firebase con tu Cuenta de Google ejecutando el siguiente comando:
$firebase login

# Windows:
Puedes instalar Firebase CLI para Windows con una de las siguientes opciones:

-Objeto binario independiente: Descarga el objeto binario independiente de la CLI. Luego, accede al ejecutable para abrir un shell en el que podrás ejecutar el comando firebase.

Descarga el objeto binario de Firebase CLI para Windows.
Accede al objeto binario para abrir un shell en el que puedes ejecutar el comando firebase.

-npm: Usa npm (Node Package Manager) para instalar la CLI y habilitar el comando firebase disponible de manera global.
Puedes usar npm (Node Package Manager) para instalar Firebase CLI mediante estos pasos:

Instala Node.js con nvm-windows (Node Version Manager). Cuando lo hagas, se instalarán automáticamente las herramientas de comando de npm.

Nota: Firebase CLI requiere Node.js 10.13.0 o versiones posteriores. Algunas funciones de Firebase pueden requerir versiones específicas de Node.js, así que verifica la página de primeros pasos de cada producto para conocer sus requisitos específicos de Node.js.
Ejecuta el siguiente comando para instalar Firebase CLI con npm:

$npm install -g firebase-tools
Esto habilita el comando firebase disponible de manera global.

Nota: Si el comando npm install -g firebase-tools falla, es posible que debas cambiar los permisos de npm.

# Firebase Hosting

Inicializa el proyecto
Para conectar los archivos del proyecto local al proyecto de Firebase, ejecuta el siguiente comando desde la raíz del directorio del proyecto local:
firebase init hosting
Durante la inicialización del proyecto, desde los mensajes de Firebase CLI, haz lo siguiente:

Selecciona el proyecto de Firebase para conectar al directorio del proyecto local.

El proyecto de Firebase seleccionado es el proyecto de Firebase "predeterminado" para el directorio del proyecto local. Para conectar proyectos adicionales de Firebase al directorio del proyecto local, configura alias de proyectos.
Especifica un directorio para usar como directorio raíz público.
Este contiene todos los archivos estáticos entregados públicamente, incluido el archivo index.html y otros elementos que desees implementar en Firebase Hosting.
La configuración predeterminada del directorio raíz público se denomina public.
Puedes especificar el directorio raíz público ahora o hacerlo más tarde en el archivo de configuración firebase.json.

Si seleccionas la configuración predeterminada y aún no tienes un directorio denominado public, Firebase lo creará automáticamente.
Si aún no tienes un archivo index.html o 404.html válido en el directorio raíz público, Firebase los creará por ti.
Crea una configuración para el sitio.
Si seleccionas crear una app de una página, Firebase agrega automáticamente las configuraciones de reescritura para ti.
Al final de la inicialización, Firebase crea y agrega automáticamente dos archivos a la raíz del directorio de la app local:
Un archivo de configuración firebase.json que contiene la configuración de tu proyecto. Obtén más detalles sobre este archivo en la página Configura el comportamiento del hosting.

Un archivo .firebaserc, en el que se almacenan los alias de tu proyecto.

Paso 3: Realiza implementaciones en tu sitio
Para realizar implementaciones en tu sitio, ejecuta el siguiente comando desde la raíz del directorio del proyecto local:

firebase deploy --only hosting
Nota: Si ejecutas este comando con la marca --only hosting, solo implementarás el contenido y la configuración de Hosting. Si también deseas implementar otros recursos o configuraciones del proyecto (como funciones o reglas de bases de datos), ejecuta este comando con una lista separada por comas en la marca (por ejemplo, --only hosting,functions).
Con este comando, se implementa tu contenido y configuración de Hosting en los siguientes subdominios aprovisionados por Firebase:

PROJECT_ID.web.app
PROJECT_ID.firebaseapp.com