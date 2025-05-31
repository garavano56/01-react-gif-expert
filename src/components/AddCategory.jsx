import { useState } from 'react';
 
export const AddCategory = ( {onNewCategory} ) => {      // Desestructuramos las props

    const [inputValue, setinputValue] = useState('');    // Se puede asignar un valor por defecto (Ej: useState('One Punch'); )

    const onInputChange = ({ target }) => {              // Desestructuro de event el target (Para no tener que escribir event.target.value)
        // console.log(target.value);
        setinputValue(target.value);           
    }

    const onSubmit = (event) => {
        event.preventDefault();                          // Para evitar el refresh del navegador cuando presiono enter.          
        if( inputValue.trim().length <= 1 ) return;
        
        // setCategories( categories => [ inputValue, ...categories ] );    // 1° Forma de hacerlo
        onNewCategory( inputValue.trim() );             // EMITIR UN EVENTO DEL COMPONENTE PADRE
        setinputValue('');
    }

    return (                                        
        <form onSubmit={ (event) => onSubmit(event) } >     
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value = { inputValue }
                onChange = { onInputChange }      // Siempre se manda y recibe "event". Asi que no es necesario:  onChange = { (event) => onInputChange(event) }
            />
        </form>
    )
}
