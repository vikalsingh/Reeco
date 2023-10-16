// Header.js
import React from "react";

const BottomHeader = () => {
  return (
    <div className="shadow-md bg-white-500 text-black p-4 pl-40 pr-40">
      <div>
        <span className="mr-2 text-gray-400">Orders</span>{" "}
        <span className="mr-2 text-gray-400">></span>
        <span className="mr-2 text-gray-400 underline">Orders 32457ABC</span>
      </div>
      <div className="flex flex-row justify-between bg-white-500 text-black pt-5">
        <span className="mr-10 font-bold text-3xl text-gray-600">
          Orders 32457ABC
        </span>
        <div>
          <button className="hover:text-green-500 text-green-700 border border-green-700 hover:border-green-500 mr-4 font-bold py-1 px-4 rounded-full">
            Back
          </button>
          <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-1 px-4 rounded-full">
            Approve order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
