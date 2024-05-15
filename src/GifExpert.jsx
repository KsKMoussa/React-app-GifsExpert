import { useState } from "react"
import { AddCategory,AddGifGrid } from "./components";


//API: Gi2CfsWaiN78m9UNQuWsh3I1NGpqRt8O

export const GifExpertApp = () => {
  const [categories,StateCategories]= useState(['Dragon Ball']);

  const OnAddCategoria = (NewValue)=>{

    if(categories.includes(NewValue)) return;
   
    StateCategories([NewValue, ...categories,])
    
  }

  return (
    <>
      
      {/* Titulo del Proyecto */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory 
        onNewValue= {(event)=>OnAddCategoria(event)}
        />
      {/* Button */}
      {/*<button onClick={OnAddCategoria }>Agregar Categoria</button>*/}
  
          {categories.map((category)=> 

                <AddGifGrid 
                  key={category}
                  category={category}
                  />
      
        )}
     
      {/* Listado de Gif*/}
      {/* Gift Item*/}
    </>
  )
}




