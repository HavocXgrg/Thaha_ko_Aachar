import React from "react";

const NavBar = () => {
  return (
    <div className="w-[60vw] h-20 bg-red-400 top-8 md:ml-70 ml-14 relative">
      <div className="absolute top-0 left-0 flex items-center justify-around w-full p-4">
        <div className="item1 w-20 h-10 bg-blue-400"></div>
        <div className="image-container w-20 h-10 bg-green-400"></div>
        <div className="item2 w-20 h-10 bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default NavBar;
