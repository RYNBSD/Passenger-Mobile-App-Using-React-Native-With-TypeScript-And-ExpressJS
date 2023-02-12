const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
  hashPassword,
  verifyPassword,
}