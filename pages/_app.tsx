import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//instead of mainnet
//change goerli to mainnet when pyblishing app

//goerli,rinkeby, instead of mainnet
//change goerli to mainnet when pyblishing app
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";

import { HelmetProvider } from 'react-helmet-async';
function MyApp({ Component,pageProps:{ session, ...pageProps } }: AppProps<{ session: Session }>) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  //const emotionCache= props;
  const helmetContext = {};//created so our helmet isnt accessed outside app


  
  return (<> 
  {<Provider store={store}>  
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <SessionProvider session={session} refetchInterval={0.65} >
          <HelmetProvider context={helmetContext}> <Component {...props} /></HelmetProvider>
      </SessionProvider>
    </ThirdwebProvider>
    </Provider>}
  
  
  </>);

}

export default wrapper.withRedux(MyApp);
