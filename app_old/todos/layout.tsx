import React, { ReactNode } from 'react'
import TodosList from './TodosList'

type Props = {}
//beneft of using layout? lkets create a header component
export default function MyLayout({ children }: {children:React.ReactNode}) {
  return (
      <main>
          <div>
              { /*@ts-ignore */}
              <TodosList />
          </div>
          <div className='flex-1'>{children}</div>
      </main>
  )
}

