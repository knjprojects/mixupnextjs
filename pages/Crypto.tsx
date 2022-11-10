import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {NavBar, Transactions, WelcomeWallet, Services, Loader,} from '../components/Index'
import type { GetServerSideProps, NextPage } from 'next'
//important line above for server side rendering
import {client,urlFor} from '../sanity'

import {Collection} from '../typings'

type Props={
  collections:Collection[]
}
const Crypto = (props: Props) => {
  return (
    <div className='min-h-screen flex-col items-center my-2 bg-gradient-to-br from-blue-500 to-purple-800'>
      <div className='flex-1'>
        <NavBar/>
        <div className='flex-col grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
          ><WelcomeWallet/></div>
        <h2>
          <Link href="/">Back to home</Link>
          
        </h2>
    </div>
      
    </div>
  )
}

export default Crypto
//reminder, every fielda dded to sanity must be updated in the serversideproops

  