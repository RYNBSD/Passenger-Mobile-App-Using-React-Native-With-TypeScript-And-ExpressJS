const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER_NAME}`, `${process.env.DB_PASSWORD}`, {
  host: `${process.env.DB_HOST}`,
  dialect: 'mysql'
});

async function testConn () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConn();

module.exports = sequelize;