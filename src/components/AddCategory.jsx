import { useState } from "react"


export const AddCategory = ({onNewValue}) => {
    
    
    const Onchange = (event)=> {
       // console.log(event.target.value)
       setinputValue(event.target.value)
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        //console.log(categories)
        if (inputValue.trim().length <=1) return;
        onNewValue(inputValue.trim());
        setinputValue('');

    }

  const [inputValue,setinputValue]=useState('')

  return (
    <form onSubmit={(event)=> onSubmit(event)}>

        <input
            type="text"
            placeholder= "Buscar Gifs"
            value={inputValue}
            onChange={(event)=> Onchange(event)}
        />
    </form>

  )
}


