# Jabones Artesanales: página web

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Catálogo público. Las clientas eligen jabones y envían el pedido por WhatsApp. |
| `admin.html` | Panel privado: catálogo, ventas, producción, compras y resumen. |
| `catalogo.json` | Los jabones y los datos del negocio. El panel lo actualiza solo. |
| `estilos.css`, `comun.js` | Diseño y funciones compartidas. |

Las ventas, la producción y las compras **no** van en estos archivos. El panel las guarda en `datos.json`, dentro de un repositorio **privado**.

## Puesta en marcha con GitHub Desktop (una sola vez)

Las carpetas `jabones` y `jabones-datos` de tu computadora (en GitHub: `fragancia-naturaleza` y `fragancia-naturaleza-datos`) ya están preparadas como repositorios.

1. **Publicar la página:** en GitHub Desktop entra a **File → Add local repository**, elige la carpeta `Jabones\jabones` y toca **Publish repository**. **Desmarca** *Keep this code private* y toca **Publish repository**.
2. **Publicar los datos:** repite el paso 1 con la carpeta `Jabones\jabones-datos`, pero esta vez **deja marcada** *Keep this code private*.
3. **Activar la página:** en github.com, abre el repositorio `fragancia-naturaleza` y entra a **Settings → Pages**. En *Source* elige **Deploy from a branch**, luego la rama **main** y la carpeta **/ (root)**, y toca **Save**. En uno o dos minutos la página queda en `https://emprende-shop.github.io/fragancia-naturaleza/`.
4. **Clave de acceso (token):** abre https://github.com/settings/personal-access-tokens/new
   - En *Repository access* elige **Only select repositories** y marca `fragancia-naturaleza` y `fragancia-naturaleza-datos`.
   - En *Permissions → Repository permissions → Contents* elige **Read and write**.
   - Genera la clave y cópiala, porque GitHub solo la muestra una vez.
5. **Configurar el panel:** abre `admin.html` y toca *Soy la administradora: configurar*. Escribe el usuario de GitHub, la clave y dos contraseñas: la tuya (administradora) y la de la dueña. Repite este paso en cada dispositivo que se use.

**Importante:** el panel guarda los cambios directamente en GitHub. Si después quieres cambiar algo de la página desde esta carpeta, primero toca **Fetch origin** y **Pull** en GitHub Desktop, para no borrar lo que se guardó desde el panel.

## Para tener en cuenta

- El link que compartes con clientas es el del catálogo: `https://emprende-shop.github.io/fragancia-naturaleza/`.
- Cuando cambias el catálogo, la página pública tarda 1 o 2 minutos en actualizarse.
- No compartas la clave. Si se pierde o vence, crea otra en el paso 4 y pégala en **Ajustes → Conexión con GitHub**.
- GitHub guarda el historial de cada cambio. Además, en **Ajustes → Descargar respaldo** puedes bajar una copia de todo.

## Contraseñas del panel

- **Administradora:** ve todo, incluida la pantalla *Conexión y contraseñas*, desde donde cambia la clave de GitHub o la contraseña de la dueña.
- **Dueña:** maneja el catálogo, las ventas, la producción y las compras. Nunca ve GitHub ni la clave.
- La clave de GitHub se guarda **cifrada** en el navegador. Sin una de las dos contraseñas no se puede usar.
- Si la dueña olvida su contraseña, la administradora entra con la suya y le pone una nueva en *Ajustes → Conexión y contraseñas*.

## App en el celular (Android)

- Abre el panel en **Chrome** del celular (`…/admin`), entra con la contraseña y toca **Ajustes → Instalar app**. También puedes ir al menú **⋮ → Instalar app**.
- La app queda en la pantalla de inicio y **funciona sin internet**. Todo se guarda en el celular y se sube a la nube sola cuando hay conexión. Arriba aparece el estado: *Sincronizado*, *cambios por subir* o *Sin internet*.
- La primera vez en un celular nuevo se necesita internet para descargar los datos.
- **Compartir por WhatsApp:** en **Catálogo** toca **Compartir por WhatsApp** (todo el catálogo) o **Compartir** en un jabón. Se puede enviar como imágenes o como mensaje de texto.
- **Respaldo:** en **Ajustes → Enviar copia de respaldo** se genera un archivo que se puede mandar por WhatsApp o correo.
