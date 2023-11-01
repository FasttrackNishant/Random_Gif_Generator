/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car ");

  const { gif, loading, fetchdata } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-500  flex flex-col items-center mx-auto rounded-lg  border border-black gap-y-5 mt-[15px] justify-center ">
      <h1 className="underline font-bold text-black text-2xl mt-2 text-center">
        Random {tag} Gif
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

      <input
        type="text"
        className="w-10/12 text-lg py-2 font-bold font-sans text-center rounded-lg bg-green-100 "
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={() => {
          fetchdata(tag);
        }}
        className="w-10/12 bg-yellow-500 text-lg py-2 font-bold  rounded-lg font-sans text-center mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
