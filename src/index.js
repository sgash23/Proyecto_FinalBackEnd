const server = require('./server/server');
require('dotenv').config();
require('./database/db')

const PORT = process.env.PORT || 5000

server.listen(8080, () => {
    console.log(`Servidor Ejecutándose en el puerto ${PORT}`);
});

