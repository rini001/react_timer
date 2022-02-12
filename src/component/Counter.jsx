import React, { useEffect, useState } from "react";

export const Counter = ({ start, end }) => {
	const [counter, setCounter] = useState(start);
	useEffect(() => {
		// console.log("hey Rini");
		const id = setInterval(() => {
			setCounter((value) => {
				if (value < end) {
					return value + 1;
				} else {
					clearInterval(id);
					return value;
				}
                
			});
		}, 1000);
		return () => clearInterval(id);
	},[counter, end]);


	return (
		<>
			<h1>counter: {counter}</h1>
		</>
	);
};