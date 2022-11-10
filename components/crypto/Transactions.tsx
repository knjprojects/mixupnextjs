import React,{useContext} from 'react'
//import {TransactionContext} from '../context/TransactionContext';
import dummyData from '../../utils/dummyData'
import {shortenAddress} from '../../utils/shortenAddress'



import useFetch from '../../hooks/FetchGifs'
type Props = {
  addressTo:any,addressFrom:any, amount:any,message:any,keyword:any,timeStamp:any,url:any
}
const TransactionCard = (props:Props) => {
  //to get data, we delare a variable that stores a component that gets the data.(a hook)
  const gifUrl:any=useFetch(props.keyword);

  return (
    <div className='bg-[#181918 m-4 flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl
      '>
        <div className='flex flex-col items-center w-full mt-3'>
          <div className='w-full mb-6 p-2'>
            <a href={`https://goerli.etherscan.io/address/${props.addressFrom}`}
              target="_blank" rel="noopener noreferrer" 
            >
                <p className='text-white text-base '>From: {shortenAddress(props.addressFrom)}</p>
              </a>
              <a href={`https://goerli.etherscan.io/address/${props.addressTo}`}
              target="_blank" rel="noopener noreferrer" 
            >
                <p className='text-white text-base '>To: {shortenAddress(props.addressTo)}</p>
              </a>{/*rel is important when using target property */}
              <p className='text-white text-base'>Amount: {props.amount} Ethereum </p>
              {
                props.message && (
                  <>
                  <br/>
                  <p className='text-white text-base'>Message: {props.message}</p>
                  </>
                )
              }
              
          </div>
          <img src={gifUrl || props.url}  alt='gif' className='w-full h-64 2x:h-96 rounded-md shadow-lg object-cover'/>
              <div className='bg-black p-3 px-5 rounded-3xl -mt-5 shadow:2xl'>
                <p className='text-[#37c7da] font-bold'>{props.timeStamp}</p>
              </div>
        </div>
      </div>
  )
}
const Transactions = (transactions:any) => {

  //every cvariable we are trying to read from ceontext needs tpo be passed to context
  //const {currentAccount,transactions} =useContext(TransactionContext);
  return (
    <div className='flex w-full justify-center items-center 2xl:p-20 gradient-bg-transactions'> 
    <div className='flex flex-col md:p-12 puy-12 px-4'>
      {/*latest transactions,
      connect account to see latest transactions
       */
      }{
        /*currentAccount?*/true?(
          <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
        ):(
          <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the latest changes</h3>
        )
      }
      <div className='flex flex-wrap justify-center items-center mt-10'>
        {//easiest way to map array to component using {...}
          transactions.map((trans:any)=>{
          return(
            <TransactionCard 
            key = {trans.keyword} 
            {...trans}
           />
          )
          }
         )}

      </div>
    </div>
    </div>
  )
}

export default Transactions