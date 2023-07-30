export default function Input2(props) {
  return (
    <p>
      <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
      <input
        type="number"
        id="yearly-contribution"
        onChange={props.changeYearlyContribution}
      />
    </p>
  );
}
