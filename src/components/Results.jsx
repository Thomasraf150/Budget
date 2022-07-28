import React, { useState } from "react";

function Results(props) {
	// props.results.chosen & props.results.percent & props.value
	const [state, setState] = useState({
		originalValue: "",
		fifty: "",
		thirty: "",
		twenty: "",
		eighty: "",
		ten: "",
		sixty: "",
		seventy: "",
	});

	var fields;

	switch (props.results.percent) {
		case "50-30-20":
			fields = <FiftyThirtyTwenty />;
			break;
		case "80-20":
			fields = <EightyTwenty />;
			break;
		case "60-20-20":
			fields = <SixtyTwentyTwenty />;
			break;
		case "60-40":
			fields = <SixtyFourty />;
			break;
		case "70-20-10":
			fields = <SeventyTwentyTen />;
			break;
		default:
			break;
	}

	function EightyTwenty() {
		var eighty = props.value * 0.8;
		var twenty = props.value * 0.2;
		return (
			<>
				<div className={"results " + (props.value ? null : "hidden")}>
					<section>
						<label>80% = </label>
						<input name="fifth" disabled value={eighty} />
					</section>
					<section>
						<label>20% = </label>
						<input name="thirty" disabled value={twenty} />
					</section>
				</div>
			</>
		);
	}

	function FiftyThirtyTwenty() {
		var fifty = props.value * 0.5;
		var thirty = props.value * 0.3;
		var twenty = props.value * 0.2;
		return (
			<>
				<div className={"results " + (props.value ? null : "hidden")}>
					<section>
						<label>50% = </label>
						<input name="fifth" disabled value={fifty} />
					</section>
					<section>
						<label>30% = </label>
						<input name="thirty" disabled value={thirty} />
					</section>
					<section>
						<label>20% = </label>
						<input name="twenty" disabled value={twenty} />
					</section>
				</div>
			</>
		);
	}

	function SixtyTwentyTwenty() {
		var sixty = props.value * 0.6;
		var twenty = props.value * 0.2;
		return (
			<>
				<div className={"results " + (props.value ? null : "hidden")}>
					<section>
						<label>60% = </label>
						<input name="fifth" disabled value={sixty} />
					</section>
					<section>
						<label>20% = </label>
						<input name="thirty" disabled value={twenty} />
					</section>
					<section>
						<label>20% = </label>
						<input name="thirty" disabled value={twenty} />
					</section>
				</div>
			</>
		);
	}

	function SeventyTwentyTen() {
		var seventy = props.value * 0.7;
		var twenty = props.value * 0.2;
		var ten = props.value * 0.1;
		return (
			<>
				<div className={"results " + (props.value ? null : "hidden")}>
					<section>
						<label>70% = </label>
						<input name="fifth" disabled value={seventy} />
					</section>
					<section>
						<label>20% = </label>
						<input name="thirty" disabled value={twenty} />
					</section>
					<section>
						<label>10% = </label>
						<input name="thirty" disabled value={ten} />
					</section>
				</div>
			</>
		);
	}

	function SixtyFourty() {
		var sixty = props.value * 0.6;
		var fourty = props.value * 0.4;
		return (
			<>
				<div className={"results " + (props.value ? null : "hidden")}>
					<section>
						<label>60% = </label>
						<input name="fifth" disabled value={sixty} />
					</section>
					<section>
						<label>40% = </label>
						<input name="thirty" disabled value={fourty} />
					</section>
				</div>
			</>
		);
	}

	return <div>{fields}</div>;
}

export default Results;
