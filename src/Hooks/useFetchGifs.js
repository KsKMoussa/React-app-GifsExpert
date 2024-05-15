import { useEffect, useState } from "react"
import { getGifs } from "../heplders/getGifs";


export const useFetchGifs= (category) => {
    const [image,setImage]= useState([]);
    const [isLoading,setisLoading]=useState(true);

    const getImages = async()=>{
    setisLoading(true);
      const Newimage=await getGifs(category);
    setImage(Newimage);
    setisLoading(false);
  
  }

 useEffect(
   ()=>{ getImages()}
 ,[]);

    return {
      image:image,
      isLoading: isLoading
    }



}


