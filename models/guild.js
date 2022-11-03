import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes para asignarle los tipos a nuestra base de datos
const { DataTypes } = Sequelize;

const Guild = db.define('guild', {

    id: {
        type: DataTypes.INTEGER, //(asignarle el valor a la base de datos)
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    createdOn: {
        type: DataTypes.DATE,
        field: 'created_on', //el nombre real de la base de datos
        defaultValue: Sequelize.NOW
    }},{
        tableName: 'guild'
    });

      // Export model Guild
export default Guild;