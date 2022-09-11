import React from "react";
import { AppBar, Badge, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { navItems } from "./data";
import './navbar.css'



const NavBar = () => {
  
  return (
    <>
    <AppBar >
    <Toolbar sx={{justifyContent:'end'}}>
        <List sx={{display:'flex'}}>
      {navItems.map((item, index) => ( 
        < >
          {item.title === "Orders" ? (
            <ListItem >
              <ListItemButton>
              
                <Stack spacing={0.5} direction="row">
                <Link className="link" to={item.to} >{item.title}</Link>
                  <Badge badgeContent={2} color="success">
                  </Badge>
                </Stack>
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem >
              <ListItemButton>
              <Link className="link" to={item.to} >{item.title}</Link>
              </ListItemButton>
            </ListItem>
          )}
        </>
      ))}
      </List>
     </Toolbar>
     </AppBar>
    </>
  );
};

export default NavBar;
