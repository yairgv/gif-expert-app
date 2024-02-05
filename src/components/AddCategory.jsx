import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewSubmit}) =>{
   const [inputValue, setInputValue] = useState("");

   const onInputChange = (event) =>{
      // event contiene toda la informacion del evento on change
      // Dentro en la propiedad target podemos encontrar value
      // que indica el string producto al haber agregado o quitado caracteres
      setInputValue(event.target.value);
   }

   const onSubmit = (event) =>{
      event.preventDefault();
      if(inputValue.trim().length < 1) return;
      onNewSubmit(inputValue.trim());
      setInputValue("");
   }



   return(
      <form onSubmit={(event)=> onSubmit(event)}>
         <input 
            type="text" 
            placeholder="Nueva categoria" 
            value={inputValue} 
            onChange={(event)=> onInputChange(event)} 
         />
      </form>
   );

}