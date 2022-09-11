import { Button, Typography } from '@mui/material';
import { Box, height, Stack } from '@mui/system';
import React from 'react'
import { categories } from '../utils/constants';



const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack
    direction="row"
    sx={{
        overflowY:'auto',
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
    }}
    >
        {
            categories.map((category) => (
                
                <Box className='category-btn' 
                onClick={() => setSelectedCategory(category.name)}
                style={{ background : category.name === selectedCategory && 'red', color:'#fff'}}
                >
                    <Box component="span" sx={{ color:category.name === selectedCategory ? 'white' : 'red', mr:'15px' }}>{category.icon}</Box>
                    <Box component="span" sx={{opacity: category.name === selectedCategory ? '1' : '0.8',
                    color:category.name === selectedCategory ? 'white': '#000'
                }}>{category.name}</Box>
                </Box>
            ))
        }
    </Stack>
);

export default Sidebar