import React from "react";


const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-indigo-700">
      <div>
        <h1 className="text-white mt-3">React Movie App</h1>
      </div>
      <div>
        <button
          type="button"
          className="myButton"
        >
          Login
        </button>
        <button
        type="button"
        className="myButton"
        >Register</button>
      </div>
    </div>
  );
};

export default Navbar;
