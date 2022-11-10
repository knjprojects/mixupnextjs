import React, { useEffect, useState,useRef } from 'react'
import { Collection } from '../typings'
import type { GetServerSideProps, NextPage } from 'next'
//important line above for server side rendering
import { client, urlFor } from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import WebFont from 'webfontloader';
import { use } from 'react'

'use client';
import { Inter } from '@next/font/google'
const inter = Inter()
type Props = {
    collections: Collection[]
}
/*export const GetData=async()=> {
      const query = `*[_type == "collection"]{
    title,address,description,slug{current},mainImage,
    creator->{name}
    }`
    const collections = await client.fetch(query);
    //console.log(collections);
    
        return (<div>
            {
                collections?.map((col: Collection) => {
                    return (
                        <><div key={col.id}></div></>);
                })} </div >
        )
    
}*/

const NFTCollections = (props: Props) => {
   
    //const data = await getData();
    

    useEffect(() => {
      WebFont.load({
    google: {
      families: ['Droid Sans', 'Chilanka']
    }
  });


    }, [])
    return (
        <div>
            <hr />
       
            <div className={inter.className}> <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                THE {' '}
                <span className='font-extrabold underline decoration-pink-400/50'>
                    SPACE BEFORE SPAN
                </span>{' '}
                NFT Market Place
            </h1></div>
           
            <main>
                <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
            bg-slate-100 p-10 shadow-xl shadow-rose-400/20'>
                    {
                        props?.collections?.map((collection => (
                            <Link key={collection.id} href={`/nft/${collection.slug.current}`}>
                                <div key={collection.id} className='flex flex-col items-center cursor-pointer
                    transition-all duration-200 hover:scale-105'>
                                    {collection.mainImage && <Image key={collection.id} className='h-96 w-68 rounded-2xl object-cover'
                                        src={
                                            urlFor(collection.mainImage).url()
                                        } alt="mainimage" height={60} width={50} />
                                    }
                                    <div className='p-5'>
                                        {/*enlarge item card when hovering over it */}
                                        <h2 key={collection.id} className='text-3xl'>
                                            {collection.title}

                                        </h2>
                                        <p key={collection.id} className='mt-2 text-sm text-gray-400'>
                                            {collection.description}
                                        </p>
                                        <p>By </p>
                                    </div>
                                </div></Link>

                        )))
                    }
                </div>
            </main>
            { /*gsap slider */}

        </div>
    )
}

export default NFTCollections
export const getServerSideProps: GetServerSideProps = async () => {//notice backtick and async
    const query = `*[_type == "collection"]{
    title,address,description,slug{current},mainImage,
    creator->{name}
    }`
    const collections = await client.fetch(query);
    console.log(collections);
    //below is how we return this data as a prop to our index home component before we get the page
    return {
        props: {
            collections
        }
    }
}
