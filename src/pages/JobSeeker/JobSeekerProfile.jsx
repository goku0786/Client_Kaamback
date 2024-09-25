import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

function JobSeekerProfile() {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-end p-5 gap-2">
        <IoNotifications className="text-2xl cursor-pointer" />
        <CgProfile className="text-3xl  cursor-pointer" />
      </div>
      <div className="p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Edit Profile</h2>
          <span className="flex flex-col items-center justify-center">
            <CgProfile className="text-6xl cursor-pointer" />
            <p className="text-sm cursor-pointer hover:underline">Edit Photo</p>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex flex-col mr-10 gap-1">
            <label htmlFor="name" className="font-semibold">
              Full legal name
            </label>
            <input
              type="text"
              className="outline-none border border-black p-1"
            />
          </span>
          <span className="flex flex-col mr-10 gap-1">
            <label htmlFor="name" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              className="outline-none border border-black p-1"
            />
          </span>
          <div className="flex justify-between items-center">
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                Field of Experience
              </label>
              <input
                type="number"
                className="outline-none border border-black p-1"
              />
            </span>
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                Years of Experinece in Primary Job Interest
              </label>
              <input
                type="text"
                className="outline-none border border-black p-1"
              />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                Country
              </label>
              <input
                type="number"
                className="outline-none border border-black p-1"
              />
            </span>
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                City
              </label>
              <input
                type="text"
                className="outline-none border border-black p-1"
              />
            </span>
          </div>
          <span className="flex flex-col mr-10 gap-1">
            <label htmlFor="name" className="font-semibold">
              Bio
            </label>
            <textarea
              type="text"
              className="outline-none resize-none border border-black p-1 h-16"
            />
          </span>
        </div>
        <button className="mt-6 bg-[#041893] text-white px-3 py-1 rounded-lg">
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default JobSeekerProfile;
