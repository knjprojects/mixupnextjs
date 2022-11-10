import React from 'react'
import Link from 'next/link'
type Props = {}

//i can put this header injside my layout.tsx instead of index
const Header = (props: Props) => {
  return (
      <header className='sticky top-0'>
          <p className='p-5 bg-blue-500 text-white'>
        <Link href='/' className=' text-white'>Home</Link>
         <Link href='/spotify'  className=' text-white'>Spotify</Link>
          </p>
    </header>
  )
}

export default Header