

export const getGifs = async(category) => {

  const api='AIzaSyDY6ns2K_uxFEPYNpLiI1WntKCbJXGBDY0'
   // const api= 'Gi2CfsWaiN78m9UNQuWsh3I1NGpqRt8O'
   const url= `https://tenor.googleapis.com/v2/search?q=${category}&key=${api}&client_key=my_test_app&limit=20`
   //const url= `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${category}&limit=20`
    const gifs = await fetch(url);
  
    const  {results=[]} = await gifs.json();  
  
    
    const gif = results.map(
      (e)=> {
        return {
          id:e.id,
          title: e.content_description,
          url: e.media_formats.gif.url
        }
      }
  )
return gif;
}


