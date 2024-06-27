import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-8">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">
        About Adya
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-md">
        Adya is a powerful Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ab corporis labore consequuntur ex omnis culpa? Possimus,
        blanditiis quia consequuntur sunt obcaecati dolorem temporibus soluta
        sapiente non odit delectus, culpa ratione.
      </p>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="px-6 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
        >
          Learn More
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-center">
            Blazing Fast Development
          </h3>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod magna at magna pulvinar, rutrum molestie magna dapibus.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-center">
            Type Safety with TypeScript
          </h3>
          <p className="text-gray-600 text-center">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare
            sem lacinia quam venenatis vestibulum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
