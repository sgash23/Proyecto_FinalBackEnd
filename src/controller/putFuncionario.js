const CarabinerosModel = require("../models/funcionariosCarabs");

const actualizarFuncionario = async (req, res) => {
    try {
        const { nombre } = req.params;
        const funcionario = req.body;
        const updatedFunc = await CarabinerosModel.findOne({ nombre });
        updatedFunc.nombre = funcionario.nombre;
        await updatedFunc.save();
        res.json({ message: "Funcionario con Nombre Actualizado", updatedFunc });
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message + 'No se ha podido actualizar el funcionario'})
    }
}

module.exports = { actualizarFuncionario };

//metodo para ACTUALIZAR funcionarios a la base de datos.

