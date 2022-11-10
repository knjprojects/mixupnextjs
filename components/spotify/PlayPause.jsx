import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
const PlayPause = ({ isPlaying, activeSong, song, handlePlay, handlePause }) => {
  if (isPlaying && activeSong?.title === song.title)
    return (
      <FaPauseCircle size={35}
        onClick={handlePause}
        className="text-gray-500"
      />
    )
  else return (<FaPlayCircle size={35}
    onClick={handlePlay}
    className="text-gray-500"
  />
  );
}

export default PlayPause;
