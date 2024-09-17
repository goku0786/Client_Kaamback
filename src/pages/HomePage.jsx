import React from 'react';

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Welcome Home</h1>
        <p className="text-gray-700">Hello from Home</p>
      </div>
    </div>
  );
}

export default HomePage;
