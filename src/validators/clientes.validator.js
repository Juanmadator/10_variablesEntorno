import {check,validationResult} from 'express-validator';

export const validacion=[
    check("nameCliente").exists().notEmpty().isLength({
        min:5,
        max:40
    }).withMessage("El nombre del cliente no debe estar vacío,debe tener entre 5-40 caracteres"),
    check("emailCliente").exists().notEmpty().isEmail().withMessage("El nombre del cliente no debe estar vacío,debe tener entre 5-40 caracteres"),
    check("tlfnoCliente").exists().notEmpty().isLength({
        min:9,max:9
    }).isNumeric().withMessage("El TELEFONO  del cliente no debe estar vacío,debe tener entre 5-40 caracteres"),
    check("empresaCliente").exists().notEmpty().matches(/^[A-Z][a-zñA-ZÑ0-9\s]{4,49}$/).withMessage("El nombre de la empresa no debe estar vacío,debe tener entre 5-40 caracteres"),
    (req,res,next)=>{
        const errors=validationResult(req); //array con filas como   campos valida
        if(!errors.isEmpty()){
res.status(400).json({
    errors:errors.array()
})
        }else{
            next() //sigue la ejecucion del siguiente middleware
        }
    }
]