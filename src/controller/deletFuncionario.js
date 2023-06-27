const CarabinerosModel = require("../models/funcionariosCarabs");

const borrarFuncionario = async (req, res) => {
    try {
        const { codFuncionario } = req.params;
        const eliminar = await CarabinerosModel.deleteOne({ codFuncionario: codFuncionario });
        if (eliminar.deletedCount === 0) {
            return res.status(404).json({ message: "Funcionario No Encontrado." });

        }
        res.json({ message: "El funcionario fue eliminado con éxito." });
    } catch (error) {
        res.status(500).json({ message: "Ocurrio un error" });
    }
};

module.exports = { borrarFuncionario };


//metodo para ELIMINAR funcionarios a la base de datos.