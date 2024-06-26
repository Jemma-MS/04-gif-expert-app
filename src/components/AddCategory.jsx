


import React, { useState } from 'react'

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('Euphoria')

    const onInputChange = ( event ) => {
        
        console.log( event.target.value );
        setInputValue( event.target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log( inputValue );

        //setCategories
        setCategories( [ ...categories, 'event' ] )

        console.log( setCategories );
        
    }

  return (

    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text" 
            placeholder='Search GIF'
            value={ inputValue }
            onChange={ (event) =>  onInputChange( event )}
        />
    </form>
    
  )
}
