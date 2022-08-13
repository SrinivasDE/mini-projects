import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Card, TextField } from "@mui/material";
import Items from "./Items";

const Inputs = () => {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  const itemChangeHandler = (e) => {
    setItem(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = [...data, item];
    setData(newData);
    console.log(data);
    setItem("");
  };
  const deleteHandler = (e) => {
    const newData = data.filter((item, index) => index !== e);
    setData(newData);
  };

  return (
    <>
      <Card sx={{ p: "8px" }}>
        <Box component="form" onSubmit={submitHandler} textAlign="center">
          <TextField
            type="text"
            onChange={itemChangeHandler}
            value={item}
            label="Add Items Here"
            variant="outlined"
          />{" "}
          &nbsp; &nbsp;
          <Button
            type="submit"
            sx={{ textTransform: "capitalize", fontSize: "18px", p: "10px" }}
          >
            Add item
          </Button>
        </Box>
      </Card>
      <Items item={data} del={deleteHandler} />
    </>
  );
};

export default Inputs;
