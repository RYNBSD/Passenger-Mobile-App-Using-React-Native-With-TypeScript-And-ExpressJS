const { QueryTypes } = require("sequelize");
const sequelize = require("../models/conn");
const { hashPassword, verifyPassword } = require("./hash");

class Email {
  constructor (email) {
    this.email = email
  }

  async checkIfEmailExists() {
    const isEmailExists = await sequelize.query(`SELECT *  FROM \`users\` WHERE email = '${this.email}' LIMIT 1`, { type: QueryTypes.SELECT });
    
    return (isEmailExists.length > 0);
  }
}

class Auth extends Email {
  constructor(email, phone, password) {
    super(email);
    this.phone = phone;
    this.password = password;
  }

  async checkIfPhoneExists() {
    const isPhoneExists = await sequelize.query(`SELECT * FROM \`users\` WHERE phone = '${this.phone}' LIMIT 1`, { type: QueryTypes.SELECT });

    return (isPhoneExists.length > 0);
  }
}

class Reset extends Email {
  constructor(email) {
    super(email)
  }
}

class Login extends Auth {
  constructor(email, phone, password) {
    super(email, phone, password);
  }

  async verifyPassword(password) {
    return verifyPassword(password, await this.getUserHash());
  }

  async getUserHash() {
    const hash = await sequelize.query(`SELECT password from \`users\` WHERE email = '${this.email}'`, { type: QueryTypes.SELECT });
    return hash[0].password;
  }

  async getUserinfo() {
    const user = await sequelize.query(`SELECT * FROM \`users\` WHERE email = '${this.email}'`, { type: QueryTypes.SELECT });
    return user[0];
  }
}

class Signup extends Auth {
  constructor(name, email, phone, hash) {
    super(email, phone, hash);
    this.name = name;
  }

  async createUser() {
    await sequelize.query(`INSERT INTO \`users\` (name, email, password, phone) VALUES (
      '${this.name}', '${this.email}', '${hashPassword(this.password)}', '${this.phone}')`, { type: QueryTypes.INSERT });
  }
}

class Password extends Reset {
  constructor(email, password) {
    super(email);
    this.password = password;
  }

  async resetPassword() {
    await sequelize.query(`UPDATE \`users\` SET password = '${hashPassword(this.password)}' WHERE email = '${this.email}'`, { type: QueryTypes.UPDATE });
  }
}

module.exports = {
  Login,
  Signup,
  Password
}