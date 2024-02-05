
export const getGifs = async (category) =>{
   const API_KEY = "gyUm44veDPX9x7bHMLfQ50Zx0YVoPmQl";
   const limit = 10;
   const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}`;

   const response = await fetch(url);
   const {data}= await response.json(response);

   const gifs = data.map((element) => {
      return {
         id : element.id,
         title: element.title,
         url: element.images.downsized_medium.url,
      }
   })

   return gifs;
}