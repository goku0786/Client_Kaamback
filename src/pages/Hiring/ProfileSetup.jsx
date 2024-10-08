import React from "react";

function ProfileSetup() {
  return (
    <div>
      <h1 className="text-xl font-bold ">Set up your professional profile</h1>
      <h2 className=" font-semibold">Profile Photo</h2>
      <p>
        Please upload a high-quality profile photo. Freelancers with
        professional profile photos are prioritized and see more jobs with
        Kaamback clients.
      </p>
      <div className="flex mt-7 gap-10">
        <div className="h-[250px] w-[250px] bg-gray-300  flex flex-col justify-center items-center rounded-3xl">
          <div className="h-[80px] w-[80px] border-4 border-black rounded-full"></div>
          <div className="h-[100px] w-[200px] border-4 border-b-0 border-black rounded-t-full "></div>
        </div>
        {/* <img src="..." alt="" /> */}
        <div className="flex flex-col gap-5">
          <p className="font-semibold mt-5">
            JPG / PNG file
            <br />
            Minimum resolution: 380x380px
            <br />
            Maximum file size: 10 MB
          </p>
          <input type="file"  className="cursor-pointer"/>
        </div>
      </div>
      <p className="font-semibold mt-5">Resume</p>
      <p>Please upload your resume</p>
      <div className="mt-2 mb-5 flex">
        <input type="file" className="cursor-pointer" />
        <span className="font-semibold">
          <p>PDF file</p>
          <p>Mximum file size: 5MB</p>
        </span>
      </div>
    </div>
  );
}

export default ProfileSetup;
