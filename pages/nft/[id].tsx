import React from 'react'
import { GetServerSideProps } from 'next';
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import {client, urlFor } from '../../sanity'
 import {Collection} from '../../typings'
type Props = {
  collection:any
}
//from desktop mode left and right to one column mobile mode
//we see desktop mode as 10- columns,
//lets make the left side take up 4 columns on desktop 
//else change layout to row with just flex(row default)
//flex flex-col lg:grid lg:grid-cols-10    
//grid with 10 columns when its a large screen
//lg:col-span-4 for the inner div we want on left side
//flex flex-1 flex-col lg:col-span-6 for the inner right side div
//specify how much 
//spans need {' '} when using with underline 
//else underline will
//bigger padding, bigger text when changing mobile to desktop, use for buttons and images and descriptions
//px-4 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base
//lg:space-y-0 lg:justify-center
//making content on a 'mobile' column more spaced out than on a desktop, but still being able to center the right side
//
import {
  useContract,
  useNFTs,
  ThirdwebNftMedia,
  useContractRead,
  useContractWrite,
  Web3Button,useMetamask
} from "@thirdweb-dev/react";

const NftDropPage = (props: Props) => {

  //AUTH
  const connectWithMetamask =useMetamask();
 //<ConnectWallet />
  const address = useAddress();
  console.log(address);
  const disconnect =useDisconnect();

  return (
    //how to tell children to use up a certain amount of columns
    //
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>  
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
              <div className='bg-gradient-to-br from-orange-300 to-red-400 p-2 rounded-xl h-32 w-24'>
                {props.collection?.mainImage && <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                src={urlFor(props?.collection?.mainImage).url()} alt="ape pic" height={100} width={100} />
                }
              </div>
              <div className='text-center ps-5 space-y-2'>
                <h1 className='text-4xl font-bold text-whit'>{props.collection?.nftCollectionName }</h1>
                <h2 className='text-gray-300 text-xl'>{props.collection?.description }</h2>
                <h2 className='text-gray-300 text-xl'>{props.collection?.address }</h2>
            </div>
        </div>
    </div>
    <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
      {/*Head */}
      <header className='flex items-center justify-between '>
        <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
          THE {' '}
          <span className='font-extrabold underline decoration-pink-400/50'> 
          SPACE BEFORE SPAN 
          </span>{' '}
          NFT Market Place
        </h1>
        <button onClick={()=>address?disconnect():connectWithMetamask}
          className='rounded-full bg-rose-400
        px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base'>

        {address?'Sign Out':'Sign In'}</button>
      </header>
      {/*add a long horizontal line across the screen, used to spearate sections*/}
      <hr className='my-2 border '/>
      {address &&
        (<p className='text-center text-sm text-rose-400'>You're logged in with wallet {address.substring(0,5)}... {address.substring(address.length-5,address.length)}</p>)
      }
      {/*content */}
      <div className='mt-10 flex flex-1 flex-col items-center space-y-6
                      text-center lg:space-y-0 lg:justify-center'>
       {/*} <img className='w-80 object-cover pb-10 lg:h-40'
        src={urlFor(props.collection?.mainImage).url()} alt="" />*/}
        <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>NFT Drop Site Built With ReactJS, Sanity and Blockchain Technology</h1>
        <p className='text-green-500 pt2 t\text-xl '>3/21 NFT claimed</p>
      </div>

      {/* Mint */}
      <button className='mt-10 h-16 w-full bg-red-500 text-white rounded-full'>
        Mint NFT(0.001 Eth)
      </button>
    </div>
  </div>


    
  )
}

export default NftDropPage
//now we destructure our parameters before running serverside ncode
export const getServerSideProps:GetServerSideProps=async(
  {params}
)=>{
  const query=`*[_type == "collection" && slug.current == $id][0]{
    title,address,description,slug{current},mainImage,
  creator->{name}
  }`
  const collection=await client.fetch(query,{
    id:params?.id
  });
  if(!collection){
    return {//return a 404 page not found
      notFound:true 
    }
  }

  return {
    props:{
      collection
    }
  }
}