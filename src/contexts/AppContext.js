import { useState, createContext } from "react";
import uuid from "react-uuid";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      id: uuid(),
      text: "Learn Javascript",
      color: 1,
      complete: false,
    },
    {
      id: uuid(),
      text: "Learn React JS",
      color: 2,
      complete: false,
    },
    {
      id: uuid(),
      text: "Learn Next JS",
      color: 3,
      complete: false,
    },
  ]);

  const [input, setInput] = useState("");
  const [color, setColor] = useState(1);
  const [currentId, setCurrentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = () => {
    if (input) {
      const newList = {
        id: uuid(),
        text: input,
        color: color,
        complete: false,
      };
      setList([ newList, ...list ]);
      setInput("");
    }
  };

  const edit = (text, id) => {
    setColor(list.find((task) => task.id === id).color);
    setInput(text);
    setCurrentId(id);
    setIsEdit(true);
  };

  const update = () => {
    setList((prev) =>
      prev.map((task) => {
        if (task.id === currentId) {
          task.text = input;
          task.color = color;
        }
        return task;
      })
    );
    setIsEdit(false);
    setCurrentId("");
    setInput("");
  };

  const check = (id) => {
    const updateList = list.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });

    setList(updateList);
  };

  const destroy = (id) => {
    const removeList = [...list].filter((task) => task.id !== id);
    setList(removeList);
  };

  const value = {
    list,
    setList,
    input,
    setInput,
    color,
    setColor,
    currentId,
    setCurrentId,
    isEdit,
    setIsEdit,
    handleSubmit,
    edit,
    update,
    check,
    destroy,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
