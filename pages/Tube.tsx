import React from 'react'

type Props = {}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '@fontsource/roboto';
import  Box  from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from "@material-ui/icons//Delete";
import SendIcon from "@material-ui/icons//Send";
import { bgcolor } from '@mui/system';
import NavBar from '../components/tube/NavBar';
const Tube = (props: Props) => {
  return (
  
    <div className="flex flex-col">s
      <Head>
        <title>Youtube clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-12 bg-black'>
      <NavBar />
        
      </div>
    
    
       
       
      

     
    </div>


  )
}

export default Tube