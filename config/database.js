import { Sequelize } from "sequelize";

const database = new Sequelize('dosen_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default database;
