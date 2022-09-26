import { Sequelize } from "sequelize";
import database from "../config/database.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

const Matkul = database.define('matkul', {
    id_matkul: DataTypes.STRING,
    matkul: DataTypes.STRING,
    sks: DataTypes.INTEGER,
    semester: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default Matkul;

/* create async function to load db */
(async () => {
    await database.sync();
})();