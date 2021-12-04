import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('') // definimos el estado inicial del componente

    const handleInputChange = (e)=>{
        // console.log(e.target.value)
        setinputValue(e.target.value)
        // El input value se actualiza con el ultimo valor que registro la persona
    }

    const handleSubmit = (e)=>{
        // en este caso evitamos que el componente retorne a su valor por defecto cuando hacemos el submit
        e.preventDefault();
        if (inputValue.trim().length > 2){
            // console.log('Submit hecho')
            setCategories(cats => [inputValue, ...cats])
            setinputValue('')    
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  type='text' 
                        value={inputValue} 
                        onChange={handleInputChange}></input>
            </form>
        </div>
    )
}

// Obligamos que el envio de la funcion desde el otro componente sea requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
