import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGif( category );

    // console.log({ isLoading });

    // const [images, setImages] = useState([])

    // const getImages = async() => {   
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // useEffect( () => {        // getGifs(category).then( newImages => setImages(newImages))       // Esta es otra forma. Ya que No se puede usar el async 
    //     getImages();          // En el main.jsx comento el modo estricto. Y se ejecuta una sola vez. En producción es como si no estuviera.
    // }, [] )                   // Arreglo de dependencias. Si está vacío se ejecuta la 1era vez que se crea el componente

    return (
    <>
        <h3>{ category }</h3>
        {
           isLoading && ( <h2>Cargando...</h2> )
        }   

        <div className="card-grid">              
            {
                images.map( (image) =>  (
                    //  <li key={id} >{title}</li>       // (<li key={id} >{title}</li>) es como poner { return <li key={id} >{title}</li> }
                    <GifItem 
                        key={image.id} 
                        { ...image }
                    />
                 ))
            }
            
        </div>
    </>
    )
}
