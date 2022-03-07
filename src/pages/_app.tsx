import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '@/layout/Default'
import store from '@/store'

function AirWebsite({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default AirWebsite
