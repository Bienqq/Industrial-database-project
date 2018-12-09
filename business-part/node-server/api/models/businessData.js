const db = require("../database/businessDatabase")

const data = db.define("business_data", {
  id: {
    type: db.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  date: db.Sequelize.DATE,
  t1wy: db.Sequelize["DOUBLE PRECISION"],
  t2wy: db.Sequelize["DOUBLE PRECISION"],
  t1we: db.Sequelize["DOUBLE PRECISION"],
  t2we: db.Sequelize["DOUBLE PRECISION"],
  v1: db.Sequelize["DOUBLE PRECISION"],
  v2: db.Sequelize["DOUBLE PRECISION"],
}, {
  timestamps: false, // removing default 'createdAt' 'updatedAt' fields from model
  freezeTableName: true // removing pluralization of table names
});

module.exports = data;