import React, { useContext } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import { AppContext } from "../contexts/AppContext";
import Checkbox from "./Checkbox";

const Task = ({ task: { id, color, text, complete } }) => {
  const { check, edit, destroy } = useContext(AppContext);
  return (
    <>
      <div
        className={`group flex items-center ${
          color === 1 ? "bg-hijau" : color === 2 ? "bg-kuning" : "bg-jingga"
        } rounded-lg border-black border-2 md:px-10 p-3`}
      >
        <Checkbox id={id} color={color} check={check} />

        <h1
          className={`w-full truncate mx-5 ${complete ? "line-through" : ""}`}
        >
          {text}
        </h1>

        <div className="flex space-x-3 md:space-x-5">
          <BsPencil
            onClick={() => edit(text, id)}
            className="w-6 h-6 cursor-pointer"
          />
          <BsTrash
            onClick={() => destroy(id)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Task;
