import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from "@mui/material";


const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#eee",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to='/' style={{ display:'flex', alignItems:'center'}}>
      {/* <img src={logo} alt="#" height={45}/> */}
      
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='logo'>
      <YouTubeIcon sx={{height:'50px', width:'100px'}} />
      </IconButton>
    </Link>
    <SearchBar />
  </Stack>
);

export default NavBar;
