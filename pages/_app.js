import { Provider } from 'react-redux';
import { store } from '../store/store';
import Head from 'next/head';
import Router from 'next/router';
import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import '../scss/home.css'

function App({
  Component, pageProps,
}) {
  return (
    <Provider store={store}>
      <Head>
        <meta data-n-head="ssr" charSet="utf-8" />
        <meta data-n-head="ssr" name="format-detection" content="telephone=no" />
        <meta data-n-head="ssr" charSet="utf-8" />
        <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta data-n-head="ssr" data-hid="i18n-og" property="og:locale" content="en" />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index,follow" />
        <meta data-n-head="ssr" data-hid="og:type" name="og:type" content="website" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="index,follow" />
        <link async href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"></link>
        <link async data-n-head="ssr" rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300&display=swap"></link>
        <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link async href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;800;900&display=swap" rel="stylesheet"></link>
        <link async href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link async href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
