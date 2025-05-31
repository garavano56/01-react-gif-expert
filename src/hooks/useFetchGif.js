import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {        // getGifs(category).then( newImages => setImages(newImages))       // Esta es otra forma. Ya que No se puede usar el async 
        getImages();          // En el main.jsx comento el modo estricto. Y se ejecuta una sola vez. En producción es como si no estuviera.
    }, [] )  

    return {
        images,
        isLoading
    }

}
