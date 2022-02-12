import React from 'react'

export const Timer = ({ handleStartTime,start,end,setStart,setEnd,reset }) => {
	return (
		<>
			<div>
				<input
					type="text"
					placeholder="start"
					value={start}
					onChange={(e) => setStart(+e.currentTarget.value)}
				/>
				<input
					type="text"
					placeholder="end"
					value={end}
					onChange={(e) => setEnd(+e.currentTarget.value)}
				/>
			</div>
			<div>
                <button onClick={handleStartTime}>start Timer</button>
                <button onClick={reset}>reset</button>
			</div>
		</>
	);
};