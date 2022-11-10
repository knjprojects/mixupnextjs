import React,{useState,useEffect} from 'react'

const API_KEY=process.env.NEXT_PUBLIC_GIPHY_API;//loading giphy from .env file
type Props = {}
//go to giphy docs to fetch specific api gifs
const FetchGifs = (keyword :string) => {
    const [gifUrl,setGifUrl]=useState('');

    const fetchGifs=async()=>{
        try {
               //we want to search gifs -https://api.giphy.com.v1/gifs/search
            //the api key we use is - API_KEY
            //the query- which gif we want
            //look at below syntax in the link to determine how to fetch other gifs
            //we use string interpolation to fetch our string api key gif
            //we split keywords, then join their potential returns(gifs) together i think 
            //limit=1, because we just need one gif, not a few
            const response=await fetch(`https://api.giphy.com.v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const [data]=await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url)
        } catch (error) {
            setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
        }
    }
    useEffect(()=>{
        if(keyword)
        fetchGifs();
    },[keyword])
    return gifUrl;
}
export default FetchGifs