import "./budget.scss";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({ originalValue: "", fifty: "", thirty: "", twenty: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculate = (event) => {
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

  return (
    <div className="App">
      <div className="container">
        <div className="app-title">Cruz Calculator</div>
        <div className="input-budget">
          <label>Please input the amount you want to budget!</label>
          <input name="originalValue" type="number" onChange={handleChange} />
        </div>

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
          <input type="button" value="Calculate!" onClick={calculate} />
        </div>
      </div>
    </div>
  );
}

export default App;

