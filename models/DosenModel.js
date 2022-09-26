import { Sequelize } from "sequelize";
import database from "../config/database.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table clinic */
const Dosen = database.define('dosen', {
    nidn: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Dosen;

/* create async function to load db */
(async () => {
    await database.sync();
})();