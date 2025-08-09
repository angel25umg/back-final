module.exports = app => {
    const series = require("../controllers/serie.controller.js");
    var router = require("express").Router();
 // Crear una nueva Serie
    router.post("/create/", series.create);
 // Obtener todas las Series
    router.get("/", series.findAll);
  // Buscar Series por nombre (ruta específica)
    router.get("/buscar/:nombre", series.findByNombre);
 // Obtener una Serie por ID
    router.get("/:id", series.findOne);
 // Actualizar una Serie por ID
    router.put("/update/:id", series.update);
 // Eliminar una Serie por ID
    router.delete("/delete/:id", series.delete);
// Eliminar todas las Series
    router.delete("/delete/", series.deleteAll);
// Registrar las rutas bajo el endpoint /api/serie
    app.use("/api/serie", router);
};