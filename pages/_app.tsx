import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const queryClient = new QueryClient();

function MyApp({ Component,pageProps}: AppProps){
  return(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp;