import React ,{useState}from 'react'
import {SocialIcon} from 'react-social-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UseAlan from '../hooks/AlanCat'
import { useEffect } from 'react'
import Link from 'next/link';
//import Blog from './Blog'
import {animate, motion} from 'framer-motion'
import LinksHeader from '../components/nav/TopLinks'
//import HeaderCommerce from '../components/shop/HeaderCommerce'
//import About from '../components/About'
//import Experience from '../components/Experience'
//import Commerce from './components/commerce/'
type Props = {}

const Port:NextPage = (props: Props) => {
  const navlinks=['Home', 'Destination,', 'BOOkings', 'Flights'];
  const [persons, setPersons] = useState<any[]>([])
  const ShowList=(products:any)=>{
    return (
      /*<ul role="list" className="p-6 divide-y divide-slate-200">

    <li className="flex py-4 first:pt-0 last:pb-0"/>
      <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-slate-900">{person.name}</p>
        <p className="text-sm text-slate-500 truncate">{person.email}</p>
      </div>
    </li>
  
</ul>*/
      persons.map((person:any) => (
        <div key={person.name}>
          {person.name} - {person.price} - {person.category}
        </div>
      ))
    )
  }

const renderNavLinks=(content:any)=>{
  return (//unoredered list the content by the contentcd port3 key
    <ul className='bg-green-100' key={content}>
      <li>
        <button  >{content}</button>
      </li>
    </ul>
  )
}
  
  return (
    // snap-start utility to snap an element to its start when being scrolled inside a snap container.
    //snap-center to snap to main component in view when scrolling
    <div className='welcome'>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    <section id="navbar" className=''/>
   
    <section id='hero' className='snap-start'>
      <div>
        <p> add Portfolio here</p>
        
      </div>
    </section>
    <section id='about' className='snap-center'>
      {/*<About/>*/}
    </section>
    <section id='experience' className='snap-center'>
      {/*<Experience/>*/}
    </section>
    
    </div>
      )
}
export default Port