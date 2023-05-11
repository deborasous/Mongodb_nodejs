const fs = require("fs");
const path = require("path");

//CRIAR UMA PASTA
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error:", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

//DEPIS DA PASTA test CRIADA, CRIA DENTRO DELA UM ARQUIVO test.html
//colocar o appendFile e readFile dentro do writeFile(que é assincrono e por tanto não acontece de uma vez) para que sejam lidos somente depois que o arquivo estiver escrito
fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "Hello, node!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Arquivo criado com sucesso");


    //ADICIONAR CONTEUDO AO ARQUIVO test.html
    fs.appendFile(
      path.join(__dirname, "/test", "test.html"),
      " Estou aprendendo a Base do node",
      (error) => {
        if (error) {
          return console.log("Error:", error);
        }
        console.log("Conteúdo adicionado com sucesso");
      }
    );

    //LER ARQUIVO (lê o conteúdo de dentro do arquivo test.html)
    fs.readFile(
      path.join(__dirname, "/test", "test.html"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Error:", error);
        }
        console.log(data);
      }
    );
  }
);
