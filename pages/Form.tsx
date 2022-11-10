import { GetServerSideProps } from 'next'
import React from 'react'
//there 2 ways to embed web apps (script tags) to our react components
//we can either import them into our maiin comp as special hooks 
//that execute before our main component returns its html, on pageload
//or we can use react-helmet component to directly add it to our head
//import UseExternal from "../hooks/UseExternal"
//import { Helmet } from "react-helmet" this is deprecated 

//i chose react helmetasync because useffect will render it twice 
//import { Helmet } from "react-helmet" this is deprecated 
import SEO  from '../components/SEO'
type Props = {
    type: string
    description: string
    title: string
    name:string
}
 //UseExternal("https://c3ack124.caspio.com/dp/38ceb00085a00e3f914941f5928d/emb")
const Form = (props: Props) => {
    
    //if(type=='physician')
    //making changes to app.tsx to add helmet provider so we can attach our script, for future uses
    return (
        <div>
        <>
        <SEO
            title='Learning React Helmet!'
            description='Beginner friendly page for learning React Helmet.'
            name='Company name.'
            type='article'
                        
         />
        <h1>Cool SEO friendly form page</h1>
    </></div>
   
  )
}

export default Form
export const getServerSideProps: GetServerSideProps = async (context) => {
    //query is being sent from nex/link query component
  console.log(context.query) 
  return {
      props: { 
         type: context.query.type //pass it to the page props
      }
  }
}