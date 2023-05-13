import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        {/* main carrega a pagina index, que renderiza o conteúdo*/}
        <NextScript />
      </body>
    </Html>
  );
}
