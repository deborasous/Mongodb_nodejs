//criando os codigo do http usando o EXPRESS
const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

// sinaliza para o express que será recebido json na aplicação
app.use(express.json());

//Usar o ejs para renderizar html com js. Está sinalizando para a aplicação que ela irá usar o EJS como view engine.
app.set("view engine", "ejs");
//Dentro de src cria uma pasta views, onde ficarão as views que o EJS vai procurar
app.set("views", "src/views");

//css
app.use(express.static(__dirname + "/public"));

//middleware é a maneira de fazer alguma coisa antes da requisição ser processada, a função acima e a de baixo são middleware.
//Esta middleware será execultada antes da requisição e recebe 3 parametros, o req, o res e o next. O next será responsável por não bloquear o express
app.use((req, res, next) => {
  //aqui pode passar qualquer coisa antes da requisição ser feita
  console.log(`Requisição do tipo: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Data: ${new Date()}`);
  console.log(req.body);

  next();
});

//endpoint para mostrar as views na tela
app.get("/views/users", async (req, res) => {
  //pegar os usuarios do mongoDB e renderizar no arquivo views.ejs passando o users como segundo parametro de render, assim, é possível ter acesso aos usuários dentro do arquivo
  const users = await UserModel.find({});
  res.render("index", { users });
});

//creiar um endpoint para PEGAR TODOS os usuários do mongoDB, configura o get dentro do postman
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//criar um endpoint para PEGAR UM usuário pelo ID salvo no mongodb, configura o post dentro do postman
//o ID deve ser recebido como parâmetro, dessa forma, dentro do app.get receber o id assim: "/users/:id". Assim, passando o valor do id depois de users/ no postman, retorna os dados do usuário.
app.get("/users/:id", async (req, res) => {
  try {
    // acessar o parametro
    const id = req.params.id;
    // pegar o usuario no banco
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//criar um endpoint para CRIAR um usuário, configura o post dentro do postman
app.post("/users", async (req, res) => {
  try {
    //o req.body será responsável por enviar o usuário para a aplicação, o async/await para usar com postman, pois o create é sincrono
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//EDITAR dados do usuário, pode usar o Put (atualiza todas as informações) e o Patch (atualiza algumas informações)
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //passa como parametro o ID que vai ser alterado, req.body disponibiliza os campos para serem alterados e o objeto com new: true retorna o resgistro atualizado
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//DELETAR usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log(`Servidor rodando com express na porta ${port}`)
);
