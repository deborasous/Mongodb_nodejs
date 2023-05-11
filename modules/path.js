const path = require("path");

//Base Name
//ver o nome do arquivo
console.log(path.basename(__filename));

//nome do diretorio atual
console.log(path.dirname(__filename));

//pegar a extenção do arquivo
console.log(path.extname(__filename));

//criar objeto Path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));
