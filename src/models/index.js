const dbConfig = require("../configs/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const { relationSetup } = require('./relationSetup');

const modelDefiners = [
    require('./model/local.model'),
    require('./model/owner.model'),
    require('./model/pet.model'),
    require('./model/product.model'),
    require('./model/sale.model'),
    require('./model/service.model'),
];

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize, Sequelize);
}
relationSetup(sequelize);
module.exports = db;
