import React from "react";
import { BsCheck } from "react-icons/bs";

const Checkbox = ({ id, color, check }) => {
  return (
    <>
      {" "}
      <label
        className="relative flex justify-center items-center"
        htmlFor={`ck${id}`}
      >
        <input
          type="checkbox"
          className="appearance-none bg-transparent w-6 h-6 rounded-lg border-2 border-black checked:bg-black"
          id={`ck${id}`}
          onClick={() => check(id)}
        />
        <BsCheck
          className={`absolute w-6 h-6 ${
            color === 1 ? "text-hijau" : color === 2 ? "text-kuning" : "text-jingga"
          }`}
        />
      </label>
    </>
  );
};

export default Checkbox;
