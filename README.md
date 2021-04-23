
# Creación de un CRUD simple con Node.js, Express y sequelizejs

Vamos a crear un REST API para crear un sencillo CRUD en una base de
datos SQL.
---
### Inicialización del proyecto
Para empezar tenemos que verificar que tenemos instalado Nodejs en
nuestro entorno de desarrollo mediante el comando:
```bash
node -v

npm -v
```
Listo si tenemos instalado lo necesario vamos a proceder a crear la
carpeta para el proyecto le vamos a nombrar crud-express.

Dentro de este directorio vamos a ejecutar el comando:
```bash
npm init
```
El comando crea un archivo **package.json** que nos ayuda a administrar
las dependencias que vamos a necesitar para nuestro proyecto.

Vamos a abrir nuestro editor de código preferido en mi caso uso Visual
Studio Code, para crear un archivo llamado index.js, puedes llamarlo
como gustes.
---
### Agregar la dependencia Express para crear el servidor

Agregaremos la dependencia mediante el siguiente comando:
```bash
npm install express --save
```
** \--save** guarda express como una dependencia en **package.json**.
Luego con el comando **npm install** se podrán recuperar todas las
dependencias.

En nuestro archivo **index.js** vamos a agregar el siguiente código para
iniciar nuestro servidor Express lo que vamos a hacer es importar los
módulos necesarios para ejecutarlo.
```js
const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function () {
  console.log('listening on '+port)
});
```
Adicional tenemos que indicarle el puerto, lo suelo poner como constante
pero tú puedes ponerlo directamente en el método listen.

Agregaremos un método GET para comprobar el funcionamiento de nuestro
servidor.
```js
app.get('\', (req, res) => {
  res.send("Hello world!")
})
```
Ahora, ejecutamos en nuestra consola **node index.js** y en un navegador
escribiremos la ruta http://localhost:3000 podremos ver nuestro
mensaje de *Hello world!* entonces nuestro servidor esta funcionando
correctamente.
---
### Agregamos nodemon a nuestro proyecto

Para facilitarnos el desarrollo instalaremos **nodemon** esta
dependencia reinicia automáticamente el servidor cada que existe un
cambio en los archivos del proyecto.

En este caso solo necesitamos **nodemon **en el proceso de desarrollo
por ello lo guardaremos con la bandera --save-dev para que lo guarde
como dependencia de desarrollo.
```bash
npm install nodemon --save-dev
```
Una vez instalado agregaremos una clave de script en nuestro
archivo **package.json** para ejecutar nodemon con un comando npm.

En la sección de scripts agregamos lo siguiente:
```json
"scripts": {
  "dev": "nodemon index.js",
}
```
Ahora en nuestra consola ejecutamos el comando para llamar este script:
```bash
npm run dev
```
---
### Agregamos Sequelize para guardar los datos

En este caso vamos a usar SQLITE por medio de un ORM que se llama
Sequelize Instalamos la dependencia ejecutando el siguiente comando

```bash
npm install sqlite3 sequelize
```
En nuestro archivo db.js crearemos la constante de conexión de
Sequelize
---
---
### Creación del CRUD

Vamos crear nuestros **métodos, GET, POST, PUT, DELETE** en nuestro
archivo index.js según corresponda

Mediante una aplicación o su propio código **front-end** podemos
consumir este servicio REST para nuestro ejemplo usaremos POSTMAN.
---
**Made with ❤️ by: grupo10**
