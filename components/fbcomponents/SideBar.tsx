import React from 'react'
import Image from 'next/image'

import {
    ChevronDownIcon,
    UserGroupIcon,
    ShoppingCartIcon
}
from "@heroicons/react/24/solid";
import SideBarWidgetIcon from './SideBarWidgetIcon'
import SideBarWidgetIconText from './SideBarWidgetIcon';
//import {Session} from 'next-auth'
type Props = {}
import { signOut, useSession } from 'next-auth/react';

const SideBar = (props: Props) => {
    const session=useSession();
    // if(!session return <login>)
     const User=session.data?.user;//this is the session data
    // const isAuthenticated=session.status;//are we even authenticated tho?
     



    const sesh=useSession();
    //const session=sesh.data;
   //const isLoading=sesh.status;
    const mySideWidgets=[{'icon':UserGroupIcon,'name':'Friends'},
    {'name':'Market','icon':ShoppingCartIcon},
   ]
return (
    <div className='sidebar'
    >
        {User &&

        <Image className='sidebarwidget' onClick={()=>{}} src={User.image!} alt='User Image here'



                width={40} height={50}/>
            }
        {
            mySideWidgets.map((widget:any)=>{
                return (
                    widget && 
                    
                        <SideBarWidgetIconText key={widget.name} Icon={widget.icon} title={widget.name}/>
                   
                );
            })
            
        }
          <SideBarWidgetIconText  Icon={ChevronDownIcon} title="See More" />
     
    </div>
)
}

export default SideBar
