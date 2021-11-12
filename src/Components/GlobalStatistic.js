import React,{useEffect} from "react";

export const GlobalStatistic=()=>{

    useEffect(()=>{
         async function fetchData(){

            const response = await fetch("https://corona.lmao.ninja/v2/all?yesterday")
            console.log("response -->",response)
            const data = await response.json()
            console.log("data -->",data)
        }
        fetchData()
    },[])
    return(
<div>Global Statistic</div>
    );
}