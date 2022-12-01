import React from "react";

const Input = ({ change, click, todo, ref }) => {
  return (
    <div>
      <div className="bg-[#140d0d] h-[60vh]">
        <br />
        <input
          onChange={change}
          //   onKeyPress={(e) => e.key === "Enter" && click()}
          type="text"
          placeholder="Create a new todo"
          value={todo}
          ref={ref}
          className="bg-blue p-2 w-[35%] absolute bottom-[70%] left-[33%]"
        />
      </div>
    </div>
  );
};

export default Input;
