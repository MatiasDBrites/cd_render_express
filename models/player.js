import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Guild from "./guild";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Player = db.define('player', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  race: {
    type: DataTypes.STRING
  },
  class: {
    type: DataTypes.STRING
  },
  guild_id: { //para relacionar las tablas
    type: DataTypes.INTEGER,
    field: 'guild_id',
    references: {
      model: Guild,
      key: 'id'
    }
  },
  level: {
    type: DataTypes.INTEGER
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
},{
  tableName: 'player'
});
 
// Export model Player
export default Player;