 import React, { ReactNode } from 'react'

import Search from './Search'
type Props = {}
//beneft of using layout? lkets create a header component
export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
      <main className='flex space-x-4 p-5 divide-x-2'>
          <div>
              <h1>Search</h1>
          </div>
          <div>
              <Search />
              <div className='flex-1'>{children}</div>
          </div>
      
      </main>
  )
}

