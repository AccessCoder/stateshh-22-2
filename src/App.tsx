import React, {useState} from 'react';
import './App.css';

function App() {

    //    value, function
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");


const onButtonPress = () => {
    setCount(count+1);
    let fakeCount = count+1;
    console.log("count = " + fakeCount)
}

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={onButtonPress}>Click me!</button>
        <input onChange={(event) => setData(event.target.value)}></input>
        <h1>{data}</h1>
    </div>
  );
}

export default App;
