
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { AddGiffsItem } from "../components/AddGiffsItem";

export  const AddGifGrid= ({category}) => {

  const {image,isLoading}= useFetchGifs(category);

  return (
    <>
        <h2>{category}</h2>
        {console.log(isLoading)}
        {isLoading && (<h2>Cargando...</h2>)}
        {console.log(isLoading)}
        <div className="card-grid"> {
          
                image.map(
                  (image)=> <AddGiffsItem
                  key={image.id} 
                  { ...image} 
                  />
                )
          }
        </div>
    
    </>
  )
}





