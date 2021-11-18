import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { Provider } from "next-auth/react";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>

    /*<Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>*/
  )
}

export default MyApp;
