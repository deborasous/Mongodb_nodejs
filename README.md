### Nodemon

Reinicia o servidor automaticamente sempre que houver uma modificação.

### Mongodb

```
npm install mongodb
```

### Mongoose

```
npm i mongoose
```

### dotenv

```
npm i dotenv
```

conecta e interage com o banco

 <!-- https://www.youtube.com/watch?v=IOfDoyP1Aq0 -->

### Acesso ao banco

Depois de tudo Instalado, Configurado: no .env, e
Criado o cluster no mongoDB

#### Hora de codar:

- Usando o mongoose para agilizar o acesso ao mongoDB, no arquivo connect.js criar a função connectToDataBase, responsável por autenticar e acessar o banco.
- No index.js fazer a requisição do dotenv e connectToDataBase, passar o dotenv.config(); e depois o connectToDataBase();

Dessa forma, deve funcionar.

### Postman

Baixar o Postman, que vai fazer requisições de API para qualquer API HTTP

### EJS

```
npm install ejs

```
É usado junto com o express, por isso, deve ser configurado dentro do arquivo express.js. 
É uma linguagem de modelagem simples, que permite gerar marcação em HTML com js simples.