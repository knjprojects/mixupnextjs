import { GetServerSideProps } from 'next'
import React from 'react'
import {client,urlFor} from '../../sanity'
import CatSlider from './CatSlider'

type Props = {
    
}

const BakeryItems = ({bakeryCatData,bakeryItemData}:any) => {
    //add redux after this
    //i want to add gradiernt padding rounded 
  return (
    <div className='bg-gradient-to-br from-blue-600 to-purple-500 h-30 w-52 flex flex-col'>
        <div className='flex-grow flex'>
        <CatSlider items={bakeryCatData}/>
        <hr />
        <div className='my-2 p-3 border-2 border-black '>
          {/*  <SwiperCarousel items={bakeryItemData} itemsType='items'/>*/}
        </div>
        </div>
        <div className='flex-shrink hidden md:inline-'></div>
    </div>
  )
}
export const getServerSideProps:GetServerSideProps=async()=>{
  const catQuery=`*[_type == "category"]{
    title,catId,imgUrl,slug{current},mainImage
  }`;
  const bakeryQuery="";
  const bakeryCatData=await client.fetch(catQuery);
  const bakeryItemData=await client.fetch(bakeryQuery);
  return {
    props:{
      bakeryCatData,bakeryItemData
    }
  }
}
export default BakeryItems
