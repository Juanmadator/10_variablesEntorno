import { Router } from "express";
import { addCliente, deleteCliente, getCliente, getClientes, updateCliente } from "../controllers/clientes.controllers.js";
import { validacion } from "../validators/clientes.validator.js";

const router=Router();
router.get("/Clientes",getClientes);
router.get("/Clientes/:id",getCliente);
  


  router.post("/Clientes",validacion, addCliente);
  // router.put("/Clientes/:id",updateCliente);
    router.put("/Clientes/:id",validacion, updateCliente);
  
  router.delete("/Clientes/:id",deleteCliente);


  export default router; //