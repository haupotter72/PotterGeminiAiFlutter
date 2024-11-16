import React from "react";

function InputControl(props) {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input
        className="rounded-lg bg-gray-500 mt-2 p-2 w-[95%] focus:border-blue-500 focus:bg-green-300 focus:outline-none"
        type="text"
        {...props}
      />
    </div>
  );
}

export default InputControl;
