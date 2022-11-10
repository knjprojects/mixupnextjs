import {Error, Loader,SongCard} from "../../components/spotify"
import {genres} from "../../assets/constants" 
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";

import { useDispatch,useSelector } from "react-redux";
const Discover = () => {
    //send dispatches to the redux store
    const dispatch = useDispatch();
    //from playerslice
    const { activeSong,isPlaying } = useSelector((state)=>state.player);


    //we get data, fetching status and errors if any from our endpoint fetch
    const {data,isFetching,error} =useGetTopChartsQuery();
    console.log(data);
    //console.log(genres);
    const genreTitle="Pop";
    if(isFetching) return <Loader title="Loading Songs..." />
    if(error) return <Error />
    return(
        <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
            <select value=""
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
            onChange={()=>{}}
            >{
                genres.map((genre)=>
                <option key={genre.value} value={genre.value}> {genre.title}</option>
                )
            }

            </select>
        </div>
        
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data &&
                data?.map((song,i)=>{
                    return ( 
                        <SongCard key={song.key}
                            song ={song}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                            
                        />);
                })
            }
        </div>

        </div>);
}


export default Discover;
