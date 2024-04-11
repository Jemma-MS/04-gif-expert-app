import { useState } from "react"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Stranger Things', 'Mr Robot' ])

    console.log(categories);

  return (
    <>

        {/*Titulo */}

        <h1>GifExpertApp</h1>

        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            }) }
            
        </ol>

        {/*Listado de Gifs*/ }

    </>
  )
}




