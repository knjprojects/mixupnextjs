import React from 'react'
import { urlFor } from '../../../sanity'
import Product from './Cards/Product'
import CarouselBanner from './CarouselBanner'
import ProdCarousel from './ProdCarousel'
const ProductFeed = ({products}:any) => {
  //bg-white grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  return (
    <div className='bg-white'>
      {<ProdCarousel items={products}/>
      }
      {products?.map((product:any)=>{
      const fruit = (urlFor(product.itemImg)).url();
      //console.log(prod.length())
      console.log('items')
  
    //arr.push(up);//pushed it to an array to extract the string value from
    //the string function value, because imgurl wouldnt load without soecifcially STRING Url
      return (
            <Product key={product.id}
            id={product.id}
            itemRestId={product.itemRestId}
            iPrice={product.iPrice}
            desc={product.desc}
            iTags={product.iTags}
            itemImg={fruit}
            iName={product.iName}
            ingredients={product.ingredients}
            />
          
      )})
      
  }
    </div>

  )
}

export default ProductFeed

/*


I DESTRUCTURED THE PRODUCT:ANY into its attributes 
    }
    {/*the question mark is ESSENTIAL, use null safety techniques }
    {prod?.map((product/*{id,title,price,description, category,image}:{id:number,title:string,price:number,description:string,category:string,image:string})=>{
      const fruit = urlFor(product.itemImg).url();
      //console.log(prod.length())
      console.log('items')
  
    //arr.push(up);//pushed it to an array to extract the string value from
    //the string function value, because imgurl wouldnt load without soecifcially STRING Url
      return (
            <Product key={product.id}
            id={product.id}
            title={product.title}
            iPrice={product.price}
            description={product.description}
            iTags={product.category}
            itemImg={fruit}
            iName={product.title}
            ingredients={product.ingredients}
            />
          
      )})
      
  }

*/