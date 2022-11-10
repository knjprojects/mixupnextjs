import React from 'react'
import { Stack } from '@mui/material'
import Link from 'next/link'
import { logo } from '../../utils/constants'
import SearchBar from './SearchBar'
import Image from 'next/image'
type Props = {}

const NavBar = (props: Props) => (
    <Stack direction='row' alignItems='center' p={1}
        sx={{
            position: 'sticky',
            background: '#000',
            height:75,
            top:0,
            justifyContent: 'space-between'
        }}>
        <Link href='/'
            className='flex items-center ml-6'>
            <Image src={logo} alt="logo" fill={false} width={ 30} height={30} />
        </Link>
        <div className='flex flex-row space-x-4'>
            <Link className='bg-white text-black rounded-full' href='/Social'><h1  className='mx-2'>GO TO OUR SOCIAL SITE</h1>
          </Link>
          <Link className='bg-white text-black rounded-full' href='/Blog'><h1 className='mx-2'>GO TO MY BLOG</h1>
          </Link>
          <Link className='bg-white text-black rounded-full' href='/tube/Feed'><h1 className='mx-2'>Videos</h1>
          </Link>
          <Link className='bg-white text-black rounded-full' href='/tube/video/1'><h1 className='mx-2'>GO TO Video Details</h1>
          </Link>
        </div>
        
        <SearchBar />
   </Stack>
  )


export default NavBar