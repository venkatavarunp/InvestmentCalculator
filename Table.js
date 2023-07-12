const Formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 1,
  maximumFractionDigits: 2
});

const Table = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{Formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{Formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {Formatter.format(
                yearData.savingsEndOfYear -
                  props.intialInvestment -
                  yearData.year
              )}
            </td>
            <td>{Formatter.format(props.intialInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
