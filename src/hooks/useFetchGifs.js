import { useState, useEffect } from "react"
import { getGifts } from "../helpers/getGifs"

export const useFetchGifs = (category)=>{

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // el useEffect me permite que la peticion se realice una sola vez y no se vuelva a ejecutar cada vez que se modifica el state de un componente, de esta forma React no renderizara todo de vuelta
    useEffect(()=>{
        getGifts(category).then(imgs => setState({
            data: imgs,
            loading:false
        }))
    }, [category])


    return state
}