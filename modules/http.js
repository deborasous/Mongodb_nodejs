const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    //diz qual o tipo de conteúdo e arquivo está sendo enviado
    res.writeHead(200, { "Content-Type": "text/html" });
    //imprime "Home Page" no navegador
    res.end("<h1>Home Page</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Debora Sousa",
        email: "dsous@gmail.com",
      },
      {
        name: "Patricia Fagundes",
        email: "fagundesp@gmail.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    //imprime na porta http://localhost:8080/users um array de objetos
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
