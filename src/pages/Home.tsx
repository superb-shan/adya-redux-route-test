import React from "react";
// import heroImage from "./hero.jpg"; // Replace with your image path

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-75px)] overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-indigo-500 to-blue-400 blur-sm opacity-70"></div>
      <div className="relative z-10 max-w-md px-8 py-12 bg-white rounded-lg shadow-lg backdrop-blur-lg backdrop-filter backdrop-grayscale-0 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
        {/* <img
          src={heroImage}
          alt="Adya - Powering your React applications"
          className="w-full rounded-t-lg mb-4"
        /> */}

        <h1 className="text-4xl font-bold text-center text-indigo-700">
          Welcome to Adya!
        </h1>

        <p className="text-lg text-gray-600 text-center mt-4">
          Discover the power of Redux and React Router in a stunning new light.
          Build robust and scalable user interfaces with ease.
        </p>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 mr-4 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
            Get Started
          </button>
          <a
            href="#"
            className="px-6 py-2 font-bold text-indigo-700 bg-white rounded border border-indigo-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
