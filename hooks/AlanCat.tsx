
import React, { useEffect,useState, } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import {client} from'../sanity';
import { urlFor } from '../sanity';

type Props = {}

const AlanCat = (props: Props) => {
  const [cats, setCats]=useState([]); 
  useEffect(()=>{
          const query='*[_type == "category"]';//stored the query, this is the collectionyou createdwith sanity ui
      //const fetchData=(query:string)=>{//created an async function 
        //inside useffect since useffect by default cannot be async
          client.fetch(query).
          then((value:any)=>{
          setCats(value);
        //    console.log(value); 
          }).catch(((error: any)=>{
              console.log(error);
          })
      );
  });
    /*useEffect(() => {
        alanBtn({
          left:"15px",
          top:'10px',
          key:'27072e51d78a4b2e71b787871f3969432e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
            if (commandData) {
              // Call the client code that will react to the received command
            }
          }
        });
      }, []);*/
     
    
 
  return (
    
    <div>bhauuii</div>
  )
}

export default AlanCat

