import React, { useState } from 'react'
import Image from 'next/image'
import {urlFor} from '../../../sanity'
/*import {StarIcon} from '@heroicons/react/solid'


const MAX_RATING=5;
const MIN_RATING=1; 
}*/

const CatCard = (props:{id:string,imgUrl:string,title:string,status:string/*category:string, price:number,description:string*/}) => {

  //Math.floor(Math.random() * MAX_RATING - MIN_RATING +1 )) +MIN_RATING
  //the above line will generate a random number between 1-5, use that as our rating for now 
  //2-5 being geenrated is what we can see, but math.random actually generates a number from 0 to 1
  const img = urlFor(props?.imgUrl).url();

const [hasPrime]=useState(Math.random()<0.5)

//we determine the products has prime delivery based on its ratings
//<0.5 means rating 
return (
    <div className='bg-white w-full h-full text-black'>
        <p>hhhhehheh</p>
        <div className='text-black flex space-x-2'>
            <h4 className=''>{props.status}</h4>
            <h4 className=''>{props.title}</h4>
        </div>
        <Image src={img} width={120} height={70}  alt='image' objectFit='contain'/>{/*objectFit='contain'*/}
        <div className='text-red-5-- bg-white'>
        {//
        }

    
            {
            /*//below is how we check an if statement with true or false */
            //and then we show our component, we use the && symbol
            hasPrime && <p>Prime is true</p>
            }
        </div>
    </div> 
    )
}


export default CatCard