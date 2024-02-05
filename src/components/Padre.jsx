import { useState } from "react";
import { HijoComponent } from "./hijo";


export const PadreComponent = () => {
   const [texto, setTexto] = useState("A");

   const onSetTexto = (value)=>{
      setTexto ( value );
   }

   return(
      <>
         <h1> Padre </h1>
         <h2> Texto Ingresado: { texto } </h2>
         <HijoComponent callbackTexto = {onSetTexto}/>
      </>
   )
}
