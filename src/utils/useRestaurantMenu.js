import { useEffect, useState } from "react";
import { Menu_API } from "./constants";
const useRestaurantMenu =(resId)=>{
    const[resInfo, setResInfo]= useState(null)
// fetch data
useEffect(()=>{
  fetchMenu();
},[]);

const fetchMenu = async()=>{
    const data =  await fetch(Menu_API + resId);
    const json = await data.json();
    console.log(json)
    setResInfo(json.data)
}
    return resInfo;
}

export default useRestaurantMenu;