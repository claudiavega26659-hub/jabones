# Jabones Artesanales: página web

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Catálogo público. Las clientas eligen jabones y envían el pedido por WhatsApp. |
| `admin.html` | Panel privado: catálogo, ventas, producción, compras y resumen. |
| `catalogo.json` | Los jabones y los datos del negocio. El panel lo actualiza solo. |
| `estilos.css`, `comun.js` | Diseño y funciones compartidas. |

Las ventas, la producción y las compras **no** van en estos archivos. El panel las guarda en `datos.json`, dentro de un repositorio **privado**.

## Puesta en marcha con GitHub Desktop (una sola vez)

Las carpetas `jabones` y `jabones-datos` ya están preparadas como repositorios.

1. **Publicar la página:** en GitHub Desktop entra a **File → Add local repository**, elige la carpeta `Jabones\jabones` y toca **Publish repository**. **Desmarca** *Keep this code private* y toca **Publish repository**.
2. **Publicar los datos:** repite el paso 1 con la carpeta `Jabones\jabones-datos`, pero esta vez **deja marcada** *Keep this code private*.
3. **Activar la página:** en github.com, abre el repositorio `jabones` y entra a **Settings → Pages**. En *Source* elige **Deploy from a branch**, luego la rama **main** y la carpeta **/ (root)**, y toca **Save**. En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/jabones/`.
4. **Clave de acceso (token):** abre https://github.com/settings/personal-access-tokens/new
   - En *Repository access* elige **Only select repositories** y marca `jabones` y `jabones-datos`.
   - En *Permissions → Repository permissions → Contents* elige **Read and write**.
   - Genera la clave y cópiala, porque GitHub solo la muestra una vez.
5. **Entrar al panel:** abre `https://TU-USUARIO.github.io/jabones/admin.html` y escribe tu usuario y la clave. Queda guardada solo en ese navegador; repite este paso en cada celular o computadora que uses.

**Importante:** el panel guarda los cambios directamente en GitHub. Si después quieres cambiar algo de la página desde esta carpeta, primero toca **Fetch origin** y **Pull** en GitHub Desktop, para no borrar lo que se guardó desde el panel.

## Para tener en cuenta

- El link que compartes con clientas es el del catálogo: `https://TU-USUARIO.github.io/jabones/`.
- Cuando cambias el catálogo, la página pública tarda 1 o 2 minutos en actualizarse.
- No compartas la clave. Si se pierde o vence, crea otra en el paso 4 y pégala en **Ajustes → Conexión con GitHub**.
- GitHub guarda el historial de cada cambio. Además, en **Ajustes → Descargar respaldo** puedes bajar una copia de todo.
