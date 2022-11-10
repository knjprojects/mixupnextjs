import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { SiEthereum, SiSalesforce} from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import Link from 'next/link'
import logo from '../images/logo.png'
type Props = {}



//nullable props 
const NavBarItem = (props:{title:string, classProps?:any}) => {
  return (
    //below is string interpolation
    <li className={`mx-4 cursor-pointer ${props.classProps}`}>
      {props.title}
    </li>
  )
}


const NavBar = (props: Props) => {
  const [toggle, setToggle]=useState(false)
  return (

  <nav className='w-full flex md:justify-center justify-start'>
    <div className='md:flex-[0.5] flex-initial justify-center items-center'>
      <img src={logo.toString()} alt="logo" className='w-32 cursor-pointer ' />
    </div>
    <ul className='md:flex flex-initial flex-row text-white justify-center items-center hidden list-none'>
      {//mapping our navbar items here
        ['Market', 'Sale','Extras', 'Deals'].map((nav, index)=>{
          return (
          <NavBarItem key={nav+index} title={nav} />
          )
          ;
        })
      }
     
      <li className='text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]bg-[#29523e] hover:text-black'>
        Login 
      </li>
      <div className='relative flex'>
        { 
          toggle?<AiOutlineClose fontSize={30} className='md:hidden text-white cursor-pointer' onClick={()=>setToggle(false)} />
          :<BsInfoCircle fontSize={30} className='md:hidden text-white cursor-pointer' onClick={()=>setToggle(true)} />
        }
        {//our component takes in css props
          toggle && (
            <ul className='z-1 fixed top-0 -right-2 p-3 w-[70vw] shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end rounded-md text-white animate-slide-in'>{/*blue-glassmorphism */}
              <li className='text-xl my-2 w-full'>
                <AiOutlineClose onClick={()=>setToggle(false)}/>
              </li>
            {//mapping our navbar items here
              ['Market', 'Sale','Extras', 'Deals'].map((nav, index)=>{
              return (
                <NavBarItem key={nav+index} title={nav} classProps='text-lg my-2' />
                );
              })
            }
          </ul>
          )
        }
      </div>
    </ul>
  </nav>);
}

export default NavBar