import 'raf/polyfill'
import 'setimmediate'

import { Provider } from '@acme/app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import { AppType } from 'next/dist/shared/lib/utils'
import { api } from '../utils/api'

const MyApp: AppType =({ Component, pageProps }: SolitoAppProps)=>{
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default api.withTRPC(MyApp)