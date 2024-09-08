import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    // console.log("Clicked",counter=counter+1 )
    if (counter < 20) {
      //1 e daffa chalay ga na k 4 dffa kion k usestate data ko patches may deal krta hay
      //jub yeh patch jayega or uss me yeh 1 e activity perform ho rhi hogi 4 dffa to woh isko 1 e consider karega
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)

      //what if agr may 4on dffa execute krwana chahta hn???
      //use effect jo setter method return krta hay uss may ek callback mojod hota hay usse call karo

      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);

      //ap prev counter ki jaga sirf counter b likh skte hein jo mrzi likhen ,
      //prevCounter iss loiye likha k 1 to yeh convention hay dosra readability easy hay k previous state
      //fetch ho k update ho rhi hay
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
