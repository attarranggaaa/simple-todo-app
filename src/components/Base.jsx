import React from "react";

const Base = ({ children }) => {
  return (
    <>
      <div className="bg-biru min-h-screen">
        <div className="container mx-auto flex justify-center py-24 px-3">
          <div className="bg-white border-black border-2 rounded-lg w-[40rem] shadow-[0_5px_0px_rgba(0,0,0)] ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
