import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="h-screen w-full " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 rounded-xl text-white bg-red-600"
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-xl text-white bg-blue-700"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-xl text-white bg-green-600"
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-xl text-white bg-pink-500"
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 rounded-xl text-white bg-gray-600"
            onClick={() => setColor("Gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
