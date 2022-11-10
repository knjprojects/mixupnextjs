import React, { ReactNode } from 'react'
import '../styles/globals.css'

import Header from './Header'






import type { Session } from "next-auth"

import Home from './page';

/*
//beneft of using layout? lkets create a header component
export default function RootLayout({ children,session } : {children: React.ReactNode,session:Session }){
 

   
return (
           <html>
            <head></head>
    <body>
    
      <Header />
      <Home children={children} session={session} />
            {children}
            </body>
          </html>
      );
  
}

*/
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//instead of mainnet
//change goerli to mainnet when pyblishing app

//goerli,rinkeby, instead of mainnet
//change goerli to mainnet when pyblishing app
import { SessionProvider } from "next-auth/react"
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";

import { HelmetProvider } from 'react-helmet-async';
 export default function RootLayout({ children,session }: { children: React.ReactNode,session:Session }) {
  //const { store, props } = wrapper.useWrappedStore(children);
  //const emotionCache= props;
 // const helmetContext = {};//created so our helmet isnt accessed outside app


  
  return (<> 
  
           <html>
            <head></head>
    <body>
   
      <Header />
        <Home children={children} session={session} />
   
            {children}
            </body>
          </html>
    
    
    
    {/*<Provider store={store}>  
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <SessionProvider session={session} refetchInterval={0.65} >
          <HelmetProvider context={helmetContext}> <Component {...props} /></HelmetProvider>
      </SessionProvider>
    </ThirdwebProvider>
  </Provider>*/}
  
  
  </>);

}

//export default wrapper.withRedux(RootLayout);
