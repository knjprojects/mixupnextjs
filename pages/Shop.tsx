import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import {Button,ButtonGroup} from'@mui/material'
import type { NextPage } from 'next'
import {CartState} from "../typings"
type Props={
    myCart: CartState
    //use cartwith alan voice in redux and shop

}
import Product from '../components/product/Cards/ProductCard';
import { useRouter } from 'next/router';
const Shop = (props:Props) => {
/* const menuItems = [
        {name: "Angus Burger", price: 8.99, category: 'burger'},
        {name: "Tuna Steak Burger", price: 15.00, category: 'burger'},
        {name: "Bacon Burger", price: 11.50, category: 'burger'},
        {name: "Southwest Chicken Burger", price: 9.99, category: 'burger'},
        {name: "Mozzarella Burger", price: 12.50, category: 'burger'},
        {name: "Cesar Salad", price: 6.50, category: 'salad'},
        {name: "BBQ Chicken Salad", price: 13.99, category: 'salad'},
        {name: "Garden Salad", price: 9.99, category: 'salad'},
        {name: "Veggie Lasagna", price: 17.99, category: 'pasta'},
        {name: "Spaghetti & Meatballs", price: 17.99, category: 'pasta'},
        {name: "Fettuccine Alfredo", price: 17.99, category: 'pasta'},
    ];menu items are moved to alan ai, we can use alan to fetch from a database instead as well, possibilities are endless!
    */
    const router = useRouter();
    const [products, setProducts] = useState<any[]>([])
    const [cart, setCart] = useState<any[]>([])
    const [alanInstance,setAlanInstance]=useState()
    useEffect(()=>{
        const alanBtn = require('@alan-ai/alan-sdk-web');//this is essential to preventing window not defined error
        const CallAlan = (props: Props) => {
            alanBtn({//we position our components
                bottom:"15px",
                left:"15px",
                right:'1px',
                key:'27072e51d78a4b2e71b787871f3969432e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand:(commandData:any)=>{
                   // console.log(commandData)
                    if (commandData.command === "getMenu") {//this command must match our alanai intent command
                    setProducts(commandData.data)
                    console.log(commandData)}
                    if (commandData.command === "addToCart") {
                        addToCart(commandData.data)
                    }
                    if(commandData.command === 'emptyCart'){//notice 3 equal signs
                        emptyCart()
                    }
                    if(commandData.command === 'showCategories'){//notice 3 equal signs
                      //emptyCart()
                    }
                    if (commandData.command === 'port') {//notice 3 equal signs
                        //show portfolio
                        // alanBtn.remove();
                        router.push('/Port')
                    }
                }
            })
       // return v//returning alan component to set it as our alan instance hook variable
        }
        CallAlan('query');
       // setAlanInstance(v)
    },[])
  //function that accepts a propduct item and adds it to the cart
  //we then call this componeht function inside a button click function
const addToCart =(menuItem:any)=>{
  //setcart to the return value of a function that takes the previous value of cart
    setCart((oldCart)=>{
        return [...oldCart,menuItem];
    //return an array containing the spread of content sof the old cart, plus the menu item being looped through
    })
  //even though i returned a div nothing seems to be happening
  //atleast now ik regular functions with parameters that manipulate hooks are simply normal react components
}

type Props = {}

const emptyCart= () => {
    setCart([])
}

return (//div keys are used for mapping items to divs. divs can be id or in this case, 
  //the name attribute we have in our array
    <>
     <h2>
        <Link href="/Port">Back to Port</Link>
    </h2>
    <h1>First Post</h1>
    <h2>
        <Link href="/">Back to home</Link>
    </h2>
    <div className="bg-white">
    {products?.map((product:any) => (
        <div key={product.name}>
            <p className='text-red-500'>{product.name} - {product.price} - {product.category}</p>
            <Product key={product.name} id= {product.name} ingredients={['celery']} iName={''} desc={''} iPrice={product.price} itemImg={'https://cdn.sanity.io/images/d72u8wmk/production/22e6842833e69d5afb1585f8703de29e921a3d22-204x114.png'} 
            iTags={['cold']} itemRestId='1'/>
            <button onClick={()=>addToCart(product)}>add</button>
        </div>
    ))
    }
    <div>
</div>
<ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button>{}</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
    <h2>Cart</h2>
        {cart.map((cartItem) => (
        <div key={cartItem.name}>
            {cartItem.name} - {cartItem.price} - {cartItem.category}
        </div>
    ))}
    </div>
</>
)
}

export default Shop













