import { useState } from "react";

const Form = (props) => {
  const defaultValues = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10
  };
  const [inputValues, setValues] = useState(defaultValues);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getValues(inputValues);
  };

  const resetHandler = (event) => {
    setValues(defaultValues);
  };
  const inputHandler = (input, value) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [input]: +value
      };
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputHandler("current-savings", event.target.value);
            }}
            type="number"
            value={inputValues["current-savings"]}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputHandler("yearly-contribution", event.target.value);
            }}
            type="number"
            value={inputValues["yearly-contribution"]}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputHandler("expected-return", event.target.value);
            }}
            type="number"
            value={inputValues["expected-return"]}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputHandler("duration", event.target.value);
            }}
            type="number"
            value={inputValues["duration"]}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
