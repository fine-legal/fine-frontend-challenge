import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeStore } from '../stores/themeStore';
import RootLayout from '@/layout/layout';
import dynamic from 'next/dynamic';

const App = ({ Component, pageProps }: AppProps) => {

  const themeStore = useThemeStore();
  
  return (
    <>
      <ThemeProvider theme={themeStore.materialTheme}>
        <CssBaseline />
        <Head>
          <title>Fine Volders Frontend Assessment</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
};


export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
