import React,{useState,useEffect} from 'react'
//mport { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Pageview } from '@mui/icons-material'
import {useRouter} from 'next/router'
type Props = {}
//a aper is a div with white bg
const SearchBar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
    

   const navigate = useRouter();

  const onhandleSubmit = (e:any) => {
    e.preventDefault();

    if (searchTerm) {
      navigate.push('/'+`/tube/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <div>  <Paper
      className='hover:scale-105 border-yellow border-b-2'
      component='form'
      onSubmit={(e) => onhandleSubmit(e)}
      sx=
      {{
        borderRadius: 10, backgroundColor: 'black', color: 'black',
         border: '1px solid #D21717',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },}}
    >    <input
        className='search-bar rounded-full items-center'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Pageview className='ml-2' />
      </IconButton>
     
    </Paper></div>
  
  )
}

export default SearchBar