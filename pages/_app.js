import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { Provider } from "next-auth/react";
import { RecoilRoot } from 'recoil';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
      <Component {...pageProps}/>
      </RecoilRoot>
    </SessionProvider>

    /*<Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>*/
  )
}

export default MyApp;
