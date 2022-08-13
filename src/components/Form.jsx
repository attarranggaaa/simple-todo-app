import Input from "./Input";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Button from "./Button";
import Colors from "./Colors";

const Form = () => {
  const { handleSubmit, update, isEdit } = useContext(AppContext);

  return (
    <>
      <div className="md:p-5 p-3 flex space-x-3 md:space-x-5 border-b-2 border-black">
        <Input />

        {isEdit ? (
          <Button action={update}>Update</Button>
        ) : (
          <Button action={handleSubmit}>Add</Button>
        )}
          <Colors />
      </div>
    </>
  );
};

export default Form;
