import { useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter";
import { Timer } from "./component/Timer";

function App() {
	const [show, setShow] = useState(false);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);

	const handleStartTime = () => {
		setShow(!show);
	};
  const reset =()=>{
    setStart(0)
    setEnd(0)
  }
	return (
		<div className="App">
			<Timer handleStartTime={handleStartTime} reset={reset} start={start} end={end} setStart={setStart} setEnd={setEnd} />
			{show ? <Counter start={start} end={end} /> : <h1>no counter</h1>}
		</div>
	);
}

export default App;
