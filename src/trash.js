import React, { useEffect, useState } from "react";
import axios from "axios";

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  async function fetchdata() {
    setLoading(true);
    setGif(""); // Clear the previous GIF
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      const { data } = await axios.get(url);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  function clickHandler() {
    fetchdata();
  }

  return (
    <div className="w-1/2 h-[350px] bg-green-500 mt-3 flex flex-col items-center mx-auto rounded-[30px] border border-black 1px justify-center">
      <h1 className="underline font-bold text-black text-2xl mt-2">
        A Random Gif
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            src={gif}
            width="450"
            alt=""
            className="border border-b-cyan-100 mt-4"
          />
          <button
            onClick={clickHandler}
            className="font-bold py-2 bg-green-100 w-9/12 mt-8 rounded-md text-[1.25rem] font-sans"
          >
            Generate
          </button>
        </>
      )}
    </div>
  );
};

export default Random;
