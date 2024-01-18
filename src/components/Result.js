import React from "react";

function Result({ srcCode }) {
  console.log( srcCode ); 
  return (
    <div>
      {srcCode !==
      '' ? (
        <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-white text-center">
            Result
          </h2>
          <iframe
            className="w-full h-60 border border-gray-700 rounded-md"
            srcDoc={srcCode}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      ) : (
        <div className="w-full h-60 bg-[#282c34] p-4 shadow mt-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-white text-center">
            Start Hacking!
          </h2>
        </div>
      )}
    </div>
  );
}

export default Result;
