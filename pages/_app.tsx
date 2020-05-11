import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Head from "next/head";
import { initGA, logPageView } from "../utils/analytics";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}
export default class MyApp extends App {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Sam Reis - Desenvolvedor web</title>

          <meta
            name="description"
            content="Seja bem vindo ao meu portfolio / curriculo online. Fique a vontade para ver minhas skills e projetos que participo atualmente."
          />
          <meta
            name="keywords"
            content="portfolio,desenvolvedor,web,designer,desenvolvimento"
          />
          <meta name="robots" content="index," />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
