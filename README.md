### Actividad 3: Node.js Comparación de frameworks a nivel de aplicación. Encargado Grupo 2

1- Realizar una breve descripción de las caracteristicas principales (Seleccionar los 3 o 4 más utilizados en la actualidad) resaltando ventajas y desventajas.  
1.b Realizar un cuadro comparativo con sus caracteristicas principales.  
https://www.simform.com/best-nodejs-frameworks/

2- Seleccionar 2 framework y realizar 1 ejemplo con cada uno donde se expongan sus principales diferencias. Crear carpetas para cada uno de ellos (indicar en un readme.md como instalar y correr el proyecto)

## Instructions

Clone this repo

## Sails project

1. Switch to grupo2/frameworks branch

2. Place urself in

```console
2021-Actividad-2/sails/actividad2
```

3. Run

```console
npm install
```

4. Run

```console
sails lift
```

5. Now you can just open it in your browser

```console
localhost:1337
```

## Express project

1. Switch to grupo2/frameworks branch

2. Place urself in

```console
2021-Actividad-2/express
```

3. Run

```console
npm install
```

4. Now you have to configure your db in

```console
2021-Actividad-2/express/db.js
```

Change the sequelize constructor parameters

```console

const sequelize = new Sequelize('dacs', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: { decimalNumbers: true },
    define: {
        timestamps: false,
    },
});

```

5. Create a MySql schema

6 . Run in your console

```console
npm start
```

7. Now you can just open it in your browser

```console
localhost:5000
```
