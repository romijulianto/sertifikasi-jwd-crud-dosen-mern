import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Dosen from "./DosenModel.js";
import Matkul from "./MatkulModel.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table service_clinic */
const pengampuMatkul = database.define('pengampu_matkul', {
    nidn: DataTypes.STRING,
    name: DataTypes.STRING,
    matakuliah: DataTypes.STRING,
    sks: DataTypes.INTEGER

}, {
    freezeTableName: true
});

export default pengampuMatkul;

/* create async function to load db */
(async () => {
    await Dosen.hasMany(pengampuMatkul);
    await pengampuMatkul.belongsTo(Dosen);

    await Matkul.hasMany(pengampuMatkul);
    await pengampuMatkul.belongsTo(Matkul);
    
    await Dosen.sync();
    await Matkul.sync();
    await pengampuMatkul.sync();
    await database.sync();
})();