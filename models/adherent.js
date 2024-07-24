/************************************/
/*** Import des modules nécessaires */
const { Sequelize } = require('sequelize')

/*******************************/
/*** Définition du modèle Adherent */
module.exports = (sequelize) => {
    return Adherent = sequelize.define('Adherent', {
        noms: {type: Sequelize.STRING(50),  allowNull: true },
    prenoms: {type: Sequelize.STRING(100),  allowNull: true },
    email: {type: Sequelize.STRING(50), unique: true, allowNull: true,validate:{isEmail:true} },
    datenaissance: {type: Sequelize.DATE,  allowNull: true },
    lieunaissance: {type: Sequelize.STRING(50),  allowNull: true },
    telephone: {type: Sequelize.STRING(15), unique: true, allowNull: true },
    paysmilitantisme: {type: Sequelize.STRING(20),  allowNull: true },
    provincemilitantisme: {type: Sequelize.STRING(20),  allowNull: true },
    communemilitantisme: {type: Sequelize.STRING(20),  allowNull: true },
    arrmilitantisme: {type: Sequelize.STRING(5),  allowNull: true },
    departementmilitantime: {type: Sequelize.STRING(30),  allowNull: true },
    centrevotemilitantisme: {type: Sequelize.STRING(30),  allowNull: true },
    sexe: {type: Sequelize.STRING(1), allowNull: true },
    pieceidentite: {type: Sequelize.STRING(15), allowNull: true },
    numpieceidentite: {type: Sequelize.STRING(30), unique: true, allowNull: true },
    adresse: {type: Sequelize.STRING(200),  allowNull: true },
    montantquotisation: {type: Sequelize.STRING(8),  allowNull: true },
    profession: {type: Sequelize.STRING(25),  allowNull: true },
    signature: {type: Sequelize.TEXT,  allowNull: true },
    photo: {type: Sequelize.TEXT,  allowNull: true },
    }, { paranoid: true,modelName: "Adherent",
        tableName: "adherent",
        underscore: true,
        timestamps: true, })           // Ici pour faire du softDelete
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
// Adherent.sync()
//Adherent.sync({force: true})
// Adherent.sync({alter: true})

