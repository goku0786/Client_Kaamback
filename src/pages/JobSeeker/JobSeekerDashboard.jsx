import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineFilter } from "react-icons/hi";
import { Link } from "react-router-dom";
import money from "../../assets/money.jpg";
import withraw from "../../assets/withdraw.jpg";
import projects from "../../assets/projects.jpg";
import ongoing from "../../assets/ongoing.jpg";

function JobSeekerDashboard() {
  return (
    <div>
      <div className="flex justify-end px-10 pt-5">
        <div className="flex items-center justify-between gap-10 px-5 py-3 bg-white rounded-lg ">
          <Link className="text-3xl">
            <CgProfile />
          </Link>
          <span className="font-semibold hover:underline cursor-pointer">
            <p>Mark Antony</p>
            <p>UI/UX Designer</p>
          </span>
          <Link className="text-3xl">
            <IoNotifications />
          </Link>
        </div>
      </div>
      <div className="p-10 flex flex-col gap-10">
        <span>
          <h1 className="text-2xl font-bold">Hello, Mark Antony</h1>
          <h3 className="text-lg text-gray-500 font-semibold">
            Check your activities in this dashboard
          </h3>
        </span>
        <div className="flex flex-wrap gap-10">
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={money} alt="money" className="w-10" />
            <span>
              <p>Earnings</p>
              <p>Rs.22,000</p>
              <p>+10.80%</p>
            </span>
          </div>
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={withraw} alt="money" className="w-10" />
            <span>
              <p>Withdraw</p>
              <p>Rs.10,000</p>
              <p>+10.80%</p>
            </span>
          </div>
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={projects} alt="money" className="w-10" />
            <span>
              <p>Projects</p>
              <p>10</p>
              <p>+5.80%</p>
            </span>
          </div>
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={ongoing} alt="money" className="w-10" />
            <span>
              <p>Ongoing</p>
              <p>3</p>
              <p>+6.70%</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-white rounded-lg p-5 ml-10 sm:w-4/5">
        <div className="flex justify-between">
          <span className="mb-5">
            <h2 className="text-lg font-semibold">Projects</h2>
            <p className=" text-gray-500 font-semibold"> Overall Projects</p>
          </span>
          <div className="text-3xl">
            <HiOutlineFilter />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-between w-4/6 ">
            <p>Dance Studio -Webpage</p>
            <p>Sriram Sarade</p>
            <p>CEO</p>
          </span>
          <div className="bg-[#041893] px-3 py-1 pt-3 sm:pt-0 sm:w-1/6 text-center text-white rounded-full cursor-pointer">Completed</div>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-between w-4/6 ">
            <p>Dance Studio -Webpage</p>
            <p>Sriram Sarade</p>
            <p>CEO</p>
          </span>
          <div className="border border-[#041893] px-3 py-1 pt-3 sm:pt-0 sm:w-1/6 text-center rounded-full cursor-pointer">Ongoing</div>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
