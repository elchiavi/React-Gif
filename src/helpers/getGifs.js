
export const getGifs = async ( category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=7hMW2YMQ1Awd1EmtbCBoJ1OP65rJJ3fu`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gift;

}