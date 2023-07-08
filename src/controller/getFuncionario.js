const CarabinerosModel = require("../models/funcionariosCarabs");

//busqueda del listado completo de la base de datos
const getFuncionario = async (req, res) => {
    try {
        const listaFuncionarios = await CarabinerosModel.find();
        res.json(listaFuncionarios)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message + 'No se ha podido acceder al listado de Funcionarios'})
    }
};

//busqueda por un nombre específico
const getNombreFuncionario = async (req, res) => {
    try {
        const { nombre } = req.params;
        const funcionarios = await CarabinerosModel.findOne({nombre})
        if(!funcionarios) return res.status(404).json({message: `Funcionario con el nombre '${ nombre }' no encontrado`})
        res.json(funcionarios)
    } catch (error) {
        console.error(error);
        res
        .status(500)
        .json({
            message: error.message + 'No se ha podido acceder al Funcionario buscado',
        });
    }
}


module.exports = { getFuncionario, getNombreFuncionario };

