"use strict";

//instalar paquete EXPRESS
/**
 * El paquete express es el framework de backend mas popular de node
 * Proporciona un conjunto de herramientas para apps webs , peticiones y respuestas http,
 * enrutamiento y middleware para construir y desplegar apps a gran escala
 */

//configurar servidor web

import express from "express";
import router from "./routes/clientes.routers.js";
import router2 from "./routes/login.routers.js";
import "./config.js";
import cors from 'cors'
//crear servidor

const app = express(); //creamos objeto express

//PARA EJECUTAR SCRIPTS POR CONSOLA ES npm run "nombre"

//configurar el puerto
 const puerto = 3000;

 app.use(cors())

//respuesta a los endpoints . Representa una acción de la API
app.use(express.json())
app.use(router);
app.use(router2);


//importante ponerlo al final
app.use((req,res)=>{
res.status(404).json({
message:"Ruta no encontrada"  
})
})
//servidor a la escucha por el puerto 3000
app.listen(puerto, () => {
  console.log("escuchando solicitudes");
});
