import React, {useState} from 'react'
import Image from 'next/image'
import {urlFor} from '../../../sanity'
type Props = {}

const ProdCarousel = ({items}:any) => {
    const [currentIndex,setIndex]= useState(0)
    const handleNextclick=()=>{
        setIndex(currentIndex+1);
    }
    const handlePrevclick=()=>{
        setIndex(currentIndex-1);
    }
return (
    <div className="text-black bg-white">
        <h4>This is the carousel products</h4>
        <div className='bg-white'>
            
            {items[currentIndex] && <Image key={currentIndex} src={urlFor(items[currentIndex]?.itemImg)?.url()} width={120} height={50} alt='image'/>}
            
            
                {items[currentIndex] && <h4 className='text-red-500 font-sans'>{items[currentIndex]?.title}
            </h4>}
        </div>
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

export default ProdCarousel