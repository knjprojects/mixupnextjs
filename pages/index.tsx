import type { GetServerSideProps, NextPage } from 'next'
//important line above for server side rendering
////import {client,urlFor} from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import NftDropPage from './nft/[id]'
import {Collection} from '../typings'
import Link from 'next/link'
import React, {useCallback} from "react"
type Props={
  collections:Collection[]
}

import { setAuthState } from "../redux/features/authSlice";
import { selectAuthState} from '../redux/store'
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from '../redux/store'
//removing the :NextPage definition for home allows us to define our own props for our server side rendering
const Landing = (props:Props) => {
 // const navlinks=['Facebook', 'Destination,', 'BOOkings', 'Flights'];
  //below we setup our contract with our addrress, no context needed, because we're alreadybwrapping our app with thirdweb
  //const { contract } = useContract("<CONTRACT_ADDRESS>");
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (//px-10 py-20 max-w-7xl mx-auto 2xl:px-0 flex min-h-screen flex-col items-center justify-center
    <div className="px-10 py-20 max-w-7xl mx-auto 2xl:px-0 flex min-h-screen flex-col items-center justify-center
    bg-gradient-to-tr from-red-500 to-orange-400 via-yellow-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{authState ? "Logged in: Response from Redux" : "Not Logged In. Use Redux and set login to true"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
      <Link href={'/Facebook'} >
        Facebook</Link>   
        <Link href={'/Crypto'} >
        Send Crypto </Link>     
        <Link href={'/Shop'} >
        Shop </Link>   
        <Link href={'/Port'} >
        Portfolio </Link>
        <Link href={'/Blog'} >
        Blog </Link>
        <Link href={'/NFTCollections'} >
        NFT Collections </Link>
        <Link href={'/Bg'} >
       3d Wallpaper is down for now </Link>
        <Link href={'/ThreeJS'} >
       3d canvas </Link>
       <Link href={'/Maps'} >
        Maps</Link>
       <Link href={'/Scrape'} >
        Scrape</Link>
       <Link href={{pathname:"/Form",query: {
            id:'id1',// episode.itunes.episode,
            type: 'physician',//episode.title
        }}} >
        Caspio Form</Link>
       <Link href={'/Spotify'} >
        Spotify</Link>
       <Link href={'/Tube'} >
        Youtube</Link>
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      store.dispatch(setAuthState(false)); 
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);
export default Landing
