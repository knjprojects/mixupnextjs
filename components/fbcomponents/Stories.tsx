import React from 'react'


import {BellIcon,
ChevronDownIcon,
HomeIcon,
ChatBubbleBottomCenterIcon,
ViewColumnsIcon,
FlagIcon,
PlayCircleIcon,
ShoppingCartIcon,
UserGroupIcon,
//notice the 24!!!!!!
} from '@heroicons/react/24/solid';

import {
PlayIcon,
MagnifyingGlassIcon,
//ShoppingCartIcon
} from "@heroicons/react/24/outline"
import HeaderIcon from '../mini/HeaderIcon'
import {signIn} from 'next-auth/react'
import Login from './Login'
import { Loader } from '../Index';
import { signOut, useSession } from 'next-auth/react';
import {Story} from "../../typings"
import StoryCard from './StoryCard';
type Props = {
    stories:Story[]
}
const Stories = (props: Props) => {
    const session=useSession();
    // if(!session return <login>)
     const User=session.data?.user;//this is the session data
    // const isAuthenticated=session.status;//are we even authenticated tho?
  return (
    <div
      className='flex justify-center space-x-2 mx-auto max-w-md
      '>
      <div className="items-center">

        Stories
      </div>
          {
            props.stories?.map((story:Story)=>{
                return (<StoryCard key={story?.name} story={story}/>);
            })
          }
        </div>
  )
}

export default Stories