import React,{FormEvent,useState} from 'react'
'use client' //changes from server component to client, peerfect for our search
type Props = {}

import { useRouter } from 'next/navigation'

const Search = (props: Props) => {
  
  const [search, setSearch] = useState("")
  const router = useRouter();

  const handleSearch = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("")
    router.push(`/search/${search}`);
  }
  return (
    <form onSubmit={handleSearch}>
      <input type={'text'}
        placeholder='Search'
        value={search}
        onChange={(e) => 
          setSearch(e.target.value)
        }
      />
      <button type='submit'
        className='bg-blue-500 text-white font-bold py-2'
      >
        Search
      </button>
      
    </form>
  )
}

export default Search