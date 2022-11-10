import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'
import SwiperCarousel from '../Swiper'
type Props = {}

const ServiceCard=(color:any,title:any,icon:any,subtitle:any)=>{
  return <div className='flex flx-row justify-start items-center white-glassmophism p-3 m-2 cursor-pointer hover:shadow-xl '>
    <div className={`w-10 h-10 rounded-full flex justify-center ${color}`}>
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='mt-2 text-white text-lg'>{title}</h1>
      <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div>
}

const Services = (props: Props) => {
  
  return (
    <div>
      <div className=' flex-col md:flex-row w-full flex justify-center items-center gradient-bg-services '>
        <div className='flex mf:flex-row flex-col justify-between md:p-200 py-12 px-4'>
          <div className='flex-1 flex flex-col justify-start items-start'>
            <h1 className='text-white text-lg sm:text-5xl'>Services that we <br/> continue to improve</h1>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-start items-center'>
         {/*<ServiceCard color='bg-[#2952e3]'
                      title={'Security Guaranteed'}
                      icon={<BsShieldFillCheck fontSize={20} className='text-white'
                      />} 
                      subtitle={'Security is guaranteed. We always maintain privacy and quality of our products'}
          />
           <ServiceCard color='bg-[#89845f8]'
                      title='Best Exchange Rates'
                      icon={<BiSearchAlt fontSize={20} className='text-white'
                      />
                    } subtitle='No exchange rates outside compare'
          />
           <ServiceCard color='bg-[#f84450]'
                      title='Fast transactions'
                      icon={<RiHeart2Fill fontSize={20} className='text-white'
                      />
                    } subtitle='Super fast transaction speeds'
          />*/}
        </div>
      </div>
      <SwiperCarousel items={[]} itemsType={''}/>
      </div>
  )
}

export default Services