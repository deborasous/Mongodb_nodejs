const mongoose = require("mongoose");

//estruturar os campos de usuário dentro do banco de dados
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const UserModel = mongoose.model("User", userSchema);

//usa o UserModel para fazer as alterações no DB
module.exports = UserModel;
