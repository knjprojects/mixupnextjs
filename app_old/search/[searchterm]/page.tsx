import React from 'react'

type Props = {
    params: {
        searchTerm:string
    }
}
type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
            
        }
    ];
}
const search = async (searchTerm: string) => { 
    const res=await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERPAPI_API_KEY}`)
    const data:SearchResult = await res.json();
    return data;
}
const SearchResult = async({ params: { searchTerm } }: Props) => {
    const results = await search(searchTerm)
    console.log(`loading serpapi -- ${process.env.SERPAPI_API_KEY}`)
  return (
      <div>
          <p className='text-gray-500 text-sm'>you searched for {searchTerm}</p>
          <ol className='space-y-5 p-5'>
              {results.organic_results.map((res: any) => { 
                  return (
                      <li key={res.position} className='list-decimal'>
                          <p className='font-bold'> {res.title}</p>
                          <p>{res.snippet}</p>
                      </li>
                  );
              }
              )
              }
          </ol>
          
    </div>
  )
}

export default SearchResult