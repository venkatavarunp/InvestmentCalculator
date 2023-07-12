import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import { useState } from "react";

function App() {
  const [userInput, setInput] = useState(null);

  const calculateHandler = (userInput) => {
    setInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <div>
      <Header />
      <Form getValues={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}> No Investment Calculated Yet.</p>
      )}
      {userInput && (
        <Table
          data={yearlyData}
          intialInvestment={userInput["current-savings"]}
        />
      )}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
