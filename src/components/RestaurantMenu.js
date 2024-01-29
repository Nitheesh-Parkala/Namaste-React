import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
     fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=5167&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    }
    // const { name } = resInfo?.data?.card[0]?.card?.card?.info;
    // if(resInfo===null) return <Shimmer/>
     
  return resInfo===null ? <Shimmer/> : (
    <div className="menu">
      <h1>{resInfo?.data?.card[0]?.card?.card?.info.name}</h1>
      <h2>dd</h2>
      <ul>
        <li></li>
        <li>Biryani</li>
        <li>Biryani</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;