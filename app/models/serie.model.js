
module.exports = (sequelize, Sequelize) => {

    const Serie = sequelize.define("serie", {
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        
        tipo: {
            type: Sequelize.STRING
        },
        categoria:{
            type: Sequelize.STRING
        },
        aniolanzamiento: {
            type: Sequelize.INTEGER
        },
        director: {
            type: Sequelize.STRING
        }
    });
    return Serie;
};