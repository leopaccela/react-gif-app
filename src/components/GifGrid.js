import React from 'react';
// import React, { useState, useEffect } from 'react'
// import { getGifts } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
 
    // const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category)


    // // el useEffect me permite que la peticion se realice una sola vez y no se vuelva a ejecutar cada vez que se modifica el state de un componente, de esta forma React no renderizara todo de vuelta
    // useEffect(()=>{
    //     getGifts(category).then(imgs => setImages(imgs))
    // }, [category])


    return (
        <>
        <h3 className = 'category'>{category}</h3>
        {loading && <p>Loading...</p>}
        <div className = 'card-grid'>
            {
                images.map(img=> (
                    <GifGridItem 
                        key={img.id}
                        // podemos enviar los parametros como desestructuracion de arrays
                        {...img}/>
                ))
            }

        </div>
        </>
    )
}
