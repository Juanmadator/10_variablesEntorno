import conexion from "../mysql_connector.js";

export const getClientes = async (req, res) => {
  const [result] = await conexion.query("SELECT * FROM clientes");

  console.log("CLIENTES: " + result);
  res.status(200).json(result);
};

export const getCliente = async (req, res) => {
   

  try{
    console.log(req.params);
    const [result] = await conexion.query("SELECT * FROM clientes WHERE id=?", [
      req.params.id,
    ]);
    console.log(result[0]);
    res.status(200).json(result[0]); //respuesta del servidor
  }catch(error){
    res.status(500).json({
        message:"Error en el servidor"
    })
  }
};

export const deleteCliente = async (req, res) => {
    try{
        console.log(req.params);
        const [result] = await conexion.query("DELETE  FROM clientes WHERE id=?", [
          req.params.id,
        ]);
        console.log(result[0]);
        res.status(200).json(result[0]); //respuesta del servidor
    }catch(error){
      res.status(500).json({
          message:"Error en el servidor"
      })
    }
};

export const addCliente = async (req, res) => {
    try{
        console.log(req.body);

        const { nameCliente, emailCliente, tlfnoCliente, empresaCliente } = req.body;
      
        const [result] = await conexion.query(
          "INSERT INTO clientes(id,nameCliente,emailCliente,tlfnoCliente,empresaCliente) values(NULL,?,?,?,?)",
          [nameCliente, emailCliente, tlfnoCliente, empresaCliente]
        );
        console.log(result);
        //respuesta del servidor
        res.status(201).json({ id: result.insertId }); 
      
        if(result.affectedRows>0){
      return res.status(200).json({
          mensaje:"ha sido borrado"
      })
        }
    }catch(error){
      res.status(500).json({
          message:"Error en el servidor"
      })
    }
 
};


// export const updateCliente = async (req, res) => {
  
//     const { nameCliente, emailCliente, tlfnoCliente, empresaCliente } = req.body;
//     const {id}=req.params;

//     const [result] = await conexion.query(
//       "UPDATE clientes SET nameCliente=?,emailCliente=?,tlfnoCliente=?,empresaCliente=?  WHERE id=?",
//       [nameCliente, emailCliente, tlfnoCliente, empresaCliente,id]
//     );
//     console.log(result);
//    if(result.affectedRows==0){
//     return res.status(400).json({
//         message:"No existe"
//     })
//    }else{
//     return res.status(200).json({
//         message:"Ha sido actualizado"
//     })
//    }
//   };


export const updateCliente = async (req, res) => {
    try{
        const { nameCliente, emailCliente, tlfnoCliente, empresaCliente } = req.body;
        const {id}=req.params;
    
        const [result] = await conexion.query(
          "UPDATE clientes SET nameCliente=IFNULL(?,nameCliente),emailCliente=IFNULL(?,emailCliente),tlfnoCliente=IFNULL(?,tlfnoCliente),empresaCliente=IFNULL(?,empresaCliente)  WHERE id=?",
          [nameCliente, emailCliente, tlfnoCliente, empresaCliente,id]
        );
        console.log(result);
       if(result.affectedRows==0){
        return res.status(400).json({
            message:"No existe"
        })
       }else{
        return res.status(200).json({
            message:"Ha sido actualizado"
        })
       }
    }catch(error){
      res.status(500).json({
          message:"Error en el servidor"
      })
    }
   
  };