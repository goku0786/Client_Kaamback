import React from "react";
import topClient from "../assets/top-clients.jpg";
import flexibleWork from "../assets/flexible-work.jpg";
import financialStability from "../assets/financial-stability.jpg";
import GettingStarted from "./GettingStarted";

function ProfessionalExperience() {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="border-b-2 border-gray-500 flex py-5 gap-20 pl-20">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 border border-gray-500 rounded-full "></div>
            <span className="text-lg font-semibold"> Getting started</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 border border-gray-500 rounded-full"></div>
            <span className="text-lg font-semibold">
              {" "}
              Professional Experience
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 border border-gray-500 rounded-full"></div>
            <span className="text-lg font-semibold"> Profile setup</span>
          </div>
        </div>
        <div className="px-10 pt-5">
          <GettingStarted/>
        </div>
      </div>
      <div className="border-l-2 border-gray-500 px-10 pt-10 flex flex-col gap-10 h-screen w-[25%]">
        <div className="flex flex-col  gap-3">
          <img src={topClient} alt="..." className="w-20" />
          <p className="font-bold">Top Clients</p>
          Engage with Fortune 500 companies, big tech firms, Silicon Valley
          startups, and renowned universities.
        </div>
        <div className="flex flex-col  gap-3">
          <img src={flexibleWork} alt="..." className="w-20" />
          <p className="font-bold">Flexible work</p>
          Work remotely whenever you want from almost anywhere in the world.
          Choose from full-time, part-time, or hourly engagements.
        </div>
        <div className="flex flex-col  gap-3">
          <img src={financialStability} alt="..." className="w-20" />
          <p className="font-bold">Financial Stability</p>
          Set your own rate, get access to jobs with guaranteed hours, and make
          the most of continuous opportunities.
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
