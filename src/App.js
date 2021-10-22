import "./budget.scss";
import React, { useState } from "react";

function App() {
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
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fiftyThirtyTwentyCalculate = (event) => {
    event.preventDefault();
    var fiftyPercent = state.originalValue * 0.5;
    var thirtyPercent = state.originalValue * 0.3;
    var twentyPercent = state.originalValue * 0.2;
    setState({
      originalValue: state.originalValue,
      fifty: fiftyPercent,
      thirty: thirtyPercent,
      twenty: twentyPercent,
    });
  };

  const eightyTwentyCalculate = (event) => {
    event.preventDefault();
    var eightyPercent = state.originalValue * 0.8;
    var twentyPercent = state.originalValue * 0.2;
    setState({
      originalValue: state.originalValue,
      eighty: eightyPercent,
      twenty: twentyPercent,
    });
  };

  const sixtyTwentyTwentyCalculate = (event) => {
    event.preventDefault();
    var sixtyPercent = state.originalValue * 0.6;
    var twentyPercent = state.originalValue * 0.2;
    setState({
      originalValue: state.originalValue,
      sixty: sixtyPercent,
      twenty: twentyPercent,
    });
  };

  const sixtyFourtyCalculate = (event) => {
    event.preventDefault();
    var sixtyPercent = state.originalValue * 0.6;
    var fourtyPercent = state.originalValue * 0.4;
    setState({
      originalValue: state.originalValue,
      sixty: sixtyPercent,
      fourty: fourtyPercent,
    });
  };

  const seventyTwentyTenCalculate = (event) => {
    event.preventDefault();
    var seventyPercent = state.originalValue * 0.7;
    var twentyPercent = state.originalValue * 0.2;
    var tenPercent = state.originalValue * 0.1;
    setState({
      originalValue: state.originalValue,
      seventy: seventyPercent,
      twenty: twentyPercent,
      ten: tenPercent,
    });
  };

  const handleInputChange = (event) => {
    setValue({ event });
  };

  var fields;
  if (value.event === "50-30-20") {
    fields = <FiftyThirtyTwenty />;
  } else if (value.event === "80-20") {
    fields = <EightyTwenty />;
  } else if (value.event === "60-20-20") {
    fields = <SixtyTwentyTwenty />;
  } else if (value.event === "60-40") {
    fields = <SixtyFourty />;
  } else if (value.event === "70-20-10") {
    fields = <SeventyTwentyTen />;
  }

  function FiftyThirtyTwenty() {
    return (
      <>
        <div className="results">
          <section>
            <label>50% = </label>
            <input name="fifth" disabled value={state.fifty} />
          </section>
          <section>
            <label>30% = </label>
            <input name="thirty" disabled value={state.thirty} />
          </section>
          <section>
            <label>20% = </label>
            <input name="twenty" disabled value={state.twenty} />
          </section>
        </div>

        <div className="calculation-button">
          <input type="button" value="Calculate!" onClick={fiftyThirtyTwentyCalculate} />
        </div>
      </>
    );
  }

  function EightyTwenty() {
    return (
      <>
        <div className="results">
          <section>
            <label>80% = </label>
            <input name="fifth" disabled value={state.eighty} />
          </section>
          <section>
            <label>20% = </label>
            <input name="thirty" disabled value={state.twenty} />
          </section>
        </div>

        <div className="calculation-button">
          <input type="button" value="Calculate!" onClick={eightyTwentyCalculate} />
        </div>
      </>
    );
  }

  function SixtyTwentyTwenty() {
    return (
      <>
        <div className="results">
          <section>
            <label>60% = </label>
            <input name="fifth" disabled value={state.sixty} />
          </section>
          <section>
            <label>20% = </label>
            <input name="thirty" disabled value={state.twenty} />
          </section>
          <section>
            <label>20% = </label>
            <input name="thirty" disabled value={state.twenty} />
          </section>
        </div>

        <div className="calculation-button">
          <input type="button" value="Calculate!" onClick={sixtyTwentyTwentyCalculate} />
        </div>
      </>
    );
  }

  function SeventyTwentyTen() {
    return (
      <>
        <div className="results">
          <section>
            <label>70% = </label>
            <input name="fifth" disabled value={state.seventy} />
          </section>
          <section>
            <label>20% = </label>
            <input name="thirty" disabled value={state.twenty} />
          </section>
          <section>
            <label>10% = </label>
            <input name="thirty" disabled value={state.ten} />
          </section>
        </div>

        <div className="calculation-button">
          <input type="button" value="Calculate!" onClick={seventyTwentyTenCalculate} />
        </div>
      </>
    );
  }

  function SixtyFourty() {
    return (
      <>
        <div className="results">
          <section>
            <label>60% = </label>
            <input name="fifth" disabled value={state.sixty} />
          </section>
          <section>
            <label>40% = </label>
            <input name="thirty" disabled value={state.fourty} />
          </section>
        </div>

        <div className="calculation-button">
          <input type="button" value="Calculate!" onClick={sixtyFourtyCalculate} />
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="app-title">Cruz Calculator</div>

        <div className="budget-type">
          <select onChange={(e) => handleInputChange(e.target.value)}>
            <option value="" selected disabled="disabled">
              Choose your budgeting type!
            </option>
            <option value="50-30-20">50-30-20</option>
            <option value="60-40">60-40</option>
            <option value="80-20">80-20</option>
            <option value="60-20-20">60-20-20</option>
            <option value="70-20-10">70-20-10</option>
          </select>
        </div>

        <div className="input-budget">
          <input placeholder="Amount here!" name="originalValue" type="number" onChange={handleChange} />
        </div>

        {fields}
      </div>
    </div>
  );
}

export default App;
