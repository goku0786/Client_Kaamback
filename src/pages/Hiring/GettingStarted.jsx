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
        <div className="flex gap-7">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="userName" className="font-semibold">
              First name
            </label>
            <input
              type="text"
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="userName" className="font-semibold">
              Middle name
            </label>
            <input
              type="text"
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="userName" className="font-semibold">
              Last name
            </label>
            <input
              type="text"
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
        </div>
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="country" className="font-semibold">
            Birth Date
          </label>
          <input
            type="date"
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <div className="flex gap-7">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="country" className="font-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="city" className="font-semibold">
              Phone Number
            </label>
            <input
              type="number"
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
        </div>
        <div className="flex gap-7">
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
      </div>
      <RadioButtons />
    </div>
  );
}

export default GettingStarted;
