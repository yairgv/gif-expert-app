import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp (){

   const [categories, setCategories] = useState([]);

   const onAddCategory = (value)=>{
      if(categories.includes(value)) return;
      setCategories([ value,...categories]);
   }


   const reset = () =>{
      setCategories([]);
   }

   return(
      <>
         <h1>Gif Expert </h1>
         <AddCategory onNewSubmit={onAddCategory}/>
         <button onClick={reset} className="boton">Reset</button>
         
         {
            categories.map((category) =>
               <GifGrid className = "card-grid" key={category}category={category}/>
            )
         }
      
      </>
   )
}