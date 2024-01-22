import { Router } from "express";
import conexion from "../mysql_connector.js";

const router=Router();

router.get("/login",async(req,res)=>{
  const result=await conexion.query("SELECT * FROM clientes");
  res.json(result);
})

  export default router; //