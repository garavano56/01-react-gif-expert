// yarn create vite   ==> Para crear el proyecto
// Snippet (rafc ==> Te crea un funcional Component)
// yarn | yarn install  ==> No tenemos los modulos de node. Por eso lo instalamos  (Se crea la carpeta node_modules)

import { useState } from 'react';

import { GifGrid, AddCategory } from './components'         // Para resumir las 2 de abajo
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory) => {
        
        if ( categories.includes(newCategory) ) return; 

        setCategories([newCategory, ...categories]); 

        // categories.push('Valorant');
        // setCategories(['valorant', ...categories]);          // Operador Spread 
        // setCategories( cat => [...cat, 'valorant'] );        // Otra forma de hacer lo de arriba
    }

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* INPUT - Se envia por parametro la funcion */}            
        <AddCategory 
            // setCategories={ setCategories }    // 1° Forma de hacerlo.Se le manda el useState.
            onNewCategory={ onAddCategory }       // 2° Forma: Lo hace este componente (Padre). Y le manda la función al hijo.  Es igual: onNewCategory={ (value) => onAddCategory(value) }
        />     

        {/* Listado de Gif */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* <ol> */}
            {   categories.map( (category) => 
                    // { return <li key={ category }>{category}</li>  }   // 1° Forma
                    (  
                        // <div key={ category }>                         // 2° Forma
                        //     <h3>{ category }</h3>
                        //     <li>{ category }</li>
                        // </div>
                        <GifGrid key={ category } category={category} />
                    ))  
            }
        {/* </ol> */}
            {/* Gif Item */}

    </>
    )
}
