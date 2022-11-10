
import { SocialIcon } from 'react-social-icons'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Link from 'next/link';
import React, {useState} from 'react'
import {animate, motion} from 'framer-motion'//children cannot be divs, motion.div is its own div
type Props = {}//created typescript var with tsar

const TopLinks = (props: Props) => {
  const links=['https://twitter.com/jaketrent',
  'https://www.facebook.com/profile.php?id=100083774604944',
  'https://github.com/knjprojects',
  
]
return (
    /*stick top-0 makes the div stick to the top of the page */
    <header className="topLinks">
        <motion.div initial={{x:-500,opacity:1.0,scale:0.5} } animate={{x:0,opacity:1.0,scale:1.0}} 
        transition={{duration:1.5}} 
        className='flex-row items-center my-2 px-2'
        >
        <SocialIcon url="https://twitter.com/jaketrent" fgColor='green' bgColor='red' />
            <SocialIcon url="https://twitter.com/jaketrent" fgColor='green' bgColor='red' />
            <SocialIcon url="https://twitter.com/jaketrent" fgColor='green' bgColor='red' />
            <SocialIcon url="https://twitter.com/jaketrent" fgColor='green' bgColor='red' />
</motion.div>
    <div className='flex flex-row items-center text-gray-400 cursor-pointer'>
        <SocialIcon className="cursor-pointer" network='email' fgColor='gray' bgColor='transparent' />
        {/*css will come into play at breakpoint depedning on size of screen */}
        <p className='uppercase hidden md:inline-flex text-gray-400 text-xs'>Email Me</p>
    
    </div> 
    <div className=''></div>
</header>
)
}
export default TopLinks
/*
 

 <header className='p-5 xl:items-center bg-yellow-100 container ease-in sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 text-center text-blue-400 '>

        <motion.div initial={{x:-500,opacity:1.0,scale:0.5} } animate={{x:0,opacity:1.0,scale:1.0}} 
        transition={{duration:1.5}} 
        className='flex-row items-center my-2 px-2'
        >
         
 </motion.div>
 <nav>
   {
         renderNavLinks(navlinks)
   }
 </nav>
 <h1 className="title">Visit 
   <Link className='bg-yellow-200' href="/Blog">this page!</Link>
 </h1>
</header>
 */