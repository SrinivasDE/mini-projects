import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CountDown = () => {
  const endTime = new Date("August 30, 2022 00:00:00").getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const middleTime = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remaingDays = Math.floor(middleTime / days);
  const remaingHours = Math.floor((middleTime % days) / hours);
  const remaingMinutes = Math.floor((middleTime % hours) / minutes);
  const remaingSeconds = Math.floor((middleTime % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setCurrentTime(new Date().getTime()), 1000);
  }, [currentTime]);

  return (
    <>
      <TableContainer component="paper" sx={{}}>
        <Table sx={{mt:'50px', 
        backgroundImage:"url("+"/images/closing-down-sale-special-offer-price-sign-vector-34136940.jpeg"+")",
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        height:'600px'
        }}>
          {/* <TableHead component='h1' sx={{textAlign:'', }}>Offer Ends in </TableHead> */}
          <TableBody >
          <TableRow sx={{display:'flex', ml:'580px', mt:'350px' }}><TableCell sx={{fontSize:'29px', color:'#fff'}}>Offer Ends in </TableCell></TableRow>
            <TableRow sx={{display:'flex', ml:'580px', }}>
              <TableCell align="center" component="th" sx={{backgroundColor:'#000', color:'#fff', fontSize:'20px'}}>
                {remaingDays}
                <br /> Days
              </TableCell>
              &nbsp;&nbsp;
              <TableCell align="center" component="th" sx={{backgroundColor:'#000', color:'#fff', fontSize:'20px'}}>
                {remaingHours}
                <br /> Hours
              </TableCell>
              &nbsp;&nbsp;
              <TableCell align="center" component="th" sx={{backgroundColor:'#000', color:'#fff', fontSize:'20px'}}>
                {remaingMinutes}
                <br /> Minutes
              </TableCell>
              &nbsp;&nbsp;
              <TableCell align="center" component="th" sx={{backgroundColor:'#000', color:'#fff', fontSize:'20px'}}>
                {remaingSeconds}
                <br /> Seconds
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CountDown;
