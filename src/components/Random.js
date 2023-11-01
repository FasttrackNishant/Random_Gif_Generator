import React from "react";
// import { useState } from "react";
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchdata } = useGif();

  function clickHandler() {
    fetchdata();
  }

  return (
    <div className="w-1/2 bg-green-500  rounded-lg mt-3 flex flex-col items-center mx-auto  border border-black gap-y-5">
      <h1 className="underline font-bold text-black text-2xl mt-2 text-center">
        A Random Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          width="450"
          alt=""
          className="border border-b-cyan-100 mt-4"
        />
      )}

      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 text-lg py-2 font-bold  rounded-lg font-sans text-center mb-[20px] mt-[15px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;

/*
this code is without hook 
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  async function fetchdata() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      console.log("data fetchd");
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
      console.log(imgSource);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  function clickHandler() {
    fetchdata();
    console.log("caelld");
  }

  return (
    <div cla ssName="w-1/2 min-h-[250px] bg-green-500 mt-3 flex flex-col items-center mx-auto rounded-[30px]  border border-black 1px justify-center ">
      <h1 className="underline font-bold text-black text-2xl mt-2 text-center">
        A Random Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          width="450"
          alt=""
          className="border border-b-cyan-100 mt-4"
        />
      )}

      <button
        onClick={clickHandler}
        className="font-bold flex py-2 my-[20px] w-11/12 text-center justify-center items-center   bg-green-100 rounded-md text-[1.25rem] font-sans mx-auto"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
*/
