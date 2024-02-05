import { useEffect, useState } from "react";
import { getGifs } from "../utilities/getGifs";

export const useFetchGif = (category) => { 
   const [images, setImages] = useState([])
   const [isLoadiang, setIsLoading] = useState(true);
   
   const getImages = async () =>{
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
   }

   useEffect(() => {getImages()}, []);
   
   return {
      images,
      isLoadiang
   }
}
