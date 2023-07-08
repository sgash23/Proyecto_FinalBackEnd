const CarabinerosModel = require("../models/funcionariosCarabs");

const addFuncionario = async (req, res) => {
    try {
        const { codFuncionario, nombre, grado, dotacion, reparticion, estado } = req.body;
        const nuevoFuncionario = new CarabinerosModel({codFuncionario, nombre, grado, dotacion, reparticion, estado});
        await nuevoFuncionario.save();
        res.json({message: 'Funcionario ingresado correctamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message + 'No se ha podido crear un nuevo Funcionario'})
    }
}

module.exports = { addFuncionario };

//metodo para CREAR funcionarios a la base de datos.

//formato para probar body en Postman

//"codFuncionario":"",
//"nombre":"",
//"grado":"",
//"dotacion":"",
//"reparticion":"",
//"estado":""