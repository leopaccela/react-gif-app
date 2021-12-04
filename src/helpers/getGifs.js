export const getGifts = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=pFN4ATj9wS3n9Ztr23Wad6P1YR5EqJrs`
    const response = await fetch(url)
    const {data} = await response.json()

    const gifs = data.map(img =>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            // podemos usar el signo de interrogacion para que utilice estas propiedades si el objeto que se retorna las contiene, sino no
        }
    })

    return gifs

}