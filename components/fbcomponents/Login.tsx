import React from 'react'
import Image from 'next/image'
import {signIn,useSession,signOut} from 'next-auth/react'
type Props = {}

const Login = (props: Props) => {
    //add code here
    //always use callback function with onclick
    const myIconsLinks=[
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg'];
return (
    <div className='place-items-center grid'>
        <h1>Your session has been logged out</h1>
        {/*
        mapping our providers icons here with the singular signInproviderBuiltInScreen
         */
        myIconsLinks.map((link)=>{
            return (
                <div key={link}>
                    <Image src={link}
                    height={400} width={400}
                    objectFit='contain'
                    layout='fill'

                        alt='link'


                    />
                    <div className='flex'>
                    <h1 onClick={()=>signIn()} className='mt-10 text-white text-center p-5 bg-blue-400 rounded-full cursor-pointer'>Login/Refresh</h1>
                    <h1 onClick={()=>signOut()} className='mt-10 text-white text-center p-5 bg-blue-400 rounded-full cursor-pointer'>SignOut</h1>
                    </div>
                </div>
                
            )
            ;
         })}
      
        
    </div>
    )
}

export default Login
