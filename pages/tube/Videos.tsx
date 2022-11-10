import React, { useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from './ChannelCard';
import Loader from '../../components/tube/Loader';
import VideoCard from "../../components/tube/VideoCard";
import { Item  }  from "../../typings";



import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
*/





const Videos = ({ videos,direction }:{videos:any,direction?:any}) => {
  const data:Item[]=[]
  const [myTubes, setTubes]: any = useState(data);
 
  
  useEffect(() => {
    //setTubes([])
   // if(tubes!==null)
   
    setTubes(videos)
     console.log(myTubes.length + 'videos loaded')
  },)//i removed the depeneceny array,so it should run evertyutime lol
 
     if(!videos?.length) return <Loader />;

  
  //console.log(myTubes.length + 'videos loaded')
    
  

 
 
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    
  );
}

export default Videos;
/*{/* <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start" gap={2}>
      <div>{
        myTubes && myTubes?.map((item:Item)=>(
          <div key={item.id?.videoId}>{ item.id?.videoId}</div>
        ))
      }</div>
      
      {/*videos?videos?.map((item:any) => (
        
        <div className="bg-black" key={item?.id?.videoId!}>
          {item?.id?.videoId && <VideoCard video={item} />}
      
          {item?.snippet?.channelId! && <ChannelCard channelDetail={item?.snippet!.channelId} />}
        </div>

      )):<Loader/>
      }
     
    </Stack >*/