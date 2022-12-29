# API WEB
# **Introducción**
Esta API web contiene rutas y una pequeña base de datos local usando JSON, además de poder conectarse a tu app de mongoDB y además tiene interacciones CRUD.
## **Pre-requisitos**
Para poder usar la API correctamente es necesario tener
 - Node >=16
 - npm >=6
### **Clona el proyecto y luego usa**
Para correr el proyecto es necesario primero instalar las dependencias que este tiene, usa este comando para hacerlo.
-   **npm install**
### **Conectar a MongoDB**
Para hacer esto tienes que ir al archivo [APP.JS](./src/app.js) y luego colocar dentro de las comillas simples el URI de tu MongoDB.
### **Una vez instalado todo, usa**
-   **npm start**
### **Prueba de API**
Para probar la API puedes usar [Consumir API](https://github.com/SbleitZ/Consumir-API), es una APP para consumir API'S, donde todo se recibe por consola, o usar otras alternativas como PostMan.
- `Ruta principal: localhost:3000`
### Resultado
Haremos un `GET` como prueba del funcionamiento de la API
<image src="./imagen_demostracion.png" alt="Demostración GET API">
