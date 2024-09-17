import React from "react";
import RadioButtons from "./LanguageChooseButton";

function GettingStarted() {
  return (
    <div>
      <h2 className="text-xl font-bold">
        Welcome to KaamBack. Let's get started!
      </h2>
      <p className="text-gray-600">
        Your application should only take a few minutes. Based on the
        information you provide, our screening team will determine the best path
        for you going forward.
      </p>
      <div className="flex flex-col gap-5 mt-5">
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="userName" className="font-semibold">
            Full legal name
          </label>
          <input
            type="text"
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="country" className="font-semibold">
            Country
          </label>
          <input
            type="text"
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="city" className="font-semibold">
            City
          </label>
          <input
            type="text"
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
      </div>
      <RadioButtons />
      <button className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full">
        Continue
      </button>
    </div>
  );
}

export default GettingStarted;
