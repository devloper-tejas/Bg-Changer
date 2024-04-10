//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
//  import './App.css'
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div class="dumb">BG Changer by Tejas</div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-1 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "yellow", color: "white" }}
            >
              yellow
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              purple
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "lavender", color: "black" }}
            >
              Lavender
            </button>

            <button
              onClick={() => setColor("white")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "white", color: "Black" }}
            >
              white
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Black
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-5 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "pink", color: "white" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
