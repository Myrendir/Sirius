import '../styles/globals.css'
import getPageContext from '../lib/getPageContext';
import App, {Container} from "next/app";
import Head from "next/head";
import React from "react";
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider} from '@material-ui/core/styles';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <>
        <Head>
          <title>Sirius</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </>
    )
  }

}

export default (MyApp)

