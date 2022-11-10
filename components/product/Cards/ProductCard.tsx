import React, { useState } from 'react'
import Image from 'next/image'
import {urlFor} from '../../../sanity'
//import Currency from 'react-currency-formatter'
/*import {StarIcon} from '@heroicons/react/solid'
import type 

const MAX_RATING=5;
const MIN_RATING=1; 
}*/

const ProductCard = (props:{id:string,iName:string, itemImg:string, ingredients:string[], iPrice:number,iTags:string[],desc:string,itemRestId:string}) => {
  const [rating]=useState (3)
  //Math.floor(Math.random() * MAX_RATING - MIN_RATING +1 )) +MIN_RATING
  //the above line will generate a random number between 1-5, use that as our rating for now 
  //2-5 being geenrated is what we can see, but math.random actually generates a number from 0 to 1
  const img:any= urlFor(props?.itemImg)!.url();
  let card:any = [];
  for (let i = 0; i < rating; i++) {
    card.push(
      <div className='text-red-500'>This</div>
    );
}
const [hasPrime]=useState(Math.random()<0.5)

//we determine the products has prime delivery based on its ratings
//<0.5 means rating 
return (
  <div className='flex-col m-5 bg-white z-30 p-10'>
      <div className='flex space-x-2 absolute top-2 right-2 text-xs italic text-gray-400'>
      </div>
      {// <Currency price ={props.iPrice} currency='GBP'/>
      }
        <Image src={img} width={200} height={100}  alt='image' objectFit='contain'/>{/*objectFit='contain'*/}
        <div className=''>
        {//
        
         // <rate/>
          //add rating icons here-amount asrating
        }      
      </div>
      <p className='my-3'>{props.iName}</p>
      <div className='mb-5'>
      {//<Currency price ={props.iPrice} currency='GBP'/>
}
      </div>
      <p className='text-xs my-2 line-clamp-2 text-red-500'>{props.desc}</p>
      {//line clam is useful for description to truncate extra space after text
            /*//below is how we check an if statement with true or false */
            //and then we show our component, we use the && symbol
        hasPrime && 
          <div className='flex items-center -mt-5 space-x-2'>
            <Image className='w-12' src='' alt='image' width={50} height={30}/>
            <p className='text-xs text-gray-500'>free next-day delivery </p>
          </div>
          }
          {/**adding our custom tailwind clasds button */}
        <button className='mt-auto button'>add to basket</button >
      
      
      
  </div> 
  )
}

export default ProductCard