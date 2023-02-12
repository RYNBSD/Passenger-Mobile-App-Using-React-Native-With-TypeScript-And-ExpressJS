const sequelize = require("./conn");

const USER = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    name varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    phone varchar(255) UNIQUE NOT NULL
  );
`;

const createTable = async () => {
  await sequelize.query(USER);
}

module.exports = {
  createTable
};