import React, { useEffect,useState } from "react";

// Material UI Imports

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export const GlobalStatistic = () => {

    const [globalData,setGlobalData]=useState();

    useEffect(() => {
        async function fetchData() {

            const response = await fetch("https://corona.lmao.ninja/v2/all?yesterday")
            // https://corona.lmao.ninja/v2/countries?yesterday&sort states.....>
            console.log("response -->", response)
            const data = await response.json()
            console.log("data -->", data)
            // setGlobalData(data);
        }
        fetchData()
    }, [])
// console.log("asc",globalData)

    // Material UI Script

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
        </Box>
    );
}