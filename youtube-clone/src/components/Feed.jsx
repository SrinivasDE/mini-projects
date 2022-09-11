import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Sidebar, Videos} from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory ]);

  return (
  <Stack
  sx={{ flexDirection:{ sx:
  'column', md: 'row' } }}
  >
    <Box sx={{ height: {sx: 'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px:{sx:0, md: 2} }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography className='copyright'
      variant='body2' sx={{mt:1.5, color:'#000'}}
      >
        
      </Typography>
    </Box>

    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight='bold' md={2}  sx={{ color:'#000'}}>New 
      <Box component='span' sx={{color:'red'}}> Videos</Box>
      </Typography>
      <Videos />
    </Box>

  </Stack>
)}

export default Feed