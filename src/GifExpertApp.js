import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = ()=>{
    //     // setCategories([...categories, 'HunterXHunter'])
    //     // tambien se puede realizar de esta forma...
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }

    return (
        <div>
            <h2 className = 'title'>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                            key={category}
                            category={category} />

                    ))
                }
            </ol>
        </div>
    )
}
