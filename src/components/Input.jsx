import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Input = () => {
  const { input, setInput } = useContext(AppContext);
  return (
    <>
      <input
        type="text"
        className="border-2 py-3 border-black rounded-lg w-full px-4"
        placeholder="New list"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </>
  );
};

export default Input;
