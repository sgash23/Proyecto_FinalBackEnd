//Midleware propio para obtener fecha, hora y tipo solicitud.

const getFecha = ((req, res, next) => {
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
     next();
 });

 module.exports = getFecha;