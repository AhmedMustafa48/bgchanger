import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  return (
    <div
      className="w-[100%] border-1 h-screen"
      style={{ backgroundColor: color }}
    >
      color Here
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-lg">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
