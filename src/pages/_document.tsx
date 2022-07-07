import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheets } from "@mui/material";

export default class MyDocument extends Document {
  // funcão statica e assincrona, getInitialProps server para definir as propriedades iniciais
  // que esse componente vai receber
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets(),
      originalRenderPage = ctx.renderPage;
  }

  // como esse é um elemento feito por uma Classe e não por uma função precisa usar o render()
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
