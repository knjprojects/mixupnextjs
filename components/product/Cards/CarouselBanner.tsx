import React, {useState} from 'react'
import Image from 'next/image'
import {urlFor} from '../../../sanity'
type Props = {}

const CarouselBanner = (banners:any[]) => {
    const [currentIndex,setIndex]= useState(0)
    const handleNextclick=()=>{
        setIndex(currentIndex+1);
    }
    const handlePrevclick=()=>{
        setIndex(currentIndex-1);
    }
return (
    <div className="bg-white bannerPassion"> 
    <p>banners start heres</p>
        <div className='bg-white'>
           
           {/*banners &&  <img src={urlFor(banners[currentIndex]?.imgUrl)!.url()} width={200} height={100} alt='image'/>
*/}
            {banners[currentIndex] &&
             <h4>{banners[currentIndex]?.title}</h4>
            }
        
        </div>
        {
            banners?.map((banner:any)=>(
                <div className='text-red-500' key={banner?.catId}>{banner?.catId}</div>
            ))

        }
        {banners && <p>bro its not empty</p>}
        {     
            <p>{banners[0] && banners[0]?.catId}</p>
            
        }
        <div className='bg-white text-black absolute w-full top-1/2 transform translate-y-1/2 px-3 flex justify-between items-center'>
            <button onClick={handlePrevclick}>
            Prev
            </button>
            
            <button onClick={handleNextclick}>
                Next 
            </button>
        </div>
    </div>
)
}

export default CarouselBanner