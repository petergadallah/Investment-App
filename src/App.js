import { useState } from "react";
import Form from "./Components/Form/Form";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";

function App() {
  const [yearlyData, setYearlyData] = useState([]); // per-year results
  const clearData = () => {
    setYearlyData("");
  };
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      setYearlyData((x) => {
        return [
          ...x,
          {
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          },
        ];
      });
    }

    // do something with yearlyData ...
  };
  const sendToApp = (myData) => {
    calculateHandler(myData);
  };
  return (
    <div>
      <Header />
      <Form sendToApp={sendToApp} clearData={clearData} />
      {yearlyData.length > 0 && <Table items={yearlyData} />}
      {yearlyData.length === 0 && <p className="default-text">No data found</p>}
    </div>
  );
}

export default App;
