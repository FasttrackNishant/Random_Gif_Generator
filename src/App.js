import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full  h-screen flex flex-col background  overflow-x-hidden items-center">
     
     {/* heading */}
      <h1 className=" rounded-lg bg-white font-bold  w-11/12 mt-[40px] text-center px-10 mx-auto py-2 text-3xl font-sans ">

        Random Gif
      </h1>
      {/* div 1 */}
      <div className="flex flex-col  w-full ">
        
        <Random />
        <Tag />
      </div>
    </div>
  );
}
