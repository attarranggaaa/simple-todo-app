import React, { useContext } from "react";
import Task from "./Task";
import { AppContext } from "../contexts/AppContext";

const List = () => {
  const { list } = useContext(AppContext);
  return (
    <>
      <div className="md:p-5 p-3 md:space-y-5 space-y-3">
        {list.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default List;
