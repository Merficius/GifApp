export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CVElOXJJtXVc1ad4bLSr7QO6yqX7BHnf&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((imgData) => ({
    id: imgData.id,
    title: imgData.title,
    url: imgData.images.downsized_medium.url,
  }));

  return gifs;
};
