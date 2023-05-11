const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      //dentro do mongoDB, será criado uma pasta como nome database ou quaoquer outro nome que for colocado abaixo e dentro dela será criado um users vindo do express.js res.status(200).json(users);
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.arbhyla.mongodb.net/database?retryWrites=true&w=majority`
    );
    return console.log("Conexão realizada com sucesso");
  } catch (error) {
    return console.log("Erro ao se conectar ao banco de dados.", error);
  }
};

module.exports = connectToDataBase;
