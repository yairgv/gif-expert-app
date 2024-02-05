import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const HijoComponent = ({callbackTexto}) => {
   const [inputValue, setInputValue] = useState("");

   const onInputChange = (event)=>{
      setInputValue ( event.target.value );
   }

   const onSubmitForm = (event) =>{
      event.preventDefault();
      callbackTexto (inputValue);
      setInputValue("");
   }

   return(
      <form onSubmit = {onSubmitForm}>
         <h1> Hijo </h1>
         <input 
            onChange = {(event) => onInputChange(event)}
            value = { inputValue }
         />
      </form>
   )
}
