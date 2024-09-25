import React from "react";
import { Link } from "react-router-dom";
import JobSeekerDashboard from "./JobSeekerDashboard";
import JobSeekerProfile from "./JobSeekerProfile";

function JobSeekerPage() {
  return (
    <div className="bg-[#041893] h-full lg:h-screen flex">
      <nav className="text-white flex flex-col md:w-1/5 w-2/5 items-center  justify-between ">
        <ul className="flex flex-col text-center w-full gap-5 mt-5 px-5">
          <li className="text-xl font-bold">
            <Link to="/">KaamBack</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893]  py-1 hover:rounded-lg">
            <Link to="/dasboard">Dashboard</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893]  py-1 hover:rounded-lg">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893]  py-1 hover:rounded-lg">
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
        <ul className="flex flex-col text-center w-full px-5 gap-5 mb-10">
          <li className="font-bold hover:bg-white hover:text-[#041893]  py-1 hover:rounded-lg">
            <Link to="/setting">Setting</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893]  py-1 hover:rounded-lg">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full bg-[#EAEBFF] rounded-l-2xl pb-10">
           {/* <JobSeekerDashboard/> */}
           <JobSeekerProfile/>
      </div>
    </div>
  );
}

export default JobSeekerPage;
