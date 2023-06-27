const { Schema, mongoose } = require("mongoose");

const CarabinerosSchema = new Schema({
    codFuncionario: {
        type: Number,
        required: [true, 'El codigo de Funcionario es obligatorio'],
    },
    nombre: {
        type: String,
        required: [true, 'El Nombre es obligatorio'],
        unique: true
    },
    grado: {
        type: String,
        unique: true
    },
    dotacion: {
        type: String,
        unique: true
    },
    reparticion: {
        type: String,
        unique: true
    },
    estado: {
        type: Boolean,
        defaul: true
    },
});

const CarabinerosModel = mongoose.model('Carabineros', CarabinerosSchema);
module.exports = CarabinerosModel;