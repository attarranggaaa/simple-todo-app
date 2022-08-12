import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Colors = () => {
  const { setColor, color } = useContext(AppContext);
  return (
    <>
      <div className="bg-black flex rounded-lg items-center space-x-3 py-2 px-4">
        <div
          onClick={() => setColor(1)}
          className={`cursor-pointer rounded-full w-5 h-5 ${
            color === 1 && "outline outline-2 outline-white"
          }  bg-hijau border-2 border-black`}
        ></div>
        <div
          onClick={() => setColor(2)}
          className={`cursor-pointer rounded-full w-5 h-5 ${
            color === 2 && "outline outline-2 outline-white"
          }  bg-kuning border-2 border-black`}
        ></div>
        <div
          onClick={() => setColor(3)}
          className={`cursor-pointer rounded-full w-5 h-5 ${
            color === 3 && "outline outline-2 outline-white"
          }  bg-jingga border-2 border-black`}
        ></div>
      </div>
    </>
  );
};

export default Colors;
