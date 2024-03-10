**ESTRUCTURA**
config/: Configuración de la base de datos.
controllers/: Controladores que manejan las solicitudes HTTP.
models/: Definiciones de los modelos de datos utilizando Mongoose.
routes/: Definiciones de las rutas de la API.
index.js: Archivo principal para iniciar el servidor.
.env: Archivo para almacenar variables de entorno sensibles.
package.json: Archivo de configuración de npm.

**FUNCIONALIDADES DE LA TIENDA**
Ver productos: Los usuarios pueden ver todos los productos disponibles.
Detalles del producto: Los usuarios pueden ver detalles de un producto específico.
Agregar productos: Los administradores pueden agregar nuevos productos a la tienda.
Editar productos: Los administradores pueden editar los detalles de un producto existente.
Eliminar productos: Los administradores pueden eliminar productos de la tienda.

**TECNOLOGÍAS EMPLEADAS**
Node.js: Plataforma de ejecución de JavaScript.
Express.js: Framework web de Node.js para la creación de APIs.
MongoDB: Base de datos no relacional para almacenar los datos de la aplicación.
Mongoose: ODM (Object Document Mapper) de MongoDB para Node.js.
dotenv: Módulo para cargar variables de entorno desde un archivo .env.