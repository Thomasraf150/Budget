import React, { useState } from "react";
import Input from "./Input";

function Percentages(props) {
	const [chosen, setChosen] = useState(false);
	const [percent, setPercent] = useState("");
	function handleInputChange(e) {
		if (e === "") {
			setChosen(false);
		} else {
			setChosen(true);
		}
		setPercent(e);
	}

	return (
		<div>
			<div className="budget-type">
				<select onChange={(e) => handleInputChange(e.target.value)}>
					<option value="" selected disabled>
						Please Select An Option
					</option>
					<option value="50-30-20">50-30-20</option>
					<option value="60-40">60-40</option>
					<option value="80-20">80-20</option>
					<option value="60-20-20">60-20-20</option>
					<option value="70-20-10">70-20-10</option>
					<option value="custom">Custom</option>
				</select>
			</div>
			<Input chosen={chosen} percent={percent} />
		</div>
	);
}

export default Percentages;
