import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Items = (props) => {
  return (
    <>
      <Container>
        <List>
          {props.item.map((i, index) => (
            <Card sx={{ backgroundColor: "#eee" }}>
              <ListItem>
                <ListItemText key={index} primary={i} />
                <ListItemButton onClick={() => props.del(index)}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItem>
            </Card>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Items;
