import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.css';
import { Nav } from '@chaosreactor/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Welcome to Voxable!</title>
      </Head>
      <main className="app" {...pageProps}>
        <Nav title="Voxable">
          <Component {...pageProps} />
        </Nav>
      </main>
    </ApolloProvider>
  );
}

export default CustomApp;
