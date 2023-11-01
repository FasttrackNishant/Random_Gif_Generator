import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchdata(tag) {
    try {
        console.log('called')
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}}` : url);
      const imgSource = data.data.images.downsized_large.url;
      //   ab konsa url use krna hian kaise pata chagle agar tag pass hua hain to woh wala else dusra
      setGif(imgSource);
      console.log(imgSource)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata("car");
  }, []);

  return { gif, loading, fetchdata };
};

export default useGif;
