"use strict";

//iomportar paquete mysql
import {createPool} from "mysql2/promise";
import { DB_DATABASE,DB_PASSWORD,DB_HOST,DB_USER,DB_PORT } from "./config.js";
const conexion=createPool({
    host:DB_HOST,
    database:DB_DATABASE,
    user:DB_USER,
    password:DB_PASSWORD,
     port:DB_PORT
});

export default conexion;