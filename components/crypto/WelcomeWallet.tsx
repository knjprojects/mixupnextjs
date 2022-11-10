import React,{useContext} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { SiEthereum, SiSalesforce} from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

//import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../../utils/shortenAddress';

import {Loader} from '../Index';
type Props = {}
const commonStyles='flex justify-center items-center border-[0.5px] border-gray-400 text-white w-full min-h-[90px] px-2 sm:px-0 sm:min-w-[120px]'
const Input=(placeholder:{holder:any,name:any,type:any,value?:any,/*handleChange:any*/})=>(
  <input placeholder={placeholder.holder}
  type={placeholder.type}
  step="0.0001"
  value={placeholder.value!}
  //onChange={(e)=>placeholder.handleChange(e,name)}
  className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmophism'
  />
)

const Welcome = (props: Props) => {
    const constan=true;
  //const {connectWallet,currentAccount,formData,handleChange,isLoading}=useContext(TransactionContext);
  //console.log(connectWallet); 
  //const {addressTo, amount, keyword,message,sendTransaction}=formData;
  //add cionnectWallet to onclick if fixed
  const handleSubmit=(e:any)=>{
    //detructured the formdata variables and components
    //const {addressTo, amount, keyword,message,sendTransaction}=formData;
    e.preventDefault();
    //if no values in variable do nothing onSubmit
   /* if(!addressTo ||!keyword || !amount || !message) return;
    sendTransaction();*/
}
  //why is text-base so powerful?
  //notice our custom tailwind screen size mf declared intailwind.config
return (
    <div className='lg:flex w-full justify-center items-center flex-col'>
        <div className='flex md:p-20 mf:flex-row flex-col items-start justify-between py-12 px-4'>
            <div className='flex flex-1 flex-col justify-start mf:mr-10'>
                <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>Send crypto <br /> across the world</h1>
                <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>Explore the crypto world</p>
                    {/*!currentAccount*/true &&
                <button type="button" className='flex-row flex justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover: bg-[#25464bd]'>
                    <p className='text-white text-base font-semibold'>Connect Wallet</p>
                </button>}
                <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                    <div className={`rounded-tl-2xl ${commonStyles}`}>
                        Reliability
                    </div>
                    <div className={commonStyles}>
                        Security
                    </div>
                    <div className={`rounded-tr-2xl ${commonStyles}`}>
                        Ethereum
                    </div>
                    <div className={`rounded-bl-2xl ${commonStyles}`}>
                        Web 3.0
                    </div>
                    <div className={commonStyles}>
                        Low Fees
                    </div>
                    <div className={`rounded-br-2xl ${commonStyles}`}>
                        Blockchain
                    </div>
                </div>
          
        </div> 
        {
          //this is the right side
          <div className='flex flex-col justify-start items-center mf:mt-0 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl sm:w-80 h-40 my-4 w-44'>{/*eth-card white-glassmorphism */}
              <div className='flex justify-between flex-col w-full h-full'>
                  <div className='flex justify-between items-start'>
                      <div className='w-10 h-10 rounded-full border-2 border-white flex justify-items-center items-center'>
                          <SiEthereum className='' fontSize={21} color='#fff'/>
                      </div>
                      <BsInfoCircle className='' fontSize={21} color='#fff'/>
                  </div>
                  <div>
                      <p className='text-white font-light text-sm'>
                      {shortenAddress("currentaccount here")}{/* add back currentAccount*/}
                      </p> 
                      <p className='text-white font-semibold text-lg mt-1'>
                      Ethereum
                      </p>
                  </div>
              </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center'>{/*add blue-glassmorphism */}
              <Input holder='Address To' name='addressTo' type='text' />{/*add back handle change */}
              <Input holder='Amount(ETH)' name='amount' type='number' />
              <Input holder='Password(Gif)' name='key' type='text' />
              <Input holder='Enter Message' name='message' type='text' />
          <div className='h-[1px] w-full bg-gray-400 my-2'>

          {
              constan?(
              <Loader/>
              ):(
                  <button
                  type='button'
                  onClick={handleSubmit}
                  className='w-full mt-2 text-white border-[1px] p-2 border-[#3d4f7c] cursor-pointer rounded-full'
                  >
                      Send now
                  </button>
                  )
                  }
          
              </div>
          </div>
          </div>
      
        }
        
    </div>
</div>
    )
}

export default Welcome