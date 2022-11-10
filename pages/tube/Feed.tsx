import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Sidebar from "../../components/tube/Sidebar";
import Videos from './Videos'
import { Item, RootObject } from "../../typings";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos]= useState(null);

  useEffect(() => {
    setVideos(null);

    /*const getItems = (selectedCategory:string) => { 
      const  items:any = fetchFromAPI(selectedCategory);
        setVideos(items); 
      return items;
    }
    getItems(selectedCategory);*/
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
   // console.log()
  

  return (
    <div className="h-screen w-full"> <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright text-black" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography className="text-black" variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

       
       <Videos videos={videos} />
      </Box>
       
    </Stack>
      
    </div>
   
  );
};

export default Feed;