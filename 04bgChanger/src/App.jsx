import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColor("red")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"red"}}> Red</button>
        <button onClick={()=>setColor("green")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"green"}}> Green</button>
        <button onClick={()=>setColor("blue")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"blue"}}> Blue</button>
        <button onClick={()=>setColor("black")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"black"}}> Black</button>
        <button onClick={()=>setColor("white")} className="rounded-full shadow-lg text-black px-4 py-1 outline-none" style={{backgroundColor:"white"}}> White</button>
        <button onClick={()=>setColor("orange")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"Orange"}}> Orange</button>
        <button onClick={()=>setColor("pink")} className="rounded-full shadow-lg text-black px-4 py-1 outline-none" style={{backgroundColor:"pink"}}> pink</button>
        <button onClick={()=>setColor("purple")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"purple"}}> purple</button>
        <button onClick={()=>setColor("Yellow")} className="rounded-full shadow-lg text-black px-4 py-1 outline-none" style={{backgroundColor:"Yellow"}}> Yellow</button>
        <button onClick={()=>setColor("grey")} className="rounded-full shadow-lg text-black px-4 py-1 outline-none" style={{backgroundColor:"grey"}}> grey</button>
        <button onClick={()=>setColor("Olive")} className="rounded-full shadow-lg text-white px-4 py-1 outline-none" style={{backgroundColor:"Olive"}}> Olive</button>
        
        </div>
      </div>
    </div>
  );
}

export default App;
