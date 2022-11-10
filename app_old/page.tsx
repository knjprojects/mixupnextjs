import React from 'react'


import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
'use client'
//instead of mainnet
//change goerli to mainnet when pyblishing app

//goerli,rinkeby, instead of mainnet
//change goerli to mainnet when pyblishing app
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
type Props = {
  children: any
  session:Session
}
const Home = (data: Props) => {//our page / tsx file conflicts with 
    //pages/index.tsx
    //deleting index.tsx autinatically creates our app/layout.tsx file!
    //import your global styles for tailwind in the layout.tsx page
   //const { store, props } = wrapper.useWrappedStore(data.children);
  //const emotionCache= props;
  //const helmetContext = {};//created so our helmet isnt accessed outside app


  return (
    <div>
     </div>
    
  )}
  
  



export default Home