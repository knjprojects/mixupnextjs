import { GetServerSideProps } from 'next'
import React,{useEffect} from 'react'
//there 2 ways to embed web apps (script tags) to our react components
//we can either import them into our maiin comp as special hooks 
//that execute before our main component returns its html, on pageload
//or we can use react-helmet component to directly add it to our head
//import UseExternal from "../hooks/UseExternal"
//import { Helmet } from "react-helmet" this is deprecated 

//i chose react helmetasync because useffect will render it twice 
//import { Helmet } from "react-helmet" this is deprecated 
import { Helmet } from 'react-helmet-async';
type Props = {
    type: string
    description: string
    title: string
    name:string
}
 //UseExternal("https://c3ack124.caspio.com/dp/38ceb00085a00e3f914941f5928d/emb")
const SEO = (props: Props) => {
    
    //if(type=='physician')
    //making changes to app.tsx to add helmet provider so we can attach our script, for future uses
    return (
        <div>
        <>
        <Helmet>
                { /* Standard metadata tags */ }
        <title>{props?.title}</title>
        <meta name='description' content={props?.description} />
        { /* End standard metadata tags */ }
        { /* Facebook tags */ }
        <meta property="og:type" content={props?.type} />
        <meta property="og:title" content={props?.title} />
        <meta property="og:description" content={props?.description} />
        { /* End Facebook tags */ }
        { /* Twitter tags */ }
        <meta name="twitter:creator" content={props?.name} />
        <meta name="twitter:card" content={props?.type} />
        <meta name="twitter:title" content={props?.title} />
        <meta name="twitter:description" content={props?.description} />
        { /* End Twitter tags */ }
                
        </Helmet>
          {props?.type}
            
    </></div>
   
  )
}

export default SEO
export const getServerSideProps: GetServerSideProps = async (context) => {
    //query is being sent from nex/link query component
  console.log(context.query) 
  return {
      props: { 
         type: context.query.type //pass it to the page props
      }
  }
}