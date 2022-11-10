import Link  from 'next/link'
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  //const activeSong = "Test"

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));

  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));

  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className='relative w-full h-56 group'>
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-70 group-hover:flex
            ${activeSong?.title === song.title ?
            'flex bg-black bg-opacity-60' :
            'hidden'
          }
        `}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={() => handlePauseClick()}
            handlePlay={() => handlePlayClick()}
          />

        </div>
        <img alt="song_ing" src={song.images?.coverart} />
      </div>
      <div className='flex mt-4 flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link href={`/spotify/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className=' text-sm truncate text-gray-300 mt-1'>
          <Link href={song.artists ? `/spotify/artists/${song?.artists[0]?.adamid}` : '/spotify/TopArtists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SongCard;
