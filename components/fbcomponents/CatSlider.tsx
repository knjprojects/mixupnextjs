import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GetServerSideProps } from 'next';
import {client,urlFor} from '../../sanity'
import { ListItemSecondaryAction } from '@mui/material';
import CatCard from "../product/Cards/CatCard"
import type {Category} from "../../typings"
import Link from 'next/link'
import Image from 'next/image'
type Props={
    items:Category[]
}
const CatSlider = (props:Props) => {
    
    useEffect(()=>{

    }
    ,[
    ])
return (
    <div>
        <div>This is the catgeory slider</div>
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
>
</Swiper>
{
          props?.items?.map((item:Category)=>
            (
                item &&
                
                <div key={item.catId}>
                    <p className='text-black font-bold'></p>
                    one here</div>
    
                
                
            )
        )
     }
     {
                props?.items?.map((item:any)=>(
                <Link key={item.catId} href={`/nft/${item.slug.current}`}>
                <div key={item.catId} className='flex flex-col items-center cursor-pointer
                    transition-all duration-200 hover:scale-105'>
                        {item.imgUrl && <Image key={item.catId} className='h-96 w-68 rounded-2xl object-cover'
                    src={
                    urlFor(item.imgUrl).url()
                } alt="mainimage" height={60} width={50} />
                }
                <div className='p-5'>
                    {/*enlarge item card when hovering over it */}
                    <h2 key={item.catId} className='text-3xl'>
                        {item.title}

                    </h2>
                    <p key = {item.catId} className='mt-2 text-sm text-gray-400'>
                        {item.status}
                    </p>
                    <p>By </p>
                </div>
                </div></Link>
                
                ))})
</div>)
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    const query=`*[_type == "category"]{
        title,catId,status,imgUrl
      
      }`;
    const data:any=await client.fetch(query);
    

    return {
        props:{
            data
        }
    }
}
export default CatSlider