# Volante/Boletín BI (React + Vite)

Este proyecto es una mini aplicación web que muestra un boletín/volante. Está hecha con React y se ejecuta con Vite. El objetivo de este documento es que una persona sin experiencia en programación pueda instalarla y verla funcionando en su computador.

La imagen a continuación corresponde al boletín incluido en el proyecto.

![Boletín](PruebaBI/bi-volante/src/assets/boletin.png)

## ¿Qué es React y por qué lo usé?
- **Qué es React:** una biblioteca de JavaScript creada por Meta para construir interfaces de usuario. Permite dividir la pantalla en piezas pequeñas llamadas “componentes” y actualizar solo lo que cambia, haciendo la app rápida y fluida.
- **Por qué React en este proyecto:**
    - **Velocidad y fluidez:** ideal para interfaces que cambian sin recargar la página.
    - **Componentes reutilizables:** facilita mantener y mejorar el boletín en el tiempo.
    - **Gran comunidad:** abundante documentación y soluciones a problemas comunes.
    - **Escalable:** si el boletín crece (más secciones o interactividad), React se adapta bien.

## Requisitos antes de empezar
1. **Node.js (versión LTS)**
     - Descárgalo desde: https://nodejs.org
     - Durante la instalación, deja las opciones por defecto.
     - Verifica la instalación abriendo PowerShell y ejecutando:
         ```powershell
         node -v
         npm -v
         ```
         Deberías ver dos números de versión (por ejemplo, v20.x y 10.x).
2. (Opcional) **Git** para clonar el repositorio
     - Descarga desde: https://git-scm.com
     - Si no quieres usar Git, puedes descargar el código como **ZIP**.
3. (Opcional) **Visual Studio Code** para editar/abrir el proyecto
     - Descarga desde: https://code.visualstudio.com

## Cómo obtener el proyecto
Elige una de estas dos opciones:

- **A. Descargar como ZIP** (más simple)
    1) En GitHub, pulsa “Code” > “Download ZIP”.
    2) Descomprime el archivo en una carpeta fácil de encontrar (por ejemplo, en “Descargas”).

- **B. Clonar con Git**
    1) Abre PowerShell en la carpeta donde quieras guardar el proyecto.
    2) Ejecuta:
         ```powershell
         git clone https://github.com/miafuentes30/Prueba-Tecnica-BI.git
         ```

## Cómo ejecutar la aplicación
1. Abre PowerShell y ve a la carpeta del proyecto de la app (la que contiene el `package.json`):
     ```powershell
     cd "C:\\Users\\tu-usuario\\Descargas\\Prueba-Tecnica-BI\\PruebaBI\\bi-volante"
     ```
     (Ajusta la ruta si guardaste el proyecto en otro lugar.)
     
     O si ya tienes algun edito de código (como Visual Studio):
   ```powershell
     cd PruebaBI
     cd bi-volante
     ```
2. Instala las dependencias (solo la primera vez):
     ```powershell
     npm install
     ```
3. Inicia el servidor de desarrollo:
     ```powershell
     npm run dev
     ```
4. En la terminal verás una dirección parecida a:
     ```
     Local:   http://localhost:5173/
     ```
     Abre ese enlace en tu navegador. Si el número de puerto es diferente, usa el que aparece en tu terminal.


## Estructura básica del proyecto
```
PruebaBI/bi-volante/
    ├─ public/
    ├─ src/
    │  ├─ assets/           # imágenes (incluye voletin.PNG)
    │  ├─ components/       # componentes React reutilizables
    │  ├─ styles/           # estilos CSS
    │  ├─ App.jsx           # componente principal
    │  └─ main.jsx          # punto de entrada
    ├─ index.html           # plantilla HTML
    ├─ package.json         # dependencias y scripts
    └─ vite.config.js       # configuración de Vite
```

## Comandos útiles (PowerShell)
- **Instalar dependencias:**
    ```powershell
    npm install
    ```
- **Ejecutar en modo desarrollo:**
    ```powershell
    npm run dev
    ```
- **Crear versión para producción (archivos finales):**
    ```powershell
    npm run build
    ```
- **Previsualizar la versión de producción:**
    ```powershell
    npm run preview
    ```

## Problemas comunes y soluciones
- **“npm no se reconoce como un comando interno o externo”**
    - Cierra y vuelve a abrir PowerShell tras instalar Node.js; si persiste, reinicia el equipo.
- **La página no abre en el navegador**
    - Confirma la dirección que muestra la terminal (por ejemplo, `http://localhost:5173`). Copia y pega exactamente esa URL.
- **El puerto ya está en uso**
    - Cierra otras ventanas del servidor o reinicia `npm run dev`. Vite elegirá otro puerto y te lo mostrará de nuevo.
- **Comando mal escrito**
    - Asegúrate de escribir `npm run dev` (con “npm”). Un error común es escribir `nmp`.

## ¿Qué es Vite?
Vite es la herramienta que usamos para iniciar la aplicación rápidamente durante el desarrollo y para crear la versión final optimizada. Hace que “correr” y “construir” el proyecto sea muy rápido.


