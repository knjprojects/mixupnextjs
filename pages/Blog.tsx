import React, { useEffect,useState } from 'react'
import {client} from '../sanity'
import { urlFor } from '../sanity'
import Link from 'next/link'
//import { getPokemon, filterPokemon } from '../lib/data/MockDataAPI'
type Props = {}

const Blog = (props: Props) => {

  const [blogItems, setBlogs]=useState<any[]>([])

  const query='';
 // filter code, extra
  const [polls, setPolls] = useState(null);
 // used for displaying polls and filtering
  const [filteredPolls, setfilteredPolls] = useState(null)

  const [filtredPokemon, setFiltredPokemon] = useState(null);


    useEffect(()=>
    {
    const fetchData=(query:string
    )=>{
        client.fetch(query).then((val)=>{
        setBlogs(val);
    })
    }
   // setFiltredPokemon(getPokemon());
    },[])


    return (
    <div>
        <h2>
        <Link href="/">Back to home</Link>
    </h2>
    </div>
    )
}

export default Blog