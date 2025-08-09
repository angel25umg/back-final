const db = require("../models");
const Serie = db.serie;
const Op = db.Sequelize.Op;
// Crear y guardar una nueva Serie
exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El nombre no puede estar vacío!"
        });
        return;
    }

    const serie = {
        nombre: req.body.nombre,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores,
        duracion: req.body.duracion,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        aniolanzamiento: req.body.aniolanzamiento,
        director: req.body.director
    };

    Serie.create(serie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la Serie."
            });
        });
};
// Obtener todas las Series 
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Serie.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las series."
            });
        });
};
// Buscar Series por nombre 
exports.findByNombre = (req, res) => {
    const nombre = req.params.nombre;
    Serie.findAll({ where: { nombre: { [Op.iLike]: `%${nombre}%` } } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al buscar la serie por nombre."
            });
        });
};

    // Obtener una Serie por ID
exports.findOne = (req, res) => {
    const id = req.params.id;
Serie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la Serie con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar la Serie con id=" + id
            });
        });
};

// Actualizar una Serie por ID
exports.update = (req, res) => {
    const id = req.params.id;
Serie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La Serie fue actualizada correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la Serie con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar la Serie con id=" + id
            });
        });
};

   // Eliminar una Serie por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Serie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La Serie fue eliminada correctamente"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la Serie con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la Serie con id=" + id
            });
        });
};
// Eliminar todas
exports.deleteAll = (req, res) => {
    Serie.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Series fueron eliminadas correctamente` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todas las series."
            });
        });
};