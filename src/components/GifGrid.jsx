import { GifCard } from "./GifCard";
import { useFetchGif } from "../hooks/useFetchGif";






// eslint-disable-next-line react/prop-types
export const GifGrid =  ({category}) => {
   const {images, isLoading} = useFetchGif(category)

   return (
   <>
      <h4> { category } </h4>
      
      {
         isLoading?
         (<p>Cargando</p>)
         : null
      }

      <div className="card-grid">
      {
         images.map((elm)=>
            <GifCard key={elm.id} title={elm.title} url={elm.url}/>
         )
      }
      </div>
    </>
   )
}
