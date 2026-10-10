# Jabones Artesanales: página web

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Catálogo público. Las clientas eligen jabones y envían el pedido por WhatsApp. |
| `admin.html` | Panel privado: catálogo, ventas, producción, compras y resumen. |
| `catalogo.json` | Los jabones y los datos del negocio. El panel lo actualiza solo. |
| `estilos.css`, `comun.js` | Diseño y funciones compartidas. |

Las ventas, la producción y las compras **no** van en estos archivos. El panel las guarda en `datos.json`, dentro de un repositorio **privado**.

## Puesta en marcha (una sola vez)

1. **Repositorio público:** en GitHub, entra a **New repository**, ponle de nombre `jabones`, márcalo **Public** y créalo.
   Luego toca **Add file → Upload files** y arrastra los 5 archivos de esta carpeta (no hace falta subir este LEEME). Para terminar, toca **Commit changes**.
2. **Activar la página:** en ese repositorio entra a **Settings → Pages**. En *Source* elige **Deploy from a branch**, luego la rama **main** y la carpeta **/ (root)**, y toca **Save**.
   En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/jabones/`.
3. **Repositorio privado:** crea otro repositorio llamado `jabones-datos` y márcalo **Private**. Activa la casilla *Add a README* para que no quede vacío.
4. **Clave de acceso (token):** entra a tu foto → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - En *Repository access* elige **Only select repositories** y marca `jabones` y `jabones-datos`.
   - En *Permissions → Repository permissions → Contents* elige **Read and write**.
   - Genera la clave y cópiala, porque GitHub solo la muestra una vez.
5. **Entrar al panel:** abre `https://TU-USUARIO.github.io/jabones/admin.html` y escribe tu usuario y la clave. Queda guardada solo en ese navegador; repite este paso en cada celular o computadora que uses.

## Para tener en cuenta

- El link que compartes con clientas es el del catálogo: `https://TU-USUARIO.github.io/jabones/`.
- Cuando cambias el catálogo, la página pública tarda 1 o 2 minutos en actualizarse.
- No compartas la clave. Si se pierde o vence, crea otra en el paso 4 y pégala en **Ajustes → Conexión con GitHub**.
- GitHub guarda el historial de cada cambio. Además, en **Ajustes → Descargar respaldo** puedes bajar una copia de todo.
