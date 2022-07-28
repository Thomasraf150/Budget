import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Results from "./Results";

function Input(props) {
	const [input, setInput] = useState("");
	const [value, setValue] = useState("");

	function handleOnChange(e) {
		const { name, value } = e.target;
		console.log(value);
		setInput(value);
	}

	function handleOnClick(e) {
		setValue(input);
		setInput("");
		e.preventDefault();
	}

	return (
		<div>
			<div className="input-budget">
				<form type="submit">
					<input
						placeholder={props.chosen ? "Amount Here" : "Select Above"}
						name="input"
						value={input}
						onChange={handleOnChange}
						type="number"
						disabled={props.chosen ? false : true}
					/>
					<button
						onClick={handleOnClick}
						disabled={props.chosen ? false : true}
					>
						<i class="fa fa-angle-double-right"></i>
					</button>
				</form>
			</div>
			<Results value={value} results={props} />
		</div>
	);
}

export default Input;
